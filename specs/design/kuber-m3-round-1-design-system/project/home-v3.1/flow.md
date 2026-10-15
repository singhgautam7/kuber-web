# Home v3.1 · Welcome flow

Board: `home-v3.1/Home v3.1.dc.html` (HV31.1 current flow, HV31.2 final flow). Built on Home v3; where they differ, **v3.1 wins**. Change IDs (V31-xx) point to changelog.md.

## Current flow (inventory)

Source: `lib/features/onboarding/screens/onboarding_flow.dart` (one PageView, 4 pages, dots, Skip on pages 1 to 3), then the v3 tracking question, then Home.

| # | Page | Job today | Decision | Why |
|---|---|---|---|---|
| 1 | Your money. Your rules. (`onboarding_page_1.dart`, orbiting coin, offline-first badge) | First impression: offline, no signup | **Keep** | Short, sets trust. Only the dots change (3 instead of 4) |
| 2 | Private by design (`onboarding_page_2.dart`, 3 rows: fully offline, no account, privacy mode) | Privacy facts | **Merge** into Purpose | Repeats page 1 ("lives on your device, no cloud, no signup"). Its one new idea, that data stays on the phone, matters most when Kuber reads SMS, so it moves into the Purpose subhead |
| 3 | Everything in one quiet place (`onboarding_page_3.dart`, 8 module tiles + "and much more") | Feature list | **Remove** | Lists 8+ modules before the user has done anything; this is the overwhelm the brief names. Replaced by Purpose |
| 4 | Make it yours (`onboarding_page_4.dart`: name, language, currency, theme) | **Functional**: saves settings, seeds data | **Keep**, unchanged fields | Functional step. Primary label becomes Continue, subtitle drops "and you're in" (V31-05) |
| v3 | What do you want to track? | Turns on widgets, orders suggestions | **Keep**, one chip changed | V31-06 |
| after | "Just so you know" sheet over Home (`onboarding_tutorial_nudge.dart`) | Points to App Tutorial | **Remove** | A second card on day-1 Home next to Get started. App Tutorial stays in More (open-decisions 2) |

Functional steps checked: onboarding has no permission, app lock or biometric step today. SMS permission is asked from the Get started hero on Home (v2, unchanged). App lock is in More › Security (unchanged). Data seeding runs when Make it yours is saved, as today.

## Final flow

| Step | Screen | Counts toward the 3 | Back | Primary | Skip |
|---|---|---|---|---|---|
| 1 | Welcome (page 1, dots 1 of 3) | Yes | none | Get started → Purpose | → What do you want to track? |
| 2 | **Purpose** (new, dots 2 of 3) | Yes | → Welcome | Continue → Make it yours | → What do you want to track? |
| F | Make it yours (functional, dots 3 of 3) | No (functional) | → Purpose | Continue: validates, saves, seeds, then → What do you want to track? | none (as today) |
| 3 | What do you want to track? (separate route, no dots) | Yes | System back → Make it yours | Continue (enabled after a pick) → Home | → Home |
| | Home (v3 day 1, unchanged) | | | | |

- Skip from Welcome or Purpose keeps today's `_skip` behaviour (sets onboarded, seeds data, skips Make it yours), then goes to the tracking question as in v3.
- Welcome Tour replay (More › Welcome Tour, `isReplay`): Welcome and Purpose only, then back. No setup page, no tracking question (v3 rule kept).
- No sheet opens on Home after onboarding (V31-07).

## Removed, and where its content went

| Removed | Content | Now |
|---|---|---|
| Page 2 Private by design | Fully offline, no account needed, privacy mode | On-device promise in the Purpose subhead. Offline and no signup stay on Welcome. Privacy mode stays in Settings and the Home header eye icon |
| Page 3 module grid | Budgets, Analytics, Recurring, Lend and borrow, Investments, Ask Kuber, Tools, Tags and categories | Reachable from the nav and More from day 1. Home adds them as data arrives (v3) or through the tracking question |
| Just so you know sheet | Explore at your own pace; App Tutorial in More | App Tutorial in More, unchanged |
