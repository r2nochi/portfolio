import ServicesPage from "@/components/ServicesPage";
import { es } from "@/lib/i18n/es";
import { SERVICIOS_ES } from "@/lib/servicios";

export const metadata = {
  title: "Servicios de IA aplicada — David Nochi",
  description:
    "Diagnóstico, prototipo e implantación de automatización documental, con alcance, precio y evidencia declarados.",
};

export default function Page() {
  return <ServicesPage dict={es} locale="es" services={SERVICIOS_ES} />;
}
