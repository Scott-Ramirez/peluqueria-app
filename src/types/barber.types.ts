export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  durationMin: number;
  popular?: boolean;
  promoBadge?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  imageUrl: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  service: string;
  comment: string;
  rating: number;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface WigModelItem {
  id: string;
  name: string;
  cutType: string;
  category: "Fade & Urbano" | "Clásicos & Ejecutivos" | "Rulos & Ondas" | "Largos & Rock" | "Ediciones Especiales";
  fiber: string;
  price: number;
  oldPrice?: number;
  badge?: string;
  imageUrl: string;
}

export interface BeardModelItem {
  id: string;
  name: string;
  beardStyle: string;
  category:
    | "Fade & Degradada"
    | "Ejecutiva & Perfilada"
    | "Candado & Van Dyke"
    | "Completa & Leñador"
    | "Sombreado & Bigote";
  faceShape: string;
  ritualIncluded: string;
  price: number;
  oldPrice?: number;
  badge?: string;
  imageUrl: string;
}

export interface ScheduleItem {
  days: string;
  hours: string;
  isOpen: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SalonConfig {
  currencySymbol: string;
  business: {
    name: string;
    shortName: string;
    badge: string;
    tagline: string;
    subTagline: string;
    whatsappNumber: string;
    phoneDisplay: string;
    address: string;
    neighborhood: string;
    city: string;
    googleMapsUrl: string;
    instagramHandle: string;
    instagramUrl: string;
    heroImageUrl: string;
    stats: {
      yearsExperience: string;
      happyClients: string;
      googleRating: string;
      reviewsCount: string;
    };
  };
  timeSlots: string[];
  categories: string[];
  services: ServiceItem[];
  team: TeamMember[];
  gallery: GalleryItem[];
  testimonials: TestimonialItem[];
  schedule: ScheduleItem[];
  faqs: FAQItem[];
}

