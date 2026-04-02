import { Category } from "@/lib/db/schema/categories";
import SubcategoriesBlock from "../blocks/subcategories";

type PropsType = {
  category: Category;
  page: number;
};

export default async function CategorySubcategoriesPage(props: PropsType) {
  const { category, page } = props;

  return (
    <div>
      <h1>{category.title}</h1>
      <SubcategoriesBlock category={category} page={page} />
    </div>
  );
}
