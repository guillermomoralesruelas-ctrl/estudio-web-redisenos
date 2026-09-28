# International X Dental: plan de rediseño (método 1.1)

**Sitio original:** https://internationalx.dental/
**Materia prima:** clon en `../sitio/` (imágenes en `assets/web/` vía fotos-web.mjs), textos en `investigacion/crudo.json`, contacto en `investigacion/resumen.json`.
**Rubro:** SALUD – Odontología. **Ciudad:** Ciudad Juárez, Chihuahua (también Cancún, Q.R.)
**Público:** pacientes de EE. UU. (El Paso / Texas) y del norte de México que buscan tratamiento dental de calidad a precios mexicanos. El gancho principal del negocio: "10 minutos cruzando la frontera".

## Qué le falta al clon (los "detallitos")
- Desborde horizontal: 118 px en escritorio, 109 px en móvil (overflow del menú de WordPress)
- Recursos externos con 403 (seguridad de AWS) y timeout general
- Carruseles de YouTube y Trustindex sin funcionar localmente
- Múltiples navigaciones duplicadas en el HTML (tres menús móviles)
- 13 iconos-imágenes sin alt
- Uno de los íconos "Por qué elegirnos" es un ChatGPT-image (no se usa)

## Qué tiene que lograr el sitio
1. Que el paciente de El Paso/Texas entienda de inmediato cuánto puede ahorrar cruzando la frontera y que tome acción (WhatsApp o llamada)
2. Que el visitante de México encuentre los servicios y los especialistas fácilmente
3. Generar confianza con el equipo médico real (9 especialistas con foto) y las 1,213 reseñas de Google

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| `--color-azul` | `#1B4D9B` | Azul corporativo del logo; CTA principal |
| `--color-azul-claro` | `#2563EB` | Hover, acento |
| `--color-fondo` | `#F8FBFF` | Fondo blanco-azulado suave |
| `--color-texto` | `#1A2030` | Texto principal, contraste AA |
| `--color-blanco` | `#FFFFFF` | Fondos de tarjetas |
| `--color-gris` | `#64748B` | Texto secundario |

**Tipografía:**
- Títulos: `Cormorant Garamond` latin-600 (dental de lujo, elegante)
- Cuerpo/UI: `Inter` latin-400 y latin-500 (legible, bilingüe)

## Elemento memorable
**"¿Cuánto ahorras cruzando la frontera?"** — el paciente de El Paso selecciona el tratamiento que necesita (implante, corona de zirconio, blanqueamiento, carillas, ortodoncia, limpieza). Aparece:
- El precio promedio en EE. UU. (referencia pública, declarada como tal)
- El precio en Ciudad Juárez en International X Dental (tomado de su página de precios)
- El ahorro en dólares y en porcentaje
- Tiempo de manejo desde El Paso: ~10 min
- Botón WhatsApp con el tratamiento escrito

Único respecto a todos los rediseños anteriores: ninguno ha trabajado dental turismo fronterizo ni el eje de comparación de precios entre dos países en la misma pantalla.

## Estructura
1. Barra superior — teléfonos USA (+1 806 416-1012) y MX (656 634-0040), horarios
2. Nav — logo + anclas
3. Hero — foto interior + H1 + CTA WhatsApp
4. Comparador de ahorro — elemento memorable
5. Servicios — Cosmética, Restauración, Prevención (3 tarjetas con foto)
6. Especialistas — 9 doctores con foto, nombre, especialidad
7. Reseñas — EXCELENTE 5/5, base de 1,213 reseñas + 4 citas textuales
8. Cómo llegar — foto fachada → Maps; dirección, horarios
9. Pie — logo, teléfonos, redes, dirección Cancún
10. Barra fija móvil — WhatsApp, llamada, Maps

## Qué se evita (revisión contra lo genérico)
- Sin etiquetas en mayúsculas sobre cada sección ni numeración 01/02
- Sin puntos medios ni separadores decorativos
- Animación solo en el comparador (al cambiar selección), respetando prefers-reduced-motion
- Tarjetas de especialistas con foto real; no todas idénticas (proporción varía)
- Sin degradados sin razón: solo overlay oscuro en el hero
- El ítem "Garantía en nuestros procedimientos" del sitio original no se usa como afirmación de resultados; se menciona solo que ofrecen garantía sin cuantificarla
- Sin afirmaciones de resultados garantizados médicos
