"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  isMobile?: boolean;
}

export function NavLink({ href, children, className, isMobile }: NavLinkProps) {
  const baseStyles = "transition-colors";
  const mobileStyles = "block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md";
  const desktopStyles = "text-gray-600 hover:text-gray-900";

  return (
    <Link
      href={href}
      className={cn(
        baseStyles,
        isMobile ? mobileStyles : desktopStyles,
        className
      )}
    >
      {children}
    </Link>
  );
}