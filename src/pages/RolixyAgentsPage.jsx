import RolixyAgentsCta from "../components/agents/RolixyAgentsCta";
import RolixyAgentsGrid from "../components/agents/RolixyAgentsGrid";
import RolixyAgentsVideo from "../components/agents/RolixyAgentsVideo";
import { rolixyAgents, rolixyAgentsVideo } from "../data/rolixyAgentsData";

export default function RolixyAgentsPage() {
  return (
    <main className="bg-white">
      <RolixyAgentsGrid agents={rolixyAgents} />
      <RolixyAgentsVideo video={rolixyAgentsVideo} />
      <RolixyAgentsCta />
    </main>
  );
}
