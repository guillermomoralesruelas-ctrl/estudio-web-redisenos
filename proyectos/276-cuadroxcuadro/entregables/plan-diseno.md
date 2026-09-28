# Cuadro x Cuadro: plan de rediseño (método 1.1)

**Sitio original:** http://videofilmaciones.mx/ (marca cuadroxcuadro.mx)
**Materia prima:** clon en `../sitio/` (56 fotos propias en `sitio/assets/uploads/.../img/`), textos de `investigacion/crudo.json` (inicio, preguntas frecuentes, paquetes de boda y de XV años, videos) y el sitio en vivo leído con curl el 2026-09-28.
**Rubro:** fotografía y video de bodas, XV años, bautizos y empresas. **Ciudad:** Ciudad de México; trabajan en toda la República.

## Qué le falta al clon (los "detallitos")
- El teléfono se marca como `(01) 55 2123 7334`; el prefijo 01 ya no existe en México.
- Las páginas de paquetes no dicen precios, y la de bodas trae textos copiados de la de XV años ("felicitando a la quinceañera", "sesión Pos-XV").
- La portada vende el "Paquete Premium $20,000 con drone", pero la lista del Premium no incluye drone.
- Fotos de 1 a 2 MB cada una y un bloque de Instagram vacío ("¡Aún no hay fotos ni videos!").

## Qué tiene que lograr el sitio
1. Que una pareja o una familia entienda qué cubre cada paquete, en horas y momentos del día.
2. Que pida cotización por WhatsApp con su paquete y su fecha.
3. Que vea su trabajo (fotos y videos) y las opiniones de sus clientes.

## Dirección visual
Cine: fondo negro de sala, bandas de pantalla ancha en la portada, marfil y un dorado cálido.
| Token | Color | Uso |
|---|---|---|
| sala / sala-media | #0f0e0d / #1c1a18 | portada, galería, pie |
| marfil | #f6f1ea | fondo claro |
| oro / oro-hondo | #d4b27a / #86631f | acentos sobre oscuro / sobre claro |
| tinta | #26221e | texto |

**Tipografía:** Cormorant Garamond (títulos, con cursiva) y Manrope (texto). No hay logo en el clon; el nombre va con letra.

## Elemento memorable
**"Tu día, cuadro por cuadro"**: eliges boda o XV años y uno de sus paquetes (Básico, Básico Book, Premium, Top o VIP). Una cinta de 11 cuadros se llena con las horas de estancia del paquete (6, 8, 10 u 11), se encienden los momentos que cubre (maquillaje, ceremonia, salón) y las sesiones extra (casual, trash the dress, drone), cada uno con una foto suya. Con "+ hora extra" se agregan cuadros a $1,000 cada uno (su precio publicado). El botón manda por WhatsApp el paquete, las horas extra y deja lugar para la fecha.

## Estructura
1. Portada con su foto del velo en la montaña, H1, 22 años y WhatsApp.
2. Tu día, cuadro por cuadro.
3. Galería de bodas, XV años y sesiones.
4. Cine: Ronin-S y drone, con enlace a sus videos.
5. Opiniones de bodas.com.mx (4.8 de 5, 37 opiniones).
6. Preguntas frecuentes y formas de pago.
7. Contacto: WhatsApp, teléfono, correo, redes y zona de servicio.

## Qué se evita
- Carrusel automático, animaciones al hacer scroll y reproductores de terceros (los videos se enlazan).
- Precios que no publican: solo el Premium de boda ($20,000) y la hora extra ($1,000).
