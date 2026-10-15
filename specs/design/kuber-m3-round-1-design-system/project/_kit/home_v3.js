// Home v3 generator, built on Home v2. new Function('K','S','V2', src)(K,S,V2) -> { html, copyMd, contrastMd }
// V2 = helpers from _kit/home_v2.js (gsCard, sgCard, E, editBlock, frame, sub, s ...). home-v2 files are never written.
const {T,ty,caps,num,ic,a,card,group,lrow,chev,btn,secH,nav,fade,nphone,board,row,spec,swatchPanel,snack,sw,hdr,tag,MONO,chip,cb,sheet,cat,lin,handle} = K;
const WG = S.W;
const {gsCard,sgCard,E,editBlock,frame,sub,OB,AL,FAM,CR,fx,HELMET} = V2;
const s2 = V2.s;

// ---------- copy (single source; home-v3/copy.md is generated from this) ----------
const COPY = [
['#','Welcome: what do you want to track?'],
['trkTitle','What do you want to track?','Screen title. Also the title of the same sheet in Edit Home Widgets.'],
['trkBody','Pick as many as you like. Kuber adds the matching widgets to your Home. You can change this later.','Body under the title.'],
['trkDaily','Daily spending','Filter chip.'],
['trkLoans','Loans and EMIs','Filter chip.'],
['trkInvest','Investments and SIPs','Filter chip.'],
['trkLedger','Money lent or borrowed','Filter chip.'],
['trkSubs','Subscriptions','Filter chip.'],
['#','Edit Home Widgets'],
['edTrackTitle','What you track','First row. Opens the What do you want to track sheet.'],
['edTrackSub','{count, plural, =0{Nothing picked} =1{1 picked} other{# picked}}','Row subtitle. count = welcome choices picked.'],
['edTrackNote','Widgets for what you pick turn on now, even before they have data.','Under the chips in the sheet.'],
['edShowAllTitle','Show all widgets','Second row.'],
['edShowAllSub','Turn on every widget now, even before it has data','Row subtitle.'],
['edShowAllAct','Show all','Tonal button in the row. Turns every switch in the list on. Applies on Save changes.'],
['edShowAllDone','All widgets are on. Save to keep them.','Row subtitle after Show all, until Save. The button is hidden.'],
['edAutoFirst','Turns on with your first transaction or account','Row subtitle while waiting: Balance Card, Bank Accounts, Income and Expense.'],
['edSecSetup','Turns on after Get started','Section header for SMS Import and Quick Add.'],
['edSetupRow','Turns on when Get started is done','Row subtitle while waiting: SMS Import, Quick Add.'],
['#','Accounts from SMS'],
['accFoundOne','We found {bank} in your SMS. Add it as an account?','Title, one account found. bank = short bank name from the sender table, e.g. HDFC.'],
['accFoundTwo','We found {bank1} and {bank2} in your SMS. Add them as accounts?','Title when the accounts found belong to exactly 2 banks (the list can hold 3 or more rows, e.g. a bank account and a card from the same bank).'],
['accFoundMany','{count, plural, other{We found # accounts in your SMS. Add them?}}','Title when they belong to 1 bank with 2 or more accounts, or to 3 or more banks. count is 2 or more.'],
['accBody','Kuber will match new bank SMS to these accounts. Balances start at zero until you set them.','Body under the title.'],
['accRowBank','Bank account · ending {last4}','Row subtitle.'],
['accRowBankNoNum','Bank account','Row subtitle when the SMS has no account number.'],
['accRowCard','Credit card · ending {last4}','Row subtitle.'],
['accRowCardNoNum','Credit card','Row subtitle when the SMS has no card number.'],
['accNameCard','{bank} Credit Card','Default name for a new card account. bank = short bank name. The user can rename it.'],
['accMoveNote','{count, plural, =1{1 imported transaction moves to its new account.} other{# imported transactions move to their new accounts.}}','Under the list. Counts only selected rows. Hidden at 0.'],
['accAdd','{count, plural, =0{Add accounts} =1{Add account} other{Add # accounts}}','Filled button. Disabled at 0.'],
['accAddedSnack','{count, plural, =1{Account added.} other{# accounts added.}}','Snackbar after adding (existing timed snackbar).'],
['#','Credit card billing date (follow-up after adding)'],
['ccProgress','Card {index} of {total}','Eyebrow. Only when 2 or more cards were added.'],
['ccDayLabel','Statement day','Section header above the day grid.'],
['ccFromSms','Kuber found this day in your SMS.','Under the grid when the day is prefilled.'],
['ccSkip','Skip for now','Text button. The credit card suggestion can still ask later.'],
];
const CP = {}; for (const r of COPY) if (r[0] !== '#') CP[r[0]] = r[1];
const fmt = (x, v) => x.replace(/\{(\w+), plural, ((?:=\d+\{[^{}]*\}\s*)*)other\{([^{}]*)\}\}/g, (m, n, ex, other) => { const hit = [...ex.matchAll(/=(\d+)\{([^{}]*)\}/g)].find(e => +e[1] == v[n]); return (hit ? hit[2] : other).replace(/#/g, v[n]); })
  .replace(/\{(\w+)\}/g, (m, n) => v[n] !== undefined ? v[n] : m);
const s = (k, v = {}) => { const x = CP[k]; if (x === undefined) throw new Error('missing copy ' + k); return fmt(x, v); };
for (const r of COPY) if (r[1] && /[—–]/.test(r[1])) throw new Error('dash in copy ' + r[0]);

// ---------- welcome: what do you want to track ----------
const TRK = [['trkDaily','payments'],['trkLoans','account_balance'],['trkInvest','show_chart'],['trkLedger','handshake'],['trkSubs','event_repeat']];
const wrapT = (h) => h.split('white-space:nowrap;overflow:hidden;text-overflow:ellipsis').join('');
const chips = (t, sel) => `<div style="display:flex;flex-wrap:wrap;gap:12px 8px">${TRK.map(([k,i],j)=>wrapT(chip(t,s(k),{sel:sel.includes(j),icon:i}))).join('')}</div>`;
const skipBar = (t) => `<div style="height:56px;flex:none;display:flex;align-items:center;justify-content:flex-end;padding:0 8px">${btn(t,'Skip',{kind:'text'})}</div>`;
const welcome = (t, sel = []) => skipBar(t) + `<div style="flex:1;display:flex;flex-direction:column;padding:24px 20px 0;gap:12px"><div style="${ty('hM',t.on,'text-wrap:pretty')}">${s('trkTitle')}</div><div style="${ty('bL',t.onv,'text-wrap:pretty')}">${s('trkBody')}</div><div style="margin-top:20px">${chips(t,sel)}</div></div><div style="flex:none;padding:12px 20px 24px;display:flex">${btn(t,'Continue',{size:'l',full:1,trail:'arrow_forward',kind:sel.length?'filled':'disabled'})}</div>`;

// ---------- Home ----------
const home3 = (t, o) => S.homeHeader(t,{badge:o.badge||''}) + `<div style="flex:1;overflow:hidden;position:relative"><div style="padding:0 20px 120px;display:flex;flex-direction:column;gap:28px">${[S.greeting(t), o.slot||'', ...(o.w||[]), editBlock(t,o.more)].filter(Boolean).join('')}</div></div>` + fade(t) + nav(t,0) + (o.over||'');
const BAL = (t) => WG.balance(t,{month:'October'});
const ACCW = [['#3B82F6','account_balance','HDFC Bank','Bank','Available','₹82,410'],['#A855F7','credit_card','HDFC Credit Card','Credit Card','Outstanding','₹18,400',.18],['#0EA5E9','account_balance','SBI','Bank','Available','₹24,150']];
const accW = (t) => `<div>${secH(t,'Accounts',`<span style="${ty('lL',t.p)}">View all</span>`)}<div style="display:flex;gap:12px;overflow:hidden">${ACCW.map(([c,i,n,ty_,l,v,u])=>card(t,`<div style="display:flex;gap:12px;align-items:center">${cat(t,c,i,{s:36,g:20})}<div style="min-width:0"><div style="${ty('tS',t.on,'white-space:nowrap;overflow:hidden;text-overflow:ellipsis')}">${n}</div><div style="${ty('bS',t.onv)}">${ty_}</div></div></div><div style="${ty('bS',t.onv,'margin-top:16px')}">${l}</div><div style="${ty('tL',t.on,num)}">${v}</div>${u?`<div style="margin-top:8px">${lin(t,u)}</div><div style="display:flex;justify-content:space-between;margin-top:4px;${ty('lS',t.onv,num)}"><span>18% used</span><span>₹1,00,000 limit</span></div>`:''}`,{ex:'width:200px;flex:none'})).join('')}</div></div>`;

// ---------- accounts from SMS ----------
const ACC = {hdfc:['#3B82F6','account_balance','HDFC Bank','accRowBank','4821'], card:['#A855F7','credit_card','HDFC Credit Card','accRowCard','7710'], sbi:['#0EA5E9','account_balance','SBI','accRowBank','0937']};
const accInner = (t, st) => { const keys = st==='one'?['hdfc']:['hdfc','card','sbi']; const off = st==='partial'?['card']:[]; const n = keys.length-off.length;
  const title = st==='one' ? s('accFoundOne',{bank:'HDFC'}) : s('accFoundTwo',{bank1:'HDFC',bank2:'SBI'});
  const rows = keys.map(k=>{ const [c,i,nm,sk,l4] = ACC[k]; return wrapT(lrow(t,{lead:cat(t,c,i),title:nm,sub:s(sk,{last4:l4}),trail:st==='one'?'':cb(t,!off.includes(k))})); });
  const move = st==='one'?4:st==='partial'?9:12;
  return `<div style="display:flex;flex-direction:column;gap:16px"><div style="display:flex;flex-direction:column;gap:4px"><div style="${ty('tL',t.on,'text-wrap:pretty')}">${title}</div><div style="${ty('bM',t.onv,'text-wrap:pretty')}">${s('accBody')}</div></div>${group(t,rows)}<div style="${ty('bS',t.onv,'text-wrap:pretty')}">${s('accMoveNote',{count:move})}</div><div style="display:flex;flex-direction:column;gap:8px;margin-top:4px">${btn(t,s('accAdd',{count:n}),{size:'l',full:1})}${btn(t,s2('sgNotNow'),{kind:'text',size:'l'})}</div></div>`; };
const DAYS = Array.from({length:31},(_,i)=>i+1);
const ccInner = (t, o = {}) => `<div style="display:flex;flex-direction:column;gap:16px"><div style="display:flex;flex-direction:column;gap:4px">${o.multi?`<div style="${caps(t.onv)}">${s('ccProgress',{index:1,total:2})}</div>`:''}<div style="${ty('tL',t.on,'text-wrap:pretty')}">${s2('sgCcTitle',{card:'HDFC Credit Card'})}</div><div style="${ty('bM',t.onv,'text-wrap:pretty')}">${s2('sgCcBody')}</div></div>
<div>${secH(t,s('ccDayLabel'))}<div style="display:grid;grid-template-columns:repeat(7,44px);justify-content:space-between;row-gap:2px">${DAYS.map(d=>{ const on = o.pre && d===18; return `<div style="width:44px;height:44px;border-radius:999px;display:flex;align-items:center;justify-content:center;${on?'background:'+t.p+';':''}${ty('bL',on?t.op:t.on,num)}">${d}</div>`; }).join('')}</div>${o.pre?`<div style="${ty('bS',t.onv,'margin-top:8px')}">${s('ccFromSms')}</div>`:''}</div>
<div style="display:flex;flex-direction:column;gap:8px">${btn(t,'Save',{size:'l',full:1,kind:o.pre?'filled':'disabled'})}${btn(t,s('ccSkip'),{kind:'text',size:'l'})}</div></div>`;
const sheetPanel = (t, inner) => `<div style="background:${t.c1};border-radius:28px;padding:0 20px 24px;margin:-8px">${handle(t)}${inner}</div>`;
const accSheet = (t, st) => sheet(t,{body:accInner(t,st),mh:720,bp:'4px 20px 24px'});

// ---------- editor ----------
const edRow = (t, n, sub_, on) => wrapT(lrow(t,{lead:ic('drag_indicator',24,t.onv),title:n,sub:sub_,trail:sw(t,on)}));
const DATA = [['Balance Card','edAutoFirst'],['Bank Accounts','edAutoFirst'],['Income &amp; Expense','edAutoFirst'],['Money Stories','v2:edAutoStories'],['Spending Stats','v2:edAutoStats'],['Upcoming Events','v2:edAutoEvents'],['Budget Snapshot','v2:edAutoBudget'],['Kuber Notes','v2:edAutoNotes']];
const tx = (k) => k.startsWith('v2:') ? s2(k.slice(3)) : s(k);
const editor3 = (t, o = {}) => { const all = !!o.all;
  return hdr(t,{back:1,close:1,title:'Edit Home Widgets'}) + `<div style="flex:1;overflow:hidden;padding:0 20px;display:flex;flex-direction:column;gap:24px"><div style="${ty('bM',t.onv)}">Drag the handle to reorder. Toggle to show or hide.</div>
<div style="flex:none">${wrapT(group(t,[lrow(t,{lead:ic('checklist',24,t.onv),title:s('edTrackTitle'),sub:s('edTrackSub',{count:o.picked||0}),trail:chev(t)}), lrow(t,{lead:ic('select_all',24,t.onv),title:s('edShowAllTitle'),sub:all?s('edShowAllDone'):s('edShowAllSub'),trail:all?'':btn(t,s('edShowAllAct'),{kind:'tonal'})})]))}</div>
<div>${secH(t,s2('edSecAuto'))}<div style="${ty('bS',t.onv,'margin:-4px 0 8px;text-wrap:pretty')}">${s2('edAutoNote')}</div>${group(t,DATA.map(([n,k])=>edRow(t,n,tx(k),all)))}</div>
<div>${secH(t,s('edSecSetup'))}${group(t,[edRow(t,'Quick Add',s('edSetupRow'),all),edRow(t,'SMS Import',s('edSetupRow'),all)])}</div>
<div>${secH(t,s2('edSecMore'))}${group(t,[edRow(t,'Ask Kuber','Ask about your money, plus one-tap suggestions',all),edRow(t,'Recent Transactions','Latest activity at a glance',all)])}</div></div><div style="flex:none;padding:16px 20px 24px;background:${t.bg};border-top:1px solid ${t.olv}">${btn(t,'Save changes',{size:'l',full:1,kind:all?'filled':'disabled'})}</div>` + (o.over||''); };
const trackSheet = (t, sel) => sheet(t,{mh:520,bp:'4px 20px 24px',body:`<div style="display:flex;flex-direction:column;gap:16px"><div style="${ty('tL',t.on)}">${s('trkTitle')}</div>${chips(t,sel)}<div style="${ty('bS',t.onv,'text-wrap:pretty')}">${s('edTrackNote')}</div><div style="display:flex;margin-top:8px">${btn(t,'Done',{size:'l',full:1})}</div></div>`});

// ---------- board helpers ----------
const capn = (txt) => `<span style="display:inline-flex;gap:6px;align-items:center;flex-wrap:wrap;justify-content:center">${tag('Home v3')}<span>${txt}</span></span>`;
const md = (t) => t.dark ? 'Obsidian' : 'Alabaster';
const ph = (t, inner, c, h) => nphone(t, inner, capn(c+' · '+md(t)), {h});
const both = (fn, c) => [AL,OB].map(t=>frame(t, fn(t), c+' · '+md(t))).join('');

// ---------- boards ----------
const SCREENS = [
  ['Welcome · what do you want to track?', 780, t=>welcome(t,[0,1,4])],
  ['Day 1 · welcome skipped', 820, t=>home3(t,{slot:gsCard(t,'fresh'), more:10})],
  ['Day 1 · Daily spending, Loans and EMIs, Subscriptions', 1340, t=>home3(t,{slot:gsCard(t,'fresh'), w:[E.balance(t), WG.chart(t,{empty:1}), WG.events(t,{empty:1})], more:7})],
  ['After the first SMS import · accounts prompt', 860, t=>home3(t,{slot:gsCard(t,'one'), w:[BAL(t), WG.chart(t)], more:7, over:accSheet(t,'many')})],
  ['Day 3 · first few transactions', 1590, t=>home3(t,{slot:gsCard(t,'two'), w:[BAL(t), WG.stories(t), accW(t), WG.chart(t)], more:6})],
  ['After graduation', 2180, t=>home3(t,{slot:sgCard(t,'recurring'), w:[BAL(t), WG.stories(t), WG.stats(t), WG.quick(t), WG.sms(t), accW(t), WG.chart(t), WG.events(t)], more:2, badge:'1'})],
];
const scrRow = (t) => row(SCREENS.map(([c,h,fn])=>ph(t, fn(t), c, h)).join('') + `<div style="width:2px;align-self:stretch;background:#DCDCE2;margin:0 8px"></div>` + nphone(t, S.home(t), `<span style="display:inline-flex;gap:6px;align-items:center">${tag('Unchanged','old')}<span>Existing user · ${md(t)}</span></span>`, {h:1240}), 20);

const b1 = board('HV3.1','Home v3 · Screens','Six Home v3 moments for a new install, then the existing-user Home for reference (unchanged, same builder as Screen 2 - Home, cropped to its first 1240px). Day 1 shows only Get started. Widgets join quietly as data arrives: no labels, no celebration. Recent transactions is no longer on Home; it lives in the History tab. The bottom nav is unchanged.',
  sub('Alabaster · Signature', scrRow(AL), 'Skipping the welcome question gives the Get started card alone. Picking choices turns on their widgets in empty state. The first SMS import adds transactions, so Balance Card and Income and Expense turn on, and the accounts prompt offers the banks it found. By day 3 Money Stories and the new accounts are on. After graduation the top slot holds one suggestion, and SMS Import and Quick Add join Home for good.')
  + sub('Obsidian · Signature', scrRow(OB)));

const b2 = board('HV3.2','Home v3 · Welcome: what do you want to track?','One screen after the Welcome flow, before Home. Skippable from the top bar. Multi-select filter chips. Continue is enabled after the first pick. Skip and Continue with no change both give the day-1 Home with Get started only. Not shown on the Welcome Tour replay.',
  sub('States', row([AL,OB].map(t=>ph(t, welcome(t,[]), 'Nothing picked', 780)+ph(t, welcome(t,[0,1,4]), '3 picked', 780)).join(''),20))
  + sub('What each choice does', spec('Daily spending          → Balance Card, Income & Expense on (empty state). Lowers: Budget, Quick Add voice.\nLoans and EMIs          → Upcoming Events on. Lowers: Loans.\nInvestments and SIPs    → Upcoming Events on. Lowers: Investments.\nMoney lent or borrowed  → Upcoming Events on. Lowers: Lend and borrow.\nSubscriptions           → Upcoming Events on. Lowers: Recurring.\n\nFull table in widget-inventory.md › Welcome choices. Suggestion order in suggestion-rules.md › 6.')));

const b3 = board('HV3.3','Home v3 · Accounts from SMS','SMS import today only matches messages to accounts that already exist (AccountMatcher: suffix, learned sender, bank name in the account name). Nothing creates accounts, so this is a new prompt. It opens over Home when the user comes back from SMS import and the scan found banks or cards with no matching account. One tap adds everything selected.',
  sub('One found', row(both(t=>sheetPanel(t,accInner(t,'one')),'1 account · no checkbox'),20))
  + sub('Several found', row(both(t=>sheetPanel(t,accInner(t,'many')),'3 accounts from 2 banks · all selected')+frame(AL,sheetPanel(AL,accInner(AL,'partial')),'One deselected · Alabaster'),20), 'Every row starts selected. The title names the banks when there are exactly two; with one bank and several accounts, or three or more banks, it uses the count (accFoundMany). Transactions already imported from these senders into a starter account (Bank, Credit Card) move to the new account.')
  + sub('All already added', row([ph(AL, home3(AL,{slot:gsCard(AL,'one'), w:[BAL(AL), WG.chart(AL)], more:7}), 'Every bank found already has an account · no prompt', 1270)].join(''),20), 'Nothing is shown. Home looks exactly as it would without the prompt.')
  + sub('Credit card follow-up', row(both(t=>sheetPanel(t,ccInner(t,{pre:1})),'Statement day found in SMS · prefilled')+frame(OB,sheetPanel(OB,ccInner(OB,{multi:1})),'2 cards added · no day found · Obsidian'),20), 'Opens right after Add, once per credit card that was added. Save writes billingCycleDay. Skip for now leaves it empty; the v2 credit card suggestion can still ask later.')
  + sub('After adding', row([AL,OB].map(t=>frame(t, snack(t,{msg:s('accAddedSnack',{count:3}),p:.7}), 'Existing timed snackbar · '+md(t))).join(''),20)));

const blk = (txt, k) => `<div style="padding:10px 14px;border-radius:12px;font:500 13px/18px Inter;${k==='slot'?'background:#D8E2FF;color:#00429B':k==='off'?'border:1.5px dashed #C4C6CF;color:#6B6E76':k==='new'?'background:#FFFFFF;border:1.5px solid #00429B;color:#1A1B20':'background:#FFFFFF;border:1px solid #DCDCE2;color:#1A1B20'}">${txt}</div>`;
const pcol = (title, items) => `<div style="width:236px;display:flex;flex-direction:column;gap:8px"><div style="font:600 13px/20px Inter;color:#1A1B20;margin-bottom:4px">${title}</div>${items.map(([x,k])=>blk(x,k)).join('')}</div>`;
const b4 = board('HV3.4','Home v3 · How Home grows','Each column adds to the one before. Outlined blocks are what that moment adds. Every feature stays reachable from the bottom nav and the More tab from day 1; gating only decides what sits on Home.',
  row([pcol('Day 1 · skipped',[['Greeting',''],['Top slot · Get started','slot'],['Edit widgets + count line','']]),
       pcol('Day 1 · with choices',[['Greeting',''],['Top slot · Get started','slot'],['Widgets for the choices, empty state','new'],['Edit widgets + count line','']]),
       pcol('First transaction or account',[['Greeting',''],['Top slot · Get started','slot'],['Balance Card','new'],['Bank Accounts','new'],['Income &amp; Expense','new'],['Edit widgets + count line','']]),
       pcol('Get started done',[['Greeting',''],['Top slot · one suggestion','slot'],['Balance Card and the rest',''],['Quick Add','new'],['SMS Import (permanent)','new'],['Edit widgets + count line','']]),
       pcol('Later · v2 triggers',[['Money Stories · first story','new'],['Spending Stats · 7 days of spending','new'],['Upcoming Events · first EMI, SIP, reminder','new'],['Budget Snapshot · first budget','new'],['Kuber Notes · first note','new'],['Not on Home by default: Recent Transactions, Ask Kuber','off']])].join(''),20)
  + `<div style="height:24px"></div>` + spec('Widgets insert at their catalog position with the normal list insert. No "New on your Home" pill, no reason line, no snackbar.\nWhile Get started is on screen, SMS Import and Quick Add stay hidden: the card\'s hero and secondary actions cover them.\nAsk Kuber reaches Home only as a suggestion (about 20 transactions). Manage categories stays in More.'));

const b5 = board('HV3.5','Home v3 · Home customization','Edit Home Widgets gains two rows at the top: What you track (the welcome choices, editable any time) and Show all widgets (for users who want the full dashboard now). Waiting widgets are grouped by what turns them on.',
  sub('Bottom of Home and the editor', row([frame(AL, editBlock(AL,10), 'Bottom of Home, day 1 skipped · Alabaster'), ph(AL, editor3(AL,{picked:0}), 'Edit Home Widgets · day 1', 1640), ph(OB, editor3(OB,{picked:0,all:1}), 'After Show all, before Save', 1640), ph(AL, editor3(AL,{picked:3,over:trackSheet(AL,[0,1,4])}), 'What you track sheet', 900)].join(''),20), 'Show all turns every switch on; Save changes applies it like any other edit, and nothing is automatic after that. The What you track sheet uses the welcome chips; Done turns on the widgets for new picks (they show on Save). Removing a pick hides nothing. The pinned Suggestions row from v2 still appears once Get started has graduated.'));

const contrast = [];
for (const f of FAM) for (const m of ['light','dark']) { const t = T(f+'_'+m);
  contrast.push({t, name:t.name, mode:m==='light'?'Alabaster':'Obsidian', chipSel:CR(t.osc,t.sc), chipOff:CR(t.onv,t.bg), check:CR(t.p,t.c2), day:CR(t.op,t.p), btn:CR(t.op,t.p)}); }
const ok = (c) => c.chipSel>=4.5 && c.chipOff>=4.5 && c.check>=3 && c.day>=4.5;
const b6 = board('HV3.6','Home v3 · Themes','The new screen and the new sheet in all 7 palettes, light and dark. Targets: chip labels 4.5:1 (selected onSecondaryContainer on secondaryContainer, unselected onSurfaceVariant on surface), checkbox 3:1 (primary on surfaceContainer), selected statement day 4.5:1 (onPrimary on primary). The Get started hero is unchanged from v2 (HV2.9). Figures from tokens/palettes.json.',
  ['light','dark'].map(m=>sub(m==='light'?'Alabaster':'Obsidian', row(FAM.map(f=>{ const c = contrast.find(x=>x.t.key===f+'_'+m); return nphone(c.t, welcome(c.t,[0,1,4]), `${c.name}<br><span style="font-family:${MONO}">chip ${fx(c.chipSel)} / ${fx(c.chipOff)} · ${ok(c)?'Pass':'Check'}</span>`, {h:780}); }).join(''),20)
   + `<div style="height:20px"></div>` + row(FAM.map(f=>{ const c = contrast.find(x=>x.t.key===f+'_'+m); return frame(c.t, sheetPanel(c.t, accInner(c.t,'partial')), `${c.name}<br><span style="font-family:${MONO}">checkbox ${fx(c.check)} · day ${fx(c.day)}</span>`); }).join(''),20))).join(''));

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
<header style="margin:0 0 40px;max-width:920px"><div style="font:600 12px/16px 'JetBrains Mono',monospace;letter-spacing:.8px;color:#5B5E66;text-transform:uppercase">Kuber · Home v3</div><h1 style="margin:8px 0 8px;font:700 36px/44px Inter;letter-spacing:-.5px;color:#1A1B20">Home v3 · a quieter first run</h1><p style="margin:0;font:400 15px/24px Inter;color:#44474F;text-wrap:pretty">Built on Home v2; where they differ, Home v3 wins. Day 1 is the Get started card alone. One optional welcome question turns on widgets for what the user tracks. After the first SMS import Kuber offers to add the banks it found. Widgets join Home quietly as data arrives. Existing users keep today's Home. Every difference from v2 is listed in changelog.md; specs: widget-inventory.md, suggestion-rules.md, copy.md, open-decisions.md.</p></header>
${b1}${b2}${b3}${b4}${b5}${b6}
</div>
</x-dc>
</body>
</html>
`;

let cmd = `# Home v3 · copy\n\nEvery new string in Home v3. English source. Keys are \`homeV3_\` + the key below; each key goes into every ARB file (see open-decisions.md 1 on the language count). Placeholders in braces; counts use ICU plurals; no string is built by joining other strings; bank and card names are passed in as values. No em dashes. Short sentences, no idioms, so they translate cleanly.\n`;
for (const r of COPY) { if (r[0]==='#') { cmd += `\n## ${r[1]}\n\n| Key | English | Notes |\n|---|---|---|\n`; continue; }
  cmd += `| \`homeV3_${r[0]}\` | ${r[1].replace(/\|/g,'\\|')} | ${r[2]} |\n`; }
let ctab = `| Theme | Mode | Selected chip | Unselected chip label | Checkbox | Selected day | Result |\n|---|---|---|---|---|---|---|\n`;
for (const c of contrast) ctab += `| ${c.name} | ${c.mode} | ${fx(c.chipSel)} | ${fx(c.chipOff)} | ${fx(c.check)} | ${fx(c.day)} | ${ok(c)?'Pass':'Check'} |\n`;
return { html, copyMd: cmd, contrastMd: ctab, fails: contrast.filter(c=>!ok(c)).map(c=>c.name+' '+c.mode) };
