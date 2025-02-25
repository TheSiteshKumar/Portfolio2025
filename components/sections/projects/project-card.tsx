"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  url: string;
  icon: string;
  technologies: string[];
}

export function ProjectCard({ title, url, icon, technologies }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
      <div className="flex items-start gap-4">
        <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={icon}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg font-semibold text-gray-900 truncate">{title}</h3>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors"
              aria-label={`Visit ${title} website`}
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
          
          <a 
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-600 hover:text-blue-600 transition-colors truncate block mt-1"
          >
            {url}
          </a>
          
          <div className="flex flex-wrap gap-2 mt-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}