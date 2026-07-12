import Header from "./Header";
import Hero from "./Hero";
import ProjectsSection from "./ProjectsSection";
import MethodSection from "./MethodSection";
import ContactFooter from "./ContactFooter";
import type { Dictionary, Locale } from "@/lib/i18n/types";

export default function PageContent({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <>
      <Header dict={dict} />
      <main>
        <Hero dict={dict} />
        <ProjectsSection dict={dict} locale={locale} />
        <MethodSection dict={dict} />
      </main>
      <ContactFooter dict={dict} />
    </>
  );
}
