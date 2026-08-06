import { Banners } from "@/src/components/home/banners";
import { MostSoldProducts } from "@/src/components/home/most-sold-products";
import { MostViewedProducts } from "@/src/components/home/most-viewed-products";
import { ProductListSkeleton } from "@/src/components/home/product-list-skeleton";
import { data } from "@/src/data";
import { Suspense } from "react";

const perks = [
  {
    title: "Entrega Gratuita",
    subtitle: "Para compras acima de R$299.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <rect x="1" y="3" width="15" height="13" />
        <path d="M16 8h4l3 4v4h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Troca Sem Burocracia",
    subtitle: "Período de 30 dias garantido.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
  },
  {
    title: "Pagamento Seguro",
    subtitle: "Suas compras protegidas.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function Page() {
  return (
    <div className="pb-20">
      <Banners list={data.banners} />

      {/* Perks — mesma lógica do original, visual renovado */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E4E2DE] border border-[#E4E2DE] mt-8 md:mt-14">
        {perks.map((perk) => (
          <div
            key={perk.title}
            className="bg-[#FAFAF8] flex items-center gap-5 px-8 py-6"
          >
            <div className="w-12 shrink-0 text-[#C2A67A]">{perk.icon}</div>
            <div className="border-l border-[#E4E2DE] pl-5">
              <div className="text-xs font-medium tracking-[0.2em] uppercase text-stone-900">
                {perk.title}
              </div>
              <div className="text-stone-500 text-sm mt-0.5">{perk.subtitle}</div>
            </div>
          </div>
        ))}
      </div>

      <Suspense fallback={<ProductListSkeleton />}>
        <MostViewedProducts />
      </Suspense>

      <Suspense fallback={<ProductListSkeleton />}>
        <MostSoldProducts />
      </Suspense>
    </div>
  );
}