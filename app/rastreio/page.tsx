import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rastreio — MÍNIMA",
};

export default function RastreioPage() {
  return (
    <div className="pb-20">
      {/* Page header */}
      <div className="mt-10 md:mt-14 mb-12 pb-6 border-b border-[#E4E2DE]">
        <p className="text-[9px] tracking-[0.4em] text-[#C2A67A] uppercase font-sans mb-2">
          Acompanhamento
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-light text-stone-900">
          Rastreio de Pedido
        </h1>
        <p className="text-stone-500 text-sm mt-3 max-w-md">
          Acompanhe o status do seu pedido em tempo real.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-3xl">
        <div className="p-8 border border-[#E4E2DE] mb-8">
          <div className="mb-6">
            <label className="block text-[9px] tracking-[0.3em] uppercase text-stone-600 font-sans mb-3">
              Número do Pedido
            </label>
            <input
              type="text"
              placeholder="Ex: MINIMA-2026-123456"
              className="w-full px-4 py-3 border border-[#E4E2DE] focus:border-stone-900 outline-none text-sm font-sans"
            />
          </div>
          <button className="w-full bg-stone-900 text-white text-[11px] tracking-[0.3em] uppercase font-sans py-3 hover:bg-stone-800 transition-colors">
            Rastrear Pedido
          </button>
        </div>

        <div className="space-y-6">
          <h2 className="font-serif text-2xl font-light text-stone-900">
            Como funciona o rastreio?
          </h2>

          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Pedido Confirmado",
                desc: "Você receberá um email de confirmação com o número do seu pedido.",
              },
              {
                step: "2",
                title: "Preparando",
                desc: "Seu pedido está sendo preparado no nosso centro de distribuição.",
              },
              {
                step: "3",
                title: "Enviado",
                desc: "Seu pacote foi enviado! Um código de rastreamento será enviado por email.",
              },
              {
                step: "4",
                title: "Em Trânsito",
                desc: "Seu pedido está a caminho. Você pode acompanhar pelo código de rastreamento.",
              },
              {
                step: "5",
                title: "Entregue",
                desc: "Seu pedido chegou! Aproveite suas novas peças.",
              },
            ].map((stage) => (
              <div key={stage.step} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center shrink-0 font-sans text-xs font-medium">
                  {stage.step}
                </div>
                <div>
                  <p className="font-serif text-stone-900 mb-1">{stage.title}</p>
                  <p className="text-sm text-stone-600">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-stone-50 border border-[#E4E2DE]">
          <p className="text-sm text-stone-600 mb-4">
            Não encontrou seu pedido?
          </p>
          <a
            href="/contato"
            className="text-[10px] tracking-[0.3em] uppercase text-stone-900 border-b border-stone-900 pb-0.5 font-sans"
          >
            Entre em contato com a gente
          </a>
        </div>
      </div>
    </div>
  );
}
