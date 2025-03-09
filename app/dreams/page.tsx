"use client";

import { DreamsGrid } from "@/components/sections/dreams/dreams-grid";

export default function DreamsPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-blue-600 mb-2 uppercase tracking-wider">
              ASPIRATIONS
            </p>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">51 Dreams</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A collection of life goals and aspirations, ranging from personal
              development to adventure and contribution to society.
            </p>
          </div>

          <DreamsGrid />
        </div>
      </div>
    </div>
  );
}