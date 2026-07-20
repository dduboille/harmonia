import createNextIntlPlugin from 'next-intl/plugin';
import { withSentryConfig } from '@sentry/nextjs';
const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://clerk.com https://*.clerk.com https://*.clerk.accounts.dev https://challenges.cloudflare.com https://clerk.getharmonia.app https://js.stripe.com",
  "worker-src 'self' blob:",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https: https://img.clerk.com",
  "font-src 'self' data:",
  // Les samples de piano sont désormais servis depuis /audio/piano : les deux
  // domaines GitHub Pages qui figuraient ici ne sont plus sollicités.
  "connect-src 'self' https://clerk.com https://*.clerk.com https://*.clerk.accounts.dev wss://*.clerk.accounts.dev https://clerk-telemetry.com https://clerk.getharmonia.app https://api.stripe.com",
  "media-src 'self'",
  "frame-src 'self' https://challenges.cloudflare.com https://*.clerk.accounts.dev https://clerk.getharmonia.app https://*.clerk.com https://js.stripe.com",
  // Interdit l'inclusion du site dans une iframe tierce (clickjacking).
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const SECURITY_HEADERS = [
  { key: "Content-Security-Policy", value: CSP },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig = {
  turbopack: {
    resolveAlias: {
      webmidi: { browser: './src/stubs/webmidi.ts' },
    },
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: SECURITY_HEADERS,
      },
      {
        // Les assets de /public sont immuables (renommés à chaque changement) :
        // sans cela Next les sert en `max-age=0, must-revalidate`.
        source: "/:path*.(jpg|jpeg|png|svg|webp|avif|ico|woff2|mp3)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
  webpack: (config: any) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      webmidi: false,
    };
    return config;
  },
};

// `tunnelRoute` fait transiter les rapports d'erreur par une route du site
// lui-même (même origine) au lieu d'appeler directement l'ingest Sentry :
// aucun bloqueur de pub ne le voit, et la CSP existante (`connect-src 'self'`)
// n'a donc besoin d'aucune entrée Sentry supplémentaire. Sans les identifiants
// SENTRY_ORG/SENTRY_PROJECT/SENTRY_AUTH_TOKEN, l'étape d'upload des source
// maps s'annule proprement au build — rien ne casse en leur absence.
export default withSentryConfig(withNextIntl(nextConfig), {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: true,
  tunnelRoute: "/sentry-tunnel",
  widenClientFileUpload: true,
  webpack: { treeshake: { removeDebugLogging: true } },
});
