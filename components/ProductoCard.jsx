// components/ProductoCard.jsx
import React from 'react';

export default function ProductoCard({ producto, infoContacto }) {
  const mensajeWhatsapp = `Hola! Me interesa cotizar la pieza: ${producto.nombre} ${producto.codigo ? `(Código: ${producto.codigo})` : ''}`;
  const urlWhatsapp = `https://wa.me/${infoContacto.telefono}?text=${encodeURIComponent(mensajeWhatsapp)}`;

  return (
    <div className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between p-5">
      <div>
       
        <div className="w-full h-48 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400 mb-4 border border-dashed border-slate-200">
          <span className="text-sm">FOTO DE PIEZA</span>
        </div>
        
        {producto.codigo && (
          <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded">
            {producto.codigo}
          </span>
        )}
        
        <h3 className="font-semibold text-slate-800 text-lg mt-2 min-h-[56px] line-clamp-2">
          {producto.nombre}
        </h3>
        
        <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">
          {producto.categoria}
        </p>
      </div>

      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xl font-bold text-slate-900">
          ${producto.precio.toFixed(2)}
        </span>
        
        <a
          href={urlWhatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          Cotizar
        </a>
      </div>
    </div>
  );
}