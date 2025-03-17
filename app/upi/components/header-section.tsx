'use client';

export function HeaderSection() {
  return (
    <div className="relative py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          UPI QR Code Generator
        </h1>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto">
          Generate custom UPI payment QR codes instantly. Compatible with all major UPI apps
          like BHIM, Google Pay, PhonePe, and more.
        </p>
      </div>
    </div>
  );
}