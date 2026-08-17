# Kuber Web — Implementation Plan

Fresh Astro implementation of the design handoff at
`specs/design/scoping-form-questions/`. The 8 `.dc.html` prototypes plus
`kuber-theme.js` are the source of truth for layout, tokens, copy, and
interaction. This plan maps every design element to an Astro implementation and
surfaces every open decision for your sign-off **before any code is written**.

---

## 0. What I read

- All 8 design prototypes: `Homepage`, `Features`, `Feature-Detail`, `Docs`,
  `Changelog`, `About`, `Press`, `404` (`.dc.html`).
- `kuber-theme.js` — the 14-palette token system, `applyTheme`, `readPref`,
  `savePref`, `deepShade`, `hexToRgba`.
- App repo: `README.md`, `PRIVACY_POLICY.md`, `CHANGELOG.md`, `LICENSE.md`.

The `.dc.html` files are React-like prototypes (a framework called "DC"). Per
the handoff README, I recreate the **visual output** in Astro, not the
prototype's internal component structure.

---

## 1. Pages and routes

| # | Design file | Route | Astro file | Data source |
|---|---|---|---|---|
| 1 | `Homepage.dc.html` | `/` | `src/pages/index.astro` | config + features collection (signature) |
| 2 | `Features.dc.html` | `/features/` | `src/pages/features/index.astro` | features collection |
| 3 | `Feature-Detail.dc.html` | `/features/[slug]/` | `src/pages/features/[slug].astro` | features collection + screenshot glob |
| 4 | `Docs.dc.html` | `/docs/[slug]/` | `src/pages/docs/[slug].astro` | docs collection |
| 5 | `Changelog.dc.html` | `/changelog/` | `src/pages/changelog.astro` | changelog collection |
| 6 | `About.dc.html` | `/about/` | `src/pages/about.astro` | pages collection (`about.md`) |
| 7 | `Press.dc.html` | `/press/` | `src/pages/press.astro` | pages collection (`press-kit.md`) + config |
| 8 | `404.dc.html` | `/404` | `src/pages/404.astro` | static |

Notes:
- The design has no standalone `/docs` index; the "Docs" nav link points at the
  Privacy Policy in the prototype. **Decision D1** (below) covers this.
- Feature detail pages are fully dynamic — one per `.md` in `content/features/`.
- Trailing-slash: Astro default `directory` format (GitHub Pages friendly).

---

## 2. Component inventory (design → Astro)

Every prototype repeats the same nav, mobile drawer, theme dropdown, and footer
inline. I will factor these into shared components:

| Component | Purpose | Interactivity |
|---|---|---|
| `BaseLayout.astro` | `<head>`, fonts, token CSS, FOUC script, skip link, slotted nav+footer | — |
| `PageLayout.astro` | marketing wrapper (max-width 1160, nav + footer) | — |
| `DocLayout.astro` | docs wrapper (TOC sidebar + article, 1060 grid) | — |
| `NavBar.astro` | sticky logo + links + theme switcher + hamburger | vanilla JS island |
| `Footer.astro` | multi-column (home) / compact (subpages) footer, build-time "last updated" | — |
| `ThemeSwitcher.astro` | pill button + dropdown (light/dark + 7 families); mobile chip row | vanilla JS |
| `MobileNav.astro` | full-screen drawer | vanilla JS (shared toggle) |
| `BrandMark.astro` | the SVG logo (rect tile + accent circle + rupee glyph), size prop | — |
| `PlayStoreBadge.astro` | official Google Play badge → `config.playStoreUrl` | — |
| `FeatureCard.astro` | icon + badge (Free/Pro/Beta) + name + desc; signature variant | — |
| `FeatureIcon.astro` | inline SVG icon by `iconName` (icon registry in `src/lib/icons.ts`) | — |
| `Badge.astro` | Free / Pro / Beta / Signature pills (exact token styles from design) | — |
| `Screenshot.astro` | phone-frame or raw image, theme-variant picker, WebP+PNG | CSS/JS variant swap |
| `PhoneFrame.astro` | the 288/266/238px rounded phone bezel wrapper | — |
| `PromoBanner.astro` | homepage-only, renders when `config.currentPromo` set, copy-code button | vanilla JS |
| `FilterChips.astro` | All/Free/Pro/Signature chips on `/features` | vanilla JS |
| `Callout.astro` | info / warning / success boxes (used in docs + feature detail) | — |
| `CopyButton.astro` | copy-to-clipboard (promo code, boilerplate) | vanilla JS |
| `MarkdownContent.astro` | styled prose wrapper for rendered markdown bodies | — |
| `Seo.astro` | title, description, canonical, OG, Twitter tags | — |
| `RevealEmail.astro` | obfuscated email reveal (About page) | vanilla JS |

### Homepage-specific sections (built inline in `index.astro`)
Hero (headline + phone mock of Home tab), Trust row, Feature grid (6 cards),
Signature strip (horizontal scroll), Theme showcase (live-recoloring History
phone mock + theme cards), Numbers band + bank logos row, Developer story card,
Testimonials (placeholder), CTA, multi-column footer. The two phone mockups are
static markup (pure token-driven SVG/CSS) copied faithfully from the design.

---

## 3. Theme token system

Extracted 1:1 from `kuber-theme.js`. **7 families × 2 modes = 14 palettes.**

Families: `signature` (Blue), `flewtube` (Red), `woofsapp` (Green),
`purrhub` (Yellow), `honkpe` (Purple), `squeakdin` (Navy), `oinkzon` (Orange).
Modes: `dark` (Obsidian) / `light` (Alabaster).

**Base tokens per palette** (stored): `bg, card, muted, border, borderMuted,
text, textSec, accent, onAccent, accentText, income, expense, warning`.

**Derived tokens** (computed, matching the JS exactly):
- `--k-accent-subtle` = accent @ 10% (light) / 14% (dark)
- `--k-accent-ring` = accent @ 24% (light) / 30% (dark)
- `--k-income-subtle`, `--k-expense-subtle` = same 10/14 rule
- `--k-tile` = `deepShade(accent)` (HSL sat×0.85, L=0.26)

CSS custom-property names (unchanged from design): `--k-bg --k-card --k-muted
--k-border --k-border-muted --k-text --k-text-sec --k-accent --k-accent-subtle
--k-accent-ring --k-on-accent --k-accent-text --k-income --k-income-subtle
--k-expense --k-expense-subtle --k-warning --k-tile`.

### Implementation
- `src/styles/tokens.css` emits all 14 palettes **at build time** from a single
  TS source (`src/lib/theme.ts` holding the palette data + `deepShade`/`hexToRgba`
  ports), so the values live in one place and the derived tokens are never
  hand-typed. Selectors: `:root[data-theme="signature"][data-mode="dark"] { … }`.
- Bare `:root` = signature + dark (the design default), so the very first paint
  is correct with zero JS.
- Non-color tokens (radii, spacing, type scale) added as `--k-radius-*`,
  `--k-space-*`, `--k-fs-*`. The design uses literal px values inline; I will
  keep the exact px values but expose the recurring ones as tokens for
  consistency. Font stacks: Inter (400–900), Playfair Display (italic
  500/600/700), JetBrains Mono (500/600).

### FOUC prevention
A tiny inline `<script>` in `<head>` (before body) reads `localStorage`
(`kuber-theme-variant`, `kuber-theme-mode`), falls back to
`prefers-color-scheme` for mode when unset, and sets `data-theme`/`data-mode` +
`color-scheme` on `<html>` synchronously. Because palettes are pure CSS, no
inline style injection is needed (the design injected inline styles via JS; I
improve on it with static CSS + attribute switching → no flash, less JS).

---

## 4. Content collection schemas (`src/content/config.ts`)

Zod schemas, type-checked at build; malformed frontmatter fails the build.

**features**
```
title: string
slug: string                 # must match filename (validated)
category: enum               # see Decision D2
order: number
description: string          # one-line card copy
pro: boolean = false
signature: boolean = false
beta: boolean = false        # design shows a Beta badge (Ask Kuber, Voice) — added
related: string[]?           # feature slugs
iconName: string?            # key into icon registry
```
Badge shown on cards is derived: `beta ? "Beta" : pro ? "Pro" : "Free"`
(matches the design's three-badge system exactly).

**docs**
```
title: string
slug: string
order: number?
last_updated: date?
toc: boolean = true
```

**pages**
```
title: string
slug: string
```

**changelog**
```
title: string
date: date                   # ISO
version: string?
summary: string?             # lead paragraph (design has one)
latest: boolean = false      # design flags the newest with a LATEST pill
points: string[]?            # or authored in the markdown body — Decision D3
```

---

## 5. Auto-discovery

1. **Markdown** — `getCollection()` drives every list and detail page. Drop a
   `.md` into `content/features/` → it appears on `/features` (ordered by
   `order`) and gets `/features/<slug>/`. Same for docs and changelog. Docs also
   auto-populate any docs nav/list ordered by `order`. Zero code changes.
2. **Screenshots** — `src/lib/screenshots.ts` uses `import.meta.glob(
   '/public/screenshots/features/**/*.{png,webp}', { eager: true })` at build
   time. For a given feature slug it returns the files in that folder, sorted by
   filename (so `01-`, `02-` prefixes order them). Attached to the feature page
   via `getStaticPaths`. Adding an image = it shows up, no code change.
3. **Theme variants** — filenames may carry `-obsidian` / `-alabaster` suffixes.
   `screenshots.ts` groups by base name (strip suffix) into
   `{ base, obsidian?, alabaster? }`. `Screenshot.astro` renders both when
   present and shows the one matching `data-mode` via CSS
   (`:root[data-mode="light"] .shot-alabaster { display:block }` etc.); if only
   one variant exists it is used for both modes. This needs **no per-image JS** —
   the mode attribute on `<html>` drives pure CSS visibility. See Decision D4 for
   the Astro-image nuance.

---

## 6. Images

- Astro `<Image>` / `astro:assets` for WebP generation with PNG fallback via
  `<picture>`. Hero + first-fold images `loading="eager"`, everything else lazy.
- **Wrinkle:** `astro:assets` optimizes images under `src/`, but the spec puts
  screenshots in `public/screenshots/…` (so you can drop files in without
  imports). Public files are **not** processed by `astro:assets`.
  **Decision D4:** either (a) keep screenshots in `public/` and serve them as-is
  (simplest, true drop-in, but no auto-WebP), or (b) move the screenshot root to
  `src/screenshots/` and glob+optimize them (auto-WebP, still drop-in via glob,
  but not under `public/`). I recommend **(b)** for the Lighthouse target, with
  the folder documented as the drop location. Awaiting your call.

---

## 7. Interactivity — no UI framework

Everything the design does is achievable with **vanilla JS in Astro `<script>`
tags** (module scripts, one small shared theme controller). No React/Preact/Vue.
Justification: the only stateful widgets are theme switch, mobile drawer,
filter chips, copy buttons, and email reveal — all trivial DOM toggles driven by
`data-*` attributes. Adding Preact would cost bundle weight against the 95+
Performance target for zero benefit. **I will not add any UI framework.** (If you
later want the theme dropdown to be a hydrated component, Preact is the fallback,
but it is not needed.)

Client JS budget (all tiny, deferred, non-blocking):
`theme.ts` (~1.5KB), `nav.ts` (drawer + sticky), `filter.ts` (features chips),
`clipboard.ts` (copy buttons), `reveal-email.ts`.

---

## 8. SEO / meta

- `@astrojs/sitemap` → `sitemap-index.xml`, all routes.
- `public/robots.txt` — allow all + sitemap URL.
- `Seo.astro` on every page: `<title>`, description, canonical, OG
  (title/description/image/url/type), Twitter `summary_large_image`.
- Default OG image: a hero shot from `public/screenshots/hero/` (**Decision D5** —
  exact filename; the design references no OG asset, so I will define
  `hero/og-default.png` and document it). Feature pages use their first
  screenshot; when none exists, fall back to the default.
- `site` in `astro.config.mjs` set to the GitHub Pages URL (**Decision D6** —
  need the final URL / custom domain to set `site` + `base` correctly).

---

## 9. Performance (Lighthouse 95+ × 4 on `/`)

- Self-host Inter, Playfair Display, JetBrains Mono via `@fontsource*` (or
  `@fontsource-variable/inter`); **no Google Fonts CDN**. Preload the two
  above-the-fold weights. `font-display: swap`.
- Static CSS tokens (no runtime style injection) → no layout thrash.
- Critical CSS is small and inlined by Astro per-page; defer the rest.
- Lazy-load below-the-fold images; compress; WebP.
- Minimal deferred JS (section 7).
- Target: `<500KB` excl. hero, `<1MB` incl. hero. **Risk R1** (below).

---

## 10. Accessibility

- Semantic landmarks (`header/nav/main/footer`), one `<h1>` per page, ordered
  headings. Skip-to-main link. Visible focus rings (design has none — I will add
  token-based `:focus-visible` outlines without altering the visual language).
- Theme dropdown + hamburger: `aria-expanded`, `aria-controls`, `role`,
  keyboard (Esc to close, arrow nav in the theme list), focus trap in the mobile
  drawer.
- Build-time alt-text guard: fail the build if a feature/hero screenshot lacks
  alt. **Contrast risk across 14 palettes = Risk R2.**

---

## 11. GitHub Pages deploy (`.github/workflows/deploy.yml`)

- Trigger: push to `main`. Permissions `pages: write`, `id-token: write`.
- `oven-sh/setup-bun` → `bun install --frozen-lockfile` → `bun run build`.
- Cache `~/.bun/install/cache` keyed on `bun.lockb`.
- Upload `dist/` via `actions/upload-pages-artifact` → `actions/deploy-pages@v4`.
- `astro.config.mjs` `site`/`base` per Decision D6.
- README documents: enable Pages → Source: GitHub Actions; placeholder CNAME
  section for a future custom domain.

---

## 12. Initial content to populate

- **26 feature `.md` files** per the requested folder list, frontmatter filled
  from the design's badge data where a feature exists there, inferred otherwise
  (see Decision D2 for the mapping + Pro-status questions), 2–3 sentence bodies.
- **docs:** `privacy-policy.md` (verbatim from app `PRIVACY_POLICY.md`),
  `data-deletion.md` (clean offline-app template), `faq.md` (short seed).
- **pages:** `about.md`, `developer.md`, `press-kit.md` (copy from design).
- **changelog:** one entry for the Kuber Pro launch dated **2026-08** (today is
  2026-08-17), file `content/changelog/2026-08-kuber-pro-launch.md`. Note: the
  design's changelog dates the Pro launch "March 2026, v5.1.0+53"; the brief says
  use **today's** month. **Decision D7** reconciles this.

---

## 13. Repo setup deliverables

`package.json`, `tsconfig.json` (strict), `astro.config.mjs`, `bunfig.toml`,
`.gitignore` (node_modules, .astro, dist), `README.md` (dev/content/deploy/
Lighthouse/theme docs), `LICENSE` (MIT — matches app repo), `src/config.ts`
(single source: siteTitle, siteDescription, playStoreUrl, githubUrl,
developerName, developerEmail obfuscated, portfolioUrl, currentPromo).

`src/config.ts` seed values (from design + app repo):
- playStoreUrl `https://play.google.com/store/apps/details?id=com.grs.kuber`
- githubUrl `https://github.com/singhgautam7/Kuber/`
- developerName `Gautam Rajeev Singh`, portfolio `https://www.singhgautam.com/`
- developerEmail — **Decision D8** (the design only shows a masked
  `hello [at] singhgautam.com`; I need the real address, or I ship that mask).
- currentPromo `{ code: "KUBERLAUNCH", description: "…", expiresOn: <date?> }` —
  seeded from the `KUBERLAUNCH` code in the Feature-Detail design.

---

## Global rules I will hold to
No em dashes in user-facing copy. ₹ + Indian digit grouping. Warm, plain English,
no fluff. Mobile-first, works at 360px. No analytics/cookies/trackers. All
content in-repo.

---

## Open decisions (need your answers before I build)

**D1 — Docs index / nav target.** The design's "Docs" nav link opens the Privacy
Policy directly (no docs landing page). Options: (a) point "Docs" at
`/docs/privacy-policy/` like the design; (b) add a small `/docs/` index listing
all docs. Recommend **(a)** to match the design exactly. Which?

**D2 — Feature set, categories, and Pro flags.** The design's `/features` page
defines **18** features with exact badges. The requested folder list has **26**
slugs. I need to (i) confirm the `category` enum values and (ii) confirm Pro
status for the extras not in the design. Proposed reconciliation:

*From the design (authoritative badges):* Expense Tracking=Free, Ask Kuber=Beta,
SMS Import=Pro, Kuber Cards=Pro, Kuber Notes=Pro, Voice Quick Add=Beta, Powerful
Filtering=Free, Smart Analytics=Pro, Smart Insights=Pro, Accounts=Free,
Budgets=Free, Recurring=Free, Reminders=Pro, Home Widgets=Free, Calculators=Free,
Multi-currency=Pro, Backup & Restore=Pro, Lend/Borrow=Free.

*Requested slugs not explicitly in the design* — my proposed Pro flags (please
confirm/correct): `quick-add`=Free, `themes`=Pro (changelog: accent families are
Pro, Signature free), `dev-mode`=Free, `privacy-mode`=Free, `biometrics`=Free,
`shortcuts`=Free, `upcoming-events`=Free, `loans`=Free, `investments`=Free,
`import-export`=Pro (maps to Backup & Restore), `advanced-analytics`=Pro (=Smart
Analytics), `automatic-backups`=Pro, `money-stories`=Free, `reminders`=Pro,
`pro-plans`=(not a feature — a pricing page? see below).
The changelog names **9 gated Pro features**: SMS Import, Advanced Analytics,
Kuber Notes, Kuber Cards, Reminders, automatic backups, Multi-currency, accent
themes (+1). I'll align to that. **Proposed `category` enum:** `Tracking`,
`Insights`, `Money`, `Privacy & Security`, `Personalization`, `Productivity`,
`Data`. OK, or give me your categories?
Also: `pro-plans.md` — is that a **feature** card or should it be a
pricing/plans doc? And do you want all 26, or should the site show only the 18
from the design (the extra 8 becoming detail-only pages)?

**D3 — Changelog body vs frontmatter.** Store the bullet `points` as frontmatter
arrays (structured, matches the design's rendering) or author them as the
markdown body? Recommend **frontmatter `summary` + `points[]`** to reproduce the
design's two-column layout exactly. OK?

**D4 — Screenshot location (auto-WebP vs pure public drop-in).** See §6.
Recommend moving the screenshot root under `src/` so Astro generates WebP (helps
Lighthouse) while staying drop-in via glob. Accept, or keep them in `public/`
un-optimized?

**D5 — Default OG image.** No OG asset exists in the design. I'll add
`hero/og-default.png` (1200×630, on-brand). Do you have one, or should I generate
a placeholder to swap later?

**D6 — Deploy URL / custom domain.** What is the repo name and will it be a
project site (`https://<user>.github.io/<repo>/`, needs `base`) or a user site /
custom domain (root, no `base`)? I need this to set `site` and `base` correctly.

**D7 — Changelog launch date.** Brief says date the Pro launch entry **today**
(Aug 2026); the design dates it **March 2026 (v5.1.0+53)**, and the app repo
CHANGELOG uses `5.1.0+53`. Use today's date with version `5.1.0+53`, or keep the
design's March 2026 date? Recommend **today (2026-08-17), version 5.1.0+53** per
the brief, and carry the older entries (Personalization, Ask Kuber, Analytics)
from the design as history.

**D8 — Developer email.** The design masks it as `hello [at] singhgautam.com`.
Give me the real address to obfuscate at render time, or I ship exactly that mask.

**D9 — App name spelling.** App repo README says "Kubera"; the entire website
design says "Kuber" (and store id is `com.grs.kuber`). I'll use **Kuber**
everywhere per the design. Flagging in case "Kubera" is intended anywhere.

**D10 — Testimonials & stats.** The homepage shows placeholder testimonials and
hard numbers (6,000+ transactions, 20+ banks, 5 languages, 12+ widgets, 13
calculators). I'll reproduce the design's copy verbatim as placeholders. Confirm
those numbers are OK to publish as-is.

---

## Risks to the Lighthouse targets

- **R1 (Performance):** Three font families (Inter, Playfair, JetBrains Mono)
  plus phone-mock SVGs. Mitigation: subset + preload only above-fold weights,
  self-host, WebP screenshots, defer all JS. Phone mockups are inline
  SVG/CSS (no image weight). Confident in 95+ if screenshots are optimized (ties
  to D4).
- **R2 (Accessibility contrast):** 14 palettes; some accent-on-subtle text
  combos (e.g. yellow `purrhub` light, `--k-accent-text` on `--k-accent-subtle`)
  may fail WCAG AA. Mitigation: I will audit all 14 and, where a combo fails,
  nudge only the `accentText` token for that palette (the design already uses a
  darker `accentText` for light modes, e.g. purrhub `#A16207`). Any change from
  the traced values will be listed in the final report.
- **R3 (Best Practices):** trivial once there are no CDN requests, no console
  errors, and images are sized. Low risk.

---

## Build order (once approved)

1. Scaffold repo (config, tsconfig, bunfig, gitignore, fonts).
2. Tokens (`theme.ts` → `tokens.css`) + global/reset/typography CSS + FOUC script.
3. Shared components (BaseLayout, NavBar, Footer, ThemeSwitcher, BrandMark, etc.).
4. Content collections + schemas + seed all markdown.
5. `screenshots.ts` + `Screenshot`/`PhoneFrame`.
6. Pages in design order: Homepage → Features → Feature-Detail → Docs →
   Changelog → About → Press → 404.
7. SEO/sitemap/robots, PromoBanner wiring.
8. Deploy workflow + README + LICENSE.
9. Verify: build clean, 14 theme×mode combos, drop-in tests, links, sitemap,
   Lighthouse, 360px, contrast. Report deviations.

**I will not start implementation until you confirm this plan and answer the open
decisions (especially D2, D4, D6).**
