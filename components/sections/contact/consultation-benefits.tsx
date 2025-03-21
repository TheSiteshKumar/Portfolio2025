'use client';

import { 
  Zap, 
  Target, 
  Users, 
  Rocket, 
  Code, 
  Shield,
  Clock,
  Video,
  Calendar,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const benefits = [
  {
    icon: Target,
    title: "Focused Solutions",
    description: "Get targeted advice for your specific technical challenges"
  },
  {
    icon: Rocket,
    title: "Fast Implementation",
    description: "Actionable insights you can implement immediately"
  },
  {
    icon: Shield,
    title: "Expert Guidance",
    description: "Access to years of technical expertise and best practices"
  },
  {
    icon: Code,
    title: "Technical Deep Dives",
    description: "Detailed technical discussions and architecture planning"
  }
];

const features = [
  {
    icon: Video,
    title: "1-on-1 Video Call",
    description: "Direct face-to-face consultation via video conference"
  },
  {
    icon: Clock,
    title: "Flexible Duration",
    description: "30 or 60-minute sessions based on your needs"
  },
  {
    icon: Calendar,
    title: "Easy Scheduling",
    description: "Book instantly through Unikon.ai platform"
  },
  {
    icon: CheckCircle,
    title: "Satisfaction Guaranteed",
    description: "Get valuable insights or get your money back"
  }
];

export function ConsultationBenefits() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Benefits */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Book a Consultation?
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Get personalized technical guidance and solutions tailored to your project needs
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {features.map((feature) => (
                <div key={feature.title} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-blue-100 mb-8">
              Book your consultation now and let's solve your technical challenges together.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="https://unikon.ai/siteshkumar" className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Session
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}