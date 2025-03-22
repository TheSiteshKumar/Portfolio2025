'use client';

import { useState } from 'react';
import { ContactForm } from './contact-form';
import { ServiceInquiryForm } from './service-inquiry-form';
import { PhoneCall, Mail } from 'lucide-react';

const contactTypes = [
  { 
    id: 'general',
    label: 'General Inquiry',
    icon: Mail,
    description: 'Questions, collaborations, or just saying hello'
  },
  { 
    id: 'service', 
    label: 'Service Inquiry',
    icon: PhoneCall,
    description: 'Discuss your project requirements and ',
    preferred: true, // New preferred flag
    callbackText: 'get a callback' // Added separate callback text
  },
];

export function ContactOptions() {
  const [selectedType, setSelectedType] = useState('service'); // Default to service

  return (
    <div className="container mx-auto px-4 py-24 bg-gray-50" id="contact-form">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600">
            Choose how you'd like to connect and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {contactTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`p-6 rounded-xl border-2 text-left transition-all relative ${
                  selectedType === type.id
                    ? 'bg-blue-50 border-blue-200'
                    : type.preferred
                    ? 'border-green-200 hover:border-green-300' // Preferred styling
                    : 'border-gray-200 hover:border-blue-200'
                }`}
              >
                {/* Preferred badge */}
                {type.preferred && (
                  <span className="absolute top-2 right-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    Call Back
                  </span>
                )}
                
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    selectedType === type.id ? 'bg-blue-100' : 
                    type.preferred ? 'bg-green-100' : 'bg-gray-100'
                  }`}>
                    <type.icon className={`w-5 h-5 ${
                      selectedType === type.id ? 'text-blue-600' : 
                      type.preferred ? 'text-green-600' : 'text-gray-600'
                    }`} />
                  </div>
                  <h3 className={`font-semibold ${
                    selectedType === type.id ? 'text-blue-600' : 
                    type.preferred ? 'text-green-700' : 'text-gray-900'
                  }`}>
                    {type.label}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 ml-13">
                  {type.description}
                  {type.callbackText && (
                    <span className="text-blue-600 font-semibold">
                      {type.callbackText}
                    </span>
                  )}
                </p>
              </button>
            ))}
          </div>

          {selectedType === 'general' ? <ContactForm /> : <ServiceInquiryForm />}
        </div>
      </div>
    </div>
  );
}