# Entregables de la sesión en la nube, lote 2 (2026-09-27)

Lote de 10 sitios de `INSTRUCCIONES-NUBE.md`. Se empezó con seis agentes en paralelo; a petición del usuario se detuvieron los tres más atrasados y el resto del lote pasó a la PC. La nube cerró **3 rediseños y 2 descartes**. Los tres rediseños pasaron `qa-rediseno.mjs` sin problemas: 0 desbordes, un solo H1, 0 imágenes rotas, 0 errores de consola y 0 recursos fallidos.

| Sitio | Resultado | Commit | Alto escritorio / celular | Prioridad |
|---|---|---|---|---|
| 431-fotoproducto | Terminado | 51429e4 | 5,741 / 9,134 px | MEDIA |
| 114-bizenizaspa | Terminado (está en Puebla, no en CDMX) | 5993ab9 | 7,093 / 11,014 px | MEDIA |
| 390-espacioshabitatbienes | Terminado | 1ced266 | 3,923 / 6,831 px | **ALTA** |
| 316-distribuidoraeanpets | Descartado, `sin-fotos` | b32d1ab | — | — |
| 469-grupoandersons | Descartado, `cadena` | 603d772 | — | — |
| 384-escueladefotografia | Empezado en la nube (rama `nube2-a`); lo terminó la PC | — | — | — |
| 326-domusvallartafine | Empezado en la nube (rama `nube2-b`); lo termina la PC | — | — | — |
| 35-altheawellnessclinic, 579-integra360, 353-elclaustro | Sin empezar en la nube; los toma la PC | — | — | — |

Los dos descartes también están en `DESCARTADOS.md` con su motivo.

## 431 Foto Producto (Zapopan)
- **Elemento memorable:** "Arma tu día en el estudio". Un dibujo del set (ciclorama, luces con softbox, producto al centro) donde eliges medio día o día completo con sus horas y precios reales, y sale el WhatsApp con la reservación.
- **Hallazgo principal (MEDIA):** el teléfono y el correo no se pueden tocar, la página de Servicios tiene una descripción de "sitio en construcción" y la renta de medio día da dos horarios distintos.
- **Confirmar:**
  - Horas del medio día: el sitio dice "3 a 5 hrs" y también "de dos a 4 horas".
  - Si la iluminación de 8 h cuesta más en una renta de 10 h.
  - Colores de ciclorama disponibles.
  - Si los totales llevan IVA.
  - Fotos del estudio y logos de clientes con permiso.

## 114 Bizé Nizá Spa (Puebla)
- **Elemento memorable:** "¿Qué quieres consentir hoy?". Una figura con diez zonas del cuerpo; al tocar una aparecen los servicios de su carta con precio y duración reales, y se arma el WhatsApp. Sus 43 servicios tienen nombres en lenguas indígenas que no dicen qué hacen.
- **Hallazgo principal (MEDIA):** sus 7 páginas tienen el título vacío y ninguna tiene description, H1 ni JSON-LD. Además tiene precios que se contradicen en la misma ficha, tres servicios a $0.00, la promoción de junio aún publicada y un teléfono que no se puede tocar.
- **Confirmar:**
  - La zona del cuerpo de cada servicio (la dedujo el agente de sus descripciones).
  - Los precios dobles y los de $0.00.
  - Qué servicios hay a domicilio.
  - Si las fotos son suyas.
  - Cómo se compra el certificado de regalo.

## 390 RE/MAX Espacios Hábitat (Hermosillo)
- **Elemento memorable:** "Metro a metro". Sus nueve inmuebles destacados, dibujados a la misma escala sobre un plano con cuadrícula de 10 m y una cancha de fútbol de referencia. Cada uno abre su ficha con WhatsApp.
- **Hallazgo principal (ALTA):**
  - Un edificio "en Venta" aparece como "En Renta" y sin precio.
  - La casa de Montecarlo tiene dos precios.
  - El departamento de Lomas Altas tiene dos superficies.
  - Siguen a la vista textos de demostración de la plantilla.
- **Confirmar:**
  - El precio real de Montecarlo (se usó $2,300,000).
  - Si el edificio de Casa Grande se vende o se renta (se usó venta en $14,000,000).
  - Los m² de Lomas Altas.
  - Fotos reales de Camino del Seri y de la obra en Obregón.
  - Si el 662 115 0662 es el WhatsApp de la oficina.
  - Qué permite la franquicia RE/MAX sobre el uso de su marca.
