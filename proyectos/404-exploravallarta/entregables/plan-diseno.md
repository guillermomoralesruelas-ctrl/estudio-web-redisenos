# Explora Vallarta: plan de rediseño (método 1.1)

**Sitio original:** https://www.exploravallarta.com/ (español, con versión en inglés)
**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/img/`), textos de inicio, nosotros, ballenas, Islas Marietas y delfines en `investigacion/crudo.json`, contacto en `investigacion/resumen.json`. La red de la nube no llega al sitio: no se pudo leer en vivo.
**Rubro:** ecoturismo con biólogos marinos (ballenas, Marietas, delfines, tortugas, snorkel, kayak, montaña). **Ciudad:** Pampano 9, Cruz de Huanacaxtle, Nayarit (Bahía de Banderas); la base decía Nuevo Vallarta.

## Qué le falta al clon (los "detallitos")
- Ver `qa/reporte-rediseno.json`. El sitio es largo, con un catálogo de diez tours y páginas por tour con precios, horarios y FAQ.

## Qué tiene que lograr el sitio
1. Cotizar y reservar por WhatsApp con tour, fecha y personas.
2. Que se note la diferencia que ellos mismos venden: biólogos marinos, grupos pequeños, ética con la fauna y apoyo a la conservación.
3. Precios, temporadas y reglas (lunes cerrado en Marietas) visibles.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| abismo | `#082b3a` | Fondo oscuro del mar |
| bahia | `#0e5f7a` | El azul de su logo, oscurecido: títulos y botones |
| espuma | `#eef7f8` | Fondo claro (de su `#f0f7f9`) |
| celeste | `#7fd3e6` | Acentos sobre abismo |
| sol | `#ffcc00` | El amarillo de su sitio: botón principal sobre oscuro |
| selva | `#006b53` | El verde de su sitio (`#00af87`), oscurecido |

**Tipografía:** Fraunces (títulos) y Nunito Sans (texto), locales con @fontsource. Su sitio usa una sans genérica.

## Elemento memorable
**"¿Qué tan cerca de la ballena?":** un dibujo de la bahía visto desde arriba con una ballena jorobada al centro y tres anillos: 60 m (su lancha, de tamaño menor, autorizada), 80 m (barcos grandes) y 240 m (embarcaciones sin autorización), según la NOM-131-SEMARNAT-2010 que citan en su FAQ. Tocas cada lancha y se explica a qué distancia queda y por qué; junto a ella, la temporada (8 de diciembre al 23 de marzo), el hidrófono y los tres comportamientos de su guía (salto, coletazo, espionaje). Es su argumento de venta más fuerte y es un dato real.

## Estructura
1. Encabezado con logo, secciones, EN y WhatsApp.
2. Portada: H1, "Tours guiados por biólogos marinos", foto de la cola de ballena, tres datos.
3. ¿Qué tan cerca de la ballena? (elemento memorable), con precio del tour de ballenas.
4. Expediciones con precio: ballenas, Marietas (clásico y con Playa del Amor, brazalete CONANP, 20% desde 4 personas, lunes cerrado) y delfines (horarios); y el resto del catálogo con duración.
5. Reserva por WhatsApp: tour, fecha, adultos y niños.
6. Conservación: RABEN, Nado por las Ballenas, Red de Varamientos, BiologosMarinos.org, 700 personas capacitadas.
7. Guías: Biól. Jorge Morales, Cap. José Ángel y Fabiola Flores.
8. Opiniones y FAQ.
9. Contacto con dirección, horario y Maps. Barra fija en el celular: WhatsApp, Llamar, Cómo llegar.

## Qué se evita (revisión contra lo genérico)
- Las fotos de buceo, canopy y San Sebastián (dudosas), y emojis en títulos.
- "Garantizado": se deja su 95% y la garantía de repetir el tour tal como la escriben, sin agrandarla.
- Tarjetas idénticas para los diez tours: los tres con precio van completos y el resto en una lista.
