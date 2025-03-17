"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function SaaSDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Link 
            href="/services" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>

          <h1 className="text-4xl font-bold mb-6 text-amber-600">SaaS Solutions</h1>
          <p className="text-lg text-gray-600 mb-8">
            End-to-end SaaS platforms with subscription billing & analytics. Complete business solution.
          </p>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="text-center">
              <div className="relative w-64 h-64 mx-auto mb-8">
                <Image
                  src="https://illustrations.popsy.co/amber/startup.svg"
                  alt="SaaS Development Illustration"
                  fill
                  className="object-contain"
                />
              </div>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Service Details Coming Soon
              </h2>
              <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                We're currently working on putting together detailed information about our SaaS development services. 
                In the meantime, feel free to reach out to learn more about how we can help you build your SaaS platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact" className="flex items-center">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact for Details
                  </Link>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <Link href="/projects">
                    View Related Projects
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Why Choose Our SaaS Development Service?
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 mr-3"></span>
                  <span>Complete subscription and billing integration</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 mr-3"></span>
                  <span>Scalable architecture for growing user base</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 mr-3"></span>
                  <span>Advanced analytics and user insights</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Development Process
              </h3>
              <div className="prose text-gray-600">
                <p>
                  Our SaaS development process focuses on building sustainable solutions:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>Business model and requirements analysis</li>
                  <li>Subscription model design</li>
                  <li>Scalable architecture planning</li>
                  <li>Security and compliance implementation</li>
                  <li>Continuous deployment and monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}