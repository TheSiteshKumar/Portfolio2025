"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("group", className)}>
      <div className="flex items-center gap-1 text-lg font-medium font-mono">
        <span className="text-pink-500">&lt;</span>
        <span className="text-emerald-500">Sitesh</span>
        <span className="text-gray-400"> </span>
        <span className="text-blue-500">Kumar</span>
        <span className="text-pink-500">/&gt;</span>
      </div>
    </Link>
  );
}