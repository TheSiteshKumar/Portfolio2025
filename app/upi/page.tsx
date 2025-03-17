'use client';

import Head from 'next/head';
import { HeaderSection } from './components/header-section';
import { FormSection } from './components/form-section';
import { FAQSection } from './components/faq-section';

export default function UPIQRGenerator() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "UPI QR Code Generator",
    "description": "Instantly generate custom UPI payment QR codes compatible with all major UPI apps like BHIM, Google Pay, PhonePe, and more.",
    "url": "https://yourdomain.com/upi",
    "author": {
      "@type": "Organization",
      "name": "Your Company Name"
    },
    "image": "https://yourdomain.com/og-image.png"
  };

  return (
    <>
      <Head>
        <title>UPI QR Code Generator - Create Your Custom Payment QR Code</title>
        <meta
          name="description"
          content="Instantly generate custom UPI payment QR codes compatible with all major UPI apps like BHIM, Google Pay, PhonePe, and more."
        />
        <meta
          name="keywords"
          content="UPI QR Code Generator, UPI payment, BHIM, Google Pay, PhonePe, Paytm, QR code creator"
        />
        <meta name="author" content="Your Company Name" />
        <meta property="og:title" content="UPI QR Code Generator" />
        <meta
          property="og:description"
          content="Create custom UPI payment QR codes instantly. Compatible with all major UPI apps."
        />
        <meta property="og:url" content="https://yourdomain.com/upi" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yourdomain.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UPI QR Code Generator" />
        <meta
          name="twitter:description"
          content="Generate custom UPI payment QR codes instantly. Compatible with all major UPI apps."
        />
        <meta name="twitter:image" content="https://yourdomain.com/twitter-image.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <HeaderSection />
        <FormSection />
        <FAQSection />
      </div>
    </>
  );
}
