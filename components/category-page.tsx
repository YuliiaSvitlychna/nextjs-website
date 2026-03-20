import { Category } from "@/lib/db/schema";

export default async function CategoryPage(props: { category: Category }) {
  const { category } = props;

  return (
    <div>
      <h1>{category.title}</h1>
    </div>
  );
}
