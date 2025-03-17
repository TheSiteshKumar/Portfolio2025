"use client";

import { Progress } from "@/components/ui/progress";
import type { Dream } from "@/lib/data/dreams/types";

interface DreamProgressProps {
  dream: Dream;
}

export function DreamProgress({ dream }: DreamProgressProps) {
  // Calculate progress based on status
  const getProgress = (status: Dream["status"]) => {
    switch (status) {
      case "completed":
        return 100;
      case "in-progress":
        return 50;
      case "planned":
        return 0;
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Progress</h2>
      <div className="space-y-2">
        <Progress value={getProgress(dream.status)} className="h-2" />
        <p className="text-sm text-gray-600">
          {dream.status === "completed" && "This dream has been achieved! 🎉"}
          {dream.status === "in-progress" && "Currently working on this dream 💪"}
          {dream.status === "planned" && "This dream is planned for the future ⭐"}
        </p>
      </div>
    </div>
  );
}