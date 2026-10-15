# Web v1 · Page inventory

Source: the attached Astro repo (`src/pages`, `content/*`, `public/_redirects`). Every route the build emits, its page type, and what Web v1 changes. Frames: see the board ids.

## Routes

| Route | Source | Page type | Board | What changes |
|---|---|---|---|---|
| `/` | `pages/index.astro` | Home | Web v1 Home (H1 to H4), prototype | New order (hero, trust, Why Kuber, Signature, Themes, Numbers, Banks, developer, CTA). "What Kuber does" grid removed (Why Kuber replaces it, so Voice Add now appears once, in Signature). Placeholder reviews removed and kept hidden (H4). Live HTML mockups replace HeroPhone and ShowcasePhone. Bank logos become text. 6,000+ stat replaced. |
| `/features` | `pages/features/index.astro` | Features index | Web v1 Features F1 | Cards gain the feature image mockup and corrected badges. Grouped by the 7 content categories. Chips: All, Free, Pro, Signature, Beta (Beta is new). Free and Pro counts include features that are free with a limit. |
| `/features/<slug>` × 29 | `pages/features/[slug].astro` + `content/features/*.md` | Feature detail template | F2 (SMS Import), F3 (Kuber Cards) | Image mockup per slug. "Where to find in app" moves from a modal to an inline list. New Plan card (Free / Pro limits). Related features as cards. Promo block kept (renders only when `config.currentPromo` is set). |
| `/docs` | `pages/docs/index.astro` | Docs index | Web v1 Docs D1 | Status counts fixed: Data Deletion and FAQ have content, so 4 published, 6 in progress. Coming soon cards are not links. |
| `/docs/privacy-policy` | `content/docs/privacy-policy.md` | Doc page (long-form legal) | D2 | Sidebar + article + On this page. Callouts restyled. Content unchanged. |
| `/docs/data-deletion` | `content/docs/data-deletion.md` | Doc page | uses D2 | Same template. Steps render as ordered lists, `[!INFO]` and `[!WARNING]` as callouts (C8). |
| `/docs/faq` | `content/docs/faq.md` | Doc page | uses D2 | Same template; each question is an h2 so it appears in On this page. |
| `/changelog` | `pages/changelog.astro` + `content/changelog/*.md` | Changelog | D3 | Restyled timeline. Not in the main nav; linked from the footer and mobile menu. Pro launch copy fixed (see copy.md). |
| `/about` | `pages/about.astro` + `content/pages/about.md` | About | Web v1 About Press 404 A1 | Letter, Why Kuber, What is Kuber, meaning, contact. Serif italic dropped (Inter only). |
| `/press` | `pages/press.astro` + `content/pages/press-kit.md` | Press kit | P1 | Screenshot bundle uses the Web v1 PNG mockups (6 shown, ZIP holds all 60). |
| `/404` | `pages/404.astro` | 404 | N1 | Restyled, same copy without the serif accent. |
| shared | `components/Footer.astro`, `NavBar.astro`, `ThemeSwitcher.astro` | Footer, nav, theme menu | Components C1, C2, C9 | Floating pill nav + Get the app FAB. Theme switcher moves into the pill as an icon button with a menu. One footer variant for every page (the compact variant is retired). |

Redirects in `public/_redirects` (`/kuber-web/*`, `/doc`, `/data`) are unchanged.

## Feature slugs (29)

expense-tracking, ask-kuber, sms-import, kuber-cards, kuber-notes, quick-add, voice-input, powerful-filtering, calculators, detailed-analytics, reminders, automatic-backups, money-stories, home-widgets, themes, dev-mode, privacy-mode, biometrics, shortcuts, upcoming-events, recurring-transactions, loans, investments, lent-borrowed, budgets, multi-currency, multi-lingual, import-export, pro-plans.

Notes from the inventory:
- `public/screenshots/features/advanced-analytics/` does not match the `detailed-analytics` slug. Web v1 mockups use the page slug.
- `expense-tracking`, `powerful-filtering` and `multi-lingual` have no screenshot folder today; Web v1 adds mockups for all three.
- `content/pages/developer.md` has no route. Left as is (open-decisions 9).

## Schema change

Replace `pro: boolean` in `content.config.ts` with:

```ts
plan: z.enum(['free', 'pro', 'both']).default('free'),   // both = free with a limit, unlimited in Pro
limit: z.string().optional(),                            // e.g. "Free: 5 imports a week. Pro: unlimited."
```

`beta` and `signature` stay. Badge logic: `both` renders the joined Free + Pro badge, `beta` adds a Beta badge next to it.
