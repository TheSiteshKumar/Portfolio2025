"use client";

import Link from "next/link";
import { DivideIcon as LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  iconColor: string;
  iconBgColor: string;
  href: string;
  pricing: string;
}

export function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  iconColor, 
  iconBgColor,
  href,
  pricing 
}: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all group border border-gray-100">
      <div className={`w-12 h-12 rounded-lg ${iconBgColor} flex items-center justify-center mb-4`}>
        <Icon className={`w-6 h-6 ${iconColor}`} />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
      <div className="space-y-4">
        <p className="text-sm font-medium text-blue-600">{pricing}</p>
        <Button asChild variant="outline" className="w-full group-hover:bg-blue-50">
          <Link href={href} className="flex items-center justify-center">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
}