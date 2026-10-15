# Density audit

What makes current Kuber feel dense, measured from the code, with the fix that the system applies.

| # | Cause (Vault) | Example | Fix | Before → after |
|---|---|---|---|---|
| 1 | Every row is its own bordered card | History: each transaction card has 1dp border + 8 gap | Day = one grouped list, dividers | 4 rows: 8 borders + 3 gaps → 1 border + 3 dividers |
| 2 | Edge margin 16 with 16 card padding | All tab screens | screenMargin 20, cardPadding 16 | Content inset 32 → 36 |
| 3 | Sections only 24 apart and titles in 11/700 caps at full onSurface | Home widget titles | sectionGap 28, labelMedium caps onSurfaceVariant | Headers recede, gaps read as groups |
| 4 | 20 type sizes, many half sizes (9.5, 11.5, 12.5, 13.5) | Account tile: 13.5, 10, 9.5, 18, 10 | 13 roles, 9 sizes | Account tile 5 sizes → 4 roles |
| 5 | Heavy weights everywhere (800 on titles, labels, buttons) | Onboarding, sheets, page headers | 700 only for display/headline, 600 titles/labels, 400 body | Fewer competing bolds per screen |
| 6 | 32/800 two-line page headers + description + 48 FAB | History, Analytics, More | One-line 22/600 header, subtitle slot, 40 icon button | Header 128 → 82 tall (History) |
| 7 | Toolbars of boxed 44×44 icons | History FILTERS row: label + 2 chips + 3 boxed icons | Chips + 1 icon button; clear only when active; label dropped | 6 boxed items → 3 chips + 1 button |
| 8 | Same visual weight for every control (r8 + border) | Buttons, chips, inputs, tiles all look alike | Shape tells role: pill = action, 8 = chip, 16 = field, 20 = card | |
| 9 | Accent borders and tints used as decoration | Primary-bordered highlight cards, 13% tinted icon boxes with 45% borders | Container roles without borders | |
| 10 | Mixed patterns in one screen | More modern layout uses 5 layouts | One grouped-list pattern for all sections | |
| 11 | Vertical rules inside stat cards | Spending pattern, upcoming events | Whitespace columns | 2 rules removed per card |
| 12 | Snackbar with left bar, icon, shadow and border | All toasts | Tonal container, no bar, no shadow | |

## Before / after examples
- **History row:** 42 tile, 14 name, 12 sub, 11 tags, 14 amount, 11 time, in a 1dp bordered card with 8 gap → 72 or 88 row inside the day group, 40 tile radius 12, titleMedium / bodyMedium / labelMedium / titleMedium / bodySmall. See `Screen 5 - History` 3.5.
- **Home:** 13 widgets each with an 11/700 title and a bordered r8 card 24 apart → sentence-case headers, cards radius 20, 28 apart, budgets / events / recent as grouped lists. See `Screen 2 - Home` 3.2b.
- **Add transaction:** 5 separate full-width bordered tiles (date, tags, notes, attachments + category/account) → category/account pair + one grouped list of 3 navigation rows + note field. See `Screen 4` 3.4.
- **More:** 6 numbered groups in 5 layouts → 6 grouped lists, Help Us strip kept. See `Screen 7` 3.7.
