# Web v1 · Open decisions

Each item has a proposed default. The designs use the default.

1. **Bank logos or bank names.** The current Home shows 8 real bank logos (`public/assets/banks/*.svg`). Using bank trademarks implies endorsement and needs permission. **Default: names as text chips** (Home, Banks) with "Bank names are shown for reference only. Kuber is not affiliated with these banks." Logo version: same row with the existing SVGs at 22 high in onSurfaceVariant monochrome, only if the developer is comfortable with the trademark use. Delete the SVGs if the text version ships.

2. **Two sample datasets.** Image and live mockups use the round-1 app dataset (July, net +₹45,200, Your Bank, Rewards Card). The Why Kuber stages use the Home v3.3 tour dataset (October, Your Bank ••1234, ₹42,350). Both are generic and internally consistent. **Default: keep both** so the site tour matches the in-app tour frame for frame. Alternative: move the stages to the July dataset (stage copy and amounts change in both app and site).

3. **Image mockups in other themes.** Only Signature light and dark are exported (60 PNGs). When a visitor picks Fern, live mockups recolor but feature images stay blue. **Default: accept it**, and say so nowhere (it reads as "screenshots"). Alternative: render all 16 × 2 at build time from the app builders (960 images, about 55 MB of AVIF). Not worth it for v1.

4. **Multi-lingual mockup.** No language picker screen exists in the app designs. **Default: Settings (Language row)** as a placeholder. Design the language sheet in the app work and re-export `multi-lingual-*.png`.

5. **"Get the app" FAB icon.** Google's brand rules allow the Play logo only inside the official badge. **Default: Material Symbols `install_mobile`** in the FAB; the official badge appears in the hero, feature pages, footer and final CTA.

6. **Calculator count.** Brief and current Home say 13; `calculators.md` says "Over 25". **Default: 13 in Numbers** and no count in the feature description. Developer to confirm the shipped number, then use it in both places.

7. **Language count.** Brief, Home and press boilerplate say 5; `multi-lingual.md` says "9 regional Indian languages and English" (10). **Default: 5 in Numbers and press**, no count in the feature description. Developer to confirm.

8. **Content contradictions found in the repo (not changed in the designs).**
   - `pro-plans.md` mentions "Automated Google Drive Backups" and "Parse all your bank alerts automatically every day". Both conflict with the privacy promise and with `automatic-backups.md` (on-device folder) and the Privacy Policy (SMS read only when you open the screen). **Default: rewrite to "Automatic backups to a folder on your phone" and "Unlimited imports"**; confirm first.
   - `pro-plans.md` theme names (Obsidian, Emerald, Ruby, Sapphire, Amber, Violet, Rose) do not match the 16 families. **Default: use the family names** (copy.md).
   - The 2026-08 changelog lists Multi-currency as Pro; `multi-currency.md` says always free. **Default: Free** (badge as designed).
   - Docs index lists Data Deletion and FAQ as coming soon, but both have content. **Default: Published.**

9. **`content/pages/developer.md`** has no route. **Default: leave it**; the About page covers the developer.

10. **Changelog in the nav.** Not one of the five nav items. **Default: footer (Product) and the mobile menu only.**

11. **Reviews section.** Designed (Home H4), hidden. **Default: switch on only with 3 or more real reviews and permission to quote**; no star ratings unless copied from the source.

12. **Tablet nav.** At 834 the full pill plus extended FAB does not fit. **Default: drop the wordmark and use the icon-only FAB.** Below 600 the mobile pill takes over.

13. **Theme picks on the website vs the app.** The site lets anyone try all 16 themes; in the app 15 are Pro. **Default: allow it, with the note in the theme menu** ("In the app, Kuber Signature is free and the other fifteen come with Pro.").

14. **Mobile FAB.** Extended at the top of the page, collapses to icon after the hero. **Default as designed.** Alternative: always icon-only on mobile for less overlap with content.

15. **Fonts.** Inter variable, self-hosted, Latin + Latin Extended + ₹. Regional language pages do not exist on the site, so no Indic subsets. **Default: Inter only**, as briefed. If the site is ever localised, add Noto Sans subsets, self-hosted.

16. **Mockup text fitting.** A few long app strings in the PNGs wrap or truncate at 360 dp (for example "Import from S…" in the SMS header, the card holder name on Kuber Cards). They match the app at that width. **Default: keep**; fix in the app if the app changes.


## Updated 15 Oct 2026

17. **Numbers on Home, checked against the app code.** Banks 15 (+ UPI apps) from `sender_ids.dart`, replacing 20+. Home widgets 12 from `widget_catalog.dart`. Calculators 18 from `tool_catalog.dart`, replacing 13 (feature page copy still says "over 25"). Themes 16. Languages 9 (English + 8 Indian languages, `l10n/*.arb`), replacing 5; the press boilerplate and Themes page copy still say 5 languages and 7 themes and are left verbatim until the copy is updated. New stat: 6,500+ transactions tested.
18. **Free / Pro badges.** Removed site-wide because many features are free with limits. Only Beta and Signature are shown. The plan detail lives on the Kuber Pro page.
19. **Pinned Suggestions widget.** Shown in Edit Home Widgets per the developer; not yet in the attached widget catalog. Confirm the name and caption.
