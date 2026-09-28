# Armonía Spa: plan de rediseño (método 1.1)

**Sitio original:** https://www.armoniaspa.com.mx/
**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/img/`), textos en `investigacion/crudo.json`, contacto en `investigacion/resumen.json`.
**Rubro:** SPA. **Ciudad:** Chihuahua, Chihuahua.

## Qué le falta al clon (los "detallitos")

- CSS no cargó (404 en `css/styles.css`): 43 imágenes rotas, desborde de 222px en móvil
- 51 recursos con 404 en escritorio y móvil
- Las imágenes están en `assets/img/` pero el HTML las llama desde `/img/` (rutas absolutas vs relativas rotas)
- El carrusel de promociones (JavaScript propio) no funciona
- Las páginas Servicios y Citas muestran solo "PRÓXIMAMENTE.." con una imagen de construcción

## Qué tiene que lograr el sitio

1. **Agendar cita** — el cliente principal es una persona en Chihuahua que quiere reservar un tratamiento. La acción es simple: ver el servicio, ver el precio y mandar un WhatsApp con el servicio seleccionado.
2. **Calcular su plan de depilación láser** — los tratamientos de mayor precio ($6,500–$7,000) son la depilación láser; muchos clientes comparan IPL vs tridiodo y zona a zona. El calculador les da su total antes de llamar.

## Dirección visual

| Token       | Color    | Uso                                      |
|-------------|----------|------------------------------------------|
| `acento`    | `#d4538a`| Rosa principal derivado del logo/CSS     |
| `blush`     | `#fdf0f4`| Fondo de secciones alternas              |
| `fondo`     | `#ffffff`| Blanco limpio para el resto              |
| `tinta`     | `#2a2a2a`| Texto principal                          |

**Tipografía:**
- Playfair Display 400 italic (latin) para el tagline y las etiquetas de sección — calidez y feminidad sin ser cliché
- Inter 400/500/600 (latin) para el cuerpo — legible y neutro

## Elemento memorable

**"¿Cuánto cuesta tu plan de depilación?"** — calculador interactivo de depilación láser.

El negocio ofrece dos tecnologías distintas (IPL y tridiodo) para cuatro zonas corporales, con precios publicados. Muchas clientes no saben la diferencia ni qué zonas les conviene combinar. El calculador les permite:
1. Elegir la tecnología (IPL o tridiodo, con breve descripción)
2. Seleccionar las zonas (piernas, axilas, bikini, cuerpo completo) con el precio real de cada una
3. Ver el total en tiempo real y mandar un WhatsApp con todas las zonas, la tecnología y el total ya escrito

Ningún otro sitio del estudio ha usado este elemento (METODOS.md revisado). No inventa datos: todos los precios son del sitio original.

## Estructura de secciones

1. **Hero** — tagline "Renueva tu cuerpo, mente y espíritu" + H1 descriptivo + foto de portada
2. **Nosotros** — texto real del sitio sobre el equilibrio cuerpo/mente/espíritu
3. **Servicios** — 28 servicios organizados en 6 categorías con pestañas, cada uno con foto y precio
4. **Calculador láser** — elemento memorable (IPL vs tridiodo, 4 zonas, total + WhatsApp)
5. **Promociones** — las 6 imágenes de promo del spa, cada una enlaza al WhatsApp
6. **Visítanos** — teléfono, WhatsApp, correo, enlace a Maps
7. **Barra fija móvil** — WhatsApp / Llamar / Maps

## Qué se evita (revisión contra lo genérico)

- No se usan las fotos de banco de Freepik (acrilicas, dep_cera, Fibroblast, manicure, manicure_spa, polygel, semi, soft_gel) — se reutiliza la foto de una categoría similar cuando no hay propia
- No se anima cada sección al hacer scroll: solo transiciones hover en botones y tarjetas
- No se usan tarjetas idénticas flotando con sombra gruesa
- No se inventan testimonios, reseñas ni premios
- No se incrusta mapa interactivo: enlace a Google Maps con ícono
- No se usan degradados de moda sin razón — la paleta rosa es de la marca
