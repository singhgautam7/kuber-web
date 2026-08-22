# Migration Plan — GitHub Pages → Cloudflare Pages

**Scope:** Deployment infrastructure only. No application/UI code changes. Every performance guarantee is preserved.

Status: **awaiting your confirmation before implementing.**

---

## 0. Required-reading findings (current state)

| Thing | Current value | Implication |
|---|---|---|
| `astro.config.mjs` `site` | `https://singhgautam7.github.io` | GitHub Pages origin — must change |
| `astro.config.mjs` `base` | `/kuber-web` | **GitHub-Pages-only.** Remove for Cloudflare |
| URL structure | Project site: `https://singhgautam7.github.io/kuber-web/` | Subpath. Cloudflare serves at **root** `/` |
| Custom domain | **None** (no `public/CNAME`) | Cloudflare default will be `*.pages.dev` |
| Package manager | Bun **1.3.9**, lockfile is **`bun.lock`** (text format) | ✅ committed, ✅ not gitignored. **No `bun.lockb`** — Cloudflare auto-detects Bun from `bun.lock` |
| Build script | `bun run build` → runs `gen:tokens` then `astro build` | ✅ Works as-is on Cloudflare |
| `"type": "module"` | Already present | ✅ No change |
| Astro output | `static` (default; no adapter) | ✅ Correct for Cloudflare Pages |
| `public/.nojekyll` | Present | GitHub-Pages-only (stops Jekyll stripping `_astro/`). Harmless on Cloudflare — **keep for rollback** |
| Workflow | `.github/workflows/deploy.yml` triggers on push to `main` + `workflow_dispatch` | Deploy step must be paused |

### Is the app code base-path-coupled? — No.
`src/lib/url.ts` reads `import.meta.env.BASE_URL` and builds every internal link/asset from it (`src/lib/screenshots.ts` too). When `base` is removed, `BASE_URL` becomes `/` and every helper output collapses from `/kuber-web/…` to `/…` automatically. **Zero component edits required.** This is why the migration is config-only.

---

## 1. Rendering-difference diagnosis (done against the LIVE GitHub Pages site)

You flagged local-vs-deployed rendering differences. I checked the live deploy before assuming Cloudflare fixes anything:

- `GET https://singhgautam7.github.io/kuber-web/` → **200**
- Stylesheets: `/kuber-web/_astro/BaseLayout.BNIHnOup.css`, `/kuber-web/_astro/index.bVROGKTN.css` → **200** (no 404s)
- `<meta name="viewport" content="width=device-width, initial-scale=1">` → correct
- No stray `<base>` tag; assets use base-prefixed absolute paths that resolve correctly
- Fonts are self-hosted via `@fontsource*`, bundled into `_astro/` (same 200 origin as CSS). No Google Fonts CDN, so no CSP/CDN failure path exists.

**Conclusion: there is no base-path, 404, font, or viewport bug on the deployed site.** The most likely source of any "looks different than local" impression is the **intentional fluid typography** added on 2026-08-18 — `--fs-*` tokens and `--k-maxw: clamp(1160px, 92vw, 1400px)` scale with **viewport width**. Identical rendering therefore requires an identical browser width; a laptop vs. a large monitor will legitimately differ. This is by design, not a config fault.

**Implication for the migration:** Cloudflare Pages will **not** change rendering, because there is nothing broken to fix. Removing the base path does not alter layout either (assets already resolve today). I'll set expectations accordingly rather than promising a visual change. If, after deploy, a genuine pixel difference remains at the *same viewport width*, that's a separate investigation outside this infra task.

---

## 2. Changes to implement (on your go-ahead)

### 2.1 `astro.config.mjs`
- **Remove** `base: '/kuber-web'` (and the `BASE` const + the GitHub-Pages comment block).
- **Change** `site` from `https://singhgautam7.github.io` to the Cloudflare URL. Default plan: **`https://kuber-web.pages.dev`** as a placeholder (see Decision A). `site` drives canonical + OG + sitemap URLs, so it must be the real production origin.
- Keep `trailingSlash: 'ignore'`, `build.format: 'directory'`, sitemap integration, markdown config — all host-agnostic.

### 2.2 Pause GitHub Pages deploys — **rename approach** (recommended)
- Rename `.github/workflows/deploy.yml` → `.github/workflows/deploy-github-pages.yml.disabled`.
- Add a header comment: paused pending Cloudflare migration + one-line rollback instructions.
- **Why rename over "workflow_dispatch-only":** a `.disabled` file is not a valid workflow, so GitHub cannot run it automatically *or* be triggered by accident, yet the full YAML is preserved verbatim. Rollback is a one-line rename. The trigger-only variant leaves a live, manually-runnable workflow that could re-publish the stale GH Pages site by mistake. Rename is the cleaner "fully paused, easily reversible" state.
- **Note:** this workflow only *deploys*; it does no linting/type-checking that we'd lose. There is currently **no PR CI** (no separate check workflow). So nothing CI-worth-keeping is removed. (Optional future add: a `bun run check` PR workflow — out of scope here unless you want it.)

### 2.3 `public/_headers` (new)
Cloudflare Pages reads `_headers` from the build output. Note the correct hashed-asset path is **`/_astro/*`** (not `/assets/*` — `public/assets/` holds *unhashed* bank logos/icons and must NOT get an immutable year-long cache).

```
/_astro/*
  Cache-Control: public, max-age=31536000, immutable

/*
  Cache-Control: public, max-age=3600
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: interest-cohort=()
```
(The `/*` block applies security headers site-wide and a 1-hour HTML cache; the more specific `/_astro/*` block wins for hashed files.)

### 2.4 `public/_redirects` (new, minimal)
No redirect is strictly required (GitHub Pages stays live as a mirror — Decision B). One defensive rule so an old `/kuber-web/…` path typed against the new host still lands:
```
/kuber-web/*  /:splat  301
```
`wrangler.toml` is **not** needed — there are no Pages Functions, no bindings. Skipping it keeps config minimal.

### 2.5 `public/robots.txt`
Update the `Sitemap:` line from the GH Pages URL to the new `site` origin (placeholder until confirmed):
```
Sitemap: https://kuber-web.pages.dev/sitemap-index.xml
```

### 2.6 `.gitignore`
- Add `.wrangler/` (in case wrangler CLI is ever run locally).
- `dist/` and `.astro/` already ignored ✅.
- `bun.lock` is **not** ignored and **is** committed ✅ — required for Cloudflare to detect Bun. No change needed.

### 2.7 `package.json`
No change required. `type: module` present, `build` script correct, versions compatible. (Optional: pin Bun via a `"packageManager"`/engines field — I'd leave it; Cloudflare auto-detects from `bun.lock`.)

### 2.8 `README.md`
- Replace **"Deploy notes (GitHub Pages)"** with **"Deploy notes (Cloudflare Pages)"**: dashboard-connected (not workflow-driven), build config table, preview deployments, custom-domain placeholder, and rollback (rename `.disabled` → `.yml`).
- Add **"Cloudflare Pages Setup — First Time"** with your step-by-step dashboard checklist.
- Update the **Local development** section: after base removal the dev server serves at **`http://localhost:4321/`** (not `/kuber-web/`). Fix the two references.
- Update the Lighthouse command URL to `http://localhost:4321/`.
- Update the top-of-file "Deploys to GitHub Pages" line.

---

## 3. Cloudflare dashboard build config (goes in README verbatim)
| Field | Value |
|---|---|
| Framework preset | Astro |
| Build command | `bun run build` |
| Build output directory | `dist` |
| Root directory | *(empty)* |
| Environment variables | *(none)* |
| Bun version | auto-detected from `bun.lock` (latest stable) |

Preview deployments: automatic on every non-production branch/PR push. Production: `main`.

---

## 4. Redirect / mirror strategy
- **GitHub Pages stays live as a mirror** initially (workflow only *paused*, not deleted; last-built `dist` remains published until you turn Pages off in repo settings). Low risk, instant rollback.
- No cross-host redirect from GH Pages → Cloudflare is added automatically (GitHub Pages can't do server redirects; only a meta-refresh HTML shim could, which is optional and out of scope). Bookmarks to the old subpath keep working against the mirror.
- Cloudflare side carries the defensive `/kuber-web/*` → `/:splat` rule (2.4).

---

## 5. Risk to `specs/performance.md`
**`specs/performance.md` does not exist in this repo.** `specs/` contains only `specs/design/`. So there is nothing to preserve or break there. The performance *guarantees* I'm holding to (from the project memory / Lighthouse 100/96/100/100) are protected because: build output is byte-for-byte the same Astro `dist`, assets stay hashed+immutable-cached, fonts stay self-hosted, no render-blocking changes. **→ Decision C: did you mean a different file, or should this reference just be dropped?**

---

## 6. Testing before finalizing
1. `bun run build` succeeds locally (base removed).
2. `bun run preview` → verify rendering matches `bun run dev` at `localhost:4321/`.
3. Grep the built `dist/` to confirm **no** `/kuber-web/` paths remain and internal links are root-relative.
4. (You) Deploy via dashboard; compare Cloudflare render vs local at the same viewport width.
5. (You) Lighthouse on the `.pages.dev` URL — expect 95+ across all four.
6. (You) Real-device mobile, theme switcher, all internal links, OG/meta via opengraph.xyz.

---

## 7. Decisions I need from you
- **A — Production URL:** ship with placeholder `https://kuber-web.pages.dev` (you update `site` + `robots.txt` after first deploy), or do you already have a custom domain to bake in now?
- **B — Mirror vs. redirect:** keep GitHub Pages live as a fallback mirror for a few weeks (my default), or fully cut over?
- **C — `specs/performance.md`:** it doesn't exist — confirm I can treat that requirement as N/A (or point me at the real file).
- **D — Pause method:** rename to `.disabled` (my recommendation) vs. strip the `push` trigger to keep it manually runnable. OK to rename?

Nothing is implemented yet. Confirm (and answer A–D) and I'll make the changes.
