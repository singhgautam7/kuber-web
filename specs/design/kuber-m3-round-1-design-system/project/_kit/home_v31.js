// Home v3.1 generator (Welcome flow), built on Home v3. new Function('K','S','V2', src)(K,S,V2) -> { html, copyMd }
const {T,ty,caps,num,ic,a,card,group,lrow,btn,secH,nav,fade,nphone,board,row,spec,swatchPanel,tag,MONO,chip,cat,txn,sheet} = K;
const WG = S.W;
const {gsCard,editBlock,frame,sub,OB,AL,FAM,CR,fx,HELMET} = V2;
const s2 = V2.s;

// ---------- copy (single source; home-v3.1/copy.md is generated from this) ----------
const COPY = [
['#','Purpose screen (new)'],
['purTitle','Note every rupee. See where it goes.','Headline, 7 words. headlineMedium.'],
['purBody','Your bank SMS do most of the work, right on this phone.','Subhead, bodyLarge. Carries the on-device promise from the removed Private by design page.'],
['purSmsSender','Your Bank','Demo SMS sender. Generic on purpose; never a real bank name or logo.'],
['purSmsTime','now','Demo SMS time.'],
['purSmsText','₹250 debited from A/c XX1234 at a food delivery app.','Demo SMS body. Keep ₹250 and XX1234 as they are in every language.'],
['purTxnName','Food delivery','Demo transaction title.'],
['purTxnSub','Food · Bank','Demo transaction subtitle (category · account), one string so translators see it whole.'],
['purTxnTime','Just now','Demo transaction time.'],
['purTxnTag','From bank SMS','Demo source line under the transaction.'],
['purAccount','Account','Small caps label under the account chip.'],
['purCategory','Category','Small caps label under the category chip.'],
['purBank','Bank','Account kind chip. Same word as the seeded Bank account.'],
['purCash','Cash','Account kind chip. Same word as the seeded Cash account.'],
['purCard','Credit card','Account kind chip.'],
['purFood','Food','Category chip.'],
['purA11y','A bank SMS for ₹250 turns into a Food transaction in your Bank account.','Semantics label for the whole animation, read once. The animation itself is excluded from semantics.'],
['#','What do you want to track? (changed)'],
['trkBudgets','Budgets','Filter chip. Replaces homeV3_trkDaily.'],
['#','Empty states for widgets turned on by a choice (new)'],
['budEmpty','Set a budget to see how much is left this month.','Budget Snapshot with no budget. Action hidden while Get started is on screen (v2 rule).'],
['evEmptyLoans','Add a loan to see your next EMI here.','Upcoming Events, empty, only Loans and EMIs picked.'],
['evEmptyInvest','Add a SIP to see its next date here.','Upcoming Events, empty, only Investments and SIPs picked.'],
['evEmptyLedger','Add money you lent or borrowed to see when it is due.','Upcoming Events, empty, only Money lent or borrowed picked.'],
['evEmptySubs','Add a subscription to see when it renews.','Upcoming Events, empty, only Subscriptions picked.'],
['evEmptyMany','Your next EMIs, SIPs, dues and renewals will show here.','Upcoming Events, empty, 2 or more of its choices picked.'],
['#','Make it yours (changed)'],
['setupSub','Three quick choices.','Replaces threeQuickChoices on this page; "and you\'re in" is no longer true, one more screen follows.'],
];
const CP = {}; for (const r of COPY) if (r[0] !== '#') CP[r[0]] = r[1];
const s = (k, v = {}) => { const x = CP[k]; if (x === undefined) throw new Error('missing copy ' + k); return x.replace(/\{(\w+)\}/g, (m, n) => v[n] !== undefined ? v[n] : m); };
for (const r of COPY) if (r[1] && /[—–]/.test(r[1])) throw new Error('dash in copy ' + r[0]);
const V3 = {trkTitle:'What do you want to track?', trkBody:'Pick as many as you like. Kuber adds the matching widgets to your Home. You can change this later.', trkLoans:'Loans and EMIs', trkInvest:'Investments and SIPs', trkLedger:'Money lent or borrowed', trkSubs:'Subscriptions'};

// ---------- shared chrome ----------
const OLDDOTS = (t, i) => `<div style="display:flex;gap:8px;justify-content:center">${[0,1,2,3].map(j=>`<div style="width:${j===i?24:8}px;height:8px;border-radius:999px;background:${j===i?t.p:t.olv}"></div>`).join('')}</div>`;
const dots = (t, i) => `<div style="display:flex;gap:8px;justify-content:center">${[0,1,2].map(j=>`<div style="width:${j===i?24:8}px;height:8px;border-radius:999px;background:${j===i?t.p:t.olv}"></div>`).join('')}</div>`;
const skipBar = (t) => `<div style="height:56px;flex:none;display:flex;align-items:center;justify-content:flex-end;padding:0 8px">${btn(t,'Skip',{kind:'text'})}</div>`;
const rep = (h, a_, b) => { if (!h.includes(a_)) throw new Error('not found: ' + a_.slice(0,40)); return h.split(a_).join(b); };
const welcomeP = (t) => rep(S.welcome(t,0), OLDDOTS(t,0), dots(t,0));
const setupP = (t) => rep(rep(rep(S.welcome(t,3), OLDDOTS(t,3), dots(t,2)), 'Start my journey', 'Continue'), "Three quick choices and you're in.", s('setupSub'));

// ---------- Purpose animation stage ----------
const SW = 320;
const X = {bank:47, cash:139, card:252};
const at = (x, y, inner, o = {}) => `<div style="position:absolute;left:${x}px;top:${y}px;${o.c?'transform:translateX(-50%)'+(o.sc?' scale('+o.sc+')':'')+';':''}opacity:${o.op??1};width:max-content;${o.ex||''}">${inner}</div>`;
const bubble = (t, w = 280) => `<div style="width:${w}px;background:${t.c3};border-radius:20px 20px 20px 4px;padding:12px 16px;box-sizing:border-box"><div style="display:flex;gap:6px;align-items:center;margin-bottom:4px">${ic('sms',16,t.onv)}<span style="${ty('lM',t.onv)}">${s('purSmsSender')} · ${s('purSmsTime')}</span></div><div style="${ty('bM',t.on,'text-wrap:pretty')}">${s('purSmsText')}</div></div>`;
const tcard = (t) => `<div style="width:${SW}px;background:${t.c2};border:1px solid ${t.olv};border-radius:20px;overflow:hidden;box-sizing:border-box">${txn(t,{c:'#EF4444',i:'restaurant',name:s('purTxnName'),sub:s('purTxnSub'),type:'expense',amt:'250',time:s('purTxnTime'),tag:s('purTxnTag')})}</div>`;
const kchip = (t, k, sel) => { const m = {bank:['purBank','account_balance'],cash:['purCash','payments'],card:['purCard','credit_card'],food:['purFood','restaurant']}[k]; return chip(t,s(m[0]),{icon:m[1],sel,nocheck:1,ic:sel?t.osc:t.p}); };
const lines = (t, y1, y2, l1, l2) => `<svg width="${SW}" height="${y2+4}" viewBox="0 0 ${SW} ${y2+4}" style="position:absolute;left:0;top:0;overflow:visible">${[[X.bank,l1],[X.card,l2]].map(([x,p])=>p?`<path d="M${x} ${y1} V${y2}" fill="none" stroke="${t.p}" stroke-width="2" stroke-linecap="round" stroke-dasharray="${y2-y1}" stroke-dashoffset="${((y2-y1)*(1-p)).toFixed(1)}"></path>`:'').join('')}</svg>`;
const lbl = (t, x, y, k, op = 1) => at(x, y, `<span style="${caps(t.onv,'white-space:nowrap')}">${s(k)}</span>`, {c:1, op});
// keyframes: k1 SMS in · k2 morph mid · k3 card formed · k4 card up + account kinds · k5 Bank picked · fin rest frame
const stage = (t, k) => {
  const H = k==='static' ? 300 : 220; let h = '';
  if (k==='k1') h = at(20, 72, bubble(t));
  if (k==='k2') h = at(10, 72, `<div style="width:300px;height:88px;border-radius:20px 20px 20px 12px;background:${t.c3};border:1px solid ${a(t.olv,.5)};box-sizing:border-box;overflow:hidden;position:relative"><div style="position:absolute;left:-11px;top:-1px;opacity:.55">${tcard(t)}</div><div style="position:absolute;left:4px;top:0;opacity:.2">${bubble(t)}</div></div>`);
  if (k==='k3') h = at(0, 72, tcard(t));
  if (['k4','k5','fin'].includes(k)) {
    const o = {k4:[1,1,1],k5:[1,.38,.38],fin:[1,0,0]}[k];
    h = at(0, 24, tcard(t)) + lines(t, 112, 152, k==='k4'?0:1, k==='fin'?1:0)
      + at(X.bank, 152, kchip(t,'bank',k!=='k4'), {c:1})
      + (o[1] ? at(X.cash, 152, kchip(t,'cash',0), {c:1, op:o[1]}) : '')
      + (o[2] ? at(X.card, 152, kchip(t,'card',0), {c:1, op:o[2]}) : '')
      + (k==='fin' ? at(X.card, 152, kchip(t,'food',1), {c:1}) : '')
      + (k!=='k4' ? lbl(t, X.bank, 194, 'purAccount') : '') + (k==='fin' ? lbl(t, X.card, 194, 'purCategory') : '');
  }
  if (k==='static') h = at(20, 0, bubble(t)) + at(SW/2, 90, ic('arrow_downward',20,t.p), {c:1}) + at(0, 116, tcard(t)) + lines(t, 204, 236, 1, 1)
      + at(X.bank, 236, kchip(t,'bank',1), {c:1}) + at(X.card, 236, kchip(t,'food',1), {c:1}) + lbl(t, X.bank, 278, 'purAccount') + lbl(t, X.card, 278, 'purCategory');
  return `<div style="position:relative;width:${SW}px;height:${H}px;flex:none;align-self:center">${h}</div>`;
};
const purNav = (t) => `<div style="flex:none;padding:12px 20px 24px;display:flex;flex-direction:column;gap:16px">${dots(t,1)}<div style="display:flex;gap:12px">${btn(t,'Back',{kind:'outlined',size:'l',icon:'arrow_back'})}${btn(t,'Continue',{size:'l',full:1,trail:'arrow_forward'})}</div></div>`;
const purpose = (t, k = 'fin') => skipBar(t) + `<div style="flex:1;display:flex;flex-direction:column;justify-content:center;padding:0 20px;gap:12px">${stage(t,k)}<div style="${ty('hM',t.on,'margin-top:20px;text-wrap:pretty')}">${s('purTitle')}</div><div style="${ty('bL',t.onv,'text-wrap:pretty')}">${s('purBody')}</div></div>` + purNav(t);

// ---------- Track (v3.1) ----------
const TRK = [[s('trkBudgets'),'savings'],[V3.trkLoans,'account_balance'],[V3.trkInvest,'show_chart'],[V3.trkLedger,'handshake'],[V3.trkSubs,'event_repeat']];
const chips = (t, sel) => `<div style="display:flex;flex-wrap:wrap;gap:12px 8px">${TRK.map(([l,i],j)=>chip(t,l,{sel:sel.includes(j),icon:i})).join('')}</div>`;
const track = (t, sel = []) => skipBar(t) + `<div style="flex:1;display:flex;flex-direction:column;padding:24px 20px 0;gap:12px"><div style="${ty('hM',t.on,'text-wrap:pretty')}">${V3.trkTitle}</div><div style="${ty('bL',t.onv,'text-wrap:pretty')}">${V3.trkBody}</div><div style="margin-top:20px">${chips(t,sel)}</div></div><div style="flex:none;padding:12px 20px 24px;display:flex">${btn(t,'Continue',{size:'l',full:1,trail:'arrow_forward',kind:sel.length?'filled':'disabled'})}</div>`;

// ---------- Home (v3 behaviour, unchanged) ----------
const home3 = (t, o) => S.homeHeader(t,{badge:''}) + `<div style="flex:1;overflow:hidden;position:relative"><div style="padding:0 20px 120px;display:flex;flex-direction:column;gap:28px">${[S.greeting(t), gsCard(t,'fresh'), ...(o.w||[]), editBlock(t,o.more)].filter(Boolean).join('')}</div></div>` + fade(t) + nav(t,0) + (o.over||'');
const emptyW = (t, title, icn, key) => `<div>${secH(t,title)}${card(t,`<div style="display:flex;flex-direction:column;align-items:center;gap:8px;padding:8px 0">${ic(icn,24,t.onv)}<div style="${ty('bM',t.onv,'text-align:center;text-wrap:pretty')}">${s(key)}</div></div>`)}</div>`;
const budEmpty = (t) => emptyW(t,'Budget snapshot','pie_chart','budEmpty');
const evEmpty = (t, k) => emptyW(t,'Upcoming events','calendar_month',k);
const nudge = (t) => sheet(t,{title:'Just so you know',lead:`<div style="width:40px;height:40px;border-radius:12px;background:${t.pc};display:flex;align-items:center;justify-content:center;flex:none">${ic('school',20,t.opc,1)}</div>`,mh:420,body:[['touch_app','You can explore at your own pace','Kuber is built to feel familiar, so you can start logging right away.'],['map','A walkthrough is always nearby','Open More, then App Tutorial, whenever you want a quick guided tour.']].map(([i,h,b])=>`<div style="display:flex;gap:16px">${ic(i,24,t.p)}<div><div style="${ty('tS',t.on)}">${h}</div><div style="${ty('bM',t.onv)}">${b}</div></div></div>`).join(''),actions:`<div style="flex:1;display:flex;flex-direction:column;gap:8px">${btn(t,'Go to tutorials',{kind:'outlined',full:1})}${btn(t,'Got it',{full:1})}</div>`});

// ---------- board helpers ----------
const capn = (txt, kind) => `<span style="display:inline-flex;gap:6px;align-items:center;flex-wrap:wrap;justify-content:center"><span style="white-space:nowrap;display:inline-flex">${kind==='old'?tag('Current','old'):tag('Home v3.1')}</span><span>${txt}</span></span>`;
const md = (t) => t.dark ? 'Obsidian' : 'Alabaster';
const ph = (t, inner, c, h = 780, kind) => nphone(t, inner, capn(c+' · '+md(t), kind), {h});
const mark = (m) => `<span style="font:700 10px/16px Inter;letter-spacing:.8px;text-transform:uppercase;padding:2px 8px;border-radius:999px;${m==='Keep'?'background:#C8E6C9;color:#1B5E20':m==='Remove'?'background:#FFDAD6;color:#93000A':'background:#FFE08A;color:#5C4200'}">${m}</span>`;
const inv = (t, inner, c, m, h = 780) => nphone(t, inner, `<span style="display:inline-flex;gap:6px;align-items:center;flex-wrap:wrap;justify-content:center">${mark(m)}<span>${c}</span></span>`, {h});
const kf = (t, k, c) => frame(t, stage(t,k), c, 360);

// ---------- boards ----------
const b1 = board('HV31.1','Home v3.1 · Current Welcome flow','Today: 4 pages in one PageView (onboarding_flow.dart), then the v3 tracking question, then Home with the "Just so you know" sheet. Each page marked keep, remove or merge. Full reasons in flow.md.',
  row([inv(AL,S.welcome(AL,0),'1 · Your money. Your rules. · first impression, offline promise','Keep'),
       inv(AL,S.welcome(AL,1),'2 · Private by design · 3 privacy facts, repeats page 1','Merge'),
       inv(AL,S.welcome(AL,2),'3 · Everything in one quiet place · 8+ modules','Remove'),
       inv(AL,S.welcome(AL,3),'4 · Make it yours · name, language, currency, theme (functional)','Keep'),
       inv(AL,track(AL,[]),'v3 · What do you want to track?','Keep'),
       inv(AL,home3(AL,{more:10,over:nudge(AL)}),'After Start my journey · Just so you know sheet on Home','Remove',820)].join(''),20)
  + `<div style="height:20px"></div>` + spec('Merge: page 2\'s promise (everything stays on this phone) moves into the Purpose subhead, where it explains why reading SMS is safe.\nNo permission, app lock or biometric step exists in onboarding today. SMS permission is asked from the Get started hero on Home (v2); app lock lives in More › Security. Both stay where they are.'));

const FLOW = (t) => row([ph(t,welcomeP(t),'1 · Welcome · unchanged except 3 dots'), ph(t,purpose(t),'2 · Purpose · new, rest frame'), ph(t,setupP(t),'Functional · Make it yours · unchanged fields'), ph(t,track(t,[0,1,4]),'3 · What do you want to track?'), ph(t,home3(t,{w:[budEmpty(t),evEmpty(t,'evEmptyMany')],more:8}),'Home · Budgets, Loans and EMIs, Subscriptions',1170), ph(t,home3(t,{more:10}),'Home · tracking skipped',820)].join(''),20);
const b2 = board('HV31.2','Home v3.1 · Final flow','Welcome → Purpose → Make it yours (functional) → What do you want to track? → Home. Three screens before Home plus the functional setup page. The PageView holds 3 pages, so the dots show 3. Skip on Welcome or Purpose goes to the tracking question, as in v3. No sheet opens on Home.',
  sub('Alabaster · Signature', FLOW(AL)) + sub('Obsidian · Signature', FLOW(OB)));

const KF = [['k1','K1 · 260 ms · SMS bubble in'],['k2','K2 · 1320 ms · bubble morphing into a card'],['k3','K3 · 1440 ms · transaction card formed'],['k4','K4 · 2050 ms · card moves up, account kinds appear'],['k5','K5 · 2640 ms · line drawn, Bank picked, Cash and Credit card fading'],['fin','K6 · 3190 ms · rest frame: Bank and Food']];
const b3 = board('HV31.3','Home v3.1 · Purpose animation','One story in 3.2 seconds: a bank SMS arrives, becomes a Kuber transaction, and lands in an account and a category. Plays once when the page opens, then rests on K6. Built from one AnimationController with Interval curves: moves, fades, scale, a container morph and two drawn lines. Full timing in storyboard.md.',
  [AL,OB].map(t=>sub('Keyframes · '+md(t), row(KF.map(([k,c])=>kf(t,k,c)).join(''),20))).join('')
  + sub('Reduced motion', row([AL,OB].map(t=>kf(t,'static','Single frame, no motion · '+md(t))).join('') + [AL,OB].map(t=>ph(t, purpose(t,'static'), 'Purpose, reduced motion', 860)).join(''),20), 'When the system asks for reduced motion (MediaQuery.disableAnimations), the stage shows this frame at once: SMS, arrow, transaction, account and category. Nothing moves.')
  + sub('Screen at each moment', row(KF.map(([k,c])=>ph(AL, purpose(AL,k), c.split(' · ').slice(0,2).join(' · '))).join(''),20)));

const b4 = board('HV31.4','Home v3.1 · What do you want to track?','Daily spending turned on only Balance Card and Income and Expense, which every user gets with the first transaction anyway. It is replaced by Budgets. Every chip now turns on a widget whose empty state names what the user picked, so "Kuber adds the matching widgets to your Home" holds for each one.',
  sub('States', row([AL,OB].map(t=>ph(t,track(t,[]),'Nothing picked')+ph(t,track(t,[0,1,4]),'3 picked')).join(''),20))
  + sub('What each chip turns on, empty state', row([[ 'Budgets', t=>budEmpty(t)],['Loans and EMIs only', t=>evEmpty(t,'evEmptyLoans')],['Investments and SIPs only', t=>evEmpty(t,'evEmptyInvest')],['Money lent or borrowed only', t=>evEmpty(t,'evEmptyLedger')],['Subscriptions only', t=>evEmpty(t,'evEmptySubs')],['2 or more of the last four', t=>evEmpty(t,'evEmptyMany')]].map(([c,fn],i)=>{ const t = i%2?OB:AL; return frame(t, fn(t), c+' · '+md(t)); }).join(''),20), 'Budget Snapshot gets a new empty state (it had none). Upcoming Events keeps its layout; only the line changes with the picks. Empty-state actions stay hidden while Get started is on screen.'));

const contrast = [];
for (const f of FAM) for (const m of ['light','dark']) { const t = T(f+'_'+m);
  contrast.push({t, name:t.name, mode:m==='light'?'Alabaster':'Obsidian', sms:CR(t.on,t.c3), smsMeta:CR(t.onv,t.c3), line:CR(t.p,t.bg), chip:CR(t.osc,t.sc), lbl:CR(t.onv,t.bg)}); }
const ok = (c) => c.sms>=4.5 && c.smsMeta>=4.5 && c.line>=3 && c.chip>=4.5 && c.lbl>=4.5;
const b5 = board('HV31.5','Home v3.1 · Themes','The Purpose screen at rest and its reduced-motion frame in all 7 palettes, light and dark. Targets: SMS text and labels 4.5:1, drawn lines 3:1 against the background. Figures from tokens/palettes.json.',
  ['light','dark'].map(m=>sub(m==='light'?'Alabaster':'Obsidian', row(FAM.map(f=>{ const c = contrast.find(x=>x.t.key===f+'_'+m); return nphone(c.t, purpose(c.t), `${c.name}<br><span style="font-family:${MONO}">SMS ${fx(c.sms)} · line ${fx(c.line)} · ${ok(c)?'Pass':'Check'}</span>`, {h:780}); }).join(''),20)
   + `<div style="height:20px"></div>` + row(FAM.map(f=>{ const c = contrast.find(x=>x.t.key===f+'_'+m); return frame(c.t, stage(c.t,'static'), `${c.name} · reduced motion`, 360); }).join(''),20))).join(''));

const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="../support.js"></script>
</head>
<body>
<x-dc>
${HELMET}
<div style="padding:48px 56px 80px">
<header style="margin:0 0 40px;max-width:920px"><div style="font:600 12px/16px 'JetBrains Mono',monospace;letter-spacing:.8px;color:#5B5E66;text-transform:uppercase">Kuber · Home v3.1</div><h1 style="margin:8px 0 8px;font:700 36px/44px Inter;letter-spacing:-.5px;color:#1A1B20">Home v3.1 · a shorter Welcome</h1><p style="margin:0;font:400 15px/24px Inter;color:#44474F;text-wrap:pretty">Built on Home v3; where they differ, Home v3.1 wins. The module grid and the privacy page go. One animated Purpose screen says what Kuber is for: note every expense, and let bank SMS do most of the work. Home v3 behaviour, the bottom nav and the setup page are unchanged. Specs next to this file: flow.md, storyboard.md, changelog.md, widget-inventory.md, copy.md, open-decisions.md.</p></header>
${b1}${b2}${b3}${b4}${b5}
</div>
</x-dc>
</body>
</html>
`;

let cmd = `# Home v3.1 · copy\n\nEvery new and changed string in Home v3.1. English source. Keys are \`homeV31_\` + the key below, in every ARB file (see open-decisions.md 9). Placeholders in braces; no string is built from pieces; ₹ with Indian grouping comes from the existing currency formatter except inside the demo SMS, which is fixed text. No em dashes. Short sentences, no idioms.\n`;
for (const r of COPY) { if (r[0]==='#') { cmd += `\n## ${r[1]}\n\n| Key | English | Notes |\n|---|---|---|\n`; continue; }
  cmd += `| \`homeV31_${r[0]}\` | ${r[1].replace(/\|/g,'\\|')} | ${r[2]} |\n`; }
let ctab = `| Theme | Mode | SMS text (onSurface on surfaceContainerHigh) | SMS sender line (onSurfaceVariant on surfaceContainerHigh) | Drawn line (primary on surface) | Selected chip | Caps labels (onSurfaceVariant on surface) | Result |\n|---|---|---|---|---|---|---|---|\n`;
for (const c of contrast) ctab += `| ${c.name} | ${c.mode} | ${fx(c.sms)} | ${fx(c.smsMeta)} | ${fx(c.line)} | ${fx(c.chip)} | ${fx(c.lbl)} | ${ok(c)?'Pass':'Check'} |\n`;
return { html, copyMd: cmd, contrastMd: ctab, fails: contrast.filter(c=>!ok(c)).map(c=>c.name+' '+c.mode) };
