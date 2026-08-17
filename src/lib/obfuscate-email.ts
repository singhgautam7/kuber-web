/**
 * Email obfuscation to deter naive scrapers. The real address is never written
 * into the HTML in one piece: it is split and reassembled client-side, and a
 * human-readable masked form is shown until the user asks to reveal it.
 */

export interface ObfuscatedEmail {
  /** e.g. "hello" */
  user: string;
  /** e.g. "singhgautam.com" */
  domain: string;
  /** Human-readable masked form, e.g. "hello [at] singhgautam.com". */
  masked: string;
  /** Base64 of the full address, decoded client-side only on reveal. */
  encoded: string;
}

export function obfuscateEmail(email: string): ObfuscatedEmail {
  const [user, domain] = email.split('@');
  const encoded = typeof Buffer !== 'undefined'
    ? Buffer.from(email).toString('base64')
    : btoa(email);
  return {
    user,
    domain,
    masked: `${user} [at] ${domain}`,
    encoded,
  };
}
