import { Category } from "@/lib/db/schema/categories";
import PostsBlock from "@/components/blocks/posts";

type PropsType = {
  category: Category;
  page: number;
};

export default async function CategoryPostsPage(props: PropsType) {
  const { category, page } = props;

  return (
    <div>
      <h1>{category.title}</h1>
      <PostsBlock category={category} page={page} />
    </div>
  );
}
