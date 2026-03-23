import { Category } from "@/lib/db/schema/categories";
import getSubcategoriesByCategoryId from "@/lib/db/actions/get-subcategories-by-category-id";

export default async function SubcategoriesBlock(props: { category: Category }) {
  const { category } = props;
  const subcategories = await getSubcategoriesByCategoryId(category.id);

  return (
    <div>
      {subcategories.map((subcat) => (
        <div key={subcat.id}>{subcat.title}</div>
      ))}
    </div>
  );
}
