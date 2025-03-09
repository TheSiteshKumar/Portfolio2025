"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/data/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-gray-200 hover:border-gray-300">
      {/* Project Image with Container */}
      <div className="relative aspect-video w-full border-b border-gray-100 bg-gray-50 p-1.5">
        <div className="relative h-full w-full overflow-hidden rounded-lg">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/5 to-gray-900/0" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
          <p className="text-gray-600 line-clamp-2 text-[15px] leading-snug">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="font-medium bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full border border-blue-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <Button asChild className="flex-1 bg-blue-600 text-white hover:bg-blue-700 shadow-sm">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          </Button>
          <Button 
            variant="outline" 
            asChild 
            className="flex-1 border-gray-300 hover:bg-gray-50 text-gray-700"
          >
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <Github className="w-4 h-4" />
              Source Code
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}