import { Category } from "@/lib/db/schema/categories";
import SubcategoriesBlock from "@/components/blocks/subcategories";
import PostsBlock from "@/components/blocks/posts";

type PropsType = {
  category: Category;
  page: number;
};

export default async function CategoryAllPage(props: PropsType) {
  const { category, page } = props;

  return (
    <div>
      <h1>{category.title}</h1>
      <SubcategoriesBlock category={category} page={page} />
      <PostsBlock category={category} page={page} />
    </div>
  );
}
