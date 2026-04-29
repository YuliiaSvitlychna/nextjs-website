import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read how we collect, use, and protect your personal data.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy",
    description: "Read how we collect, use, and protect your personal data.",
    url: "/privacy-policy",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy",
    description: "Read how we collect, use, and protect your personal data.",
  },
};

export default function PrivacyPage() {
  return (
    <div>
      <h1>Privacy Page</h1>
    </div>
  );
}
