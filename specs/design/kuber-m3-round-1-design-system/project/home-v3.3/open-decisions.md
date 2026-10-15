# Home v3.3 · open decisions

Each item has a proposed default; the specs and board follow the default.

1. **Offline and no-signup facts from the old Welcome page.** Page 1 now opens Welcome, and its subhead is about the habit. Default: drop them from Welcome; they stay on the Play Store listing and in More › About. Alternative: a small caption under the brand row, "Works offline. No signup." (one extra string).
2. **Currency on page 1 before Make it yours.** Resolved: Make it yours now comes first, so page 1 uses the picked currency.
3. **Skip bypasses Make it yours.** Resolved: Make it yours comes first and has no Skip; Skip is only offered after it.
4. **More › Welcome Tour row.** Welcome is now the same 5 pages, so a replay duplicates How Kuber works. Default: remove Welcome Tour; How Kuber works takes its place. Alternative: keep both, with Welcome Tour showing the pages without Try it.
5. **Dots across Welcome.** Default: 7 dots (Make it yours, tracking question, 5 tour pages). Alternative: no dots on the first two and 5 dots on the tour.
6. **Page 5 Try it target.** One button, five features. Default: More tab scrolled to Signature. Alternative: open the feature that was last in the spotlight (Reminders at rest), which is less predictable.
7. **Home card on the existing Home header.** The header shows the existing Kuber Pro badge, which is outside the tour. Default: unchanged, as the bottom nav and header are out of scope. Flagging it because the card sits close to it.
8. **"Entertainment" in the notebook column.** The longest demo category fits 84 px in English. Default: let it ellipsize in long translations. Alternative: use a shorter sample category per locale.
9. **Existing users who already opened the v3.2 tour.** Default: `tour.openedAt` from v3.2 counts as seen, so no card. Alternative: show the card anyway because the pages changed.
10. **Skip on page 5 in Welcome.** Skip and Start using Kuber both open Home there. Default: keep Skip, so it sits in the same place on every screen after Make it yours. Alternative: hide it on page 5.
11. **Title "Why Kuber?" with question mark.** The comments used both "Why Kuber" and "Why Kuber?". Default: "Why Kuber?" everywhere (More row, Home card, snackbar).
