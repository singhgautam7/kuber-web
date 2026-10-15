# Home v3.3 · entry points

Board: `home-v3.3/Home v3.3.dc.html` HV33.1 (Welcome), HV33.2 (More), HV33.3 (Home card). Where this conflicts with Home v3.2, **Home v3.3 wins**.

Three entries, one set of 5 pages. Pricing rule for all three: no mention of free, Pro, limits or prices on any tour page or in any entry point's copy.

## State (prefs)

- `tour.seenAt`: set the first time the tour is shown from any entry (Welcome page 1 included). Never cleared.
- `tour.cardEligible`: written once by the upgrade migration, `true` only when `onboarded` was already `true` before this version. Fresh installs never write it.
- `tour.cardState`: `pending` | `shown` | `retired`.
- v3.2 keys `tour.openedAt`, `tour.cardShownDays` are read once to fill `tour.seenAt`, then ignored.

## a · Welcome

The 5 pages end onboarding, after Make it yours and What do you want to track? (flow.md). Differences from the other entries: 7 dots, back arrow on page 1 (to the tracking question), no Try it, Skip on all 5 pages → Home, page 5 primary Start using Kuber → Home.

## b · More › Tutorial › Why Kuber?

- Row title `tourName`, subtitle `tourMoreSub`, play_circle icon, chevron. Title "Why Kuber?"; subtitle "How expense tracking works, and how Kuber helps" says it covers expense tracking in general, not just app features. It takes the place of the Welcome Tour row (Welcome is now the same 5 pages, so a separate replay would show the same thing; open-decisions 4). App Tutorial stays.
- Always visible for every user.
- Opens the tour with `from = more`: 5 dots, Skip on pages 1 to 4 closes the tour, back arrow on 2 to 5, Next on 1 to 4, Done on page 5 closes the tour.
- Try it on every page closes the tour and opens: 1 Add transaction, 2 More › Accounts, 3 More › Upcoming Events, 4 Analytics tab, 5 More tab scrolled to Signature.
- Animations replay from the start each time the tour is opened from here.

## c · Home card (existing users only)

Content: icon tile, title `tourName` (Why Kuber?), line `tourCardBody` (How tracking every expense helps, and what Kuber can do.), tonal `tourCardAct` Show me, close icon (`tourCardHideA11y`). Same shell as the v2 suggestion card.

### Who and when
| Condition | Card |
|---|---|
| `tour.cardEligible` true and `tour.cardState` = `pending`, first Home after the update | Shows |
| Fresh install (any version from v3.3 on) | Never. They saw the tour in Welcome |
| `tour.seenAt` set before the card shows | Never |

### Where
Under the greeting, above the first widget, on every Home layout (v1, v2, v3). Never in the top slot, so Get started, promo banners and suggestions are unaffected and no arbitration is needed. Nothing else on Home changes.

### Show and dismiss
- First render: state `shown`.
- Show me: open the tour (`from = home`, same as More: Try it, Done), set `tour.seenAt`, state `retired`. The card collapses (reflow 230, easeOutCubic) when the user returns to Home.
- Close icon: state `retired`, collapse, snackbar `tourCardHidden` with Undo. Undo restores it for this session only.
- Opening the tour from More: state `retired`.
- Next cold start with the card still `shown`: state `retired` silently. It is shown in one session only.
- Once `retired`, it never shows again.

### Removed from v3.2
- New-user card in the top slot (after Get started graduates) and its 5-day rule.
- Top slot order goes back to Get started > promo banner > suggestion.
