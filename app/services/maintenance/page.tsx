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
  GitBranch,
  Bell,
  Gauge,
  Bug,
  RefreshCw,
  Settings,
  Headphones
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Bell,
    title: "24/7 Monitoring",
    description: "Continuous monitoring of your application's performance and uptime.",
    badges: ["Alerts", "Uptime", "Logs"]
  },
  {
    icon: Bug,
    title: "Bug Fixes",
    description: "Quick resolution of bugs and issues to maintain smooth operation.",
    badges: ["Hotfix", "Testing", "QA"]
  },
  {
    icon: Shield,
    title: "Security Updates",
    description: "Regular security patches and updates to protect your application.",
    badges: ["Security", "Patches"]
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Continuous improvement of application speed and efficiency.",
    badges: ["Speed", "Optimization"]
  },
  {
    icon: RefreshCw,
    title: "Regular Updates",
    description: "Keeping your application up-to-date with latest technologies.",
    badges: ["Updates", "Upgrades"]
  },
  {
    icon: Headphones,
    title: "Priority Support",
    description: "Dedicated support team for quick issue resolution.",
    badges: ["Support", "Response"]
  }
];

const services = [
  {
    title: "Preventive Maintenance",
    items: [
      "Regular system health checks",
      "Performance monitoring",
      "Security audits",
      "Backup verification"
    ]
  },
  {
    title: "Reactive Support",
    items: [
      "Bug fixes",
      "Emergency response",
      "Issue investigation",
      "Hot fixes deployment"
    ]
  },
  {
    title: "System Updates",
    items: [
      "Security patches",
      "Dependency updates",
      "Feature enhancements",
      "Documentation updates"
    ]
  }
];

const pricingTiers = [
  {
    name: "Basic Support",
    price: "$300",
    period: "per month",
    description: "Essential maintenance for small applications",
    features: [
      "8x5 support coverage",
      "48-hour response time",
      "Monthly health checks",
      "Basic monitoring",
      "Security updates",
      "Email support"
    ],
    recommended: false
  },
  {
    name: "Professional",
    price: "$800",
    period: "per month",
    description: "Comprehensive support for business applications",
    features: [
      "16x5 support coverage",
      "24-hour response time",
      "Weekly health checks",
      "Advanced monitoring",
      "Performance optimization",
      "Priority email & phone support",
      "Monthly reports"
    ],
    recommended: true
  },
  {
    name: "Enterprise",
    price: "$2,000",
    period: "per month",
    description: "Premium support for critical applications",
    features: [
      "24x7 support coverage",
      "4-hour response time",
      "Daily health checks",
      "Premium monitoring",
      "Continuous optimization",
      "Dedicated support team",
      "Custom SLA",
      "Weekly reports"
    ],
    recommended: false
  }
];

const faqs = [
  {
    question: "What's included in the maintenance service?",
    answer: "Our maintenance service includes 24/7 monitoring, bug fixes, security updates, performance optimization, and regular system health checks."
  },
  {
    question: "How quickly do you respond to issues?",
    answer: "Response times vary by plan - from 4 hours for Enterprise to 48 hours for Basic support. Emergency issues are always treated with priority."
  },
  {
    question: "Do you provide regular reports?",
    answer: "Yes! We provide detailed reports on system performance, uptime, resolved issues, and improvements made, with frequency varying by plan."
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Absolutely! You can upgrade your maintenance plan at any time as your needs grow, with pro-rated pricing for the remainder of your term."
  }
];

export default function MaintenancePage() {
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
                  Maintenance & Support
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Keep your application running smoothly with our comprehensive maintenance 
                  and support services. 24/7 monitoring, quick issue resolution, and continuous improvements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                    <Link href="/contact" className="flex items-center">
                      <Headphones className="mr-2 h-5 w-5" />
                      Get Support
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
                  src="https://img.freepik.com/free-vector/organic-flat-customer-support_23-2148881015.jpg"
                  alt="Maintenance & Support"
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
              Support Features
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

          {/* Services Grid */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Our Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.title} className="space-y-4">
                  <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                    <Settings className="w-5 h-5 text-blue-600" />
                    {service.title}
                  </h3>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
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
              Support Plans
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
                      <span className="text-gray-600">{tier.period}</span>
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
              Need Support for Your Application?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your maintenance needs and find the perfect support plan for your application.
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