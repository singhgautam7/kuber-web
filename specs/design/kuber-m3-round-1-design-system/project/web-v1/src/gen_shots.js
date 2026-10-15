// Web v1 screenshot recreations. In run_script:
//   const SH = await (new Function('W','M','readFile', await readFile('web-v1/src/gen_shots.js')))(W, M, readFile);  -> {LIST, screen, board}
// Each original screenshot redrawn as the same app screen in the M3 UI. Plain screen: no frame, backdrop or added text.
return (async () => {
const {K,S,S2,S3,S4,S5} = W; const {ic,ty,caps,num,cat,money,a,btn,sheet,card,group,lrow,ibtn,MONO,lin} = K;
const L = K.T('signature_light'), D = K.T('signature_dark');
// Ask Kuber with the original's conversation (week spend, credit card bill question, drafted groceries).
const fx = [["uMsg(t,'How much did I spend this month?','1:04 PM')","uMsg(t,'How much did I spend this week?','9:29 PM')"],
 ["kMsg(t,'You have spent ₹19,800 so far this month across 42 transactions. Rent is the biggest share.',{time:'1:04 PM',steps:STEPS,viz:vizTop(t)})","kMsg(t,'You\\'ve spent ₹20,404 this week.',{time:'9:29 PM',steps:STEPS})"],
 ["uMsg(t,'Am I overspending anywhere?','1:05 PM')","uMsg(t,'how do I track credit card bill payments?','9:29 PM')"],
 ["'Shopping is close to its limit: ₹4,410 of ₹5,000 used. Groceries is already over by ₹1,320.',{time:'1:05 PM',steps:STEPS,","'Use a Transfer. Tap the + button and choose Transfer, then set your credit card as the To account and your bank as the From account. That records the payment and lowers the card balance.',{time:'9:29 PM',"],
 ["viz:o.stream?'':vizBudget(t)","viz:''"],
 ["  return askHdr(t,{thinking:o.typing||o.stream,menu:o.menu})","  if (S2.__extra) msgs.push(...S2.__extra(t,uMsg,kMsg));\n  return askHdr(t,{thinking:o.typing||o.stream,menu:o.menu})"],
 ["(o.typing||o.stream?'':askChips(t))","(o.typing||o.stream||S2.__extra?'':askChips(t))"]];
let src2 = await readFile('_kit/screens_new2.js'); const miss = fx.filter(([f])=>!src2.includes(f)).map(([f])=>f.slice(0,48));
for (const [f,r] of fx) src2 = src2.split(f).join(r);
const SA = new Function('K','S', src2)(K,S);
SA.__extra = (t, uMsg, kMsg) => [uMsg(t,'add 250 in groceries','9:29 PM'), kMsg(t,"Here's what I'll add. Review and confirm.",{time:'9:29 PM',viz:card(t,`<div style="display:flex;flex-direction:column;gap:12px"><div style="display:flex;align-items:center;gap:14px">${cat(t,'#10B981','local_grocery_store')}<div style="flex:1;min-width:0"><div style="${ty('tM',t.on)}">Groceries</div><div style="${ty('bM',t.onv)}">Your Bank · Groceries</div></div>${money(t,'expense','250')}</div><div style="display:flex;gap:8px">${btn(t,'Add this transaction',{full:1})}${btn(t,'Cancel',{kind:'outlined'})}</div></div>`,{bgc:t.c1})})];

// Scroll a screen: shifts the first scrolling body up by px (the screen's header stays).
const scrollBy = (h, px) => h.replace(/(<div style="flex:1;overflow:hidden[^"]*">\s*<div style=")/, `$1margin-top:-${px}px;`);
// Sheet: Paste an SMS with an OTP detected (SMS Import · OTP protection).
const otpSheet = (t) => sheet(t,{title:'Paste an SMS',sub2:'Long-press your bank SMS, copy, and paste here. Kuber parses it locally.',mh:540,gap:16,body:`<div style="min-height:132px;padding:16px;border-radius:16px;background:${t.c3};box-sizing:border-box;box-shadow:inset 0 0 0 2px ${t.warn};font:400 13px/20px ${MONO};color:${t.on}">OTP is 252044 for txn of INR 194.00 at FOOD DELIVERY on Your Bank card ending 1480. Valid till 09:29. Do not share OTP for security reasons<span style="display:inline-block;width:2px;height:16px;background:${t.p};vertical-align:-3px;margin-left:1px"></span></div>
<div style="padding:16px;border-radius:16px;background:${t.warnC};display:flex;gap:12px;align-items:flex-start">${ic('lock',22,t.onWarnC)}<div><div style="${ty('tM',t.onWarnC)}">This looks like an OTP.</div><div style="${ty('bM',t.onWarnC,'margin-top:2px')}">Kuber never imports messages with verification codes. Paste a transaction confirmation instead.</div></div></div>
<div style="display:flex;flex-direction:column;gap:8px;align-items:center"><div style="display:flex;width:100%">${btn(t,'Review this transaction',{kind:'disabled',size:'l',full:1})}</div><div style="${ty('bS',t.onv,'white-space:nowrap')}">Disabled while an OTP is detected.</div></div>`});
// Sheet: Select language over Settings (Multi-lingual).
const LANGS = [['English',''],['हिन्दी','Hindi'],['मराठी','Marathi'],['ਪੰਜਾਬੀ','Punjabi'],['বাংলা','Bengali'],['తెలుగు','Telugu'],['தமிழ்','Tamil'],['മലയാളം','Malayalam'],['ಕನ್ನಡ','Kannada']];
const INDIC = "'Noto Sans Devanagari','Noto Sans Gurmukhi','Noto Sans Bengali','Noto Sans Telugu','Noto Sans Tamil','Noto Sans Malayalam','Noto Sans Kannada',Inter,sans-serif";
const langSheet = (t) => sheet(t,{title:'Select language',mh:700,gap:0,bp:'0 0 24px',body:LANGS.map(([n,s],i)=>`<div style="min-height:${s?64:56}px;padding:8px 24px;box-sizing:border-box;display:flex;align-items:center;gap:16px;${i===0?'background:'+t.sc+';':''}"><div style="flex:1"><div style="font:${i===0?600:500} 16px/24px ${INDIC};color:${i===0?t.osc:t.on}">${n}</div>${s?`<div style="${ty('bS',t.onv)}">${s}</div>`:''}</div>${i===0?ic('check',22,t.osc):''}</div>`).join('')});
// Money Story viewer (Money Stories 02 to 05).
const STORY = { weekly:['bar_chart','Weekly'], monthly:['calendar_month','Monthly'], insights:['auto_awesome','Insights'] };
const story = (t, kind, seg, body) => { const [i,n] = STORY[kind]; const [bg,fg] = kind==='monthly'?[t.warnC,t.onWarnC]:kind==='insights'?[t.sc,t.osc]:[t.pc,t.opc];
  return `<div style="position:absolute;inset:0;background:${bg};display:flex;flex-direction:column;padding:40px 20px 32px;box-sizing:border-box;z-index:2">
<div style="display:flex;gap:4px">${[0,1,2,3,4,5].map(k=>`<div style="flex:1;height:4px;border-radius:999px;background:${k<seg?fg:a(fg==='currentColor'?'#000000':fg,.24)}"></div>`).join('')}</div>
<div style="display:flex;align-items:center;gap:10px;margin-top:12px"><div style="width:32px;height:32px;border-radius:10px;background:${a(fg,.14)};display:flex;align-items:center;justify-content:center">${ic(i,18,fg,1)}</div><span style="${ty('tS',fg)}">${n}</span><span style="${ty('bS',fg,'opacity:.8;white-space:nowrap')}">44m ago</span><span style="flex:1"></span>${ic('share',22,fg)}<span style="width:16px"></span>${ic('close',22,fg)}</div>
<div style="flex:1;display:flex;flex-direction:column;padding-top:32px">${body(fg)}</div></div>`; };
const eyebrow = (fg, a_, b) => `<div style="${caps(fg)}">${a_}</div>${b?`<div style="${ty('bS',fg,'opacity:.8;margin-top:4px')}">${b}</div>`:''}`;
const big = (fg, v, s=56) => `<div style="font:800 ${s}px/${s+8}px Inter,sans-serif;letter-spacing:-1.5px;color:${fg};${num}">${v}</div>`;
const STORIES = {
 recap: (t) => story(t,'weekly',1,(fg)=>`${eyebrow(fg,'Weekly recap','24 Aug to 30 Aug 2026')}<div style="flex:1;display:flex;flex-direction:column;justify-content:center">${big(fg,'₹5,054',64)}<div style="${ty('hS',fg)}">spent last week</div></div><div style="${ty('bM',fg,'opacity:.85')}">₹2,714 less than the week before</div>`),
 wow: (t) => story(t,'weekly',2,(fg)=>`${eyebrow(fg,'Compared')}<div style="flex:1;display:flex;flex-direction:column;justify-content:center;gap:12px"><div style="${ty('hM',fg,'margin-bottom:8px')}">You spent less than before</div>${[['Previous week (17 to 23 Aug)','₹7,768'],['This week (24 to 30 Aug)','₹5,054']].map(([l,v],k)=>`<div style="padding:16px;border-radius:20px;background:${a(fg,k?.16:.08)}"><div style="${caps(fg,'opacity:.85')}">${l}</div><div style="${ty('hM',fg,num+'margin-top:4px')}">${v}</div></div>`).join('')}<div style="display:flex"><span style="display:inline-flex;align-items:center;gap:6px;height:32px;padding:0 12px;border-radius:999px;background:${a(fg,.16)};${ty('lL',fg)}">${ic('trending_down',18,fg)}₹2,714 less</span></div></div>`),
 top: (t) => story(t,'monthly',3,(fg)=>`${eyebrow(fg,'Monthly recap','August 2026')}<div style="flex:1;display:flex;flex-direction:column;justify-content:center"><div style="${ty('hM',fg,'margin-bottom:16px')}">Top categories</div>${[['Rent','₹18,000'],['Dining','₹9,060'],['Fuel','₹7,850'],['Groceries','₹6,202']].map(([n,v],k)=>`<div style="display:flex;justify-content:space-between;align-items:baseline;padding:12px 0;${k?'border-top:1px solid '+a(fg,.2)+';':''}"><span style="${ty('bL',fg)}">${n}</span><span style="${ty('tL',fg,num)}">${v}</span></div>`).join('')}</div>`),
 weekend: (t) => story(t,'insights',4,(fg)=>`${eyebrow(fg,'Weekend pattern')}<div style="flex:1;display:flex;flex-direction:column;justify-content:center"><div style="font:700 32px/40px Inter,sans-serif;letter-spacing:-.5px;color:${fg}">Weekend transactions average <span style="color:${t.p}">₹631</span> vs <span style="color:${t.p}">₹200</span> on weekdays</div></div>`),
};
const H1 = 781.5, H2 = 731; // 1080 x 2344 and 1080 x 2193 at 3x
const S_ = (slug, orig, base, h, note, fn) => ({slug, orig, base, h, note, fn});
const LIST = [
 S_('ask-kuber','01-ask-kuber-obsidian.jpg','01-ask-kuber',H1,'Ask Kuber, empty state with suggested questions',t=>S2.askEmpty(t)),
 S_('ask-kuber','02-draft-transaction-obsidian.jpg','02-draft-transaction',H1,'Ask Kuber chat ending in a drafted transaction',t=>SA.askChat(t)),
 S_('automatic-backups','01-automatic-backups-obsidian.jpg','01-automatic-backups',H1,'Automatic Backups settings',t=>S2.backups(t)),
 S_('calculators','01-tools-hub-obsidian.jpg','01-tools-hub',H2,'Calculators and Tools hub',t=>S5.toolsHub(t)),
 S_('calculators','02-emi-calculator-obsidian.jpg','02-emi-calculator',H2,'EMI Calculator, inputs and result',t=>S5.C.emi(t,{})),
 S_('calculators','03-amortization-breakdown-obsidian.jpg','03-amortization-breakdown',H2,'EMI Calculator scrolled to breakdown and schedule',t=>scrollBy(S5.C.emi(t,{}),470)),
 S_('calculators','04-calculator-catalogue-obsidian.jpg','04-calculator-catalogue',H2,'Calculators and Tools hub scrolled to the catalogue',t=>scrollBy(S5.toolsHub(t),640)),
 S_('detailed-analytics','01-income-expense-chart-obsidian.jpg','01-income-expense-chart',H1,'Analytics: summary and Income and Expense chart',t=>S.analytics(t)),
 S_('detailed-analytics','02-weekly-heatmap-obsidian.jpg','02-weekly-heatmap',H1,'Analytics scrolled to Avg Weekly Heatmap',t=>S.analytics(t,{top:560})),
 S_('detailed-analytics','03-transaction-size-and-categories-obsidian.jpg','03-transaction-size-and-categories',H1,'Analytics scrolled to Transaction Size and Spending by category',t=>S.analytics(t,{top:1040})),
 S_('detailed-analytics','04-tag-analytics-and-biggest-txns-obsidian.jpg','04-tag-analytics-and-biggest-txns',H1,'Analytics scrolled to Tag-wise Analytics and Biggest Transactions',t=>S.analytics(t,{top:1790})),
 S_('detailed-analytics','05-advanced-analytics-hub-obsidian.jpg','05-advanced-analytics-hub',H1,'Advanced Analytics hub',t=>S.advanced(t)),
 S_('detailed-analytics','06-financial-health-score-obsidian.jpg','06-financial-health-score',H1,'Financial health score',t=>S5.health(t)),
 S_('expense-tracking','01-home-obsidian.jpg + 01-home-alabaster.jpg','01-home',H1,'Home',t=>S.home(t)),
 S_('expense-tracking','02-add-transaction.jpg','02-add-transaction',H1,'Add Transaction with an autofill suggestion',t=>S.add(t,{name:'Gro',focus:1,suggest:1})),
 S_('home-widgets','01-edit-home-widgets-obsidian.jpg','01-edit-home-widgets',H1,'Edit Home Widgets',t=>S.editWidgets(t)),
 S_('investments','01-investments-obsidian.jpg','01-investments',H1,'Investments',t=>S3.investments(t)),
 S_('kuber-notes','01-kuber-notes-obsidian.jpg','01-kuber-notes',H1,'Kuber Notes editor with live math',t=>S4.noteEditor(t)),
 S_('lent-borrowed','01-lent-borrowed-obsidian.jpg','01-lent-borrowed',H1,'Lent and Borrowed ledger',t=>S3.ledger(t)),
 S_('loans','01-loans-obsidian.jpg','01-loans',H1,'Loans',t=>S3.loans(t)),
 S_('money-stories','01-home-story-bubbles-obsidian.jpg','01-home-story-bubbles',H1,'Home with the Money Stories row',t=>S.home(t)),
 S_('money-stories','02-weekly-recap-story-obsidian.jpg','02-weekly-recap-story',H1,'Story: weekly recap',t=>STORIES.recap(t)),
 S_('money-stories','03-week-over-week-comparison-obsidian.jpg','03-week-over-week-comparison',H1,'Story: week over week',t=>STORIES.wow(t)),
 S_('money-stories','04-monthly-top-categories-obsidian.jpg','04-monthly-top-categories',H1,'Story: monthly top categories',t=>STORIES.top(t)),
 S_('money-stories','05-weekend-habits-insight-obsidian.jpg','05-weekend-habits-insight',H1,'Story: weekend pattern insight',t=>STORIES.weekend(t)),
 S_('multi-lingual','01-select-language-obsidian.jpg','01-select-language',H1,'Select language sheet over Settings',t=>S2.settings(t)+langSheet(t)),
 S_('powerful-filtering','01-transaction-history-obsidian.jpg','01-transaction-history',H1,'History',t=>S.history(t)),
 S_('powerful-filtering','02-advanced-filters-obsidian.jpg','02-advanced-filters',H1,'History filters',t=>S.histFilter(t)),
 S_('powerful-filtering','03-category-filters-obsidian.jpg','03-category-filters',H1,'History filters scrolled to accounts and categories',t=>scrollBy(S.histFilter(t),420)),
 S_('privacy-mode','01-privacy-mode-masked-obsidian.jpg','01-privacy-mode-masked',H2,'Home with privacy mode on',t=>S.home(t,{private:1})),
 S_('pro-plans','01-pro-plans-obsidian.jpg','01-pro-plans',H1,'Kuber Pro scrolled to What Pro includes',t=>S3.pro(t,{top:720})),
 S_('quick-add','01-home-widget-obsidian.jpg','01-home-widget',H1,'Home scrolled to the Quick Add widget',t=>S.home(t,{top:370})),
 S_('quick-add','02-parsed-transactions-obsidian.jpg','02-parsed-transactions',H1,'Quick Add with two transactions detected',t=>S2.quickAdd(t,{state:'two'})),
 S_('quick-add','03-voice-add-obsidian.jpg','03-voice-add',H1,'Quick Add voice sheet, listening',t=>(S2.quickAdd(t)+S2.qaVoiceSheet(t,'listening')).split('250 groceries and 300 mo').join('add 250 in groceries')),
 S_('recurring-transactions','01-recurring-transactions-obsidian.jpg','01-recurring-transactions',H1,'Recurring',t=>S3.recurring(t)),
 S_('reminders','01-reminders-list-obsidian.jpg','01-reminders-list',H1,'Reminders',t=>S4.reminders(t)),
 S_('reminders','02-new-reminder-obsidian.jpg','02-new-reminder',H1,'New reminder',t=>S4.remForm(t)),
 S_('shortcuts','01-quick-actions-obsidian.jpg','01-quick-actions',H1,'Quick Actions sheet over Home',t=>S.home(t)+S.quickActions(t)),
 S_('shortcuts','02-add-new-shortcuts-obsidian.jpg','02-add-new-shortcuts',H1,'Add New sheet over Home',t=>S.home(t)+S.addNew(t)),
 S_('sms-import','01-sms-inbox-obsidian.jpg','01-sms-inbox',H2,'Import from SMS, Unreviewed',t=>S2.sms(t)),
 S_('sms-import','02-otp-protection-obsidian.jpg','02-otp-protection',H2,'Paste an SMS sheet with an OTP detected',t=>S2.sms(t)+otpSheet(t)),
 S_('sms-import','03-review-transaction-obsidian.jpg','03-review-transaction',H2,'Review SMS sheet',t=>S2.sms(t,{review:1})),
 S_('themes','01-theme-picker-obsidian.jpg','01-theme-picker',H2,'Theme sheet over Settings',t=>S2.settings(t)+S2.themeSheet(t)),
 S_('upcoming-events','01-upcoming-events-obsidian.jpg','01-upcoming-events',H1,'Upcoming Events',t=>S4.events(t)),
 S_('voice-input','01-voice-add-obsidian.jpg','01-voice-add',H1,'Quick Add voice sheet, listening',t=>(S2.quickAdd(t)+S2.qaVoiceSheet(t,'listening')).split('250 groceries and 300 mo').join('add 250 in groceries')),
 S_('press','home.jpg','home',H1,'Press kit · Home',t=>S.home(t)),
 S_('press','more.jpg','more',H1,'Press kit · Spaces (More tab)',t=>S.more(t)),
 S_('press','add.jpg','add',H1,'Press kit · Add transaction',t=>S.add(t,{name:'Gro',focus:1,suggest:1})),
 S_('press','settings.jpg','settings',H1,'Press kit · Settings',t=>S2.settings(t)),
];
const sid = (s, m) => `ss-${s.slug}-${s.base}-${m}`;
const screen = (s, t, m) => `<div id="${sid(s,m)}" style="width:360px;height:${s.h}px;flex:none;background:${t.bg};position:relative;overflow:hidden;display:flex;flex-direction:column;font-family:Inter,sans-serif">${K.sbar(t.on)}${M.clean(s.fn(t))}</div>`;
const tagS = `font:700 12px/16px ${MONO};color:#00429B;text-decoration:none;padding:2px 8px;border-radius:6px;background:#D8E2FF`;
const cap = (x) => `<span style="font:500 12px/16px ${MONO};color:#5B5E66">${x}</span>`;
const cell = (s) => `<div style="display:flex;flex-direction:column;gap:10px;flex:none">
<div style="display:flex;flex-direction:column;gap:2px;max-width:744px"><span style="font:600 13px/18px Inter;color:#1A1B20">${s.note}</span>${cap(`was ${s.orig} · 1080 × ${Math.round(s.h*3)}`)}</div>
<div style="display:flex;gap:24px">${[['light',L],['dark',D]].map(([m,t])=>`<div style="display:flex;flex-direction:column;gap:6px"><div style="border-radius:12px;overflow:hidden;outline:1px solid #DCDCE2">${screen(s,t,m)}</div>${cap(`${s.base}-${m}.png`)}</div>`).join('')}</div></div>`;
const groups = [...new Set(LIST.map(s=>s.slug))];
const board = () => groups.map((g,gi)=>`<section id="S${gi+1}" data-screen-label="S${gi+1} ${g}" style="margin:0 0 40px;padding:28px 32px;background:#F6F6F9;border-radius:28px;border:1px solid #DCDCE2;width:max-content;max-width:2400px">
<div style="display:flex;align-items:baseline;gap:12px;margin-bottom:20px"><a href="#S${gi+1}" style="${tagS}">S${gi+1}</a><h2 style="margin:0;font:700 22px/28px Inter;color:#1A1B20;white-space:nowrap">${g==='press'?'Press kit':g}</h2>${cap(g==='press'?'public/assets/screens/ → web-v1/screenshots/press/':`src/assets/screenshots/features/${g}/ → web-v1/screenshots/${g}/`)}</div>
<div style="display:flex;flex-wrap:wrap;gap:40px 56px">${LIST.filter(s=>s.slug===g).map(cell).join('')}</div></section>`).join('');
return {LIST, screen, board, sid, miss, L, D};
})();
