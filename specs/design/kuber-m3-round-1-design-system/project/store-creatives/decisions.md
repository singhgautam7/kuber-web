# Store creative decisions

## Background hue
Two grounds, alternating through the set so the strip reads as a rhythm:
- Odd shots (1, 3, 5, 7) and the feature graphic: light tint #EDF0FF (Signature T95) with Obsidian screens. Headline #001A42, subhead #003D88.
- Even shots (2, 4, 6, 8): dark tint #001A42 (Signature T10, the splash background) with Alabaster screens. Headline #FFFFFF, subhead #ADC6FF.
Both are flat and from the icon's tonal palette.

## Theme mode
Mixed by ground: Obsidian on light, Alabaster on dark, so each phone always contrasts with its background and both modes are shown.

## Personalization theme
Kuber Signature Blue on all 8 shots. It matches the icon and the background hue, so cohesion holds. Showing other themes would bring in hues that clash with the single-tint background. The 7 themes can go in the store description, or in a later dedicated shot.

## Layout
- Caption at top (headline 96px/700, subhead 40px/500, Inter), phone below, bleeding off the bottom edge.
- Shots 1 to 3: one phone at 2x. Shot 4: Analytics behind Advanced Analytics. Shot 5: History behind the Filters screen. Shots 6 to 8: three phones, main feature in front. Shot 8: Smart note (live maths) | Ask Kuber | Calculators & Tools. Kuber Cards appears on the feature graphic.
- Home: no Pro badge. Money story rings are segmented (one segment per story, unread first in primary, read in outline): Daily 3/3 unread, Weekly 4/4, Monthly 2 unread + 4 read, Insights 5 read, Yearly 3 read.
- Flat throughout: no gradients, no shadows, no rotation.

## Sample data
All screens are generated from the redesign builders (_kit), so they use the round-1 dataset as is (Gaurav, HDFC Bank, ICICI Amazon Pay, July net +₹45,200, Shopping ₹4,410 of ₹5,000, etc.). Card numbers are masked.

## Sources
- Kuber Store Creatives.dc.html: editable artboards (#fg, #s1 to #s8).
- src/gen_store.js: generator (captions, layout, screen choices). Rebuild with _kit/store_load.js.
- PNGs are 24-bit RGB with no alpha channel.
