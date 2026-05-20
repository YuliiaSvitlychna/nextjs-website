import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle/theme-toggle";
import { HamburgerMenu } from "./hamburger-menu";
import { HEADER_LINKS } from "@/config";
import styles from "./header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main">
        {HEADER_LINKS.map(({ href, label }) => (
          <Link key={href} href={href} className={styles.link}>
            {label}
          </Link>
        ))}
      </nav>
      <div className={styles.actions}>
        <ThemeToggle />
        <HamburgerMenu />
      </div>
    </header>
  );
}
