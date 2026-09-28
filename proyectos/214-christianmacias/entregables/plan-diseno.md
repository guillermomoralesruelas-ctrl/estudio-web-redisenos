# Plan de diseño — 214-christianmacias

Christian Macías — Fotógrafo de Bodas Documental, Guadalajara, Jalisco
Sitio de una página. Método 1.1.

---

## Qué le falta al clon (diagnóstico)

- 33 imágenes rotas (rutas con `/214-christianmacias/sitio/images/` en lugar de rutas del servidor; las versiones `-800.webp` y `-480.webp` del sitio no se descargaron).
- CSS de fuentes Kanit no descargado (404 en los 6 archivos woff2).
- Scripts de Cloudflare (consent, challenge-platform) y cursor personalizado — 404, no afectan el contenido.
- El clon renderiza la estructura pero sin fotos ni fuentes: no es funcional para presentar al cliente.

---

## Qué tiene que lograr el sitio

1. **Acción principal:** que la pareja escriba a Christian por WhatsApp o complete el formulario con su fecha de boda.
2. Antes de eso: convencerla de que este fotógrafo entiende lo que ellos valoran — la autenticidad, no la pose.
3. Mostrar precios con claridad desde el principio (el sitio original ya los publica: $32k, $48k, $69k MX).

---

## Dirección visual

| Token | Color | Uso |
|---|---|---|
| `--color-bg` | `#0c0c0c` | Fondo general (negro casi puro) |
| `--color-paper` | `#f5f2ec` | Fondos de sección claros (marfil cálido) |
| `--color-ink` | `#1a1a1a` | Texto sobre fondo claro |
| `--color-cream` | `#e8e2d8` | Bordes, separadores |
| `--color-gold` | `#c4a96e` | Acento: nombres de paquetes, precios, detalles activos |
| `--color-white` | `#ffffff` | Texto sobre fondos oscuros |

La paleta alterna: secciones oscuras (negro/blanco) con secciones claras (marfil/tinta). Las fotos son el color real del sitio.

**Tipografía:**
- Cormorant Garamond 500 italic (latin) — títulos y textos narrativos. Serif de alta contraste que habla de trayectoria y sensibilidad.
- Inter Variable (latin) — cuerpo, precios, etiquetas funcionales.

---

## Elemento memorable: "¿A qué hora de tu boda está el fotógrafo?"

Un cronógrafo del día de boda con cuatro momentos: **Preparativos**, **Ceremonia**, **Sesión** (hora dorada), **Fiesta** (noche). Al tocar cada momento aparece:
- Un párrafo en palabras de Christian sobre qué hace él en ese preciso momento (texto real del sitio y del blog).
- La foto del portafolio que ilustra ese momento de la jornada.
- Un dato concreto de su forma de trabajar.

El argumento central es que la fotografía documental exige presencia continua desde el inicio hasta el cierre: "el primer vistazo no se puede pedir otra vez". Esto está en sus propias palabras; no se inventa nada.

**Por qué es único vs. METODOS.md:**
- No es un calculador de precio ni de paquete.
- No es una galería filtrable.
- No es un reloj en vivo.
- No es un plano a escala ni un mapa.
- Es una narrativa interactiva del oficio, en tiempo de boda, con sus palabras reales. Conecta directamente con su filosofía documentalista.

---

## Estructura de secciones

1. Nav — fijo, transparente sobre el hero, sólido al hacer scroll.
2. Hero — foto de portada a pantalla completa, H1 breve, CTA a paquetes y portafolio.
3. Filosofía — tres puntos de su forma de trabajar, en sus palabras.
4. Elemento memorable — cronógrafo "¿A qué hora de tu boda está el fotógrafo?".
5. Sobre mí — retrato b&n + texto real de "Documentar es mi forma de ver el mundo".
6. Dónde trabajo — tres guías de venues (Oaxaca, Tequila, Chapala).
7. Portafolio — cuadrícula de fotos reales.
8. Paquetes — Esencia, Memoria y Autor con precios reales y WhatsApp por colección.
9. Reconocimientos — MyWed PRO, Inspiration Photographers, Google Business, educador.
10. Testimonios — Alex & Andy y Elisa & Jacob.
11. Contacto — formulario visual + WhatsApp + datos reales.
12. Footer + barra fija móvil (WhatsApp + llamar + Maps).

---

## Qué se evita (revisión contra lo genérico)

- Sin etiquetas en mayúsculas sobre cada sección ("SOBRE MÍ", "NUESTROS SERVICIOS").
- Sin numeración 01/02/03 decorativa.
- Sin puntos medios como separador visual.
- Sin animaciones en cascada en cada sección.
- Sin tarjetas de íconos idénticas para los "servicios".
- Sin fondo degradado de moda en el hero.
- Los paquetes: tabla limpia, sin estrellas, sin "más popular".
- El precio visible desde el principio, no escondido detrás de "contáctanos para más info".
