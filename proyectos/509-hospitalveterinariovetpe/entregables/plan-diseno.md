# VetPets, Hospitales Veterinarios: plan de rediseño (método 1.1)

**Sitio original:** https://hospitalesvetpets.com.mx/
**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/wp-content/uploads/`), textos de inicio, servicios, sucursales y contacto en `investigacion/crudo.json`, contacto en `investigacion/resumen.json`. La red de la nube no llega al sitio.
**Rubro:** hospital veterinario con urgencias 24/7 en Naciones Unidas y consultorios dentro de PETCO. **Ciudad:** Zapopan, Jalisco (+15 años, según su contador).

## Qué le falta al clon (los "detallitos")
- WordPress con Divi: contadores animados, dos videos y los muros de Facebook e Instagram incrustados. Ver `qa/reporte-rediseno.json`.
- Sus fotos son propias: el interior de cinco sucursales y tres portadas con su equipo.

## Qué tiene que lograr el sitio
1. En una urgencia, llegar en un toque a la sucursal 24/7 (Naciones Unidas) con su teléfono y su mapa.
2. Encontrar la sucursal más cómoda para consulta o vacunas, con su teléfono y su mapa.
3. Ver sus servicios (preventiva, interna, cirugía, endoscopia).

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| azul | `#015fb1` | El azul de sus títulos y su logo |
| rojo | `#c8102e` | El rojo de "VETPETS": urgencias |
| noche | `#0b2545` | Fondo oscuro |
| cielo | `#eef4fb` | Fondo claro |
| pizarra | `#4a5566` | Texto secundario |

**Tipografía:** Saira (títulos, la de su sitio) y Source Sans 3 (texto), locales con @fontsource.

## Elemento memorable
**"¿Es una emergencia?":** tres botones grandes: "Es una emergencia", "Cirugía o endoscopia" y "Consulta, vacuna o desparasitación". Con la hora de Guadalajara en vivo, la respuesta dice a qué sucursal ir: en emergencia, Naciones Unidas (urgencias 24/7, servicio de hospital) con sus dos teléfonos en grande y el mapa; en consulta, sus cuatro sucursales con teléfono y mapa, y si Acueducto (la única con horario publicado, 9:00 a 21:00) está abierta en ese momento. Sale de lo que más necesita quien busca un veterinario de noche: a dónde ir y a quién llamar.

## Estructura
1. Encabezado con logo, secciones y un botón rojo "Urgencias 24/7".
2. Portada: H1, "Medicina veterinaria con calidad humana", +15 años, foto de su doctora con un perro.
3. ¿Es una emergencia? (elemento memorable).
4. Servicios: medicina preventiva, interna, cirugía y endoscopia, con la foto del quirófano.
5. Sucursales con foto por dentro, dirección, teléfono y mapa.
6. Contacto y pie. Barra fija en el celular: Urgencias (llamar a Naciones Unidas), WhatsApp, Cómo llegar.

## Qué se evita (revisión contra lo genérico)
- Los muros de Facebook e Instagram incrustados y los videos automáticos.
- "Somos la mejor opción" y "miles de casos de éxito".
- Contadores animados.
