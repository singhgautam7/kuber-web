# Home v3 · widget inventory

Board: `home-v3/Home v3.dc.html` (HV3.1, HV3.4, HV3.5). Built on `home-v2/widget-inventory.md`; this file is the full v3 inventory and replaces v2's for the Home v3 cohort. Where they differ, **v3 wins over v2** and the line says so. Change IDs (V3-xx) point to `changelog.md`.

Source of truth for the catalog: `lib/features/widget_editor/data/widget_catalog.dart` (`kHomeWidgetCatalog`, unchanged). Home v2 classes live in `lib/features/home_v2/data/home_v2_widgets.dart` (`kHomeV2Classes`); v3 adds a separate table so v1 and v2 installs keep their behaviour.

## Classes

- **Data-gated**: hidden until its trigger is true, then turns on by itself, once, and stays (sticky, as in v2).
- **After setup** (new in v3, V3-04): hidden while the Get started card is eligible; turns on once Get started graduates (any reason) or its setting is turned off, and stays.
- **Opt-in**: only added through Edit Home Widgets, Show all widgets, or a welcome choice.
- **Default** (v2 class): **no widget is Default in v3**. Day 1 shows only the Get started card (V3-02). v3 wins over v2, which had 3 Defaults.

A welcome choice (V3-13) turns its widgets **on** from day 1 whatever their class, in their normal empty state.

## Inventory

Catalog order, which is also the insert order.

| # | id | Editor name | v2 class (spec / code today) | **v3 class** | v3 trigger (counts exclude deleted rows) | Welcome choices that turn it on | Change |
|---|---|---|---|---|---|---|---|
| 1 | `balance_hero` | Balance Card | Default / Default | **Data-gated** | First data: transactions ≥ 1 OR the user created or edited any account | Daily spending | V3-06 |
| 2 | `insight_stories` | Money Stories | Data-gated / Data-gated | Data-gated | Unchanged: at least 1 story | none | none |
| 3 | `spending_stats` | Spending Stats | Data-gated / Data-gated | Data-gated | Unchanged: expenses on ≥ 7 distinct days in the last 30 | none | V3-09 (see open-decisions 7) |
| 4 | `quick_add` | Quick Add | Default / Default | **After setup** | Get started graduated | none | V3-05 |
| 5 | `ask_kuber_widget` | Ask Kuber | Opt-in / Opt-in | Opt-in | none. Reaches Home only as a suggestion (about 20 transactions), which opens the screen | none | V3-11 |
| 6 | `sms_import_widget` | SMS Import | Data-gated / Default | **After setup** | Get started graduated. Then permanent. Android only (no SMS on iOS) | none | V3-04 |
| 7 | `home_accounts` | Bank Accounts | Data-gated / Data-gated | Data-gated | **First data** (same as Balance Card). v3 wins over v2's "account created by user or SMS, or a non-zero balance" | none | V3-07 |
| 8 | `seven_day_chart` | Income & Expense | Data-gated / Data-gated | Data-gated | **First data**. v3 wins over v2's "3 distinct days" | Daily spending | V3-08 |
| 9 | `budget_snapshot` | Budget Snapshot | Data-gated / Data-gated | Data-gated | Unchanged: at least 1 active budget | none | none |
| 10 | `upcoming_events_widget` | Upcoming Events | Data-gated / Data-gated | Data-gated | Unchanged: reminder, loan with EMI, investment with SIP, active recurring rule, or ledger entry with a due date | Loans and EMIs, Investments and SIPs, Money lent or borrowed, Subscriptions | V3-14 |
| 11 | `kuber_notes_widget` | Kuber Notes | Data-gated / Data-gated | Data-gated | Unchanged: at least 1 note | none | none |
| 12 | `recent_transactions` | Recent Transactions | Default / Opt-in | **Opt-in** | none. Lives in the History tab. No "Go to History" button on Home | none | V3-03 |
| n/a | `smart_insights` | Smart insights | not in catalog | not exposed | Unchanged | none | none |

**First data** (one boolean in `homeV2GatesProvider`, new field `firstData`): non-deleted transactions of any source ≥ 1, OR an account was created by the user (Add account, or the accounts-from-SMS prompt), OR an account was edited by the user (any field, including the opening balance). Accounts seeded at install (Cash, Bank, Credit Card, kept in `seededAccountIds`) do not count until the user edits one.

Not on Home in v3 and never added by gating: Manage categories (stays in More, V3-12). Every feature stays reachable from the bottom nav and More from day 1; gating decides only what sits on Home.

Fixed items outside the editor are unchanged from v2: header, greeting, promo banner (hidden while Get started is eligible), Edit widgets button and the `wEditMore` count line.

## Welcome choices (V3-13, V3-14)

Asked once, on the screen after Welcome (HV3.2). Stored as `homeV3.trackingChoices` (list) plus `homeV3.trackingAnswer` = `picked` | `skipped`.

| Choice key | Chip | Turns on (empty state) | Lowers these suggestions (suggestion-rules.md §6) |
|---|---|---|---|
| `daily` | `trkDaily` Daily spending | Balance Card, Income & Expense | Budget, Quick Add voice |
| `loans` | `trkLoans` Loans and EMIs | Upcoming Events | Loans |
| `investments` | `trkInvest` Investments and SIPs | Upcoming Events | Investments |
| `ledger` | `trkLedger` Money lent or borrowed | Upcoming Events | Lend and borrow |
| `subscriptions` | `trkSubs` Subscriptions | Upcoming Events | Recurring |

- The catalog has no loan, investment, ledger or subscription widget, so four choices share Upcoming Events (open-decisions 6).
- Turning on means: write `on` for each mapped widget unless the user has already switched it off in the editor (`off` is kept). Empty-state actions stay hidden while Get started is on screen (v2 rule, unchanged).
- **Skipped**, or Continue never reached: nothing is turned on; Home is the day-1 Home with Get started only.
- **Editing later** (Edit Home Widgets › What you track): a new pick turns its widgets on when the editor is saved. Removing a pick hides nothing and changes only suggestion order (open-decisions 9).

## State model (Home v3 cohort)

As in v2: each widget has `visibility` = `auto` | `on` | `off`, plus `unlockedAt`. v3 drops `labelState` (V3-10).

| Class | Initial | Rendered when |
|---|---|---|
| Data-gated | `auto` (`on` if a welcome choice maps to it) | Trigger true. First time: write `on`, `unlockedAt = now` (sticky) |
| After setup | `auto` | Get started graduated or its setting off. First time: write `on` (sticky) |
| Opt-in | `off` (`on` if a welcome choice maps to it) | Never, until turned on |

- Editor switch on: `on`, shows now with its empty state. Switch off: `off`, never turns on by itself again.
- **Show all widgets** (V3-15): sets every row's switch on in the editor; Save changes writes `on` for all 12. After that nothing is `auto`.
- Insert position: unchanged from v2 (catalog index, or after the nearest earlier catalog neighbour on Home).
- Recompute triggers on Home build and on the v2 change streams, plus the Get started graduation event.

## Quiet appearance (V3-10)

**v3 wins over v2 "First appearance".** No `wNewLabel` pill, no reason line, no count of labels. A widget that turns on is inserted with the normal list insert and nothing else. The v2 keys `homeV2_wNew*` are not used by the v3 cohort.

## Edit Home Widgets (HV3.5, V3-15)

Order, top to bottom:

1. Group: `edTrackTitle` What you track (subtitle `edTrackSub`, opens the chips sheet) and `edShowAllTitle` Show all widgets (tonal `edShowAllAct`; after tapping, subtitle `edShowAllDone` and no button).
2. `edSecOn` On your Home, with the v2 pinned Suggestions row first once Get started has graduated (unchanged from v2). Hidden when no widget is on.
3. `edSecAuto` Turns on with your data, with `edAutoNote`. Subtitles: `edAutoFirst` for Balance Card, Bank Accounts, Income & Expense (v3 wins over v2 `edAutoAccounts` / `edAutoChart`); v2 `edAuto*` for the rest.
4. `edSecSetup` Turns on after Get started: Quick Add, SMS Import, subtitle `edSetupRow`. Empty once Get started graduates, then hidden.
5. `edSecMore` More widgets: Ask Kuber, Recent Transactions.

All rows apply on Save changes, as in v2. `wEditMore` counts Data-gated plus After setup widgets still waiting (10 on a skipped day 1).

## Cohort (V3-01)

- `homeLayout` gains `v3`. New installs on the first launch of the v3 build (onboarding not completed AND 0 transactions AND no home widget rows) get `v3`. v3 wins over v2, which gave these installs `v2`.
- `v2` installs stay `v2` (open-decisions 2). `v1` installs keep today's Home; nothing in this file runs for them.
