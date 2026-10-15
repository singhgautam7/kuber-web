// Kuber M3 board kit. Evaluated by run_script: new Function('U', text)(U) -> kit.
// U = { pal: palettes.json, tone(hex, t) -> hex (HCT tone remap), mix(hex, alpha) }
const F = "Inter,system-ui,sans-serif", MONO = "'JetBrains Mono',ui-monospace,monospace";
// Type roles: [weight, size, line, tracking]
const TY = {
  dS:[700,36,44,-0.5], hL:[700,32,40,-0.5], hM:[700,28,36,-0.25], hS:[600,24,32,0],
  tL:[600,22,28,-0.2], tM:[600,16,24,0.1], tS:[600,14,20,0.1],
  bL:[400,16,24,0], bM:[400,14,20,0], bS:[400,12,16,0],
  lL:[600,14,20,0.1], lM:[600,12,16,0.5], lS:[500,11,16,0.5]
};
const ty = (r, c, ex='') => { const [w,s,l,t]=TY[r]; return `font:${w} ${s}px/${l}px ${F};letter-spacing:${t}px;color:${c};${ex}`; };
const caps = (c, ex='') => ty('lM', c, 'letter-spacing:0.8px;text-transform:uppercase;'+ex);
const num = 'font-variant-numeric:tabular-nums;';
const ic = (n, s=24, c='currentColor', fill=0, ex='') => `<span style="font-family:'Material Symbols Rounded';font-size:${s}px;line-height:1;width:${s}px;height:${s}px;display:inline-flex;align-items:center;justify-content:center;flex:none;color:${c};font-variation-settings:'FILL' ${fill},'wght' 400,'GRAD' 0,'opsz' ${Math.min(48,Math.max(20,s))};${ex}">${n}</span>`;
const a = (hex, al) => U.mix(hex, al);

// ---------- themes ----------
const T = (key) => { const p = U.pal[key]; const m = p.money; return {
  key, name:p.name, dark:p.dark, seed:p.seed,
  p:p.primary, op:p.onPrimary, pc:p.primaryContainer, opc:p.onPrimaryContainer, ip:p.inversePrimary,
  s:p.secondary, sc:p.secondaryContainer, osc:p.onSecondaryContainer,
  t:p.tertiary, tc:p.tertiaryContainer, otc:p.onTertiaryContainer,
  bg:p.surface, c0:p.surfaceContainerLowest, c1:p.surfaceContainerLow, c2:p.surfaceContainer, c3:p.surfaceContainerHigh, c4:p.surfaceContainerHighest,
  on:p.onSurface, onv:p.onSurfaceVariant, ol:p.outline, olv:p.outlineVariant,
  inv:p.inverseSurface, oninv:p.inverseOnSurface, scrim:'rgba(0,0,0,.32)',
  err:p.error, onErr:p.onError, errC:p.errorContainer, onErrC:p.onErrorContainer,
  inc:m.income.c, incC:m.income.cont, onIncC:m.income.onCont,
  exp:m.expense.c, expC:m.expense.cont, onExpC:m.expense.onCont,
  warn:m.warning.c, warnC:m.warning.cont, onWarnC:m.warning.onCont,
  heat:p.heat, cat: p.dark ? U.catD : U.catL,
  tone: (hex) => ({ fg: U.tone(hex, p.dark?80:40), cont: U.toneC(hex, p.dark?28:92, p.dark?16:20), viz: U.tone(hex, p.dark?76:52) })
};};
// Vault (before) themes, from kuber_tokens.dart / app_theme.dart
const V = {
  obsidian:{dark:1,name:'Vault Obsidian',bg:'#000000',card:'#0D0D10',muted:'#18181B',border:'#27272A',borderMuted:'#3F3F46',text:'#FAFAFA',text2:'#A1A1AA',p:'#3B82F6',ps:'rgba(59,130,246,.10)',inc:'#22C55E',exp:'#EF4444',warn:'#F59E0B'},
  alabaster:{dark:0,name:'Vault Alabaster',bg:'#FFFFFF',card:'#FAFAFA',muted:'#F4F4F5',border:'#E4E4E7',borderMuted:'#D4D4D8',text:'#09090B',text2:'#71717A',p:'#3B82F6',ps:'rgba(59,130,246,.10)',inc:'#16A34A',exp:'#DC2626',warn:'#D97706'}
};

// ---------- frames & boards ----------
const W = 360;
const sbar = (c) => `<div style="height:32px;flex:none;display:flex;align-items:center;justify-content:space-between;padding:0 20px;font:600 13px ${F};color:${c}"><span>9:41</span><span style="display:flex;gap:6px;align-items:center">${ic('signal_cellular_alt',16,c,1)}${ic('wifi',16,c,1)}${ic('battery_full',16,c,1)}</span></div>`;
const phone = (bg, fg, inner, cap='', o={}) => `<div style="display:flex;flex-direction:column;gap:10px;flex:none;width:${W+16}px">
<div style="width:${W+16}px;border-radius:40px;padding:8px;background:#1B1B1F;box-sizing:border-box">
<div style="height:${o.h||780}px;border-radius:32px;overflow:hidden;background:${bg};position:relative;display:flex;flex-direction:column">${sbar(fg)}${inner}</div></div>
${cap?`<div style="font:500 12px/16px ${F};color:#5B5E66;text-align:center;text-wrap:pretty;padding:0 8px">${cap}</div>`:''}</div>`;
const nphone = (t, inner, cap, o) => phone(t.bg, t.on, inner, cap, o);
const vphone = (v, inner, cap, o) => phone(v.bg, v.text, inner, cap, o);
const tag = (txt, kind='new') => `<span style="font:700 10px/16px ${F};letter-spacing:.8px;text-transform:uppercase;padding:2px 8px;border-radius:999px;background:${kind==='old'?'#E3E3E8':'#D8E2FF'};color:${kind==='old'?'#5B5E66':'#00429B'}">${txt}</span>`;
const board = (id, title, desc, inner, o={}) => `<section id="${id}" data-screen-label="${id} ${title}" style="margin:0 0 56px;padding:32px;background:${o.bg||'#F6F6F9'};border-radius:28px;border:1px solid #DCDCE2;width:max-content;max-width:${o.max||'none'}">
<div style="display:flex;align-items:baseline;gap:12px;margin-bottom:6px"><a href="#${id}" style="font:700 12px/16px ${MONO};color:#00429B;text-decoration:none;padding:2px 8px;border-radius:6px;background:#D8E2FF">${id}</a><h2 style="margin:0;font:700 24px/32px ${F};color:#1A1B20;letter-spacing:-.3px;white-space:nowrap">${title}</h2></div>
${desc?`<p style="margin:0 0 24px;max-width:880px;font:400 14px/22px ${F};color:#44474F;text-wrap:pretty">${desc}</p>`:''}
${inner}</section>`;
const row = (inner, gap=24, ex='') => `<div style="display:flex;gap:${gap}px;align-items:flex-start;flex-wrap:wrap;${ex}">${inner}</div>`;
const col = (inner, gap=16, ex='') => `<div style="display:flex;flex-direction:column;gap:${gap}px;${ex}">${inner}</div>`;
const label = (txt) => `<div style="font:600 11px/16px ${MONO};letter-spacing:.6px;color:#5B5E66;text-transform:uppercase">${txt}</div>`;
const swatchPanel = (t, inner, w=W) => `<div style="width:${w}px;flex:none;background:${t.bg};border-radius:24px;padding:20px;box-sizing:border-box;border:1px solid ${t.olv};display:flex;flex-direction:column;gap:16px">${inner}</div>`;
const spec = (txt) => `<div style="font:400 12px/18px ${MONO};color:#44474F;white-space:pre-wrap;max-width:880px">${txt}</div>`;

// ---------- new (M3) components ----------
// Icon button: 48 target, 40 visual circle (Perch AppIconButton)
const ibtn = (t, n, o={}) => { const bg = o.kind==='filled'?t.p:o.kind==='tonal'?t.sc:o.kind==='std'?'transparent':o.kind==='danger'?t.errC:t.c3; const fg = o.kind==='filled'?t.op:o.kind==='tonal'?t.osc:o.kind==='danger'?t.onErrC:(o.fg||t.on);
  return `<div style="width:48px;height:48px;flex:none;display:flex;align-items:center;justify-content:center;position:relative"><div style="width:${o.s||40}px;height:${o.s||40}px;border-radius:999px;background:${bg};display:flex;align-items:center;justify-content:center">${ic(n,o.g||20,fg,o.fill?1:0)}</div>${o.badge?`<span style="position:absolute;top:6px;right:6px;min-width:16px;height:16px;padding:0 4px;box-sizing:border-box;border-radius:999px;background:${o.bc||t.err};color:${o.bfc||t.onErr};font:600 11px/16px ${F};text-align:center">${o.badge}</span>`:''}</div>`; };
// Header (Perch AppHeader): pad L(back?16:20) T14 R(actions?16:20) B12; title titleLarge
const hdr = (t, o={}) => { const L = (o.back||o.home)?16:20, R=(o.acts&&o.acts.length)?16:20;
  const left = `${o.back?ibtn(t,o.close?'close':'arrow_back'):''}${o.home?ibtn(t,'home'):''}`;
  return `<div style="flex:none;padding:14px ${R}px ${o.sub?8:12}px ${L}px;${o.bgc?'background:'+o.bgc+';':''}">
<div style="display:flex;align-items:center;gap:${(o.back||o.home)?6:0}px;min-height:48px">${left}
<div style="flex:1;min-width:0;${ty('tL',o.fg||t.on,'white-space:nowrap;overflow:hidden;text-overflow:ellipsis')}">${o.title||''}</div>
<div style="display:flex;align-items:center">${(o.acts||[]).join('')}</div></div>
${o.sub?`<div style="${ty('bM',t.onv,'padding:0 0 0 '+((o.back||o.home)?4:0)+'px;margin-top:-4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis')}">${o.sub}</div>`:''}</div>`; };
// Nav pill (Perch PerchNavPill): h56 pad8 surface + 1px outline, items h40 gap2; selected secondaryContainer + label; FAB 56 beside, gap 10, bottom 22
const NAV = [['home','Home'],['receipt','History'],['insert_chart','Analytics'],['grid_view','More']];
// Drawn destination glyphs in the Perch language: 20x16 art in a 24 slot, 1.75 stroke, rounded. Active fills where the shape allows.
const navG = (i, c, on, bg) => { const S_ = 'stroke-width:1.75;stroke-linecap:round;stroke-linejoin:round';
  const art = [
   `<path d="M3 7.4 10 1.8l7 5.6v5.8a1.6 1.6 0 0 1-1.6 1.6H4.6A1.6 1.6 0 0 1 3 13.2Z" fill="${on?c:'none'}" stroke="${c}" style="${S_}"></path>${on?`<rect x="8.4" y="9.4" width="3.2" height="5.4" rx="1.2" fill="${bg}"></rect>`:''}`,
   [3,8,13].map(y=>`<circle cx="3.2" cy="${y}" r="${on?1.9:1.5}" fill="${c}"></circle><line x1="7.5" y1="${y}" x2="17.5" y2="${y}" stroke="${c}" style="${S_}"></line>`).join(''),
   [[2.5,9],[8.5,15],[14.5,6]].map(([x,h])=>`<rect x="${x}" y="${16-h}" width="3" height="${h}" rx="1.5" fill="${c}"></rect>`).join(''),
   `<line x1="1" y1="4" x2="19" y2="4" stroke="${c}" style="stroke-width:2;stroke-linecap:round"></line><line x1="1" y1="12" x2="19" y2="12" stroke="${c}" style="stroke-width:2;stroke-linecap:round"></line><rect x="3.9" y="0.9" width="6.2" height="6.2" rx="2.4" fill="${on?c:bg}" stroke="${c}" style="stroke-width:1.75"></rect><rect x="9.9" y="8.9" width="6.2" height="6.2" rx="2.4" fill="${on?c:bg}" stroke="${c}" style="stroke-width:1.75"></rect>`
  ][i];
  return `<span style="width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;flex:none"><svg width="20" height="16" viewBox="0 0 20 16" style="display:block;overflow:visible">${art}</svg></span>`; };
const nav = (t, idx, o={}) => `<div style="position:absolute;left:0;right:0;bottom:22px;display:flex;justify-content:center;align-items:center;gap:10px">
<div style="height:56px;padding:8px;box-sizing:border-box;border-radius:999px;background:${t.bg};border:1px solid ${t.olv};display:flex;align-items:center;gap:2px">
${NAV.map(([g,n],i)=> i===idx ? `<div style="height:40px;padding:0 14px 0 11px;border-radius:999px;background:${t.sc};display:flex;align-items:center;gap:8px">${navG(i,t.osc,1,t.sc)}<span style="${ty('lL',t.osc)}">${n}</span></div>` : `<div style="width:40px;height:40px;display:flex;align-items:center;justify-content:center">${navG(i,t.onv,0,t.bg)}</div>`).join('')}
</div>${o.fab===false?'':`<div style="width:56px;height:56px;border-radius:999px;background:${t.pc};display:flex;align-items:center;justify-content:center">${ic('add',26,t.opc)}</div>`}</div>`;
const fade = (t) => `<div style="position:absolute;left:0;right:0;bottom:0;height:110px;background:linear-gradient(to bottom, ${a(t.bg,0)}, ${a(t.bg,.92)} 55%, ${t.bg})"></div>`;
const body = (inner, o={}) => `<div style="flex:1;overflow:hidden;padding:${o.pt??0}px 20px 0;display:flex;flex-direction:column;gap:${o.gap??0}px">${inner}</div>`;
const secH = (t, txt, right='') => `<div style="display:flex;align-items:center;justify-content:space-between;min-height:24px;margin:0 0 8px"><span style="${caps(t.onv,'white-space:nowrap')}">${txt}</span><span style="white-space:nowrap">${right}</span></div>`;
const sec = (t, title, inner, right='') => `<div style="margin-bottom:28px">${title?secH(t,title,right):''}${inner}</div>`;
const card = (t, inner, o={}) => `<div style="background:${o.bgc||t.c2};border:1px solid ${o.bc||t.olv};border-radius:${o.r||20}px;padding:${o.pad??16}px;box-sizing:border-box;${o.ex||''}">${inner}</div>`;
const group = (t, rows, o={}) => `<div style="background:${t.c2};border:1px solid ${t.olv};border-radius:20px;overflow:hidden">${rows.map((r,i)=> (i?`<div style="height:1px;background:${t.olv};margin-left:${o.inset??0}px"></div>`:'')+r).join('')}</div>`;
const lrow = (t, o) => `<div style="min-height:${o.h||(o.sub?72:56)}px;padding:${o.pv??8}px 16px;box-sizing:border-box;display:flex;align-items:center;gap:16px;${o.sel?'background:'+t.sc+';':''}">
${o.lead||''}<div style="flex:1;min-width:0"><div style="${ty(o.dense?'tS':'tM',o.sel?t.osc:(o.danger?t.err:t.on),'white-space:nowrap;overflow:hidden;text-overflow:ellipsis')}">${o.title}</div>${o.sub?`<div style="${ty('bM',o.sel?t.osc:t.onv,'white-space:nowrap;overflow:hidden;text-overflow:ellipsis')}">${o.sub}</div>`:''}${o.third||''}</div>${o.trail||''}</div>`;
const chev = (t) => ic('chevron_right',20,t.onv);
const trailTxt = (t, v) => `<span style="${ty('bM',t.onv,'white-space:nowrap')}">${v}</span>`;
const lic = (t, n, c) => ic(n, 24, c||t.onv);
// category tile: 40, r12, container tone of category color
const cat = (t, hex, n, o={}) => { if (o.sel) return `<div style="width:${o.s||40}px;height:${o.s||40}px;border-radius:999px;background:${t.p};display:flex;align-items:center;justify-content:center;flex:none">${ic('check',22,t.op)}</div>`; const k=t.tone(hex); return `<div style="width:${o.s||40}px;height:${o.s||40}px;border-radius:${o.circle?999:12}px;background:${k.cont};display:flex;align-items:center;justify-content:center;flex:none">${ic(n,o.g||22,k.fg,1)}</div>`; };
const money = (t, type, v, role='tM') => `<span style="${ty(role, type==='income'?t.inc:type==='expense'?t.exp:t.on, num+'white-space:nowrap')}">${type==='income'?'+':type==='expense'?'−':''}₹${v}</span>`;
const txn = (t, o) => lrow(t, { h: o.tag?88:72, sel:o.sel, lead: cat(t, o.c, o.i, {sel:o.sel}), title:o.name, sub:o.sub,
  third: o.tag?`<div style="${ty('lM',t.p,'margin-top:2px')}">${o.tag}</div>`:'',
  trail:`<div style="text-align:right;display:flex;flex-direction:column;align-items:flex-end;gap:2px">${money(t,o.type,o.amt)}<span style="${ty('bS',o.sel?t.osc:t.onv,'white-space:nowrap')}">${o.time}</span></div>` });
// buttons: size s=40, l=56; kinds filled, tonal, outlined, text, danger, dangerTonal
const btn = (t, txt, o={}) => { const k=o.kind||'filled', h=o.size==='l'?56:40, px=o.size==='l'?24:16;
  const bg = {filled:t.p,tonal:t.sc,outlined:'transparent',text:'transparent',danger:t.err,dangerTonal:t.errC,disabled:a(t.on,.12)}[k];
  const fg = {filled:t.op,tonal:t.osc,outlined:t.on,text:t.p,danger:t.onErr,dangerTonal:t.onErrC,disabled:a(t.on,.38)}[k];
  return `<div style="height:${h}px;padding:0 ${k==='text'?12:px}px;box-sizing:border-box;border-radius:999px;background:${bg};${k==='outlined'?'border:1px solid '+t.olv+';':''}min-height:${h}px;display:${o.full?'flex':'inline-flex'};${o.full?'flex:1 1 0;':''}align-items:center;justify-content:center;gap:8px;flex-shrink:0">${o.icon?ic(o.icon,20,fg):''}<span style="${ty(o.size==='l'?'tM':'lL',fg,'white-space:nowrap')}">${txt}</span>${o.trail?ic(o.trail,20,fg):''}</div>`; };
// chip: filter (sel → check), assist (icon), input (x → trailing close), dropdown (drop). o.nocheck hides the check; o.shrink lets the label ellipsize.
const chip = (t, txt, o={}) => { const lead = o.sel&&!o.x&&!o.nocheck&&!o.drop ? ic('check',18,t.osc) : (o.icon?ic(o.icon,18,o.ic||(o.sel?t.osc:t.p)):'');
  return `<div style="height:32px;padding:0 ${o.drop||o.x?8:16}px 0 ${lead?8:16}px;box-sizing:border-box;border-radius:8px;display:inline-flex;align-items:center;gap:8px;${o.shrink?'flex:0 1 auto;min-width:0;':'flex:none;'}${o.sel?'background:'+t.sc+';':'border:1px solid '+t.olv+';'}">${lead}<span style="${ty('lL',o.sel?t.osc:t.onv,'white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0')}">${txt}</span>${o.badge?`<span style="${ty('lS',t.osc,'background:'+t.bg+';border-radius:999px;padding:0 6px')}">${o.badge}</span>`:''}${o.drop?ic('arrow_drop_down',18,o.sel?t.osc:t.onv):''}${o.x?ic('close',18,o.sel?t.osc:t.onv):''}</div>`; };
// Search pill (Perch search_screen): surfaceContainer + 1dp outline, 48 high, search glyph, query, clear, and the Filter action inside.
const search = (t, o={}) => { const n=o.n||0; const fBg=n?t.p:t.sc, fFg=n?t.op:t.osc;
  return `<div style="height:48px;border-radius:999px;background:${t.c2};border:1px solid ${o.focus?t.p:t.olv};box-sizing:border-box;display:flex;align-items:center;gap:12px;padding:0 6px 0 16px">${ic('search',20,t.onv)}<span style="flex:1;min-width:0;${ty('bL',o.q?t.on:t.onv,'white-space:nowrap;overflow:hidden;text-overflow:ellipsis')}">${o.q||o.ph||'Search transactions'}${o.focus?`<span style="display:inline-block;width:2px;height:18px;background:${t.p};vertical-align:-3px;margin-left:1px"></span>`:''}</span>${o.q?ic('close',20,t.onv):''}${o.filter===false?'<span style="width:4px"></span>':`<div style="height:36px;padding:0 14px 0 10px;border-radius:999px;background:${fBg};display:flex;align-items:center;gap:6px;flex:none">${ic('tune',18,fFg)}<span style="${ty('lL',fFg,'white-space:nowrap')}">${n?'Filter · '+n:'Filter'}</span></div>`}</div>`; };
// M3 segmented button h40 outlined, selected secondaryContainer + check
const seg = (t, opts, act, o={}) => `<div style="display:flex;height:40px;border:1px solid ${t.ol};border-radius:999px;overflow:hidden;${o.full?'width:100%;':'width:max-content;'}box-sizing:border-box">${opts.map((s,i)=>`<div style="flex:${o.full?1:'none'};padding:0 ${o.full?8:14}px;display:flex;align-items:center;justify-content:center;gap:6px;${i?'border-left:1px solid '+t.ol+';':''}${i===act?'background:'+t.sc+';':''}">${i===act&&o.check!==false?ic('check',18,t.osc):''}<span style="${ty('lL',i===act?t.osc:t.on,'white-space:nowrap')}">${s}</span></div>`).join('')}</div>`;
// Text field (filled container r16, 56h)
const field = (t, o) => `<div><div style="min-height:56px;padding:${o.label&&o.value!==undefined?8:16}px 16px;box-sizing:border-box;border-radius:16px;background:${t.c3};display:flex;align-items:center;gap:12px;${o.focus?'box-shadow:inset 0 0 0 2px '+t.p+';':''}${o.error?'box-shadow:inset 0 0 0 2px '+t.err+';':''}">${o.lead?ic(o.lead,24,t.onv):''}<div style="flex:1;min-width:0">${o.label?`<div style="${ty('bS',o.error?t.err:o.focus?t.p:t.onv)}">${o.label}</div>`:''}<div style="${ty(o.big?'tL':'bL',o.ph?t.onv:t.on,'white-space:nowrap;overflow:hidden;text-overflow:ellipsis')}">${o.value??o.ph}${o.focus&&!o.ph?`<span style="display:inline-block;width:2px;height:20px;background:${t.p};vertical-align:-4px;margin-left:1px"></span>`:''}</div></div>${o.trail||''}</div>${o.support||o.error?`<div style="display:flex;justify-content:space-between;padding:4px 16px 0;${ty('bS',o.error?t.err:t.onv)}"><span>${o.error||o.support||''}</span><span>${o.count||''}</span></div>`:''}</div>`;
const sw = (t, on) => `<div style="width:52px;height:32px;flex:none;border-radius:999px;box-sizing:border-box;background:${on?t.p:t.c4};border:2px solid ${on?t.p:t.ol};display:flex;align-items:center;padding:0 ${on?2:6}px;justify-content:${on?'flex-end':'flex-start'}"><div style="width:${on?24:16}px;height:${on?24:16}px;border-radius:999px;background:${on?t.op:t.ol};display:flex;align-items:center;justify-content:center">${on?ic('check',16,t.p):''}</div></div>`;
const cb = (t, on) => `<div style="width:40px;height:40px;flex:none;display:flex;align-items:center;justify-content:center"><div style="width:18px;height:18px;border-radius:2px;box-sizing:border-box;${on?'background:'+t.p:'border:2px solid '+t.onv};display:flex;align-items:center;justify-content:center">${on?ic('check',16,t.op,0,'font-weight:700'):''}</div></div>`;
const radio = (t, on) => `<div style="width:40px;height:40px;flex:none;display:flex;align-items:center;justify-content:center"><div style="width:20px;height:20px;border-radius:999px;box-sizing:border-box;border:2px solid ${on?t.p:t.onv};display:flex;align-items:center;justify-content:center">${on?`<div style="width:10px;height:10px;border-radius:999px;background:${t.p}"></div>`:''}</div></div>`;
// ---------- progress (M3 2024: rounded, 4dp gap, stop indicator) ----------
const PST = (t, s) => s==='over'?[t.exp,t.expC]:s==='near'?[t.warn,t.warnC]:[t.p,t.sc];
// M3 Expressive: wavy indicator (amplitude 3, wavelength 24, 4dp stroke), flat 4dp track, 4dp gap, stop dot. o.flat keeps the 2024 flat bar.
const waveURI = (c) => 'data:image/svg+xml,' + encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='24' height='12'><path d='M0 6 Q6 0.5 12 6 T24 6' fill='none' stroke='${c}' stroke-width='4' stroke-linecap='round'/></svg>`).replace(/'/g,'%27').replace(/\(/g,'%28').replace(/\)/g,'%29');
const lin = (t, v, s='normal', o={}) => { const [ind,trk]=PST(t,s); const h=o.h||4; const pct=Math.min(1,v); const full=pct>=1; const wavy=!o.flat&&h<=4; const H=wavy?12:h;
  const basis = full?'100%':'calc('+(pct*100).toFixed(1)+'% - 2px)';
  return `<div style="position:relative;height:${H}px;display:flex;gap:${full?0:4}px;align-items:center;width:100%">${pct>0?(wavy?`<div style="flex:0 0 ${basis};height:12px;background-image:url(${waveURI(ind)});background-repeat:repeat-x;background-position:left center;background-size:24px 12px"></div>`:`<div style="flex:0 0 ${basis};height:${h}px;border-radius:999px;background:${ind}"></div>`):''}${full?'':`<div style="flex:1;height:${h}px;border-radius:999px;background:${trk};position:relative"><div style="position:absolute;right:0;top:0;width:${h}px;height:${h}px;border-radius:999px;background:${ind}"></div></div>`}</div>`; };
const ring = (t, v, sz=48, s='normal', o={}) => { const [ind,trk]=PST(t,s); const sw_=o.w||4, r=(sz-sw_)/2, C=2*Math.PI*r; const pct=Math.min(1,v); const gapL = pct>=1?0: (sw_+4); // gap includes round caps
  const L = Math.max(0, pct*C - gapL); const T_ = Math.max(0,(1-pct)*C - gapL);
  return `<div style="position:relative;width:${sz}px;height:${sz}px;flex:none"><svg width="${sz}" height="${sz}" viewBox="0 0 ${sz} ${sz}" style="transform:rotate(-90deg);display:block">
${pct<1?`<circle cx="${sz/2}" cy="${sz/2}" r="${r}" fill="none" stroke="${trk}" style="stroke-width:${sw_};stroke-linecap:round;stroke-dasharray:${T_.toFixed(2)} ${C};stroke-dashoffset:${(-(pct*C + gapL/2)).toFixed(2)}"></circle>`:''}
<circle cx="${sz/2}" cy="${sz/2}" r="${r}" fill="none" stroke="${ind}" style="stroke-width:${sw_};stroke-linecap:round;stroke-dasharray:${(pct>=1?C:L).toFixed(2)} ${C};stroke-dashoffset:${(pct>=1?0:-gapL/2).toFixed(2)}"></circle></svg>
${o.label?`<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center">${o.label}</div>`:''}</div>`; };
// ---------- data viz ----------
const grid = (t, w, h, ticks, o={}) => ticks.map((tk,i)=>{ const y = h - (i/(ticks.length-1))*h; return `<div style="position:absolute;left:0;right:${o.lw??36}px;top:${y}px;border-top:1px ${i===0?'solid':'dashed'} ${t.olv}"></div><div style="position:absolute;right:0;top:${y-8}px;width:${(o.lw??36)-4}px;text-align:right;${ty('lS',t.onv,num)}">${tk}</div>`; }).join('');
const bars = (t, data, o={}) => { const h=o.h||140, w=o.w||300, lw=36, max=o.max||Math.max(...data.flatMap(d=>d.v)); const n=data.length; const slot=(w-lw)/n; const bw=o.bw||(data[0].v.length>1?10:16);
  return `<div style="position:relative;width:${w}px;height:${h+24}px">${grid(t,w,h,o.ticks||['0','',''],{lw})}
${o.sel!==undefined?`<div style="position:absolute;left:${o.sel*slot+4}px;width:${slot-8}px;bottom:0;height:${h+28}px;border-radius:12px;background:${a(t.on,t.dark?.08:.05)}"></div>`:''}${data.map((d,i)=>`<div style="position:absolute;left:${i*slot}px;width:${slot}px;bottom:24px;height:${h}px;display:flex;align-items:flex-end;justify-content:center;gap:2px">${d.v.map((v,j)=>`<div style="width:${bw}px;height:${Math.max(2,v/max*h).toFixed(1)}px;border-radius:4px 4px 0 0;background:${(o.colors||[t.p])[j]};${o.sel!==undefined&&o.sel!==i?'opacity:.38;':''}"></div>`).join('')}</div><div style="position:absolute;left:${i*slot}px;width:${slot}px;bottom:4px;text-align:center;${ty('lS',o.sel===i?t.on:t.onv,o.sel===i?'font-weight:700':'')}">${d.l}</div>`).join('')}</div>`; };
const linec = (t, series, labels, o={}) => { const h=o.h||140, w=o.w||300, lw=36, pw=w-lw, max=o.max; const n=labels.length; const X=i=>(i/(n-1))*(pw-16)+8; const Y=v=>h-(v/max)*h;
  return `<div style="position:relative;width:${w}px;height:${h+24}px">${grid(t,w,h,o.ticks||['0','',''],{lw})}
<svg width="${pw}" height="${h}" viewBox="0 0 ${pw} ${h}" style="position:absolute;left:0;top:0;overflow:visible">
${series.map(s=>`${s.area?`<polygon points="${X(0)},${h} ${s.v.map((v,i)=>X(i)+','+Y(v).toFixed(1)).join(' ')} ${X(n-1)},${h}" fill="${a(s.c,t.dark?.24:.16)}"></polygon>`:''}<polyline points="${s.v.map((v,i)=>X(i)+','+Y(v).toFixed(1)).join(' ')}" fill="none" stroke="${s.c}" style="stroke-width:2;stroke-linejoin:round;stroke-linecap:round"></polyline>`).join('')}
${o.sel!==undefined?`<line x1="${X(o.sel)}" y1="0" x2="${X(o.sel)}" y2="${h}" stroke="${t.ol}" style="stroke-width:1"></line>${series.map(s=>`<circle cx="${X(o.sel)}" cy="${Y(s.v[o.sel]).toFixed(1)}" r="5" fill="${s.c}" stroke="${o.surf||t.c2}" style="stroke-width:2"></circle>`).join('')}`:''}</svg>
${labels.map((l,i)=>`<div style="position:absolute;left:${X(i)-20}px;width:40px;bottom:0;text-align:center;${ty('lS',t.onv)}">${l}</div>`).join('')}</div>`; };
const donut = (t, slices, o={}) => { const sz=o.s||176, th=o.th||20, r=(sz-th)/2, C=2*Math.PI*r, gap=o.gap??3; const tot=slices.reduce((s,x)=>s+x.v,0); let acc=0;
  return `<div style="position:relative;width:${sz}px;height:${sz}px;flex:none"><svg width="${sz}" height="${sz}" viewBox="0 0 ${sz} ${sz}" style="transform:rotate(-90deg);display:block">${slices.map((x,i)=>{ const L=x.v/tot*C; const seg_=`<circle cx="${sz/2}" cy="${sz/2}" r="${r}" fill="none" stroke="${x.c}" style="stroke-width:${o.sel===i?th+6:th};stroke-dasharray:${Math.max(0.5,L-gap).toFixed(2)} ${C};stroke-dashoffset:${(-acc).toFixed(2)};${o.sel!==undefined&&o.sel!==i?'opacity:.38;':''}"></circle>`; acc+=L; return seg_; }).join('')}</svg>
<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center">${o.center||''}</div></div>`; };
const legend = (t, items) => `<div style="display:flex;gap:16px;flex-wrap:wrap">${items.map(([c,l])=>`<span style="display:inline-flex;align-items:center;gap:8px;${ty('bS',t.onv)}"><span style="width:8px;height:8px;border-radius:999px;background:${c}"></span>${l}</span>`).join('')}</div>`;
const split = (t, pa, ca, cb_, o={}) => `<div style="display:flex;gap:4px;height:${o.h||8}px"><div style="flex:${pa};border-radius:999px;background:${ca}"></div><div style="flex:${1-pa};border-radius:999px;background:${cb_}"></div></div>`;
const stacked = (t, parts, o={}) => `<div style="display:flex;gap:4px;height:${o.h||12}px">${parts.map(([v,c])=>`<div style="flex:${v};border-radius:999px;background:${c}"></div>`).join('')}</div>`;
const tooltip = (t, inner) => `<div style="display:inline-flex;flex-direction:column;gap:2px;padding:8px 12px;border-radius:8px;background:${t.inv}">${inner}</div>`;
// ---------- overlays ----------
const handle = (t) => `<div style="height:24px;display:flex;align-items:center;justify-content:center;flex:none"><div style="width:32px;height:4px;border-radius:999px;background:${a(t.onv,.4)}"></div></div>`;
const sheet = (t, o) => `<div style="position:absolute;inset:0;background:${t.scrim};z-index:5"></div><div style="position:absolute;left:0;right:0;bottom:0;z-index:5;max-height:${o.mh||700}px;border-radius:28px 28px 0 0;background:${t.c1};display:flex;flex-direction:column;overflow:hidden">${handle(t)}
${o.title?`<div style="display:flex;align-items:center;gap:16px;padding:4px 16px 12px 20px">${o.lead||''}<div style="flex:1;min-width:0">${o.sub?`<div style="${caps(t.onv)}">${o.sub}</div>`:''}<div style="${ty('tL',t.on,'white-space:nowrap;overflow:hidden;text-overflow:ellipsis')}">${o.title}</div>${o.sub2?`<div style="${ty('bM',t.onv)}">${o.sub2}</div>`:''}</div>${o.close===false?'':ibtn(t,'close')}</div>`:''}
<div style="flex:1;overflow:hidden;padding:${o.bp??'4px 20px 16px'};display:flex;flex-direction:column;gap:${o.gap??16}px">${o.body}</div>
${o.actions?`<div style="padding:16px 20px 24px;display:flex;gap:12px;border-top:1px solid ${o.divider?t.olv:'transparent'}">${o.actions}</div>`:''}</div>`;
const menu = (t, items, o={}) => `<div style="width:${o.w||232}px;padding:8px;box-sizing:border-box;border-radius:20px;background:${t.c2};border:1px solid ${t.olv};display:flex;flex-direction:column">${items.map(it=> it==='-'?`<div style="height:1px;background:${t.olv};margin:8px 12px"></div>` : `<div style="min-height:48px;padding:0 12px;box-sizing:border-box;border-radius:12px;display:flex;align-items:center;gap:12px;${it.sel?'background:'+t.sc+';':''}">${it.i?ic(it.i,20,it.d?t.err:it.sel?t.osc:t.onv):''}<div style="flex:1"><div style="${ty('lL',it.d?t.err:it.sel?t.osc:t.on)}">${it.l}</div>${it.s?`<div style="${ty('bS',t.onv)}">${it.s}</div>`:''}</div>${it.sel?ic('check',20,t.osc):''}</div>`).join('')}</div>`;
const dialog = (t, o) => `<div style="position:absolute;inset:0;background:${t.scrim};display:flex;align-items:center;justify-content:center;padding:0 24px"><div style="width:100%;max-width:312px;border-radius:28px;background:${t.c3};padding:24px;box-sizing:border-box;display:flex;flex-direction:column;gap:16px">${o.icon?`<div style="display:flex;justify-content:center">${ic(o.icon,24,o.ic||t.s)}</div>`:''}<div style="${ty('hS',t.on,o.icon?'text-align:center':'')}">${o.title}</div><div style="${ty('bM',t.onv)}">${o.body}</div><div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">${o.actions}</div></div></div>`;
// Snackbar (Kuber behaviour kept: top, timer bar, close, swipe). Restyled.
const snack = (t, o={}) => { const er=o.variant==='error'; const bg=er?t.errC:t.inv, fg=er?t.onErrC:t.oninv, acc=er?t.err:t.ip;
  return `<div style="border-radius:16px;background:${bg};overflow:hidden;${o.ex||''}"><div style="min-height:56px;padding:4px 4px 4px 16px;display:flex;align-items:center;gap:12px">${ic(er?'error':'check_circle',20,acc,1)}<div style="flex:1;${ty('bM',fg)};padding:10px 0">${o.msg}</div>${o.sec?`<span style="${ty('lL',fg,'padding:0 8px;opacity:.8')}">${o.sec}</span>`:''}${o.act?`<span style="${ty('lL',acc,'padding:0 8px')}">${o.act}</span>`:''}<div style="width:48px;height:48px;display:flex;align-items:center;justify-content:center">${ic('close',20,fg)}</div></div>
<div style="padding:0 16px 10px"><div style="display:flex;gap:4px;height:4px"><div style="flex:${o.p??.62};border-radius:999px;background:${acc}"></div><div style="flex:${1-(o.p??.62)};border-radius:999px;background:${a(fg,.16)}"></div></div></div></div>`; };


// Pill tabs (M3 Expressive connected toggle): surfaceContainerHigh track h48 pad 4, selected segment = primary pill, icon optional.
const ptabs = (t, opts, act, o={}) => `<div style="height:${o.h||48}px;padding:4px;border-radius:999px;background:${t.c3};box-sizing:border-box;display:flex;gap:4px;${o.full===false?'width:max-content;':'width:100%;'}">${opts.map((x,i)=>{ const [lbl,icn]=Array.isArray(x)?x:[x]; const on=i===act; return `<div style="flex:1;min-width:0;padding:0 8px;border-radius:999px;display:flex;align-items:center;justify-content:center;gap:6px;${on?'background:'+(o.bg||t.p)+';':''}">${icn?ic(icn,18,on?(o.fg||t.op):t.onv,on?1:0):''}<span style="${ty('lL',on?(o.fg||t.op):t.onv,'white-space:nowrap')}">${lbl}</span></div>`; }).join('')}</div>`;
// M3 primary tabs: labels with a 3dp rounded indicator under the active one, 1dp divider below.
const utabs = (t, opts, act) => `<div style="display:flex;border-bottom:1px solid ${t.olv}">${opts.map((l,i)=>`<div style="flex:1;height:48px;display:flex;flex-direction:column;align-items:center;justify-content:flex-end"><div style="flex:1;display:flex;align-items:center;gap:6px;${ty('lL',i===act?t.p:t.onv,'white-space:nowrap')}">${l}</div><div style="height:3px;width:${i===act?'60%':'0'};border-radius:3px 3px 0 0;background:${t.p}"></div></div>`).join('')}</div>`;
// M3 Expressive slider: 16 track, active primary, inactive secondaryContainer, 4 x 44 handle with 6 gap, stop dot.
const slider = (t, v) => `<div style="position:relative;height:44px;display:flex;align-items:center;gap:6px"><div style="flex:0 0 calc(${(v*100).toFixed(0)}% - 8px);height:16px;border-radius:999px 4px 4px 999px;background:${t.p}"></div><div style="width:4px;height:44px;border-radius:999px;background:${t.p};flex:none"></div><div style="flex:1;height:16px;border-radius:4px 999px 999px 4px;background:${t.sc};position:relative"><span style="position:absolute;right:6px;top:6px;width:4px;height:4px;border-radius:999px;background:${t.p}"></span></div></div>`;
return { ptabs, utabs, slider, F, MONO, TY, ty, caps, num, ic, a, T, V, W, sbar, phone, nphone, vphone, tag, board, row, col, label, swatchPanel, spec,
  ibtn, hdr, NAV, navG, nav, search, waveURI, fade, body, secH, sec, card, group, lrow, chev, trailTxt, lic, cat, money, txn, btn, chip, seg, field, sw, cb, radio,
  PST, lin, ring, grid, bars, linec, donut, legend, split, stacked, tooltip, handle, sheet, menu, dialog, snack };
