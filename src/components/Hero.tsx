import React from "react";
import Image from "next/image";
import { salonData } from "@/data/salon.data";

export function Hero() {
  const { business } = salonData;
  const whatsappClean = business.whatsappNumber.replace(/[^0-9]/g, "");
  const whatsappDirectUrl = `https://wa.me/${whatsappClean}?text=${encodeURIComponent(
    `¡Hola ${business.name}! 💈👋 Vi su catálogo online de cortes y barbas. Quisiera más información sobre turnos en su local de Tamanco.`
  )}`;

  return (
    <section className="relative overflow-hidden bg-neutral-950 py-16 sm:py-24 border-b border-neutral-800/80 text-white">
      {/* Luces y auras de ambiente cálido (acabado premium con vida y profundidad) */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Trama sutil de textura */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Columna Izquierda: Información Principal */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Badge elegante y limpio sin duplicar el icono del barber pole */}
            <div className="inline-flex items-center gap-2.5 bg-neutral-900/90 border border-amber-500/30 rounded-full px-4 py-1.5 shadow-lg shadow-black/40 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold tracking-wider text-amber-200/90 uppercase">
                {business.name} • {business.address}, {business.city}
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6">
              Álbum de Cortes <br className="hidden sm:inline" />
              Masculinos &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-200 to-blue-400">
                Diseños de Barba
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
              Catálogo visual exclusivo para caballeros en <strong className="text-white font-semibold">Tamanco</strong>. Explora{" "}
              <strong className="text-amber-300 font-semibold">24 modelos de corte</strong> y{" "}
              <strong className="text-blue-300 font-semibold">7 diseños de barba con fotos reales</strong>.
              Consulta precios referenciales y pide tu turno de forma rápida por WhatsApp.
            </p>

            {/* Botones de Acción con estilo vivo y sombras de color */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#cortes"
                className="group relative inline-flex items-center gap-2.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold px-6 py-3.5 rounded-2xl shadow-xl shadow-red-950/60 transition-all hover:-translate-y-0.5 border border-red-500/30"
              >
                <span>✂️</span>
                <span>Ver Cortes (24)</span>
              </a>

              <a
                href="#barbas"
                className="group relative inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-6 py-3.5 rounded-2xl shadow-xl shadow-blue-950/60 transition-all hover:-translate-y-0.5 border border-blue-500/30"
              >
                <span>🧔</span>
                <span>Ver Barbas (7 Fotos)</span>
              </a>

              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold px-6 py-3.5 rounded-2xl shadow-xl shadow-emerald-950/60 transition-all hover:-translate-y-0.5 border border-emerald-500/30"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
                <span>WhatsApp: {business.phoneDisplay}</span>
              </a>
            </div>

            {/* Tarjetas de estadísticas con acentos cálidos */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-neutral-800/80 text-left">
              <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-3 backdrop-blur-sm">
                <p className="text-2xl font-black text-amber-400">24</p>
                <p className="text-[11px] text-neutral-400 uppercase tracking-wider font-medium">Modelos de Corte</p>
              </div>
              <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-3 backdrop-blur-sm">
                <p className="text-2xl font-black text-blue-400">7</p>
                <p className="text-[11px] text-neutral-400 uppercase tracking-wider font-medium">Fotos de Barbas</p>
              </div>
              <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-3 backdrop-blur-sm">
                <p className="text-2xl font-black text-emerald-400">S/ 20</p>
                <p className="text-[11px] text-neutral-400 uppercase tracking-wider font-medium">Precios desde</p>
              </div>
              <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-3 backdrop-blur-sm">
                <p className="text-lg font-black text-white">Tamanco</p>
                <p className="text-[11px] text-neutral-400 uppercase tracking-wider font-medium">Calle Juan Rivas</p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta Visual Fotográfica con Vida (Atmósfera de Barbería) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-gradient-to-b from-neutral-900/90 to-neutral-950/90 border border-neutral-800/80 rounded-3xl p-4 sm:p-5 shadow-2xl shadow-black/80 backdrop-blur-md">
              {/* Imagen Fotográfica Principal de Barbería con vida y texturas */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 border border-neutral-800 shadow-inner">
                <Image
                  src={business.heroImageUrl}
                  alt={business.name}
                  fill
                  priority
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

                {/* Pill flotante de estado en vivo */}
                <div className="absolute top-3 left-3 bg-neutral-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Atención en Tamanco</span>
                </div>

                {/* Reseñas y satisfacción */}
                <div className="absolute bottom-3 right-3 bg-neutral-950/90 border border-amber-500/30 text-amber-300 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md shadow-lg flex items-center gap-1.5">
                  <span>⭐ 4.9</span>
                  <span className="text-neutral-400 font-normal">({business.stats.reviewsCount})</span>
                </div>
              </div>

              {/* Contenido descriptivo del local */}
              <div className="px-2">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="font-serif text-xl font-bold text-white tracking-wide">
                    {business.name}
                  </h2>
                  <span className="text-[11px] bg-neutral-800 text-amber-400 border border-neutral-700 px-2.5 py-0.5 rounded-full font-semibold">
                    Local Central
                  </span>
                </div>

                <p className="text-xs text-neutral-400 mb-4">
                  {business.address} • {business.city}
                </p>

                {/* Horarios compactos y elegantes */}
                <div className="bg-neutral-950/80 rounded-2xl p-3 border border-neutral-800/80 space-y-1.5 text-xs text-neutral-300 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-400">Lunes a Viernes:</span>
                    <span className="font-semibold text-white">8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-400">Sábados:</span>
                    <span className="font-semibold text-white">8:00 AM - 8:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-400">Domingos:</span>
                    <span className="font-semibold text-amber-400">9:00 AM - 2:00 PM</span>
                  </div>
                </div>

                {/* Botón WhatsApp de la tarjeta */}
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40"
                >
                  <span>💬</span>
                  <span>Pedir Cita o Turno en Tamanco</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
