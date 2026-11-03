import type { Metadata } from "next";
import "./globals.css";
import { defaultSalonConfig } from "@/config/salon.config";

export const metadata: Metadata = {
  title: `${defaultSalonConfig.business.name} | Catálogo de Cortes & Barbas`,
  description: defaultSalonConfig.business.subTagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

