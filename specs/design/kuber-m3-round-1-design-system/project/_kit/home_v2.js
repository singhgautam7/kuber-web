// Home v2 generator. new Function('K','S', src)(K,S) -> { html, copyMd, contrastMd }
const {T,ty,caps,num,ic,a,card,group,lrow,chev,txn,btn,ibtn,secH,nav,fade,nphone,board,row,spec,swatchPanel,snack,sw,hdr,tag,MONO} = K;
const WG = S.W;

// ---------- copy (single source; copy.md is generated from this) ----------
const COPY = [
['#','Get started card'],
['gsProgress','{done} of 3 done','Eyebrow above the title. {done} is 0 to 3.'],
['gsTitle',"Let's set up Kuber",'Card title in every state except complete.'],
['gsBodyFresh','Import your bank SMS and Kuber adds your transactions for you. Your messages stay on this phone.','Fresh state body.'],
['gsBodyOneDone','Good start. Two more steps to go.','1 of 3 done.'],
['gsBodyTwoDone','Almost there. One more step to go.','2 of 3 done.'],
['gsBodyDenied','Kuber needs permission to read bank SMS. Messages are read on this phone and never uploaded.','SMS permission denied, can ask again.'],
['gsBodyBlocked','SMS access is turned off for Kuber. You can turn it on in your phone settings or paste a bank SMS.','SMS permission permanently denied.'],
['gsStep1','Import from SMS','Step 1. Done after the first SMS-sourced transaction (import or paste).'],
['gsStep2','Add a transaction yourself','Step 2. Done after the first manual or Quick Add transaction.'],
['gsStep3','Set your starting balance','Step 3. Done after any account opening balance is set.'],
['gsStepNeedsPermission','Needs SMS permission','Under step 1 in the denied and blocked states.'],
['gsLimitTitle',"This week's free imports are used",'Limit tile title.'],
['gsLimitBody','{count, plural, =1{1 more SMS is waiting in SMS import. It stays there until you import it.} other{# more SMS are waiting in SMS import. They stay there until you import them.}}','Limit tile body. count = staged, not imported.'],
['gsLimitReset','Free imports reset on {date}.','date = window start + 7 days, short date format of the locale (e.g. 18 Oct).'],
['gsDoneTitle',"You're all set",'Complete state title.'],
['gsDoneBody','Kuber will add more to your Home as you use it.','Complete state body.'],
['gsActImport','Import from SMS','Hero, fresh state. Opens SMS import (asks permission first if needed).'],
['gsActAdd','Add transaction','Secondary, or hero when step 2 is next. Opens Add transaction.'],
['gsActQuick','Quick Add','Secondary. Opens Quick Add full screen.'],
['gsActBalance','Set balance','Hero when step 3 is next. Opens Accounts with the first account selected.'],
['gsActAllow','Allow SMS access','Hero, denied state. Shows the system permission prompt.'],
['gsActSettings','Open phone settings','Hero, blocked state. Opens app settings.'],
['gsActPaste','Paste an SMS','Secondary, denied and blocked. Opens the paste sheet (free, never counts toward the limit).'],
['gsActPro','See Kuber Pro','Text button in the limit tile. Opens the paywall.'],
['gsCloseA11y','Close Get started','Close icon button tooltip and semantics label.'],
['gsClosedSnack','Get started is hidden. You can show it again from Settings.','Snackbar after closing the card.'],
['actUndo','Undo','Snackbar action.'],
['#','Settings (Widgets group)'],
['setGsTitle','Get started card','Settings row title. Home v2 installs only, 30 days after install.'],
['setGsSub','Show setup steps on Home','Settings row subtitle.'],
['setSgTitle','Suggestions on Home','Settings row title. Home v2 installs only.'],
['setSgSub','Tips based on your own transactions','Settings row subtitle.'],
['#','Default widget empty states'],
['wBalanceEmpty','Money in and money out for {month} will show here.','Balance card with no transactions this month. month = full month name.'],
['wBalanceEmptyAct','Add transaction','Text button. Hidden while Get started is visible.'],
['wQuickHelper','Type it or say it. Kuber works out the amount and category.','Under the Quick Add field until the first Quick Add transaction.'],
['wRecentEmptyTitle','No transactions yet','Existing string, reused.'],
['wRecentEmptyBody','Your latest transactions will show here.','Recent transactions with no data.'],
['wRecentEmptyAct','Import from SMS','Text button. Hidden while Get started is visible. Falls back to gsActAdd when SMS is denied or blocked.'],
['wEditMore','{count, plural, =1{1 more widget will turn on when it has something to show.} other{# more widgets will turn on when they have something to show.}}','Under Edit widgets. count = data-gated widgets still waiting. Hidden at 0.'],
['#','Data-gated first appearance'],
['wNewLabel','New on your Home','Pill above the widget header.'],
['wNewStories','Added because your first money story is ready.','insight_stories'],
['wNewStats','Added because you have a week of spending.','spending_stats'],
['wNewAccounts','Added because Kuber found your bank accounts.','home_accounts'],
['wNewChart','Added because you have spending on 3 different days.','seven_day_chart'],
['wNewSms','Added because new bank SMS are waiting.','sms_import_widget'],
['wNewEvents','Added because you have something coming up.','upcoming_events_widget'],
['wNewBudget','Added because you set your first budget.','budget_snapshot'],
['wNewNotes','Added because you wrote your first note.','kuber_notes_widget'],
['#','Edit Home Widgets (Home v2 installs)'],
['edSecOn','On your Home','Section header.'],
['edSgTitle','Suggestions','Pinned first row in On your Home. Same value as the Settings row setSgTitle.'],
['edSgSub','Tips from your own transactions. Always at the top.','Pinned row subtitle.'],
['edSecAuto','Turns on with your data','Section header.'],
['edSecMore','More widgets','Section header for Opt-in widgets.'],
['edAutoNote','These show up by themselves once they have something to show. Turn one on to show it now.','Helper under the section header.'],
['edAutoStories','Turns on when your first money story is ready','Row subtitle while waiting.'],
['edAutoStats','Turns on after a week of spending','Row subtitle while waiting.'],
['edAutoAccounts','Turns on when you add a bank account','Row subtitle while waiting.'],
['edAutoChart','Turns on after spending on 3 different days','Row subtitle while waiting.'],
['edAutoSms','Turns on when bank SMS are waiting','Row subtitle while waiting.'],
['edAutoEvents','Turns on with your first reminder, EMI, SIP or recurring payment','Row subtitle while waiting.'],
['edAutoBudget','Turns on with your first budget','Row subtitle while waiting.'],
['edAutoNotes','Turns on with your first note','Row subtitle while waiting.'],
['#','Suggestion card (shared)'],
['sgNotNow','Not now','Text button. Snoozes this suggestion.'],
['sgDismissA11y',"Don't suggest this again",'Close icon tooltip and semantics label. Dismisses for good.'],
['sgDismissedSnack',"Okay. Kuber won't suggest this again.",'Snackbar after dismiss, with actUndo.'],
['#','Suggestions'],
['sgRecTitle','{merchant} shows up every month','Recurring. merchant = display name of the payee.'],
['sgRecBody',"{amount} around the same date for 3 months. Add it as recurring to see it before it's due.",'Recurring. amount = median of the 3 charges.'],
['sgRecAct','Add as recurring','Opens the recurring form prefilled.'],
['sgRecDone','{merchant} is now a recurring payment.','In-card success.'],
['sgLoanTitle','Paying an EMI?','Loans.'],
['sgLoanBody',"Your SMS show EMI payments to {lender}. Add the loan to see what's left to pay.",'Loans. lender = bank from the SMS sender.'],
['sgLoanAct','Add loan','Opens Add loan prefilled with lender and EMI.'],
['sgLoanDone','Loan added.','In-card success.'],
['sgInvTitle','Investing through a SIP?','Investments.'],
['sgInvBody','Your SMS show a SIP of {amount} a month. Add it to see all your investments in one place.','Investments.'],
['sgInvAct','Add investment','Opens Add investment prefilled.'],
['sgInvDone','Investment added.','In-card success.'],
['sgLedTitle','Did you lend money to {name}?','Lend and borrow, transfer variant.'],
['sgLedBody','You sent {name} {amount} this month. Keep track of it in Lend and borrow.','Lend and borrow, transfer variant.'],
['sgLedNoteTitle','Keep track of money you lent?','Lend and borrow, note variant.'],
['sgLedNoteBody',"Your note \"{note}\" mentions lending money. Add it to Lend and borrow so you don't forget.",'Lend and borrow, note variant. note = note title.'],
['sgLedAct','Track it','Opens a new ledger entry prefilled.'],
['sgLedDone','Added to Lend and borrow.','In-card success.'],
['sgBudTitle','Set a budget for {category}?','Budget.'],
['sgBudBody',"You spent {amount} on {category} in the last 30 days. A budget tells you when you're close.",'Budget.'],
['sgBudAct','Set budget','Opens Add budget, amount prefilled (30-day total rounded up to the next ₹500).'],
['sgBudDone','Budget set for {category}.','In-card success.'],
['sgCcTitle','Add the billing date for {card}','Credit card. card = account name.'],
['sgCcBody',"Kuber can then show this cycle's spending and when the bill is due.",'Credit card.'],
['sgCcAct','Set billing date','Opens the account editor at the billing cycle field.'],
['sgCcDone','Billing date saved.','In-card success.'],
['sgAskTitle','Ask Kuber about your money','Feature discovery.'],
['sgAskBody','Try a question like "How much did I spend on food last month?"','Feature discovery.'],
['sgAskAct','Ask Kuber','Opens Ask Kuber with the sample question in the field.'],
['sgVoiceTitle','Add transactions by voice','Feature discovery.'],
['sgVoiceBody','Tap the mic in Quick Add and say something like "200 for lunch".','Feature discovery.'],
['sgVoiceAct','Try it','Opens Quick Add with the mic listening.'],
['sgWidgetTitle','Put Kuber on your home screen','Feature discovery. Android only.'],
['sgWidgetBody',"See this month's spending and add a transaction without opening the app.",'Feature discovery.'],
['sgWidgetAct','Add widget','Calls requestPinAppWidget.'],
['sgCardsTitle','Keep your cards in Kuber Cards','Feature discovery.'],
['sgCardsBody','Save card details behind your PIN or fingerprint. They stay on this phone.','Feature discovery.'],
['sgCardsAct','Set up Kuber Cards','Opens the Kuber Cards setup flow.'],
];
const CP = {}; for (const r of COPY) if (r[0] !== '#') CP[r[0]] = r[1];
const s = (k, v = {}) => { let x = CP[k]; if (x === undefined) throw new Error('missing copy ' + k);
  x = x.replace(/\{(\w+), plural, =1\{([^{}]*)\} other\{([^{}]*)\}\}/g, (m, n, one, other) => (v[n] == 1 ? one : other).replace(/#/g, v[n]));
  return x.replace(/\{(\w+)\}/g, (m, n) => v[n] !== undefined ? v[n] : m); };

// ---------- small parts ----------
const OB = T('signature_dark'), AL = T('signature_light');
const FAM = ['signature','flewtube','woofsapp','purrhub','honkpe','squeakdin','oinkzon'];
const pill = (t, txt, icn) => `<span style="align-self:flex-start;display:inline-flex;align-items:center;gap:4px;height:24px;padding:0 10px 0 ${icn?6:10}px;border-radius:999px;background:${t.sc};${ty('lM',t.osc,'white-space:nowrap')}">${icn?ic(icn,16,t.osc,1):''}${txt}</span>`;
const tile = (t, n, bg, fg) => `<div style="width:40px;height:40px;border-radius:12px;background:${bg||t.sc};display:flex;align-items:center;justify-content:center;flex:none">${ic(n,20,fg||t.osc)}</div>`;
const tbtn = (t, txt, icn, c) => `<div style="height:40px;padding:0 12px;margin-left:-12px;border-radius:999px;display:inline-flex;align-items:center;gap:8px">${icn?ic(icn,20,c||t.p):''}<span style="${ty('lL',c||t.p,'white-space:nowrap')}">${txt}</span></div>`;
const xbtn = (t) => ibtn(t,'close',{kind:'std',fg:t.onv});

// ---------- Get started card ----------
const GS_DONE = {fresh:[0,0,0],denied:[0,0,0],blocked:[0,0,0],one:[1,0,0],limit:[1,0,0],two:[1,1,0]};
const gsCard = (t, st) => {
  if (st === 'done') return card(t, `<div style="display:flex;gap:16px;align-items:center"><div style="width:48px;height:48px;border-radius:999px;background:${t.p};display:flex;align-items:center;justify-content:center;flex:none">${ic('check',28,t.op)}</div><div style="flex:1;min-width:0"><div style="${ty('tM',t.on)}">${s('gsDoneTitle')}</div><div style="${ty('bM',t.onv)}">${s('gsDoneBody')}</div></div></div>`, {pad:20});
  const d = GS_DONE[st], n = d.filter(Boolean).length, perm = st==='denied'||st==='blocked';
  const bodyK = {fresh:'gsBodyFresh',denied:'gsBodyDenied',blocked:'gsBodyBlocked',one:'gsBodyOneDone',limit:'gsBodyOneDone',two:'gsBodyTwoDone'}[st];
  const steps = ['gsStep1','gsStep2','gsStep3'].map((k,i)=>`<div style="display:flex;align-items:center;gap:12px;min-height:40px">${d[i]?ic('check_circle',24,t.p,1):ic('radio_button_unchecked',24,t.ol)}<div style="flex:1;min-width:0"><div style="${ty('bL',d[i]?t.onv:t.on)}">${s(k)}</div>${perm&&i===0?`<div style="${ty('bS',t.onv)}">${s('gsStepNeedsPermission')}</div>`:''}</div></div>`).join('');
  let hero, sec = [];
  if (st==='denied') { hero=['gsActAllow','sms']; sec=['gsActPaste','gsActAdd']; }
  else if (st==='blocked') { hero=['gsActSettings','open_in_new']; sec=['gsActPaste','gsActAdd']; }
  else if (n===0) { hero=['gsActImport','sms']; sec=['gsActAdd','gsActQuick']; }
  else if (n===1) { hero=['gsActAdd','add']; sec=['gsActQuick']; }
  else hero=['gsActBalance','account_balance_wallet'];
  const limit = st==='limit' ? `<div style="padding:12px 16px 2px;border-radius:16px;background:${t.warnC};display:flex;flex-direction:column;gap:2px;margin-bottom:12px"><div style="${ty('tS',t.onWarnC)}">${s('gsLimitTitle')}</div><div style="${ty('bM',t.onWarnC)}">${s('gsLimitBody',{count:18})}</div><div style="${ty('bS',t.onWarnC)}">${s('gsLimitReset',{date:'18 Oct'})}</div><div>${tbtn(t,s('gsActPro'),'workspace_premium',t.onWarnC)}</div></div>` : '';
  return card(t, `<div style="display:flex;gap:8px;align-items:flex-start"><div style="flex:1;min-width:0;padding-top:4px"><div style="${caps(t.p)}">${s('gsProgress',{done:n})}</div><div style="${ty('tL',t.on,'margin-top:4px')}">${s('gsTitle')}</div></div><div style="margin:-6px -12px 0 0">${xbtn(t)}</div></div>
<div style="${ty('bM',t.onv,'margin-top:4px;text-wrap:pretty')}">${s(bodyK)}</div>
<div style="margin:12px 0">${steps}</div>${limit}
<div style="display:flex">${btn(t,s(hero[0]),{icon:hero[1],full:1})}</div>
${sec.length?`<div style="display:flex;gap:8px;margin-top:8px">${sec.map(k=>btn(t,s(k),{kind:'outlined',full:1})).join('')}</div>`:''}`, {pad:20});
};

// ---------- Suggestion card ----------
const SG = {
  loan:{n:'Loans',i:'account_balance',t:['sgLoanTitle'],b:['sgLoanBody',{lender:'HDFC Bank'}],a:'sgLoanAct',d:['sgLoanDone']},
  cc:{n:'Credit card billing cycle',i:'credit_card',t:['sgCcTitle',{card:'ICICI Amazon Pay'}],b:['sgCcBody'],a:'sgCcAct',d:['sgCcDone']},
  recurring:{n:'Recurring',i:'event_repeat',t:['sgRecTitle',{merchant:'Netflix'}],b:['sgRecBody',{amount:'₹649'}],a:'sgRecAct',d:['sgRecDone',{merchant:'Netflix'}]},
  sip:{n:'Investments',i:'show_chart',t:['sgInvTitle'],b:['sgInvBody',{amount:'₹5,000'}],a:'sgInvAct',d:['sgInvDone']},
  budget:{n:'Budget',i:'savings',t:['sgBudTitle',{category:'Groceries'}],b:['sgBudBody',{amount:'₹9,320',category:'Groceries'}],a:'sgBudAct',d:['sgBudDone',{category:'Groceries'}]},
  ledger:{n:'Lend and borrow · transfer',i:'handshake',t:['sgLedTitle',{name:'Rahul'}],b:['sgLedBody',{name:'Rahul',amount:'₹2,500'}],a:'sgLedAct',d:['sgLedDone']},
  ledgerNote:{n:'Lend and borrow · note',i:'sticky_note_2',t:['sgLedNoteTitle'],b:['sgLedNoteBody',{note:'Goa trip split'}],a:'sgLedAct',d:['sgLedDone']},
  ask:{n:'Discovery · Ask Kuber',i:'auto_awesome',t:['sgAskTitle'],b:['sgAskBody'],a:'sgAskAct'},
  voice:{n:'Discovery · Quick Add voice',i:'mic',t:['sgVoiceTitle'],b:['sgVoiceBody'],a:'sgVoiceAct'},
  widget:{n:'Discovery · Home screen widgets',i:'widgets',t:['sgWidgetTitle'],b:['sgWidgetBody'],a:'sgWidgetAct'},
  cards:{n:'Discovery · Kuber Cards',i:'wallet',t:['sgCardsTitle'],b:['sgCardsBody'],a:'sgCardsAct'},
};
const sgCard = (t, k, o={}) => { const d = SG[k];
  if (o.done) return card(t, `<div style="display:flex;gap:16px;align-items:center;min-height:40px"><div style="width:40px;height:40px;border-radius:999px;background:${t.p};display:flex;align-items:center;justify-content:center;flex:none">${ic('check',22,t.op)}</div><div style="flex:1;min-width:0;${ty('tS',t.on)}">${s(...d.d)}</div></div>`);
  return card(t, `<div style="display:flex;gap:16px;align-items:flex-start">${tile(t,d.i)}<div style="flex:1;min-width:0"><div style="${ty('tM',t.on,'text-wrap:pretty')}">${s(...d.t)}</div><div style="${ty('bM',t.onv,'margin-top:2px;text-wrap:pretty')}">${s(...d.b)}</div></div><div style="margin:-12px -12px 0 -8px">${xbtn(t)}</div></div><div style="display:flex;justify-content:flex-end;gap:8px;margin-top:12px">${btn(t,s('sgNotNow'),{kind:'text'})}${btn(t,s(d.a),{kind:'tonal'})}</div>`); };

// ---------- widgets ----------
const fresh = (t, k, inner) => `<div><div style="display:flex;flex-direction:column;gap:4px;margin-bottom:12px">${pill(t,s('wNewLabel'),'auto_awesome')}<div style="${ty('bS',t.onv)}">${s(k)}</div></div>${inner}</div>`;
const E = {};
E.balance = (t, o={}) => card(t, `<div style="${caps(t.onv)}">October · Net</div><div style="${ty('bM',t.onv,'margin-top:8px;text-wrap:pretty')}">${s('wBalanceEmpty',{month:'October'})}</div>${o.act?`<div style="margin-top:4px">${tbtn(t,s('wBalanceEmptyAct'),'add')}</div>`:''}`, {pad:20});
E.quick = (t) => `<div>${WG.quick(t)}<div style="${ty('bS',t.onv,'padding:8px 20px 0')}">${s('wQuickHelper')}</div></div>`;
E.recent = (t, o={}) => `<div>${secH(t,'Recent transactions')}${card(t,`<div style="display:flex;gap:16px;align-items:flex-start">${tile(t,'receipt_long',t.c3,t.onv)}<div style="flex:1;min-width:0"><div style="${ty('tM',t.on)}">${s('wRecentEmptyTitle')}</div><div style="${ty('bM',t.onv)}">${s('wRecentEmptyBody')}</div>${o.act?`<div style="margin-top:4px">${tbtn(t,s(o.denied?'gsActAdd':'wRecentEmptyAct'),o.denied?'add':'sms')}</div>`:''}</div></div>`)}</div>`;
const recent = (t) => `<div>${secH(t,'Recent transactions',`<span style="${ty('lL',t.p)}">View all</span>`)}${group(t,[
  txn(t,{c:'#EF4444',i:'restaurant',name:'Swiggy',sub:'Dining · HDFC Bank',type:'expense',amt:'486',time:'8:12 PM'}),
  txn(t,{c:'#64748B',i:'local_gas_station',name:'Indian Oil',sub:'Fuel · ICICI Amazon Pay',type:'expense',amt:'1,200',time:'Yesterday'}),
  txn(t,{c:'#22C55E',i:'payments',name:'Salary',sub:'Income · HDFC Bank',type:'income',amt:'65,000',time:'1 Oct'})])}</div>`;
const editBlock = (t, more) => `<div style="display:flex;flex-direction:column;gap:8px">${WG.edit(t)}${more?`<div style="${ty('bS',t.onv,'text-align:center;text-wrap:pretty;padding:0 16px')}">${s('wEditMore',{count:more})}</div>`:''}</div>`;
const home2 = (t, o) => S.homeHeader(t,{badge:o.badge||''}) + `<div style="flex:1;overflow:hidden;position:relative"><div style="padding:0 20px 120px;display:flex;flex-direction:column;gap:28px">${[S.greeting(t), o.slot||'', ...o.w, editBlock(t,o.more)].filter(Boolean).join('')}</div></div>` + fade(t) + nav(t,0);
const BAL = (t) => WG.balance(t,{month:'October'});

// ---------- editor + settings ----------
const edRow = (t, name, sub, on) => lrow(t,{lead:ic('drag_indicator',24,t.onv),title:name,sub,trail:sw(t,on)});
const editor2 = (t) => hdr(t,{back:1,close:1,title:'Edit Home Widgets'}) + `<div style="flex:1;overflow:hidden;padding:0 20px;display:flex;flex-direction:column;gap:24px"><div style="${ty('bM',t.onv)}">Drag the handle to reorder. Toggle to show or hide.</div>
<div>${secH(t,s('edSecOn'))}${group(t,[lrow(t,{lead:ic('push_pin',24,t.onv,1),title:s('edSgTitle'),sub:s('edSgSub'),trail:sw(t,1)}),edRow(t,'Balance Card','Current-month net with income / expense split',1),edRow(t,'Quick Add','One-tap expense / income / transfer entry',1),edRow(t,'Bank Accounts','All accounts and balances',1),edRow(t,'Recent Transactions','Latest activity at a glance',1)])}</div>
<div>${secH(t,s('edSecAuto'))}<div style="${ty('bS',t.onv,'margin:-4px 0 8px;text-wrap:pretty')}">${s('edAutoNote')}</div>${group(t,[['Money Stories','edAutoStories'],['Spending Stats','edAutoStats'],['Income &amp; Expense','edAutoChart'],['SMS Import','edAutoSms'],['Upcoming Events','edAutoEvents'],['Budget Snapshot','edAutoBudget'],['Kuber Notes','edAutoNotes']].map(([n,k])=>edRow(t,n,s(k),0)))}</div>
<div>${secH(t,s('edSecMore'))}${group(t,[edRow(t,'Ask Kuber','Ask about your money, plus one-tap suggestions',0)])}</div></div><div style="flex:none;padding:16px 20px 24px;background:${t.bg};border-top:1px solid ${t.olv}">${btn(t,'Save changes',{size:'l',full:1,kind:'disabled'})}</div>`;
const settingsFrag = (t) => `<div>${secH(t,'Widgets')}${group(t,[lrow(t,{lead:ic('home',24,t.onv),title:'Home Widgets',sub:'4 enabled · drag to reorder',trail:chev(t)}),lrow(t,{lead:ic('insert_chart',24,t.onv),title:'Analytics Widgets',sub:'9 enabled · drag to reorder',trail:chev(t)}),lrow(t,{lead:ic('flag',24,t.onv),title:s('setGsTitle'),sub:s('setGsSub'),trail:sw(t,0)}),lrow(t,{lead:ic('lightbulb',24,t.onv),title:s('setSgTitle'),sub:s('setSgSub'),trail:sw(t,1)})])}</div>`;

// ---------- board helpers ----------
const sub = (title, inner, note) => `<div style="margin:0 0 40px"><div style="font:600 15px/22px Inter;color:#1A1B20;margin:0 0 4px">${title}</div>${note?`<div style="font:400 13px/20px Inter;color:#44474F;margin:0 0 16px;max-width:900px;text-wrap:pretty">${note}</div>`:'<div style="height:12px"></div>'}${inner}</div>`;
const capn = (txt) => `<span style="display:inline-flex;gap:6px;align-items:center;flex-wrap:wrap;justify-content:center">${tag('Home v2')}<span>${txt}</span></span>`;
const frame = (t, inner, cap, w=360) => `<div style="display:flex;flex-direction:column;gap:10px;flex:none;width:${w}px">${swatchPanel(t, inner, w)}<div style="font:500 12px/16px Inter;color:#5B5E66;text-align:center;text-wrap:pretty">${cap}</div></div>`;
const both = (fn, cap) => [AL,OB].map(t=>frame(t, fn(t), cap+' · '+(t.dark?'Obsidian':'Alabaster'))).join('');
const H = 1240;

// ---------- contrast ----------
const lum = (h) => { const n = parseInt(h.slice(1),16); return [(n>>16)&255,(n>>8)&255,n&255].map(v=>{v/=255;return v<=0.03928?v/12.92:Math.pow((v+0.055)/1.055,2.4);}).reduce((s_,v,i)=>s_+v*[0.2126,0.7152,0.0722][i],0); };
const CR = (x,y) => { const A=lum(x), B=lum(y); return (Math.max(A,B)+0.05)/(Math.min(A,B)+0.05); };
const contrast = [];
for (const f of FAM) for (const m of ['light','dark']) { const t = T(f+'_'+m);
  contrast.push({name:t.name, mode:m==='light'?'Alabaster':'Obsidian', label:CR(t.op,t.p), shape:CR(t.p,t.c2), eyebrow:CR(t.p,t.c2), body:CR(t.onv,t.c2), t}); }
const fx = (v) => v.toFixed(1)+':1';

// ---------- boards ----------
const SCREENS = [
  ['Day 1 · new install', 1280, t=>home2(t,{slot:gsCard(t,'fresh'), w:[E.balance(t),E.quick(t),E.recent(t)], more:8})],
  ['After the first SMS import', 1660, t=>home2(t,{slot:gsCard(t,'one'), w:[BAL(t), WG.quick(t), fresh(t,'wNewAccounts',WG.accounts(t)), recent(t)], more:7})],
  ['Get started 2 of 3 · day 3', 1750, t=>home2(t,{slot:gsCard(t,'two'), w:[BAL(t), fresh(t,'wNewStories',WG.stories(t)), WG.quick(t), WG.accounts(t), recent(t)], more:6})],
  ['After graduation · suggestion', 2070, t=>home2(t,{slot:sgCard(t,'recurring'), w:[BAL(t), WG.stories(t), WG.stats(t), WG.quick(t), WG.accounts(t), WG.chart(t), recent(t)], more:4, badge:'1'})],
];
const scrRow = (t) => row(SCREENS.map(([c,h,fn])=>nphone(t, fn(t), capn(c+' · '+(t.dark?'Obsidian':'Alabaster')), {h})).join('') + `<div style="width:2px;align-self:stretch;background:#DCDCE2;margin:0 8px"></div>` + nphone(t, S.home(t), `<span style="display:inline-flex;gap:6px;align-items:center">${tag('Unchanged','old')}<span>Existing user</span></span>`, {h:H}), 20);

const b1 = board('HV2.1','Home v2 · Screens','Four Home v2 moments for a new install, then the existing-user Home for reference. Existing users keep today\'s Home exactly: the right-most phone is rendered by the same builder as Screen 2 - Home. Home v2 phones are drawn at full scroll length; the existing-user reference is cropped to its first 1240px.',
  sub('Alabaster · Signature', scrRow(AL), 'Day 1 has 3 Default widgets under Get started. Empty-state actions are hidden while Get started is on screen, so the card is the only call to action. After the first SMS import, Bank Accounts turns on with its "New on your Home" label because the import created bank accounts. Money Stories turns on once its first story exists. After graduation, the top slot holds one suggestion.')
  + sub('Obsidian · Signature', scrRow(OB)));

const GS_STATES = [['fresh','Fresh'],['one','Partly complete · 1 of 3'],['two','Partly complete · 2 of 3'],['denied','SMS permission denied'],['blocked','SMS permission blocked (do not ask again)'],['limit','Free SMS import limit reached'],['done','Complete · shown once, then gone']];
const b2 = board('HV2.2','Home v2 · Get started card','Full width, first item in the top slot. Steps tick off from real data. The hero is always the action for the first step not yet done. Close hides the card and shows a snackbar with Undo that says where to bring it back.',
  GS_STATES.map(([k,c])=>sub(c, row(both(t=>gsCard(t,k), c), 20))).join('')
  + sub('Close', row([AL,OB].map(t=>frame(t, snack(t,{msg:s('gsClosedSnack'),act:s('actUndo'),p:.7}), 'Snackbar after Close · existing timed snackbar, top of screen')).join(''),20), 'Closing counts as graduation (reason: dismissed). The card collapses (reflow 230ms, easeOutCubic) and the widgets below move up. Undo within the snackbar timer restores it.')
  + sub('Settings · Widgets group', row([AL,OB].map(t=>frame(t, settingsFrag(t), 'Two rows added for Home v2 installs only')).join(''),20), 'Get started card: visible for 30 days after install. Turning it on shows the card with the current progress. Suggestions on Home: turns the suggestion slot off.'));

const b3 = board('HV2.3','Home v2 · Suggestion card','One compact card in the top slot after Get started graduates. Main action (tonal), Not now (snooze), close icon (dismiss for good). Ordered by priority. Every trigger, threshold and cooldown is in suggestion-rules.md.',
  sub('Data-triggered', row(['loan','cc','recurring','sip','budget','ledger','ledgerNote'].map((k,i)=>frame(i%2?OB:AL, sgCard(i%2?OB:AL,k), `${SG[k].n}`)).join(''),20))
  + sub('Feature discovery (only when no data trigger applies)', row(['ask','voice','widget','cards'].map((k,i)=>frame(i%2?OB:AL, sgCard(i%2?OB:AL,k), SG[k].n)).join(''),20)));

const stack = (t, slot, cap) => frame(t, `<div style="display:flex;flex-direction:column;gap:28px">${slot}${BAL(t)}</div>`, cap);
const ghost = (t) => `<div style="height:56px;border-radius:20px;border:1.5px dashed ${t.olv};background:${a(t.c2,.5)};display:flex;align-items:center;justify-content:center;${ty('bS',t.onv)}">collapsing · height and opacity to 0</div>`;
const b4 = board('HV2.4','Home v2 · Suggestion transitions','What happens after each of the three choices. The slot never shows two cards, and a new suggestion never replaces one while the user watches, except after the main action when today\'s new-suggestion allowance is still unused.',
  sub('Main action', row([stack(AL,sgCard(AL,'recurring'),'1 · Showing'), stack(AL,sgCard(AL,'recurring',{done:1}),'2 · Saved in the prefilled flow, back on Home · success for 1600ms'), stack(AL,ghost(AL),'3 · Collapse 230ms easeOutCubic · widgets move up together'), stack(AL,sgCard(AL,'budget'),'4 · Next suggestion, next calendar day (or 600ms later if today\'s allowance is unused) · expand 240ms + fade 150ms')].join(''),20), 'If the user leaves the flow without saving, the card stays as it was. Reduced motion: each step is a 90ms cross-fade.')
  + sub('Not now and dismiss', row([stack(OB,ghost(OB),'Not now · collapse, no snackbar · snoozed 14 days, then 30, then treated as dismissed'), frame(OB, `<div style="display:flex;flex-direction:column;gap:28px">${snack(OB,{msg:s('sgDismissedSnack'),act:s('actUndo'),p:.55})}${BAL(OB)}</div>`, 'Dismiss (close icon) · collapse plus snackbar with Undo · never shown again'), stack(OB,'','Rest of the session · no suggestion after a Not now or dismiss')].join(''),20)));

const GATED = [['wNewAccounts',t=>WG.accounts(t)],['wNewStories',t=>WG.stories(t)],['wNewStats',t=>WG.stats(t)],['wNewChart',t=>WG.chart(t)],['wNewSms',t=>WG.sms(t)],['wNewEvents',t=>WG.events(t)],['wNewBudget',t=>WG.budget(t)],['wNewNotes',t=>WG.notes(t)]];
const b5 = board('HV2.5','Home v2 · Data-gated first appearance','A quiet pill and a one-line reason above the widget the first time it turns on. No animation beyond the normal list insert. The label goes after 3 Home sessions, the first tap on the widget, or 7 days, whichever comes first. At most 2 labels show at once.',
  sub('All Data-gated widgets · Alabaster', row(GATED.map(([k,fn])=>frame(AL, fresh(AL,k,fn(AL)), k)).join(''),20))
  + sub('Obsidian', row(GATED.slice(0,3).map(([k,fn])=>frame(OB, fresh(OB,k,fn(OB)), k)).join(''),20)));

const b6 = board('HV2.6','Home v2 · Default widget empty states','No zeros and no blank charts. Each empty state says what will appear and offers one action. While Get started is on screen the actions are hidden so the card stays the only call to action. They return if Get started is closed before there is data.',
  sub('Balance Card', row(both(t=>E.balance(t),'With Get started')+both(t=>E.balance(t,{act:1}),'Without Get started'),20))
  + sub('Quick Add', row(both(t=>E.quick(t),'Helper line until the first Quick Add transaction'),20), 'The field is already an invitation. The helper line explains voice and parsing, and goes after the first Quick Add transaction.')
  + sub('Recent transactions', row(both(t=>E.recent(t),'With Get started')+frame(AL,E.recent(AL,{act:1}),'Without Get started · Alabaster')+frame(OB,E.recent(OB,{act:1,denied:1}),'Without Get started, SMS denied · Obsidian'),20)));

const b7 = board('HV2.7','Home v2 · Finding hidden widgets','Home already has customization: the Edit widgets button at the bottom of Home opens Edit Home Widgets. Home v2 keeps both, adds a count line under the button, and groups the editor so waiting widgets are visible and can be turned on early.',
  sub('Bottom of Home and the editor', row([frame(AL, editBlock(AL,8), 'Bottom of Home, day 1'), nphone(AL, editor2(AL), capn('Edit Home Widgets · Alabaster'), {h:1240}), nphone(OB, editor2(OB), capn('Edit Home Widgets · Obsidian'), {h:1240})].join(''),20), 'Switch on: shows now, with its normal empty state. Switch off on any widget: stays off, never turns on by itself. A waiting widget that turns on by itself moves to "On your Home". Suggestions is the first row with a pin instead of a drag handle: it cannot be reordered, always renders in the top slot, and its switch is the same setting as Settings › Suggestions on Home (changing either updates both). It appears in the editor once Get started has graduated. Save changes keeps today\'s behaviour (disabled until something changes). Existing users see today\'s editor unchanged.'));

const blk = (txt, k) => `<div style="padding:10px 14px;border-radius:12px;font:500 13px/18px Inter;${k==='slot'?'background:#D8E2FF;color:#00429B':k==='off'?'border:1.5px dashed #C4C6CF;color:#6B6E76':'background:#FFFFFF;border:1px solid #DCDCE2;color:#1A1B20'}">${txt}</div>`;
const pcol = (title, items) => `<div style="width:280px;display:flex;flex-direction:column;gap:8px"><div style="font:600 13px/20px Inter;color:#1A1B20;margin-bottom:4px">${title}</div>${items.map(([x,k])=>blk(x,k)).join('')}</div>`;
const b8 = board('HV2.8','Home v2 · Placement and order','One top slot sits between the greeting and the Balance Card. It holds Get started first, then suggestions, never both. Money Stories keeps its catalog place below the Balance Card, so it never competes for the top. Stories is ambient and recurring; the slot holds one thing to do.',
  row([pcol('Setup phase',[['Header',''],['Greeting',''],['Promo banner · hidden while Get started shows','off'],['Top slot · Get started','slot'],['Balance Card',''],['Money Stories · when its first story exists','off'],['Other widgets in catalog order',''],['Edit widgets + count line','']]),
       pcol('After graduation',[['Header',''],['Greeting',''],['Promo banner · if a campaign is live','off'],['Top slot · one suggestion, only when no promo is showing','slot'],['Balance Card',''],['Money Stories',''],['Other widgets in catalog order',''],['Edit widgets + count line','']]),
       pcol('Existing users (unchanged)',[['Header',''],['Greeting',''],['Promo banner',''],['Balance Card',''],['Money Stories',''],['Saved widget order',''],['Edit widgets','']])].join(''),32)
  + `<div style="height:24px"></div>` + spec('Priority inside the top area: Get started > Promo banner > Suggestion.\nGet started hides the promo banner (setup comes first, and promos are not useful before there is data).\nAfter graduation a live promo wins the session and the suggestion waits; it does not count as shown.\nData-gated widgets insert at their catalog position. If the user has reordered, they go right after the nearest earlier catalog neighbour that is on Home.'));

const b9 = board('HV2.9','Home v2 · Themes and hero contrast','Get started (fresh) in all 7 families, light and dark. The hero is a filled button: label onPrimary on primary needs 4.5:1, the button shape against the card (surfaceContainer) needs 3:1, and the primary eyebrow text needs 4.5:1. Figures are computed from tokens/palettes.json.',
  ['light','dark'].map(m=>sub(m==='light'?'Alabaster':'Obsidian', row(FAM.map(f=>{ const c = contrast.find(x=>x.t.key===f+'_'+m); const ok = c.label>=4.5&&c.shape>=3&&c.eyebrow>=4.5; return frame(c.t, gsCard(c.t,'fresh'), `${c.name}<br><span style="font-family:${MONO}">label ${fx(c.label)} · shape ${fx(c.shape)} · eyebrow ${fx(c.eyebrow)}</span><br>${ok?'Pass':'<b style="color:#BA1A1A">Check</b>'}`); }).join(''),20))).join(''));

const HELMET = `<helmet><meta name="design_doc_mode" content="canvas"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,400,0..1,0&display=block" rel="stylesheet"><style>body{margin:0;background:#ECECF1;font-family:Inter,sans-serif;-webkit-font-smoothing:antialiased}a{color:#0058BE}a:hover{color:#00438F}</style></helmet>`;
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
<header style="margin:0 0 40px;max-width:920px"><div style="font:600 12px/16px 'JetBrains Mono',monospace;letter-spacing:.8px;color:#5B5E66;text-transform:uppercase">Kuber · Home v2</div><h1 style="margin:8px 0 8px;font:700 36px/44px Inter;letter-spacing:-.5px;color:#1A1B20">Home v2 · a simpler first-run Home</h1><p style="margin:0;font:400 15px/24px Inter;color:#44474F;text-wrap:pretty">New installs start with 3 widgets and a Get started card. Widgets that need data turn on when the data exists. After setup, one suggestion at a time comes from the user's own transactions. Existing users keep today's Home. Built on the Kuber M3 tokens and components; specs live next to this file: widget-inventory.md, suggestion-rules.md, copy.md, open-decisions.md.</p></header>
${b1}${b2}${b3}${b4}${b5}${b6}${b7}${b8}${b9}
</div>
</x-dc>
</body>
</html>
`;

// ---------- copy.md ----------
let md = `# Home v2 · copy\n\nEvery new string in Home v2. English source; each key gets an entry in every ARB file. Placeholders in braces; counts use ICU plurals. No string is built by joining other strings. Amounts are formatted by the existing currency formatter (₹, Indian grouping) before they are passed in. Existing strings that Home v2 reuses unchanged are not listed except where noted.\n`;
let open = false;
for (const r of COPY) { if (r[0]==='#') { md += `\n## ${r[1]}\n\n| Key | English | Notes |\n|---|---|---|\n`; continue; }
  md += `| \`homeV2_${r[0]}\` | ${r[1].replace(/\|/g,'\\|')} | ${r[2]} |\n`; }
let cmd = `| Theme | Mode | Hero label (onPrimary on primary) | Button vs card (primary on surfaceContainer) | Eyebrow text (primary on surfaceContainer) | Body (onSurfaceVariant on surfaceContainer) | Result |\n|---|---|---|---|---|---|---|\n`;
for (const c of contrast) cmd += `| ${c.name} | ${c.mode} | ${fx(c.label)} | ${fx(c.shape)} | ${fx(c.eyebrow)} | ${fx(c.body)} | ${c.label>=4.5&&c.shape>=3&&c.eyebrow>=4.5?'Pass':'Check'} |\n`;
return { html, copyMd: md, contrastMd: cmd, contrast: contrast.map(c=>[c.name,c.mode,fx(c.label),fx(c.shape),fx(c.eyebrow)]) };
