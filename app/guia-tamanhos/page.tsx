import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guia de Tamanhos — MÍNIMA",
};

const sizes = [
  {
    size: "PP",
    bust: "76-82cm",
    waist: "60-66cm",
    hip: "84-90cm",
  },
  {
    size: "P",
    bust: "82-88cm",
    waist: "66-72cm",
    hip: "90-96cm",
  },
  {
    size: "M",
    bust: "88-94cm",
    waist: "72-78cm",
    hip: "96-102cm",
  },
  {
    size: "G",
    bust: "94-100cm",
    waist: "78-84cm",
    hip: "102-108cm",
  },
  {
    size: "GG",
    bust: "100-106cm",
    waist: "84-90cm",
    hip: "108-114cm",
  },
];

export default function GuiaTamanhos() {
  return (
    <div className="pb-20">
      {/* Page header */}
      <div className="mt-10 md:mt-14 mb-12 pb-6 border-b border-[#E4E2DE]">
        <p className="text-[9px] tracking-[0.4em] text-[#C2A67A] uppercase font-sans mb-2">
          Como escolher
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-light text-stone-900">
          Guia de Tamanhos
        </h1>
        <p className="text-stone-500 text-sm mt-3 max-w-md">
          Encontre o tamanho perfeito usando nossa tabela de medidas.
        </p>
      </div>

      {/* Sizes table */}
      <div className="max-w-3xl overflow-x-auto mb-12">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#E4E2DE]">
              <th className="text-left font-serif text-lg font-light text-stone-900 py-4 px-4">
                Tamanho
              </th>
              <th className="text-left font-sans text-[10px] tracking-[0.2em] uppercase text-stone-600 py-4 px-4">
                Busto
              </th>
              <th className="text-left font-sans text-[10px] tracking-[0.2em] uppercase text-stone-600 py-4 px-4">
                Cintura
              </th>
              <th className="text-left font-sans text-[10px] tracking-[0.2em] uppercase text-stone-600 py-4 px-4">
                Quadril
              </th>
            </tr>
          </thead>
          <tbody>
            {sizes.map((row) => (
              <tr key={row.size} className="border-b border-[#E4E2DE] hover:bg-stone-50">
                <td className="font-sans font-medium text-stone-900 py-4 px-4">
                  {row.size}
                </td>
                <td className="text-stone-600 py-4 px-4">{row.bust}</td>
                <td className="text-stone-600 py-4 px-4">{row.waist}</td>
                <td className="text-stone-600 py-4 px-4">{row.hip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tips */}
      <div className="max-w-3xl">
        <h2 className="font-serif text-2xl font-light text-stone-900 mb-6">
          Dicas para medir
        </h2>
        <div className="space-y-4 text-stone-600">
          <p className="text-sm leading-relaxed">
            <span className="font-serif font-light text-stone-900">Busto:</span> Meça na parte mais larga do peito, com a fita passando sob os ombros.
          </p>
          <p className="text-sm leading-relaxed">
            <span className="font-serif font-light text-stone-900">Cintura:</span> Meça na cintura natural, sem apertar a fita métrica.
          </p>
          <p className="text-sm leading-relaxed">
            <span className="font-serif font-light text-stone-900">Quadril:</span> Meça na parte mais larga do quadril, mantendo a fita alinhada.
          </p>
          <p className="text-sm leading-relaxed">
            <span className="font-serif font-light text-stone-900">Dica:</span> Peça ajuda de alguém para tirar as medidas com precisão. Mantenha a fita métrica paralela ao chão.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-stone-50 border border-[#E4E2DE]">
          <p className="text-sm text-stone-600 mb-4">
            Não tem certeza do seu tamanho?
          </p>
          <a
            href="/contato"
            className="text-[10px] tracking-[0.3em] uppercase text-stone-900 border-b border-stone-900 pb-0.5 font-sans"
          >
            Nos envie uma mensagem
          </a>
        </div>
      </div>
    </div>
  );
}
