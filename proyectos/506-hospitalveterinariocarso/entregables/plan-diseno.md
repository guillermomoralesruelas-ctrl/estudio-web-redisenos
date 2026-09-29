# Hospital Veterinario Carson: plan de rediseño (método 1.1)

**Sitio original:** https://hospitalcarson.com/
**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/static/images/`), textos de inicio y de cuatro servicios en `investigacion/crudo.json`, contacto en `investigacion/resumen.json`. La red de la nube no llega al sitio.
**Rubro:** hospital veterinario 24 horas, 365 días, con especialidades, hospitalización, estudios y servicios complementarios. **Ciudad:** San Andrés Tetepilco 95, Iztapalapa, Ciudad de México.

## Qué le falta al clon (los "detallitos")
- Ver `qa/reporte-rediseno.json`. El sitio tiene 24 servicios, cada uno en su página con el mismo texto genérico.
- Fotos: cinco propias en su galería (pasillo, cirugía, radiografía, gato hospitalizado, bulldog); la portada no se pudo confirmar como propia.

## Qué tiene que lograr el sitio
1. Llamar en un toque en una urgencia (24 horas).
2. Encontrar rápido el servicio que se necesita entre 24.
3. Ver precios de planes (vacunación, salud y PetCare).

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| turquesa | `#19707a` | El turquesa del gato de su logo, oscurecido |
| lima | `#c9d400` | El verde lima del perro de su logo: acentos sobre oscuro |
| abismo | `#0f3b40` | Fondo oscuro |
| agua | `#effaf9` | Fondo claro |
| grafito | `#4b5b5d` | Texto secundario |
| alerta | `#b91c1c` | Urgencias |

**Tipografía:** Nunito (títulos) y Nunito Sans (texto), locales con @fontsource.

## Elemento memorable
**"Del hocico a la cola":** un perro o un gato dibujado (se cambia con un botón) con seis puntos que se tocan: ojos, dientes, corazón, riñones, huesos y piel y pelo. Cada punto muestra los servicios del hospital que atienden esa parte, con sus propios textos (oftalmología; profilaxis dental; cardiología y electrocardiograma; nefrología; ortopedia y rayos X; estética canina y felina), y un WhatsApp con el servicio escrito. Arriba, fijo, el botón rojo de urgencias 24 horas. Un reloj dice si ahora es turno diurno (9:00 a 19:30) o nocturno (19:31 a 8:59), su propio horario.

## Estructura
1. Encabezado con logo, secciones y "Urgencias 24h".
2. Portada: H1, 24 horas / 365 días, +15 años, foto del pasillo con su logo.
3. Del hocico a la cola (elemento memorable).
4. Todos los servicios en una lista por grupos (atención, especialidades, estudios, cuidado y más).
5. Planes con precio: perros, gatos y PetCare.
6. Galería (sus cinco fotos).
7. Contacto con dirección, teléfonos, WhatsApp, correo, horario y Maps. Barra fija en el celular.

## Qué se evita (revisión contra lo genérico)
- Los testimonios de su inicio (María Rodríguez, Juan López, Ana García con iniciales): parecen de plantilla.
- "El mejor servicio" repetido en cada página de servicio.
- Tarjetas idénticas para 24 servicios: una lista agrupada.
