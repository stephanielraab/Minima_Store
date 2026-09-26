"use client";

import { ReactNode } from "react";
import { CartProvider } from "@/src/context/cart-context";
import { WishlistProvider } from "@/src/context/wishlist-context";
import { CheckoutProvider } from "@/src/context/checkout-context";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <WishlistProvider>
        <CheckoutProvider>
          {children}
        </CheckoutProvider>
      </WishlistProvider>
    </CartProvider>
  );
}