import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sitesh Kumar | Full-Stack Developer & UPI QR Code Expert",
  description:
    "Portfolio of Sitesh Kumar - Web Developer specializing in UPI QR solutions, React, and Next.js. Create custom payment QR codes instantly.",
  keywords: [
    "UPI QR Code Generator",
    "Web Developer Portfolio",
    "React Developer",
    "Next.js Expert",
    "Payment Gateway Integration",
    "QR Code API",
    "Online Payment Solutions",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://siteshkumar.com",
    siteName: "Sitesh Kumar Portfolio",
    title: "Sitesh Kumar | Full-Stack Developer & UPI QR Specialist",
    description:
      "Professional portfolio showcasing web development projects and innovative payment solutions",
    images: [
      {
        url: "https://media.licdn.com/dms/image/v2/D4E03AQFPDKhssg7wcw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718775096032?e=1746057600&v=beta&t=XwTXNETd_gCb5dN90e6TOHBaSDdyYW__oUrRUSzOFgg",
        width: 1200,
        height: 630,
        alt: "Sitesh Kumar Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sitesh Kumar | Tech Developer & Innovator",
    description:
      "Building cutting-edge web solutions and popular tools like the UPI QR Code Generator",
    creator: "@thesiteshkumar",
    images: ["https://media.licdn.com/dms/image/v2/D4E03AQFPDKhssg7wcw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718775096032?e=1746057600&v=beta&t=XwTXNETd_gCb5dN90e6TOHBaSDdyYW__oUrRUSzOFgg"],
  },
  alternates: {
    canonical: "https://siteshkumar.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: "#2563eb",
  other: {
    "google-adsense-account": "ca-pub-7918508596079197",
    "google-site-verification": "your_verification_code_here",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Sitesh Kumar",
            url: "https://siteshkumar.com",
            sameAs: [
              "https://github.com/TheSiteshKumar",
              "https://linkedin.com/in/siteshkumar",
              "https://twitter.com/thesiteshkumar",
            ],
            jobTitle: "Full-Stack Developer",
            worksFor: {
              "@type": "Organization",
              name: "Open Source Projects",
            },
            description:
              "Professional web developer specializing in UPI payment solutions and modern web technologies.",
          })}
        </script>
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Header />
        <main
          className="pt-16"
          aria-label="Main content"
          itemScope
          itemType="https://schema.org/WebPage"
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
