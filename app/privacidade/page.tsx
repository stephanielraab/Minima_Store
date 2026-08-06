import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade — MÍNIMA",
};

export default function PrivacidadePage() {
  return (
    <div className="pb-20">
      {/* Page header */}
      <div className="mt-10 md:mt-14 mb-12 pb-6 border-b border-[#E4E2DE]">
        <h1 className="font-serif text-4xl md:text-5xl font-light text-stone-900">
          Política de Privacidade
        </h1>
        <p className="text-stone-500 text-sm mt-3">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>
      </div>

      {/* Content */}
      <div className="max-w-3xl space-y-8">
        {[
          {
            title: "1. Introdução",
            content:
              "A MÍNIMA ('Empresa', 'nós', 'nosso') opera o site. Esta página informa você sobre nossas políticas de coleta, uso e divulgação de dados pessoais quando você usa nosso Serviço.",
          },
          {
            title: "2. Coleta de Dados",
            content:
              "Coletamos vários tipos de informações para fins diversos: dados pessoais, cookies, logs de acesso e outras tecnologias de rastreamento. Seus dados são usados para melhorar o serviço, processar transações e comunicar-nos com você.",
          },
          {
            title: "3. Uso de Informações",
            content:
              "Usamos suas informações para fornecer, manter e melhorar nossos serviços. Não compartilhamos seus dados com terceiros sem seu consentimento, exceto conforme exigido por lei.",
          },
          {
            title: "4. Segurança",
            content:
              "A segurança dos seus dados é importante para nós, mas lembre-se de que nenhum método de transmissão pela internet é 100% seguro. Enquanto nos esforçamos para usar meios comercialmente aceitáveis, não podemos garantir segurança absoluta.",
          },
          {
            title: "5. Seus Direitos",
            content:
              "Você tem direitos sobre seus dados pessoais, incluindo o direito de acessá-los, corrigi-los ou excluí-los. Para exercer esses direitos, entre em contato conosco.",
          },
          {
            title: "6. Contato",
            content:
              'Se você tiver dúvidas sobre esta política de privacidade, entre em contato conosco em oi@minima.com.br ou pelo nosso formulário de contato.',
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
