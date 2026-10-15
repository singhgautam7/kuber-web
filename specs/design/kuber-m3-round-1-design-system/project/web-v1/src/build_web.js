// Web v1 rebuild. In run_script: await (new Function('readFile','saveFile', await readFile('web-v1/src/build_web.js')))(readFile, saveFile)
return (async () => {
const W = await (new Function('readFile', await readFile('web-v1/src/load_web.js')))(readFile);
const M = new Function('W', await readFile('web-v1/src/gen_mockups.js'))(W);
const G = new Function('W','M', await readFile('web-v1/src/gen_web.js'))(W, M);
const doc = new Function(await readFile('web-v1/src/doc.js'))();
const {frame, turn, page} = G;
const both = (id, label, bp, fn, o={}) => ['light','dark'].map((md,i)=>frame(`${id}${'ab'[i]}`, label, bp, md, fn(bp, md), o)).join('');
const out = {};
out['web-v1/Web v1 Home.dc.html'] = doc(page('Web v1 · Home', 'Home in Kuber Signature light and dark at 1440, 834 and 390. Live HTML mockups in the hero (Home) and Themes (History) are drawn from tokens and recolor with the theme; feature images are the PNGs in web-v1/mockups. Why Kuber stages are the Home v3.3 storyboard rest frames (page 1 shows its static frame). Mobile FAB is fixed to the viewport; it is drawn at the bottom of the first screen.',
  turn('H1','Home · desktop 1440','Order: hero, trust strip, Why Kuber (5 parts), Signature features, Themes, Numbers, Banks, Made by one developer, final call to action, footer. Reviews are designed but hidden (H4). Handoff: the five Why Kuber parts must animate as the visitor scrolls, the same storyboard as the in-app tour (Home v3.3); the frames here are their rest states. See motion.md, Why Kuber. Signature cards show no Free / Pro badge (Beta only). Numbers checked against the app code.', both('H1','Home','d',(bp,md)=>G.homePage(bp,md)))
  + turn('H2','Home · tablet 834','Nav keeps every item; the wordmark drops and the FAB becomes icon only.', both('H2','Home','t',(bp,md)=>G.homePage(bp,md)))
  + turn('H3','Home · mobile 390','Pill holds logo, theme and menu. Get the app FAB fixed bottom right.', both('H3','Home','m',(bp,md)=>G.homePage(bp,md)))
  + turn('H4','Reviews · hidden','Ships switched off. Turn on only when there are at least three real reviews with permission to quote. Placeholder text here is for layout only and must never go live.', frame('H4a','Reviews (hidden)','d','light',G.reviews('d','light')) + frame('H4b','Reviews (hidden)','m','dark',G.reviews('m','dark')))));
out['web-v1/Web v1 Features.dc.html'] = doc(page('Web v1 · Features', 'Features index and the feature detail template, shown for SMS Import and Kuber Cards. Badges follow the corrected plans (see copy.md). Every image is the feature PNG for the frame mode.',
  turn('F1','Features index', 'Grouped by the 7 content categories. Filter chips: All, Free (includes Free with a limit), Pro (includes Free with a limit), Signature, Beta. Mobile uses compact rows with a cropped thumbnail.', both('F1','Features index','d',G.featuresPage) + both('F1m','Features index','m',G.featuresPage))
  + turn('F2','Feature detail · SMS Import','Template: breadcrumb, icon, title, badges, description, install, image mockup, How it works, Where to find it (from the navigation front matter, inline instead of a modal), Plan card, related features.', both('F2','SMS Import','d',(bp,md)=>G.featureDetail(bp,md,'sms-import')) + both('F2m','SMS Import','m',(bp,md)=>G.featureDetail(bp,md,'sms-import')))
  + turn('F3','Feature detail · Kuber Cards','Same template, filled for Kuber Cards.', both('F3','Kuber Cards','d',(bp,md)=>G.featureDetail(bp,md,'kuber-cards')) + both('F3m','Kuber Cards','m',(bp,md)=>G.featureDetail(bp,md,'kuber-cards')))));
out['web-v1/Web v1 Docs.dc.html'] = doc(page('Web v1 · Docs and Changelog', 'Docs index, the doc page template (Privacy Policy as the long-form example) and the Changelog. Data Deletion and FAQ already have content in the repo, so they are marked Published.',
  turn('D1','Docs index','', both('D1','Docs','d',G.docsIndex) + both('D1m','Docs','m',G.docsIndex))
  + turn('D2','Doc page · Privacy Policy','Desktop: docs sidebar 248, article 720, On this page 200, both side columns sticky. Mobile: Docs and On this page collapse into two buttons that open the same lists in a bottom sheet.', both('D2','Privacy Policy','d',G.docPage) + both('D2m','Privacy Policy','m',G.docPage))
  + turn('D3','Changelog','Route /changelog. Linked from the footer and the mobile menu.', both('D3','Changelog','d',G.changelog) + both('D3m','Changelog','m',G.changelog))));
out['web-v1/Web v1 About Press 404.dc.html'] = doc(page('Web v1 · About, Press kit, 404', 'The letter is verbatim from content/pages/about.md. Press screenshots use the same PNG mockups as the feature pages.',
  turn('A1','About','', both('A1','About','d',G.about) + both('A1m','About','m',G.about))
  + turn('P1','Press kit','', both('P1','Press kit','d',G.press) + both('P1m','Press kit','m',G.press))
  + turn('N1','404','', both('N1','404','d',G.nf) + both('N1m','404','m',G.nf))));
for (const [k,v] of Object.entries(out)) await saveFile(k, v);
return {files:Object.keys(out), sizes:Object.values(out).map(v=>v.length), G};
})();
