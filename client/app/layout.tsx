import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dissuasio",
  description: "Site Web Dissuasio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
              <Header />
              {children}
              <Footer />
      </body>
    </html>
  );
}
