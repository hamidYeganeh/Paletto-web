"use client";
import {NextIntlClientProvider} from 'next-intl';
import {ReactNode} from 'react';

type Props = {
  locale: string;
  messages: Record<string, any>;
  children: ReactNode;
};

export function I18nProvider({locale, messages, children}: Props) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}
      formats={{
        dateTime: {
          short: {day: '2-digit', month: '2-digit', year: 'numeric'},
          long: {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'}
        },
        number: {
          compact: {notation: 'compact'},
          currency: {style: 'currency', currency: locale === 'fa' ? 'IRR' : 'USD'}
        }
      }}
    >
      {children}
    </NextIntlClientProvider>
  );
}
