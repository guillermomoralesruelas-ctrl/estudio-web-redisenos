# El Patrón Barbería: plan de rediseño (método 1.1)

**Sitio original:** https://www.elpatron.com.mx/ (español, con botón EN)
**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/`), textos en español de `investigacion/original.html` (la lectura de Jina de `crudo.json` salió en inglés), contacto en `investigacion/resumen.json`. La red de la nube no llega al sitio.
**Rubro:** barbería premium con tres sedes (Juárez en la CDMX, Arcos y Zibatá en Querétaro); esta página es la de Juárez. **Ciudad:** Av. Insurgentes Sur 26, Col. Juárez, Ciudad de México.

## Qué le falta al clon (los "detallitos")
- Next.js con widgets de reseñas de Google e Instagram. Ver `qa/reporte-rediseno.json`.
- Fotos propias con su logo (local, corte, barba, facial, experiencia, niño, Marcelo y Melisa). El retrato de Yosef trae C2PA con SynthID: no se usa.

## Qué tiene que lograr el sitio
1. Reservar (su sistema en línea) o escribir por WhatsApp a un barbero en particular.
2. Ver el menú con precios y la membresía.
3. Dirección, horario y mapa de Juárez; enlaces a las sedes de Querétaro.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| negro | `#0b0b0c` | Fondo (su `#050505`) |
| amarillo | `#ffd400` | El amarillo de su sitio y su letrero de neón |
| hueso | `#f3efe6` | Secciones claras |
| humo | `#a8a39a` | Texto secundario sobre negro |
| carbon | `#1a1a1c` | Paneles |

**Tipografía:** Bebas Neue (títulos, condensada como su letrero) y Barlow (texto), locales con @fontsource.

## Elemento memorable
**"Tu año de Patrón":** su membresía anual cuesta $2,650 y da $3,480 de crédito, que son exactamente doce cortes de $290: uno por mes. Doce meses en fila, cada uno con un corte; tocas un mes y cambias el servicio (corte, ritual de barba, facial, Experiencia Patrón o nada), y una cartera muestra cuánto crédito llevas usado y cuánto te queda. Un interruptor cambia a la membresía de niños ($2,000 por $2,640, doce Patroncitos de $220). El botón pide la membresía por WhatsApp con el plan del año escrito.

## Estructura
1. Encabezado con nombre, secciones, "Reservar" (su sistema) y WhatsApp.
2. Portada: H1, "Diseño de imagen y precisión estética", 4.9 en Google, foto del local.
3. Servicios con precio y lo que incluye cada uno.
4. Tu año de Patrón (elemento memorable) y Lealtad Patrón (7 + 1).
5. Equipo: Marcelo, Yosef, Melisa y Uriel con sus especialidades y WhatsApp a cada uno (Yosef y Uriel sin foto).
6. Ubicación Juárez con su mapa, horario y sedes de Querétaro.
7. FAQ. Barra fija en el celular.

## Qué se evita (revisión contra lo genérico)
- El contador "+0 Estilos Transformados", "servicio de lujo garantizado" y "el referente definitivo".
- La foto de Yosef (hecha con IA) y los widgets de terceros.
- Etiquetas en mayúsculas en cada bloque (su sitio las usa todas); aquí solo en los títulos de Bebas.
