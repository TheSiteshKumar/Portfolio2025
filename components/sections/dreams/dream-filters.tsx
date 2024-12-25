"use client";

import { useState } from 'react';
import { DreamCategory, DreamStatus } from '@/lib/data/dreams/types';
import { dreamCategories } from '@/lib/data/dreams/categories';
import { statusFilters, getStatusLabel } from '@/lib/data/dreams/filters';

interface DreamFiltersProps {
  onFilterChange: (status: DreamStatus | 'all', category: DreamCategory | 'all') => void;
  activeStatus: DreamStatus | 'all';
  activeCategory: DreamCategory | 'all';
}

export function DreamFilters({ onFilterChange, activeStatus, activeCategory }: DreamFiltersProps) {
  return (
    <div className="space-y-6">
      {/* Status Filters */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-700">Status</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onFilterChange('all', activeCategory)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              activeStatus === 'all'
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            All
          </button>
          {statusFilters.map((status) => (
            <button
              key={status}
              onClick={() => onFilterChange(status, activeCategory)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                activeStatus === status
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {getStatusLabel(status)}
            </button>
          ))}
        </div>
      </div>

      {/* Category Filters */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-700">Categories</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onFilterChange(activeStatus, 'all')}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              activeCategory === 'all'
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            All Categories
          </button>
          {Object.entries(dreamCategories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => onFilterChange(activeStatus, key as DreamCategory)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                activeCategory === key
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}