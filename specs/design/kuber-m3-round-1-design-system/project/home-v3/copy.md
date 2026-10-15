# Home v3 · copy

Every new string in Home v3. English source. Keys are `homeV3_` + the key below; each key goes into every ARB file (see open-decisions.md 1 on the language count). Placeholders in braces; counts use ICU plurals; no string is built by joining other strings; bank and card names are passed in as values. No em dashes. Short sentences, no idioms, so they translate cleanly.

## Welcome: what do you want to track?

| Key | English | Notes |
|---|---|---|
| `homeV3_trkTitle` | What do you want to track? | Screen title. Also the title of the same sheet in Edit Home Widgets. |
| `homeV3_trkBody` | Pick as many as you like. Kuber adds the matching widgets to your Home. You can change this later. | Body under the title. |
| `homeV3_trkDaily` | Daily spending | Filter chip. |
| `homeV3_trkLoans` | Loans and EMIs | Filter chip. |
| `homeV3_trkInvest` | Investments and SIPs | Filter chip. |
| `homeV3_trkLedger` | Money lent or borrowed | Filter chip. |
| `homeV3_trkSubs` | Subscriptions | Filter chip. |

## Edit Home Widgets

| Key | English | Notes |
|---|---|---|
| `homeV3_edTrackTitle` | What you track | First row. Opens the What do you want to track sheet. |
| `homeV3_edTrackSub` | {count, plural, =0{Nothing picked} =1{1 picked} other{# picked}} | Row subtitle. count = welcome choices picked. |
| `homeV3_edTrackNote` | Widgets for what you pick turn on now, even before they have data. | Under the chips in the sheet. |
| `homeV3_edShowAllTitle` | Show all widgets | Second row. |
| `homeV3_edShowAllSub` | Turn on every widget now, even before it has data | Row subtitle. |
| `homeV3_edShowAllAct` | Show all | Tonal button in the row. Turns every switch in the list on. Applies on Save changes. |
| `homeV3_edShowAllDone` | All widgets are on. Save to keep them. | Row subtitle after Show all, until Save. The button is hidden. |
| `homeV3_edAutoFirst` | Turns on with your first transaction or account | Row subtitle while waiting: Balance Card, Bank Accounts, Income and Expense. |
| `homeV3_edSecSetup` | Turns on after Get started | Section header for SMS Import and Quick Add. |
| `homeV3_edSetupRow` | Turns on when Get started is done | Row subtitle while waiting: SMS Import, Quick Add. |

## Accounts from SMS

| Key | English | Notes |
|---|---|---|
| `homeV3_accFoundOne` | We found {bank} in your SMS. Add it as an account? | Title, one account found. bank = short bank name from the sender table, e.g. HDFC. |
| `homeV3_accFoundTwo` | We found {bank1} and {bank2} in your SMS. Add them as accounts? | Title when the accounts found belong to exactly 2 banks (the list can hold 3 or more rows, e.g. a bank account and a card from the same bank). |
| `homeV3_accFoundMany` | {count, plural, other{We found # accounts in your SMS. Add them?}} | Title when they belong to 1 bank with 2 or more accounts, or to 3 or more banks. count is 2 or more. |
| `homeV3_accBody` | Kuber will match new bank SMS to these accounts. Balances start at zero until you set them. | Body under the title. |
| `homeV3_accRowBank` | Bank account · ending {last4} | Row subtitle. |
| `homeV3_accRowBankNoNum` | Bank account | Row subtitle when the SMS has no account number. |
| `homeV3_accRowCard` | Credit card · ending {last4} | Row subtitle. |
| `homeV3_accRowCardNoNum` | Credit card | Row subtitle when the SMS has no card number. |
| `homeV3_accNameCard` | {bank} Credit Card | Default name for a new card account. bank = short bank name. The user can rename it. |
| `homeV3_accMoveNote` | {count, plural, =1{1 imported transaction moves to its new account.} other{# imported transactions move to their new accounts.}} | Under the list. Counts only selected rows. Hidden at 0. |
| `homeV3_accAdd` | {count, plural, =0{Add accounts} =1{Add account} other{Add # accounts}} | Filled button. Disabled at 0. |
| `homeV3_accAddedSnack` | {count, plural, =1{Account added.} other{# accounts added.}} | Snackbar after adding (existing timed snackbar). |

## Credit card billing date (follow-up after adding)

| Key | English | Notes |
|---|---|---|
| `homeV3_ccProgress` | Card {index} of {total} | Eyebrow. Only when 2 or more cards were added. |
| `homeV3_ccDayLabel` | Statement day | Section header above the day grid. |
| `homeV3_ccFromSms` | Kuber found this day in your SMS. | Under the grid when the day is prefilled. |
| `homeV3_ccSkip` | Skip for now | Text button. The credit card suggestion can still ask later. |

## Existing strings reused by Home v3

Unchanged keys; listed so nobody adds duplicates.

| Key | Where in v3 |
|---|---|
| `homeV2_gs*`, `homeV2_actUndo` | Get started card, all states (unchanged) |
| `homeV2_sg*` | Suggestion card and every suggestion (unchanged) |
| `homeV2_sgNotNow` | Also the dismiss button of the accounts prompt |
| `homeV2_sgCcTitle`, `homeV2_sgCcBody` | Title and body of the credit card billing date sheet |
| `homeV2_wBalanceEmpty`, `homeV2_wBalanceEmptyAct`, `homeV2_wQuickHelper` | Empty states (unchanged) |
| `homeV2_wEditMore` | Count line under Edit widgets (now also counts After setup widgets) |
| `homeV2_edSecOn`, `homeV2_edSgTitle`, `homeV2_edSgSub`, `homeV2_edSecAuto`, `homeV2_edAutoNote`, `homeV2_edSecMore` | Edit Home Widgets |
| `homeV2_edAutoStories`, `homeV2_edAutoStats`, `homeV2_edAutoEvents`, `homeV2_edAutoBudget`, `homeV2_edAutoNotes` | Waiting row subtitles |
| `homeV2_setGsTitle`, `homeV2_setGsSub`, `homeV2_setSgTitle`, `homeV2_setSgSub` | Settings › Widgets |
| `continueLabel`, `skip`, Done, Save, Save changes | Existing app strings |

## Home v2 strings not used by the Home v3 cohort

Keep them for v2 installs. v3 wins: these are not shown to v3 installs.

| Key | Why |
|---|---|
| `homeV2_wNewLabel`, `homeV2_wNewStories`, `homeV2_wNewStats`, `homeV2_wNewAccounts`, `homeV2_wNewChart`, `homeV2_wNewSms`, `homeV2_wNewEvents`, `homeV2_wNewBudget`, `homeV2_wNewNotes` | Widgets appear quietly (V3-10) |
| `homeV2_wRecentEmptyTitle`, `homeV2_wRecentEmptyBody`, `homeV2_wRecentEmptyAct` | Recent Transactions is off Home (V3-03) |
| `homeV2_edAutoAccounts`, `homeV2_edAutoChart` | Replaced by `homeV3_edAutoFirst` (V3-07, V3-08) |
| `homeV2_edAutoSms` | SMS Import is After setup; uses `homeV3_edSetupRow` (V3-04) |
