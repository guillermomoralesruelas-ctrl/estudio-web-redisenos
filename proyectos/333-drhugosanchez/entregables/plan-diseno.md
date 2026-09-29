# Clínica del Dr. Hugo Sánchez: plan de rediseño (método 1.2 en la nube)

**Sitio original:** https://drhugosanchez.com/ (Hostinger Website Builder / Zyro)
**Materia prima:** textos de inicio, equipo, servicios y contacto en `investigacion/crudo.json`. El clon no traía fotos; se bajaron de `assets.zyrosite.com` las cuatro fotos reales de la clínica (el doctor con su equipo, el doctor con una paciente, el consultorio y la recepción), reducidas a 1600 px, a `assets/originales/`. Las 12 imágenes de tratamientos traen credenciales C2PA de imagen generada con IA y no se usaron. El clon (`sitio/`) no se tocó.
**Rubro:** clínica dental del Dr. Hugo Sánchez Martínez (cédula 11815555) en Calzada Cuauhtémoc 406, esquina Leandro Valle, Oaxaca de Juárez. Lunes a viernes de 10:00 a 19:00; sábados de 10:00 a 18:00.

## Qué le falta al clon (los "detallitos")
- Ver `qa/reporte-rediseno.json` → `antes`: imágenes rotas y recursos fallidos (las fotos viven en el CDN de Zyro).

## Qué tiene que lograr el sitio
1. Que el paciente encuentre rápido el servicio que tiene que ver con lo que le pasa.
2. Confianza: el doctor, su cédula y la clínica real.
3. Agendar por WhatsApp o teléfono.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| tinta | `#16201f` | Texto y sección oscura |
| crema | `#f7f5f0` | Fondo |
| jade | `#0f5e5a` | Botones y acentos (verde oaxaqueño, en lugar del azul dental de siempre) |
| gris | `#56615f` | Texto secundario |
| menta | `#dcebe7` | Fondo alterno |
| durazno | `#f2c38b` | Acento sobre oscuro |

Contrastes: tinta/crema 15.29, blanco/jade 7.58, jade/crema 6.96, gris/crema 5.89, jade/menta 6.17, durazno/tinta 10.28.
Fuentes: Literata 500 y cursiva 400 (títulos) y Nunito Sans 400/700 (texto).

## Elemento memorable (uno solo)
**"¿Qué te trae a consulta?"**: cuatro motivos (Me duele, Me falta un diente, Quiero mejorar mi sonrisa, Revisión y limpieza). Cada uno muestra tres servicios de la clínica relacionados, con un resumen de su propia descripción, y el WhatsApp lleva el motivo. Aclara que es una guía y que el diagnóstico lo hace el doctor. No se ha usado antes en el estudio.

## Secciones
1. Portada partida (texto y la foto del doctor con una paciente): H1 "Dentista en Oaxaca, sobre Calzada Cuauhtémoc".
2. ¿Qué te trae a consulta?
3. El doctor (formación y cédula).
4. La clínica (consultorio, recepción y equipo).
5. Agenda tu valoración.

## Revisión contra lo genérico (segunda pasada)
- Nada de dientes 3D ni modelos de IA: solo la clínica y el doctor reales. El verde jade evita el azul de todas las clínicas dentales.
- Sin promesas de salud: se quitaron "resultados garantizados", "técnicas indoloras", "la solución más avanzada" y "sonrisa perfecta".
- Sin etiquetas en mayúsculas sobre cada sección, sin numeración 01/02 y sin puntos medios como separadores.
- Sin animaciones salvo el cambio de estado de los botones (CSS, respeta `prefers-reduced-motion`).
