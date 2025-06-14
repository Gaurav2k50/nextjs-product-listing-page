"use client";

import React from "react";
import ProductCard from "@/components/ProductCard";
import { Navbar } from "@/components/Navbar";
import { CategoryBar } from "@/components/CategoryBar";
import { useShop } from "@/context/ShopContext";

export default function Home() {
  const { products } = useShop();

  return (
    <>
      <Navbar />
      <CategoryBar />
      <main className="min-h-screen bg-[#0C0C0C] p-8 pt-[105px]">
        {products.length === 0 ? (
          <p className="text-center text-white">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
