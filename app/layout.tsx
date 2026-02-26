import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "Rishav Mishra - Full Stack Developer",
  description: "Full Stack Developer building web applications using React, Node.js, and PostgreSQL. 6 projects shipped, 100K+ user visits.",
  keywords: ["Full Stack Developer", "React", "Node.js", "PostgreSQL", "Next.js", "TypeScript", "Web Developer", "India", "Bhopal"],
  authors: [{ name: "Rishav Mishra" }],
  creator: "Rishav Mishra",
  metadataBase: new URL("https://rishav.online"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rishav.online",
    title: "Rishav Mishra - Full Stack Developer",
    description: "Full Stack Developer building web applications using React, Node.js, and PostgreSQL. 6 projects shipped, 100K+ user visits.",
    siteName: "Rishav Mishra Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishav Mishra - Full Stack Developer",
    description: "Full Stack Developer building web applications using React, Node.js, and PostgreSQL. 6 projects shipped, 100K+ user visits.",
    creator: "@irishavmishra",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,600,700,800,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Rethink+Sans:wght@400..800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="loading">
        {children}
      </body>
    </html>
  );
}
