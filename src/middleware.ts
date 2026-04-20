import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['fr', 'en', 'es', 'de', 'pt', 'it'],
  defaultLocale: 'fr',
  localePrefix: 'always'
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};