import JsonLd from "@/components/json-ld";
import { blogSchema } from "@/lib/seo/static";

type PropsType = {
  children: React.ReactNode;
};

export default function BlogLayout({ children }: PropsType) {
  return (
    <>
      <JsonLd schema={blogSchema} />
      {children}
    </>
  );
}
