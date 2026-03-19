import { Post } from '@/lib/db/schema';

export default async function PostPage(props: { post: Post }) {
  const { post } = props;

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <div>{post.body}</div>
    </div>
  );
}