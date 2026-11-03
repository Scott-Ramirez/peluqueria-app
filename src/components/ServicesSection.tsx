import React from "react";
import { salonData } from "@/data/salon.data";
import { formatPrice, buildWhatsAppInquiryUrl } from "@/lib/whatsapp";

export function ServicesSection() {
  const { business, services, currencySymbol } = salonData;

  return (
    <section id="servicios" className="py-16 sm:py-24 bg-neutral-900/50 border-b border-neutral-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            Carta de Servicios & Rituales
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Precios Claros y Servicios de Barbería
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Atención personalizada en nuestro local de Tamanco. Cada servicio incluye asesoría de imagen y productos de primera calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => {
            const waUrl = buildWhatsAppInquiryUrl({
              whatsappNumber: business.whatsappNumber,
              businessName: business.name,
              itemTitle: svc.name,
              itemSubtitle: svc.category,
              price: svc.price,
              type: "servicio",
              currencySymbol,
            });

            return (
              <div
                key={svc.id}
                className="relative bg-neutral-950 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/40 transition-colors"
              >
                {svc.promoBadge && (
                  <div className="absolute top-4 right-4 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                    {svc.promoBadge}
                  </div>
                )}

                <div>
                  <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider block mb-1">
                    {svc.category} • {svc.durationMin} min
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white mb-2">
                    {svc.name}
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-neutral-400 block">Tarifa</span>
                    <span className="font-serif text-2xl font-black text-amber-400">
                      {formatPrice(svc.price, currencySymbol)}
                    </span>
                  </div>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-3.5 py-2 rounded-xl transition-colors flex items-center gap-1.5"
                  >
                    <span>💬</span>
                    <span>Reservar</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

