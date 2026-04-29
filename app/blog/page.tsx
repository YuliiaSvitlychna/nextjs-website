import getRootCategories from "@/lib/db/actions/get-root-categories";
import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_PREFIX } from "@/config";

export const metadata: Metadata = {
  title: "Blog",
  description: "Browse all blog categories and discover published content.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog",
    description: "Browse all blog categories and discover published content.",
    url: "/blog",
  },
  twitter: {
    card: "summary",
    title: "Blog",
    description: "Browse all blog categories and discover published content.",
  },
};

export default async function BlogPage() {
  const categories = await getRootCategories();

  return (
    <div>
      <h1>Blog</h1>
      {categories.map((cat) => (
        <div key={cat.id}>
          <Link href={`/${BLOG_PREFIX}/${cat.slug}`}>{cat.title}</Link>
        </div>
      ))}
    </div>
  );
}
