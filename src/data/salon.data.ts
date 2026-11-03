import { SalonConfig } from "@/types/barber.types";

export const salonData: SalonConfig = {
  currencySymbol: "S/ ",
  business: {
    name: "Scott Barber Shop",
    shortName: "SCOTT BARBER SHOP",
    badge: "PELUQUERÍA DE HOMBRE & BARBERÍA CLÁSICA",
    tagline: "Precisión en cada corte. Tradición, navaja y estilo masculino.",
    subTagline:
      "Tu barbería de confianza en Tamanco. Especialistas en cortes modernos, degradados a navaja, perfilado de barbas con toalla caliente y cuidado capilar masculino. Consulta o reserva directamente por WhatsApp.",
    whatsappNumber: "51920569220",
    phoneDisplay: "+51 920 569 220",
    address: "Calle Juan Rivas S/N",
    neighborhood: "Centro",
    city: "Tamanco, Perú",
    googleMapsUrl: "https://maps.google.com/?q=Calle+Juan+Rivas+Tamanco",
    instagramHandle: "@scott.barbershop",
    instagramUrl: "https://instagram.com",
    heroImageUrl: "/images/modelos/executive-sidepart.jpeg",
    stats: {
      yearsExperience: "+7 años",
      happyClients: "+3,500",
      googleRating: "4.9",
      reviewsCount: "280+ clientes",
    },
  },
  timeSlots: [
    "08:30 AM",
    "09:30 AM",
    "10:30 AM",
    "11:30 AM",
    "02:30 PM",
    "03:30 PM",
    "04:30 PM",
    "05:30 PM",
    "06:30 PM",
    "07:30 PM",
  ],
  categories: [
    "Todos",
    "Cortes Clásicos & Urbanos",
    "Barba & Afeitado",
    "Combos & Rituales",
  ],
  services: [
    {
      id: "corte-fade",
      name: "Corte Clásico / Skin Fade a Navaja",
      category: "Cortes Clásicos & Urbanos",
      description:
        "Degradado perfecto a cero o navaja con delineado milimétrico de patillas y cuello. Incluye lavado y peinado con pomada mate.",
      price: 25,
      durationMin: 35,
      popular: true,
      promoBadge: "Top Solicitado",
    },
    {
      id: "ritual-barba",
      name: "Ritual Completo de Barba con Toalla Caliente",
      category: "Barba & Afeitado",
      description:
        "Doble vaporización con toalla caliente, perfilado a navaja tradicional, aceites orgánicos de cedro y bálsamo hidratante.",
      price: 25,
      durationMin: 30,
      popular: true,
    },
    {
      id: "combo-corte-barba",
      name: "Combo Completo: Corte de Cabello + Diseño de Barba",
      category: "Combos & Rituales",
      description:
        "El servicio preferido de nuestros clientes: corte degradado o clásico a elección más perfilado completo de barba con toalla caliente y navaja.",
      price: 45,
      durationMin: 55,
      popular: true,
      promoBadge: "Recomendado",
    },
    {
      id: "afeitado-ingles",
      name: "Afeitado Tradicional al Ras (Clean Shave)",
      category: "Barba & Afeitado",
      description:
        "Espuma tibia batida a brocha, rasurado suave con navaja libre de barbero, toalla fría tonificante y loción after-shave.",
      price: 22,
      durationMin: 25,
    },
    {
      id: "corte-nino",
      name: "Corte Junior / Escolar",
      category: "Cortes Clásicos & Urbanos",
      description:
        "Corte para niños y jóvenes con paciencia, prolijidad y los mejores estilos actuales.",
      price: 20,
      durationMin: 25,
    },
  ],
  team: [
    {
      id: "barbero-1",
      name: "Carlos Rivas",
      role: "Maestro Barbero",
      specialty: "Cortes Fade, Diseños Urbanos & Navaja Libre",
      experience: "8 años de experiencia",
      imageUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: "barbero-2",
      name: "Javier Mendoza",
      role: "Especialista en Barbas & Estilo Tradicional",
      specialty: "Ritual de Toalla Caliente, Barba Esculpida & Clásicos",
      experience: "6 años de experiencia",
      imageUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80",
    },
  ],
  gallery: [
    {
      id: "g1",
      title: "Corte Ejecutivo & Barba Perfilada",
      category: "Cortes & Barba",
      imageUrl:
        "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "g2",
      title: "Afeitado Clásico con Toalla Caliente",
      category: "Barba Tradicional",
      imageUrl:
        "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80",
    },
  ],
  testimonials: [
    {
      id: "t1",
      name: "Manuel Gonzales",
      service: "Corte + Barba Completa",
      comment:
        "Excelente atención en Tamanco. El delineado a navaja y el ambiente de la barbería son insuperables. 100% recomendado.",
      rating: 5,
      date: "Hace 3 días",
    },
    {
      id: "t2",
      name: "Roberto Silva",
      service: "Skin Fade",
      comment:
        "El mejor fade de la zona. Muy puntuales y con productos de calidad que no irritan la piel.",
      rating: 5,
      date: "Hace 1 semana",
    },
    {
      id: "t3",
      name: "David Flores",
      service: "Perfilado de Barba",
      comment:
        "El ritual con la toalla caliente y aceites te deja renovado. Volveré siempre.",
      rating: 5,
      date: "Hace 2 semanas",
    },
  ],
  schedule: [
    { days: "Lunes a Viernes", hours: "08:00 AM - 08:00 PM", isOpen: true },
    { days: "Sábados", hours: "08:00 AM - 08:30 PM", isOpen: true },
    { days: "Domingos", hours: "09:00 AM - 02:00 PM", isOpen: true },
  ],
  faqs: [
    {
      question: "¿Dónde están ubicados exactamente en Tamanco?",
      answer:
        "Estamos ubicados en Calle Juan Rivas S/N, en Tamanco. Puedes encontrarnos fácilmente con nuestro característico poste de barbería giratorio.",
    },
    {
      question: "¿Cómo puedo consultar disponibilidad o pedir un turno?",
      answer:
        "Puedes hacer clic en el botón de WhatsApp (+51 920 569 220) presente en cualquiera de los modelos de corte o barba de nuestro álbum. Te responderemos al instante.",
    },
    {
      question: "¿Qué medios de pago aceptan?",
      answer:
        "Aceptamos Efectivo, Yape y transferencias bancarias locales para tu mayor comodidad.",
    },
  ],
};

