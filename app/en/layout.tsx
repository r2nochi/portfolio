import type { Metadata } from "next";
import "../globals.css";
import { archivo, bricolage, ibmPlexMono } from "@/lib/fonts";
import { en } from "@/lib/i18n/en";
import { siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: en.meta.title,
  description: en.meta.description,
  alternates: {
    canonical: "/en",
    languages: { es: "/", en: "/en" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: en.meta.title,
    description: en.meta.description,
  },
};

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${bricolage.variable} ${ibmPlexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
