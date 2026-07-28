import type { Dictionary, Locale } from "@/lib/i18n/types";
import ContactFooter from "./ContactFooter";
import Header from "./Header";
import Hero from "./Hero";
import MethodSection from "./MethodSection";
import PortfolioSection from "./PortfolioSection";

export default function PageContent({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <>
      <Header dict={dict} locale={locale} />
      <main>
        <Hero dict={dict} locale={locale} />
        <PortfolioSection dict={dict} locale={locale} />
        <MethodSection dict={dict} locale={locale} />
      </main>
      <ContactFooter dict={dict} />
    </>
  );
}
