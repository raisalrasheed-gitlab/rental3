"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";
import Link from "next/link";

interface NavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const categories = [
  { name: "Home", slug: "" },
  { name: "Catalog", slug: "catalog" },
  { name: "Necklaces", slug: "necklaces" },
  { name: "Bracelets", slug: "bracelets" },
  { name: "Rings", slug: "rings" },
  { name: "Earrings", slug: "earrings" },
  { name: "Anklets", slug: "anklets" },
  { name: "Hair Accessories", slug: "hair-accessories" },
  { name: "Oxidised Jewellery", slug: "oxidised-jewellery" },
  { name: "Unisex Collection", slug: "unisex-collection" },
];

const NavDrawer = ({ isOpen, onClose }: NavDrawerProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-white z-[70] shadow-2xl flex flex-col pt-8"
          >
            <div className="px-6 mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-serif tracking-tight uppercase">Menu</h2>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-6">
              <ul className="space-y-4">
                {categories.map((category) => (
                  <li key={category.name} className="border-b border-gray-50 last:border-0 pb-3">
                    <Link
                      href={category.slug === "" ? "/" : `/collections/${category.slug}`}
                      className="flex items-center justify-between text-lg script-text text-[var(--foreground)] hover:text-[var(--accent)] transition-colors group"
                      onClick={onClose}
                    >
                      <span>{category.name}</span>
                      <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="p-8 border-t border-gray-100 bg-[var(--secondary-bg)]">
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-gray-400 mb-4">Store Info</p>
              <div className="text-sm text-gray-600 space-y-2">
                <p>+91 00000 00000</p>
                <p>info@mafa.co</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NavDrawer;
