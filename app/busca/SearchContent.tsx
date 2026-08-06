"use client";

import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/src/components/ui/product-card";
import { products } from "@/src/data";

export default function SearchContent() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";
  const query = q.trim().toLowerCase();

  const results = query
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      )
    : [];

  return (
    <>
      <div className="mt-10 md:mt-14 mb-8 pb-6 border-b border-[#E4E2DE]">
        <p className="text-[9px] tracking-[0.4em] text-[#C2A67A] uppercase">
          Busca
        </p>

        <h1 className="font-serif text-3xl md:text-4xl font-light">
          {query ? `Resultados para "${q}"` : "Buscar produtos"}
        </h1>

        {query && (
          <p className="text-stone-500 mt-3">
            {results.length} resultado(s) encontrado(s)
          </p>
        )}
      </div>

      {query && results.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {query && results.length === 0 && (
        <p className="text-center py-16">
          Nenhum produto encontrado.
        </p>
      )}

      {!query && (
        <p className="text-center py-16">
          Use a busca no topo da página.
        </p>
      )}
    </>
  );
}