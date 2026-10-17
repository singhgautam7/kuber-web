/**
 * Site controller: theme and mode, the theme popover and mobile menu, nav
 * scroll states, reveal-on-scroll, the features filter, copy buttons and the
 * email reveal. Wired by data-* attributes; the same script runs on every page.
 * The head script already applied the saved theme before first paint.
 */

const root = document.documentElement;
const KEY = 'kuber-theme';
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const darkMq = matchMedia('(prefers-color-scheme: dark)');

/* ============ Theme ============ */
type Pref = 'light' | 'dark' | 'system';
const state = () => ({ fam: root.dataset.theme || 'signature', mode: (root.dataset.pref || 'light') as Pref });

function paint(fam: string, mode: Pref) {
  const dark = mode === 'dark' || (mode === 'system' && darkMq.matches);
  root.dataset.theme = fam;
  root.dataset.pref = mode;
  root.dataset.mode = dark ? 'dark' : 'light';
  root.style.colorScheme = dark ? 'dark' : 'light';
  syncPressed();
}

function apply(fam: string, mode: Pref) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ fam, mode }));
  } catch {
    /* storage blocked: the choice lasts for this page only */
  }
  const run = () => paint(fam, mode);
  const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
  if (reduced.matches) run();
  else if (doc.startViewTransition) doc.startViewTransition(run);
  else {
    root.classList.add('k-theming');
    run();
    setTimeout(() => root.classList.remove('k-theming'), 260);
  }
}

function syncPressed() {
  const { fam, mode } = state();
  document.querySelectorAll<HTMLElement>('[data-set-fam]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.setFam === fam)));
  document.querySelectorAll<HTMLElement>('[data-set-mode]').forEach((b) => {
    // The Home section has no System button: show the resolved mode there.
    const hasSystem = !!b.parentElement?.querySelector('[data-set-mode="system"]');
    const on = hasSystem ? b.dataset.setMode === mode : b.dataset.setMode === root.dataset.mode;
    b.setAttribute('aria-pressed', String(on));
  });
}

darkMq.addEventListener('change', () => {
  if (state().mode === 'system') paint(state().fam, 'system');
});

/* ============ Theme popover (native popover; we only place it) ============ */
const pop = document.getElementById('theme-menu');
const popBtn = document.querySelector<HTMLElement>('[data-theme-toggle]');
pop?.addEventListener('beforetoggle', (e) => {
  const open = (e as Event & { newState: string }).newState === 'open';
  popBtn?.setAttribute('aria-expanded', String(open));
  if (open && popBtn && innerWidth >= 600) {
    const r = popBtn.getBoundingClientRect();
    pop.style.top = `${r.bottom + 12}px`;
    pop.style.right = `${Math.max(16, innerWidth - r.right - 8)}px`;
  } else if (open) {
    pop.style.top = pop.style.right = '';
  }
});
pop?.addEventListener('toggle', (e) => {
  if ((e as Event & { newState: string }).newState === 'open') pop.querySelector<HTMLElement>('[aria-pressed="true"]')?.focus();
});

/* ============ Dialogs (native) ============ */
// True when a click lands on the backdrop, outside the dialog box.
const outside = (d: HTMLDialogElement, e: MouseEvent) => {
  const r = d.getBoundingClientRect();
  return e.target === d && (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom);
};

/* ============ Mobile menu ============ */
const sheet = document.querySelector<HTMLDialogElement>('[data-menu]');
document.querySelector('[data-menu-open]')?.addEventListener('click', () => sheet?.showModal());
sheet?.addEventListener('click', (e) => {
  const t = e.target as HTMLElement;
  if (outside(sheet, e) || t.closest('[data-menu-close]') || t.closest('a')) sheet.close();
});

/* ============ Other dialogs ("Where to find in app") ============ */
document.querySelectorAll<HTMLDialogElement>('dialog:not([data-menu])').forEach((d) => {
  d.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    if (outside(d, e) || t.closest('[data-dialog-close]')) d.close();
  });
});

/* ============ Clicks ============ */
document.addEventListener('click', async (e) => {
  const t = e.target as HTMLElement;
  const opener = t.closest<HTMLElement>('[data-dialog-open]');
  if (opener) return (document.getElementById(opener.dataset.dialogOpen!) as HTMLDialogElement | null)?.showModal();
  const famBtn = t.closest<HTMLElement>('[data-set-fam]');
  if (famBtn) return apply(famBtn.dataset.setFam!, state().mode);
  const modeBtn = t.closest<HTMLElement>('[data-set-mode]');
  if (modeBtn) return apply(state().fam, modeBtn.dataset.setMode as Pref);

  const copy = t.closest<HTMLButtonElement>('[data-copy]');
  if (copy) {
    try {
      await navigator.clipboard.writeText(copy.dataset.copy!);
    } catch {
      return;
    }
    copy.dataset.copied = '';
    const label = copy.querySelector('[data-copy-label]');
    const before = label?.textContent;
    if (label) label.textContent = 'Copied';
    setTimeout(() => {
      delete copy.dataset.copied;
      if (label) label.textContent = before!;
    }, 2000);
    return;
  }

  const reveal = t.closest<HTMLElement>('[data-reveal-email]');
  if (reveal) {
    const email = atob(reveal.dataset.revealEmail!);
    const box = reveal.closest('[data-email-box]');
    const link = box?.querySelector<HTMLAnchorElement>('[data-email-link]');
    const btn = box?.querySelector<HTMLButtonElement>('[data-email-copy]');
    if (!link || !btn) return;
    link.href = `mailto:${email}`;
    link.querySelector('span')!.textContent = email;
    btn.dataset.copy = email;
    box!.toggleAttribute('data-revealed', true);
    link.focus();
  }
});

/* ============ Scroll states ============ */
// Nav shrinks past 24px; on mobile the FAB is extended only while the Home hero shows.
const sentinel = document.createElement('div');
sentinel.style.cssText = 'position:absolute;top:24px;height:1px;width:1px;pointer-events:none';
document.body.prepend(sentinel);
new IntersectionObserver(([e]) => root.classList.toggle('scrolled', !e.isIntersecting)).observe(sentinel);
const hero = document.querySelector('[data-hero]');
if (hero) new IntersectionObserver(([e]) => root.classList.toggle('at-hero', e.isIntersecting), { threshold: 0.4 }).observe(hero);

// Reveal once in view; Why Kuber stages play once 35% visible (motion.md §2).
const once = (sel: string, cls: string, threshold: number) => {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add(cls);
        io.unobserve(en.target);
      }),
    { threshold },
  );
  document.querySelectorAll(sel).forEach((el) => io.observe(el));
};
once('[data-reveal]', 'is-in', 0.15);
once('[data-stage]', 'play', 0.35);

/* ============ Features filter ============ */
const chips = document.querySelector<HTMLElement>('[data-filter-chips]');
chips?.addEventListener('click', (e) => {
  const chip = (e.target as HTMLElement).closest<HTMLElement>('[data-filter]');
  if (!chip) return;
  const f = chip.dataset.filter;
  chips.querySelectorAll('[data-filter]').forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
  document.querySelectorAll<HTMLElement>('[data-feature]').forEach((card) => {
    card.hidden = f === 'signature' && card.dataset.sig !== 'true';
  });
  document.querySelectorAll<HTMLElement>('[data-feature-group]').forEach((g) => {
    g.hidden = !g.querySelector('[data-feature]:not([hidden])');
  });
});

syncPressed();
