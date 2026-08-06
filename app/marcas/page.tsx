import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marcas — MÍNIMA",
  description: "Conheça as marcas parceiras da MÍNIMA.",
};

const brands = [
  {
    name: "Essencialismo",
    description: "Peças básicas e intemporais com qualidade excepcional.",
  },
  {
    name: "Linho Natural",
    description: "Coleção sustentável feita com linho 100% puro.",
  },
  {
    name: "Minimalista",
    description: "Cortes limpos e silhuetas elegantes para o dia a dia.",
  },
  {
    name: "Contemporâneo",
    description: "Designs inovadores que refletem tendências atuais.",
  },
  {
    name: "Clássico Refinado",
    description: "Peças sofisticadas que transcendem o tempo.",
  },
  {
    name: "Estação Moda",
    description: "Coleções sazonais pensadas com cuidado.",
  },
];

export default function MarcasPage() {
  return (
    <div className="pb-20">
      {/* Page header */}
      <div className="mt-10 md:mt-14 mb-12 pb-6 border-b border-[#E4E2DE]">
        <p className="text-[9px] tracking-[0.4em] text-[#C2A67A] uppercase font-sans mb-2">
          Nossos parceiros
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-light text-stone-900">
          Marcas
        </h1>
        <p className="text-stone-500 text-sm mt-3 max-w-md">
          Selecionamos marcas que compartilham nossos valores de qualidade e design atemporal.
        </p>
      </div>

      {/* Brands grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="flex flex-col gap-4 p-8 border border-[#E4E2DE] hover:border-[#C2A67A] transition-colors"
          >
            <h2 className="font-serif text-2xl font-light text-stone-900">
              {brand.name}
            </h2>
            <p className="text-stone-500 text-sm leading-relaxed">
              {brand.description}
            </p>
            <a
              href="#"
              className="text-[10px] tracking-[0.3em] uppercase text-stone-600 hover:text-stone-900 font-sans mt-auto transition-colors"
            >
              Conhecer marca →
            </a>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 md:mt-20 p-10 md:p-16 bg-stone-900 text-white flex flex-col items-center text-center">
        <p className="text-[9px] tracking-[0.4em] uppercase font-sans mb-3">
          Parceria
        </p>
        <h2 className="font-serif text-3xl font-light mb-4">
          Sua marca faz parte da MÍNIMA?
        </h2>
        <p className="text-stone-300 text-sm max-w-md mb-6">
          Somos sempre abertos a colaborações com marcas que compartilham nossa visão de qualidade e design.
        </p>
        <a
          href="/contato"
          className="text-[10px] tracking-[0.3em] uppercase font-sans border-b border-white pb-1 hover:opacity-80 transition-opacity"
        >
          Entre em contato
        </a>
      </div>
    </div>
  );
}
