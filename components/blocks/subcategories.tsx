import { Category } from "@/lib/db/schema/categories";
import getSubcategoriesByCategoryId from "@/lib/db/actions/get-subcategories-by-category-id";
import Pager from "./pager";

type PropsType = {
  category: Category;
  page: number;
};

export default async function SubcategoriesBlock(props: PropsType) {
  const { category, page } = props;
  const subcategories = await getSubcategoriesByCategoryId(category.id);

  return (
    <>
      <div>
        {subcategories.map((subcat) => (
          <div key={subcat.id}>{subcat.title}</div>
        ))}
      </div>
      {/* <div>
        { searchParams }
      </div>
      <div>
        { pathName }
      </div> */}
      <Pager page={page} />
    </>
  );
}
