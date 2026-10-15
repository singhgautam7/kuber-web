// Full rebuild. In run_script: await (new Function('readFile','saveFile', await readFile('_kit/build.js')))(readFile, saveFile)
return (async () => {
const ev = async (p, names, args) => new Function(...names, await readFile(p))(...args);
const K = await (new Function('readFile', await readFile('_kit/load.js')))(readFile);
const S = await ev('_kit/screens_new.js',['K'],[K]);
const O = await ev('_kit/screens_old.js',['K'],[K]);
const S2 = await ev('_kit/screens_new2.js',['K','S'],[K,S]);
const S3 = await ev('_kit/screens_new3.js',['K','S'],[K,S]);
const S4 = await ev('_kit/screens_new4.js',['K','S','S3'],[K,S,S3]);
const S5 = await ev('_kit/screens_new5.js',['K','S','S3','S4'],[K,S,S3,S4]);
K.proPill = S.proPill;
const f5 = await ev('_kit/gen_screens5.js',['K','S','S3','S4','S5'],[K,S,S3,S4,S5]);
const out = {...await ev('_kit/gen_screens.js',['K','S','O'],[K,S,O]), ...await ev('_kit/gen_screens2.js',['K','S2'],[K,S2]), ...await ev('_kit/gen_screens3.js',['K','S3'],[K,S3]), ...await ev('_kit/gen_screens4.js',['K','S','S4'],[K,S,S4])};
const inject = (file, html) => { const s = out[file]; const j = s.lastIndexOf('</section>'); out[file] = s.slice(0,j) + '<div style="height:32px"></div>' + html + s.slice(j); };
for (const [k,v] of Object.entries(f5.__extra)) inject(k, v);
inject('Screen 6 - Analytics.dc.html', f5.__aa);
for (const [k,v] of Object.entries(f5)) if (!k.startsWith('__')) out[k] = v;
out['Kuber M3 Components.dc.html'] = await ev('_kit/gen_components.js',['K'],[K]);
for (const [k,v] of Object.entries(out)) await saveFile(k, v);
return Object.keys(out);
})();
