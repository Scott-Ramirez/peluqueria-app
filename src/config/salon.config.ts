/**
 * Configuración central y re-exportación modular
 */

export * from "@/types/barber.types";
export * from "@/data/salon.data";
export * from "@/data/haircuts.data";
export * from "@/data/beards.data";
export * from "@/lib/whatsapp";

import { salonData } from "@/data/salon.data";
export const defaultSalonConfig = salonData;
