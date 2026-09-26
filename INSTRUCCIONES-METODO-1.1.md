# Instrucciones para continuar los rediseños (método 1.1)

> **Para cualquier Claude u otra IA que abra este estudio en otra cuenta o sesión.** Este documento describe qué se está haciendo, para quién, cómo, con qué herramientas y con qué reglas. Léelo completo antes de tocar un proyecto. Es la continuación directa del trabajo de la sesión del 2026-09-26.
>
> Lectura obligatoria en este orden: **este archivo**, luego `CLAUDE.md` (reglas del estudio), luego `METODOS.md` (qué sitio lleva qué método), `OPORTUNIDADES.md` (a qué clientes conviene acercarse primero) y, en el proyecto que vayas a tocar, su `CAMBIOS.md` y su `OPORTUNIDADES.md`.

---

## 1. Qué se hace, para quién y para qué

- **Quién:** Guillermo (el dueño del estudio). Trabaja en Windows con XAMPP. El estudio vive en `C:\xampp\htdocs\project-1-25092026`. Habla español y se le responde en español, claro y sin tecnicismos innecesarios.
- **Qué:** rediseñar los sitios web de **negocios locales mexicanos** (restaurantes, hoteles, gimnasios, spas, tours, inmobiliarias…). Salen de una base de ~1,173 negocios que tienen chatbot (fuente: `http://localhost/16092026-chats/admin/bots_data.php`).
- **Para qué:** para enseñarle a cada negocio una **propuesta de sitio nuevo**, más moderno y más útil para vender, hecha con sus propias fotos y sus propios textos. Más adelante se integrará un bot de WhatsApp (BuilderBot); eso está **pendiente** y no forma parte de este proceso.
- **Resultado por sitio:** un sitio de una página, que se abre en XAMPP sin servidor de desarrollo; un documento de cambios (`CAMBIOS.md`); un documento de **oportunidades de venta** (`OPORTUNIDADES.md`) con los argumentos para acercarse al negocio; un plan de diseño; y una lámina "antes y después" para el cliente.

## 2. Los métodos (y por qué existe el 1.1)

| Método | Qué es | Cuándo se usa |
|---|---|---|
| **1** | Reconstrucción guiada, a mano, desde cero (investigar el sitio, descargar imágenes, escribir el sitio). | Solo se usó en `01-10experiences`. |
| **2** | Panel (`panel.cmd` → http://localhost:4000) que llama a Claude Code sin pantalla por fases. | Diseñado, nunca se usó en producción. |
| **3** | El **fabricador**, un proceso de otra sesión: scrapea con Jina y **clona** cada sitio en `proyectos/<NN-slug>/sitio/` e `investigacion/`. | Generó las carpetas 02 a ~654. **Son copias del sitio actual, no rediseños**, y tienen "detallitos": estilos o scripts faltantes, imágenes rotas, desbordes, carruseles muertos. |
| **1.1** | **Rediseño a mano usando el clon del método 3 como materia prima.** Se toman sus imágenes y sus textos y se construye un sitio nuevo en `rediseno/`, corrigiendo todo lo roto. | **El método actual.** Para clones con calidad `funcional`. |
| **1.2** | El mismo proceso que el 1.1, pero ejecutado **en la PC de Guillermo** (Claude Code en la terminal o el panel), porque desde la nube no se llega al sitio o el clon está roto o incompleto. En ese caso se recupera el contenido con `herramientas/investigar.mjs` y `descargar-assets.mjs`. | Para sitios bloqueados para la nube, o con clon `complejo` o `reparable`. Se anota en `METODOS.md`. |

**Regla:** cada vez que empieces, termines o descartes un sitio, actualiza `METODOS.md`.

## 3. Reglas que no se rompen

1. **Nunca inventar datos del negocio:** precios, horarios, teléfonos, reseñas, premios, fotos del equipo o nombres. Si falta algo, se deja fuera o como `[PENDIENTE]`, y se anota en `CAMBIOS.md` → "Pendiente de confirmar con el cliente".
2. **Los textos del negocio se copian del original**, de `investigacion/crudo.json`. Se puede reordenar y recortar. Todo texto nuevo que escribas (títulos de sección, microcopy de botones, textos del elemento distintivo) se declara en `CAMBIOS.md` → "Qué se agregó".
3. **No se modifica `sitio/`** (el clon): es la referencia del "antes". Tampoco `investigacion/`.
4. **El fabricador puede seguir corriendo.** No escribas en `datos/fabricador.db` ni toques sus scripts (`fabricador.mjs`, `clonar.mjs`, `_clonar-*.mjs`, `analizar-calidad.mjs`, etc.). Solo lectura.
5. **Seguridad** (de `CLAUDE.md`): no guardar contraseñas, API keys ni tokens en ningún archivo ni en la BD; no borrar archivos del usuario (lo que sobre va a `_papelera/`); crear cuentas, iniciar sesión, pagar, aceptar términos y escanear QR siempre lo hace Guillermo.
6. **Cada sitio termina con su `CAMBIOS.md`**, para que cualquiera (persona o IA) entienda por qué no es igual al original.

## 4. Proceso paso a paso (método 1.1)

Los comandos se ejecutan desde la raíz del estudio. Requisitos en la PC: Node ≥ 22.13, `npm install` hecho en `herramientas/` (playwright y sharp) y Edge o Chrome instalado (`navegador.mjs` los usa si falta el Chromium de Playwright).

### Paso 0: Elegir el sitio

```
node --no-warnings herramientas/candidatos-1.1.mjs hospedaje --max 15
```

Da candidatos con clon funcional, web propia (descarta Booking, hotelmix, directorios), con fotos descargadas en el clon (columna `locales`) y sin `rediseno/` todavía. Los que no tienen fotos locales (típico de Squarespace o Wix, que las cargan de su CDN) se listan aparte: van al método 1.2. Abre el clon en XAMPP (`http://localhost/project-1-25092026/proyectos/<carpeta>/sitio/index.html`) y el sitio real. Descarta cadenas grandes (por ejemplo Grand Velas) y sitios sin fotos propias. Anota el elegido en `METODOS.md` como "En curso".

### Paso 1: Preparar la carpeta

```
node herramientas/nuevo-rediseno.mjs <carpeta>
cd proyectos/<carpeta>/rediseno && npm install
```

Esto crea `rediseno/` desde `plantillas/rediseno-1.1/`, con Vite 7, React 19, TypeScript, Tailwind 4 y `base: './'`. También detecta en qué carpeta de `sitio/assets` están las imágenes y la pone como `publicDir`, crea `CAMBIOS.md` y `entregables/plan-diseno.md` con sus plantillas, y escribe `rediseno/IMAGENES.txt` con todas las imágenes y sus medidas.

### Paso 2: Diagnóstico del clon

```
node herramientas/qa-rediseno.mjs <carpeta>
```

Como todavía no hay rediseño compilado, solo diagnostica el clon: capturas `qa/antes-*.png` y la parte `antes` de `qa/reporte-rediseno.json` (desborde, imágenes rotas y recursos con 404). Abre también el clon a ojo. Eso llena "Qué le falta al clon" en el plan y "Qué estaba roto" en `CAMBIOS.md`.

### Paso 3: Extraer el contenido

- `investigacion/crudo.json` tiene el texto limpio de hasta 5 páginas (inicio, nosotros, menú, galería, contacto…) en markdown. Ahí están precios, horarios, biografías y textos.
- `investigacion/resumen.json` tiene contacto (teléfonos, WhatsApp, redes) e imágenes con su `alt`.
- Mira las fotos: arma una hoja de contacto (miniaturas) para ver qué hay antes de diseñar.
- Pasa los datos a `rediseno/src/data/content.ts`. Si hay listas largas (menú, habitaciones, tarifas), usa un `.json` aparte en `src/data/`. **Limpia el markdown sobrante**, como los enlaces "[Video 2](…)" o "Image 3:".

### Paso 4: Plan de diseño (antes de escribir código)

Llena `entregables/plan-diseno.md` siguiendo la skill **frontend-design** (`plantillas/skills/frontend-design/SKILL.md`), en dos pasadas:

1. **Primera pasada:** tema, público y trabajo principal de la página (reservar, inscribirse, cotizar). Paleta de 5 o 6 tokens sacados del logo, del CSS del clon (`grep '#[0-9a-f]{6}'`) y de las fotos. Tipografía: la de la marca si existe en @fontsource. Estructura de secciones.
2. **Un solo elemento memorable que salga del negocio,** no un adorno. Ejemplos que ya funcionaron:
   - Gimnasio 24/7: un reloj en vivo con la hora de la ciudad que dice "Estamos abiertos".
   - Restaurante de desayunos: "¿Qué se antoja ahora?", que recomienda según la hora de Xalapa y abre esa parte del menú.
   - Un hotel podría usar la temporada o el clima del destino, las noches mínimas o el check-in; **siempre con datos reales**.
3. **Segunda pasada, revisión contra lo genérico.** Quita lo que suene a plantilla: etiquetas pequeñas en mayúsculas sobre cada sección, numeración 01/02, puntos medios como separador, animaciones en cada sección, filas de tarjetas idénticas y degradados de moda sin razón.

### Paso 5: Construir

- Todo en `rediseno/src/App.tsx` (componentes por sección), `src/index.css` (tokens en `@theme`) y `src/data/*`.
- Imágenes: `${import.meta.env.BASE_URL}<ruta relativa a publicDir>`, siempre con `width`, `height` y `alt`, y `loading="lazy"` salvo la del hero.
- Fuentes con @fontsource, **solo el subconjunto latino** (por ejemplo `@fontsource/cormorant-garamond/latin-500.css`). Google Fonts no se usa.
- **Obligatorio en todos los sitios:**
  - Un solo H1.
  - Botón principal a WhatsApp con mensaje prellenado (`https://wa.me/<número>?text=…`).
  - Barra fija en el celular (acción principal, llamar y cómo llegar).
  - Enlace a Google Maps.
  - `prefers-reduced-motion` respetado.
  - Contraste AA.
  - JSON-LD del tipo correcto (`Restaurant`, `Hotel`, `ExerciseGym`, `LocalBusiness`…).
  - Title y description reales.
  - Sin mapas ni scripts de terceros incrustados: una foto que enlace a Maps es suficiente.
- Si una grilla deja una celda huérfana, ajusta el número de fotos o los `span`.
- Si algo desborda en el celular dentro de un grid, casi siempre es un hijo sin `min-w-0`.

### Paso 6: Compilar y hacer QA

```
cd proyectos/<carpeta>/rediseno && npx tsc --noEmit && npm run build
cd ../../.. && node herramientas/qa-rediseno.mjs <carpeta>
```

El rediseño **debe dar cero** en todo: desborde 0, un H1, 0 imágenes rotas, 0 errores de consola y 0 recursos fallidos. Revisa a ojo `qa/despues-escritorio.png` y `qa/despues-movil.png` (página completa), no solo los números. El script también genera `entregables/comparacion-antes-despues.jpg`.

### Paso 7: Documentar

- Completa **`CAMBIOS.md`** con todas sus secciones. Ejemplos terminados: `proyectos/175-casaorigenes/CAMBIOS.md` y `proyectos/02-1mrfitness/CAMBIOS.md`.
- Completa **`OPORTUNIDADES.md`** (sección 4 bis). Ejemplo terminado: `proyectos/641-lapuertaroja/OPORTUNIDADES.md`.
- Agrega o actualiza su fila en **`OPORTUNIDADES.md` de la raíz** (el índice por prioridad).
- Actualiza `METODOS.md` a "Terminado".

### Paso 8: Verificar y guardar

- Abre `http://localhost/project-1-25092026/proyectos/<carpeta>/rediseno/dist/index.html` en XAMPP. Deben cargar las fuentes, las imágenes y el menú o las pestañas.
- Guárdalo en git, sin etiqueta de versión hasta que Guillermo lo apruebe:

```
git add METODOS.md OPORTUNIDADES.md proyectos/<carpeta>/CAMBIOS.md proyectos/<carpeta>/OPORTUNIDADES.md proyectos/<carpeta>/entregables proyectos/<carpeta>/rediseno proyectos/<carpeta>/qa/reporte-rediseno.json
git commit -m "<carpeta>: rediseño método 1.1"
```

`dist/`, `node_modules/` y las capturas `qa/*.png` están en `.gitignore`. `dist/` se regenera con `npm run build`.

## 4 bis. Oportunidades de venta (para acercarse al cliente)

Mientras revisas el sitio de un negocio vas a encontrar cosas que le cuestan clientes: spam o hackeos, botones de reserva rotos, precios contradictorios, teléfonos distintos, promociones vencidas, menús en PDF, información repartida en muchas páginas o datos que Google no ve. **Eso es lo que Guillermo usa para abrir la conversación con el cliente**, así que se documenta con el mismo cuidado que el diseño.

**Dónde se documenta:**
- `proyectos/<carpeta>/OPORTUNIDADES.md`: lo crea `nuevo-rediseno.mjs` desde `plantillas/rediseno-1.1/OPORTUNIDADES.md`. Tiene la prioridad, la tabla de hallazgos, qué le ofrecemos, un mensaje sugerido y preguntas para la conversación.
- `OPORTUNIDADES.md` (raíz): índice de todos los sitios, ordenado por prioridad, con el hallazgo principal en una línea.

**Reglas:**
1. **Solo problemas del sitio en línea.** Compruébalos en `investigacion/crudo.json` (texto real de cada página), en `investigacion/original.html` (HTML real) o abriendo el sitio. Los defectos del **clon** (imágenes que no se descargaron, estilos o scripts faltantes, desbordes del clon) son problemas nuestros, **no del cliente**, y nunca se usan como argumento.
2. Cada hallazgo lleva **qué pasa**, **por qué le importa al negocio** (reservas, confianza, llamadas de más, visibilidad en Google) y **dónde se comprobó** (URL o archivo).
3. **Prioridad:**
   - **ALTA:** algo roto o dañino ahora mismo (spam o hackeo, reservas o formularios que fallan, datos de contacto equivocados).
   - **MEDIA:** pierde clientes por cómo presenta la información (precios escondidos, menú en PDF, sin WhatsApp).
   - **BAJA:** el sitio está bien y el argumento es convertir más. Si el sitio está bien hecho, dilo; es más creíble.
4. **Tono del mensaje sugerido:** respetuoso y útil. Un hallazgo concreto, sin alarmar ni exagerar, y la oferta de enseñar la propuesta. Guillermo envía todos los mensajes él mismo; la IA **nunca** contacta al cliente.
5. **Antes de contactar hay que volver a abrir el sitio real,** porque la captura tiene fecha y el cliente pudo haberlo arreglado.
6. Cosas útiles de revisar en `original.html`: `meta description` (a veces promete cosas que el sitio no dice), JSON-LD (si falta), imágenes sin `alt`, enlaces `wa.me` sin mensaje, enlaces de reserva con parámetros raros, `tel:` distintos y textos como "demo", "lorem ipsum", "próximamente" o palabras de casino o farmacia (señal de hackeo).

## 5. Herramientas

| Herramienta | Qué hace | Uso |
|---|---|---|
| `herramientas/candidatos-1.1.mjs` | Lista candidatos desde `fabricador.db` (solo lectura) | `node --no-warnings herramientas/candidatos-1.1.mjs [plantilla] [--max N]` |
| `herramientas/nuevo-rediseno.mjs` | Crea `rediseno/`, `CAMBIOS.md`, el plan e `IMAGENES.txt` | `node herramientas/nuevo-rediseno.mjs <carpeta> [--public ../sitio/assets/x] [--nombre "X"]` |
| `herramientas/qa-rediseno.mjs` | QA del clon y del rediseño, capturas y lámina antes/después. Trae su propio servidor, no necesita XAMPP | `node herramientas/qa-rediseno.mjs <carpeta> [--solo-rediseno]` |
| `herramientas/navegador.mjs` | Abre Chromium, Edge o Chrome para Playwright (lo usan los demás) | interno |
| `herramientas/investigar.mjs`, `descargar-assets.mjs`, `optimizar-imagenes.mjs` | Recuperar contenido e imágenes cuando no hay clon (método 1.2) | ver cabecera de cada archivo |
| `herramientas/db.mjs` (`db.cmd`) | BD del estudio (`datos/estudio.db`) | `db log <carpeta> "…"`, `db proyecto <carpeta>` |
| `plantillas/rediseno-1.1/` | Plantilla base del rediseño | la usa `nuevo-rediseno.mjs` |
| `plantillas/skills/frontend-design/` | Skill de diseño de Anthropic (principios y revisión contra lo genérico) | léela en el paso 4 |
| `cola/` + `ejecutar-cola.cmd` | Para cuando la IA no puede ejecutar comandos (ver sección 6) | ver `cola/INSTRUCCIONES.md` |

**Stack del rediseño:** Vite 7, React 19, TypeScript 5.9, Tailwind 4 (`@tailwindcss/vite`, tokens en `@theme`) y @fontsource. Framer Motion no hace falta: el movimiento se hace con CSS y siempre respeta `prefers-reduced-motion`.

## 6. Según dónde se ejecute la IA

- **Claude Code en la PC de Guillermo** (lo recomendado para continuar): puede ejecutar todo directamente, incluidos `npm`, `node`, las herramientas y `git`. Tiene acceso a internet desde la PC, así que el método 1.2 también funciona. Trabaja en `C:\xampp\htdocs\project-1-25092026`.
- **Claude en Cowork (nube) enlazado a la PC:** trabaja en una copia en la nube y mueve archivos con las herramientas del puente (subir desde la PC, escribir de vuelta en lotes de 50 como máximo). Su red **bloquea muchos sitios de clientes**, así que usa el clon como materia prima (justo para eso sirve el 1.1). No puede escribir en `.claude/` de forma remota y, si no tiene terminal en la PC, deja los comandos (git, BD) como scripts en `cola/pendientes/` para que Guillermo los ejecute con `ejecutar-cola.cmd`.
- En cualquier caso, **Guillermo aprueba** el diseño antes de etiquetar una versión (`git tag <slug>-v1`).

## 7. Lista de entrega por sitio

- [ ] `METODOS.md` actualizado
- [ ] `entregables/plan-diseno.md` completo, con el elemento memorable y la revisión contra lo genérico
- [ ] `rediseno/` compila sin errores (`npx tsc --noEmit`, `npm run build`)
- [ ] `qa-rediseno.mjs` sin problemas, y capturas revisadas a ojo en escritorio y móvil
- [ ] `entregables/comparacion-antes-despues.jpg` generado
- [ ] `CAMBIOS.md` completo: roto, cambiado, agregado, quitado, conservado y pendiente
- [ ] `OPORTUNIDADES.md` del sitio completo (solo hallazgos del sitio en línea) y fila en el `OPORTUNIDADES.md` de la raíz
- [ ] Verificado en XAMPP
- [ ] Commit en git

## 8. Estado al 2026-09-26 y siguiente paso

- **Terminados con 1.1:** `02-1mrfitness`, `175-casaorigenes`, `641-lapuertaroja` y `521-hotelboutiquepineda` (este último sirve copias .webp de las fotos del clon en `assets/web/`, ver `rediseno/fotos-web.mjs`). Úsalos como referencia de calidad y de estilo de documentación. `641-lapuertaroja` ya se hizo con las herramientas nuevas (`nuevo-rediseno.mjs` y `qa-rediseno.mjs`).
- **Descartado:** `172-casamariahotel`, porque su URL es de un portal de reservas de terceros.
- **Terminado con 1.2:** `540-hotelpomelo` (Hotel Pomelo, reemplaza a 172). Squarespace: las 143 imágenes se bajaron en la PC a `assets/pomelo/` con `assets-1.2.json`; como pesan 56 MB, el rediseño usa copias .webp de las 38 que usa en `assets/pomelo-web/` (`rediseno/fotos-web.mjs`), que es su `publicDir`. Úsalo como referencia para otros sitios de Squarespace o Wix.
- **Siguientes candidatos:** ver `METODOS.md`.
- **Pendientes generales:**
  - Documentar 1.1 y 1.2 en `PROCESO.md`.
  - Decidir si se borra la carpeta sobrante `proyectos/10experiences` (solo tiene `sitio/`); Guillermo debe confirmarlo.
  - Integrar el bot de WhatsApp con BuilderBot. Hay que confirmar con Guillermo si es WhatsApp (BuilderBot solo soporta WhatsApp; en algún momento dijo "WeChat"), y él debe autenticar el MCP de BuilderBot.
