"use client";

import { ProjectsGrid } from "./projects-grid";

export function ProjectsSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-blue-600 mb-2 uppercase tracking-wider">
            PORTFOLIO
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my technical projects, ranging from web applications to tools and experiments.
            Each project represents a unique challenge and learning experience.
          </p>
        </div>
        
        <ProjectsGrid />
      </div>
    </section>
  );
}