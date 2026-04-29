import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Explore the latest articles, categories, and guides.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Home",
    description: "Explore the latest articles, categories, and guides.",
    url: "/",
  },
  twitter: {
    card: "summary",
    title: "Home",
    description: "Explore the latest articles, categories, and guides.",
  },
};

export default function HomePage() {
  return (
    <div>
      <h1>Homepage</h1>
    </div>
  );
}
