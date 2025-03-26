'use client';

import { ContactHero } from '@/components/sections/contact/contact-hero';
import { ContactOptions } from '@/components/sections/contact/contact-options';
import { ConsultationBenefits } from '@/components/sections/contact/consultation-benefits';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ContactHero />
      <ConsultationBenefits />
      <ContactOptions />
    </div>
  );
}