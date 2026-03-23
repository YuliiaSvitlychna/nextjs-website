import { Category } from "@/lib/db/schema/categories";
import SubcategoriesBlock from "@/components/blocks/subcategories";
import PostsBlock from "@/components/blocks/posts";

export default async function CategoryAllPage(props: { category: Category }) {
  const { category } = props;

  return (
    <div>
      <h1>{category.title}</h1>
      <SubcategoriesBlock category={category} />
      <PostsBlock category={category} />
    </div>
  );
}
