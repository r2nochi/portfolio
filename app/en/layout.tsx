import type { Metadata } from "next";
import "../globals.css";
import { archivo, ibmPlexMono } from "@/lib/fonts";
import { en } from "@/lib/i18n/en";

export const metadata: Metadata = {
  title: en.meta.title,
  description: en.meta.description,
};

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
