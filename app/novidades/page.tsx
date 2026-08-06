import type { Metadata } from "next";
import { ProductCard } from "@/src/components/ui/product-card";
import { products } from "@/src/data";

export const metadata: Metadata = {
  title: "Novidades — MÍNIMA",
  description: "Conheça as peças mais recentes da coleção MÍNIMA.",
};

export default function NovidadesPage() {
  const newProducts = products.filter((p) => p.isNew);

  return (
    <div className="pb-20">
      {/* Page header */}
      <div className="mt-10 md:mt-14 mb-8 pb-6 border-b border-[#E4E2DE]">
        <p className="text-[9px] tracking-[0.4em] text-[#C2A67A] uppercase font-sans mb-2">
          Últimas chegadas
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-light text-stone-900">
          Novidades
        </h1>
        <p className="text-stone-500 text-sm mt-3 max-w-md">
          {newProducts.length}{" "}
          {newProducts.length === 1 ? "peça nova" : "peças novas"} adicionadas recentemente à coleção.
        </p>
      </div>

      {/* Product grid */}
      {newProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-stone-400 text-sm py-16 text-center">
          Nenhuma peça nova no momento.
        </p>
      )}
    </div>
  );
}
