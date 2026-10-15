# Kuber app icon

Glyph: ₹ built from round-capped strokes of one width, two tones of Kuber Signature blue. Final: **folded leg** (formerly variant A).

## Colours (HCT tones of the Signature seed #3B82F6, same generator as tokens/palettes.json)
- Background: #D8E2FF (T90)
- Dark stroke: #003D88 (T27)
- Mid stroke: #2573E6 (T50)
- Splash dark background: #001A42 (T10). Dark-mode strokes: #ADC6FF (T80) / #4D8EFF (T60)
- Monochrome: single tone (launcher tints it). Notification: #FFFFFF on transparent.

## Construction (108 × 108 canvas, dp)
- Stroke width 8.5 = **7.9% of the canvas** (glyph is ~46% of the canvas tall, matching the PostPurush / Unfurl padding). Round caps and joins everywhere.
- Top bar: M40.4 32.75H67.6. Second bar: M40.4 45.5H67.6. Bowl: M50.6 32.75A12.75 12.75 0 0 1 50.6 58.25H42.1 (starts on the top bar, returns left). Leg: M42.1 58.25L61.65 74.4.
- Split: dark = top bar + bowl + second bar; mid = leg, drawn last so its round cap sits on the end of the bowl. That single overlap is the fold.
- Bounds incl. caps: x 36.1–71.8, y 28.5–78.7, centred on 54,53.6. Farthest cap point is 29.5dp from the centre, inside the 66dp safe zone (r 33).
- Monochrome / notification: the fold is shown as a 2.5dp gap cut out of the dark strokes around the leg start (SVG mask; XML clip-path M41.19,48.75 L32.60,59.16 L62.56,83.90 L71.15,73.49Z).
- Splash: glyph ×2.0 on a 288dp canvas, centred, inside the 192dp circle. Notification: glyph ×0.4 on 24dp (stroke 3.4dp).
- No accent detail: a coin or arrow tab would blur into the bars at 48px.

## Files
- icon/src: SVG for every layer (foreground, background, monochrome, dark and mid stroke layers, splash light/dark, notification, Play Store).
- icon/android: drawable/ic_launcher_foreground.xml, ic_launcher_background.xml, ic_launcher_monochrome.xml, mipmap-anydpi-v26/ic_launcher.xml, drawable(-night)/splash_icon.xml, values(-night)/splash.xml, drawable/ic_stat_kuber.xml (+ 96px PNG preview).
- icon/play_store_512.png: 512 × 512, full bleed (Play applies the mask).
- Legacy mipmap PNGs (mdpi–xxxhdpi) are not included; generate them from the adaptive XML in Android Studio's Image Asset tool.
