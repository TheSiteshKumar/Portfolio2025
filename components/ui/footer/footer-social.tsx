"use client";

import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

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
  },
  {
    icon: Instagram,
    href: "https://instagram.com/TheSiteshKumar",
    label: "Instagram"
  }
];

export function FooterSocial() {
  return (
    <div className="flex gap-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
          aria-label={label}
        >
          <Icon className="w-4 h-4" />
        </a>
      ))}
    </div>
  );
}