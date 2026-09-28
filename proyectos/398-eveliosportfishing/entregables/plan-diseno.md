# Evelio Sport Fishing: plan de rediseño (método 1.1)

**Sitio original:** https://www.eveliosfishing.com/ (una página hecha con el creador de sitios de IONOS)
**Materia prima:** clon en `../sitio/`, `investigacion/original.html` y `crudo.json`; revisión del sitio en línea con `curl` el 2026-09-28.
**Rubro:** pesca deportiva, paseos en lancha y avistamiento de ballenas y delfines. **Ciudad:** Puerto Escondido, Oaxaca.

## Qué le falta al clon (los "detallitos")
- qa-rediseno.mjs, parte "antes" (2026-09-28): el clon se queda en blanco (0 px de alto y 1 error de consola): el creador de IONOS arma la página con JavaScript que no quedó en el clon.

## Qué tiene que lograr el sitio
1. Que el turista sepa qué salida puede hacer en el mes de su viaje, cuánto cuesta y cuánto le toca a cada quien, y escriba por WhatsApp.
2. Mostrar sus capturas reales, su lancha y el premio del torneo.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| océano | #0b2a3a | El Pacífico profundo: encabezado, boleto y contacto. Blanco encima 14.93:1; dorado 8.91:1 |
| marea | #1f6f86 | El azul verdoso de su logo (muestreado #308090): selección y temporada. Blanco encima 5.71:1; sobre espuma 5.22:1 |
| dorado | #f2c230 | El amarillo del dorado, su pez del torneo: precios y botón principal (océano encima 8.91:1) |
| palma | #1d6b43 | WhatsApp. Blanco encima 6.49:1 |
| espuma | #eef6f8 | Fondos. Gris #4f6470 encima 5.66:1 |

**Tipografía:** Anybody ancha y pesada para títulos (como las letras de su logo) e Inter para texto.

## Elemento memorable
**"¿Qué hay en el mar ese mes?"**: una tira de 12 meses (con la temporada de ballenas de noviembre a marzo marcada), cuántos van (1 a 10) y sus cuatro salidas con foto. Las ballenas se apagan fuera de temporada; la pesca muestra $7,000 por salida y "le toca a cada quien"; el paseo cambia de $1,500 (2 a 5) a $2,000 (7 a 10) y avisa que no publican precio para 6; ballenas $700 por persona. El boleto manda mes, salida y personas por WhatsApp.
Sale del negocio: su sitio publica precios por grupo y por persona y dice que las ballenas son de noviembre a marzo; el turista planea desde otra ciudad y lo primero que decide es el mes.
**Por qué no repite otros:** 456 cuenta pasajeros de trajinera y 612 suma clases y noches; aquí manda **el calendario del mar** (temporada) más el reparto del costo.
**Límite honesto:** su sitio solo marca temporada para ballenas; el boleto lo dice y pide confirmar fecha, clima y precio.

## Estructura
1. Encabezado con su logo, enlaces y WhatsApp.
2. Portada: H1 "Pesca deportiva, ballenas y playas en lancha, con Evelio" sobre su foto de la ballena frente a Puerto Escondido, y el premio del torneo.
3. ¿Qué hay en el mar ese mes? (el elemento).
4. Lo que sale del agua: quiénes son, el premio y 4 fotos de capturas y clientes.
5. Reserva con Evelio.
6. Pie y barra fija en el celular.

## Qué se evita (revisión contra lo genérico)
- Títulos en mayúsculas ("CONOCE NUESTROS PAQUETES"), numeración y puntos medios.
- "El mejor de los servicios", "sin igual": superlativos.
- Fotos de banco (delfín y marlín saltando) y los peces vela ilustrados.
