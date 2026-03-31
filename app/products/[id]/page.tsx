"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus, Share2, ZoomIn, Check } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  "18K Gold Plated",
  "PVD Coated for Long-Lasting Shine",
  "Anti-Tarnish Finish",
  "Daily Wear Friendly",
  "Won't Turn Black",
  "Made with 316L Stainless Steel",
  "Hypoallergenic & Skin-Safe",
];

const ProductPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = React.use(params);
  const [quantity, setQuantity] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);

  // Mock data for the demonstration
  const product = {
    id: id,
    name: "Ethereal Blossom Charm Choker",
    price: "1,099.00",
    image: "/images/choker1.png",
    category: "MAFA INDIA",
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left: Image Section */}
          <div className="space-y-4">
            <div 
              className="relative aspect-square bg-gray-50 overflow-hidden cursor-zoom-in rounded-sm"
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className={`object-cover transition-transform duration-500 ${isZoomed ? "scale-150" : "scale-100"}`}
              />
              <button className="absolute top-4 left-4 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm">
                <ZoomIn size={20} className="text-gray-600" />
              </button>
            </div>
            
            {/* Thumbnails (Modern UX Improvement) */}
            <div className="flex gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-20 h-20 bg-gray-50 relative rounded-sm border border-transparent hover:border-[var(--accent)] cursor-pointer overflow-hidden">
                   <Image src={product.image} alt="prev" fill className="object-cover opacity-60 hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Info Section */}
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-gray-400 uppercase tracking-widest text-xs font-semibold">{product.category}</p>
              <h1 className="text-4xl md:text-5xl font-serif text-[var(--foreground)] leading-tight">
                {product.name}
              </h1>
              <div className="pt-2">
                <p className="text-2xl font-serif text-[var(--foreground)]">Rs. {product.price}</p>
                <a href="#" className="text-xs text-gray-500 underline underline-offset-4 hover:text-[var(--accent)] transition-colors mt-2 inline-block">
                  Shipping calculated at checkout.
                </a>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-4">
              <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Quantity</label>
              <div className="flex items-center border border-[var(--border)] w-fit rounded-sm">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-gray-50 transition-colors"
                >
                  <Minus size={18} />
                </button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-gray-50 transition-colors"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            {/* Buy Buttons */}
            <div className="space-y-4 pt-4">
              <button className="btn-outline w-full py-4 text-center">
                Add to cart
              </button>
              <button className="btn-solid w-full py-4 flex items-center justify-center gap-4">
                Buy it now
                <div className="flex gap-2">
                   <span className="text-[10px] bg-white/20 px-1 rounded">G-Pay</span>
                   <span className="text-[10px] bg-white/20 px-1 rounded">Paytm</span>
                </div>
              </button>
            </div>

            {/* Product Features */}
            <div className="pt-8 border-t border-[var(--border)]">
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-[var(--foreground)] font-medium">
                    <div className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Share Button */}
            <button className="flex items-center gap-2 text-gray-400 hover:text-[var(--accent)] transition-colors text-sm uppercase tracking-widest pt-4">
              <Share2 size={16} />
              Share
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductPage;
