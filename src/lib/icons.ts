/**
 * Icon registry. Path data traced from the design prototypes' inline SVGs.
 * Each icon is the inner markup of a 24x24 viewBox. `filled` icons paint with
 * `fill="currentColor"`; the rest are 1.9-weight strokes, matching the design's
 * `ic()` helper.
 */

export interface Icon {
  p: string;
  filled?: boolean;
}

export const ICONS: Record<string, Icon> = {
  // --- from the design's feature lists ---
  'expense-tracking': { p: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>' },
  'ask-kuber': { p: '<path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"/>', filled: true },
  'sms-import': { p: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>' },
  'kuber-cards': { p: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 9h20"/>' },
  'kuber-notes': { p: '<path d="M4 3h11l5 5v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14 3v6h6M8 13h8M8 17h6"/>' },
  'voice-input': { p: '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 19v3"/>' },
  filtering: { p: '<path d="M3 5h18l-7 8v6l-4-2v-4z"/>' },
  'advanced-analytics': { p: '<path d="M4 20V10M10 20V4M16 20v-8M22 20V8"/>' },
  insights: { p: '<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12c1 1 1 2 1 3h6c0-1 0-2 1-3a7 7 0 0 0-4-12z"/>' },
  accounts: { p: '<rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="16" cy="12" r="2"/>' },
  budgets: { p: '<circle cx="12" cy="12" r="9"/><path d="M12 3v9l6 3"/>' },
  recurring: { p: '<path d="M4 12a8 8 0 0 1 14-5l3 3M20 12a8 8 0 0 1-14 5l-3-3"/>' },
  reminders: { p: '<path d="M6 9a6 6 0 0 1 12 0c0 7 3 8 3 8H3s3-1 3-8M10 21h4"/>' },
  'home-widgets': { p: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>' },
  calculators: { p: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 11h2M12 11h2M16 11h0M8 15h2M12 15h2M16 15h0"/>' },
  'multi-currency': { p: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>' },
  'automatic-backups': { p: '<path d="M21 12a9 9 0 1 1-3-6.7M21 3v5h-5"/>' },
  'lent-borrowed': { p: '<path d="M17 3l4 4-4 4M21 7H8M7 21l-4-4 4-4M3 17h13"/>' },

  // --- additional slugs (icons composed from the same vocabulary) ---
  'quick-add': { p: '<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>' },
  themes: { p: '<path d="M12 2a10 10 0 1 0 0 20 2 2 0 0 0 2-2 2 2 0 0 1 2-2h1a5 5 0 0 0 5-5 8 8 0 0 0-8-8z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="12" cy="7.5" r="1"/><circle cx="16.5" cy="10.5" r="1"/>' },
  'dev-mode': { p: '<path d="M8 6l-6 6 6 6M16 6l6 6-6 6"/>' },
  'privacy-mode': { p: '<path d="M9.9 4.2A9 9 0 0 1 12 4c7 0 11 8 11 8a17 17 0 0 1-2.2 3.2M6.6 6.6A17 17 0 0 0 1 12s4 8 11 8a9 9 0 0 0 5.4-1.7M2 2l20 20"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>' },
  biometrics: { p: '<path d="M5 12a7 7 0 0 1 12-5M8 20c-.5-2-1-3-1-8a5 5 0 0 1 8-4M12 12v2c0 3 .5 4 1 6M16 13c0 4-.5 5.5-1 7"/>' },
  shortcuts: { p: '<path d="M13 2L3 14h7l-1 8 10-12h-7z"/>' },
  'upcoming-events': { p: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18M8 2v4M16 2v4M12 14v3l2 1"/>' },
  loans: { p: '<circle cx="12" cy="12" r="9"/><path d="M15 8.5a3 3 0 0 0-3-1.5c-1.7 0-3 1-3 2.5S10.3 12 12 12s3 .5 3 2-1.3 2.5-3 2.5a3 3 0 0 1-3-1.5M12 5v14"/>' },
  investments: { p: '<path d="M23 6l-9.5 9.5-5-5L1 18M17 6h6v6"/>' },
  'money-stories': { p: '<circle cx="12" cy="12" r="9"/><path d="M10 8.5l5 3.5-5 3.5z"/>' },
  'import-export': { p: '<path d="M8 17V3M4 7l4-4 4 4M16 7v14M20 17l-4 4-4-4"/>' },
  'pro-plans': { p: '<path d="M2 20h20M4 8l4 5 4-8 4 8 4-5-2 12H6z"/>' },
};

/** Inner SVG markup (not the <svg> wrapper) for an icon key. Empty if unknown. */
export function iconPath(name: string | undefined): { p: string; filled: boolean } {
  if (!name) return { p: '', filled: false };
  const icon = ICONS[name];
  if (!icon) return { p: '', filled: false };
  return { p: icon.p, filled: !!icon.filled };
}
