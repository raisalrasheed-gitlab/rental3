"use client";

import React, { useState, useEffect } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export const AnnouncementBar = () => (
  <div className="h-[var(--announcement-height)] bg-[var(--accent)] text-white flex items-center justify-center text-xs tracking-widest uppercase font-medium px-4 text-center">
    Free shipping on all orders above Rs. 1499/-
  </div>
);

const Header = ({ onMenuClick }: { onMenuClick: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-[var(--header-height)] flex items-center justify-between">
        {/* Left: Menu Toggle */}
        <button 
          onClick={onMenuClick}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Menu"
        >
          <Menu size={24} strokeWidth={1.5} />
        </button>

        {/* Center: Logo */}
        <div className="flex-1 flex justify-center">
          <Link href="/">
            <h1 className="text-3xl font-serif tracking-tighter uppercase text-[var(--foreground)] cursor-pointer hover:text-[var(--accent)] transition-colors">
              Mafa
            </h1>
          </Link>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Search">
            <Search size={22} strokeWidth={1.5} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative" aria-label="Cart">
            <ShoppingBag size={22} strokeWidth={1.5} />
            <span className="absolute top-1 right-1 w-4 h-4 bg-[var(--accent)] text-white text-[10px] flex items-center justify-center rounded-full">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
