export { privacyPolicyMetadata as metadata } from "@/lib/seo/static";
import { JsonLd } from "@/components/seo/json-ld";
import { privacyPolicySchema } from "@/lib/seo/static";
import getStaticContent from "@/lib/db/actions/get-static-content";
import "./page.module.scss";

export default async function PrivacyPage() {
  const content = await getStaticContent("privacy-policy");

  return (
    <>
      <div>
        <h1>{content.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content.body }} />
      </div>
      <JsonLd schema={privacyPolicySchema} />
    </>
  );
}
