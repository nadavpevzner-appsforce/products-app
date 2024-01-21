export const i18n = {
  defaultLocale: 'il',
  locales: ['en', 'il'],
} as const;

export type Locale = (typeof i18n)['locales'][number];
