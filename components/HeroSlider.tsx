"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    type: "collage",
    title: "Exceptional Comfort, Uncompromised Style",
    images: {
      topL: "/images/hero_slide_hand_bracelet_1774921766677.png",
      topM: "var(--accent-dark)", // Brown square
      botL: "/images/hero_slide_rings_marble_1774921785696.png",
      botM: "/images/hero_slide_earrings_saucer_1774921800856.png",
      right: "/images/hero_slide_woman_profile_1774921816622.png",
    },
  },
  {
    id: 2,
    type: "single",
    title: "The Midnight Pearl Collection",
    subtitle: "Timeless elegance for your most memorable moments.",
    image: "/images/hero_slide_luxury_necklace_1774921837366.png",
  },
  {
    id: 3,
    type: "editorial",
    title: "Mafa Life",
    subtitle: "Discover jewellery that speaks to your soul.",
    image: "/images/hero_slide_lifestyle_model_1774921852787.png",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-[85vh] md:h-[90vh] bg-[var(--secondary-bg)] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {slide.type === "collage" ? (
            <div className="max-w-7xl mx-auto h-full px-4 flex flex-col justify-center">
              <div className="grid grid-cols-12 grid-rows-2 gap-4 h-[70vh] relative">
                {/* Collage Part: Left Grid */}
                <div className="col-span-12 md:col-span-6 grid grid-cols-2 grid-rows-2 gap-4">
                  <div className="relative overflow-hidden rounded-sm">
                    <Image src={slide.images.topL!} alt="jewellery" fill className="object-cover" />
                  </div>
                  <div className="rounded-sm" style={{ backgroundColor: "#8b5e3c" }} />
                  <div className="relative overflow-hidden rounded-sm">
                    <Image src={slide.images.botL!} alt="jewellery" fill className="object-cover" />
                  </div>
                  <div className="relative overflow-hidden rounded-sm">
                    <Image src={slide.images.botM!} alt="jewellery" fill className="object-cover" />
                  </div>
                </div>

                {/* Collage Part: Right Image */}
                <div className="hidden md:block md:col-span-6 relative overflow-hidden rounded-sm">
                  <Image src={slide.images.right!} alt="jewellery" fill className="object-cover" />
                </div>

                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <h2 className="text-4xl md:text-6xl font-serif text-white text-center italic drop-shadow-lg max-w-2xl px-4">
                    {slide.title}
                  </h2>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative w-full h-full flex items-center justify-center">
              <Image 
                src={slide.image!} 
                alt={slide.title} 
                fill 
                className="object-cover brightness-90"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10 text-center space-y-6 px-4">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-[var(--accent)] uppercase tracking-[0.3em] font-semibold text-sm"
                >
                  {slide.subtitle}
                </motion.p>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-5xl md:text-7xl font-serif text-white italic"
                >
                  {slide.title}
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <button className="btn-outline border-white text-white hover:bg-white hover:text-black mt-4">
                    Explore Collection
                  </button>
                </motion.div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Pagination Dots */}
      <div className="absolute bottom-12 w-full flex justify-center gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-12 h-1.5 transition-all duration-300 rounded-full ${
              current === i ? "bg-[var(--accent)]" : "bg-gray-300/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
