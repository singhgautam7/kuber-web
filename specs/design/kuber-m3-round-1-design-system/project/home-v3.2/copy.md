# Home v3.2 · copy

Every new string in Home v3.2. English source. Keys are `homeV32_` + the key below, in every ARB file. Placeholders in braces; no string is built from pieces; amounts are formatted with the user's currency by the existing formatter (₹ with Indian grouping for INR). Demo names (Rahul, Goa trip, Your Bank) are sample data and are translated or kept as the translator sees fit. No em dashes. Short sentences, no idioms.

## Entry points

| Key | English | Notes |
|---|---|---|
| `homeV32_tourName` | How Kuber works | Tour name: Home card title, More row title, Welcome button label. |
| `homeV32_tourCardBody` | One habit: note every expense. Kuber does the rest. | Home card line. |
| `homeV32_tourCardAct` | Show me | Home card tonal button. Opens the tour at page 1. |
| `homeV32_tourCardHideA11y` | Hide this card | Close icon tooltip and semantics label. |
| `homeV32_tourCardHidden` | You can find How Kuber works in More. | Snackbar after the close icon, with homeV2_actUndo. |
| `homeV32_tourMoreSub` | A short tour of the main ideas | More › Tutorial row subtitle. |

## Tour chrome

| Key | English | Notes |
|---|---|---|
| `homeV32_tourNext` | Next | Primary button, pages 1 to 4. |
| `homeV32_tourStart` | Start using Kuber | Primary button on page 5 when opened from Welcome. Finishes onboarding and opens Home. |
| `homeV32_tourPageA11y` | Page {page} of {total} | Semantics label on the dots. |

## Page 1 · Note it

| Key | English | Notes |
|---|---|---|
| `homeV32_p1Title` | Note every expense. See where it goes. | Headline. Same string as the v3.1 Purpose screen, which now uses this key (homeV31_purTitle retired). 7 words: kept as the brief asks, see open-decisions 1. |
| `homeV32_p1SubSms` | Even the small ones. Bank SMS add most of them for you. | Subhead when the currency is INR. |
| `homeV32_p1SubQuick` | Even the small ones. Quick Add takes a few seconds. | Subhead for any other currency (SMS import is India only). |
| `homeV32_p1Try` | Add a transaction | Try it. Opens Add transaction. |
| `homeV32_qaLabel` | Quick Add | Small caps label above the demo Quick Add field. |
| `homeV32_qaText` | {amount} food delivery | Demo text typed into Quick Add. amount = sample amount without the symbol (250, or 12.50). |
| `homeV32_qaTag` | Added with Quick Add | Demo source line under the transaction, non-INR version. |
| `homeV32_p1A11yQuick` | A Quick Add entry turns into a Food transaction in your Bank account. | Animation semantics, non-INR version. INR uses homeV31_purA11y. |

## Page 2 · Organize it

| Key | English | Notes |
|---|---|---|
| `homeV32_p2Title` | Everything lands in place. | Headline. |
| `homeV32_p2Sub` | Each expense goes to an account and a category. Balances update on their own. | Subhead. |
| `homeV32_p2Try` | Open Accounts | Try it. Opens More › Accounts. |
| `homeV32_p2Balance` | Balance | Label above a bank or cash balance in the animation. |
| `homeV32_p2Due` | Due | Label above the credit card amount in the animation. |
| `homeV32_p2Groceries` | Groceries | Demo transaction and its category. |
| `homeV32_p2Auto` | Auto ride | Demo transaction. |
| `homeV32_p2Transport` | Transport | Demo category. |
| `homeV32_p2Movie` | Movie tickets | Demo transaction. |
| `homeV32_p2Fun` | Entertainment | Demo category. |
| `homeV32_p2A11y` | Three expenses move into Bank, Cash and Credit card, each with a category, and the balances update. | Animation semantics. |

## Page 3 · Track everything

| Key | English | Notes |
|---|---|---|
| `homeV32_p3Title` | Nothing due slips by. | Headline. |
| `homeV32_p3Sub` | Subscriptions, EMIs, SIPs, money lent, budgets and reminders in one place. | Subhead. |
| `homeV32_p3Try` | Open Upcoming events | Try it. Opens More › Upcoming Events. |
| `homeV32_p3Stream` | Streaming plan | Demo row. |
| `homeV32_p3Sub1` | Subscription | Demo row type. |
| `homeV32_p3Bill` | Electricity bill | Demo row. |
| `homeV32_p3Reminder` | Reminder | Demo row type. |
| `homeV32_p3Lent` | Rahul owes you | Demo row. Sample name. |
| `homeV32_p3LentType` | Lent | Demo row type. |
| `homeV32_p3Emi` | Home loan EMI | Demo row. |
| `homeV32_p3Loan` | Loan | Demo row type. |
| `homeV32_p3Sip` | Index fund SIP | Demo row. |
| `homeV32_p3Inv` | Investment | Demo row type. |
| `homeV32_p3Budget` | Food budget | Demo budget name. |
| `homeV32_p3BudgetOf` | {spent} of {limit} | Demo budget progress. Amounts formatted with the currency. |
| `homeV32_p3A11y` | Upcoming payments fill a timeline, then a food budget fills to 70%. | Animation semantics. |

## Page 4 · See where it goes

| Key | English | Notes |
|---|---|---|
| `homeV32_p4Title` | Your spending, at a glance. | Headline. |
| `homeV32_p4Sub` | Charts by category and month. Filter your history in one tap. | Subhead. |
| `homeV32_p4Try` | Open Analytics | Try it. Opens the Analytics tab. |
| `homeV32_p4Month` | October | Demo month under the donut total. From the locale month names in the app. |
| `homeV32_p4All` | All | Demo filter chip. |
| `homeV32_p4Food` | Food | Demo filter chip and category. |
| `homeV32_p4Coffee` | Coffee | Demo history row. |
| `homeV32_p4A11y` | A chart shows spending by category and month, then a filter narrows the history to Food. | Animation semantics. |

## Page 5 · Go further

| Key | English | Notes |
|---|---|---|
| `homeV32_p5Title` | Go further when you want. | Headline. |
| `homeV32_p5Sub` | Ask Kuber, Kuber Cards, Notes and calculators. Free to try. | Subhead. "Free to try": Ask Kuber, Cards and Notes have free limits; no prices in the tour. |
| `homeV32_p5Try` | Open Signature tools | Try it. Opens the More tab at the Signature section. |
| `homeV32_p5Free` | Free to try | Small status chip on the Ask Kuber, Kuber Cards and Kuber Notes tiles. |
| `homeV32_p5Ask` | Ask Kuber | Tile title. |
| `homeV32_p5AskQ` | Food this month? | Demo question, short so it fits one line. |
| `homeV32_p5AskA` | {amount} so far, 70% of your budget. | Demo answer. |
| `homeV32_p5Cards` | Kuber Cards | Tile title. |
| `homeV32_p5Notes` | Kuber Notes | Tile title. |
| `homeV32_p5NoteName` | Goa trip | Demo note title. |
| `homeV32_p5Calc` | Calculators | Tile title. |
| `homeV32_p5CalcLine` | SIP of {amount} a month, 10 years | Demo calculator input. |
| `homeV32_p5A11y` | Ask Kuber answers a question, a saved card turns over, a note adds up a trip, and a calculator shows a result. | Animation semantics. |
