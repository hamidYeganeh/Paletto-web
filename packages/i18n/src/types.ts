export type Locale = 'en' | 'fa';

export type LocaleConfig = {
  locales: Locale[];
  defaultLocale: Locale;
  localePrefix?: 'always' | 'as-needed' | 'never';
};

export const DEFAULT_LOCALE_CONFIG: LocaleConfig = {
  locales: ['en', 'fa'],
  defaultLocale: 'en',
  localePrefix: 'as-needed'
};

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  fa: 'فارسی'
};
