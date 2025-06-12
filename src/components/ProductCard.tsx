import React from "react";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div
      className="border rounded-xl p-4 shadow hover:scale-105 transition-transform relative"
      style={{ width: "280.15px", height: "483.43px" }}
    >
      <Image
        src={product.image}
        alt={product.title}
        width={192}
        height={192}
        className="mx-auto object-contain mb-4"
      />
      {/* Bookmark icon */}
      <div className="absolute top-2 right-2">
        <Image
          src="/icons/Bookmark.png"
          alt="bookmark"
          width={24}
          height={24}
        />
      </div>

      <h2 className="text-sm font-semibold mb-2">{product.title}</h2>
      <p className="text-lg font-bold text-blue-600">${product.price}</p>
      <p className="text-xs text-gray-500 mt-1">{product.category}</p>

      {/* Bag icon */}
      <div className="absolute bottom-2 right-2">
        <Image src="/icons/Bag.png" alt="bag" width={24} height={24} />
      </div>
    </div>
  );
};

export default ProductCard;
