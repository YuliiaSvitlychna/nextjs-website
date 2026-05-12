import Link from "next/link";
import "./header-menu.module.scss";

export function HeaderMenu() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
}
