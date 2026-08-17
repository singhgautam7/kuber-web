// Kuber "Vault" design system — 14 palettes (7 families x Obsidian/Alabaster).
// Values traced 1:1 from the Flutter app (lib/core/theme/kuber_tokens.dart).
// Shared business logic only: palette data + theme application. No UI here.

export const THEMES = [
  { id: 'signature', name: 'Kuber Signature', label: 'Blue' },
  { id: 'flewtube',  name: 'FlewTube',        label: 'Red' },
  { id: 'woofsapp',  name: 'Woofsapp',        label: 'Green' },
  { id: 'purrhub',   name: 'Purrhub',         label: 'Yellow' },
  { id: 'honkpe',    name: 'Honkpe',          label: 'Purple' },
  { id: 'squeakdin', name: 'Squeakdin',       label: 'Navy' },
  { id: 'oinkzon',   name: 'Oinkzon',         label: 'Orange' },
];

// Per palette we store the base colors; subtle/ring tints are derived in JS.
export const PALETTES = {
  signature: {
    dark:  { bg:'#000000', card:'#0D0D10', muted:'#18181B', border:'#27272A', borderMuted:'#3F3F46', text:'#FAFAFA', textSec:'#A1A1AA', accent:'#3B82F6', onAccent:'#FFFFFF', accentText:'#3B82F6', income:'#22C55E', expense:'#EF4444', warning:'#F59E0B' },
    light: { bg:'#FFFFFF', card:'#FAFAFA', muted:'#F4F4F5', border:'#E4E4E7', borderMuted:'#D4D4D8', text:'#09090B', textSec:'#71717A', accent:'#3B82F6', onAccent:'#FFFFFF', accentText:'#3B82F6', income:'#16A34A', expense:'#DC2626', warning:'#D97706' },
  },
  flewtube: {
    dark:  { bg:'#080304', card:'#140B0C', muted:'#201315', border:'#332022', borderMuted:'#4C3438', text:'#FBF7F7', textSec:'#AF9DA0', accent:'#E5484D', onAccent:'#FFFFFF', accentText:'#E5484D', income:'#34D399', expense:'#F59E0B', warning:'#F59E0B' },
    light: { bg:'#FFF9F9', card:'#FBF2F2', muted:'#F6E9E9', border:'#ECD8D8', borderMuted:'#DDC2C2', text:'#1A0B0D', textSec:'#7E686B', accent:'#C41E3A', onAccent:'#FFFFFF', accentText:'#C41E3A', income:'#059669', expense:'#B45309', warning:'#D97706' },
  },
  woofsapp: {
    dark:  { bg:'#020805', card:'#0A140E', muted:'#122017', border:'#1F3326', borderMuted:'#334C3C', text:'#F6FBF8', textSec:'#9BAFA2', accent:'#1FB855', onAccent:'#020805', accentText:'#1FB855', income:'#38BDF8', expense:'#EF4444', warning:'#F59E0B' },
    light: { bg:'#F8FDF9', card:'#F0F9F2', muted:'#E7F3EA', border:'#D5E8DA', borderMuted:'#BFD8C6', text:'#08140D', textSec:'#5F7A68', accent:'#15803D', onAccent:'#FFFFFF', accentText:'#15803D', income:'#0369A1', expense:'#DC2626', warning:'#D97706' },
  },
  purrhub: {
    dark:  { bg:'#0A0A08', card:'#14140F', muted:'#1F1F18', border:'#2A2A22', borderMuted:'#3F3F33', text:'#FAFAF5', textSec:'#A8A89A', accent:'#FACC15', onAccent:'#14120A', accentText:'#FDE68A', income:'#22C55E', expense:'#EF4444', warning:'#F59E0B' },
    light: { bg:'#FFFDF5', card:'#FBF8EC', muted:'#F5F1E1', border:'#EAE4CE', borderMuted:'#DBD2B5', text:'#14120A', textSec:'#78715B', accent:'#A16207', onAccent:'#FFFFFF', accentText:'#A16207', income:'#16A34A', expense:'#DC2626', warning:'#D97706' },
  },
  honkpe: {
    dark:  { bg:'#060310', card:'#0F0A1C', muted:'#181229', border:'#271E3F', borderMuted:'#3D315C', text:'#F9F8FC', textSec:'#A49CB8', accent:'#8B5CF6', onAccent:'#FFFFFF', accentText:'#8B5CF6', income:'#22C55E', expense:'#EF4444', warning:'#F59E0B' },
    light: { bg:'#FCFAFF', card:'#F7F3FD', muted:'#F0EAF9', border:'#E2D8F0', borderMuted:'#CFC0E3', text:'#120A20', textSec:'#6F6488', accent:'#6D28D9', onAccent:'#FFFFFF', accentText:'#6D28D9', income:'#16A34A', expense:'#DC2626', warning:'#D97706' },
  },
  squeakdin: {
    dark:  { bg:'#020509', card:'#080E17', muted:'#101A28', border:'#1C2C42', borderMuted:'#2F4460', text:'#F6FAFD', textSec:'#96A7BB', accent:'#4A7FD1', onAccent:'#FFFFFF', accentText:'#4A7FD1', income:'#22C55E', expense:'#EF4444', warning:'#F59E0B' },
    light: { bg:'#F7FAFE', card:'#EFF4FB', muted:'#E6EDF7', border:'#D3DEEC', borderMuted:'#BCCCE0', text:'#081220', textSec:'#5B6E86', accent:'#1E3A8A', onAccent:'#FFFFFF', accentText:'#1E3A8A', income:'#16A34A', expense:'#DC2626', warning:'#D97706' },
  },
  oinkzon: {
    dark:  { bg:'#080502', card:'#150E07', muted:'#22170D', border:'#362617', borderMuted:'#503A26', text:'#FCF8F4', textSec:'#B3A190', accent:'#FB923C', onAccent:'#1A1006', accentText:'#FB923C', income:'#22C55E', expense:'#EF4444', warning:'#F59E0B' },
    light: { bg:'#FFFAF4', card:'#FBF3E9', muted:'#F6EADB', border:'#ECDBC4', borderMuted:'#DDC6A7', text:'#1A1006', textSec:'#7E6C58', accent:'#C2410C', onAccent:'#FFFFFF', accentText:'#C2410C', income:'#16A34A', expense:'#DC2626', warning:'#D97706' },
  },
};

export function hexToRgba(hex, a) {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
}

// Deep shade of the accent — HSL saturation x0.85, lightness 0.26.
// Matches KuberBrandMarkPainter.deepShade (Signature blue -> ~#0E397C).
export function deepShade(hex) {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
  let r = ((n >> 16) & 255) / 255, g = ((n >> 8) & 255) / 255, b = (n & 255) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let hue = 0, s = 0; const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) hue = (g - b) / d + (g < b ? 6 : 0);
    else if (max === g) hue = (b - r) / d + 2;
    else hue = (r - g) / d + 4;
    hue /= 6;
  }
  s = Math.min(1, s * 0.85);
  const L = 0.26;
  const hue2rgb = (p, q, t) => {
    if (t < 0) t += 1; if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  const q = L < 0.5 ? L * (1 + s) : L + s - L * s, p = 2 * L - q;
  const to = x => Math.round(hue2rgb(p, q, x) * 255).toString(16).padStart(2, '0');
  return `#${to(hue + 1 / 3)}${to(hue)}${to(hue - 1 / 3)}`;
}

// Write the palette onto an element as CSS custom properties (--k-*).
export function applyTheme(el, variant, mode) {
  if (!el) return;
  const p = (PALETTES[variant] || PALETTES.signature)[mode === 'light' ? 'light' : 'dark'];
  const set = (k, v) => el.style.setProperty(k, v);
  set('--k-bg', p.bg);
  set('--k-card', p.card);
  set('--k-muted', p.muted);
  set('--k-border', p.border);
  set('--k-border-muted', p.borderMuted);
  set('--k-text', p.text);
  set('--k-text-sec', p.textSec);
  set('--k-accent', p.accent);
  set('--k-accent-subtle', hexToRgba(p.accent, mode === 'light' ? 0.10 : 0.14));
  set('--k-accent-ring', hexToRgba(p.accent, mode === 'light' ? 0.24 : 0.30));
  set('--k-on-accent', p.onAccent);
  set('--k-accent-text', p.accentText);
  set('--k-income', p.income);
  set('--k-income-subtle', hexToRgba(p.income, mode === 'light' ? 0.10 : 0.14));
  set('--k-expense', p.expense);
  set('--k-expense-subtle', hexToRgba(p.expense, mode === 'light' ? 0.10 : 0.14));
  set('--k-warning', p.warning);
  set('--k-tile', deepShade(p.accent));
  el.style.colorScheme = mode === 'light' ? 'light' : 'dark';
}

const VARIANT_KEY = 'kuber-theme-variant';
const MODE_KEY = 'kuber-theme-mode';

export function readPref() {
  let variant = 'signature', mode = 'dark';
  try {
    variant = localStorage.getItem(VARIANT_KEY) || variant;
    mode = localStorage.getItem(MODE_KEY) || mode;
  } catch (e) {}
  if (!PALETTES[variant]) variant = 'signature';
  return { variant, mode };
}

export function savePref(variant, mode) {
  try {
    localStorage.setItem(VARIANT_KEY, variant);
    localStorage.setItem(MODE_KEY, mode);
  } catch (e) {}
}
