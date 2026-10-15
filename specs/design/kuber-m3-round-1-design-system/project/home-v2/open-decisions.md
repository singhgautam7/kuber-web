# Home v2 · open decisions

Each item has a proposed default. Nothing here is decided silently.

1. **Default set.** Default: Balance Card, Quick Add, Recent Transactions (3). Bank Accounts and Spending Stats are Data-gated (reasons in widget-inventory.md). Alternative: Bank Accounts as a 4th Default.
2. **How a new install is detected.** Default: `homeLayout = v2` only if, on the first launch of the build that ships Home v2, onboarding is not completed and there are 0 transactions. Everyone else is v1 forever.
3. **Suggestions for existing users.** The brief says nothing may change an existing user's layout, so v1 gets no Get started, no suggestions and no labels. Default: none. Alternative later: an opt-in "Suggestions on Home" row for v1 users, off by default.
4. **Graduation rule.** Default: all 3 steps done, OR 10 transactions, OR closed, OR 14 days since first shown with at least 1 transaction (quiet timeout so the card does not stay forever for people who only add a few).
5. **Where the "bring it back" note lives.** Default: in the snackbar after Close, with Undo, rather than a permanent line inside the card. Alternative: a bodySmall line at the bottom of the card in every state.
6. **Third step.** Default: "Set your starting balance", because SMS import creates accounts at a balance that is often wrong. Alternative: "Set a budget", which also unlocks Budget Snapshot.
7. **Mentioning the free SMS limit before it is reached.** Default: no. The fresh card says nothing about 5 imports a week; the limit state explains it when it happens. Paste never counts.
8. **Empty-state actions while Get started is visible.** Default: hidden, so day 1 has one call to action. They show if Get started is closed before there is data.
9. **Backup restore into a v2 install.** Default: if the backup contains widget preferences, adopt them and switch to v1, and graduate Get started (reason `transactions`). If not, stay v2, evaluate triggers normally, and show no "New" labels for widgets unlocked in the restore session.
10. **Erase all data.** Default: keep the current cohort. A v1 user who wipes data keeps today's Home.
11. **Seeded accounts.** The Bank Accounts trigger ignores accounts seeded at install. Needs confirmation of which accounts a new install seeds (Cash only, or more).
12. **Language count.** The brief says 5 languages; the repo has 9 ARB files (en, hi, bn, kn, ml, mr, pa, ta, te). Several existing Home strings are English-only (SMS import, Ask Kuber, Upcoming Events, Kuber Notes). Default: every Home v2 key goes into all ARB files. ICU plurals assume `use-escaping` is off in `l10n.yaml`, so apostrophes need no escaping; confirm.
13. **Smart insights.** `smart_insights` is built by the dashboard but not in `kHomeWidgetCatalog`. Default: leave it out of Home v2 as well.
14. **Sticky unlock.** Default: a Data-gated widget that turned on stays on, even if its data is deleted later (it shows its normal empty state). Alternative: hide it again while its trigger is false, which can make Home jump around.
15. **Session lock after Not now.** The brief asks for no further suggestion in a session after a dismiss. Default: Not now locks the session too.
16. **Not now escalation.** Default: 14 days, then 30 days, then the third Not now counts as dismissed.
17. **Dismiss cooldown and type suppression.** Default: 2 days without a new suggestion after any dismiss; 2 dismisses of one type within 90 days suppress that type for 90 days. These go beyond the brief; remove if unwanted.
18. **Promo banner.** Default: hidden while Get started is eligible. After graduation, a visible promo wins the session and the suggestion waits.
19. **Money Stories position.** Default: stays in its catalog position below the Balance Card. Alternative: move it under the top slot when the slot is empty, which would differ from v1 order.
20. **Home screen widget suggestion on iOS.** Default: Android only.
21. **Themes on the free tier.** Only Signature is free, so most new users see Signature. All 14 palettes still pass (table below).
22. **Lend and borrow keyword list.** Needs a localized keyword list per language (e.g. उधार). Default: ship English and Hindi lists first; the note variant is off for other languages until their list exists.

## Hero contrast, all themes

Get started fresh state. The hero is a filled button on a surfaceContainer card. Targets: label 4.5:1, button shape 3:1, eyebrow text 4.5:1. Computed from `tokens/palettes.json`; the same figures are on board HV2.9.

| Theme | Mode | Hero label (onPrimary on primary) | Button vs card (primary on surfaceContainer) | Eyebrow text (primary on surfaceContainer) | Body (onSurfaceVariant on surfaceContainer) | Result |
|---|---|---|---|---|---|---|
| Kuber Signature | Alabaster | 6.7:1 | 5.7:1 | 5.7:1 | 8.0:1 | Pass |
| Kuber Signature | Obsidian | 7.7:1 | 9.5:1 | 9.5:1 | 9.6:1 | Pass |
| FlewTube Red | Alabaster | 6.7:1 | 5.8:1 | 5.8:1 | 8.1:1 | Pass |
| FlewTube Red | Obsidian | 7.7:1 | 9.6:1 | 9.6:1 | 9.6:1 | Pass |
| Woofsapp Green | Alabaster | 6.4:1 | 5.5:1 | 5.5:1 | 8.0:1 | Pass |
| Woofsapp Green | Obsidian | 7.7:1 | 9.6:1 | 9.6:1 | 9.7:1 | Pass |
| Purrhub Yellow | Alabaster | 6.4:1 | 5.5:1 | 5.5:1 | 8.1:1 | Pass |
| Purrhub Yellow | Obsidian | 11.2:1 | 14.1:1 | 14.1:1 | 9.7:1 | Pass |
| Honkpe Purple | Alabaster | 6.7:1 | 5.7:1 | 5.7:1 | 8.1:1 | Pass |
| Honkpe Purple | Obsidian | 7.7:1 | 9.6:1 | 9.6:1 | 9.6:1 | Pass |
| Squeakdin Navy | Alabaster | 14.3:1 | 12.3:1 | 12.3:1 | 8.1:1 | Pass |
| Squeakdin Navy | Obsidian | 7.7:1 | 9.6:1 | 9.6:1 | 9.6:1 | Pass |
| Oinkzon Orange | Alabaster | 6.5:1 | 5.6:1 | 5.6:1 | 8.0:1 | Pass |
| Oinkzon Orange | Obsidian | 7.8:1 | 9.7:1 | 9.7:1 | 9.6:1 | Pass |

