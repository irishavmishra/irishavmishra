import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rishav Mishra → Product & Design",
  description: "Product designer and developer crafting delightful user experiences. Building products that people love to use.",
  openGraph: {
    title: "Rishav Mishra → Product & Design",
    description: "Product designer and developer crafting delightful user experiences. Building products that people love to use.",
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
