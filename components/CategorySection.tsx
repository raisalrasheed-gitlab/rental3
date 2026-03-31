"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
  { name: "Necklaces", image: "/images/necklaces.png", slug: "necklaces" },
  { name: "Rings", image: "/images/rings.png", slug: "rings" },
  { name: "Anklets", image: "/images/anklets.png", slug: "anklets" },
  { name: "Bracelets", image: "/images/hero1.png", slug: "bracelets" },
];

const CategorySection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-[var(--foreground)] mb-2">Categories</h2>
          <div className="h-1 w-20 bg-[var(--accent)]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              href={`/collections/${category.slug}`}
              className="relative w-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative aspect-[4/5] overflow-hidden cursor-pointer rounded-sm"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Label Overlay */}
                <div className="absolute top-4 left-4 bg-[var(--accent)]/90 text-white px-4 py-2 text-sm font-medium tracking-wider uppercase z-10">
                  {category.name}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
