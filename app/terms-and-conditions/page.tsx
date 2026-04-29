import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Review the terms and conditions for using our website and content.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    title: "Terms and Conditions",
    description: "Review the terms and conditions for using our website and content.",
    url: "/terms-and-conditions",
  },
  twitter: {
    card: "summary",
    title: "Terms and Conditions",
    description: "Review the terms and conditions for using our website and content.",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div>
      <h1>Terms And Conditions</h1>
    </div>
  );
}
