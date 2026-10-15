# Bottom nav

Board: `Kuber M3 Components.dc.html` → 2a. Shown in Alabaster and Obsidian (Signature); other palettes change colour roles only.

## Spec
- Perch nav_bar.dart pill: h56, pad 8, full radius, bg surface, 1dp outlineVariant, no shadow. Items h40 gap 2; selected pad L11 R14, secondaryContainer, glyph FILL 1 + labelLarge onSecondaryContainer, gap 8; unselected 40×40 glyph onSurfaceVariant. AnimatedContainer 220ms easeOutBack. Label hides when 14sp scales above 20.
- FAB 56 circle beside, gap 10, primaryContainer / onPrimaryContainer, add 26, press scale 0.94 / 40ms. Row bottom 22.

## States
Default; each of 4 tabs selected; pressed; hidden on scroll down (160ms, translate 72, fade); hidden in selection mode and with keyboard; long-press tab = Quick Actions sheet; long-press FAB = Add New sheet. Wide (≥ smallTablet): KuberNavRail with the same indicator.
