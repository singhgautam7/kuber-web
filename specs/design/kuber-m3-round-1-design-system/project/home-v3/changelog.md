# Home v3 · changelog (differences from Home v2)

Every change from Home v2, one entry per change, so code can find each one. Home v2 files are not edited; where v3 conflicts with v2, **v3 wins**. Each entry names the v2 rule it replaces, where it is specified in home-v3, and the code it touches today.

Baseline: `home-v2/*.md` plus the code as it is now. The code already differs from the v2 spec in two places (SMS Import is Default, Recent Transactions is Opt-in, see `kHomeV2Classes` in `lib/features/home_v2/data/home_v2_widgets.dart`). Both columns are shown where it matters.

Unchanged by v3 (listed so nobody looks for a change): bottom nav (tabs including History, order, Classic / Modern / Futuristic styles, behaviour); M3 tokens and components; Get started card content, steps, states and graduation rules; suggestion card visuals, triggers, thresholds, caps, cooldowns and lifecycle; promo banner rule; v1 (existing user) Home; everything outside Home, the Welcome flow and the accounts prompt.

## Cohort

**V3-01 · New cohort value `v3`**
- v2: new installs get `homeLayout = v2`.
- v3: new installs on the v3 build get `homeLayout = v3`. Existing `v2` installs stay `v2`; `v1` stays `v1`.
- Spec: widget-inventory.md › Cohort. Open: open-decisions 2.
- Code: `resolveHomeCohort` in `home_v2/data/home_v2_widgets.dart`, `HomeCohort` in `home_v2/data/home_v2_state.dart`.

## Day-1 Home and widget classes

**V3-02 · Day 1 shows only the Get started card**
- v2: Get started + 3 Defaults (spec: Balance Card, Quick Add, Recent Transactions; code: Balance Card, Quick Add, SMS Import).
- v3: Get started only, plus the existing Edit widgets button and count line. No widget is Default. Welcome choices can add widgets (V3-14).
- Spec: widget-inventory.md › Classes; board HV3.1, HV3.4. Open: open-decisions 4.
- Code: `kHomeV2Classes`, `homeV2InitialWidgetStates`.

**V3-03 · Recent Transactions off Home**
- v2: Default (spec) / Opt-in (code).
- v3: Opt-in. It lives in the History tab. No "Go to History" button on Home. v2 empty-state keys `homeV2_wRecentEmpty*` are not used by v3.
- Spec: widget-inventory.md row 12.
- Code: `kHomeV2Classes['recent_transactions']`.

**V3-04 · SMS Import: new class After setup**
- v2: Data-gated on staged SMS (spec) / Default (code).
- v3: hidden while Get started is eligible (its hero covers SMS import), turns on at graduation and stays for good. Android only.
- Spec: widget-inventory.md › Classes, row 6; suggestion-rules.md §2 Graduation.
- Code: new `HomeWidgetClass.afterSetup`; graduation handler in `get_started_provider.dart`.

**V3-05 · Quick Add: After setup**
- v2: Default.
- v3: After setup, like SMS Import, because Get started's secondary actions cover it and day 1 shows only the card.
- Spec: widget-inventory.md row 4. Open: open-decisions 5.

**V3-06 · Balance Card: Data-gated on first data**
- v2: Default.
- v3: Data-gated. Trigger: first data (transactions ≥ 1, or an account created or edited by the user).
- Spec: widget-inventory.md row 1 and "First data".
- Code: new `firstData` in `home_v2/services/home_v2_gates.dart` / `homeV2GatesProvider`.

**V3-07 · Bank Accounts trigger**
- v2: account created by the user or by SMS import (seeded ones excluded), or any non-zero balance.
- v3: first data, same as Balance Card.
- Spec: widget-inventory.md row 7.

**V3-08 · Income & Expense trigger**
- v2: transactions on 3 distinct days.
- v3: first data.
- Spec: widget-inventory.md row 8.

**V3-09 · Spending Stats unchanged on purpose**
- v2 and v3: expenses on 7 distinct days in the last 30. Listed because the brief's "graphs" could be read to include it.
- Open: open-decisions 7.

**V3-10 · Widgets appear quietly**
- v2: "New on your Home" pill and a reason line above a widget that just turned on, at most 2 at a time, plus `labelState`.
- v3: removed. Normal list insert only. No celebration, no snackbar. Keys `homeV2_wNewLabel` and `homeV2_wNew*` unused by v3; `labelState` not stored.
- Spec: widget-inventory.md › Quiet appearance.
- Code: label rendering in the dashboard builder for Data-gated widgets.

**V3-11 · Ask Kuber only as a suggestion**
- v2: Opt-in widget; discovery suggestion D1 at ≥ 20 transactions.
- v3: same rules, now stated as the only way Ask Kuber reaches Home. No code change.
- Spec: suggestion-rules.md §3 row D1. Open: open-decisions 10.

**V3-12 · Manage categories stays in More**
- No change. Not a Home widget and never added by gating.

## Welcome

**V3-13 · New screen: What do you want to track?**
- v2: Welcome flow (4 pages) goes straight to Home.
- v3: one screen after Welcome, before Home. Skippable. Multi-select chips: Daily spending, Loans and EMIs, Investments and SIPs, Money lent or borrowed, Subscriptions. Continue enabled after the first pick. Not shown on the Welcome Tour replay.
- Spec: widget-inventory.md › Welcome choices; board HV3.2; copy.md `trk*`. Open: open-decisions 8.
- Code: `onboarding/screens/onboarding_flow.dart` (`_saveAndStart`, `_skip` route to the new screen instead of `/`); new prefs `homeV3.trackingChoices`, `homeV3.trackingAnswer`.

**V3-14 · Choices turn on widgets from day 1**
- v3: Daily spending turns on Balance Card and Income & Expense; the other four turn on Upcoming Events. Empty state; empty-state actions stay hidden while Get started shows. Skipping changes nothing.
- Spec: widget-inventory.md › Welcome choices. Open: open-decisions 6, 9.

## Home customization

**V3-15 · Edit Home Widgets: What you track, Show all widgets, After setup group**
- v2: pinned Suggestions row, then On your Home, Turns on with your data, More widgets.
- v3: adds a top group with What you track (opens the chips sheet) and Show all widgets (turns every switch on, applies on Save). Adds section "Turns on after Get started" (Quick Add, SMS Import). Subtitle `edAutoFirst` replaces `edAutoAccounts` and `edAutoChart`, and is used for Balance Card. Recent Transactions moves to More widgets. `wEditMore` also counts After setup widgets.
- Spec: widget-inventory.md › Edit Home Widgets; board HV3.5. Open: open-decisions 9, 13.
- Code: `home_v2/widgets/home_v2_editor.dart`.

## Suggestions

**V3-18 · Welcome choices move matching suggestions back**
- v2: data candidates picked by priority number.
- v3: types that match a welcome choice sort after all other data types, still before discovery types.
- Spec: suggestion-rules.md §3 step 4 and §6.
- Code: `home_v2/engine/suggestion_engine.dart`.

## Accounts from SMS

**V3-16 · New prompt: add the banks and cards found in SMS**
- v2: none. SMS import never creates accounts; `AccountMatcher` only matches existing ones, so there was nothing to restyle.
- v3: bottom sheet over Home after leaving SMS import when the scan found banks or cards with no account. One found / several found (checkboxes, all selected) / all already added (nothing shown). Add creates the accounts, learns sender mappings, re-matches staged SMS and moves imported transactions out of untouched starter accounts.
- Spec: suggestion-rules.md §7; board HV3.3; copy.md `acc*`. Open: open-decisions 3, 11, 12.
- Code: new detection step after `SmsScanRunner`; `sms_import/engine/account_matcher.dart`, `sms_import/providers/sms_import_provider.dart`, `sms_account_mapping_provider.dart`, accounts repository.

**V3-17 · Credit card billing date follow-up**
- v3: after Add, one sheet per new credit card with a statement day grid, prefilled when parsed. Save writes `billingCycleDay`; Skip for now leaves the v2 credit card suggestion (P2) free to ask later.
- Spec: suggestion-rules.md §7; board HV3.3; copy.md `cc*` (title and body reuse `homeV2_sgCcTitle` / `homeV2_sgCcBody`).

## Copy

**V3-19 · New keys use `homeV3_`**
- All new strings are in home-v3/copy.md with the `homeV3_` prefix. Reused v2 keys and v2 keys the v3 cohort no longer uses are listed at the end of that file.

## Contrast for new components (all 7 palettes, light and dark)

Targets: chip labels 4.5:1, checkbox 3:1, selected day label 4.5:1. Computed from `tokens/palettes.json`; same figures on board HV3.6. The Get started hero is unchanged; its v2 table (home-v2/open-decisions.md) still applies.

| Theme | Mode | Selected chip (onSecondaryContainer on secondaryContainer) | Unselected chip label (onSurfaceVariant on surface) | Checkbox (primary on surfaceContainer) | Selected day (onPrimary on primary) | Result |
|---|---|---|---|---|---|---|
| Kuber Signature | Alabaster | 4.6:1 | 8.9:1 | 5.7:1 | 6.7:1 | Pass |
| Kuber Signature | Obsidian | 4.6:1 | 12.3:1 | 9.5:1 | 7.7:1 | Pass |
| FlewTube Red | Alabaster | 4.6:1 | 8.9:1 | 5.8:1 | 6.7:1 | Pass |
| FlewTube Red | Obsidian | 4.6:1 | 12.3:1 | 9.6:1 | 7.7:1 | Pass |
| Woofsapp Green | Alabaster | 4.6:1 | 8.9:1 | 5.5:1 | 6.4:1 | Pass |
| Woofsapp Green | Obsidian | 4.6:1 | 12.4:1 | 9.6:1 | 7.7:1 | Pass |
| Purrhub Yellow | Alabaster | 4.6:1 | 8.9:1 | 5.5:1 | 6.4:1 | Pass |
| Purrhub Yellow | Obsidian | 4.6:1 | 12.4:1 | 14.1:1 | 11.2:1 | Pass |
| Honkpe Purple | Alabaster | 4.6:1 | 8.9:1 | 5.7:1 | 6.7:1 | Pass |
| Honkpe Purple | Obsidian | 4.5:1 | 12.3:1 | 9.6:1 | 7.7:1 | Pass |
| Squeakdin Navy | Alabaster | 4.5:1 | 8.9:1 | 12.3:1 | 14.3:1 | Pass |
| Squeakdin Navy | Obsidian | 4.6:1 | 12.3:1 | 9.6:1 | 7.7:1 | Pass |
| Oinkzon Orange | Alabaster | 4.6:1 | 8.9:1 | 5.6:1 | 6.5:1 | Pass |
| Oinkzon Orange | Obsidian | 4.6:1 | 12.3:1 | 9.7:1 | 7.8:1 | Pass |

Selected chips pass with little margin (4.5 to 4.6:1); see open-decisions 14.

## Files

- `home-v3/Home v3.dc.html`: boards HV3.1 to HV3.6. Generated by `_kit/home_v3.js` via `_kit/build_home_v3.js`, which reads `_kit/home_v2.js` for the unchanged cards and never writes home-v2.
- `home-v3/widget-inventory.md`, `suggestion-rules.md`, `copy.md`, `open-decisions.md`.
