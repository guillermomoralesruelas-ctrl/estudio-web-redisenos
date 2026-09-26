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

URL base de XAMPP: `http://localhost/project-1-25092026`

## Candidatos siguientes (hospedaje con sitio propio, clon funcional)

- Con fotos en el clon (1.1): 530-hotelizkina (Cozumel; fotos de habitaciones pequeñas), 514-hotelsuitesel (La Paz), 623-labovedahotel (Nochistlán). Revisar antes con `candidatos-1.1.mjs`.
- Sin fotos en el clon (1.2, descargar en la PC primero): 532-hotelklimt (solo 2 fotos), 534-hotelmaela (0).
