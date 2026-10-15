/**
 * Adds Material Symbols Rounded glyphs (the app's icon set) to
 * src/lib/symbols.json. Maintenance only: the build never touches the network.
 *
 *   bun scripts/fetch-symbols.mjs home menu home-fill
 *
 * "-fill" is the filled variant. Paths come from the @material-symbols/svg-400
 * package (Apache 2.0) and keep its 0 -960 960 960 viewBox. A few names are
 * missing from that package (auto_awesome, expand_more); those come from
 * google/material-design-icons `symbols/web/<name>/materialsymbolsrounded/
 * <name>[_fill1]_24px.svg` and are stored as "24:<path>".
 */
import { readFileSync, writeFileSync } from 'node:fs';

const file = new URL('../src/lib/symbols.json', import.meta.url);
const VERSION = '0.27.0';
let symbols = {};
try {
  symbols = JSON.parse(readFileSync(file, 'utf8'));
} catch {
  /* first run */
}

for (const name of process.argv.slice(2)) {
  const res = await fetch(`https://unpkg.com/@material-symbols/svg-400@${VERSION}/rounded/${name}.svg`);
  if (!res.ok) {
    console.error(`missing: ${name} (${res.status})`);
    continue;
  }
  const svg = await res.text();
  symbols[name] = [...svg.matchAll(/ d="([^"]+)"/g)].map((m) => m[1]).join(' ');
}

const sorted = Object.fromEntries(Object.entries(symbols).sort(([a], [b]) => a.localeCompare(b)));
writeFileSync(file, JSON.stringify(sorted, null, 0).replace(/","/g, '",\n"') + '\n');
console.log(`${Object.keys(sorted).length} symbols`);
