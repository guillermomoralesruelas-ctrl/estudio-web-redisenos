# Clínica Dermatológica y Cirugía Estética de Puebla: plan de rediseño (método 1.1)

**Sitio original:** https://www.draristidesarellano.com/
**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/`), textos en `investigacion/crudo.json` (inicio, rinoplastia, rinoplastia secundaria, blefaroplastia y lifting facial), contacto en `investigacion/resumen.json`.
**Rubro:** Cirugía Plástica, Medicina Estética y Dermatología. **Ciudad:** Puebla, Puebla, México.

## Qué le falta al clon (los "detallitos")
- El clon es limpio: 0 desborde, 0 imágenes rotas, 0 errores de consola, 0 recursos fallidos. Alto: 9,457 px escritorio / 9,399 px móvil.
- El clon muestra la animación de hojas de otoño que el sitio en vivo carga por JavaScript; en el rediseño no se replica.
- El carrusel de equipos (ticker CSS) no se anima en el clon; se reconstruye con CSS en el rediseño.
- Las páginas de procedimientos individuales (rinoplastia, blefaroplastia, lifting) no están en el clon: el rediseño es una sola página, no multipage.

## Qué tiene que lograr el sitio
1. Que quien quiere una valoración **escriba por WhatsApp** con el procedimiento o la consulta de interés ya escrito.
2. Que se entienda con quién hablan: el Dr. Arístides Arellano, cirujano plástico de segunda generación (desde 1971), con cédulas verificables y más de 40 años de práctica.
3. Que vean los equipos reales de la clínica y entiendan el argumento central del doctor: "el equipo se elige por el problema, no al revés".
4. Que lleguen: dirección en Bellavista, horario completo y Google Maps.

## Dirección visual
El sitio original usa un esquema muy oscuro (carbón con fondos #0a0a0a) que crea una sensación de cirugía de lujo. Los matices cálidos de la sala de espera y el bronce del logotipo del doctor son el punto de partida.

| Token | Color | Uso |
|---|---|---|
| noche | #0e0e0e | Fondo principal (igual que el original; texto blanco 19.7:1) |
| bronce | #b89a6a | Del sello/logotipo del doctor en `brand/sello-sm.svg`; acentos y títulos sobre fondo oscuro (4.65:1 sobre noche → solo para texto grande, ≥18 px bold) |
| bronce hondo | #8a7149 | Para contraste AA en texto más pequeño sobre fondo claro (4.58:1 sobre crema) |
| crema | #f5f0e8 | Fondo de secciones alternas (texto noche 14.6:1 encima) |
| piedra | #2a2a2a | Fondo de tarjetas y el arsenal (texto blanco 13.7:1) |
| blanco hueso | #f0ece4 | Texto de títulos sobre noche (17.5:1) |

**Tipografía:** Cormorant Garamond (heavy 600 para títulos) — la tipografía de sus procedimientos en el sitio original usa serifas romanas elegantes, consistente con un cirujano de alta especialidad. Para cuerpo de texto: DM Sans (peso 400 y 500), limpia y legible. Ambas en @fontsource, solo subset latin.

## Elemento memorable
**"¿Qué quieres resolver?"** — el selector de equipos.

El doctor declara en su sitio: *"Más de veinte plataformas en el consultorio. Se elige el equipo por el problema — no se fuerza el problema al único aparato disponible."*

El elemento hace exactamente eso de forma visual: el visitante elige su preocupación (una de 10 categorías reales de la clínica: Arrugas, Flacidez, Manchas o melasma, Acné o cicatrices, Calvicie o alopecia, Piel opaca, Remodelado corporal, Cirugía de párpados, Nariz y perfil, Lifting facial) y el sitio muestra qué equipos del arsenal se usan para esa indicación — con la foto real del equipo del clon, su nombre y el tratamiento correspondiente — más el botón de WhatsApp con la preocupación ya escrita ("Hola, me gustaría agendar una consulta con el Dr. Arístides Arellano. Me interesa tratar: **Flacidez**").

Cada preocupación mapea a 2–4 equipos reales del arsenal publicado en el sitio original. El usuario no dice qué procedimiento quiere (lo cual requeriría conocimiento médico); dice qué le preocupa, y el doctor resuelve con el equipo adecuado.

Este elemento:
- Sale del argumento central del negocio, no es un adorno.
- No repite nada de lo ya hecho: no es silueta de cuerpo por zona (330), no es pase de abordar (35), no es mandala (608), no es checklist de servicios (614), no es plan de depilación (55), no es mapa del cuerpo con zonas (114), no es calculador de interés (566).
- No inventa datos: usa los equipos y tratamientos publicados en el sitio original.
- No dice "sin dolor", "garantizado" ni hace promesas; simplemente presenta el equipo que el doctor usa para esa indicación.

Equipos por preocupación (del sitio original, crudo.json y resumen.json):
- Arrugas: Fotona SP Dynamis (Fotona 4D), EndyMed PRO, Lumenis ResurFX
- Flacidez: Alma Hybrid, EndyMed PRO, Lumenis AcuPulse DUO
- Manchas o melasma: Lumenis ResurFX, Fotona SP Dynamis, Lumenis AcuPulse DUO
- Acné o cicatrices: Lumenis AcuPulse DUO, Fotona SP Dynamis, Lumenis ResurFX
- Calvicie o alopecia: ARTAS iX (trasplante robótico)
- Piel opaca: HydraFacial Syndeo, EndyMed PRO, Lumenis ResurFX
- Remodelado corporal: Alma PrimeX, VASER, LPG Cellu M6
- Cirugía de párpados: Lumenis AcuPulse DUO (blefaroplastia láser CO₂)
- Nariz y perfil: quirófano propio (cirugía plástica — sin foto de máquina, foto del doctor en quirófano)
- Lifting facial: quirófano propio (cirugía plástica — foto del doctor en quirófano)

## Estructura
1. Encabezado fijo: sello del doctor + nombre, navegación (El Doctor, Arsenal, Procedimientos, Contacto) y "Agendar valoración" (WhatsApp).
2. Portada: H1 "Dr. Arístides Arellano — Cirujano Plástico y Reconstructivo en Puebla", subtítulo con las cédulas, foto del doctor en su quirófano (aristides-craft.webp), botón WA y "Ver procedimientos".
3. El Doctor: retrato (aristides.webp), credenciales reales (cédulas DGP), la segunda generación desde 1971, formación.
4. El Arsenal: **elemento memorable** "¿Qué quieres resolver?" con el selector de 10 preocupaciones y los equipos correspondientes.
5. Procedimientos: las 5 categorías del sitio (Cirugía Plástica, Restauración Capilar, Medicina Estética, Láser y Tecnología, Dermatología) en pestañas con la lista de procedimientos destacados por categoría.
6. La Clínica: recepción (clinica/recepcion.webp), dirección, horario, WhatsApp, Google Maps.
7. Pie: datos completos, aviso legal, cédulas.
8. Barra fija en el celular: WhatsApp, Llamar, Cómo llegar.

## Qué se evita (revisión contra lo genérico)
- No se usan las hojas de otoño del carrusel animado del original (son de campaña estacional, no de identidad permanente).
- Sin etiquetas ARIA/decorativas en mayúsculas tipo "NUESTROS SERVICIOS" sobre cada sección.
- Sin numeración 01/02 para las secciones.
- Sin afirmaciones de salud, garantías, "sin dolor", "sin riesgo", ni resultados típicos.
- Sin reseñas ni estrellas (aunque el doctor tiene acreditación Google Health Source): el dato existe pero no está verificado en el clon.
- Sin fotos de antes y después inventadas: el doctor tiene muchas en su sitio pero no están en el clon, y no se inventan.
- Sin degradados de moda sin razón: el gradiente bronce→noche se usa solo en el sello/logotipo, como en el original.
- Sin animaciones en cada sección: solo el selector de equipos tiene transición de fade.
- Sin tarjetas idénticas repetidas: equipos con foto real en grid de 2–3 columnas, no cards con mismo tamaño de título.
