import Link from "next/link";
import "./footer-menu.module.scss";

export function FooterMenu() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/privacy-policy">Privacy Policy</Link>
      <Link href="/terms-and-conditions">Terms And Conditions</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
}
