/**
 * Build-time screenshot discovery.
 *
 * Files live in src/assets/screenshots/features/<slug>/ as `NN-name-light.png`
 * and, optionally, `NN-name-dark.png`; they are ordered by filename. A shot
 * with both variants follows the site mode; a light-only shot is shown in both
 * modes. Adding a dark version later is just adding the file.
 */
import type { ImageMetadata } from 'astro';

export interface Shot {
  base: string;
  alt: string;
  light: ImageMetadata;
  dark: ImageMetadata | null;
}

// Alt text per shot (screen descriptions from design web-v1/screenshot-map.md).
const ALT: Record<string, string> = {
  'ask-kuber/01-ask-kuber': 'Ask Kuber answering how much was spent on food last month, with a category breakdown',
  'ask-kuber/02-draft-transaction': 'Ask Kuber drafting a ₹250 groceries expense, with Edit and Confirm buttons',
  'automatic-backups/01-automatic-backups': 'Automatic Backups settings: status, frequency, folder and how many backups to keep',
  'biometrics/01-biometric-settings': 'Privacy and security settings with Biometric Lock switched on',
  'budgets/01-budgets': 'Budgets list showing categories within budget, near the limit and over it',
  'calculators/01-tools-hub': 'Calculators and Tools hub with saved calculations at the top',
  'calculators/02-emi-calculator': 'EMI Calculator with loan amount, rate and tenure, and the monthly EMI result',
  'calculators/03-amortization-breakdown': 'EMI Calculator scrolled to the principal and interest breakdown and payment schedule',
  'calculators/04-calculator-catalogue': 'Calculators and Tools hub scrolled to the full catalogue of calculators',
  'detailed-analytics/01-income-expense-chart': 'Analytics summary with the income and expense bar chart',
  'detailed-analytics/02-weekly-heatmap': 'Analytics scrolled to the average weekly spending heatmap',
  'detailed-analytics/03-transaction-size-and-categories': 'Analytics showing transaction sizes and spending by category',
  'detailed-analytics/04-tag-analytics-and-biggest-txns': 'Analytics showing tag-wise spending and the biggest transactions',
  'detailed-analytics/05-advanced-analytics-hub': 'Advanced Analytics hub listing health score, patterns, forecasts and more',
  'detailed-analytics/06-financial-health-score': 'Financial health score out of 100 with its four parts',
  'dev-mode/01-dev-tools': 'Dev Tools screen with diagnostics and sample data tools',
  'expense-tracking/01-home': 'Kuber Home: balance, money stories, quick add and recent transactions',
  'expense-tracking/02-add-transaction': 'Add Transaction with an autofill suggestion while typing',
  'expense-tracking/03-add-details': 'Add Transaction scrolled to date and time, tags, attachments and notes',
  'home-widgets/01-edit-home-widgets': 'Edit Home Widgets: drag to reorder and switch widgets on or off',
  'import-export/01-data-management': 'Data Management with export, import and backup options',
  'investments/01-investments': 'Investments portfolio with invested amount, current value and gain',
  'kuber-cards/01-kuber-cards-unlock': 'Kuber Cards unlock screen with a PIN pad and fingerprint key',
  'kuber-cards/02-kuber-cards': 'Kuber Cards list with two cards, numbers masked to the last 4 digits',
  'kuber-notes/01-kuber-notes': 'Kuber Notes adding up a grocery list, with the total worked out inline',
  'kuber-notes/02-number-actions': 'Tapping a number in Kuber Notes to add it as a transaction, loan or more',
  'lent-borrowed/01-lent-borrowed': 'Lent and Borrowed ledger with people and balances',
  'loans/01-loans': 'Loans with EMI progress and outstanding balance',
  'money-stories/01-home-story-bubbles': 'Home with the Money Stories row at the top',
  'money-stories/02-weekly-recap-story': 'Money story: weekly spending recap',
  'money-stories/03-week-over-week-comparison': 'Money story: this week compared with last week',
  'money-stories/04-monthly-top-categories': 'Money story: top spending categories this month',
  'money-stories/05-weekend-habits-insight': 'Money story: weekend spending pattern',
  'multi-currency/01-currency-settings': 'Settings with the currency and number format rows',
  'multi-currency/02-currency-converter': 'Currency Converter converting between two currencies',
  'multi-lingual/01-select-language': 'Select language sheet listing English and 8 Indian languages',
  'powerful-filtering/01-transaction-history': 'History with expenses, income and net totals, grouped by day',
  'powerful-filtering/02-advanced-filters': 'History filters: type, amount range, accounts and dates',
  'powerful-filtering/03-category-filters': 'History filters scrolled to categories, with three selected',
  'privacy-mode/01-privacy-mode-masked': 'Home with privacy mode on and every amount hidden',
  'privacy-mode/02-privacy-quick-actions': 'Quick Actions sheet with the Privacy Mode tile switched on',
  'pro-plans/01-pro-plans': 'Kuber Pro screen listing what Pro includes',
  'quick-add/01-home-widget': 'Quick Add widget on Home with two transactions typed in one line',
  'quick-add/02-parsed-transactions': 'Quick Add detecting two transactions, Movies and a new Trip category',
  'quick-add/03-voice-add': 'Voice Quick Add listening, with the spoken words shown as text',
  'recurring-transactions/01-recurring-transactions': 'Recurring transactions such as salary, rent and subscriptions',
  'reminders/01-reminders-list': 'Reminders list with Overdue, Today, This week and Completed filters',
  'reminders/02-new-reminder': 'New reminder form with amount, date, time and repeat options',
  'shortcuts/01-quick-actions': 'Quick Actions sheet over Home with controls and shortcuts',
  'shortcuts/02-add-new-shortcuts': 'Add New sheet over Home with custom entry options',
  'sms-import/01-sms-inbox': 'Import from SMS listing detected bank transactions to review',
  'sms-import/02-otp-protection': 'Paste an SMS sheet that detects an OTP message and skips it',
  'sms-import/03-review-transaction': 'Review SMS sheet with the parsed amount, account, category and date',
  'themes/01-theme-picker': 'Theme screen with Light, Dark and System, and the accent family cards',
  'themes/02-theme-wallpaper': 'Theme screen scrolled to more families, the wallpaper option and a preview',
  'upcoming-events/01-upcoming-events': 'Upcoming Events timeline with card dues, SIPs and EMIs',
  'voice-input/01-voice-add': 'Voice Quick Add listening, with the spoken words shown as text',
};

const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/screenshots/features/*/*.png', { eager: true });

const bySlug = new Map<string, Shot[]>();
for (const path of Object.keys(files).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))) {
  const m = path.match(/features\/([^/]+)\/(.+)-(light|dark)\.png$/);
  if (!m) throw new Error(`Screenshot name must end in -light.png or -dark.png: ${path}`);
  const [, slug, base, mode] = m;
  const list = bySlug.get(slug) ?? [];
  let shot = list.find((s) => s.base === base);
  if (!shot) {
    shot = { base, alt: ALT[`${slug}/${base}`] ?? base.replace(/^\d+-/, '').replace(/-/g, ' '), light: null!, dark: null };
    list.push(shot);
  }
  shot[mode as 'light' | 'dark'] = files[path].default;
  bySlug.set(slug, list);
}
for (const [slug, list] of bySlug) {
  for (const s of list) if (!s.light) throw new Error(`Missing -light.png for ${slug}/${s.base}`);
}

/** Ordered screenshots for a feature; empty when the folder is missing. */
export function getFeatureShots(slug: string): Shot[] {
  return bySlug.get(slug) ?? [];
}
