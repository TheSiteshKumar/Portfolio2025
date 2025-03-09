"use client";

import { useState } from "react";
import { ProjectCard } from "./project-card";
import { projects } from "@/lib/data/projects";

// Get unique tags from all projects
const allTags = Array.from(
  new Set(projects.flatMap((project) => project.tags))
).sort();

export function ProjectsGrid() {
  const [selectedTag, setSelectedTag] = useState("All");
  
  const filteredProjects = projects.filter(project => 
    selectedTag === "All" || project.tags.includes(selectedTag)
  );

  return (
    <div className="space-y-8">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedTag("All")}
          className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
            selectedTag === "All"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              selectedTag === tag
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}