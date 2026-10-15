# Home v2 · copy

Every new string in Home v2. English source; each key gets an entry in every ARB file. Placeholders in braces; counts use ICU plurals. No string is built by joining other strings. Amounts are formatted by the existing currency formatter (₹, Indian grouping) before they are passed in. Existing strings that Home v2 reuses unchanged are not listed except where noted.

## Get started card

| Key | English | Notes |
|---|---|---|
| `homeV2_gsProgress` | {done} of 3 done | Eyebrow above the title. {done} is 0 to 3. |
| `homeV2_gsTitle` | Let's set up Kuber | Card title in every state except complete. |
| `homeV2_gsBodyFresh` | Import your bank SMS and Kuber adds your transactions for you. Your messages stay on this phone. | Fresh state body. |
| `homeV2_gsBodyOneDone` | Good start. Two more steps to go. | 1 of 3 done. |
| `homeV2_gsBodyTwoDone` | Almost there. One more step to go. | 2 of 3 done. |
| `homeV2_gsBodyDenied` | Kuber needs permission to read bank SMS. Messages are read on this phone and never uploaded. | SMS permission denied, can ask again. |
| `homeV2_gsBodyBlocked` | SMS access is turned off for Kuber. You can turn it on in your phone settings or paste a bank SMS. | SMS permission permanently denied. |
| `homeV2_gsStep1` | Import from SMS | Step 1. Done after the first SMS-sourced transaction (import or paste). |
| `homeV2_gsStep2` | Add a transaction yourself | Step 2. Done after the first manual or Quick Add transaction. |
| `homeV2_gsStep3` | Set your starting balance | Step 3. Done after any account opening balance is set. |
| `homeV2_gsStepNeedsPermission` | Needs SMS permission | Under step 1 in the denied and blocked states. |
| `homeV2_gsLimitTitle` | This week's free imports are used | Limit tile title. |
| `homeV2_gsLimitBody` | {count, plural, =1{1 more SMS is waiting in SMS import. It stays there until you import it.} other{# more SMS are waiting in SMS import. They stay there until you import them.}} | Limit tile body. count = staged, not imported. |
| `homeV2_gsLimitReset` | Free imports reset on {date}. | date = window start + 7 days, short date format of the locale (e.g. 18 Oct). |
| `homeV2_gsDoneTitle` | You're all set | Complete state title. |
| `homeV2_gsDoneBody` | Kuber will add more to your Home as you use it. | Complete state body. |
| `homeV2_gsActImport` | Import from SMS | Hero, fresh state. Opens SMS import (asks permission first if needed). |
| `homeV2_gsActAdd` | Add transaction | Secondary, or hero when step 2 is next. Opens Add transaction. |
| `homeV2_gsActQuick` | Quick Add | Secondary. Opens Quick Add full screen. |
| `homeV2_gsActBalance` | Set balance | Hero when step 3 is next. Opens Accounts with the first account selected. |
| `homeV2_gsActAllow` | Allow SMS access | Hero, denied state. Shows the system permission prompt. |
| `homeV2_gsActSettings` | Open phone settings | Hero, blocked state. Opens app settings. |
| `homeV2_gsActPaste` | Paste an SMS | Secondary, denied and blocked. Opens the paste sheet (free, never counts toward the limit). |
| `homeV2_gsActPro` | See Kuber Pro | Text button in the limit tile. Opens the paywall. |
| `homeV2_gsCloseA11y` | Close Get started | Close icon button tooltip and semantics label. |
| `homeV2_gsClosedSnack` | Get started is hidden. You can show it again from Settings. | Snackbar after closing the card. |
| `homeV2_actUndo` | Undo | Snackbar action. |

## Settings (Widgets group)

| Key | English | Notes |
|---|---|---|
| `homeV2_setGsTitle` | Get started card | Settings row title. Home v2 installs only, 30 days after install. |
| `homeV2_setGsSub` | Show setup steps on Home | Settings row subtitle. |
| `homeV2_setSgTitle` | Suggestions on Home | Settings row title. Home v2 installs only. |
| `homeV2_setSgSub` | Tips based on your own transactions | Settings row subtitle. |

## Default widget empty states

| Key | English | Notes |
|---|---|---|
| `homeV2_wBalanceEmpty` | Money in and money out for {month} will show here. | Balance card with no transactions this month. month = full month name. |
| `homeV2_wBalanceEmptyAct` | Add transaction | Text button. Hidden while Get started is visible. |
| `homeV2_wQuickHelper` | Type it or say it. Kuber works out the amount and category. | Under the Quick Add field until the first Quick Add transaction. |
| `homeV2_wRecentEmptyTitle` | No transactions yet | Existing string, reused. |
| `homeV2_wRecentEmptyBody` | Your latest transactions will show here. | Recent transactions with no data. |
| `homeV2_wRecentEmptyAct` | Import from SMS | Text button. Hidden while Get started is visible. Falls back to gsActAdd when SMS is denied or blocked. |
| `homeV2_wEditMore` | {count, plural, =1{1 more widget will turn on when it has something to show.} other{# more widgets will turn on when they have something to show.}} | Under Edit widgets. count = data-gated widgets still waiting. Hidden at 0. |

## Data-gated first appearance

| Key | English | Notes |
|---|---|---|
| `homeV2_wNewLabel` | New on your Home | Pill above the widget header. |
| `homeV2_wNewStories` | Added because your first money story is ready. | insight_stories |
| `homeV2_wNewStats` | Added because you have a week of spending. | spending_stats |
| `homeV2_wNewAccounts` | Added because Kuber found your bank accounts. | home_accounts |
| `homeV2_wNewChart` | Added because you have spending on 3 different days. | seven_day_chart |
| `homeV2_wNewSms` | Added because new bank SMS are waiting. | sms_import_widget |
| `homeV2_wNewEvents` | Added because you have something coming up. | upcoming_events_widget |
| `homeV2_wNewBudget` | Added because you set your first budget. | budget_snapshot |
| `homeV2_wNewNotes` | Added because you wrote your first note. | kuber_notes_widget |

## Edit Home Widgets (Home v2 installs)

| Key | English | Notes |
|---|---|---|
| `homeV2_edSecOn` | On your Home | Section header. |
| `homeV2_edSgTitle` | Suggestions | Pinned first row in On your Home. Same value as the Settings row setSgTitle. |
| `homeV2_edSgSub` | Tips from your own transactions. Always at the top. | Pinned row subtitle. |
| `homeV2_edSecAuto` | Turns on with your data | Section header. |
| `homeV2_edSecMore` | More widgets | Section header for Opt-in widgets. |
| `homeV2_edAutoNote` | These show up by themselves once they have something to show. Turn one on to show it now. | Helper under the section header. |
| `homeV2_edAutoStories` | Turns on when your first money story is ready | Row subtitle while waiting. |
| `homeV2_edAutoStats` | Turns on after a week of spending | Row subtitle while waiting. |
| `homeV2_edAutoAccounts` | Turns on when you add a bank account | Row subtitle while waiting. |
| `homeV2_edAutoChart` | Turns on after spending on 3 different days | Row subtitle while waiting. |
| `homeV2_edAutoSms` | Turns on when bank SMS are waiting | Row subtitle while waiting. |
| `homeV2_edAutoEvents` | Turns on with your first reminder, EMI, SIP or recurring payment | Row subtitle while waiting. |
| `homeV2_edAutoBudget` | Turns on with your first budget | Row subtitle while waiting. |
| `homeV2_edAutoNotes` | Turns on with your first note | Row subtitle while waiting. |

## Suggestion card (shared)

| Key | English | Notes |
|---|---|---|
| `homeV2_sgNotNow` | Not now | Text button. Snoozes this suggestion. |
| `homeV2_sgDismissA11y` | Don't suggest this again | Close icon tooltip and semantics label. Dismisses for good. |
| `homeV2_sgDismissedSnack` | Okay. Kuber won't suggest this again. | Snackbar after dismiss, with actUndo. |

## Suggestions

| Key | English | Notes |
|---|---|---|
| `homeV2_sgRecTitle` | {merchant} shows up every month | Recurring. merchant = display name of the payee. |
| `homeV2_sgRecBody` | {amount} around the same date for 3 months. Add it as recurring to see it before it's due. | Recurring. amount = median of the 3 charges. |
| `homeV2_sgRecAct` | Add as recurring | Opens the recurring form prefilled. |
| `homeV2_sgRecDone` | {merchant} is now a recurring payment. | In-card success. |
| `homeV2_sgLoanTitle` | Paying an EMI? | Loans. |
| `homeV2_sgLoanBody` | Your SMS show EMI payments to {lender}. Add the loan to see what's left to pay. | Loans. lender = bank from the SMS sender. |
| `homeV2_sgLoanAct` | Add loan | Opens Add loan prefilled with lender and EMI. |
| `homeV2_sgLoanDone` | Loan added. | In-card success. |
| `homeV2_sgInvTitle` | Investing through a SIP? | Investments. |
| `homeV2_sgInvBody` | Your SMS show a SIP of {amount} a month. Add it to see all your investments in one place. | Investments. |
| `homeV2_sgInvAct` | Add investment | Opens Add investment prefilled. |
| `homeV2_sgInvDone` | Investment added. | In-card success. |
| `homeV2_sgLedTitle` | Did you lend money to {name}? | Lend and borrow, transfer variant. |
| `homeV2_sgLedBody` | You sent {name} {amount} this month. Keep track of it in Lend and borrow. | Lend and borrow, transfer variant. |
| `homeV2_sgLedNoteTitle` | Keep track of money you lent? | Lend and borrow, note variant. |
| `homeV2_sgLedNoteBody` | Your note "{note}" mentions lending money. Add it to Lend and borrow so you don't forget. | Lend and borrow, note variant. note = note title. |
| `homeV2_sgLedAct` | Track it | Opens a new ledger entry prefilled. |
| `homeV2_sgLedDone` | Added to Lend and borrow. | In-card success. |
| `homeV2_sgBudTitle` | Set a budget for {category}? | Budget. |
| `homeV2_sgBudBody` | You spent {amount} on {category} in the last 30 days. A budget tells you when you're close. | Budget. |
| `homeV2_sgBudAct` | Set budget | Opens Add budget, amount prefilled (30-day total rounded up to the next ₹500). |
| `homeV2_sgBudDone` | Budget set for {category}. | In-card success. |
| `homeV2_sgCcTitle` | Add the billing date for {card} | Credit card. card = account name. |
| `homeV2_sgCcBody` | Kuber can then show this cycle's spending and when the bill is due. | Credit card. |
| `homeV2_sgCcAct` | Set billing date | Opens the account editor at the billing cycle field. |
| `homeV2_sgCcDone` | Billing date saved. | In-card success. |
| `homeV2_sgAskTitle` | Ask Kuber about your money | Feature discovery. |
| `homeV2_sgAskBody` | Try a question like "How much did I spend on food last month?" | Feature discovery. |
| `homeV2_sgAskAct` | Ask Kuber | Opens Ask Kuber with the sample question in the field. |
| `homeV2_sgVoiceTitle` | Add transactions by voice | Feature discovery. |
| `homeV2_sgVoiceBody` | Tap the mic in Quick Add and say something like "200 for lunch". | Feature discovery. |
| `homeV2_sgVoiceAct` | Try it | Opens Quick Add with the mic listening. |
| `homeV2_sgWidgetTitle` | Put Kuber on your home screen | Feature discovery. Android only. |
| `homeV2_sgWidgetBody` | See this month's spending and add a transaction without opening the app. | Feature discovery. |
| `homeV2_sgWidgetAct` | Add widget | Calls requestPinAppWidget. |
| `homeV2_sgCardsTitle` | Keep your cards in Kuber Cards | Feature discovery. |
| `homeV2_sgCardsBody` | Save card details behind your PIN or fingerprint. They stay on this phone. | Feature discovery. |
| `homeV2_sgCardsAct` | Set up Kuber Cards | Opens the Kuber Cards setup flow. |
