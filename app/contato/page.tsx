"use client";

import type { Metadata } from "next";
import { useState } from "react";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Aqui você conectaria com um serviço de email real (SendGrid, etc)
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  }

  return (
    <div className="pb-20">
      {/* Page header */}
      <div className="mt-10 md:mt-14 mb-12 pb-6 border-b border-[#E4E2DE]">
        <p className="text-[9px] tracking-[0.4em] text-[#C2A67A] uppercase font-sans mb-2">
          Fale conosco
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-light text-stone-900">
          Contato
        </h1>
        <p className="text-stone-500 text-sm mt-3 max-w-md">
          Tem uma pergunta ou sugestão? Adoraríamos ouvir de você.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl">
        {/* Contact info */}
        <div className="md:col-span-1">
          <div className="space-y-8">
            {[
              {
                label: "Email",
                value: "oi@minima.com.br",
                href: "mailto:oi@minima.com.br",
              },
              {
                label: "Telefone",
                value: "(11) 99999-9999",
                href: "tel:+5511999999999",
              },
              {
                label: "Horário de atendimento",
                value: "Seg-Sex, 9h às 18h",
              },
              {
                label: "Endereço",
                value: "São Paulo, SP",
              },
            ].map((info) => (
              <div key={info.label}>
                <p className="text-[9px] tracking-[0.3em] uppercase text-stone-400 font-sans mb-2">
                  {info.label}
                </p>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-stone-900 hover:text-[#C2A67A] transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-stone-900">{info.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="md:col-span-2 space-y-5"
        >
          <div>
            <label className="block text-[9px] tracking-[0.3em] uppercase text-stone-600 font-sans mb-2">
              Nome
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-[#E4E2DE] focus:border-stone-900 outline-none text-sm font-sans"
              placeholder="Seu nome"
            />
          </div>

          <div>
            <label className="block text-[9px] tracking-[0.3em] uppercase text-stone-600 font-sans mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-[#E4E2DE] focus:border-stone-900 outline-none text-sm font-sans"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label className="block text-[9px] tracking-[0.3em] uppercase text-stone-600 font-sans mb-2">
              Assunto
            </label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-[#E4E2DE] focus:border-stone-900 outline-none text-sm font-sans bg-white"
            >
              <option value="">Selecione um assunto</option>
              <option value="duvida-produto">Dúvida sobre produto</option>
              <option value="pedido">Questão sobre pedido</option>
              <option value="devolucao">Trocas e devoluções</option>
              <option value="parceria">Proposta de parceria</option>
              <option value="outro">Outro</option>
            </select>
          </div>

          <div>
            <label className="block text-[9px] tracking-[0.3em] uppercase text-stone-600 font-sans mb-2">
              Mensagem
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-[#E4E2DE] focus:border-stone-900 outline-none text-sm font-sans resize-none"
              placeholder="Sua mensagem aqui..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-stone-900 text-white text-[11px] tracking-[0.3em] uppercase font-sans py-4 hover:bg-stone-800 transition-colors"
          >
            Enviar Mensagem
          </button>

          {submitted && (
            <p className="text-center text-[#C2A67A] text-sm font-sans">
              ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
