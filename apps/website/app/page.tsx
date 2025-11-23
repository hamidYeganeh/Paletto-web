"use client";
import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import { Header } from "@repo/ui/header";
import styles from "./page.module.css";
import {useTranslations, useLocale, useFormatter} from "next-intl";
import {LocaleSwitcher} from "@repo/i18n/LocaleSwitcher";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default function Home() {
  const t = useTranslations("home");
  const locale = useLocale();
  const format = useFormatter();
  const today = format.dateTime(new Date(), "long");
  const visits = format.number(12345, "compact");
  return (
    <div className={styles.page}>
      <Header title={t("welcome")} subtitle={t("intro")} />
      <main className={styles.main}>
        <ThemeImage
          className={styles.logo}
          srcLight="turborepo-dark.svg"
          srcDark="turborepo-light.svg"
          alt="Turborepo logo"
          width={180}
          height={38}
          priority
        />

        <ol>
          <li>{t("today", {date: today})}</li>
          <li>{t("visits", {count: visits})}</li>
        </ol>

        <div className={styles.ctas}>
          <LocaleSwitcher />
          <a href="https://turborepo.com/docs?utm_source" target="_blank" rel="noopener noreferrer" className={styles.secondary}>
            Read our docs
          </a>
        </div>
        <Button appName="website" className={styles.secondary}>Open alert</Button>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com/templates?search=turborepo&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://turborepo.com?utm_source=create-turbo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to turborepo.com →
        </a>
      </footer>
    </div>
  );
}
