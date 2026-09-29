// Contenido de Cacao Spa Tulum — Tulum, Quintana Roo.
// Fuentes: investigacion/crudo.json, investigacion/resumen.json.
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;

export const negocio = {
  nombre: 'Cacao Spa Tulum',
  ciudad: 'Tulum, Quintana Roo',
  telefono: '+529982418650',
  whatsapp: '529982418650',
  direccion: 'Av. Tulum 32 entre Av. Satélite y Av. Centauro, Centro, Tulum, Q. Roo',
  mapa: 'https://www.google.com/maps/search/Cacao+Spa+Tulum+Av+Tulum+32',
};

export const wa = (msg: string) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(msg)}`;

export const foto = img;

export const servicios = [
  {
    id: 'masajes',
    nombre: 'Masajes',
    descripcion: 'Masaje de cuerpo completo con musicoterapia y aromaterapia. Presión suave, media o fuerte. Para parejas también.',
    foto: img('masaje.webp'),
    alt: 'Masaje terapéutico en Cacao Spa Tulum',
    waMsg: wa('Hola, me gustaría reservar un masaje en Cacao Spa Tulum.'),
  },
  {
    id: 'faciales-organicos',
    nombre: 'Faciales orgánicos',
    descripcion: 'Faciales rejuvenecedores, antiedad y no invasivos. 100% veganos y libres de parabenos.',
    foto: img('tratamiento-1.webp'),
    alt: 'Facial orgánico en Cacao Spa Tulum',
    waMsg: wa('Hola, me gustaría reservar un facial orgánico en Cacao Spa Tulum.'),
  },
  {
    id: 'faciales-clinicos',
    nombre: 'Faciales clínicos',
    descripcion: 'Tratamientos especializados para regenerar y corregir la piel. Veganos y sin parabenos.',
    foto: img('tratamiento-2.webp'),
    alt: 'Facial clínico en Cacao Spa Tulum',
    waMsg: wa('Hola, me gustaría reservar un facial clínico en Cacao Spa Tulum.'),
  },
  {
    id: 'paquetes',
    nombre: 'Paquetes',
    descripcion: 'Masaje (60 o 75 min) + facial orgánico (40 min). La combinación perfecta para el cuerpo y la piel.',
    foto: img('tratamiento-3.webp'),
    alt: 'Paquete spa en Cacao Spa Tulum',
    waMsg: wa('Hola, me gustaría reservar un paquete en Cacao Spa Tulum.'),
  },
];
