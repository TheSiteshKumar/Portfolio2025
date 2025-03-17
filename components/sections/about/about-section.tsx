"use client";

import { PersonalDetails } from "./personal-details";

export function AboutSection() {
  return (
    <section className="container mx-auto px-4 py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
            <p className="text-gray-600 leading-relaxed">
              I am a passionate Full Stack Developer with over 3 years of experience 
              in creating beautiful and functional web applications.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing my knowledge through 
              technical writing and mentoring.
            </p>
          </div>
          
          <PersonalDetails />
        </div>
      </div>
    </section>
  );
}