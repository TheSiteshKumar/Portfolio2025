"use client";

import { useState } from "react";
import { ProjectCard } from "./project-card";

const projects = [
  {
    title: "Auto Drive Project",
    url: "https://abcd-Example.com",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg",
    technologies: ["ANGULAR", "REACT", "JQUERY"]
  },
  {
    title: "Auto Drive Project",
    url: "https://abcd-Example.com",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
    technologies: ["BOOTSTRAP", "CSS", "JAVASCRIPT"]
  },
  {
    title: "Auto Drive Project",
    url: "https://abcd-Example.com",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    technologies: ["MONGODB", "JAVASCRIPT"]
  },
  {
    title: "Auto Drive Project",
    url: "https://abcd-Example.com",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg",
    technologies: ["VUE", "JAVASCRIPT"]
  },
  {
    title: "Auto Drive Project",
    url: "https://abcd-Example.com",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    technologies: ["REACT", "JAVASCRIPT"]
  }
];

const allTechnologies = Array.from(
  new Set(projects.flatMap(project => project.technologies))
).sort();

export function ProjectsGrid() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  
  const filteredProjects = projects.filter(project => 
    selectedFilter === "All" || project.technologies.includes(selectedFilter)
  );

  return (
    <div className="space-y-8">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedFilter("All")}
          className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
            selectedFilter === "All"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          All
        </button>
        {allTechnologies.map((tech) => (
          <button
            key={tech}
            onClick={() => setSelectedFilter(tech)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              selectedFilter === tech
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
          />
        ))}
      </div>
    </div>
  );
}