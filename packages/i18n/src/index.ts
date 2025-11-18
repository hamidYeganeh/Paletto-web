export const locales = ['en', 'fa'] as const
export type Locale = typeof locales[number]
export const defaultLocale: Locale = 'en'

export async function loadMessages(locale: Locale) {
  switch (locale) {
    case 'fa':
      return (await import('./messages/fa.json')).default
    default:
      return (await import('./messages/en.json')).default
  }
}

export { default as I18nProvider } from './Provider'
export { default as defaultMessages } from './messages/en.json'