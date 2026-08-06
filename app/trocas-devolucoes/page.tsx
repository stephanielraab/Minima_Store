import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trocas e Devoluções — MÍNIMA",
};

const sections = [
  {
    title: "Período de Devolução",
    content: "Você tem até 30 dias após receber seu pedido para solicitar troca ou devolução.",
  },
  {
    title: "Condição do Produto",
    content:
      "O item deve estar em perfeito estado, sem uso, com a etiqueta original intacta e acompanhado de todos os acessórios.",
  },
  {
    title: "Como Solicitar",
    content:
      "Acesse sua conta, vá para 'Meus Pedidos', selecione o item e clique em 'Solicitar Devolução'. Enviaremos um código de devolução por email.",
  },
  {
    title: "Envio de Devolução",
    content:
      "Use o código de rastreio fornecido para enviar o item de volta. Não cobramos o frete de devolução.",
  },
  {
    title: "Reembolso",
    content:
      "Após recebermos e inspecionarmos o item, o reembolso será processado em 3-5 dias úteis para sua conta.",
  },
  {
    title: "Trocas",
    content:
      "Prefere trocar? Sem problema! Envie o item de volta e enviaremos o novo produto sem custos adicionais de frete.",
  },
];

export default function TrocasDevolucoes() {
  return (
    <div className="pb-20">
      {/* Page header */}
      <div className="mt-10 md:mt-14 mb-12 pb-6 border-b border-[#E4E2DE]">
        <p className="text-[9px] tracking-[0.4em] text-[#C2A67A] uppercase font-sans mb-2">
          Suporte
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-light text-stone-900">
          Trocas e Devoluções
        </h1>
        <p className="text-stone-500 text-sm mt-3 max-w-md">
          Saiba como solicitar uma troca ou devolução dos seus produtos.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-3xl">
        <div className="space-y-8">
          {sections.map((section, i) => (
            <div key={i} className="border-b border-[#E4E2DE] pb-8 last:border-0">
              <h2 className="font-serif text-xl font-light text-stone-900 mb-3">
                {section.title}
              </h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-stone-50 border border-[#E4E2DE]">
          <p className="text-sm text-stone-600 mb-4">
            Ainda tem dúvidas?
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
