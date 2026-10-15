# Migration map (Vault → M3)

Mechanical swaps. Left = what exists in code today, right = the new token. "role" = `Theme.of(context).colorScheme.<role>`, "money" = `context.kuberMoney.<role>`.

## KuberSpacing → KuberSpace
| Old | Value | New |
|---|---|---|
| KuberSpacing.xs | 4 | KuberSpace.xs |
| KuberSpacing.sm | 8 | KuberSpace.sm |
| KuberSpacing.md | 12 | KuberSpace.md |
| KuberSpacing.lg | 16 | KuberSpace.lg (but screen padding → KuberSpace.screenMargin 20) |
| KuberSpacing.xl | 24 | KuberSpace.xl (but between home widgets → sectionGap 28) |
| KuberSpacing.xxl | 32 | KuberSpace.xxl |
| KuberSpacing.md + 2 (14) | 14 | cardPaddingHero 20 (balance card) |
| KuberSpacing.sm + 2 (10) | 10 | md 12 |
| literals 2, 3, 5, 6, 7, 9, 10, 11, 13, 14, 18 | | nearest of xs 4 / sm 8 / md 12 / lg 16; 18 → lg 16; 11 (sheet button gap) → md 12 |

## KuberRadius → KuberShape
| Old | Value | New |
|---|---|---|
| KuberRadius.sm | 4 | extraSmall (bars) or small 8 (tags, badges) |
| KuberRadius.md | 8 | cards → largeIncreased 20; buttons → full; inputs → large 16; chips → small 8; dialogs → extraLarge 28; category tiles → medium 12 |
| KuberRadius.lg | 12 | sheets → extraLarge 28; home widget cards → largeIncreased 20 |
| KuberRadius.xl | 24 | modern nav pill / add button → full |
| KuberRadius.full | 999 | full |
| BorderRadius.circular(12) in SquircleIcon / SettingsCardSelector | 12 | medium 12 |
| circular(10) info sheet icon, note icon | 10 | medium 12 |
| circular(14) calculator confirm | 14 | full (sheet CTA button) |
| circular(5), (3), (2), (100) | | small 8 / full |

## KuberColors / KuberTokens → roles
| Old | New |
|---|---|
| background | surface (Obsidian forced #000000) |
| surfaceCard (surfaceContainer) | surfaceContainer for cards; surfaceContainerLow for sheets |
| surfaceMuted (surfaceContainerHigh) | surfaceContainerHigh |
| border (outline, and outlineVariant in dark) | outlineVariant |
| borderMuted | outline |
| textPrimary | onSurface |
| textSecondary | onSurfaceVariant |
| primary | primary |
| primarySubtle (primaryContainer) | secondaryContainer (selection, chips, nav) |
| primaryRing | primary (2dp focus ring) |
| primaryText (Purrhub dark #FDE68A) | primary (fidelity already gives #FFECB9) |
| onPrimary | onPrimary |
| income (colorScheme.tertiary) | money.income |
| incomeSubtle (tertiaryContainer) | money.incomeContainer |
| expense (colorScheme.error) | money.expense |
| expenseSubtle (errorContainer) | money.expenseContainer |
| warning / warningSubtle (KuberSemanticColors) | money.warning / money.warningContainer |
| eventEmi #A855F7 / #9333EA | categorical[6] (purple) |
| eventLedger #FACC15 / #CA8A04 | categorical[1] (amber) |
| cs.secondary (= primary today) | primary where it meant accent; secondary only for M3 defaults |

## Hardcoded styles found
| Where | Literal | New |
|---|---|---|
| transaction_row.dart attachment badge | #D4A017 | surfaceContainerHigh pill + onSurfaceVariant |
| transaction_row / detail sheet transfer icon | #78909C | onSurfaceVariant on surfaceContainerHigh circle |
| budget_snapshot_card.dart | Colors.green.shade600 / orange.shade600 | progress normal / nearLimit chips |
| onboarding_page_1 orbit dot | #3B82F6 | primary |
| onboarding coin golds | #FFD35A #E3A51A #8D6208 #B57F10 #F5BC2C #FFF2A3 | keep (illustration palette, documented exception) |
| FAB, nav rail, quick filter selected | Colors.white | onPrimary / onPrimaryContainer |
| heatmap / size / tag skeletons | Colors.white10 | surfaceContainerHigh |
| timed_snackbar shadow | black 30%, blur 8 | removed |
| KuberPageHeader action shadow | primary 20%, blur 12 | removed (header icon button) |
| calculator confirm shadow | primary 18%, blur 18 | removed |
| Divider thickness 0.5 | | 1dp outlineVariant |
| splashFactory NoSplash | | InkSparkle (Perch) |

## Type literals → roles
| Old | New |
|---|---|
| 32 / 800 page headers, greeting | titleLarge 22 / 600 in header |
| 28 / 800 onboarding titles | headlineMedium |
| 32 / 800 onboarding page 1 | headlineLarge |
| 24 / 800 sheet title, balance net | titleLarge (sheet) / headlineMedium (net) |
| 48 amount input, 56 calculator | displaySmall 36 |
| 32 / 800 sheet amount hero | headlineMedium 28 |
| 18 / 800 card titles, account amount | titleMedium 16 / titleLarge 22 (amount) |
| 16 / 700 app bar title | titleLarge |
| 15, 14.5, 14, 13.5 | bodyLarge 16 / bodyMedium 14 / titleSmall 14 |
| 13, 12.5, 12 | bodyMedium 14 or bodySmall 12 |
| 11 / 700 ls 1.2 caps titles | labelMedium caps |
| 11.5, 11, 10, 9.5, 9, 8 | labelSmall 11 (8 to 9.5 are removed) |
