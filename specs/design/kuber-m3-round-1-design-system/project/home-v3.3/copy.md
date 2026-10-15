# Home v3.3 · copy

Every new or changed string in Home v3.3. English source. Keys are `homeV33_` + the key below, in all 5 ARB files. All `homeV32_` tour strings are retired. Placeholders in braces; no string is built from pieces; amounts and dates use the existing formatters. Demo names (Rahul, Priya, Goa trip, Your Bank) are sample data. No em dashes, no idioms, no pricing words. Headlines are under 7 words.

Reused existing keys: Skip (`skip`), Continue (`continueLabel`, page 5 in Welcome), the What do you want to track? strings (v3), Make it yours strings (v3.1).

## Entry points

| Key | English | Notes |
|---|---|---|
| `homeV33_tourName` | Why Kuber? | More row title and Home card title. |
| `homeV33_tourMoreSub` | How expense tracking works, and how Kuber helps | More › Tutorial row subtitle. |
| `homeV33_tourCardBody` | How tracking every expense helps, and what Kuber can do. | Home card line. Existing users only. |
| `homeV33_tourCardAct` | Show me | Home card tonal button. Opens the tour at page 1 with Try it. |
| `homeV33_tourCardHideA11y` | Hide this card | Close icon tooltip and semantics label. |
| `homeV33_tourCardHidden` | You can find Why Kuber? in More. | Snackbar after the close icon, with homeV2_actUndo. |

## Tour chrome

| Key | English | Notes |
|---|---|---|
| `homeV33_tourNext` | Next | Primary button, pages 1 to 4, every entry. |
| `homeV33_tourFinish` | Start using Kuber | Primary button on page 5 in Welcome. Finishes onboarding and opens Home. |
| `homeV33_tourDone` | Done | Primary button on page 5 when opened from More or the Home card. |
| `homeV33_tourPageA11y` | Page {page} of {total} | Semantics label on the dots. total is 7 in Welcome (Make it yours + tracking question + 5 tour pages), 5 elsewhere. |

## Page 1 · Why Kuber exists

| Key | English | Notes |
|---|---|---|
| `homeV33_p1Title` | Make noting every expense a habit. | Headline, 6 words. In Welcome the brand row (logo + "Kuber") is on Make it yours, the first screen. |
| `homeV33_p1SubSms` | Small expenses count too. Noting is easy, and bank SMS add most of them. | Subhead when the currency is INR. |
| `homeV33_p1Sub` | Small expenses count too. Kuber makes noting them easy. | Subhead for any other currency (SMS import is India only). |
| `homeV33_p1Try` | Add a transaction | Try it. Opens Add transaction. |
| `homeV33_p1ColDate` | Date | Notebook column header. |
| `homeV33_p1ColAmount` | Amount | Notebook column header. |
| `homeV33_p1ColSpent` | Spent on | Notebook column header. |
| `homeV33_p1ColCat` | Category | Notebook column header. |
| `homeV33_p1A11y` | Three expenses written in a notebook turn into Kuber transactions, each with a category and an account. | Animation semantics. |

## Sample data shared by pages 1 to 5

| Key | English | Notes |
|---|---|---|
| `homeV33_dFood` | Food delivery | Demo transaction. |
| `homeV33_dAuto` | Auto ride | Demo transaction. |
| `homeV33_dMovie` | Movie tickets | Demo transaction. |
| `homeV33_dCoffee` | Coffee | Demo transaction. |
| `homeV33_dGroc` | Groceries | Demo transaction and category. |
| `homeV33_cFood` | Food | Demo category. |
| `homeV33_cTransport` | Transport | Demo category. |
| `homeV33_cFun` | Entertainment | Demo category. |
| `homeV33_cShopping` | Shopping | Demo category. |
| `homeV33_aBank` | Bank | Demo account. |
| `homeV33_aCash` | Cash | Demo account. |
| `homeV33_aCard` | Credit card | Demo account. |
| `homeV33_dBankName` | Your Bank | Demo bank. Generic on purpose; never a real bank name or logo. |

## Page 2 · Every account, every category

| Key | English | Notes |
|---|---|---|
| `homeV33_p2Title` | Every account. Even credit cards. | Headline, 5 words. |
| `homeV33_p2Sub` | Bank, cash and cards, with billing cycles and due dates. Add any category. | Subhead. |
| `homeV33_p2Try` | Open Accounts | Try it. Opens More › Accounts. |
| `homeV33_p2Balance` | Balance | Label above a bank or cash balance. |
| `homeV33_p2Due` | Due | Label above the credit card amount. |
| `homeV33_p2Cycle` | Billing cycle {start} to {end} | Credit card detail. Dates from the locale formatter. |
| `homeV33_p2DueOn` | Due {date} | Credit card due date chip. |
| `homeV33_p2PetCare` | Pet care | The custom category created in the animation. |
| `homeV33_p2A11y` | A bank account, cash and a credit card show their balances. The card shows its billing cycle and due date. A new category, Pet care, joins the others. | Animation semantics. |

## Page 3 · Track more than spending

| Key | English | Notes |
|---|---|---|
| `homeV33_p3Title` | Track more than spending. | Headline, 4 words. |
| `homeV33_p3Sub` | Budgets, investments, loans, money lent or borrowed, and subscriptions. | Subhead. |
| `homeV33_p3Try` | Open Upcoming events | Try it. Opens More › Upcoming Events (lists EMIs, SIPs, dues and renewals). |
| `homeV33_p3Budget` | Food budget | Module row. |
| `homeV33_p3BudgetOf` | {spent} of {limit} | Budget progress. |
| `homeV33_p3Inv` | Investments | Module row. |
| `homeV33_p3InvTypes` | SIPs, stocks, FDs and more | Only types Kuber supports (investment.dart: sip, mutual_fund, stocks, etf, bonds, gold, real_estate, crypto, fd, rd, collectible). |
| `homeV33_p3Loan` | Home loan | Module row. Supported loan types: home, vehicle, personal, education. |
| `homeV33_p3LoanSub` | EMI {amount} · {paid} of {total} | Loan progress. |
| `homeV33_p3Lent` | {name} owes you | Lent row. Sample name. |
| `homeV33_p3Borrowed` | You owe {name} | Borrowed line. Sample name. |
| `homeV33_p3Subs` | Streaming plan | Module row. |
| `homeV33_p3SubsSub` | {amount} a month | Subscription amount. |
| `homeV33_p3Renews` | Renews {date} | Renewal chip before the tick-over. |
| `homeV33_p3Next` | Next {date} | Renewal chip after the tick-over. |
| `homeV33_p3A11y` | A budget fills, an investment grows, a loan EMI is paid, money lent and borrowed shows up, and a subscription renews. | Animation semantics. |

## Page 4 · Your spending, at a glance

| Key | English | Notes |
|---|---|---|
| `homeV33_p4Title` | Your spending, at a glance. | Headline, kept from v3.2. |
| `homeV33_p4Sub` | Every transaction in one searchable history, with many ways to analyze it. | Subhead, new. |
| `homeV33_p4Try` | Open Analytics | Try it. Opens the Analytics tab. |
| `homeV33_p4Search` | Search | Search field placeholder (existing History search). |
| `homeV33_p4Query` | food | Demo search text. |
| `homeV33_p4Today` | Today | History date header (existing). |
| `homeV33_p4Yesterday` | Yesterday | History date header (existing). |
| `homeV33_p4ByCat` | By category | Analytics view label. |
| `homeV33_p4Monthly` | Monthly | Analytics view label. |
| `homeV33_p4Compare` | Compare | Analytics view label (month to month). |
| `homeV33_p4Month` | October | Demo month. From the locale month names. |
| `homeV33_p4A11y` | A searchable history narrows to food. Then charts show spending by category, by month, and this month against last month. | Animation semantics. |

## Page 5 · Go further when you want

| Key | English | Notes |
|---|---|---|
| `homeV33_p5Title` | Go further when you want. | Headline, kept from v3.2. |
| `homeV33_p5Ask` | Ask Kuber | Feature name. |
| `homeV33_p5AskLine` | Ask about your money, answered on your phone. | One line under Ask Kuber. |
| `homeV33_p5Cards` | Kuber Cards | Feature name. |
| `homeV33_p5CardsLine` | Your cards, encrypted and kept on your phone. | One line under Kuber Cards. |
| `homeV33_p5Notes` | Kuber Notes | Feature name. |
| `homeV33_p5NotesLine` | Notes that do the math and add transactions. | One line under Kuber Notes. |
| `homeV33_p5Calc` | Calculators and tools | Feature name. |
| `homeV33_p5CalcLine` | EMI, SIP, tax and more. | One line under Calculators and tools. |
| `homeV33_p5Rem` | Reminders | Feature name. |
| `homeV33_p5RemLine` | Never miss a bill. | One line under Reminders. |
| `homeV33_p5Try` | Open Signature tools | Try it. Opens the More tab at the Signature section. |
| `homeV33_p5AskQ` | How much on food this month? | Demo question. |
| `homeV33_p5AskA` | {amount} so far, 70% of your Food budget. | Demo answer. |
| `homeV33_p5NoteName` | Goa trip | Demo note title. |
| `homeV33_p5Hotel` | Hotel | Demo note line. |
| `homeV33_p5Taxi` | Taxi | Demo note line. |
| `homeV33_p5Travel` | Travel | Demo category on the transaction chip. |
| `homeV33_p5SipCalc` | SIP calculator | Demo calculator title. |
| `homeV33_p5PerMonth` | {amount} a month | Demo input. |
| `homeV33_p5Rate` | {rate}% a year | Demo input. |
| `homeV33_p5Years` | {n} years | Demo input. |
| `homeV33_p5RemTitle` | Electricity bill | Demo reminder. |
| `homeV33_p5RemDue` | Due tomorrow · {amount} | Demo reminder line. |
| `homeV33_p5A11y` | Ask Kuber answers a question, a card turns over, a note adds up and becomes a transaction, a calculator shows a result, and a bill reminder arrives. | Animation semantics. |
