import { notFound } from "next/navigation";
import { Category } from "@/lib/db/schema/categories";
import getSubcategoriesByCategoryId from "@/lib/db/actions/get-subcategories-by-category-id";
import Pager from "@/components/pager";
import { SUBCATEGORIES_PER_PAGE } from "@/config";

type PropsType = {
  category: Category;
  page: number;
};

export default async function SubcategoriesList(props: PropsType) {
  const { category, page } = props;
  const { subcategories, totalCount } = await getSubcategoriesByCategoryId(category.id, page);

  if (totalCount === 0) {
    notFound();
  }

  return (
    <div className="subcategories-list">
      <div>Display Subcategories</div>
      {subcategories.map((subcat) => (
        <div key={subcat.id}>{subcat.title}</div>
      ))}
      <Pager page={page} pageLength={SUBCATEGORIES_PER_PAGE} totalLength={totalCount} />
    </div>
  );
}
