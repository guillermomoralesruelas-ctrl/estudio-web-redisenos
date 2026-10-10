// Contenido de Abud Asesoría Inmobiliaria. Fuente: abudbienesraices.com (inicio y las 54 fichas de /inmuebles),
// leído el 2026-10-10. No se inventan datos: lo que falta queda como [PENDIENTE] o se omite.

export const negocio = {
  nombre: 'Abud Asesoría Inmobiliaria',
  desde: 2011,
  fundador: 'Luis Alberto Abud Romero',
  telefono: '(981) 813 2618',
  telefonoE164: '529818132618',
  // [PENDIENTE] El sitio no publica WhatsApp; se usa el teléfono principal hasta que el cliente confirme un número con WhatsApp.
  whatsapp: '529818132618',
  correo: 'abud_ventas@hotmail.com',
  direccion: 'Av. Luis Donaldo Colosio 142, entre Allende y Aldama, interior 4 y 5',
  ciudad: 'San Francisco de Campeche, Camp.',
  horario: '9:00 a 17:00 h', // el sitio no dice qué días: [PENDIENTE] confirmar días de oficina
  mapa: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Av. Luis Donaldo Colosio 142, Campeche, Campeche'),
  sitioOriginal: 'https://www.abudbienesraices.com',
  quienes: [
    'Abud Asesoría Inmobiliaria es fundada en 2011 por Luis Alberto Abud Romero, con la convicción de dar un servicio con calidad y honestidad a la sociedad campechana, en horarios accesibles para los clientes, con la finalidad de orientar y apoyar en la adquisición de su hogar y patrimonio.',
    'Para nosotros es un honor que hoy nuestra mejor propaganda sea la recomendación de ustedes, nuestros clientes.',
  ],
  mision: 'Lograr clientes satisfechos.',
  vision: 'Ser la inmobiliaria con mejores servicios y atención para los clientes.',
  valores: 'Dar un servicio de calidad, honestidad y prontitud.',
  afiliados: ['AMPI', 'Infonavit', 'Fovissste', 'ISSFAM'],
  bancos: ['BBVA Bancomer', 'Banorte', 'HSBC', 'Inbursa', 'Santander'],
};

export type Zona = 'centro' | 'fracc' | 'playa' | 'campo' | 'lejos';

export const zonas: { id: Zona; nombre: string; frase: string }[] = [
  { id: 'centro', nombre: 'Centro y barrios', frase: 'Casonas coloniales, Guadalupe, Santa Ana, La Ermita.' },
  { id: 'fracc', nombre: 'Colonias y fraccs.', frase: 'Imí, Fracciorama 2000, Siglo XXI, privadas nuevas.' },
  { id: 'playa', nombre: 'Frente al mar', frase: 'San Lorenzo, Club Náutico y Champotón.' },
  { id: 'campo', nombre: 'Campo y afueras', frase: 'Castamay, Koben, China, Uayamón, Tenabo, Pomuch.' },
  { id: 'lejos', nombre: 'Grandes extensiones', frase: 'Carmen, Mamantel, Tabasco y Mérida.' },
];

export type Inmueble = {
  id: string; zona: Zona; lugar: string; tipo: string; operacion: 'venta' | 'renta'; precio: number | null;
  rec: number | null; banos: number | null; terreno: number | null; construccion: number | null; foto: string | null; geo: string[] | null;
};

// Precios que conviene confirmar con el cliente antes de publicar (ver OPORTUNIDADES.md).
export const precioPorConfirmar: Record<string, string> = {
  pvSxAocgem6mfo1z2AzR: '¿precio por m²?',
  qHQ1OnpEKgCgIlPPAvms: 'la ficha dice "renta y venta"',
};

export const inmuebles: Inmueble[] = [
 {
  "id": "1bA2Wx4p3g1i9mClBsYI",
  "zona": "fracc",
  "lugar": "Siglo XXI",
  "tipo": "Casa",
  "operacion": "venta",
  "precio": 2200000,
  "rec": 4,
  "banos": 3,
  "terreno": 160,
  "construccion": null,
  "foto": "1bA2Wx4p3g1i9mClBsYI",
  "geo": [
   "19.80097786460034",
   "-90.48921520908819"
  ]
 },
 {
  "id": "1gV2HhbXbSeVLhQ8Bp8F",
  "zona": "fracc",
  "lugar": "Fracc. Flor de Limón",
  "tipo": "Casa",
  "operacion": "renta",
  "precio": 20000,
  "rec": 5,
  "banos": 3,
  "terreno": null,
  "construccion": null,
  "foto": "1gV2HhbXbSeVLhQ8Bp8F",
  "geo": null
 },
 {
  "id": "3DqLEcI62gBytjmG7NSa",
  "zona": "playa",
  "lugar": "Playa San Lorenzo",
  "tipo": "Casa",
  "operacion": "venta",
  "precio": 3500000,
  "rec": 2,
  "banos": 4,
  "terreno": 142,
  "construccion": null,
  "foto": "3DqLEcI62gBytjmG7NSa",
  "geo": [
   "19.76595583377371",
   "-90.64931347498343"
  ]
 },
 {
  "id": "6LMtzOMjGKVLzD3il0ui",
  "zona": "campo",
  "lugar": "Koben",
  "tipo": "Terreno",
  "operacion": "venta",
  "precio": 650000,
  "rec": null,
  "banos": null,
  "terreno": null,
  "construccion": null,
  "foto": "6LMtzOMjGKVLzD3il0ui",
  "geo": null
 },
 {
  "id": "6oEwufPPN0ZsGpTgapl3",
  "zona": "campo",
  "lugar": "Castamay, carretera antigua a Mérida",
  "tipo": "Terreno",
  "operacion": "venta",
  "precio": 350000,
  "rec": null,
  "banos": null,
  "terreno": 1300,
  "construccion": null,
  "foto": "6oEwufPPN0ZsGpTgapl3",
  "geo": [
   "19.847609031866078",
   "-90.45311275981722"
  ]
 },
 {
  "id": "7Ruiti979046ih8Bk8GG",
  "zona": "lejos",
  "lugar": "Mamantel, Carmen",
  "tipo": "Terreno",
  "operacion": "venta",
  "precio": 51975000,
  "rec": null,
  "banos": null,
  "terreno": null,
  "construccion": null,
  "foto": "7Ruiti979046ih8Bk8GG",
  "geo": null
 },
 {
  "id": "7TeUeT5bil8YBtQteOY1",
  "zona": "fracc",
  "lugar": "Ex Hacienda Kalá",
  "tipo": "Casa",
  "operacion": "venta",
  "precio": 1150000,
  "rec": 2,
  "banos": 1,
  "terreno": 126,
  "construccion": 62,
  "foto": "7TeUeT5bil8YBtQteOY1",
  "geo": [
   "19.835503010457288",
   "-90.48057016802501"
  ]
 },
 {
  "id": "8k0HNNeclcVMsFOzX3sh",
  "zona": "fracc",
  "lugar": "Av. Gobernadores",
  "tipo": "Casa",
  "operacion": "venta",
  "precio": 2700000,
  "rec": 4,
  "banos": 2,
  "terreno": 222,
  "construccion": 187,
  "foto": "8k0HNNeclcVMsFOzX3sh",
  "geo": [
   "19.8425450090141",
   "-90.51386274222949"
  ]
 },
 {
  "id": "8zmZMpNtlAuL63Uwi2hT",
  "zona": "centro",
  "lugar": "Barrio de Guadalupe",
  "tipo": "Casa con negocio",
  "operacion": "venta",
  "precio": 11000000,
  "rec": 3,
  "banos": 5,
  "terreno": 272,
  "construccion": 381,
  "foto": "8zmZMpNtlAuL63Uwi2hT",
  "geo": [
   "19.849732020589837",
   "-90.52946537733078"
  ]
 },
 {
  "id": "AOffB2rCAyP3VvncYWTQ",
  "zona": "campo",
  "lugar": "Tenabo",
  "tipo": "Terreno",
  "operacion": "venta",
  "precio": 280000,
  "rec": null,
  "banos": null,
  "terreno": 250,
  "construccion": null,
  "foto": "AOffB2rCAyP3VvncYWTQ",
  "geo": [
   "20.057508875560185",
   "-90.21615693100469"
  ]
 },
 {
  "id": "AUtMOsheoqtJr2DVVrPm",
  "zona": "centro",
  "lugar": "Centro histórico",
  "tipo": "Casa",
  "operacion": "venta",
  "precio": 8500000,
  "rec": 3,
  "banos": 3,
  "terreno": 310,
  "construccion": 315,
  "foto": "AUtMOsheoqtJr2DVVrPm",
  "geo": [
   "19.843996516090236",
   "-90.54014189690876"
  ]
 },
 {
  "id": "BCXR1i6UtVIKFbxGMZao",
  "zona": "lejos",
  "lugar": "El Barí, Balancán, Tabasco",
  "tipo": "Terreno",
  "operacion": "venta",
  "precio": 40806000,
  "rec": null,
  "banos": null,
  "terreno": null,
  "construccion": null,
  "foto": "BCXR1i6UtVIKFbxGMZao",
  "geo": null
 },
 {
  "id": "BDf9iHIXRfiNMjF4XXwG",
  "zona": "lejos",
  "lugar": "Mérida, Yucatán",
  "tipo": "Terreno",
  "operacion": "venta",
  "precio": 1200000,
  "rec": null,
  "banos": null,
  "terreno": 1200,
  "construccion": null,
  "foto": null,
  "geo": [
   "21.116505366600776",
   "-89.67118548286159"
  ]
 },
 {
  "id": "DuI0WWLj8B30VfdfJLHA",
  "zona": "campo",
  "lugar": "Koben (ejidal)",
  "tipo": "Terreno",
  "operacion": "venta",
  "precio": 250000,
  "rec": null,
  "banos": null,
  "terreno": 1800,
  "construccion": null,
  "foto": "DuI0WWLj8B30VfdfJLHA",
  "geo": null
 },
 {
  "id": "E1FowFZsC2uoP0buZYUx",
  "zona": "centro",
  "lugar": "La Ermita",
  "tipo": "Casa",
  "operacion": "venta",
  "precio": 1900000,
  "rec": 2,
  "banos": 1,
  "terreno": null,
  "construccion": null,
  "foto": "E1FowFZsC2uoP0buZYUx",
  "geo": [
   "19.85163781310754",
   "-90.51847469655917"
  ]
 },
 {
  "id": "EJNksRRke8X8HC5rDgSC",
  "zona": "centro",
  "lugar": "Barrio de Guadalupe",
  "tipo": "Casa",
  "operacion": "venta",
  "precio": 2600000,
  "rec": 1,
  "banos": 2,
  "terreno": 235,
  "construccion": 205,
  "foto": "EJNksRRke8X8HC5rDgSC",
  "geo": [
   "19.849285675792082",
   "-90.53003181853876"
  ]
 },
 {
  "id": "FfV9kJP0oo1JAIo4pnoX",
  "zona": "lejos",
  "lugar": "Carretera Carmen–Champotón",
  "tipo": "Terreno",
  "operacion": "venta",
  "precio": null,
  "rec": null,
  "banos": null,
  "terreno": 10000,
  "construccion": null,
  "foto": "FfV9kJP0oo1JAIo4pnoX",
  "geo": null
 },
 {
  "id": "GjPdS4ifLmvNbE9dH5B4",
  "zona": "campo",
  "lugar": "Ejido de China",
  "tipo": "Terreno",
  "operacion": "venta",
  "precio": 1070000,
  "rec": null,
  "banos": null,
  "terreno": 690,
  "construccion": null,
  "foto": "GjPdS4ifLmvNbE9dH5B4",
  "geo": null
 },
 {
  "id": "H9hzedh2LTqHfrYBOVAk",
  "zona": "fracc",
  "lugar": "Fracc. Los Encinos",
  "tipo": "Casa",
  "operacion": "venta",
  "precio": 3300000,
  "rec": 2,
  "banos": 4,
  "terreno": null,
  "construccion": null,
  "foto": "H9hzedh2LTqHfrYBOVAk",
  "geo": [
   "19.864888400013033",
   "-90.48589925355073"
  ]
 },
 {
  "id": "HajaTnHe6YZ5Z7D0isAR",
  "zona": "campo",
  "lugar": "Castamay",
  "tipo": "Casa",
  "operacion": "venta",
  "precio": 3500000,
  "rec": 2,
  "banos": 4,
  "terreno": 1200,
  "construccion": 60,
  "foto": "HajaTnHe6YZ5Z7D0isAR",
  "geo": [
   "19.844815157530142",
   "-90.43716681810211"
  ]
 },
 {
  "id": "HgwwlN6ESYbevFthzYY7",
  "zona": "fracc",
  "lugar": "Fracciorama 2000",
  "tipo": "Casa",
  "operacion": "renta",
  "precio": 35000,
  "rec": 4,
  "banos": 5,
  "terreno": null,
  "construccion": null,
  "foto": "HgwwlN6ESYbevFthzYY7",
  "geo": [
   "19.827861842687533",
   "-90.5310522069277"
  ]
 },
 {
  "id": "IDMJheoZyNu2nEGGctP3",
  "zona": "centro",
  "lugar": "Santa Ana",
  "tipo": "Casa",
  "operacion": "venta",
  "precio": 4500000,
  "rec": 4,
  "banos": 5,
  "terreno": 175,
  "construccion": 244,
  "foto": "IDMJheoZyNu2nEGGctP3",
  "geo": [
   "19.839100855921313",
   "-90.5267155255602"
  ]
 },
 {
  "id": "J59qSRcp6eOJRxxJt6MS",
  "zona": "fracc",
  "lugar": "Fracc. Santa María",
  "tipo": "Casa",
  "operacion": "venta",
  "precio": 2550000,
  "rec": 3,
  "banos": 3,
  "terreno": 156,
  "construccion": 108,
  "foto": "J59qSRcp6eOJRxxJt6MS",
  "geo": [
   "19.81792987457508",
   "-90.54028948422709"
  ]
 },
 {
  "id": "KkICsXJh7BfaiJKhORSr",
  "zona": "centro",
  "lugar": "Zona centro",
  "tipo": "Casa",
  "operacion": "venta",
  "precio": 5000000,
  "rec": 5,
  "banos": 5,
  "terreno": null,
  "construccion": null,
  "foto": "KkICsXJh7BfaiJKhORSr",
  "geo": null
 },
 {
  "id": "KkhpXDuMlS7XXH79yxV3",
  "zona": "playa",
  "lugar": "Playa San Lorenzo",
  "tipo": "Casa",
  "operacion": "venta",
  "precio": 3850000,
  "rec": 3,
  "banos": 4,
  "terreno": null,
  "construccion": null,
  "foto": "KkhpXDuMlS7XXH79yxV3",
  "geo": [
   "19.765268254364553",
   "-90.65012854232788"
  ]
 },
 {
  "id": "MPSbEPBCDsJUO6PGpXmV",
  "zona": "fracc",
  "lugar": "Colonia México",
  "tipo": "Casa",
  "operacion": "venta",
  "precio": 2700000,
  "rec": 3,
  "banos": 3,
  "terreno": null,
  "construccion": null,
  "foto": "MPSbEPBCDsJUO6PGpXmV",
  "geo": [
   "19.833704870902515",
   "-90.49942693816499"
  ]
 },
 {
  "id": "MrOcRw9kVKi41Y4g5ylX",
  "zona": "campo",
  "lugar": "Castamay",
  "tipo": "Terreno",
  "operacion": "venta",
  "precio": 550000,
  "rec": null,
  "banos": null,
  "terreno": 324,
  "construccion": null,
  "foto": "MrOcRw9kVKi41Y4g5ylX",
  "geo": null
 },
 {
  "id": "NSuUnBOZWDhXAwMydoxR",
  "zona": "centro",
  "lugar": "Barrio de Guadalupe",
  "tipo": "Casa",
  "operacion": "venta",
  "precio": 3000000,
  "rec": 3,
  "banos": 2,
  "terreno": 222,
  "construccion": 223,
  "foto": "NSuUnBOZWDhXAwMydoxR",
  "geo": [
   "19.849843618883973",
   "-90.52929257893518"
  ]
 },
 {
  "id": "QERk4Lccw6SQ1Yre10YG",
  "zona": "playa",
  "lugar": "Playa privada San Lorenzo",
  "tipo": "Terreno",
  "operacion": "venta",
  "precio": 500000,
  "rec": null,
  "banos": null,
  "terreno": null,
  "construccion": null,
  "foto": "QERk4Lccw6SQ1Yre10YG",
  "geo": null
 },
 {
  "id": "S7sbO3B6UOPZ7draRaKi",
  "zona": "fracc",
  "lugar": "Villas de Ah Kim Pech",
  "tipo": "Casa",
  "operacion": "venta",
  "precio": 3700000,
  "rec": 3,
  "banos": 3,
  "terreno": 200,
  "construccion": 208,
  "foto": "S7sbO3B6UOPZ7draRaKi",
  "geo": [
   "19.859859968104477",
   "-90.51658618843307"
  ]
 },
 {
  "id": "SJFywoQfxahYCq9BkHx4",
  "zona": "centro",
  "lugar": "Calle 61, centro histórico",
  "tipo": "Hotel",
  "operacion": "venta",
  "precio": 7300000,
  "rec": 11,
  "banos": 11,
  "terreno": 360,
  "construccion": 327,
  "foto": "SJFywoQfxahYCq9BkHx4",
  "geo": [
   "19.842380267466808",
   "-90.53755223751068"
  ]
 },
 {
  "id": "URkwmuyyaU2MtsV0283G",
  "zona": "campo",
  "lugar": "Pomuch",
  "tipo": "Terreno",
  "operacion": "venta",
  "precio": 680000,
  "rec": null,
  "banos": null,
  "terreno": null,
  "construccion": null,
  "foto": "URkwmuyyaU2MtsV0283G",
  "geo": null
 },
 {
  "id": "V5PXyo6QRsSnEQ0OgALK",
  "zona": "campo",
  "lugar": "Salida de la ciudad",
  "tipo": "Terreno",
  "operacion": "venta",
  "precio": 1250000,
  "rec": null,
  "banos": null,
  "terreno": 4000,
  "construccion": null,
  "foto": "V5PXyo6QRsSnEQ0OgALK",
  "geo": [
   "19.799397230982592",
   "-90.54591742812296"
  ]
 },
 {
  "id": "VrgdaIqcTcd7FcMyFsGa",
  "zona": "fracc",
  "lugar": "Campestre, Imí",
  "tipo": "Casa",
  "operacion": "venta",
  "precio": 2800000,
  "rec": 3,
  "banos": 2,
  "terreno": 400,
  "construccion": 100,
  "foto": "VrgdaIqcTcd7FcMyFsGa",
  "geo": [
   "19.882282025303933",
   "-90.47591339973755"
  ]
 },
 {
  "id": "YjjFb1yzpKh3puyPJbsO",
  "zona": "fracc",
  "lugar": "La Eminencia",
  "tipo": "Casa",
  "operacion": "venta",
  "precio": 3250000,
  "rec": 4,
  "banos": 5,
  "terreno": 385,
  "construccion": null,
  "foto": "YjjFb1yzpKh3puyPJbsO",
  "geo": [
   "19.829460205476238",
   "-90.54659957460635"
  ]
 },
 {
  "id": "aO0m4AfZBj4WX0TFL9Lw",
  "zona": "campo",
  "lugar": "Paseo de las Flores, Tenabo",
  "tipo": "Casa",
  "operacion": "venta",
  "precio": 800000,
  "rec": 2,
  "banos": 1,
  "terreno": 150,
  "construccion": 50,
  "foto": "aO0m4AfZBj4WX0TFL9Lw",
  "geo": [
   "20.057159953825703",
   "-90.21720143566289"
  ]
 },
 {
  "id": "bT6yBB8q1nnZM7mEXLzj",
  "zona": "fracc",
  "lugar": "Fracc. Campestre Imí",
  "tipo": "Terreno",
  "operacion": "venta",
  "precio": 1000000,
  "rec": null,
  "banos": null,
  "terreno": null,
  "construccion": null,
  "foto": "bT6yBB8q1nnZM7mEXLzj",
  "geo": null
 },
 {
  "id": "frecQ3svs7RO6MO0tJE9",
  "zona": "centro",
  "lugar": "Barrio de Santa Ana",
  "tipo": "Terreno",
  "operacion": "venta",
  "precio": 16421335,
  "rec": null,
  "banos": null,
  "terreno": 4691,
  "construccion": null,
  "foto": "frecQ3svs7RO6MO0tJE9",
  "geo": [
   "19.841088514844227",
   "-90.53075509120312"
  ]
 },
 {
  "id": "iQ5rn2AtwP2oRgMvaiiG",
  "zona": "fracc",
  "lugar": "Imí",
  "tipo": "Casa",
  "operacion": "venta",
  "precio": 2800000,
  "rec": 1,
  "banos": 3,
  "terreno": null,
  "construccion": null,
  "foto": "iQ5rn2AtwP2oRgMvaiiG",
  "geo": null
 },
 {
  "id": "ihcT6u8hYbtsBb8gCUKZ",
  "zona": "fracc",
  "lugar": "Imí",
  "tipo": "Casa",
  "operacion": "venta",
  "precio": 2950000,
  "rec": 3,
  "banos": 4,
  "terreno": null,
  "construccion": 160,
  "foto": "ihcT6u8hYbtsBb8gCUKZ",
  "geo": null
 },
 {
  "id": "iu0glcqY7IHT6kquTRTV",
  "zona": "lejos",
  "lugar": "Ciudad del Carmen",
  "tipo": "Terreno",
  "operacion": "venta",
  "precio": 41525000,
  "rec": null,
  "banos": null,
  "terreno": null,
  "construccion": null,
  "foto": "iu0glcqY7IHT6kquTRTV",
  "geo": [
   "18.625494645779753",
   "-91.21581087657422"
  ]
 },
 {
  "id": "jATfpW7i4xTHpEnFy4Tm",
  "zona": "fracc",
  "lugar": "Imí",
  "tipo": "Terreno con casa",
  "operacion": "venta",
  "precio": 4300000,
  "rec": null,
  "banos": null,
  "terreno": 5000,
  "construccion": null,
  "foto": "jATfpW7i4xTHpEnFy4Tm",
  "geo": [
   "19.876595301286038",
   "-90.46407981285542"
  ]
 },
 {
  "id": "lNr48sjejjHJgZoHU5yc",
  "zona": "campo",
  "lugar": "Uayamón",
  "tipo": "Terreno",
  "operacion": "venta",
  "precio": 500000,
  "rec": null,
  "banos": null,
  "terreno": 250000,
  "construccion": null,
  "foto": "lNr48sjejjHJgZoHU5yc",
  "geo": null
 },
 {
  "id": "o5cf8EOhlv34UjEZknST",
  "zona": "fracc",
  "lugar": "Col. Presidentes de México",
  "tipo": "Casa",
  "operacion": "venta",
  "precio": 1850000,
  "rec": 2,
  "banos": 2,
  "terreno": 197,
  "construccion": 134,
  "foto": "o5cf8EOhlv34UjEZknST",
  "geo": [
   "19.844855575546",
   "-90.53006702454279"
  ]
 },
 {
  "id": "oo4DiXwcChqMslm0pPNz",
  "zona": "fracc",
  "lugar": "Imí",
  "tipo": "Casa",
  "operacion": "venta",
  "precio": 5400000,
  "rec": 3,
  "banos": 2,
  "terreno": null,
  "construccion": null,
  "foto": "oo4DiXwcChqMslm0pPNz",
  "geo": null
 },
 {
  "id": "pvSxAocgem6mfo1z2AzR",
  "zona": "centro",
  "lugar": "Calle Allende, col. Sascalum",
  "tipo": "Terreno",
  "operacion": "venta",
  "precio": 4500,
  "rec": null,
  "banos": null,
  "terreno": 750,
  "construccion": null,
  "foto": "pvSxAocgem6mfo1z2AzR",
  "geo": [
   "19.82009674056741",
   "-90.53796376255036"
  ]
 },
 {
  "id": "qHQ1OnpEKgCgIlPPAvms",
  "zona": "centro",
  "lugar": "Av. Madero, col. San Francisco",
  "tipo": "Edificio",
  "operacion": "venta",
  "precio": 80000,
  "rec": null,
  "banos": null,
  "terreno": null,
  "construccion": 225,
  "foto": "qHQ1OnpEKgCgIlPPAvms",
  "geo": null
 },
 {
  "id": "r3sxskXfaE4pgGTgOokZ",
  "zona": "playa",
  "lugar": "Champotón",
  "tipo": "Casa",
  "operacion": "venta",
  "precio": 1350000,
  "rec": 2,
  "banos": 2,
  "terreno": 364,
  "construccion": 97,
  "foto": "r3sxskXfaE4pgGTgOokZ",
  "geo": null
 },
 {
  "id": "tLtzJI4XSjhAZnvOGswp",
  "zona": "fracc",
  "lugar": "Privada Bugambilias",
  "tipo": "Terreno",
  "operacion": "venta",
  "precio": 1130000,
  "rec": null,
  "banos": null,
  "terreno": 452,
  "construccion": null,
  "foto": "tLtzJI4XSjhAZnvOGswp",
  "geo": [
   "19.82044635753503",
   "-90.53023725992934"
  ]
 },
 {
  "id": "v0kSCl6NEb7BGsW3PBv8",
  "zona": "playa",
  "lugar": "Club Náutico, carr. a Champotón",
  "tipo": "Casa",
  "operacion": "venta",
  "precio": 4800000,
  "rec": 2,
  "banos": 2,
  "terreno": 300,
  "construccion": 208,
  "foto": "v0kSCl6NEb7BGsW3PBv8",
  "geo": [
   "19.779646951753193",
   "-90.63405811786652"
  ]
 },
 {
  "id": "vSGwVRNjOXJcUBSlJ8OM",
  "zona": "fracc",
  "lugar": "Fracciorama 2000",
  "tipo": "Casa",
  "operacion": "renta",
  "precio": 18000,
  "rec": 4,
  "banos": 5,
  "terreno": null,
  "construccion": null,
  "foto": "vSGwVRNjOXJcUBSlJ8OM",
  "geo": null
 },
 {
  "id": "wekHTiZyxr7c8TZbqCoK",
  "zona": "lejos",
  "lugar": "Ciudad del Carmen",
  "tipo": "Terreno",
  "operacion": "venta",
  "precio": 51975000,
  "rec": null,
  "banos": null,
  "terreno": null,
  "construccion": null,
  "foto": "wekHTiZyxr7c8TZbqCoK",
  "geo": [
   "18.66543942039955",
   "-91.26003901374182"
  ]
 },
 {
  "id": "xlSmSPMUA26x6WlfR42E",
  "zona": "fracc",
  "lugar": "Campestre, Imí II",
  "tipo": "Casa",
  "operacion": "venta",
  "precio": 2800000,
  "rec": 3,
  "banos": 2,
  "terreno": 400,
  "construccion": 100,
  "foto": "xlSmSPMUA26x6WlfR42E",
  "geo": [
   "19.882526691269945",
   "-90.4757792892868"
  ]
 },
 {
  "id": "zLJDSyYyagQOmdpUhUlX",
  "zona": "fracc",
  "lugar": "Col. El Carmelo",
  "tipo": "Casa",
  "operacion": "venta",
  "precio": 1450000,
  "rec": 3,
  "banos": 2,
  "terreno": null,
  "construccion": null,
  "foto": "zLJDSyYyagQOmdpUhUlX",
  "geo": null
 }
];
