"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  DollarSign,
  Star,
  Mail,
  ArrowLeft,
  Rocket,
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
  MessageSquare,
  Activity,
  Radio,
  Bell,
  Gauge,
  Database
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Zap,
    title: "Real-Time Updates",
    description: "Instant data synchronization across all connected clients with zero latency.",
    badges: ["Live Sync", "No Refresh"]
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Built-in messaging system with typing indicators and online presence.",
    badges: ["Chat", "Notifications"]
  },
  {
    icon: Activity,
    title: "Live Analytics",
    description: "Real-time dashboards and metrics that update automatically.",
    badges: ["Analytics", "Monitoring"]
  },
  {
    icon: Radio,
    title: "WebSocket Integration",
    description: "Efficient bi-directional communication for instant data flow.",
    badges: ["WebSocket", "Events"]
  },
  {
    icon: Bell,
    title: "Push Notifications",
    description: "Instant alerts and notifications across all devices.",
    badges: ["Notifications", "Multi-device"]
  },
  {
    icon: Shield,
    title: "Secure Architecture",
    description: "Enterprise-grade security with Firebase Authentication and Rules.",
    badges: ["Security", "Encryption"]
  }
];

const useCases = [
  {
    title: "Chat Applications",
    description: "Real-time messaging with typing indicators and presence",
    icon: MessageSquare
  },
  {
    title: "Live Dashboards",
    description: "Auto-updating analytics and monitoring",
    icon: Activity
  },
  {
    title: "Collaborative Tools",
    description: "Multi-user editing and real-time collaboration",
    icon: Users
  },
  {
    title: "Gaming Applications",
    description: "Multiplayer games with real-time state sync",
    icon: Rocket
  }
];

const techStack = [
  {
    category: "Real-Time Backend",
    icon: Database,
    items: [
      "Firebase Realtime Database",
      "Cloud Firestore",
      "WebSocket Server"
    ]
  },
  {
    category: "Frontend",
    icon: Zap,
    items: [
      "React.js Hooks",
      "WebSocket Client",
      "Server-Sent Events"
    ]
  },
  {
    category: "Infrastructure",
    icon: Shield,
    items: [
      "Firebase Authentication",
      "Security Rules",
      "Cloud Functions"
    ]
  }
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$4,999",
    description: "Perfect for small real-time applications",
    features: [
      "Real-time data sync",
      "Basic authentication",
      "Up to 100 concurrent users",
      "Basic notifications",
      "Email support"
    ],
    recommended: false
  },
  {
    name: "Professional",
    price: "$9,999",
    description: "For growing applications with advanced features",
    features: [
      "Everything in Starter",
      "Advanced authentication",
      "Up to 1000 concurrent users",
      "Push notifications",
      "Custom analytics dashboard",
      "Priority support"
    ],
    recommended: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale applications",
    features: [
      "Everything in Professional",
      "Unlimited concurrent users",
      "Custom features",
      "SLA guarantee",
      "24/7 support",
      "Dedicated account manager"
    ],
    recommended: false
  }
];

const faqs = [
  {
    question: "How do you ensure real-time performance?",
    answer: "We use Firebase Realtime Database and WebSocket connections to ensure sub-100ms latency for data updates. Our architecture is optimized for instant synchronization across all connected clients."
  },
  {
    question: "Can the application handle high user loads?",
    answer: "Yes! Our real-time applications are built on Firebase's scalable infrastructure, capable of handling thousands of concurrent connections with automatic scaling."
  },
  {
    question: "What about offline support?",
    answer: "We implement offline data persistence and automatic reconnection handling. Users can continue using the app offline, and all changes sync when they're back online."
  },
  {
    question: "How secure is the real-time communication?",
    answer: "We implement enterprise-grade security with Firebase Authentication, custom security rules, and encrypted WebSocket connections. All data is encrypted in transit and at rest."
  }
];

export default function RealTimeAppsPage() {
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
                  Real-Time Applications
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Build lightning-fast real-time applications with instant data synchronization. 
                  Perfect for chat apps, live dashboards, and collaborative tools.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                    <Link href="/contact" className="flex items-center">
                      <Zap className="mr-2 h-5 w-5" />
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
                  src="https://www.applicationnexus.com/wp-content/uploads/2020/03/web-application-development.svg"
                  alt="Real-Time Applications"
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
              Real-Time Features
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

          {/* Use Cases */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Perfect For
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase) => (
                <div key={useCase.title} className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <useCase.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-gray-600 text-sm">{useCase.description}</p>
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
              Transparent Pricing
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingTiers.map((tier) => (
                <div 
                  key={tier.name}
                  className={`relative p-6 rounded-xl border ${
                    tier.recommended 
                      ? 'border-blue-500 bg-blue-50/50' 
                      : 'border-gray-200'
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
              Ready to Build Your Real-Time App?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Get started with instant data synchronization and real-time features.
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