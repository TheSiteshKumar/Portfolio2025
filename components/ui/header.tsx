"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, PhoneCall } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { Button } from "./button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/upi", label: "UPI" },
  { href: "/dreams", label: "Dreams" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-blue-200">
      <div className="mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          <nav className="hidden md:flex items-center gap-6 mx-8 flex-1 justify-center">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-sm font-medium px-4 py-2 rounded-lg transition-colors",
                  pathname === href
                    ? "bg-blue-200 text-blue-800"
                    : "text-gray-700 hover:bg-blue-100 hover:text-blue-800"
                )}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4 justify-end flex-shrink-0">
            <Button
              size="sm"
              className="bg-blue-600 text-white hover:bg-blue-700"
              asChild
            >
              <Link href="/contact">
                <PhoneCall className="w-4 h-4 mr-2" />
                Request Callback
              </Link>
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-blue-50 border-t border-blue-200">
          <div className="mx-auto px-4 py-4 max-w-7xl">
            <nav className="space-y-3">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "block text-sm font-medium px-4 py-2 rounded-lg transition-colors",
                    pathname === href
                      ? "bg-blue-200 text-blue-800"
                      : "text-gray-700 hover:bg-blue-100 hover:text-blue-800"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <div className="pt-4">
                <Button
                  className="w-full bg-blue-600 text-white hover:bg-blue-700"
                  asChild
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link href="/contact">
                    <PhoneCall className="w-4 h-4 mr-2" />
                    Request Callback
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
