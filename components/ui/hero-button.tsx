"use client";

import { Button } from "./button";
import { ArrowRight } from "lucide-react";

interface HeroButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function HeroButton({ children, className, onClick }: HeroButtonProps) {
  return (
    <Button 
      onClick={onClick}
      className={`group ${className}`}
      size="lg"
    >
      {children}
      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Button>
  );
}