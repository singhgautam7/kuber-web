# Home v3.1 · widget inventory: welcome choices

Only the chip-to-widget mapping changes. Everything else in `home-v3/widget-inventory.md` (classes, triggers, state model, quiet appearance, Edit Home Widgets, cohort) still applies. Where this file differs, **v3.1 wins over v3**. Board: HV31.4.

## Why Daily spending is replaced (V31-06)

In v3, Daily spending turned on Balance Card and Income & Expense. Both are Data-gated on first data, so every user gets them with the first transaction, picked or not. The chip promised widgets but only moved them a few minutes earlier, in empty state. v3.1 replaces it with **Budgets**.

## Mapping

| Choice key | Chip | Turns on from day 1 (empty state) | Empty-state line | Moves back (suggestion-rules §6) |
|---|---|---|---|---|
| `budgets` (new) | `homeV31_trkBudgets` Budgets | Budget Snapshot (`budget_snapshot`) | `homeV31_budEmpty` (new; the widget had no empty state) | Budget (5) |
| `loans` | Loans and EMIs | Upcoming Events (`upcoming_events_widget`) | `homeV31_evEmptyLoans` | Loans (1) |
| `investments` | Investments and SIPs | Upcoming Events | `homeV31_evEmptyInvest` | Investments (4) |
| `ledger` | Money lent or borrowed | Upcoming Events | `homeV31_evEmptyLedger` | Lend and borrow (6) |
| `subscriptions` | Subscriptions | Upcoming Events | `homeV31_evEmptySubs` | Recurring (3) |
| `daily` (removed) | none | none | none | none (v3 also moved Budget and Quick Add voice back; Quick Add voice is no longer moved, V31-08) |

Chip order: Budgets, Loans and EMIs, Investments and SIPs, Money lent or borrowed, Subscriptions.

## Upcoming Events empty line

Upcoming Events is the widget for four choices, so its empty line follows the picks (v3.1 wins over the single "Nothing due in the next 30 days." line for users who picked any of them):

| Picks among loans, investments, ledger, subscriptions | Line |
|---|---|
| Exactly 1 | That choice's line from the table above |
| 2 or more | `homeV31_evEmptyMany` |
| 0 (widget turned on by data or by hand) | Existing "Nothing due in the next 30 days." |

## The subtitle's promise

"Kuber adds the matching widgets to your Home" (`homeV3_trkBody`, unchanged) now holds for every chip: each one turns on a widget that is not on day-1 Home otherwise, and the widget's empty state names what was picked.

## Migration

Installs that answered the v3 question with `daily`: drop `daily` from `homeV3.trackingChoices` on upgrade. Widgets it already turned on stay on. No chip is preselected (open-decisions 6).
