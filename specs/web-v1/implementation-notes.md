# Kuber Web v1: implementation notes

Branch `web-v1`. Plan: `specs/web-v1/plan.md`. Performance: `specs/web-v1/performance-review.md`. Screenshots: `specs/web-v1/screenshots/before/` and `after/` (11 page types × 390, 834, 1440 × light and dark), plus `after/themes/` (Home in all 16 themes).

## Round 2 (17 Oct 2026): decisions and changes

Owner decisions: keep 16 themes; Data Deletion wording left to my judgement (kept as written, with the `clearAllDataDesc` and promo-fetch notes below); Google Drive removal confirmed; converter wording fine for now; AA adjustments approved.

Changes:
- **Free / Pro badges removed** everywhere, per design `open-decisions.md` §18 and the review-round-2 note in `screenshot-map.md`: only Beta and a Signature pill remain. Features index chips are All and Signature (counts computed). The feature-page Plan card is gone ("the plan detail lives on the Kuber Pro page"). The `plan` field is removed from the schema; `limit` stays for the Home Signature cards.
- **"Where to find in app" is a pop-up again**, as on the design's feature board: a button with the route count under the header opens a native `<dialog>` (Escape, backdrop click and close button; focus returns to the button).
- **Why Kuber stage 5 now animates** per the Home v3.3 storyboard page 5: the five vignettes (Ask Kuber question and answer, card flip, note to Travel transaction, SIP calculator result, bill reminder with the bell ringing) play in turn, each with its line spotlit, then the five icon tiles. The vignettes were rendered from the design kit (`_kit/home_v33.js` `P5`) with colours as tokens.
- **Default theme is light** (Kuber Signature light). System mode is still available in the theme menu.
- **Hero fits the first screen**: panel height is the viewport height minus the nav space and the trust strip, so Offline, Private, Open source, Made in India and Under 17 MB are visible without scrolling (checked at 1440×900, 1440×780, 1280×680, 1920×1080, 834×1112, 390×844, 390×664, 360×640). Headline and spacing shrink on short screens; the phone is clipped at the panel's bottom. On mobile the trust chips are compact, two rows, and the Get the app FAB stays hidden while the hero (which has its own Play badge) is on screen, then shows icon-only.
- **Money stories rings** in the hero mockup are Instagram-style: each ring is split into one segment per story (Daily 6, Weekly 3, Monthly 3, Insights 6, Yearly 3), read segments in the outline colour first and unread in the accent last (Daily 2 of 6 new, Weekly 2 of 3, Monthly all seen, Insights 3 of 6, Yearly 3 of 3). Segments fade in after the phone (motion.md §1).
- **6,500+ stat restored** as the sixth Numbers card ("Transactions tested in one database"); it is the developer's figure (design `open-decisions.md` §17).
- **Press screenshots fixed**: `more-*` and `settings-*` re-rendered from the design kit with the app's real copy ("Kuber Pro · Unlock every feature, no account needed" and "Try Kuber Pro · Unlock every feature, no account needed", from `kuber_pro_settings_section.dart`) instead of the slot placeholders.

## Round 4 (17 Oct 2026): changes

- **Hero phone shows the SMS Import card**: on two-column layouts the phone scales with the screen height (1 down to 0.6 in steps) and sits closer to the panel top, so the full-width "Import from SMS · Last checked 13m ago" row is always inside the panel. Checked at 1440×900, 1440×780, 1366×768, 1280×680, 1920×1080, 1024×768 and 834×1112; the trust strip stays visible at all of them.
- **Signature is the design's grid again** (H1): 3 columns with Ask Kuber as the wide card, 2 columns on tablet, stacked on mobile, design dimensions. This reverses the round 3 one-row layout, so this section is again taller than one laptop screen, as in the design. Every card is clickable as a whole: the "Learn more" link stretches over the card (one link per card for screen readers), with a hover state and a focus ring around the card.
- **Feature count**: `main` and this branch both have 29 feature files, and the live site's `/features/` and this build link the same 29 slugs. Nothing was missing, so no feature was added.

## Round 3 (17 Oct 2026): changes

- **Story rings**: Daily 6 of 6 new, Weekly 3 of 3, Monthly 2 of 3, Insights 0 of 6, Yearly 0 of 3 (seen segments first, new last).
- **Hero mockup**, matching the app's Home today:
  - "Ask Kuber" pill instead of "Kuber Pro".
  - Balance card as in `dashboard_screen.dart` `_BalanceHeroCard`: net amount in on-surface, income bar and dot in the accent, expense in a **40%** accent tint over surface-container (the app uses 40%, not the 50% mentioned in feedback), legend "+₹65,000" and "−₹19,800".
  - No Beta badge on Quick add.
  - "SMS IMPORT" widget instead of Recent transactions (as `sms_import_home_widget.dart`: "Import from SMS · Last checked 13m ago", chevron; no "View all").
- **No Beta badges anywhere** (owner: visitors should not see payment or beta badges). Only the Signature pill remains. The `beta` front matter field is kept as data but not rendered.
- **Page transitions**: native cross-document View Transitions (`@view-transition`): the nav stays still, the old page fades out (150 ms) and the new page's content fades and rises in (240 ms). The same entrance runs as a plain CSS animation where view transitions are unsupported (Firefox). Off under reduced motion. Verified in Chrome (`pagereveal` carries a view transition).
- **Sections fit one screen** (checked at 1440×800 and 1440×900): section spacing scales with screen height; Why Kuber stages scale down on shorter screens (each part about 340 to 410 px at 800 tall); Signature is one row of five compact cards (a swipeable row below 1024 px), 710 px with spacing at 800 tall, down from 1,444; Themes uses an 8-across tile grid and a smaller phone, 741 px, down from 1,099. This departs from the design's 3-column Signature grid with a wide Ask Kuber card and its 4-across theme tiles, which are taller than a laptop screen.
- **Feature pages** now follow the design's feature-page template exactly: 1000 px column, icon beside the title, description, "Where to find in app" button, screenshots, the article, then "Try it in Kuber" and the privacy link at the end; related features in the side column. The Play badge and "All features" under the description are gone, as is the extra "How it works" heading.
- **Why Kuber stage 5 timing now matches the app's welcome tour** (`why_kuber/widgets/page_features.dart`): 15.5 s; each feature holds a 3 s slot starting at 300 + 3000·i ms with 150 ms fades, its micro-animation stretched over the first 2 s (question types in then the answer rises; the card flips to its masked back; the note total appears then the Travel transaction; inputs fill in then the result; the bell rings three times then the notification drops); the matching line is spotlit for the same slot; the icons rest from 15.3 s.

## Review before merge

1. **Data Deletion page (`/docs/data-deletion/`)** is rewritten from the app code. Please read it in full. Things it states that come from the code:
   - The in-app path is **More → Data → Danger zone → Clear All Data**, confirm, then type `reset all` (`settings/screens/data_management_screen.dart`).
   - Clear All Data wipes the Isar database and the Kuber Cards Keystore key (`settings/providers/data_provider.dart`, `core/services/data_service.dart`). It does **not** clear SharedPreferences, attachment files (`kuber_attachments/` in app documents) or backup files in the user's folder, so the page says so and points to Clear storage, uninstall, and deleting backup files by hand. The in-app string `clearAllDataDesc` says it deletes "settings" too, which the code does not do. One of them should change.
   - It says the only network requests are the Currency Converter's exchange rates and Google Play purchases. The `http` uses in the app are `exchange_rates_provider.dart` and `pro/services/promo_config_service.dart`. The promo fetch is switched off today (`kPromoConfigUrl = ''`), but once you set a URL at launch the app will GET a promo JSON once a day. When that happens, this page (and arguably the Privacy Policy) needs a third item.
2. **"Automated Google Drive Backups"** on the Kuber Pro page is gone. The app has no Drive code or dependency. Backups go through the Android folder picker (`backups/services/saf_backup_store.dart`) to a folder the user chooses. The page now says "Automatic backups to a folder on your phone ... Nothing is uploaded anywhere". Note: a user can pick a cloud-synced folder in the system picker; Kuber itself never uploads.
3. **16 themes, not 7.** The brief lists 7 named themes. The app's engine (`core/theme/theme_families.dart`) ships Kuber Signature plus 15 Mull families (Azure retired), and the design's own `tokens.md` (updated 15 Oct) agrees. The old names exist only as unused l10n strings. Following the brief's rule that the app wins on facts, the site ships the 16 families and says 16 everywhere (Home, Themes page, Kuber Pro page, theme menu, press boilerplate). The brief said the press kit's "7 themes" stays; I changed it to 16 for consistency. Two related app issues: the app's own Pro comparison still says "7 themes" (`pro/paywall/pro_page_extras.dart`), and the old palettes for the 7 survive in `palettes.json` if you want them back.
4. **Currency Converter is not offline.** It downloads rates from `api.frankfurter.app` and caches them for offline use (`tools/currency_converter/providers/exchange_rates_provider.dart`). The Calculators and Currency Support pages now say so. The **Privacy Policy is unchanged** (legal text, restyle only), but its "Internet usage" section says no data is transmitted and does not mention this request. It sends only a currency code, but you may want to mention it.
5. **Facts the app code did not settle** (current text kept):
   - Beta labels on Ask Kuber, Voice Quick Add and Multi-lingual. The app shows no Beta label anywhere (`betaBadge` string is unused).
   - "Under 17 MB". Not derivable from the code.
   - "Log expenses in under 3 seconds" (About).
   - The 6,500+ "transactions tested" stat is the developer's own figure (restored in round 2).
6. **AA colour adjustments.** Six light Mull palettes from the app fail WCAG AA for some roles. The site lowers the OKLCh lightness of just those roles until they pass (`accessible()` in `src/lib/themes.ts`), so the web differs slightly from the app:

   | Palette | Role | App | Site |
   |---|---|---|---|
   | Vellum light | primary | #A06F30 | #956525 |
   | Clay light | on-surface-variant | #78664D | #6C5A42 |
   | Clay light | income | #2E7C35 | #27762F |
   | Ember light | primary | #AF6340 | #A55A37 |
   | Fern light | primary | #2A805D | #267D5A |
   | Coral light | primary | #B05649 | #AE5447 |
   | Citron light | primary | #72772A | #6F7427 |
   | Neon light | primary | #3B964B | #218037 |

   These may be worth fixing in the app too (Neon primary is 3.4:1 on its surface there).
7. ~~Press screenshots contain placeholder text.~~ Fixed in round 2 (re-rendered). The design bundle's own `web-v1/screenshots/press/` files still have the placeholders if you re-copy them.

## Deviations from the spec, and defaults used

| Area | Spec | Built | Why |
|---|---|---|---|
| Themes | `copy.md` says seven in places, `tokens.md` sixteen | 16 | App code (see above) |
| Badges | `open-decisions` §18 removed Free/Pro badges | Signature pill only; no Free, Pro or Beta (rounds 2 and 3) | Owner decision |
| Feature images | Index cards and Signature cards use `web-v1/mockups/*.png` | First screenshot from `web-v1/screenshots/`, cropped by CSS | Brief: use the screenshots; no `mockups/` import |
| Dark screenshots | Folder has `-dark` files for most features | Only SMS Import ships dark | The other dark files predate the redraws (different content) |
| Where to find it | Feature board keeps the modal | Pop-up (native `<dialog>`) as on the feature board (round 2) | Owner decision |
| Plan card | F2 | Removed (round 2): plan detail lives on the Kuber Pro page (§18) | Owner decision |
| Why Kuber | `motion.md` element storyboard, addendum asks for scroll-scrubbed sticky stages | Plays once at 35% visible: rows written in with stepped clip, blocks rise in sequence, SIP line draws, donut fades in; stage 5 plays all five vignettes with the spotlight, card flip, bell and notification. No JS counters, typing, FLIP or scroll scrubbing | Robust, CSS only. Rest frame shown with reduced motion or no JS |
| Hero | Money story rings animate | Chip, lines, lead and phone rise in sequence; segmented story rings fade in after the phone; hero sized to the first screen (round 2) | Owner feedback |
| Category tile colours | Harmonised per family in the app | Fixed per mode (`--k-cat-*`), from the design frames | Simplification |
| Theme menu | `role="menu"` with radio items | Native `popover` with `aria-pressed` toggle buttons in labelled groups | Valid without arrow-key menu handling; light dismiss and Escape for free |
| Mobile menu | Bottom sheet | Native `<dialog>` bottom sheet | Focus trap, Escape, inert page for free |
| Docs mobile pickers | Bottom sheets | Native `<details>` disclosures | No JS |
| Coming-soon docs | Dashed cards (D1) | Compact dashed list under each group's published cards, "Coming soon" chip, not links | Brief |
| Docs counters | Fixed text | Computed: 4 published (Privacy Policy, Data Deletion, FAQ, Support link), 6 in progress | Brief |
| About "Why Kuber" | Not renamed in the design | "Built for everyday use" | Brief asked for a rename; `copy.md` has none, so I chose it |
| Email reveal | Button only | Reveal shows the address as a `mailto:` link plus a Copy email button with a copied state | Brief |
| Press wordmark | "Get from GitHub" | SVG and PNG downloads, light and dark (`public/press/`). Text converted to Inter ExtraBold outlines so the SVG needs no font | Brief |
| Press screenshots | 6 feature mockups and a ZIP | The 4 press screens (Home, Spaces, Add transaction, Settings), previews follow the site mode, each with Light and Dark PNG downloads. No ZIP | No zip tooling without a new dependency; brief only asks for the new screenshots |
| Copy buttons | Boilerplate only | Boilerplate and fact sheet, label and icon switch to "Copied" for 2 s, announced via a live region | Brief |
| Numbers | Six figures incl. 6,500+ | Six: 15 banks, 12 widgets, 18 calculators, 16 themes, 9 languages, 6,500+ | As designed (round 2) |
| Mono font | JetBrains Mono for paths | System monospace stack | `tokens.md`: Inter only |
| Changelog | `copy.md` rewrites | Applied, but history kept: the January 2026 entry still says seven families (true then); the Pro launch says "all the accent themes"; Multi-currency removed from the Pro list (it is free) | Accuracy |
| Theme default | Design frames show light | Signature light (round 2) | Owner decision |
| `/404/` canonical | | Unchanged (pre-existing: the 404 page's canonical points to `/404/`, which does not exist) | Brief: keep SEO metadata |

## Final fact table

App path `kuber/lib/`, read-only. "Site before" is `origin/main`. Since round 2 the Free/Pro badges are not shown; the gating facts below still drive the Signature limit lines and the Kuber Pro page.

| Claim | Site before | Site now | Verified in |
|---|---|---|---|
| Languages | 5 (Home, press); "9 regional + English" (Multi-lingual) | 9: English and 8 Indian languages, listed by name | `core/utils/supported_locales.dart`, `l10n/app_*.arb` |
| Calculators | 13 (Home); "over 25" | 18, in the app's four groups | `features/tools/tool_catalog.dart` |
| Banks for SMS import | 20+ | 15 banks plus Paytm, PhonePe, Google Pay | `features/sms_import/engine/sender_ids.dart` |
| Home widgets | 12+ | 12 | `features/widget_editor/data/widget_catalog.dart` |
| Themes | 7 | 16 | `core/theme/theme_families.dart` |
| SMS Import | Pro | Free + Pro, 5 imports a week (rolling 7 days) | `features/sms_import/data/sms_import_usage.dart` |
| Ask Kuber | Free, Beta | Free + Pro, Beta, 5 questions a week | `features/ask_kuber/data/ask_kuber_usage.dart` |
| Kuber Notes | Pro | Free + Pro, 2 notes | `features/notes/screens/notes_landing_screen.dart` |
| Kuber Cards | Pro | Free + Pro, 2 cards | `features/kuber_cards/screens/cards_home_screen.dart` (`kFreeCardLimit`) |
| Detailed Analytics | Free | Free + Pro, core charts free, Advanced Analytics Pro | `features/more/more_content.dart`, `features/advanced_analytics/screens/*` |
| Themes gating | Pro | Free + Pro, Kuber Signature free | `features/settings/screens/theme_screen.dart` |
| Reminders | Pro | Pro (creating a reminder is gated) | `features/reminders/screens/reminders_landing_screen.dart` |
| Automatic Backups | Pro | Pro, manual backups free | `features/backups/screens/automatic_backups_screen.dart` |
| Currency Support | Free | Free (its gate sheet exists but is never called) | `features/pro/feature_gates/gate_sheet_multi_currency.dart` |
| Kuber Pro page badge | Free | none | brief |
| Backups destination | "Google Drive" (Pro page) | Folder on the phone, chosen in the system picker | `features/backups/services/saf_backup_store.dart`, `pubspec.yaml` |
| What Kuber Cards stores | "loyalty or membership cards" | Payment cards (debit, credit, prepaid, forex, gift, travel, fuel, meal, corporate), fields AES-GCM encrypted with a PIN-derived key, optional biometric unlock | `features/kuber_cards/data/stored_card.dart`, `card_crypto.dart`, `card_keystore.dart` |
| Investments | "real-time P&L" | Gain and loss from values you enter; never fetches prices | `features/investments/providers/investment_provider.dart` |
| Currency converter | "instant", "entirely on-device" | Rates downloaded when online, cached for offline use, 31 currencies | `features/tools/currency_converter/providers/exchange_rates_provider.dart` |
| Backup options | Daily, weekly, monthly; keep 1, 5 or 10 | unchanged, confirmed | `backups/data/backup_config.dart`, `automatic_backups_screen.dart` |
| Reminder filters | All, Overdue, Today, This week, Completed | unchanged, confirmed | `features/reminders/providers/reminders_provider.dart` |
| Developer Mode | Tap version 7 times | unchanged, confirmed | `features/dev/widgets/version_tap_detector.dart` |
| Pro plans | not stated | Monthly, yearly, lifetime; 14-day trial on yearly | `features/pro/paywall/pro_page_extras.dart`, `paywall_manage_state.dart` |
| Clear all data | "Settings, the data or reset option" | More → Data → Clear All Data, type "reset all" | `features/settings/screens/data_management_screen.dart` |

## Content changes (summary)

- Em dashes removed (Powerful Filtering description, meta and body); Developer Mode " - just tap" rewritten. No em or en dashes remain in content or source.
- Feature descriptions follow `copy.md`, with app facts where they differ (Kuber Cards: "locked behind your PIN or biometrics"; Calculators: "18"; Multi-lingual: "9 languages"; Investments: "gain and loss based on the values you enter").
- Kuber Cards gets a meta description (from its one-liner) and a body that no longer contradicts itself. Doc pages, which had the site-wide description, now use their first paragraph.
- Kuber Pro page rewritten against the app's comparison table (`pro_page_extras.dart`): theme names, Drive claim, card wording, trial and plans.
- Themes page lists the 16 families, wallpaper palette and true black; Calculators lists the 18 tools by group; SMS Import lists the 15 banks.
- FAQ: "unlocks SMS Import" became "unlimited SMS Import, Ask Kuber, Kuber Notes and Kuber Cards" (FAQ is not legal text).
- Privacy Policy: not a word changed.
- About letter: rendered from `content/pages/about.md`, unchanged.
- Reviews: `src/data/reviews.ts` is empty, so the section renders nothing. Placeholder text is gone from the site.
- Bank logos replaced with names as text plus the not-affiliated note (`open-decisions` §1); the SVGs are deleted.

## Testing

All runs against `astro preview` of the final build, Chrome 141 headless via puppeteer, from a scratch folder (no repo dependencies added).

| Check | Result |
|---|---|
| `bun run build` | Passes, 39 pages + `/icons.svg`. One pre-existing notice: the `markdown.remarkPlugins` deprecation. No missing image or reference warnings |
| `astro check` | 0 errors, 0 warnings, 0 hints |
| Routes | Same 39 routes as `origin/main`, URLs unchanged; `_redirects` unchanged |
| Internal link check (4,301 href/src/srcset refs) | 0 broken, apart from the pre-existing `/404/` canonical on the 404 page. `/docs/data-deletion/` resolves |
| Third-party requests, all 39 routes × 4 widths | None. Only `localhost` was requested |
| Horizontal overflow at 360, 390, 834, 1440 | None on any route |
| Console errors | None |
| Images without alt / visible images with empty alt | None. Decorative crops sit inside `aria-hidden` wrappers |
| One `h1` per page, skip link present | Every route |
| Hard-coded colours in built CSS and HTML outside token declarations | None. (Static brand files keep fixed colours: favicon and the wordmark downloads) |
| Banned strings in built HTML (em/en dash, Obsidian, Emerald, Alabaster, Google Drive, real-time, 9 regional, over 25, 6,000+, Your words here, FlewTube, loyalty, 20+, 5 languages, 7 themes) | None |
| Badges | Only the Signature pill (5 features); no Free, Pro or Beta anywhere |
| Meta | Every page has a description and og:description; every feature page's og:image is its first screenshot (720 px JPEG) |
| Keyboard | Tab order skip link → brand → 5 nav items → theme → FAB → page; 3 px focus ring on every stop. Theme menu opens with Enter, focus moves in, Escape closes and returns focus. Mobile menu traps focus over 20 tabs, Escape closes, focus returns. FAB fixed 16 px from bottom-right on mobile |
| No flash | With `{fam: iris, mode: dark}` saved, `data-theme`/`data-mode` are already set when `<body>` is created |
| Storage blocked | Site loads and theme changes work with `localStorage` throwing |
| Theme recolor | All 16 families × light/dark; whole site including both live mockups recolors (`after/themes/`) |
| Screenshot mode switch | SMS Import shows dark files in dark and light files in light, same box height (no shift); light-only features show light in dark mode |
| Motion | No stage plays before it is scrolled into view; stages wait at opacity 0 and finish at rest. Reduced motion: all 49 animated elements at rest before any scroll |
| Lighthouse mobile (after round 2) | Home 100/100/100/100, SMS Import 99/100/100/100, Privacy Policy 100/100/100/100 |
| First screen | Trust strip visible without scrolling at 8 viewport sizes from 360×640 to 1920×1080 |
| Where to find pop-up | Opens; Escape, close button and backdrop click close it; clicks inside keep it open; focus returns |

Not done or limited:
- Visual comparison against the spec frames was by reading the design source (`gen_web.js`, `gen_inner.js`, frame HTML) and reviewing screenshots of every page type at 390, 834 and 1440 in both modes. I did not render the design boards or pixel-diff (the bundle README asks not to render them).
- Tested in Chrome only. The theme menu uses the Popover API (Chrome 114, Safari 17, Firefox 125); older browsers still get a working page but the theme menu button does nothing.
- Not tested on real devices.

## Missing screenshots and open items

- Dark screenshots exist only for SMS Import. Adding `NN-name-dark.png` next to a light file is all a future dark version needs.
- Biometric Lock uses the Settings screen as a substitute; there is no app lock screen design yet (`screenshot-map.md`).
- Currency Support shows the Settings row, not a currency picker (none designed).
- Home Widgets shows a "Pinned Suggestions" widget that is not in `widget_catalog.dart`.
- No ZIP of the press screenshots.
- Why Kuber is a simplified, play-once version (see Deviations); no scroll scrubbing, typing or counters.
- `content/pages/developer.md` still has no route (`open-decisions` §9).
- Fixes worth making in the app: "7 themes" in the Pro comparison, `clearAllDataDesc` claiming settings are cleared, the contrast of the light Mull primaries.
