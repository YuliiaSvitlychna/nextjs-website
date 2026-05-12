export { privacyPolicyMetadata as metadata } from "@/lib/seo/static";
import { JsonLd } from "@/components/seo/json-ld";
import { privacyPolicySchema } from "@/lib/seo/static";
import "./page.module.scss";

export default function PrivacyPage() {
  return (
    <>
      <div>
        <h1>Privacy Page</h1>
      </div>
      <JsonLd schema={privacyPolicySchema} />
    </>
  );
}
