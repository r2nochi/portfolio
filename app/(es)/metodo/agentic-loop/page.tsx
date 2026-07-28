import AgenticLoopPage from "@/components/AgenticLoopPage";
import { es } from "@/lib/i18n/es";

export const metadata = {
  title: "Loop agentic — David Nochi",
  description: "Orquestación de agentes con costo controlado y evidencia.",
};

export default function Page() {
  return <AgenticLoopPage dict={es} locale="es" />;
}
