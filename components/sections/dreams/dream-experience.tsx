"use client";

import { CalendarDays, Clock, MapPin } from "lucide-react";
import type { Dream } from "@/lib/data/dreams/types";

interface DreamExperienceProps {
  dream: Dream;
}

export function DreamExperience({ dream }: DreamExperienceProps) {
  // This would typically come from your data, adding placeholder for now
  const experience = {
    date: "Coming soon",
    duration: "To be determined",
    location: "To be determined",
    story: "This section will be updated with personal experiences and stories once progress is made on this dream.",
    learnings: [
      "Every dream teaches us something valuable",
      "The journey is as important as the destination",
      "Persistence and patience are key to achieving our dreams"
    ]
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Experience & Learnings</h2>
      
      {/* Meta Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-2 text-gray-600">
          <CalendarDays className="w-5 h-5" />
          <span>{experience.date}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Clock className="w-5 h-5" />
          <span>{experience.duration}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin className="w-5 h-5" />
          <span>{experience.location}</span>
        </div>
      </div>

      {/* Story */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">The Story</h3>
        <p className="text-gray-600">{experience.story}</p>
      </div>

      {/* Key Learnings */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">Key Learnings</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {experience.learnings.map((learning, index) => (
            <li key={index}>{learning}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}