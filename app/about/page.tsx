export { aboutMetadata as metadata } from "@/lib/seo/static";
import { JsonLd } from "@/components/seo/json-ld";
import { aboutSchema } from "@/lib/seo/static";
import "./page.module.scss";

export default function AboutPage() {
  return (
    <>
      <div>
        <h1>About</h1>
      </div>
      <JsonLd schema={aboutSchema} />
    </>
  );
}
