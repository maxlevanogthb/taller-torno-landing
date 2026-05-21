// app/page.tsx
'use client';

import { useState } from 'react';
import { 
  productos, 
  infoContacto, 
  matrizMateriales, 
  perfilesEngranes, 
  inventarioCritico 
} from '@/data/productos';
import ProductoCard from '@/components/ProductoCard';
import Image from 'next/image';

export default function Home() {
  const [categoriaActiva, setCategoriaActiva] = useState('todas');
  // Tomamos el número de ventas/taller para el botón principal y las cotizaciones
  const telWhatsappCat = infoContacto.telefonos[1].numero;

  const categorias = [
    { id: 'todas', nombre: '⚙️ Todo el Stock' },
    { id: 'pernos', nombre: '🖲️ Pernos' },
    { id: 'tornillos', nombre: '🔩 Tornillos' },
    { id: 'cuchillas', nombre: '⚔️ Cuchillas' },
    { id: 'lainas', nombre: '📏 Lainas' },
    { id: 'horquillas', nombre: '🔱 Horquillas' },
    { id: 'arandelas', nombre: '◯ Arandelas' },
  ];
  const productosFiltrados = categoriaActiva === 'todas' 
    ? productos 
    : productos.filter(p => p.categoria === categoriaActiva);

  return (
    <main className="min-h-screen bg-industrialDark-900 text-slate-200 font-sans selection:bg-industrialOrange-500 selection:text-white scroll-smooth">
      
      {/* NAVBAR COMPACTO EN ESPAÑOL */}
      <nav className="sticky top-0 z-50 bg-industrialDark-900/95 backdrop-blur-sm border-b border-industrialDark-700 px-6 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-black tracking-tight text-white uppercase">
              MAQUINADOS <span className="text-industrialOrange-500">INDUSTRIALES QRO</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-7 text-xs font-bold text-slate-400 uppercase tracking-wider">
            <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
            <a href="#gruas" className="hover:text-white transition-colors">Carga Pesada</a>
            <a href="#inventario" className="hover:text-white transition-colors">Servicios</a>
            <a href="#materiales" className="hover:text-white transition-colors">Materiales</a>
            <a href="#catalogo" className="hover:text-white transition-colors">Catálogo</a>
          </div>
          <a 
            href={`https://wa.me/52${telWhatsappCat}?text=Hola,%20solicito%20cotización%20para%20un%20maquinado%20industrial.`}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-industrialOrange-600 hover:bg-industrialOrange-500 text-white font-bold px-5 py-2.5 rounded text-xs tracking-wider uppercase transition-all duration-200 shadow-lg shadow-industrialOrange-600/10"
          >
            Solicitar Cotización
          </a>
        </div>
      </nav>

      {/* HERO SECTION CON FONDO DE TORNO EN ACCIÓN */}
      <header id="inicio" className="relative py-28 px-6 overflow-hidden border-b border-industrialDark-700 bg-industrialDark-900 text-center">
        {/* Imagen de Fondo (Torno en acción) */}
        <div className="absolute inset-0 z-0 opacity-15">
          <Image 
            src="/bg/hero-bg.png" 
            alt="Fondo de torno industrial en funcionamiento" 
            fill 
            priority
            className="object-cover"
          />
        </div>
        {/* Degradado para asegurar legibilidad */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-industrialDark-900/30 via-industrialDark-900/90 to-industrialDark-900" />

        <div className="max-w-5xl mx-auto relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-industrialDark-800 border border-industrialDark-700 rounded text-[10px] font-bold tracking-widest uppercase text-slate-400 selection:bg-industrialOrange-500">
            <span className="w-1.5 h-1.5 rounded-full bg-industrialOrange-500 animate-pulse" />
            Grado Industrial • {infoContacto.valores.experiencia}
          </span>
          <h1 className="text-4xl md:text-7xl font-black tracking-tight text-white uppercase mt-6 max-w-4xl mx-auto leading-none">
            Maquinados de Alta<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">Precisión en Qro</span>
          </h1>
          <p className="mt-6 text-base md:text-xl text-orange-400 font-medium italic max-w-2xl mx-auto">
            &quot;{infoContacto.valores.slogan}&quot;
          </p>
          <p className="mt-4 text-sm text-slate-500 max-w-xl mx-auto">
            Especialistas en fabricación de refacciones, engranes y componentes para los sectores agrícola, automotriz y grúas viajeras. Engineered for durability.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#catalogo" className="bg-industrialOrange-600 hover:bg-industrialOrange-500 text-white font-bold px-8 py-3.5 rounded text-xs tracking-wider uppercase transition-all duration-200">
              Ver Catálogo Técnico
            </a>
            <a href="#contacto" className="bg-industrialDark-800 hover:bg-industrialDark-700 text-slate-300 font-bold px-8 py-3.5 rounded text-xs tracking-wider uppercase transition-all duration-200 border border-industrialDark-700">
              Contacto Directo
            </a>
          </div>
        </div>
      </header>

      {/* SECCIÓN 1: EXPERTOS EN CARGA PESADA (GRÚAS VIAJERAS) CON FONDO DE PIEZA GRANDE */}
      <section id="gruas" className="max-w-7xl mx-auto px-6 py-24 border-b border-industrialDark-700">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] font-black tracking-widest text-industrialOrange-500 uppercase">
              Ingeniería de Precisión
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white uppercase leading-tight">
              Refacciones para Grúas Viajeras y Carga Pesada
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Mecanizado especializado de repuestos críticos diseñados para soportar capacidades operativas de <strong className="text-white font-semibold">hasta 30 toneladas</strong> en puentes grúa industriales.
            </p>
            <div className="pt-2">
              <a href="#catalogo" className="inline-flex bg-industrialOrange-600 hover:bg-industrialOrange-500 text-white font-bold px-6 py-3 rounded text-xs tracking-wider uppercase transition-colors">
                Ver Catálogo Técnico
              </a>
            </div>
          </div>

          {/* Bloque Informativo de Experiencia CON FONDO DE PIEZA GRANDE */}
          <div className="lg:col-span-7 bg-industrialDark-800 border border-industrialDark-700 p-8 rounded-lg relative overflow-hidden h-72 flex flex-col justify-end">
            {/* Imagen de Fondo (Torno pieza grande) */}
            <div className="absolute inset-0 z-0 opacity-10">
              <Image 
                src="/bg/gruas-bg.png" 
                alt="Maquinado de pieza de gran diámetro" 
                fill 
                className="object-cover"
              />
            </div>
            {/* Degradado para legibilidad */}
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-industrialDark-800/90 via-industrialDark-800/60 to-industrialDark-800/20" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 text-[10px] tracking-widest font-mono text-slate-500 uppercase mb-4">
                <span>QUERÉTARO</span>
                <span>•</span>
                <span>CAPACIDAD: 30-TON</span>
              </div>
              <p className="text-6xl font-black text-industrialOrange-500 tracking-tight leading-none">
                +{infoContacto.valores.experiencia.match(/\d+/)?.[0] || "20"} Años
              </p>
              <p className="text-white font-bold text-lg mt-1 uppercase tracking-tight">De Excelencia en Manufactura Industrial</p>
              <p className="text-slate-400 text-xs mt-3 leading-relaxed max-w-xl">
                Nos adaptamos rigurosamente a las especificaciones técnicas y tolerancias micrométricas requeridas para minimizar los tiempos de paro de planta de su empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: INVENTARIO CRÍTICO (SERVICIOS) EN ESPAÑOL Y GRID PREMIUN */}
      <section id="inventario" className="max-w-7xl mx-auto px-6 py-24 border-b border-industrialDark-700">
        <div className="flex items-center justify-between mb-12 border-b border-industrialDark-700 pb-4">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-white uppercase">Inventario Crítico y Servicios</h2>
            <p className="text-xs text-slate-500 mt-1">Componentes mecánicos de alta tolerancia fabricados bajo plano o muestra física.</p>
          </div>
          <span className="text-[9px] font-bold bg-industrialDark-800 border border-industrialDark-700 text-slate-400 px-2.5 py-1 rounded tracking-wider uppercase">
            ● Disponibilidad Taller
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Tarjeta destacada grande: Ruedas de Traslación */}
          <div className="md:col-span-8 bg-industrialDark-800 border border-industrialDark-700 p-8 rounded-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[9px] font-bold bg-industrialDark-700 text-slate-300 px-2 py-0.5 rounded">30-TON CAP</span>
                <span className="text-[9px] font-bold bg-industrialDark-700 text-slate-300 px-2 py-0.5 rounded">AISI 4140</span>
              </div>
              <h3 className="text-xl font-black text-white uppercase">{inventarioCritico[0].titulo}</h3>
              <p className="text-slate-400 text-xs mt-3 leading-relaxed max-w-xl">
                {inventarioCritico[0].descripcion}
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-industrialDark-700 pt-4 font-mono text-[11px] text-slate-400">
              <div>✔ Dureza: 55-60 HRC en pista</div>
              <div>✔ Diámetros: Hasta 800mm</div>
            </div>
          </div>

          {/* Tarjeta Secundaria: Ejes de Transmisión */}
          <div className="md:col-span-4 bg-industrialDark-800 border border-industrialDark-700 p-6 rounded-lg flex flex-col justify-between">
            <div>
              <span className="text-[9px] font-bold bg-industrialDark-700 text-slate-300 px-2 py-0.5 rounded uppercase">Alto Torque</span>
              <h3 className="text-lg font-black text-white uppercase mt-4">{inventarioCritico[1].titulo}</h3>
              <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                {inventarioCritico[1].descripcion}
              </p>
            </div>
            <div className="text-[18px] mt-6 text-slate-600 font-bold self-end">⚙️</div>
          </div>

          {/* Fila de abajo de 3 columnas */}
          {inventarioCritico.slice(2).map((item, idx) => (
            <div key={idx} className="md:col-span-4 bg-industrialDark-800 border border-industrialDark-700 p-6 rounded-lg flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-bold bg-industrialDark-700 text-slate-300 px-2 py-0.5 rounded uppercase">
                  {idx === 0 ? 'Estructural' : idx === 1 ? 'Heavy-Duty' : 'Autolubricado'}
                </span>
                <h3 className="text-base font-black text-white uppercase mt-4">{item.titulo}</h3>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                  {item.descripcion}
                </p>
              </div>
              <div className="text-[16px] mt-6 text-slate-600 font-bold self-end">
                {idx === 0 ? '🔲' : idx === 1 ? '☉' : '◯'}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN 3: MATRIZ TÉCNICA Y ENGRANES TRADUCIDA */}
      <section id="materiales" className="relative max-w-7xl mx-auto px-6 py-24 border-b border-industrialDark-700">
        <div className="mb-10 font-mono text-center">
          <p className="text-[10px] font-bold text-industrialOrange-500 uppercase tracking-widest">Matriz de Especificaciones</p>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mt-1">Capacidad Técnica y Materiales</h2>
          <p className="text-xs text-slate-500 mt-1">Configuraciones estándar y personalizadas para aplicaciones de carga pesada.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
          
          {/* Perfiles de Engranajes (Sin las referencias CONFUSAS de fabricación) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 relative">
            {/* Imagen de Fondo (Engranes precisión) */}
            <div className="absolute inset-0 z-0 opacity-5 -m-6">
              <Image 
                src="/bg/engranes-bg.png" 
                alt="Fondo de engranes de precisión" 
                fill 
                className="object-contain"
              />
            </div>

            {perfilesEngranes.map((engrane, idx) => (
              <div key={idx} className="bg-industrialDark-800/80 backdrop-blur-sm border border-industrialDark-700 p-5 rounded-lg flex flex-col justify-between relative z-10">
                <div>
                  <span className="text-[9px] font-mono text-industrialOrange-500 font-bold block">{engrane.clase}</span>
                  <h3 className="text-base font-black text-white uppercase mt-1 tracking-tight">{engrane.tipo}</h3>
                  <p className="text-slate-400 text-[11px] mt-2 leading-relaxed">
                    {engrane.descripcion}
                  </p>
                </div>
                {/* Se eliminó la línea de REF_FABRICACIÓN para limpiar la tarjeta */}
              </div>
            ))}
          </div>

          {/* Matriz de Materiales Aprobados en Español */}
          <div className="lg:col-span-5 bg-industrialDark-800 border border-industrialDark-700 p-6 rounded-lg font-mono">
            <h3 className="text-xs font-bold text-industrialOrange-500 uppercase tracking-widest flex items-center gap-2">
              🔬 Materiales Certificados
            </h3>
            <p className="text-slate-400 text-[11px] leading-relaxed mt-3">
              Mecanizamos insumos certificados de grado industrial, garantizando la resistencia a la tracción y al desgaste para cada entorno operativo.
            </p>
            
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold mb-2">Aleaciones de Acero</p>
                <div className="flex flex-wrap gap-2">
                  {matrizMateriales.aceros.map((acero, i) => (
                    <span key={i} className="text-[10px] bg-industrialDark-900 border border-industrialDark-700 text-slate-300 font-bold px-2 py-1 rounded">
                      {acero}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold mb-2">No Ferrosos y Sintéticos</p>
                <div className="flex flex-wrap gap-2">
                  {matrizMateriales.noFerrosos.map((mat, i) => (
                    <span key={i} className="text-[10px] bg-industrialDark-900 border border-industrialDark-700 text-slate-300 font-bold px-2 py-1 rounded">
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECCIÓN 4: CATÁLOGO DE COMPONENTES CON FILTROS DINÁMICOS */}
      <section id="catalogo" className="relative px-6 py-24 bg-industrialDark-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5">
          <Image src="/bg/inventario-bg.png" alt="Fondo" fill className="object-cover" />
        </div>

        <div className="relative max-w-7xl mx-auto z-10">
          <div className="mb-12 pb-4 border-b border-industrialDark-700 text-center">
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Catálogo de Componentes de Precisión</h2>
            <p className="text-slate-400 text-xs mt-2 max-w-xl mx-auto">
              Usa los filtros de abajo para buscar por tipo de pieza. Selecciona cualquier artículo para solicitar una cotización técnica instantánea vía WhatsApp.
            </p>
          </div>

          {/* BOTONES DE FILTRADO (TABS) */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 font-mono text-xs">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoriaActiva(cat.id)}
                className={`px-4 py-2.5 rounded font-bold uppercase tracking-wider transition-all duration-200 border ${
                  categoriaActiva === cat.id
                    ? 'bg-industrialOrange-600 border-industrialOrange-500 text-white shadow-lg shadow-industrialOrange-600/20'
                    : 'bg-industrialDark-800 border-industrialDark-700 text-slate-400 hover:text-white hover:bg-industrialDark-700'
                }`}
              >
                {cat.nombre}
              </button>
            ))}
          </div>

          {/* GRID DE PRODUCTOS FILTRADOS */}
          {productosFiltrados.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {productosFiltrados.map((producto) => (
                <ProductoCard 
                  key={producto.id} 
                  producto={producto} 
                  infoContacto={{ telefono: telWhatsappCat }} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-slate-500 font-mono text-sm border border-dashed border-industrialDark-700 rounded-lg">
              No hay piezas registradas en esta categoría actualmente.
            </div>
          )}
        </div>
      </section>

      {/* FOOTER MULTICANAL COMPLETO EN ESPAÑOL */}
      <footer id="contacto" className="bg-black text-slate-500 py-16 px-6 border-t border-industrialDark-700 font-mono text-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Ubicación */}
          <div className="space-y-3">
            <h3 className="text-white font-bold uppercase tracking-wider text-sm">Ubicación del Taller</h3>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              {infoContacto.direccion}
            </p>
            <span className="inline-block bg-industrialDark-900 border border-industrialDark-700 text-slate-400 px-3 py-1 rounded text-[10px]">
              📍 Querétaro, Qro.
            </span>
          </div>

          {/* Canales Telefónicos y Correos */}
          <div className="space-y-4">
            <h3 className="text-white font-bold uppercase tracking-wider text-sm">Líneas de Atención</h3>
            
            <div className="space-y-2">
              <p className="text-[10px] text-slate-600 uppercase font-bold">Teléfonos Directos:</p>
              {infoContacto.telefonos.map((tel, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-slate-200 font-bold text-sm">
                    {tel.numero.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')}
                  </span>
                  <span className="text-[10px] text-slate-600">{tel.etiqueta}</span>
                </div>
              ))}
            </div>

            <div className="space-y-1">
              <p className="text-[10px] text-slate-600 uppercase font-bold">Correos Corporativos:</p>
              {infoContacto.correos.map((correo, idx) => (
                <span key={idx} className="text-industrialOrange-500 block hover:underline text-[11px]">
                  {correo}
                </span>
              ))}
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="space-y-4">
            <h3 className="text-white font-bold uppercase tracking-wider text-sm">Canales Digitales</h3>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              Siga nuestras páginas oficiales de redes sociales para visualizar videos de maquinados en tiempo real, tolerancias finales y proyectos entregados.
            </p>
            <div className="flex flex-col gap-2 font-sans">
              <a href={infoContacto.redes.facebook} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-industrialOrange-500 transition-colors flex items-center gap-2 text-xs bg-industrialDark-900 p-2.5 rounded border border-industrialDark-700">
                🌐 facebook.com/MaquinadosIndustrialesQro
              </a>
              <a href={infoContacto.redes.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-industrialOrange-500 transition-colors flex items-center gap-2 text-xs bg-industrialDark-900 p-2.5 rounded border border-industrialDark-700">
                📸 instagram.com/maquinados977
              </a>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto border-t border-industrialDark-700/50 mt-12 pt-6 text-center text-[10px] text-slate-700">
          © {new Date().getFullYear()} MAQUINADOS INDUSTRIALES QRO. PRECISIÓN INDUSTRIAL. TODOS LOS DERECHOS RESERVADOS. QUERÉTARO, MÉXICO.
        </div>
      </footer>
      {/* BOTÓN FLOTANTE DE WHATSAPP PARA MÓVILES */}
      <a
        href={`https://wa.me/52${telWhatsappCat}?text=Hola,%20vengo%20de%20su%20sitio%20web.%20Me%20interesa%20cotizar%20un%20maquinado.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label="Contactar por WhatsApp"
      >
        <svg 
          className="w-6 h-6 fill-current" 
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.488 1.449 5.412 1.451 5.458 0 9.894-4.436 9.898-9.896.002-2.645-1.022-5.13-2.885-6.994C17.204 1.85 14.716.832 12.01.832c-5.46 0-9.897 4.436-9.9 9.898-.001 1.926.499 3.81 1.447 5.429l-1.012 3.7 3.791-.995zM17.16 13.91c-.282-.141-1.666-.823-1.924-.917-.257-.094-.443-.141-.63.141-.186.281-.722.917-.885 1.102-.162.186-.326.208-.608.066-.282-.141-1.194-.44-2.275-1.405-.841-.75-1.41-1.676-1.575-1.958-.165-.282-.018-.434.123-.574.127-.127.282-.329.424-.493.142-.165.189-.282.283-.469.094-.187.047-.352-.023-.493-.07-.141-.63-1.518-.862-2.08-.227-.547-.457-.473-.63-.482-.165-.008-.353-.01-.542-.01s-.494.07-.753.352c-.259.282-.988.966-.988 2.359 0 1.393 1.012 2.735 1.153 2.923.141.187 1.992 3.042 4.83 4.266.675.292 1.202.466 1.612.596.678.215 1.294.185 1.781.112.543-.081 1.666-.681 1.901-1.34.235-.658.235-1.221.165-1.34-.07-.117-.257-.188-.54-.328z"/>
        </svg>
        
        <span className="absolute right-14 bg-industrialDark-800 text-white text-[11px] font-bold font-mono px-3 py-1.5 rounded border border-industrialDark-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl hidden md:inline">
          ¿Cotizar una pieza?
        </span>
      </a>
    </main>
  );
}