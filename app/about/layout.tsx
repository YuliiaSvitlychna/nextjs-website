import JsonLd from "@/components/json-ld";
import { aboutSchema } from "@/lib/seo/static";

type PropsType = {
  children: React.ReactNode;
};

export default function AboutLayout({ children }: PropsType) {
  return (
    <>
      <JsonLd schema={aboutSchema} />
      {children}
    </>
  );
}
