# Kichan Bajlum: plan de rediseño (método 1.1)

**Sitio original:** https://kichanbajlumtours.com/ (español, con EN)
**Materia prima:** clon en `../sitio/` (fotos en `sitio/assets/imagenes/`), textos de inicio, tours desde Palenque, San Cristóbal y paquetes en `investigacion/crudo.json`. La red de la nube no llega al sitio.
**Rubro:** tour operador local: tours compartidos desde Palenque (zona arqueológica, cascadas, Selva Lacandona, Yaxchilán y Bonampak, Tikal), traslados y paquetes. **Ciudad:** Av. Benito Juárez s/n, Col. Centro, Palenque, Chiapas. La carpeta se llama "Cañón del Sumidero", pero su sitio no ofrece ese tour: todo sale de Palenque.

## Qué le falta al clon (los "detallitos")
- Ver `qa/reporte-rediseno.json` → `antes`.
- En /tours/Palenque los 27 botones de WhatsApp van a `wa.me/9163452452`, sin el 52 de México.

## Qué tiene que lograr el sitio
1. Que el viajero vea qué tour incluye lo que quiere conocer (ruinas, cascadas, selva) y cuánto cuesta.
2. Hora de salida, duración y precio por persona de cada tour, y los traslados.
3. Escribir por WhatsApp (con el 52) con el tour elegido.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| selva | `#12332a` | Fondo oscuro y texto |
| cal | `#f6f1e6` | Fondo claro |
| jaguar | `#9b2c1f` | Botones (el rojo de su logo) |
| ocre | `#e0a43a` | Acento sobre oscuro |
| musgo | `#5a5f55` | Texto secundario |
| jade | `#1f6f55` | Etiquetas |

Contrastes: selva/cal 12.16, blanco/jaguar 7.57, ocre/selva 6.22, jaguar/cal 6.72, musgo/cal 5.82, jade/cal 5.38.
Fuentes: Bitter 700/800 (títulos, como piedra tallada) y Source Sans 3 400/700 (texto).

## Elemento memorable (uno solo)
**"¿Qué quieres ver desde Palenque?"**: un mapa esquemático (no a escala) con Palenque al centro y sus destinos: zona arqueológica, Aluxes, Misol-Ha, Agua Azul, Roberto Barrios, Metzabok, Selva Lacandona, Bonampak, Yaxchilán, Tikal y San Cristóbal. Se tocan los lugares y la lista deja solo los tours que los incluyen todos, del más barato al más caro; al elegir uno, su ruta se dibuja en el mapa. El WhatsApp lleva el nombre del tour. No se ha usado antes en el estudio.

## Secciones
1. Portada: H1 "Tours desde Palenque, Chiapas", desde $600 por persona, recogida en tu hotel.
2. ¿Qué quieres ver desde Palenque? (mapa + lista de 23 tours).
3. Traslados (Tren Maya, San Cristóbal, Flores).
4. Paquetes desde San Cristóbal.
5. Cómo funciona, qué llevar y opiniones.
6. Contacto: oficina con Google Maps, teléfono, WhatsApp, correo.
Barra fija en el celular: WhatsApp, Llamar, Cómo llegar.
