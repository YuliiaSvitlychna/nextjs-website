import getRootCategories from "@/lib/db/actions/get-root-categories";
import Link from "next/link";
import { BLOG_PREFIX } from "@/config";
export { blogMetadata as metadata } from "@/lib/seo/static";

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
