import { Metadata } from "next";
import { ReactNode } from "react";
import { resolveSlugContent } from "./resolve-slug-content";

type PropsType = {
  params: Promise<{ slugs: string[] }>;
  searchParams?: Promise<{ page: string }>;
};

export async function generateMetadata(props: PropsType): Promise<Metadata> {
  const { slugs } = await props.params;
  const searchParams = await props.searchParams;
  const page = Number(searchParams?.page) || 1;

  const { metadata } = await resolveSlugContent([...slugs], page);
  return metadata;
}

export default async function Page(props: PropsType): Promise<ReactNode> {
  const { slugs } = await props.params;
  const searchParams = await props.searchParams;
  const page = Number(searchParams?.page) || 1;

  const { reactNode } = await resolveSlugContent([...slugs], page);
  return reactNode;
}
