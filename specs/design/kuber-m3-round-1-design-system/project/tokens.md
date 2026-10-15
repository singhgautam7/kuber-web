# Kuber M3 tokens

All values are final. dp for sizes, sp for type. Source boards: `Kuber M3 Foundations.dc.html` (1a to 1h). Generated colour values: `tokens/palettes.json`.

## 1. Spacing (`KuberSpace`)

| Token | Value |
|---|---|
| xs | 4 |
| sm | 8 |
| md | 12 |
| lg | 16 |
| xl | 24 |
| xxl | 32 |
| xxxl | 48 |

### Layout metrics (defined once)

| Token | Value | Use |
|---|---|---|
| screenMargin | 20 | Horizontal edge of every screen (Perch Space.screen) |
| sectionGap | 28 | Between sections (Perch Space.section) |
| sectionHeaderGap | 8 | Section header to content |
| cardGap | 12 | Between stacked cards / tiles |
| cardPadding | 16 | Inside cards |
| cardPaddingHero | 20 | One hero card per screen |
| listItem1 | 56 | One-line row |
| listItem2 | 72 | Two-line row |
| listItem3 | 88 | Three-line row |
| listRowPadH | 16 | Row horizontal padding; leading-to-text gap 16 |
| listRowPadV | 8 | Row vertical padding |
| tapTarget | 48 | Minimum hit area |
| navClearance | 108 | Bottom padding of every scroll view (Perch Space.bottomSafe) |
| icon | 24 (lists, nav) / 20 (buttons, header) / 18 (chips) | |

Component constants copied from Perch (exempt from the grid, see open-decisions 5): header top 14, header bottom 12, back gap 6, nav pill to FAB 10, nav item padding 11 / 14, nav bottom 22.

## 2. Shape (`KuberShape`, all `RoundedRectangleBorder`)

| Token | Radius | Use |
|---|---|---|
| none | 0 | Dividers |
| extraSmall | 4 | Bar tops |
| small | 8 | Chips, tooltips, heatmap cells, inline badges |
| medium | 12 | Category tiles, menu rows, inner tiles in cards |
| large | 16 | Text fields, snackbar, nested containers |
| largeIncreased | 20 | Cards, grouped lists, menus |
| extraLarge | 28 | Sheets (top), dialogs |
| full | StadiumBorder / CircleBorder | Buttons, icon buttons, nav pill, FAB, segmented, progress, badges, calculator keys |

## 3. Type (Inter via `localeFont()`; tabular figures on all amounts)

| Role | Size / line | Weight | Tracking | Use |
|---|---|---|---|---|
| displaySmall | 36 / 44 | 700 | -0.5 | Amount entry, score |
| headlineLarge | 32 / 40 | 700 | -0.5 | Welcome headline (step 1) |
| headlineMedium | 28 / 36 | 700 | -0.25 | Hero amounts, welcome headlines (steps 2 to 4) |
| headlineSmall | 24 / 32 | 600 | 0 | Dialog title, stat values |
| titleLarge | 22 / 28 | 600 | -0.2 | Screen header, sheet title |
| titleMedium | 16 / 24 | 600 | 0.1 | Card title, list headline, list amounts |
| titleSmall | 14 / 20 | 600 | 0.1 | Dense headline |
| bodyLarge | 16 / 24 | 400 | 0 | Inputs, paragraphs |
| bodyMedium | 14 / 20 | 400 | 0 | Supporting text |
| bodySmall | 12 / 16 | 400 | 0 | Captions, timestamps, helper |
| labelLarge | 14 / 20 | 600 | 0.1 | Buttons, tabs, nav label, chips |
| labelMedium | 12 / 16 | 600 | 0.5 (0.8 + uppercase for section headers) | Section headers, small chips |
| labelSmall | 11 / 16 | 500 | 0.5 | Axis labels, badges |

JetBrains Mono (`monoFont()`) only for raw SMS text: 12 / 19.

## 4. Colour

`ColorScheme.fromSeed(seedColor: seed, brightness: b, dynamicSchemeVariant: DynamicSchemeVariant.fidelity)`.
Obsidian override: `surface` and `surfaceContainerLowest` = #000000. No other overrides.

| Family | Seed |
|---|---|
| Kuber Signature | #3B82F6 |
| FlewTube Red | #E5484D |
| Woofsapp Green | #1FB855 |
| Purrhub Yellow | #FACC15 |
| Honkpe Purple | #8B5CF6 |
| Squeakdin Navy | #1E3A8A (was #4A7FD1) |
| Oinkzon Orange | #FB923C |

Role usage: selection, nav indicator, selected chips and segments = secondaryContainer / onSecondaryContainer. FAB = primaryContainer / onPrimaryContainer. Filled buttons = primary / onPrimary. Destructive = error family. income and expense never use tertiary or error.

### KuberMoneyColors (ThemeExtension)

HCT palettes. Light uses T40 / T100 / T90 / T30, dark uses T80 / T20 / T30 / T90.

| Role | Hue, chroma |
|---|---|
| income | 145, 48 (Woofsapp: 240, 48) |
| expense | 25, 84 (FlewTube: 60, 60) |
| warning | 75, 60 |

Contrast: T40 on light surface 6.2:1, T80 on #000 10.9:1.

### All 14 palettes

### Kuber Signature (seed #3B82F6)

| Role | Alabaster | Obsidian |
|---|---|---|
| primary | #0058BE | #ADC6FF |
| onPrimary | #FFFFFF | #002E6A |
| primaryContainer | #2170E4 | #4D8EFF |
| onPrimaryContainer | #FEFCFF | #001C46 |
| inversePrimary | #ADC6FF | #005AC2 |
| secondary | #495E8A | #B1C6F9 |
| onSecondary | #FFFFFF | #182F59 |
| secondaryContainer | #B6CCFF | #304671 |
| onSecondaryContainer | #405682 | #9FB5E7 |
| tertiary | #924700 | #FFB786 |
| onTertiary | #FFFFFF | #502400 |
| tertiaryContainer | #B75B00 | #DF7412 |
| onTertiaryContainer | #FFFBFF | #351600 |
| error | #BA1A1A | #FFB4AB |
| onError | #FFFFFF | #690005 |
| errorContainer | #FFDAD6 | #93000A |
| onErrorContainer | #93000A | #FFDAD6 |
| surface | #F9F9FF | #000000 |
| surfaceContainerLowest | #FFFFFF | #000000 |
| surfaceContainerLow | #F2F3FD | #191B23 |
| surfaceContainer | #ECEDF7 | #1D2027 |
| surfaceContainerHigh | #E6E7F2 | #272A31 |
| surfaceContainerHighest | #E1E2EC | #32353C |
| onSurface | #191B23 | #E1E2EC |
| onSurfaceVariant | #424754 | #C2C6D6 |
| outline | #727785 | #8C909F |
| outlineVariant | #C2C6D6 | #424754 |
| inverseSurface | #2E3038 | #E1E2EC |
| inverseOnSurface | #EFF0FA | #2E3038 |
| money.income / on / container / onContainer | #296B2A / #FFFFFF / #ACF4A2 / #0B5314 | #91D888 / #003908 / #0B5314 / #ACF4A2 |
| money.expense / on / container / onContainer | #BA1A1A / #FFFFFF / #FFDAD6 / #93000A | #FFB4AB / #690005 / #93000A / #FFDAD6 |
| money.warning / on / container / onContainer | #825500 / #FFFFFF / #FFDDB2 / #624000 | #FFB94E / #452B00 / #624000 / #FFDDB2 |
| viz.ramp (5 steps) | #EDF0FF #C3D4FF #81AAFF #2573E6 #004FAB | #002E6A #004395 #0566D9 #699CFF #ADC6FF |

### FlewTube Red (seed #E5484D)

| Role | Alabaster | Obsidian |
|---|---|---|
| primary | #B1212D | #FFB3B0 |
| onPrimary | #FFFFFF | #68000F |
| primaryContainer | #D43C42 | #FB585B |
| onPrimaryContainer | #FFFBFF | #3A0005 |
| inversePrimary | #FFB3B0 | #B5242F |
| secondary | #984443 | #FFB3B0 |
| onSecondary | #FFFFFF | #5D1719 |
| secondaryContainer | #FF9693 | #7D2F30 |
| onSecondaryContainer | #782C2C | #FF9E9B |
| tertiary | #006859 | #6BD9C1 |
| onTertiary | #FFFFFF | #00382E |
| tertiaryContainer | #008470 | #29A28C |
| onTertiaryContainer | #F4FFFA | #001C16 |
| error | #BA1A1A | #FFB4AB |
| onError | #FFFFFF | #690005 |
| errorContainer | #FFDAD6 | #93000A |
| onErrorContainer | #93000A | #FFDAD6 |
| surface | #FFF8F7 | #000000 |
| surfaceContainerLowest | #FFFFFF | #000000 |
| surfaceContainerLow | #FFF0EF | #261817 |
| surfaceContainer | #FFE9E7 | #2B1C1B |
| surfaceContainerHigh | #FDE2E0 | #362625 |
| surfaceContainerHighest | #F7DCDB | #413130 |
| onSurface | #261817 | #F7DCDB |
| onSurfaceVariant | #5A403F | #E2BEBC |
| outline | #8E706E | #A98987 |
| outlineVariant | #E2BEBC | #5A403F |
| inverseSurface | #3D2C2C | #F7DCDB |
| inverseOnSurface | #FFEDEB | #3D2C2C |
| money.income / on / container / onContainer | #296B2A / #FFFFFF / #ACF4A2 / #0B5314 | #91D888 / #003908 / #0B5314 / #ACF4A2 |
| money.expense / on / container / onContainer | #8F4E00 / #FFFFFF / #FFDCC1 / #6C3A00 | #FFB779 / #4C2700 / #6C3A00 / #FFDCC1 |
| money.warning / on / container / onContainer | #825500 / #FFFFFF / #FFDDB2 / #624000 | #FFB94E / #452B00 / #624000 / #FFDDB2 |
| viz.ramp (5 steps) | #FFEDEB #FFC7C4 #FF8986 #D83E44 #A31524 | #68000F #92011A #C63139 #FF7070 #FFB3B0 |

### Woofsapp Green (seed #1FB855)

| Role | Alabaster | Obsidian |
|---|---|---|
| primary | #006E2D | #54E077 |
| onPrimary | #FFFFFF | #003914 |
| primaryContainer | #1FB855 | #1FB855 |
| onPrimaryContainer | #004118 | #004118 |
| inversePrimary | #54E077 | #006E2D |
| secondary | #34693D | #9AD49E |
| onSecondary | #FFFFFF | #003914 |
| secondaryContainer | #B3EEB6 | #1D532A |
| onSecondaryContainer | #386E41 | #8DC691 |
| tertiary | #A93342 | #FFB3B6 |
| onTertiary | #FFFFFF | #680019 |
| tertiaryContainer | #FF7480 | #FF7480 |
| onTertiaryContainer | #73061F | #73061F |
| error | #BA1A1A | #FFB4AB |
| onError | #FFFFFF | #690005 |
| errorContainer | #FFDAD6 | #93000A |
| onErrorContainer | #93000A | #FFDAD6 |
| surface | #F4FCEF | #000000 |
| surfaceContainerLowest | #FFFFFF | #000000 |
| surfaceContainerLow | #EEF6EA | #161D16 |
| surfaceContainer | #E8F0E4 | #1A211A |
| surfaceContainerHigh | #E2EBDE | #242C24 |
| surfaceContainerHighest | #DDE5D9 | #2F372F |
| onSurface | #161D16 | #DDE5D9 |
| onSurfaceVariant | #3D4A3D | #BCCBB9 |
| outline | #6D7B6C | #869485 |
| outlineVariant | #BCCBB9 | #3D4A3D |
| inverseSurface | #2B322A | #DDE5D9 |
| inverseOnSurface | #EBF3E7 | #2B322A |
| money.income / on / container / onContainer | #006590 / #FFFFFF / #C8E6FF / #004C6D | #88CEFF / #00344D / #004C6D / #C8E6FF |
| money.expense / on / container / onContainer | #BA1A1A / #FFFFFF / #FFDAD6 / #93000A | #FFB4AB / #690005 / #93000A / #FFDAD6 |
| money.warning / on / container / onContainer | #825500 / #FFFFFF / #FFDDB2 / #624000 | #FFB94E / #452B00 / #624000 / #FFDDB2 |
| viz.ramp (5 steps) | #C5FFC8 #64EF84 #32C45F #008A3B #006027 | #003914 #005320 #007C34 #1AB553 #54E077 |

### Purrhub Yellow (seed #FACC15)

| Role | Alabaster | Obsidian |
|---|---|---|
| primary | #735C00 | #FFECB9 |
| onPrimary | #FFFFFF | #3C2F00 |
| primaryContainer | #FACC15 | #FACC15 |
| onPrimaryContainer | #6C5700 | #6C5700 |
| inversePrimary | #EEC200 | #735C00 |
| secondary | #6F5D1F | #DDC57C |
| onSecondary | #FFFFFF | #3C2F00 |
| secondaryContainer | #FBE195 | #584709 |
| onSecondaryContainer | #766324 | #CFB76F |
| tertiary | #006876 | #C7F5FF |
| onTertiary | #FFFFFF | #00363E |
| tertiaryContainer | #33E4FF | #33E4FF |
| onTertiaryContainer | #006270 | #006270 |
| error | #BA1A1A | #FFB4AB |
| onError | #FFFFFF | #690005 |
| errorContainer | #FFDAD6 | #93000A |
| onErrorContainer | #93000A | #FFDAD6 |
| surface | #FFF8F0 | #000000 |
| surfaceContainerLowest | #FFFFFF | #000000 |
| surfaceContainerLow | #FCF3E1 | #1F1B11 |
| surfaceContainer | #F6EDDB | #231F14 |
| surfaceContainerHigh | #F0E7D6 | #2E2A1E |
| surfaceContainerHighest | #EBE2D0 | #393428 |
| onSurface | #1F1B11 | #EBE2D0 |
| onSurfaceVariant | #4D4632 | #D1C6AB |
| outline | #7F7660 | #9A9078 |
| outlineVariant | #D1C6AB | #4D4632 |
| inverseSurface | #353024 | #EBE2D0 |
| inverseOnSurface | #F9F0DE | #353024 |
| money.income / on / container / onContainer | #296B2A / #FFFFFF / #ACF4A2 / #0B5314 | #91D888 / #003908 / #0B5314 / #ACF4A2 |
| money.expense / on / container / onContainer | #BA1A1A / #FFFFFF / #FFDAD6 / #93000A | #FFB4AB / #690005 / #93000A / #FFDAD6 |
| money.warning / on / container / onContainer | #825500 / #FFFFFF / #FFDDB2 / #624000 | #FFB94E / #452B00 / #624000 / #FFDDB2 |
| viz.ramp (5 steps) | #FFF0CA #FED01B #CEA700 #907400 #645000 | #3C2F00 #574500 #816800 #BE9A00 #EEC200 |

### Honkpe Purple (seed #8B5CF6)

| Role | Alabaster | Obsidian |
|---|---|---|
| primary | #6B38D4 | #D0BCFF |
| onPrimary | #FFFFFF | #3C0091 |
| primaryContainer | #8455EF | #A078FF |
| onPrimaryContainer | #FFFBFF | #14003B |
| inversePrimary | #D0BCFF | #6D3BD7 |
| secondary | #665396 | #D0BCFF |
| onSecondary | #FFFFFF | #372464 |
| secondaryContainer | #C9B3FD | #513E7F |
| onSecondaryContainer | #544183 | #C3ADF7 |
| tertiary | #855000 | #FFB869 |
| onTertiary | #FFFFFF | #482900 |
| tertiaryContainer | #A76500 | #CA801E |
| onTertiaryContainer | #FFFBFF | #190B00 |
| error | #BA1A1A | #FFB4AB |
| onError | #FFFFFF | #690005 |
| errorContainer | #FFDAD6 | #93000A |
| onErrorContainer | #93000A | #FFDAD6 |
| surface | #FEF7FF | #000000 |
| surfaceContainerLowest | #FFFFFF | #000000 |
| surfaceContainerLow | #F8F1FE | #1D1A23 |
| surfaceContainer | #F3EBF8 | #211E27 |
| surfaceContainerHigh | #EDE5F3 | #2C2832 |
| surfaceContainerHighest | #E7E0ED | #37333D |
| onSurface | #1D1A23 | #E7E0ED |
| onSurfaceVariant | #494454 | #CBC3D7 |
| outline | #7B7486 | #958EA0 |
| outlineVariant | #CBC3D7 | #494454 |
| inverseSurface | #322F39 | #E7E0ED |
| inverseOnSurface | #F5EEFB | #322F39 |
| money.income / on / container / onContainer | #296B2A / #FFFFFF / #ACF4A2 / #0B5314 | #91D888 / #003908 / #0B5314 / #ACF4A2 |
| money.expense / on / container / onContainer | #BA1A1A / #FFFFFF / #FFDAD6 / #93000A | #FFB4AB / #690005 / #93000A / #FFDAD6 |
| money.warning / on / container / onContainer | #825500 / #FFFFFF / #FFDDB2 / #624000 | #FFB94E / #452B00 / #624000 / #FFDDB2 |
| viz.ramp (5 steps) | #F6EDFF #DDCDFF #B89BFF #8758F2 #612ACA | #3C0091 #5516BE #7A49E4 #AC8AFF #D0BCFF |

### Squeakdin Navy (seed #1E3A8A)

| Role | Alabaster | Obsidian |
|---|---|---|
| primary | #00236F | #B6C4FF |
| onPrimary | #FFFFFF | #05297A |
| primaryContainer | #1E3A8A | #1E3A8A |
| onPrimaryContainer | #90A8FF | #90A8FF |
| inversePrimary | #B6C4FF | #4059AA |
| secondary | #555D7E | #BDC5EB |
| onSecondary | #FFFFFF | #262F4D |
| secondaryContainer | #D0D8FF | #3D4565 |
| onSecondaryContainer | #555E7F | #ABB4D9 |
| tertiary | #4B1C00 | #FFB691 |
| onTertiary | #FFFFFF | #552000 |
| tertiaryContainer | #6E2C00 | #6E2C00 |
| onTertiaryContainer | #F39461 | #F39461 |
| error | #BA1A1A | #FFB4AB |
| onError | #FFFFFF | #690005 |
| errorContainer | #FFDAD6 | #93000A |
| onErrorContainer | #93000A | #FFDAD6 |
| surface | #FAF8FF | #000000 |
| surfaceContainerLowest | #FFFFFF | #000000 |
| surfaceContainerLow | #F4F3FA | #1A1B21 |
| surfaceContainer | #EEEDF4 | #1E1F25 |
| surfaceContainerHigh | #E9E7EF | #292A2F |
| surfaceContainerHighest | #E3E1E9 | #34343A |
| onSurface | #1A1B21 | #E3E1E9 |
| onSurfaceVariant | #444651 | #C5C5D3 |
| outline | #757682 | #8F909D |
| outlineVariant | #C5C5D3 | #444651 |
| inverseSurface | #2F3036 | #E3E1E9 |
| inverseOnSurface | #F1F0F7 | #2F3036 |
| money.income / on / container / onContainer | #296B2A / #FFFFFF / #ACF4A2 / #0B5314 | #91D888 / #003908 / #0B5314 / #ACF4A2 |
| money.expense / on / container / onContainer | #BA1A1A / #FFFFFF / #FFDAD6 / #93000A | #FFB4AB / #690005 / #93000A / #FFDAD6 |
| money.warning / on / container / onContainer | #825500 / #FFFFFF / #FFDDB2 / #624000 | #FFB94E / #452B00 / #624000 / #FFDDB2 |
| viz.ramp (5 steps) | #EFF0FF #C9D3FF #8FA7FE #5A73C5 #334D9D | #05297A #264191 #4D66B8 #829AEF #B6C4FF |

### Oinkzon Orange (seed #FB923C)

| Role | Alabaster | Obsidian |
|---|---|---|
| primary | #944A00 | #FFB887 |
| onPrimary | #FFFFFF | #4F2500 |
| primaryContainer | #FB923C | #FB923C |
| onPrimaryContainer | #673200 | #673200 |
| inversePrimary | #FFB783 | #944A00 |
| secondary | #825432 | #F6BA90 |
| onSecondary | #FFFFFF | #4C2708 |
| secondaryContainer | #FFC298 | #693F1F |
| onSecondaryContainer | #7A4D2C | #E7AC83 |
| tertiary | #006781 | #61D5FF |
| onTertiary | #FFFFFF | #003545 |
| tertiaryContainer | #00BBE9 | #00BBE9 |
| onTertiaryContainer | #00465A | #00465A |
| error | #BA1A1A | #FFB4AB |
| onError | #FFFFFF | #690005 |
| errorContainer | #FFDAD6 | #93000A |
| onErrorContainer | #93000A | #FFDAD6 |
| surface | #FFF8F5 | #000000 |
| surfaceContainerLowest | #FFFFFF | #000000 |
| surfaceContainerLow | #FFF1E9 | #231A14 |
| surfaceContainer | #FDEAE0 | #271E17 |
| surfaceContainerHigh | #F7E5DA | #322821 |
| surfaceContainerHighest | #F1DFD5 | #3D332C |
| onSurface | #231A14 | #F1DFD5 |
| onSurfaceVariant | #554337 | #DBC1B2 |
| outline | #887365 | #A38C7E |
| outlineVariant | #DBC1B2 | #554337 |
| inverseSurface | #392E27 | #F1DFD5 |
| inverseOnSurface | #FFEDE4 | #392E27 |
| money.income / on / container / onContainer | #296B2A / #FFFFFF / #ACF4A2 / #0B5314 | #91D888 / #003908 / #0B5314 / #ACF4A2 |
| money.expense / on / container / onContainer | #BA1A1A / #FFFFFF / #FFDAD6 / #93000A | #FFB4AB / #690005 / #93000A / #FFDAD6 |
| money.warning / on / container / onContainer | #825500 / #FFFFFF / #FFDDB2 / #624000 | #FFB94E / #452B00 / #624000 / #FFDDB2 |
| viz.ramp (5 steps) | #FFEDE4 #FFCAA5 #FA913B #B95F01 #824100 | #4F2500 #713700 #A65400 #E9842F #FFB783 |


## 5. Elevation (tonal, no shadows)

| Level | Role | Use |
|---|---|---|
| 0 | surface | Page, header, nav pill |
| 1 | surfaceContainerLow | Bottom sheets |
| 2 | surfaceContainer | Cards, grouped lists, menus, contextual header |
| 3 | surfaceContainerHigh | Icon buttons, text fields, dialogs, tiles inside cards, skeleton blocks |
| 4 | surfaceContainerHighest | Switch track off, pressed, zero-data bar |

Border: 1dp outlineVariant on cards, groups, menus, nav pill. elevation 0 and surfaceTintColor transparent on every M3 component. Scrim: #000000 at 32%.

## 6. Data viz (`KuberChartTheme` ThemeExtension)

| Token | Value |
|---|---|
| series.income / series.expense | money.income / money.expense |
| series.single | primary |
| series.unselected | series colour at 38% opacity |
| ramp[5] | TonalPalette(seed hue, seed chroma): light T95 85 70 50 35, dark T20 30 45 65 80 |
| categorical[8] light | #427CCF #A97100 #008B83 #B85C99 #4D8A37 #C2612A #886BCC #C65A5A |
| categorical[8] dark | #96BDFF #F7AD34 #17D1C6 #FF9BD9 #8ACC70 #FFA679 #C6AFFF #FFA3A0 |
| categorical spec | HCT hues 262 75 190 345 140 45 300 20, chroma 52, T52 light / T76 dark (3.97:1 and 10.98:1 against surface) |
| user category colour | keep hue + chroma; chart T52 / T76, tile container T90 / T30, glyph T40 / T80 |
| gridline | 1dp dashed 4 on 4 off, outlineVariant; 3 lines (0, mid, max) |
| baseline | 1dp solid outlineVariant |
| axis label | labelSmall onSurfaceVariant; y labels right-aligned in a 36dp column; x labels centred under groups |
| bar width | 16 single, 10 + 2 gap paired, 8 in compact (6-month home chart) |
| bar radius | 4 top corners |
| line | 2dp, round join and cap, no dots |
| selected point | radius 5, 2dp stroke in card colour, 1dp outline vertical guide |
| area fill | series at 16% (light) / 24% (dark), flat |
| donut | diameter 176, ring 20, gap 3dp, butt caps, selected ring +6, others 38% |
| split / stacked bar | height 8 / 12, gap 4, full radius |
| heatmap cell | height 40, radius 8, selected 2dp onSurface inset ring |
| tooltip | inverseSurface, radius 8, padding 8 / 12, labelMedium inverseOnSurface |
| legend | 8dp dot, gap 8, bodySmall onSurfaceVariant, items 16 apart |

## 7. Progress (`year2023: false`)

| Token | Value |
|---|---|
| linear height | 4 (8 hero) |
| ring stroke | 4 (6 for rings 72 and up, 8 for the 96 score ring) |
| indicator-track gap | 4 |
| stop indicator | 4dp dot, indicator colour, at track end |
| ends | round |
| normal | indicator primary, track secondaryContainer |
| nearLimit | indicator money.warning, track money.warningContainer |
| overLimit | indicator money.expense, full bar, no track |
| state rule | On track (<50%) normal; Near limit (50-79) and High usage (80-99) nearLimit; Exceeded (100+) overLimit |
| status chip | normal secondaryContainer, near warningContainer, over expenseContainer; labelMedium, radius full, pad 2 / 8 |

## 8. Motion (from Perch `Motion`)

instant 90, fast 150, navIndicator 220, containerTransform 240, sheet 260, reflow 230, navHide 160, shimmer loop 1100. Finger-caused: easeOutBack. System-caused: easeOutCubic. Reduced motion: 90ms cross-fade. Snackbar keeps its own 220ms easeOutCubic.
