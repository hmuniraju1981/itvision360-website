import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export const metadata: Metadata = {
  title: "ITVision360 | Industrial Automation & Enterprise AI Solutions",
  description:
    "ITVision360 delivers integrated solutions in industrial automation, AI strategy, asset management, and enterprise IT services. Fortune 500 trusted since 2011.",
  keywords: "industrial automation, AI strategy, IoT, cloud solutions, enterprise IT, asset management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-dark-950 text-slate-100 min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
