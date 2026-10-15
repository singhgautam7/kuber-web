// Web v1 interactive Home prototype. In run_script: await (new Function('readFile','saveFile', await readFile('web-v1/src/build_proto.js')))(readFile, saveFile)
return (async () => {
const W = await (new Function('readFile', await readFile('web-v1/src/load_web.js')))(readFile);
const M = new Function('W', await readFile('web-v1/src/gen_mockups.js'))(W);
const G = new Function('W','M', await readFile('web-v1/src/gen_web.js'))(W, M);
const {V} = G;
// Why Kuber keyframes: every distinct Home v3.3 keyframe, stacked; the last (rest) is visible without JS.
const kfs = (mode) => [0,1,2,3,4].map(i => { const P = [W.H.P1,W.H.P2,W.H.P3,W.H.P4,W.H.P5][i]; const t = W.VT(mode); const seen = new Set(); const list = [];
  for (const k of ['k1','k2','k3','k4','k5','k6','k7','k8','fin']) { let h = ''; try { h = P(t,k); } catch(e) { continue; } if (!h || seen.has(h)) continue; seen.add(h); list.push(M.clean(h)); }
  return list.map((h,j)=>`<div data-kf="${j}" style="position:absolute;inset:0;opacity:${j===list.length-1?1:0}">${h}</div>`).join(''); });
const pageFor = (mode) => { let h = G.homePage('d', mode, {kfs:kfs(mode), skip:1});
  h = h.replace('<nav aria-label="Main" style="position:absolute;', '<nav data-nav="1" aria-label="Main" style="position:fixed;');
  return `<div data-mode-root="${mode}" style="display:${mode==='light'?'block':'none'};position:relative">${h}</div>`; };
const VARS = {}; for (const f of W.FAMS) for (const md of ['light','dark']) VARS[f+'_'+md] = W.varMap(f+'_'+md);
const menu = `<div data-theme-menu="1" style="display:none;position:fixed;top:84px;left:50%;margin-left:136px;z-index:20">${G.themeMenu({mode:'light'})}</div>`;
const body = `<div data-site="1" style="${W.varStr('signature_light')};background:${V.bg};color:${V.on};font-family:${G.F};min-width:1200px;min-height:100vh;-webkit-font-smoothing:antialiased;transition:background-color 240ms cubic-bezier(0.2,0,0,1)">${pageFor('light')}${pageFor('dark')}${menu}</div>`;
const logic = `class Component extends DCLogic {
  componentDidMount() {
    const VARS = ${JSON.stringify(VARS)};
    const root = document.querySelector('[data-site]'); if (!root) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let st = { fam: 'signature', mode: 'light' };
    try { st = Object.assign(st, JSON.parse(localStorage.getItem('kuber-web-v1-theme') || '{}')); } catch (e) {}
    const menu = root.querySelector('[data-theme-menu]');
    const paint = () => {
      const v = VARS[st.fam + '_' + st.mode]; for (const k in v) root.style.setProperty(k, v[k]);
      root.querySelectorAll('[data-mode-root]').forEach(r => { r.style.display = r.dataset.modeRoot === st.mode ? 'block' : 'none'; });
      root.querySelectorAll('[data-set-fam]').forEach(b => { const on = b.dataset.setFam === st.fam; b.setAttribute('aria-checked', on ? 'true' : 'false');
        b.style.background = on ? 'var(--k-secondary-container)' : (b.getAttribute('role') === 'radio' ? 'var(--k-surface)' : 'transparent');
        if (b.getAttribute('role') === 'radio') b.style.borderColor = on ? 'var(--k-secondary-container)' : 'var(--k-outline-variant)';
        const c = b.querySelector('[data-check]'); if (c) c.style.display = on ? 'flex' : 'none'; });
      root.querySelectorAll('[data-set-mode]').forEach(b => { const on = b.dataset.setMode === st.mode; b.setAttribute('aria-checked', on ? 'true' : 'false'); b.style.background = on ? 'var(--k-secondary-container)' : 'transparent'; });
      try { localStorage.setItem('kuber-web-v1-theme', JSON.stringify(st)); } catch (e) {}
    };
    const setMenu = (open) => { if (!menu) return; menu.style.display = open ? 'block' : 'none'; root.querySelectorAll('[data-theme-toggle]').forEach(b => { b.setAttribute('aria-expanded', open ? 'true' : 'false'); b.style.background = open ? 'var(--k-secondary-container)' : 'transparent'; });
      if (open) { const f = menu.querySelector('[aria-checked="true"]'); if (f) f.focus(); } };
    this.onClick = (e) => {
      const tg = e.target.closest('[data-theme-toggle]'); if (tg) { e.preventDefault(); setMenu(menu.style.display === 'none'); return; }
      const f = e.target.closest('[data-set-fam]'); if (f) { e.preventDefault(); st.fam = f.dataset.setFam; paint(); return; }
      const m = e.target.closest('[data-set-mode]'); if (m) { e.preventDefault(); const v = m.dataset.setMode; st.mode = v === 'system' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : v; paint(); return; }
      if (menu && menu.style.display !== 'none' && !e.target.closest('[data-theme-menu]')) setMenu(false);
      const a = e.target.closest('a[href="#"]'); if (a) e.preventDefault();
    };
    this.onKey = (e) => { if (e.key === 'Escape') setMenu(false); };
    document.addEventListener('click', this.onClick); document.addEventListener('keydown', this.onKey);
    // Nav: shrink after 24px of scroll.
    const ease = 'cubic-bezier(0.2,0,0,1)';
    this.onScroll = () => { const s = window.scrollY > 24;
      root.querySelectorAll('[data-nav]').forEach(n => { n.style.transition = reduce ? 'none' : 'top 220ms ' + ease; n.style.top = s ? '8px' : '16px';
        const p = n.querySelector('[data-nav-pill]'); if (p) { p.style.transition = reduce ? 'none' : 'height 220ms ' + ease + ', padding 220ms ' + ease + ', background-color 220ms ' + ease; p.style.height = s ? '48px' : '56px'; p.style.padding = s ? '4px' : '8px'; p.style.background = s ? 'var(--k-surface-container)' : 'var(--k-surface)'; } }); };
    window.addEventListener('scroll', this.onScroll, { passive: true });
    // Why Kuber: reveal text, then step the stage through its keyframes once.
    const DUR = [3000, 2740, 3100, 3900, 3740];
    if (!reduce && 'IntersectionObserver' in window) {
      const run = (stage) => { const i = +stage.dataset.stage; const k = [...stage.querySelectorAll('[data-kf]')]; if (k.length < 2) return; const step = DUR[i] / (k.length - 1);
        k.forEach((el, j) => { el.style.transition = 'none'; el.style.opacity = j === 0 ? '1' : '0'; el.style.transform = j === 0 ? 'translateY(12px)' : 'none'; });
        requestAnimationFrame(() => { k[0].style.transition = 'transform 260ms ' + ease; k[0].style.transform = 'none'; });
        k.forEach((el, j) => { if (!j) return; setTimeout(() => { el.style.transition = 'opacity 240ms ' + ease; el.style.opacity = '1'; const prev = k[j - 1]; prev.style.transition = 'opacity 240ms ' + ease; prev.style.opacity = '0'; }, step * j); }); };
      const io = new IntersectionObserver((ents) => ents.forEach(en => { if (!en.isIntersecting) return; io.unobserve(en.target);
        if (en.target.dataset.stage !== undefined) run(en.target);
        else { const el = en.target; el.style.transition = 'opacity 260ms ' + ease + ', transform 260ms ' + ease; el.style.opacity = '1'; el.style.transform = 'none'; } }), { threshold: 0.35 });
      root.querySelectorAll('[data-reveal]').forEach(el => { el.style.opacity = '0'; el.style.transform = 'translateY(16px)'; io.observe(el); });
      root.querySelectorAll('[data-stage]').forEach(el => io.observe(el));
      this.io = io;
    }
    root.querySelectorAll('[data-skip]').forEach(s => { s.addEventListener('focus', () => { s.style.transform = 'none'; }); s.addEventListener('blur', () => { s.style.transform = 'translateY(-300%)'; }); s.addEventListener('click', (e) => { e.preventDefault(); const m = root.querySelector('[data-mode-root="' + st.mode + '"] main'); if (m) { m.setAttribute('tabindex', '-1'); m.focus(); } }); });
    paint(); this.onScroll();
  }
  componentWillUnmount() { document.removeEventListener('click', this.onClick); document.removeEventListener('keydown', this.onKey); window.removeEventListener('scroll', this.onScroll); if (this.io) this.io.disconnect(); }
  renderVals() { return {}; }
}`;
const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="../support.js"></script>
</head>
<body>
<x-dc>
<helmet><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,400,0..1,0&display=block" rel="stylesheet"><style>body{margin:0;background:#000;font-family:Inter,sans-serif}a{color:inherit}a:hover{color:inherit}</style></helmet>
${body}
</x-dc>
<script type="text/x-dc-logic" data-dc-script>
${logic}
</script>
</body>
</html>
`;
await saveFile('web-v1/Web v1 Home Prototype.dc.html', html);
return html.length;
})();
