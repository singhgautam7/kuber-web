# Home v3.2 · open decisions

Each item has a proposed default; the specs follow the default.

1. **Page 1 headline length.** The brief asks for headlines under 6 words and for page 1 to reuse "Note every expense. See where it goes." (7 words). Default: keep the 7-word line on page 1 and the Purpose screen, since reuse was explicit; pages 2 to 5 are 4 to 5 words.
2. **Card for existing users while their v1 Home has no top slot.** Default: insert the card once between the greeting and the first widget; nothing else changes. Alternative: show it only in More for v1 users.
3. **Skip from the Welcome entry.** Default: Skip and back return to "What do you want to track?" with the chips kept; only Start using Kuber finishes onboarding. Alternative: Skip also finishes onboarding.
4. **Card that is never tapped.** Default: retire it quietly after it has shown on 5 different days. Alternative: keep it until tapped or closed, which holds the suggestion slot indefinitely.
5. **Card vs promo banner.** Default: a live promo wins the session and the card waits, as suggestions do. Alternative: the card wins once.
6. **Try it after the tour.** Default: Try it closes the tour and opens the screen; the tour does not reopen afterwards. Alternative: return to the tour page when the user comes back.
7. **Non-INR sample amounts.** Default: the INR sample converted at a fixed sample rate and rounded (e.g. $12.50). Alternative: a separate hand-picked sample set per major currency.
8. **Users who switch currency later.** Default: page 1 and Purpose check the currency when they open. A user on INR who switches to USD sees the Quick Add version from then on.
9. **"Free to try" placement.** Default: a status chip on the Ask Kuber, Kuber Cards and Kuber Notes tiles and in the page 5 subhead; calculators are free and carry no chip. Alternative: subhead only.
10. **Language count** (carried from v2 onwards). The brief says 5; the repo has 9 ARB files. Default: every `homeV32_` key goes into all 9.
11. **Themes on the board.** Shown in Signature light and dark only. Every colour is a theme role, so the other 6 palettes follow; the v3.1 board already checks the shared elements (chips, lines, SMS bubble) in all 7.
12. **Welcome Tour row next to it.** More › Tutorial now has Welcome Tour and How Kuber works, which overlap. Default: keep both (Welcome Tour replays onboarding). Alternative: retire Welcome Tour.
