# Home v3.1 · changelog (differences from Home v3)

Every change from Home v3, so code can find each one. home-v2 and home-v3 files are not edited; where v3.1 conflicts with them, **v3.1 wins**. Each entry names what it replaces, where it is specified, and the code it touches.

Unchanged (listed so nobody looks for a change): bottom nav; Home v3 behaviour (classes, triggers, Get started, suggestions, accounts prompt, Edit Home Widgets); Make it yours fields and validation; data seeding; SMS permission (asked from the Get started hero); app lock (More › Security); M3 tokens, components and motion tokens.

## Welcome flow

**V31-01 · Page 2 "Private by design" removed, merged into Purpose**
- v3: page 2 of 4, three privacy rows.
- v3.1: removed. Its on-device promise is the Purpose subhead (`homeV31_purBody`).
- Spec: flow.md. Board HV31.1.
- Code: drop `OnboardingPageTwo` from the PageView in `onboarding/screens/onboarding_flow.dart`; `onboarding_page_2.dart` becomes unused.

**V31-02 · Page 3 module grid removed**
- v3: "Everything in one quiet place", 8 module tiles.
- v3.1: removed, replaced by Purpose.
- Code: drop `OnboardingPageThree`; `onboarding_page_3.dart` becomes unused.

**V31-03 · New Purpose page with a one-shot animation**
- v3.1: page 2 of 3. Headline `homeV31_purTitle`, subhead `homeV31_purBody`, 3.19 s animation that rests on its last frame, static frame under reduced motion.
- Spec: storyboard.md. Board HV31.3, HV31.5.
- Code: new `onboarding/pages/onboarding_page_purpose.dart` (one `AnimationController`, Interval curves, `CustomPainter` for the lines).

**V31-04 · PageView has 3 pages; dots show 3**
- v3: 4 pages, 4 dots; Make it yours was index 3.
- v3.1: Welcome (0), Purpose (1), Make it yours (2). `_saveAndStart` and the primary-label switch move from index 3 to 2.
- Code: `onboarding_flow.dart`, `onboarding_dots_indicator.dart` (count from the page list), `onboarding_nav_bar.dart` (`busy` on the last index).

**V31-05 · Make it yours labels**
- v3: subtitle "Three quick choices and you're in.", primary "Start my journey".
- v3.1: subtitle `homeV31_setupSub` "Three quick choices.", primary `continueLabel` "Continue", because the tracking question follows. Fields unchanged.
- Code: `onboarding_page_4.dart`, `onboarding_flow.dart`.

**V31-07 · "Just so you know" sheet removed**
- v3: shown on Home 400 ms after Start my journey.
- v3.1: not shown. App Tutorial stays in More.
- Spec: flow.md; open-decisions 2.
- Code: remove the `showTutorialNudgeSheet` call in `_saveAndStart`.

## What do you want to track?

**V31-06 · Daily spending replaced by Budgets**
- v3: Daily spending → Balance Card, Income & Expense (both appear with the first transaction anyway).
- v3.1: Budgets → Budget Snapshot from day 1, moves the Budget suggestion back. Choice key `budgets`; stored `daily` is dropped on upgrade.
- Spec: widget-inventory.md. Board HV31.4.
- Code: choice enum and mapping (v3 `homeV3.trackingChoices`), tracking screen chips.

**V31-08 · Quick Add voice no longer moved back**
- v3: Daily spending also moved Quick Add voice (D2) back.
- v3.1: no choice moves D2.
- Code: `home_v2/engine/suggestion_engine.dart` choice table.

**V31-09 · Budget Snapshot empty state (new)**
- v3: the widget had no empty state (it only appeared with a budget).
- v3.1: `homeV31_budEmpty`, centred icon and line, same pattern as Upcoming Events. Action hidden while Get started shows.
- Code: Budget Snapshot widget in the dashboard builder.

**V31-10 · Upcoming Events empty line follows the picks**
- v3: always "Nothing due in the next 30 days."
- v3.1: one line per choice when exactly one of its four choices was picked, a shared line for 2 or more, the old line otherwise.
- Spec: widget-inventory.md › Upcoming Events empty line.
- Code: Upcoming Events widget empty state reads `homeV3.trackingChoices`.

## Copy

**V31-11 · New keys use `homeV31_`**
- All new and changed strings are in home-v3.1/copy.md, with removed and reused keys listed at the end.

## Contrast for new elements (all 7 palettes, light and dark)

Targets: text 4.5:1, drawn lines 3:1. Same figures on board HV31.5.

| Theme | Mode | SMS text (onSurface on surfaceContainerHigh) | SMS sender line (onSurfaceVariant on surfaceContainerHigh) | Drawn line (primary on surface) | Selected chip | Caps labels (onSurfaceVariant on surface) | Result |
|---|---|---|---|---|---|---|---|
| Kuber Signature | Alabaster | 14.0:1 | 7.6:1 | 6.4:1 | 4.6:1 | 8.9:1 | Pass |
| Kuber Signature | Obsidian | 11.1:1 | 8.4:1 | 12.3:1 | 4.6:1 | 12.3:1 | Pass |
| FlewTube Red | Alabaster | 14.0:1 | 7.6:1 | 6.4:1 | 4.6:1 | 8.9:1 | Pass |
| FlewTube Red | Obsidian | 11.1:1 | 8.4:1 | 12.3:1 | 4.6:1 | 12.3:1 | Pass |
| Woofsapp Green | Alabaster | 14.1:1 | 7.6:1 | 6.1:1 | 4.6:1 | 8.9:1 | Pass |
| Woofsapp Green | Obsidian | 11.1:1 | 8.5:1 | 12.3:1 | 4.6:1 | 12.4:1 | Pass |
| Purrhub Yellow | Alabaster | 14.0:1 | 7.6:1 | 6.1:1 | 4.6:1 | 8.9:1 | Pass |
| Purrhub Yellow | Obsidian | 11.1:1 | 8.4:1 | 18.0:1 | 4.6:1 | 12.4:1 | Pass |
| Honkpe Purple | Alabaster | 14.0:1 | 7.6:1 | 6.4:1 | 4.6:1 | 8.9:1 | Pass |
| Honkpe Purple | Obsidian | 11.2:1 | 8.5:1 | 12.3:1 | 4.5:1 | 12.3:1 | Pass |
| Squeakdin Navy | Alabaster | 14.0:1 | 7.7:1 | 13.6:1 | 4.5:1 | 8.9:1 | Pass |
| Squeakdin Navy | Obsidian | 11.1:1 | 8.4:1 | 12.3:1 | 4.6:1 | 12.3:1 | Pass |
| Oinkzon Orange | Alabaster | 14.0:1 | 7.7:1 | 6.2:1 | 4.6:1 | 8.9:1 | Pass |
| Oinkzon Orange | Obsidian | 11.1:1 | 8.4:1 | 12.5:1 | 4.6:1 | 12.3:1 | Pass |

## Files

- `home-v3.1/Home v3.1.dc.html`: boards HV31.1 to HV31.5. Generated by `_kit/home_v31.js` via `_kit/build_home_v31.js` (reads `_kit/home_v2.js` for the Get started card; never writes home-v2 or home-v3).
- `home-v3.1/flow.md`, `storyboard.md`, `widget-inventory.md`, `copy.md`, `open-decisions.md`.
