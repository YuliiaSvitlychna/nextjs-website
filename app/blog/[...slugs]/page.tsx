"use server";

import { notFound } from "next/navigation";
import getPostByFullPath from "@/lib/db/actions/get-post-by-full-path";
import getCategoryByFullPath from "@/lib/db/actions/get-category-by-full-path";
import PostPage from "@/components/pages/post";
import CategoryAllPage from "@/components/pages/category-all";
import CategorySubcategoriesPage from "@/components/pages/category-subcategories";
import CategoryPostsPage from "@/components/pages/category-posts";
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
    return <CategoryAllPage category={category} page={page} />;
  } else if (category?.type === Type.DisplayedSubcategories) {
    return <CategorySubcategoriesPage category={category} page={page} />;
  } else if (category?.type === Type.DisplayedPosts) {
    return <CategoryPostsPage category={category} page={page} />;
  }

  const post = await getPostByFullPath(slugs);
  if (post?.status === Status.Published) {
    return <PostPage post={post} />;
  }

  notFound();
}
