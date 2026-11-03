"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HaircutAlbum } from "@/components/HaircutAlbum";
import { BeardAlbum } from "@/components/BeardAlbum";
import { HaircutModal } from "@/components/HaircutModal";
import { BeardModal } from "@/components/BeardModal";
import { ServicesSection } from "@/components/ServicesSection";
import { LocationSection } from "@/components/LocationSection";
import { Footer } from "@/components/Footer";
import { WigModelItem, BeardModelItem } from "@/types/barber.types";
import { salonData } from "@/data/salon.data";

export default function Home() {
  const [selectedHaircut, setSelectedHaircut] = useState<WigModelItem | null>(null);
  const [selectedBeard, setSelectedBeard] = useState<BeardModelItem | null>(null);
  const { business } = salonData;
  const whatsappClean = business.whatsappNumber.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${whatsappClean}?text=${encodeURIComponent(
    `¡Hola ${business.name}! 💈👋 Quisiera pedir información sobre sus cortes y barbas en Tamanco.`
  )}`;

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-red-600 selection:text-white">
      {/* Barra de Navegación Principal */}
      <Navbar />

      {/* Hero Principal con Barber Pole Animado */}
      <main className="flex-1">
        <Hero />

        {/* Álbum de Cortes (24 Modelos con Fotos Reales) */}
        <HaircutAlbum onSelectModel={(model) => setSelectedHaircut(model)} />

        {/* Álbum de Barbas (7 Diseños con Fotos Reales) */}
        <BeardAlbum onSelectModel={(model) => setSelectedBeard(model)} />

        {/* Carta de Servicios & Tarifas */}
        <ServicesSection />

        {/* Ubicación en Tamanco & Horarios */}
        <LocationSection />
      </main>

      {/* Pie de Página */}
      <Footer />

      {/* Modales Lightbox para Visualización Detallada */}
      <HaircutModal
        model={selectedHaircut}
        onClose={() => setSelectedHaircut(null)}
      />

      <BeardModal
        model={selectedBeard}
        onClose={() => setSelectedBeard(null)}
      />

      {/* Botón Flotante Permanente de WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl shadow-emerald-950/80 transition-all hover:scale-110 flex items-center justify-center group"
      >
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
        </svg>
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold pl-0 group-hover:pl-2">
          WhatsApp 920 569 220
        </span>
      </a>
    </div>
  );
}
