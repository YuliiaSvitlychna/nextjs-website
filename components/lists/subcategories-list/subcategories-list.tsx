import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Category } from '@/lib/db/schema/categories';
import getSubcategoriesByCategoryId from '@/lib/db/actions/get-subcategories-by-category-id';
import Pager from '@/components/blocks/pager/pager';
import { SUBCATEGORIES_PER_PAGE, BLOG_PREFIX } from '@/config';
import './subcategories-list.module.scss';

type PropsType = {
  category: Category;
  page: number;
  slugs: string[];
};

export default async function SubcategoriesList(props: PropsType) {
  const { category, page, slugs } = props;
  const { subcategories, totalCount } = await getSubcategoriesByCategoryId(category.id, page);

  if (totalCount === 0) {
    notFound();
  }

  const parentCategoryPath = `/${BLOG_PREFIX}/${slugs.join('/')}`;

  return (
    <div className="subcategories-list">
      {subcategories.map((subcat) => (
        <div key={subcat.id}>
          <Link href={`${parentCategoryPath}/${subcat.slug}`}>{subcat.title}</Link>
        </div>
      ))}
      <Pager page={page} pageLength={SUBCATEGORIES_PER_PAGE} totalLength={totalCount} />
    </div>
  );
}
