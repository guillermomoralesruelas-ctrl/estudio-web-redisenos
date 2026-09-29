# KAJEOS: plan de rediseño (método 1.1)

Inmobiliaria con oficina en Torre Inxignia (piso 4, oficina 446), Puebla: venta y renta de casas, departamentos y terrenos en Lomas de Angelópolis, Jardines de Zavaleta, Cholula, San José Actipan y otras zonas, más alguna propiedad fuera de Puebla (Costa de Oro, Boca del Río). La lista del lote la ubica en Boca del Río, Veracruz, por esa propiedad; sus teléfonos, oficina y casi todo su catálogo son de Puebla. Asesora en todas las fichas: Cristina Córdova. Público: familias que buscan casa en Puebla, inversionistas en terrenos y dueños que quieren vender.

Fuentes: clon en `sitio/`, `investigacion/original.html`, `investigacion/crudo.json` (propiedades, nosotros y contacto) y el inicio en vivo revisado con curl el 2026-09-29.

## Qué le falta al clon (los "detallitos")

- En el celular se desborda 731 px y tiene 21 imágenes rotas.
- Las fotos de portada y categorías son renders de la plantilla (edificios con alberca, casas de catálogo): no son sus propiedades y no se usan.
- Sus fotos reales son las de las fichas (525 × 328) y tomas de dron de los terrenos.

## Qué tiene que lograr el sitio

1. Que el comprador vea precio, superficie y recámaras de cada propiedad de un vistazo.
2. Que agende una visita a varias propiedades en un solo mensaje.
3. Que el dueño que quiere vender encuentre cómo hacerlo.

## Dirección visual

| Token | Color | Uso |
|---|---|---|
| marino | `#102a43` | Títulos, botones, fondos oscuros (azul oscuro de su logo) |
| azul | `#1f5fa6` | Acentos y seleccionados (azul de su logo) |
| marfil | `#f6f3ec` | Fondo |
| manila | `#ecdcb5` / café `#5c4318` | La carpeta de visitas |

Contrastes en `rediseno/src/index.css`. **Tipografía:** Instrument Serif (títulos y precios) y Manrope (texto), locales con @fontsource.

## Elemento memorable

**"Arma tu carpeta de visitas"**: cada ficha tiene "Agregar a mi carpeta"; a la derecha (abajo en el celular) hay una carpeta manila con pestaña donde se acomodan hasta cuatro fichas numeradas con foto, precio y zona. Eliges cuándo te acomoda (dentro de su horario, lunes a viernes de 9 a 21) y "Agendar recorrido" manda por WhatsApp la lista en orden. Filtros por tipo (casas, departamentos, terrenos).

### Revisión contra lo genérico

- Sale de cómo se vende una casa: se visitan varias el mismo día. Usa sus 8 propiedades con foto real, precios y su horario.
- No es un filtro por presupuesto, ni plusvalía, ni metro a metro, ni tablero de llaves (ya usados): es una lista de visita que se arma y se manda.

## Estructura

1. Encabezado con su logo y WhatsApp.
2. Portada: H1, texto y mosaico de tres fotos reales.
3. Propiedades con filtros y la carpeta de visitas; "Más en su catálogo" (5 propiedades sin foto, con precio).
4. Vender o rentar: sus cuatro servicios.
5. Contacto: oficina, horario, celular, teléfono, correo y Google Maps.
6. Barra fija en el celular: WhatsApp, Llamar, Oficina.

## Qué se evita

- Renders de plantilla, los testimonios (hablan de Cancún, Los Cabos y CDMX y no parecen de sus clientes de Puebla), las ventanas de registro e inicio de sesión.
- Frases como "las propiedades más exclusivas de México" o "cobertura nacional".
