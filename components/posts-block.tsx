import { Category } from "@/lib/db/schema";

export default async function PostsBlock(props: { category: Category }) {
  const { category } = props;

  return (
    <div>
      <div>Display Posts</div>
    </div>
  );
}
