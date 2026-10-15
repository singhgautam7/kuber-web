# Home v3.2 · entry points

Board: `home-v3.2/Home v3.2.dc.html` HV32.1. Built on Home v3.1; where they differ, **v3.2 wins**. The tour ("How Kuber works", 5 pages) is always optional and never part of the required onboarding path.

## State (prefs)

- `tour.openedAt`: set the first time the tour opens from any entry. Never cleared.
- `tour.cardState`: `pending` | `shown` | `dismissed` | `retired`, plus `tour.cardShownDays` (list of day stamps).
- Install-time cohort from v2/v3 (`homeLayout`) decides when the card can first appear.

## a · Welcome, last page ("What do you want to track?")

- A text button `tourName` with a play_circle icon, below the chips. Text button, left-aligned in the content area, far from the filled Continue at the bottom, so it does not compete.
- Tap: save the chip choices now (`homeV3.trackingChoices`; `trackingAnswer` is not written yet), set `tour.openedAt`, open the tour with `from = welcome`.
- From Welcome: no Try it buttons; page 5 primary reads `tourStart` "Start using Kuber" and does what Continue does on the tracking page (writes `trackingAnswer`, finishes onboarding, opens Home).
- Skip, the back arrow on page 1, or system back: close the tour and return to the tracking page with the same chips selected (open-decisions 3).
- Works with 0 chips picked. Continue on the tracking page stays disabled until a pick, as in v3.

## b · One-time card on Home

Content: icon tile, title `tourName`, line `tourCardBody`, tonal `tourCardAct` "Show me", close icon (`tourCardHideA11y`). Same shell as the v2 suggestion card.

### When it can show
| Cohort | First eligible |
|---|---|
| v2 / v3 / v3.1 installs (new users) | The first session that starts at least 24 hours after Get started graduated (same wait as suggestions). Never while Get started is eligible, so never on day 1 |
| v1 installs (existing users) | The first launch after this update. Deliberate exception to "existing users see no change": this one card, nothing else changes |
| Any install with `tour.openedAt` set | Never |

### Where it sits
- v2 / v3 Home: in the top slot. Order in the slot: Get started > promo banner > tour card > suggestion. While the tour card is in the slot, no suggestion is shown and no suggestion counts as shown that day.
- v1 Home (no top slot): inserted once between the greeting and the first widget. Nothing else on v1 Home changes; no suggestions are turned on.

### Show and dismiss rules
- Show me: open the tour (`from = home`), set `tour.openedAt`; card state `retired`. It collapses (reflow 230, easeOutCubic) when the user comes back to Home.
- Close icon: state `dismissed`, collapse, snackbar `tourCardHidden` with Undo (existing timed snackbar). Undo restores the card for this session.
- Opening the tour from More or Welcome also retires the card.
- Shown on 5 different days with no tap: `retired` quietly (open-decisions 4).
- Once `dismissed` or `retired`, it never shows again. Reinstalls start fresh.

## c · More tab

- Permanent row in More › Tutorial, directly under Welcome Tour: title `tourName`, subtitle `tourMoreSub`, play_circle icon, chevron.
- Always visible for every cohort. Opens the tour with `from = more` (Try it shown, page 5 ends with Done). Sets `tour.openedAt`.

## Inside the tour (all entries)

- 5 pages in a PageView: swipe, dots (`tourPageA11y`), back arrow on pages 2 to 5, Skip on every page, including page 5 (closes the tour; from Welcome it returns to the tracking page), primary `tourNext` on 1 to 4.
- Page 5 primary: Done (`from = home | more`) or Start using Kuber (`from = welcome`).
- Try it (`from = home | more` only): close the tour, then open the page's target: Add transaction, More › Accounts, More › Upcoming Events, Analytics tab, More tab scrolled to Signature.
- No prices, no paywall, no Pro upsell. "Free to try" appears on the Ask Kuber, Kuber Cards and Kuber Notes tiles and in the page 5 subhead.
