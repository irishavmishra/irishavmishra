import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "Rishav Mishra – Full Stack Developer | React, Node.js, AI",
  description: "Rishav Mishra is a Full Stack Developer from Bhopal, India. He builds web applications using React, Next.js, Node.js, PostgreSQL, and AI. 6 projects shipped, 100K+ user visits. Available for hire.",
  keywords: [
    "Rishav Mishra",
    "Rishav Mishra developer",
    "Rishav Mishra portfolio",
    "Full Stack Developer",
    "Full Stack Developer India",
    "Full Stack Developer Bhopal",
    "React Developer",
    "React Developer India",
    "Node.js Developer",
    "Next.js Developer",
    "PostgreSQL",
    "TypeScript Developer",
    "Web Developer India",
    "AI Developer",
    "hire full stack developer",
    "hire React developer India",
    "freelance developer India",
    "Bhopal software developer",
    "irishavmishra",
  ],
  authors: [{ name: "Rishav Mishra", url: "https://rishav.online" }],
  creator: "Rishav Mishra",
  publisher: "Rishav Mishra",
  metadataBase: new URL("https://rishav.online"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rishav.online",
    title: "Rishav Mishra – Full Stack Developer | React, Node.js, AI",
    description: "Full Stack Developer from Bhopal, India. Building web applications with React, Next.js, Node.js, PostgreSQL, and AI. 6 projects shipped, 100K+ user visits.",
    siteName: "Rishav Mishra",
    images: [
      {
        url: "/rishav-mishra.webp",
        width: 1200,
        height: 630,
        alt: "Rishav Mishra – Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishav Mishra – Full Stack Developer | React, Node.js, AI",
    description: "Full Stack Developer from Bhopal, India. Building web apps with React, Next.js, Node.js, PostgreSQL, and AI. 6 projects shipped, 100K+ user visits.",
    creator: "@irishavmishra",
    images: ["/rishav-mishra.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "google-site-verification": "REPLACE_WITH_YOUR_VERIFICATION_CODE",
  },
};

// JSON-LD Structured Data for Google Knowledge Panel & Rich Results
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://rishav.online/#person",
  name: "Rishav Mishra",
  givenName: "Rishav",
  familyName: "Mishra",
  url: "https://rishav.online",
  image: "https://rishav.online/rishav-mishra.webp",
  jobTitle: "Full Stack Developer",
  description:
    "Full Stack Developer who builds web applications that simplify and automate real-world business operations using React, Node.js, PostgreSQL, and AI.",
  email: "onlyrishavmishra@gmail.com",
  telephone: "+917047420892",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bhopal",
    addressRegion: "Madhya Pradesh",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/in/irishavmishra/",
    "https://github.com/irishavmishra",
    "https://x.com/irishavmishra",
    "https://twitter.com/irishavmishra",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "TypeScript",
    "JavaScript",
    "Full Stack Development",
    "REST APIs",
    "tRPC",
    "Cloudflare Workers",
    "AI Integration",
    "FastAPI",
    "Python",
    "FFmpeg",
    "Web Application Development",
    "Database Design",
    "Authentication Systems",
    "Edge Computing",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Bhopal, India",
  },
  worksFor: {
    "@type": "Organization",
    name: "Freelance / Available for Hire",
  },
  nationality: {
    "@type": "Country",
    name: "India",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://rishav.online/#website",
  name: "Rishav Mishra",
  url: "https://rishav.online",
  description:
    "Portfolio of Rishav Mishra – Full Stack Developer from Bhopal, India.",
  publisher: {
    "@id": "https://rishav.online/#person",
  },
  inLanguage: "en-US",
};

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://rishav.online/#profilepage",
  name: "Rishav Mishra – Full Stack Developer",
  url: "https://rishav.online",
  mainEntity: {
    "@id": "https://rishav.online/#person",
  },
  dateCreated: "2025-01-01",
  dateModified: "2026-02-26",
  description:
    "Portfolio and professional profile of Rishav Mishra, a Full Stack Developer from Bhopal, India who builds web applications using React, Node.js, PostgreSQL, and AI.",
};

const projectsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Projects by Rishav Mishra",
  description: "Web applications and software projects built and shipped by Rishav Mishra.",
  numberOfItems: 5,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "SoftwareApplication",
        name: "Rently",
        description:
          "Property management app for small landlords. Landlords add properties, manage tenants, create leases, and track rent payments.",
        url: "https://rently.property",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        author: { "@id": "https://rishav.online/#person" },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "SoftwareApplication",
        name: "Fiscally",
        description:
          "Income tax return filing platform for India. Users prepare ITR forms directly in the browser with data import and reconciliation.",
        url: "https://fiscally.online",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web",
        author: { "@id": "https://rishav.online/#person" },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "SoftwareApplication",
        name: "CalcTrust",
        description:
          "Financial calculator platform for U.S. salary and tax estimation. 270+ calculator pages covering all 50 states. 100K+ visits.",
        url: "https://calctrust.com",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web",
        author: { "@id": "https://rishav.online/#person" },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "SoftwareApplication",
        name: "ReelBrain",
        description:
          "AI service that converts long videos into short vertical clips with subtitles using speaker detection and WhisperX.",
        url: "https://github.com/irishavmishra/reelbrain",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Web",
        author: { "@id": "https://rishav.online/#person" },
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "SoftwareApplication",
        name: "FancyText",
        description:
          "Unicode text styling tool with 100K+ user visits. Type normal text and get dozens of styled versions.",
        url: "https://fancytext-gen.vercel.app/",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Web",
        author: { "@id": "https://rishav.online/#person" },
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
        />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,600,700,800,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Rethink+Sans:wght@400..800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />

        {/* Manifest & Discovery */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="author" href="/humans.txt" />
      </head>
      <body className="loading">
        {children}
      </body>
    </html>
  );
}
