# Huasteca Viva: plan de rediseño (método 1.1)

Agencia de tours de un día por la Huasteca Potosina con base en Ciudad Valles, San Luis Potosí: seis rutas principales (Tamul, Puente de Dios, Micos, El Meco, Xilitla y Tamtoc), actividades de aventura (rafting, rappel, tirolesas, buceo) y viajes en grupo. Público: familias y grupos de amigos que llegan a Cd. Valles y quieren que alguien los lleve a las cascadas; escuelas y empresas (grupos desde 12 personas).

Fuentes: clon en `sitio/`, `investigacion/crudo.json` (inicio, Xilitla, Puente de Dios, Micos) y sus demás páginas leídas en vivo el 2026-09-29 con Jina Reader (`entregables/textos-sitio-en-vivo-2026-09-29.txt`).

## Qué le falta al clon (los "detallitos")

- El clon quedó sin estilos: 37 recursos fallidos (sus CSS y JS no se descargaron) y 2 imágenes rotas. En el original, la información está repartida en 12 páginas y cada ruta repite el mismo bloque de precio y condiciones.
- Sus fotos son buenas y propias (viajeros con chaleco en las rutas), pero la mayoría son banners panorámicos de 1200 × 578.

## Qué tiene que lograr el sitio

1. Que el visitante encuentre **su** ruta rápido: todas cuestan lo mismo, así que lo que decide es qué tan aventurero es el día.
2. Que reserve por WhatsApp con el mensaje escrito (ruta, adultos, niños y menores).
3. Que vea de una vez qué incluye el precio, qué llevar y las condiciones (recogida en hotel, clima, seguro).

## Dirección visual

| Token | Color | Uso |
|---|---|---|
| selva | `#0d3528` | Fondos oscuros, texto de botones amarillos |
| verde | `#00782a` | Botones y antetítulos (el verde del logo, oscurecido para AA) |
| río | `#0e7c78` | Nivel elegido, enlaces |
| turquesa | `#39c6bd` | El agua del medidor y acentos |
| sol | `#f0e51e` | El amarillo del logo: precios y botón principal |
| crema | `#f6f4ea` | Fondo |

Contrastes calculados en `rediseno/src/index.css` (todos AA). **Tipografía:** Bricolage Grotesque (títulos) y Nunito Sans (texto), locales con @fontsource.

## Elemento memorable

**"¿Hasta dónde te quieres mojar?"**: una figura con los brazos arriba y un medidor de agua. Eliges uno de 6 niveles (caminar y meter los pies, nadar tranquilo, entrar nadando a una cueva, remar contra corriente, saltar cascadas, rápidos clase III) y el agua sube por la figura; al lado aparece la ruta cuya actividad más mojada es esa, con sus cifras reales (280 escalones, saltos de 1, 3 y 7 m, 4.5 km remando, 7 cascadas de 1 a 8 m, 14 km de rafting), su aviso ("no recomendado si tienes problemas de rodillas"), contadores de adultos, niños de 6 a 10 y menores de 5, el total con sus precios ($1,150 y $950; menores de 5 no pagan) y el botón de WhatsApp con todo escrito.

Sale del negocio: sus seis rutas cuestan igual y se diferencian justo por cuánta agua hay (nadar en una poza, remar, saltar), y sus propias páginas avisan para quién no es cada una.

### Revisión contra lo genérico

- ¿Podría ser de cualquier agencia? No: los niveles, las cifras y los avisos son los de sus itinerarios, y el precio es su tabla de adulto/niño/menor.
- ¿Se parece a uno ya usado? No es la profundidad de un cenote (una escala de metros bajo el agua), ni asientos de lancha, ni un calendario: es un selector de intensidad que responde "qué ruta me toca".
- ¿Funciona sin JavaScript de terceros? Sí, es React local y SVG.

## Estructura

1. Encabezado con su logo, menú y WhatsApp.
2. Portada: foto de Tamul con sus viajeros, H1, recogida en hotel 9:15–9:30, precio y sus tres cifras (6+ años, 16+ sitios, 14,000+ viajeros).
3. "¿Hasta dónde te quieres mojar?" (el medidor).
4. Las seis rutas: foto, resumen, cifras, itinerario desplegable, aviso y WhatsApp.
5. Qué incluye (8 servicios).
6. + Aventura: rafting $1,500, rappel $600, tirolesas $1,150 y buceo (sin precio).
7. Más rutas: Taninul, Sótano de Golondrinas, Castillo de la Salud y Huichihuayán.
8. Grupos: desde 12 personas, servicios por separado.
9. Antes de ir: qué llevar y condiciones de viaje.
10. Contacto: oficina, horario, Google Maps, WhatsApp, teléfono, correo y redes.
11. Barra fija en el celular: WhatsApp, Llamar, Llegar.

## Qué se evita

- La insignia de Kayak (enlaza a hoteles de Cd. Valles, no a reseñas del negocio).
- Frases de seguridad absolutas ("Los lugares de la Huasteca Potosina son seguros"): se conservan solo las condiciones concretas (seguro con deducible de $500, carta responsiva, chaleco).
- Inventar precios para buceo, las "otras rutas" o el rafting de niños.
