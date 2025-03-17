"use client";

import { SkillsGrid } from "./skills-grid";

export function SkillsSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">Skills & Experience</h2>
            <p className="text-gray-600">
              A showcase of my technical expertise and experience across various technologies
            </p>
          </div>
          <SkillsGrid />
        </div>
      </div>
    </section>
  );
}