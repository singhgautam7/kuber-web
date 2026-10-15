# Open decisions (round 1)

Each item has a proposed default. Nothing here is decided silently.

1. **Classic / Modern nav styles.** Code only has `NavBarStyle { classic, modern }`; Futuristic was already removed (stale index 2 clamps to modern). Default: Perch pill replaces both; remove the "Nav bar style" setting and migrate any stored index to the pill. Alternative: keep Classic as an M3 `NavigationBar` option.
2. **KuberPageHeader retired.** Large 32/800 titles + 48dp primary action become the Perch header (titleLarge 22) with a subtitle slot. Default: keep descriptions as the 1-line subtitle; History export becomes a header icon button. `historyTitle` / `analyticsTitle` contain `\n`; render with a space (or add new l10n keys).
3. **Material You dynamic color as an 8th theme.** Default: yes, as "From your wallpaper" (Android 12+), same derivation as the 7 seeds (fidelity variant, Obsidian black override). Perch and Mull already ship it. Requires dropping hard rule 5 ("not M3 dynamic color").
4. **Shadows on nav pill and FAB.** Perch casts a shadow on these two; Kuber's rule is no shadows. Default: no shadow, 1dp outlineVariant border.
5. **Off-grid Perch values.** Header top 14, back gap 6, pill/FAB gap 10, nav item padding 11/14 are not on the 4dp grid. Brief says copy Perch as-is, so default: keep them as named component constants (exempt). Alternative: round to 12/8/8/12 in all three apps.
6. **Category colours vs categorical palette.** Default: user-picked category colours stay the source of truth for categories, re-toned per theme (keep hue + chroma, tone T52 light / T76 dark for charts, T90/T30 containers for tiles), replacing `harmonizeCategory`. The 8-colour categorical palette is used for things without a user colour (category groups, tags, "Other"), and as a fallback when two adjacent slices are less than 15° apart in hue.
7. **Budget "High usage" (80-99%).** Today it is red like Exceeded. Default: near-limit (warning) style; only 100%+ uses expense/over style. Thresholds and labels unchanged.
8. **Multi-select bar moves to the top.** Today it is a bottom bar; the brief asks for a contextual header. Default: contextual header with the same totals and the single Delete action.
9. **Home header.** Greeting becomes the header title; Ask Kuber (PremiumHomeButton, KuberMarkWidget) becomes a tonal icon button and loses its text label. Alternative: keep a labelled pill and move the greeting below the header.
10. **Mono font for section headers/counts (Perch, Mull style).** Default: no. Inter only; JetBrains Mono stays for raw SMS text.
11. **FAB on More tab.** Classic hid it on More; Modern (default) shows it. Default: always shown.
12. **Obsidian true black.** Default: surface and surfaceContainerLowest forced to #000000; other roles from the scheme. Alternative: M3 tonal dark (#10131A) with an optional true-black toggle like Perch.
13. **More tab layout setting.** With one grouped pattern, the Simple / Modern MoreTabLayout choice no longer differs. Default: remove the setting.
14. **Squeakdin seed** changes from #4A7FD1 to #1E3A8A so it does not collide with Signature blue.
15. **Found while reading code (not fixed):** Home header screenshot order differs from current code (code wins); transfer icon #78909C, attachment badge #D4A017, budget `Colors.green/orange.shade600`, onboarding orbit #3B82F6 and heatmap skeleton `Colors.white10` are raw colours against hard rule 1; SmartInsights widget exists but is not in the default editor list.
