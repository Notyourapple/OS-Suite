import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { siteConfig } from "@/config/site";

export const viewport: Viewport = {
  themeColor: "#06080d",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  keywords: [
    "NOVA",
    "Ephemeral OS",
    "QEMU Windows",
    "WHPX acceleration",
    "QCOW2 overlays",
    "disposable virtual machines",
    "Windows desktop virtualization",
    "ephemeral computing",
  ],
  authors: [{ name: "NOVA Development Team" }],
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#06080d] text-slate-100 min-h-screen flex flex-col font-sans antialiased selection:bg-cyan-500 selection:text-black">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
