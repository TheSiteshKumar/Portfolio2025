"use client";

import { ProjectsGrid } from "./projects-grid";

export function ProjectsSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-blue-600 mb-2 uppercase tracking-wider">WORK</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">My Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning.
          </p>
        </div>
        
        <ProjectsGrid />
      </div>
    </section>
  );
}