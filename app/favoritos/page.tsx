"use client";

import Link from "next/link";
import { ProductCard } from "@/src/components/ui/product-card";
import { useWishlist } from "@/src/context/wishlist-context";

export default function FavoritosPage() {
  const { items } = useWishlist();

  return (
    <div className="pb-20">
      {/* Page header */}
      <div className="mt-10 md:mt-14 mb-8 pb-6 border-b border-[#E4E2DE]">
        <p className="text-[9px] tracking-[0.4em] text-[#C2A67A] uppercase font-sans mb-2">
          Sua lista
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-light text-stone-900">
          Favoritos
        </h1>
        <p className="text-stone-500 text-sm mt-3 max-w-md">
          {items.length}{" "}
          {items.length === 1 ? "peça salva" : "peças salvas"}
        </p>
      </div>

      {/* Product grid */}
      {items.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 py-20 text-center">
          <p className="text-stone-400 text-sm">
            Você ainda não salvou nenhuma peça.
          </p>
          <Link
            href="/"
            className="text-[10px] tracking-[0.3em] uppercase text-stone-900 border-b border-stone-900 pb-0.5 font-sans"
          >
            Explorar coleção
          </Link>
        </div>
      )}
    </div>
  );
}
