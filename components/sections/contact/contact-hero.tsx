'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Calendar, PhoneCall, Video, Zap } from 'lucide-react';
import Link from 'next/link';

export function ContactHero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      </div>
      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Amazing Together</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you need technical consultation, project discussion, or just want to say hello - I'm here to help turn your ideas into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="https://unikon.ai/siteshkumar" className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Book Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="#contact-form" className="flex items-center">
                <PhoneCall className="mr-2 h-5 w-5" />
                Request Callback
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}