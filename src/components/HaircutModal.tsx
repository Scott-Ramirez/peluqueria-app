"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { WigModelItem } from "@/types/barber.types";
import { salonData } from "@/data/salon.data";
import { formatPrice, buildWhatsAppInquiryUrl } from "@/lib/whatsapp";

interface HaircutModalProps {
  model: WigModelItem | null;
  onClose: () => void;
}

export function HaircutModal({ model, onClose }: HaircutModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (model) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [model, onClose]);

  if (!model) return null;

  const { business, currencySymbol } = salonData;
  const waUrl = buildWhatsAppInquiryUrl({
    whatsappNumber: business.whatsappNumber,
    businessName: business.name,
    itemTitle: model.name,
    itemSubtitle: model.cutType,
    price: model.price,
    type: "corte",
    currencySymbol,
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-3xl bg-neutral-900 border border-neutral-700 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-neutral-800/90 text-white hover:bg-neutral-700 flex items-center justify-center transition-colors text-lg"
          aria-label="Cerrar"
        >
          ✕
        </button>

        {/* Imagen en grande */}
        <div className="relative w-full md:w-1/2 aspect-[4/5] md:aspect-auto bg-neutral-950">
          <Image
            src={model.imageUrl}
            alt={model.name}
            fill
            priority
            className="object-cover object-top"
          />
        </div>

        {/* Detalles */}
        <div className="p-6 md:p-8 flex flex-col justify-between flex-1 overflow-y-auto">
          <div>
            <div className="inline-block bg-red-600/90 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              {model.category}
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-black text-white mb-2">
              {model.name}
            </h3>

            <p className="text-neutral-300 text-sm leading-relaxed mb-4">
              {model.cutType}
            </p>

            <div className="bg-neutral-950/80 rounded-2xl p-4 border border-neutral-800 space-y-2 mb-6">
              <p className="text-xs text-neutral-400">
                <strong className="text-neutral-200">Especificaciones:</strong> {model.fiber}
              </p>
              <p className="text-xs text-neutral-400">
                <strong className="text-neutral-200">Ubicación de atención:</strong> Calle Juan Rivas S/N, Tamanco
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-xs text-neutral-400 uppercase font-semibold">Precio referencial:</span>
              <span className="font-serif text-3xl font-black text-amber-400">
                {formatPrice(model.price, currencySymbol)}
              </span>
              {model.oldPrice && (
                <span className="text-sm text-neutral-500 line-through">
                  {formatPrice(model.oldPrice, currencySymbol)}
                </span>
              )}
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <span className="text-lg">💬</span>
              <span>Consultar Disponibilidad por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

