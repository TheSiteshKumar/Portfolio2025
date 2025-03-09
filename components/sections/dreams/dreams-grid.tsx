"use client";

import { useState } from "react";
import { DreamCard } from "./dream-card";
import { DreamFilters } from "./dream-filters";
import { dreams } from "@/lib/data/dreams/dreams-data";
import { DreamCategory, DreamStatus } from "@/lib/data/dreams/types";

export function DreamsGrid() {
  const [activeStatus, setActiveStatus] = useState<DreamStatus | "all">("all");
  const [activeCategory, setActiveCategory] = useState<DreamCategory | "all">("all");

  const filteredDreams = dreams.filter(
    (dream) =>
      (activeStatus === "all" || dream.status === activeStatus) &&
      (activeCategory === "all" || dream.category === activeCategory)
  );

  const handleFilterChange = (
    status: DreamStatus | "all",
    category: DreamCategory | "all"
  ) => {
    setActiveStatus(status);
    setActiveCategory(category);
  };

  return (
    <div className="space-y-8">
      <DreamFilters
        onFilterChange={handleFilterChange}
        activeStatus={activeStatus}
        activeCategory={activeCategory}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDreams.map((dream) => (
          <DreamCard key={dream.id} dream={dream} />
        ))}
      </div>
    </div>
  );
}