// Web v1 · Feature pages: content for the 28 remaining feature pages + their light screenshots.
// In run_script: const FP = await (new Function('W','M','G','I','readFile', await readFile('web-v1/src/gen_feat.js')))(W, M, G, I, readFile);
return (async () => {
const {K,S,S2,S3} = W; const {ic,ty,caps,num,cat,money,btn,card,group,lrow,MONO} = K;
const L = K.T('signature_light');
// ----- patched app modules (same builders, sample data aligned to the SMS Import page) -----
const patch = (src, list) => { const miss = []; for (const [f,r] of list) { if (!src.includes(f)) miss.push(f.slice(0,50)); src = src.split(f).join(r); } return [src, miss]; };
const MISS = [];
let [s2, m2] = patch(await readFile('_kit/screens_new2.js'), [
 ["S2.askChat = (t, o={}) => { const msgs = [", "S2.askChat = (t, o={}) => { const msgs = S2.__msgs ? S2.__msgs(t,{uMsg,kMsg,STEPS}) : ["],
 ["(o.typing||o.stream?'':askChips(t))", "(o.typing||o.stream||S2.__msgs?'':askChips(t))"],
 ["const QA = {", "const QA = {\n  movies2: (t) => qaCard(t,{lead:cat(t,'#D946EF','movie'),title:'Movies',sub:'HDFC Bank · Movies',type:'expense',amt:'300',edit:1}),\n  trip: (t) => qaCard(t,{lead:cat(t,'#F59E0B','luggage'),title:'Trip',sub:'HDFC Bank · New category',type:'expense',amt:'650',edit:1,extra:`<div style=\"display:flex;align-items:center;gap:8px;padding:8px 12px;border-radius:12px;background:${t.c3};${ty('bS',t.onv)}\">${ic('new_label',16,t.p)}<span style=\"flex:1\">Creating a new category named \"Trip\"</span></div><div>${btn(t,'Select different category',{kind:'text'})}</div>`}),"],
 ["two:{v:'250 groceries and 300 movies',rows:['groceries','movies'],n:2}", "two:{v:'250 groceries and 300 movies',rows:['groceries','movies'],n:2}, trip:{v:'300 in movies\\n650 in trip',rows:['movies2','trip'],n:2}"]]);
MISS.push(...m2); const SA = new Function('K','S', s2)(K,S);
let [s4, m4] = patch(await readFile('_kit/screens_new4.js'), [
 [",['#0F766E','SBI','RUPAY','1207','Debit']]", "]"], ["Showing 3 cards", "Showing 2 cards"]]);
MISS.push(...m4); const S4b = new Function('K','S','S3', s4)(K,S,S3);
let [s5, m5] = patch(await readFile('_kit/screens_new5.js'), [
 ["chips(t,['Dining','Groceries','Rent','Fuel','Shopping','Utilities'],[0])", "chips(t,['Dining','Groceries','Rent','Fuel','Shopping','Utilities'],[0,1,4])"],
 ["field(t,{label:'Max',ph:'Max'})", "field(t,{label:'Max',value:'₹10,000'})"],
 ["chips(t,['HDFC Bank','ICICI Amazon Pay','Cash','Paytm Wallet'],[0])", "chips(t,['Your Bank','Savings Bank','Rewards Card','Cash'],[0])"]]);
MISS.push(...m5); const S5b = new Function('K','S','S3','S4', s5)(K,S,S3,S4b);
const scrollBy = (h, px) => h.replace(/(<div style="flex:1;overflow:hidden[^"]*">\s*<div style=")/, `$1margin-top:-${px}px;`);
const ask = (fn) => (t) => { SA.__msgs = fn; const h = SA.askChat(t); SA.__msgs = null; return h; };
const vizFood = (t) => card(t, `<div style="${caps(t.onv,'margin-bottom:12px')}">Food · September</div><div style="display:flex;flex-direction:column;gap:14px">${[['#10B981','local_grocery_store','Groceries','₹6,240',1],['#EF4444','restaurant','Dining out','₹2,600',.42]].map(([c,i,n,v,p])=>`<div style="display:flex;flex-direction:column;gap:8px"><div style="display:flex;align-items:center;gap:12px">${cat(t,c,i,{s:32,g:18})}<span style="flex:1;${ty('tS',t.on)}">${n}</span><span style="${ty('tS',t.on,num)}">${v}</span></div>${K.lin(t,p,'normal',{flat:1})}</div>`).join('')}</div>`,{bgc:t.c1});
const draft = (t) => card(t,`<div style="display:flex;flex-direction:column;gap:12px"><div style="display:flex;align-items:center;gap:8px;${ty('lM',t.p,'letter-spacing:.8px;text-transform:uppercase')}">${ic('edit_note',18,t.p)}Draft</div><div style="display:flex;align-items:center;gap:14px">${cat(t,'#10B981','local_grocery_store')}<div style="flex:1;min-width:0"><div style="${ty('tM',t.on)}">Groceries</div><div style="${ty('bM',t.onv)}">Your Bank · Today</div></div>${money(t,'expense','250')}</div><div style="display:flex;gap:8px;justify-content:flex-end">${btn(t,'Edit',{kind:'outlined'})}${btn(t,'Confirm',{icon:'check'})}</div></div>`,{bgc:t.c1});
// Kuber Notes editor with the grocery list from the original screenshot.
const nhl = (t, v) => `<span style="color:${t.p};font-weight:600">${v}</span>`;
const res = (t, v) => `<span style="padding:1px 6px;border-radius:6px;background:${t.sc};color:${t.osc};font-weight:600">${v}</span>`;
const notes = (t, tap) => { const h = S4b.noteEditor(t,{tap}).split('Tapped from note: Goa trip split').join('Tapped from note: Welcome to Kuber Notes').split('₹14,500').join('₹1,045'); const a = h.indexOf('<div style="flex:1;overflow:hidden;padding:0 20px'); const b = h.indexOf('<div style="flex:none;padding:8px 12px 20px;border-top');
  const P = (x) => `<div style="${ty('bL',t.on,'line-height:28px')}">${x}</div>`;
  return h.slice(0,a) + `<div style="flex:1;overflow:hidden;padding:0 20px;display:flex;flex-direction:column;gap:14px"><div style="${ty('hM',t.on)}">Welcome to Kuber Notes</div>${P('Kuber Notes is a place to jot down expenses, do quick math, and turn them into real transactions.')}${P("Here's a simple grocery list:")}<div style="display:flex;flex-direction:column">${[`Milk ${nhl(t,'60')}`,`Bread ${nhl(t,'45')}`,`Eggs ${nhl(t,'90')}`,`Vegetables ${nhl(t,'220')} * ${nhl(t,'4')} = ${res(t,'880')}`,`<span style="color:${t.exp};font-weight:600">-30</span> (discount)`,`Total ${tap?`<span style="padding:1px 6px;border-radius:6px;background:${t.p};color:${t.op};font-weight:600">1,045</span>`:res(t,'1,045')}`].map(P).join('')}</div>${P('Type "total" or "=" on a new line below to see the magic.')}${P(`You can also tap any highlighted number for quick actions: ${nhl(t,'₹500')}`)}</div>` + h.slice(b); };

// ----- screenshots (light). [slug, base, height, based-on, builder, note] -----
const H1 = 781.5, H2 = 731;
const SHOT = [
 ['expense-tracking','01-home',H1,'Screen 2 · Home',t=>S.home(t),'reused'],
 ['expense-tracking','02-add-transaction',H1,'Screen 4 · Add Transaction with autofill suggestions',t=>S.add(t,{name:'Gro',focus:1,suggest:1}),'reused'],
 ['ask-kuber','01-ask-kuber',H1,'Screen 8 · Ask Kuber chat',ask((t,{uMsg,kMsg,STEPS})=>[uMsg(t,'How much did I spend on food last month?','1:04 PM'),kMsg(t,'You spent ₹8,840 on food in September across 23 transactions. Groceries were the biggest share.',{time:'1:04 PM',steps:STEPS,viz:vizFood(t)})]),'new'],
 ['ask-kuber','02-draft-transaction',H1,'Screen 8 · Ask Kuber chat with a drafted transaction',ask((t,{uMsg,kMsg})=>[uMsg(t,'How much did I spend this week?','9:29 PM'),kMsg(t,"You've spent ₹4,120 this week.",{time:'9:29 PM'}),uMsg(t,'add 250 in groceries','9:30 PM'),kMsg(t,"Here's a draft. Check it and confirm.",{time:'9:30 PM',viz:draft(t)})]),'new'],
 ['kuber-cards','02-kuber-cards',H1,'Screen 24 · Kuber Cards (2 cards)',t=>S4b.cards(t),'new'],
 ['kuber-cards','01-kuber-cards-unlock',H1,'Screen 24 · Kuber Cards unlock (PIN pad + fingerprint)',t=>S4b.cardsUnlock(t).split('">Kuber Cards</div>').join('white-space:nowrap">Kuber Cards</div>').split('text-align:center">Unlock with').join('text-align:center;white-space:nowrap">Unlock with'),'new'],
 ['kuber-notes','01-kuber-notes',H1,'Screen 23 · Kuber Notes editor',t=>notes(t),'new'],
 ['kuber-notes','02-number-actions',H1,'Screen 23 · Kuber Notes, tapped number sheet (add as transaction, recurring, investment, loan, lent / borrow)',t=>notes(t,1),'new'],
 ['quick-add','01-home-widget',H1,'Screen 2 · Home, Quick Add widget with text typed',t=>S.home(t,{top:370,value:'300 in movies, 650 in trip'}),'new'],
 ['quick-add','02-parsed-transactions',H1,'Screen 10 · Quick Add, two entries detected',t=>SA.quickAdd(t,{state:'trip'}),'new'],
 ['voice-input','01-voice-add',H1,'Screen 10 · Quick Add voice sheet, listening',t=>(S2.quickAdd(t)+S2.qaVoiceSheet(t,'listening')).split('250 groceries and 300 mo').join('add 250 in groceries'),'reused'],
 ['powerful-filtering','01-transaction-history',H1,'Screen 5 · History with summary header',t=>S.history(t),'reused'],
 ['powerful-filtering','02-advanced-filters',H1,'Screen 5 · History filters sheet',t=>S.histFilter(t),'new'],
 ['powerful-filtering','03-category-filters',H1,'Screen 5 · History filters, accounts and categories (3 selected)',t=>scrollBy(S.histFilter(t),420),'new'],
].map(([slug,base,h,from,fn,kind])=>({slug,base,h,from,fn,kind}));
const sid = (s) => `fs-${s.slug}-${s.base}`;
const screen = (s) => `<div id="${sid(s)}" style="width:360px;height:${s.h}px;flex:none;background:${L.bg};position:relative;overflow:hidden;display:flex;flex-direction:column;font-family:Inter,sans-serif">${K.sbar(L.on)}${M.clean(s.fn(L))}</div>`;

// ----- page content (content/features/*.md, verbatim) -----
const PAGES = {
 'expense-tracking': {nav:[['Quick Add FAB',['Bottom Navigation','Tap + Button']],['Home feed',['Home tab','Recent Transactions','Tap any transaction']],['History feed',['History tab','Tap any transaction or +']]], rel:['quick-add','recurring-transactions','sms-import'],
  body:`- Log income, expenses and transfers in seconds. As you type, Kuber suggests the category, account and merchant based on your previous transactions, so repeat entries are almost automatic. Recurring entries are supported too, and everything stays on your device.\n- You can also use the calculator button for complex transactions, or attach pdf or images to the transactions.`,
  shots:[['01-home','Home'],['02-add-transaction','Add Transaction']]},
 'ask-kuber': {nav:[['Direct menu',['More tab','Ask Kuber']],['Home widget',['Home tab','Ask Kuber widget'],'if enabled in home widgets'],['In-app search',['More tab','Search icon','Type "Ask Kuber"']]], rel:['voice-input','quick-add','sms-import'],
  body:`- Ask Questions about your money, or about the app, or add any transaction, Ask Kuber does it all.\n- The parsing runs entirely on your device, so nothing you type ever leaves your phone.`,
  shots:[['01-ask-kuber','Ask Kuber'],['02-draft-transaction','Draft Transaction']]},
 'kuber-cards': {nav:[['Direct menu',['More tab','Kuber Cards']],['In-app search',['More tab','Search icon','Type "Cards"']]], rel:['biometrics','privacy-mode','sms-import'],
  body:`A private vault for all your card details. You can store as many cards as desired. Free tier allows just two cards to be added, but there is no such limit on the Pro version of the app. Everything is encrypted and stored on your device, locked behind biometric access. Kuber never sends card data over any network.`,
  shots:[['01-kuber-cards-unlock','Kuber Cards Unlock'],['02-kuber-cards','Kuber Cards']]},
 'kuber-notes': {nav:[['Direct menu',['More tab','Kuber Notes']],['Home widget',['Home tab','Notes widget'],'if enabled in home widgets'],['In-app search',['More tab','Search icon','Type "Notes"']]], rel:['reminders','upcoming-events','shortcuts'],
  body:`Kuber Notes works just like a familiar notepad, but with powerful financial arithmetic built right into your text.\n\n- **Inline Calculations**: Write expressions, discounts, or quantities like \`220 * 4 =\` and watch Kuber compute the result in real time.\n- **Smart Totals**: Type \`"total"\` or \`"="\` on a new line and Kuber smartly calculates the sum of your listed items.\n- **One-Tap Actions**: Tap any highlighted number or calculated total to instantly convert it into a transaction, a loan, or a lent/borrowed ledger entry.\n- **Private & Protected**: Your notes live strictly on your device and can be secured with biometrics or app lock.`,
  shots:[['01-kuber-notes','Kuber Notes'],['02-number-actions','Number Actions']]},
 'quick-add': {nav:[['Home widget',['Home tab','Quick Add widget'],'available directly on home feed'],['Direct menu',['More tab','Quick Add']],['App shortcut',['Android Home Screen','Long press Kuber icon','Quick Add']]], rel:['ask-kuber','voice-input','shortcuts'],
  body:`Log expenses in seconds by typing or speaking in plain language:\n\n- **Home Feed Widget**: Enter transactions directly from the home tab widget or jump into full-screen mode anytime.\n- **Multi-Line Parsing**: Type multiple entries at once (e.g. \`300 in movies\` and \`650 in trip\`). Kuber detects each amount and assigns or suggests new categories automatically.\n- **On-Device Voice Add**: Tap to speak naturally. Speech processing runs locally on your device with complete privacy.`,
  shots:[['01-home-widget','Home Widget'],['02-parsed-transactions','Parsed Transactions'],['01-voice-add','Voice Add',2344,'voice-input']]},
 'voice-input': {nav:[['Home widget mic',['Home tab','Quick Add widget','Tap Microphone icon'],'instant one-tap voice input'],['Quick Add screen',['More tab','Quick Add','Voice mode']],['Add transaction form',['Bottom Navigation','Tap + Button','Tap Microphone icon']]], rel:['quick-add','ask-kuber','shortcuts'],
  body:`Speak naturally and Kuber transforms your words into transactions in seconds, completely hands-free.\n\n- **Integrated into Quick Add**: Voice input is accessible directly through [Quick Add](/features/quick-add/). Tap the microphone icon on the home feed widget or switch to voice mode in full-screen Quick Add.\n- **100% On-Device & Private**: Speech recognition runs entirely on your device. Audio never leaves your phone or touches external servers.\n- **Natural Language Parsing**: Say everyday sentences like *"250 on groceries"* or *"400 for petrol"* and Kuber automatically fills in the amount, category, and date for your confirmation.`,
  shots:[['01-voice-add','Voice Add']]},
 'powerful-filtering': {nav:[['History tab filters',['History tab','Filter button (top bar)']],['Quick search',['History tab','Search icon']],['Analytics filter',['Analytics tab','Filter button']]], rel:['expense-tracking','detailed-analytics','quick-add'],
  body:`Drill into your spending with total precision. Kuber lets you filter your transactions however you want, combining multiple criteria without friction:\n\n- **Instant Keyword Search**: Search across transaction names, notes, and merchant labels.\n- **Account & Category Filters**: Multi-select specific accounts (Cash, Bank, Credit Card) and categories to view exact spending slices.\n- **Min / Max Amount Range**: Set minimum and maximum thresholds to isolate big-ticket items or inspect small recurring charges.\n- **Tag Filtering**: Isolate specific events or projects with custom tags like \`#trip\`, \`#renovation\`, or \`#medical\`.\n- **Custom Date Ranges**: Select any date interval to compare past periods and audit specific timeframes.\n- **Type Toggles**: Switch between Expenses, Incomes, Transfers, and Recurring items with one tap.\n- **Live Net Totals**: As you filter, the summary header recalculates in real time—showing the exact transaction count, total expenses, total income, and net balance.`,
  shots:[['01-transaction-history','Transaction History'],['02-advanced-filters','Advanced Filters'],['03-category-filters','Category Filters']]},
};
for (const [slug,p] of Object.entries(PAGES)) { I.NAV[slug] = p.nav; I.RELATED[slug] = p.rel; I.BODY[slug] = p.body; I.SHOTS[slug] = p.shots.map(([b,alt,h,dir])=>[b,alt,h||2344,dir]); }
// ----- Groups 2 to 4: content parsed from content/features/*.md (copied verbatim into src/content/) -----
const GROUPS = [['G1','Group 1',['expense-tracking','ask-kuber','kuber-cards','kuber-notes','quick-add','voice-input','powerful-filtering']],
 ['G2','Group 2',['calculators','detailed-analytics','reminders','automatic-backups','money-stories','home-widgets','themes']],
 ['G3','Group 3',['dev-mode','privacy-mode','biometrics','shortcuts','upcoming-events','recurring-transactions','loans']],
 ['G4','Group 4',['investments','lent-borrowed','budgets','multi-currency','multi-lingual','import-export','pro-plans']]];
const fm = (src) => { const m = src.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/); const head = m[1].split('\n'), body = m[2];
  let rel = [], nav = [], sec = null;
  for (const l of head) {
    let x;
    if ((x = l.match(/^related:\s*\[(.*)\]/))) { rel = x[1].split(',').map(v=>v.trim()).filter(Boolean); sec = null; }
    else if (/^related:\s*$/.test(l)) sec = 'rel';
    else if (/^navigation:\s*$/.test(l)) sec = 'nav';
    else if (/^\S/.test(l)) sec = null;
    else if (sec==='rel' && (x = l.match(/^\s+-\s+(.+)$/))) rel.push(x[1].trim());
    else if (sec==='nav' && (x = l.match(/^\s+-\s+title:\s*"(.*)"$/))) nav.push([x[1], [], null]);
    else if (sec==='nav' && (x = l.match(/^\s+steps:\s*(\[.*\])$/))) nav[nav.length-1][1] = JSON.parse(x[1]);
    else if (sec==='nav' && (x = l.match(/^\s+note:\s*"(.*)"$/))) nav[nav.length-1][2] = x[1];
  }
  return {rel, nav: nav.map(([t,st,n])=>n?[t,st,n]:[t,st]), body: body.trim()}; };
const hum = (b) => b.replace(/^\d+[-_]?/,'').replace(/[-_]+/g,' ').trim().replace(/\b\w/g,c=>c.toUpperCase());
const SH2 = { calculators:[['01-tools-hub',2193],['02-emi-calculator',2193],['03-amortization-breakdown',2193],['04-calculator-catalogue',2193]],
 'detailed-analytics':['01-income-expense-chart','02-weekly-heatmap','03-transaction-size-and-categories','04-tag-analytics-and-biggest-txns','05-advanced-analytics-hub','06-financial-health-score'],
 reminders:['01-reminders-list','02-new-reminder'], 'automatic-backups':['01-automatic-backups'],
 'money-stories':['01-home-story-bubbles','02-weekly-recap-story','03-week-over-week-comparison','04-monthly-top-categories','05-weekend-habits-insight'],
 'home-widgets':['01-edit-home-widgets'], themes:[['01-theme-picker',2193]], 'dev-mode':['01-dev-tools'], 'privacy-mode':[['01-privacy-mode-masked',2193]],
 biometrics:['01-biometric-settings'], shortcuts:['01-quick-actions','02-add-new-shortcuts'], 'upcoming-events':['01-upcoming-events'],
 'recurring-transactions':['01-recurring-transactions'], loans:['01-loans'], investments:['01-investments'], 'lent-borrowed':['01-lent-borrowed'],
 budgets:['01-budgets'], 'multi-currency':['01-currency-settings','02-currency-converter'], 'multi-lingual':['01-select-language'], 'import-export':['01-data-management'], 'pro-plans':['01-pro-plans'] };
for (const [slug, list] of Object.entries(SH2)) { const p = fm(await readFile('web-v1/src/content/'+slug+'.md'));
  I.NAV[slug] = p.nav; I.RELATED[slug] = p.rel; I.BODY[slug] = p.body; I.SHOTS[slug] = list.map(x=>{ const [b,h] = Array.isArray(x)?x:[x,2344]; return [b, hum(b), h]; }); }
const FROM = { 'calculators/01-tools-hub':'Screen 32 · Calculators and Tools hub (Saved Calculations at the top)','calculators/02-emi-calculator':'Screen 32 · EMI Calculator','calculators/03-amortization-breakdown':'Screen 32 · EMI Calculator, breakdown donut and schedule','calculators/04-calculator-catalogue':'Screen 32 · Tools hub catalogue (app groups: Finance Calculators, Tax & Salary, Planning, Quick Calculators)',
 'detailed-analytics/01-income-expense-chart':'Screen 6 · Analytics','detailed-analytics/02-weekly-heatmap':'Screen 6 · Analytics, Avg Weekly Heatmap','detailed-analytics/03-transaction-size-and-categories':'Screen 6 · Analytics, size distribution and category donut','detailed-analytics/04-tag-analytics-and-biggest-txns':'Screen 6 · Analytics, tags and biggest transactions','detailed-analytics/05-advanced-analytics-hub':'Advanced Analytics hub','detailed-analytics/06-financial-health-score':'Financial health score',
 'reminders/01-reminders-list':'Screen 25 · Reminders (chips: Overdue, Today, This week, Completed)','reminders/02-new-reminder':'Screen 25 · New reminder form','automatic-backups/01-automatic-backups':'Screen 12 · Data, Automatic Backups',
 'money-stories/01-home-story-bubbles':'Screen 2 · Home, Money Stories row','money-stories/02-weekly-recap-story':'Story viewer · weekly recap','money-stories/03-week-over-week-comparison':'Story viewer · week over week','money-stories/04-monthly-top-categories':'Story viewer · monthly top categories','money-stories/05-weekend-habits-insight':'Story viewer · weekend pattern',
 'home-widgets/01-edit-home-widgets':'Screen 2 · Edit Home Widgets','themes/01-theme-picker':'Screen 11 · Settings, Theme sheet (7 families, System / Light / Dark)','privacy-mode/01-privacy-mode-masked':'Screen 2 · Home, privacy mode on',
 'shortcuts/01-quick-actions':'Screen 2 · Quick Actions sheet','shortcuts/02-add-new-shortcuts':'Screen 2 · Add New sheet','upcoming-events/01-upcoming-events':'Screen 26 · Upcoming Events','recurring-transactions/01-recurring-transactions':'Screen 19 · Recurring','loans/01-loans':'Screen 21 · Loans','investments/01-investments':'Screen 22 · Investments','lent-borrowed/01-lent-borrowed':'Screen 20 · Lend Borrow','multi-lingual/01-select-language':'Screen 11 · Settings, Select language sheet','pro-plans/01-pro-plans':'Screen 14 · Kuber Pro (prices as designed: ₹1,099 a year, ₹2,499 lifetime)' };
for (const [k,v] of Object.entries(FROM)) { const [slug,base] = k.split('/'); SHOT.push({slug,base,h:SH2[slug].find(x=>(Array.isArray(x)?x[0]:x)===base)?.[1]===2193?H2:H1,from:v,fn:null,kind:'reused'}); }
// ----- review round: Quick Actions sheet and Theme screen from the app code (kuber/lib) -----
const {sheet, secH, a} = K;
// quick_actions_sheet.dart: CONTROLS (two control tiles: 40dp disc + titleSmall + bodySmall, padding 12, radius 20), SHORTCUTS 4-col grid (56dp squircle r16 + labelMedium).
const ctl = (t, i, n, cap, on) => `<div style="flex:1;min-width:0;padding:12px;border-radius:20px;box-sizing:border-box;background:${on?t.sc:t.c2};border:1px solid ${on?t.sc:t.olv};display:flex;align-items:center;gap:12px"><div style="width:40px;height:40px;border-radius:999px;background:${on?t.p:t.c3};display:flex;align-items:center;justify-content:center;flex:none">${ic(i,20,on?t.op:t.on)}</div><div style="min-width:0"><div style="${ty('tS',on?t.osc:t.on)}">${n}</div><div style="${ty('bS',on?t.osc:t.onv,'white-space:nowrap')}">${cap}</div></div></div>`;
const QA_SC = [['account_balance_wallet','Accounts'],['show_chart','Investments'],['handshake','Lend/Borrow'],['calculate','EMI'],['insert_chart','Insights'],['auto_awesome','Ask Kuber'],['credit_card','Cards'],['category','Categories']];
const qaSheet = (t, o={}) => sheet(t,{title:'Quick Actions',sub2:'Controls &amp; shortcuts',mh:560,gap:24,body:`<div>${secH(t,'Controls')}<div style="display:flex;gap:8px">${ctl(t,'visibility_off','Privacy Mode',o.priv?'Amounts hidden':'Amounts shown',!!o.priv)}${ctl(t,'fingerprint','Biometrics','Enabled',true)}</div></div><div>${secH(t,'Shortcuts',`<span style="${ty('lL',t.p)}">Edit</span>`)}<div style="display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px 8px">${QA_SC.map(([i,l])=>`<div style="display:flex;flex-direction:column;align-items:center;gap:8px"><div style="width:56px;height:56px;border-radius:16px;background:${t.sc};display:flex;align-items:center;justify-content:center">${ic(i,24,t.osc)}</div><span style="${ty('lM',t.on,'text-align:center')}">${l}</span></div>`).join('')}</div></div>`});
// Highlight the active eye button on Home (privacy mode): primary ring + soft halo.
const eyeRing = (h, t) => h.replace(/(<div style="width:40px;height:40px;border-radius:999px;background:[^;]+;)(display:flex;align-items:center;justify-content:center">)(<span[^>]*>visibility_off<\/span>)/, `$1box-shadow:0 0 0 3px ${t.p},0 0 0 10px ${a(t.p,.18)};$2$3`);
// theme_screen.dart: back + Theme; Light/Dark/System toggle (c3 track, selected = surface + outline); 2-col family cards (3 dots, lock when not Pro, 2dp primary border when selected); wallpaper row; preview.
const themeScreen = (t, o={}) => { const tog = `<div style="height:48px;padding:4px;box-sizing:border-box;border-radius:999px;background:${t.c3};display:flex">${['Light','Dark','System'].map((l,i)=>`<div style="flex:1;border-radius:999px;display:flex;align-items:center;justify-content:center;${i===2?`background:${t.bg};border:1px solid ${t.olv};`:''}${ty('tS',i===2?t.on:t.onv)}">${l}</div>`).join('')}</div>`;
  const wall = `<div style="padding:12px 14px;border-radius:16px;background:${t.c2};border:1px solid ${t.olv};display:flex;align-items:center;gap:12px">${ic('wallpaper',24,t.onv)}<div style="flex:1;min-width:0"><div style="${ty('tM',t.on)}">From your wallpaper</div><div style="${ty('bS',t.onv)}">Dynamic colour, Android 12+</div></div>${K.sw(t,false)}</div>`;
  const fam = (id, n, blurb) => { const P = K.T(id+'_light'); const sel = id==='signature'; return `<div style="min-width:0;min-height:116px;padding:14px;box-sizing:border-box;border-radius:20px;background:${t.c2};border:${sel?2:1}px solid ${sel?t.p:t.olv};display:flex;flex-direction:column;justify-content:space-between;gap:12px"><div style="display:flex;gap:6px;align-items:center">${[P.p,P.pc,P.c3].map((c,k)=>`<span style="width:30px;height:30px;border-radius:999px;background:${c};${k===2?`box-shadow:inset 0 0 0 1px ${t.olv};`:''}flex:none"></span>`).join('')}<span style="flex:1"></span>${sel?'':ic('lock',16,t.onv,1)}</div><div style="min-width:0"><div style="${ty('tM',t.on)}">${n}</div><div style="${ty('bS',t.onv)}">${blurb}</div></div></div>`; };
  const prev = `<div style="margin-top:12px">${secH(t,'Preview')}${card(t,`<div style="${caps(t.onv)}">October · Net</div><div style="${ty('hM',t.inc,num+'margin-top:4px')}">+₹43,457</div><div style="${ty('bM',t.on,'margin-top:4px')}">Every rupee, accounted for.</div><div style="display:flex;gap:8px;margin-top:16px">${btn(t,'Primary')}${btn(t,'Outlined',{kind:'outlined'})}</div>`)}</div>`;
  return K.hdr(t,{back:1,title:'Theme'}) + `<div style="flex:1;overflow:hidden"><div style="${o.top?`margin-top:-${o.top}px;`:''}padding:4px 20px 32px;display:flex;flex-direction:column;gap:16px">${tog}<div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px">${W.THEMES.map(([id,n,b])=>fam(id,n,b)).join('')}</div>${wall}${prev}</div></div>`; };
const voice = (t, text) => { const H = [18,30,46,62,40,72,54,32,68,46,26,58,42,22,36,64,50,28,60,44,24,52,38,20,34,56,30,16,26,12];
  return `<div style="position:absolute;inset:0;z-index:5;background:${t.bg};overflow:hidden"><div style="position:absolute;inset:0;background:radial-gradient(90% 60% at 50% 36%, ${a(t.p,.28)}, ${a(t.bg,0)} 70%)"></div><div style="position:relative">${K.sbar(t.on)}</div><div style="position:relative;height:calc(100% - 32px);box-sizing:border-box;padding:16px 16px 24px;display:flex;flex-direction:column"><span style="flex:1"></span><div style="height:88px;display:flex;align-items:center;justify-content:center;gap:5px">${H.map(h=>`<span style="width:4px;height:${h}px;border-radius:999px;background:${t.p}"></span>`).join('')}</div><div style="margin-top:24px;text-align:center;font:400 22px/1.35 Inter,sans-serif;color:${t.on}">${text}</div><div style="margin-top:16px;display:flex;justify-content:center;align-items:center;gap:6px;font:400 11px/16px Inter,sans-serif;color:${t.onv}">${ic('lock',13,t.onv)}On-device · nothing leaves your phone</div><span style="flex:1"></span><div style="display:flex;gap:12px">${btn(t,'Cancel',{kind:'outlined',size:'l',full:1})}${btn(t,'Okay',{size:'l',full:1})}</div></div></div>`; };
let s1src = await readFile('_kit/screens_new.js'); const ew = "['Ask Kuber','Ask about your money, plus one-tap suggestions',1],"; if (!s1src.includes(ew)) MISS.push('editWidgets row'); s1src = s1src.split(ew).join(ew + "['Pinned Suggestions','Suggestions you pinned to Home',1],"); const Sx = new Function('K', s1src)(K);
const ov = (slug, base, o) => { const x = SHOT.find(s=>s.slug===slug&&s.base===base); Object.assign(x, o); };
ov('shortcuts','01-quick-actions',{fn:t=>S.home(t)+qaSheet(t),kind:'new',from:'Quick Actions sheet (quick_actions_sheet.dart): control tiles at app size, default shortcuts'});
ov('privacy-mode','01-privacy-mode-masked',{fn:t=>eyeRing(S.home(t,{private:1}),t),kind:'new',from:'Screen 2 · Home, privacy mode on, eye button highlighted'});
ov('themes','01-theme-picker',{fn:t=>themeScreen(t),kind:'new',from:'Theme screen (theme_screen.dart): full page, Light / Dark / System, family cards'});
ov('voice-input','01-voice-add',{fn:t=>S2.quickAdd(t)+voice(t,'add 250 in groceries'),kind:'new',from:'Quick Add voice overlay (quick_add_voice_overlay.dart): full-screen, radial glow, 30-bar waveform, Cancel / Okay'});
ov('home-widgets','01-edit-home-widgets',{fn:t=>Sx.editWidgets(t),kind:'new',from:'Edit Home Widgets, with the Pinned Suggestions widget added'});
SHOT.push({slug:'expense-tracking',base:'03-add-details',h:H1,from:'Screen 4 · Add Transaction scrolled to Date & time, Tags, Attachments and the note field',fn:t=>S.add(t,{name:'Weekly Groceries',amt:'627',tags:1,top:330}),kind:'new'});
I.SHOTS['expense-tracking'] = [['01-home','Home',2344],['02-add-transaction','Add Transaction',2344],['03-add-details','Add Details',2344]];
SHOT.push({slug:'themes',base:'02-theme-wallpaper',h:H2,from:'Theme screen scrolled: last family cards, From your wallpaper toggle, Preview',fn:t=>themeScreen(t,{top:640}),kind:'new'});
I.SHOTS['themes'] = [['01-theme-picker','Theme Picker',2193],['02-theme-wallpaper','Theme Wallpaper',2193]];
SHOT.push({slug:'privacy-mode',base:'02-privacy-quick-actions',h:H2,from:'Quick Actions sheet from a long-pressed nav tab, Privacy Mode on',fn:t=>S.home(t,{private:1})+qaSheet(t,{priv:1}),kind:'new'});
I.SHOTS['privacy-mode'] = [['01-privacy-mode-masked','Privacy Mode Masked',2193],['02-privacy-quick-actions','Privacy Quick Actions',2193]];
SHOT.push({slug:'dev-mode',base:'01-dev-tools',h:H1,from:'Screen 29 · Dev Tools',fn:t=>S4b.devtools(t),kind:'new'},
 {slug:'biometrics',base:'01-biometric-settings',h:H1,from:'Screen 11 · Settings, Privacy & security (Biometric Lock on). Substitute: no app lock screen is designed',fn:t=>S2.settings(t,{top:1150}),kind:'new'},
 {slug:'budgets',base:'01-budgets',h:H1,from:'Screen 18 · Budgets (within, near limit, over)',fn:t=>S3.budgets(t),kind:'new'},
 {slug:'multi-currency',base:'01-currency-settings',h:H1,from:'Screen 11 · Settings, Money display (Language, Currency, Number Format). No currency picker sheet is designed',fn:t=>S2.settings(t,{top:900}),kind:'new'},
 {slug:'multi-currency',base:'02-currency-converter',h:H1,from:'Screen 32 · Currency Converter',fn:t=>S5b.C.fx(t,{}),kind:'new'},
 {slug:'import-export',base:'01-data-management',h:H1,from:'Screen 12 · Data Management',fn:t=>S2.data(t),kind:'new'});
return {SHOT, screen, sid, PAGES, MISS, GROUPS};
})();
