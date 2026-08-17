/**
 * Minimal remark plugin: turns GitHub-style admonition blockquotes into Kuber
 * callout boxes (styled by the global .callout CSS). Zero dependencies.
 *
 *   > [!INFO] Good to know
 *   > SMS is read on-device only.
 *
 * Supported kinds: NOTE/INFO -> info, WARNING/CAUTION -> warning,
 * TIP/SUCCESS -> success. An optional title follows the marker on the same line;
 * everything after the first line becomes the body.
 */
const ICONS = {
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h0"/>',
  warning: '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h0"/>',
  success: '<path d="M20 6L9 17l-5-5"/>',
};
const KIND = {
  NOTE: 'info', INFO: 'info',
  WARNING: 'warning', CAUTION: 'warning',
  TIP: 'success', SUCCESS: 'success',
};

function toText(node) {
  if (node.type === 'break') return '\n';
  if (typeof node.value === 'string') return node.value;
  if (node.children) return node.children.map(toText).join('');
  return '';
}

/** Full text of a blockquote, paragraphs separated by blank lines. */
function blockquoteText(node) {
  return (node.children || [])
    .map((child) => toText(child))
    .join('\n\n');
}

export function remarkCallouts() {
  return (tree) => {
    visit(tree, 'blockquote', (node, index, parent) => {
      const text = blockquoteText(node);
      const m = text.match(/^\s*\[!(\w+)\]([^\n]*)\n?([\s\S]*)$/);
      if (!m) return;
      const kind = KIND[m[1].toUpperCase()];
      if (!kind) return;

      const title = (m[2] || '').trim();
      const body = (m[3] || '').trim();
      const bodyHtml = body
        .split(/\n{2,}/)
        .filter(Boolean)
        .map((p) => `<p>${escapeInline(p.replace(/\n/g, ' '))}</p>`)
        .join('');

      const html =
        `<div class="callout callout-${kind}">` +
        `<svg class="callout-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[kind]}</svg>` +
        `<div class="callout-body">` +
        (title ? `<div class="callout-title">${escapeInline(title)}</div>` : '') +
        `<div class="callout-text">${bodyHtml}</div>` +
        `</div></div>`;

      parent.children[index] = { type: 'html', value: html };
    });
  };
}

function escapeInline(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Tiny inline tree walker (avoids a unist-util-visit dependency). Iterates a
// snapshot of children so replacing a node mid-walk is safe.
function visit(node, type, fn, parent = null, index = null) {
  if (node.type === type && parent) fn(node, index, parent);
  if (node.children) {
    const kids = node.children.slice();
    for (let i = 0; i < kids.length; i++) {
      visit(kids[i], type, fn, node, i);
    }
  }
}

export default remarkCallouts;
