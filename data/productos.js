// data/productos.js
export const productos = [
  {
    id: "arandela-barra",
    codigo: "BARRA DE SENSIBILIDAD",
    titulo: "Arandela Barra de Sensibilidad",
    precio: 16.56,
    categoria: "arandelas",
    imagen: "/productos/arandela-barra.png",
    descripcion: "Arandela reforzada de alta tolerancia para ensamble en barra de sensibilidad."
  },
  {
    id: "C5NN3N159A",
    codigo: "C5NN3N159A",
    titulo: "Perno Grande RA381-A",
    precio: 449.22,
    categoria: "pernos",
    imagen: "/productos/C5NN3N159A.png",
    descripcion: "Perno de carga grande industrial con acabado tropicalizado de alta durabilidad."
  },
  {
    id: "C5NN3N160A",
    codigo: "C5NN3N160A",
    titulo: "Perno Chico Soporte Frontal",
    precio: 161.81,
    categoria: "pernos",
    imagen: "/productos/C5NN3N160A.png",
    descripcion: "Perno chico maquinado para soporte frontal, resistente a alta tracción."
  },
  {
    id: "184326M91",
    codigo: "184326M91",
    titulo: "Horquilla de Frenos RA 389",
    precio: 76.44,
    categoria: "horquillas",
    imagen: "/productos/184326M91.png",
    descripcion: "Horquilla de frenos con rosca milimétrica rectificada para ajuste de precisión."
  },
  {
    id: "C7NN807C",
    codigo: "C7NN807C",
    titulo: "Perno Barra Levante Hidráulico RA 383A",
    precio: 38.22,
    categoria: "pernos",
    imagen: "/productos/C7NN807C.png",
    descripcion: "Perno cilíndrico con ranura de retención para sistemas de levante hidráulico."
  },
  {
    id: "C5NNN823D",
    codigo: "C5NNN823D",
    titulo: "Perno Barra de Tiro RA-384",
    precio: 29.06,
    categoria: "pernos",
    imagen: "/productos/C5NNN823D.png",
    descripcion: "Perno reforzado para barra de tiro en aplicaciones agrícolas e industriales."
  },
  {
    id: "848187",
    codigo: "848187",
    titulo: "Perno Soporte Frontal 265/285",
    precio: 330.31,
    categoria: "pernos",
    imagen: "/productos/848187.png",
    descripcion: "Perno pesado de gran longitud para soportes frontales serie 265/285."
  },
  {
    id: "C5NNN939A",
    codigo: "C5NNN939A",
    titulo: "Perno Levante Hidráulico RA-386",
    precio: 76.44,
    categoria: "pernos",
    imagen: "/productos/C5NNN939A.png",
    descripcion: "Perno con perforación pasante para seguro en brazos de levante industrial."
  },
  {
    id: "1494400",
    codigo: "1494400",
    titulo: "Tornillo Fusible Arado RA 328 C",
    precio: 84.37,
    categoria: "tornillos",
    imagen: "/productos/1494400.png",
    descripcion: "Tornillo fusible con sección de corte calculada para protección mecánica de arados."
  }
];

export const infoContacto = {
  direccion: "Calle Onix número 153, Colonia Satélite, Santiago de Querétaro, QRO, México, C.P. 76110",
  telefonos: [
    { numero: "4423695555", etiqueta: "Oficina Qro" },
    { numero: "7225967837", etiqueta: "Ventas / Taller" } // Número principal para WhatsApp del catálogo
  ],
  correos: [
    "maquinadosqro6@gmail.com",
    "alevano@hotmail.com"
  ],
  redes: {
    facebook: "https://www.facebook.com/profile.php?id=61556637372338", // O el enlace directo a Maquinados Industriales Qro
    instagram: "https://www.instagram.com/maquinados977"
  },
  valores: {
    slogan: "Transformamos tus ideas en piezas exactas. ¡Porque cada detalle cuenta!",
    experiencia: "Más de 20 años de experiencia"
  }
};

export const matrizMateriales = {
  aceros: ["AISI 4140", "AISI 4340", "1045 CARBÓN", "8620 ALEACIÓN"],
  noFerrosos: ["BRONCE SAE 65", "ALUMINIO 7075", "NYLATRON", "DELRIN"]
};

export const perfilesEngranes = [
  {
    clase: "TIPO 01",
    tipo: "Rectos (Spur)",
    descripcion: "Dientes de corte recto para transmisión de alta carga en ejes paralelos. Ideal para maquinaria pesada."
  },
  {
    clase: "TIPO 02",
    tipo: "Helicoidales",
    descripcion: "Dientes angulados para una operación más suave y silenciosa, con mayor capacidad de torque que los engranes rectos."
  },
  {
    clase: "TIPO 03",
    tipo: "Cónicos (Bevel)",
    descripcion: "Configuración cónica para la transmisión de potencia en ejes que se intersectan a ángulos precisos."
  }
];

export const inventarioCritico = [
  {
    titulo: "Ruedas de Traslación",
    descripcion: "Mecanizadas con tratamiento térmico de inducción para máxima resistencia al desgaste en rieles industriales. Geometría optimizada para distribución de carga pesada.",
    detalles: ["Dureza: 55-60 HRC en pista", "Diámetros: Hasta 800mm"]
  },
  {
    titulo: "Ejes de Transmisión",
    descripcion: "Ejes de acero SAE 4340 bonificado, diseñados para resistir fatiga y torsión extrema en polipastos principales."
  },
  {
    titulo: "Chumaceras",
    descripcion: "Soportes robustos en fundición nodular o acero soldado. Tolerancias micrométricas para alineación perfecta."
  },
  {
    titulo: "Rodamientos",
    descripcion: "Rodamientos de rodillos a rótula de alta capacidad de carga dinámica, seleccionados para ambientes industriales hostiles."
  },
  {
    titulo: "Bujes de Bronce",
    descripcion: "Bujes de aleación especial SAE 64 / SAE 660, con o sin insertos de grafito sólido para autolubricación en zonas de difícil acceso."
  }
];