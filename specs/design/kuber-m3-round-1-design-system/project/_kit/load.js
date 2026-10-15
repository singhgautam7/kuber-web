// Shared loader for generators. Usage in run_script:
//   const K = await (new Function('readFile', await readFile('_kit/load.js')))(readFile);
return (async () => {
  const m = await import('https://esm.sh/@material/material-color-utilities@0.3.0');
  const pal = JSON.parse(await readFile('tokens/palettes.json'));
  const tone = (hex, t) => { const h = m.Hct.fromInt(m.argbFromHex(hex)); return m.hexFromArgb(m.Hct.from(h.hue, h.chroma, t).toInt()).toUpperCase(); };
  const toneC = (hex, t, maxC) => { const h = m.Hct.fromInt(m.argbFromHex(hex)); return m.hexFromArgb(m.Hct.from(h.hue, Math.min(h.chroma, maxC), t).toInt()).toUpperCase(); };
  const mix = (hex, al) => { const n = parseInt(hex.slice(1), 16); return `rgba(${(n>>16)&255},${(n>>8)&255},${n&255},${al})`; };
  const catL = ["#427CCF","#A97100","#008B83","#B85C99","#4D8A37","#C2612A","#886BCC","#C65A5A"];
  const catD = ["#96BDFF","#F7AD34","#17D1C6","#FF9BD9","#8ACC70","#FFA679","#C6AFFF","#FFA3A0"];
  const U = { pal, tone, toneC, mix, catL, catD, m };
  const kit = new Function('U', await readFile('_kit/kit.js'))(U);
  const HELMET = `<helmet><meta name="design_doc_mode" content="canvas"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,400,0..1,0&display=block" rel="stylesheet"><style>body{margin:0;background:#ECECF1;font-family:Inter,sans-serif;-webkit-font-smoothing:antialiased}a{color:#0058BE}a:hover{color:#00438F}</style></helmet>`;
  const wrap = (title, intro, boards) => `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="./support.js"></script>
</head>
<body>
<x-dc>
${HELMET}
<div style="padding:48px 56px 80px">
<header style="margin:0 0 40px;max-width:920px"><div style="font:600 12px/16px 'JetBrains Mono',monospace;letter-spacing:.8px;color:#5B5E66;text-transform:uppercase">Kuber M3 Redesign · Round 1</div><h1 style="margin:8px 0 8px;font:700 36px/44px Inter;letter-spacing:-.5px;color:#1A1B20">${title}</h1><p style="margin:0;font:400 15px/24px Inter;color:#44474F;text-wrap:pretty">${intro}</p></header>
${boards}
</div>
</x-dc>
</body>
</html>
`;
  return { ...kit, U, wrap };
})();
