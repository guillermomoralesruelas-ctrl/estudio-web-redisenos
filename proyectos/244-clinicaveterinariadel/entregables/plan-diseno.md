# Clínica Veterinaria del Dr. Memo: plan de rediseño (método 1.2 en la nube)

**Sitio original:** https://www.drmemoveterinario.com.mx/ (sitio ADN de Sección Amarilla sobre Duda; páginas: inicio, servicios veterinarios, visítanos). Clínica para perros y gatos en el Centro de Querétaro, 15 años de experiencia, dos médicos veterinarios zootecnistas con cédula.

**Materia prima:** el clon no traía fotos. En la nube se bajaron del sitio en vivo 12 fotos reales (800 px) a `assets/originales/`: laboratorio con microscopio, dos consultorios, área de procedimientos, recepción y la tienda (farmacia, alimentos, accesorios, correas, antipulgas). No se usa la foto del perro salchicha con veterinaria sobre fondo blanco (de banco). Textos de `investigacion/crudo.json` (3 páginas).

**Contacto real:** tel. 442 224 3800; citas y WhatsApp 442 172 1841; veterinariamemo@yahoo.com.mx; Calle Ignacio M. Altamirano 54 Nte., Col. Centro, Querétaro 76029; coordenadas del mapa de su sitio 20.597410, -100.388890.

## Qué le falta al clon

- `qa-rediseno.mjs` (antes): escritorio 3,992 px, móvil 5,330 px con **378 px de desborde**, 7 imágenes rotas, 13 errores de consola y 6 recursos fallidos (scripts de Duda y Snipcart).

## Qué tiene que lograr el sitio

1. Saber si está abierta y cuándo (abre fines de semana y cierra de 3 a 5 entre semana).
2. Apartar cita por WhatsApp con día, hora, mascota y motivo.
3. Ver todo lo que hace (consulta, preventiva, cirugía, estética, viajes, estudios, cremación) y su tienda.

## Dirección visual

Rojo `#DB232C` y negro de su logotipo; rojo oscuro `#A8141C` para texto y botones sobre claro (AA); crema `#F7F3EE` para alternar; ámbar solo para la hora elegida.
Tipografía: **Archivo** 700/800 (títulos, recia como el "Dr. Memo" del logotipo) y **Source Sans 3** 400/600 (texto).

## Elemento memorable: "La agenda del Dr. Memo"

Su horario es lo más particular del negocio: martes a sábado de 10 am a 3 pm y de 5 pm a 8 pm, domingos de 10 am a 3 pm, lunes cerrado ("damos atención veterinaria los fines de semana").

- Con la hora de Querétaro dice si está abierta ahora y cuándo cierra o abre.
- Siete días a partir de hoy; el lunes aparece apagado y el domingo dice "hasta 3 pm".
- Las horas del día elegido como botones, con el hueco "cerrado de 3 a 5"; las de hoy que ya pasaron, tachadas.
- Perro o gato y uno de sus ocho motivos (de su lista de servicios); una ficha arma el WhatsApp: "Quiero apartar una cita para mi gato: estética, el sábado 10 de octubre a las 11 am. ¿Tienen lugar?"

No es el reloj de gimnasio 24/7 ni el horario de tours: es una agenda de citas con su horario partido.

## Estructura

Nav con "Citas: 442 172 1841" · Hero con su frase, su lema y tres fotos · La agenda · Servicios (con "¿Viajas con tu mascota?") · Estética canina y felina · La clínica y su tienda, médicos con cédula y formas de pago · Visítanos (dirección, teléfonos, correo, foto que abre Maps) · Pie con horario · Barra fija en el celular.

## Revisión contra lo genérico

- Fotos reales de la clínica y de su tienda; nada de banco.
- Sin galerías con pies "CLÍNICA VETERINARIA DEL DR. MEMO - …" ni botones vacíos.
- El rojo se reserva para acciones, la tarjeta de viajes y la sección de contacto.
