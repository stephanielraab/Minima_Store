import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductCard } from "@/src/components/ui/product-card";
import { products } from "@/src/data";

const categoryMap: Record<string, string> = {
  blusas: "Blusas",
  calcas: "Calças",
  vestidos: "Vestidos",
  casacos: "Casacos",
  saias: "Saias",
  conjuntos: "Conjuntos",
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(categoryMap).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const label = categoryMap[slug];
  return {
    title: label ? `${label} — MÍNIMA` : "Categoria — MÍNIMA",
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const label = categoryMap[slug];

  if (!label) notFound();

  const categoryProducts = products.filter((p) => p.category === label);

  return (
    <div className="pb-20">
      {/* Page header */}
      <div className="mt-10 md:mt-14 mb-8 pb-6 border-b border-[#E4E2DE]">
        <p className="text-[9px] tracking-[0.4em] text-[#C2A67A] uppercase font-sans mb-2">
          Categoria
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-light text-stone-900">
          {label}
        </h1>
        <p className="text-stone-500 text-sm mt-3 max-w-md">
          {categoryProducts.length}{" "}
          {categoryProducts.length === 1 ? "peça encontrada" : "peças encontradas"}
        </p>
      </div>

      {/* Product grid */}
      {categoryProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-stone-400 text-sm py-16 text-center">
          Nenhuma peça encontrada nesta categoria ainda.
        </p>
      )}
    </div>
  );
}
