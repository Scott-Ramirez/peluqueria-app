/**
 * Helpers para formateo de precios e integración con WhatsApp
 */

export function formatPrice(amount: number, symbol: string = "S/ "): string {
  return `${symbol}${amount.toLocaleString("es-PE", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })}`;
}

export function buildWhatsAppInquiryUrl(params: {
  whatsappNumber: string;
  businessName: string;
  itemTitle: string;
  itemSubtitle?: string;
  price: number;
  type: "corte" | "barba" | "servicio";
  currencySymbol?: string;
}): string {
  const {
    whatsappNumber,
    businessName,
    itemTitle,
    itemSubtitle,
    price,
    type,
    currencySymbol = "S/ ",
  } = params;

  const tipoTexto =
    type === "barba"
      ? "el diseño de barba"
      : type === "corte"
      ? "el corte de cabello"
      : "el servicio";

  const message = [
    `¡Hola *${businessName}*! 💈👋`,
    ``,
    `Vi su álbum online y quiero consultar disponibilidad para ${tipoTexto}:`,
    `✂️ *${itemTitle}*` + (itemSubtitle ? ` (${itemSubtitle})` : ""),
    `💵 *Precio referencial:* ${formatPrice(price, currencySymbol)}`,
    ``,
    `¿Tienen turnos disponibles en el local de Tamanco? ¡Muchas gracias!`,
  ].join("\n");

  const cleanPhone = whatsappNumber.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

