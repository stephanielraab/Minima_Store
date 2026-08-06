import { ProductCard } from "@/src/components/ui/product-card";
import { products } from "@/src/data";

type PageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: PageProps) {
  const { q } = await searchParams;
  const query = (q ?? "").trim().toLowerCase();

  const results = query
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      )
    : [];

  return (
    <div className="pb-20">
      {/* Page header */}
      <div className="mt-10 md:mt-14 mb-8 pb-6 border-b border-[#E4E2DE]">
        <p className="text-[9px] tracking-[0.4em] text-[#C2A67A] uppercase font-sans mb-2">
          Busca
        </p>
        <h1 className="font-serif text-3xl md:text-4xl font-light text-stone-900">
          {query ? `Resultados para "${q}"` : "Buscar produtos"}
        </h1>
        {query && (
          <p className="text-stone-500 text-sm mt-3">
            {results.length}{" "}
            {results.length === 1 ? "resultado encontrado" : "resultados encontrados"}
          </p>
        )}
      </div>

      {/* Results grid */}
      {query && results.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {query && results.length === 0 && (
        <p className="text-stone-400 text-sm py-16 text-center">
          Nenhum produto encontrado para &quot;{q}&quot;.
        </p>
      )}

      {!query && (
        <p className="text-stone-400 text-sm py-16 text-center">
          Use a busca no topo da página para encontrar produtos.
        </p>
      )}
    </div>
  );
}
