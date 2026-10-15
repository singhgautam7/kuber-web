# Home v3.1 · copy

Every new and changed string in Home v3.1. English source. Keys are `homeV31_` + the key below, in every ARB file (see open-decisions.md 9). Placeholders in braces; no string is built from pieces; ₹ with Indian grouping comes from the existing currency formatter except inside the demo SMS, which is fixed text. No em dashes. Short sentences, no idioms.

## Purpose screen (new)

| Key | English | Notes |
|---|---|---|
| `homeV31_purTitle` | Note every rupee. See where it goes. | Headline, 7 words. headlineMedium. |
| `homeV31_purBody` | Your bank SMS do most of the work, right on this phone. | Subhead, bodyLarge. Carries the on-device promise from the removed Private by design page. |
| `homeV31_purSmsSender` | Your Bank | Demo SMS sender. Generic on purpose; never a real bank name or logo. |
| `homeV31_purSmsTime` | now | Demo SMS time. |
| `homeV31_purSmsText` | ₹250 debited from A/c XX1234 at a food delivery app. | Demo SMS body. Keep ₹250 and XX1234 as they are in every language. |
| `homeV31_purTxnName` | Food delivery | Demo transaction title. |
| `homeV31_purTxnSub` | Food · Bank | Demo transaction subtitle (category · account), one string so translators see it whole. |
| `homeV31_purTxnTime` | Just now | Demo transaction time. |
| `homeV31_purTxnTag` | From bank SMS | Demo source line under the transaction. |
| `homeV31_purAccount` | Account | Small caps label under the account chip. |
| `homeV31_purCategory` | Category | Small caps label under the category chip. |
| `homeV31_purBank` | Bank | Account kind chip. Same word as the seeded Bank account. |
| `homeV31_purCash` | Cash | Account kind chip. Same word as the seeded Cash account. |
| `homeV31_purCard` | Credit card | Account kind chip. |
| `homeV31_purFood` | Food | Category chip. |
| `homeV31_purA11y` | A bank SMS for ₹250 turns into a Food transaction in your Bank account. | Semantics label for the whole animation, read once. The animation itself is excluded from semantics. |

## What do you want to track? (changed)

| Key | English | Notes |
|---|---|---|
| `homeV31_trkBudgets` | Budgets | Filter chip. Replaces homeV3_trkDaily. |

## Empty states for widgets turned on by a choice (new)

| Key | English | Notes |
|---|---|---|
| `homeV31_budEmpty` | Set a budget to see how much is left this month. | Budget Snapshot with no budget. Action hidden while Get started is on screen (v2 rule). |
| `homeV31_evEmptyLoans` | Add a loan to see your next EMI here. | Upcoming Events, empty, only Loans and EMIs picked. |
| `homeV31_evEmptyInvest` | Add a SIP to see its next date here. | Upcoming Events, empty, only Investments and SIPs picked. |
| `homeV31_evEmptyLedger` | Add money you lent or borrowed to see when it is due. | Upcoming Events, empty, only Money lent or borrowed picked. |
| `homeV31_evEmptySubs` | Add a subscription to see when it renews. | Upcoming Events, empty, only Subscriptions picked. |
| `homeV31_evEmptyMany` | Your next EMIs, SIPs, dues and renewals will show here. | Upcoming Events, empty, 2 or more of its choices picked. |

## Make it yours (changed)

| Key | English | Notes |
|---|---|---|
| `homeV31_setupSub` | Three quick choices. | Replaces threeQuickChoices on this page; "and you're in" is no longer true, one more screen follows. |

## Removed from the onboarding flow

Keys stay in the ARB files (Welcome Tour replay and other screens may still read some); the onboarding flow no longer shows them.

| Key | Was on |
|---|---|
| `privateByDesign`, `onboardingPage2Description`, `fullyOfflineTitle`, `fullyOfflineBody`, `noAccountTitle`, `noAccountBody`, `privacyModeTitle`, `privacyModeBody` | Page 2 Private by design (V31-01) |
| `modulesTitle`, `everythingInOnePlace`, `onboardingPage3Description`, `budgetsModule`, `analyticsModule`, `recurringModule`, `lendBorrowModule`, `investmentsModule`, `askKuberModule`, `toolsModule`, `tagsCategoriesModule`, `andMuchMore` | Page 3 module grid (V31-02) |
| `justSoYouKnow`, `exploreAtOwnPace`, `exploreAtOwnPaceBody`, `walkthroughNearby`, `walkthroughNearbyBody`, `goToTutorials` | Post-onboarding sheet (V31-07) |
| `homeV3_trkDaily` | Tracking chip, replaced by `homeV31_trkBudgets` (V31-06) |
| `threeQuickChoices` on Make it yours | Replaced there by `homeV31_setupSub`; `startJourney` replaced there by the existing `continueLabel` (V31-05) |

## Reused unchanged

`getStarted`, `continueLabel`, `skip`, Back, `yourMoneyYourRules`, `onboardingPage1Description`, `offlineFirstBadge`, every Make it yours field label, `homeV3_trkTitle`, `homeV3_trkBody`, `homeV3_trkLoans`, `homeV3_trkInvest`, `homeV3_trkLedger`, `homeV3_trkSubs`.
