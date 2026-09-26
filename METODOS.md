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
| 540-hotelpomelo | Hotel Pomelo (Troncones) | 1.2 | En curso: esperando imágenes | `/proyectos/540-hotelpomelo/rediseno/dist/index.html` | Reemplaza a 172. El sitio es Squarespace: el clon no trae imágenes (las carga del CDN) y la nube no puede descargarlas. Se bajan en la PC con `cola/pendientes/20260926-2340-descargar-imagenes-pomelo.ps1` → `assets/pomelo/`; después se sigue el 1.1 con `--public ../assets/pomelo` |

URL base de XAMPP: `http://localhost/project-1-25092026`

## Candidatos siguientes (hospedaje con sitio propio, clon funcional)

- Con fotos en el clon (1.1): 530-hotelizkina (Cozumel; fotos de habitaciones pequeñas), 514-hotelsuitesel (La Paz), 623-labovedahotel (Nochistlán). Revisar antes con `candidatos-1.1.mjs`.
- Sin fotos en el clon (1.2, descargar en la PC primero): 532-hotelklimt (solo 2 fotos), 534-hotelmaela (0).
