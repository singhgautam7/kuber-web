// Web v1 loader. In run_script: const W = await (new Function('readFile', await readFile('web-v1/src/load_web.js')))(readFile);
// Returns the app kit + all screen builders (store_load), the Home v3.3 Why Kuber stage builders (H),
// and VT(mode): a theme whose colour roles are CSS custom properties, so live mockups recolor with the site.
return (async () => {
const L = await (new Function('readFile', await readFile('_kit/store_load.js')))(readFile);
const {K,S} = L;
const v2 = (await readFile('_kit/home_v2.js')).replace(/return \{ html,[\s\S]*$/, 'return {gsCard,sgCard,E,s,editBlock,frame,sub,OB,AL,FAM,CR,fx,HELMET};');
const V2 = new Function('K','S', v2)(K,S);
const h33 = (await readFile('_kit/home_v33.js')).replace(/return \{ html, copyMd: cmd \};\s*$/, 'return {P1,P2,P3,P4,P5,PAGES,F5,s,CP};');
const H = new Function('K','S','V2', h33)(K,S,V2);
const hexMix = K.U.mix;
K.U.mix = (c, al) => String(c).startsWith('var(') ? `color-mix(in srgb, ${c} ${Math.round(al*100)}%, transparent)` : hexMix(c, al);
const ROLES = [['p','primary'],['op','on-primary'],['pc','primary-container'],['opc','on-primary-container'],['ip','inverse-primary'],['s','secondary'],['sc','secondary-container'],['osc','on-secondary-container'],['t','tertiary'],['tc','tertiary-container'],['otc','on-tertiary-container'],['bg','surface'],['c0','surface-container-lowest'],['c1','surface-container-low'],['c2','surface-container'],['c3','surface-container-high'],['c4','surface-container-highest'],['on','on-surface'],['onv','on-surface-variant'],['ol','outline'],['olv','outline-variant'],['inv','inverse-surface'],['oninv','inverse-on-surface'],['err','error'],['onErr','on-error'],['errC','error-container'],['onErrC','on-error-container'],['inc','income'],['incC','income-container'],['onIncC','on-income-container'],['exp','expense'],['expC','expense-container'],['onExpC','on-expense-container'],['warn','warning'],['warnC','warning-container'],['onWarnC','on-warning-container']];
// App theme families (lib/core/theme/theme_families.dart): Kuber Signature + Mull OKLCh families, Azure retired.
const ok = (l, c, h) => { const r = h*Math.PI/180, a = c*Math.cos(r), b = c*Math.sin(r);
  const lp = l+0.3963377774*a+0.2158037573*b, mp = l-0.1055613458*a-0.0638541728*b, sp = l-0.0894841775*a-1.2914855480*b;
  const L3 = lp**3, M3 = mp**3, S3 = sp**3;
  const lin = [4.0767416621*L3-3.3077115913*M3+0.2309699292*S3, -1.2684380046*L3+2.6097574011*M3-0.3413193965*S3, -0.0041960863*L3-0.7034186147*M3+1.7076147010*S3];
  return '#'+lin.map(v=>{ const s = v<=0.0031308?12.92*v:1.055*Math.pow(v,1/2.4)-0.055; return Math.round(Math.min(1,Math.max(0,s))*255).toString(16).padStart(2,'0'); }).join('').toUpperCase(); };
const lerp = (x, y, t) => '#'+[1,3,5].map(i=>{ const a = parseInt(x.substr(i,2),16), b = parseInt(y.substr(i,2),16); return Math.round(a+(b-a)*t).toString(16).padStart(2,'0'); }).join('').toUpperCase();
const MULL = [
 ['mull','Mull','default',215,1,215,.52,.11,.04],['vellum','Vellum','warm',80,1.3,70,.58,.10,.04],['foxglove','Foxglove','soft',330,1.05,325,.55,.12,.04],
 ['slate','Slate','mono',215,.4,215,.42,.012,.006],['clay','Clay','greige',75,2.2,45,.50,.055,.02,.025,1.2],['perch','Perch','violet',265,1,265,.52,.11,.04],
 ['ember','Ember','amber',55,1.35,45,.58,.11,.04],['fern','Fern','cool green',160,1.15,162,.54,.10,.04],['tide','Tide','teal',189,1,189,.50,.09,.04],
 ['meadow','Meadow','green',145,1.1,145,.52,.10,.04],['blush','Blush','rose',359,1.05,359,.55,.12,.04],['iris','Iris','purple',290,1,290,.55,.12,.04],
 ['coral','Coral','red orange',30,1.2,30,.56,.12,.04],['citron','Citron','yellow green',113,1.2,113,.55,.10,.04],['neon','Neon','vivid green',147,.8,147,.60,.14,.05]];
const money = (dark) => { const role = (h, c) => dark ? {c:ok(.78,c,h), on:ok(.25,c*.4,h), cont:ok(.32,c*.45,h), onCont:ok(.90,c*.5,h)} : {c:ok(.52,c,h), on:'#FFFFFF', cont:ok(.93,c*.4,h), onCont:ok(.38,c,h)}; return {income:role(145,.13), expense:role(25,.15), warning:role(70,.12)}; };
const mullPal = ([id,name,blurb,nh,nc,ph,pl,pc,pcc,sink=0,ndc], dark) => { ndc = ndc ?? nc;
  const n = (l,c) => ok(l, c*(dark?ndc:nc), nh), p = (l,c) => ok(l,c,ph);
  if (!dark) { const surface = n(.99-sink,.004), container = n(.965-1.6*sink,.008), high = n(.935-2.2*sink,.011), border = n(.885-2.2*sink,.012), cont = p(.92,pcc), onCont = p(.38,pc);
    return {id,name,blurb,dark:false,seed:p(pl,pc),primary:p(pl,pc),onPrimary:'#FFFFFF',primaryContainer:cont,onPrimaryContainer:onCont,inversePrimary:p(.74,pc*.81),secondary:p(.45,pc),onSecondary:'#FFFFFF',secondaryContainer:cont,onSecondaryContainer:onCont,tertiary:p(.45,pc),onTertiary:'#FFFFFF',tertiaryContainer:cont,onTertiaryContainer:onCont,
      error:ok(.55,.16,25),onError:'#FFFFFF',errorContainer:ok(.95,.03,25),onErrorContainer:ok(.48,.17,25),surface,surfaceDim:high,surfaceBright:surface,surfaceContainerLowest:'#FFFFFF',surfaceContainerLow:lerp(surface,container,.5),surfaceContainer:container,surfaceContainerHigh:high,surfaceContainerHighest:lerp(high,border,.5),
      onSurface:n(.20,.02),onSurfaceVariant:n(.52,.02),outline:n(.62,.02),outlineVariant:border,inverseSurface:n(.22,.02),inverseOnSurface:n(.97,.004),scrim:'#000000',money:money(false),heat:[.95,.86,.73,.57,.44].map(l=>p(l,pc))}; }
  const pcd = pc*.81, surface = n(.205,.012), container = n(.255,.014), high = n(.30,.016), border = n(.36,.016), cont = p(.28,pcd*.46), onCont = p(.90,pcd*.46), on14 = n(.14,.01);
  return {id,name,blurb,dark:true,seed:p(pl,pc),primary:p(.74,pcd),onPrimary:on14,primaryContainer:cont,onPrimaryContainer:onCont,inversePrimary:p(pl,pc),secondary:p(.85,pcd*.69),onSecondary:on14,secondaryContainer:cont,onSecondaryContainer:onCont,tertiary:p(.85,pcd*.69),onTertiary:on14,tertiaryContainer:cont,onTertiaryContainer:onCont,
    error:ok(.72,.14,25),onError:on14,errorContainer:ok(.26,.05,25),onErrorContainer:ok(.82,.11,25),surface,surfaceDim:surface,surfaceBright:high,surfaceContainerLowest:n(.17,.01),surfaceContainerLow:lerp(surface,container,.5),surfaceContainer:container,surfaceContainerHigh:high,surfaceContainerHighest:lerp(high,border,.5),
    onSurface:n(.96,.005),onSurfaceVariant:n(.72,.012),outline:n(.60,.012),outlineVariant:border,inverseSurface:n(.93,.008),inverseOnSurface:n(.20,.02),scrim:'#000000',money:money(true),heat:[.28,.38,.52,.68,.82].map(l=>p(l,pcd))}; };
for (const f of MULL) { K.U.pal[f[0]+'_light'] = mullPal(f,false); K.U.pal[f[0]+'_dark'] = mullPal(f,true); }
const FAMS = ['signature', ...MULL.map(f=>f[0])];
const THEMES = [['signature','Kuber Signature','classic blue'], ...MULL.map(f=>[f[0],f[1],f[2]])];
// App icon colours stay fixed across families (icon/icon.md); only light/dark swaps them.
const ICON = {light:{bg:'#D8E2FF',ink:'#003D88',leg:'#2573E6'}, dark:{bg:'#001A42',ink:'#ADC6FF',leg:'#4D8EFF'}};
const varMap = (key) => { const t = K.T(key); const o = {}; for (const [k,n] of ROLES) o['--k-'+n] = t[k]; t.heat.forEach((h,i)=>o['--k-viz-'+(i+1)] = h); const ic = ICON[t.dark?'dark':'light']; o['--k-icon-bg'] = ic.bg; o['--k-icon-ink'] = ic.ink; o['--k-icon-leg'] = ic.leg; return o; };
const varStr = (key) => Object.entries(varMap(key)).map(([k,v])=>`${k}:${v}`).join(';');
const VT = (mode) => { const b = K.T('signature_'+mode); const o = {...b}; for (const [k,n] of ROLES) o[k] = `var(--k-${n})`; o.heat = [1,2,3,4,5].map(i=>`var(--k-viz-${i})`); return o; };
return {...L, H, V2, ROLES, FAMS, THEMES, varMap, varStr, VT, hexMix};
})();
