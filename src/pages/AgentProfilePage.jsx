import { useParams } from "react-router-dom";
import AgentHero from "../components/common/AgentHero";
import { agentsBySlug } from "../data/agentProfileData";

export default function AgentProfilePage() {
  const { slug } = useParams();
  const profile = agentsBySlug[slug];

  if (!profile) {
    return <div>Agent not found</div>;
  }

  return (
    <main className="bg-[#f7f7f4]">
      <AgentHero
        profileCard={profile.profileCard}
        about={profile.about}
        experience={profile.experience}
      />
    </main>
  );
}
