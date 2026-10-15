# Contextual header (multi-select)

Board: `Kuber M3 Components.dc.html` → 2c. Shown in Alabaster and Obsidian (Signature); other palettes change colour roles only.

## Spec
- Header geometry, bg surfaceContainer. Leading close. Title "{n} selected". Subtitle EXP / INC / NET of selection (labelMedium amounts in money colours). Action: Delete (danger tonal icon button).

## States
Enter: long-press. Exit: close, back, tab switch, after delete. Delete → AlertDialog "Delete {n} transactions?" / "This action cannot be undone." → snackbar "{n} transactions deleted".
