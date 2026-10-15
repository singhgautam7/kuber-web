# Web v1 · Mockup map

Every place the site shows the app. Live = HTML and CSS on the tokens (recolors with theme and mode). Image = PNG from `mockups/` (Signature only; light or dark follows the visitor's mode).

All mockups share one sample dataset (the round-1 app dataset with generic names): Gaurav · Your Bank (bank) · Rewards Card (credit card) · Savings Bank · Cash · July net +₹45,200 (in ₹65,000, out ₹19,800) · Indian grouping and ₹ everywhere · card numbers masked to the last 4 · sender IDs shown as AD-YRBANK. The Why Kuber stages use the Home v3.3 storyboard dataset (Your Bank ••1234, October), see open-decisions 2.

One frame: 376 × 796 at 1x, bezel #1B1B1F, radius 40 / 32, 9:41 status bar. PNGs are 752 × 1592 (2x). Source board: `Web v1 Mockups.dc.html`.

## By page and section

| Page | Section | Mockup | Type |
|---|---|---|---|
| Home | Hero | Home (balance, money stories, quick add, recent transactions) | Live |
| Home | Why Kuber 1 to 5 | Home v3.3 storyboard stages (notebook, accounts, modules, history and charts, signature tools) | Live (animated) |
| Home | Signature · Ask Kuber | `ask-kuber-{mode}.png` | Image |
| Home | Signature · SMS Import | `sms-import-{mode}.png` | Image |
| Home | Signature · Kuber Cards | `kuber-cards-{mode}.png` | Image |
| Home | Signature · Kuber Notes | `kuber-notes-{mode}.png` | Image |
| Home | Signature · Voice Quick Add | `voice-input-{mode}.png` | Image |
| Home | Themes | History | Live |
| Features index | Every card | `<slug>-{mode}.png` (cropped to the top 200) | Image |
| Feature detail | Header panel | `<slug>-{mode}.png` | Image |
| Press kit | Screenshot bundle (6 shown) | home, expense-tracking, detailed-analytics, sms-import, kuber-cards, ask-kuber | Image |
| Press kit | Download all (ZIP) | all 30 slugs × light and dark | Image |
| Social card (og:image) | Home and feature pages | `home-light.png` / `<slug>-light.png` composed at 1200 × 630 | Image |

## By feature slug

| Slug | App screen used (from this project) | Files |
|---|---|---|
| home | Screen 2 · Home | home-light.png, home-dark.png |
| ask-kuber | Screen 8 · Ask Kuber, chat with an answer and a draft | ask-kuber-*.png |
| automatic-backups | Screen 12 · Data, Backups | automatic-backups-*.png |
| biometrics | Screen 24 · Kuber Cards unlock (biometric gate) | biometrics-*.png |
| budgets | Screen 18 · Budgets | budgets-*.png |
| calculators | Screen 32 · Calculators and Tools hub | calculators-*.png |
| detailed-analytics | Screen 6 · Analytics | detailed-analytics-*.png |
| dev-mode | Screen 29 · Dev Tools | dev-mode-*.png |
| expense-tracking | Screen 4 · Add transaction with autofill | expense-tracking-*.png |
| home-widgets | Screen 2 · Edit Home Widgets | home-widgets-*.png |
| import-export | Screen 12 · Data Management | import-export-*.png |
| investments | Screen 22 · Investments | investments-*.png |
| kuber-cards | Screen 24 · Kuber Cards, masked numbers | kuber-cards-*.png |
| kuber-notes | Screen 23 · Kuber Notes editor with live totals | kuber-notes-*.png |
| lent-borrowed | Screen 20 · Lend Borrow | lent-borrowed-*.png |
| loans | Screen 21 · Loans | loans-*.png |
| money-stories | Screen 27 · Stories Archive | money-stories-*.png |
| multi-currency | Screen 11 · Settings + Number Format sheet | multi-currency-*.png |
| multi-lingual | Screen 11 · Settings (Language row). Placeholder, see open-decisions 4 | multi-lingual-*.png |
| powerful-filtering | Screen 5 · History filters sheet | powerful-filtering-*.png |
| privacy-mode | Screen 2 · Home with privacy mode on | privacy-mode-*.png |
| pro-plans | Screen 14 · Kuber Pro | pro-plans-*.png |
| quick-add | Screen 10 · Quick Add | quick-add-*.png |
| recurring-transactions | Screen 19 · Recurring | recurring-transactions-*.png |
| reminders | Screen 25 · Reminders | reminders-*.png |
| shortcuts | Screen 2 · Home + Quick Actions sheet | shortcuts-*.png |
| sms-import | Screen 9 · Import from SMS, detected messages | sms-import-*.png |
| themes | Screen 11 · Settings + Theme sheet | themes-*.png |
| upcoming-events | Screen 26 · Upcoming Events | upcoming-events-*.png |
| voice-input | Screen 10 · Quick Add + voice sheet listening | voice-input-*.png |

## Shipping

- Convert each PNG to AVIF (quality 60) and WebP (quality 80) at 1x and 2x of the display width; serve with `<picture>`, explicit `width` and `height`, `loading="lazy"` except the first image on a page, `decoding="async"`.
- Keep the PNG 2x masters in the repo under `public/screenshots/features/<slug>/` and replace the current Vault screenshots.
