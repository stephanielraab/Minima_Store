import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
// @ts-ignore: import of CSS file without type declarations
import "./globals.css";
import { Header } from "@/src/components/layout/header";
import { Footer } from "@/src/components/layout/footer";
import { CartDrawer } from "@/src/components/layout/cart-drawer";
import { CartProvider } from "@/src/context/cart-context";
import { WishlistProvider } from "@/src/context/wishlist-context";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MÍNIMA — Moda Contemporânea",
  description:
    "Peças intemporais para o guarda-roupa moderno. Moda com propósito.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${cormorant.variable} ${dmSans.variable} font-sans`}>
        <CartProvider>
          <WishlistProvider>
            <Header />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {children}
            </main>
            <Footer />
            <CartDrawer />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}