# Web v1 · Launch film embed

Board: `Web v1 Video Embed.dc.html` (built by `src/build_video.js`). Tokens, type, shape and motion are the ones in tokens.md and motion.md. Nothing new is themed by hand: every colour below is a `--k-*` role, so all 16 families × light/dark work with no extra CSS.

## 1. Decision

- **Home:** new section "See it in action" (`#tour`) between Why Kuber and Signature. Recommended.
- **Press kit:** "Launch film" block between Screenshots and Boilerplate.
- **Features index:** one tonal button under the header lead, linking to `/#tour`.
- **Hero:** add a text button "Watch the tour" (`play_circle`, size l, `--k-primary`) after "See all features", `href="#tour"`. It scrolls to the Home section (smooth, instant under reduced motion) and moves focus to the play button. It does not link to YouTube: leaving the page takes visitors away from the install button, and the section shows the privacy line before anything loads. "Get it on Google Play" stays the only filled action. On mobile the badge sits on line 1 and the two text buttons wrap to line 2.
- Dropped: option 1a (hero button opening a modal).

## 2. Facade (click to load)

The page ships no YouTube code. Before the click there is one `<button>` with a local poster image. No iframe, no `preconnect`, no `dns-prefetch`, no thumbnail from `i.ytimg.com`, nothing on hover or focus.

On click, insert the iframe in place, inline:

```html
<iframe
  src="https://www.youtube-nocookie.com/embed/<VIDEO_ID>?autoplay=1&rel=0&playsinline=1&enablejsapi=1&start=<s>"
  title="Kuber feature tour"
  width="1280" height="720"
  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
  style="position:absolute;inset:0;width:100%;height:100%;border:0"></iframe>
```

- `autoplay=1` only because the iframe exists as the result of a click. Never render it on load.
- Omit `start` when 0.
- **Why inline nocookie, not a new tab:** the visitor stays on the page, chapters work, and it is one click to watch. The cost is that YouTube code runs on kuber.pages.dev after the click, and YouTube can store data on the device once it plays (nocookie only delays this until playback). The visible line under the player says so, and the footer promise stays true because nothing loads until the visitor asks. The "Watch on YouTube" link next to the line is there for anyone who prefers a new tab (`target="_blank" rel="noopener"`, `https://www.youtube.com/watch?v=<VIDEO_ID>`).
- CSP: add `frame-src https://www.youtube-nocookie.com`. Nothing else.

### States

| State | Trigger | Visual |
|---|---|---|
| Poster | default | Poster image + play pill bottom left |
| Hover | pointer over the button | `--k-on-surface` 8% overlay on the poster, `--k-on-primary` 8% state layer on the pill. No scale, no movement. fast 150 |
| Focus | `:focus-visible` | `outline: 3px solid var(--k-primary); outline-offset: 3px` on the player box (radius follows). Instant |
| Loading | click, until the iframe `load` event | Button `disabled`, `aria-busy="true"`, cursor `progress`. Pill icon becomes a 20px circular indicator (`--k-on-primary`, track at 32%), label "Loading", time hidden |
| Playing | iframe `load` | Poster cross-fades out (opacity, 150, `--k-ease`); iframe fills the box. Focus moves to the iframe |
| Offline | `navigator.onLine === false` at click | Do not insert the iframe. Replace the pill label with "You are offline. Connect to the internet to watch the tour." in a `--k-inverse-surface` pill; button stays enabled to retry |

Reduced motion: no cross-fade, swap instantly. The spinner still rotates (it signals progress), at 1 turn per 1.4 s.

## 3. Player box

| Part | Desktop ≥1024 | Tablet | Mobile <600 |
|---|---|---|---|
| Ratio | 16:9 (`aspect-ratio: 16 / 9`), `background:#000000` | same | same |
| Radius | 24 | 24 | 20 |
| Poster | `<img>` 1280×720 WebP (~60 KB) with a 640 w source, `srcset="poster-640.webp 640w, poster-1280.webp 1280w"`, `sizes="(min-width:1024px) 830px, 100vw"`, `width="1280" height="720"`, `loading="lazy" decoding="async"`, `alt=""` (the button carries the label), `object-fit:cover` | same | same |
| Play pill | h 56, padding 0 22 0 18, gap 10, radius full, `--k-primary`; icon `play_arrow` filled 26; label 600 16/20; 1px × 20 divider at `--k-on-primary` 40%; "3:03" 500 16 tabular. Inset 24 from left and bottom | same | h 48, padding 0 18 0 14, icon 24, text 15, inset 12 |
| Button | `<button type="button" aria-label="Play the Kuber feature tour, 3 minutes">` covering the box | | |

Poster image: export a frame from the 16:9 cut at 1:02 (SMS import, "Import transactions from SMS.") for Home, and 1:44 (Kuber Notes, "Answers appear for you.") for the Press kit. Keep the bottom-left 320×100 (at 1280) free of key content; the pill covers it. The poster is not themed; it is the same image in all 16 families and both modes.

## 4. Home section `#tour`

Order: Hero → Trust strip → Why Kuber → **See it in action** → Signature → Themes → …

```
<section id="tour" aria-labelledby="tour-h">
  header (shead, max-width 760): eyebrow / h2#tour-h / lead
  panel
  note row
</section>
```

- Section padding: 112 top and bottom desktop, 64 mobile (sections normally only pad top; this one pads bottom too so Signature does not crowd it).
- Header: eyebrow "See it in action", h2 (headline role) "The whole app in 3 minutes", lead "A short tour of Kuber, from adding an expense to SMS import, Ask Kuber and Kuber Notes. Music only, no voiceover." Margin to panel 48 desktop, 32 mobile.
- Panel: `--k-surface-container-low`, 1px `--k-outline-variant`, radius 40 (mobile 28), padding 24 (mobile 12). Mobile panel uses the 12 px page margin, like the Themes panel.
- Desktop layout: `grid-template-columns: minmax(0,1fr) 300px; gap: 24px; align-items: start`. Player left, chapters right. At 1200 content the player is about 826 × 465.
- Tablet: chapters drop under the player as the mobile chip row.
- Note row: margin-top 16, padding 0 4 (mobile 0 8), flex, `justify-content: space-between`, wraps. Left: `info` icon 16 + caption role, `--k-on-surface-variant`: "Plays from YouTube. Nothing from YouTube loads until you press play." Right: text link "Watch on YouTube" with `north_east` (link role, `--k-primary`).

### Chapters

Nine of the film's 17 chapters (the full list goes in the YouTube description):

| Start | Label | Seconds |
|---|---|---|
| 0:06 | Add a transaction | 6 |
| 0:23 | Accounts and cards | 23 |
| 0:36 | Budgets, loans and more | 36 |
| 1:01 | Import from SMS | 61 |
| 1:20 | Ask Kuber | 80 |
| 1:30 | Kuber Cards | 90 |
| 1:39 | Kuber Notes | 99 |
| 1:58 | Calculators | 118 |
| 2:21 | Languages and themes | 141 |

- Markup: `<ul aria-label="Chapters">` of `<button type="button" aria-label="Play from 1:01, Import from SMS">`.
- Desktop row: caps label "Jump to" (eyebrow role, padding 6 12 4), rows h 44, padding 0 12, radius full, gap 12; time label role `--k-primary` tabular, width 36; name body-s `--k-on-surface`. Hover 8% state layer. Active (last chapter clicked): `--k-secondary-container`, text `--k-on-secondary-container`, name 600, trailing `graphic_eq` 18.
- Mobile chips: horizontal scroll row inside the panel (margin 12 −12 0, padding 0 12, gap 8, scrollbar hidden), chip h 36, padding 0 12, radius 8, 1px `--k-outline-variant`; time label `--k-primary`, name label `--k-on-surface`. Active chip `--k-secondary-container` fill and border.
- Behaviour: before the player loads, a chapter click loads it with `start=<s>`. After it loads, send `{"event":"command","func":"seekTo","args":[s,true]}` then `playVideo` via `iframe.contentWindow.postMessage(…, 'https://www.youtube-nocookie.com')`. If that fails, reset `src` with the new `start`. Clicking a chapter does not move focus away from the chapter.

## 5. Press kit

Between Screenshots and Boilerplate, padding-top 72 (mobile 48).

- h2 (title-l) "Launch film", body "The Kuber feature tour. Free to embed or link in your coverage."
- Desktop grid `minmax(0,7fr) minmax(0,5fr)`, gap 24: player (Notes poster) left; card right (`surface-container-low`, radius 32, padding 32): caps "About the film", a `<dl>` of Length 3:03 · Format 16:9, 1080p, 60 fps · Sound Music only, no voiceover · Chapters 17, listed on YouTube; buttons outlined "Watch on YouTube" (`north_east`) and text "Copy link" (`content_copy`, swaps to "Link copied" for 2 s, `aria-live="polite"`).
- Mobile: player above the card. Note row under both, without the YouTube link (the card has it). No chapter list here.

## 6. Features index

Under the header lead, before the filter chips: tonal button (h 48) `play_circle` + "Watch the 3 minute tour", `href="/#tour"`. No player on this page.

## 7. Performance and a11y checks

- No iframe, no third-party request, no layout shift before the click (`aspect-ratio` reserves the box; poster has width and height).
- Poster is below the fold on Home, so it is lazy and never the LCP element.
- JS: about 1 KB, added to `site.ts`, attached by `[data-yt]` on the box; works without JS as a plain link to YouTube (`<a href="https://www.youtube.com/watch?v=<ID>">` inside `<noscript>` fallback, or render the button as that link and upgrade it).
- Keyboard: Tab reaches the play button, then each chapter. Enter and Space play. There is no modal, so no Escape handling is needed; if a modal is added later, Esc closes it and returns focus to the trigger.
- Contrast: the pill is `--k-on-primary` on `--k-primary` in every family (≥ 4.5:1 by the M3 roles).

## 8. YouTube thumbnail

Final file: `thumbnail/kuber-tour-thumbnail.png`, 1280 × 720 (convert to JPG under 2 MB if needed).
Light film stage (#F9F9FF with #D8E2FF / #ADC6FF blooms). Three phones: Import from SMS (left, −9°), Home (middle, in front), Ask Kuber (right, 9°). Right side: app icon + "Kuber", "Fully offline." (#1A1B20) / "Fully yours." (#0058BE) in Inter 800 80/86, a #0058BE pill "The full tour", and "Offline money app. Made in India." in 600 22/28 #44474F. The bottom right stays clear for YouTube's duration badge.
