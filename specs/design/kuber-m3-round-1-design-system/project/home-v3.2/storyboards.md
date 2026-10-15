# Home v3.2 · storyboards

Board: HV32.4 (keyframes, reduced motion), HV32.5 (currency). Built on the v3.1 Purpose storyboard (`home-v3.1/storyboard.md`); where they differ, **v3.2 wins**.

## Rules for every page

- One `AnimationController` per page, started with `forward()` the first time the page becomes visible in this tour session. Never `repeat()`. Swiping back to a page shows its rest frame (`value = 1`). Leaving mid-animation jumps it to the end.
- Each element uses `CurvedAnimation(parent, curve: Interval(start/total, end/total, curve: Curves.easeOutCubic))`. Everything is system-caused, so easing is **easeOutCubic** throughout (tokens.md §8).
- Durations come from the motion tokens: instant 90, fast 150, reflow 230, containerTransform 240, sheet 260. Holds between steps are plain waits.
- Built-ins only: `Transform`, `Opacity`, `ScaleTransition`, lerped `Rect` / `BorderRadius` / `Color` for morphs, `CustomPainter` + `PathMetric.extractPath` for lines, arcs and timelines, `IntTween` for number tickers and typing. No Lottie, Rive or video.
- Stage 320 × 260 (page 5: 320 × 280), centred above the headline, in a `RepaintBoundary`, wrapped in `ExcludeSemantics` with one `Semantics` label per page (copy.md `p*A11y`).
- **Reduced motion** (`MediaQuery.disableAnimationsOf`): the controller never starts; the stage shows the static frame. For pages 2 to 5 the static frame is the rest frame, which already shows the whole story. Page 1 has its own static frame (source, arrow, result).
- Colours are theme roles only (surfaceContainer / High, outlineVariant, primary, secondaryContainer, primaryContainer, income / expense roles, category colours through the existing harmonizer).
- Amounts use the user's currency through the existing formatter. Sample data is the same across pages (below).

## Sample dataset (INR)

| Thing | Value |
|---|---|
| Accounts | Bank (Your Bank, ••1234), Cash, Credit card (Your Bank, •••• 5678) |
| Balances before → after | Bank ₹43,530 → ₹42,350 · Cash ₹1,290 → ₹1,200 · Credit card due ₹8,040 → ₹8,640 |
| Transactions | Food delivery ₹250 (Food, Bank, from SMS) · Groceries ₹1,180 (Groceries, Bank) · Auto ride ₹90 (Transport, Cash) · Movie tickets ₹600 (Entertainment, Credit card) · Coffee ₹120 (Food, Cash) |
| Upcoming | 15 Oct Streaming plan ₹649 (Subscription) · 18 Oct Electricity bill ₹1,450 (Reminder) · 20 Oct Rahul owes you +₹1,500 (Lent) · 5 Nov Home loan EMI ₹24,500 (Loan) · 10 Nov Index fund SIP ₹5,000 (Investment) |
| Budget | Food ₹8,000 a month, ₹5,600 spent (70%) |
| October by category | Food ₹5,600 · Groceries ₹3,400 · Entertainment ₹2,300 · Transport ₹1,900 · Other ₹1,800 · total ₹15,000 |
| Last 4 months | Jul ₹13,200 · Aug ₹16,100 · Sep ₹14,400 · Oct ₹15,000 |
| Signature | Ask Kuber: "Food this month?" → "₹5,600 so far, 70% of your budget." · Kuber Card: Your Bank, •••• •••• 5678 · Note "Goa trip": 12,400 + 2,100 = 14,500 · SIP calculator: ₹5,000 a month for 10 years at 12% → ₹11,61,695 |

Non-INR example (USD, HV32.5): the same items at a fixed sample rate, e.g. Food delivery $12.50, Bank $2,176.50. Only the amounts change; the layout holds with a leading symbol, two decimals and western grouping.

## Page 1 · Note it (3190 ms)

Same story and timing as the v3.1 Purpose animation, with the headline and source changes below.

### INR: SMS version
| Step | Start | End | Elements | Change | Token |
|---|---|---|---|---|---|
| 1 | 0 | 260 | SMS bubble | Rises 24 px, fades in | sheet 260 |
| 2 | 260 | 1200 | | Hold to read | |
| 3 | 1200 | 1440 | Bubble → transaction card | Morph: rect, radius 20/20/20/4 → 20, surfaceContainerHigh → surfaceContainer, border 0 → 1 px | containerTransform 240 |
| 3a | 1200 | 1350 | SMS text | Fades out | fast 150 |
| 3b | 1290 | 1440 | Card content | Fades in | fast 150 |
| 4 | 1440 | 1800 | | Hold | |
| 5 | 1800 | 2030 | Card | Moves up 48 px | reflow 230 |
| 5a | 1800 | 2050 | Bank, Cash, Credit card chips | Rise 8 px and fade in, 50 ms apart | fast 150 each |
| 6 | 2250 | 2490 | Line to Bank | Draws | containerTransform 240 |
| 6a | 2490 | 2640 | Bank chip, ACCOUNT | Bank selected; label fades in | fast 150 |
| 7 | 2640 | 2790 | Cash, Credit card | Fade out | fast 150 |
| 8 | 2950 | 3190 | Food chip, line, CATEGORY | Food fades in, scale 0.92 → 1; line draws; label fades in | containerTransform 240 |
| Rest | 3190 | | | Card linked to Bank and Food | |

### Non-INR: Quick Add version
Only steps 1 to 3 change; steps 4 to 8 and the rest frame are identical. The card's source line reads `qaTag` "Added with Quick Add".
| Step | Start | End | Elements | Change | Token |
|---|---|---|---|---|---|
| 1 | 0 | 260 | Quick Add label and field | Rises 24 px, fades in, caret visible | sheet 260 |
| 1a | 300 | 1050 | Field text | Types `qaText` ("12.50 food delivery") one character at a time with an `IntTween` over the string length, linear (typing is not an easing move) | 750 ms total |
| 2 | 1050 | 1200 | | Hold | |
| 3 | 1200 | 1440 | Field → transaction card | Morph: pill radius 28 → 20, size 300 × 56 → 320 × 88, surfaceContainerHigh → surfaceContainer, border 0 → 1 px | containerTransform 240 |
| 3a / 3b | | | | As INR | fast 150 |

Static frame (both): source (SMS bubble or Quick Add field) at the top, primary arrow_downward, the card, two lines, Bank and Food chips.

The v3.1 Purpose screen uses the same two versions and the new headline `homeV32_p1Title`; its subhead stays for INR and becomes `p1SubQuick` otherwise.

## Page 2 · Organize it (1880 ms)

Elements: three account columns (Bank, Cash, Credit card; tile, name, Balance or Due, amount), three transaction pills (Groceries ₹1,180, Auto ride ₹90, Movie tickets ₹600), three category status chips.

| Step | Start | End | Elements | Change | Token |
|---|---|---|---|---|---|
| 1 | 0 | 420 | Columns | Fade in together | sheet 260, starting at 0 |
| 1a | 0 | 420 | Pills above their column | Fade in and drop 12 px, 80 ms apart | sheet 260 each |
| 2 | 420 | 1000 | | Hold: the user sees three loose expenses | |
| 3 | 1000 | 1480 | Pills | Each moves into its column (Groceries 1000, Auto ride 1120, Movie tickets 1240), width 92 → 82 | containerTransform 240 each |
| 3a | 1240 | 1630 | Category chips | Each scales 0.8 → 1 and fades in as its pill lands | fast 150 each |
| 4 | 1400 | 1880 | Balances | Number tickers: Bank 43,530 → 42,350 (1400), Cash 1,290 → 1,200 (1520), Credit card 8,040 → 8,640 (1640) | containerTransform 240 each |
| Rest | 1880 | | | All three landed with chips and new balances | |

## Page 3 · Track everything (2290 ms)

Elements: timeline line, 5 dated rows with dots, Food budget block with the wavy progress indicator.

| Step | Start | End | Elements | Change | Token |
|---|---|---|---|---|---|
| 1 | 0 | 240 | Timeline line, first segment | Draws to row 1 | containerTransform 240 |
| 2 | 200 | 1550 | Rows 1 to 5 (Streaming plan, Electricity bill, Rahul owes you, Home loan EMI, Index fund SIP) | Each fades in and slides 8 px right, 300 ms apart (200, 500, 800, 1100, 1400); its dot scales 0 → 1; the line draws on to it | fast 150 per row; line segment containerTransform 240 |
| 3 | 1550 | 1800 | | Hold | |
| 4 | 1800 | 1950 | Budget block | Fades in | fast 150 |
| 5 | 1950 | 2190 | Budget bar and amount | Bar fills 0 → 70%; amount ticks ₹0 → ₹5,600 | containerTransform 240 |
| Rest | 2290 | | | Timeline full, budget at 70% (100 ms settle after step 5) | |

## Page 4 · See where it goes (2430 ms)

Elements: donut (5 category arcs, total in the centre), 4 month bars, filter chips (All, Food, Transport), history list (Food delivery, Auto ride, Coffee).

| Step | Start | End | Elements | Change | Token |
|---|---|---|---|---|---|
| 1 | 0 | 720 | Donut arcs | Draw clockwise one after another (Food, Groceries, Entertainment, Transport, Other), 120 ms apart | containerTransform 240 each |
| 1a | 720 | 870 | Donut centre | Total and month fade in | fast 150 |
| 2 | 900 | 1380 | Month bars | Grow from 0, 80 ms apart; October in primary, others primaryContainer | containerTransform 240 each |
| 3 | 1380 | 1530 | Chips and list | Fade in, All selected | fast 150 |
| 4 | 1530 | 1900 | | Hold | |
| 5 | 1900 | 2050 | Food chip | Becomes selected, All unselected | fast 150 |
| 6 | 2050 | 2200 | Auto ride row | Fades out | fast 150 |
| 7 | 2200 | 2430 | Coffee row, list height | Moves up; list shrinks | reflow 230 |
| Rest | 2430 | | | Donut, bars, list filtered to Food | |

## Page 5 · Go further (3140 ms)

Elements: 4 tiles in a 2 × 2 grid (Ask Kuber, Kuber Cards, Kuber Notes, Calculators). Ask Kuber, Kuber Cards and Kuber Notes carry a "Free to try" status chip. Spotlight = 2 px primary outline and scale 1.03; tiles not in the spotlight sit at 45% opacity while the spotlight runs.

| Step | Start | End | Elements | Change | Token |
|---|---|---|---|---|---|
| 1 | 0 | 440 | Tiles | Fade in, 60 ms apart | sheet 260 each |
| 2 | 500 | 740 | Ask Kuber | Spotlight on; others dim | containerTransform 240 |
| 2a | 740 | 890 | Answer | "₹5,600 so far, 70% of your budget." fades in | fast 150 |
| 3 | 1100 | 1400 | Kuber Cards | Spotlight moves; card flips: scaleX 1 → 0 (1100 to 1250), face swaps to the masked number, scaleX 0 → 1 (1250 to 1400) | fast 150 + fast 150 |
| 4 | 1700 | 2090 | Kuber Notes | Spotlight moves (1700 to 1940); "= 14,500" fades in and scales 0.9 → 1 (1940 to 2090) | containerTransform 240, fast 150 |
| 5 | 2300 | 2540 | Calculators | Spotlight moves; result ticks ₹0 → ₹11,61,695 | containerTransform 240 |
| 6 | 2900 | 3140 | All tiles | Spotlight off; every tile back to full opacity | containerTransform 240 |
| Rest | 3140 | | | All four tiles, card showing the masked number | |
