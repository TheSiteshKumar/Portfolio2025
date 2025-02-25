"use client";

import { Layers, TrendingUp, Palette } from "lucide-react";
import { ServiceCard } from "./service-card";

const services = [
  {
    icon: Layers,
    title: "Full-Stack Development",
    description: "Get robust and scalable applications with MongoDB, Express, React, and Node.js, tailored to your business needs.",
    iconColor: "text-orange-600",
    iconBgColor: "bg-orange-50"
  },
  {
    icon: TrendingUp,
    title: "Dynamic Custom APIs",
    description: "I build secure and efficient RESTful APIs, ensuring smooth data flow and integration across your systems.",
    iconColor: "text-blue-600",
    iconBgColor: "bg-blue-50"
  },
  {
    icon: Palette,
    title: "Responsive Design",
    description: "My designs are mobile-friendly and responsive, providing a consistent user experience across all devices.",
    iconColor: "text-green-600",
    iconBgColor: "bg-green-50"
  }
];

export function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.map((service) => (
        <ServiceCard
          key={service.title}
          {...service}
        />
      ))}
    </div>
  );
}