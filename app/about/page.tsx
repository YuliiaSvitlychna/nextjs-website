import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about our blog, mission, and editorial approach.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About",
    description: "Learn more about our blog, mission, and editorial approach.",
    url: "/about",
  },
  twitter: {
    card: "summary",
    title: "About",
    description: "Learn more about our blog, mission, and editorial approach.",
  },
};

export default function AboutPage() {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}
