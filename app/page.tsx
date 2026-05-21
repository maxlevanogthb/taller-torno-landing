// app/page.tsx
import { 
  productos, 
  infoContacto, 
  matrizMateriales, 
  perfilesEngranes, 
  inventarioCritico 
} from '@/data/productos';
import ProductoCard from '@/components/ProductoCard';

export default function Home() {
  // Tomamos el número de ventas/taller para el botón principal y las cotizaciones
  const telWhatsappCat = infoContacto.telefonos[1].numero;

  return (
    <main className="min-h-screen bg-industrialDark-900 text-slate-200 font-sans selection:bg-industrialOrange-500 selection:text-white">
      
      {/* NAVBAR COMPONENT COMPACTO */}
      <nav className="sticky top-0 z-50 bg-industrialDark-900/90 backdrop-blur-md border-b border-industrialDark-700 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-black tracking-tight text-white uppercase">
              MACHINEX <span className="text-industrialOrange-500">PRECISION</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#inicio" className="hover:text-white transition-colors">Home</a>
            <a href="#servicios" className="hover:text-white transition-colors">Machining</a>
            <a href="#gruas" className="hover:text-white transition-colors">Cranes</a>
            <a href="#materiales" className="hover:text-white transition-colors">Agro-Auto</a>
            <a href="#catalogo" className="hover:text-white transition-colors">Catalog</a>
          </div>
          <a 
            href={`https://wa.me/52${telWhatsappCat}?text=Hola,%20solicito%20cotización%20para%20un%20maquinado%20industrial.`}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-industrialOrange-600 hover:bg-industrialOrange-500 text-white font-bold px-5 py-2 rounded text-xs tracking-wider uppercase transition-all duration-200 shadow-md shadow-industrialOrange-600/10"
          >
            Request Quote
          </a>
        </div>
      </nav>

      {/* HERO SECTION PRINCIPAL */}
      <header id="inicio" className="relative py-24 px-6 overflow-hidden border-b border-industrialDark-700 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-industrialDark-900 to-industrialDark-900">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-industrialDark-800 border border-industrialDark-700 rounded text-[10px] font-bold tracking-widest uppercase text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-industrialOrange-500 animate-pulse" />
            Industrial Grade • High Resistance
          </span>
          <h1 className="text-4xl md:text-7xl font-black tracking-tight text-white uppercase mt-6 max-w-4xl mx-auto leading-none">
            Agricultural & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">Automotive Lines</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed border-l-2 border-industrialOrange-500 pl-4 md:pl-0 md:border-none italic">
            &quot;{infoContacto.valores.slogan}&quot;
          </p>
          <p className="mt-3 text-sm text-slate-500 max-w-xl mx-auto">
            Maquinado de refacciones de alta resistencia para tractores e implementos agrícolas. Engineered for durability in high-stress environments.
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

      {/* SECCIÓN 1: EXPERTOS EN CARGA PESADA (GRÚAS VIAJERAS) */}
      <section id="gruas" className="max-w-7xl mx-auto px-6 py-20 border-b border-industrialDark-700">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] font-black tracking-widest text-industrialOrange-500 uppercase">
              Grado Industrial
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white uppercase leading-tight">
              Expertos en Componentes de Carga Pesada
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Ingeniería de precisión para puentes grúa. Fabricación y mecanizado de repuestos críticos diseñados para soportar <strong className="text-white font-semibold">hasta 30 toneladas</strong> de capacidad operativa.
            </p>
            <div className="pt-2">
              <a href="#catalogo" className="inline-flex bg-industrialOrange-600 hover:bg-industrialOrange-500 text-white font-bold px-6 py-3 rounded text-xs tracking-wider uppercase transition-colors">
                Ver Catálogo Técnico
              </a>
            </div>
          </div>

          {/* Bloque Informativo de los 20 Años */}
          <div className="lg:col-span-7 bg-industrialDark-800 border border-industrialDark-700 p-8 rounded-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-industrialOrange-600/5 rounded-full blur-2xl" />
            <div className="flex items-center gap-2 text-[10px] tracking-widest font-mono text-slate-500 uppercase mb-4">
              <span>STATUS: ONLINE</span>
              <span>•</span>
              <span>CAPACITY: 30-TON</span>
            </div>
            <p className="text-6xl font-black text-industrialOrange-500 tracking-tight">+{infoContacto.valores.experiencia.match(/\d+/)?.[0] || "20"} Años</p>
            <p className="text-white font-bold text-lg mt-1 uppercase tracking-tight">De Excelencia en el Mercado Industrial</p>
            <p className="text-slate-400 text-xs mt-3 leading-relaxed max-w-xl">
              Nos adaptamos rigurosamente a las especificaciones geométricas y tolerancias micrométricas requeridas para minimizar los tiempos de paro de planta de su empresa.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: INVENTARIO CRÍTICO (GRID OSCURO PREMIUM) */}
      <section id="servicios" className="max-w-7xl mx-auto px-6 py-20 border-b border-industrialDark-700">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-white uppercase">Inventario Crítico</h2>
            <p className="text-xs text-slate-500 mt-1">Componentes mecánicos de alta tolerancia mecanizados bajo plano o muestra.</p>
          </div>
          <span className="text-[9px] font-bold bg-industrialDark-800 border border-industrialDark-700 text-slate-400 px-2.5 py-1 rounded tracking-wider uppercase">
            ● Stock Disponible
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
              <span className="text-[9px] font-bold bg-industrialDark-700 text-slate-300 px-2 py-0.5 rounded uppercase">High-Torque</span>
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
                  {idx === 0 ? 'Structural' : idx === 1 ? 'Heavy-Duty' : 'Wear-Resistant'}
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

      {/* SECCIÓN 3: TECHNICAL SPECIFICATIONS MATRIX */}
      <section id="materiales" className="max-w-7xl mx-auto px-6 py-20 border-b border-industrialDark-700">
        <div className="mb-10 font-mono">
          <p className="text-[10px] font-bold text-industrialOrange-500 uppercase tracking-widest">Gear Profiles</p>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mt-1">Technical Specifications Matrix</h2>
          <p className="text-xs text-slate-500 mt-1">Standard and custom configurations available for heavy-duty industrial applications.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Perfiles de Engranajes */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {perfilesEngranes.map((engrane, idx) => (
              <div key={idx} className="bg-industrialDark-800 border border-industrialDark-700 p-5 rounded-lg flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-mono text-slate-500 block">{engrane.clase}</span>
                  <h3 className="text-base font-black text-white uppercase mt-1 tracking-tight">{engrane.tipo}</h3>
                  <p className="text-slate-400 text-[11px] mt-2 leading-relaxed">
                    {engrane.descripcion}
                  </p>
                </div>
                <div className="text-[9px] font-mono text-slate-600 mt-4 pt-2 border-t border-industrialDark-700/50">
                  DATA SHEET: GEAR_MFG_0{idx+1}
                </div>
              </div>
            ))}
          </div>

          {/* Matriz de Materiales Aprobados */}
          <div className="lg:col-span-5 bg-industrialDark-800 border border-industrialDark-700 p-6 rounded-lg font-mono">
            <h3 className="text-xs font-bold text-industrialOrange-500 uppercase tracking-widest flex items-center gap-2">
              🔬 Approved Materials
            </h3>
            <p className="text-slate-400 text-[11px] leading-relaxed mt-3">
              We source certified industrial-grade raw materials ensuring optimal tensile strength and wear resistance for specific operational environments.
            </p>
            
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold mb-2">Steel Alloys</p>
                <div className="flex flex-wrap gap-2">
                  {matrizMateriales.aceros.map((acero, i) => (
                    <span key={i} className="text-[10px] bg-industrialDark-900 border border-industrialDark-700 text-slate-300 font-bold px-2 py-1 rounded">
                      {acero}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold mb-2">Non-Ferrous & Synthetics</p>
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

      {/* SECCIÓN 4: CATÁLOGO DE COMPONENTES */}
      <section id="catalogo" className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-10 pb-4 border-b border-industrialDark-700">
          <h2 className="text-2xl font-black text-white uppercase tracking-tight">Catálogo de Componentes Disponibles</h2>
          <p className="text-slate-400 text-xs mt-1">Selecciona cualquier pieza para iniciar una cotización técnica directa vía WhatsApp al taller.</p>
        </div>

        {/* Grid de Productos Consumiendo tu Componente */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productos.map((producto) => (
            <ProductoCard 
              key={producto.id} 
              producto={producto} 
              infoContacto={{ telefono: telWhatsappCat }} 
            />
          ))}
        </div>
      </section>

      {/* FOOTER MULTICANAL COMPLETO */}
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
              Siga nuestras páginas oficiales de redes sociales para visualizar videos de maquinados en tiempo real y tolerancias finales.
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
          © {new Date().getFullYear()} MACHINEX PRECISION. INDUSTRIAL GRADE MANUFACTURING. TODOS LOS DERECHOS RESERVADOS.
        </div>
      </footer>

    </main>
  );
}