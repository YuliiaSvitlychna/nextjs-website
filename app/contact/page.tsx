import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with our team for feedback, questions, or partnerships.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact",
    description: "Get in touch with our team for feedback, questions, or partnerships.",
    url: "/contact",
  },
  twitter: {
    card: "summary",
    title: "Contact",
    description: "Get in touch with our team for feedback, questions, or partnerships.",
  },
};

export default function ContactPage() {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
}
