// Round-3 boards. new Function('K','S3', src)(K,S3) -> {filename: html}
const {T,board,row,nphone,tag,wrap} = K;
const OB=T('signature_dark'), AL=T('signature_light');
const cap = (s) => `<span style="display:inline-flex;gap:6px;align-items:center;flex-wrap:wrap;justify-content:center">${tag('After','new')}<span>${s}</span></span>`;
const sub = (title, inner, note) => `<div style="margin:0 0 40px"><div style="font:600 15px/22px Inter;color:#1A1B20;margin:0 0 4px">${title}</div>${note?`<div style="font:400 13px/20px Inter;color:#44474F;margin:0 0 16px;max-width:900px;text-wrap:pretty">${note}</div>`:'<div style="height:12px"></div>'}${inner}</div>`;
const R = (list) => row(list.map(([t,html,c,o])=>nphone(t,html,cap(c),o)).join(''),20);
const PATTERN = 'Header (Mull pattern): back, page name, info, overflow only when there are secondary actions. No home button, no page description, no header add button. The primary create action is an extended FAB at the bottom centre (56, radius 16, primaryContainer, icon + label, 24 from the bottom, content fades under it).';
const f = {};
const scr = (n, file, title, intro, id, inner) => { f[`Screen ${n} - ${file}.dc.html`] = wrap(`${n} · ${title}`, intro, board(id, title, '', inner)); };

scr(14,'Kuber Pro','Kuber Pro','PaywallScreen: hero, trust chips, plan picker (Monthly / Yearly / Lifetime), launch offer, comparison, Buy me a coffee, Restore / Redeem, pinned CTA with Play note; Pro (manage) state; About Kuber Pro info sheet.','3.14',
 sub('Paywall and manage', R([[OB,S3.pro(OB),'Choose a plan'],[OB,S3.pro(OB,{top:560}),'Scrolled: comparison'],[OB,S3.pro(OB,{sheet:'info'}),'Info: About Kuber Pro'],[OB,S3.pro(OB,{on:1}),'You\'re on Pro']]), 'No FAB here: the purchase CTA is pinned like other full-screen forms. Plans are radio cards; the selected plan gets secondaryContainer and a 2dp primary outline. The comparison becomes grouped lists with Free / Pro columns. Prices shown are placeholders (Play supplies them).'));

scr(15,'Accounts','Accounts','AccountsScreen: net worth hero, account list (default badge, credit utilisation, disabled muted), detail sheet, empty state.','3.15',
 sub('Accounts', R([[OB,S3.accounts(OB),'List + Add Account FAB'],[OB,S3.accounts(OB,{sheet:'info'}),'Info: How Accounts Work'],[OB,S3.accounts(OB,{sheet:'detail'}),'Tap an account: detail sheet'],[OB,S3.accounts(OB,{empty:1}),'No accounts yet']]), PATTERN+' "Manage Accounts" becomes "Accounts". The dashed "Add another account" row is removed (the FAB covers it). Accounts are one grouped list; the credit card row carries its utilisation bar.'));

scr(16,'Categories','Categories','CategoriesScreen: spend hero, search, groups with their categories (amount this month, budget badge), group overflow, add category / group, category detail sheet.','3.16',
 sub('Categories', R([[AL,S3.categories(AL),'List + Add Category FAB'],[AL,S3.categories(AL,{menu:1}),'Overflow: Add Group'],[AL,S3.categories(AL,{sheet:'info'}),'Info: How Categories Work'],[AL,S3.categories(AL,{sheet:'detail'}),'Category detail']]), PATTERN+' The header "Add Category/Group" action splits: Add Category is the FAB, Add Group moves to the overflow. Each group is a section header (with its own more menu: Edit / Delete group) over one grouped list.'));

scr(17,'Tags','Tags','TagsScreen: tag list with counts and disabled state, add tag sheet, empty state.','3.17',
 sub('Tags', R([[OB,S3.tags(OB),'List + Add Tag FAB'],[OB,S3.tags(OB,{sheet:'add'}),'Add Tag sheet'],[OB,S3.tags(OB,{sheet:'info'}),'Info: How Tags Work'],[OB,S3.tags(OB,{empty:1}),'No tags yet']]), PATTERN+' "Manage Tags" + "Organize transactions with custom labels." become the title "Tags"; the description lives in the info sheet.'));

scr(18,'Budgets','Budgets','BudgetsScreen: budget list with progress, status (normal / near / over), resets / expires / exceeded line, disabled and expired badges, empty state.','3.18',
 sub('Budgets', R([[AL,S3.budgets(AL),'List + Create Budget FAB'],[AL,S3.budgets(AL,{top:360}),'Scrolled: paused and ended'],[AL,S3.budgets(AL,{sheet:'info'}),'Info: How Budgets Work'],[AL,S3.budgets(AL,{empty:1}),'No budgets yet']]), PATTERN+' Separate bordered BudgetCards become rows in grouped lists, split into active and paused / ended. Percentage sits on the right in the status colour; the footer keeps the existing caps strings.'));

scr(19,'Recurring','Recurring Transactions','RecurringScreen: monthly estimate hero, rules (frequency, next date, account, paused), recently processed.','3.19',
 sub('Recurring', R([[OB,S3.recurring(OB),'Rules + Add Recurring FAB'],[OB,S3.recurring(OB,{top:300}),'Scrolled: recently processed'],[OB,S3.recurring(OB,{sheet:'info'}),'Info: How Recurring Works']]), PATTERN+' The title is "Recurring" (two-line "Recurring Transactions" no longer fits a one-line header; the More row keeps the full name). Paused rules stay in the list at 50%.'));

scr(20,'Lend Borrow','Ledger','LedgerScreen: net balance hero, Lent / Borrowed filter, active entries with repayment progress, settled.','3.20',
 sub('Ledger', R([[AL,S3.ledger(AL),'Entries + Add Lent / Borrowed FAB'],[AL,S3.ledger(AL,{lent:1}),'Lent filter on'],[AL,S3.ledger(AL,{sheet:'info'}),'Info: About Lent / Borrow']]), PATTERN+' "Lent & Borrowed" becomes "Ledger". The FILTERS label is dropped; the two filter chips describe themselves.'));

scr(21,'Loans','Loans','LoansScreen: outstanding debt hero (paid vs outstanding, next EMI), active loans with progress and EMI / interest / next due strip, completed toggle.','3.21',
 sub('Loans', R([[OB,S3.loans(OB),'Loans + Add Loan FAB'],[OB,S3.loans(OB,{top:280}),'Scrolled: completed toggle'],[OB,S3.loans(OB,{sheet:'info'}),'Info: About Loans']]), PATTERN+' Each loan is a row in one grouped list: outstanding on the right, wavy progress, and the three facts in a tonal strip. "tomorrow" / "overdue" due dates use the warning colour.'));

scr(22,'Investments','Investments','InvestmentsScreen: portfolio hero (value, invested, gain, return, allocation by type), all investments with value and return.','3.22',
 sub('Investments', R([[AL,S3.investments(AL),'Portfolio + Add Investment FAB'],[AL,S3.investments(AL,{sheet:'info'}),'Info: About Investments']]), PATTERN+' Type colours (Stocks, Mutual Fund, SIP, Crypto, Gold/Silver...) are re-toned per theme like category colours.'));
return f;
