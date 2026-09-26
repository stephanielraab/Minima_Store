"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/src/context/cart-context";
import { useCheckout } from "@/src/context/checkout-context";

export function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice, clearCart } = useCart();
  const { checkoutData, updateCheckoutData } = useCheckout();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Redireciona se carrinho vazio
  if (items.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-stone-600 mb-6">Seu carrinho está vazio.</p>
        <Link
          href="/"
          className="inline-block text-[10px] tracking-[0.3em] uppercase text-stone-900 border-b border-stone-900 pb-0.5 font-sans"
        >
          Voltar às compras
        </Link>
      </div>
    );
  }

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const { name, value } = e.target;
    updateCheckoutData({ [name]: value } as any);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Validação básica
    if (
      !checkoutData.name ||
      !checkoutData.email ||
      !checkoutData.phone ||
      !checkoutData.address ||
      !checkoutData.city ||
      !checkoutData.state ||
      !checkoutData.zipCode
    ) {
      alert("Por favor, preencha todos os campos");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simula delay de processamento
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Limpa carrinho
      clearCart();

      // Redireciona pra página de sucesso
      router.push("/pedido-confirmado");
    } catch (error) {
      alert("Erro ao processar pedido");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="pb-20">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[11px] tracking-widest uppercase text-stone-400 mt-8 mb-12">
        <Link href="/" className="hover:text-stone-700 transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="#" className="hover:text-stone-700 transition-colors">
          Carrinho
        </Link>
        <span>/</span>
        <span className="text-stone-600">Checkout</span>
      </div>

      <h1 className="font-serif text-4xl font-light text-stone-900 mb-12">
        Finalizar Compra
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Info */}
            <div>
              <h2 className="font-serif text-xl font-light text-stone-900 mb-6">
                Informações Pessoais
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-stone-900 mb-2 font-sans">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={checkoutData.name}
                    onChange={handleInputChange}
                    placeholder="João Silva"
                    className="w-full border border-[#E4E2DE] px-4 py-3 text-sm font-sans focus:border-stone-900 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-900 mb-2 font-sans">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={checkoutData.email}
                    onChange={handleInputChange}
                    placeholder="joao@email.com"
                    className="w-full border border-[#E4E2DE] px-4 py-3 text-sm font-sans focus:border-stone-900 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-900 mb-2 font-sans">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={checkoutData.phone}
                    onChange={handleInputChange}
                    placeholder="(11) 99999-9999"
                    className="w-full border border-[#E4E2DE] px-4 py-3 text-sm font-sans focus:border-stone-900 focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div>
              <h2 className="font-serif text-xl font-light text-stone-900 mb-6">
                Endereço de Entrega
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-stone-900 mb-2 font-sans">
                    Endereço
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={checkoutData.address}
                    onChange={handleInputChange}
                    placeholder="Rua das Flores, 123"
                    className="w-full border border-[#E4E2DE] px-4 py-3 text-sm font-sans focus:border-stone-900 focus:outline-none transition-colors"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-900 mb-2 font-sans">
                      Cidade
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={checkoutData.city}
                      onChange={handleInputChange}
                      placeholder="São Paulo"
                      className="w-full border border-[#E4E2DE] px-4 py-3 text-sm font-sans focus:border-stone-900 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-900 mb-2 font-sans">
                      Estado
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={checkoutData.state}
                      onChange={handleInputChange}
                      placeholder="SP"
                      maxLength={2}
                      className="w-full border border-[#E4E2DE] px-4 py-3 text-sm font-sans focus:border-stone-900 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-900 mb-2 font-sans">
                    CEP
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={checkoutData.zipCode}
                    onChange={handleInputChange}
                    placeholder="01310-100"
                    className="w-full border border-[#E4E2DE] px-4 py-3 text-sm font-sans focus:border-stone-900 focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-stone-900 text-white py-4 tracking-widest uppercase text-sm font-sans hover:bg-stone-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? "Processando..." : "Confirmar Pedido"}
            </button>
          </form>
        </div>

        {/* Order Summary - Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-[#FAFAF8] border border-[#E4E2DE] p-6 sticky top-24">
            <h3 className="font-serif text-lg font-light text-stone-900 mb-6">
              Resumo do Pedido
            </h3>

            {/* Items */}
            <ul className="space-y-4 mb-6 pb-6 border-b border-[#E4E2DE]">
              {items.map((item) => (
                <li key={item.product.id} className="flex gap-3">
                  <div className="relative w-16 h-20 shrink-0 bg-stone-200 overflow-hidden">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[8px] tracking-[0.2em] text-stone-400 uppercase font-sans mb-0.5">
                      {item.product.category}
                    </div>
                    <div className="font-serif text-xs text-stone-900 leading-snug mb-1">
                      {item.product.name}
                    </div>
                    <div className="text-xs text-stone-600 font-sans">
                      Qty: {item.quantity}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Total */}
            <div className="space-y-3 font-sans">
              <div className="flex justify-between text-xs text-stone-600">
                <span>Subtotal</span>
                <span>
                  {totalPrice.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>
              <div className="flex justify-between text-xs text-stone-600">
                <span>Frete</span>
                <span>Calculado no próximo passo</span>
              </div>
              <div className="border-t border-[#E4E2DE] pt-3 flex justify-between">
                <span className="text-sm font-medium text-stone-900">Total</span>
                <span className="text-lg font-medium text-stone-900">
                  {totalPrice.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}