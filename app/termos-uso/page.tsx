import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso — MÍNIMA",
};

export default function TermosUsoPage() {
  return (
    <div className="pb-20">
      {/* Page header */}
      <div className="mt-10 md:mt-14 mb-12 pb-6 border-b border-[#E4E2DE]">
        <h1 className="font-serif text-4xl md:text-5xl font-light text-stone-900">
          Termos de Uso
        </h1>
        <p className="text-stone-500 text-sm mt-3">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>
      </div>

      {/* Content */}
      <div className="max-w-3xl space-y-8">
        {[
          {
            title: "1. Aceitação dos Termos",
            content:
              "Ao acessar e usar este site, você aceita estar vinculado por estes termos. Se você não concordar com qualquer parte destes termos, não use este serviço.",
          },
          {
            title: "2. Licença de Uso",
            content:
              "É concedida a você uma licença limitada, não exclusiva e revogável para acessar e usar este site para fins pessoais. Você não pode reproduzir, distribuir ou transmitir qualquer conteúdo sem permissão.",
          },
          {
            title: "3. Isenção de Responsabilidade",
            content:
              'Este site e seu conteúdo são fornecidos "como estão" sem garantias de qualquer tipo. Não somos responsáveis por danos diretos, indiretos ou consequentes decorrentes do uso do site.',
          },
          {
            title: "4. Limitação de Responsabilidade",
            content:
              "Em nenhum caso a MÍNIMA será responsável por quaisquer danos especiais, incidentais, indiretos ou consequentes resultantes do acesso ou uso do site.",
          },
          {
            title: "5. Links para Terceiros",
            content:
              "Este site pode conter links para sites de terceiros. Não somos responsáveis pelo conteúdo desses sites e sua visita é por sua conta e risco.",
          },
          {
            title: "6. Modificação dos Termos",
            content:
              "Reservamos o direito de modificar estes termos a qualquer momento. Alterações significativas serão comunicadas com antecedência. O uso continuado do site significa sua aceitação dos novos termos.",
          },
          {
            title: "7. Lei Aplicável",
            content:
              "Estes termos são regidos pelas leis do Brasil e você concorda em se submeter à jurisdição exclusiva dos tribunais brasileiros.",
          },
          {
            title: "8. Contato",
            content:
              'Se você tiver dúvidas sobre estes termos, entre em contato conosco em oi@minima.com.br.',
          },
        ].map((section) => (
          <div key={section.title} className="border-b border-[#E4E2DE] pb-8 last:border-0">
            <h2 className="font-serif text-xl font-light text-stone-900 mb-3">
              {section.title}
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
