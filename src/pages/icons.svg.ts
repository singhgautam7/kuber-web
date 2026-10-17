/**
 * /icons.svg: one SVG sprite of the Material Symbols glyphs the site uses,
 * built from src/lib/symbols.json. Same-origin and cached, so icons cost one
 * request and no font or CDN.
 */
import symbols from '@/lib/symbols.json';

export function GET() {
  const body = Object.entries(symbols as Record<string, string>)
    // A "24:" prefix marks the few glyphs taken from Google's repo at 24 units.
    .map(([id, d]) => {
      const small = d.startsWith('24:');
      return `<symbol id="${id}" viewBox="${small ? '0 0 24 24' : '0 -960 960 960'}"><path d="${small ? d.slice(3) : d}"/></symbol>`;
    })
    .join('');
  return new Response(`<svg xmlns="http://www.w3.org/2000/svg">${body}</svg>`, {
    headers: { 'Content-Type': 'image/svg+xml' },
  });
}
