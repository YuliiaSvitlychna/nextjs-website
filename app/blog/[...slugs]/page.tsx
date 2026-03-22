"use server";

import { notFound } from "next/navigation";
import getPostByFullPath from "@/lib/db/actions/get-post-by-full-path";
import getCategoryByFullPath from "@/lib/db/actions/get-category-by-full-path";
import PostPage from "@/components/pages/post";
import CategoryAllPage from "@/components/pages/category-all";
import CategorySubcategoriesPage from "@/components/pages/category-subcategories";
import CategoryPostsPage from "@/components/pages/category-posts";

type PropsType = {
  params: Promise<{ slugs: string[] }>;
};

export default async function Page(props: PropsType) {
  const params = await props.params;

  const category = await getCategoryByFullPath(params.slugs);
  if (category?.type === "displayed-all") {
    return <CategoryAllPage category={category} />;
  } else if (category?.type === "displayed-subcategories") {
    return <CategorySubcategoriesPage category={category} />;
  } else if (category?.type === "displayed-posts") {
    return <CategoryPostsPage category={category} />;
  }

  const post = await getPostByFullPath(params.slugs);
  if (post?.status === "published") {
    return <PostPage post={post} />;
  }

  notFound();
}
