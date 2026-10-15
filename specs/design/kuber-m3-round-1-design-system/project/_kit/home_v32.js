// Home v3.2 generator: "How Kuber works" tour. new Function('K','S','V2', src)(K,S,V2) -> { html, copyMd }
const {ty,caps,num,ic,a,card,group,lrow,chev,btn,ibtn,secH,nav,fade,nphone,board,row,spec,swatchPanel,tag,MONO,cat,sheet,snack,lin,lic} = K;
const chip = (t, l, o) => K.chip(t, l, o).split('overflow:hidden;text-overflow:ellipsis;min-width:0').join('');
const WG = S.W;
const {gsCard,editBlock,frame,sub,OB,AL,HELMET} = V2;

// ---------- copy ----------
const COPY = [
['#','Entry points'],
['tourName','How Kuber works','Tour name: Home card title, More row title, Welcome button label.'],
['tourCardBody','One habit: note every expense. Kuber does the rest.','Home card line.'],
['tourCardAct','Show me','Home card tonal button. Opens the tour at page 1.'],
['tourCardHideA11y','Hide this card','Close icon tooltip and semantics label.'],
['tourCardHidden','You can find How Kuber works in More.','Snackbar after the close icon, with homeV2_actUndo.'],
['tourMoreSub','A short tour of the main ideas','More › Tutorial row subtitle.'],
['#','Tour chrome'],
['tourNext','Next','Primary button, pages 1 to 4.'],
['tourStart','Start using Kuber','Primary button on page 5 when opened from Welcome. Finishes onboarding and opens Home.'],
['tourPageA11y','Page {page} of {total}','Semantics label on the dots.'],
['#','Page 1 · Note it'],
['p1Title','Note every expense. See where it goes.','Headline. Same string as the v3.1 Purpose screen, which now uses this key (homeV31_purTitle retired). 7 words: kept as the brief asks, see open-decisions 1.'],
['p1SubSms','Even the small ones. Bank SMS add most of them for you.','Subhead when the currency is INR.'],
['p1SubQuick','Even the small ones. Quick Add takes a few seconds.','Subhead for any other currency (SMS import is India only).'],
['p1Try','Add a transaction','Try it. Opens Add transaction.'],
['qaLabel','Quick Add','Small caps label above the demo Quick Add field.'],
['qaText','{amount} food delivery','Demo text typed into Quick Add. amount = sample amount without the symbol (250, or 12.50).'],
['qaTag','Added with Quick Add','Demo source line under the transaction, non-INR version.'],
['p1A11yQuick','A Quick Add entry turns into a Food transaction in your Bank account.','Animation semantics, non-INR version. INR uses homeV31_purA11y.'],
['#','Page 2 · Organize it'],
['p2Title','Everything lands in place.','Headline.'],
['p2Sub','Each expense goes to an account and a category. Balances update on their own.','Subhead.'],
['p2Try','Open Accounts','Try it. Opens More › Accounts.'],
['p2Balance','Balance','Label above a bank or cash balance in the animation.'],
['p2Due','Due','Label above the credit card amount in the animation.'],
['p2Groceries','Groceries','Demo transaction and its category.'],
['p2Auto','Auto ride','Demo transaction.'],
['p2Transport','Transport','Demo category.'],
['p2Movie','Movie tickets','Demo transaction.'],
['p2Fun','Entertainment','Demo category.'],
['p2A11y','Three expenses move into Bank, Cash and Credit card, each with a category, and the balances update.','Animation semantics.'],
['#','Page 3 · Track everything'],
['p3Title','Nothing due slips by.','Headline.'],
['p3Sub','Subscriptions, EMIs, SIPs, money lent, budgets and reminders in one place.','Subhead.'],
['p3Try','Open Upcoming events','Try it. Opens More › Upcoming Events.'],
['p3Stream','Streaming plan','Demo row.'],
['p3Sub1','Subscription','Demo row type.'],
['p3Bill','Electricity bill','Demo row.'],
['p3Reminder','Reminder','Demo row type.'],
['p3Lent','Rahul owes you','Demo row. Sample name.'],
['p3LentType','Lent','Demo row type.'],
['p3Emi','Home loan EMI','Demo row.'],
['p3Loan','Loan','Demo row type.'],
['p3Sip','Index fund SIP','Demo row.'],
['p3Inv','Investment','Demo row type.'],
['p3Budget','Food budget','Demo budget name.'],
['p3BudgetOf','{spent} of {limit}','Demo budget progress. Amounts formatted with the currency.'],
['p3A11y','Upcoming payments fill a timeline, then a food budget fills to 70%.','Animation semantics.'],
['#','Page 4 · See where it goes'],
['p4Title','Your spending, at a glance.','Headline.'],
['p4Sub','Charts by category and month. Filter your history in one tap.','Subhead.'],
['p4Try','Open Analytics','Try it. Opens the Analytics tab.'],
['p4Month','October','Demo month under the donut total. From the locale month names in the app.'],
['p4All','All','Demo filter chip.'],
['p4Food','Food','Demo filter chip and category.'],
['p4Coffee','Coffee','Demo history row.'],
['p4A11y','A chart shows spending by category and month, then a filter narrows the history to Food.','Animation semantics.'],
['#','Page 5 · Go further'],
['p5Title','Go further when you want.','Headline.'],
['p5Sub','Ask Kuber, Kuber Cards, Notes and calculators. Free to try.','Subhead. "Free to try": Ask Kuber, Cards and Notes have free limits; no prices in the tour.'],
['p5Try','Open Signature tools','Try it. Opens the More tab at the Signature section.'],
['p5Free','Free to try','Small status chip on the Ask Kuber, Kuber Cards and Kuber Notes tiles.'],
['p5Ask','Ask Kuber','Tile title.'],
['p5AskQ','Food this month?','Demo question, short so it fits one line.'],
['p5AskA','{amount} so far, 70% of your budget.','Demo answer.'],
['p5Cards','Kuber Cards','Tile title.'],
['p5Notes','Kuber Notes','Tile title.'],
['p5NoteName','Goa trip','Demo note title.'],
['p5Calc','Calculators','Tile title.'],
['p5CalcLine','SIP of {amount} a month, 10 years','Demo calculator input.'],
['p5A11y','Ask Kuber answers a question, a saved card turns over, a note adds up a trip, and a calculator shows a result.','Animation semantics.'],
];
const CP = {}; for (const r of COPY) if (r[0] !== '#') CP[r[0]] = r[1];
const s = (k, v = {}) => { const x = CP[k]; if (x === undefined) throw new Error('missing copy ' + k); return x.replace(/\{(\w+)\}/g, (m, n) => v[n] !== undefined ? v[n] : m); };
for (const r of COPY) if (r[1] && /[—–]/.test(r[1])) throw new Error('dash in copy ' + r[0]);
const V31 = {smsSender:'Your Bank', smsTime:'now', smsText:(c)=>`${c.f(250)} debited from A/c XX1234 at a food delivery app.`, txnName:'Food delivery', txnSub:'Food · Bank', txnTime:'Just now', txnTag:'From bank SMS', acc:'Account', catg:'Category', bank:'Bank', cash:'Cash', card:'Credit card', food:'Food', body:'Your bank SMS do most of the work, right on this phone.'};

// ---------- currency ----------
const inGroup = (n) => { const [i, d] = String(n).split('.'); const l3 = i.slice(-3), rest = i.slice(0, -3); return (rest ? rest.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' : '') + l3 + (d ? '.' + d : ''); };
const INR = {code:'INR', sym:'₹', f:(n)=>'₹'+inGroup(n), raw:(n)=>String(n), r:1};
const USD = {code:'USD', sym:'$', f:(n)=>'$'+Number(n).toLocaleString('en-US',{minimumFractionDigits:Number.isInteger(n)?0:2}), raw:(n)=>Number.isInteger(n)?String(n):Number(n).toFixed(2), r:0.05};
// sample amounts in INR; USD shows the converted, rounded sample (one non-INR proof)
const AM = (c, n) => c.code==='INR' ? n : Math.round(n*c.r*100)/100;

// ---------- shared ----------
const SW = 320, SH = 260;
const at = (x, y, inner, o = {}) => `<div style="position:absolute;left:${x}px;top:${y}px;width:${o.w?o.w+'px':'max-content'};${o.c?'transform:translateX(-50%)'+(o.sc?' scale('+o.sc+')':'')+';':o.sc?'transform:scale('+o.sc+');':''}opacity:${o.op??1};${o.ex||''}">${inner}</div>`;
const stageBox = (inner, h = SH) => `<div style="position:relative;width:${SW}px;height:${h}px;flex:none;align-self:center">${inner}</div>`;
const stat = (t, txt, bg, fg, mw) => `<span style="${ty('lM',fg||t.osc,'padding:2px 8px;border-radius:999px;background:'+(bg||t.sc)+';white-space:nowrap;display:inline-block;box-sizing:border-box;'+(mw?'max-width:'+mw+'px;overflow:hidden;text-overflow:ellipsis;':''))}">${txt}</span>`;
const amt = (t, v, role='tS', c) => `<span style="${ty(role,c||t.on,num+'white-space:nowrap')}">${v}</span>`;
const row3 = (t, o) => lrow(t,{h:o.tag?88:72,lead:cat(t,o.c,o.i),title:o.name,sub:o.sub,third:o.tag?`<div style="${ty('lM',t.p,'margin-top:2px')}">${o.tag}</div>`:'',trail:`<div style="text-align:right;display:flex;flex-direction:column;align-items:flex-end;gap:2px"><span style="${ty('tM',o.type==='income'?t.inc:t.exp,num+'white-space:nowrap')}">${o.type==='income'?'+':'−'}${o.amt}</span><span style="${ty('bS',t.onv,'white-space:nowrap')}">${o.time}</span></div>`});
const CATC = {food:['#EF4444','restaurant'], groc:['#22C55E','local_grocery_store'], trans:['#64748B','local_taxi'], fun:['#A855F7','movie'], other:['#F59E0B','more_horiz']};

// ---------- page 1 · Note it (v3.1 Purpose story, currency-aware) ----------
const X1 = {bank:47, cash:139, card:252};
const bubble = (t, c) => `<div style="width:280px;background:${t.c3};border-radius:20px 20px 20px 4px;padding:12px 16px;box-sizing:border-box"><div style="display:flex;gap:6px;align-items:center;margin-bottom:4px">${ic('sms',16,t.onv)}<span style="${ty('lM',t.onv,'white-space:nowrap')}">${V31.smsSender} · ${V31.smsTime}</span></div><div style="${ty('bM',t.on,'text-wrap:pretty')}">${V31.smsText(c)}</div></div>`;
const qa = (t, c, typed = 1) => { const full = s('qaText',{amount:c.raw(AM(c,250))}); const txt = typed===1?full:full.slice(0,Math.ceil(full.length*typed)); return `<div style="width:300px"><div style="${caps(t.onv,'margin:0 0 6px 4px')}">${s('qaLabel')}</div><div style="height:56px;border-radius:999px;background:${t.c3};display:flex;align-items:center;padding:0 4px 0 20px;box-sizing:border-box"><span style="flex:1;${ty('bL',t.on,'white-space:nowrap;overflow:hidden')}">${txt}<span style="display:inline-block;width:2px;height:20px;background:${t.p};vertical-align:middle;margin-left:1px"></span></span>${ibtn(t,'mic',{kind:'std',fg:t.onv})}</div></div>`; };
const tcard = (t, c, mode) => `<div style="width:${SW}px;background:${t.c2};border:1px solid ${t.olv};border-radius:20px;overflow:hidden;box-sizing:border-box">${row3(t,{c:'#EF4444',i:'restaurant',name:V31.txnName,sub:V31.txnSub,amt:c.f(AM(c,250)),time:V31.txnTime,tag:mode==='quick'?s('qaTag'):V31.txnTag})}</div>`;
const kchip = (t, k, sel) => { const m = {bank:[V31.bank,'account_balance'],cash:[V31.cash,'payments'],card:[V31.card,'credit_card'],food:[V31.food,'restaurant']}[k]; return chip(t,m[0],{icon:m[1],sel,nocheck:1,ic:sel?t.osc:t.p}); };
const vlines = (t, xs, y1, y2) => `<svg width="${SW}" height="${y2+4}" style="position:absolute;left:0;top:0;overflow:visible">${xs.map(([x,p])=>p?`<path d="M${x} ${y1} V${y2}" fill="none" stroke="${t.p}" stroke-width="2" stroke-linecap="round" stroke-dasharray="${y2-y1}" stroke-dashoffset="${((y2-y1)*(1-p)).toFixed(1)}"></path>`:'').join('')}</svg>`;
const lbl = (t, x, y, txt) => at(x, y, `<span style="${caps(t.onv,'white-space:nowrap')}">${txt}</span>`, {c:1});
const P1 = (t, k, c = INR) => { const mode = c.code==='INR' ? 'sms' : 'quick'; const o = 20; let h = '';
  const src = (y) => mode==='sms' ? at(20, y, bubble(t,c)) : at(10, y-14, qa(t,c, k==='k0'?0.45:1));
  if (k==='k0' || k==='k1') h = src(72+o);
  if (k==='k3') h = at(0, 72+o, tcard(t,c,mode));
  if (k==='k5' || k==='fin') h = at(0, 24+o, tcard(t,c,mode)) + vlines(t, [[X1.bank,1],[X1.card,k==='fin'?1:0]], 112+o, 152+o)
    + at(X1.bank, 152+o, kchip(t,'bank',1), {c:1}) + (k==='k5' ? at(X1.cash,152+o,kchip(t,'cash',0),{c:1,op:.38}) + at(X1.card,152+o,kchip(t,'card',0),{c:1,op:.38}) : at(X1.card,152+o,kchip(t,'food',1),{c:1}))
    + lbl(t, X1.bank, 194+o, V31.acc) + (k==='fin' ? lbl(t, X1.card, 194+o, V31.catg) : '');
  if (k==='static') { const top = mode==='sms' ? at(20, 0, bubble(t,c)) : at(10, -6, qa(t,c)); h = top + at(SW/2, 88, ic('arrow_downward',20,t.p), {c:1}) + at(0, 112, tcard(t,c,mode)) + vlines(t, [[X1.bank,1],[X1.card,1]], 200, 222) + at(X1.bank, 222, kchip(t,'bank',1), {c:1}) + at(X1.card, 222, kchip(t,'food',1), {c:1}); }
  return stageBox(h); };

// ---------- page 2 · Organize it ----------
const ACC2 = [['bank','#3B82F6','account_balance',V31.bank,'p2Balance',[43530,42900,42350],['p2Groceries','p2Groceries','groc',1180]],
              ['cash','#22C55E','payments',V31.cash,'p2Balance',[1290,1240,1200],['p2Auto','p2Transport','trans',90]],
              ['card','#A855F7','credit_card',V31.card,'p2Due',[8040,8400,8640],['p2Movie','p2Fun','fun',600]]];
const txPill = (t, c, [n,,,v], w = 92) => `<div style="width:${w}px;padding:6px 8px;border-radius:12px;background:${t.c3};box-sizing:border-box"><div style="${ty('lM',t.on,'white-space:nowrap;overflow:hidden;text-overflow:ellipsis')}">${s(n)}</div><div style="${ty('lM',t.exp,num)}">−${c.f(AM(c,v))}</div></div>`;
const P2 = (t, k, c = INR) => { const st = {k1:0,k2:1,fin:2,static:2}[k]; let h = '';
  ACC2.forEach(([id,col,icn,name,lab,bal,tx],i)=>{ const x = i*108;
    h += at(x, 64, `<div style="width:104px;height:196px;background:${t.c2};border:1px solid ${t.olv};border-radius:16px;padding:10px;box-sizing:border-box;display:flex;flex-direction:column;gap:6px">${cat(t,col,icn,{s:28,g:16})}<div style="${ty('tS',t.on,'white-space:nowrap')}">${name}</div><div><div style="${ty('bS',t.onv)}">${s(lab)}</div><div style="${ty('tS',t.on,num)}">${c.f(AM(c,bal[st]))}</div></div>${st>0?`<div style="display:flex;flex-direction:column;gap:4px;align-items:flex-start">${txPill(t,c,tx,82)}<span style="opacity:${st===1?.5:1};display:flex;max-width:82px">${stat(t,s(tx[1]),null,null,82)}</span></div>`:''}</div>`);
    if (st===0) h += at(x+6, 0, txPill(t,c,tx));
  });
  if (st===0) h += `<svg width="${SW}" height="64" style="position:absolute;left:0;top:0;overflow:visible">${[0,1,2].map(i=>`<path d="M${i*108+52} 50 V60" stroke="${t.olv}" stroke-width="2" stroke-linecap="round"></path>`).join('')}</svg>`;
  return stageBox(h); };

// ---------- page 3 · Track everything ----------
const TL = [['OCT','15','p3Stream','p3Sub1',649,'expense'],['OCT','18','p3Bill','p3Reminder',1450,'expense'],['OCT','20','p3Lent','p3LentType',1500,'income'],['NOV','5','p3Emi','p3Loan',24500,'expense'],['NOV','10','p3Sip','p3Inv',5000,'expense']];
const P3 = (t, k, c = INR) => { const n = {k1:2,k2:5,fin:5,static:5}[k], bud = {k1:0,k2:.3,fin:.7,static:.7}[k]; let h = '';
  h += `<svg width="${SW}" height="200" style="position:absolute;left:0;top:0;overflow:visible"><path d="M52 10 V${n===5?190:90}" stroke="${t.olv}" stroke-width="2" stroke-linecap="round"></path>${TL.slice(0,n).map((_,i)=>`<circle cx="52" cy="${20+i*40}" r="5" fill="${t.p}"></circle>`).join('')}</svg>`;
  TL.slice(0,n).forEach(([m,d,ti,ty_,v,tp],i)=>{ h += at(0, i*40, `<div style="width:${SW}px;height:40px;display:flex;align-items:center;gap:0"><div style="width:40px;text-align:center"><div style="${ty('lS',t.onv)}">${m}</div><div style="${ty('tS',t.on,num)}">${d}</div></div><div style="width:28px"></div><div style="flex:1;min-width:0"><div style="${ty('tS',t.on,'white-space:nowrap')}">${s(ti)}</div><div style="${ty('bS',t.onv)}">${s(ty_)}</div></div>${amt(t,(tp==='income'?'+':'')+c.f(AM(c,v)),'tS',tp==='income'?t.inc:t.on)}</div>`); });
  if (bud>0) h += at(0, 208, `<div style="width:${SW}px;opacity:${k==='k2'?.7:1}"><div style="display:flex;justify-content:space-between;margin-bottom:6px"><span style="${ty('tS',t.on)}">${s('p3Budget')}</span><span style="${ty('bS',t.onv,num+'white-space:nowrap')}">${s('p3BudgetOf',{spent:c.f(AM(c,Math.round(8000*bud))),limit:c.f(AM(c,8000))})}</span></div>${lin(t,bud)}</div>`);
  return stageBox(h); };

// ---------- page 4 · See where it goes ----------
const SL = [['food',5600],['groc',3400],['fun',2300],['trans',1900],['other',1800]];
const donutD = (t, p, c) => { const sz = 112, th = 14, r = (sz-th)/2, C = 2*Math.PI*r, tot = SL.reduce((x,y)=>x+y[1],0); let acc = 0; const lim = p*C;
  const segs = SL.map(([k,v])=>{ const L = v/tot*C - 3; const st = acc; acc += v/tot*C; const vis = Math.max(0, Math.min(L, lim-st)); return vis>0?`<circle cx="${sz/2}" cy="${sz/2}" r="${r}" fill="none" stroke="${t.tone(CATC[k][0]).fg}" stroke-width="${th}" stroke-dasharray="${vis.toFixed(1)} ${C}" stroke-dashoffset="${(-st).toFixed(1)}"></circle>`:''; }).join('');
  return `<div style="position:relative;width:${sz}px;height:${sz}px"><svg width="${sz}" height="${sz}" style="transform:rotate(-90deg);display:block"><circle cx="${sz/2}" cy="${sz/2}" r="${r}" fill="none" stroke="${t.c3}" stroke-width="${th}"></circle>${segs}</svg><div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;opacity:${p>=1?1:0}"><div style="${ty('tS',t.on,num)}">${c.f(AM(c,15000))}</div><div style="${ty('bS',t.onv)}">${s('p4Month')}</div></div></div>`; };
const BARS = [['Jul',13200],['Aug',16100],['Sep',14400],['Oct',15000]];
const barsD = (t, p) => `<div style="width:180px;height:112px;display:flex;align-items:flex-end;justify-content:space-between;padding:0 8px;box-sizing:border-box">${BARS.map(([m,v],i)=>`<div style="display:flex;flex-direction:column;align-items:center;gap:6px"><div style="width:20px;height:${(v/16100*80*p).toFixed(0)}px;border-radius:6px 6px 2px 2px;background:${i===3?t.p:t.pc}"></div><span style="${ty('lS',t.onv)}">${m}</span></div>`).join('')}</div>`;
const HL = [['food','Food delivery',250],['trans','p2Auto',90],['food','p4Coffee',120]];
const P4 = (t, k, c = INR) => { const dp = {k1:.45,k2:1,fin:1,static:1}[k], bp = {k1:0,k2:1,fin:1,static:1}[k], filt = k==='fin'||k==='static'; let h = '';
  h += at(0, 0, donutD(t,dp,c)) + at(140, 0, barsD(t,bp));
  if (k!=='k1') { h += at(0, 120, `<div style="display:flex;gap:8px">${chip(t,s('p4All'),{sel:!filt})}${chip(t,s('p4Food'),{sel:filt,icon:'restaurant',ic:t.p})}${chip(t,s('p2Transport'),{icon:'local_taxi',ic:t.p})}</div>`);
    const rows = HL.filter(r=>!filt||r[0]==='food');
    h += at(0, 162, `<div style="width:${SW}px;background:${t.c2};border:1px solid ${t.olv};border-radius:16px;overflow:hidden">${rows.map(([kk,n,v],i)=>`${i?`<div style="height:1px;background:${t.olv}"></div>`:''}<div style="height:31px;padding:0 12px;display:flex;align-items:center;gap:12px">${cat(t,CATC[kk][0],CATC[kk][1],{s:24,g:14})}<span style="flex:1;${ty('tS',t.on)}">${CP[n]?s(n):n}</span>${amt(t,'−'+c.f(AM(c,v)),'tS',t.exp)}</div>`).join('')}</div>`); }
  return stageBox(h); };

// ---------- page 5 · Go further ----------
const tile5 = (t, title, icn, inner, o = {}) => `<div style="width:156px;height:136px;box-sizing:border-box;padding:10px;border-radius:16px;background:${t.c2};border:${o.spot?'2px solid '+t.p:'1px solid '+t.olv};opacity:${o.dim?.45:1};${o.spot?'transform:scale(1.03);':''}display:flex;flex-direction:column;gap:4px"><div style="display:flex;align-items:center;gap:6px">${ic(icn,18,t.p,1)}<span style="flex:1;${ty('lL',t.on,'white-space:nowrap')}">${title}</span></div>${inner}</div>`;
const P5 = (t, k, c = INR) => { const spot = {k1:0,k2:1,fin:-1,static:-1}[k];
  const flip = k!=='k1';
  const ask = `<div style="align-self:flex-end;padding:4px 8px;border-radius:10px 10px 2px 10px;background:${t.sc};${ty('bS',t.osc,'white-space:nowrap')}">${s('p5AskQ')}</div><div style="${ty('bS',t.on,'text-wrap:pretty')}">${s('p5AskA',{amount:c.f(AM(c,5600))})}</div>`;
  const cardF = flip ? `<div style="height:52px;border-radius:10px;background:${t.pc};padding:6px 10px;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between"><span style="${ty('lS',t.opc)}">${V31.smsSender}</span><span style="${ty('tS',t.opc,num+'letter-spacing:1px;white-space:nowrap')}">•••• •••• 5678</span></div>` : `<div style="height:52px;border-radius:10px;background:${t.pc};padding:6px 10px;box-sizing:border-box;display:flex;align-items:center"><div style="width:24px;height:18px;border-radius:4px;background:${a(t.opc,.35)}"></div></div>`;
  const note = `<div>${stat(t,s('p5Free'))}</div><div style="${ty('tS',t.on)}">${s('p5NoteName')}</div><div style="${ty('bS',t.onv,num)}">${inGroup(12400)} + ${inGroup(2100)}</div><div style="${ty('tS',t.p,num)}">= ${inGroup(14500)}</div>`;
  const calc = `<div style="${ty('bS',t.onv,'text-wrap:pretty')}">${s('p5CalcLine',{amount:c.f(AM(c,5000))})}</div><div style="${ty('tM',t.on,num)}">${c.f(AM(c,1161695))}</div>`;
  const tiles = [[s('p5Ask'),'auto_awesome',ask,1],[s('p5Cards'),'credit_card',cardF+`<div>${stat(t,s('p5Free'))}</div>`,0],[s('p5Notes'),'sticky_note_2',note,0],[s('p5Calc'),'calculate',calc,0]];
  const h = `<div style="position:absolute;left:0;top:0;display:grid;grid-template-columns:156px 156px;gap:8px">${tiles.map(([ti,ic_,inn,free],i)=>tile5(t,ti,ic_,(i===0?`<div>${stat(t,s('p5Free'))}</div>`:'')+inn,{spot:spot===i,dim:spot>=0&&spot!==i})).join('')}</div>`;
  return stageBox(h, 280); };

// ---------- tour page ----------
const PAGES = [
  {n:1, fn:P1, title:'p1Title', sub:(c)=>c.code==='INR'?'p1SubSms':'p1SubQuick', tr:'p1Try'},
  {n:2, fn:P2, title:'p2Title', sub:()=>'p2Sub', tr:'p2Try'},
  {n:3, fn:P3, title:'p3Title', sub:()=>'p3Sub', tr:'p3Try'},
  {n:4, fn:P4, title:'p4Title', sub:()=>'p4Sub', tr:'p4Try'},
  {n:5, fn:P5, title:'p5Title', sub:()=>'p5Sub', tr:'p5Try'},
];
const dots = (t, i, n) => `<div style="display:flex;gap:8px;justify-content:center">${Array.from({length:n},(_,j)=>`<div style="width:${j===i?24:8}px;height:8px;border-radius:999px;background:${j===i?t.p:t.olv}"></div>`).join('')}</div>`;
const skipBar = (t, show = 1) => `<div style="height:56px;flex:none;display:flex;align-items:center;justify-content:flex-end;padding:0 8px">${show?btn(t,'Skip',{kind:'text'}):''}</div>`;
const tourPage = (t, pi, k = 'fin', o = {}) => { const P = PAGES[pi], c = o.c || INR, wel = o.from==='welcome';
  const primary = pi<4 ? s('tourNext') : (wel ? s('tourStart') : 'Done');
  return skipBar(t) + `<div style="flex:1;display:flex;flex-direction:column;justify-content:center;padding:0 20px;gap:12px">${P.fn(t,k,c)}<div style="${ty('hM',t.on,'margin-top:16px;text-wrap:pretty')}">${s(P.title)}</div><div style="${ty('bL',t.onv,'text-wrap:pretty')}">${s(P.sub(c))}</div>${wel?'':`<div style="display:flex;margin-top:4px">${btn(t,s(P.tr),{kind:'tonal',trail:'arrow_forward'})}</div>`}</div>`
    + `<div style="flex:none;padding:12px 20px 24px;display:flex;flex-direction:column;gap:16px">${dots(t,pi,5)}<div style="display:flex;gap:12px">${pi===0?'':`<div style="width:56px;height:56px;border-radius:999px;border:1px solid ${t.olv};box-sizing:border-box;display:flex;align-items:center;justify-content:center;flex:none">${ic('arrow_back',24,t.on)}</div>`}${btn(t,primary,{size:'l',full:1,trail:pi<4?'arrow_forward':null})}</div></div>`; };

// ---------- entry points ----------
const TRK = [['Budgets','savings'],['Loans and EMIs','account_balance'],['Investments and SIPs','show_chart'],['Money lent or borrowed','handshake'],['Subscriptions','event_repeat']];
const track = (t, sel = []) => skipBar(t) + `<div style="flex:1;display:flex;flex-direction:column;padding:24px 20px 0;gap:12px"><div style="${ty('hM',t.on,'text-wrap:pretty')}">What do you want to track?</div><div style="${ty('bL',t.onv,'text-wrap:pretty')}">Pick as many as you like. Kuber adds the matching widgets to your Home. You can change this later.</div><div style="margin-top:20px;display:flex;flex-wrap:wrap;gap:12px 8px">${TRK.map(([l,i],j)=>chip(t,l,{sel:sel.includes(j),icon:i})).join('')}</div><div style="margin-top:20px;margin-left:-12px;display:flex">${btn(t,s('tourName'),{kind:'text',icon:'play_circle'})}</div></div><div style="flex:none;padding:12px 20px 24px;display:flex">${btn(t,'Continue',{size:'l',full:1,trail:'arrow_forward',kind:sel.length?'filled':'disabled'})}</div>`;
const tourCard = (t) => card(t, `<div style="display:flex;gap:16px;align-items:flex-start"><div style="width:40px;height:40px;border-radius:12px;background:${t.sc};display:flex;align-items:center;justify-content:center;flex:none">${ic('play_circle',20,t.osc)}</div><div style="flex:1;min-width:0"><div style="${ty('tM',t.on)}">${s('tourName')}</div><div style="${ty('bM',t.onv,'margin-top:2px;text-wrap:pretty')}">${s('tourCardBody')}</div></div><div style="margin:-12px -12px 0 -8px">${ibtn(t,'close',{kind:'std',fg:t.onv})}</div></div><div style="display:flex;justify-content:flex-end;margin-top:12px">${btn(t,s('tourCardAct'),{kind:'tonal'})}</div>`);
const BAL = (t) => WG.balance(t,{month:'October'});
const homeNew = (t, slot) => S.homeHeader(t,{badge:''}) + `<div style="flex:1;overflow:hidden;position:relative"><div style="padding:0 20px 120px;display:flex;flex-direction:column;gap:28px">${[S.greeting(t), slot, BAL(t), WG.stories(t), WG.stats(t), WG.quick(t), WG.sms(t), WG.chart(t), editBlock(t,2)].join('')}</div></div>` + fade(t) + nav(t,0);
const homeOld = (t) => { const g = S.greeting(t); const h = S.home(t); if (!h.includes(g)) throw new Error('greeting'); return h.replace(g, g + tourCard(t)); };
const moreP = (t) => { let h = S.more(t,{top:1820}); const anchor = `title:'Welcome Tour'`; const row_ = lrow(t,{lead:lic(t,'auto_stories'),title:'Welcome Tour',trail:chev(t)}); if (!h.includes(row_)) throw new Error('more row');
  return h.replace(row_, row_ + `<div style="height:1px;background:${t.olv};margin-left:0px"></div>` + lrow(t,{lead:lic(t,'play_circle'),title:s('tourName'),sub:s('tourMoreSub'),trail:chev(t)})); };

// ---------- board ----------
const capn = (txt) => `<span style="display:inline-flex;gap:6px;align-items:center;flex-wrap:wrap;justify-content:center"><span style="white-space:nowrap;display:inline-flex">${tag('Home v3.2')}</span><span>${txt}</span></span>`;
const md = (t) => t.dark ? 'Obsidian' : 'Alabaster';
const ph = (t, inner, c, h = 780) => nphone(t, inner, capn(c+' · '+md(t)), {h});
const kf = (t, fn, k, c, cur) => frame(t, fn(t,k,cur||INR), c, 360);

const b1 = board('HV32.1','Home v3.2 · Entry points','Three ways in. The tour is never part of the required path. Rules for when each appears are in entry-points.md.',
  sub('a · Welcome, last page', row([AL,OB].map(t=>ph(t,track(t,[0,1,4]),'What do you want to track? · secondary text button')).join('') + ph(AL,tourPage(AL,0,'fin',{from:'welcome'}),'Opened from Welcome · no Try it') + ph(AL,tourPage(AL,4,'fin',{from:'welcome'}),'Page 5 from Welcome · Start using Kuber'),20), 'A text button under the chips, far from Continue and lower in emphasis. Chip choices are saved before the tour opens. Skip or back returns to this page; Start using Kuber finishes onboarding and opens Home.')
  + sub('b · One-time card on Home', row([ph(AL,homeNew(AL,tourCard(AL)),'New user, after Get started graduated · takes the top slot',1960), ph(OB,homeNew(OB,tourCard(OB)),'New user · Obsidian',1960), ph(AL,homeOld(AL),'Existing user, first launch after the update · the only change',1240), frame(AL, snack(AL,{msg:s('tourCardHidden'),act:'Undo',p:.7}), 'After the close icon · existing timed snackbar')].join(''),20), 'Show me opens the tour. The close icon hides the card for good. Either one, or opening the tour from anywhere, retires the card.')
  + sub('c · More tab', row([AL,OB].map(t=>ph(t,moreP(t),'More › Tutorial · permanent row under Welcome Tour')).join(''),20)));

const flowRow = (t, o) => row(PAGES.map((P,i)=>ph(t,tourPage(t,i,'fin',o),`${P.n} · ${s(P.title)}`)).join(''),20);
const b2 = board('HV32.2','Home v3.2 · Tour from Home or More','Five pages at their rest frames. Each has a Try it button that closes the tour and opens that feature. Skip on every page, back arrow on 2 to 5, dots, swipe. Page 5 ends with Done.',
  sub('Alabaster · Signature', flowRow(AL,{})) + sub('Obsidian · Signature', flowRow(OB,{})));
const b3 = board('HV32.3','Home v3.2 · Tour from Welcome','Same pages without Try it, so the user stays in onboarding. Page 5 ends with Start using Kuber.',
  sub('Alabaster · Signature', flowRow(AL,{from:'welcome'})) + sub('Obsidian · Signature', flowRow(OB,{from:'welcome'})));

const KFS = [
  ['Page 1 · Note it (INR, SMS)', P1, [['k1','K1 · 260 ms · SMS in'],['k3','K3 · 1440 ms · card formed'],['k5','K5 · 2640 ms · Bank picked'],['fin','K6 · 3190 ms · rest']]],
  ['Page 2 · Organize it', P2, [['k1','K1 · 420 ms · three expenses arrive'],['k2','K2 · 1520 ms · landed, chips in, balances ticking'],['fin','K3 · 1880 ms · rest']]],
  ['Page 3 · Track everything', P3, [['k1','K1 · 650 ms · first rows'],['k2','K2 · 2070 ms · timeline full, budget filling'],['fin','K3 · 2290 ms · rest, budget at 70%']]],
  ['Page 4 · See where it goes', P4, [['k1','K1 · 400 ms · donut drawing'],['k2','K2 · 1620 ms · donut and bars done, list'],['fin','K3 · 2430 ms · rest, filtered to Food']]],
  ['Page 5 · Go further', P5, [['k1','K1 · 890 ms · Ask Kuber in the spotlight'],['k2','K2 · 1400 ms · Kuber Card turned over'],['fin','K3 · 3140 ms · rest, all four']]],
];
const b4 = board('HV32.4','Home v3.2 · Keyframes and reduced motion','Each animation plays once when its page opens (2.0 to 3.2 s), then rests on its last frame. Reduced motion shows the static frame at once. Timings, easing and moving elements in storyboards.md.',
  KFS.map(([title,fn,ks])=>sub(title, row(ks.map(([k,c])=>kf(AL,fn,k,c)).join('') + kf(OB,fn,'fin','Rest · Obsidian') + kf(AL,fn,'static','Reduced motion · static frame'),20))).join(''));

const b5 = board('HV32.5','Home v3.2 · Currency and region','SMS import works with Indian banks only. When the Kuber currency is not INR, page 1 and the v3.1 Purpose screen show a Quick Add entry instead of an SMS. Every sample amount uses the user\'s currency; USD shows the layout holds with a symbol before the amount, decimals and western grouping.',
  sub('Page 1 · INR (SMS) and USD (Quick Add)', row([['k1','K1'],['k3','K3'],['fin','Rest'],['static','Reduced motion']].map(([k,c])=>kf(AL,P1,k,c+' · INR')).join('') + [['k0','K1a · 600 ms · typing'],['k1','K1b · 1200 ms · typed'],['k3','K3'],['fin','Rest'],['static','Reduced motion']].map(([k,c])=>kf(AL,P1,k,c+' · USD',USD)).join(''),20))
  + sub('Tour page 1 and v3.1 Purpose, both currencies', row([ph(AL,tourPage(AL,0,'fin',{}),'Tour page 1 · INR'), ph(AL,tourPage(AL,0,'fin',{c:USD}),'Tour page 1 · USD'), ph(OB,purposeV(OB,INR),'v3.1 Purpose, new headline · INR'), ph(OB,purposeV(OB,USD),'v3.1 Purpose, new headline · USD')].join(''),20), 'The Purpose headline becomes "Note every expense. See where it goes." (currency-neutral). Its subhead stays for INR; for other currencies it uses the page 1 Quick Add subhead, since SMS import is not available.')
  + sub('Other pages in USD', row([kf(AL,P2,'fin','Page 2 · USD',USD), kf(AL,P3,'fin','Page 3 · USD',USD), kf(AL,P4,'fin','Page 4 · USD',USD), kf(AL,P5,'fin','Page 5 · USD',USD)].join(''),20)));

function purposeV(t, c) { return skipBar(t) + `<div style="flex:1;display:flex;flex-direction:column;justify-content:center;padding:0 20px;gap:12px">${P1(t,'fin',c)}<div style="${ty('hM',t.on,'margin-top:16px;text-wrap:pretty')}">${s('p1Title')}</div><div style="${ty('bL',t.onv,'text-wrap:pretty')}">${c.code==='INR'?V31.body:s('p1SubQuick')}</div></div><div style="flex:none;padding:12px 20px 24px;display:flex;flex-direction:column;gap:16px">${dots(t,1,3)}<div style="display:flex;gap:12px">${btn(t,'Back',{kind:'outlined',size:'l',icon:'arrow_back'})}${btn(t,'Continue',{size:'l',full:1,trail:'arrow_forward'})}</div></div>`; }

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
<header style="margin:0 0 40px;max-width:920px"><div style="font:600 12px/16px 'JetBrains Mono',monospace;letter-spacing:.8px;color:#5B5E66;text-transform:uppercase">Kuber · Home v3.2</div><h1 style="margin:8px 0 8px;font:700 36px/44px Inter;letter-spacing:-.5px;color:#1A1B20">Home v3.2 · How Kuber works</h1><p style="margin:0;font:400 15px/24px Inter;color:#44474F;text-wrap:pretty">An optional 5-page animated tour, built on Home v3.1; where they differ, Home v3.2 wins. It teaches one habit (note every expense) and then shows what Kuber does with it. Reached from the last Welcome page, a one-time Home card, and More. Shown in Signature, light and dark; every colour is a theme role, so the other 6 palettes follow. Specs next to this file: entry-points.md, storyboards.md, changelog.md, copy.md, open-decisions.md.</p></header>
${b1}${b2}${b3}${b4}${b5}
</div>
</x-dc>
</body>
</html>
`;

let cmd = `# Home v3.2 · copy\n\nEvery new string in Home v3.2. English source. Keys are \`homeV32_\` + the key below, in every ARB file. Placeholders in braces; no string is built from pieces; amounts are formatted with the user's currency by the existing formatter (₹ with Indian grouping for INR). Demo names (Rahul, Goa trip, Your Bank) are sample data and are translated or kept as the translator sees fit. No em dashes. Short sentences, no idioms.\n`;
for (const r of COPY) { if (r[0]==='#') { cmd += `\n## ${r[1]}\n\n| Key | English | Notes |\n|---|---|---|\n`; continue; }
  cmd += `| \`homeV32_${r[0]}\` | ${r[1].replace(/\|/g,'\\|')} | ${r[2]} |\n`; }
return { html, copyMd: cmd };
