// Loads kit + all screen builders. new Function('readFile', src)(readFile) -> {K,S,S2,S3,S4,S5}
return (async () => {
const ev = async (p, names, args) => new Function(...names, await readFile(p))(...args);
const K = await (new Function('readFile', await readFile('_kit/load.js')))(readFile);
const S = await ev('_kit/screens_new.js',['K'],[K]);
const S2 = await ev('_kit/screens_new2.js',['K','S'],[K,S]);
const S3 = await ev('_kit/screens_new3.js',['K','S'],[K,S]);
const S4 = await ev('_kit/screens_new4.js',['K','S','S3'],[K,S,S3]);
K.proPill = S.proPill;
const S5 = await ev('_kit/screens_new5.js',['K','S','S3','S4'],[K,S,S3,S4]);
return {K,S,S2,S3,S4,S5};
})();
