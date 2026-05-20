// app/page.js
import { productos, infoContacto } from '@/data/productos';
import ProductoCard from '@/components/ProductoCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-orange-500 font-bold tracking-widest text-xs uppercase bg-slate-800/60 px-3 py-1 rounded-full">
            Taller de Torno Industrial
          </span>
          <h1 className="text-4xl md:text-5xl font-black mt-4 tracking-tight">
            Diseño y Creación de Piezas de Precisión
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Catálogo digital de pernos, tornillos, arandelas y componentes industriales fabricados bajo los más altos estándares de calidad. 
          </p>
        </div>
      </header>

      {/* Sección del Catálogo */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Nuestro Catálogo</h2>
            <p className="text-slate-500 text-sm mt-1">Selecciona una pieza para iniciar una cotización directa.</p>
          </div>
        </div>

        {/* Grid de Productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productos.map((producto) => (
            <ProductoCard 
              key={producto.id} 
              producto={producto} 
              infoContacto={infoContacto} 
            />
          ))}
        </div>
      </section>

      {/* Footer / Sección de Contacto */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 border-t border-slate-800 mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Contacto Taller</h3>
            <p className="text-sm max-w-sm leading-relaxed">{infoContacto.direccion}</p> [cite: 47]
          </div>
          <div className="flex flex-col justify-end md:items-end">
            <span className="text-slate-500 text-sm">Escríbenos directamente:</span>
            <span className="text-white font-semibold mt-1">{infoContacto.email}</span> [cite: 48]
            <span className="text-orange-500 font-bold text-xl mt-1">Tel: 442 369 5555</span> [cite: 48]
          </div>
        </div>
      </footer>
    </main>
  );
}