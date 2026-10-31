// Security headers on every SSR response. 'unsafe-inline' covers SvelteKit's hydration script,
// the inline GA bootstrap in app.html and inline style attributes; GA and Google Fonts need their origins.
const csp = [
  "default-src 'self'",
  "img-src 'self' data: https:",
  "font-src 'self' https://fonts.gstatic.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "script-src 'self' 'unsafe-inline' https://*.googletagmanager.com https://*.g.doubleclick.net https://*.google.com",
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.g.doubleclick.net https://*.google.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join('; ');

// Where analytics cookies need opt-in (EU, EEA, UK, Switzerland). Elsewhere GA runs unless the visitor declines.
const CONSENT_COUNTRIES = new Set(
  'AT BE BG HR CY CZ DK EE FI FR DE GR HU IE IT LV LT LU MT NL PL PT RO SK SI ES SE IS LI NO GB CH'.split(' '),
);

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  // Cloudflare sets the visitor's country. No header (local dev) or unknown (XX, T1 for Tor) asks, to be safe.
  const country = event.request.headers.get('cf-ipcountry');
  const consent = !country || country === 'XX' || country === 'T1' || CONSENT_COUNTRIES.has(country) ? 'required' : 'implied';
  const response = await resolve(event, { transformPageChunk: ({ html }) => html.replace('%consent%', consent) });
  response.headers.set('Content-Security-Policy', csp);
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  return response;
}
