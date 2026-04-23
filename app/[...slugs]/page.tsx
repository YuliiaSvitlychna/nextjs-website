import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ReactNode } from "react";
import getCategoryByFullPath from "@/lib/db/actions/get-category-by-full-path";
import getPostByFullPath from "@/lib/db/actions/get-post-by-full-path";
import PostWrapper from "@/components/wrappers/post";
import CategoryWrapper from "@/components/wrappers/category";
import PostsList from "@/components/posts-list";
import SubcategoriesList from "@/components/subcategories-list";
import { Status, Post } from "@/lib/db/schema/posts";
import { Type, Category } from "@/lib/db/schema/categories";
import { BLOG_PREFIX } from "@/config";

type PropsType = {
  params: Promise<{ slugs: string[] }>;
  searchParams: Promise<{ page: string }>;
};

export async function generateMetadata(props: PropsType): Promise<Metadata> {
  const { metadata } = await generateMetadataWithPage(props);
  return metadata;
}

export default async function Page(props: PropsType): Promise<ReactNode> {
  const { reactNode } = await generateMetadataWithPage(props);
  return reactNode;
}

function generatePostMetadata(post: Post, slugs: string[]): Metadata {
  const title = post.title;
  const description = post.seo_description ?? post.teaser;
  const canonicalPath = `/${BLOG_PREFIX}/${slugs.join("/")}`;

  const ogImage = post.og_image ?? undefined;
  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
    twitter: {
      card: ogImage ? "summary_large_image" : "summary",
      title,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}

function generateCategoryMetadata(category: Category, slugs: string[]): Metadata {
  const title = category.title;
  const description = category.seo_description ?? category.title;
  const canonicalPath = `/${BLOG_PREFIX}/${slugs.join("/")}`;

  const ogImage = category.og_image ?? undefined;
  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
    twitter: {
      card: ogImage ? "summary_large_image" : "summary",
      title,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}

async function generateMetadataWithPage(
  props: PropsType,
): Promise<{ metadata: Metadata; reactNode: ReactNode }> {
  const { slugs } = await props.params;
  const searchParams = await props.searchParams;
  const page = Number(searchParams.page) || 1;

  const prefixSlugs = BLOG_PREFIX.split("/");
  prefixSlugs.forEach((prefixSlug) => {
    if (prefixSlug !== slugs.shift()) {
      notFound();
    }
  });

  const category = await getCategoryByFullPath(slugs);
  if (category?.type === Type.DisplayedAll) {
    const metadata = generateCategoryMetadata(category, slugs);
    const reactNode = (
      <CategoryWrapper>
        <h1>{category.title}</h1>
        <SubcategoriesList category={category} page={page} slugs={slugs} />
        <PostsList category={category} page={page} slugs={slugs} />
      </CategoryWrapper>
    );
    return { metadata, reactNode };
  } else if (category?.type === Type.DisplayedSubcategories) {
    const metadata = generateCategoryMetadata(category, slugs);
    const reactNode = (
      <CategoryWrapper>
        <h1>{category.title}</h1>
        <SubcategoriesList category={category} page={page} slugs={slugs} />
      </CategoryWrapper>
    );
    return { metadata, reactNode };
  } else if (category?.type === Type.DisplayedPosts) {
    const metadata = generateCategoryMetadata(category, slugs);
    const reactNode = (
      <CategoryWrapper>
        <h1>{category.title}</h1>
        <PostsList category={category} page={page} slugs={slugs} />
      </CategoryWrapper>
    );
    return { metadata, reactNode };
  }

  const post = await getPostByFullPath(slugs);
  if (post?.status === Status.Published) {
    const metadata = generatePostMetadata(post, slugs);
    const reactNode = (
      <PostWrapper>
        <h1>{post.title}</h1>
        <div>{post.body}</div>
      </PostWrapper>
    );
    return { metadata, reactNode };
  }

  notFound();
}
