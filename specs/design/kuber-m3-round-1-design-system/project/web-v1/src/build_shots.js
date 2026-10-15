// Screenshot board. In run_script: await (new Function('readFile','saveFile', await readFile('web-v1/src/build_shots.js')))(readFile, saveFile)
return (async () => {
const W = await (new Function('readFile', await readFile('web-v1/src/load_web.js')))(readFile);
const M = new Function('W', await readFile('web-v1/src/gen_mockups.js'))(W);
const SH = await (new Function('W','M','readFile', await readFile('web-v1/src/gen_shots.js')))(W, M, readFile);
const doc = new Function(await readFile('web-v1/src/doc.js'))();
const MONO = "'JetBrains Mono',ui-monospace,monospace";
const head = `<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@500;600&family=Noto+Sans+Gurmukhi:wght@500;600&family=Noto+Sans+Bengali:wght@500;600&family=Noto+Sans+Telugu:wght@500;600&family=Noto+Sans+Tamil:wght@500;600&family=Noto+Sans+Malayalam:wght@500;600&family=Noto+Sans+Kannada:wght@500;600&display=swap" rel="stylesheet">`;
const body = `<div style="padding:48px 56px 80px"><header style="margin:0 0 40px;max-width:960px"><div style="font:600 12px/16px ${MONO};letter-spacing:.8px;color:#5B5E66;text-transform:uppercase">Kuber · Web v1 · Inner pages</div><h1 style="margin:8px 0 8px;font:700 36px/44px Inter;letter-spacing:-.5px;color:#1A1B20">Web v1 · Screenshots</h1><p style="margin:0;font:400 15px/24px Inter;color:#44474F;max-width:900px;text-wrap:pretty">Every app screenshot on the site, redrawn as the same screen in the M3 app UI from this project. Plain screens, Kuber Signature light and dark, same pixel size as the original (1080 wide; drawn at 360 dp and exported at 3x). Exported to web-v1/screenshots/&lt;folder&gt;/&lt;name&gt;-light.png and -dark.png. Map: screenshot-map.md.</p></header>${SH.board()}</div>`;
let html = doc(body).replace('<style>body', head + '<style>body').split('../support.js').join('../support.js');
await saveFile('web-v1/Web v1 Screenshots.dc.html', html);
return {miss: SH.miss, n: SH.LIST.length, ids: SH.LIST.map(s=>[SH.sid(s,'light'), s.slug, s.base])};
})();
