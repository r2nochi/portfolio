import Hero from "@/components/Hero";
import PortfolioSection from "@/components/PortfolioSection";
import { es } from "@/lib/i18n/es";

export const metadata = {
  title: "Showcase — David Nochi",
  robots: { index: false, follow: false },
};

export default function ShowcasePage() {
  return (
    <main className="showcase-page">
      <Hero dict={es} locale="es" />
      <PortfolioSection dict={es} locale="es" />
    </main>
  );
}
