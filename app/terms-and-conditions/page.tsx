export { termsAndConditionsMetadata as metadata } from '@/lib/seo/static';
import { JsonLd } from '@/components/seo/json-ld';
import { termsAndConditionsSchema } from '@/lib/seo/static';
import getStaticContent from '@/lib/db/actions/get-static-content';
import { mdToHtml } from '@/lib/content/md-to-html';
import './page.module.scss';

export default async function TermsAndConditionsPage() {
  const content = await getStaticContent('terms-and-conditions');

  return (
    <>
      <div>
        <h1>{content.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: await mdToHtml(content.body) }} />
      </div>
      <JsonLd schema={termsAndConditionsSchema} />
    </>
  );
}
