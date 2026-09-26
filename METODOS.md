# Registro de métodos por sitio

Qué método se usó en cada proyecto, para poder revisar y comparar resultados. **Actualiza esta tabla cada vez que termines, descartes o empieces un rediseño.**

Qué significa cada método: ver `INSTRUCCIONES-METODO-1.1.md`, sección 2.
Los ~650 proyectos del fabricador que no aparecen aquí son solo **clones (método 3)**, sin rediseño todavía.

| Carpeta | Negocio | Método | Estado | Ver (XAMPP) | Notas |
|---|---|---|---|---|---|
| 01-10experiences | 10 Experiences Tour (Cozumel) | 1 | Terminado, etiqueta git `10experiences-v1` | `proyectos/01-10experiences/sitio/` (Vite: `npm run dev`) | Primer sitio; sin clon, reconstruido a mano |
| 02-1mrfitness | 1MR Fitness (Hermosillo) | 1.1 | Terminado | `/proyectos/02-1mrfitness/rediseno/dist/index.html` | Ver `CAMBIOS.md` |
| 175-casaorigenes | Casa Orígenes (Xalapa) | 1.1 | Terminado | `/proyectos/175-casaorigenes/rediseno/dist/index.html` | Ver `CAMBIOS.md` |
| 641-lapuertaroja | La Puerta Roja Hotel Boutique (Álamos) | 1.1 | Terminado | `/proyectos/641-lapuertaroja/rediseno/dist/index.html` | Ver `CAMBIOS.md`. El sitio actual tiene spam de casinos en /Nosotros: avisar al cliente |
| 172-casamariahotel | Casa Maria Hotel (Puerto Vallarta) | — | Descartado | — | La URL es de un sitio de reservas de terceros, no del hotel |
| 540-hotelpomelo | Hotel Pomelo (Troncones) | 1.2 | Terminado | `/proyectos/540-hotelpomelo/rediseno/dist/index.html` | Ver `CAMBIOS.md`. Reemplaza a 172. Squarespace: las 143 imágenes se bajaron en la PC a `assets/pomelo/`; el rediseño usa copias .webp en `assets/pomelo-web/` (`rediseno/fotos-web.mjs`). Su botón "Escríbenos" tiene el WhatsApp incompleto: avisar al cliente |
| 521-hotelboutiquepineda | Hotel Boutique Pineda (Rincón de Guayabitos) | 1.1 | Terminado | `/proyectos/521-hotelboutiquepineda/rediseno/dist/index.html` | Ver `CAMBIOS.md`. Fotos del clon a .webp en `assets/web/` (`rediseno/fotos-web.mjs`). Su página de suite tiene texto de plantilla en inglés y la fachada parece generada con IA: avisar al cliente |
| 526-hotelesfray | Hoteles Fray: Fray Junípero y Fray Select (Tepic) | 1.1 | Terminado | `/proyectos/526-hotelesfray/rediseno/dist/index.html` | Ver `CAMBIOS.md`. Dos hoteles en una página: el que eliges cambia colores, reservas (Cloudbeds), WhatsApp y teléfono. Capturas en `referencias/capturas-2026-09-26/` |
| 538-hotelpacificpalace | Hotel Pacific Palace (Mazatlán) | 1.1 | Terminado | `/proyectos/538-hotelpacificpalace/rediseno/dist/index.html` | Ver `CAMBIOS.md`. Fotos del clon a .webp en `assets/web/` (`rediseno/fotos-web.mjs`). Reloj de 24 horas con los horarios del todo incluido a la hora de Mazatlán. Sus noticias abren páginas en blanco y la política de cancelación lleva el nombre de Star Palace: avisar al cliente. Capturas en `referencias/capturas-2026-09-26/` |
| 514-hotelsuitesel | Hotel & Suites El Moro (La Paz) | 1.1 | Terminado | `/proyectos/514-hotelsuitesel/rediseno/dist/index.html` | Ver `CAMBIOS.md`. Fotos del clon a .webp en `assets/web/` (`rediseno/fotos-web.mjs`). Selector "Una noche, una semana o toda la temporada": total con el precio directo o la modalidad de Larga Estancia con WhatsApp para cotizar. Sitio bien hecho; los WhatsApp de sus actividades preguntan por otra actividad: avisar al cliente. Capturas en `referencias/capturas-2026-09-26/` |

URL base de XAMPP: `http://localhost/project-1-25092026`

## Candidatos siguientes (hospedaje con sitio propio, clon funcional)

- Con fotos en el clon (1.1): 530-hotelizkina (Cozumel; fotos pequeñas), 549-hoteltradicional y 522-hotelbravotepic (pocas fotos propias). Revisar antes con `candidatos-1.1.mjs`.
- Sin fotos en el clon (1.2, descargar en la PC primero): 532-hotelklimt (solo 2 fotos), 534-hotelmaela (0).
