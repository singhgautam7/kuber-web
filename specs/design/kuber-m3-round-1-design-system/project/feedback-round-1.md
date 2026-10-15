# Round 1 feedback, applied

- **Category tiles:** container = category hue at T92 light / T28 dark with chroma capped (20 / 16). Glyph keeps full chroma. Fixes the glowing green tiles (Groceries, Salary).
- **Nav glyphs:** drawn in the Perch language (20×16 art, 1.75 stroke): house, row list, three bars, tuner. Material Symbols stay for everything else.
- **Progress:** M3 Expressive wavy linear indicator (amplitude 3, wavelength 24, 4dp). Flat kept for tiny inline bars (Ask Kuber viz, snackbar timer). Rings stay flat for now.
- **Chart period:** dropdown chip + menu (Home 7D / 4W / 6M, Analytics Day / Week / Month / Year). Bar | Line is the only segmented control.
- **Selected bar:** rounded highlight column behind the group, others at 38%, bold x label.
- **Home:** header holds only Ask Kuber, privacy, notifications. Greeting + rotating subtitle open the body.
- **History:** title "Transactions", no description. Export moves into the overflow. Search and filters follow Perch: search pill with Filter inside (Filter · n when applied), quick chips Exp / Inc, applied filters as removable chips + Clear all.
- **Analytics:** title "Analytics", no description; filter row no longer overflows (date chip ellipsizes).

# Round 2 screens
Screen 8 Ask Kuber, 9 Import from SMS, 10 Quick Add, 11 Settings, 12 Data, 13 About. After-only (no Vault before column). Built by `_kit/screens_new2.js` + `_kit/gen_screens2.js`.

Open points: SMS review sheet fields are inferred (confirm against `transaction_review_sheet.dart`); Quick Add voice "Done" maps to the overlay's Okay; About uses Instrument Serif italic in place of Playfair; Ask Kuber radial glow dropped.
