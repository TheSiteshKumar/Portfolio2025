'use client';

import { Mail, MapPin, Clock } from 'lucide-react';

interface ContactInfoItem {
  icon: typeof Mail;
  title: string;
  details: string[];
}

const contactInfo: ContactInfoItem[] = [
  {
    icon: Mail,
    title: 'Email',
    details: ['hello@siteshkumar.com', 'thesiteshkumar@gmail.com'],
  },
  {
    icon: MapPin,
    title: 'Location',
    details: ['Patna', 'Bihar, India'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Mon - Fri: 9:00 - 18:00', 'Sat - Sun: Closed'],
  },
];

export function ContactInfo() {
  return (
    <div className="grid grid-cols-1 gap-8">
      {contactInfo.map(({ icon: Icon, title, details }) => (
        <div key={title} className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
              <Icon className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
            {details.map((detail, index) => (
              <p key={index} className="text-gray-600">
                {detail}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}