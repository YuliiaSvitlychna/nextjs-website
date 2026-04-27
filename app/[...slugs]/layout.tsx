import { resolveSlugContent } from "./resolve-slug-content";
import JsonLd from "@/components/json-ld";

type PropsType = {
  children: React.ReactNode;
  params: Promise<{ slugs: string[] }>;
};

export default async function Layout({ children, params }: PropsType) {
  const { slugs } = await params;
  const { schema } = await resolveSlugContent([...slugs]);

  return (
    <>
      <JsonLd schema={schema} />
      {children}
    </>
  );
}
