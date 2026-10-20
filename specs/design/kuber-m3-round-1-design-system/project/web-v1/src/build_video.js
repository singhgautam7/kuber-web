// Web v1 launch film embed board. In run_script: await (new Function('readFile','saveFile', await readFile('web-v1/src/build_video.js')))(readFile, saveFile)
return (async () => {
const W = await (new Function('readFile', await readFile('web-v1/src/load_web.js')))(readFile);
const M = new Function('W', await readFile('web-v1/src/gen_mockups.js'))(W);
const G = new Function('W','M', await readFile('web-v1/src/gen_web.js'))(W, M);
const {V, BP, tx, wrapC, btn, iconBtn, link, shead, cardBox, caps, eyebrow, mix, F, MONO} = G;
const ic = W.K.ic;
const FAMN = Object.fromEntries(W.THEMES.map(([id,n])=>[id,n]));

// ---------- data ----------
const CH = [[6,'Add a transaction'],[23,'Accounts and cards'],[36,'Budgets, loans and more'],[61,'Import from SMS'],[80,'Ask Kuber'],[90,'Kuber Cards'],[99,'Kuber Notes'],[118,'Calculators'],[141,'Languages and themes']];
const mmss = (s) => `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`;
const LABEL = 'Play the Kuber feature tour, 3 minutes';
const NOTE = 'Plays from YouTube. Nothing from YouTube loads until you press play.';

// ---------- poster stand-in (a 16:9 film frame: phone left, caption right) ----------
const BEAT = { sms:{img:'sms-import',eb:'Unique feature · SMS import',t:'Import transactions from <span style="color:#0058BE">SMS.</span>'},
  notes:{img:'kuber-notes',eb:'Unique feature · Kuber Notes',t:'Notes that do the <span style="color:#0058BE">math.</span>'} };
const bloom = (x,y,d,c,a) => `<div style="position:absolute;left:${x}px;top:${y}px;width:${d}px;height:${d}px;border-radius:50%;background:radial-gradient(closest-side,rgba(${c},${a}),rgba(${c},0))"></div>`;
const posterArt = (w, beat='sms') => { const s = w/1280, b = BEAT[beat];
  return `<div aria-hidden="true" style="position:absolute;inset:0;overflow:hidden;background:#F9F9FF"><div style="position:absolute;left:0;top:0;width:1280px;height:720px;transform:scale(${s});transform-origin:0 0">
${bloom(-260,-300,900,'173,198,255',.55)}${bloom(760,280,820,'216,226,255',.9)}
<img src="mockups/${b.img}-light.png" alt="" width="300" height="635" style="position:absolute;left:180px;top:52px;width:300px;height:635px;filter:drop-shadow(0 24px 40px rgba(0,26,66,.18))">
<div style="position:absolute;left:580px;top:250px;width:620px;display:flex;flex-direction:column;gap:18px"><div style="font:700 20px/24px ${F};letter-spacing:2px;text-transform:uppercase;color:#0058BE">${b.eb}</div><div style="font:800 68px/76px ${F};letter-spacing:-2px;color:#1A1B20;text-wrap:balance">${b.t}</div></div></div></div>`; };

// ---------- the facade ----------
const spinner = (c) => `<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" style="flex:none"><circle cx="12" cy="12" r="9" style="fill:none;stroke:${c};stroke-opacity:.32;stroke-width:2.5"></circle><path d="M12 3a9 9 0 0 1 9 9" style="fill:none;stroke:${c};stroke-width:2.5;stroke-linecap:round"></path></svg>`;
const player = (bp, w, st='poster', o={}) => { const m = bp==='m', h = Math.round(w*9/16), r = m?20:24;
  const playing = st==='playing', loading = st==='loading';
  const pill = `<span style="position:absolute;left:${m?12:24}px;bottom:${m?12:24}px;height:${m?48:56}px;padding:0 ${m?18:22}px 0 ${m?14:18}px;box-sizing:border-box;border-radius:999px;background:${V.p};display:flex;align-items:center;gap:10px;${st==='hover'?`box-shadow:inset 0 0 0 999px ${mix(V.op,8)};`:''}">${loading?spinner(V.op):ic('play_arrow',m?24:26,V.op,1)}<span style="${tx('label','d',V.op,`font-size:${m?15:16}px;white-space:nowrap`)}">${loading?'Loading':'Play the tour'}</span>${loading?'':`<span style="width:1px;height:20px;background:${mix(V.op,40)}"></span><span style="${tx('label','d',V.op,`font-size:${m?15:16}px;font-weight:500;font-variant-numeric:tabular-nums`)}">3:03</span>`}</span>`;
  const face = playing
    ? `<div style="position:absolute;inset:0;background:#000000;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:8px"><span style="font:500 ${m?11:13}px/18px ${MONO};color:#8E9099;text-align:center">iframe · youtube-nocookie.com/embed/&lt;ID&gt;${o.start?`?start=${o.start}`:''}</span><span style="font:400 ${m?11:12}px/16px ${F};color:#8E9099">YouTube's own player, playing</span></div>`
    : `<button type="button" aria-label="${LABEL}" ${loading?'aria-busy="true" disabled ':''}style="position:absolute;inset:0;border:none;padding:0;margin:0;background:none;cursor:${loading?'progress':'pointer'};border-radius:${r}px;font-family:${F}">${posterArt(w,o.beat)}${st==='hover'?`<span style="position:absolute;inset:0;background:${mix(V.on,8)}"></span>`:''}${pill}</button>`;
  return `<div style="position:relative;width:${w}px;height:${h}px;border-radius:${r}px;overflow:${st==='focus'?'visible':'hidden'};background:#000000;flex:none;${st==='focus'?`outline:3px solid ${V.p};outline-offset:3px;`:''}"><div style="position:absolute;inset:0;border-radius:${r}px;overflow:hidden">${face}</div></div>`; };
const chapters = (bp, act) => { const m = bp==='m';
  if (m) return `<ul aria-label="Chapters" style="list-style:none;margin:12px -12px 0;padding:0 12px 2px;display:flex;gap:8px;overflow-x:auto;scrollbar-width:none">${CH.map(([s,n],i)=>{ const on = i===act; return `<li style="flex:none"><button type="button" aria-label="Play from ${mmss(s)}, ${n}" style="height:36px;padding:0 12px;border-radius:8px;border:1px solid ${on?V.sc:V.olv};background:${on?V.sc:'transparent'};display:inline-flex;align-items:center;gap:8px;cursor:pointer;font-family:${F}"><span style="${tx('label','m',on?V.osc:V.p,'font-variant-numeric:tabular-nums')}">${mmss(s)}</span><span style="${tx('label','m',on?V.osc:V.on,'white-space:nowrap')}">${n}</span></button></li>`; }).join('')}</ul>`;
  return `<div style="display:flex;flex-direction:column;gap:8px;min-width:0"><div style="padding:6px 12px 4px">${caps('Jump to')}</div><ul aria-label="Chapters" style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:0">${CH.map(([s,n],i)=>{ const on = i===act; return `<li><button type="button" aria-label="Play from ${mmss(s)}, ${n}" style="width:100%;height:44px;padding:0 12px;border:none;border-radius:999px;background:${on?V.sc:'transparent'};display:flex;align-items:center;gap:12px;cursor:pointer;font-family:${F};text-align:left;${o2(i)}"><span style="${tx('label','d',on?V.osc:V.p,'font-variant-numeric:tabular-nums;width:36px;flex:none')}">${mmss(s)}</span><span style="flex:1;${tx('small','d',on?V.osc:V.on,on?'font-weight:600;':'')}">${n}</span>${on?ic('graphic_eq',18,V.osc):''}</button></li>`; }).join('')}</ul></div>`; };
let o2 = () => '';
const note = (bp, o={}) => `<div style="display:flex;align-items:center;justify-content:space-between;gap:8px 20px;flex-wrap:wrap;${o.ex||''}"><p style="margin:0;display:flex;align-items:center;gap:8px;${tx('cap',bp,V.onv)}">${ic('info',16,V.onv)}${NOTE}</p>${o.noLink?'':link('Watch on YouTube',{trail:'north_east',r:'label'})}</div>`;

// Home section: "See it in action", between Why Kuber and Signature.
const seeSec = (bp, st='poster', o={}) => { const m = bp==='m', w = m ? 340 : 826;
  const head = shead(bp,'See it in action','The whole app in 3 minutes','A short tour of Kuber, from adding an expense to SMS import, Ask Kuber and Kuber Notes. Music only, no voiceover.').replace('<h2 style','<h2 id="tour-h" style');
  const panel = `<div style="border-radius:${m?28:40}px;background:${V.c1};border:1px solid ${V.olv};padding:${m?12:24}px;box-sizing:border-box;overflow:hidden;${m?'':'display:grid;grid-template-columns:minmax(0,1fr) 300px;gap:24px;align-items:start;'}">${player(bp,w,st,o)}${chapters(bp,o.act)}</div>`;
  return `<section id="tour" aria-labelledby="tour-h" style="padding:${o.pt??(m?64:112)}px 0 ${o.pb??(m?64:112)}px">${wrapC(bp, head)}${wrapC(bp, `<div style="margin-top:${m?32:48}px">${panel}</div>${note(bp,{ex:`margin-top:16px;padding:0 ${m?8:4}px`})}`, m?'padding:0 12px':'')}</section>`; };

// Press kit: Launch film block, after Screenshots.
const pressVid = (bp, st='poster', o={}) => { const m = bp==='m', w = m ? 350 : 686;
  const facts = [['Length','3:03'],['Format','16:9, 1080p, 60 fps'],['Sound','Music only, no voiceover'],['Chapters','17, listed on YouTube']];
  const side = cardBox(`${caps('About the film')}<dl style="margin:12px 0 0;display:flex;flex-direction:column">${facts.map(([k,v],i)=>`<div style="display:flex;justify-content:space-between;gap:16px;padding:12px 0;${i?`border-top:1px solid ${V.olv};`:''}"><dt style="${tx('small',bp,V.onv)}">${k}</dt><dd style="margin:0;${tx('label',bp,V.on,'text-align:right;font-variant-numeric:tabular-nums')}">${v}</dd></div>`).join('')}</dl><div style="display:flex;gap:8px 12px;flex-wrap:wrap;margin-top:20px">${btn('Watch on YouTube',{kind:'outlined',trail:'north_east'})}${btn('Copy link',{kind:'text',icon:'content_copy'})}</div>`,{r:32,pad:m?24:32});
  return `<section aria-labelledby="film-h" style="padding-top:${m?48:72}px;display:flex;flex-direction:column;gap:20px"><div><h2 id="film-h" style="margin:0;${tx('h3',bp,V.on)}">Launch film</h2><p style="margin:6px 0 0;${tx('body',bp,V.onv)}">The Kuber feature tour. Free to embed or link in your coverage.</p></div><div style="display:${m?'flex':'grid'};${m?'flex-direction:column;gap:16px;':'grid-template-columns:minmax(0,7fr) minmax(0,5fr);gap:24px;align-items:start;'}">${player(bp,w,st,{...o,beat:'notes'})}${side}</div>${note(bp,{noLink:1})}</section>`; };

// ---------- board helpers ----------
const fr = (id, label, bp, fam, mode, inner, o={}) => `<div id="${id}" style="display:flex;flex-direction:column;gap:12px;flex:none">
<div style="display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;max-width:${o.w||BP[bp].w}px"><a href="#${id}" style="font:700 12px/16px ${MONO};color:#00429B;text-decoration:none;padding:2px 8px;border-radius:6px;background:#D8E2FF">${id}</a><span style="font:600 15px/20px Inter;color:#1A1B20">${label}</span><span style="font:500 12px/16px ${MONO};color:#5B5E66">${o.w||BP[bp].w} · ${FAMN[fam]} ${mode}</span></div>
<div data-screen-label="${id} ${label}" data-site="1" style="${W.varStr(fam+'_'+mode)};width:${o.w||BP[bp].w}px;${o.h?`height:${o.h}px;`:''}position:relative;background:${V.bg};color:${V.on};font-family:${F};overflow:hidden;outline:1px solid #DCDCE2;-webkit-font-smoothing:antialiased">${inner}</div></div>`;
const sk = (fam, mode, w, z, inner, h, ex='') => `<div style="width:${Math.round(w*z)}px;${h?`height:${Math.round(h*z)}px;`:''}overflow:hidden;border-radius:8px;outline:1px solid #DCDCE2;flex:none;${ex}"><div data-site="1" style="zoom:${z};width:${w}px;${h?`height:${h}px;`:''}position:relative;overflow:hidden;${W.varStr(fam+'_'+mode)};background:${V.bg};color:${V.on};font-family:${F};-webkit-font-smoothing:antialiased">${inner}</div></div>`;
const tag = (id) => `<a href="#${id}" style="font:700 12px/16px ${MONO};color:#00429B;text-decoration:none;padding:2px 8px;border-radius:6px;background:#D8E2FF">${id}</a>`;
const notes = (rows) => `<dl style="margin:0;display:flex;flex-direction:column;gap:12px">${rows.map(([k,v])=>`<div><dt style="font:600 12px/16px Inter;letter-spacing:.6px;text-transform:uppercase;color:#5B5E66">${k}</dt><dd style="margin:4px 0 0;font:400 14px/21px Inter;color:#1A1B20;text-wrap:pretty">${v}</dd></div>`).join('')}</dl>`;
const optCard = (id, title, verdict, sketch, rows, rec) => `<article id="${id}" style="width:640px;display:flex;flex-direction:column;gap:18px;padding:24px;background:#FFFFFF;border-radius:20px;border:${rec?'2px solid #0058BE':'1px solid #DCDCE2'};box-sizing:border-box">
<div style="display:flex;align-items:center;gap:10px">${tag(id)}<h3 style="margin:0;flex:1;min-width:0;font:700 18px/24px Inter;color:#1A1B20;text-wrap:balance">${title}</h3><span style="margin-left:auto;white-space:nowrap;flex:none;font:600 12px/16px Inter;padding:4px 10px;border-radius:999px;background:${rec?'#0058BE':'#ECEDF4'};color:${rec?'#FFFFFF':'#44474F'}">${verdict}</span></div>
<div style="display:flex;gap:16px;align-items:flex-start;flex-wrap:wrap">${sketch}</div>${notes(rows)}</article>`;

// ---------- option sketches ----------
const heroLink = G.btn('Watch the tour',{kind:'text',icon:'play_circle',size:'l',href:'#tour'});
const withHero = (h) => h.replace(seeAll, seeAll + heroLink);
const seeAll = G.btn('See all features',{kind:'text',trail:'arrow_forward',size:'l'});
const homeD = withHero(G.homePage('d','light')), homeM = withHero(G.homePage('m','light'));
const heroA = (h) => h.replace(seeAll, G.btn('Watch the tour',{kind:'outlined',icon:'play_circle',size:'l'}));
const modalD = `<div style="position:absolute;inset:0;background:rgba(0,0,0,.32);z-index:20"></div><div role="dialog" aria-modal="true" aria-label="Kuber feature tour" style="position:absolute;left:200px;top:96px;width:1040px;z-index:21;border-radius:28px;background:${V.c2};border:1px solid ${V.olv};padding:12px 16px 16px;box-sizing:border-box;display:flex;flex-direction:column;gap:12px"><div style="display:flex;align-items:center;justify-content:space-between;padding-left:8px"><span style="${tx('t1','d',V.on)}">Kuber feature tour</span>${iconBtn('close',{label:'Close video',bg:V.c3,c:V.on})}</div>${player('d',1008,'playing')}${note('d',{ex:'padding:0 8px'})}</div>`;
const modalM = `<div style="position:absolute;inset:0;background:rgba(0,0,0,.32);z-index:20"></div><div role="dialog" aria-modal="true" aria-label="Kuber feature tour" style="position:absolute;left:0;right:0;bottom:0;z-index:21;border-radius:28px 28px 0 0;background:${V.c1};padding:8px 12px 24px;display:flex;flex-direction:column;gap:12px"><div style="display:flex;align-items:center;justify-content:space-between;padding-left:8px"><span style="${tx('t2','m',V.on)}">Kuber feature tour</span>${iconBtn('close',{label:'Close video',bg:V.c3,c:V.on})}</div>${player('m',366,'playing')}${note('m',{ex:'padding:0 4px'})}</div>`;
const signIdx = homeD.indexOf('The features people switch for'), cut = homeD.lastIndexOf('<section', signIdx);
const homeB = homeD.slice(0,cut) + `<div style="outline:8px dashed #0058BE;outline-offset:-8px">${seeSec('d','poster',{pb:0})}</div>` + homeD.slice(cut);
const pressD = G.press('d','light'), bIdx = pressD.indexOf('>Boilerplate<'), pCut = pressD.lastIndexOf('<section', bIdx);
const pressC = (bp, st, o) => { const p = G.press(bp,o.mode||'light'), i = p.indexOf('>Boilerplate<'), c = p.lastIndexOf('<section', i); return p.slice(0,c) + pressVid(bp,st,o) + p.slice(c); };
const stripTags = (h, anc) => { const legend = h.indexOf('Included free'); if (legend > -1) { const st = h.lastIndexOf('<div style="display:flex;flex-wrap:wrap;gap:8px 20px', legend), en = h.indexOf('</header>', legend); h = h.slice(0, st) + h.slice(en); }
  for (const k of ['Free','Pro','Beta']) h = h.replace(G.chipF(k, false, G.counts[k]), '');
  return anc ? h.replace('<div role="group" aria-label="Filter features" style=', '<div role="group" aria-label="Filter features" data-comment-anchor="0cd14b89d6-div" style=') : h; };
const featH = (bp, anc) => stripTags(G.featuresPage(bp,'light'), anc).replace('<div role="group" aria-label="Filter features"', `<div style="margin-top:4px">${btn('Watch the 3 minute tour',{kind:'tonal',icon:'play_circle'})}</div><div role="group" aria-label="Filter features"`);
const featC = featH('d');

const options = [
 optCard('1b','“See it in action” section on Home','Building',
   sk('signature','light',1440,.11,homeB),
   [['Google Play focus','Kept. The badge stays the only filled action. The hero gets one quiet text button, “Watch the tour”, after “See all features”. It scrolls to this section instead of leaving for YouTube, so visitors stay one scroll from the install button and see the privacy line before anything loads.'],
    ['Page flow','Hero, trust strip, Why Kuber, then See it in action, then Signature. The film covers the same ground as Why Kuber, in motion.'],
    ['Mobile','Player fills the panel width. Chapters become a scrolling row of chips. Tap plays inline; Android offers full screen from the player.']], true),
 optCard('1c','Press kit and Features index','Building',
   sk('signature','light',1440,.18,pressC('d','poster',{}),2700,'') + sk('signature','light',1440,.18,featC,900),
   [['Google Play focus','No effect. Neither page has a hero install button.'],
    ['Page flow','Press kit: a Launch film block after Screenshots, with the same player and the facts journalists need. Features index: a tonal “Watch the 3 minute tour” button under the lead that links to /#tour.'],
    ['Mobile','Press: player above the facts card. Features: the button wraps under the lead.']]),
].join('');

// ---------- recommended screens ----------
const d = (id, label, fam, mode, st, o={}) => fr(id, label, 'd', fam, mode, seeSec('d', st, o));
const mo = (id, label, fam, mode, st, o={}) => fr(id, label, 'm', fam, mode, seeSec('m', st, o));
const heroOnly = (h) => { const i = h.indexOf('aria-label="Kuber at a glance"'); return h.slice(0, h.lastIndexOf('<div style="width:100%;max-width', i)) + '</main>'; };
const heroF = (id, label, bp, fam, mode, h) => fr(id, label, bp, fam, mode, heroOnly(withHero(G.homePage(bp, mode))), {h});
const desk = [
 heroF('1b-h1','Hero with “Watch the tour”','d','signature','light',860),
 heroF('1b-h2','Hero with “Watch the tour”','d','iris','dark',860),
 d('1b-d1','Poster','signature','light','poster'),
 d('1b-d2','Hover (pointer)','signature','light','hover'),
 d('1b-d3','Focus (keyboard)','fern','light','focus'),
 d('1b-d4','Loading, after click','iris','dark','loading'),
 d('1b-d5','Playing from a chapter','signature','dark','playing',{act:3,start:61}),
 d('1b-d6','Poster','ember','dark','poster'),
].join('');
const mob = [
 heroF('1b-hm1','Hero with “Watch the tour”','m','signature','light',760),
 heroF('1b-hm2','Hero with “Watch the tour”','m','fern','dark',760),
 mo('1b-m1','Poster','signature','light','poster'),
 mo('1b-m2','Focus (keyboard)','perch','light','focus'),
 mo('1b-m3','Loading','signature','dark','loading'),
 mo('1b-m4','Playing from a chapter','fern','dark','playing',{act:3,start:61}),
 mo('1b-m5','Poster','tide','dark','poster'),
].join('');
const sec2 = [
 fr('1c-d1','Press kit · Launch film','d','signature','light', wrapC('d', pressVid('d','poster'), 'padding-bottom:72px')),
 fr('1c-m1','Press kit · Launch film','m','coral','dark', wrapC('m', pressVid('m','poster'), 'padding-bottom:48px')),
 fr('1c-d2','Features index · header','d','signature','light', featH('d', 1), {h:620}),
].join('');

// ---------- copy ----------
const COPY = [['Home section eyebrow','See it in action'],['Home section heading','The whole app in 3 minutes'],['Home section lead','A short tour of Kuber, from adding an expense to SMS import, Ask Kuber and Kuber Notes. Music only, no voiceover.'],
 ['Play button (visible)','Play the tour · 3:03'],['Play button (aria-label)',LABEL],['Loading','Loading'],['Chapters heading','Jump to'],['Chapter aria-label','Play from 1:01, Import from SMS'],
 ['Privacy line',NOTE],['Link','Watch on YouTube'],['Offline message','You are offline. Connect to the internet to watch the tour.'],
 ['Press block','Launch film · The Kuber feature tour. Free to embed or link in your coverage. · About the film · Copy link · Link copied'],['Features index button','Watch the 3 minute tour'],['Hero text button','Watch the tour (scrolls to #tour)'],['Iframe title','Kuber feature tour']];
const copyCard = `<div style="width:860px;background:#FFFFFF;border:1px solid #DCDCE2;border-radius:20px;padding:8px 24px">${COPY.map(([k,v],i)=>`<div style="display:grid;grid-template-columns:220px minmax(0,1fr);gap:16px;padding:12px 0;${i?'border-top:1px solid #ECEDF4;':''}"><span style="font:600 13px/20px Inter;color:#5B5E66">${k}</span><span style="font:400 14px/20px Inter;color:#1A1B20">${v}</span></div>`).join('')}</div>`;
const chapCard = `<div style="width:420px;background:#FFFFFF;border:1px solid #DCDCE2;border-radius:20px;padding:20px 24px;display:flex;flex-direction:column;gap:10px"><div style="font:600 12px/16px Inter;letter-spacing:.6px;text-transform:uppercase;color:#5B5E66">Chapters on the site (9 of 17)</div>${CH.map(([s,n])=>`<div style="display:flex;gap:16px;font:400 14px/20px Inter;color:#1A1B20"><span style="font:600 14px/20px ${MONO};color:#0058BE;width:40px">${mmss(s)}</span>${n}</div>`).join('')}<p style="margin:6px 0 0;font:400 13px/19px Inter;color:#44474F">Picked from the film's 17 chapters so the list fits beside the player. The full list goes in the YouTube description as timestamps.</p></div>`;

// ---------- YouTube thumbnail ----------
const phone = (img, x, y, w, rot=0, ex='') => `<img src="mockups/${img}-light.png" alt="" width="${w}" height="${Math.round(w*1592/752)}" style="position:absolute;left:${x}px;top:${y}px;width:${w}px;height:${Math.round(w*1592/752)}px;transform:rotate(${rot}deg);filter:drop-shadow(0 28px 48px rgba(0,26,66,.22));${ex}">`;
const iconMark = (px, dark) => G.mark(px).replace(/var\(--k-icon-bg,[^)]+\)/, dark?'#001A42':'#D8E2FF').replace(/var\(--k-icon-ink,[^)]+\)/, dark?'#ADC6FF':'#003D88').replace(/var\(--k-icon-leg,[^)]+\)/, dark?'#4D8EFF':'#2573E6');
const T = `<div data-thumb="final" style="position:relative;width:1280px;height:720px;overflow:hidden;background:#F9F9FF;font-family:${F}">${bloom(-320,-340,1000,'173,198,255',.6)}${bloom(700,240,900,'216,226,255',.95)}
${phone('sms-import',24,170,236,-9)}${phone('ask-kuber',372,170,236,9)}${phone('home',168,84,290,0)}
<div style="position:absolute;left:690px;top:132px;width:540px;display:flex;flex-direction:column;gap:26px"><div style="display:flex;align-items:center;gap:16px">${iconMark(72)}<span style="font:700 36px/1 ${F};letter-spacing:-.6px;color:#1A1B20">Kuber</span></div><div style="font:800 80px/86px ${F};letter-spacing:-2.6px;color:#1A1B20">Fully offline.<br><span style="color:#0058BE">Fully yours.</span></div><div style="display:flex;align-items:center;gap:18px"><span style="height:56px;padding:0 24px;border-radius:999px;background:#0058BE;display:inline-flex;align-items:center;white-space:nowrap;flex:none;font:700 26px/1 ${F};color:#FFFFFF">The full tour</span><span style="font:600 22px/28px ${F};color:#44474F;white-space:nowrap">Offline money app.<br>Made in India.</span></div></div></div>`;
const thumb = (id, label, art) => `<div id="${id}" style="display:flex;flex-direction:column;gap:12px;flex:none"><div style="display:flex;align-items:baseline;gap:10px">${tag(id)}<span style="font:600 15px/20px Inter;color:#1A1B20">${label}</span><span style="font:500 12px/16px ${MONO};color:#5B5E66">1280 × 720</span><a href="thumbnail/kuber-tour-thumbnail.png" download="kuber-tour-thumbnail.png" target="_blank" rel="noopener" data-dl="1" style="margin-left:8px;display:inline-flex;align-items:center;gap:6px;height:32px;padding:0 14px 0 10px;border-radius:999px;background:#0058BE;color:#FFFFFF;text-decoration:none;font:600 13px/1 Inter">${ic('download',18,'#FFFFFF')}Download PNG</a></div>
<div data-screen-label="${id} ${label}" style="width:1280px;height:720px;outline:1px solid #DCDCE2">${art}</div>
<div style="display:flex;gap:24px;align-items:flex-end">${[[360,'Home feed'],[168,'Sidebar']].map(([w,l])=>`<div style="display:flex;flex-direction:column;gap:6px"><div style="position:relative;width:${w}px;height:${Math.round(w*9/16)}px;border-radius:${w>200?12:8}px;overflow:hidden"><div style="zoom:${w/1280}">${art}</div><span style="position:absolute;right:${w>200?8:4}px;bottom:${w>200?8:4}px;padding:1px 4px;border-radius:4px;background:rgba(0,0,0,.8);font:600 ${w>200?12:10}px/16px Inter;color:#FFFFFF">3:03</span></div><span style="font:500 12px/16px ${MONO};color:#5B5E66">${l} · ${w}px, with duration badge</span></div>`).join('')}</div></div>`;

// ---------- page ----------
const TU = G.turn;
const body = G.page('Launch film embed',
 'Where the 3:03 Kuber feature tour lives on kuber.pages.dev, and how it plays without breaking the “No cookies, analytics or trackers” promise. Building <a href="#1b" style="color:#0058BE">1b</a> (a section on Home after Why Kuber, plus a “Watch the tour” text button in the hero that scrolls to it) and <a href="#1c" style="color:#0058BE">1c</a> (Press kit and Features index). 1a, the hero modal, is dropped. The poster here is a stand-in drawn from the film’s 16:9 layout; swap in the exported frame. Spec: video-embed.md.',
 TU('1','Placement options','Where the film goes, judged on what they do to the hero’s one job (Get it on Google Play), where they sit in the page, and how they behave on a phone.', options)
 + TU('1b-d','1b · Home section, desktop','States: poster, hover, keyboard focus, loading (from click until the iframe reports ready), playing. Shown in Signature, Fern, Iris and Ember. The poster is an image, so it stays the same across accents; the play pill, panel, chapters and focus ring follow the theme.', desk)
 + TU('1b-m','1b · Home section, mobile','Tap plays inline. Chapters scroll sideways. No hover state on touch.', mob)
 + TU('1c-s','1c · Secondary placements','Press kit gets the same facade with the facts a journalist needs. Features index gets one tonal button to /#tour.', sec2)
 + TU('copy','Copy and chapters','Plain words, no dashes. Times are where each chapter starts in the film.', `<div style="display:flex;gap:48px;align-items:flex-start">${copyCard}${chapCard}</div>`)
 + TU('yt','YouTube thumbnail','Final. The film’s light stage with three phones: Import from SMS, Home, Ask Kuber. Text sits clear of the phones and of the bottom right, where YouTube puts the duration. Checked at feed and sidebar sizes.', thumb('yt-b','Final · Fully offline, light stage',T)));

const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="../support.js"></script>
</head>
<body>
<x-dc>
<helmet><meta name="design_doc_mode" content="canvas"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,400,0..1,0&display=block" rel="stylesheet"><style>body{margin:0;background:#FFFFFF;font-family:Inter,sans-serif}a{color:#0058BE}a:hover{color:#00429B}ul::-webkit-scrollbar{display:none}</style></helmet>
${body}
</x-dc>
<script type="text/x-dc-logic" data-dc-script>
class Component extends DCLogic {
  componentDidMount() {
    this.onDl = async (e) => { const a = e.target.closest && e.target.closest('a[data-dl]'); if (!a) return; e.preventDefault();
      try { const r = await fetch(a.href); if (!r.ok) throw 0; const u = URL.createObjectURL(await r.blob()); const t = document.createElement('a'); t.href = u; t.download = a.getAttribute('download'); document.body.appendChild(t); t.click(); t.remove(); setTimeout(() => URL.revokeObjectURL(u), 4000); }
      catch (_) { window.open(a.href, '_blank', 'noopener'); } };
    document.addEventListener('click', this.onDl, true);
  }
  componentWillUnmount() { document.removeEventListener('click', this.onDl, true); }
  renderVals() { return {}; }
}
</script>
</body>
</html>
`;
const BETA = `<span style="display:inline-flex;gap:6px;align-items:center;flex:none">${G.bpill('beta')}</span>`;
const out = html.split(BETA).join('').replace('<section id="1" ', '<section id="1" data-comment-anchor="789d549c76-section" ').replace('<div id="yt-b" ', '<div id="yt-b" data-comment-anchor="8dd0f67a42-div" ');
await saveFile('web-v1/Web v1 Video Embed.dc.html', out);
return html.length;
})();
