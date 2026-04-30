import JsonLd from "@/components/json-ld";
import { homeSchema } from "@/lib/seo/static";

type PropsType = {
  children: React.ReactNode;
};

export default function HomeLayout({ children }: PropsType) {
  return (
    <>
      <JsonLd schema={homeSchema} />
      {children}
    </>
  );
}
