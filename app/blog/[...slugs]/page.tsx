"use server";

import { notFound } from "next/navigation";
import { getPostByFullPath, getCategoryByFullPath } from "@/lib/db/actions";
import PostPage from "@/components/post-page";
import CategoryAllPage from "@/components/category-all-page";
import CategorySubcategoriesPage from "@/components/category-subcategories-page";
import CategoryPostsPage from "@/components/category-posts-page";

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
