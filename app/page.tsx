import {
  CertificateSection,
  ExperienceSection,
  IntroduceSection,
  ProjectsSection,
  SkillSection,
} from "@components/sections";

export default function Home() {
  return (
    <>
      <IntroduceSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillSection />
      <CertificateSection />
    </>
  );
}
