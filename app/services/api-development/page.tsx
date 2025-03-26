"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  DollarSign,
  Star,
  Mail,
  ArrowLeft,
  Rocket,
  Code,
  Server,
  Zap,
  Users,
  LineChart,
  Shield,
  Clock,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  Building2,
  Database,
  Lock,
  Webhook,
  Layers,
  GitBranch
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Code,
    title: "RESTful & GraphQL APIs",
    description: "Design and implement scalable APIs following best practices and industry standards.",
    badges: ["REST", "GraphQL", "OpenAPI"]
  },
  {
    icon: Lock,
    title: "Secure Authentication",
    description: "Robust authentication with JWT, OAuth2, and role-based access control.",
    badges: ["JWT", "OAuth2", "RBAC"]
  },
  {
    icon: Webhook,
    title: "Third-Party Integrations",
    description: "Seamless integration with payment gateways, maps, and external services.",
    badges: ["Stripe", "Maps", "OpenAI"]
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Optimized database schemas and queries for high performance.",
    badges: ["PostgreSQL", "Firebase"]
  },
  {
    icon: Shield,
    title: "Security & Validation",
    description: "Input validation, rate limiting, and security best practices.",
    badges: ["Security", "Validation"]
  },
  {
    icon: GitBranch,
    title: "Version Control",
    description: "API versioning and documentation for seamless updates.",
    badges: ["Versioning", "Docs"]
  }
];

const techStack = [
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "Next.js API"]
  },
  {
    category: "Database",
    icon: Database,
    items: ["PostgreSQL", "Firebase", "Redis"]
  },
  {
    category: "Tools",
    icon: Webhook,
    items: ["Swagger", "Postman", "Jest"]
  }
];

const pricingTiers = [
  {
    name: "Basic API",
    price: "$1,500",
    description: "Perfect for MVPs and small projects",
    features: [
      "RESTful API endpoints",
      "Basic authentication",
      "Database integration",
      "API documentation",
      "2 third-party integrations",
      "1-month support"
    ],
    recommended: false
  },
  {
    name: "Professional",
    price: "$3,500",
    description: "For growing businesses needing advanced features",
    features: [
      "Everything in Basic",
      "GraphQL support",
      "OAuth2 authentication",
      "Rate limiting",
      "Advanced caching",
      "5 third-party integrations",
      "3-month support"
    ],
    recommended: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Custom solutions for large organizations",
    features: [
      "Everything in Professional",
      "Custom integrations",
      "Load balancing",
      "High availability setup",
      "Performance optimization",
      "24/7 priority support",
      "SLA guarantee"
    ],
    recommended: false
  }
];

const faqs = [
  {
    question: "What type of APIs do you build?",
    answer: "We specialize in both RESTful and GraphQL APIs, built with Node.js and Next.js. Our APIs are scalable, secure, and follow industry best practices."
  },
  {
    question: "How do you handle API security?",
    answer: "We implement multiple security layers including JWT authentication, OAuth2, rate limiting, input validation, and role-based access control (RBAC)."
  },
  {
    question: "Do you provide API documentation?",
    answer: "Yes! All our APIs come with comprehensive documentation using OpenAPI/Swagger, including detailed endpoint descriptions and example requests."
  },
  {
    question: "Can you integrate with existing systems?",
    answer: "Absolutely. We have extensive experience integrating with various third-party services, payment gateways, and existing internal systems."
  }
];

export default function APIDevPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Navigation */}
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
                <h1 className="text-4xl font-bold text-blue-600 mb-6">
                  API Development
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Build robust, scalable, and secure APIs that power your applications. 
                  From RESTful to GraphQL, we create APIs that meet your business needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                    <Link href="/contact" className="flex items-center">
                      <Rocket className="mr-2 h-5 w-5" />
                      Start Your Project
                    </Link>
                  </Button>
                  <Button variant="outline" asChild size="lg">
                    <Link href="/projects" className="flex items-center">
                      <LineChart className="mr-2 h-5 w-5" />
                      View Case Studies
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative h-64 md:h-96">
                <Image
                  src="https://img.freepik.com/free-vector/gradient-api-infographic_23-2149371582.jpg"
                  alt="API Development"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              API Features & Capabilities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {feature.badges.map((badge) => (
                      <span 
                        key={badge}
                        className="px-2.5 py-0.5 text-xs font-medium bg-blue-50 text-blue-600 rounded-full"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Technology Stack
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {techStack.map((stack) => (
                <div key={stack.category} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <stack.icon className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold text-gray-900">
                      {stack.category}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {stack.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              API Development Packages
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingTiers.map((tier) => (
                <div 
                  key={tier.name}
                  className={`relative p-6 rounded-xl border ${
                    tier.recommended 
                      ? 'border-blue-500 bg-blue-50/50' 
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  {tier.recommended && (
                    <div className="absolute top-0 right-0 -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {tier.name}
                    </h3>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-3xl font-bold text-gray-900">
                        {tier.price}
                      </span>
                    </div>
                    <p className="text-gray-600">{tier.description}</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature) => (
                      <li 
                        key={feature}
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    className={`w-full ${
                      tier.recommended 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : 'bg-gray-900 hover:bg-gray-800'
                    }`}
                  >
                    <Link href="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                  </div>
                  <p className="text-gray-600 pl-8">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Build Your API?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your API requirements and create a solution that perfectly fits your needs.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="/contact" className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                Contact for Details
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}