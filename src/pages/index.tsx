"use client";

import React, { useEffect, useState } from "react";
import { api } from "@/utils/api";
import ProductCard from "@/components/ProductCard";
import { Navbar } from "@/components/Navbar";
import { CategoryBar } from "@/components/CategoryBar";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/products")
      .then((res) => setProducts(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Navbar />
      <CategoryBar />
      <main className="min-h-screen bg-gray-50 p-8 pt-[105px]">
        {/* <h1 className="text-2xl font-bold mb-6 text-center">Our Products</h1> */}
        {loading ? (
          <p className="text-center">Loading...</p>
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
