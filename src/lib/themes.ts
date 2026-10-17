/**
 * Kuber theme families, ported from the app (kuber/lib/core/theme/):
 * Kuber Signature (M3 fidelity, values from the design's palettes.json, which
 * the app also reads) plus the 15 selectable Mull OKLCh families from
 * theme_families.dart. `mullPalette` is a line-by-line port of
 * MullFamily.palette() and oklch.dart, so every value matches the app.
 *
 * Used by scripts/gen-tokens.mjs (tokens.css) and by the theme menu markup.
 */

export interface Palette {
  [role: string]: string;
}

export interface Family {
  id: string;
  name: string;
  blurb: string;
  /** Mull parameters, absent for Signature. */
  m?: [nh: number, nc: number, ph: number, pl: number, pc: number, pcc: number, sink?: number, ndc?: number];
}

// Display order of the app's Theme screen (Azure is retired, see kRetiredVariants).
export const FAMILIES: Family[] = [
  { id: 'signature', name: 'Kuber Signature', blurb: 'classic blue' },
  { id: 'mull', name: 'Mull', blurb: 'default', m: [215, 1, 215, 0.52, 0.11, 0.04] },
  { id: 'vellum', name: 'Vellum', blurb: 'warm', m: [80, 1.3, 70, 0.58, 0.1, 0.04] },
  { id: 'foxglove', name: 'Foxglove', blurb: 'soft', m: [330, 1.05, 325, 0.55, 0.12, 0.04] },
  { id: 'slate', name: 'Slate', blurb: 'mono', m: [215, 0.4, 215, 0.42, 0.012, 0.006] },
  { id: 'clay', name: 'Clay', blurb: 'greige', m: [75, 2.2, 45, 0.5, 0.055, 0.02, 0.025, 1.2] },
  { id: 'perch', name: 'Perch', blurb: 'violet', m: [265, 1, 265, 0.52, 0.11, 0.04] },
  { id: 'ember', name: 'Ember', blurb: 'amber', m: [55, 1.35, 45, 0.58, 0.11, 0.04] },
  { id: 'fern', name: 'Fern', blurb: 'cool green', m: [160, 1.15, 162, 0.54, 0.1, 0.04] },
  { id: 'tide', name: 'Tide', blurb: 'teal', m: [189, 1, 189, 0.5, 0.09, 0.04] },
  { id: 'meadow', name: 'Meadow', blurb: 'green', m: [145, 1.1, 145, 0.52, 0.1, 0.04] },
  { id: 'blush', name: 'Blush', blurb: 'rose', m: [359, 1.05, 359, 0.55, 0.12, 0.04] },
  { id: 'iris', name: 'Iris', blurb: 'purple', m: [290, 1, 290, 0.55, 0.12, 0.04] },
  { id: 'coral', name: 'Coral', blurb: 'red orange', m: [30, 1.2, 30, 0.56, 0.12, 0.04] },
  { id: 'citron', name: 'Citron', blurb: 'yellow green', m: [113, 1.2, 113, 0.55, 0.1, 0.04] },
  { id: 'neon', name: 'Neon', blurb: 'vivid green', m: [147, 0.8, 147, 0.6, 0.14, 0.05] },
];

export const FAMILY_IDS = FAMILIES.map((f) => f.id);

// palettes.json signature_light / signature_dark (heat = viz ramp).
const SIGNATURE: Record<'light' | 'dark', Palette> = {
  light: {
    primary: '#0058BE', 'on-primary': '#FFFFFF', 'primary-container': '#2170E4', 'on-primary-container': '#FEFCFF',
    'inverse-primary': '#ADC6FF', secondary: '#495E8A', 'on-secondary': '#FFFFFF', 'secondary-container': '#B6CCFF',
    'on-secondary-container': '#405682', tertiary: '#924700', 'on-tertiary': '#FFFFFF', 'tertiary-container': '#B75B00',
    'on-tertiary-container': '#FFFBFF', error: '#BA1A1A', 'on-error': '#FFFFFF', 'error-container': '#FFDAD6',
    'on-error-container': '#93000A', surface: '#F9F9FF', 'surface-container-lowest': '#FFFFFF',
    'surface-container-low': '#F2F3FD', 'surface-container': '#ECEDF7', 'surface-container-high': '#E6E7F2',
    'surface-container-highest': '#E1E2EC', 'on-surface': '#191B23', 'on-surface-variant': '#424754', outline: '#727785',
    'outline-variant': '#C2C6D6', 'inverse-surface': '#2E3038', 'inverse-on-surface': '#EFF0FA',
    income: '#296B2A', 'income-container': '#ACF4A2', 'on-income-container': '#0B5314',
    expense: '#BA1A1A', 'expense-container': '#FFDAD6', 'on-expense-container': '#93000A',
    warning: '#825500', 'warning-container': '#FFDDB2', 'on-warning-container': '#624000',
    'viz-1': '#EDF0FF', 'viz-2': '#C3D4FF', 'viz-3': '#81AAFF', 'viz-4': '#2573E6', 'viz-5': '#004FAB',
  },
  dark: {
    primary: '#ADC6FF', 'on-primary': '#002E6A', 'primary-container': '#4D8EFF', 'on-primary-container': '#001C46',
    'inverse-primary': '#005AC2', secondary: '#B1C6F9', 'on-secondary': '#182F59', 'secondary-container': '#304671',
    'on-secondary-container': '#9FB5E7', tertiary: '#FFB786', 'on-tertiary': '#502400', 'tertiary-container': '#DF7412',
    'on-tertiary-container': '#351600', error: '#FFB4AB', 'on-error': '#690005', 'error-container': '#93000A',
    'on-error-container': '#FFDAD6', surface: '#000000', 'surface-container-lowest': '#000000',
    'surface-container-low': '#191B23', 'surface-container': '#1D2027', 'surface-container-high': '#272A31',
    'surface-container-highest': '#32353C', 'on-surface': '#E1E2EC', 'on-surface-variant': '#C2C6D6', outline: '#8C909F',
    'outline-variant': '#424754', 'inverse-surface': '#E1E2EC', 'inverse-on-surface': '#2E3038',
    income: '#91D888', 'income-container': '#0B5314', 'on-income-container': '#ACF4A2',
    expense: '#FFB4AB', 'expense-container': '#93000A', 'on-expense-container': '#FFDAD6',
    warning: '#FFB94E', 'warning-container': '#624000', 'on-warning-container': '#FFDDB2',
    'viz-1': '#002E6A', 'viz-2': '#004395', 'viz-3': '#0566D9', 'viz-4': '#699CFF', 'viz-5': '#ADC6FF',
  },
};
const SIGNATURE_SEED = '#3B82F6';

// oklch.dart Oklch.toColor(): OKLab -> linear sRGB -> gamma, clamped.
function ok(l: number, c: number, h: number): string {
  const r = (h * Math.PI) / 180;
  const a = c * Math.cos(r);
  const b = c * Math.sin(r);
  const lp = (l + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const mp = (l - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const sp = (l - 0.0894841775 * a - 1.291485548 * b) ** 3;
  const lin = [
    4.0767416621 * lp - 3.3077115913 * mp + 0.2309699292 * sp,
    -1.2684380046 * lp + 2.6097574011 * mp - 0.3413193965 * sp,
    -0.0041960863 * lp - 0.7034186147 * mp + 1.707614701 * sp,
  ];
  return hex(lin.map((v) => Math.min(1, Math.max(0, v <= 0.0031308 ? 12.92 * v : 1.055 * v ** (1 / 2.4) - 0.055))));
}
const hex = (rgb: number[]) => '#' + rgb.map((v) => Math.round(v * 255).toString(16).padStart(2, '0')).join('').toUpperCase();
// Color.lerp on 8-bit channels (half rounds up, as in the design's port).
const lerp = (x: string, y: string, t: number) =>
  hex([1, 3, 5].map((i) => {
    const a = parseInt(x.slice(i, i + 2), 16);
    return Math.round(a + (parseInt(y.slice(i, i + 2), 16) - a) * t) / 255;
  }));

// MullFamily._money(): income 145, expense 25, warning 70.
function money(dark: boolean): Palette {
  const out: Palette = {};
  for (const [role, h, c] of [['income', 145, 0.13], ['expense', 25, 0.15], ['warning', 70, 0.12]] as const) {
    out[role] = ok(dark ? 0.78 : 0.52, c, h);
    out[`${role}-container`] = dark ? ok(0.32, c * 0.45, h) : ok(0.93, c * 0.4, h);
    out[`on-${role}-container`] = dark ? ok(0.9, c * 0.5, h) : ok(0.38, c, h);
  }
  return out;
}

// MullFamily.palette(dark:, amoled: false).
function mullPalette(f: Family, dark: boolean): Palette {
  const [nh, nc, ph, pl, pc, pcc, sink = 0, ndc = nc] = f.m!;
  const n = (l: number, c: number) => ok(l, c * (dark ? ndc : nc), nh);
  const p = (l: number, c: number) => ok(l, c, ph);
  const viz = (ls: number[], c: number) => Object.fromEntries(ls.map((l, i) => [`viz-${i + 1}`, p(l, c)]));
  if (!dark) {
    const surface = n(0.99 - sink, 0.004), container = n(0.965 - 1.6 * sink, 0.008);
    const high = n(0.935 - 2.2 * sink, 0.011), border = n(0.885 - 2.2 * sink, 0.012);
    const pcont = p(0.92, pcc), onPcont = p(0.38, pc);
    return {
      primary: p(pl, pc), 'on-primary': '#FFFFFF', 'primary-container': pcont, 'on-primary-container': onPcont,
      'inverse-primary': p(0.74, pc * 0.81), secondary: p(0.45, pc), 'on-secondary': '#FFFFFF',
      'secondary-container': pcont, 'on-secondary-container': onPcont, tertiary: p(0.45, pc), 'on-tertiary': '#FFFFFF',
      'tertiary-container': pcont, 'on-tertiary-container': onPcont,
      error: ok(0.55, 0.16, 25), 'on-error': '#FFFFFF', 'error-container': ok(0.95, 0.03, 25), 'on-error-container': ok(0.48, 0.17, 25),
      surface, 'surface-container-lowest': ok(1, 0, nh), 'surface-container-low': lerp(surface, container, 0.5),
      'surface-container': container, 'surface-container-high': high, 'surface-container-highest': lerp(high, border, 0.5),
      'on-surface': n(0.2, 0.02), 'on-surface-variant': n(0.52, 0.02), outline: n(0.62, 0.02), 'outline-variant': border,
      'inverse-surface': n(0.22, 0.02), 'inverse-on-surface': n(0.97, 0.004),
      ...money(false), ...viz([0.95, 0.86, 0.73, 0.57, 0.44], pc),
    };
  }
  const pcd = pc * 0.81, on14 = n(0.14, 0.01);
  const surface = n(0.205, 0.012), container = n(0.255, 0.014), high = n(0.3, 0.016), border = n(0.36, 0.016);
  const pcont = p(0.28, pcd * 0.46), onPcont = p(0.9, pcd * 0.46);
  return {
    primary: p(0.74, pcd), 'on-primary': on14, 'primary-container': pcont, 'on-primary-container': onPcont,
    'inverse-primary': p(pl, pc), secondary: p(0.85, pcd * 0.69), 'on-secondary': on14,
    'secondary-container': pcont, 'on-secondary-container': onPcont, tertiary: p(0.85, pcd * 0.69), 'on-tertiary': on14,
    'tertiary-container': pcont, 'on-tertiary-container': onPcont,
    error: ok(0.72, 0.14, 25), 'on-error': on14, 'error-container': ok(0.26, 0.05, 25), 'on-error-container': ok(0.82, 0.11, 25),
    surface, 'surface-container-lowest': n(0.17, 0.01), 'surface-container-low': lerp(surface, container, 0.5),
    'surface-container': container, 'surface-container-high': high, 'surface-container-highest': lerp(high, border, 0.5),
    'on-surface': n(0.96, 0.005), 'on-surface-variant': n(0.72, 0.012), outline: n(0.6, 0.012), 'outline-variant': border,
    'inverse-surface': n(0.93, 0.008), 'inverse-on-surface': n(0.2, 0.02),
    ...money(true), ...viz([0.28, 0.38, 0.52, 0.68, 0.82], pcd),
  };
}

export function palette(f: Family, mode: 'light' | 'dark'): Palette {
  return f.m ? mullPalette(f, mode === 'dark') : SIGNATURE[mode];
}

const lum = (h: string) =>
  [1, 3, 5]
    .map((i) => parseInt(h.slice(i, i + 2), 16) / 255)
    .map((v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4))
    .reduce((s, v, i) => s + v * [0.2126, 0.7152, 0.0722][i], 0);
export const contrast = (a: string, b: string) => {
  const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
};

/**
 * Web-only fix for WCAG AA: a few light Mull palettes put primary text, white
 * on primary, secondary text or income amounts under 4.5:1. Lower the OKLCh
 * lightness of just those roles until they pass. Returns the adjusted palette
 * and a log of what changed (see implementation-notes.md).
 */
export function accessible(f: Family, mode: 'light' | 'dark'): { p: Palette; changes: string[] } {
  const p = palette(f, mode);
  const changes: string[] = [];
  if (!f.m || mode === 'dark') return { p, changes };
  const [nh, nc, ph, pl, pc] = f.m;
  const fix = (role: string, make: (l: number) => string, l: number, ok_: (c: string) => boolean) => {
    const before = p[role];
    while (!ok_(p[role]) && l > 0.2) p[role] = make((l -= 0.005));
    if (p[role] !== before) changes.push(`${f.id}/light ${role} ${before} -> ${p[role]}`);
  };
  const bgs = ['surface', 'surface-container-low', 'surface-container'].map((r) => p[r]);
  fix('primary', (l) => ok(l, pc, ph), pl, (c) => bgs.every((b) => contrast(c, b) >= 4.5) && contrast(c, '#FFFFFF') >= 4.5);
  fix('on-surface-variant', (l) => ok(l, 0.02 * nc, nh), 0.52, (c) => contrast(c, p['surface-container-high']) >= 4.5);
  fix('income', (l) => ok(l, 0.13, 145), 0.52, (c) => bgs.every((b) => contrast(c, b) >= 4.5));
  return { p, changes };
}

/** The family's one fixed colour, used for its swatch (palettes.json `seed`). */
export function seed(f: Family): string {
  return f.m ? ok(f.m[3], f.m[4], f.m[2]) : SIGNATURE_SEED;
}
