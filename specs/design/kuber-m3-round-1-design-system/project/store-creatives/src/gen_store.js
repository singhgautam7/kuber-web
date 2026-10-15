// Play Store creatives generator. In run_script:
//   const L = await (new Function('readFile', await readFile('_kit/store_load.js')))(readFile);
//   const html = new Function('L', await readFile('store-creatives/src/gen_store.js'))(L);
const {K,S,S2,S3,S4,S5} = L;
const {ic} = K;
const OB = K.T('signature_dark'), AL = K.T('signature_light');
let t = OB;
// Alternating grounds: light tint + Obsidian screens, dark tint + Alabaster screens.
const LIGHT = {bg:'#EDF0FF', ink:'#001A42', sub:'#003D88', th:OB}, DARK = {bg:'#001A42', ink:'#FFFFFF', sub:'#ADC6FF', th:AL};
const BG = LIGHT.bg, INK = LIGHT.ink, SUB = LIGHT.sub, BEZEL = '#1B1B1F';
// Home without the Pro pill (optionally an Ask Kuber pill in its place), with segmented story rings.
const askPill = (t) => `<div style="display:inline-flex;align-items:center;gap:8px;height:40px;padding:0 14px 0 4px;border-radius:999px;background:${t.sc}">${S2.mark(t,32)}<span style="font:600 14px/20px Inter,sans-serif;letter-spacing:0.1px;color:${t.osc}">Ask Kuber</span></div>`;
const segRing = (t, n, unread, icon) => { const r=26.5, C=2*Math.PI*r, gap=n>1?7:0, L=C/n-gap;
  const arcs = Array.from({length:n},(_,i)=>`<circle cx="28" cy="28" r="${r}" fill="none" stroke="${i<unread?t.p:t.olv}" stroke-width="3" stroke-linecap="round" stroke-dasharray="${L.toFixed(2)} ${(C-L).toFixed(2)}" stroke-dashoffset="${(-(i*C/n)-gap/2).toFixed(2)}"></circle>`).join('');
  return `<div style="width:56px;height:56px;position:relative;flex:none"><svg width="56" height="56" viewBox="0 0 56 56" style="position:absolute;inset:0;transform:rotate(-90deg)">${arcs}</svg><div style="position:absolute;left:6px;top:6px;width:44px;height:44px;border-radius:999px;background:${t.c3};display:flex;align-items:center;justify-content:center">${ic(icon,22,unread?t.p:t.onv)}</div></div>`; };
const STORIES = [['calendar_today','Daily',3,3],['bar_chart','Weekly',4,4],['calendar_month','Monthly',6,2],['auto_awesome','Insights',5,0],['savings','Yearly',3,0]];
const home = (t, o={}) => { let h = S.home(t); const pill = K.proPill(t); if (!h.includes(pill)) throw new Error('pro pill not found');
  h = h.replace(pill, o.ask ? askPill(t) : '');
  const no = S.home(t,{only:S.homeOrder.filter(k=>k!=='stories')}).replace(pill, o.ask ? askPill(t) : '');
  let a=0; while (h[a]===no[a]) a++; a = h.lastIndexOf('<div>', a); const len = h.length-no.length; const st = h.slice(a, a+len);
  const k = st.indexOf('<div style="display:flex;gap:16px;overflow:hidden">'); if (k<0 || h.slice(a+len)!==no.slice(a)) throw new Error('stories block not isolated');
  const row = `<div style="display:flex;gap:16px;overflow:hidden">${STORIES.map(([i,l,n,u])=>`<div style="width:56px;display:flex;flex-direction:column;align-items:center;gap:8px;flex:none">${segRing(t,n,u,i)}<span style="font:600 12px/16px Inter,sans-serif;letter-spacing:0.5px;color:${t.on}">${l}</span></div>`).join('')}</div></div>`;
  return h.slice(0,a) + st.slice(0,k) + row + h.slice(a+len); };
const sbar = (c) => `<div style="height:32px;flex:none;display:flex;align-items:center;justify-content:space-between;padding:0 20px;font:600 13px Inter,sans-serif;color:${c}"><span>9:41</span><span style="display:flex;gap:6px;align-items:center">${ic('signal_cellular_alt',16,c,1)}${ic('wifi',16,c,1)}${ic('battery_full',16,c,1)}</span></div>`;
// Phone at 360dp screen width, scaled. x/y = top-left in artboard px.
const phone = (inner, {x, y, s, h=800, z=1, th=t}) => `<div style="position:absolute;left:${x}px;top:${y}px;width:${376*s}px;height:${(h+16)*s}px;z-index:${z}"><div style="width:376px;height:${h+16}px;transform:scale(${s});transform-origin:0 0;border-radius:44px;padding:8px;background:${BEZEL};box-sizing:border-box"><div style="height:${h}px;border-radius:36px;overflow:hidden;background:${th.bg};position:relative;display:flex;flex-direction:column">${sbar(th.on)}${inner}</div></div></div>`;
const caption = (h, sub, G=LIGHT) => `<div style="position:absolute;left:60px;right:60px;top:128px;display:flex;flex-direction:column;align-items:center;gap:28px;text-align:center"><div style="font:700 96px/108px Inter,sans-serif;letter-spacing:-2.5px;color:${G.ink};white-space:nowrap">${h}</div>${sub?`<div style="font:500 40px/54px Inter,sans-serif;letter-spacing:-0.3px;color:${G.sub};white-space:nowrap">${sub}</div>`:''}</div>`;
const board = (id, label, inner, G=LIGHT) => `<div style="display:flex;flex-direction:column;gap:16px"><div style="font:600 20px/28px 'JetBrains Mono',monospace;color:#44474F">${label}</div><div id="${id}" data-screen-label="${label}" style="position:relative;width:1080px;height:1920px;overflow:hidden;background:${G.bg};flex:none">${inner}</div></div>`;
const one = (scr, top=600) => phone(scr, {x:(1080-376*2)/2, y:top, s:2, h:800});
const trio = (left, center, right) => phone(left,{x:-60,y:700,s:1.5,h:800,z:1}) + phone(right,{x:1080-376*1.5+60,y:700,s:1.5,h:800,z:1}) + phone(center,{x:(1080-376*1.7)/2,y:600,s:1.7,h:800,z:2});
const shots = [
  ['s1','01-home','Your money.<br>Fully offline.','No account. No cloud.<br>Everything stays on your phone.', ()=>one(home(t))],
  ['s2','02-sms-import','Bank SMS to<br>transactions','Read on your phone. Never uploaded.', ()=>one(S2.sms(t))],
  ['s3','03-add','Add in seconds','Smart suggestions from your past entries.', ()=>one(S.add(t,{name:'Groc',focus:1,suggest:1}))],
  ['s4','04-analytics','See where every<br>rupee goes','Charts, trends, and advanced analytics.', ()=>phone(S.analytics(t),{x:40,y:600,s:1.65,h:800,z:1}) + phone(S.advanced(t),{x:1080-376*1.75-40,y:700,s:1.75,h:800,z:2})],
  ['s5','05-history','Find any<br>transaction','Filter by account, category,<br>tag, date, and more.', ()=>phone(S.history(t),{x:40,y:600,s:1.65,h:800,z:1}) + phone(S.histFilter(t),{x:1080-376*1.75-40,y:700,s:1.75,h:800,z:2})],
  ['s6','06-loans-investments','Loans, lending,<br>investments','All tracked in one place.', ()=>trio(S3.ledger(t), S3.loans(t), S3.investments(t))],
  ['s7','07-budgets-bills','Stay ahead<br>of every bill','Budgets, recurring payments,<br>and reminders.', ()=>trio(S3.recurring(t), S3.budgets(t), S4.reminders(t))],
  ['s8','08-signature','More than<br>a tracker','Ask Kuber. Smart notes that do the maths.<br>EMI, GST, and split calculators.', ()=>trio(S4.noteEditor(t), S2.askChat(t), S5.toolsHub(t))]
];
const icon = (px) => `<svg width="${px}" height="${px}" viewBox="0 0 108 108" style="display:block;flex:none;border-radius:${px*0.26}px"><rect width="108" height="108" fill="#D8E2FF"></rect><g fill="none" stroke-width="8.5" stroke-linecap="round" stroke-linejoin="round"><path d="M40.4 32.75H67.6" stroke="#003D88"></path><path d="M50.6 32.75A12.75 12.75 0 0 1 50.6 58.25H42.1" stroke="#003D88"></path><path d="M40.4 45.5H67.6" stroke="#003D88"></path><path d="M42.1 58.25L61.65 74.4" stroke="#2573E6"></path></g></svg>`;
const trust = ['Offline','No account','Open source','Made in India'].map(x=>`<span>${x}</span>`).join(`<span style="color:#8C909F">·</span>`);
const fg = `<div style="display:flex;flex-direction:column;gap:16px"><div style="font:600 20px/28px 'JetBrains Mono',monospace;color:#44474F">feature-graphic</div><div id="fg" data-screen-label="feature-graphic" style="position:relative;width:1024px;height:500px;overflow:hidden;background:${BG};flex:none">
<div style="position:absolute;left:72px;top:118px;display:flex;flex-direction:column;gap:22px">
<div style="display:flex;align-items:center;gap:24px">${icon(104)}<div style="font:700 84px/92px Inter,sans-serif;letter-spacing:-2.5px;color:${INK}">Kuber</div></div>
<div style="font:600 32px/40px Inter,sans-serif;letter-spacing:-0.5px;color:${SUB}">Fully offline.<br>Fully yours.</div>
<div style="display:flex;gap:10px;white-space:nowrap;font:600 18px/24px Inter,sans-serif;color:#424754">${trust}</div></div>
${phone(S4.cards(t),{x:640,y:96,s:0.95,h:800,z:1})}${phone(home(t,{ask:1}),{x:780,y:44,s:1.0,h:800,z:2}).replace('left:780px','left:790px')}
</div></div>`;
const boards = shots.map(([id,n,h,s,p],i)=>{ const G = i%2 ? DARK : LIGHT; t = G.th; const out = board(id,n,caption(h,s,G)+p(),G); t = OB; return out; }).join('');
return {fg, boards, shots: shots.map(([id,n,h,s])=>({id,n,h:h.replace(/<br>/g,' '),s:s.replace(/<br>/g,' ')}))};
