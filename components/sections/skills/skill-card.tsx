"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  name: string;
  experience: string;
  icon: string;
  className?: string;
}

export function SkillCard({ name, experience, icon, className }: SkillCardProps) {
  return (
    <div className={cn(
      "flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm transition-all hover:shadow-md",
      className
    )}>
      <div className="relative w-12 h-12">
        <Image
          src={icon}
          alt={name}
          fill
          className="object-contain"
        />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600">{experience}</p>
      </div>
    </div>
  );
}