# Kuber M3 system, on one page

Kuber moves from Vault (squircle-ish 8dp everything, borders as the only depth, 20 type sizes) to the Material 3 language shared with Perch, Mull and Unfurl. UI only: same screens, same navigation, same actions.

**Boards:** `Kuber M3 Foundations.dc.html`, `Kuber M3 Components.dc.html`, `Screen 1 - Welcome` to `Screen 7 - More` (.dc.html). Docs: `tokens.md`, `components/`, `screens/`, `migration-map.md`, `density-audit.md`, `open-decisions.md`.

## The rules
1. **Spacing:** 4/8 scale (4 8 12 16 24 32 48). Screen margin 20, section gap 28, card padding 16, cards 12 apart, rows 56 / 72 / 88.
2. **Shape:** rounded, never squircle. Chips 8, tiles 12, fields 16, cards 20, sheets and dialogs 28, everything interactive and pill-shaped is full.
3. **Type:** Inter on 13 M3 roles, 9 sizes. Screen titles titleLarge 22/600. Amounts tabular. Section headers labelMedium caps.
4. **Colour:** 7 seeds through `ColorScheme.fromSeed(..., dynamicSchemeVariant: fidelity)`, light and dark = 14 palettes. Obsidian keeps a true black page. Selection uses secondaryContainer. Money colours live in `KuberMoneyColors` (ThemeExtension), never in tertiary / error.
5. **Elevation:** tonal steps + 1dp outlineVariant. No shadows anywhere.
6. **Grouping over boxing:** one grouped container with dividers instead of one bordered card per row (History days, More sections, settings-like lists, budgets, events).
7. **One header, one nav:** Perch AppHeader (keeps every KuberAppBar slot + new subtitle slot) and the Perch floating pill + FAB.
8. **Charts:** Digital Wellbeing feel. Rounded bar tops, dashed light gridlines, labels on the right, selection by dimming others to 38%.
9. **Progress:** M3 2024 style (rounded, 4dp gap, stop dot). Three states: normal, near limit, over limit.
10. **Copy:** unchanged strings, sentence-case section headers via style, no em dashes.

## What changes in code (summary)
- `app_theme.dart`: replace the Vault ColorScheme mapping with fromSeed + overrides; add `KuberMoneyColors`, `KuberChartTheme`; component themes per `components/`.
- `KuberRadius`, `KuberSpacing` → `KuberShape`, `KuberSpace` (see migration-map.md).
- `KuberAppBar` rebuilt on Perch `AppHeader` / `AppIconButton`; `KuberPageHeader` retired.
- `app_scaffold.dart` nav → Perch `NavShell` pill + FAB.
- `timed_snackbar.dart`: restyle only.
