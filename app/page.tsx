import HeroSlider from "@/components/HeroSlider";
import CategorySection from "@/components/CategorySection";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSlider />

      {/* Categories Grid */}
      <CategorySection />

      {/* Featured Collection */}
      <ProductGrid title="Featured Collection" />

      {/* Brand Story Section (Modern UX Improvement) */}
      <section className="py-24 bg-[var(--secondary-bg)]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif text-[var(--foreground)]">Crafting Elegance</h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light italic script-text">
            "At Mafa, we believe jewellery is more than just an accessory—it's a celebration of your unique story. 
            Every piece is meticulously handcrafted with 18K gold plating and anti-tarnish finishes 
            to ensure your sparkle lasts a lifetime."
          </p>
          <div className="pt-4">
            <button className="btn-outline">Learn Our Story</button>
          </div>
        </div>
      </section>

      {/* Newsletter / Secondary Grid could go here */}
      <ProductGrid title="New Arrivals" />
    </div>
  );
}
