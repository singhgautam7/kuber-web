// Icon build: writes icon/ sources + Android XML + PNGs + preview DC. In run_script:
// await (new Function('readFile','saveFile','readImage','createCanvas', await readFile('_kit/icon_build.js')))(readFile,saveFile,readImage,createCanvas)
return (async () => {
const K = await (new Function('readFile', await readFile('_kit/load.js')))(readFile);
const {C,V,W,poly} = JSON.parse(await readFile('_kit/icon_data.json'));
const SPL = 2.0, NOT = 0.4;
let mk = 0;
const st = (d,c,w=W) => `<path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"></path>`;
const glyph = (v, dark=C.dark, mid=C.mid) => V[v].dark.map(d=>st(d,dark)).join('') + V[v].mid.map(d=>st(d,mid)).join('');
const mono = (v, c) => { const id='mk'+(mk++); return `<defs><mask id="${id}" maskUnits="userSpaceOnUse" x="0" y="0" width="108" height="108"><rect width="108" height="108" fill="#fff"></rect>${V[v].mid.map(d=>st(d,'#000',W+5)).join('')}</mask></defs><g mask="url(#${id})">${V[v].dark.map(d=>st(d,c)).join('')}</g>${V[v].mid.map(d=>st(d,c)).join('')}`; };
const svg = (vb, inner, w, h) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" width="${w}" height="${h}">${inner}</svg>`;
const sc = (k, c, inner) => `<g transform="translate(${c} ${c}) scale(${k}) translate(-54 -54)">${inner}</g>`;
const F = {}, v = 'A';
F['icon/src/ic_launcher_foreground.svg'] = svg('0 0 108 108', glyph(v), 108,108);
F['icon/src/ic_launcher_background.svg'] = svg('0 0 108 108', `<rect width="108" height="108" fill="${C.bg}"></rect>`, 108,108);
F['icon/src/ic_launcher_monochrome.svg'] = svg('0 0 108 108', mono(v,'#000000'), 108,108);
F['icon/src/layer_dark_stroke.svg'] = svg('0 0 108 108', V[v].dark.map(d=>st(d,C.dark)).join(''),108,108);
F['icon/src/layer_mid_stroke.svg'] = svg('0 0 108 108', V[v].mid.map(d=>st(d,C.mid)).join(''),108,108);
F['icon/src/splash_icon_light.svg'] = svg('0 0 288 288', sc(SPL,144,glyph(v)), 288,288);
F['icon/src/splash_icon_dark.svg'] = svg('0 0 288 288', sc(SPL,144,glyph(v,C.dkDark,C.dkMid)), 288,288);
F['icon/src/ic_stat_kuber.svg'] = svg('0 0 24 24', sc(NOT,12,mono(v,'#FFFFFF')), 24,24);
F['icon/src/play_store_512.svg'] = svg('0 0 108 108', `<rect width="108" height="108" fill="${C.bg}"></rect>${glyph(v)}`, 512,512);
for (const k of []) F[`icon/src/variants/variant_${k}.svg`] = svg('0 0 108 108', `<rect width="108" height="108" fill="${C.bg}"></rect>${glyph(k)}`, 108,108);
const vp = (d,c) => `    <path android:pathData="${d}" android:strokeColor="${c}" android:strokeWidth="${W}" android:strokeLineCap="round" android:strokeLineJoin="round" android:fillColor="#00000000"/>\n`;
const vd = (w, inner, vb=w) => `<?xml version="1.0" encoding="utf-8"?>\n<vector xmlns:android="http://schemas.android.com/apk/res/android" android:width="${w}dp" android:height="${w}dp" android:viewportWidth="${vb}" android:viewportHeight="${vb}">\n${inner}</vector>\n`;
const monoX = (c) => `  <group>\n    <clip-path android:pathData="M0,0H108V108H0Z ${poly}"/>\n${V[v].dark.map(d=>vp(d,c)).join('')}  </group>\n${V[v].mid.map(d=>vp(d,c)).join('')}`;
const g = (k,c) => `  <group android:translateX="${(c-54*k).toFixed(2)}" android:translateY="${(c-54*k).toFixed(2)}" android:scaleX="${k}" android:scaleY="${k}">\n`;
F['icon/android/drawable/ic_launcher_foreground.xml'] = vd(108, V[v].dark.map(d=>vp(d,C.dark)).join('')+V[v].mid.map(d=>vp(d,C.mid)).join(''));
F['icon/android/drawable/ic_launcher_background.xml'] = vd(108, `  <path android:pathData="M0,0h108v108h-108z" android:fillColor="${C.bg}"/>\n`);
F['icon/android/drawable/ic_launcher_monochrome.xml'] = vd(108, `  <!-- Themed icon (Android 13+). One tone, tinted by the launcher. A 2.5dp gap where the leg folds over the bowl keeps the overlap readable. -->\n` + monoX('#FF000000'));
F['icon/android/drawable/splash_icon.xml'] = vd(288, g(SPL,144)+V[v].dark.map(d=>vp(d,C.dark)).join('')+V[v].mid.map(d=>vp(d,C.mid)).join('')+'  </group>\n');
F['icon/android/drawable-night/splash_icon.xml'] = vd(288, g(SPL,144)+V[v].dark.map(d=>vp(d,C.dkDark)).join('')+V[v].mid.map(d=>vp(d,C.dkMid)).join('')+'  </group>\n');
F['icon/android/drawable/ic_stat_kuber.xml'] = vd(24, g(NOT,12)+monoX('#FFFFFFFF').replace(/^/gm,'  ')+'  </group>\n', 24);
for (const [k,val] of Object.entries(F)) await saveFile(k,val);
const draw = async (src, size, out) => { const img = await readImage(src); const cv = createCanvas(size,size); cv.getContext('2d').drawImage(img,0,0,size,size); await saveFile(out, cv); };
await draw('icon/src/play_store_512.svg', 512, 'icon/play_store_512.png');
await draw('icon/src/ic_stat_kuber.svg', 96, 'icon/android/ic_stat_kuber_96.png');

// ---------- preview ----------
const {board,wrap,tag} = K;
const ico = (s, inner, vb='18 18 72 72', bg=C.bg, r='50%') => `<div style="width:${s}px;height:${s}px;border-radius:${r};overflow:hidden;flex:none;background:${bg}"><svg viewBox="${vb}" width="${s}" height="${s}" style="display:block">${inner}</svg></div>`;
const lab = (t, s='') => `<div style="font:600 13px/18px Inter;color:#1A1B20;text-align:center">${t}</div>${s?`<div style="font:400 12px/17px Inter;color:#44474F;text-align:center;max-width:220px;text-wrap:pretty">${s}</div>`:''}`;
const cell = (inner, l, s) => `<div style="display:flex;flex-direction:column;align-items:center;gap:10px;flex:none">${inner}${lab(l,s)}</div>`;
const rowH = (items, gap=32) => `<div style="display:flex;gap:${gap}px;flex-wrap:wrap;align-items:flex-start">${items.join('')}</div>`;
const sub = (title, inner, note) => `<div style="margin:0 0 40px"><div style="font:600 15px/22px Inter;color:#1A1B20;margin:0 0 4px">${title}</div>${note?`<div style="font:400 13px/20px Inter;color:#44474F;margin:0 0 16px;max-width:900px;text-wrap:pretty">${note}</div>`:'<div style="height:12px"></div>'}${inner}</div>`;
const notes = {A:'Dark: top bar + bowl, second bar. Mid: the leg, folded over the end of the bowl, like the bottom of Unfurl\u2019s U.',B:'Dark: both bars. Mid: bowl and leg as one ribbon that starts on top of the top bar, like PostPurush\u2019s bowl over the stem.',C:'Dark: top bar, bowl and leg in one stroke. Mid: the second bar laid across the bowl.'};
const variants = ['A'].map(k=>`<div style="display:flex;flex-direction:column;gap:16px;align-items:center;padding:24px;border-radius:24px;background:#FFFFFF;border:${k==='A'?'2px solid '+C.mid:'1px solid #DCDCE2'};width:280px;box-sizing:border-box">${tag('Final','new')}<div style="display:flex;gap:20px;align-items:flex-end">${ico(160,glyph(k),'0 0 108 108',C.bg,'36px')}<div style="display:flex;flex-direction:column;gap:12px;align-items:center">${ico(48,glyph(k))}${ico(32,glyph(k))}</div></div>${lab('Folded leg', notes[k])}</div>`);
const ufStyle = (s) => `background:url(uploads/pasted-1791281802320-0.png) -${(56*s/468).toFixed(1)}px -${(36*s/468).toFixed(1)}px/${(582*s/468).toFixed(1)}px auto no-repeat`;
const home = (bgc, r, fg) => `<div style="padding:24px 28px;border-radius:28px;background:${bgc};display:flex;gap:28px">${[['PostPurush',`<div style="width:64px;height:64px;border-radius:${r};overflow:hidden;background:url(uploads/play_store_512.png) center/${Math.round(64*108/72)}px no-repeat"></div>`],['Unfurl',`<div style="width:64px;height:64px;border-radius:${r};overflow:hidden;${ufStyle(64*1.05)}"></div>`],['Kuber',ico(64,glyph('A'),'18 18 72 72',C.bg,r)]].map(([n,i])=>`<div style="display:flex;flex-direction:column;align-items:center;gap:8px">${i}<span style="font:500 12px/16px Inter;color:${fg}">${n}</span></div>`).join('')}</div>`;
const safe = `<div style="position:relative;width:216px;height:216px;border-radius:12px;overflow:hidden;background:${C.bg};background-image:linear-gradient(#0000001A 1px,transparent 1px),linear-gradient(90deg,#0000001A 1px,transparent 1px);background-size:12px 12px"><svg viewBox="0 0 108 108" width="216" height="216" style="position:absolute;inset:0">${glyph('A')}<circle cx="54" cy="54" r="33" fill="none" stroke="#BA1A1A" stroke-width=".6" stroke-dasharray="2 1.5"></circle><rect x="18" y="18" width="72" height="72" fill="none" stroke="#1A1B20" stroke-width=".5" stroke-dasharray="1.5 1.5"></rect></svg></div>`;
const masks = [['Circle','50%'],['Squircle','32%'],['Rounded square','18%']].map(([n,r])=>cell(ico(120,glyph('A'),'18 18 72 72',C.bg,r),n));
const TL = K.U.tone;
const themed = [['Themed · light',TL('#3B82F6',90),TL('#3B82F6',10),'#F1F2F8'],['Themed · dark',TL('#3B82F6',20),TL('#3B82F6',85),'#1A1C22']];
const monoRow = themed.map(([n,b,fg,pg])=>cell(`<div style="padding:20px 24px;border-radius:24px;background:${pg};display:flex;gap:20px;align-items:center">${ico(64,mono('A',fg),'18 18 72 72',b)}${ico(48,mono('A',fg),'18 18 72 72',b)}</div>`, n, 'The launcher tints the one-tone layer; the 2.5dp gap keeps the fold.'));
const splash = (dark) => cell(`<div style="width:220px;height:440px;border-radius:32px;background:${dark?C.dkBg:C.bg};display:flex;align-items:center;justify-content:center;border:1px solid #DCDCE2"><svg viewBox="0 0 288 288" width="192" height="192" style="display:block"><circle cx="144" cy="144" r="96" fill="none" stroke="${dark?'#FFFFFF40':'#00000030'}" stroke-dasharray="4 4"></circle>${sc(SPL,144,glyph('A',dark?C.dkDark:C.dark,dark?C.dkMid:C.mid))}</svg></div>`, dark?'Splash · dark':'Splash · light', dark?`Background ${C.dkBg}, strokes ${C.dkDark} / ${C.dkMid}`:`Background ${C.bg}, strokes ${C.dark} / ${C.mid}`);
const notif = (bg, fg, n) => `<div style="display:flex;align-items:center;gap:12px;padding:10px 16px;border-radius:999px;background:${bg};width:max-content"><span style="font:600 14px/20px Inter;color:${fg}">9:41</span><svg viewBox="0 0 24 24" width="24" height="24">${sc(NOT,12,mono('A',fg))}</svg><svg viewBox="0 0 24 24" width="48" height="48">${sc(NOT,12,mono('A',fg))}</svg><span style="font:400 12px/16px Inter;color:${fg};opacity:.8">${n}</span></div>`;
const ratio = (W/108*100).toFixed(1);
const body = board('I.1','Final: folded leg','', sub('Icon', rowH(variants,20), `Same vocabulary as PostPurush and Unfurl: one stroke width (${W} on a 108 canvas, ${ratio}%), round caps and joins, two tones of one hue, a single overlap where the mid tone lies on the dark. No accent: a coin or arrow tab would blur into the bars at 48px. The fold is the only junction, and the leg is the most recognisable part of ₹ at small sizes.`))
 + board('I.2','Variant A · Android','', sub('Adaptive icon: 108dp canvas', `<div style="display:flex;flex-direction:column;gap:28px">${rowH([cell(safe,'Foreground on background','Dashed red: 66dp safe zone. Dashed black: 72dp visible area.')])}${rowH(masks)}</div>`, 'Every cap point sits within 29.5dp of the centre, inside the 66dp safe circle with room to spare.')
   + sub('On a home screen', rowH([home('#E9EDF5','50%','#1A1B20'), home('#22252C','32%','#E3E2E9')])))
 + board('I.3','Themed, splash, notification','', sub('Monochrome (Android 13+ themed icons)', rowH(monoRow))
   + sub('Splash screen (SplashScreen API, 288dp canvas, 192dp circle)', rowH([splash(false),splash(true)]))
   + sub('Notification small icon (white on transparent)', `<div style="display:flex;flex-direction:column;gap:12px">${notif('#1A1C22','#FFFFFF','24dp and 48dp preview')}${notif('#5F6368','#FFFFFF','On a grey status bar')}</div>`));
await saveFile('Kuber App Icon.dc.html', wrap('Kuber app icon','₹ in the PostPurush / Unfurl stroke style, Kuber Signature blue from seed #3B82F6. Sources in icon/.', body));
return {ratio};
})();
