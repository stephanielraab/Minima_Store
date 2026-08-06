import type { Metadata } from "next";
import { ProductCard } from "@/src/components/ui/product-card";
import { products } from "@/src/data";

export const metadata: Metadata = {
  title: "Coleções — MÍNIMA",
  description: "Conheça todas as nossas coleções de moda contemporânea.",
};

export default function ColecoesPage() {
  return (
    <div className="pb-20">
      {/* Page header */}
      <div className="mt-10 md:mt-14 mb-8 pb-6 border-b border-[#E4E2DE]">
        <p className="text-[9px] tracking-[0.4em] text-[#C2A67A] uppercase font-sans mb-2">
          Explore
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-light text-stone-900">
          Coleções
        </h1>
        <p className="text-stone-500 text-sm mt-3 max-w-md">
          Todos os nossos {products.length} produtos em um só lugar. Peças selecionadas com cuidado para seu guarda-roupa.
        </p>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
