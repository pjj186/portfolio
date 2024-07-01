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
      <SkillSection />
      <EducationSection />
      <ProjectsSection />
      <OtherExperienceSection />
    </>
  );
}
