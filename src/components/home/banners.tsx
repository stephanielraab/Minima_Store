"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Banner } from "@/src/data";

type BannersProps = {
  list: Banner[];
};

export function Banners({ list }: BannersProps) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      goTo((current + 1) % list.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [current, list.length]);

  function goTo(index: number) {
    if (animating || index === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 300);
  }

  const banner = list[current];
  const isDark = banner.theme === "dark";

  return (
    <div
      className={`relative mt-6 h-[460px] md:h-[580px] bg-gradient-to-br ${banner.bg} overflow-hidden transition-all duration-700`}
    >
      {/* Decorative circles */}
      <div
        className={`absolute -top-24 -right-24 w-96 h-96 rounded-full transition-all duration-700 ${
          isDark ? "bg-white/5" : "bg-stone-400/10"
        }`}
      />
      <div
        className={`absolute -bottom-16 -left-12 w-56 h-56 rounded-full transition-all duration-700 ${
          isDark ? "bg-white/5" : "bg-amber-300/15"
        }`}
      />
      {/* Thin vertical line accent */}
      <div
        className={`absolute top-12 right-16 w-px h-40 ${
          isDark ? "bg-white/20" : "bg-stone-400/30"
        }`}
      />

      {/* Content */}
      <div
        key={current}
        className={`banner-content absolute inset-0 flex flex-col justify-center px-10 md:px-24 transition-opacity duration-300 ${
          animating ? "opacity-0" : "opacity-100"
        }`}
      >
        <span
          className={`text-[10px] tracking-[0.45em] uppercase mb-6 font-sans font-medium ${
            isDark ? "text-stone-400" : "text-stone-500"
          }`}
        >
          Nova Coleção 2025
        </span>

        <h2
          className={`font-serif font-light leading-[1.05] mb-6 ${
            isDark ? "text-white" : "text-stone-900"
          }`}
          style={{
            fontSize: "clamp(3rem, 7vw, 6rem)",
            whiteSpace: "pre-line",
          }}
        >
          {banner.title}
        </h2>

        <p
          className={`font-sans text-sm md:text-base font-light mb-10 max-w-sm tracking-wide leading-relaxed ${
            isDark ? "text-stone-300" : "text-stone-600"
          }`}
        >
          {banner.subtitle}
        </p>

        <Link
          href="/colecoes"
          className={`group inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase font-sans font-medium w-fit px-8 py-3.5 border transition-all duration-250 ${
            isDark
              ? "border-white/60 text-white hover:bg-white hover:text-stone-900 hover:border-white"
              : "border-stone-800 text-stone-900 hover:bg-stone-900 hover:text-white"
          }`}
        >
          {banner.cta}
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>

      {/* Dots navigation */}
      <div className="absolute bottom-8 left-10 md:left-24 flex items-center gap-3">
        {list.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-px transition-all duration-400 ${
              i === current
                ? isDark
                  ? "bg-white w-10"
                  : "bg-stone-900 w-10"
                : isDark
                ? "bg-white/30 w-5"
                : "bg-stone-400 w-5"
            }`}
          />
        ))}
      </div>

      {/* Counter */}
      <div
        className={`absolute bottom-7 right-10 md:right-24 font-sans text-[10px] tracking-[0.3em] ${
          isDark ? "text-stone-400" : "text-stone-500"
        }`}
      >
        {String(current + 1).padStart(2, "0")} / {String(list.length).padStart(2, "0")}
      </div>
    </div>
  );
}
