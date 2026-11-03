import React from "react";
import { salonData } from "@/data/salon.data";

export function LocationSection() {
  const { business, schedule } = salonData;
  const whatsappClean = business.whatsappNumber.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${whatsappClean}?text=${encodeURIComponent(
    `¡Hola ${business.name}! 💈👋 ¿Cómo llego a su local en Calle Juan Rivas S/N, Tamanco?`
  )}`;

  return (
    <section id="ubicacion" className="py-16 sm:py-24 bg-neutral-950 text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Tarjeta de Localización */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              <span>📍</span>
              <span>Visítanos en Tamanco</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6">
              {business.name} en Tamanco
            </h2>
            <p className="text-neutral-300 text-base leading-relaxed mb-8">
              Estamos ubicados en pleno centro de Tamanco, en{" "}
              <strong className="text-white">Calle Juan Rivas S/N</strong>.
              Reconocerás nuestro local por el tradicional poste de barbería giratorio en la entrada.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5">
                <span className="text-xl mb-2 block">📍</span>
                <h4 className="text-sm font-bold text-white mb-1">Dirección</h4>
                <p className="text-xs text-neutral-300 font-medium">
                  {business.address}
                </p>
                <p className="text-xs text-neutral-400">
                  {business.neighborhood} • {business.city}
                </p>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5">
                <span className="text-xl mb-2 block">💬</span>
                <h4 className="text-sm font-bold text-white mb-1">WhatsApp & Citas</h4>
                <p className="text-xs text-neutral-300 font-medium">
                  {business.phoneDisplay}
                </p>
                <p className="text-xs text-emerald-400 font-semibold mt-1">
                  Atención rápida online
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg"
              >
                <span>💬</span>
                <span>Escribir por WhatsApp ({business.phoneDisplay})</span>
              </a>
            </div>
          </div>

          {/* Horarios & Barber Pole */}
          <div className="lg:col-span-5">
            <div className="bg-neutral-900/90 border border-neutral-800 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">
                    Horarios de Atención
                  </h3>
                  <p className="text-xs text-neutral-400">Atención por orden y con reserva previa</p>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center text-lg">
                  🕒
                </div>
              </div>


              <div className="space-y-3 mb-6">
                {schedule.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-2 border-b border-neutral-800/80 text-xs"
                  >
                    <span className="font-medium text-neutral-300">{item.days}</span>
                    <span className="font-semibold text-amber-400">{item.hours}</span>
                  </div>
                ))}
              </div>

              <div className="bg-neutral-950/80 rounded-xl p-4 border border-neutral-800/80 text-xs text-neutral-300">
                <p className="font-semibold text-white mb-1">💳 Medios de Pago aceptados:</p>
                <p className="text-neutral-400">Efectivo, Yape y transferencias locales directas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

