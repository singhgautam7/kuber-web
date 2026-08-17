/**
 * Site-wide configuration. Every page reads from here.
 *
 * To update the Play Store URL, developer email, or the current promo, edit
 * this file only. Nothing else needs to change.
 */

export interface Promo {
  /** The code the user types at checkout, e.g. "KUBERLAUNCH". */
  code: string;
  /** One-line description of the offer. No em dashes. */
  description: string;
  /** ISO date the promo expires, or null for no fixed expiry. */
  expiresOn: string | null;
}

export interface SiteConfig {
  siteTitle: string;
  siteDescription: string;
  playStoreUrl: string;
  githubUrl: string;
  /** Raw developer email. Obfuscated at render time to deter scrapers. */
  developerEmail: string;
  developerName: string;
  portfolioUrl: string;
  /** Set to null to hide the promo banner everywhere. */
  currentPromo: Promo | null;
}

export const config: SiteConfig = {
  siteTitle: 'Kuber',
  siteDescription:
    'Kuber is a fully offline personal finance app for India. Track income, expenses and transfers, import bank SMS on-device, and read your spending back with analytics. No account, no cloud, no tracking.',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.grs.kuber',
  githubUrl: 'https://github.com/singhgautam7/Kuber/',
  developerEmail: 'hello@singhgautam.com',
  developerName: 'Gautam Rajeev Singh',
  portfolioUrl: 'https://www.singhgautam.com/',
  currentPromo: {
    code: 'KUBERLAUNCH',
    description: 'Launch discount on Kuber Pro. Use this code at checkout.',
    expiresOn: null,
  },
};

export default config;
