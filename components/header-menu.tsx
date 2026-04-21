import Link from "next/link";

export function HeaderMenu() {
  return (
    <div>
      <Link href="/">Homepage</Link>
      <Link href="/about">About us</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/contact">Contact us</Link>
    </div>
  );
}
