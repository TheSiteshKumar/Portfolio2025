"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Badge ,
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
  Layers,
  Target,
  Sparkles,
  Repeat,
  Gauge
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Rocket,
    title: "4-Week Launch",
    description: "Get your MVP to market in just 4 weeks with our proven rapid development process.",
    badges: ["Fast Delivery", "Market Ready"]
  },
  {
    icon: Target,
    title: "Core Features Focus",
    description: "Identify and build only the essential features that validate your business hypothesis.",
    badges: ["Feature Prioritization", "Value Focus"]
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "Built on Next.js and Firebase for easy scaling as your user base grows.",
    badges: ["Future-Proof", "Cloud-Ready"]
  },
  {
    icon: Sparkles,
    title: "Modern UI/UX",
    description: "Clean, professional design that works across all devices and screen sizes.",
    badges: ["Responsive", "User-Friendly"]
  },
  {
    icon: Repeat,
    title: "Iterative Development",
    description: "Weekly updates and iterations based on your feedback and testing results.",
    badges: ["Agile Process", "Quick Updates"]
  },
  {
    icon: Gauge,
    title: "Performance Optimized",
    description: "Fast loading times and smooth user experience from day one.",
    badges: ["Speed Focus", "SEO Ready"]
  }
];

const techStack = [
  {
    category: "Frontend",
    icon: Code,
    items: ["Next.js", "React", "TailwindCSS"]
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Firebase", "Node.js", "REST APIs"]
  },
  {
    category: "DevOps",
    icon: Rocket,
    items: ["Vercel", "GitHub", "CI/CD"]
  }
];

const timeline = [
  {
    phase: "Week 1: Planning & Setup",
    duration: "7 days",
    icon: Target,
    tasks: [
      "Requirements analysis",
      "Feature prioritization",
      "Technical architecture",
      "Project setup"
    ]
  },
  {
    phase: "Week 2-3: Development",
    duration: "14 days",
    icon: Code,
    tasks: [
      "Core feature development",
      "UI/UX implementation",
      "API integration",
      "Daily progress updates"
    ]
  },
  {
    phase: "Week 4: Testing & Launch",
    duration: "7 days",
    icon: Rocket,
    tasks: [
      "Quality assurance",
      "User testing",
      "Performance optimization",
      "Production deployment"
    ]
  }
];

const deliverables = [
  {
    title: "Source Code",
    description: "Complete codebase with documentation"
  },
  {
    title: "Deployment",
    description: "Production-ready deployment on Vercel"
  },
  {
    title: "Documentation",
    description: "Technical and user documentation"
  },
  {
    title: "Training",
    description: "2-hour handover and training session"
  }
];

const faqs = [
  {
    question: "What's included in the MVP package?",
    answer: "Our MVP package includes requirements analysis, UI/UX design, development of core features, testing, and deployment. You'll receive a fully functional product ready for market testing."
  },
  {
    question: "How do you ensure quality with rapid development?",
    answer: "We use automated testing, daily code reviews, and continuous integration to maintain high quality while moving fast. Our experienced team follows best practices and industry standards."
  },
  {
    question: "Can the MVP be scaled later?",
    answer: "Yes! We build MVPs using Next.js and Firebase, which provide excellent scalability. The architecture is designed to support future growth and feature additions."
  },
  {
    question: "What happens after the MVP launch?",
    answer: "We offer optional maintenance and support packages to help you gather user feedback, make improvements, and add new features based on real user data."
  }
];

export default function MVPDevelopmentPage() {
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
                  MVP Development
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Launch your startup idea in 4 weeks with our rapid MVP development service. 
                  We focus on core features that validate your business hypothesis and get you to market fast.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                    <Link href="/contact" className="flex items-center">
                      <Rocket className="mr-2 h-5 w-5" />
                      Start Your MVP
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
                  src="https://mechlintech.com/wp-content/uploads/2021/11/MVP.svg"
                  alt="MVP Development Process"
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
              Why Choose Our MVP Service?
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

          {/* pricing */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-16">
  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
    Transparent Pricing
  </h2>
  <div className="max-w-4xl mx-auto">
    <div className="bg-blue-50 rounded-xl p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-4 -mr-4">
        <Badge className="bg-green-100 text-green-600">
          Most Popular
        </Badge>
      </div>
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2">
          <span className="text-4xl font-bold text-blue-600">$14,999</span>
          <span className="text-gray-500">/ one-time</span>
        </div>
        <p className="text-gray-600 mt-2">4-Week MVP Development Package</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">What's Included:</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Up to 5 core features
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Responsive Web App
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Basic SEO Setup
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              User Authentication
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Add-ons:</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-500" />
              Mobile App (+$6,999)
            </li>
            <li className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-500" />
              Premium Support (+$1,999/mo)
            </li>
            <li className="flex items-center gap-2">
              <LineChart className="w-4 h-4 text-blue-500" />
              Analytics Dashboard (+$2,499)
            </li>
          </ul>
        </div>
      </div>
      
      <div className="text-center">
        <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
          <Link href="/contact" className="flex items-center justify-center gap-2">
            <Rocket className="h-5 w-5" />
            Start Your MVP Now
          </Link>
        </Button>
        <p className="text-sm text-gray-500 mt-4">14-day money back guarantee</p>
      </div>
    </div>
    
    <div className="mt-8 text-center text-gray-600">
      <p>Need something more customized?</p>
      <Link 
        href="/contact" 
        className="text-blue-600 hover:underline inline-flex items-center mt-2"
      >
        Get a Custom Quote
        <ArrowRight className="w-4 h-4 ml-2" />
      </Link>
    </div>
  </div>
</div>

          {/* Timeline */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              4-Week Development Timeline
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {timeline.map((phase) => (
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

          {/* Deliverables */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              What You'll Get
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {deliverables.map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
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
              Ready to Build Your MVP?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Get your product to market in 4 weeks. Let's turn your idea into reality.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="/contact" className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}