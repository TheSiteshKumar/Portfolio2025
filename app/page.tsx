import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about/about-section";
import { SkillsSection } from "@/components/sections/skills/skills-section";
import { ServicesSection } from "@/components/sections/services/services-section";
import { TimelineSection } from "@/components/sections/timeline/timeline-section";
import { ProjectsSection } from "@/components/sections/projects/projects-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <TimelineSection />
      <ProjectsSection />
    </div>
  );
}