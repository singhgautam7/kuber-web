// Feature pages board. In run_script: await (new Function('readFile','saveFile', await readFile('web-v1/src/build_feat.js')))(readFile, saveFile)
return (async () => {
const W = await (new Function('readFile', await readFile('web-v1/src/load_web.js')))(readFile);
const M = new Function('W', await readFile('web-v1/src/gen_mockups.js'))(W);
const G = new Function('W','M', await readFile('web-v1/src/gen_web.js'))(W, M);
const I = new Function('W','M','G', await readFile('web-v1/src/gen_inner.js'))(W, M, G);
const FP = await (new Function('W','M','G','I','readFile', await readFile('web-v1/src/gen_feat.js')))(W, M, G, I, readFile);
const doc = new Function(await readFile('web-v1/src/doc.js'))();
const {frame, turn, page} = G; const MONO = "'JetBrains Mono',ui-monospace,monospace";
const GROUPS = FP.GROUPS;
const cap = (x) => `<span style="font:500 12px/16px ${MONO};color:#5B5E66">${x}</span>`;
const shotCell = (s) => `<div style="display:flex;flex-direction:column;gap:8px;width:360px"><div style="border-radius:12px;overflow:hidden;outline:1px solid #DCDCE2">${s.fn ? FP.screen(s) : `<img src="screenshots/${s.slug}/${s.base}-light.png" alt="" width="360" height="${Math.round(s.h)}" style="display:block;width:360px;height:${Math.round(s.h)}px">`}</div><span style="font:600 13px/18px Inter;color:#1A1B20">${s.slug}/${s.base}-light.png</span>${cap(`${s.from} · 1080 × ${Math.round(s.h*3)>2300?2344:2193} · ${s.kind}`)}</div>`;
let body = '';
for (const [gid,gname,slugs] of GROUPS) {
  body += turn(gid+'-P', `${gname} · Feature pages (${slugs.length}) · 1440 light`, 'The SMS Import template unchanged; only content changes. Text from content/features/*.md, verbatim. Screenshots are the light PNGs in web-v1/screenshots/.', slugs.map((s,i)=>frame(`${gid}.${i+1}`, I.RB[s].title+' · /features/'+s+'/', 'd', 'light', I.featureDetail('d','light',s))).join(''))
   + turn(gid+'-S', `${gname} · Screenshots (light)`, 'Plain M3 app screens at the original size (drawn at 360 dp, exported at 3x). "new" = redrawn or created for this round; "reused" = the file from the previous round.', `<div style="display:flex;flex-wrap:wrap;gap:40px">${FP.SHOT.filter(s=>slugs.includes(s.slug)).map(shotCell).join('')}</div>`);
}
const html = page('Web v1 · Feature pages', 'The remaining 28 feature pages built on the SMS Import template (Web v1 Inner Pages, P2), desktop 1440, light. Delivered in 4 groups of 7. Map: screenshot-map.md.', body);
await saveFile('web-v1/Web v1 Feature Pages.dc.html', doc(html));
return {miss: FP.MISS, len: html.length};
})();
