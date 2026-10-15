// Web v1 image mockups. In run_script:
//   const W = await (new Function('readFile', await readFile('web-v1/src/load_web.js')))(readFile);
//   const M = new Function('W', await readFile('web-v1/src/gen_mockups.js'))(W);  -> {html, list, clean, phone}
const {K,S,S2,S3,S4,S5} = W;
const OB = K.T('signature_dark'), AL = K.T('signature_light');
// Sample data hygiene: generic bank and merchant names everywhere the site shows the app.
const CLEAN = [[/ICICI Amazon Pay/g,'Rewards Card'],[/ICICI Amazon/g,'Rewards Card'],[/HDFC Bank/g,'Your Bank'],[/SBI Savings/g,'Savings Account'],[/Paytm Wallet/g,'Wallet'],[/Amazon Pay/g,'Wallet'],[/Netflix/g,'Streaming plan'],[/Swiggy/g,'Food delivery'],[/Zomato/g,'Food delivery'],[/\b[A-Z]{2}-[A-Z]{5,7}\b/g,'AD-YRBANK'],[/\b(HDFCBK|SBIINB|ICICIB|AXISBK|KOTAKB)\b/g,'YRBANK'],[/\bHDFC\b/g,'Your Bank'],[/\bSBI\b/g,'Savings Bank'],[/\bICICI\b/g,'Rewards Card'],[/\bAxis\b/g,'Your Bank'],[/\bKotak\b/g,'Your Bank']];
const clean = (h) => CLEAN.reduce((s,[r,v])=>s.replace(r,v), h).split('"display:flex;gap:6px;align-items:center;').join('"display:flex;gap:6px;align-items:center;white-space:nowrap;').split('white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0').join('white-space:nowrap').split('text-overflow:ellipsis').join('text-overflow:ellipsis;padding-right:1px').split('text-transform:uppercase;').join('text-transform:uppercase;white-space:nowrap;').split('font-variant-numeric:tabular-nums;').join('font-variant-numeric:tabular-nums;white-space:nowrap;');
const sbar = (c) => `<div style="height:32px;flex:none;display:flex;align-items:center;justify-content:space-between;padding:0 20px;font:600 13px Inter,sans-serif;color:${c}"><span>9:41</span><span style="display:flex;gap:6px;align-items:center">${K.ic('signal_cellular_alt',16,c,1)}${K.ic('wifi',16,c,1)}${K.ic('battery_full',16,c,1)}</span></div>`;
// The one phone frame used across the site: 376 x 796, bezel #1B1B1F (device colour, not a theme role), radius 40 / 32.
const phone = (t, inner, id='') => `<div ${id?`id="${id}" `:''}style="width:376px;height:796px;flex:none;border-radius:40px;padding:8px;background:#1B1B1F;box-sizing:border-box"><div style="height:780px;border-radius:32px;overflow:hidden;background:${t.bg};position:relative;display:flex;flex-direction:column">${sbar(t.on)}${clean(inner)}</div></div>`;
const LIST = [
 ['home','Home (press kit, social card)', t=>S.home(t)],
 ['ask-kuber','Ask Kuber chat: a question answered and a drafted transaction', t=>S2.askChat(t)],
 ['automatic-backups','Backups: schedule, folder and retention', t=>S2.backups(t)],
 ['biometrics','Biometric unlock in front of Kuber Cards', t=>S4.cardsUnlock(t)],
 ['budgets','Budgets with normal, near limit and exceeded states', t=>S3.budgets(t)],
 ['calculators','Calculators and Tools hub', t=>S5.toolsHub(t)],
 ['detailed-analytics','Analytics tab', t=>S.analytics(t)],
 ['dev-mode','Developer tools', t=>S4.devtools(t)],
 ['expense-tracking','Add transaction with autofill suggestions', t=>S.add(t,{name:'Groc',focus:1,suggest:1})],
 ['home-widgets','Edit Home Widgets', t=>S.editWidgets(t)],
 ['import-export','Data Management: export, import, backups', t=>S2.data(t)],
 ['investments','Investments portfolio', t=>S3.investments(t)],
 ['kuber-cards','Kuber Cards with masked numbers', t=>S4.cards(t)],
 ['kuber-notes','Kuber Notes editor with live totals', t=>S4.noteEditor(t)],
 ['lent-borrowed','Lent and Borrowed ledger', t=>S3.ledger(t)],
 ['loans','Loans with EMI progress', t=>S3.loans(t)],
 ['money-stories','Stories Archive', t=>S4.stories(t)],
 ['multi-currency','Settings with the Number Format sheet', t=>S2.settings(t)+S2.choiceSheet(t)],
 ['multi-lingual','Settings (Language row). Placeholder until a language picker screen exists', t=>S2.settings(t)],
 ['powerful-filtering','History filters sheet', t=>S.histFilter(t)],
 ['privacy-mode','Home with privacy mode on', t=>S.home(t,{private:1,badge:''})],
 ['pro-plans','Kuber Pro paywall', t=>S3.pro(t)],
 ['quick-add','Quick Add full screen', t=>S2.quickAdd(t)],
 ['recurring-transactions','Recurring transactions', t=>S3.recurring(t)],
 ['reminders','Reminders', t=>S4.reminders(t)],
 ['shortcuts','Quick Actions sheet from a long-pressed nav tab', t=>S.home(t)+S.quickActions(t)],
 ['sms-import','Import from SMS with detected messages', t=>S2.sms(t)],
 ['themes','Theme sheet over Settings', t=>S2.settings(t)+S2.themeSheet(t)],
 ['upcoming-events','Upcoming Events timeline', t=>S4.events(t)],
 ['voice-input','Quick Add with the voice sheet listening', t=>S2.quickAdd(t)+S2.qaVoiceSheet(t,'listening')],
];
const MONO = "'JetBrains Mono',ui-monospace,monospace";
const cell = ([slug,note,fn]) => `<div style="display:flex;flex-direction:column;gap:12px;width:776px;flex:none">
<div style="display:flex;align-items:baseline;gap:10px"><span style="font:700 12px/16px ${MONO};color:#00429B;padding:2px 8px;border-radius:6px;background:#D8E2FF">${slug}</span><span style="font:400 13px/18px Inter;color:#44474F">${note}</span></div>
<div style="display:flex;gap:24px">${[['light',AL],['dark',OB]].map(([m,t])=>`<div style="display:flex;flex-direction:column;gap:8px;align-items:center">${phone(t, fn(t), `mk-${slug}-${m}`)}<span style="font:500 12px/16px ${MONO};color:#5B5E66">${slug}-${m}.png</span></div>`).join('')}</div></div>`;
const html = `<div style="padding:48px 56px 80px">
<header style="margin:0 0 40px;max-width:920px"><div style="font:600 12px/16px ${MONO};letter-spacing:.8px;color:#5B5E66;text-transform:uppercase">Kuber · Web v1</div><h1 style="margin:8px 0 8px;font:700 36px/44px Inter;letter-spacing:-.5px;color:#1A1B20">Web v1 · Image mockups</h1><p style="margin:0;font:400 15px/24px Inter;color:#44474F;max-width:880px;text-wrap:pretty">One mockup per feature page slug, Kuber Signature light and dark, all from the M3 app screens in this project with one sample dataset (Gaurav, Your Bank, Rewards Card, July net +₹45,200). One frame: 376 × 796, bezel #1B1B1F, radius 40 outer / 32 screen. Exported at 2x to web-v1/mockups/&lt;slug&gt;-light.png and -dark.png (752 × 1592). Site ships them as AVIF/WebP at fixed width and height.</p></header>
<section data-screen-label="Mockups" style="display:flex;flex-wrap:wrap;gap:56px 64px;max-width:1700px">${LIST.map(cell).join('')}</section></div>`;
return {html, list: LIST.map(([s,n])=>({slug:s,note:n})), clean, phone};
