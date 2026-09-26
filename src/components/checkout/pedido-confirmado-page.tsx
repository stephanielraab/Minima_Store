"use client";

import Link from "next/link";
import { useCart } from "@/src/context/cart-context";
import { useCheckout } from "@/src/context/checkout-context";

export function PedidoConfirmadoPage() {
  const { items } = useCart();
  const { checkoutData } = useCheckout();

  return (
    <div className="py-20">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-[#C2A67A] rounded-full flex items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="font-serif text-4xl font-light text-stone-900 mb-4">
          Pedido Confirmado!
        </h1>

        {/* Message */}
        <p className="text-stone-600 text-lg mb-2 font-sans">
          Obrigado pela sua compra, {checkoutData.name}!
        </p>
        <p className="text-stone-500 text-sm mb-8 font-sans">
          Você receberá um e-mail em <strong>{checkoutData.email}</strong> com os detalhes do seu pedido.
        </p>

        {/* Order Details */}
        <div className="bg-[#FAFAF8] border border-[#E4E2DE] rounded-sm p-8 mb-8 text-left">
          <h2 className="font-serif text-lg font-light text-stone-900 mb-6">
            Detalhes do Pedido
          </h2>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between pb-3 border-b border-[#E4E2DE]">
              <span className="text-sm font-sans text-stone-600">Endereço de Entrega:</span>
              <span className="text-sm font-sans text-stone-900 text-right">
                <div>{checkoutData.address}</div>
                <div>{checkoutData.city}, {checkoutData.state} {checkoutData.zipCode}</div>
              </span>
            </div>

            <div className="flex justify-between pb-3 border-b border-[#E4E2DE]">
              <span className="text-sm font-sans text-stone-600">Itens:</span>
              <span className="text-sm font-sans text-stone-900">
                {items.reduce((acc, item) => acc + item.quantity, 0)} itens
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-sm font-sans text-stone-600">Status:</span>
              <span className="text-sm font-sans text-[#C2A67A] font-medium">
                Aguardando pagamento
              </span>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-stone-50 border border-[#E4E2DE] rounded-sm p-6 mb-8 text-left">
          <h3 className="font-serif text-lg font-light text-stone-900 mb-4">
            Próximos Passos
          </h3>
          <ol className="space-y-3 font-sans text-sm text-stone-600">
            <li className="flex gap-3">
              <span className="text-[#C2A67A] font-medium shrink-0">1.</span>
              <span>Você receberá um e-mail com o link de pagamento</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#C2A67A] font-medium shrink-0">2.</span>
              <span>Complete o pagamento de forma segura</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#C2A67A] font-medium shrink-0">3.</span>
              <span>Seu pedido será preparado e enviado</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#C2A67A] font-medium shrink-0">4.</span>
              <span>Você receberá atualizações sobre o rastreamento</span>
            </li>
          </ol>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-block bg-stone-900 text-white py-4 px-8 tracking-widest uppercase text-sm font-sans hover:bg-stone-800 transition-colors"
          >
            Continuar Comprando
          </Link>
          <Link
            href="/"
            className="inline-block border border-stone-900 text-stone-900 py-4 px-8 tracking-widest uppercase text-sm font-sans hover:bg-stone-900 hover:text-white transition-colors"
          >
            Voltar ao Início
          </Link>
        </div>

        {/* Support */}
        <p className="mt-12 text-stone-500 text-sm font-sans">
          Precisa de ajuda?{" "}
          <a href="mailto:contato@minima.com" className="text-stone-900 border-b border-stone-900">
            Entre em contato
          </a>
        </p>
      </div>
    </div>
  );
}