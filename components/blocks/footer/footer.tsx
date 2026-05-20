import Link from "next/link";
import styles from "./footer.module.scss";
import { FOOTER_LINKS } from "@/config";

export function Footer() {
  return (
    <footer className={styles.footer}>
      {FOOTER_LINKS.map(({ href, label }) => (
        <Link key={href} href={href} className={styles.link}>
          {label}
        </Link>
      ))}
    </footer>
  );
}
