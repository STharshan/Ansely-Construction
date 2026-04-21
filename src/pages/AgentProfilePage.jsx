import AgentHero from "../components/common/AgentHero";
import CtaPanel from "../components/common/CtaPanel";
import ListingGrid from "../components/common/ListingGrid";
import TestimonialGrid from "../components/common/TestimonialGrid";
import { johnCarterProfile } from "../data/agentProfileData";

export default function AgentProfilePage() {
  const profile = johnCarterProfile;

  return (
    <main className="bg-[#f7f7f4]">
      <AgentHero
        profileCard={profile.profileCard}
        about={profile.about}
        experience={profile.experience}
      />
      <ListingGrid section={profile.properties} />
      <TestimonialGrid section={profile.articles} />
      <CtaPanel ctaCards={profile.ctaCards} />
    </main>
  );
}
