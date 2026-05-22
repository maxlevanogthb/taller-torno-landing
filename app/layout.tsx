import type { Metadata } from "next";
import "./globals.css";

// Este es el bloque de SEO que Google lee antes de renderizar la página
export const metadata: Metadata = {
  title: "Maquinados Industriales QRO | Torno, Fresadora y Soldadura",
  description: "Especialistas en maquinados de alta precisión en Querétaro. Más de 20 años fabricando refacciones industriales, engranes y piezas para carga pesada.",
  keywords: [
    "maquinados industriales",
    "torno en Querétaro",
    "soldadura TIG y MIG",
    "fabricación de engranes",
    "refacciones para grúas viajeras",
    "taller de maquinado",
    "pailería"
  ],
  authors: [{ name: "Maquinados Industriales QRO" }],
  openGraph: {
    title: "Maquinados Industriales QRO | Precisión y Calidad",
    description: "Catálogo de refacciones industriales y servicios de soldadura especializada.",
    url: "https://maquinadosindustrialesqro.com",
    siteName: "Maquinados QRO",
    locale: "es_MX",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased bg-industrialDark-900 text-slate-200">
        {children}
      </body>
    </html>
  );
}