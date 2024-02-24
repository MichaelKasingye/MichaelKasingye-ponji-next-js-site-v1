import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./globals.css";
import BootstrapClient from "@/components/BootstrapClient";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ponji - Home",
  description: "Ponji home page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <BootstrapClient />
      {/* <body className={inter.className}>{children} */}
      <body>{children}</body>
    </html>
  );
}
