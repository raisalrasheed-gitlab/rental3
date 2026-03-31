"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

import Link from "next/link";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
}

const ProductCard = ({ id, name, price, image }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group flex flex-col items-center text-center space-y-4"
    >
      {/* Image Container */}
      <Link href={`/products/${id}`} className="relative aspect-square w-full overflow-hidden bg-gray-50 rounded-sm block">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Quick Add Overlay (Modern UI Improvement) */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </Link>

      {/* Product Details */}
      <div className="space-y-1">
        <Link href={`/products/${id}`}>
          <h3 className="text-xl md:text-2xl script-text text-[var(--foreground)] tracking-wide hover:text-[var(--accent)] transition-colors cursor-pointer">
            {name}
          </h3>
        </Link>
        <p className="text-gray-500 font-medium tracking-wide">
          Rs. {price}
        </p>
      </div>

      {/* Add to Cart Button */}
      <button className="btn-solid w-full mt-2 flex items-center justify-center gap-2 py-3">
        <Plus size={18} />
        Add to cart
      </button>
    </motion.div>
  );
};

export default ProductCard;
