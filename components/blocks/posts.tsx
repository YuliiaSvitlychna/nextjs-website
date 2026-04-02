import { Category } from "@/lib/db/schema/categories";
import getPostsByCategoryId from "@/lib/db/actions/get-posts-by-category-id";
import Pager from "./pager";

type PropsType = {
  category: Category;
  page: number;
};

export default async function PostsBlock(props: PropsType) {
  const { category, page } = props;
  const posts = await getPostsByCategoryId(category.id);

  return (
    <>
      <div>
        {posts.map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
      <Pager page={page} />
    </>
  );
}
