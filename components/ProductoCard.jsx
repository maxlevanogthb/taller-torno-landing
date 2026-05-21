// components/ProductoCard.jsx
import Image from 'next/image';

export default function ProductoCard({ producto, infoContacto }) {
  // Mensaje personalizado para el enlace de WhatsApp de cada pieza
  const mensajeWhatsApp = encodeURIComponent(
    `Hola, me interesa cotizar la pieza: ${producto.titulo} (Código: ${producto.codigo}) que vi en el catálogo web.`
  );

  return (
    <div className="bg-industrialDark-800 border border-industrialDark-700 rounded-lg p-4 flex flex-col justify-between hover:border-industrialOrange-500/50 transition-all duration-300 group shadow-lg">
      <div>
        {/* Contenedor de la Imagen con Fondo Blanco para que tus recortes se integren perfecto */}
        <div className="relative w-full h-44 bg-white rounded border border-industrialDark-700 overflow-hidden flex items-center justify-center p-2 mb-4">
          <Image
            src={producto.imagen}
            alt={producto.titulo}
            width={160}
            height={160}
            className="object-contain max-h-full transition-transform duration-300 group-hover:scale-105"
            priority={false}
          />
          {/* Badge de Categoría */}
          <span className="absolute top-2 left-2 bg-industrialDark-900/90 text-[9px] font-mono font-bold text-industrialOrange-500 px-2 py-0.5 rounded border border-industrialDark-700 uppercase">
            {producto.categoria}
          </span>
        </div>

        {/* Datos Técnicos de la Refacción */}
        <span className="text-[10px] font-mono text-slate-500 block">CÓD: {producto.codigo}</span>
        <h3 className="text-sm font-black text-white uppercase tracking-tight mt-1 group-hover:text-industrialOrange-400 transition-colors">
          {producto.titulo}
        </h3>
        <p className="text-slate-400 text-[11px] mt-2 leading-relaxed min-h-8">
          {producto.descripcion}
        </p>
      </div>

      {/* Precio y Botón de Cotización */}
      <div className="mt-4 pt-3 border-t border-industrialDark-700 flex items-center justify-between">
        <div>
          <span className="text-[9px] font-mono text-slate-600 block uppercase">Precio Lista</span>
          <span className="text-sm font-mono font-bold text-emerald-400">
            ${producto.precio.toFixed(2)} <span className="text-[9px] text-slate-500">MXN</span>
          </span>
        </div>
        
        <a
          href={`https://wa.me/52${infoContacto.telefono}?text=${mensajeWhatsApp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-industrialDark-900 hover:bg-industrialOrange-600 text-slate-300 hover:text-white font-mono font-bold px-3 py-2 rounded text-[10px] uppercase tracking-wider transition-all duration-200 border border-industrialDark-700 hover:border-industrialOrange-500"
        >
          Cotizar 📱
        </a>
      </div>
    </div>
  );
}