import JsonLd from "@/components/json-ld";
import { privacyPolicySchema } from "@/lib/seo/static";

type PropsType = {
  children: React.ReactNode;
};

export default function PrivacyPolicyLayout({ children }: PropsType) {
  return (
    <>
      <JsonLd schema={privacyPolicySchema} />
      {children}
    </>
  );
}
