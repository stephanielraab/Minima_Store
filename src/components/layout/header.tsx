"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { products } from "@/src/data";
import { useCart } from "@/src/context/cart-context";
import { useWishlist } from "@/src/context/wishlist-context";

const navLinks = [
  { label: "Coleções", href: "/colecoes" },
  { label: "Blusas", href: "/categoria/blusas" },
  { label: "Calças", href: "/categoria/calcas" },
  { label: "Vestidos", href: "/categoria/vestidos" },
  { label: "Casacos", href: "/categoria/casacos" },
  { label: "Sale", href: "/sale", accent: true },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const { totalItems, toggleCart } = useCart();
  const { items: wishlistItems } = useWishlist();

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  const suggestions =
    query.trim().length > 0
      ? products
          .filter(
            (p) =>
              p.name.toLowerCase().includes(query.toLowerCase()) ||
              p.category.toLowerCase().includes(query.toLowerCase())
          )
          .slice(0, 4)
      : [];

  function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/busca?q=${encodeURIComponent(query.trim())}`);
    setSearchOpen(false);
    setQuery("");
  }

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF8]/96 backdrop-blur-sm border-b border-[#E4E2DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile: Hamburger */}
          <button
            className="md:hidden text-stone-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="text-[10px] tracking-[0.25em] uppercase font-sans">
              {menuOpen ? "Fechar" : "Menu"}
            </span>
          </button>

          {/* Logo — centered on mobile, left on desktop */}
          <Link
            href="/"
            className="font-serif text-2xl md:text-[1.65rem] font-light tracking-[0.2em] text-stone-900 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
          >
            MÍNIMA
          </Link>

          {/* Desktop nav — centered */}
          {!searchOpen && (
            <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link text-[10px] tracking-[0.25em] uppercase font-sans transition-colors ${
                    link.accent
                      ? "text-[#C2A67A] hover:text-[#A8906A]"
                      : "text-stone-500 hover:text-stone-900"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}

          {/* Desktop inline search */}
          {searchOpen && (
            <form
              onSubmit={handleSearchSubmit}
              className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 w-full max-w-md"
            >
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar produtos..."
                className="w-full bg-transparent border-b border-stone-400 focus:border-stone-900 outline-none text-sm font-sans py-1.5 text-stone-900 placeholder:text-stone-400"
              />
              {suggestions.length > 0 && (
                <div className="absolute top-full mt-2 left-0 right-0 bg-[#FAFAF8] border border-[#E4E2DE] shadow-lg">
                  {suggestions.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => {
                        router.push(`/produto/${p.slug}`);
                        setSearchOpen(false);
                        setQuery("");
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-stone-100 text-left transition-colors"
                    >
                      <span className="text-sm font-serif text-stone-900">
                        {p.name}
                      </span>
                      <span className="text-[9px] tracking-[0.2em] uppercase text-stone-400 font-sans ml-auto">
                        {p.category}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </form>
          )}

          {/* Icons */}
          <div className="flex items-center gap-4 text-stone-600">
            {/* Search */}
            <button
              aria-label="Buscar"
              onClick={() => setSearchOpen((v) => !v)}
              className={`transition-colors ${
                searchOpen ? "text-stone-900" : "hover:text-stone-900"
              }`}
            >
              {searchOpen ? (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              )}
            </button>

            {/* Wishlist */}
            <Link
              href="/favoritos"
              aria-label="Lista de desejos"
              className="relative hover:text-stone-900 transition-colors hidden md:block"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              {wishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#C2A67A] text-white text-[9px] rounded-full flex items-center justify-center font-sans font-medium">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <button
              aria-label="Carrinho"
              onClick={toggleCart}
              className="relative hover:text-stone-900 transition-colors"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-stone-900 text-white text-[9px] rounded-full flex items-center justify-center font-sans font-medium">
                {totalItems}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile search bar */}
        {searchOpen && (
          <form onSubmit={handleSearchSubmit} className="md:hidden pb-4">
            <input
              ref={searchInputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar produtos..."
              className="w-full bg-transparent border-b border-stone-400 focus:border-stone-900 outline-none text-sm font-sans py-2 text-stone-900 placeholder:text-stone-400"
            />
            {suggestions.length > 0 && (
              <div className="mt-2 border border-[#E4E2DE]">
                {suggestions.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => {
                      router.push(`/produto/${p.slug}`);
                      setSearchOpen(false);
                      setQuery("");
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-stone-100 text-left transition-colors"
                  >
                    <span className="text-sm font-serif text-stone-900">
                      {p.name}
                    </span>
                    <span className="text-[9px] tracking-[0.2em] uppercase text-stone-400 font-sans ml-auto">
                      {p.category}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </form>
        )}
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-[#E4E2DE] bg-[#FAFAF8] px-6 py-5 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-[11px] tracking-[0.25em] uppercase font-sans py-3 border-b border-[#E4E2DE] last:border-0 ${
                link.accent ? "text-[#C2A67A]" : "text-stone-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/favoritos"
            onClick={() => setMenuOpen(false)}
            className="text-[11px] tracking-[0.25em] uppercase font-sans py-3 text-stone-700"
          >
            Favoritos {wishlistItems.length > 0 && `(${wishlistItems.length})`}
          </Link>
        </nav>
      )}
    </header>
  );
}