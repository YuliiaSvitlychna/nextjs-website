export { termsAndConditionsMetadata as metadata } from "@/lib/seo/static";
import { JsonLd } from "@/components/seo/json-ld";
import { termsAndConditionsSchema } from "@/lib/seo/static";
import "./page.module.scss";

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
