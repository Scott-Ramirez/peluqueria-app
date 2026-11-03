import React from "react";
import { BarberPole } from "./BarberPole";
import { salonData } from "@/data/salon.data";

export function Navbar() {
  const { business } = salonData;
  const whatsappClean = business.whatsappNumber.replace(/[^0-9]/g, "");
  const whatsappDirectUrl = `https://wa.me/${whatsappClean}?text=${encodeURIComponent(
    `¡Hola ${business.name}! 💈👋 Deseo información sobre citas y cortes en Tamanco.`
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo con Barber Pole animado en vivo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="py-1">
              <BarberPole size="sm" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-black tracking-wider block leading-none text-white group-hover:text-amber-400 transition-colors">
                {business.shortName}
              </span>
              <span className="text-[10px] sm:text-xs text-amber-500 font-semibold tracking-widest uppercase">
                {business.address} • {business.city}
              </span>
            </div>
          </a>

          {/* Navegación de Álbumes */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a
              href="#cortes"
              className="text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>Álbum de Cortes</span>
              <span className="bg-red-950/80 text-red-300 border border-red-800/60 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                24
              </span>
            </a>
            <a
              href="#barbas"
              className="text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>Álbum de Barbas</span>
              <span className="bg-blue-950/80 text-blue-300 border border-blue-800/60 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                7 Fotos
              </span>
            </a>
            <a
              href="#servicios"
              className="text-neutral-300 hover:text-white transition-colors"
            >
              Servicios & Precios
            </a>
            <a
              href="#ubicacion"
              className="text-neutral-300 hover:text-white transition-colors"
            >
              Ubicación
            </a>
          </nav>

          {/* Botón WhatsApp directo */}
          <div className="flex items-center gap-3">
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-lg shadow-emerald-950/50 transition-all hover:scale-[1.02]"
            >
              <svg
                className="w-4 h-4 fill-current shrink-0"
                viewBox="0 0 24 24"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
              </svg>
              <span>WhatsApp {business.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

