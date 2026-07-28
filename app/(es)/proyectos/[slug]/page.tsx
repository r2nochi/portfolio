import type { Metadata } from "next";
import CasePage from "@/components/CasePage";
import { es } from "@/lib/i18n/es";
import { getPublishedItem, getPublishedItems } from "@/lib/portfolio";

export function generateStaticParams() {
  return getPublishedItems().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getPublishedItem(slug);
  return item
    ? { title: `${item.title.es} — David Nochi`, description: item.problem.es }
    : {};
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CasePage slug={slug} locale="es" dict={es} />;
}
