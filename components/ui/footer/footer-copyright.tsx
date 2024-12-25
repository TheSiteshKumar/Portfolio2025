"use client";

import { Heart } from "lucide-react";

interface FooterCopyrightProps {
  companyName: string;
  authorName: string;
}

export function FooterCopyright({ authorName }: FooterCopyrightProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <p className="text-sm text-gray-400">
      © {currentYear}, Created with{" "}
      <Heart className="inline-block w-4 h-4 text-red-500 mx-1" />{" "}
      by {authorName}
    </p>
  );
}