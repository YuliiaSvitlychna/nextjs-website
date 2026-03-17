"use server";

import { getPostByFullPath, getCategoryByFullPath } from "../../actions";
import { notFound } from "next/navigation";

type PropsType = {
  params: Promise<{ slugs: string[] }>;
};

export default async function Page(props: PropsType) {
  const params = await props.params;

  const category = await getCategoryByFullPath(params.slugs);
  if (category) {
    return (
      <div>
        <h1>{category.title}</h1>
      </div>
    );
  }

  const post = await getPostByFullPath(params.slugs);
  if (post) {
    return (
      <div className="container">
        <h1>{post.title}</h1>
        <div>{post.body}</div>
      </div>
    );
  }

  notFound();
}
