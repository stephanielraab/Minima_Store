import type { Metadata } from "next";
import { ProductCard } from "@/src/components/ui/product-card";
import { products } from "@/src/data";

export const metadata: Metadata = {
  title: "Sale — MÍNIMA",
  description: "Peças selecionadas com desconto por tempo limitado.",
};

export default function SalePage() {
  const saleProducts = products.filter((p) => p.originalPrice !== null);

  return (
    <div className="pb-20">
      {/* Page header */}
      <div className="mt-10 md:mt-14 mb-8 pb-6 border-b border-[#E4E2DE]">
        <p className="text-[9px] tracking-[0.4em] text-[#C2A67A] uppercase font-sans mb-2">
          Por tempo limitado
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-light text-stone-900">
          Sale
        </h1>
        <p className="text-stone-500 text-sm mt-3 max-w-md">
          {saleProducts.length}{" "}
          {saleProducts.length === 1 ? "peça selecionada" : "peças selecionadas"}{" "}
          com desconto.
        </p>
      </div>

      {/* Product grid */}
      {saleProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {saleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-stone-400 text-sm py-16 text-center">
          Nenhuma peça em sale no momento.
        </p>
      )}
    </div>
  );
}
