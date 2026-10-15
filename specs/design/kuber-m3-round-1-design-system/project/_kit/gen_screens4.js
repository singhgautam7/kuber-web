// Round-4 boards. new Function('K','S','S4', src)(K,S,S4) -> {filename: html}
const {T,board,row,nphone,tag,wrap} = K;
const OB=T('signature_dark'), AL=T('signature_light');
const cap = (s) => `<span style="display:inline-flex;gap:6px;align-items:center;flex-wrap:wrap;justify-content:center">${tag('After','new')}<span>${s}</span></span>`;
const sub = (title, inner, note) => `<div style="margin:0 0 40px"><div style="font:600 15px/22px Inter;color:#1A1B20;margin:0 0 4px">${title}</div>${note?`<div style="font:400 13px/20px Inter;color:#44474F;margin:0 0 16px;max-width:900px;text-wrap:pretty">${note}</div>`:'<div style="height:12px"></div>'}${inner}</div>`;
const R = (list) => row(list.map(([t,html,c,o])=>nphone(t,html,cap(c),o)).join(''),20);
const f = {};
const scr = (n, file, title, intro, id, inner) => { f[`Screen ${n} - ${file}.dc.html`] = wrap(`${n} · ${title}`, intro, board(id, title, '', inner)); };
const P = 'Header: back, page name, info, overflow when needed. Create action is the bottom-centre extended FAB.';

scr(23,'Kuber Notes','Kuber Notes','NotesLandingScreen + NoteEditorScreen: search, sort, filter, list / grid, pinned and others, locked and read-only notes, multi-select (pin, category, delete), editor with save status, read-only toggle, category and tag, tappable numbers, checklist, toolbar, number quick-actions sheet.','3.23',
 sub('Landing', R([[OB,S4.notes(OB),'List + New note FAB'],[OB,S4.notes(OB,{grid:1}),'Grid view'],[OB,S4.notes(OB,{sel:[0,2]}),'Multi-select'],[OB,S4.notes(OB,{empty:1}),'No notes yet']]), P+' Numbers in previews are tinted primary so quick math reads at a glance. Selection uses the one-line contextual header with Pin, Category and Delete.')
 + sub('Editor', R([[OB,S4.noteEditor(OB),'Editing (Saved)'],[OB,S4.noteEditor(OB,{tap:1}),'Tap a number: quick actions'],[OB,S4.noteEditor(OB,{menu:1}),'Overflow'],[OB,S4.notes(OB,{sheet:'info'}),'Info sheet']]), 'Save status (Draft / Saving... / Saved) is a quiet pill in the header title slot. Tapped numbers get a secondaryContainer mark, primary when active.'));

scr(24,'Kuber Cards','Kuber Cards','CardsHomeScreen, CardsUnlockScreen, SetupFlowScreen: unlock with PIN or biometrics, card / list views, search + filter, setup highlights and the no-recovery warning.','3.24',
 sub('Cards', R([[AL,S4.cards(AL,{locked:1}),'Unlock'],[AL,S4.cards(AL,{locked:1,err:1}),'Wrong PIN'],[AL,S4.cards(AL),'Card view + Add card FAB'],[AL,S4.cards(AL,{list:1,menu:1}),'List view + overflow']]), P+' Card faces keep the colour the user picked (solid, no gradient). The keypad uses 72 circles on surfaceContainerHigh; biometrics sits in the bottom-left key.')
 + sub('Setup', R([[AL,S4.cardsSetup(AL,0),'Intro'],[AL,S4.cardsSetup(AL,1),'No recovery (unchecked)'],[AL,S4.cardsSetup(AL,2),'Acknowledged']]))); 

scr(25,'Reminders','Reminders','RemindersLandingScreen: search, Overdue / Today / This week / Completed filters, grouped sections, repeat indicator.','3.25',
 sub('Reminders', R([[OB,S4.reminders(OB),'List + New reminder FAB'],[OB,S4.reminders(OB,{sheet:'info'}),'Info sheet'],[OB,S4.reminders(OB,{empty:1}),'Empty']]), P+' Overdue header and its ring are error-coloured; completed rows are struck through at 55%.'));

scr(26,'Upcoming Events','Upcoming events','UpcomingEventsFullScreen: range dropdown (7 / 30 / 90 days), type filters, Today / Tomorrow / This week / Next week / Later.','3.26',
 sub('Upcoming events', R([[AL,S4.events(AL),'Next 30 days'],[AL,S4.events(AL,{empty:1}),'Nothing in range']]), 'No FAB (read-only aggregate). The range is a dropdown chip like the chart periods; type chips filter. Rows use the date block from the Home widget and a type pill.'));

scr(27,'Stories Archive','Stories Archive','StoryArchiveScreen: Today / Earlier this week / Earlier this month / Older, unseen dot, empty state.','3.27',
 sub('Stories Archive', R([[OB,S4.stories(OB),'Archive'],[OB,S4.stories(OB,{sheet:'info'}),'Info sheet'],[OB,S4.stories(OB,{empty:1}),'No stories yet']]), 'Two-column story cards: a tinted cover with the story glyph, kind (caps), title and date. Unseen stories carry the primary dot.'));

scr(28,'Permissions','Permissions','PermissionsScreen: Notifications, Files, SMS, Microphone, Biometric Authentication, Network Access, each with its status; Open System Settings.','3.28',
 sub('Permissions', R([[AL,S4.permissions(AL),'Permissions'],[OB,S4.permissions(OB),'Obsidian']]), '"Security & Permissions" + description become the title "Permissions". Status pills: income container for granted, warning for not set, neutral for not granted / not available.'));

scr(29,'Dev Tools','Developer Tools','DevToolsScreen: Troubleshoot, Database, Entitlement (debug), Danger zone.','3.29',
 sub('Developer Tools', R([[OB,S4.devtools(OB),'Dev tools'],[OB,S4.devtools(OB,{dialog:1}),'Disable confirm'],[OB,S4.devtools(OB,{snack:'Billing diagnostics copied to clipboard'}),'Copied']])));

scr(30,'Buy Me a Coffee','Buy me a coffee','Support sheet from More and the paywall: four one-time tiers, loading skeleton, thank-you sheet.','3.30',
 sub('Sheet', R([[AL,S.more(AL)+S4.coffee(AL),'Choose a tier'],[AL,S.more(AL)+S4.coffee(AL,{sel:0}),'Coffee selected (purchase opens)'],[AL,S.more(AL)+S4.coffee(AL,{loading:1}),'Loading products'],[AL,S.more(AL)+S4.coffee(AL,{thanks:1}),'Thank you']]), 'Tiers are a 2×2 grid of tiles (glyph, name, price). The selected tile gets secondaryContainer + a 2dp primary outline while Play opens.'));

scr(31,'Feedback','Feedback','FeedbackScreen: type, message, device-details note, Submit Feedback.','3.31',
 sub('Feedback', R([[OB,S4.feedback(OB),'Empty'],[OB,S4.feedback(OB,{type:1,value:'Would love a widget for my budget progress on the home screen'}),'Typing'],[OB,S4.feedback(OB,{error:1}),'Message required']]), 'Type is a set of filter chips (Bug Report, Feature Request, Other). Submit is pinned and sentence case (no caps).'));
return f;
