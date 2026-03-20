"use server";

import { notFound } from "next/navigation";
import { getPostByFullPath, getCategoryByFullPath } from "@/lib/db/actions";
import PostPage from "@/components/post-page";
import CategoryPage from "@/components/category-page";

type PropsType = {
  params: Promise<{ slugs: string[] }>;
};

export default async function Page(props: PropsType) {
  const params = await props.params;

  const category = await getCategoryByFullPath(params.slugs);
  if (category) {
    return <CategoryPage category={category} />;
  }

  const post = await getPostByFullPath(params.slugs);
  if (post?.status === "published") {
    return <PostPage post={post} />;
  }

  notFound();
}
