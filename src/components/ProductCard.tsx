import React from "react";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="border rounded-xl p-4 shadow hover:scale-105 transition-transform">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 mx-auto object-contain mb-4"
      />
      <h2 className="text-sm font-semibold mb-2">{product.title}</h2>
      <p className="text-lg font-bold text-blue-600">${product.price}</p>
      <p className="text-xs text-gray-500 mt-1">{product.category}</p>
    </div>
  );
};

export default ProductCard;
