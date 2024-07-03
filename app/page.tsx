import {
  EducationSection,
  ExperienceSection,
  IntroduceSection,
  OtherExperienceSection,
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
      <EducationSection />
      <OtherExperienceSection />
    </>
  );
}
