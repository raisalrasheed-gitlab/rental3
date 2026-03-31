"use client";

import React from "react";
import ProductGrid from "@/components/ProductGrid";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const CollectionPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = React.use(params);
  // Convert slug back to readable title (e.g., "necklaces" -> "Necklaces")
  const title = slug.charAt(0).toUpperCase() + slug.slice(1).replace("-", " ");

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="bg-[var(--secondary-bg)] border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400">
          <Link href="/" className="hover:text-[var(--accent)] transition-colors">Home</Link>
          <ChevronRight size={12} />
          <span className="text-[var(--foreground)] font-semibold">{title}</span>
        </div>
      </div>

      {/* Collection Grid */}
      <ProductGrid title={title} categorySlug={slug} />
    </div>
  );
};

export default CollectionPage;
