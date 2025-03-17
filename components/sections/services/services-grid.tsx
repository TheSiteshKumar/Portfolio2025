"use client";

import { Code2, Rocket, Blocks, Gauge, Database, Lock } from "lucide-react";
import { ServiceCard } from "./service-card";

const services = [
  {
    icon: Code2,
    title: "Web App Development",
    description: "Build scalable web apps with Next.js SSR + Firebase Realtime DB. Optimized for performance and SEO.",
    iconColor: "text-blue-600",
    iconBgColor: "bg-blue-100/50",
    href: "/services/web-development",
    pricing: "Starting at $80/hour"
  },
  {
    icon: Database,
    title: "SaaS Solutions",
    description: "End-to-end SaaS platforms with subscription billing & analytics. Complete business solution.",
    iconColor: "text-amber-600",
    iconBgColor: "bg-amber-100/50",
    href: "/services/saas-development",
    pricing: "Fixed pricing from $5k"
  },
  {
    icon: Rocket,
    title: "MVP Development",
    description: "Launch your MVP in 4 weeks with Next.js + Firebase. Includes hosting & basic SEO.",
    iconColor: "text-green-600",
    iconBgColor: "bg-green-100/50",
    href: "/services/mvp-development",
    pricing: "Starting from $3k"
  },
  {
    icon: Blocks,
    title: "Real-Time Applications",
    description: "Live chat, dashboards, or multiplayer apps with Firebase Firestore. Free 1-week support.",
    iconColor: "text-purple-600",
    iconBgColor: "bg-purple-100/50",
    href: "/services/realtime-apps",
    pricing: "Custom pricing"
  },
  {
    icon: Lock,
    title: "API Development",
    description: "REST/GraphQL APIs + third-party integrations (Stripe, Maps, OpenAI). Secure and scalable.",
    iconColor: "text-red-600",
    iconBgColor: "bg-red-100/50",
    href: "/services/api-development",
    pricing: "From $1.5k/project"
  },
  {
    icon: Gauge,
    title: "Maintenance & Support",
    description: "Monthly retainer for updates, bug fixes, and 24/7 Firebase monitoring. Priority support.",
    iconColor: "text-indigo-600",
    iconBgColor: "bg-indigo-100/50",
    href: "/services/maintenance",
    pricing: "From $300/month"
  }
];

export function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <ServiceCard
          key={service.title}
          {...service}
        />
      ))}
    </div>
  );
}

export { services }