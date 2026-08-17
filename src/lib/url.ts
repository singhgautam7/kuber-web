/**
 * Base-path aware URL builder. The site deploys under a base (e.g. "/kuber"),
 * so all internal links and asset paths must be prefixed with BASE_URL.
 */
const BASE = import.meta.env.BASE_URL; // e.g. "/kuber/"

function join(path: string): string {
  const b = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${b}${p}`;
}

/** Internal page URL, with a trailing slash for directory-format routes. */
export function url(path: string): string {
  if (path === '/' || path === '') return BASE.endsWith('/') ? BASE : `${BASE}/`;
  let out = join(path);
  if (!out.endsWith('/') && !/\.[a-z0-9]+$/i.test(out)) out += '/';
  return out;
}

/** Asset URL under /public (no forced trailing slash). */
export function asset(path: string): string {
  return join(path);
}

/** Absolute URL for canonical/OG tags. `site` comes from Astro config. */
export function absolute(path: string, site: URL | undefined): string {
  const rel = /\.[a-z0-9]+$/i.test(path) ? asset(path) : url(path);
  if (!site) return rel;
  return new URL(rel, site).toString();
}
