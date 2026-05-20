// app/page.js
import { productos, infoContacto } from '@/data/productos';
import ProductoCard from '@/components/ProductoCard';

export default function Home() {
  // Tomamos el segundo teléfono (Ventas / Taller) para las cotizaciones automáticas del catálogo
  const telWhatsappCat = infoContacto.telefonos[1].numero;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 scroll-smooth">

      {/* HERO SECTION */}
      <header className="bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white py-20 px-4 text-center border-b border-blue-900/30">
        <div className="max-w-4xl mx-auto">
          <span className="text-orange-500 font-bold tracking-widest text-xs uppercase bg-blue-950/80 px-4 py-1.5 rounded-full border border-blue-800/50">
            {infoContacto.valores.experiencia}
          </span>
          <h1 className="text-4xl md:text-6xl font-black mt-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-blue-200">
            Maquinados Industriales Qro
          </h1>
          <p className="mt-6 text-xl text-orange-400 font-medium italic max-w-2xl mx-auto">
            {"\""}{infoContacto.valores.slogan}{"\""}
          </p>
          <p className="mt-4 text-base text-slate-400 max-w-xl mx-auto">
            Especialistas en fabricación de refacciones, engranes y componentes de alta precisión para los sectores agrícola, automotriz y grúas viajeras.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#catalogo" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg shadow-blue-900/20">
              Ver Catálogo de Piezas
            </a>
            <a href="#contacto" className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-6 py-3 rounded-lg font-medium transition-colors border border-slate-700">
              Contactar un Asesor
            </a>
          </div>
        </div>
      </header>

      {/* SECCIÓN: NUESTROS SERVICIOS INDUSRIALES */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-800">Especialidades del Taller</h2>
          <p className="text-slate-500 mt-2">Soluciones de manufactura pesada y mantenimiento industrial</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Servicio 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center font-bold text-xl mb-4">⚙️</div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Maquinados y Engranes</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Diseño, fabricación y venta de engranes a medida y piezas mecánicas complejas bajo plano o muestra física.
            </p>
          </div>
          {/* Servicio 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center font-bold text-xl mb-4">🏗️</div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Refacciones para Grúas Viajeras</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Expertos en componentes de carga pesada de hasta 30 toneladas: ruedas, flechas, bujes, baleros y chumaceras.
            </p>
          </div>
          {/* Servicio 3 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-lg flex items-center justify-center font-bold text-xl mb-4">🚜</div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Sectores Agrícola y Automotriz</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Maquinado especializado de refacciones de alta resistencia para tractores, implementos agrícolas y líneas automotrices.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN: INFRAESTRUCTURA (¿SABÍAS QUÉ?) */}
      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-blue-500 font-bold uppercase tracking-wider text-xs">Capacidad Técnica</span>
            <h2 className="text-3xl font-black mt-2 tracking-tight">Capacidad e Infraestructura de Maquinado</h2>
            <p className="text-slate-400 mt-4 leading-relaxed">
              Contamos con el equipo industrial necesario para garantizar entregas rápidas y de máxima fiabilidad geométrica en cada pieza fabricada.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <span className="text-blue-500">✔</span> Tornos Convencionales de Alta Capacidad
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <span className="text-blue-500">✔</span> Fresadoras Universales
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <span className="text-blue-500">✔</span> Centros de Maquinado Verticales
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <span className="text-blue-500">✔</span> Troqueladoras y Equipos de Corte
              </div>
            </div>
          </div>
          <div className="bg-slate-800/50 border border-slate-800 p-8 rounded-2xl text-center">
            <p className="text-slate-400 text-sm uppercase tracking-widest">Garantía Comercial</p>
            <p className="text-5xl font-black text-blue-500 mt-4">+20 Años</p>
            <p className="text-slate-200 font-medium mt-2">En el Mercado Industrial</p>
            <p className="text-slate-400 text-xs mt-4 leading-relaxed">
              Nos adaptamos rigurosamente a las necesidades técnicas y tiempos de paro de planta de tu empresa.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN DEL CATÁLOGO */}
      <section id="catalogo" className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-8 pb-4 border-b border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Catálogo de Componentes Disponibles</h2>
          <p className="text-slate-500 text-sm mt-1">Selecciona cualquier pieza para solicitar una cotización directa vía WhatsApp.</p>
        </div>

        {/* Grid de Productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productos.map((producto) => (
            <ProductoCard
              key={producto.id}
              producto={producto}
              // Pasamos el objeto de contacto modificado pero apuntando al número correcto de cotización
              infoContacto={{ telefono: telWhatsappCat }}
            />
          ))}
        </div>
      </section>

      {/* FOOTER / SECCIÓN DE CONTACTO MULTICANAL */}
      <footer id="contacto" className="bg-slate-950 text-slate-400 py-16 px-4 border-t border-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Columna 1: Ubicación */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Ubicación del Taller</h3>
            <p className="text-sm leading-relaxed mb-4 text-slate-300">
              {infoContacto.direccion}
            </p>
            <span className="text-xs bg-slate-900 px-3 py-1.5 rounded text-slate-500 font-mono block w-fit">
              📍 Santiago de Querétaro, Qro.
            </span>
          </div>

          {/* Columna 2: Canales Telefónicos y Correos */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Líneas de Atención</h3>

            <div className="space-y-3 mb-6">
              <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Teléfonos:</p>
              {infoContacto.telefonos.map((tel, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-white font-semibold text-base">
                    {tel.numero.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')}
                  </span>
                  <span className="text-xs text-slate-500">{tel.etiqueta}</span>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Correos Electrónicos:</p>
              {infoContacto.correos.map((correo, idx) => (
                <span key={idx} className="text-blue-400 text-sm block hover:underline">
                  {correo}
                </span>
              ))}
            </div>
          </div>

          {/* Columna 3: Redes Sociales */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Enlaces Digitales</h3>
            <p className="text-sm text-slate-400 mb-4">
              Síguenos en nuestras redes sociales para conocer nuestros últimos maquinados y proyectos entregados.
            </p>
            <div className="flex flex-col gap-3">
              <a href={infoContacto.redes.facebook} target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-blue-500 transition-colors flex items-center gap-2 text-sm bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                🌐 facebook.com/MaquinadosIndustrialesQro
              </a>
              <a href={infoContacto.redes.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-pink-500 transition-colors flex items-center gap-2 text-sm bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                📸 instagram.com/maquinados977
              </a>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto border-t border-slate-900 mt-12 pt-6 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} Maquinados Industriales Qro. Todos los derechos reservados. Desarrollo de Alta Precisión.
        </div>
      </footer>

    </main>
  );
}