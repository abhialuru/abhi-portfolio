import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
