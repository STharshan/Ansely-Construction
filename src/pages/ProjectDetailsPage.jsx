import { Navigate, useParams } from "react-router-dom";
import ProjectFooter from "../components/common/project/ProjectFooter";
import ProjectHero from "../components/common/project/ProjectHero";
import RelatedProjects from "../components/common/project/RelatedProjects";
import ProjectStorySection from "../components/common/project/ProjectStorySection";
import { projectsBySlug } from "../data/project";

export default function ProjectDetailsPage() {
  const { slug } = useParams();
  const project = projectsBySlug[slug];

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="bg-[#fbfaf7]">
      <ProjectHero hero={project.hero} />
      <ProjectStorySection
        hero={project.hero}
        overview={project.overview}
        designApproach={project.designApproach}
        gallery={project.gallery}
        details={project.details}
        consultation={project.consultation}
      />
      <RelatedProjects relatedProjects={project.relatedProjects} />
      <ProjectFooter footer={project.footer} />
    </main>
  );
}
