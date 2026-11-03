"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { BEARD_MODELS, BEARD_CATEGORIES } from "@/data/beards.data";
import { BeardModelItem } from "@/types/barber.types";
import { salonData } from "@/data/salon.data";
import { formatPrice, buildWhatsAppInquiryUrl } from "@/lib/whatsapp";

interface BeardAlbumProps {
  onSelectModel: (model: BeardModelItem) => void;
}

export function BeardAlbum({ onSelectModel }: BeardAlbumProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const { business, currencySymbol } = salonData;

  const filteredModels = useMemo(() => {
    if (selectedCategory === "Todos") return BEARD_MODELS;
    return BEARD_MODELS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="barbas" className="py-16 sm:py-24 bg-neutral-950 border-b border-neutral-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              <span>🧔</span>
              <span>Álbum de Barbas & Afeitado Clásico</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              Diseños de Barba & Bigote{" "}
              <span className="text-blue-500 font-sans text-2xl sm:text-3xl font-bold">
                ({BEARD_MODELS.length} Fotos Reales)
              </span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl">
              Selecciona tu diseño preferido o consulta a nuestros barberos en Tamanco para adaptarlo a tu forma facial.
            </p>
          </div>
        </div>

        {/* Filtros */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {BEARD_CATEGORIES.map((cat) => {
            const count =
              cat === "Todos"
                ? BEARD_MODELS.length
                : BEARD_MODELS.filter((m) => m.category === cat).length;
            const isActive = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-950/50"
                    : "bg-neutral-900 text-neutral-300 hover:bg-neutral-800 hover:text-white"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    isActive ? "bg-white/20 text-white" : "bg-neutral-950 text-neutral-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grilla de Barbas (7 Modelos) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredModels.map((item) => {
            const waUrl = buildWhatsAppInquiryUrl({
              whatsappNumber: business.whatsappNumber,
              businessName: business.name,
              itemTitle: item.name,
              itemSubtitle: item.beardStyle,
              price: item.price,
              type: "barba",
              currencySymbol,
            });

            return (
              <div
                key={item.id}
                className="group relative bg-neutral-900 border border-neutral-800/90 rounded-2xl overflow-hidden hover:border-blue-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-950/20 flex flex-col"
              >
                {/* Imagen */}
                <div
                  onClick={() => onSelectModel(item)}
                  className="relative aspect-[4/5] bg-neutral-950 cursor-pointer overflow-hidden"
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {item.badge && (
                    <div className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md uppercase tracking-wider">
                      {item.badge}
                    </div>
                  )}

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                    <span className="bg-white/90 text-neutral-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                      🔍 Ver en Grande
                    </span>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-4 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-base font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-xs text-neutral-300 line-clamp-2 mt-1">
                      {item.beardStyle}
                    </p>
                    <p className="text-[11px] text-neutral-400 italic mt-1 line-clamp-1">
                      {item.faceShape}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-800/80">
                    <div className="flex items-baseline justify-between mb-3">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xs text-neutral-400 font-medium">Precio</span>
                        <span className="font-serif text-xl font-black text-amber-400">
                          {formatPrice(item.price, currencySymbol)}
                        </span>
                        {item.oldPrice && (
                          <span className="text-xs text-neutral-500 line-through">
                            {formatPrice(item.oldPrice, currencySymbol)}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onSelectModel(item)}
                        className="w-full bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold py-2 px-2 rounded-xl transition-colors text-center"
                      >
                        🔍 Detalle
                      </button>
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-2 px-2 rounded-xl transition-colors text-center flex items-center justify-center gap-1 shadow-sm"
                      >
                        <span>💬</span>
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

