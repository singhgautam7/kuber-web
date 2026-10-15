// Inner pages board. In run_script: await (new Function('readFile','saveFile', await readFile('web-v1/src/build_inner.js')))(readFile, saveFile)
return (async () => {
const W = await (new Function('readFile', await readFile('web-v1/src/load_web.js')))(readFile);
const M = new Function('W', await readFile('web-v1/src/gen_mockups.js'))(W);
const G = new Function('W','M', await readFile('web-v1/src/gen_web.js'))(W, M);
const I = new Function('W','M','G', await readFile('web-v1/src/gen_inner.js'))(W, M, G);
const doc = new Function(await readFile('web-v1/src/doc.js'))();
const {frame, turn, page} = G;
const pair = (id, label, mode, fn) => frame(id+'a', label, 'd', mode, fn('d', mode)) + frame(id+'b', label, 'm', mode, fn('m', mode));
const html = page('Web v1 · Inner pages', 'The existing inner pages restyled in the Web v1 Home design (floating nav, Get the app FAB, theme menu, footer, tokens, type, cards, buttons). Same content, sections and order as the Astro repo; text verbatim. Kuber Signature, each page in one mode, at 1440 and 390. App screenshots are the M3 recreations in web-v1/screenshots/ (board: Web v1 Screenshots).',
  turn('P1','Features index · /features/ · light','Header, filter chips (All and Signature, with counts), then the 29 feature cards in content order. No Free / Pro badges anywhere, because many features are free with limits; only Beta is shown, and Signature next to the name.', pair('P1','Features index','light',(bp)=>I.featuresPage(bp)))
  + turn('P2','Feature detail · /features/sms-import/ · dark','One template for every feature page: breadcrumb, header, Where to find in app button, screenshots, body, Try it in Kuber + privacy link, related features. The Where to find dialog is shown open in P2c.', pair('P2','SMS Import','dark',(bp,md)=>I.featureDetail(bp,md,'sms-import')) + frame('P2c','SMS Import · Where to find dialog open','d','dark',I.featureDetail('d','dark','sms-import',{modal:1})))
  + turn('P3','Docs hub · /docs/ · light','Header with status line, four groups (A to D) of doc cards, Missing something box.', pair('P3','Docs hub','light',(bp)=>I.docsHub(bp)))
  + turn('P4','Doc page · /docs/privacy-policy/ · dark','On this page sidebar (h2s) and the article. The sidebar is hidden below 820, as today. Policy text unchanged.', pair('P4','Privacy Policy','dark',(bp)=>I.docPage(bp)))
  + turn('P5','Press kit · /press/ · light','App icon and wordmark cards, screenshot bundle (Home, Spaces, Add transaction, Settings), boilerplate with Copy text, fact sheet, Play Store and contact links.', pair('P5','Press kit','light',(bp,md)=>I.press(bp,md)))
  + turn('P6','About · /about/ · dark','Letter (verbatim) with signature, Why Kuber, What is Kuber, the meaning of Kuber, source and contact.', pair('P6','About','dark',(bp)=>I.about(bp))));
await saveFile('web-v1/Web v1 Inner Pages.dc.html', doc(html));
return {len: html.length, counts: I.counts};
})();
