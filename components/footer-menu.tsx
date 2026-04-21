import Link from "next/link";

export function FooterMenu() {
  return (
    <div>
      <Link href="/">Homepage</Link>
      <Link href="/privacy-policy">Privacy Policy</Link>
      <Link href="/terms-and-conditions">Terms And Conditions</Link>
      <Link href="/contact">Contact us</Link>
    </div>
  );
}
