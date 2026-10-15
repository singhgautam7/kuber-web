# Web v1 · Copy

All new and changed user-facing copy. Rules: short and plain, no em dashes or en dashes, Indian numbering and ₹, product names exactly as in the app (Ask Kuber, Kuber Cards, Kuber Notes, Quick Add, Voice Quick Add, Kuber Pro). Unchanged repo copy is not repeated here.

## Content fixes (from the brief)

| Fix | Where | Before | After |
|---|---|---|---|
| SMS Import is not Pro-only | sms-import.md `pro`, badges everywhere | PRO badge | Free + Pro badge. Limit line: "Free: 5 imports a week. Pro: unlimited." |
| SMS Import is not Pro-only | changelog 2026-08 summary | "Unlock SMS Import, Advanced Analytics, …" | "Unlimited SMS Import and Ask Kuber, Advanced Analytics, unlimited Kuber Notes and Cards, Reminders, automatic backups and all sixteen accent themes. Start with a 14-day free trial on the yearly plan, or buy Lifetime once." |
| Em dash | powerful-filtering.md description | "Filter your finances any way you want—by keyword search, …" | "Filter by keyword, account, category, tag, amount range, transaction type or custom dates." |
| Em dash | powerful-filtering.md body (Live Net Totals) | "…recalculates in real time—showing the exact…" | "…recalculates in real time, showing the exact…" |
| Placeholder reviews | index.astro testimonials | "What people say", "Real reviews coming soon", "Your words here…" ×3 | Removed. Section designed (H4) and hidden until real reviews exist. |
| Voice Add twice | Home | In "What Kuber does" (as Voice Add) and in Signature | The "What Kuber does" grid is gone; Voice Quick Add appears once, in Signature. |
| Ask Kuber covers both jobs | ask-kuber.md description | "Describe a transaction in plain words and Kuber drafts it, ready for you to confirm." | "Ask about your money in plain words and get answers right on your phone. Or describe a transaction and Kuber drafts it for you to confirm." |
| 6,000+ transactions | Home numbers | "6,000+ · Transactions handled in production" | "16 · Themes, each in light and dark" (full row below) |
| Bank logos | Home banks | 8 bank logo SVGs | Bank names as text chips (see Banks) |

## Badges (accurate per pro-plans.md)

| Feature | Before | After | Limit line |
|---|---|---|---|
| Ask Kuber | Free, Beta | Free + Pro, Beta | Free: 5 questions a week. Pro: unlimited. |
| SMS Import | Pro | Free + Pro | Free: 5 imports a week. Pro: unlimited. |
| Kuber Cards | Pro | Free + Pro | Free: 2 cards. Pro: unlimited. |
| Kuber Notes | Pro | Free + Pro | Free: 2 notes. Pro: unlimited. |
| Voice Quick Add | Free, Beta | Free, Beta |  |
| Detailed Analytics | Free | Free + Pro | Free: core charts. Pro: Advanced Analytics. |
| Reminders | Pro | Pro |  |
| Automatic Backups | Pro | Pro | Manual backups are free. |
| Themes | Pro | Free + Pro | Free: Kuber Signature. Pro: all 16. |
| Multi-lingual | Free, Beta | Free, Beta |  |
| All other features | Free | Free | |

Badge labels: "Free", "Pro", "Beta". Free + Pro renders as the joined pair. Legend on the Features index: "Included free", "Free with a limit, unlimited in Pro", "Pro only", "Still in beta".

## Feature descriptions (cards and detail pages)

Changed ones only. The rest keep the repo text.

| Slug | New description |
|---|---|
| ask-kuber | Ask about your money in plain words and get answers right on your phone. Or describe a transaction and Kuber drafts it for you to confirm. |
| sms-import | Turn bank and payment SMS into transactions, parsed on your phone and imported only when you say so. |
| kuber-cards | Store card details encrypted on your phone, hidden behind biometrics. No network, ever. |
| kuber-notes | A smart notepad that does the math. Type 'total' or '=' to add up, and tap a number to log it as a transaction, loan or ledger entry. |
| quick-add | Type or speak to log several transactions at once. Amounts, merchants and categories are parsed on your phone, from the home widget or full screen. |
| voice-input | Say what you spent and Kuber logs it. Built into Quick Add for hands-free tracking. |
| powerful-filtering | Filter by keyword, account, category, tag, amount range, transaction type or custom dates. |
| calculators | Built-in calculators for borrowing, taxes, investments and planning. Save any calculation to revisit and compare later. |
| detailed-analytics | Core charts, weekly heatmaps and category breakdowns are free. Advanced Analytics adds health scores and predictive patterns in Pro. |
| reminders | Reminders for bills, EMIs, salary and dues. Filter by overdue, today or this week, with recurring schedules. |
| automatic-backups | Scheduled backups on your phone that you own. Choose daily, weekly or monthly, and pick the folder. |
| money-stories | Bite-sized visual stories about your spending. New stories stay on Home for 48 hours, and the Stories Archive keeps them all. |
| home-widgets | Customize your dashboard and analytics. Drag cards to reorder them and switch widgets on or off. |
| themes | Sixteen accent families in light, dark and system modes, with live recoloring across the app. |
| biometrics | Lock Kuber, private notes and saved cards behind fingerprint or face unlock, secured by your phone. |
| shortcuts | Long-press a nav tab or the add button for quick actions, privacy toggles and custom entry options. |
| upcoming-events | One timeline for what is coming up: card dues, SIPs, loan EMIs, money lent or borrowed, and recurring bills. |
| recurring-transactions | Automate repeating income and expenses like salary, rent and subscriptions, with custom frequencies. |
| loans | Track any loan: principal, interest rate and EMIs, with a running payment history. |
| investments | Track mutual funds, stocks, SIPs, gold, FDs, crypto and real estate in one portfolio, with profit and loss. |
| lent-borrowed | Track money lent to friends or borrowed from others, with contact suggestions and clean settlement. |
| budgets | Category spending limits with live progress, custom alerts and a history of past months. |
| multi-currency | Track in your chosen currency, with native symbol formatting and a built-in converter. |
| multi-lingual | Use Kuber in English or a regional Indian language. |
| import-export | Export statements and full backups as CSV or JSON, restore older records, or try features with sample data. |
| pro-plans | What Kuber Pro unlocks: Advanced Analytics, unlimited SMS imports, automatic backups and higher limits. |

Reasons: drop brand names (Instagram, WhatsApp) from Money Stories; drop the unconfirmed counts (25+ calculators, 9 regional languages, see open-decisions 6 and 7); "on-device" becomes "on your phone" where it reads better; shorter sentences.

Feature detail bodies:
- SMS Import: "Kuber scans messages from recognised Indian bank and payment sender IDs, reads only transaction alerts, and parses the amount, type, date and merchant. You review the list and pick what to import. SMS is read on your phone and only when you open the screen, never in the background."
- Kuber Cards: "A private vault for your card details. Everything is encrypted, stored on your phone and locked behind biometrics. Kuber never sends card data over any network." / "The free plan holds 2 cards. Kuber Pro removes the limit." (replaces "You can store as many cards as desired. Free tier allows just two cards…", which contradicted itself)
- Section titles: "How it works", "Where to find it in the app", "Plan", "Related features", "Compare Free and Pro", "Read the privacy details".

## Navigation, FAB, theme menu

| Key | Copy |
|---|---|
| Nav items | Home · Features · Docs · About · Press |
| FAB | Get the app |
| FAB (icon only) aria-label | Get the app on Google Play |
| Theme button aria-label | Theme and mode |
| Menu button aria-label | Open menu / Close menu |
| Theme menu | Mode · Light · Dark · System · Accent |
| Theme menu note | Saved on this device only. In the app, Kuber Signature is free and the other fifteen come with Pro. |
| Theme names | Kuber Signature (Blue) · FlewTube (Red) · Woofsapp (Green) · Purrhub (Yellow) · Honkpe (Purple) · Squeakdin (Navy) · Oinkzon (Orange) |
| Mobile menu | Menu · Home · Features · Docs · About · Press · Changelog · Privacy Policy · GitHub · Get the app on Google Play |
| Skip link | Skip to main content (unchanged) |

## Home

| Section | Copy |
|---|---|
| Hero chip | Local-first personal finance, made in India |
| Hero headline | Fully offline. / Fully yours. |
| Hero lead | Track expenses, read your spending and stay on top of your money. No account, no cloud, no tracking. Your data never leaves your phone. |
| Hero actions | Get it on Google Play · See all features |
| Trust strip | Offline · Private · Open source · Made in India · Under 17 MB |
| Why Kuber eyebrow / headline | Why Kuber · Everything you need to track money, nothing you don't. |
| Why Kuber lead | The same five ideas as the tour inside the app, from the first expense you note to the tools you use later. |
| Why Kuber 1 | Make noting every expense a habit. / Small expenses count too. Noting is easy, and bank SMS add most of them. |
| Why Kuber 2 | Every account. Even credit cards. / Bank, cash and cards, with billing cycles and due dates. Add any category. |
| Why Kuber 3 | Track more than spending. / Budgets, investments, loans, money lent or borrowed, and subscriptions. |
| Why Kuber 4 | Your spending, at a glance. / Every transaction in one searchable history, with many ways to analyze it. |
| Why Kuber 5 | Go further when you want. |
| Why Kuber 5 lines | Ask Kuber: Ask about your money, answered on your phone. · Kuber Cards: Your cards, encrypted and kept on your phone. · Kuber Notes: Notes that do the math and add transactions. · Calculators and tools: EMI, SIP, tax and more. · Reminders: Never miss a bill. |
| Why Kuber a11y (stage labels) | Three expenses written in a notebook turn into Kuber transactions, each with a category and an account. / A bank account, cash and a credit card show their balances. The card shows its billing cycle and due date. A new category, Pet care, joins the others. / A budget fills, an investment grows, a loan EMI is paid, money lent and borrowed shows up, and a subscription renews. / A searchable history narrows to food. Then charts show spending by category, by month, and this month against last month. / Ask Kuber answers a question, a card turns over, a note adds up and becomes a transaction, a calculator shows a result, and a bill reminder arrives. |
| Signature | Signature · The features people switch for · Learn more |
| Themes | Make it yours · Seven themes. Light and dark. · Pick an accent family and Kuber recolors, income and expense included. Tap a theme below to try it. The whole site changes with you. · Mode · Accent |
| Numbers | In numbers · Small app. A lot inside. · 20+ Banks supported for SMS import · 12+ Home screen widgets · 13 Built-in calculators · 7 Themes, each in light and dark · 5 Languages |
| Banks | SMS import works with 20+ banks, including · HDFC Bank · State Bank of India · ICICI Bank · Axis Bank · Kotak Mahindra Bank · Punjab National Bank · IDFC FIRST Bank · Yes Bank · and more · How SMS import works · Bank names are shown for reference only. Kuber is not affiliated with these banks. |
| Developer | Made by one developer · Kuber is built and maintained by Gautam Rajeev Singh, one developer in India. It started because no expense app felt fast, private and simple enough for daily use. So he built one. · Read the full letter · GitHub · singhgautam.com |
| CTA | Start tracking today · Free to download. Under 17 MB. No account needed. |
| Reviews (hidden) | What people say · real quotes only, with name and source (Google Play · month year) |

## Features index

Features · Every tool, one app · A complete picture of what Kuber does. Free features are yours forever. Pro unlocks the rest. Everything runs offline. · Chips: All 29 · Free 27 · Pro 8 · Signature 5 · Beta 3. Category headings: Tracking, Insights, Money, Privacy & Security, Personalization, Productivity, Data.

## Docs

| Item | Copy |
|---|---|
| Header | Docs · Everything you need to know about Kuber · Guides, security deep-dives and legal policies. Your data stays on your device, so the docs can be short and plain. |
| Status | 4 published · 6 in progress · Published · Coming soon · Soon |
| Group titles | Privacy & Legal · User Guides · Architecture & Security · Help & Support |
| Privacy Policy | How Kuber works with no cloud storage, no tracking and full on-device privacy. |
| Data Deletion | How to delete your Kuber data from the app, from Android settings or by uninstalling. |
| Terms of Service and Disclaimer | Disclaimers for a personal budgeting tool, and open-source usage terms. |
| Backup, Restore and Migration | Export JSON or CSV backups, move to a new phone and set up automatic backups. |
| SMS Import and Bank Setup | How on-device SMS parsing works, supported banks and permissions. |
| Budgets and Rollover Cycles | Weekly and monthly budget caps, category limits and rollover rules. |
| On-Device Storage | Local storage, encryption at rest and no network access for your data. |
| Biometrics and App Lock | Fingerprint and face unlock for private views, secured by your phone. |
| Frequently Asked Questions | Short answers about Pro, offline use and pricing. |
| Community and Direct Support | Reach the developer, report issues on GitHub or request a feature. |
| Doc page | Last updated 28 March 2026 · 5 min read · On this page · Next · Docs · Privacy Policy (mobile picker) |

Doc card titles drop "Policy", "&" and "Isar Database" for plain names; descriptions are shorter and lose "zero" and "100%".

## Changelog

| Entry | Copy |
|---|---|
| Kuber Pro launch (v5.1.0) | Kuber Pro is here. Unlimited SMS Import and Ask Kuber, Advanced Analytics, unlimited Kuber Notes and Cards, Reminders, automatic backups and all sixteen accent themes. Start with a 14-day free trial on the yearly plan, or buy Lifetime once. Kuber Signature stays free in light and dark. The other accent families are Pro. Restore purchases and redeem Google Play promo codes from Settings. Launch offers set in Play Console apply automatically on the yearly plan. No account, no cloud. Cancel anytime through Google Play. |
| Personalization themes (v4.6.0) | Seven accent families in light and dark, plus a redesigned Appearance section in Settings. Seven theme families with light and dark variants. Modern and standard bottom navigation styles. Redesigned More tab with a hero layout option. |
| Ask Kuber and Voice Quick Add (v4.0.0) | Natural language and voice entry arrive, parsed entirely on your phone. Type a sentence to draft a transaction. Hold to speak and log hands-free. Several transactions detected from a single input. |
| Analytics and insights (v3.2.0) | Deeper analytics with automatic insights on your spending. Category and tag breakdowns. Weekday and weekend patterns. Month over month comparisons. |

Versions show the marketing version only (5.1.0, not 5.1.0+53). "Weekday vs weekend" becomes "Weekday and weekend"; semicolons removed.

## About, Press, 404, footer

- About: "A note from the maker" · "A letter from the developer" (sentence case) · letter verbatim · "Signed · Gautam" · Why Kuber, What is Kuber, meaning and contact unchanged · "Made in India by Gautam Rajeev Singh".
- Press: "Logo and wordmark" · "SVG. The mark follows the selected theme." · "Get from GitHub" · "Screenshots" · "PNG at 2x, light and dark, with sample data only." · "Download all (ZIP)" · "Boilerplate" · "Copy text" · "Fact sheet" · "Press questions: use the contact card on the About page."
- 404: unchanged words, serif accent removed. Actions: Back to home · Browse features · Docs · Press · About.
- Footer: Product (Features, Kuber Pro, Changelog) · Help (Docs, FAQ, Support) · Legal (Privacy Policy, Data Deletion) · Kuber (About, Press kit, GitHub, Developer site) · "© 2026 Kuber" · "Last updated {build date}" · "No cookies, analytics or trackers on this site" · "Made in India".

## Mockup sample data

Generic names only: Your Bank, Rewards Card, Savings Bank, Savings Account, Wallet, Food delivery, Streaming plan, ACME LTD; sender ID AD-YRBANK. Real bank names appear only in the Banks section as a factual list.
