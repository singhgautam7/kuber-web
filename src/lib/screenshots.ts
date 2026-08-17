/**
 * Build-time screenshot discovery for feature detail pages.
 *
 * Screenshots live in `public/screenshots/features/<slug>/` and are served as-is
 * (drop-in workflow: add a PNG, it appears, no code change). Files are ordered
 * by filename, so prefix them `01-`, `02-`, `03-`.
 *
 * Theme variants: a file may carry a `-obsidian` (dark) or `-alabaster` (light)
 * suffix before the extension, e.g. `01-home-obsidian.png` /
 * `01-home-alabaster.png`. These are grouped by base name; the <Screenshot>
 * component shows the variant matching the current site mode via CSS. If only
 * one variant exists it is used for both modes.
 *
 * We read the filesystem at build time (import.meta.glob is limited to files
 * under the project; public/ files are not returned by it), then hand back
 * public URLs.
 */
import { readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const PUBLIC_ROOT = join(process.cwd(), 'public', 'screenshots', 'features');
const IMAGE_RE = /\.(png|jpe?g|webp)$/i;
const VARIANT_RE = /-(obsidian|alabaster)(?=\.[^.]+$)/i;

export interface Shot {
  /** Base identity (filename without variant suffix), used for ordering/keys. */
  base: string;
  /** Alt text derived from the filename; override in the component when known. */
  alt: string;
  /** Public URL for the dark (obsidian) variant, if present. */
  obsidian: string | null;
  /** Public URL for the light (alabaster) variant, if present. */
  alabaster: string | null;
  /** A single URL when the image has no theme variants. */
  single: string | null;
}

function toPublicUrl(slug: string, file: string): string {
  // Consumers prefix with import.meta.env.BASE_URL where needed.
  return `/screenshots/features/${slug}/${file}`;
}

function humanize(base: string): string {
  return base
    .replace(/^\d+[-_]?/, '')
    .replace(/[-_]+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/** Ordered screenshots for a feature slug. Empty array when the folder is missing/empty. */
export function getFeatureShots(slug: string): Shot[] {
  const dir = join(PUBLIC_ROOT, slug);
  if (!existsSync(dir)) return [];

  const files = readdirSync(dir)
    .filter((f) => IMAGE_RE.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  const groups = new Map<string, Shot>();
  const order: string[] = [];

  for (const file of files) {
    const variantMatch = file.match(VARIANT_RE);
    const ext = file.slice(file.lastIndexOf('.'));
    const nameNoExt = file.slice(0, file.length - ext.length);
    const base = variantMatch ? nameNoExt.replace(VARIANT_RE, '') : nameNoExt;

    let shot = groups.get(base);
    if (!shot) {
      shot = { base, alt: humanize(base), obsidian: null, alabaster: null, single: null };
      groups.set(base, shot);
      order.push(base);
    }

    const url = toPublicUrl(slug, file);
    if (variantMatch) {
      const which = variantMatch[1].toLowerCase();
      if (which === 'obsidian') shot.obsidian = url;
      else shot.alabaster = url;
    } else {
      shot.single = url;
    }
  }

  return order.map((b) => groups.get(b)!);
}

/** The best single representative image for a feature (for OG images, cards). */
export function getFeatureOgShot(slug: string): string | null {
  const shots = getFeatureShots(slug);
  if (shots.length === 0) return null;
  const first = shots[0];
  return first.single ?? first.obsidian ?? first.alabaster;
}
