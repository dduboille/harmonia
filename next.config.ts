import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

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
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://clerk.com https://*.clerk.com https://*.clerk.accounts.dev https://challenges.cloudflare.com https://clerk.getharmonia.app",
              "worker-src 'self' blob:",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https: https://img.clerk.com",
              "font-src 'self' data:",
              "connect-src 'self' https://clerk.com https://*.clerk.com https://*.clerk.accounts.dev wss://*.clerk.accounts.dev https://gleitz.github.io https://tonejs.github.io https://clerk-telemetry.com https://clerk.getharmonia.app",
              "frame-src 'self' https://challenges.cloudflare.com https://*.clerk.accounts.dev https://clerk.getharmonia.app https://*.clerk.com",
            ].join("; "),
          },
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

export default withNextIntl(nextConfig);