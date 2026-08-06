"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/src/data";
import { useCart } from "@/src/context/cart-context";
import { useWishlist } from "@/src/context/wishlist-context";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const favorited = isInWishlist(product.id);

  const discount =
    product.originalPrice !== null
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) *
            100
        )
      : null;

  return (
    <Link href={`/produto/${product.slug}`} className="group block">
      {/* Image wrapper */}
      <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="bg-stone-900 text-white text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 font-sans">
              Novo
            </span>
          )}
          {discount !== null && (
            <span className="bg-[#C2A67A] text-white text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 font-sans">
              -{discount}%
            </span>
          )}
        </div>

        {/* Wishlist heart */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product);
          }}
          aria-label={
            favorited ? "Remover dos favoritos" : "Adicionar aos favoritos"
          }
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-[#FAFAF8]/90 backdrop-blur-sm rounded-full transition-transform hover:scale-110"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill={favorited ? "#C2A67A" : "none"}
            stroke={favorited ? "#C2A67A" : "#1C1A17"}
            strokeWidth="1.6"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>

        {/* Hover CTA bar — add to cart */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addToCart(product);
          }}
          className="absolute inset-x-0 bottom-0 bg-stone-900/92 py-3.5 text-center text-white text-[10px] tracking-[0.3em] uppercase font-sans translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out hover:bg-stone-800"
        >
          Adicionar à Sacola
        </button>
      </div>

      {/* Product info */}
      <div className="mt-3.5 px-0.5">
        <div className="text-[9px] tracking-[0.3em] text-stone-400 uppercase font-sans mb-1.5">
          {product.category}
        </div>
        <div className="font-serif text-[1.05rem] leading-snug text-stone-900">
          {product.name}
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm font-medium text-stone-900 font-sans">
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          {product.originalPrice !== null && (
            <span className="text-xs text-stone-400 line-through font-sans">
              {product.originalPrice.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}