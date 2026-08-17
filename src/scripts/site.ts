/**
 * Site-wide client controller. Small, dependency-free, deferred, non-blocking.
 * Drives: theme (variant + mode) with localStorage persistence, the theme
 * dropdown, the mobile drawer, the features filter chips, copy-to-clipboard
 * buttons, and the email reveal. All wiring is by data-* attributes so the same
 * script works on every page.
 *
 * Active states (which theme row / mode button is selected) are handled in pure
 * CSS keyed off <html data-theme data-mode>, so they never flash. This script
 * only mutates those two attributes and updates the pill's label text.
 */

const VARIANT_KEY = 'kuber-theme-variant';
const MODE_KEY = 'kuber-theme-mode';

const NAMES: Record<string, string> = {
  signature: 'Kuber Signature',
  flewtube: 'FlewTube',
  woofsapp: 'Woofsapp',
  purrhub: 'Purrhub',
  honkpe: 'Honkpe',
  squeakdin: 'Squeakdin',
  oinkzon: 'Oinkzon',
};
const VALID = Object.keys(NAMES);

function currentVariant(): string {
  const v = document.documentElement.getAttribute('data-theme') || 'signature';
  return VALID.includes(v) ? v : 'signature';
}
function currentMode(): 'dark' | 'light' {
  return document.documentElement.getAttribute('data-mode') === 'light' ? 'light' : 'dark';
}

function applyVariant(id: string): void {
  if (!VALID.includes(id)) return;
  document.documentElement.setAttribute('data-theme', id);
  try {
    localStorage.setItem(VARIANT_KEY, id);
  } catch {
    /* ignore */
  }
  syncLabel();
}
function applyMode(mode: 'dark' | 'light'): void {
  document.documentElement.setAttribute('data-mode', mode);
  document.documentElement.style.colorScheme = mode;
  try {
    localStorage.setItem(MODE_KEY, mode);
  } catch {
    /* ignore */
  }
}

function syncLabel(): void {
  const label = NAMES[currentVariant()];
  document.querySelectorAll<HTMLElement>('[data-theme-name]').forEach((el) => {
    el.textContent = label;
  });
}

function closeThemeMenus(): void {
  document.querySelectorAll<HTMLElement>('[data-theme-menu]').forEach((m) => {
    m.hidden = true;
  });
  document.querySelectorAll<HTMLElement>('[data-theme-toggle]').forEach((b) => {
    b.setAttribute('aria-expanded', 'false');
  });
}

function initThemeControls(): void {
  syncLabel();

  // Variant + mode setters (delegated).
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;

    const variantBtn = target.closest<HTMLElement>('[data-set-variant]');
    if (variantBtn) {
      applyVariant(variantBtn.dataset.setVariant!);
      closeThemeMenus();
      return;
    }
    const modeBtn = target.closest<HTMLElement>('[data-set-mode]');
    if (modeBtn) {
      applyMode(modeBtn.dataset.setMode === 'light' ? 'light' : 'dark');
      return;
    }

    // Dropdown toggle.
    const toggle = target.closest<HTMLElement>('[data-theme-toggle]');
    if (toggle) {
      const menu = document.querySelector<HTMLElement>(`#${toggle.getAttribute('aria-controls')}`);
      if (menu) {
        const open = menu.hidden;
        closeThemeMenus();
        menu.hidden = !open;
        toggle.setAttribute('aria-expanded', String(open));
      }
      return;
    }

    // Click outside any open theme menu closes it.
    if (!target.closest('[data-theme-menu]')) closeThemeMenus();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeThemeMenus();
      closeDrawer();
    }
  });
}

/* ============ Mobile drawer ============ */
function openDrawer(): void {
  const d = document.querySelector<HTMLElement>('[data-drawer]');
  if (!d) return;
  d.hidden = false;
  document.body.style.overflow = 'hidden';
  d.querySelector<HTMLElement>('a, button')?.focus();
}
function closeDrawer(): void {
  const d = document.querySelector<HTMLElement>('[data-drawer]');
  if (!d) return;
  d.hidden = true;
  document.body.style.overflow = '';
}
function initDrawer(): void {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.closest('[data-drawer-open]')) openDrawer();
    else if (target.closest('[data-drawer-close]')) closeDrawer();
  });
}

/* ============ Feature filter chips ============ */
function initFilters(): void {
  const chipRow = document.querySelector<HTMLElement>('[data-filter-chips]');
  const grid = document.querySelector<HTMLElement>('[data-feature-grid]');
  if (!chipRow || !grid) return;

  chipRow.addEventListener('click', (e) => {
    const chip = (e.target as HTMLElement).closest<HTMLElement>('[data-filter]');
    if (!chip) return;
    const filter = chip.dataset.filter!;
    chipRow.querySelectorAll<HTMLElement>('[data-filter]').forEach((c) => {
      c.setAttribute('aria-pressed', String(c === chip));
    });
    grid.querySelectorAll<HTMLElement>('[data-feature]').forEach((card) => {
      const badge = card.dataset.badge || 'Free';
      const sig = card.dataset.signature === 'true';
      let show = true;
      if (filter === 'Free') show = badge === 'Free' || badge === 'Beta';
      else if (filter === 'Pro') show = badge === 'Pro';
      else if (filter === 'Signature') show = sig;
      card.hidden = !show;
    });
  });
}

/* ============ Copy to clipboard ============ */
function initCopy(): void {
  document.addEventListener('click', async (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLElement>('[data-copy]');
    if (!btn) return;
    const text = btn.dataset.copy!;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      /* ignore */
    }
    const done = btn.dataset.copiedLabel || 'Copied';
    const original = btn.dataset.label || btn.textContent || 'Copy';
    btn.textContent = done;
    window.setTimeout(() => {
      btn.textContent = original;
    }, 1600);
  });
}

/* ============ Email reveal ============ */
function initEmailReveal(): void {
  document.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLElement>('[data-reveal-email]');
    if (!btn) return;
    const encoded = btn.dataset.revealEmail!;
    let email = '';
    try {
      email = atob(encoded);
    } catch {
      return;
    }
    const link = document.createElement('a');
    link.href = `mailto:${email}`;
    link.textContent = email;
    link.className = btn.className;
    btn.replaceWith(link);
  });
}

function init(): void {
  initThemeControls();
  initDrawer();
  initFilters();
  initCopy();
  initEmailReveal();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
