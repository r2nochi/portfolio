import AgenticLoopPage from "@/components/AgenticLoopPage";
import { en } from "@/lib/i18n/en";

export const metadata = {
  title: "Agentic loop — David Nochi",
  description: "Cost-controlled agent orchestration with verifiable evidence.",
};

export default function Page() {
  return <AgenticLoopPage dict={en} locale="en" />;
}
