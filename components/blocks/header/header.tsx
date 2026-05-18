import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle/theme-toggle";
import styles from "./header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main">
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/blog" className={styles.link}>
          Blog
        </Link>
        <Link href="/about" className={styles.link}>
          About
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
      </nav>
      <div className={styles.actions}>
        <ThemeToggle />
      </div>
    </header>
  );
}
