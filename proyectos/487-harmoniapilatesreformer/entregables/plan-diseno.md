# Harmonía Pilates: plan de rediseño (método 1.1 en la nube)

**Sitio original:** https://www.harmoniapilates.com/ (una sola página hecha a mano con Tailwind)
**Materia prima:** textos de `investigacion/crudo.json` (inicio completo: beneficios, horario, maestro, testimonios, precios, preguntas y contacto) y de `investigacion/original.html` (la tabla de horarios con sus marcas, la dirección dentro del mapa de Google y el enlace de WhatsApp). Fotos del clon: las cuatro propias del estudio (tres con EXIF de iPhone 17 del 1 de febrero de 2026, ninguna con credenciales de IA) y el logotipo, a .webp en `assets/web/` con `rediseno/fotos-web.mjs`. La nube no llega a harmoniapilates.com (403), así que no se revisó en vivo. El clon (`sitio/`) no se tocó.
**Rubro:** estudio de Pilates Reformer semipersonalizado, máximo 8 alumnos por clase, con el maestro Josué Miranda. Av. de los Ejidos 64, Los Reyes Ixtacala, 54090 Tlalnepantla, Edo. Méx. Cumple 3 años.

## Qué le falta al clon (los "detallitos")
- Ver `qa/reporte-rediseno.json` → `antes`: 8 imágenes rotas (el logotipo y los fondos se piden desde la raíz), 14 errores de consola, 5 recursos fallidos (entre ellos el script de Cloudflare) y 637 px de desborde horizontal en el celular. La página mide 96,723 px en escritorio por las animaciones de revelado.

## Qué tiene que lograr el sitio
1. Que quien nunca ha hecho Reformer agende su clase muestra de $100 por WhatsApp.
2. Que vea en qué horarios hay clase y qué paquete le conviene.
3. Confianza: el maestro, el estudio real y lo que dicen sus alumnos.

## Dirección visual
Sale del logotipo (script azul marino con degradado a turquesa, estilo de camiseta deportiva), de los tapetes azules con mandala de sus reformers y del ámbar que su sitio usa para las horas de la mañana.

| Token | Color | Uso |
|---|---|---|
| noche | `#0e2f4f` | Texto, portada y contacto (el azul del logotipo) |
| papel | `#f4f6f7` | Fondo |
| azul | `#135d8c` | Botones, enlaces y precios |
| gris | `#4d5b69` | Texto secundario |
| hielo | `#dcebf2` | Fondo alterno, reformers sin elegir |
| turquesa | `#8fd6e3` | Acento sobre oscuro (el degradado del logotipo) |
| ámbar | `#f4b33d` | Relleno de lo elegido y de las clases de la mañana (nunca como texto sobre claro) |

Contrastes: noche/papel 12.93, blanco/azul 7.09, azul/papel 6.52, gris/papel 6.63, turquesa/noche 8.83, ámbar/noche 7.88, noche/hielo 11.13.
Fuentes: Fraunces 600 y cursiva (títulos; la cursiva recuerda el script del logotipo sin imitarlo) y Archivo 400/600 (texto), de @fontsource, solo latino.

## Elemento memorable (uno solo)
**"Elige tu hora y tu reformer"**: arriba, la semana del estudio (lunes a sábado) con sus 13 clases reales como botones (las de la mañana en ámbar, las de la tarde en azul). Abajo, el estudio visto desde arriba: ocho reformers dibujados con su tapete de mandala, porque la clase es de máximo 8 alumnos. Eliges la hora y el paquete; con VIP o Elite los reformers se pueden tocar para apartar tu favorito (es un beneficio real de esos paquetes); con los demás, los ocho quedan como los lugares de la clase. Una tarjeta resume día, hora, paquete, precio y vigencia, y el botón abre WhatsApp con todo escrito. No se ha usado antes en el estudio (hay calculadoras de paquete y semanas, pero ninguna con el plano de los aparatos).

## Secciones
1. Portada con la foto del estudio: H1 "Pilates Reformer, máximo 8 por clase" (la ciudad va justo arriba).
2. Elige tu hora y tu reformer.
3. Lo que trabajas en el Reformer (cuatro de sus seis beneficios, sin promesas de salud).
4. El maestro: Josué Miranda.
5. Precios (inscripción gratis, clase muestra, clase suelta y cinco paquetes).
6. Lo que dicen sus alumnos (tres testimonios sin afirmaciones de salud).
7. Preguntas frecuentes.
8. Visítanos: mapa de Google (su mismo iframe), dirección, WhatsApp y redes.

## Revisión contra lo genérico (segunda pasada)
- Sin siluetas de mujeres en leggings ni fotos de banco: solo su estudio y su maestro.
- Fuera "Esculpe tu figura", "Descomprime articulaciones / alivia dolores" y el testimonio de "me cambió la vida": son promesas de resultado o de salud.
- Sin etiquetas en mayúsculas sobre cada sección, sin numeración 01/02 y sin puntos medios como separadores.
- Los precios tachados de su sitio se dejan como "antes $X" solo en los paquetes, sin contadores de urgencia.
- Movimiento solo en el cambio de estado de los botones y los reformers (CSS, respeta `prefers-reduced-motion`).
