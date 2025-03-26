"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Mail, 
  ArrowLeft, 
  Check, 
  Clock, 
  Package, 
  Rocket, 
  Zap, 
  Shield, 
  Gauge, 
  Award,
  Code,
  Globe,
  Server,
  Database,
  Smartphone,
  Search,
  LineChart,
  Headphones as HeadphonesIcon,
  Key,
  Settings
} from "lucide-react";
import Image from "next/image";

// Features with icons remain unchanged
const features = [
  {
    icon: Globe,
    text: "Next.js SSR/SSG Frontend"
  },
  {
    icon: Key,
    text: "Firebase Auth + Firestore"
  },
  {
    icon: Smartphone,
    text: "Responsive Design (Mobile-first)"
  },
  {
    icon: Search,
    text: "SEO Optimization"
  },
  {
    icon: LineChart,
    text: "Performance Monitoring"
  },
  {
    icon: HeadphonesIcon,
    text: "1-Month Post-launch Support"
  }
];

// Pricing plans updated with improved copy
const pricingPlans = [
  {
    name: "Hourly Rate",
    price: "$80",
    unit: "per hour",
    description: "Perfect for ongoing development and maintenance",
    icon: Clock,
    features: [
      "Flexible scope",
      "Regular updates",
      "Direct communication",
      "Quick iterations"
    ]
  },
  {
    name: "Fixed Price",
    price: "$5k-20k",
    unit: "per project",
    description: "Ideal for defined scope projects",
    icon: Package,
    features: [
      "Clear deliverables",
      "Milestone-based payments",
      "Regular progress updates",
      "Fixed timeline"
    ]
  },
  {
    name: "Maintenance",
    price: "$300",
    unit: "per month",
    description: "Ongoing support and maintenance",
    icon: Settings,
    features: [
      "24/7 monitoring",
      "Bug fixes",
      "Performance optimization",
      "Security updates"
    ]
  }
];

// Timeline updated with a two-column flex layout to better utilize left space
const timeline = [
  {
    title: "Discovery Phase",
    duration: "1 week",
    icon: Search,
    tasks: [
      "Requirements gathering",
      "Technical planning",
      "Architecture design"
    ]
  },
  {
    title: "Development",
    duration: "3-6 weeks",
    icon: Code,
    tasks: [
      "Frontend development",
      "Backend integration",
      "Feature implementation"
    ]
  },
  {
    title: "Testing & Launch",
    duration: "1 week",
    icon: Rocket,
    tasks: [
      "Quality assurance",
      "Performance testing",
      "Deployment"
    ]
  }
];

const techStack = {
  nextjs: {
    title: "Next.js Benefits",
    icon: Code,
    features: [
      { text: "Server-Side Rendering for SEO", icon: Globe },
      { text: "Static Site Generation for speed", icon: Server },
      { text: "Automatic code splitting", icon: Database },
      { text: "Built-in image optimization", icon: Smartphone }
    ]
  },
  firebase: {
    title: "Firebase Features",
    icon: Shield,
    features: [
      { text: "Real-time database updates", icon: Zap },
      { text: "Secure authentication flows", icon: Key },
      { text: "Scalable cloud functions", icon: Settings },
      { text: "Global CDN hosting", icon: Award }
    ]
  },
  advantages: {
    title: "Combined Advantages",
    icon: Award,
    features: [
      { text: "Rapid MVP development", icon: Rocket },
      { text: "Cost-effective scaling", icon: Clock },
      { text: "Enterprise-grade security", icon: Shield },
      { text: "Global performance", icon: LineChart }
    ]
  }
};

const uniqueFeatures = [
  {
    icon: Gauge,
    title: "Free Performance Audit",
    description: "30-minute Firebase optimization consultation at no cost"
  },
  {
    icon: Award,
    title: "Guaranteed Scores",
    description: "Minimum Lighthouse performance score of 90+"
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Enterprise-grade security with Firebase Auth"
  }
];

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back Navigation */}
          <Link 
            href="/services" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>

          {/* Hero Section */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold text-blue-600 mb-6">Web App Development</h1>
                <p className="text-lg text-gray-600 mb-8">
                  Build scalable web applications with Next.js SSR + Firebase Realtime DB. 
                  Optimized for performance and SEO, with a focus on user experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                    <Link href="/contact" className="flex items-center">
                      <Mail className="mr-2 h-5 w-5" />
                      Get Started
                    </Link>
                  </Button>
                  <Button variant="outline" asChild size="lg">
                    <Link href="/projects">
                      View Related Projects
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-64 md:h-full">
                <Image
                  src="https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg"
                  alt="Web Development Illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Tech Stack Showcase */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Tech Stack Showcase</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(techStack).map(([key, stack]) => (
                <div key={key} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2 mb-4">
                    <stack.icon className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900">{stack.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {stack.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <feature.icon className="w-4 h-4 text-blue-600 mr-2" />
                        <span className="text-gray-600">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">What's Included</h2>
              <ul className="space-y-4">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <feature.icon className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <span className="text-gray-600">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Deliverables</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Package className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Complete Codebase</p>
                    <p className="text-gray-600">Hosted on GitHub/GitLab with documentation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Rocket className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Deployment</p>
                    <p className="text-gray-600">Vercel + Firebase Hosting setup</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Training & Support</p>
                    <p className="text-gray-600">1hr onboarding session + 30-day support</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Unique Value Proposition */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {uniqueFeatures.map((feature) => (
                <div key={feature.title} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <feature.icon className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Options */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Pricing Options</h2>

            {/* Primary Pricing Options */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {pricingPlans.filter(plan => plan.name !== "Maintenance").map((plan) => (
                <div key={plan.name} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <plan.icon className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-blue-600">{plan.price}</span>
                    <span className="text-gray-600"> {plan.unit}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="w-4 h-4 text-blue-600 mr-2" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Maintenance Option in a Larger Card */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 w-full">
              {pricingPlans.filter(plan => plan.name === "Maintenance").map((plan) => (
                <div key={plan.name} className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="md:w-1/3">
                    <div className="flex items-center gap-2 mb-2">
                      <plan.icon className="w-6 h-6 text-blue-600" />
                      <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                      <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-xs font-medium">Optional</span>
                    </div>
                    <div className="mb-2">
                      <span className="text-2xl font-bold text-blue-600">{plan.price}</span>
                      <span className="text-gray-600"> {plan.unit}</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                  <div className="md:w-2/3">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <Check className="w-4 h-4 text-blue-600 mr-2" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

{/* Horizontal Project Timeline */}
<div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
    Development Roadmap
  </h2>
  
  <div className="flex flex-col md:flex-row items-stretch justify-center">
    {timeline.map((phase, index) => (
      <div
        key={phase.title}
        className="flex flex-col md:flex-row items-center relative mb-8 md:mb-0 group"
      >
        {/* Timeline Step Container */}
        <div className="flex flex-col items-center text-center w-full md:w-[280px] px-4">
          {/* Icon Circle */}
          <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4 
          shadow-sm border border-blue-100 transition-all group-hover:scale-105">
            <phase.icon className="w-6 h-6 text-blue-600" />
          </div>

          {/* Content */}
          <div className="space-y-2">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 leading-tight">
              {phase.title}
            </h3>
            <p className="text-blue-600 text-sm font-medium mb-2">
              {phase.duration}
            </p>
            
            {/* Task List */}
            <ul className="mt-2 space-y-2 text-left mx-auto max-w-[240px]">
              {phase.tasks.map((task, idx) => (
                <li 
                  key={idx} 
                  className="text-gray-600 text-sm flex items-start"
                >
                  <svg 
                    className="flex-shrink-0 w-4 h-4 text-blue-500 mr-2 mt-0.5" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                  <span className="leading-relaxed">{task}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Connectors */}
        {index < timeline.length - 1 && (
          <>
            {/* Desktop Line */}
            <div className="hidden md:block absolute top-[28%] right-[-35%] w-[30%] h-px bg-gradient-to-r from-blue-100 to-transparent" />
            
            {/* Mobile Line */}
            <div className="md:hidden w-px h-8 bg-gradient-to-b from-blue-100 to-transparent my-4" />
          </>
        )}
      </div>
    ))}
  </div>
</div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a custom solution that meets your needs.
            </p>
            <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
              <Link href="/contact" className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                Contact for Details
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
