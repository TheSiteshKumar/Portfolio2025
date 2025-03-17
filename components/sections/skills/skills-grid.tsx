"use client";

import { SkillCard } from "./skill-card";

const skills = [
  {
    name: "Next.js",
    experience: "1 Year Experience",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg"
  },
  {
    name: "React.js",
    experience: "2 Years Experience",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
  },
  {
    name: "Supabase",
    experience: "6 Months Experience",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/supabase/supabase-original.svg"
  },
  {
    name: "Firebase",
    experience: "1 Year Experience",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg"
  },
  {
    name: "JavaScript",
    experience: "3 Years Experience",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
  },
  {
    name: "Node.js",
    experience: "3 Months Experience",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
  }
];

export function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {skills.map((skill) => (
        <SkillCard
          key={skill.name}
          name={skill.name}
          experience={skill.experience}
          icon={skill.icon}
        />
      ))}
    </div>
  );
}