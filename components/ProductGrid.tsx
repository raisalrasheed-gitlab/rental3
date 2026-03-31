"use client";

import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

const products = [
  // Necklaces (5+ items)
  { id: "n1", name: "Ethereal Blossom Charm Choker", price: "1,099.00", image: "/images/choker1.png", category: "necklaces" },
  { id: "n2", name: "Elara Leaf Dangle Choker", price: "1,099.00", image: "/images/choker2.png", category: "necklaces" },
  { id: "n3", name: "Celestial Star Pendant", price: "1,299.00", image: "/images/hero2.png", category: "necklaces" },
  { id: "n4", name: "Midnight Pearl Choker", price: "1,499.00", image: "/images/necklaces.png", category: "necklaces" },
  { id: "n5", name: "Vintage Gold Locket", price: "1,899.00", image: "/images/hero3.png", category: "necklaces" },
  { id: "n6", name: "Dainty Heart Necklace", price: "999.00", image: "/images/choker1.png", category: "necklaces" },

  // Rings (5+ items)
  { id: "r1", name: "Solitaire Gold Band", price: "899.00", image: "/images/rings.png", category: "rings" },
  { id: "r2", name: "Floral Bloom Ring", price: "999.00", image: "/images/hero3.png", category: "rings" },
  { id: "r3", name: "Minimalist Stackable Ring", price: "499.00", image: "/images/hero2.png", category: "rings" },
  { id: "r4", name: "Eternal Love Knot", price: "1,299.00", image: "/images/rings.png", category: "rings" },
  { id: "r5", name: "Moonlight Silver Band", price: "799.00", image: "/images/hero1.png", category: "rings" },

  // Anklets (5+ items)
  { id: "a1", name: "Beaded Silver Anklet", price: "599.00", image: "/images/anklets.png", category: "anklets" },
  { id: "a2", name: "Golden Shell Anklet", price: "699.00", image: "/images/hero1.png", category: "anklets" },
  { id: "a3", name: "Charms of Joy Anklet", price: "899.00", image: "/images/anklets.png", category: "anklets" },
  { id: "a4", name: "Minimalist Chain Anklet", price: "499.00", image: "/images/hero2.png", category: "anklets" },
  { id: "a5", name: "Boho Fringe Anklet", price: "799.00", image: "/images/hero3.png", category: "anklets" },

  // Bracelets (5+ items)
  { id: "b1", name: "Infinity Chain Bracelet", price: "799.00", image: "/images/hero1.png", category: "bracelets" },
  { id: "b2", name: "Luxury Gold Cuff", price: "1,599.00", image: "/images/hero2.png", category: "bracelets" },
  { id: "b3", name: "Dainty Leaf Bracelet", price: "899.00", image: "/images/hero3.png", category: "bracelets" },
  { id: "b4", name: "Starlight Charm Bracelet", price: "1,199.00", image: "/images/hero1.png", category: "bracelets" },
  { id: "b5", name: "Elegant Pearl Wrap", price: "1,399.00", image: "/images/hero2.png", category: "bracelets" },
];

const ProductGrid = ({ title, categorySlug }: { title: string, categorySlug?: string }) => {
  // Filter products by category if categorySlug is provided, otherwise show Featured
  const filteredProducts = categorySlug 
    ? products.filter(p => p.category === categorySlug.toLowerCase()) 
    : products.slice(0, 8); // Default to first 8 for "Featured Collection"

  return (
    <section className="py-16 bg-white min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-gray-100">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-[var(--foreground)] mb-4">{title}</h2>
            <div className="flex items-center gap-2 text-gray-500 cursor-pointer hover:text-[var(--accent)] transition-colors group">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-180 transition-transform duration-500"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="2" y1="14" x2="6" y2="14"></line><line x1="10" y1="8" x2="14" y2="8"></line><line x1="18" y1="16" x2="22" y2="16"></line></svg>
              <span className="text-sm font-medium tracking-wide">Filter and sort</span>
            </div>
          </div>
          <p className="text-gray-400 font-medium tracking-widest uppercase text-xs">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                id={product.id}
                name={product.name} 
                price={product.price} 
                image={product.image} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 font-serif italic text-xl">No products found in this category.</p>
            <Link href="/" className="btn-outline mt-6 inline-block">Back to Home</Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
