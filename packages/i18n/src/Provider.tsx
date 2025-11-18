"use client"
import type { ReactNode } from 'react'
import { NextIntlClientProvider } from 'next-intl'

type Messages = Record<string, string>

export default function I18nProvider({ children, messages, locale }: { children: ReactNode; messages: Messages; locale: string }) {
  return <NextIntlClientProvider messages={messages} locale={locale} timeZone="UTC">{children}</NextIntlClientProvider>
}