# JoyaDent Center: plan de rediseño (método 1.1)

Clínica dental de periodoncia e implantología en el edificio MITA, Blvd. Nuevo Vallarta 100, Nuevo Vallarta, Nayarit. Fundadora: Dra. Karla Joya Medina (periodoncista certificada por el Consejo Mexicano de Periodoncia); con la Dra. Alejandra Pelayo (ortodoncista) y la Dra. Karla Martínez (estética dental). Implantes Straumann, Nobel Biocare y Neodent; All on 4 / All on 6; brackets e Invisalign; carillas, coronas, resinas, encías, limpieza y blanqueamiento. Público: vecinos de Bahía de Banderas y Puerto Vallarta, y turistas que aprovechan sus vacaciones (su sitio es bilingüe).

Fuentes: clon en `sitio/`, `investigacion/crudo.json` (en inglés) y sus páginas en español leídas con curl el 2026-09-29 (`entregables/textos-sitio-en-vivo-2026-09-29.txt`).

## Qué le falta al clon (los "detallitos")

- El clon se desborda en el celular (484 px) y los contadores de su portada quedan en "+0" sin su JS.
- Buenas fotos propias: sesión profesional de la clínica (Nikon, 2023), retrato de la Dra. Karla Joya y fotos del equipo de 2024.

## Qué tiene que lograr el sitio

1. Que la persona llegue desde lo que le preocupa ("tengo manchas", "me falta un diente") al tratamiento y agende valoración por WhatsApp.
2. Que vea quién la atiende (credenciales reales de la fundadora) y que la clínica es moderna.
3. Horario, dirección y mapa a un toque.

## Dirección visual

| Token | Color | Uso |
|---|---|---|
| marino | `#1c2f5e` | Títulos, fondos oscuros |
| azul | `#3a5ba6` | Botones (el azul de su logo) |
| menta | `#6fd8c6` / `#0d7a6c` | Acentos (el degradado menta de su sitio) |
| lila | `#e7e5f6` | Fondos suaves (el lila de su logo) |
| nube | `#f4f6fb` | Fondo |

Contrastes en `rediseno/src/index.css`. **Tipografía:** Fraunces (títulos) y Figtree (texto), locales con @fontsource.

## Elemento memorable

**"¿Qué le quieres cambiar a tu sonrisa?"**: siete cosas que la persona nota en el espejo (manchas, dientes chuecos, falta un diente, faltan casi todos, encías, diente roto o amalgama, desgaste). Al elegir una, un dibujo de la arcada superior cambia (dientes amarillos, girados, un hueco, casi todos con implantes, encías rojas, una esquina rota y una amalgama, dientes cortos) y aparece el tratamiento de la clínica que lo atiende, con sus opciones reales (marcas de implantes, tipos de brackets, dos tipos de blanqueamiento…), la doctora que lo ve según su especialidad y el botón para agendar valoración por WhatsApp con todo escrito. Siempre dice que el diagnóstico es en la valoración.

### Revisión contra lo genérico

- Sale de su catálogo real: cada opción es un tratamiento y cada chip una opción de su página de tratamientos.
- No es "zonas del cuerpo" ni un antes/después: no muestra resultados, solo el punto de partida.
- Sin promesas de salud: nada de "garantizado", "sin dolor" ni resultados.

## Estructura

1. Encabezado con su logo, teléfono y "Agendar".
2. Portada: H1, texto, marcas y experiencia, foto de la recepción y horario.
3. "¿Qué le quieres cambiar a tu sonrisa?".
4. Tratamientos (6), All on 4 y cámara intraoral.
5. Equipo: la Dra. Karla Joya con sus credenciales y cédulas, las otras dos doctoras y fotos del equipo.
6. ¿Vienes de vacaciones? y cuatro reseñas de Google de su widget.
7. La clínica: consultorios y fachada.
8. Contacto: dirección, horario, teléfonos, correo, redes y su mapa de Google (iframe).
9. Barra fija en el celular: Agendar, Llamar, Llegar.

## Qué se evita

- "Los implantes más seguros del mercado", "resultados naturales y seguros" y "garantizan durabilidad": se describe el tratamiento sin prometer resultados.
- Contadores de años y sonrisas (dan cifras distintas en español e inglés).
- Nombres para las fotos del equipo que su sitio no identifica.
