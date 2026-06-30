export { homeMetadata as metadata } from '@/lib/seo/static';
import { homeSchema } from '@/lib/seo/static';
import { JsonLd } from '@/components/seo/json-ld';
import './page.module.scss';

export default function HomePage() {
  return (
    <>
      <div>
        <h1>Homepage</h1>
      </div>
      <JsonLd schema={homeSchema} />
    </>
  );
}
