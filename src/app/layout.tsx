import type { Metadata } from "next";
import "./globals.css";

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
      <body className="px-5 bg-gradient-radial from-[#1b4142] via-[#0e2f30] to-[#0E0E0E]">
        {children}
      </body>
    </html>
  );
}
