// Datos leídos de ampicolima.com.mx el 2026-10-11 (página "Socios AMPI" y catálogo de los socios). No se inventa nada.
// Se omiten, sin corregirlos, los correos y sitios mal escritos en su página (c21re,mx; recepción@…; rubrcainmobiliaria; miramarhilss.com).
export type Tipo = 'inmobiliaria' | 'construccion' | 'notaria';
export type Socio = { nombre: string; logo: string; lw: number; lh: number; dir: string; mun: string; tel: string[]; mail: string[]; web: string; ig: string; tipos: Tipo[] };
export const socios: Socio[] = [
 {
  "nombre": "Adame Inmobiliaria",
  "logo": "socio-00",
  "lw": 198,
  "lh": 200,
  "dir": "Av. Venustiano Carranza #1625 Local D, Col. Residencial Esmeralda.",
  "mun": "",
  "tel": [
   "312-143-06-75"
  ],
  "mail": [
   "adame.inmobiliaria@gmail.com"
  ],
  "web": "https://www.adameinmobiliaria.com",
  "ig": "adame.inmobiliaria",
  "tipos": [
   "inmobiliaria"
  ]
 },
 {
  "nombre": "Adriana Casas, Asesoría y Servicios Inmobiliarios",
  "logo": "socio-01",
  "lw": 320,
  "lh": 120,
  "dir": "Ramón López Velarde #649, Col. Lomas de Circunvalación",
  "mun": "",
  "tel": [
   "312-137-56-73"
  ],
  "mail": [
   "adrianacasas.asesoria@gmail.com"
  ],
  "web": "",
  "ig": "adriana.asesoria",
  "tipos": [
   "inmobiliaria"
  ]
 },
 {
  "nombre": "Alce Consorcio",
  "logo": "socio-02",
  "lw": 200,
  "lh": 117,
  "dir": "P.º de Bugambilias 251 Jardines Bugambilias, 28979 Villa de Álvarez, Col.",
  "mun": "Villa de Álvarez",
  "tel": [
   "312-369-51-59"
  ],
  "mail": [
   "cajachica@casasalce.com"
  ],
  "web": "https://www.casasalce.com",
  "ig": "",
  "tipos": [
   "inmobiliaria"
  ]
 },
 {
  "nombre": "Altozano El Nuevo Colima",
  "logo": "socio-03",
  "lw": 320,
  "lh": 154,
  "dir": "Prolongación Ignacio Sandoval KM 5.6 Altozano El Nuevo Colima, Colima, Colima.",
  "mun": "Colima",
  "tel": [
   "(312) 688 10 10"
  ],
  "mail": [],
  "web": "https://www.altozano-colima.com",
  "ig": "",
  "tipos": [
   "construccion"
  ]
 },
 {
  "nombre": "Ardica Construcciones",
  "logo": "socio-04",
  "lw": 320,
  "lh": 124,
  "dir": "KM 2.5 Carretera al ISENCO, Localidad el Trapiche Cuauhtémoc, Colima.",
  "mun": "Cuauhtémoc",
  "tel": [
   "312-943-85-15"
  ],
  "mail": [
   "maky.ramirez@grupoa.com.mx"
  ],
  "web": "",
  "ig": "",
  "tipos": [
   "construccion"
  ]
 },
 {
  "nombre": "MC Bienes Raices",
  "logo": "socio-05",
  "lw": 320,
  "lh": 140,
  "dir": "Agustín Sta. Cruz #514, Jardines Vista Hermosa III C.P: 28017 Colima, Col.",
  "mun": "Colima",
  "tel": [
   "312-131-27-49"
  ],
  "mail": [
   "mc.bienes.r@gmail.com"
  ],
  "web": "https://www.mcbienesraices.net",
  "ig": "",
  "tipos": [
   "inmobiliaria"
  ]
 },
 {
  "nombre": "RC Bienes Raíces y Gestoría Urbana",
  "logo": "socio-06",
  "lw": 320,
  "lh": 174,
  "dir": "Paseo de Gilberto No. 14 Jardines de Bugambilas, Villa de Alvarez, Colima.",
  "mun": "Villa de Álvarez",
  "tel": [
   "3111900",
   "3121072509"
  ],
  "mail": [],
  "web": "",
  "ig": "",
  "tipos": [
   "inmobiliaria"
  ]
 },
 {
  "nombre": "Brayal Servicios Inmobiliarios",
  "logo": "socio-07",
  "lw": 296,
  "lh": 200,
  "dir": "Leonilo Chávez Ortiz #175 Local10 Residencial Esmeralda, C.P. 28017 Colima, Col.",
  "mun": "Colima",
  "tel": [
   "312-120-69-79"
  ],
  "mail": [
   "brayalinmobiliaria@hotmail.com"
  ],
  "web": "",
  "ig": "",
  "tipos": [
   "inmobiliaria"
  ]
 },
 {
  "nombre": "Cántiko Soluciones Inmobiliarias",
  "logo": "socio-08",
  "lw": 140,
  "lh": 200,
  "dir": "Julio Garcia No. 249, Colonia Guadalajarita Colima, Colima.",
  "mun": "Colima",
  "tel": [
   "3146923",
   "3129437701"
  ],
  "mail": [],
  "web": "https://www.cantiko.mx",
  "ig": "",
  "tipos": [
   "inmobiliaria"
  ]
 },
 {
  "nombre": "CEC Casas en Colima",
  "logo": "socio-09",
  "lw": 320,
  "lh": 169,
  "dir": "Av. Constitución #2035 local 18 Plaza San Miguel Colima, México",
  "mun": "Colima",
  "tel": [
   "312-132-2076"
  ],
  "mail": [
   "gonzalezvet@hotmail.com"
  ],
  "web": "https://www.casasencolima.mx",
  "ig": "casas_en_colima",
  "tipos": [
   "inmobiliaria"
  ]
 },
 {
  "nombre": "Century 21 Royal Estates",
  "logo": "socio-10",
  "lw": 246,
  "lh": 200,
  "dir": "Av. Constitución #2008 Int. 5 y 6, Residencial Santa Gertrudis Colima, Colima. C.P. 28017",
  "mun": "Colima",
  "tel": [
   "312-690-12-82"
  ],
  "mail": [],
  "web": "https://www.century21royalestates.com",
  "ig": "c21royalestates",
  "tipos": [
   "inmobiliaria"
  ]
 },
 {
  "nombre": "Cimenta Constructora e Inmobiliaria",
  "logo": "socio-11",
  "lw": 320,
  "lh": 107,
  "dir": "De Los Diamantes #165 Residencial Esmeralda Nte.,C.P. 28010 Colima, Col.",
  "mun": "Colima",
  "tel": [
   "312-313-67-76",
   "312-320-29-23"
  ],
  "mail": [
   "cimenta.colima@gmail.com"
  ],
  "web": "",
  "ig": "",
  "tipos": [
   "inmobiliaria",
   "construccion"
  ]
 },
 {
  "nombre": "Construmanía Arquitectura y Valuación",
  "logo": "socio-12",
  "lw": 320,
  "lh": 128,
  "dir": "64-5, Residencial Esmeralda Nte., 28010 Colima, Col.",
  "mun": "Colima",
  "tel": [
   "312 193 3215"
  ],
  "mail": [],
  "web": "",
  "ig": "",
  "tipos": [
   "construccion",
   "notaria"
  ]
 },
 {
  "nombre": "Dos Cimas Inmobiliaria",
  "logo": "socio-13",
  "lw": 320,
  "lh": 158,
  "dir": "Ing. Horacio Cervantes #85, Colima, Col.",
  "mun": "Colima",
  "tel": [
   "312-235-35-35"
  ],
  "mail": [
   "dos.cimas.inmobiliaria@gmail.com"
  ],
  "web": "https://www.doscimas.com",
  "ig": "doscimas",
  "tipos": [
   "inmobiliaria"
  ]
 },
 {
  "nombre": "Formanzza Bienes Raíces",
  "logo": "socio-14",
  "lw": 320,
  "lh": 51,
  "dir": "Calle Rey Luis XVI #421 Colinas del Rey, Villa de Álvarez, Colima. C.P. 28979",
  "mun": "Villa de Álvarez",
  "tel": [
   "312-132-54-00"
  ],
  "mail": [
   "aahumada@formanzza.com"
  ],
  "web": "https://www.formanzza.com",
  "ig": "formanzzabienesraices",
  "tipos": [
   "inmobiliaria"
  ]
 },
 {
  "nombre": "Inmobiliaria Génesis",
  "logo": "socio-15",
  "lw": 320,
  "lh": 137,
  "dir": "Av. Venustiano Carranza #1180 Local A-3 Colinas de Santa Barbara, Sta Bárbara, 28017 Colima, Col.",
  "mun": "Colima",
  "tel": [
   "312-550-01-46"
  ],
  "mail": [
   "inmobiliariagenesiscolima@gmail.com"
  ],
  "web": "https://genesisinmobiliaria.com.mx/",
  "ig": "inmobiliariagenesiscolima",
  "tipos": [
   "inmobiliaria"
  ]
 },
 {
  "nombre": "Grazetih Servicios Inmobiliarios",
  "logo": "socio-16",
  "lw": 192,
  "lh": 200,
  "dir": "",
  "mun": "",
  "tel": [
   "312 317 4977"
  ],
  "mail": [
   "grazetih.inmocolima@gmail.com"
  ],
  "web": "",
  "ig": "",
  "tipos": [
   "inmobiliaria"
  ]
 },
 {
  "nombre": "Grupo Arsolca",
  "logo": "socio-17",
  "lw": 320,
  "lh": 92,
  "dir": "Carretera al ISENCO KM 2.5, C.P.28030",
  "mun": "",
  "tel": [
   "312-309-26-34"
  ],
  "mail": [
   "contacto@grupoarsolca.com",
   "hector.arias@grupoarsolca.com"
  ],
  "web": "https://grupoarsolca.com",
  "ig": "grupoarsolca",
  "tipos": [
   "inmobiliaria"
  ]
 },
 {
  "nombre": "Habitat Colima",
  "logo": "socio-18",
  "lw": 150,
  "lh": 200,
  "dir": "Av. Felipe Sevilla del Río #201, Local 11 Jardines Vista Hermosa, Colima, Colima",
  "mun": "Colima",
  "tel": [
   "312-131-68-21",
   "312-312-6226"
  ],
  "mail": [
   "habitatcolima@gmail.com"
  ],
  "web": "https://www.habitatcolima.com",
  "ig": "habitatcolima",
  "tipos": [
   "inmobiliaria"
  ]
 },
 {
  "nombre": "Inmobiliaria Feyte",
  "logo": "socio-19",
  "lw": 142,
  "lh": 200,
  "dir": "Av. Constitución #2171 Local 12 Fraccionamiento Residencial Los Olivos C.P: 28017 Colima, Col.",
  "mun": "Colima",
  "tel": [
   "312-149-82-84"
  ],
  "mail": [
   "feyte_06@hotmail.com"
  ],
  "web": "https://www.inmobiliariafeyte.com/",
  "ig": "feyte_inmobiliaria",
  "tipos": [
   "inmobiliaria"
  ]
 },
 {
  "nombre": "Innovación Inmobiliaria",
  "logo": "socio-20",
  "lw": 244,
  "lh": 200,
  "dir": "Doctor Atl #31, Lomas Verdes, Colima, Colima",
  "mun": "Colima",
  "tel": [
   "312-310-62-62"
  ],
  "mail": [
   "salvador@innovacionoccidente.com"
  ],
  "web": "https://www.innovacioninmobiliaria.com.mx/",
  "ig": "innovacion.inmo",
  "tipos": [
   "inmobiliaria"
  ]
 },
 {
  "nombre": "Insigne Inmobiliaria",
  "logo": "socio-21",
  "lw": 320,
  "lh": 137,
  "dir": "Felipe Sevilla del Río #551- int 4 Jardines de Vista Hermosa C.P.28017",
  "mun": "",
  "tel": [
   "312-198-14-61"
  ],
  "mail": [
   "kathia.guerrero85@gmail.com"
  ],
  "web": "https://insigneinmobiliaria.com/",
  "ig": "",
  "tipos": [
   "inmobiliaria"
  ]
 },
 {
  "nombre": "Intercabos",
  "logo": "socio-22",
  "lw": 320,
  "lh": 126,
  "dir": "Av. Camino Real No. 541 El Diezmo, Colima, Colima.",
  "mun": "Colima",
  "tel": [
   "(312) 159 53 50"
  ],
  "mail": [],
  "web": "",
  "ig": "",
  "tipos": [
   "inmobiliaria"
  ]
 },
 {
  "nombre": "Invermax Bienes Raíces",
  "logo": "socio-24",
  "lw": 206,
  "lh": 200,
  "dir": "Av. Venustiano Carranza #1047, local 8 Las palmas, Colima, Colima C.P. 28017",
  "mun": "Colima",
  "tel": [
   "312-319-52-95"
  ],
  "mail": [
   "info@invermaxbr.com"
  ],
  "web": "https://www.invermaxbr.com/",
  "ig": "",
  "tipos": [
   "inmobiliaria"
  ]
 },
 {
  "nombre": "Lamarq Arquitectura",
  "logo": "socio-25",
  "lw": 320,
  "lh": 77,
  "dir": "Emilio Brun Aillaud #176-c Residencial esmeralda 28017 Colima, Col.",
  "mun": "Colima",
  "tel": [
   "312-107-16-71"
  ],
  "mail": [
   "lamarqconstrucciones@hotmail.com"
  ],
  "web": "",
  "ig": "lamarqarquitectura",
  "tipos": [
   "construccion"
  ]
 },
 {
  "nombre": "Lega Desarrollos",
  "logo": "socio-26",
  "lw": 241,
  "lh": 200,
  "dir": "Av. J. Merced Cabrera Esq. Av. La Comarca Colima",
  "mun": "Colima",
  "tel": [
   "312 316 35 80"
  ],
  "mail": [],
  "web": "https://lega.mx",
  "ig": "",
  "tipos": [
   "construccion"
  ]
 },
 {
  "nombre": "LM Asesoría Inmobiliaria",
  "logo": "socio-27",
  "lw": 320,
  "lh": 150,
  "dir": "Av. Benito Juárez #985, local 2B",
  "mun": "",
  "tel": [
   "312 553 5021"
  ],
  "mail": [
   "lupitadcasacolima83@hotmail.com"
  ],
  "web": "",
  "ig": "",
  "tipos": [
   "inmobiliaria"
  ]
 },
 {
  "nombre": "Marfil Inmobiliaria + Construcción",
  "logo": "socio-28",
  "lw": 320,
  "lh": 166,
  "dir": "Av. Constitución #1852 Lomas Verdes, C.P. 28017 Colima, Col.",
  "mun": "Colima",
  "tel": [
   "312-194-86-77"
  ],
  "mail": [
   "contacto@solucionesmarfil.com"
  ],
  "web": "https://www.solucionesmarfil.com/",
  "ig": "marfil_soluciones",
  "tipos": [
   "inmobiliaria",
   "construccion"
  ]
 },
 {
  "nombre": "Miramar Hills The Residences",
  "logo": "socio-29",
  "lw": 320,
  "lh": 55,
  "dir": "",
  "mun": "",
  "tel": [
   "314-277-0024"
  ],
  "mail": [
   "info@miramarhills.com"
  ],
  "web": "",
  "ig": "miramarhillsresidences",
  "tipos": [
   "construccion"
  ]
 },
 {
  "nombre": "NM Inmobiliaria",
  "logo": "socio-30",
  "lw": 200,
  "lh": 200,
  "dir": "Alfonso Sierra Partida #517 Lomas de Vista Hermosa, Colima, Mexico",
  "mun": "Colima",
  "tel": [
   "312-199-3792"
  ],
  "mail": [
   "nninmobiliaria1@gmail.com"
  ],
  "web": "",
  "ig": "nminmobiliaria.colima",
  "tipos": [
   "inmobiliaria"
  ]
 },
 {
  "nombre": "Notaría 9 · Lic. Mario de la Madrid",
  "logo": "socio-31",
  "lw": 179,
  "lh": 200,
  "dir": "Aldama #552- 3er Piso, Centro C.P. 28000 Colima,Col.",
  "mun": "Colima",
  "tel": [
   "312 313 2010"
  ],
  "mail": [],
  "web": "",
  "ig": "",
  "tipos": [
   "notaria"
  ]
 },
 {
  "nombre": "11ONCE Inmobiliaria & Construcción",
  "logo": "socio-32",
  "lw": 146,
  "lh": 200,
  "dir": "General Cándido Aguilar #282 Col. Manuel Álvarez, Villa de Álvarez, Colima",
  "mun": "Villa de Álvarez",
  "tel": [
   "312 155 4273"
  ],
  "mail": [
   "loreley.herrerav@gmail.com",
   "11once.serviciosinmobiliarios@gmail.com"
  ],
  "web": "",
  "ig": "",
  "tipos": [
   "inmobiliaria",
   "construccion"
  ]
 },
 {
  "nombre": "Proyecto Hogar Servicios Inmobiliarios",
  "logo": "socio-33",
  "lw": 207,
  "lh": 200,
  "dir": "Av. Ayuntamiento #605 local 08, Plaza Palma Real Bugambilias, Villa de Alvarez, Colima",
  "mun": "Villa de Álvarez",
  "tel": [
   "312-690-13-94",
   "312-112-96-17"
  ],
  "mail": [
   "jcasesorph@gmail.com"
  ],
  "web": "https://proyectohogarmx.com/",
  "ig": "proyectohogarcolima",
  "tipos": [
   "inmobiliaria"
  ]
 },
 {
  "nombre": "Parra Grupo Inmobiliario",
  "logo": "socio-34",
  "lw": 320,
  "lh": 121,
  "dir": "Boca de miramar #928 Col. Vista Bugambilias",
  "mun": "",
  "tel": [
   "312-319-5586"
  ],
  "mail": [
   "admon.parracontrucciones@gmail.com"
  ],
  "web": "",
  "ig": "parragrupoimobiliario",
  "tipos": [
   "inmobiliaria",
   "construccion"
  ]
 },
 {
  "nombre": "Raesca Inmobiliaria",
  "logo": "socio-35",
  "lw": 320,
  "lh": 139,
  "dir": "",
  "mun": "",
  "tel": [
   "313-322-5540"
  ],
  "mail": [
   "raesca.inmobiliaria@gmail.com"
  ],
  "web": "",
  "ig": "raesca.inmobiliaria",
  "tipos": [
   "inmobiliaria"
  ]
 },
 {
  "nombre": "Rúbrica Inmobiliaria",
  "logo": "socio-36",
  "lw": 320,
  "lh": 101,
  "dir": "Av. Constitución #1852 Int.3 Parque Royal, C.P. 28017 Colima, Col.",
  "mun": "Colima",
  "tel": [
   "312-323-70-10"
  ],
  "mail": [],
  "web": "https://www.rubricainmobiliaria.com",
  "ig": "rubricainmobiliaria",
  "tipos": [
   "inmobiliaria"
  ]
 },
 {
  "nombre": "Real Estate Colima",
  "logo": "socio-37",
  "lw": 320,
  "lh": 144,
  "dir": "Av. Ignacio Sandoval #1976 -1 La Cantera, Colima, Colima.",
  "mun": "Colima",
  "tel": [
   "3121155313"
  ],
  "mail": [],
  "web": "https://www.realestatecolima.com",
  "ig": "realestatecolima",
  "tipos": [
   "inmobiliaria"
  ]
 },
 {
  "nombre": "SEAL Bienes Raíces",
  "logo": "socio-38",
  "lw": 320,
  "lh": 162,
  "dir": "Ruben Dario No. 642 Jardines de las Lomas, Colima, Colima.",
  "mun": "Colima",
  "tel": [
   "312 313 02 55"
  ],
  "mail": [],
  "web": "https://www.sealbienesraices.mx",
  "ig": "",
  "tipos": [
   "inmobiliaria"
  ]
 },
 {
  "nombre": "SIMEN Servicios Inmobiliarios",
  "logo": "socio-39",
  "lw": 200,
  "lh": 200,
  "dir": "Av. Venustiano Carranza No. 1655 Santa Barbara, Colima, Colima.",
  "mun": "Colima",
  "tel": [
   "312 330 25 00"
  ],
  "mail": [],
  "web": "",
  "ig": "",
  "tipos": [
   "inmobiliaria"
  ]
 },
 {
  "nombre": "Simor Servicios Inmobiliarios",
  "logo": "socio-40",
  "lw": 320,
  "lh": 132,
  "dir": "Av. Constituciòn 1852 Int. 4 Lomas Verdes, Colima, Colima.",
  "mun": "Colima",
  "tel": [
   "312 3301500"
  ],
  "mail": [],
  "web": "https://simorinmobiliaria.com",
  "ig": "",
  "tipos": [
   "inmobiliaria"
  ]
 },
 {
  "nombre": "iTack Inmo",
  "logo": "socio-41",
  "lw": 320,
  "lh": 193,
  "dir": "Av. Constitución #2171-9 Residencial Los Olivos, Colima, Col. C.P. 28017",
  "mun": "Colima",
  "tel": [
   "312-114-38-79"
  ],
  "mail": [
   "iTack.inmo@gmail.com"
  ],
  "web": "",
  "ig": "itack.inmo",
  "tipos": [
   "inmobiliaria"
  ]
 },
 {
  "nombre": "Tierra Negra Construcción",
  "logo": "socio-42",
  "lw": 320,
  "lh": 163,
  "dir": "",
  "mun": "",
  "tel": [
   "312-134-6109"
  ],
  "mail": [],
  "web": "",
  "ig": "tierra_negra_arquitectura_",
  "tipos": [
   "construccion"
  ]
 },
 {
  "nombre": "Verduzco Vende Inmobiliaria",
  "logo": "socio-43",
  "lw": 320,
  "lh": 35,
  "dir": "Av. La Paz #72, Sta Bárbara C.P. 28017 Colima, Col.",
  "mun": "Colima",
  "tel": [
   "312-304-05-80"
  ],
  "mail": [
   "verduzcovende@gmail.com"
  ],
  "web": "",
  "ig": "",
  "tipos": [
   "inmobiliaria"
  ]
 }
];
