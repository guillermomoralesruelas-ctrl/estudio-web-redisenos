import { useState } from 'react';
import {
  archivo, correos, empresas, espacios, extras, foto, habitaciones, negocio, paquetes, pesos, promociones, spaCelebraciones,
  spaMedioDia, spaServicios, totalHabitaciones, wa, waHola, cenas, type Habitacion,
} from './data/content';

function IconoWa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.2.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}

function IconoTel({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 3h4l2 5-3 2a11 11 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A18 18 0 0 1 3 5a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

function IconoPin({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}


const secciones = [
  ['#habitaciones', 'Habitaciones'],
  ['#paquetes', 'Paquetes'],
  ['#eventos', 'Eventos'],
  ['#spa', 'Spa'],
  ['#contacto', 'Contacto'],
] as const;

function Encabezado() {
  return (
    <header className="oscuro sticky top-0 z-40 border-b border-oro/20 bg-jardin/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0" aria-label="Hacienda La Magdalena, ir al inicio">
          <img src={archivo('logo.png')} alt="Hacienda La Magdalena" width={120} height={70} className="h-11 w-auto" />
        </a>
        <nav aria-label="Secciones" className="hidden lg:block">
          <ul className="flex gap-7 text-[1rem]">
            {secciones.map(([href, texto]) => (
              <li key={href}><a href={href} className="text-hoja hover:text-cal">{texto}</a></li>
            ))}
          </ul>
        </nav>
        <a href={waHola} className="btn hidden sm:inline-flex" target="_blank" rel="noopener">
          <IconoWa /> Consultar disponibilidad
        </a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="oscuro relative isolate overflow-hidden">
      <img src={foto('casco-anochecer')} alt="El casco de la hacienda iluminado al anochecer, con el jardín y una fuente al frente" width={1800} height={750}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[50%_60%]" fetchPriority="high" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-jardin via-jardin/70 to-jardin/35" />
      <div className="contenedor flex min-h-[78svh] flex-col justify-end pb-12 pt-28 sm:pb-16">
        <p className="antetitulo">Zapopan, Jalisco · desde el siglo XVII</p>
        <h1 className="mt-4 max-w-3xl text-[2.9rem] sm:text-[4.4rem]">Hacienda La Magdalena</h1>
        <p className="mt-5 max-w-2xl text-[1.2rem] text-cal sm:text-[1.3rem]">
          Una hacienda del siglo XVII que abre sus puertas como hotel boutique y centro de eventos, rodeada de jardines, a
          15 minutos del centro de Zapopan y a 45 del centro de Guadalajara.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={waHola} className="btn" target="_blank" rel="noopener"><IconoWa /> Consultar disponibilidad</a>
          <a href="#habitaciones" className="btn-claro">Ver habitaciones</a>
        </div>
        <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-4 border-t border-oro/25 pt-6 sm:grid-cols-4">
          {[
            ['4 hectáreas', 'de jardines, arroyo y estanque'],
            [`${totalHabitaciones} habitaciones`, 'alcobas y suites'],
            ['Capilla abierta', 'consagrada, en el jardín'],
            ['Spa y alberca', 'morisca, con jacuzzi'],
          ].map(([dato, texto]) => (
            <div key={dato}>
              <dt className="font-display text-[1.35rem] text-oro">{dato}</dt>
              <dd className="text-[0.98rem] text-hoja">{texto}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Historia() {
  return (
    <section id="historia" className="py-20 sm:py-24">
      <div className="contenedor grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <p className="antetitulo">La legendaria historia</p>
          <h2 className="mt-3 text-[2.2rem] sm:text-[2.9rem]">El México de antaño, a un paso de la ciudad</h2>
          <p className="mt-5 text-gris">
            Por su cercanía a la Ruta de la Plata, de Guadalajara a Zacatecas, la hacienda era paso obligado de las diligencias.
            Las antiguas fuentes, urnas y macetones de mayólica siguen en su lugar, y donde estaban los lavaderos y los huertos
            hoy hay jardines con fuentes, estanques, sauces y árboles frutales.
          </p>
          <p className="mt-4 text-gris">
            Las alcobas y suites llevan los nombres de personajes que moraron en la hacienda: la habitación doña Jovita
            recuerda a la abuela paterna del dueño, que vivió en la casona a fines del siglo XIX.
          </p>
          <ol className="mt-8 space-y-4 border-l-2 border-cantera/30 pl-6">
            {[
              ['Finales del siglo XVII', 'Se funda la hacienda, primera jornada de las diligencias hacia la Hacienda de Copala.'],
              ['Desde 1990', 'Bautizos, bodas, graduaciones, filmaciones, desfiles de modas y conciertos.'],
              ['Septiembre de 2007', 'Abre el hotel boutique.'],
            ].map(([cuando, que]) => (
              <li key={cuando} className="relative">
                <span className="absolute -left-[1.95rem] top-2 h-3 w-3 rounded-full bg-cantera" aria-hidden="true" />
                <p className="font-display text-[1.2rem] text-cantera">{cuando}</p>
                <p className="text-gris">{que}</p>
              </li>
            ))}
          </ol>
          <a href={negocio.youtube} className="enlace mt-7 inline-block" target="_blank" rel="noopener">Ver su video de la hacienda en YouTube</a>
        </div>
        <figure className="relative">
          <img src={foto('estanque')} alt="Estanque rodeado de árboles que refleja un muro de cantera rosa de la hacienda" width={720} height={480}
            loading="lazy" className="aspect-[4/3] w-full rounded-sm object-cover shadow-[0_30px_50px_-30px_rgb(0_0_0/0.6)]" />
          <figcaption className="mt-3 text-[0.95rem] text-gris">Jardines con caminos y nacimientos de agua, un pequeño arroyo, estanque y lago con peces de colores.</figcaption>
        </figure>
      </div>
    </section>
  );
}

// Colores de las etiquetas de cada tipo en el tablero.
const etiqueta: Record<string, string> = {
  alcoba: '#f6f0e6', adaptada: '#c9d6c4', suite: '#e7c9b4', master: '#d2b06a', presidencial: '#9a4630',
};
const letra: Record<string, string> = { alcoba: 'A', adaptada: 'AD', suite: 'S', master: 'M', presidencial: 'P' };

function Llave({ x, y, tipo, activa, apagada, onClick }: { x: number; y: number; tipo: string; activa: boolean; apagada: boolean; onClick: () => void }) {
  const tinta = tipo === 'presidencial' ? '#f6f0e6' : '#221c17';
  return (
    <g transform={`translate(${x} ${y}) scale(1.35)`}>
      <g className="llave cursor-pointer" data-activa={activa} data-apagada={apagada} onClick={onClick} style={{ transformBox: 'fill-box' }}>
        <circle cx={0} cy={0} r={3.2} fill="#c9a24e" stroke="#7a5a22" strokeWidth={1} />
        <circle cx={0} cy={11} r={7} fill="none" stroke="#c9a24e" strokeWidth={3} />
        <rect x={-1.8} y={17} width={3.6} height={30} rx={1.5} fill="#c9a24e" />
        <rect x={1.5} y={38} width={6} height={3.2} fill="#c9a24e" />
        <rect x={1.5} y={43} width={4} height={3.2} fill="#c9a24e" />
        <path d="M-5 15 q -6 10 -3 20" stroke="#e7d9bf" strokeWidth={1} fill="none" opacity={0.7} />
        <g transform="rotate(8 -8 36)">
          <rect x={-17} y={34} width={16} height={24} rx={3} fill={etiqueta[tipo]} stroke="#3a2616" strokeWidth={0.8} />
          <circle cx={-9} cy={38} r={1.6} fill="#5a3a22" />
          <text x={-9} y={52} textAnchor="middle" fontSize={letra[tipo].length > 1 ? 6.5 : 8.5} fontFamily="Marcellus, Georgia, serif" fill={tinta}>{letra[tipo]}</text>
        </g>
      </g>
    </g>
  );
}

function Habitaciones() {
  const [elegida, setElegida] = useState<Habitacion['id']>('alcoba');
  const hab = habitaciones.find((h) => h.id === elegida)!;
  const porId = (id: string) => habitaciones.find((h) => h.id === id)!;

  // Tres filas de ganchos: las 10 alcobas, las 10 suites y, abajo, la adaptada, las 2 master y la presidencial.
  const filas: { titulo: string; tipos: string[] }[] = [
    { titulo: 'Alcobas · 10', tipos: Array(porId('alcoba').cuantas).fill('alcoba') },
    { titulo: 'Suites con jacuzzi · 10', tipos: Array(porId('suite').cuantas).fill('suite') },
    { titulo: 'Adaptada · Master suites · Presidencial', tipos: [...Array(porId('adaptada').cuantas).fill('adaptada'), ...Array(porId('master').cuantas).fill('master'), ...Array(porId('presidencial').cuantas).fill('presidencial')] },
  ];

  return (
    <section id="habitaciones" className="bg-muro py-20 sm:py-24">
      <div className="contenedor">
        <div className="max-w-3xl">
          <p className="antetitulo">Romanticismo, elegancia y tradición</p>
          <h2 className="mt-3 text-[2.2rem] sm:text-[2.9rem]">Las llaves de la hacienda</h2>
          <p className="mt-4 text-gris">
            {totalHabitaciones} habitaciones, cada una con una decoración única. Elija un tipo en el tablero de la recepción para
            ver cuántas hay y qué tienen.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-start">
          <div>
            <div className="tablero">
              {[10, 5].map((cols) => {
                // Escritorio: 10 ganchos por riel. Celular: 5 por riel, para que las llaves se lean.
                const ancho = cols * 52 + 40;
                let y = 26;
                const rieles: { titulo?: string; tipos: string[]; y: number }[] = [];
                filas.forEach((fila) => {
                  for (let k = 0; k < fila.tipos.length; k += cols) {
                    rieles.push({ titulo: k === 0 ? fila.titulo : undefined, tipos: fila.tipos.slice(k, k + cols), y });
                    y += 104;
                  }
                  y += 14;
                });
                return (
                  <svg key={cols} viewBox={`0 0 ${ancho} ${y - 16}`} className={`w-full ${cols === 10 ? 'hidden sm:block' : 'block sm:hidden'}`} role="img"
                    aria-label={`Tablero con ${totalHabitaciones} llaves: 10 alcobas, 10 suites con jacuzzi, 1 alcoba adaptada, 2 master suites y 1 suite presidencial`}>
                    {rieles.map((riel, i) => (
                      <g key={i}>
                        {riel.titulo ? <text x={16} y={riel.y - 6} fontSize={13} fontFamily="Alegreya Sans, sans-serif" fontWeight={700} letterSpacing={1.5} fill="#d2b06a">{(cols === 5 ? riel.titulo.replace('Adaptada · Master suites · Presidencial', 'Adaptada · Master · Presidencial') : riel.titulo).toUpperCase()}</text> : null}
                        <rect x={12} y={riel.y + 3} width={ancho - 24} height={3} rx={1.5} fill="#3a2616" opacity={0.6} />
                        {riel.tipos.map((tipo, j) => {
                          const inicio = 46 + (cols - riel.tipos.length) * 26;
                          return (
                            <Llave key={j} x={inicio + j * 52} y={riel.y + 12} tipo={tipo} activa={tipo === elegida} apagada={tipo !== elegida}
                              onClick={() => setElegida(tipo as Habitacion['id'])} />
                          );
                        })}
                      </g>
                    ))}
                  </svg>
                );
              })}
            </div>
            <div role="tablist" aria-label="Tipos de habitación" className="mt-5 flex flex-wrap gap-2">
              {habitaciones.map((h) => (
                <button key={h.id} role="tab" aria-selected={h.id === elegida} aria-controls="ficha-habitacion" onClick={() => setElegida(h.id)}
                  className={`inline-flex min-h-[44px] items-center gap-2 rounded-sm border-2 px-3.5 py-2 text-[0.98rem] font-bold transition-colors ${h.id === elegida ? 'border-musgo bg-musgo text-cal' : 'border-musgo/30 text-musgo hover:border-musgo'}`}>
                  <span className="inline-block h-3 w-3 rounded-[3px] border border-tinta/40" style={{ background: etiqueta[h.id] }} aria-hidden="true" />
                  {h.nombre} <span className="font-normal">({h.cuantas})</span>
                </button>
              ))}
            </div>
          </div>

          <article id="ficha-habitacion" role="tabpanel" aria-live="polite" className="overflow-hidden rounded-sm border border-cantera/20 bg-cal">
            {hab.foto ? (
              <img src={foto(hab.foto)} alt={hab.alt} width={720} height={480} loading="lazy" className="aspect-[3/2] w-full object-cover" />
            ) : (
              <div className="grid aspect-[3/2] place-items-center bg-jardin p-8 text-center">
                <p className="font-display text-[1.35rem] text-oro">Su sitio no tiene foto de esta habitación en el material disponible</p>
              </div>
            )}
            <div className="p-6 sm:p-8">
              <p className="antetitulo">{hab.cuantas === 1 ? 'Una en la hacienda' : `${hab.cuantas} en la hacienda`} · {hab.corto}</p>
              <h3 className="mt-2 text-[1.9rem]">{hab.nombre}</h3>
              <p className="mt-3 text-gris">{hab.texto}</p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {hab.detalles.map((d) => (
                  <li key={d} className="flex gap-2"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cantera" aria-hidden="true" />{d}</li>
                ))}
              </ul>
              <a href={wa(`Hola, me comunico desde su sitio web. Quisiera disponibilidad y tarifa de la ${hab.nombre.toLowerCase()} en Hacienda La Magdalena para las fechas (…).`)}
                className="btn-musgo mt-7" target="_blank" rel="noopener">
                <IconoWa /> Preguntar por esta habitación
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Paquetes() {
  return (
    <section id="paquetes" className="py-20 sm:py-24">
      <div className="contenedor">
        <div className="max-w-3xl">
          <p className="antetitulo">Paquetes de hospedaje</p>
          <h2 className="mt-3 text-[2.2rem] sm:text-[2.9rem]">Una noche con todo incluido</h2>
          <p className="mt-4 text-gris">Precios por pareja por noche, con IVA, de su página de paquetes.</p>
        </div>
        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {paquetes.map((p) => (
            <li key={p.nombre} className="flex flex-col rounded-sm border border-cantera/20 bg-muro p-6">
              <h3 className="text-[1.6rem]">{p.nombre}</h3>
              <p className="mt-3 flex-1 text-[1rem] text-gris">{p.incluye}</p>
              <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-cantera/20 pt-4">
                <div><dt className="text-[0.9rem] text-gris">Domingo a jueves</dt><dd className="font-display text-[1.5rem] text-cantera">{pesos(p.entreSemana)}</dd></div>
                <div><dt className="text-[0.9rem] text-gris">Fin de semana</dt><dd className="font-display text-[1.5rem] text-cantera">{pesos(p.finDeSemana)}</dd></div>
              </dl>
              <a href={wa(`Hola, me comunico desde su sitio web. Me interesa el ${p.nombre === 'Noche de bodas' ? 'paquete Noche de bodas' : p.nombre} para la noche del (…). ¿Tienen disponibilidad?`)}
                className="btn-linea mt-5" target="_blank" rel="noopener">Reservar este paquete</a>
            </li>
          ))}
          <li className="oscuro flex flex-col rounded-sm p-6">
            <h3 className="text-[1.6rem]">Promociones</h3>
            <ul className="mt-4 flex-1 space-y-4">
              {promociones.map((p) => (
                <li key={p.titulo}>
                  <p className="font-display text-[1.25rem] text-oro">{p.titulo}: {p.dato}</p>
                  <p className="text-[1rem]">{p.texto}</p>
                </li>
              ))}
            </ul>
            <a href={wa('Hola, me comunico desde su sitio web. Quisiera información de sus promociones de hospedaje (larga estancia, 4x3 o grupos).')}
              className="btn mt-6" target="_blank" rel="noopener"><IconoWa /> Preguntar por una promoción</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Momentos() {
  return (
    <section id="cenas" className="bg-muro py-20 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        <div>
          <p className="antetitulo">Cenas románticas y más</p>
          <h2 className="mt-3 text-[2.2rem] sm:text-[2.9rem]">Una mesa solo para dos, entre velas y flores</h2>
          <p className="mt-4 text-gris">Cenas completamente privadas en un rincón de la hacienda. Precios por pareja, con IVA; las peticiones especiales se cotizan aparte.</p>
          <img src={foto('terraza-comedor')} alt="Terraza del comedor con mesas de mantel blanco, sombrillas y pérgola de madera junto al jardín" width={1400} height={875}
            loading="lazy" className="mt-8 aspect-[4/3] w-full rounded-sm object-cover" />
        </div>
        <div className="space-y-5">
          {cenas.map((c) => (
            <article key={c.nombre} className="rounded-sm border border-cantera/20 bg-cal p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-[1.55rem]">{c.nombre}</h3>
                <p className="font-display text-[1.45rem] text-cantera">{pesos(c.precio)}</p>
              </div>
              <ul className="mt-3 grid gap-1.5 text-[1rem] text-gris sm:grid-cols-2">
                {c.puntos.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <a href={wa(`Hola, me comunico desde su sitio web. Me interesa la cena "${c.nombre}" para el día (…). ¿Tienen disponibilidad?`)}
                className="enlace mt-4 inline-block" target="_blank" rel="noopener">Apartar esta cena</a>
            </article>
          ))}
          <div className="pt-4">
            <h3 className="text-[1.55rem]">Para ampliar la visita</h3>
            <ul className="mt-4 divide-y divide-cantera/15">
              {extras.map((e) => (
                <li key={e.nombre} className="py-3">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <p className="font-bold">{e.nombre}</p>
                    <p className="text-cantera">{e.precio}</p>
                  </div>
                  <p className="text-[0.98rem] text-gris">{e.cuando}. {e.texto}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Eventos() {
  return (
    <section id="eventos" className="oscuro py-20 sm:py-24">
      <div className="contenedor">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <div>
            <p className="antetitulo">Bodas y eventos · ¡Todo en un mismo lugar!</p>
            <h2 className="mt-3 text-[2.2rem] sm:text-[2.9rem]">Ceremonia, banquete y hospedaje sin salir de la hacienda</h2>
            <p className="mt-4">
              Capilla, alojamiento y spa para celebrar la ceremonia religiosa o civil, una convivencia rompehielos o la tornaboda.
              Sus invitados tienen tarifa especial a partir de 5 habitaciones, y cada espacio tiene cocina y baños independientes.
            </p>
          </div>
          <img src={foto('capilla-verde')} alt="Capilla abierta en el jardín: pasillo de pasto entre sillas blancas, cipreses y un toldo hacia el altar de cantera" width={1400} height={875}
            loading="lazy" className="aspect-[16/10] w-full rounded-sm object-cover" />
        </div>

        <ul className="mt-12 grid gap-x-10 gap-y-7 md:grid-cols-2">
          {espacios.map((e) => (
            <li key={e.nombre} className="border-t border-oro/25 pt-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-[1.45rem]">{e.nombre}</h3>
                {e.capacidad ? <p className="font-bold text-oro">Hasta {e.capacidad} invitados</p> : <p className="text-hoja">Ceremonias y eventos íntimos</p>}
              </div>
              {e.capacidad ? (
                <div className="mt-3 h-1.5 w-full rounded-full bg-cal/10" aria-hidden="true">
                  <div className="h-full rounded-full bg-oro" style={{ width: `${(e.capacidad / 480) * 100}%` }} />
                </div>
              ) : null}
              <p className="mt-3 text-[1rem]">{e.texto}</p>
            </li>
          ))}
        </ul>

        <div className="mt-14 grid gap-8 rounded-sm border border-oro/30 p-6 sm:p-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <h3 className="text-[1.7rem]">Eventos empresariales</h3>
            <p className="mt-3">
              Un centro de negocios para reuniones, capacitaciones, teambuilding y congresos de hasta {empresas.maximo} personas. El salón
              Las Bóvedas, que recrea una plaza de pueblo del siglo XIX, tiene mobiliario para {empresas.boveda} y servicio de alimentos en la
              terraza Jazmines.
            </p>
            <p className="mt-3 text-[1rem]">Actividades que cotizan aparte: {empresas.adicionales.join(', ').toLowerCase()}.</p>
          </div>
          <ul className="grid content-start gap-2 sm:grid-cols-2">
            {empresas.servicios.map((s) => (
              <li key={s} className="flex gap-2 text-cal"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-oro" aria-hidden="true" />{s}</li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href={wa('Hola, me comunico desde su sitio web. Quisiera cotizar un evento en Hacienda La Magdalena: tipo de evento (…), fecha (…) y número de invitados (…).')}
            className="btn" target="_blank" rel="noopener"><IconoWa /> Cotizar un evento</a>
          <a href="mailto:ventas@haciendalamagdalena.com" className="btn-claro">ventas@haciendalamagdalena.com</a>
        </div>
      </div>
    </section>
  );
}

function Spa() {
  return (
    <section id="spa" className="py-20 sm:py-24">
      <div className="contenedor">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <p className="antetitulo">Spa Tierras Lejanas</p>
            <h2 className="mt-3 text-[2.2rem] sm:text-[2.9rem]">Un remanso de tranquilidad sin salir de la ciudad</h2>
            <p className="mt-4 text-gris">
              Cabinas de masaje individuales y en pareja, y cabinas al aire libre previa reservación. Junto al spa, la alberca de
              arquitectura morisca (6 × 14.5 m, 1.40 m de profundidad, a temperatura ambiente) y un jacuzzi de agua caliente para
              6 personas, al aire libre. El snack bar Las Parras atiende la alberca bajo racimos de uva en primavera y verano.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src={foto('spa-cabina')} alt="Cabina de spa para parejas con dos camillas, cortinas blancas y techo de madera" width={1400} height={875} loading="lazy" className="aspect-[4/5] w-full rounded-sm object-cover" />
            <img src={foto('alberca-morisca')} alt="Alberca con arcos de ladrillo de estilo morisco y una pérgola al fondo" width={1400} height={875} loading="lazy" className="aspect-[4/5] w-full rounded-sm object-cover object-[40%_50%]" />
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.15fr]">
          <div className="space-y-4">
            {spaMedioDia.map((m) => (
              <article key={m.nombre} className="rounded-sm border border-cantera/20 bg-muro p-6">
                <h3 className="text-[1.4rem]">{m.nombre}</h3>
                <p className="mt-2 text-[1rem] text-gris">{m.incluye} De 10 a 16 h.</p>
                <p className="mt-3"><span className="text-gris">Lunes a jueves </span><span className="font-bold text-cantera">{pesos(m.semana)}</span>
                  <span className="text-gris"> · Viernes a domingo </span><span className="font-bold text-cantera">{pesos(m.finde)}</span> <span className="text-gris">por persona</span></p>
              </article>
            ))}
            <p className="text-[1rem] text-gris">{spaCelebraciones}</p>
          </div>
          <div>
            <h3 className="text-[1.4rem]">Masajes y faciales</h3>
            <table className="mt-3 w-full text-left text-[1rem]">
              <caption className="sr-only">Masajes, faciales y otros servicios del spa con duración y precio con IVA</caption>
              <thead><tr className="border-b border-cantera/25 text-gris"><th scope="col" className="py-2 font-normal">Servicio</th><th scope="col" className="py-2 font-normal">Duración</th><th scope="col" className="py-2 text-right font-normal">Precio</th></tr></thead>
              <tbody>
                {spaServicios.map((s) => (
                  <tr key={s.nombre} className="border-b border-cantera/10">
                    <th scope="row" className="py-2 pr-3 font-normal">{s.nombre}</th>
                    <td className="py-2 pr-3 whitespace-nowrap text-gris">{s.duracion}</td>
                    <td className="py-2 text-right font-bold text-cantera">{pesos(s.precio)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={wa('Hola, me comunico desde su sitio web. Quisiera reservar en el Spa Tierras Lejanas: servicio (…), día (…) y número de personas (…).')}
                className="btn-musgo" target="_blank" rel="noopener"><IconoWa /> Reservar en el spa</a>
              <a href="mailto:spatierraslejanas@gmail.com" className="btn-linea">Escribir al spa</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="bg-muro py-20 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="antetitulo">Ubicación y contacto</p>
          <h2 className="mt-3 text-[2.2rem] sm:text-[2.9rem]">Carretera a Colotlán, en Zapopan</h2>
          <p className="mt-4 flex gap-2"><IconoPin className="mt-1 h-5 w-5 shrink-0 text-cantera" />{negocio.direccion}</p>
          <a href={negocio.mapa} className="enlace mt-2 inline-block" target="_blank" rel="noopener">Abrir en Google Maps</a>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={waHola} className="btn-musgo" target="_blank" rel="noopener"><IconoWa /> WhatsApp</a>
            {negocio.telefonos.map((t) => (
              <a key={t.href} href={t.href} className="btn-linea"><IconoTel /> {t.texto}</a>
            ))}
          </div>
          <dl className="mt-8 space-y-4">
            {correos.map((c) => (
              <div key={c.area}>
                <dt className="font-bold">{c.area}</dt>
                {c.correos.map((m) => <dd key={m}><a href={`mailto:${m}`} className="enlace break-all font-normal">{m}</a></dd>)}
              </div>
            ))}
          </dl>
          <p className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
            <a href={negocio.facebook} className="enlace" target="_blank" rel="noopener">Facebook</a>
            <a href={negocio.instagram} className="enlace" target="_blank" rel="noopener">Instagram</a>
            <a href={negocio.tripadvisor} className="enlace" target="_blank" rel="noopener">Opiniones en Tripadvisor</a>
          </p>
        </div>
        <div className="relative min-h-[340px] overflow-hidden rounded-sm border border-cantera/20 bg-cal">
          <a href={negocio.mapa} target="_blank" rel="noopener" className="enlace absolute inset-0 grid place-items-center p-6 text-center">Ver la ubicación en Google Maps</a>
          <iframe src={negocio.mapaIframe} title="Mapa de Google con la ubicación de Hacienda La Magdalena" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" className="relative h-full min-h-[340px] w-full border-0" />
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro pb-28 pt-12 lg:pb-12">
      <div className="contenedor flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <img src={archivo('logo.png')} alt="Hacienda La Magdalena" width={120} height={70} loading="lazy" className="h-12 w-auto" />
        <p className="text-[0.98rem]">Hacienda La Magdalena, el lugar donde se vive el México de antaño. Zapopan, Jalisco.</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-oro/30 bg-jardin text-cal lg:hidden">
      <a href={waHola} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 bg-musgo text-[0.9rem] font-bold"><IconoWa />WhatsApp</a>
      <a href={negocio.telefonos[0].href} className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-bold"><IconoTel />Llamar</a>
      <a href={negocio.mapa} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-bold"><IconoPin />Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#principal" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-sm focus:bg-cal focus:px-4 focus:py-2">Saltar al contenido</a>
      <Encabezado />
      <main id="principal">
        <Portada />
        <Historia />
        <Habitaciones />
        <Paquetes />
        <Momentos />
        <Eventos />
        <Spa />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
