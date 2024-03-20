import type { Metadata } from "next";
import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { Navbar } from "@/components";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "camp",
  description: "Built for creators by creators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-radial from-[#1b4142] via-[#0e2f30] to-[#0E0E0E]">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
