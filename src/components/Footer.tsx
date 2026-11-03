import React from "react";
import { BarberPole } from "./BarberPole";
import { salonData } from "@/data/salon.data";

export function Footer() {
  const { business } = salonData;
  const currentYear = 2026;

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <BarberPole size="sm" />
            <div>
              <p className="font-serif text-lg font-bold tracking-wide">
                {business.name}
              </p>
              <p className="text-xs text-neutral-400">
                {business.address} • {business.city}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-neutral-400">
            <a href="#cortes" className="hover:text-white transition-colors">
              Cortes (24)
            </a>
            <a href="#barbas" className="hover:text-white transition-colors">
              Barbas (7)
            </a>
            <a href="#servicios" className="hover:text-white transition-colors">
              Precios
            </a>
            <a href="#ubicacion" className="hover:text-white transition-colors">
              Ubicación
            </a>
          </div>

          <p className="text-xs text-neutral-500">
            © {currentYear} {business.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

