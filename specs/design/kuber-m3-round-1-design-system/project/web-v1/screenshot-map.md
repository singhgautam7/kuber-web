# Web v1 · Screenshot map

Every app screenshot on the site, redrawn as the same screen in the M3 app UI from this project. Board: `Web v1 Screenshots.dc.html`. Generator: `src/gen_shots.js` (built by `src/build_shots.js`).

- Plain screen only: no frame, backdrop, floating elements or added text. Kuber Signature, one light and one dark file each.
- Same pixel size as the original: 1080 wide, 2344 or 2193 high (drawn at 360 dp, exported at 3x).
- Files live in `web-v1/screenshots/<folder>/`. The theme part of the name (`-obsidian`, `-alabaster`) is replaced by `-light` / `-dark`. Files with no theme part get `-light` / `-dark` appended.
- Repo drop-in: copy each feature folder to `src/assets/screenshots/features/<slug>/` and the press files to `public/assets/screens/`. `screenshots.ts` only recognises `-obsidian` and `-alabaster`, so either rename on copy (light → `-alabaster`, dark → `-obsidian`) or add `light|dark` to `VARIANT_SUFFIX_RE`. Press kit `shots[]` in `press.astro` points at the new names.
- `expense-tracking/01-home` had both an obsidian and an alabaster original; it is one screen, so one light and one dark file.
- Sample data follows the project's app screens (Gaurav, Your Bank, Rewards Card). Real bank, merchant and personal names in the old screenshots (ICICI, HDFC, SBI, Swiggy, Netflix, a payee name and phone number in an SMS) are replaced with generic ones, as on the rest of Web v1.
- The first image of each feature is also its og:image (`getFeatureOgShot`), so the og:image picks up the new design automatically.

| Original | New files (web-v1/screenshots/) | Size | Page | Screen |
|---|---|---|---|---|
| src/assets/screenshots/features/ask-kuber/01-ask-kuber-obsidian.jpg | ask-kuber/01-ask-kuber-light.png<br>ask-kuber/01-ask-kuber-dark.png | 1080 × 2344 | /features/ask-kuber/ | Ask Kuber, empty state with suggested questions |
| src/assets/screenshots/features/ask-kuber/02-draft-transaction-obsidian.jpg | ask-kuber/02-draft-transaction-light.png<br>ask-kuber/02-draft-transaction-dark.png | 1080 × 2344 | /features/ask-kuber/ | Ask Kuber chat ending in a drafted transaction |
| src/assets/screenshots/features/automatic-backups/01-automatic-backups-obsidian.jpg | automatic-backups/01-automatic-backups-light.png<br>automatic-backups/01-automatic-backups-dark.png | 1080 × 2344 | /features/automatic-backups/ | Automatic Backups settings |
| src/assets/screenshots/features/calculators/01-tools-hub-obsidian.jpg | calculators/01-tools-hub-light.png<br>calculators/01-tools-hub-dark.png | 1080 × 2193 | /features/calculators/ | Calculators and Tools hub |
| src/assets/screenshots/features/calculators/02-emi-calculator-obsidian.jpg | calculators/02-emi-calculator-light.png<br>calculators/02-emi-calculator-dark.png | 1080 × 2193 | /features/calculators/ | EMI Calculator, inputs and result |
| src/assets/screenshots/features/calculators/03-amortization-breakdown-obsidian.jpg | calculators/03-amortization-breakdown-light.png<br>calculators/03-amortization-breakdown-dark.png | 1080 × 2193 | /features/calculators/ | EMI Calculator scrolled to breakdown and schedule |
| src/assets/screenshots/features/calculators/04-calculator-catalogue-obsidian.jpg | calculators/04-calculator-catalogue-light.png<br>calculators/04-calculator-catalogue-dark.png | 1080 × 2193 | /features/calculators/ | Calculators and Tools hub scrolled to the catalogue |
| src/assets/screenshots/features/detailed-analytics/01-income-expense-chart-obsidian.jpg | detailed-analytics/01-income-expense-chart-light.png<br>detailed-analytics/01-income-expense-chart-dark.png | 1080 × 2344 | /features/detailed-analytics/ | Analytics: summary and Income and Expense chart |
| src/assets/screenshots/features/detailed-analytics/02-weekly-heatmap-obsidian.jpg | detailed-analytics/02-weekly-heatmap-light.png<br>detailed-analytics/02-weekly-heatmap-dark.png | 1080 × 2344 | /features/detailed-analytics/ | Analytics scrolled to Avg Weekly Heatmap |
| src/assets/screenshots/features/detailed-analytics/03-transaction-size-and-categories-obsidian.jpg | detailed-analytics/03-transaction-size-and-categories-light.png<br>detailed-analytics/03-transaction-size-and-categories-dark.png | 1080 × 2344 | /features/detailed-analytics/ | Analytics scrolled to Transaction Size and Spending by category |
| src/assets/screenshots/features/detailed-analytics/04-tag-analytics-and-biggest-txns-obsidian.jpg | detailed-analytics/04-tag-analytics-and-biggest-txns-light.png<br>detailed-analytics/04-tag-analytics-and-biggest-txns-dark.png | 1080 × 2344 | /features/detailed-analytics/ | Analytics scrolled to Tag-wise Analytics and Biggest Transactions |
| src/assets/screenshots/features/detailed-analytics/05-advanced-analytics-hub-obsidian.jpg | detailed-analytics/05-advanced-analytics-hub-light.png<br>detailed-analytics/05-advanced-analytics-hub-dark.png | 1080 × 2344 | /features/detailed-analytics/ | Advanced Analytics hub |
| src/assets/screenshots/features/detailed-analytics/06-financial-health-score-obsidian.jpg | detailed-analytics/06-financial-health-score-light.png<br>detailed-analytics/06-financial-health-score-dark.png | 1080 × 2344 | /features/detailed-analytics/ | Financial health score |
| src/assets/screenshots/features/expense-tracking/01-home-obsidian.jpg<br>src/assets/screenshots/features/expense-tracking/01-home-alabaster.jpg | expense-tracking/01-home-light.png<br>expense-tracking/01-home-dark.png | 1080 × 2344 | /features/expense-tracking/ | Home |
| src/assets/screenshots/features/expense-tracking/02-add-transaction.jpg | expense-tracking/02-add-transaction-light.png<br>expense-tracking/02-add-transaction-dark.png | 1080 × 2344 | /features/expense-tracking/ | Add Transaction with an autofill suggestion |
| src/assets/screenshots/features/home-widgets/01-edit-home-widgets-obsidian.jpg | home-widgets/01-edit-home-widgets-light.png<br>home-widgets/01-edit-home-widgets-dark.png | 1080 × 2344 | /features/home-widgets/ | Edit Home Widgets |
| src/assets/screenshots/features/investments/01-investments-obsidian.jpg | investments/01-investments-light.png<br>investments/01-investments-dark.png | 1080 × 2344 | /features/investments/ | Investments |
| src/assets/screenshots/features/kuber-notes/01-kuber-notes-obsidian.jpg | kuber-notes/01-kuber-notes-light.png<br>kuber-notes/01-kuber-notes-dark.png | 1080 × 2344 | /features/kuber-notes/ | Kuber Notes editor with live math |
| src/assets/screenshots/features/lent-borrowed/01-lent-borrowed-obsidian.jpg | lent-borrowed/01-lent-borrowed-light.png<br>lent-borrowed/01-lent-borrowed-dark.png | 1080 × 2344 | /features/lent-borrowed/ | Lent and Borrowed ledger |
| src/assets/screenshots/features/loans/01-loans-obsidian.jpg | loans/01-loans-light.png<br>loans/01-loans-dark.png | 1080 × 2344 | /features/loans/ | Loans |
| src/assets/screenshots/features/money-stories/01-home-story-bubbles-obsidian.jpg | money-stories/01-home-story-bubbles-light.png<br>money-stories/01-home-story-bubbles-dark.png | 1080 × 2344 | /features/money-stories/ | Home with the Money Stories row |
| src/assets/screenshots/features/money-stories/02-weekly-recap-story-obsidian.jpg | money-stories/02-weekly-recap-story-light.png<br>money-stories/02-weekly-recap-story-dark.png | 1080 × 2344 | /features/money-stories/ | Story: weekly recap |
| src/assets/screenshots/features/money-stories/03-week-over-week-comparison-obsidian.jpg | money-stories/03-week-over-week-comparison-light.png<br>money-stories/03-week-over-week-comparison-dark.png | 1080 × 2344 | /features/money-stories/ | Story: week over week |
| src/assets/screenshots/features/money-stories/04-monthly-top-categories-obsidian.jpg | money-stories/04-monthly-top-categories-light.png<br>money-stories/04-monthly-top-categories-dark.png | 1080 × 2344 | /features/money-stories/ | Story: monthly top categories |
| src/assets/screenshots/features/money-stories/05-weekend-habits-insight-obsidian.jpg | money-stories/05-weekend-habits-insight-light.png<br>money-stories/05-weekend-habits-insight-dark.png | 1080 × 2344 | /features/money-stories/ | Story: weekend pattern insight |
| src/assets/screenshots/features/multi-lingual/01-select-language-obsidian.jpg | multi-lingual/01-select-language-light.png<br>multi-lingual/01-select-language-dark.png | 1080 × 2344 | /features/multi-lingual/ | Select language sheet over Settings |
| src/assets/screenshots/features/powerful-filtering/01-transaction-history-obsidian.jpg | powerful-filtering/01-transaction-history-light.png<br>powerful-filtering/01-transaction-history-dark.png | 1080 × 2344 | /features/powerful-filtering/ | History |
| src/assets/screenshots/features/powerful-filtering/02-advanced-filters-obsidian.jpg | powerful-filtering/02-advanced-filters-light.png<br>powerful-filtering/02-advanced-filters-dark.png | 1080 × 2344 | /features/powerful-filtering/ | History filters |
| src/assets/screenshots/features/powerful-filtering/03-category-filters-obsidian.jpg | powerful-filtering/03-category-filters-light.png<br>powerful-filtering/03-category-filters-dark.png | 1080 × 2344 | /features/powerful-filtering/ | History filters scrolled to accounts and categories |
| src/assets/screenshots/features/privacy-mode/01-privacy-mode-masked-obsidian.jpg | privacy-mode/01-privacy-mode-masked-light.png<br>privacy-mode/01-privacy-mode-masked-dark.png | 1080 × 2193 | /features/privacy-mode/ | Home with privacy mode on |
| src/assets/screenshots/features/pro-plans/01-pro-plans-obsidian.jpg | pro-plans/01-pro-plans-light.png<br>pro-plans/01-pro-plans-dark.png | 1080 × 2344 | /features/pro-plans/ | Kuber Pro scrolled to What Pro includes |
| src/assets/screenshots/features/quick-add/01-home-widget-obsidian.jpg | quick-add/01-home-widget-light.png<br>quick-add/01-home-widget-dark.png | 1080 × 2344 | /features/quick-add/ | Home scrolled to the Quick Add widget |
| src/assets/screenshots/features/quick-add/02-parsed-transactions-obsidian.jpg | quick-add/02-parsed-transactions-light.png<br>quick-add/02-parsed-transactions-dark.png | 1080 × 2344 | /features/quick-add/ | Quick Add with two transactions detected |
| src/assets/screenshots/features/quick-add/03-voice-add-obsidian.jpg | quick-add/03-voice-add-light.png<br>quick-add/03-voice-add-dark.png | 1080 × 2344 | /features/quick-add/ | Quick Add voice sheet, listening |
| src/assets/screenshots/features/recurring-transactions/01-recurring-transactions-obsidian.jpg | recurring-transactions/01-recurring-transactions-light.png<br>recurring-transactions/01-recurring-transactions-dark.png | 1080 × 2344 | /features/recurring-transactions/ | Recurring |
| src/assets/screenshots/features/reminders/01-reminders-list-obsidian.jpg | reminders/01-reminders-list-light.png<br>reminders/01-reminders-list-dark.png | 1080 × 2344 | /features/reminders/ | Reminders |
| src/assets/screenshots/features/reminders/02-new-reminder-obsidian.jpg | reminders/02-new-reminder-light.png<br>reminders/02-new-reminder-dark.png | 1080 × 2344 | /features/reminders/ | New reminder |
| src/assets/screenshots/features/shortcuts/01-quick-actions-obsidian.jpg | shortcuts/01-quick-actions-light.png<br>shortcuts/01-quick-actions-dark.png | 1080 × 2344 | /features/shortcuts/ | Quick Actions sheet over Home |
| src/assets/screenshots/features/shortcuts/02-add-new-shortcuts-obsidian.jpg | shortcuts/02-add-new-shortcuts-light.png<br>shortcuts/02-add-new-shortcuts-dark.png | 1080 × 2344 | /features/shortcuts/ | Add New sheet over Home |
| src/assets/screenshots/features/sms-import/01-sms-inbox-obsidian.jpg | sms-import/01-sms-inbox-light.png<br>sms-import/01-sms-inbox-dark.png | 1080 × 2193 | /features/sms-import/ | Import from SMS, Unreviewed |
| src/assets/screenshots/features/sms-import/02-otp-protection-obsidian.jpg | sms-import/02-otp-protection-light.png<br>sms-import/02-otp-protection-dark.png | 1080 × 2193 | /features/sms-import/ | Paste an SMS sheet with an OTP detected |
| src/assets/screenshots/features/sms-import/03-review-transaction-obsidian.jpg | sms-import/03-review-transaction-light.png<br>sms-import/03-review-transaction-dark.png | 1080 × 2193 | /features/sms-import/ | Review SMS sheet |
| src/assets/screenshots/features/themes/01-theme-picker-obsidian.jpg | themes/01-theme-picker-light.png<br>themes/01-theme-picker-dark.png | 1080 × 2193 | /features/themes/ | Theme sheet over Settings |
| src/assets/screenshots/features/upcoming-events/01-upcoming-events-obsidian.jpg | upcoming-events/01-upcoming-events-light.png<br>upcoming-events/01-upcoming-events-dark.png | 1080 × 2344 | /features/upcoming-events/ | Upcoming Events |
| src/assets/screenshots/features/voice-input/01-voice-add-obsidian.jpg | voice-input/01-voice-add-light.png<br>voice-input/01-voice-add-dark.png | 1080 × 2344 | /features/voice-input/ | Quick Add voice sheet, listening |
| public/assets/screens/home.jpg | press/home-light.png<br>press/home-dark.png | 1080 × 2344 | /press/ (Screenshot bundle) | Press kit · Home |
| public/assets/screens/more.jpg | press/more-light.png<br>press/more-dark.png | 1080 × 2344 | /press/ (Screenshot bundle) | Press kit · Spaces (More tab) |
| public/assets/screens/add.jpg | press/add-light.png<br>press/add-dark.png | 1080 × 2344 | /press/ (Screenshot bundle) | Press kit · Add transaction |
| public/assets/screens/settings.jpg | press/settings-light.png<br>press/settings-dark.png | 1080 × 2344 | /press/ (Screenshot bundle) | Press kit · Settings |

49 screens, 98 files.


## Feature pages · Group 1 (light)

Board: `Web v1 Feature Pages.dc.html` (G1-S). Pages G1.1 to G1.7 use these files. Sample data as on the SMS Import page (Gaurav Singh, Your Bank ••4321, Savings Bank ••1207, Rewards Card ••8890, today 6 Oct).

| File (web-v1/screenshots/) | Page | Based on | Notes |
|---|---|---|---|
| expense-tracking/01-home-light.png | /features/expense-tracking/ | Screen 2 · Home | Reused. The live page shows the home image twice (obsidian and alabaster); now shown once. |
| expense-tracking/02-add-transaction-light.png | /features/expense-tracking/ | Screen 4 · Add Transaction, typing "Gro", autofill suggestion and calculator button | Reused. |
| ask-kuber/01-ask-kuber-light.png | /features/ask-kuber/ | Screen 8 · Ask Kuber chat | Redrawn: food spending last month (₹8,840 in September, groceries and dining out). |
| ask-kuber/02-draft-transaction-light.png | /features/ask-kuber/ | Screen 8 · Ask Kuber chat | Redrawn: "add 250 in groceries" drafted, with Edit and Confirm. |
| kuber-cards/02-kuber-cards-light.png | /features/kuber-cards/ | Screen 24 · Kuber Cards | New. Two cards: Your Bank ••4321, Rewards Card ••8890. Shown second. |
| kuber-cards/01-kuber-cards-unlock-light.png | /features/kuber-cards/ | Screen 24 · Kuber Cards unlock (PIN pad with fingerprint key) | New. Shown first (renumbered from 02, per review). |
| kuber-notes/02-number-actions-light.png | /features/kuber-notes/ | Screen 23 · Kuber Notes, tapped number sheet | New (per review): tapping Total 1,045 opens Add as Transaction, Recurring, Investment, Loan, Lent / Borrow. |
| kuber-notes/01-kuber-notes-light.png | /features/kuber-notes/ | Screen 23 · Kuber Notes editor | Redrawn with the original grocery list: 220 * 4 = 880, -30 (discount), Total 1,045, tappable ₹500. |
| quick-add/01-home-widget-light.png | /features/quick-add/ | Screen 2 · Home, Quick Add widget | Redrawn with "300 in movies, 650 in trip" typed. |
| quick-add/02-parsed-transactions-light.png | /features/quick-add/ | Screen 10 · Quick Add | Redrawn: "300 in movies" (Movies) and "650 in trip" (new category Trip). |
| voice-input/01-voice-add-light.png | /features/voice-input/ and /features/quick-add/ | Screen 10 · Quick Add voice sheet, listening | Reused, made once. The repo also has quick-add/03-voice-add; point it at this file (or copy it under that name). |
| powerful-filtering/01-transaction-history-light.png | /features/powerful-filtering/ | Screen 5 · History (summary header: expenses, income, net; grouped by day) | Reused. |
| powerful-filtering/02-advanced-filters-light.png | /features/powerful-filtering/ | Screen 5 · History filters sheet | Redrawn: accounts now Your Bank, Savings Bank, Rewards Card, Cash. Min and Max fields now align (both filled). |
| powerful-filtering/03-category-filters-light.png | /features/powerful-filtering/ | Screen 5 · History filters, scrolled | Redrawn: Dining, Groceries and Shopping selected. |

All Group 1 screens come from real app screens in this project; none had to be guessed.


## Feature pages · Groups 2 to 4 (light)

Pages G2.1 to G4.7 in `Web v1 Feature Pages.dc.html`. Text, navigation paths and related features are parsed from `content/features/*.md` (copied verbatim into `web-v1/src/content/`).

| File (web-v1/screenshots/) | Page | Based on | Notes |
|---|---|---|---|
| calculators/01..04 (4 files) | /features/calculators/ | Screen 32 · Calculators and Tools | Reused. The app groups calculators as Finance Calculators, Tax & Salary, Planning, Quick Calculators; the page copy says Borrowing, Tax and Salary, Planning and Wealth, Daily Utilities. Screens follow the app. |
| detailed-analytics/01..06 (6 files) | /features/detailed-analytics/ | Screen 6 · Analytics, Advanced Analytics hub, Financial health score | Reused. The chart uses the app's Month dropdown and Bar / Line toggle. |
| reminders/01-reminders-list, 02-new-reminder | /features/reminders/ | Screen 25 · Reminders, New reminder | Reused. The app's chips are Overdue, Today, This week, Completed (no separate All chip). |
| automatic-backups/01-automatic-backups | /features/automatic-backups/ | Screen 12 · Automatic Backups | Reused. |
| money-stories/01..05 (5 files) | /features/money-stories/ | Home stories row + story viewer | Reused. |
| home-widgets/01-edit-home-widgets | /features/home-widgets/ | Edit Home Widgets | Reused. |
| themes/01-theme-picker | /features/themes/ | Settings, Theme sheet | Reused. 7 families, System / Light / Dark, as in the app design. |
| dev-mode/01-dev-tools-light.png | /features/dev-mode/ | Screen 29 · Dev Tools | New. Only the tools in the app design. |
| privacy-mode/01-privacy-mode-masked | /features/privacy-mode/ | Home, privacy mode on | Reused. |
| biometrics/01-biometric-settings-light.png | /features/biometrics/ | Screen 11 · Settings, Privacy & security | **Substitute.** No app lock screen with a fingerprint prompt exists in this project, so `01-app-lock-light` was not made. This shows the real Biometric Lock settings instead. Design the lock screen in the app first, then replace. |
| shortcuts/01-quick-actions, 02-add-new-shortcuts | /features/shortcuts/ | Quick Actions and Add New sheets | Reused. |
| upcoming-events/01-upcoming-events | /features/upcoming-events/ | Screen 26 · Upcoming Events | Reused. The app uses a Next 30 days dropdown chip rather than a 7 / 30 / 90 toggle. |
| recurring-transactions/01, loans/01, investments/01, lent-borrowed/01 | their pages | Screens 19, 21, 22, 20 | Reused. |
| budgets/01-budgets-light.png | /features/budgets/ | Screen 18 · Budgets | New. Within budget, near limit and over states. |
| multi-currency/01-currency-settings-light.png | /features/multi-currency/ | Screen 11 · Settings, Money display | **Partial.** No currency picker sheet exists in the app designs; this shows the Currency row in Settings. |
| multi-currency/02-currency-converter-light.png | /features/multi-currency/ | Screen 32 · Currency Converter | New. Uses other currencies, as the page is about them. |
| multi-lingual/01-select-language | /features/multi-lingual/ | Settings, Select language sheet | Reused. |
| import-export/01-data-management-light.png | /features/import-export/ | Screen 12 · Data Management | New. |
| pro-plans/01-pro-plans | /features/pro-plans/ | Screen 14 · Kuber Pro | Reused. Prices are in the app design, so no [CONFIRM: price]. |


## Review round (feature pages)

Based on the app code in `kuber/lib`.

| File (web-v1/screenshots/) | Page | Based on | Change |
|---|---|---|---|
| shortcuts/01-quick-actions-light.png | /features/shortcuts/ | `quick_actions/widgets/quick_actions_sheet.dart` | Redrawn at app size: control tiles are one row (40dp disc, title, caption, 12dp padding, radius 20), not tall cards. Shortcuts are the app defaults (Accounts, Investments, Lend/Borrow, EMI, Insights, Ask Kuber, Cards, Categories). "Privacy Mode" ellipsizes at 360dp, as the app's maxLines: 1 does. |
| privacy-mode/01-privacy-mode-masked-light.png | /features/privacy-mode/ | Screen 2 · Home | The active eye button is highlighted with a primary ring. |
| privacy-mode/02-privacy-quick-actions-light.png | /features/privacy-mode/ | `quick_actions_sheet.dart` | New: long-press a nav tab, Privacy Mode tile on (Amounts hidden). |
| themes/01-theme-picker-light.png | /features/themes/ | `settings/screens/theme_screen.dart` | Redrawn as the full Theme page (not a sheet) with the app's 20dp margins and an equal two-column grid (no overflow): Light / Dark / System toggle and family cards (3 swatches, lock on Pro families, Kuber Signature selected). The app ships 16 families; the page copy still says seven. |
| themes/02-theme-wallpaper-light.png | /features/themes/ | `theme_screen.dart`, scrolled | New: last family cards, the From your wallpaper toggle and the Preview card. The True black (AMOLED) row only appears while dark is active, so it is not in a light screenshot. |
| expense-tracking/03-add-details-light.png | /features/expense-tracking/ | Screen 4 · Add Transaction, scrolled | New: Date & time, Tags, Attachments (image or PDF) and the note field. |


## Review round 2

| File (web-v1/screenshots/) | Page | Based on | Change |
|---|---|---|---|
| voice-input/01-voice-add-light.png | /features/voice-input/, /features/quick-add/ | `quick_add/widgets/quick_add_voice_overlay.dart` | Redrawn: full-screen overlay with a soft radial primary glow and a bare 30-bar waveform (no blue pill), 22px transcript, on-device line, Cancel / Okay. |
| home-widgets/01-edit-home-widgets-light.png | /features/home-widgets/ | Edit Home Widgets | Adds the Pinned Suggestions widget after Ask Kuber. It is not in `widget_editor/data/widget_catalog.dart` in the attached code yet, so the name and caption ("Suggestions you pinned to Home") are to confirm. |
| privacy-mode/02-privacy-quick-actions-light.png, shortcuts/01-quick-actions-light.png | Privacy Mode, Shortcuts | `quick_actions_sheet.dart` | The Privacy Mode label now shows in full (wraps to two lines at 360dp) instead of ellipsizing. |

Site changes in the same round: Free / Pro badges removed from every feature card, header, related card and the Home signature cards (Beta stays); feature filter chips are now All and Signature; screenshot rows on feature pages fit the 1000 content width and stay centred; Home Numbers now read 15 banks, 12 Home widgets, 18 calculators, 16 themes, 9 languages and 6,500+ transactions tested (from the app code; the 6,500+ figure is from the developer).
