import JsonLd from "@/components/json-ld";
import { termsAndConditionsSchema } from "@/lib/seo/static";

type PropsType = {
  children: React.ReactNode;
};

export default function TermsAndConditionsLayout({ children }: PropsType) {
  return (
    <>
      <JsonLd schema={termsAndConditionsSchema} />
      {children}
    </>
  );
}
