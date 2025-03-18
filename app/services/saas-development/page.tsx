"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {  DollarSign, Star,
  Mail, 
  ArrowLeft, 
  Rocket, 
  Database, 
  Shield, 
  Users, 
  LineChart, 
  Zap,
  Code,
  Server,
  CreditCard,
  BarChart,
  Lock,
  Clock,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  Building2
} from "lucide-react";
import Image from "next/image";

const pricingTiers = [
  {
    title: "Launch",
    price: "$5,000",
    description: "Perfect for startups validating their SaaS idea",
    features: [
      "Core SaaS functionality",
      "1 Payment Gateway",
      "Basic Analytics",
      "Email Support",
      "3-month Warranty"
    ],
    recommended: false
  },
  {
    title: "Scale",
    price: "$12,000",
    description: "For growing businesses needing advanced features",
    features: [
      "Everything in Launch",
      "Advanced RBAC",
      "Multi-tenant Database",
      "Custom Dashboards",
      "Priority Support",
      "6-month Warranty"
    ],
    recommended: true
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations",
    features: [
      "Everything in Scale",
      "White-label Solution",
      "SLA Agreement",
      "Dedicated DevOps",
      "24/7 Support",
      "Custom Integrations"
    ],
    recommended: false
  }
];

const faqs = [
  {
    question: "Do you handle PCI compliance?",
    answer: "Yes - we use Stripe.js to ensure no sensitive data touches your servers."
  },
  {
    question: "Can I migrate from my existing platform?",
    answer: "We provide automated migration scripts for most databases including PostgreSQL and MongoDB."
  },
  {
    question: "What about ongoing maintenance?",
    answer: "All plans include 6 months of free updates and security patches."
  },
  {
    question: "Do you offer hosting?",
    answer: "Yes - we can deploy and manage your SaaS on AWS or Vercel."
  }
];


const features = [
  {
    icon: CreditCard,
    title: "Subscription Engine",
    description: "Complete subscription management with Stripe integration for recurring billing, trials, and dunning.",
    badges: ["PCI-Compliant", "Multi-Currency"]
  },
  {
    icon: BarChart,
    title: "Live Analytics",
    description: "Real-time dashboards tracking MRR, churn rate, user retention, and customer lifetime value.",
    badges: ["Custom Reports", "Forecasting"]
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "SOC2-ready infrastructure with role-based access control, audit logs, and encrypted data.",
    badges: ["GDPR Ready", "Audit Logs"]
  },
  {
    icon: Users,
    title: "Multi-Tenant Architecture",
    description: "Scalable infrastructure supporting multiple organizations with isolated data and customizations.",
    badges: ["Data Isolation", "Custom Domains"]
  },
  {
    icon: Zap,
    title: "Real-Time Features",
    description: "Built-in WebSocket support for live updates, notifications, and collaborative features.",
    badges: ["Low Latency", "Auto-Scaling"]
  },
  {
    icon: Database,
    title: "Data Management",
    description: "Automated backups, migrations, and scalable database architecture for growing datasets.",
    badges: ["Auto Backup", "Easy Migration"]
  }
];

const techStack = [
  {
    category: "Frontend",
    icon: Code,
    items: ["Next.js", "TypeScript", "TailwindCSS"]
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "PostgreSQL", "Redis"]
  },
  {
    category: "DevOps",
    icon: Rocket,
    items: ["Docker", "GitHub Actions", "AWS"]
  }
];

const timeline = [
  {
    phase: "Discovery & Planning",
    duration: "Week 1",
    icon: HelpCircle,
    tasks: [
      "Requirements analysis",
      "Architecture design",
      "Tech stack selection"
    ]
  },
  {
    phase: "Core Development",
    duration: "Weeks 2-3",
    icon: Code,
    tasks: [
      "Authentication system",
      "Core features",
      "Database setup"
    ]
  },
  {
    phase: "Integration & Testing",
    duration: "Week 4",
    icon: CheckCircle,
    tasks: [
      "Third-party integrations",
      "Testing & QA",
      "Performance optimization"
    ]
  }
];

const comparisonPoints = [
  {
    metric: "Time to Launch",
    us: "4 weeks",
    others: "12+ weeks",
    icon: Clock
  },
  {
    metric: "Code Quality",
    us: "Enterprise-grade",
    others: "Varies",
    icon: Shield
  },
  {
    metric: "Support",
    us: "6 months included",
    others: "Extra cost",
    icon: AlertCircle
  }
];

export default function SaaSDevelopmentPage() {
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
    {/* Text Content */}
    <div>
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        SaaS Platform Development
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Build enterprise-ready SaaS solutions with subscription billing, multi-tenant architecture, 
        and real-time analytics. Accelerate your launch with our proven Next.js + Firebase framework.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
          <Link href="/contact" className="flex items-center">
            <Rocket className="mr-2 h-5 w-5" />
            Start Your Project
          </Link>
        </Button>
        <Button variant="outline" asChild size="lg">
          <Link href="/case-studies" className="flex items-center">
            <BarChart className="mr-2 h-5 w-5" />
            View Case Studies
          </Link>
        </Button>
      </div>
    </div>

    {/* Image */}
    <div className="relative h-64 md:h-96">
      <Image
        src="https://www.scnsoft.com/software-development-services/saas-development/saas-development-services_cover-pic.svg"
        alt="SaaS Platform Architecture"
        fill
        className="object-contain"
        priority
      />
    </div>
  </div>
</div>

          {/* Features Grid */}
          <div id="features" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Enterprise-Grade Features
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

          {/* Timeline */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Development Timeline
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {timeline.map((phase, index) => (
                <div key={phase.phase} className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <phase.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{phase.phase}</h3>
                      <p className="text-sm text-blue-600">{phase.duration}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    {phase.tasks.map((task) => (
                      <li key={task} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing & Packages */}
<div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-16">
  <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
    Pricing & Packages
  </h2>
  <div className="grid md:grid-cols-3 gap-8">
    {pricingTiers.map((tier) => (
      <div 
        key={tier.title}
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
            {tier.title}
          </h3>
          <div className="flex items-center justify-center gap-2 mb-4">
            <DollarSign className="w-5 h-5 text-gray-600" />
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


          {/* Comparison */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Why Choose Us?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {comparisonPoints.map((point) => (
                <div key={point.metric} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <point.icon className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold text-gray-900">{point.metric}</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-blue-600" />
                      <p className="text-gray-900">Us: <span className="font-medium">{point.us}</span></p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-gray-400" />
                      <p className="text-gray-600">Others: {point.others}</p>
                    </div>
                  </div>
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
              Ready to Build Your SaaS?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a free technical consultation and project estimate. Let's turn your idea into reality.
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