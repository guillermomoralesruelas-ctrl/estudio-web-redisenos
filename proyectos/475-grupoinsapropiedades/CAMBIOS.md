# Grupo INSA Inmobiliaria & Avalúos: diferencias entre el rediseño y el sitio original

> Este archivo explica, para personas y para cualquier IA que retome el proyecto, **por qué el rediseño no es igual al sitio original** y qué se hizo con cada parte. Léelo antes de modificar `rediseno/`.

| Dato | Valor |
|---|---|
| Sitio original | https://www.grupoinsapropiedades.org/ (plantilla "Milan" de EasyBroker con páginas propias) |
| Método | **1.2 en la nube** (lote 10): el clon trae miniaturas e imágenes rotas; se leyeron inicio, las cuatro páginas de avalúos, ¿Quiénes somos?, las fichas de Elsa y Mary, FAQ, Licencia, PROFECO, AMPI, Mejoravit, Contacto y todo el catálogo (114 en venta y 6 en renta), y se bajaron 36 fotos de portada, 3 fotos de su oficina, 2 retratos del equipo y el logotipo a `assets/originales/` |
| Fecha | 2026-10-12 |
| Clon (antes) | `sitio/index.html`: no se modifica, es la referencia |
| Rediseño (después) | `rediseno/` (código) y `rediseno/dist/` (compilado, se abre en XAMPP) |
| Ver en XAMPP | http://localhost/project-1-25092026/proyectos/475-grupoinsapropiedades/rediseno/dist/index.html |
| Plan de diseño | `entregables/plan-diseno.md` |
| Antes y después | `entregables/comparacion-antes-despues.jpg` |
| Métricas de QA | `qa/reporte-rediseno.json` |

## En una línea

La inmobiliaria y unidad de avalúos de Ensenada en una sola página: su catálogo de 120 propiedades con filtros y fotos grandes, y una "hoja de trámite" que responde "¿para qué necesitas el avalúo?" con el tipo de avalúo, quién lo firma, qué papeles llevar y cómo se cobra, tal como lo publican repartido en cuatro páginas.

## Qué estaba roto o incompleto en el clon

| Problema en el clon | Cómo quedó en el rediseño |
|---|---|
| Miniaturas de 450 px, 13 imágenes rotas y desborde horizontal (416 px en escritorio, 1,306 px en celular) | Fotos de su catálogo a 1200 px en `.webp` (`rediseno/fotos-web.mjs`), 0 rotas, sin desborde |
| Solo la portada: las páginas de avalúos, equipo y contacto no venían | Se leyeron en el sitio en vivo y su contenido está en `rediseno/src/data/content.ts` |

## Qué se cambió (mismo contenido, otra forma)

- Las páginas "Avalúos", "Avalúos Infonavit", "Avalúos Bancarios" y "¿Cuánto se cobra un avalúo?" se juntan en la hoja de trámite: cada propósito (compraventa, Infonavit, Fovissste, banco, parcela, valor comercial, ISR, renta, juicio) lleva al tipo de avalúo que su propio texto indica.
- El catálogo se agrupa en casas, terrenos y ranchos, frente o vista al mar, preventa y renta, con el conteo de las 120 publicadas; la muestra con foto es de 36 y cada tarjeta enlaza a su ficha en EasyBroker.
- Las credenciales de "¿Quiénes somos?", Licencia, PROFECO y AMPI se ordenan en un bloque "Quién firma" con sus números de registro.
- La portada usa la foto aérea de su terreno frente al mar en Playa Hermosa en lugar del buscador de la plantilla.
- Se corrigió la errata "$,1700" de la tarifa Infonavit como "$1,700".

## Qué se agregó (no existía en el original)

- **"¿Para qué necesitas el avalúo?"** (elemento memorable): nueve trámites; al elegir uno se llena una hoja tipo dictamen con el avalúo que corresponde, el registro con que se firma, la cobertura, cómo se cobra (solo las tarifas que publican; en los demás dice "cotízalo por WhatsApp"), la lista numerada de papeles y un WhatsApp con el trámite escrito.
- Filtros del catálogo con conteos (cálculo del estudio sobre su catálogo del 2026-10-12: 67 casas, 41 terrenos y ranchos, 17 frente o vista al mar, 9 en preventa, 6 en renta).
- Equipo con WhatsApp directo de cada persona; horario visible; barra fija en el celular (llamar, avalúo, WhatsApp); JSON-LD `RealEstateAgent`, title, description e imagen para compartir.
- Textos del estudio: titulares, introducciones y textos alternativos.

## Qué se quitó o no se usó

- Formularios de contacto y propietarios (con hCaptcha) y el buscador de EasyBroker: se sustituyen por WhatsApp.
- El bloque de hashtags del inicio ("#inmobiliaria, #bienes raices…").
- El texto largo de la FAQ sobre la calidad de vida en Ensenada; se conservan tres preguntas cortas.
- Fotos de portada con la marca de agua de Grupo INSA sobre la imagen, renders y mapas; los certificados escaneados (Licencia, NAR, PROFECO) se citan como texto.

## Qué se conserva al pie de la letra

- Celular y WhatsApp 646 947 6421, teléfonos 646 175 3339 y 646 178 0065, info@grupoinsa.org, Calle 15 #577 Int. 3-B, Zona Centro, Centro Profesional Quince, Ensenada, C.P. 22800; horario lunes a viernes 9 a 17 h y sábados 9 a 14 h; Facebook, Instagram, TikTok y YouTube.
- "Más de 12 años en operaciones inmobiliarias y 16 años en valuación", los servicios y las cinco asociaciones (AMPI Ensenada, APIE, CEPIBC, COPICE, COVE).
- Registros: licencia ENS20240001, PROFECO 7234-2022, RPR-003/14 Ensenada, RVF-301 Tijuana, PV-163/2021 Rosarito, PJBC 000518, DRO/DRP #808.
- Las tarifas publicadas de avalúo fiscal, Infonavit y Fovissste, y el trámite Mejoravit ($3,000).
- Elsa Tello (646 150 9084) y María de Jesús Grajeda (646 227 5371) con sus correos.
- Precio, moneda, operación, recámaras, baños y m² de cada propiedad tal como los publica.

## Pendiente de confirmar con el cliente

- Foto de María de Jesús Grajeda (su ficha no tiene; se muestran sus iniciales).
- Tarifas de los avalúos hipotecario, bancario, comercial, referido, judicial y de rentas (no las publican).
- Años de experiencia: el sitio dice 12 y 16 en el inicio, 15 en "¿Quiénes somos?" y 8 (desde 2016) en avalúos bancarios; se usaron los del inicio.
- Si el número (646) 268 4885 de la página Mejoravit sigue activo; no se usó.
- Los precios cambian: los datos son del 2026-10-12.

## Dónde está cada cosa

- Textos, avalúos y equipo: `rediseno/src/data/content.ts`; propiedades y conteos: `rediseno/src/data/propiedades.ts`.
- Fotos: `assets/originales/` y `assets/web/` (`rediseno/fotos-web.mjs`).
- Capturas: `referencias/capturas-2026-10-12/`.
