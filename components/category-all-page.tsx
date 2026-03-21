import { Category } from "@/lib/db/schema";
import SubcategoriesBlock from "./subcategories-block";
import PostsBlock from "./posts-block";

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
