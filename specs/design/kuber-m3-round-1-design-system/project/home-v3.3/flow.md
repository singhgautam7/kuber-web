# Home v3.3 · Welcome flow

Board: `home-v3.3/Home v3.3.dc.html` HV33.1. Built on Home v3.2 (and v3.1 before it); where they differ, **Home v3.3 wins**. Change IDs (V33-xx) point to changelog.md.

## Functional steps checked

Onboarding (`onboarding_flow.dart`) has no permission, app lock or biometric step. SMS permission is asked from the Get started hero on Home (v2). App lock is in More › Security. Language, currency, name and theme live on Make it yours, which now opens Welcome. Data seeding runs when Make it yours is saved.

## Final flow

Make it yours and What do you want to track? come first, then the 5 tour pages. 7 dots across all of them. Skip is never shown on Make it yours (it holds the required choices), and is always shown in the same top-right place from W2 to W7.

| Step | Screen | Top bar | Back | Primary | Skip |
|---|---|---|---|---|---|
| W1 | Make it yours (functional, unchanged fields) | Brand row (logo 40, "Kuber"). Replaces the old Welcome page; no separate intro | none | Continue: validates, saves, seeds → W2 | none |
| W2 | What do you want to track? (no "How Kuber works" button) | Skip | → W1 | Continue (enabled after a pick) → W3 | → W3 (no picks saved) |
| W3 | Tour page 1 · Make noting every expense a habit. | Skip | → W2 | Next → W4 | → Home |
| W4 | Tour page 2 · Every account. Even credit cards. | Skip | → W3 | Next → W5 | → Home |
| W5 | Tour page 3 · Track more than spending. | Skip | → W4 | Next → W6 | → Home |
| W6 | Tour page 4 · Your spending, at a glance. | Skip | → W5 | Next → W7 | → Home |
| W7 | Tour page 5 · Go further when you want. | Skip | → W6 | Start using Kuber → Home | → Home |
| | Home (v3 day 1, unchanged) | | | | |

Rules:
- No Try it buttons anywhere in Welcome.
- `onboarded` is set when Make it yours is saved, so leaving during the tour (Skip, or killing the app) lands on Home next time.
- Skip on W2 moves on to the tour without saving picks; Home then uses the default widget set, as Skip did in v3.1.
- Each page's animation plays once, the first time the page is shown in this run. Swiping back shows the rest frame.
- Tour page 1 uses the currency picked on W1 for its amounts and its subhead (SMS line for INR only).
- Opening the tour in Welcome sets `tour.seenAt`, so the Home card can never show for this install.
- More › Welcome Tour replay is replaced by More › Why Kuber? (entry-points.md).

## Removed from Welcome

| Removed | Now |
|---|---|
| Old Welcome page (orbiting coin, "Your money. Your rules.", offline-first badge) | Logo and app name move to the brand row on Make it yours. Offline and no-signup facts: open-decisions 1 |
| v3.1 Purpose page | Replaced by tour page 1 |
| "How Kuber works" text button on What do you want to track? (v3.2) | Removed. The tour follows it in Welcome |
| v3.2 path: tracking page → tour → Start using Kuber | Tour now ends Welcome and its page 5 reads Start using Kuber (`homeV33_tourFinish`) |
