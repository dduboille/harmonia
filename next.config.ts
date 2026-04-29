import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://clerk.com https://*.clerk.accounts.dev https://challenges.cloudflare.com",
              "worker-src 'self' blob:",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https:",
              "font-src 'self' data:",
              "connect-src 'self' https://clerk.com https://*.clerk.accounts.dev wss://*.clerk.accounts.dev https://gleitz.github.io https://clerk-telemetry.com",
              "frame-src 'self' https://challenges.cloudflare.com https://*.clerk.accounts.dev",
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