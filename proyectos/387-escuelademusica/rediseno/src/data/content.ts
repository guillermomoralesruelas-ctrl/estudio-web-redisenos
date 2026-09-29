// Contenido de Lukin Music — Escuela de música Aguascalientes. Fuente: investigacion/crudo.json.
// Método 1.2: imágenes de assets/web/ (fotos del sitio live).
// Regla: nada inventado.

const img = (f: string) => `${import.meta.env.BASE_URL}${f}.webp`;

export const negocio = {
  nombre:    'Lukin Music',
  subtitulo: 'Escuela de Música en Aguascalientes',
  ciudad:    'Aguascalientes, Ags.',
  telefono:  '449-379-3452',
  movil:     '449-412-1268',
  whatsapp:  '524494121268',
  email:     'fernando.r@lukinmusic.com',
  direccion: 'Sierra de Tepoztlán 601 Local 6, Bosques del Prado Sur, Aguascalientes',
  mapaEmbed: 'https://maps.google.com/maps?q=Sierra+de+Tepozlan+601+Local+6+Bosques+del+Prado+Sur+Aguascalientes+Mexico&t=m&z=15&output=embed&iwloc=near',
};

export const wa = (msg: string) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(msg)}`;

export const foto = img;

export const instrumentos = [
  'Guitarra', 'Canto', 'Piano', 'Batería', 'Bajo', 'Ukulele', 'Violín', 'Trompeta', 'Trombón',
];

export const planes = [
  {
    foto:     'plan-iniciacion',
    edad:     '4 a 7 años',
    nombre:   'Plan de Iniciación Musical',
    texto:    'Primer contacto con la música a través del juego y la creatividad. Desarrollamos el oído, el ritmo y el amor por los instrumentos desde temprana edad.',
  },
  {
    foto:     'plan-induccion',
    edad:     '8 a 12 años',
    nombre:   'Plan de Inducción Musical',
    texto:    'Transición de la iniciación al instrumento. Los alumnos descubren sus aptitudes musicales y eligen su camino con bases sólidas.',
  },
  {
    foto:     'plan-instrumento',
    edad:     '+12 años',
    nombre:   'Plan de Instrumento',
    texto:    'Clases personalizadas 1 o 2 veces por semana, adaptadas a tus gustos musicales. 8 niveles con evaluación final semestral grabada en estudio.',
  },
];

export const profesores = [
  { foto: 'maestro-fernando', nombre: 'Fernando Rodríguez', rol: 'Director y maestro' },
  { foto: 'maestro-gustavo',  nombre: 'Gustavo Maldonado',  rol: 'Maestro de instrumento' },
];

export const horarios = 'Lun–Vie 10:00–13:00 y 15:00–20:00 · Sáb 10:00–17:00';
