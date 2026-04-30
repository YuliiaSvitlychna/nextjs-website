import JsonLd from "@/components/json-ld";
import { contactSchema } from "@/lib/seo/static";

type PropsType = {
  children: React.ReactNode;
};

export default function ContactLayout({ children }: PropsType) {
  return (
    <>
      <JsonLd schema={contactSchema} />
      {children}
    </>
  );
}
