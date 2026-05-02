export { contactMetadata as metadata } from "@/lib/seo/static";
import JsonLd from "@/components/json-ld";
import { contactSchema } from "@/lib/seo/static";

export default function ContactPage() {
  return (
    <>
      <div>
        <h1>Contact</h1>
      </div>
      <JsonLd schema={contactSchema} />
    </>
  );
}
