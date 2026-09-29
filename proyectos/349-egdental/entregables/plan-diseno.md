# EG Dental Clinic: plan de rediseño (método 1.1)

Clínica dental en un edificio médico nuevo de Zona Río, Tijuana, Baja California, orientada a pacientes de Estados Unidos y Canadá (turismo dental): implantes, coronas, resinas, endodoncias, dentaduras, injertos, extracciones y blanqueamiento Zoom, con precios en dólares. Equipo: Dra. Eva Guerrero (dentista principal, endodoncista), Dr. Carlos Guerrero (ortodoncista), Dr. Alan Martínez (implantes), Dra. Damaris Zúñiga (dentista) y Lorena López (asistente). Teléfono de EE. UU. (619) 373-8375.

Idioma: el sitio original está en inglés (con un selector a español) y su público es de EE. UU.; el rediseño se hizo en inglés, como 651 y 612.

Fuentes: clon en `sitio/`, `investigacion/original.html` y `investigacion/crudo.json` (inicio y "About us"). El sitio en vivo está detrás de un captcha de SiteGround (2026-09-29): no se pudo leer la lista completa de precios ni la página de contacto.

## Qué le falta al clon (los "detallitos")

- Sin su logo en imagen; la mayoría de las fotos son de iStock o de banco (se descartan).
- Fotos propias: dos del equipo (2024), el edificio en Zona Río y cuatro antes/después de su galería.

## Qué tiene que lograr el sitio

1. Que el paciente de EE. UU. vea precios claros en dólares y calcule su visita.
2. Que llame o escriba con su lista de tratamientos.
3. Que sepa dónde está (Zona Río) y que lo ayudan a cruzar.

## Dirección visual

| Token | Color | Uso |
|---|---|---|
| noche | `#0f2f4a` | Títulos, fondos oscuros |
| teal | `#0a7178` | Botones y acentos |
| cielo | `#e3f4f3` | Fondos suaves |
| hueso | `#f9f7f2` | Fondo |
| sol | `#f6c453` | Total del estimado |

Contrastes en `rediseno/src/index.css`. **Tipografía:** DM Serif Display (títulos) y Public Sans (texto), locales con @fontsource.

## Elemento memorable

**"Mark your teeth, see the estimate"**: un odontograma de 32 dientes con la numeración universal que usan los dentistas en EE. UU. Eliges un tratamiento (resina $70, extracción $120, extracción quirúrgica $160, muela del juicio $240 o impactada $280; las muelas del juicio 1, 16, 17 y 32 van punteadas) y tocas los dientes; agregas limpieza (regular, semi profunda o profunda por cuadrante), evaluación, blanqueamiento, injerto óseo o healing pin por extracción. Un recibo suma todo con sus precios publicados y lo manda por WhatsApp, o llamas.

### Revisión contra lo genérico

- Usa sus precios reales, su público (numeración universal de EE. UU.) y su lista de extracciones.
- No se parece a la arcada de JoyaDent (592): aquí se marcan dientes concretos para cotizar; no hay dibujo de problemas.
- Aclara que coronas, implantes y endodoncias se cotizan tras la evaluación.

## Estructura

1. Encabezado con nombre, menú y teléfono.
2. Portada: H1, texto, evaluación desde $40, foto del equipo.
3. Odontograma y estimado.
4. Lista de precios y tratamientos.
5. Equipo, dos testimonios de su sitio y tres antes/después de su galería.
6. Por qué EG Dental (Zona Río, ayuda para cruzar, oficina moderna, seguro), edificio y su mapa de Google.
7. Contacto: teléfono, WhatsApp, correo e Instagram/YouTube.
8. Barra fija en el celular: Call, WhatsApp, Map.

## Qué se evita

- Fotos de banco (sonrisas, consultorios de stock, la ciudad de noche).
- Frases de promesa ("rescues aching teeth", "Security", "Warranty on dentistry" sin explicar); los antes/después solo como casos de su galería, con aviso de que cada caso es distinto.
