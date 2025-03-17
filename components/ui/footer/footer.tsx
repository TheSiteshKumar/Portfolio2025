"use client";

import { Mail } from "lucide-react";
import { FooterColumn } from "./footer-column";
import { FooterSocial } from "./footer-social";
import { FooterCopyright } from "./footer-copyright";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto px-4 sm:px-6 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">About Me</h3>
            <p className="text-sm leading-relaxed">
              A passionate Full Stack Developer focused on creating beautiful and functional 
              web applications. Always exploring new technologies and sharing knowledge.
            </p>
          </div>

          {/* Quick Links */}
          <FooterColumn
            title="Quick Links"
            links={[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Projects", href: "/projects" },
              { label: "Dreams", href: "/dreams" },
              { label: "Contact", href: "/contact" }
            ]}
          />

          {/* Services */}
          <FooterColumn
            title="Services"
            links={[
              { label: "Web Development", href: "#" },
              { label: "Mobile Apps", href: "#" },
              { label: "UI/UX Design", href: "#" },
            ]}
          />

          {/* Tools */}
          <FooterColumn
            title="Tools"
            links={[
              { label: "UPI QR Code Generator", href: "./upi" },
            ]}
          />
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <FooterCopyright companyName="Selfown" authorName="Sitesh Kumar" />
            <FooterSocial />
          </div>
        </div>
      </div>
    </footer>
  );
}