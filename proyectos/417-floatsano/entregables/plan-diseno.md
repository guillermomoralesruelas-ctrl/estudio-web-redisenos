# Float Sano: plan de rediseño (método 1.1)

**Sitio original:** https://floatsano.com/ (español e inglés mezclados)
**Materia prima:** clon en `../sitio/` (imágenes en `sitio/assets/wp-content/uploads/2023/04/`), textos de inicio, contacto, flotación, sauna y masaje en `investigacion/crudo.json`, su mapa de Google en `investigacion/original.html`. La red de la nube no llega al sitio.
**Rubro:** spa holístico familiar: flotación (2 cabinas), sauna infrarrojo, masajes, faciales, parejas y fiestas privadas. **Ciudad:** Hernández Macías 12, Centro, San Miguel de Allende, Guanajuato.

## Qué le falta al clon (los "detallitos")
- Ver `qa/reporte-rediseno.json`. Su portada dice "🚧 Sitio en remodelación 🚧"; las páginas mezclan español e inglés.
- Fotos propias: fachada, cabinas, flotando, sala y visitantes. Las de masaje y sauna son de banco.

## Qué tiene que lograr el sitio
1. Entender qué es flotar y reservar la primera sesión por WhatsApp con sus preferencias.
2. Ver precios de flotación, sauna y masajes.
3. Dirección, horario y su mapa de Google.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| noche | `#1d2b5a` | El azul profundo de sus cabinas |
| flota | `#2f5fd0` | El azul de la luz de la cabina |
| luna | `#9fb8ff` | Acento sobre noche |
| sal | `#f6f1e8` | Fondo claro (sales de Epsom) |
| cantera | `#a4461f` | La terracota de las fachadas de San Miguel |
| ambar | `#f2c46a` | La luz amarilla de la otra cabina |

**Tipografía:** Lora (títulos) y Karla (texto), locales con @fontsource.

## Elemento memorable
**"Tú decides cómo flotar":** su página dice que cada cabina tiene tapa que se abre o cierra, luces interiores y opción de música. Una cabina dibujada en corte (30 cm de agua con 500 kg de sales de Epsom) responde a tres interruptores: tapa abierta o cerrada, luz encendida o apagada y música sí o no; y a la duración (45 min para personas nuevas, 75 min para quien ya flota o medita). El precio de 45 min ($1,000) aparece al elegirla; el de 75 min se pregunta. El WhatsApp sale con sus preferencias escritas.

## Estructura
1. Encabezado con nombre, secciones y WhatsApp.
2. Portada: H1, "Spa holístico en el Centro de San Miguel de Allende", foto de la cabina con luz azul.
3. Tú decides cómo flotar (elemento memorable) con "Qué saber para tu cita".
4. Sauna infrarrojo y masajes con precios.
5. La historia (negocio familiar) y su filosofía, con fotos de la fachada y la sala.
6. Reseñas de Google (las de sus servicios).
7. Contacto: dirección, horario, teléfonos, correo y su mapa de Google (iframe). Barra fija en el celular.

## Qué se evita (revisión contra lo genérico)
- Promesas de salud de su sitio ("fortalece el sistema inmunológico", "combate infecciones", "baja la presión", "trata la ansiedad y la depresión"): solo cómo se siente y cómo funciona.
- El aviso de remodelación y la reseña de una clase de yoga.
- Fotos de banco de masaje y sauna.
