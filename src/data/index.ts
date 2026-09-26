export type Banner = {
  id: string;
  title: string;
  subtitle: string;
  cta: string;
  theme: "dark" | "light";
  bg: string;
};


export type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice: number | null;
  category: string;
  image: string;
  slug: string;
  isNew: boolean;
};

export const data = {
  banners: [
    {
      id: "1",
      title: "Coleção\nInverno",
      subtitle: "Essencialismo elegante para os dias frios.",
      cta: "Ver Coleção",
      theme: "dark" as const,
      bg: "from-stone-900 via-stone-800 to-stone-700",
    },
    {
      id: "2",
      title: "Básicos\nRefinados",
      subtitle: "O guarda-roupa começa com o essencial.",
      cta: "Explorar",
      theme: "light" as const,
      bg: "from-amber-50 via-stone-100 to-stone-200",
    },
    {
      id: "3",
      title: "Edição\nLinho",
      subtitle: "Leveza e textura para o dia a dia.",
      cta: "Descobrir",
      theme: "light" as const,
      bg: "from-stone-100 via-amber-50 to-amber-100",
    },
  ],
};

export const products: Product[] = [
  {
    id: "1",
    name: "Camiseta Oversized Essencial",
    price: 129.9,
    originalPrice: null,
    category: "Blusas",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    slug: "camiseta-oversized-essencial",
    isNew: true,
  },
  {
    id: "2",
    name: "Calça Wide Leg Linho",
    price: 249.9,
    originalPrice: 299.9,
    category: "Calças",
    image:
      "https://images.unsplash.com/photo-1767631338127-8cd80ee2f9df?w=600&q=80",
    slug: "calca-wide-leg-linho",
    isNew: false,
  },
  {
    id: "3",
    name: "Blazer Oversized Estruturado",
    price: 389.9,
    originalPrice: null,
    category: "Casacos",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",
    slug: "blazer-oversized-estruturado",
    isNew: true,
  },
  {
    id: "4",
    name: "Vestido Slip Midi",
    price: 219.9,
    originalPrice: 259.9,
    category: "Vestidos",
    image:
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80",
    slug: "vestido-slip-midi",
    isNew: false,
  },
  {
    id: "5",
    name: "Casaco Trench Clássico",
    price: 549.9,
    originalPrice: null,
    category: "Casacos",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
    slug: "casaco-trench-classico",
    isNew: false,
  },
  {
    id: "6",
    name: "Conjunto Linho Natural",
    price: 319.9,
    originalPrice: 379.9,
    category: "Conjuntos",
    image:
      "https://images.unsplash.com/photo-1752074212160-b3b16216a07d?w=600&q=80",
    slug: "conjunto-linho-natural",
    isNew: true,
  },
  {
    id: "7",
    name: "Regata Canelada Fina",
    price: 89.9,
    originalPrice: null,
    category: "Blusas",
    image:
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&q=80",
    slug: "regata-canelada-fina",
    isNew: false,
  },
  {
    id: "8",
    name: "Saia Midi Plissada",
    price: 179.9,
    originalPrice: 199.9,
    category: "Saias",
    image:
      "https://images.unsplash.com/photo-1552874869-5c39ec9288dc?w=600&q=80",
    slug: "saia-midi-plissada",
    isNew: false,
  },
];