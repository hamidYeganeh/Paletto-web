"use client"
import type { ReactNode } from 'react'
import { I18nProvider, defaultMessages, defaultLocale } from '@paletto/i18n'
import { QueryProvider } from '@paletto/apis'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryProvider>
      <I18nProvider locale={defaultLocale} messages={defaultMessages}>{children}</I18nProvider>
    </QueryProvider>
  )
}