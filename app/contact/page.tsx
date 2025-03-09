'use client';

import Image from 'next/image';
import { ContactForm } from '@/components/sections/contact/contact-form';
import { ContactInfo } from '@/components/sections/contact/contact-info';
import { ContactMap } from '@/components/sections/contact/contact-map';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white py-16">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e"
            alt="Contact background"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg text-blue-100">
              Have a question or want to work together? I'd love to hear from
              you. Let's make something great together!
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form - Takes 2/3 of the space */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send a Message
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Contact Information - Takes 1/3 of the space */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}