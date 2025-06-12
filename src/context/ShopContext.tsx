import React, { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/types/Product";

interface ShopContextType {
  cartItems: Product[];
  savedItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  toggleSave: (product: Product) => void;
  isInCart: (productId: number) => boolean;
  isSaved: (productId: number) => boolean;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export function ShopProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [savedItems, setSavedItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const toggleSave = (product: Product) => {
    setSavedItems((prev) => {
      const isSaved = prev.some((item) => item.id === product.id);
      if (isSaved) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const isInCart = (productId: number) => {
    return cartItems.some((item) => item.id === productId);
  };

  const isSaved = (productId: number) => {
    return savedItems.some((item) => item.id === productId);
  };

  return (
    <ShopContext.Provider
      value={{
        cartItems,
        savedItems,
        addToCart,
        removeFromCart,
        toggleSave,
        isInCart,
        isSaved,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);
  if (context === undefined) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return context;
}
