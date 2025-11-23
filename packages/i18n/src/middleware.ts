import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'fa'],
  defaultLocale: 'en',
  localePrefix: 'never'
});

export const matcher = ['/((?!_next|.*\\..*).*)'];
