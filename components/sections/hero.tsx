"use client";

import Image from "next/image";
import Link from "next/link";
import { HeroButton } from "@/components/ui/hero-button";
import { HeroStats } from "./hero/hero-stats";
import { HeroSocial } from "./hero/hero-social";

export function HeroSection() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-4">
        {/* Image - Shows first on mobile, second on desktop */}
        <div className="w-full md:w-5/12 md:order-2">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1325.jpg"
              alt="Developer workspace"
              fill
              priority
              className="rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* Content - Shows second on mobile, first on desktop */}
        <div className="w-full md:w-7/12 md:order-1 space-y-6 pl-0 md:pl-12">
          <div className="space-y-2">
            <h2 className="text-2xl font-medium text-blue-600">Hi, I'm Sitesh</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Full Stack Developer
            </h1>
          </div>
          
          <p className="text-lg text-gray-600 max-w-xl">
            I build exceptional and accessible digital experiences for the web. 
            Focused on creating beautiful and functional applications that users love.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/projects" passHref>
              <HeroButton className="bg-blue-600 text-white hover:bg-blue-700">
                View Projects
              </HeroButton>
            </Link>
            <Link href="/services" passHref>
              <HeroButton className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                View Services
              </HeroButton>
            </Link>
          </div>

          <HeroSocial />
          <HeroStats />
        </div>
      </div>
    </div>
  );
}