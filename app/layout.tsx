"use client";

import React, { useState } from "react";
import "./globals.css";
import Header, { AnnouncementBar } from "@/components/Header";
import NavDrawer from "@/components/NavDrawer";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-white">
        <AnnouncementBar />
        <Header onMenuClick={() => setIsMenuOpen(true)} />
        <NavDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        
        <main className="flex-grow">
          {children}
        </main>

        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
