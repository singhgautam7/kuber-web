# Home v2 · widget inventory

Board: `home-v2/Home v2.dc.html` (HV2.1, HV2.5 to HV2.7). Source of truth for the catalog: `lib/features/widget_editor/data/widget_catalog.dart` (`kHomeWidgetCatalog`), builder switch in `dashboard_screen.dart`.

Home v2 applies only to the Home v2 cohort (see Cohort). `kHomeWidgetCatalog` and its `enabled` defaults are not changed; Home v2 adds a separate default table so existing users, including those who never saved preferences, keep today's Home.

## Classes

- **Default**: on from day one.
- **Data-gated**: hidden until its trigger is true, then turns on by itself (once) with a "New on your Home" label.
- **Opt-in**: only added through Edit Home Widgets.

## Inventory

Order is catalog order, which is also Home v2's default order.

| # | id | Editor name | v1 default (unchanged) | Home v2 class | Trigger (all counts exclude deleted rows) | First-appearance reason |
|---|---|---|---|---|---|---|
| 1 | `balance_hero` | Balance Card | on | **Default** | none | none |
| 2 | `insight_stories` | Money Stories | on | **Data-gated** | Story generator has produced at least 1 story | `wNewStories` |
| 3 | `spending_stats` | Spending Stats | on | **Data-gated** | Expense transactions on at least 7 distinct calendar days in the last 30 days | `wNewStats` |
| 4 | `quick_add` | Quick Add | on | **Default** | none | none |
| 5 | `ask_kuber_widget` | Ask Kuber | on | **Opt-in** | none (Ask Kuber suggestion opens the screen, it does not add the widget) | none |
| 6 | `sms_import_widget` | SMS Import | on | **Data-gated** | SMS permission granted AND at least 1 staged (unreviewed) SMS | `wNewSms` |
| 7 | `home_accounts` | Bank Accounts | on | **Data-gated** | At least 1 account created by the user or by SMS import (seeded default accounts do not count), OR any account balance is not 0 | `wNewAccounts` |
| 8 | `seven_day_chart` | Income & Expense | on | **Data-gated** | Income or expense transactions on at least 3 distinct calendar days (any date) | `wNewChart` |
| 9 | `budget_snapshot` | Budget Snapshot | off | **Data-gated** | At least 1 active budget | `wNewBudget` |
| 10 | `upcoming_events_widget` | Upcoming Events | on | **Data-gated** | At least 1 of: reminder, loan with an EMI, investment with a SIP, active recurring rule, ledger entry with a due date | `wNewEvents` |
| 11 | `kuber_notes_widget` | Kuber Notes | on | **Data-gated** | At least 1 note | `wNewNotes` |
| 12 | `recent_transactions` | Recent Transactions | off | **Default** | none | none |
| n/a | `smart_insights` | Smart insights | not in catalog | not exposed | Unchanged; see open-decisions 13 | none |

Fixed items outside the editor (header, greeting with rotating subtitle, promo banner) are unchanged. The promo banner's visibility rule in the setup phase is in suggestion-rules.md §1.

## Why these 3 Defaults

The suggested set was balance/accounts summary, recent transactions and this month's spending.

- **Balance Card** covers "this month's spending". It already shows the month's net with income and expense, so a separate spending widget on day 1 would repeat it.
- **Recent Transactions** (off in v1) is where imported and added transactions show up. After the first SMS import it shows the user that the import worked.
- **Quick Add** replaces the accounts summary. It is the fastest first action, works without SMS permission, and it is still useful after setup.
- **Bank Accounts** is Data-gated. On day 1 it can only show seeded accounts at ₹0. It turns on after SMS import creates bank accounts, which is a good moment for Home to grow.
- **Spending Stats** is Data-gated because average-per-day and projected-month figures are misleading with less than a week of data.

## State model (Home v2 cohort)

Each widget has a stored `visibility`: `auto` | `on` | `off`, plus `unlockedAt` and `labelState`.

| Class | Initial | Rendered when |
|---|---|---|
| Default | `on` | always |
| Data-gated | `auto` | trigger is true. The first time it is true, write `on` and `unlockedAt = now` (sticky: it stays even if the data is deleted later, and then shows its normal empty state) |
| Opt-in | `off` | never, until the user turns it on |

- Editor switch on: `on`. The widget shows now, with its normal empty state if there is no data.
- Editor switch off: `off`. It never turns on by itself again.
- Triggers are booleans from one provider (`homeV2GatesProvider`) built on Isar count queries and the SMS permission state. Recompute on Home build and on change streams for transactions, accounts, budgets, notes, loans, investments, recurring, reminders, ledger and stories. Hidden widgets are still not constructed.
- Insert position: catalog index. If the user has reordered, insert right after the nearest earlier catalog neighbour that is on Home. If there is none, insert first.

## First appearance ("New on your Home")

- Pill `wNewLabel` plus a one-line reason, above the widget header (HV2.5). No extra motion beyond the normal list insert.
- The label goes away after the first of: 3 Home sessions with the widget visible, the first tap inside the widget, or 7 days after `unlockedAt`.
- At most 2 labels at once. Any others unlock without a label, in catalog order.
- No label for widgets unlocked in the same session as a backup restore (see open-decisions 9).

## Empty states for the Defaults (HV2.6)

| Widget | Content | Action (hidden while Get started is on screen) |
|---|---|---|
| Balance Card | Caps label `{MONTH} · Net` (existing), `wBalanceEmpty`. No ₹0, no empty bar. | `wBalanceEmptyAct` → Add transaction |
| Quick Add | Existing field and hint, plus `wQuickHelper` under it until the first Quick Add transaction | The field itself |
| Recent Transactions | `wRecentEmptyTitle`, `wRecentEmptyBody` | `wRecentEmptyAct` → SMS import; `gsActAdd` when SMS is denied or blocked |

## Finding hidden widgets (HV2.7)

Home already has customization: the existing Edit widgets button at the bottom of Home opens Edit Home Widgets. Home v2 keeps both and adds:

- A line under the button, `wEditMore`, with the number of widgets still waiting. Hidden at 0.
- In the editor, a pinned first row `edSgTitle` / `edSgSub` (pin icon, not draggable). It is shown once Get started has graduated. Its switch reads and writes the same setting as Settings › `setSgTitle`. Suggestions always render in the top slot, whatever the widget order.
- Below it, three groups: `edSecOn` (on Home), `edSecAuto` (waiting, with the `edAuto*` reason as the row subtitle and the switch off), `edSecMore` (Opt-in). Reordering works across all groups.

## Cohort

- New setting `homeLayout`: `v1` | `v2`, written once and never changed by the app afterwards.
- `v2` when, on the first launch of the build that ships Home v2, onboarding has not been completed AND the database has 0 transactions. Every other install is `v1`.
- `v1` users: today's catalog defaults, saved preferences, editor, no Get started, no suggestions, no labels. Nothing in this spec runs for them.
