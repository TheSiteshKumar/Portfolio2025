"use client";

interface TimelineItemProps {
  title: string;
  subtitle?: string;
  description?: string;
  date: string;
  tags?: string[];
  isExpanded?: boolean;
}

export function TimelineItem({ 
  title, 
  subtitle, 
  description, 
  date, 
  tags,
  isExpanded = false 
}: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8 group">
      {/* Timeline line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-gray-200 group-last:hidden" />
      
      {/* Timeline dot */}
      <div className="absolute left-[-5px] top-2 w-[10px] h-[10px] rounded-full bg-blue-600 ring-4 ring-white" />
      
      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <span className="text-sm font-medium text-blue-600 whitespace-nowrap">{date}</span>
        </div>
        
        {subtitle && (
          <p className="text-gray-600">{subtitle}</p>
        )}
        
        {description && isExpanded && (
          <p className="text-gray-600 text-sm">{description}</p>
        )}
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}