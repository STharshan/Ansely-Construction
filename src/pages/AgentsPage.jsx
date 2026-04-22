import AgentsCta from "../components/agents/AgentsCta";
import AgentsGrid from "../components/agents/AgentsGrid";
import AgentsVideo from "../components/agents/AgentsVideo";
import { agentsList, agentsVideo } from "../data/agentsData";

export default function AgentsPage() {
  return (
    <main className="bg-white">
      <AgentsGrid agents={agentsList} />
      <AgentsVideo video={agentsVideo} />
      <AgentsCta />
    </main>
  );
}
