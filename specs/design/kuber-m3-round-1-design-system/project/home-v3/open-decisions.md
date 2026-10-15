# Home v3 · open decisions

Each item has a proposed default; the specs are written to the default. Items 1, 3, 15 and 16 carry over from home-v2/open-decisions.md (still open there); the rest are new in v3.

1. **Language count** (from v2 12). The brief says Kuber ships 5 languages; the repo has 9 ARB files (en, hi, bn, kn, ml, mr, pa, ta, te). Default: every `homeV3_` key goes into all ARB files. v3 strings avoid idioms and joined fragments; bank names are values.
2. **Home v2 installs.** Default: users already on `homeLayout = v2` stay on v2 (no layout change for existing users). Alternative: move v2 users who have not graduated Get started to v3.
3. **Starter accounts** (from v2 11). Code seeds Cash, Bank and Credit Card at install and stores them in `seededAccountIds`. Default: these three are the starters, they do not count as first data until edited, and §7 moves SMS transactions out of them. Confirm the list.
4. **Edit widgets on day 1.** "Only the Get started card" is read as the only card; the existing Edit widgets button and its count line stay under it so Show all widgets is reachable. Alternative: hide the button until the first widget turns on.
5. **Quick Add class.** Default: After setup (hidden while Get started shows, like SMS Import). Alternative: Data-gated on first data, or on from day 1 for users who pick Daily spending.
6. **Choices that share one widget.** The catalog has no loan, investment, ledger or subscription widget, so four of five choices turn on only Upcoming Events. Default: ship that. Alternative later: new summary widgets per area (out of scope here).
7. **Spending Stats.** Default: keep the v2 trigger (7 days of spending), since its averages and projection mislead with one transaction. Alternative: first data, like the other graphs.
8. **Tracking screen after Welcome Skip.** Default: shown after both Start my journey and Skip on the Welcome pages, never on the Welcome Tour replay. Alternative: only after Start my journey.
9. **Removing a choice later.** Default: hides nothing; only suggestion order changes. Alternative: switch its widgets back to automatic if the user never turned them on by hand.
10. **Ask Kuber behind data suggestions.** Discovery types only show when no data type is a candidate, so heavy SMS users may never see Ask Kuber. Default: keep the v2 rule. Alternative: let Ask Kuber go first once, at ≥ 20 transactions and ≥ 14 days after install.
11. **Moving already imported transactions.** Default: on Add, move SMS transactions from the added senders that sit in an untouched starter account. Transactions in accounts the user created or edited are never moved. Alternative: move nothing.
12. **Accounts prompt after Not now.** Default: the shown banks and cards are never offered again; new ones found later can prompt, once per session at most. Alternative: offer them once more after 30 days.
13. **Show all widgets.** Default: a one-time action that turns every switch on and applies on Save; widgets the user turns off later stay off. Alternative: a lasting switch that also turns on future widgets.
14. **Selected chip contrast.** onSecondaryContainer on secondaryContainer is 4.5 to 4.6:1 in every palette: a pass with little margin. Default: keep the M3 filter chip as is. Alternative: titleSmall weight for the selected label.
15. **Session lock after Not now** (from v2 15). Default: Not now locks suggestions for the rest of the session, as a dismiss does.
16. **Dismiss pause and type block** (from v2 17). Default: no new suggestion for 2 days after a dismiss; 2 dismisses of one type within 90 days block that type for 90 days. Remove if unwanted.
