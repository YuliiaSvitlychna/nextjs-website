import { Category } from "@/lib/db/schema/categories";
import getPostsByCategoryId from "@/lib/db/actions/get-posts-by-category-id";

export default async function PostsBlock(props: { category: Category }) {
  const { category } = props;
  const posts = await getPostsByCategoryId(category.id);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
