# 52 CrossFit Cinco Dos: plan de rediseño (método 1.2 en la nube)

**Sitio original:** https://52cincodemayo.com/ (LeadConnector / GoHighLevel)
**Materia prima:** textos de inicio y del artículo "Ser Cinco Dos" en `investigacion/crudo.json`. El clon no traía fotos; se bajaron del servicio de imágenes de LeadConnector las nueve fotos reales del box (comunidad, saludo, equipo, clase, argollas, coach con grupo, letrero 52, muro "Relax Have Fun Workout" y fachada), reducidas a 1600 px, a `assets/originales/`. No se usaron las portadas de revista ni los logotipos. El clon (`sitio/`) no se tocó.
**Rubro:** box afiliado a CrossFit en Calle 1° de Mayo 88, colonia 5 de Mayo, Hermosillo, Sonora. Clases de 5:00 a 20:30, Open Box los sábados de 8:00 a 12:00; abierto de lunes a sábado.

## Qué le falta al clon (los "detallitos")
- Ver `qa/reporte-rediseno.json` → `antes`: 19 imágenes rotas (viven en el CDN de LeadConnector).

## Qué tiene que lograr el sitio
1. Que quien llega sepa cuánto paga según si viene un día, una semana o se queda.
2. Agendar su clase de prueba por WhatsApp.
3. Ver que es un box real con comunidad (fotos propias).

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| negro | `#121212` | Texto y secciones oscuras |
| blanco | `#f5f5f2` | Fondo |
| naranja | `#ff6a1a` | Botones sobre oscuro y acentos (su logotipo) |
| naranja-osc | `#c2410c` | Naranja sobre claro |
| gris | `#5b5b5b` | Texto secundario |
| plumon-azul / plumon-rojo | `#1f3b8a` / `#b91c1c` | Solo el pizarrón |

Contrastes: negro/blanco 17.15, negro/naranja 6.59, naranja/negro 6.54, gris/blanco 6.22, plumón azul/blanco 10.24, plumón rojo/blanco 6.47.
Fuentes: Big Shoulders Display 800 (títulos), Karla 400/700 (texto) y Permanent Marker (solo el pizarrón).

## Elemento memorable (uno solo)
**"¿Desde dónde empiezas?"**: el pizarrón blanco del WOD, con marco de aluminio y letra de plumón. Tres botones (Estoy de paso, Quiero probar, Me quedo) y el pizarrón escribe el plan, cuánto pagas hoy (con la inscripción sumada en la mensualidad: $2,000 el primer mes, luego $1,500), qué incluye y el horario. El WhatsApp lleva el plan. No se ha usado antes en el estudio.

## Secciones
1. Portada con el coach y el grupo: H1 "CrossFit en Hermosillo, colonia 5 de Mayo".
2. ¿Desde dónde empiezas? (pizarrón).
3. Lo que encuentras en el Cinco Dos (afiliación, grupos, sin reservas, regaderas, equipo).
4. Relax, have fun, workout (comunidad y galería).
5. ¿Tienes dudas? (contacto).

## Revisión contra lo genérico (segunda pasada)
- Nada de fotos de banco de atletas: todas son del box y de su gente.
- El pizarrón es el objeto real de cualquier box; aquí sirve para elegir plan, no de adorno.
- Sin etiquetas en mayúsculas sobre cada sección, sin numeración 01/02 y sin puntos medios como separadores. Los títulos van en mayúsculas por el estilo de su marca, no como etiquetas.
- Sin "el estándar de élite" ni "resultados reales"; no se usan las frases de salud del artículo.
- "El único afiliado en Hermosillo" no se repite (no se pudo comprobar); se dice "afiliado oficial".
