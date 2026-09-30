# Entregables de la sesión en la nube (2026-09-27)

Nueve sitios rediseñados con el método 1.1, uno por commit. Todos pasaron `node herramientas/qa-rediseno.mjs <carpeta>` **sin problemas automáticos**: 0 desbordes, un solo H1, 0 imágenes rotas, 0 errores de consola, 0 recursos fallidos y menos de 16,000 px en celular. Cada uno tiene `CAMBIOS.md`, `OPORTUNIDADES.md`, `entregables/plan-diseno.md` y capturas en `referencias/capturas-2026-09-27/`.

> Los hashes son los de la rama local al escribir esto; si cambian al subir, busca el commit por el nombre de la carpeta. `assets/web/` no se sube: se regenera con `node rediseno/fotos-web.mjs` en cada proyecto.

| Sitio | Commit | Alto escritorio / celular | Prioridad |
|---|---|---|---|
| 369-emiliauwphoto | ebc35ce | 8,909 / 12,326 px | MEDIA |
| 634-lagranaeventos | e1cf35e | 5,714 / 7,722 px | MEDIA |
| 393-estudio070 | e458bcf | 3,950 / 6,217 px | **ALTA** |
| 614-kiumohospitalveterinario | 40e6b92 | 7,121 / 12,217 px | MEDIA |
| 43-animalitosmexico | 8aeff87 | 4,064 / 6,402 px | MEDIA |
| 498-hmoestudiobarre | 8db25ac | 4,775 / 8,169 px | MEDIA |
| 608-kenkwellness | e054fd5 | 5,932 / 10,577 px | **ALTA** |
| 78-baansingtocentral | e42ccda | 4,432 / 7,220 px | **ALTA** |
| 599-juancamaney | a21efb0 | 6,563 / 11,290 px | MEDIA |

## 369 Emilia UW Photo (Tulum y Playa del Carmen)
- **Elemento memorable:** corte vertical del cenote con una persona que sube o baja según la sesión (selva, superficie, bajo el agua, buceo), con sus paquetes y precios.
- **Hallazgo principal (MEDIA):** todos los botones de reservar llevan a un formulario; su WhatsApp solo existe dentro de un widget de terceros, y dos títulos de Services llevan a la página equivocada.
- **Confirmar:** si el +52 998 538 3661 recibe llamadas; nombre de marca (Emilia Black Box o Emilia UW Photo); precios de Diving y Beach; certificaciones de buceo; su Instagram principal.

## 634 La Grana Eventos (Zapopan)
- **Elemento memorable:** plano a escala de su jardín de 1,500 m² donde acomodas mesas de 10 y la pista según invitados y paquete.
- **Hallazgo principal (MEDIA):** no hay WhatsApp ni formulario, y sus tres celulares son texto que no se puede tocar.
- **Confirmar:** qué celular tiene WhatsApp; personas extra en el Básico; si los precios de enero de 2026 siguen vigentes; fotos recientes; horario de atención.

## 393 Estudio 070 (CDMX)
- **Elemento memorable:** hoja de contactos: tira de negativo por servicio y círculo de lápiz graso en la foto elegida, que va al WhatsApp.
- **Hallazgo principal (ALTA):** su WhatsApp usa `phone=5529694578`, sin el 52, así que WhatsApp lo lee como número de otro país y los mensajes no les llegan; además sigue la "preventa 2025".
- **Confirmar:** si el 55 2969 4578 recibe llamadas; dirección exacta en Narvarte; promoción 2026; fotos en mayor resolución.

## 614 Kiumo Hospital Veterinario (Culiacán)
- **Elemento memorable:** "El checklist de tu mascota": perro o gato, eliges salud, spa, tienda y día, y sale el WhatsApp a la sucursal correcta.
- **Hallazgo principal (MEDIA):** el WhatsApp de Kiumo Check abre el de otra sucursal y ningún teléfono se puede tocar, ni el de urgencias 24 horas.
- **Confirmar:** horarios de domingo; qué servicios tiene cada sucursal; WhatsApp general; si sigue el "Martes de gatos".

## 43 Animalitos México (CDMX, Edomex y Puebla)
- **Elemento memorable:** "Un Animalitos® cerca de ti": plano a escala de sus seis hospitales con "usar mi ubicación" y WhatsApp con hospital y motivo.
- **Hallazgo principal (MEDIA):** su único teléfono no se puede tocar, no hay datos para Google de ninguna sucursal y la página de Puebla dice "en CDMX".
- **Confirmar:** si hay un WhatsApp por sucursal; días de Prado Norte; qué hospital tiene tomógrafo y resonancia; fotos de Puebla.

## 498 HMO Estudio BARRE 7 (Hermosillo)
- **Elemento memorable:** la barra de ballet como calendario: eliges cuántas veces por semana y ves qué paquete de 30 días te conviene.
- **Hallazgo principal (MEDIA):** no publica horarios, el menú saca a la gente a otra plataforma, sigue el aviso de COVID y Google no la ve como gimnasio.
- **Confirmar:** horarios y si abren sábados; precio de la clase de prueba; cómo cuenta la vigencia; fotos recientes.

## 608 Kenkō Wellness (Naucalpan)
- **Elemento memorable:** mandala de la Fórmula KenKo 360: tocas servicios de cuerpo, mente y espíritu, se llenan sus pétalos y suma los precios publicados.
- **Hallazgo principal (ALTA):** el inicio muestra un bloque de plantilla con correo, teléfono y dirección falsos ("1250 Golden house, new york"), el botón "Llámanos" no marca y el sitio da dos direcciones y dos WhatsApp distintos.
- **Confirmar:** dirección real (Naucalpan o Interlomas); qué WhatsApp usar; precios de meditación, respiración y tarot; si mostrar los tratamientos médico-estéticos.

## 78 Baan Singto Central (Zapopan)
- **Elemento memorable:** "Arma tu semana": eliges disciplinas, se ilumina su horario real de abril de 2026 y te dice clases por semana, mensualidad y primer mes.
- **Hallazgo principal (ALTA):** la portada muestra texto de plantilla en inglés ("We create visually compelling designs…"), el único correo tiene errata (baansingtcentral) y about-us se titula "Rayo - Digital Agency" con un teléfono de Nueva York.
- **Confirmar:** cuánto se cobra por dos o más disciplinas (se supuso "todas", $1,800); si el Judo es solo privado; si el horario de abril sigue vigente; su correo correcto.

## 599 Juan Camaney (Mérida)
- **Elemento memorable:** "La rockola de la casa" con sus 5 listas reales de Spotify, propuesta de canción por WhatsApp y agenda de servicios con precio.
- **Hallazgo principal (MEDIA):** su WhatsApp se abre con "Quiero saber el precio de los producto", el teléfono no se puede tocar, anuncia sucursales en La Isla y en Interlomas que el inicio no menciona, y el menú de servicios es solo una imagen.
- **Confirmar:** si siguen solo con cita; si siguen esas sucursales y cuál es su Booksy; qué número atiende franquicias; precios vigentes; fotos del local (solo hay 5 fotos propias, de productos).
