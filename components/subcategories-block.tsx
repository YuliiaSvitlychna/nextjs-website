import { Category } from "@/lib/db/schema";

export default async function SubcategoriesBlock(props: {
  category: Category;
}) {
  const { category } = props;

  return (
    <div>
      <div>Display Subcategories</div>
    </div>
  );
}
