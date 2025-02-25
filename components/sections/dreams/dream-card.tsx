"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Dream } from "@/lib/data/dreams/types";

interface DreamCardProps {
  dream: Dream;
}

const statusColors = {
  completed: "bg-green-100 text-green-800",
  "in-progress": "bg-blue-100 text-blue-800",
  planned: "bg-gray-100 text-gray-800"
};

export function DreamCard({ dream }: DreamCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group relative">
      {/* Dream Number Badge */}
      <div className="absolute top-3 left-3 z-10">
        <Badge className="bg-white/90 text-gray-900 backdrop-blur-sm border shadow-sm">
          {dream.id}
        </Badge>
      </div>

      <div className="relative aspect-[4/3]">
        <Image
          src={dream.imageUrl}
          alt={dream.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-gray-900">{dream.title}</h3>
          <Badge className={cn(statusColors[dream.status], "capitalize")}>
            {dream.status.replace("-", " ")}
          </Badge>
        </div>
        {dream.description && (
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">{dream.description}</p>
        )}
      </CardContent>
    </Card>
  );
}