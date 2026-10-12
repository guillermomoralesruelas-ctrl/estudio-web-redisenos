// Generado el 2026-10-12 desde el catálogo en vivo de gipgrupoinmobiliariodelpacifico.com (búsqueda por La Paz, Los Cabos,
// Baja California Sur, Todos Santos, Loreto, Mulegé y Comondú; se cuentan solo las fichas con coordenadas dentro de B. C. S.).
// Precios, recámaras, baños y m² tal como se publican. No se inventa nada.

export type Op = "venta" | "preventa" | "renta";
export type Propiedad = { titulo: string; tipo: string; colonia: string; zona: string; precio: string; op: Op; rec: number | null; banos: number | null; m2: string | null; url: string; foto: string };
export type Destacada = { op: string; precio: string; lugar: string; detalle: string; url: string; foto: string | null };

export const cifras = {"total": 1790, "paz": 1127, "cabos": 579, "otros": 84, "venta": 1465, "renta": 323, "usd": 505} as const;

export const zonas = ["La Paz", "Los Cabos", "Todos Santos", "Loreto", "Mulegé", "Comondú"] as const;
export const tipos = ["Casa", "Departamento", "Terreno", "Comercial"] as const;

// Mercado: "zona|tipo|operación" -> [fichas publicadas, de ellas en dólares]
export const mercado: Record<string, [number, number]> = {"La Paz|Casa|venta": [249, 39], "La Paz|Casa|renta": [69, 2], "La Paz|Departamento|venta": [30, 13], "La Paz|Departamento|renta": [35, 4], "La Paz|Terreno|venta": [666, 117], "La Paz|Terreno|renta": [28, 0], "La Paz|Comercial|venta": [22, 2], "La Paz|Comercial|renta": [26, 0], "Los Cabos|Casa|venta": [114, 83], "Los Cabos|Casa|renta": [40, 11], "Los Cabos|Departamento|venta": [185, 137], "Los Cabos|Departamento|renta": [97, 16], "Los Cabos|Terreno|venta": [112, 46], "Los Cabos|Terreno|renta": [3, 0], "Los Cabos|Comercial|venta": [4, 2], "Los Cabos|Comercial|renta": [20, 3], "Todos Santos|Casa|venta": [6, 5], "Todos Santos|Casa|renta": [1, 0], "Todos Santos|Departamento|venta": [0, 0], "Todos Santos|Departamento|renta": [0, 0], "Todos Santos|Terreno|venta": [27, 4], "Todos Santos|Terreno|renta": [2, 2], "Todos Santos|Comercial|venta": [0, 0], "Todos Santos|Comercial|renta": [0, 0], "Loreto|Casa|venta": [1, 0], "Loreto|Casa|renta": [0, 0], "Loreto|Departamento|venta": [0, 0], "Loreto|Departamento|renta": [0, 0], "Loreto|Terreno|venta": [7, 6], "Loreto|Terreno|renta": [0, 0], "Loreto|Comercial|venta": [1, 0], "Loreto|Comercial|renta": [0, 0], "Mulegé|Casa|venta": [0, 0], "Mulegé|Casa|renta": [0, 0], "Mulegé|Departamento|venta": [0, 0], "Mulegé|Departamento|renta": [0, 0], "Mulegé|Terreno|venta": [20, 12], "Mulegé|Terreno|renta": [0, 0], "Mulegé|Comercial|venta": [0, 0], "Mulegé|Comercial|renta": [0, 0], "Comondú|Casa|venta": [4, 0], "Comondú|Casa|renta": [0, 0], "Comondú|Departamento|venta": [1, 0], "Comondú|Departamento|renta": [0, 0], "Comondú|Terreno|venta": [12, 0], "Comondú|Terreno|renta": [0, 0], "Comondú|Comercial|venta": [1, 0], "Comondú|Comercial|renta": [0, 0]};

export const propiedades: Propiedad[] = [
 {
  "titulo": "En venta departamentos en Centenario",
  "tipo": "Departamento",
  "colonia": "El Centenario",
  "zona": "La Paz",
  "precio": "$2,900,000 MXN",
  "op": "venta",
  "rec": 4,
  "banos": 2,
  "m2": "176.3 m²",
  "url": "https://www.gipgrupoinmobiliariodelpacifico.com/property/en-venta-departamentos-en-centenario",
  "foto": "en-venta-departamentos-en-centenario"
 },
 {
  "titulo": "VISTAMAR PENTHOUSE 508",
  "tipo": "Departamento",
  "colonia": "Lomas de Palmira",
  "zona": "La Paz",
  "precio": "$2,800,000 USD",
  "op": "venta",
  "rec": 5,
  "banos": 5,
  "m2": "596.35 m²",
  "url": "https://www.gipgrupoinmobiliariodelpacifico.com/property/vistamar-penthouse-508",
  "foto": "vistamar-penthouse-508"
 },
 {
  "titulo": "Condominio de 4 Recámaras con Vistas a la Marina en La Paz",
  "tipo": "Departamento",
  "colonia": "Centro",
  "zona": "La Paz",
  "precio": "$2,500,000 USD",
  "op": "venta",
  "rec": 4,
  "banos": 5,
  "m2": "357 m²",
  "url": "https://www.gipgrupoinmobiliariodelpacifico.com/property/condominio-de-4-habitaciones-con-vistas-a-la-marina-en-la-paz",
  "foto": "condominio-de-4-habitaciones-con-vistas"
 },
 {
  "titulo": "Terreno con Vista al Mar en Venta en Pedregal La Paz | 467.5 m²",
  "tipo": "Terreno",
  "colonia": "Pedregal de La Paz",
  "zona": "La Paz",
  "precio": "$298,000 USD",
  "op": "venta",
  "rec": null,
  "banos": null,
  "m2": "467.5 m²",
  "url": "https://www.gipgrupoinmobiliariodelpacifico.com/property/terreno-en-venta-en-la-paz-en-pedregal-baja-california-sur",
  "foto": "terreno-en-venta-en-la-paz-en-pedregal-b"
 },
 {
  "titulo": "Villa Amueblada Frente al Mar de 4 Recámaras con Casita en El Encanto de La Lagu",
  "tipo": "Casa",
  "colonia": "Palmillas",
  "zona": "Los Cabos",
  "precio": "$4,950,000 USD",
  "op": "venta",
  "rec": 4,
  "banos": 4,
  "m2": "458 m²",
  "url": "https://www.gipgrupoinmobiliariodelpacifico.com/property/villa-amueblada-frente-al-mar-con-4-habitaciones-y-casita-en-el-encanto-d",
  "foto": "villa-amueblada-frente-al-mar-con-4-habi"
 },
 {
  "titulo": "¡ Se Vende Casa en Loma Encantada! Elegancia, Confort y Ubicación Privilegiada!",
  "tipo": "Casa",
  "colonia": "Loma Bonita",
  "zona": "Los Cabos",
  "precio": "$430,000 USD",
  "op": "venta",
  "rec": 3,
  "banos": 2,
  "m2": "144 m²",
  "url": "https://www.gipgrupoinmobiliariodelpacifico.com/property/casa-remodelada-en-loma-encantada-elegancia-confort-y-ubicacion-privilegiada",
  "foto": "casa-remodelada-en-loma-encantada-elegan"
 },
 {
  "titulo": "Tu Refugio de Lujo en Club Campestre San José: Golf Exclusivo, Acceso a Club de",
  "tipo": "Casa",
  "colonia": "Club Campestre San José",
  "zona": "Los Cabos",
  "precio": "$1,835,000 USD",
  "op": "venta",
  "rec": 5,
  "banos": 5,
  "m2": "259 m²",
  "url": "https://www.gipgrupoinmobiliariodelpacifico.com/property/tu-refugio-de-lujo-en-club-campestre-san-jose-golf-exclusivo-acceso-a-club-de",
  "foto": "tu-refugio-de-lujo-en-club-campestre-san"
 },
 {
  "titulo": "Exclusividad y Confort en Condo Serenity, Ventanas 3B Mar de Cortés 613",
  "tipo": "Departamento",
  "colonia": "El Tezal",
  "zona": "Los Cabos",
  "precio": "$389,000 USD",
  "op": "venta",
  "rec": 3,
  "banos": 2,
  "m2": "120.84 m²",
  "url": "https://www.gipgrupoinmobiliariodelpacifico.com/property/exclusividad-y-confort-en-condo-serenity-ventanas-3b-mar-de-cortes-613",
  "foto": "exclusividad-y-confort-en-condo-serenity"
 },
 {
  "titulo": "Departamento en Venta en Bahía del Tezal | Cabo San Lucas",
  "tipo": "Departamento",
  "colonia": "El Tezal",
  "zona": "Los Cabos",
  "precio": "$275,000 USD",
  "op": "venta",
  "rec": 2,
  "banos": 2,
  "m2": "95 m²",
  "url": "https://www.gipgrupoinmobiliariodelpacifico.com/property/renta-o-venta-de-departamento-en-cabo-san-lucas-a-pasos-de-playa",
  "foto": "renta-o-venta-de-departamento-en-cabo-sa"
 },
 {
  "titulo": "Vista panorámica Condo Alegranza A501, San José del Cabo",
  "tipo": "Departamento",
  "colonia": "San José del Cabo Centro",
  "zona": "Los Cabos",
  "precio": "$895,000 USD",
  "op": "venta",
  "rec": 2,
  "banos": 2,
  "m2": "154 m²",
  "url": "https://www.gipgrupoinmobiliariodelpacifico.com/property/vista-panoramica-condo-alegranza-a501-san-jose-del-cabo",
  "foto": "vista-panoramica-condo-alegranza-a501-sa"
 },
 {
  "titulo": "VENTA CONDO GH15 COSTA LIVING, LA RIBERA CABO DEL ESTE, BCS.",
  "tipo": "Departamento",
  "colonia": "La Rivera",
  "zona": "Los Cabos",
  "precio": "$5,307,756 MXN",
  "op": "venta",
  "rec": 2,
  "banos": 2,
  "m2": null,
  "url": "https://www.gipgrupoinmobiliariodelpacifico.com/property/venta-condo-gh15-costa-living-la-ribera-cabo-del-este-bcs",
  "foto": "venta-condo-gh15-costa-living-la-ribera"
 },
 {
  "titulo": "Encanto Mediterráneo en Villas Baja 5, Retorno Playa Anuiti",
  "tipo": "Villa",
  "colonia": "Club de Golf FONATUR",
  "zona": "Los Cabos",
  "precio": "$235,000 USD",
  "op": "venta",
  "rec": 1,
  "banos": 1,
  "m2": "75 m²",
  "url": "https://www.gipgrupoinmobiliariodelpacifico.com/property/encanto-mediterraneo-en-villas-baja-5-retorno-playa-anuiti",
  "foto": "encanto-mediterraneo-en-villas-baja-5-re"
 },
 {
  "titulo": "VILLA DE LUJO EN VENTA CLUB CAMPESTRE",
  "tipo": "Villa",
  "colonia": "Club Campestre San José",
  "zona": "Los Cabos",
  "precio": "$1,835,000 USD",
  "op": "venta",
  "rec": 5,
  "banos": 5,
  "m2": null,
  "url": "https://www.gipgrupoinmobiliariodelpacifico.com/property/villa-de-lujo-en-venta-club-campestre",
  "foto": "villa-de-lujo-en-venta-club-campestre"
 },
 {
  "titulo": "799 HAS CHUENQUE TRIPUI PLAYA JUNCALITO LORETO BCS",
  "tipo": "Terreno",
  "colonia": "Nopolo",
  "zona": "Loreto",
  "precio": "$199,750,000 USD",
  "op": "venta",
  "rec": null,
  "banos": null,
  "m2": "799 ha",
  "url": "https://www.gipgrupoinmobiliariodelpacifico.com/property/799-has-chuenque-tripui-playa-juncalito-loreto-bcs",
  "foto": "799-has-chuenque-tripui-playa-juncalito"
 },
 {
  "titulo": "TERRENO FRENTE DE PLAYA EN MULEGE BCS -10 has CON VOCACION TURISTICA",
  "tipo": "Terreno",
  "colonia": "Benavides",
  "zona": "Mulegé",
  "precio": "$1,500,000 USD",
  "op": "venta",
  "rec": null,
  "banos": null,
  "m2": "100,000 m²",
  "url": "https://www.gipgrupoinmobiliariodelpacifico.com/property/terreno-frente-de-playa-en-mulege-bcs-10-has-con-vocacion-turistica",
  "foto": "terreno-frente-de-playa-en-mulege-bcs-10"
 },
 {
  "titulo": "TERRENO EN VENTA CON FRENTE COSTERO SAN JOSE DE LA NORIA",
  "tipo": "Terreno",
  "colonia": "San José de Comondú",
  "zona": "Comondú",
  "precio": "$1,300,000 MXN",
  "op": "venta",
  "rec": null,
  "banos": null,
  "m2": "15,640 m²",
  "url": "https://www.gipgrupoinmobiliariodelpacifico.com/property/terreno-en-venta-con-frente-costero-san-jose-de-la-noria-san-jose-de-comondu",
  "foto": "terreno-en-venta-con-frente-costero-san"
 },
 {
  "titulo": "Departamento en amaterra en renta en Los Cabos cerca de playa",
  "tipo": "Departamento",
  "colonia": "El Tezal",
  "zona": "Los Cabos",
  "precio": "$28,000 MXN",
  "op": "renta",
  "rec": 2,
  "banos": 2,
  "m2": "100 m²",
  "url": "https://www.gipgrupoinmobiliariodelpacifico.com/property/departamento-en-amaterra-en-renta-en-los-cabos-cerca-de-playa",
  "foto": "departamento-en-amaterra-en-renta-en-los"
 },
 {
  "titulo": "casa en renta en camino del mar, amueblada 3 recamaras",
  "tipo": "Casa",
  "colonia": "El Tezal",
  "zona": "Los Cabos",
  "precio": "$30,000 MXN",
  "op": "renta",
  "rec": 3,
  "banos": 2,
  "m2": "150 m²",
  "url": "https://www.gipgrupoinmobiliariodelpacifico.com/property/casa-en-renta-en-camino-del-mar-amueblada-3-recamaras",
  "foto": "casa-en-renta-en-camino-del-mar-amueblad"
 },
 {
  "titulo": "CASA EN VENTA EN LA PAZ, BCS, EL CENTENARIO",
  "tipo": "Casa",
  "colonia": "Centenario",
  "zona": "La Paz",
  "precio": "$6,280,573 MXN",
  "op": "preventa",
  "rec": 3,
  "banos": 2,
  "m2": "159.7 m²",
  "url": "https://www.gipgrupoinmobiliariodelpacifico.com/property/casa-en-venta-en-la-paz-bcs-el-centenario-centenario-casa",
  "foto": "casa-en-venta-en-la-paz-bcs-el-centenari"
 },
 {
  "titulo": "Mar de Plata: Modelo Ensenada - Lote 042-A",
  "tipo": "Casa",
  "colonia": "El Centenario",
  "zona": "La Paz",
  "precio": "$6,200,000 MXN",
  "op": "preventa",
  "rec": 2,
  "banos": 2,
  "m2": "150 m²",
  "url": "https://www.gipgrupoinmobiliariodelpacifico.com/property/mar-de-plata-modelo-ensenada-preventa-lote-042-a",
  "foto": "mar-de-plata-modelo-ensenada-preventa-lo"
 },
 {
  "titulo": "Mar de Plata: Modelo Costa Plus, Con Alberca - Lote 046",
  "tipo": "Casa",
  "colonia": "El Centenario",
  "zona": "La Paz",
  "precio": "$7,200,000 MXN",
  "op": "preventa",
  "rec": 3,
  "banos": 2,
  "m2": "200 m²",
  "url": "https://www.gipgrupoinmobiliariodelpacifico.com/property/mar-de-plata-modelo-costa-preventa-lote-046",
  "foto": "mar-de-plata-modelo-costa-preventa-lote"
 }
];

// Las nueve "Propiedades destacadas" de su portada (todas fuera de B. C. S.).
export const destacadas: Destacada[] = [
 {
  "op": "En Venta",
  "precio": "$20,500,000 MXN",
  "lugar": "Casa en La Joya Privada Residencial, Monterrey",
  "detalle": "4 recámaras · 6 baños · 750 m²",
  "url": "https://www.gipgrupoinmobiliariodelpacifico.com/property/casa-en-venta-en-la-joya-privada-magnolia-en-carretera-nacional-n-l",
  "foto": "casa-la-joya-privada-magnolia"
 },
 {
  "op": "En Venta",
  "precio": "$31,786,000 MXN",
  "lugar": "Casa en Mérida Centro, Mérida",
  "detalle": "5 recámaras · 5 baños · 701.47 m²",
  "url": "https://www.gipgrupoinmobiliariodelpacifico.com/property/casa-colonial-centro-merida-yucatan-merida-centro",
  "foto": null
 },
 {
  "op": "En Renta",
  "precio": "$8,300 MXN",
  "lugar": "Casa en condominio en Real del Marques Residencial, Querétaro",
  "detalle": "2 recámaras · 1 baño · 75 m²",
  "url": "https://www.gipgrupoinmobiliariodelpacifico.com/property/real-del-marques-renta-casa-de-dos-recamaras",
  "foto": null
 },
 {
  "op": "En Venta",
  "precio": "$115,000,000 MXN",
  "lugar": "Terreno en Lomas Verdes 6a Sección, Naucalpan de Juárez",
  "detalle": "",
  "url": "https://www.gipgrupoinmobiliariodelpacifico.com/property/ultimo-gran-poligono-disponible-en-la-zona",
  "foto": null
 },
 {
  "op": "En Venta",
  "precio": "$3,865,592 MXN",
  "lugar": "Departamento en Portales Norte, Benito Juárez",
  "detalle": "2 recámaras · 1 baño · 64.53 m²",
  "url": "https://www.gipgrupoinmobiliariodelpacifico.com/property/departamento-2-recamaras-de-64m2-en-benito-juarez-portales-norte",
  "foto": null
 },
 {
  "op": "En Venta",
  "precio": "$1,799,000 MXN",
  "lugar": "Departamento en Jardines de Ciudad Mayakoba, Playa del Carmen",
  "detalle": "2 recámaras · 1 baño · 49.3 m²",
  "url": "https://www.gipgrupoinmobiliariodelpacifico.com/property/venta-de-departamentos-ciudad-mayakoba-desde-1-799-000-de-oportunidad",
  "foto": null
 },
 {
  "op": "En Venta",
  "precio": "$115,000 MXN por m²",
  "lugar": "Oficina en Valle Del Campestre, San Pedro Garza García",
  "detalle": "",
  "url": "https://www.gipgrupoinmobiliariodelpacifico.com/property/zona-valle-oficinas-en-venta-en-punto-central-san-pedro-garza-garcia-n-l",
  "foto": null
 },
 {
  "op": "En Venta",
  "precio": "$4,290,000 MXN",
  "lugar": "Casa en Zarú, El Marqués",
  "detalle": "3 recámaras · 3 baños · 215 m²",
  "url": "https://www.gipgrupoinmobiliariodelpacifico.com/property/casa-avellano-en-zaru",
  "foto": "casa-avellano-en-zaru"
 },
 {
  "op": "En Renta",
  "precio": "$85,000 MXN",
  "lugar": "Casa en Aldea Zamá, Tulum",
  "detalle": "4 recámaras · 5 baños · 190 m²",
  "url": "https://www.gipgrupoinmobiliariodelpacifico.com/property/la-privada-49",
  "foto": "la-privada-49"
 }
];
