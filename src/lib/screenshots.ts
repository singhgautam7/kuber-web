/**
 * Build-time screenshot discovery for feature detail pages.
 *
 * Screenshots live in `src/assets/screenshots/features/<slug>/` and are optimized
 * by Astro at build time. Files are ordered by filename, so prefix them `01-`, `02-`, `03-`.
 *
 * Theme variants: a file may carry a `-obsidian` (dark) or `-alabaster` (light)
 * suffix before the extension, e.g. `01-home-obsidian.png` /
 * `01-home-alabaster.png`. These are grouped by base name; the <Screenshot>
 * component shows the variant matching the current site mode via CSS. If only
 * one variant exists it is used for both modes.
 */
import type { ImageMetadata } from 'astro';

const VARIANT_SUFFIX_RE = /-(obsidian|alabaster)$/i;

export interface Shot {
  /** Base identity (filename without variant suffix), used for ordering/keys. */
  base: string;
  /** Alt text derived from the filename; override in the component when known. */
  alt: string;
  /** ImageMetadata for the dark (obsidian) variant, if present. */
  obsidian: ImageMetadata | null;
  /** ImageMetadata for the light (alabaster) variant, if present. */
  alabaster: ImageMetadata | null;
  /** A single ImageMetadata when the image has no theme variants. */
  single: ImageMetadata | null;
}

function humanize(base: string): string {
  return base
    .replace(/^\d+[-_]?/, '')
    .replace(/[-_]+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

// Eagerly glob all screenshots under src/assets/screenshots/features/
const imageModules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/screenshots/features/**/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}',
  { eager: true }
);

interface ParsedFile {
  slug: string;
  file: string;
  imageMeta: ImageMetadata;
}

const parsedFiles: ParsedFile[] = [];

for (const [path, mod] of Object.entries(imageModules)) {
  const match = path.match(/\/src\/assets\/screenshots\/features\/([^/]+)\/(.+)$/);
  if (!match) continue;
  const slug = match[1];
  const file = match[2];
  const imageMeta = (mod as { default?: ImageMetadata }).default ?? (mod as unknown as ImageMetadata);
  parsedFiles.push({ slug, file, imageMeta });
}

// Group by slug
const filesBySlug = new Map<string, ParsedFile[]>();
for (const item of parsedFiles) {
  let list = filesBySlug.get(item.slug);
  if (!list) {
    list = [];
    filesBySlug.set(item.slug, list);
  }
  list.push(item);
}

const slugShotsMap = new Map<string, Shot[]>();

for (const [slug, files] of filesBySlug.entries()) {
  files.sort((a, b) => a.file.localeCompare(b.file, undefined, { numeric: true }));

  const groups = new Map<string, Shot>();
  const order: string[] = [];

  for (const { file, imageMeta } of files) {
    const ext = file.slice(file.lastIndexOf('.'));
    const nameNoExt = file.slice(0, file.length - ext.length);
    const variantMatch = nameNoExt.match(VARIANT_SUFFIX_RE);
    const base = variantMatch ? nameNoExt.replace(VARIANT_SUFFIX_RE, '') : nameNoExt;

    let shot = groups.get(base);
    if (!shot) {
      shot = { base, alt: humanize(base), obsidian: null, alabaster: null, single: null };
      groups.set(base, shot);
      order.push(base);
    }

    if (variantMatch) {
      const which = variantMatch[1].toLowerCase();
      if (which === 'obsidian') shot.obsidian = imageMeta;
      else shot.alabaster = imageMeta;
    } else {
      shot.single = imageMeta;
    }
  }

  slugShotsMap.set(
    slug,
    order.map((b) => groups.get(b)!)
  );
}

/** Ordered screenshots for a feature slug. Empty array when the folder is missing/empty. */
export function getFeatureShots(slug: string): Shot[] {
  return slugShotsMap.get(slug) ?? [];
}

/** The best single representative image for a feature (for OG images, cards). */
export function getFeatureOgShot(slug: string): string | null {
  const shots = getFeatureShots(slug);
  if (shots.length === 0) return null;
  const first = shots[0];
  const meta = first.single ?? first.obsidian ?? first.alabaster;
  return meta ? meta.src : null;
}
