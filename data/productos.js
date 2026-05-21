// data/productos.js
export const productos = [
  {
    id: "1",
    codigo: "",
    nombre: "ARANDELA BARRA DE SENSIBILIDAD",
    precio: 16.56,
    categoria: "Arandelas"
  },
  {
    id: "2",
    codigo: "C5NN3N159A",
    nombre: "PERNOGRANDE RA381-A",
    precio: 449.22,
    categoria: "Pernos"
  },
  {
    id: "3",
    codigo: "C5NN3N160A",
    nombre: "PERNOCHICO SOPORTE FRONTAL",
    precio: 161.81,
    categoria: "Pernos"
  },
  {
    id: "4",
    codigo: "184326M9I",
    nombre: "HORQUILLA DE FRENOS RA 389",
    precio: 76.44,
    categoria: "Horquillas"
  },
  {
    id: "5",
    codigo: "C7NN807C",
    nombre: "PERNO BARRA LEVANTE HIDRAULICO RA 383A",
    precio: 38.22,
    categoria: "Pernos"
  },
  {
    id: "6",
    codigo: "C5NNN823D",
    nombre: "PERNO BARRA DE TIRO RA-384",
    precio: 29.06,
    categoria: "Pernos"
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
  aceros: ["AISI 4140", "AISI 4340", "1045 CARBON", "8620 ALLOY"],
  noFerrosos: ["BRONZE SAE 65", "ALUMINUM 7075", "NYLATRON", "DELRIN"]
};

export const perfilesEngranes = [
  {
    clase: "CLASS 01",
    tipo: "Spur",
    descripcion: "Straight-cut teeth for high-load parallel shaft transmission. Ideal for heavy machinery."
  },
  {
    clase: "CLASS 02",
    tipo: "Helical",
    descripcion: "Angled teeth for smoother, quieter operation and higher torque capacity than spur gears."
  },
  {
    clase: "CLASS 03",
    tipo: "Bevel",
    descripcion: "Conical configuration for intersecting shaft power transmission at precise angles."
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