import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 py-16 text-center">
      <p className="text-sm font-medium uppercase tracking-wide text-gray-500">404 error</p>
      <h1 className="mt-2 text-3xl font-semibold">Page not found</h1>
      <p className="mt-3 text-gray-600">
        The link may be outdated or typed incorrectly. Try one of the pages below.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link href="/" className="rounded-md bg-black px-4 py-2 text-white">
          Go to homepage
        </Link>
        <Link href="/blog" className="rounded-md border px-4 py-2">
          Browse blog
        </Link>
        <Link href="/contact" className="rounded-md border px-4 py-2">
          Contact us
        </Link>
      </div>
    </main>
  );
}
