import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import { ThemeToggle } from "@repo/ui/shared/Theme";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Panel home page</h1>
      <ThemeToggle />
    </div>
  );
}
