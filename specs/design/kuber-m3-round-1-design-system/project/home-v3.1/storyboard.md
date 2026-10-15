# Home v3.1 · Purpose animation storyboard

Board: `home-v3.1/Home v3.1.dc.html` HV31.3 (keyframes, reduced motion), HV31.5 (themes). One story: a bank SMS arrives, becomes a Kuber transaction, and lands in an account and a category. Total 3190 ms, then it rests on the last frame.

## Build

- One `AnimationController`, duration 3190 ms, started once in `initState` with `forward()`. Never `repeat()`.
- Each element reads its own `CurvedAnimation(parent, curve: Interval(start/3190, end/3190, curve: Curves.easeOutCubic))`.
- Flutter built-ins only: `Transform.translate`, `Opacity` / `FadeTransition`, `ScaleTransition`, a morph done by lerping `Rect`, `BorderRadius`, `Color` and border width in one `AnimatedBuilder`, and a `CustomPainter` that draws two lines with `PathMetric.extractPath`. No Lottie, Rive or video.
- Stage: 320 × 220 logical px, centred above the headline. Wrapped in `RepaintBoundary`. `ExcludeSemantics` on the stage, plus one `Semantics(label: homeV31_purA11y)`.
- Every colour comes from the theme: SMS bubble `surfaceContainerHigh` with `onSurface` / `onSurfaceVariant` text; transaction card `surfaceContainer` with an `outlineVariant` 1 px border (the existing transaction row); chips are the existing filter chip (selected `secondaryContainer` / `onSecondaryContainer`, unselected outline with `primary` icon); lines `primary`, 2 px, round caps; labels labelMedium caps `onSurfaceVariant`. Food tile uses the Food category colour through the existing harmonizer. So it works in light, dark and all 7 palettes with no extra assets.
- Generic content only: sender "Your Bank", no logo, no real bank name.

Motion tokens (tokens.md §8): instant 90, fast 150, reflow 230, containerTransform 240, sheet 260. Everything here is system-caused, so every step uses **easeOutCubic** (finger-caused easeOutBack does not apply).

## Elements

| Id | Element | Start state |
|---|---|---|
| E1 | SMS bubble (280 wide, radius 20 / 20 / 20 / 4), sender line, body | Hidden, 24 px below its spot |
| E2 | Transaction card (320 wide, existing transaction row: Food tile, Food delivery, Food · Bank, −₹250, Just now, From bank SMS) | Not built; E1 morphs into it |
| E3 | Account kind chips: Bank (x 47), Cash (x 139), Credit card (x 252), top 152 | Hidden, 8 px low |
| E4 | Line card → Bank (x 47, y 112 to 152) | Length 0 |
| E5 | Category chip Food (x 252, top 152) | Hidden, scale 0.92 |
| E6 | Line card → Food (x 252, y 112 to 152) | Length 0 |
| E7 | Labels ACCOUNT (under Bank), CATEGORY (under Food), top 194 | Hidden |

## Timeline

| Step | Start ms | End ms | Elements | Change | Token | Easing |
|---|---|---|---|---|---|---|
| 1 | 0 | 260 | E1 | Rises 24 px to y 72, opacity 0 → 1 | sheet 260 | easeOutCubic |
| 2 | 260 | 1200 | none | Hold: time to read the SMS | n/a | n/a |
| 3 | 1200 | 1440 | E1 → E2 | Morph: rect (20, 72, 280 × 84) → (0, 72, 320 × 88); radius 20/20/20/4 → 20; colour surfaceContainerHigh → surfaceContainer; border 0 → 1 px outlineVariant | containerTransform 240 | easeOutCubic |
| 3a | 1200 | 1350 | E1 text | Opacity 1 → 0 | fast 150 | easeOutCubic |
| 3b | 1290 | 1440 | E2 content | Opacity 0 → 1 | fast 150 | easeOutCubic |
| 4 | 1440 | 1800 | none | Hold: the transaction is readable | n/a | n/a |
| 5 | 1800 | 2030 | E2 | Moves up 48 px to y 24 | reflow 230 | easeOutCubic |
| 5a | 1800 | 1950 | E3 Bank | Rises 8 px, opacity 0 → 1 | fast 150 | easeOutCubic |
| 5b | 1850 | 2000 | E3 Cash | Same, 50 ms later | fast 150 | easeOutCubic |
| 5c | 1900 | 2050 | E3 Credit card | Same, 100 ms later | fast 150 | easeOutCubic |
| 6 | 2250 | 2490 | E4 | Line draws top to bottom | containerTransform 240 | easeOutCubic |
| 6a | 2490 | 2640 | E3 Bank, E7 ACCOUNT | Bank chip turns selected (colour); label opacity 0 → 1 | fast 150 | easeOutCubic |
| 7 | 2640 | 2790 | E3 Cash, Credit card | Opacity → 0, then removed | fast 150 | easeOutCubic |
| 8 | 2950 | 3190 | E5, E6, E7 CATEGORY | Food chip opacity 0 → 1 and scale 0.92 → 1 in Credit card's place; line draws; label fades in | containerTransform 240 | easeOutCubic |
| 9 | 3190 | | all | **Rest frame (K6).** Card, Bank and Food chips, both lines, both labels | n/a | n/a |

Cash and Credit card are on screen from about 1850 to 2790 ms: long enough to read them as the other account kinds, then they step aside for the category.

## Keyframes on the board

| Key | At ms | What the user sees |
|---|---|---|
| K1 | 260 | SMS bubble in place |
| K2 | 1320 | Bubble halfway into a card: both contents faint |
| K3 | 1440 | Transaction card formed |
| K4 | 2050 | Card moved up; Bank, Cash, Credit card chips below |
| K5 | 2640 | Line to Bank drawn, Bank selected, ACCOUNT label; Cash and Credit card fading |
| K6 | 3190 | Rest frame: card linked to Bank (Account) and Food (Category) |

## When it plays

- Plays once each time the Purpose page becomes the visible page for the first time in this onboarding run (`onPageChanged` to index 1 and not played yet).
- Swiping back to Purpose later in the same run shows K6 at once (`controller.value = 1`). See open-decisions 3.
- Leaving the page mid-animation: jump to the end (`value = 1`) so a return shows K6.
- Welcome Tour replay: plays once, same rule.

## Reduced motion

When `MediaQuery.disableAnimationsOf(context)` is true, the controller is not started and the stage shows a single static frame (stage height 300): SMS bubble at the top, a `primary` arrow_downward, the transaction card, both lines, the Bank and Food chips, and the two labels. It reads top to bottom as SMS → transaction → account and category, so the story survives without motion. Page transitions keep the existing 90 ms cross-fade rule.
