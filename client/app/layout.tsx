import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "./pages/header/header";
import Footer from "./pages/footer/footer";
import { ClerkProvider } from "@clerk/nextjs";
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
    <ClerkProvider>
    <html lang="en">
      <body className="flex">
              <Header />
              {children}
              <Footer />
      </body>
    </html>
    </ClerkProvider>
  );
}
