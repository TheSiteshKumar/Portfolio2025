'use client';

import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

interface DetailItemProps {
  label: string;
  value: string | React.ReactNode;
}

function DetailItem({ label, value }: DetailItemProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-gray-600 min-w-[140px]">{label}</span>
      <span className="text-gray-900">{value}</span>
    </div>
  );
}

export function PersonalDetails() {
  const socialLinks = [
    { icon: GithubIcon, href: '#', label: 'GitHub' },
    { icon: TwitterIcon, href: '#', label: 'Twitter' },
    { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Personal Details</h2>
      <div className="space-y-4">
        <DetailItem label="Date of birth" value="23 October 1999" />
        <DetailItem
          label="Languages"
          value={<span className="text-blue-600">English - Hindi</span>}
        />
        <DetailItem label="Nationality" value="India" />
        <DetailItem
          label="Interests"
          value={<span className="text-blue-600">Music, Reading, Travel</span>}
        />
      </div>

      <div className="flex gap-4">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
            aria-label={label}
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  );
}
