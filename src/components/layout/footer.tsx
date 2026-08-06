import Link from "next/link";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

const footerLinks: Record<string, FooterLink[]> = {
  Loja: [
    { label: "Coleções", href: "/colecoes" },
    { label: "Novidades", href: "/novidades" },
    { label: "Sale", href: "/sale" },
    { label: "Marcas", href: "/marcas" },
  ],
  Ajuda: [
    { label: "Trocas e Devoluções", href: "/trocas-devolucoes" },
    { label: "Guia de Tamanhos", href: "/guia-tamanhos" },
    { label: "Rastreio", href: "/rastreio" },
    { label: "Contato", href: "/contato" },
  ],
  Social: [
    { label: "Instagram", href: "https://instagram.com", external: true },
    { label: "Pinterest", href: "https://pinterest.com", external: true },
    { label: "TikTok", href: "https://tiktok.com", external: true },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[#E4E2DE] mt-16 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="font-serif text-2xl font-light tracking-[0.2em] text-stone-900 block mb-4"
            >
              MÍNIMA
            </Link>
            <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
              Moda contemporânea com propósito. Peças intemporais para o seu
              guarda-roupa.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <div className="text-[9px] tracking-[0.35em] uppercase text-stone-400 font-sans mb-5">
                {group}
              </div>
              <ul className="space-y-3.5">
                {links.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="text-stone-500 text-sm font-sans hover:text-stone-900 transition-colors leading-none"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#E4E2DE] mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone-400 text-[11px] font-sans tracking-wide">
            © {new Date().getFullYear()} MÍNIMA. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            {[
              { label: "Privacidade", href: "/privacidade" },
              { label: "Termos de Uso", href: "/termos-uso" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-stone-400 text-[11px] font-sans hover:text-stone-700 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
