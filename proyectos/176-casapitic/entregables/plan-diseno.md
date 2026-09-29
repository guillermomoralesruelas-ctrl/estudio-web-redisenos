# Casa Pitic: plan de rediseño (método 1.2 en la nube)

**Sitio original:** https://casapitic.mx/ (sitio reciente, con guías, eventos y comparativa de suites)
**Materia prima:** textos de inicio, Suite Pitic, Suite Kino, El Barrio y Eventos en `investigacion/crudo.json`. El clon no traía fotos; se bajaron de su almacenamiento en Supabase las seis que usa su sitio (patio; sala, cocina y recámara de Suite Pitic; terraza y entrada de Suite Kino) a `assets/originales/`. Cuatro traen credenciales C2PA de "Watermark Remover" (foto real a la que se le quitó una marca de agua con IA): se usan, pero se avisa en `CAMBIOS.md`. El dominio `casapitic.mx` no abre desde la nube. El clon (`sitio/`) no se tocó.
**Rubro:** residencia ejecutiva con dos suites independientes en Roman Yocupicio 35A, Colonia Pitic, Hermosillo, Sonora.

## Qué le falta al clon (los "detallitos")
- Ver `qa/reporte-rediseno.json` → `antes`: 3 imágenes rotas y 7 recursos fallidos (las fotos viven en Supabase).

## Qué tiene que lograr el sitio
1. Que el huésped elija entre las dos suites (planta alta o baja) con sus diferencias reales.
2. Ver cuánto sale una estancia larga (14 noches, 21 noches o un mes).
3. Pedir disponibilidad por WhatsApp con la suite y las noches.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| tinta | `#22201c` | Texto, portada y contacto |
| cal | `#f7f2ea` | Fondo |
| teja | `#a2461f` | Botones, precios y el techo del corte (sus pérgolas de teja) |
| laja | `#5f5850` | Texto secundario (el muro de piedra del patio) |
| mezquite | `#4a5d4f` | Etiqueta de planta (el verde de sus plantas) |
| adobe | `#ebe0cf` | Fondo alterno |
| atardecer | `#f0b27a` | Acento sobre oscuro |

Contrastes: tinta/cal 14.59, blanco/teja 6.12, teja/cal 5.49, laja/cal 6.28, mezquite/cal 6.35, atardecer/tinta 8.79, tinta/adobe 12.46.
Fuentes: Young Serif 400 (títulos, de trazo cálido) y Public Sans 400/600 (texto).

## Elemento memorable (uno solo)
**"¿Arriba o abajo?"**: un corte de la casa, con techo de teja, la planta alta (Suite Kino, con su terraza de pérgola al lado) y la planta baja (Suite Pitic) sobre el patio. Cada planta es un botón: muestra sus fotos, lo que la hace distinta (baños, metros, acceso, para quién es) y el precio según las noches elegidas (14, 21 o un mes, con los precios "desde" y de mes completo que publica el sitio). El WhatsApp lleva la suite y las noches. No se ha usado antes en el estudio.

## Secciones
1. Portada con el patio: H1 "Hospedaje ejecutivo en Hermosillo, en una casona de Colonia Pitic".
2. ¿Arriba o abajo?
3. Para trabajar desde aquí (amenidades y reglas de la casa).
4. Colonia residencial, todo cerca (tiempos en auto y eventos).
5. Reserva directo.

## Revisión contra lo genérico (segunda pasada)
- Nada de skyline ni fotos de banco de ejecutivos: solo la casa.
- Los precios "desde" se multiplican por las noches y se dicen "desde"; para menos de 14 noches se remite a WhatsApp, porque su sitio no los publica.
- Sin etiquetas en mayúsculas sobre cada sección, sin numeración 01/02 y sin puntos medios como separadores (su sitio usa "Hermosillo · Sonora").
- Se dejaron fuera las guías largas del sitio (siguen en su dominio) para que la página sea de reserva.
- Sin animaciones salvo el cambio de estado de los botones (CSS, respeta `prefers-reduced-motion`).
