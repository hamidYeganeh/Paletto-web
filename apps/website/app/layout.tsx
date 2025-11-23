import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import {I18nProvider} from "@repo/i18n/client";
import {cookies, headers} from "next/headers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("NEXT_LOCALE")?.value;
  const hdrs = await headers();
  const headerLocale = hdrs.get("accept-language")?.split(",")[0]?.slice(0,2);
  const locale = cookieLocale === 'fa' || cookieLocale === 'en' ? cookieLocale : (headerLocale === 'fa' ? 'fa' : 'en');
  const messages = (
    await (locale === 'fa'
      ? import('../messages/fa.json')
      : import('../messages/en.json'))
  ).default as any;
  return {
    title: messages.meta?.title ?? 'Paletto Web',
    description: messages.meta?.description ?? 'Main website'
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("NEXT_LOCALE")?.value;
  const hdrs2 = await headers();
  const headerLocale = hdrs2.get("accept-language")?.split(",")[0]?.slice(0,2);
  const locale = cookieLocale === 'fa' || cookieLocale === 'en' ? cookieLocale : (headerLocale === 'fa' ? 'fa' : 'en');
  const messages = (
    await (locale === 'fa'
      ? import('../messages/fa.json')
      : import('../messages/en.json'))
  ).default;

  return (
    <html lang={locale} dir={locale === 'fa' ? 'rtl' : 'ltr'}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <I18nProvider locale={locale} messages={messages}>{children}</I18nProvider>
      </body>
    </html>
  );
}
