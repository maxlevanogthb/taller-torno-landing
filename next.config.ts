import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // <-- Esto obliga a Next.js a compilar la landing como archivos HTML puros en una carpeta 'out'
  images: {
    unoptimized: true, // Requerido por Next.js cuando usas output export
  }
};

export default nextConfig;