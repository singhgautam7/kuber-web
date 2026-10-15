// Home v3 rebuild. In run_script: await (new Function('readFile','saveFile', await readFile('_kit/build_home_v3.js')))(readFile, saveFile)
// Reads _kit/home_v2.js for shared helpers (never writes home-v2/).
return (async () => {
const K = await (new Function('readFile', await readFile('_kit/load.js')))(readFile);
const S = new Function('K', await readFile('_kit/screens_new.js'))(K);
const v2 = (await readFile('_kit/home_v2.js')).replace(/return \{ html,[\s\S]*$/, 'return {gsCard,sgCard,E,s,editBlock,frame,sub,OB,AL,FAM,CR,fx,HELMET};');
const V2 = new Function('K','S', v2)(K,S);
const r = new Function('K','S','V2', await readFile('_kit/home_v3.js'))(K,S,V2);
await saveFile('home-v3/Home v3.dc.html', r.html);
return r;
})();
