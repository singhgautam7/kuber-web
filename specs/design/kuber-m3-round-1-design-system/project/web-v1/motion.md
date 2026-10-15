# Web v1 · Motion

CSS transitions and keyframes plus one small vanilla script (`src/scripts/site.ts`, about 3 KB). No Lottie, video or libraries. Every animation has a static version: under `prefers-reduced-motion: reduce` nothing moves, elements render in their rest state, and state changes use a 90 ms opacity cross-fade at most.

Tokens: instant 90, fast 150, navIndicator 220, containerTransform 240, sheet 260, reflow 230. Easing `--k-ease: cubic-bezier(0.2, 0, 0, 1)` unless noted. Only `transform` and `opacity` animate, except the nav pill height and theme colours.

Working reference: `Web v1 Home Prototype.dc.html` (theme menu, theme switch, nav shrink, Why Kuber reveal and stage keyframes).

## 1. Hero (on load)

| Element | Start | Duration | Change |
|---|---|---|---|
| Status chip | 0 | 260 sheet | opacity 0 → 1, translateY 12 → 0 |
| Headline line 1 | 60 | 260 | same |
| Headline line 2 | 120 | 260 | same |
| Lead + buttons | 180 | 260 | same |
| Live Home phone | 120 | 400 | opacity 0 → 1, translateY 32 → 0 |
| Money story rings (inside phone) | 520 | 240 each, 60 apart | stroke-dashoffset to rest |

Runs once per page load. Reduced motion: all at rest, no delay.

## 2. Why Kuber (5 parts)

Each part has a text column and a stage (the Home v3.3 storyboard, same elements and timings, `../home-v3.3/storyboards.md`). Trigger: `IntersectionObserver`, threshold 0.35, once per page view. Never loops.

| Part | Total | Web build |
|---|---|---|
| Text column (all parts) | 260 | opacity 0 → 1, translateY 16 → 0 |
| 1 · Notebook to transactions | 3000 | Rows revealed with `clip-path: inset(0 X 0 0)` animated by CSS `@keyframes` with `steps()` per column for the writing feel; pen icon rides the clip edge (`offset` via translateX); rows morph to cards by animating `transform` + `border-radius` on the same element; amount colour cross-fades. |
| 2 · Accounts and cards | 2740 | Tiles rise and fade 60 apart; balances tick with a JS counter (requestAnimationFrame, Indian grouping, linear); cycle strip grows with `scaleY` from the top; chips fade in 50 apart; the new chip types "Pet care" with a JS character counter. |
| 3 · More than spending | 3100 | Five rows slide 8 px right and fade, 560 apart; bar uses `scaleX` from 0; SIP line uses `stroke-dashoffset`; EMI ring `stroke-dasharray`; renewal chip swaps text with a 150 slide. |
| 4 · At a glance | 3900 | Search types "food" (JS counter), non-food rows fade, list reflows (`transform` FLIP), list container-transforms into the chart card (FLIP on one element), donut arcs by `stroke-dashoffset`, tabs cross-fade bars. |
| 5 · Go further | 3740 | Spotlight moves down the five feature lines (secondaryContainer fill, 150), stage vignettes cross-fade in step; bell rotates −10 / 10 / −10 (three 90 steps). |

Timings, start and end per element are the Home v3.3 tables; each `Interval` becomes `animation-delay` + `animation-duration` on the element. Easing as listed there (easeOutCubic → `--k-ease`, linear where marked).

Prototype simplification: the prototype cross-fades between the storyboard keyframes (240 each, spread over the part's total). Production builds the element-level version above.

Reduced motion: stage shows the static frame (part 1: notebook, arrow, cards; parts 2 to 5: rest frame). Text appears without movement. Each stage keeps its `aria-label` (copy.md, Why Kuber a11y).

## 3. Nav on scroll

| Trigger | Change | Timing |
|---|---|---|
| `scrollY > 24` | top 16 → 8; pill height 56 → 48, padding 8 → 4, background surface → surface-container; items 40 → 36; FAB 56 → 48 | navIndicator 220, `--k-ease` |
| back to `≤ 24` | reverse | 220 |
| Mobile, scrolled past the hero | FAB label collapses (width to 56, label opacity 0) | 220 |
| Mobile, scrolling down fast | Nothing hides. The pill and FAB stay put. | |

Use a sentinel element and `IntersectionObserver` instead of a scroll listener. Reduced motion: values switch with no transition.

Active nav indicator: on route change the secondaryContainer pill does not slide between pages (full page loads); it renders on the current item.

## 4. Theme switch

| Element | Change | Timing |
|---|---|---|
| Whole page | `[data-theme]` / `[data-mode]` change; `background-color`, `color`, `border-color`, `fill`, `stroke` transition on elements that opt in (`.k-themed`) | containerTransform 240, `--k-ease` |
| Better path where supported | `document.startViewTransition()` cross-fade of the root | 240 |
| Selected tile / menu row | secondaryContainer fill in, check icon scales 0.8 → 1 | fast 150, easeOutBack for the scale |
| Image mockups on mode change | `<img>` src swap behind a 150 opacity cross-fade; width and height fixed so nothing shifts | 150 |

Reduced motion: instant swap, no view transition.

## 5. Menus and sheets

| Element | Open | Close |
|---|---|---|
| Theme menu (desktop) | opacity 0 → 1, scale 0.96 → 1 from the button, 150 | 90 fade |
| Mobile nav sheet | translateY 100% → 0 sheet 260; scrim 0 → 32% 150 | 200, scrim fade 150 |
| Docs mobile pickers | same bottom sheet | same |

Focus moves into the menu or sheet on open (first selected item) and back to the trigger on close. Esc closes. Reduced motion: fades only.

## 6. Hover and press (desktop)

- Buttons, chips, nav items, cards: state layer opacity 0 → 8% (hover) or 12% (pressed), fast 150. No movement, no scale on hover.
- Feature cards: border outline-variant → outline and background low → container, fast 150.
- Focus ring appears instantly (no transition), keyboard only.


## Why Kuber · scroll animation (handoff)

The five Why Kuber parts on Home are not static images. Each part plays the same storyboard as the in-app tour (`home-v3.3/storyboards.md`) as the visitor scrolls: the notebook lines turn into transactions, accounts fill in, modules appear, history and charts build, then the signature tools. Drive each stage from scroll progress through its section (sticky stage, 0 to 1), not from a timer. The frames on the Home board are the rest state of each stage. Respect `prefers-reduced-motion`: show the rest state with a 150 ms cross-fade between parts and no movement.
