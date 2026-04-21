import { useParams } from "react-router-dom";
import AgentHero from "../components/common/AgentHero";
import CtaPanel from "../components/common/CtaPanel";
import ListingGrid from "../components/common/ListingGrid";
import TestimonialGrid from "../components/common/TestimonialGrid";
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
      <ListingGrid
        section={{
          ...profile.properties,
          title: `Properties in charge of ${profile.profileCard.name}`,
        }}
      />
      <TestimonialGrid
        section={{
          ...profile.articles,
          title: `Articles by ${profile.profileCard.name}`,
        }}
      />
      <CtaPanel ctaCards={profile.ctaCards} />
    </main>
  );
}
