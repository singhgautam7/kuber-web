/**
 * Docs hub groups (copy.md, Docs). A doc is Published when its slug exists in
 * the docs collection or it links out (`href`); everything else is Coming soon.
 * The hub counters are computed from this, never typed.
 */
import { getCollection } from 'astro:content';
import { config } from '@/config';

export interface HubDoc {
  title: string;
  description: string;
  icon: string;
  slug?: string;
  href?: string;
  live?: boolean;
}

const GROUPS: { title: string; description: string; docs: HubDoc[] }[] = [
  {
    title: 'Privacy & Legal',
    description: 'What Kuber does with your data, and the terms you agree to.',
    docs: [
      { title: 'Privacy Policy', slug: 'privacy-policy', icon: 'shield', description: 'How Kuber works with no cloud storage, no tracking and full on-device privacy.' },
      { title: 'Data Deletion', slug: 'data-deletion', icon: 'delete', description: 'How to delete your Kuber data from the app, from Android settings or by uninstalling.' },
      { title: 'Terms of Service and Disclaimer', slug: 'terms', icon: 'gavel', description: 'Disclaimers for a personal budgeting tool, and open-source usage terms.' },
    ],
  },
  {
    title: 'User Guides',
    description: 'Step by step help for the parts people ask about most.',
    docs: [
      { title: 'Backup, Restore and Migration', slug: 'backup-and-restore', icon: 'backup', description: 'Export JSON or CSV backups, move to a new phone and set up automatic backups.' },
      { title: 'SMS Import and Bank Setup', slug: 'sms-import-guide', icon: 'sms', description: 'How on-device SMS parsing works, supported banks and permissions.' },
      { title: 'Budgets and Rollover Cycles', slug: 'budgets-guide', icon: 'donut_large', description: 'Weekly and monthly budget caps, category limits and rollover rules.' },
    ],
  },
  {
    title: 'Architecture & Security',
    description: 'How Kuber keeps everything on your phone.',
    docs: [
      { title: 'On-Device Storage', slug: 'security', icon: 'storage', description: 'Local storage, encryption at rest and no network access for your data.' },
      { title: 'Biometrics and App Lock', slug: 'biometrics', icon: 'fingerprint', description: 'Fingerprint and face unlock for private views, secured by your phone.' },
    ],
  },
  {
    title: 'Help & Support',
    description: 'Answers, and a direct line to the developer.',
    docs: [
      { title: 'Frequently Asked Questions', slug: 'faq', icon: 'help', description: 'Short answers about Pro, offline use and pricing.' },
      { title: 'Community and Direct Support', href: config.githubUrl, icon: 'forum', description: 'Reach the developer, report issues on GitHub or request a feature.' },
    ],
  },
];

export async function docsHub() {
  const slugs = new Set((await getCollection('docs')).map((d) => d.data.slug));
  const groups = GROUPS.map((g) => ({ ...g, docs: g.docs.map((d) => ({ ...d, live: !!d.href || slugs.has(d.slug!) })) }));
  const all = groups.flatMap((g) => g.docs);
  return { groups, published: all.filter((d) => d.live).length, soon: all.filter((d) => !d.live).length };
}
