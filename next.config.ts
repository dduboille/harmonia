import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

const nextConfig = {
  webpack: (config: any) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      webmidi: false,
    };
    return config;
  },
};

export default withNextIntl(nextConfig);