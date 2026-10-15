# Buttons, FAB, chips, segmented, fields, switches, checkboxes, dialogs

Board: `Kuber M3 Components.dc.html` → 2i. Shown in Alabaster and Obsidian (Signature); other palettes change colour roles only.

## Spec
- Buttons stadium, 40 (pad 16, labelLarge) or 56 (pad 24, titleMedium), icon 20 gap 8: filled, tonal, outlined (1dp outlineVariant), text, danger, danger tonal, disabled (onSurface 12% / 38%). FAB 56 circle primaryContainer, small 40. Chips h32 r8, outlined, selected secondaryContainer + check 18. SegmentedButton h40 stadium, selected secondaryContainer + check (no check for 4+). TextField filled surfaceContainerHigh r16 min 56, focus 2dp primary, error 2dp error, helper/counter bodySmall. Switch 52×32. Checkbox 18 r2. Radio 20. Dialog surfaceContainerHigh r28 pad 24, headlineSmall title, bodyMedium, text actions.

## States
All enabled, pressed, disabled, focused, error, selected states as in board 2i.
