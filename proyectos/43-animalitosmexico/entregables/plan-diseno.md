# Animalitos México: plan de rediseño (método 1.1)

**Sitio original:** https://animalitosmexico.com/ (sitio propio con Bootstrap). Páginas:
- Inicio, Grooming, Hospital, Tomógrafo y Resonancia;
- una página por hospital (Miguel Ángel, Puebla, Interlomas, Polanco, Prado Norte, Zona Esmeralda);
- Contacto, Agenda una cita (formulario) y Factúrate.

El contacto es un teléfono único para todos (55 9025 2000) y un botón "Contáctanos" con WhatsApp.

**Materia prima:**
- `investigacion/crudo.json`: Inicio y las páginas de Miguel Ángel, Puebla, Interlomas y Polanco;
- `investigacion/resumen.json`: teléfono, WhatsApp 5215545527129 y redes;
- la página `/agenda-una-cita`, leída en vivo por sus tipos de servicio.

El clon sale con 77 imágenes rotas y 56 a 75 recursos fallidos (defectos del clon, no del cliente).

**Comprobado en vivo** (curl el 2026-09-27):
- Ningún enlace `tel:`: el 55 9025 2000 no se puede tocar.
- La portada tiene 2 H1 ("De grandes a pequeñas necesidades" y "Tecnología e"); la página de Puebla, ninguno.
- La página de Puebla se titula "Hospital Veterinario 24 Horas en CDMX - Puebla Angelópolis".
- No hay JSON-LD.
- El menú dice "Resonacia".

No se bajó ninguna imagen nueva.

**Rubro:** red de seis hospitales veterinarios:
- cinco abiertos 24 horas: Miguel Ángel de Quevedo, Polanco, Interlomas, Zona Esmeralda y Puebla Angelópolis;
- Prado Norte, de 9:00 am a 7:00 pm.

Tipo para Google: `Organization` con seis `VeterinaryCare`.

**Sobre las fotos (revisadas antes de construir):** son pocas propias, pero suficientes: **seis fotos de sus hospitales**. Son los fondos de las páginas de sucursal (`images-css/*mo1`):
- quirófanos de Miguel Ángel, Polanco e Interlomas;
- el tomógrafo con un perro en Prado Norte;
- el consultorio verde de Zona Esmeralda;
- un consultorio con su letrero "Ultra cute, ultra love".

No se usa lo demás:
- retratos de estudio de perros y gatos sobre fondos de color;
- veterinarios con guantes y cirujanos;
- el banner de resonancia (todo de banco);
- las capturas de Google Maps.

Las fotos de mosaico de cada página de sucursal no están en el clon. La foto "Vértiz" no se asigna a Puebla aunque su página la reutiliza.

## Qué le falta al clon (los "detallitos")
- `qa-rediseno.mjs` (antes): 77 imágenes rotas, entre 56 y 75 recursos fallidos.
- Fotos: 6 copias `.webp` (2.15 MB → 0.27 MB), su logo SVG en azul y en blanco y el favicon, con `rediseno/fotos-web.mjs` en `assets/web/`.

## Qué tiene que lograr el sitio
1. **Urgencias**: llamar en un toque; saber cuál de sus hospitales abre 24 horas.
2. **Encontrar el hospital más cercano** entre seis, con su dirección y cómo llegar.
3. Agendar por WhatsApp con el hospital y el motivo ya escritos.

## Dirección visual (primera pasada)
El azul de su marca y los círculos de color (rosa, amarillo, verde) que usa detrás de sus mascotas.

| Token | Color | Uso |
|---|---|---|
| `azul` | `#008fd3` | Su azul: logo, pines, decoración (no para texto chico) |
| `azul-hondo` | `#006ea8` | Botones con texto blanco (5.5:1) y enlaces (5.2:1 sobre `cielo`) |
| `noche` | `#0a3d62` | Títulos, sección de servicios y pie (10.6:1 sobre `cielo`; blanco encima 11.3:1) |
| `rosa-hondo` | `#c81b50` | Botón de urgencias con texto blanco (5.6:1) |
| `rosa` / `amarillo` / `verde` | `#e72b66` / `#ffd200` / `#a1c53a` | Círculos y pines; `noche` sobre amarillo 7.8:1 y sobre verde 5.7:1 |
| `cielo` | `#f2f8fc` | Fondo claro |
| `texto` | `#44546a` | Párrafos (7.7:1 sobre blanco) |

**Tipografía:** su sitio usa Gotham Rounded, que es de pago. Se usa **Nunito** (400, 700 y 900), también redondeada, de @fontsource y solo latino.

## Elemento memorable: "Un Animalitos® cerca de ti"
Es su propia frase para el bloque de sucursales. El elemento es un **plano a escala del Valle de México**, dibujado con las coordenadas de sus propios enlaces de Google Maps (17 px por km, retícula de 2 km, escala de 5 km y norte).

**En el plano:**
- Los cinco hospitales son pines de colores; los de 24 horas llevan "24".
- Al tocar uno, late y se dibujan **círculos de 2, 5 y 10 km** a su alrededor.
- Puebla, fuera del plano, es un botón aparte.

**"Usar mi ubicación"** (la geolocalización del navegador; nada sale de la página):
- pone "Tú" en el plano;
- ordena la lista por distancia en línea recta;
- elige el hospital más cercano.

**La ficha de cada hospital** muestra:
- su foto (si la hay) y su horario;
- su dirección y la distancia;
- los motivos de su formulario (Consulta, Vacuna, Análisis, Cirugía, Estética, Baño);
- WhatsApp con "Hola, quiero agendar una cita en Animalitos Polanco. Motivo: Vacuna.";
- llamar y "Cómo llegar" (su enlace de Maps);
- qué hacer en una emergencia (Prado Norte no abre 24 horas).

No repite elementos anteriores: ningún sitio anterior tenía un buscador de sucursales. No es un mapa de terceros; es un SVG propio.

## Estructura
1. Encabezado: logo, navegación y botón "Urgencias 55 9025 2000".
2. Portada: H1 "Hospital veterinario 24 horas en CDMX, Edomex y Puebla", la foto del tomógrafo, llamar y WhatsApp.
3. **Un Animalitos® cerca de ti.**
4. "De grandes a pequeñas necesidades": sus 15 servicios en lista, con cómo agendar.
5. "Tecnología e instalaciones para cuidar a tu mejor amigo": sus seis fotos con el nombre del hospital.
6. Pie y barra fija en el celular: WhatsApp, Llamar y Cómo llegar (al buscador).

## Revisión contra lo genérico (segunda pasada)
- Sin etiquetas en mayúsculas, sin numeración, sin puntos medios.
- Los servicios son una lista, no una fila de iconos iguales.
- Solo late el pin elegido, quieto con `prefers-reduced-motion`.
- Sin fotos de banco: solo sus hospitales.
- Sin inventar:
  - sin descripción de cada servicio (su sitio solo da los nombres);
  - sin qué equipo tiene cada hospital;
  - sin días de Prado Norte (solo publica "9:00 am a 7:00 pm").
- Sin mapa de Google incrustado, sin Google Tag Manager ni scripts de terceros.
