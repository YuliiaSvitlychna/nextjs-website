export { privacyPolicyMetadata as metadata } from "@/lib/seo/static";
import JsonLd from "@/components/json-ld";
import { privacyPolicySchema } from "@/lib/seo/static";

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
