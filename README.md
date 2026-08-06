# MÍNIMA — Loja de Moda Contemporânea

Projeto de e-commerce de moda para portfólio, construído com **Next.js 15**, **TypeScript** e **Tailwind CSS**.

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **next/font** — Cormorant Garamond + DM Sans
- **next/image** — otimização de imagens

## Estrutura do Projeto

```
minima-store/
├── app/
│   ├── globals.css          # Estilos globais + animações
│   ├── layout.tsx           # Layout raiz com fontes e header/footer
│   └── page.tsx             # Página home
├── src/
│   ├── components/
│   │   ├── home/
│   │   │   ├── banners.tsx               # Slider de banners (client)
│   │   │   ├── most-viewed-products.tsx  # Async server component
│   │   │   ├── most-sold-products.tsx    # Async server component
│   │   │   └── product-list-skeleton.tsx # Skeleton de loading
│   │   ├── layout/
│   │   │   ├── header.tsx   # Header sticky com menu mobile
│   │   │   └── footer.tsx   # Footer com links
│   │   └── ui/
│   │       └── product-card.tsx # Card de produto reutilizável
│   └── data/
│       └── index.ts         # Dados mockados (banners + produtos)
├── next.config.js           # Domínios de imagem (Unsplash)
├── tailwind.config.ts       # Tokens de design da marca
└── tsconfig.json
```

## Design System

| Token        | Valor       | Uso                         |
|--------------|-------------|------------------------------|
| Fonte serif  | Cormorant Garamond | Títulos e logo         |
| Fonte sans   | DM Sans     | Corpo e labels               |
| `#FAFAF8`    | Cream       | Background principal         |
| `#1C1A17`    | Charcoal    | Texto principal              |
| `#E4E2DE`    | Border      | Bordas e divisores           |
| `#C2A67A`    | Accent      | Destaques e badges de sale   |

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Substituindo os dados

Edite `src/data/index.ts` para alterar banners e produtos.  
Para conectar a uma API real, substitua os `setTimeout` nos componentes `MostViewedProducts` e `MostSoldProducts` por suas chamadas `fetch`.

## Imagens

As imagens de produto vêm do Unsplash. Para usar imagens próprias:
1. Coloque em `public/products/`
2. Atualize os paths em `src/data/index.ts`
3. Remova o `remotePatterns` do `next.config.js`
