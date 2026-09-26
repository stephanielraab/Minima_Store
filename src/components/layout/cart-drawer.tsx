"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/src/context/cart-context";

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeFromCart, totalPrice } =
    useCart();
  const router = useRouter();

  function handleCheckout() {
    closeCart();
    router.push("/checkout");
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-stone-900/40 z-[60] transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-[#FAFAF8] z-[70] shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Carrinho de compras"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E4E2DE]">
          <h2 className="font-serif text-xl font-light tracking-wide text-stone-900">
            Sacola{" "}
            <span className="font-sans text-xs text-stone-400 tracking-normal">
              ({items.length})
            </span>
          </h2>
          <button
            onClick={closeCart}
            aria-label="Fechar sacola"
            className="text-stone-500 hover:text-stone-900 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-3 py-16">
              <p className="text-stone-400 text-sm font-sans">
                Sua sacola está vazia.
              </p>
              <Link
                href="/"
                onClick={closeCart}
                className="text-[10px] tracking-[0.3em] uppercase text-stone-900 border-b border-stone-900 pb-0.5 font-sans"
              >
                Continuar comprando
              </Link>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.product.id} className="flex gap-4">
                  <div className="relative w-20 h-24 shrink-0 bg-stone-100 overflow-hidden">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-[9px] tracking-[0.25em] text-stone-400 uppercase font-sans mb-1">
                      {item.product.category}
                    </div>
                    <div className="font-serif text-sm text-stone-900 leading-snug pr-4">
                      {item.product.name}
                    </div>
                    <div className="text-sm text-stone-900 font-sans mt-1">
                      {item.product.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </div>

                    <div className="flex items-center gap-3 mt-2.5">
                      <div className="flex items-center border border-[#E4E2DE]">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          aria-label="Diminuir quantidade"
                          className="w-6 h-6 flex items-center justify-center text-stone-600 hover:text-stone-900"
                        >
                          −
                        </button>
                        <span className="w-7 text-center text-xs font-sans">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          aria-label="Aumentar quantidade"
                          className="w-6 h-6 flex items-center justify-center text-stone-600 hover:text-stone-900"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-[10px] tracking-[0.2em] uppercase text-stone-400 hover:text-stone-900 font-sans transition-colors"
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[#E4E2DE] px-6 py-5">
            <div className="flex items-center justify-between mb-4 font-sans">
              <span className="text-xs tracking-[0.2em] uppercase text-stone-500">
                Subtotal
              </span>
              <span className="text-lg text-stone-900">
                {totalPrice.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-stone-900 text-white text-[11px] tracking-[0.3em] uppercase font-sans py-4 hover:bg-stone-800 transition-colors"
            >
              Finalizar Compra
            </button>
          </div>
        )}
      </aside>
    </>
  );
}