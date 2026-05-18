import Link from "next/link";
import styles from "./footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/" className={styles.link}>
        Home
      </Link>
      <Link href="/privacy-policy" className={styles.link}>
        Privacy Policy
      </Link>
      <Link href="/terms-and-conditions" className={styles.link}>
        Terms And Conditions
      </Link>
      <Link href="/contact" className={styles.link}>
        Contact
      </Link>
    </footer>
  );
}
