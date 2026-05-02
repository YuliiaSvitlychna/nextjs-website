export { termsAndConditionsMetadata as metadata } from "@/lib/seo/static";
import JsonLd from "@/components/json-ld";
import { termsAndConditionsSchema } from "@/lib/seo/static";

export default function TermsAndConditionsPage() {
  return (
    <>
      <div>
        <h1>Terms And Conditions</h1>
      </div>
      <JsonLd schema={termsAndConditionsSchema} />
    </>
  );
}
