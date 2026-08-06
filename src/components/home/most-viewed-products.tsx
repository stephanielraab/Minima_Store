import { products } from "@/src/data";
import { ProductCard } from "@/src/components/ui/product-card";

async function getMostViewedProducts() {
  // Simula busca assíncrona (substitua por sua API/banco de dados)
  await new Promise((resolve) => setTimeout(resolve, 800));
  return products.slice(0, 4);
}

export async function MostViewedProducts() {
  const items = await getMostViewedProducts();

  return (
    <section className="mt-16 md:mt-24">
      {/* Section header */}
      <div className="flex items-end justify-between mb-8 pb-4 border-b border-[#E4E2DE]">
        <div>
          <p className="text-[9px] tracking-[0.4em] text-[#C2A67A] uppercase font-sans mb-2">
            Destaque
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-stone-900">
            Mais Vistos
          </h2>
        </div>
        <a
          href="/colecoes"
          className="nav-link text-[10px] tracking-[0.3em] uppercase text-stone-500 hover:text-stone-900 transition-colors font-sans pb-0.5"
        >
          Ver todos
        </a>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
