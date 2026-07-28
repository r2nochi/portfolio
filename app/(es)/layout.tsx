import type { Metadata } from "next";
import "../globals.css";
import { archivo, bricolage, ibmPlexMono } from "@/lib/fonts";
import { es } from "@/lib/i18n/es";
import { siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: es.meta.title,
  description: es.meta.description,
  alternates: {
    canonical: "/",
    languages: { es: "/", en: "/en" },
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    title: es.meta.title,
    description: es.meta.description,
  },
};

export default function EsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${archivo.variable} ${bricolage.variable} ${ibmPlexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
