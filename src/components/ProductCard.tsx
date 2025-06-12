import React from "react";
import Image from "next/image";
import { Product } from "@/types/Product";
import { useShop } from "@/context/ShopContext";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart, removeFromCart, toggleSave, isInCart, isSaved } =
    useShop();
  return (
    <div
      className="relative"
      style={{
        width: "280.15px",
        height: "483.43px",
      }}
    >
      {/* Save/Bookmark icon - now at the top level */}
      <div
        onClick={() => toggleSave(product)}
        style={{
          width: "26px",
          height: "34px",
          position: "absolute",
          top: "17.08px",
          left: "237.44px",
          zIndex: "10",
          cursor: "pointer",
          opacity: isSaved(product.id) ? 0.7 : 1,
        }}
      >
        <Image
          src="/icons/Bookmark.png"
          alt="bookmark"
          width={26}
          height={34}
          className={
            "w-full h-full object-contain transition-transform " +
            (isSaved(product.id) ? "scale-110" : "")
          }
        />
      </div>
      {/* Image section */}
      <div
        style={{
          width: "280.15px",
          height: "373.26px",
          borderTopLeftRadius: "6.59px",
          borderTopRightRadius: "6.59px",
          overflow: "hidden",
        }}
      >
        <Image
          src={product.image}
          alt={product.title}
          width={280}
          height={373}
          className="w-full h-full object-contain"
        />
      </div>
      {/* Below section with details */}
      <div
        style={{
          width: "280.15px",
          height: "122.99px",
          position: "absolute",
          top: "360.44px",
          borderBottomRightRadius: "17.08px",
          borderBottomLeftRadius: "17.08px",
          background: "#141414",
        }}
      >
        {/* Product name */}
        <h2
          style={{
            width: "259px",
            height: "26px",
            position: "absolute",
            top: "26.48px",
            left: "10.25px",
            fontFamily: "Encode Sans",
            fontWeight: 500,
            fontSize: "20.5px",
            lineHeight: "100%",
            letterSpacing: "5%",
            color: "#E5DFD9",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {product.title}
        </h2>
        {/* Price and discount section */}
        <div
          style={{
            width: "168.36px",
            height: "23.92px",
            position: "absolute",
            top: "75.16px",
            left: "10.25px",
          }}
        >
          <p className="text-lg font-bold text-[#E5DFD9]">₹{product.price}</p>
        </div>{" "}
        {/* Bag icon */}
        <div
          onClick={() => {
            if (isInCart(product.id)) {
              removeFromCart(product.id);
            } else {
              addToCart(product);
            }
          }}
          style={{
            width: "35.87px",
            height: "43.45px",
            position: "absolute",
            top: "68.33px",
            left: "237.44px",
            cursor: "pointer",
            opacity: isInCart(product.id) ? 0.7 : 1,
          }}
        >
          <Image
            src="/icons/Bag.png"
            alt="bag"
            width={36}
            height={43}
            className={
              "w-full h-full object-contain transition-transform " +
              (isInCart(product.id) ? "scale-110" : "")
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
