"use client";

import { useState } from "react";
import type { Product } from "@/src/data";
import { useCart } from "@/src/context/cart-context";
import { useWishlist } from "@/src/context/wishlist-context";

type ProductFormProps = {
  product: Product;
};

export function ProductForm({ product }: ProductFormProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const favorited = isInWishlist(product.id);

  function handleAddToCart() {
    if (!selectedSize) {
      alert("Por favor, selecione um tamanho");
      return;
    }
    addToCart(product, 1);
    // Opcionalmente, reseta o tamanho após adicionar
    setSelectedSize(null);
  }

  return (
    <>
      {/* Size selector */}
      <div className="mb-8">
        <label className="font-sans text-sm font-medium text-stone-900 block mb-3">
          Tamanho
        </label>
        <div className="flex gap-2 flex-wrap">
          {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`border w-10 h-10 flex items-center justify-center text-sm transition-colors font-sans ${
                selectedSize === size
                  ? "border-stone-900 bg-stone-900 text-white"
                  : "border-stone-300 hover:border-stone-900 hover:bg-stone-900 hover:text-white"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Add to cart */}
      <button
        onClick={handleAddToCart}
        className="w-full bg-stone-900 text-white py-4 tracking-widest uppercase text-sm font-sans mb-3 hover:bg-stone-800 transition-colors"
      >
        Adicionar ao Carrinho
      </button>

      {/* Add to wishlist */}
      <button
        onClick={(e) => {
          e.preventDefault();
          toggleWishlist(product);
        }}
        className={`w-full border py-4 tracking-widest uppercase text-sm font-sans transition-colors ${
          favorited
            ? "border-[#C2A67A] text-[#C2A67A]"
            : "border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white"
        }`}
      >
        {favorited ? "♡ " : "♡ "}Adicionar à Lista
      </button>
    </>
  );
}