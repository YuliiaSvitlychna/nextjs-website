import { notFound } from "next/navigation";
import getCategoryByFullPath from "@/lib/db/actions/get-category-by-full-path";
import getPostByFullPath from "@/lib/db/actions/get-post-by-full-path";
import PostWrapper from "@/components/wrappers/post";
import CategoryWrapper from "@/components/wrappers/category";
import PostsList from "@/components/posts-list";
import SubcategoriesList from "@/components/subcategories-list";
import { Status } from "@/lib/db/schema/posts";
import { Type } from "@/lib/db/schema/categories";

type PropsType = {
  params: Promise<{ slugs: string[] }>;
  searchParams: Promise<{ page: string }>;
};

export default async function Page(props: PropsType) {
  const { slugs } = await props.params;
  const searchParams = await props.searchParams;
  const page = Number(searchParams.page) || 1;

  const category = await getCategoryByFullPath(slugs);
  if (category?.type === Type.DisplayedAll) {
    return (
      <CategoryWrapper>
        <h1>{category.title}</h1>
        <SubcategoriesList category={category} page={page} />
        <PostsList category={category} page={page} />
      </CategoryWrapper>
    );
  } else if (category?.type === Type.DisplayedSubcategories) {
    return (
      <CategoryWrapper>
        <h1>{category.title}</h1>
        <SubcategoriesList category={category} page={page} />
      </CategoryWrapper>
    );
  } else if (category?.type === Type.DisplayedPosts) {
    return (
      <CategoryWrapper>
        <h1>{category.title}</h1>
        <PostsList category={category} page={page} />
      </CategoryWrapper>
    );
  }

  const post = await getPostByFullPath(slugs);
  if (post?.status === Status.Published) {
    return (
      <PostWrapper>
        <h1>{post.title}</h1>
        <div>{post.body}</div>
      </PostWrapper>
    );
  }

  notFound();
}
