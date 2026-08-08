"use client";

import { ReactNode } from "react";
import { CartProvider } from "@/src/context/cart-context";
import { WishlistProvider } from "@/src/context/wishlist-context";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <WishlistProvider>
        {children}
      </WishlistProvider>
    </CartProvider>
  );
}