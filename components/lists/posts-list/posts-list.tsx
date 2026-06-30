import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Category } from '@/lib/db/schema/categories';
import getPostsByCategoryId from '@/lib/db/actions/get-posts-by-category-id';
import Pager from '@/components/blocks/pager/pager';
import { POSTS_PER_PAGE, BLOG_PREFIX } from '@/config';
import './posts-list.module.scss';

type PropsType = {
  category: Category;
  page: number;
  slugs: string[];
};

export default async function PostsList(props: PropsType) {
  const { category, page, slugs } = props;
  const { posts, totalCount } = await getPostsByCategoryId(category.id, page);

  if (totalCount === 0) {
    notFound();
  }

  const categoryPath = `/${BLOG_PREFIX}/${slugs.join('/')}`;

  return (
    <div className="posts-list">
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`${categoryPath}/${post.slug}`}>
            <h2>{post.title}</h2>
          </Link>
          <div>{post.teaser}</div>
        </div>
      ))}
      <Pager page={page} pageLength={POSTS_PER_PAGE} totalLength={totalCount} />
    </div>
  );
}
