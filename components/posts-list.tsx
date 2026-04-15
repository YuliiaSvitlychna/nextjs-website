import { notFound } from "next/navigation";
import { Category } from "@/lib/db/schema/categories";
import getPostsByCategoryId from "@/lib/db/actions/get-posts-by-category-id";
import Pager from "@/components/pager";
import { POSTS_PER_PAGE } from "@/config";

type PropsType = {
  category: Category;
  page: number;
};

export default async function PostsList(props: PropsType) {
  const { category, page } = props;
  const { posts, totalCount } = await getPostsByCategoryId(category.id, page);

  if (totalCount === 0) {
    notFound();
  }

  return (
    <div className="posts-list">
      <div>Display Posts</div>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
      <Pager page={page} pageLength={POSTS_PER_PAGE} totalLength={totalCount} />
    </div>
  );
}
