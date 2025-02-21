import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TailwindCSS with Naved Ali - Learn TailwindCSS & Next.js",
  description: "Master TailwindCSS with Naved Ali and learn to build modern, responsive websites using Next.js. Step-by-step guides and tutorials for developers.",
  keywords: [
    "TailwindCSS",
    "Next.js",
    "Web Development",
    "Responsive Design",
    "CSS Framework",
    "Naved Ali",
    "tailwindcsswithnaved"
  ],
  authors: [{ name: "Naved Ali", url: "https://tailwindcsswithnaved.vercel.app/" }],
  robots: "index, follow",
  openGraph: {
    title: "TailwindCSS with Naved Ali - Build Responsive Web Apps",
    description: "Explore TailwindCSS with Naved Ali. Build modern, responsive websites using Next.js effortlessly.",
    url: "https://tailwindcsswithnaved.vercel.app/",
    siteName: "TailwindCSS with Naved",
    images: [
      {
        url: "https://tailwindcsswithnaved.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "TailwindCSS with Naved"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "TailwindCSS with Naved Ali",
    description: "Master TailwindCSS and Next.js step by step with Naved Ali.",
    images: ["https://tailwindcsswithnaved.vercel.app/twitter-image.png"]
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
