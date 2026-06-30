import getRootCategories from '@/lib/db/actions/get-root-categories';
import Link from 'next/link';
import { BLOG_PREFIX } from '@/config';
export { blogMetadata as metadata } from '@/lib/seo/static';
import { JsonLd } from '@/components/seo/json-ld';
import { blogSchema } from '@/lib/seo/static';
import './page.module.scss';

export default async function BlogPage() {
  const categories = await getRootCategories();

  return (
    <>
      <div>
        <h1>Blog</h1>
        {categories.map((cat) => (
          <div key={cat.id}>
            <Link href={`/${BLOG_PREFIX}/${cat.slug}`}>{cat.title}</Link>
          </div>
        ))}
      </div>
      <JsonLd schema={blogSchema} />
    </>
  );
}
