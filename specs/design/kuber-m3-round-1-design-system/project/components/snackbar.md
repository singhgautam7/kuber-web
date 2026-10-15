# Snackbar

Board: `Kuber M3 Components.dc.html` → 2d. Shown in Alabaster and Obsidian (Signature); other palettes change colour roles only.

## Spec
- Top, safe area + 8, side margin 20, radius 16, min height 56, pad L16 R4. Success: inverseSurface / inverseOnSurface, check_circle 20 inversePrimary. Error: errorContainer / onErrorContainer, error icon. Message bodyMedium. Actions labelLarge TextButtons (secondary at 80%). Close 48 / 20. Timer: linear progress 4, gap 4, inset 16, bottom 10, indicator accent, track text 16%.

## States
Behaviour unchanged: 7s default, 220ms in, one at a time, back does not dismiss, swipe left/right/up (80dp or 600dp/s), drag pauses timer, release resumes, fade capped 50%. Variants: success, with action, with secondary + primary action, error, dragging.
