# Header / app bar

Board: `Kuber M3 Components.dc.html` → 2b. Shown in Alabaster and Obsidian (Signature); other palettes change colour roles only.

## Spec
- Perch app_header.dart: pad L(back|home?16:20) T14 R(actions?16:20) B12, titleLarge, ellipsis. AppIconButton 48 target / 40 circle / 20 glyph / surfaceContainerHigh + onSurface; active = secondaryContainer.

## States
Slots: back, home, info (help → KuberInfoBottomSheet), overflow (more_vert; "Add to home screen" when pinShortcut), custom actions (max 4 on the right), new subtitle (bodyMedium onSurfaceVariant, 1 line). Variants: tab root, Home (greeting, Ask Kuber, privacy on/off, notifications with error badge 16), pushed, pushed with title, full-screen form (close).
