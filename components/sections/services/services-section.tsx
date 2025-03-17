"use client";

import { ServicesGrid } from "./services-grid";

export function ServicesSection() {
  return (
    <section className="container mx-auto px-4 py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-blue-600 mb-2 uppercase tracking-wider">
            SERVICES
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Professional Development Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From MVP development to enterprise solutions, I offer comprehensive web development 
            services using Next.js and Firebase. Each service includes consultation, 
            development, and post-launch support.
          </p>
        </div>
        <ServicesGrid />
      </div>
    </section>
  );
}