// Home v3.3 generator: tour merged into Welcome. new Function('K','S','V2', src)(K,S,V2) -> { html, copyMd }
const {T,ty,caps,num,ic,a,card,lrow,chev,btn,ibtn,nphone,board,row,tag,cat,snack,lin,lic,ring} = K;
const chip = (t, l, o) => K.chip(t, l, o).split('overflow:hidden;text-overflow:ellipsis;min-width:0').join('');
const WG = S.W;
const {editBlock,frame,sub,OB,AL,FAM,HELMET} = V2;

// ---------- copy ----------
const COPY = [
['#','Entry points'],
['tourName','Why Kuber?','More row title and Home card title.'],
['tourMoreSub','How expense tracking works, and how Kuber helps','More › Tutorial row subtitle.'],
['tourCardBody','How tracking every expense helps, and what Kuber can do.','Home card line. Existing users only.'],
['tourCardAct','Show me','Home card tonal button. Opens the tour at page 1 with Try it.'],
['tourCardHideA11y','Hide this card','Close icon tooltip and semantics label.'],
['tourCardHidden','You can find Why Kuber? in More.','Snackbar after the close icon, with homeV2_actUndo.'],
['#','Tour chrome'],
['tourNext','Next','Primary button, pages 1 to 4, every entry.'],
['tourFinish','Start using Kuber','Primary button on page 5 in Welcome. Finishes onboarding and opens Home.'],
['tourDone','Done','Primary button on page 5 when opened from More or the Home card.'],
['tourPageA11y','Page {page} of {total}','Semantics label on the dots. total is 7 in Welcome (Make it yours + tracking question + 5 tour pages), 5 elsewhere.'],
['#','Page 1 · Why Kuber exists'],
['p1Title','Make noting every expense a habit.','Headline, 6 words. In Welcome the brand row (logo + "Kuber") is on Make it yours, the first screen.'],
['p1SubSms','Small expenses count too. Noting is easy, and bank SMS add most of them.','Subhead when the currency is INR.'],
['p1Sub','Small expenses count too. Kuber makes noting them easy.','Subhead for any other currency (SMS import is India only).'],
['p1Try','Add a transaction','Try it. Opens Add transaction.'],
['p1ColDate','Date','Notebook column header.'],
['p1ColAmount','Amount','Notebook column header.'],
['p1ColSpent','Spent on','Notebook column header.'],
['p1ColCat','Category','Notebook column header.'],
['p1A11y','Three expenses written in a notebook turn into Kuber transactions, each with a category and an account.','Animation semantics.'],
['#','Sample data shared by pages 1 to 5'],
['dFood','Food delivery','Demo transaction.'],
['dAuto','Auto ride','Demo transaction.'],
['dMovie','Movie tickets','Demo transaction.'],
['dCoffee','Coffee','Demo transaction.'],
['dGroc','Groceries','Demo transaction and category.'],
['cFood','Food','Demo category.'],
['cTransport','Transport','Demo category.'],
['cFun','Entertainment','Demo category.'],
['cShopping','Shopping','Demo category.'],
['aBank','Bank','Demo account.'],
['aCash','Cash','Demo account.'],
['aCard','Credit card','Demo account.'],
['dBankName','Your Bank','Demo bank. Generic on purpose; never a real bank name or logo.'],
['#','Page 2 · Every account, every category'],
['p2Title','Every account. Even credit cards.','Headline, 5 words.'],
['p2Sub','Bank, cash and cards, with billing cycles and due dates. Add any category.','Subhead.'],
['p2Try','Open Accounts','Try it. Opens More › Accounts.'],
['p2Balance','Balance','Label above a bank or cash balance.'],
['p2Due','Due','Label above the credit card amount.'],
['p2Cycle','Billing cycle {start} to {end}','Credit card detail. Dates from the locale formatter.'],
['p2DueOn','Due {date}','Credit card due date chip.'],
['p2PetCare','Pet care','The custom category created in the animation.'],
['p2A11y','A bank account, cash and a credit card show their balances. The card shows its billing cycle and due date. A new category, Pet care, joins the others.','Animation semantics.'],
['#','Page 3 · Track more than spending'],
['p3Title','Track more than spending.','Headline, 4 words.'],
['p3Sub','Budgets, investments, loans, money lent or borrowed, and subscriptions.','Subhead.'],
['p3Try','Open Upcoming events','Try it. Opens More › Upcoming Events (lists EMIs, SIPs, dues and renewals).'],
['p3Budget','Food budget','Module row.'],
['p3BudgetOf','{spent} of {limit}','Budget progress.'],
['p3Inv','Investments','Module row.'],
['p3InvTypes','SIPs, stocks, FDs and more','Only types Kuber supports (investment.dart: sip, mutual_fund, stocks, etf, bonds, gold, real_estate, crypto, fd, rd, collectible).'],
['p3Loan','Home loan','Module row. Supported loan types: home, vehicle, personal, education.'],
['p3LoanSub','EMI {amount} · {paid} of {total}','Loan progress.'],
['p3Lent','{name} owes you','Lent row. Sample name.'],
['p3Borrowed','You owe {name}','Borrowed line. Sample name.'],
['p3Subs','Streaming plan','Module row.'],
['p3SubsSub','{amount} a month','Subscription amount.'],
['p3Renews','Renews {date}','Renewal chip before the tick-over.'],
['p3Next','Next {date}','Renewal chip after the tick-over.'],
['p3A11y','A budget fills, an investment grows, a loan EMI is paid, money lent and borrowed shows up, and a subscription renews.','Animation semantics.'],
['#','Page 4 · Your spending, at a glance'],
['p4Title','Your spending, at a glance.','Headline, kept from v3.2.'],
['p4Sub','Every transaction in one searchable history, with many ways to analyze it.','Subhead, new.'],
['p4Try','Open Analytics','Try it. Opens the Analytics tab.'],
['p4Search','Search','Search field placeholder (existing History search).'],
['p4Query','food','Demo search text.'],
['p4Today','Today','History date header (existing).'],
['p4Yesterday','Yesterday','History date header (existing).'],
['p4ByCat','By category','Analytics view label.'],
['p4Monthly','Monthly','Analytics view label.'],
['p4Compare','Compare','Analytics view label (month to month).'],
['p4Month','October','Demo month. From the locale month names.'],
['p4A11y','A searchable history narrows to food. Then charts show spending by category, by month, and this month against last month.','Animation semantics.'],
['#','Page 5 · Go further when you want'],
['p5Title','Go further when you want.','Headline, kept from v3.2.'],
['p5Ask','Ask Kuber','Feature name.'],
['p5AskLine','Ask about your money, answered on your phone.','One line under Ask Kuber.'],
['p5Cards','Kuber Cards','Feature name.'],
['p5CardsLine','Your cards, encrypted and kept on your phone.','One line under Kuber Cards.'],
['p5Notes','Kuber Notes','Feature name.'],
['p5NotesLine','Notes that do the math and add transactions.','One line under Kuber Notes.'],
['p5Calc','Calculators and tools','Feature name.'],
['p5CalcLine','EMI, SIP, tax and more.','One line under Calculators and tools.'],
['p5Rem','Reminders','Feature name.'],
['p5RemLine','Never miss a bill.','One line under Reminders.'],
['p5Try','Open Signature tools','Try it. Opens the More tab at the Signature section.'],
['p5AskQ','How much on food this month?','Demo question.'],
['p5AskA','{amount} so far, 70% of your Food budget.','Demo answer.'],
['p5NoteName','Goa trip','Demo note title.'],
['p5Hotel','Hotel','Demo note line.'],
['p5Taxi','Taxi','Demo note line.'],
['p5Travel','Travel','Demo category on the transaction chip.'],
['p5SipCalc','SIP calculator','Demo calculator title.'],
['p5PerMonth','{amount} a month','Demo input.'],
['p5Rate','{rate}% a year','Demo input.'],
['p5Years','{n} years','Demo input.'],
['p5RemTitle','Electricity bill','Demo reminder.'],
['p5RemDue','Due tomorrow · {amount}','Demo reminder line.'],
['p5A11y','Ask Kuber answers a question, a card turns over, a note adds up and becomes a transaction, a calculator shows a result, and a bill reminder arrives.','Animation semantics.'],
];
const CP = {}; for (const r of COPY) if (r[0] !== '#') CP[r[0]] = r[1];
const s = (k, v = {}) => { const x = CP[k]; if (x === undefined) throw new Error('missing copy ' + k); return x.replace(/\{(\w+)\}/g, (m, n) => v[n] !== undefined ? v[n] : m); };
for (const r of COPY) { if (r[1] && /[—–]/.test(r[1])) throw new Error('dash in copy ' + r[0]); if (/^p\dTitle$/.test(r[0]) && r[1].split(/\s+/).length >= 7) throw new Error('title too long ' + r[0]); if (r[1] && /\b(free|pro|price|limit)\b/i.test(r[1].replace(/\{\w+\}/g,''))) throw new Error('pricing word in ' + r[0]); }

// ---------- currency ----------
const inGroup = (n) => { const [i, d] = String(n).split('.'); const l3 = i.slice(-3), rest = i.slice(0, -3); return (rest ? rest.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' : '') + l3 + (d ? '.' + d : ''); };
const INR = {code:'INR', f:(n)=>'₹'+inGroup(n), g:(n)=>inGroup(n), r:1};
const USD = {code:'USD', f:(n)=>'$'+Number(n).toLocaleString('en-US',{minimumFractionDigits:Number.isInteger(n)?0:2}), g:(n)=>Number(n).toLocaleString('en-US',{minimumFractionDigits:Number.isInteger(n)?0:2}), r:0.05};
const AM = (c, n) => c.code==='INR' ? n : Math.round(n*c.r*100)/100;
const F = (c, n) => c.f(AM(c, n));

// ---------- shared ----------
const SW = 320, SH = 260;
const at = (x, y, inner, o = {}) => `<div style="position:absolute;left:${x}px;top:${y}px;width:${o.w?o.w+'px':'max-content'};${o.tf?'transform:'+o.tf+';':''}opacity:${o.op??1};${o.ex||''}">${inner}</div>`;
const stageBox = (inner, h = SH) => `<div style="position:relative;width:${SW}px;height:${h}px;flex:none;align-self:center">${inner}</div>`;
const stat = (t, txt, bg, fg, icn) => `<span style="${ty('lM',fg||t.osc,'height:24px;padding:0 8px 0 '+(icn?6:8)+'px;border-radius:999px;background:'+(bg||t.sc)+';white-space:nowrap;display:inline-flex;align-items:center;gap:4px;box-sizing:border-box')}">${icn?ic(icn,14,fg||t.osc):''}${txt}</span>`;
const amt = (t, v, role='tS', c) => `<span style="${ty(role,c||t.on,num+'white-space:nowrap')}">${v}</span>`;
const CC = {food:['#EF4444','restaurant'], groc:['#22C55E','local_grocery_store'], trans:['#64748B','local_taxi'], fun:['#A855F7','movie'], shop:['#EC4899','shopping_bag'], other:['#F59E0B','more_horiz'], pet:['#F97316','pets'], travel:['#0EA5E9','flight']};
const surf = (t, inner, o = {}) => `<div style="width:${o.w||SW}px;${o.h?'height:'+o.h+'px;':''}background:${t.c2};border:${o.spot?'2px solid '+t.p:'1px solid '+t.olv};border-radius:${o.r||16}px;box-sizing:border-box;overflow:hidden;${o.ex||''}">${inner}</div>`;

// ---------- page 1 · notebook to transactions ----------
const NB = [['12 Oct',250,'dFood','food','cFood','aBank'],['12 Oct',90,'dAuto','trans','cTransport','aCash'],['13 Oct',600,'dMovie','fun','cFun','aCard']];
const COLX = [12, 62, 130, 230];
const nbText = (t, c, r, rh, role='bS') => { const [d,v,n,,cn] = r; return `<div style="position:relative;width:${SW}px;height:${rh}px">${[d, F(c,v), s(n), s(cn)].map((x,j)=>`<span style="position:absolute;left:${COLX[j]}px;top:0;height:${rh}px;display:flex;align-items:center;${ty(role,t.on,(j===1?num:'')+'white-space:nowrap')}">${x}</span>`).join('')}</div>`; };
const nbHead = (t, h) => `<div style="position:relative;height:${h}px">${['p1ColDate','p1ColAmount','p1ColSpent','p1ColCat'].map((k,j)=>`<span style="position:absolute;left:${COLX[j]}px;top:0;height:${h}px;display:flex;align-items:center;${caps(t.onv,'white-space:nowrap')}">${s(k)}</span>`).join('')}</div>`;
// notebook paper: rules + margin line; rows revealed by width (rev[i] 0..1)
const notebook = (t, c, rev, o = {}) => { const hh = o.hh||30, rh = o.rh||36, w = SW; const h = hh + rh*3 + 8;
  const rules = [0,1,2,3].map(i=>`<div style="position:absolute;left:0;right:0;top:${hh+rh*i}px;height:1px;background:${t.olv}"></div>`).join('');
  const rows = NB.map((r,i)=>{ const p = rev[i]||0; if (!p) return ''; const W_ = Math.round(COLX[0] + p*(w-COLX[0])); return `<div style="position:absolute;left:0;top:${hh+rh*i}px;width:${p>=1?w:W_}px;height:${rh}px;overflow:hidden">${nbText(t,c,r,rh)}</div>`; }).join('');
  const amtStroke = NB.map((r,i)=>(rev[i]||0)>=.4?`<div style="position:absolute;left:${COLX[1]}px;top:${hh+rh*i+rh-9}px;width:${(c.code==='INR'?[30,22,30]:[38,30,24])[i]}px;height:2px;border-radius:2px;background:${t.p};opacity:.9"></div>`:'').join('');
  return `<div style="position:relative;width:${w}px;height:${h}px;background:${t.c1};border:1px solid ${t.olv};border-radius:16px;box-sizing:border-box;overflow:hidden;opacity:${o.op??1}">${nbHead(t,hh)}${rules}<div style="position:absolute;top:0;bottom:0;left:58px;width:1px;background:${t.t};opacity:.5"></div>${o.blank?'':rows+amtStroke}</div>`; };
const pen = (t, x, y, o = {}) => at(x-3, y-21, `<div style="transform:rotate(${o.rot||0}deg);transform-origin:3px 21px">${ic('edit',24,t.p,1)}</div>`, {op:o.op});
const txCard = (t, c, r, h = 60) => { const [d,v,n,k,cn,an] = r; return `<div style="width:${SW}px;height:${h}px;background:${t.c2};border:1px solid ${t.olv};border-radius:16px;box-sizing:border-box;display:flex;align-items:center;gap:12px;padding:0 14px 0 12px">${cat(t,CC[k][0],CC[k][1],{s:h<56?32:36,g:18})}<div style="flex:1;min-width:0"><div style="${ty('tS',t.on,'white-space:nowrap')}">${s(n)}</div><div style="${ty('bS',t.onv,'white-space:nowrap')}">${s(cn)} · ${s(an)}</div></div><div style="display:flex;flex-direction:column;align-items:flex-end;gap:2px"><span style="${ty('tS',t.exp,num+'white-space:nowrap')}">−${F(c,v)}</span><span style="${ty('bS',t.onv,'white-space:nowrap')}">${d}</span></div></div>`; };
const P1 = (t, k, c = INR) => { let h = ''; const NY = 46, HH = 30, RH = 36;
  if (k==='k1') { h = at(0, NY, notebook(t,c,[.58])) + pen(t, Math.round(COLX[0]+.58*(SW-COLX[0])), NY+HH+RH-10); }
  if (k==='k2') { h = at(0, NY, notebook(t,c,[1,1,1])) + pen(t, 300, NY+HH+RH*3-18, {rot:-14, op:.9}); }
  if (k==='k3') { h = at(0, NY, notebook(t,c,[1,1,1],{blank:1, op:.45}));
    NB.forEach((r,i)=>{ const y0 = NY+HH+RH*i, y1 = 32+68*i, y = Math.round(y0+(y1-y0)*.55); h += at(-4+0, y-8, `<div style="width:${SW}px;height:${RH+12}px;background:${t.c2};border:1px solid ${t.olv};border-radius:12px;box-sizing:border-box;display:flex;align-items:center;transform:scale(1.02)">${nbText(t,c,r,RH)}</div>`); }); }
  if (k==='fin') NB.forEach((r,i)=>{ h += at(0, 32+68*i, txCard(t,c,r)); });
  if (k==='static') { h = at(0, 0, notebook(t,c,[1,1,1],{hh:24,rh:26})) + at(SW/2-12, 118, ic('arrow_downward',24,t.p)) + NB.map((r,i)=>at(0, 150+58*i, txCard(t,c,r,52))).join(''); return stageBox(h, 324); }
  return stageBox(h); };

// ---------- page 2 · accounts, credit card cycle, categories ----------
const ACC = [['#3B82F6','account_balance','aBank','p2Balance',42350],['#22C55E','payments','aCash','p2Balance',1200],['#A855F7','credit_card','aCard','p2Due',8640]];
const cchip = (t, name, k, o = {}) => `<div style="height:32px;padding:0 12px 0 4px;border-radius:8px;border:${o.dash?'1.5px dashed '+t.p:'1px solid '+t.olv};${o.sel?'background:'+t.sc+';border-color:transparent;':''}box-sizing:border-box;display:inline-flex;align-items:center;gap:8px;${o.tf?'transform:'+o.tf+';':''}${o.op!==undefined?'opacity:'+o.op+';':''}">${o.dash?`<div style="width:24px;height:24px;border-radius:999px;background:${t.c3};display:flex;align-items:center;justify-content:center">${ic(CC[k][1],14,t.onv)}</div>`:cat(t,CC[k][0],CC[k][1],{s:24,g:14})}<span style="${ty('lL',o.sel?t.osc:t.on,'white-space:nowrap')}">${name}${o.caret?`<span style="display:inline-block;width:2px;height:16px;background:${t.p};vertical-align:middle;margin-left:1px"></span>`:''}</span></div>`;
const P2 = (t, k, c = INR) => { const st = {k1:0,k2:1,k3:2,fin:3,static:3}[k]; let h = '';
  ACC.forEach(([col,icn,nm,lab,bal],i)=>{ const spot = i===2 && st>=1;
    h += at(i*109, 0, surf(t, `<div style="padding:10px;display:flex;flex-direction:column;gap:6px">${cat(t,col,icn,{s:28,g:16})}<div style="${ty('tS',t.on,'white-space:nowrap')}">${s(nm)}</div><div><div style="${ty('bS',t.onv)}">${s(lab)}</div><div style="${ty('tS',i===2?t.exp:t.on,num+'white-space:nowrap')}">${F(c,bal)}</div></div></div>`, {w:102,h:122,spot})); });
  if (st>=1) h += at(0, 130, surf(t, `<div style="padding:10px 12px;display:flex;flex-direction:column;gap:8px"><div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><span style="${ty('bS',t.onv,'white-space:nowrap')}">${s('p2Cycle',{start:'16 Sep',end:'15 Oct'})}</span>${stat(t,s('p2DueOn',{date:'5 Nov'}),t.tc,t.otc,'event')}</div>${lin(t,.93,'normal',{flat:1})}</div>`, {h:64}));
  if (st>=2) { h += at(0, 204, `<div style="display:flex;gap:8px">${cchip(t,s('cFood'),'food')}${cchip(t,s('cTransport'),'trans')}${cchip(t,s('cShopping'),'shop')}</div>`);
    h += at(0, 242, st===2 ? cchip(t,'Pet ca','pet',{dash:1,caret:1,tf:'scale(.96)'}) : cchip(t,s('p2PetCare'),'pet',{sel:1})); }
  return stageBox(h, 276); };

// ---------- page 3 · modules ----------
const sipLine = (t, p) => { const pts = [[0,28],[14,25],[28,26],[42,19],[56,17],[70,10],[86,4]]; const d = 'M'+pts.map(q=>q.join(' ')).join(' L'); const L = 110;
  return `<svg width="88" height="32" style="display:block;overflow:visible"><path d="${d}" fill="none" stroke="${t.p}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="${L}" stroke-dashoffset="${(L*(1-p)).toFixed(1)}"></path>${p>=1?`<circle cx="86" cy="4" r="3.5" fill="${t.p}"></circle>`:''}</svg>`; };
const av = (t, l, bg, fg) => `<div style="width:26px;height:26px;border-radius:999px;background:${bg};border:2px solid ${t.c2};box-sizing:content-box;display:flex;align-items:center;justify-content:center;${ty('lM',fg)}">${l}</div>`;
const P3 = (t, k, c = INR) => { const n = {k1:2,k2:4,fin:5,static:5}[k], bud = {k1:.42}[k]??.7, sip = {k1:.6}[k]??1, paid = 14, tick = k==='fin'||k==='static'; let h = '';
  const R = [
    [cat(t,'#3B82F6','savings',{s:36,g:20}), s('p3Budget'), s('p3BudgetOf',{spent:F(c,Math.round(8000*bud/10)*10),limit:F(c,8000)}), `<div style="width:88px">${lin(t,bud,'normal',{flat:1})}</div>`],
    [cat(t,'#22C55E','show_chart',{s:36,g:20}), s('p3Inv'), s('p3InvTypes'), sipLine(t,sip)],
    [cat(t,'#F59E0B','account_balance',{s:36,g:20}), s('p3Loan'), s('p3LoanSub',{amount:F(c,24500),paid:k==='k2'?13:paid,total:60}), `<div style="width:88px;display:flex;justify-content:flex-end">${ring(t,(k==='k2'?13:paid)/60,32)}</div>`],
    [`<div style="display:flex;width:36px;position:relative;height:36px"><div style="position:absolute;left:-2px;top:-2px">${av(t,'R',t.incC,t.onIncC)}</div><div style="position:absolute;left:10px;top:10px">${av(t,'P',t.expC,t.onExpC)}</div></div>`, s('p3Lent',{name:'Rahul'}), s('p3Borrowed',{name:'Priya'}), `<div style="display:flex;flex-direction:column;align-items:flex-end;gap:2px">${amt(t,'+'+F(c,1500),'tS',t.inc)}${amt(t,'−'+F(c,400),'bS',t.exp)}</div>`],
    [cat(t,'#A855F7','event_repeat',{s:36,g:20}), s('p3Subs'), s('p3SubsSub',{amount:F(c,649)}), tick?stat(t,s('p3Next',{date:'15 Nov'}),t.sc,t.osc,'event_repeat'):stat(t,s('p3Renews',{date:'15 Oct'}),t.c3,t.onv,'event')],
  ];
  R.slice(0,n).forEach(([lead,ti,sb,vis],i)=>{ h += at(0, i*52, surf(t, `<div style="height:48px;padding:0 12px 0 6px;display:flex;align-items:center;gap:10px">${lead}<div style="flex:1;min-width:0"><div style="${ty('tS',t.on,'white-space:nowrap;overflow:hidden;text-overflow:ellipsis')}">${ti}</div><div style="${ty('bS',t.onv,num+'white-space:nowrap;overflow:hidden;text-overflow:ellipsis')}">${sb}</div></div><div style="flex:none">${vis}</div></div>`, {h:48,r:14})); });
  return stageBox(h); };

// ---------- page 4 · history to analytics ----------
const HIST = [['p4Today',[['fun','dMovie',600],['food','dCoffee',120]]],['p4Yesterday',[['food','dFood',250],['trans','dAuto',90]]],['11 Oct',[['groc','dGroc',1180]]]];
const hRow = (t, c, [k,n,v]) => `<div style="height:36px;padding:0 12px;display:flex;align-items:center;gap:10px">${cat(t,CC[k][0],CC[k][1],{s:24,g:14})}<span style="flex:1;${ty('tS',t.on,'white-space:nowrap')}">${s(n)}</span>${amt(t,'−'+F(c,v),'tS',t.exp)}</div>`;
const hHead = (t, k) => `<div style="height:26px;padding:0 12px;display:flex;align-items:flex-end;${caps(t.onv)}">${CP[k]?s(k):k}</div>`;
const search = (t, q, h = 40) => `<div style="width:${SW}px;height:${h}px;border-radius:999px;background:${t.c3};display:flex;align-items:center;gap:8px;padding:0 14px;box-sizing:border-box">${ic('search',20,t.onv)}<span style="flex:1;${ty('bL',q?t.on:t.onv,'white-space:nowrap')}">${q||s('p4Search')}${q?`<span style="display:inline-block;width:2px;height:18px;background:${t.p};vertical-align:middle;margin-left:1px"></span>`:''}</span>${q?ic('close',18,t.onv):ic('tune',20,t.onv)}</div>`;
const SL = [['food',5600],['groc',3400],['fun',2300],['trans',1900],['other',1800]];
const donut = (t, c, sz = 112, th = 14, center = 1) => { const r = (sz-th)/2, C = 2*Math.PI*r, tot = 15000; let acc = 0;
  const segs = SL.map(([k,v])=>{ const L = v/tot*C - 3; const st = acc; acc += v/tot*C; return `<circle cx="${sz/2}" cy="${sz/2}" r="${r}" fill="none" stroke="${t.tone(CC[k][0]).fg}" stroke-width="${th}" stroke-dasharray="${L.toFixed(1)} ${C}" stroke-dashoffset="${(-st).toFixed(1)}"></circle>`; }).join('');
  return `<div style="position:relative;width:${sz}px;height:${sz}px;flex:none"><svg width="${sz}" height="${sz}" style="transform:rotate(-90deg);display:block">${segs}</svg>${center?`<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center"><div style="${ty('tS',t.on,num)}">${F(c,15000)}</div><div style="${ty('bS',t.onv)}">${s('p4Month')}</div></div>`:''}</div>`; };
const MON = [['Jul',13200],['Aug',16100],['Sep',14400],['Oct',15000]];
const bars = (t, w, hmax, lab = 1) => `<div style="width:${w}px;display:flex;align-items:flex-end;justify-content:space-around">${MON.map(([m,v],i)=>`<div style="display:flex;flex-direction:column;align-items:center;gap:4px"><div style="width:${lab?24:12}px;height:${Math.round(v/16100*hmax)}px;border-radius:6px 6px 2px 2px;background:${i===3?t.p:t.pc}"></div>${lab?`<span style="${ty('lS',t.onv)}">${m}</span>`:''}</div>`).join('')}</div>`;
const CMP = [['cFood',4800,5600],['cGroc',3600,3400],['cTransport',2100,1900]];
CP.cGroc = CP.dGroc;
const compare = (t, w, full = 1) => `<div style="width:${w}px;display:flex;flex-direction:column;gap:${full?10:6}px">${CMP.map(([k,a_,b])=>`<div style="display:flex;flex-direction:column;gap:3px">${full?`<span style="${ty('lM',t.onv)}">${s(k)}</span>`:''}<div style="height:${full?8:6}px;width:${Math.round(a_/5600*100)}%;border-radius:999px;background:${t.pc}"></div><div style="height:${full?8:6}px;width:${Math.round(b/5600*100)}%;border-radius:999px;background:${t.p}"></div></div>`).join('')}</div>`;
const tabs = (t, i) => `<div style="display:flex;gap:8px">${['p4ByCat','p4Monthly','p4Compare'].map((k,j)=>stat(t,s(k),j===i?t.sc:'transparent',j===i?t.osc:t.onv)).join('')}</div>`;
const legend = (t, c) => `<div style="display:flex;flex-direction:column;gap:6px">${SL.slice(0,4).map(([k,v])=>`<div style="display:flex;align-items:center;gap:8px"><span style="width:8px;height:8px;border-radius:999px;background:${t.tone(CC[k][0]).fg}"></span><span style="flex:1;${ty('bS',t.on,'white-space:nowrap')}">${s({food:'cFood',groc:'cGroc',fun:'cFun',trans:'cTransport'}[k])}</span><span style="${ty('bS',t.onv,num)}">${F(c,v)}</span></div>`).join('')}</div>`;
const P4 = (t, k, c = INR) => { let h = '';
  if (k==='k1' || k==='k2') { const filt = k==='k2';
    h += at(0, 0, search(t, filt?s('p4Query'):''));
    const groups = HIST.map(([hd,rows])=>[hd, rows.filter(r=>!filt||r[0]==='food')]).filter(g=>g[1].length);
    h += at(0, 52, surf(t, `<div style="margin-top:${filt?0:-34}px;padding-bottom:6px">${groups.map(([hd,rows])=>hHead(t,hd)+rows.map(r=>hRow(t,c,r)).join('')).join('')}</div>`, {h:filt?136:208})); }
  if (k==='k3' || k==='k4' || k==='k5') { const i = {k3:0,k4:1,k5:2}[k];
    h += at(0, 0, tabs(t,i));
    const body = i===0 ? `<div style="display:flex;align-items:center;gap:16px;padding:16px">${donut(t,c)}<div style="flex:1;min-width:0">${legend(t,c)}</div></div>`
      : i===1 ? `<div style="padding:16px;display:flex;flex-direction:column;gap:8px"><div style="${ty('tS',t.on,num)}">${F(c,15000)} <span style="${ty('bS',t.onv)}">${s('p4Month')}</span></div>${bars(t,286,112)}</div>`
      : `<div style="padding:16px;display:flex;flex-direction:column;gap:10px"><div style="display:flex;gap:12px">${stat(t,'Sep',t.pc,t.opc)}${stat(t,'Oct',t.p,t.op)}</div>${compare(t,286)}</div>`;
    h += at(0, 40, surf(t, body, {h:184})); }
  if (k==='fin' || k==='static') {
    h += at(0, 0, search(t, s('p4Query'), 36).replace(/<span style="display:inline-block;width:2px[^>]*><\/span>/,''));
    h += at(0, 44, surf(t, hRow(t,c,['food','dCoffee',120]) + `<div style="height:1px;background:${t.olv}"></div>` + hRow(t,c,['food','dFood',250])));
    const mini = (inner, lab) => surf(t, `<div style="height:96px;display:flex;align-items:center;justify-content:center;padding:0 10px">${inner}</div><div style="padding:0 10px 10px;${ty('lM',t.onv,'text-align:center;white-space:nowrap')}">${lab}</div>`, {w:101,h:126,r:14});
    h += at(0, 134, `<div style="display:flex;gap:8px">${mini(donut(t,c,64,10,0),s('p4ByCat'))}${mini(bars(t,80,56,0),s('p4Monthly'))}${mini(compare(t,80,0),s('p4Compare'))}</div>`); }
  return stageBox(h); };

// ---------- page 5 · spotlight ----------
const F5 = [['p5Ask','p5AskLine','#3B82F6','auto_awesome'],['p5Cards','p5CardsLine','#A855F7','credit_card'],['p5Notes','p5NotesLine','#F59E0B','sticky_note_2'],['p5Calc','p5CalcLine','#22C55E','calculate'],['p5Rem','p5RemLine','#EF4444','notifications']];
const SPOT = {k1:0,k2:1,k3:2,k4:3,k5:4,fin:-1,static:-1};
const vig = (t, i, c) => {
  if (i===0) return `<div style="padding:14px;display:flex;flex-direction:column;gap:10px"><div style="align-self:flex-end;max-width:240px;padding:8px 12px;border-radius:16px 16px 4px 16px;background:${t.sc};${ty('bM',t.osc)}">${s('p5AskQ')}</div><div style="display:flex;gap:8px;align-items:flex-start">${ic('auto_awesome',20,t.p,1)}<div style="max-width:250px;padding:8px 12px;border-radius:16px 16px 16px 4px;background:${t.c3};${ty('bM',t.on,num+'text-wrap:pretty')}">${s('p5AskA',{amount:F(c,5600)})}</div></div></div>`;
  if (i===1) return `<div style="height:100%;display:flex;align-items:center;justify-content:center"><div style="width:208px;height:124px;border-radius:16px;background:${t.pc};padding:14px 16px;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between"><div style="display:flex;justify-content:space-between;align-items:center"><span style="${ty('lL',t.opc,'white-space:nowrap')}">${s('dBankName')}</span>${ic('lock',16,t.opc)}</div><div style="width:32px;height:24px;border-radius:5px;background:${a(t.opc,.3)}"></div><span style="${ty('tM',t.opc,num+'letter-spacing:1.5px;white-space:nowrap')}">•••• •••• •••• 5678</span></div></div>`;
  if (i===2) return `<div style="padding:14px 16px;display:flex;gap:12px;align-items:center;height:100%;box-sizing:border-box"><div style="flex:1;min-width:132px;display:flex;flex-direction:column;gap:4px;white-space:nowrap"><div style="${ty('tS',t.on)}">${s('p5NoteName')}</div><div style="display:flex;justify-content:space-between;${ty('bM',t.onv,num)}"><span>${s('p5Hotel')}</span><span>${c.g(AM(c,12400))}</span></div><div style="display:flex;justify-content:space-between;${ty('bM',t.onv,num)}"><span>${s('p5Taxi')}</span><span>+ ${c.g(AM(c,2100))}</span></div><div style="height:1px;background:${t.olv}"></div><div style="text-align:right;${ty('tS',t.p,num)}">= ${c.g(AM(c,14500))}</div></div>${ic('arrow_forward',18,t.onv)}<div style="flex:none;white-space:nowrap;padding:6px 10px 6px 6px;border-radius:12px;background:${t.c3};display:flex;align-items:center;gap:8px">${cat(t,CC.travel[0],CC.travel[1],{s:28,g:16})}<div><div style="${ty('lM',t.on)}">${s('p5Travel')}</div><div style="${ty('lM',t.exp,num)}">−${F(c,14500)}</div></div></div></div>`;
  if (i===3) return `<div style="padding:14px 16px;display:flex;flex-direction:column;gap:10px"><div style="${caps(t.onv)}">${s('p5SipCalc')}</div><div style="display:flex;gap:6px;flex-wrap:wrap">${[s('p5PerMonth',{amount:F(c,5000)}),s('p5Rate',{rate:12}),s('p5Years',{n:10})].map(x=>`<span style="height:28px;padding:0 10px;border-radius:8px;background:${t.c3};display:inline-flex;align-items:center;${ty('lL',t.on,num+'white-space:nowrap')}">${x}</span>`).join('')}</div><div style="${ty('hM',t.p,num)}">${F(c,1161695)}</div></div>`;
  return `<div style="height:100%;padding:0 16px;display:flex;align-items:center;gap:14px;box-sizing:border-box"><div style="width:48px;height:48px;border-radius:16px;background:${t.errC};display:flex;align-items:center;justify-content:center;flex:none;transform:rotate(-10deg)">${ic('notifications_active',26,t.onErrC,1)}</div><div style="flex:1;padding:10px 12px;border-radius:16px;background:${t.c3};display:flex;flex-direction:column;gap:2px"><div style="display:flex;align-items:center;gap:6px"><img src="../icon/play_store_512.png" style="width:16px;height:16px;border-radius:4px"><span style="${ty('lS',t.onv)}">Kuber · now</span></div><div style="${ty('tS',t.on)}">${s('p5RemTitle')}</div><div style="${ty('bS',t.onv,num)}">${s('p5RemDue',{amount:F(c,1450)})}</div></div></div>`; };
const P5 = (t, k, c = INR) => { const i = SPOT[k];
  const inner = i>=0 ? vig(t,i,c) : `<div style="height:100%;display:flex;align-items:center;justify-content:space-evenly">${F5.map(([,,col,icn])=>cat(t,col,icn,{s:48,g:24})).join('')}</div>`;
  return stageBox(at(0,0,surf(t, inner, {h:150,r:20})), 150); };
const L5 = (t, k) => { const i = SPOT[k];
  return `<div style="display:flex;flex-direction:column;gap:2px">${F5.map(([n,l,col,icn],j)=>{ const on = j===i; return `<div style="display:flex;gap:12px;align-items:center;padding:3px 8px;border-radius:12px;${on?'background:'+t.sc+';':''}">${cat(t,col,icn,{s:32,g:18})}<div style="flex:1;min-width:0"><div style="${ty('tS',on?t.osc:t.on)}">${s(n)}</div><div style="${ty('bS',on?t.osc:t.onv,'text-wrap:pretty')}">${s(l)}</div></div></div>`; }).join('')}</div>`; };

// ---------- page chrome ----------
const PAGES = [
  {fn:P1, title:'p1Title', sub:(c)=>c.code==='INR'?'p1SubSms':'p1Sub', tr:'p1Try'},
  {fn:P2, title:'p2Title', sub:()=>'p2Sub', tr:'p2Try'},
  {fn:P3, title:'p3Title', sub:()=>'p3Sub', tr:'p3Try'},
  {fn:P4, title:'p4Title', sub:()=>'p4Sub', tr:'p4Try'},
  {fn:P5, title:'p5Title', sub:null, tr:'p5Try'},
];
const dots = (t, i, n) => `<div style="display:flex;gap:8px;justify-content:center">${Array.from({length:n},(_,j)=>`<div style="width:${j===i?24:8}px;height:8px;border-radius:999px;background:${j===i?t.p:t.olv}"></div>`).join('')}</div>`;
const skipBar = (t, show = 1) => `<div style="height:56px;flex:none;display:flex;align-items:center;justify-content:flex-end;padding:0 8px">${show?btn(t,'Skip',{kind:'text'}):''}</div>`;
const brandBar = (t, sk = 1) => `<div style="height:72px;flex:none;display:flex;align-items:center;gap:12px;padding:8px 8px 0 20px;box-sizing:border-box"><img src="../icon/play_store_512.png" alt="" style="width:40px;height:40px;border-radius:12px;display:block"><span style="${ty('tL',t.on,'font-weight:600;letter-spacing:-.3px')}">Kuber</span><div style="flex:1"></div>${sk?btn(t,'Skip',{kind:'text'}):''}</div>`;
const backBtn = (t) => `<div style="width:56px;height:56px;border-radius:999px;border:1px solid ${t.olv};box-sizing:border-box;display:flex;align-items:center;justify-content:center;flex:none">${ic('arrow_back',24,t.on)}</div>`;
const tourPage = (t, pi, k = 'fin', o = {}) => { const P = PAGES[pi], c = o.c || INR, wel = o.from==='welcome';
  const primary = pi<4 ? s('tourNext') : (wel ? s('tourFinish') : s('tourDone'));
  const top = skipBar(t, wel || pi<4);
  const text = `<div style="${ty('hM',t.on,'margin-top:12px;text-wrap:pretty')}">${s(P.title)}</div>` + (P.sub ? `<div style="${ty('bL',t.onv,'text-wrap:pretty')}">${s(P.sub(c))}</div>` : L5(t,k));
  return top + `<div style="flex:1;display:flex;flex-direction:column;justify-content:center;padding:0 20px;gap:${pi===4&&!wel?8:12}px">${P.fn(t,k,c)}${text}${wel?'':`<div style="display:flex">${btn(t,s(P.tr),{kind:'tonal',trail:'arrow_forward'})}</div>`}</div>`
    + `<div style="flex:none;padding:12px 20px 24px;display:flex;flex-direction:column;gap:16px">${wel?dots(t,pi+2,7):dots(t,pi,5)}<div style="display:flex;gap:12px">${pi===0&&!wel?'':backBtn(t)}${btn(t,primary,{size:'l',full:1,trail:pi<4?'arrow_forward':null})}</div></div>`; };

// ---------- functional + tracking ----------
const rep = (h, a_, b) => { if (!h.includes(a_)) throw new Error('not found: ' + a_.slice(0,40)); return h.split(a_).join(b); };
const setupP = (t) => rep(rep(rep(rep(rep(S.welcome(t,3), dots(t,3,4), dots(t,0,7)), 'Start my journey', 'Continue'), "Three quick choices and you're in.", 'Three quick choices.'), backBtn(t), ''), skipBar(t,0), brandBar(t,0));
const TRK = [['Budgets','savings'],['Loans and EMIs','account_balance'],['Investments and SIPs','show_chart'],['Money lent or borrowed','handshake'],['Subscriptions','event_repeat']];
const track = (t, sel = []) => skipBar(t) + `<div style="flex:1;display:flex;flex-direction:column;padding:24px 20px 0;gap:12px"><div style="${ty('hM',t.on,'text-wrap:pretty')}">What do you want to track?</div><div style="${ty('bL',t.onv,'text-wrap:pretty')}">Pick as many as you like. Kuber adds the matching widgets to your Home. You can change this later.</div><div style="margin-top:20px;display:flex;flex-wrap:wrap;gap:12px 8px">${TRK.map(([l,i],j)=>chip(t,l,{sel:sel.includes(j),icon:i})).join('')}</div></div><div style="flex:none;padding:12px 20px 24px;display:flex;flex-direction:column;gap:16px">${dots(t,1,7)}<div style="display:flex;gap:12px">${backBtn(t)}${btn(t,'Continue',{size:'l',full:1,trail:'arrow_forward',kind:sel.length?'filled':'disabled'})}</div></div>`;

// ---------- Home card + More ----------
const tourCard = (t) => card(t, `<div style="display:flex;gap:16px;align-items:flex-start"><div style="width:40px;height:40px;border-radius:12px;background:${t.sc};display:flex;align-items:center;justify-content:center;flex:none">${ic('play_circle',20,t.osc)}</div><div style="flex:1;min-width:0"><div style="${ty('tM',t.on)}">${s('tourName')}</div><div style="${ty('bM',t.onv,'margin-top:2px;text-wrap:pretty')}">${s('tourCardBody')}</div></div><div style="margin:-12px -12px 0 -8px">${ibtn(t,'close',{kind:'std',fg:t.onv})}</div></div><div style="display:flex;justify-content:flex-end;margin-top:12px">${btn(t,s('tourCardAct'),{kind:'tonal'})}</div>`);
const homeV2 = (t) => S.homeHeader(t,{badge:''}) + `<div style="flex:1;overflow:hidden;position:relative"><div style="padding:0 20px 120px;display:flex;flex-direction:column;gap:28px">${[S.greeting(t), tourCard(t), WG.balance(t,{month:'October'}), WG.stories(t), WG.stats(t), WG.quick(t), WG.sms(t), WG.chart(t), editBlock(t,2)].join('')}</div></div>` + K.fade(t) + K.nav(t,0);
const homeV1 = (t) => { const g = S.greeting(t); return rep(S.home(t), g, g + tourCard(t)); };
const moreP = (t) => { const h = S.more(t,{top:1820}); const old = lrow(t,{lead:lic(t,'auto_stories'),title:'Welcome Tour',trail:chev(t)});
  return rep(h, old, lrow(t,{lead:lic(t,'play_circle'),title:s('tourName'),sub:s('tourMoreSub'),trail:chev(t)})); };

// ---------- board ----------
const capn = (txt) => `<span style="display:inline-flex;gap:6px;align-items:center;flex-wrap:wrap;justify-content:center"><span style="white-space:nowrap;display:inline-flex">${tag('Home v3.3')}</span><span>${txt}</span></span>`;
const md = (t) => t.dark ? 'Obsidian' : 'Alabaster';
const ph = (t, inner, c, h = 780) => nphone(t, inner, capn(c+' · '+md(t)), {h});
const kfr = (t, pi, k, cap, cur) => frame(t, PAGES[pi].fn(t,k,cur||INR) + (pi===4?`<div style="height:16px"></div>`+L5(t,k):''), capn(cap + ' · ' + md(t)), 360);
const ttl = (pi) => s(PAGES[pi].title);

const welRow = (t) => row(ph(t,setupP(t),'W1 · Make it yours · brand row, no Skip') + ph(t,track(t,[0,1,4]),'W2 · What do you want to track? · tour button removed') + [0,1,2,3,4].map(i=>ph(t,tourPage(t,i,'fin',{from:'welcome'}),`W${i+3} · ${ttl(i)}`)).join(''),20);
const b1 = board('HV33.1','Home v3.3 · Welcome flow','Make it yours (language, currency, name, theme) opens Welcome and carries the brand row (logo, Kuber). Then What do you want to track?, then the 5 tour pages, then Home. From W2 on, Skip is always in the same top-right place: on W2 it moves on to tour page 1, on W3 to W7 it opens Home. No Try it inside Welcome. Every frame is a rest frame. Order and rules in flow.md.',
  sub('Alabaster · Signature', welRow(AL)) + sub('Obsidian · Signature', welRow(OB))
  + sub('Tour page 1 when the currency is not INR', row([ph(AL,tourPage(AL,0,'fin',{from:'welcome',c:USD}),'W3 · USD, no SMS line'), ph(OB,tourPage(OB,0,'fin',{from:'welcome',c:USD}),'W3 · USD, no SMS line')].join(''),20), 'Same animation with amounts in the currency picked on Make it yours. The subhead drops the bank SMS sentence.'));

const moreRow = (t) => row(ph(t,moreP(t),'More › Tutorial · Why Kuber? replaces Welcome Tour') + [0,1,2,3,4].map(i=>ph(t,tourPage(t,i,'fin',{from:'more'}),`M${i+1} · ${ttl(i)} · Try it`)).join(''),20);
const b2 = board('HV33.2','Home v3.3 · From More (and the Home card)','Same 5 pages and animations, plus a Try it button per page that closes the tour and opens that feature. 5 dots. Skip on pages 1 to 4 closes the tour. Page 5 ends with Done.',
  sub('Alabaster · Signature', moreRow(AL)) + sub('Obsidian · Signature', moreRow(OB)));

const b3 = board('HV33.3','Home v3.3 · Existing-user Home card','Only for people who finished onboarding before this update, on the first launch after it. Once: under the greeting on every Home layout, never in the top slot. New users never see it. Rules in entry-points.md.',
  sub('First launch after the update', row([ph(AL,homeV1(AL),'v1 Home · card under the greeting',1240), ph(OB,homeV1(OB),'v1 Home',1240), ph(AL,homeV2(AL),'v2 / v3 Home · card under the greeting',1960), ph(OB,homeV2(OB),'v2 / v3 Home',1960), frame(AL, snack(AL,{msg:s('tourCardHidden'),act:'Undo',p:.7}), capn('After the close icon · existing timed snackbar'))].join(''),20), 'Show me opens the tour from page 1 with Try it. The close icon hides it with Undo. Either one, opening the tour from More, or the next app launch retires it for good.'));

const KF = [
  [0, 'Page 1 · Notebook to transactions (INR)', [['k1','K1 · 700 ms · pen writing row 1'],['k2','K2 · 2150 ms · three rows written'],['k3','K3 · 2620 ms · rows lift off the page'],['fin','Rest · 3000 ms · transaction cards']]],
  [1, 'Page 2 · Every account, every category', [['k1','K1 · 600 ms · three accounts'],['k2','K2 · 1500 ms · card cycle and due date'],['k3','K3 · 2400 ms · Pet care being created'],['fin','Rest · 2740 ms']]],
  [2, 'Page 3 · Track more than spending', [['k1','K1 · 900 ms · budget filling, SIP rising'],['k2','K2 · 2000 ms · EMI ring, lent and borrowed'],['fin','Rest · 3100 ms · renewal ticked over']]],
  [3, 'Page 4 · Your spending, at a glance', [['k1','K1 · 600 ms · History scrolling'],['k2','K2 · 1700 ms · search narrows to food'],['k3','K3 · 2500 ms · By category'],['k4','K4 · 3050 ms · Monthly'],['k5','K5 · 3550 ms · Compare'],['fin','Rest · 3900 ms']]],
  [4, 'Page 5 · Go further when you want', [['k1','K1 · 900 ms · Ask Kuber'],['k2','K2 · 1400 ms · Kuber Cards'],['k3','K3 · 2200 ms · Kuber Notes'],['k4','K4 · 2800 ms · Calculators'],['k5','K5 · 3300 ms · Reminders'],['fin','Rest · 3740 ms']]],
];
const b4 = board('HV33.4','Home v3.3 · Keyframes and reduced motion','Each animation plays once when its page first opens (2.7 to 3.9 s) and rests on its last frame. Built-in Flutter animation only. With reduced motion the static frame shows at once. Timings, easing and moving elements in storyboards.md.',
  KF.map(([pi,title,ks])=>sub(title, row(ks.map(([k,c])=>kfr(AL,pi,k,c)).join('') + kfr(OB,pi,'fin','Rest') + kfr(AL,pi,'static','Reduced motion · static'),20))).join('')
  + sub('Page 1 · non-INR (USD)', row([['k1','K1'],['k2','K2'],['k3','K3'],['fin','Rest']].map(([k,c])=>kfr(AL,0,k,c+' · USD',USD)).join('') + kfr(OB,0,'static','Reduced motion · USD',USD),20), 'Identical timing. Only the amount strings change (symbol, decimals, grouping); the subhead under the stage drops the SMS sentence.'));

const b5 = board('HV33.5','Home v3.3 · All 7 themes','Every colour in the stages is a theme role or a harmonized category colour, so each palette follows in light and dark. Page 3 rest frame shown.',
  ['light','dark'].map(m=>sub(m==='light'?'Light':'Dark', row(FAM.map(f=>{ const t = T(f+'_'+m); return frame(t, P3(t,'fin'), capn(t.name), 360); }).join(''),20))).join(''));

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
<header style="margin:0 0 40px;max-width:920px"><div style="font:600 12px/16px 'JetBrains Mono',monospace;letter-spacing:.8px;color:#5B5E66;text-transform:uppercase">Kuber · Home v3.3</div><h1 style="margin:8px 0 8px;font:700 36px/44px Inter;letter-spacing:-.5px;color:#1A1B20">Home v3.3 · How Kuber works, merged into Welcome</h1><p style="margin:0;font:400 15px/24px Inter;color:#44474F;text-wrap:pretty">The 5-page tour is now the Welcome flow, and stays in More with Try it buttons. Existing users get a one-time Home card. No pricing language anywhere. Built on Home v3.2; where they differ, Home v3.3 wins. Shown in Signature light and dark, plus all 7 themes on HV33.5. Specs next to this file: flow.md, entry-points.md, storyboards.md, copy.md, changelog.md, open-decisions.md.</p></header>
${b1}${b2}${b3}${b4}${b5}
</div>
</x-dc>
</body>
</html>
`;

let cmd = `# Home v3.3 · copy\n\nEvery new or changed string in Home v3.3. English source. Keys are \`homeV33_\` + the key below, in all 5 ARB files. All \`homeV32_\` tour strings are retired. Placeholders in braces; no string is built from pieces; amounts and dates use the existing formatters. Demo names (Rahul, Priya, Goa trip, Your Bank) are sample data. No em dashes, no idioms, no pricing words. Headlines are under 7 words.\n\nReused existing keys: Skip (\`skip\`), Continue (\`continueLabel\`, page 5 in Welcome), the What do you want to track? strings (v3), Make it yours strings (v3.1).\n`;
for (const r of COPY) { if (r[0]==='#') { cmd += `\n## ${r[1]}\n\n| Key | English | Notes |\n|---|---|---|\n`; continue; }
  cmd += `| \`homeV33_${r[0]}\` | ${r[1].replace(/\|/g,'\\|')} | ${r[2]} |\n`; }
return { html, copyMd: cmd };
