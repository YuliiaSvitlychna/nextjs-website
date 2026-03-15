"use server";

import { getPostByFullPath } from "../../actions";
import { notFound } from "next/navigation";

type PropsType = {
  params: Promise<{ slugs: string[] }>;
};

export default async function Page(props: PropsType) {
  const params = await props.params;

  const post = await getPostByFullPath(params.slugs);

  if (!post) {
    notFound();
  }

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <div>{post.body}</div>
    </div>
  );
}
