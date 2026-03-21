import { Category } from "@/lib/db/schema";
import PostsBlock from "./posts-block";

export default async function CategoryPostsPage(props: { category: Category }) {
  const { category } = props;

  return (
    <div>
      <h1>{category.title}</h1>
      <PostsBlock category={category} />
    </div>
  );
}
