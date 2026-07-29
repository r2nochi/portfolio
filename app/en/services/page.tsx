import ServicesPage from "@/components/ServicesPage";
import { en } from "@/lib/i18n/en";
import { SERVICIOS_EN } from "@/lib/servicios";

export const metadata = {
  title: "Applied AI services — David Nochi",
  description:
    "Discovery, prototype and rollout for document automation, with scope, price and evidence stated up front.",
};

export default function Page() {
  return <ServicesPage dict={en} locale="en" services={SERVICIOS_EN} />;
}
