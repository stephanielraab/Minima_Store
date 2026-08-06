import { products } from "@/src/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Params = {
  slug: string;
};


export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  return {
    title: product ? `${product.name} — MÍNIMA` : "Produto não encontrado",
    description: product?.name,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const discount =
    product.originalPrice !== null
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) * 100
        )
      : null;

  return (
    <div className="pb-20">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[11px] tracking-widest uppercase text-stone-400 mt-8 mb-12">
        <Link href="/" className="hover:text-stone-700 transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="text-stone-600">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* Image */}
        <div className="flex items-center justify-center bg-stone-100 aspect-[3/4]">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={800}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-start">
          {/* Category */}
          <div className="text-[9px] tracking-[0.3em] text-stone-400 uppercase mb-4">
            {product.category}
          </div>

          {/* Title */}
          <h1 className="font-serif text-4xl md:text-5xl font-light text-stone-900 mb-6 leading-tight">
            {product.name}
          </h1>

          {/* Price */}
          <div className="flex items-end gap-3 mb-8">
            <span className="font-sans text-3xl font-medium text-stone-900">
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
            {product.originalPrice && (
              <>
                <span className="text-sm text-stone-400 line-through">
                  {product.originalPrice.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
                <span className="bg-[#C2A67A] text-white text-xs px-2.5 py-1 tracking-wider">
                  -{discount}%
                </span>
              </>
            )}
          </div>

          {/* Divider */}
          <div className="border-b border-[#E4E2DE] my-8" />

          {/* Description */}
          <div className="mb-8">
            <h3 className="font-sans text-sm font-medium text-stone-900 mb-3">
              Sobre esta peça
            </h3>
            <ul className="text-stone-600 text-sm space-y-2 leading-relaxed">
              <li>• Peça essencial para o guarda-roupa</li>
              <li>• Corte versátil que combina com tudo</li>
              <li>• Tecido de qualidade premium</li>
              <li>• Cuidados: lavar na máquina, água fria</li>
            </ul>
          </div>

          {/* Size selector */}
          <div className="mb-8">
            <label className="font-sans text-sm font-medium text-stone-900 block mb-3">
              Tamanho
            </label>
            <div className="flex gap-2 flex-wrap">
              {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  className="border border-stone-300 w-10 h-10 flex items-center justify-center text-sm hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-colors font-sans"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to cart */}
          <button className="w-full bg-stone-900 text-white py-4 tracking-widest uppercase text-sm font-sans mb-3 hover:bg-stone-800 transition-colors">
            Adicionar ao Carrinho
          </button>
          <button className="w-full border border-stone-900 text-stone-900 py-4 tracking-widest uppercase text-sm font-sans hover:bg-stone-900 hover:text-white transition-colors">
            ♡ Adicionar à Lista
          </button>

          {/* Benefits */}
          <div className="border-t border-[#E4E2DE] mt-8 pt-8">
            <div className="space-y-4">
              <div className="flex gap-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-[#C2A67A] shrink-0"
                >
                  <rect x="1" y="3" width="15" height="13" />
                  <path d="M16 8h4l3 4v4h-7V8z" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
                <div className="text-sm">
                  <div className="font-medium text-stone-900">
                    Entrega Gratuita
                  </div>
                  <div className="text-stone-500">Acima de R$299</div>
                </div>
              </div>
              <div className="flex gap-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-[#C2A67A] shrink-0"
                >
                  <polyline points="17 1 21 5 17 9" />
                  <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                  <polyline points="7 23 3 19 7 15" />
                  <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                </svg>
                <div className="text-sm">
                  <div className="font-medium text-stone-900">
                    Troca de 30 Dias
                  </div>
                  <div className="text-stone-500">Sem complicações</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="mt-20">
        <h2 className="font-serif text-3xl font-light text-stone-900 mb-8">
          Mais da categoria
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products
            .filter(
              (p) => p.category === product.category && p.id !== product.id
            )
            .slice(0, 4)
            .map((related) => (
              <Link
                key={related.id}
                href={`/produto/${related.slug}`}
                className="group block"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
                  <Image
                    src={related.image}
                    alt={related.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-3">
                  <div className="font-serif text-sm text-stone-900">
                    {related.name}
                  </div>
                  <div className="text-sm font-medium text-stone-900 mt-1">
                    {related.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}