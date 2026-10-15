# Home v3.3 · storyboards

Board: HV33.4 (keyframes, reduced motion), HV33.5 (all 7 themes). Where this conflicts with Home v3.2, **Home v3.3 wins**.

## Rules for every page

- One `AnimationController` per page, `forward()` once the first time the page is visible in this tour session. Never `repeat()`. Swiping back shows the rest frame (`value = 1`). Leaving mid-animation jumps to the end. Durations 2740 to 3900 ms.
- Each element runs on `CurvedAnimation(parent, curve: Interval(start/total, end/total, curve: …))`. Everything is system-caused, so easing is **Curves.easeOutCubic** (M3 emphasized decelerate in our tokens) unless a row says **linear** (typing, pen travel, counters' digits are driven by an `IntTween` on a linear interval so characters arrive evenly).
- Duration tokens: instant 90, fast 150, reflow 230, containerTransform 240, sheet 260. Gaps between steps are plain holds.
- Built-ins only: `Transform`, `Opacity`, `ClipRect` + `Align(widthFactor)` for reveals, lerped `Rect` / `BorderRadius` / `Color` / `TextStyle` for morphs, `CustomPainter` + `PathMetric.extractPath` for lines, arcs and the SIP line, `IntTween` for typing and number tickers, `AnimatedSwitcher`-style cross-fades built from two `Opacity`s on the same controller. No Lottie, Rive, video or extra packages.
- No handwriting font. Notebook text uses the app body font (bodySmall), revealed left to right by a clip that the pen icon (Material Symbols `edit`, 24, primary) rides on. Size impact: 0 bytes.
- Stage 320 wide (page 1: 260 high, static 324; page 2: 276; page 3: 256; page 4: 260; page 5: 150), centred above the headline, in a `RepaintBoundary`, wrapped in `ExcludeSemantics` with one `Semantics` label per page (copy.md `p*A11y`).
- **Reduced motion** (`MediaQuery.disableAnimationsOf`): the controller never starts; the stage shows the static frame. Pages 2 to 5: static = rest frame. Page 1 has its own static frame (notebook, arrow, cards), because its rest frame alone does not show the "before".
- Colours: theme roles only (surface, surfaceContainerLow / Container / High, outlineVariant, primary, primaryContainer, secondaryContainer, tertiary / tertiaryContainer, error container, income / expense roles) and category colours through the existing harmonizer. Verified on all 7 palettes, light and dark (HV33.5).
- Amounts and dates use the existing formatters and the user's currency.

## Sample dataset (shared by all pages)

| Thing | Value (INR) |
|---|---|
| Accounts | Bank (Your Bank, ••1234) balance ₹42,350 · Cash ₹1,200 · Credit card (Your Bank, •••• 5678) due ₹8,640, billing cycle 16 Sep to 15 Oct, due 5 Nov |
| Transactions | 12 Oct Food delivery ₹250 (Food, Bank) · 12 Oct Auto ride ₹90 (Transport, Cash) · 13 Oct Movie tickets ₹600 (Entertainment, Credit card) · 13 Oct Coffee ₹120 (Food) · 11 Oct Groceries ₹1,180 |
| Categories | Food, Transport, Shopping, Entertainment, Groceries; new: Pet care (pets, orange) |
| Budget | Food ₹8,000 a month, ₹5,600 spent (70%) |
| Investments | Types shown: SIPs, stocks, FDs (all in `investment.dart`). Index fund SIP ₹5,000 a month |
| Loan | Home loan (`loanType: home`), EMI ₹24,500, 14 of 60 paid |
| Lent / borrowed | Rahul owes you ₹1,500 · You owe Priya ₹400 |
| Subscription | Streaming plan ₹649 a month, renews 15 Oct, next 15 Nov |
| October by category | Food 5,600 · Groceries 3,400 · Entertainment 2,300 · Transport 1,900 · Other 1,800 · total ₹15,000 |
| Months | Jul 13,200 · Aug 16,100 · Sep 14,400 · Oct 15,000 |
| Compare Sep → Oct | Food 4,800 → 5,600 · Groceries 3,600 → 3,400 · Transport 2,100 → 1,900 |
| Page 5 | "How much on food this month?" → "₹5,600 so far, 70% of your Food budget." · Card Your Bank •••• •••• •••• 5678 · Note Goa trip: Hotel 12,400 + Taxi 2,100 = 14,500 → Travel −₹14,500 · SIP ₹5,000 a month, 12% a year, 10 years → ₹11,61,695 · Electricity bill due tomorrow ₹1,450 |

Non-INR (USD on the board): same items at a fixed sample rate (₹250 → $12.50). Only amount strings change.

## Page 1 · Kuber-ifying your notes (3000 ms)

Elements: E1 notebook (surfaceContainerLow, outlineVariant rules, tertiary margin line at 50%, caps headers Date / Amount / Spent on / Category). E2 to E4 rows. E5 pen. E6 amount strokes (2 px primary). E7 to E9 transaction cards (320 × 60, category tile, name, "Category · Account", expense amount, date).

### INR
| Step | Start | End | Elements | Change | Token · easing |
|---|---|---|---|---|---|
| 1 | 0 | 260 | E1 | Rises 16 px, opacity 0 → 1 | sheet 260 · easeOutCubic |
| 2 | 260 | 410 | E5 | Fades in at row 1 start | fast 150 · easeOutCubic |
| 3 | 400 | 1000 | E2 + E5 | Row 1 clip widens 0 → 100%; pen x follows the clip edge, with a ±1.5 px y wobble per column | 600 · linear |
| 3a | 640 | 790 | E6 row 1 | Stroke under the amount draws left to right | fast 150 · easeOutCubic |
| 4 | 1060 | 1560 | E3 + E5 | Pen drops 36 px (instant 90), row 2 writes, stroke at 1300 | 500 · linear |
| 5 | 1620 | 2120 | E4 + E5 | Row 3 writes, stroke at 1860 | 500 · linear |
| 6 | 2120 | 2270 | E5 | Lifts: rotates −14°, moves up 8 px, fades out | fast 150 · easeOutCubic |
| 7 | 2300 | 2540 | E2 to E4 | Lift off: translateY −6, scale 1.02, surfaceContainer fill and 1 px border fade in, 80 ms apart | containerTransform 240 · easeOutCubic |
| 7a | 2400 | 2640 | E1 | Paper and headers fade to 0 | containerTransform 240 · easeOutCubic |
| 8 | 2540 | 2940 | E2→E7, E3→E8, E4→E9 | Morph rect (row → card slot y 32 / 100 / 168), radius 12 → 16, 80 ms apart. Notebook text fades out (fast 150), card content fades in (fast 150, 90 ms later); amount colour onSurface → expense | containerTransform 240 each · easeOutCubic |
| Rest | 3000 | | E7 to E9 | Three transaction cards | |

### Non-INR
Identical steps and timings. Amount strings are formatted for the currency (`$12.50`, `$4.50`, `$30`); the amount stroke widths follow the measured text width. The only other change is outside the stage: subhead `p1Sub` instead of `p1SubSms`.

Static (both): compact notebook (header 24, rows 26) at the top, arrow_downward (primary), three cards (52 high).

## Page 2 · Every account, every category (2740 ms)

| Step | Start | End | Elements | Change | Token · easing |
|---|---|---|---|---|---|
| 1 | 0 | 380 | Bank, Cash, Credit card tiles | Rise 12 px and fade in, 60 ms apart | sheet 260 each · easeOutCubic |
| 1a | 140 | 620 | Balances | Tick from 0 to ₹42,350 / ₹1,200 / ₹8,640 due | containerTransform 240 each · IntTween |
| 2 | 900 | 1140 | Credit card tile | Border 1 → 2 px primary | containerTransform 240 · easeOutCubic |
| 2a | 1000 | 1260 | Cycle strip | Grows from the card tile, height 0 → 64 | sheet 260 · easeOutCubic |
| 2b | 1260 | 1500 | Cycle bar, Due chip | Bar fills 0 → 93% (13 Oct in a 16 Sep to 15 Oct cycle); Due 5 Nov chip fades in | containerTransform 240 · easeOutCubic |
| 3 | 1700 | 1950 | Food, Transport, Shopping chips | Fade in and rise 8 px, 50 ms apart | fast 150 each · easeOutCubic |
| 4 | 2050 | 2290 | New chip | Dashed primary outline, grey icon; scale 0.8 → 1 | containerTransform 240 · easeOutCubic |
| 4a | 2100 | 2400 | Chip label | Types "Pet care" with caret | 300 · linear IntTween |
| 5 | 2500 | 2740 | New chip | Dashed → selected fill (secondaryContainer), icon tile takes its orange category colour, caret gone | containerTransform 240 · easeOutCubic |
| Rest | 2740 | | | All three accounts, cycle and due, four categories | |

## Page 3 · Track more than spending (3100 ms)

Five module rows (320 × 48, 52 apart). Each row: fade in + slide 8 px right (fast 150), then its visual (from row start + 150).

| Step | Start | End | Elements | Change | Token · easing |
|---|---|---|---|---|---|
| 1 | 0 | 150 | Budget row | In | fast 150 |
| 1a | 150 | 390 | Budget bar, amount | Fills 0 → 70%; ₹0 → ₹5,600 | containerTransform 240 · easeOutCubic |
| 2 | 560 | 710 | Investments row | In | fast 150 |
| 2a | 710 | 950 | SIP line | Draws left to right, end dot scales 0 → 1 at 950 (instant 90) | containerTransform 240 · easeOutCubic |
| 3 | 1120 | 1270 | Home loan row | In | fast 150 |
| 3a | 1270 | 1510 | EMI ring | Sweeps 0 → 13/60 | containerTransform 240 |
| 3b | 1600 | 1750 | EMI ring, "13 of 60" | One more EMI paid: ring 13 → 14/60, text ticks to 14 | fast 150 |
| 4 | 1680 | 1830 | Lent / borrowed row | In; avatars R then P scale 0.6 → 1, 60 ms apart | fast 150 |
| 4a | 1830 | 2070 | +₹1,500, −₹400 | Tickers from 0 | containerTransform 240 · IntTween |
| 5 | 2240 | 2390 | Subscription row | In, chip "Renews 15 Oct" | fast 150 |
| 5a | 2800 | 2950 | Renewal chip | Old text slides up 8 px and fades | fast 150 · easeOutCubic |
| 5b | 2950 | 3100 | Renewal chip | "Next 15 Nov" slides in from below, chip colour surfaceContainerHigh → secondaryContainer | fast 150 · easeOutCubic |
| Rest | 3100 | | | All five live | |

## Page 4 · Your spending, at a glance (3900 ms)

| Step | Start | End | Elements | Change | Token · easing |
|---|---|---|---|---|---|
| 1 | 0 | 260 | Search field, History list (Today, Yesterday, 11 Oct headers) | Fade in, rise 12 px | sheet 260 |
| 2 | 300 | 560 | List | Scrolls up 36 px | sheet 260 · easeOutCubic |
| 2a | 640 | 900 | List | Scrolls up another 36 px | sheet 260 · easeOutCubic |
| 3 | 1000 | 1300 | Search text | Types "food", caret; clear icon replaces filter icon | 300 · linear IntTween |
| 4 | 1300 | 1450 | Non-food rows, 11 Oct header | Fade out | fast 150 |
| 4a | 1450 | 1680 | Coffee, Food delivery | Close the gaps, list scroll resets, list height shrinks | reflow 230 · easeOutCubic |
| 5 | 1900 | 2140 | Search + list → chart card | Container transform into the analytics card; view tabs fade in, By category selected | containerTransform 240 |
| 5a | 2140 | 2380 | Donut | Arcs sweep clockwise in order; centre total fades in at 2300 | containerTransform 240 · easeOutCubic |
| 5b | 2380 | 2530 | Legend | Fades in | fast 150 |
| 6 | 2700 | 2930 | Tabs | Indicator moves to Monthly; donut out, bars in (cross-fade) | reflow 230 |
| 6a | 2780 | 3020 | 4 month bars | Grow from 0, 40 ms apart; October in primary | containerTransform 240 |
| 7 | 3200 | 3430 | Tabs | Indicator moves to Compare; bars out | reflow 230 |
| 7a | 3280 | 3520 | Sep / Oct pairs | Grow from the left, Sep (primaryContainer) then Oct (primary) | containerTransform 240 |
| 8 | 3600 | 3830 | Chart card | Splits into three 101-wide minis (By category, Monthly, Compare) at y 134 | reflow 230 · easeOutCubic |
| 8a | 3660 | 3810 | Search "food" + 2 rows | Fade back in above the minis | fast 150 |
| Rest | 3900 | | | Filtered history over three analytics minis | |

## Page 5 · Go further when you want (3740 ms)

Elements: stage card 320 × 150 (one vignette at a time), the 5 feature lines under the headline. Spotlight on a line = secondaryContainer fill, text onSecondaryContainer (fast 150 in and out, easeOutCubic). Stage and line always change together, on the same controller.

| Step | Start | End | Elements | Change | Token · easing |
|---|---|---|---|---|---|
| 0 | 0 | 300 | Stage card, 5 lines | Card fades in; lines fade in 50 ms apart | sheet 260 |
| 1 | 300 | 450 | Line 1 Ask Kuber, stage | Spotlight on; Ask vignette fades in | fast 150 |
| 1a | 450 | 750 | Question bubble | Types "How much on food this month?" | 300 · linear |
| 1b | 780 | 930 | Answer bubble | Rises 8 px and fades in | fast 150 |
| 2 | 940 | 1090 | Line 2 Kuber Cards, stage | Spotlight moves; card vignette in, face showing chip only | fast 150 |
| 2a | 1100 | 1400 | Card | Flip: scaleX 1 → 0 (150), face swaps to masked number and lock, scaleX 0 → 1 (150) | fast 150 × 2 · easeOutCubic |
| 3 | 1580 | 1730 | Line 3 Kuber Notes, stage | Spotlight moves; note lines fade in | fast 150 |
| 3a | 1850 | 2000 | "= 14,500" | Scales 0.9 → 1 and fades in | fast 150 |
| 3b | 2000 | 2240 | Result → Travel chip | The number container-transforms into a transaction chip (−₹14,500, Travel) | containerTransform 240 |
| 4 | 2220 | 2370 | Line 4 Calculators, stage | Spotlight moves; SIP calculator in | fast 150 |
| 4a | 2300 | 2500 | Three inputs | Fill in, 50 ms apart | fast 150 each |
| 4b | 2500 | 2740 | Result | Counts ₹0 → ₹11,61,695 | containerTransform 240 · IntTween |
| 5 | 2860 | 3010 | Line 5 Reminders, stage | Spotlight moves; bell tile in | fast 150 |
| 5a | 2900 | 3140 | Bell | Rings: rotate 0 → −10° → 10° → −10° (three instant 90 moves, ending at −10°) | instant 90 × 3 |
| 5b | 3000 | 3260 | Notification | Slides down 16 px, fades in | sheet 260 · easeOutCubic |
| 6 | 3500 | 3740 | Stage, lines | Spotlight off; vignette container-transforms into five feature icon tiles; all lines at full emphasis | containerTransform 240 |
| Rest | 3740 | | | Five icons, five lines | |
