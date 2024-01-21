import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'il'],

  // Used when no locale matches
  defaultLocale: 'il',
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(il|en)/:path*'],
};
