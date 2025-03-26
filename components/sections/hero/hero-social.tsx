"use client";

import { Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/TheSiteshKumar",
    label: "GitHub"
  },
  {
    icon: Twitter,
    href: "https://twitter.com/TheSiteshKumar",
    label: "Twitter"
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/TheSiteshKumar",
    label: "LinkedIn"
  }
];

export function HeroSocial() {
  return (
    <div className="flex gap-4 mt-8">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
          aria-label={label}
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
}