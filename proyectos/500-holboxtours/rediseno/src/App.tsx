import { useState } from 'react';
import { excursiones, nado, negocio, pesos, tiburon, tours, wa } from './data/content';
import fotos from './data/fotos.json';

const medidas = fotos as unknown as Record<string, [number, number]>;
const foto = (n: string) => ({ src: `./${n}.webp`, width: medidas[n][0], height: medidas[n][1] });

function Icono({ d, className = 'size-5' }: { d: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}
const iWhats = 'M3 21l1.7-5A8.5 8.5 0 1 1 8 19.3L3 21zM9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.8-2.2-1-1 1a4.5 4.5 0 0 1-2.5-2.5l1-1-1-2.2L9 8.5z';
const iTel = 'M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2';
const iCorreo = 'M3 6h18v12H3zM3 7l9 6 9-6';

const saludo = 'Hola, quiero información de sus tours en Holbox.';

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 bg-arena/95 shadow-[0_1px_0_rgb(6_44_66/0.08)] backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0">
          <img {...foto('logo')} alt="Holbox Tours" className="h-[46px] w-auto" />
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-6 font-semibold text-profundo lg:flex">
          <a href="#tiburon" className="hover:text-rosaosc">Tiburón ballena</a>
          <a href="#tours" className="hover:text-rosaosc">Tours</a>
          <a href="#excursiones" className="hover:text-rosaosc">Excursiones</a>
          <a href="#holbox" className="hover:text-rosaosc">Isla Holbox</a>
          <a href="#contacto" className="hover:text-rosaosc">Contacto</a>
        </nav>
        <a href={wa(saludo)} className="boton min-h-11 bg-rosa px-5 text-white hover:bg-rosaosc">
          <Icono d={iWhats} />
          <span>WhatsApp</span>
        </a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="oscuro relative overflow-hidden bg-profundo text-white">
      <img {...foto('nado')} alt="Una persona con snorkel nada junto a un tiburón ballena bajo el agua azul" className="absolute inset-0 size-full object-cover" fetchPriority="high" />
      <div className="absolute inset-0 bg-gradient-to-t from-profundo via-profundo/75 to-profundo/60 sm:bg-gradient-to-r sm:from-profundo/95 sm:via-profundo/60 sm:to-profundo/0" />
      <div className="contenedor relative flex min-h-[36rem] flex-col justify-end py-14 sm:min-h-[40rem] sm:justify-center sm:py-20">
        <p className="antetitulo">Temporada 2026 · {negocio.lugar}</p>
        <h1 className="mt-3 max-w-2xl text-[2.7rem] sm:text-7xl">Nada con el tiburón ballena en Holbox</h1>
        <p className="mt-5 max-w-xl text-lg text-white/90">La temporada es {negocio.temporada.texto}. Te recogemos en tu hotel en Holbox y te llevamos al punto de embarque; hay sándwiches, refrescos, agua y ceviche de pescado a bordo.</p>
        <p className="mt-5 flex flex-wrap items-baseline gap-x-3">
          <span className="text-white/85">Tour compartido desde</span>
          <span className="font-titulo text-4xl font-extrabold text-turquesa">{pesos(nado.compartido.precio)}</span>
          <span className="text-white/85">por persona</span>
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="#tiburon" className="boton bg-rosa text-white hover:bg-rosaosc">¿Cuántos van?</a>
          <a href={wa('Hola, quiero nadar con el tiburón ballena en Holbox. ¿Qué fechas tienen?')} className="boton border-2 border-white/60 hover:bg-white/10"><Icono d={iWhats} /> Pedir fechas</a>
        </div>
      </div>
    </section>
  );
}

// Escala: 15 m del tiburón = 900 px. Una persona de 1.70 m = 102 px.
const PX_M = 60;
const PERSONA = 1.7;
const manchas = Array.from({ length: 70 }, (_, i) => {
  const x = 170 + ((i * 97) % 640);
  const y = 72 + ((i * 53) % 60);
  return { x, y, r: 2.2 + ((i * 7) % 3) };
});

function Nadador({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`} className="text-rosa" fill="currentColor">
      <circle cx="10" cy="0" r="7.5" />
      <rect x="18" y="-6" width="46" height="12" rx="6" />
      <path d="M62 -4 L92 -7 L92 -2 L64 4 Z M62 2 L92 5 L92 10 L64 6 Z" />
      <path d="M92 -9 L100 -12 L100 -2 Z M92 3 L100 0 L100 12 Z" opacity="0.8" />
      <path d="M26 -6 L36 -16 L40 -14 L32 -5 Z" />
    </g>
  );
}

function JuntoAlGigante() {
  const [grupo, setGrupo] = useState(4);
  const fila = grupo * PERSONA;
  const caben = Math.floor(tiburon.largo / PERSONA);
  const porFila = 8;
  const filas = Math.ceil(grupo / porFila);
  const compartido = grupo * nado.compartido.precio;
  const privadoOk = grupo <= nado.privado.maximo;
  const alto = 250 + filas * 34;

  return (
    <section id="tiburon" className="oscuro bg-profundo py-16 text-white sm:py-24">
      <div className="contenedor">
        <div className="max-w-3xl">
          <p className="antetitulo">Tu grupo junto al gigante</p>
          <h2 className="mt-2 text-4xl sm:text-5xl">¿Cuántos van a nadar con él?</h2>
          <p className="mt-4 text-lg text-white/85">El tiburón ballena es el pez más grande del planeta: algunos pasan de {tiburon.largo} metros y pesan hasta {tiburon.peso} toneladas. Pon a tu grupo en fila junto a uno y compara el tour compartido con el privado.</p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-[2rem] bg-gradient-to-b from-[#0d5a7e] to-[#083a55] ring-1 ring-white/10" tabIndex={0} aria-label="Escala del tiburón y tu grupo (desliza para ver completo)">
          <svg viewBox={`0 0 1000 ${alto}`} className="block w-full min-w-[680px]" role="img" aria-label={`Un tiburón ballena de ${tiburon.largo} metros y ${grupo} ${grupo === 1 ? 'persona' : 'personas'} en fila debajo, a escala`}>
            <g stroke="white" strokeOpacity="0.35" strokeWidth="1">
              {Array.from({ length: 16 }, (_, m) => (
                <g key={m}>
                  <line x1={50 + m * PX_M} x2={50 + m * PX_M} y1={alto - 30} y2={alto - (m % 5 === 0 ? 18 : 24)} />
                  {m % 5 === 0 && <text x={50 + m * PX_M} y={alto - 6} fill="white" fillOpacity="0.75" stroke="none" fontSize="14" textAnchor="middle">{m} m</text>}
                </g>
              ))}
              <line x1="50" x2="950" y1={alto - 30} y2={alto - 30} />
            </g>
            <path d="M50,110 C50,80 110,62 200,60 L520,52 C560,50 600,30 630,20 L660,55 L800,72 C840,76 870,70 900,42 L950,5 L932,98 L962,168 L895,120 C860,114 830,120 800,122 L520,136 C488,150 470,164 440,178 L432,140 L200,140 C120,140 50,135 50,110 Z" fill="#274f6e" stroke="#9fd8e8" strokeOpacity="0.4" strokeWidth="2" />
            <path d="M54,114 Q92,122 132,118" stroke="#0b2a3e" strokeWidth="3" fill="none" strokeLinecap="round" />
            <circle cx="104" cy="92" r="4" fill="#0b2a3e" />
            {manchas.map((m, i) => <circle key={i} cx={m.x} cy={m.y} r={m.r} fill="#e6f6fb" opacity="0.75" />)}
            {Array.from({ length: grupo }, (_, i) => (
              <Nadador key={i} x={50 + (i % porFila) * PERSONA * PX_M} y={215 + Math.floor(i / porFila) * 34} />
            ))}
          </svg>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div>
            <label htmlFor="grupo" className="text-lg font-semibold">Van {grupo} {grupo === 1 ? 'persona' : 'personas'}</label>
            <input id="grupo" type="range" min={1} max={12} value={grupo} onChange={(e) => setGrupo(Number(e.target.value))} className="mt-3 w-full accent-[#3fd0c9]" />
            <p className="mt-4 text-white/85" aria-live="polite">
              En fila, tu grupo mide unos <strong className="text-turquesa">{fila.toFixed(1)} m</strong> (1.70 m por persona). A lo largo de un tiburón de {tiburon.largo} m caben {caben} personas{grupo > caben ? ': ¡ustedes ya lo rebasan!' : '.'}
            </p>
            <p className="mt-3 text-sm text-white/70">La escala es aproximada. Los tiburones que veas pueden medir menos.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-3xl bg-white p-6 text-tinta">
              <h3 className="text-2xl text-profundo">{nado.compartido.nombre}</h3>
              <p className="mt-1 text-sm text-gris">Desde {pesos(nado.compartido.precio)} por persona</p>
              <p className="mt-4 font-titulo text-4xl font-extrabold text-rosaosc">{pesos(compartido)}</p>
              <p className="text-sm text-gris">{grupo} × {pesos(nado.compartido.precio)}</p>
              <a href={wa(`Hola, queremos el tour compartido de nado con tiburón ballena para ${grupo} ${grupo === 1 ? 'persona' : 'personas'}. ¿Qué fechas tienen?`)} className="boton mt-5 w-full bg-rosa text-white hover:bg-rosaosc"><Icono d={iWhats} /> Reservar compartido</a>
            </article>
            <article className={`rounded-3xl p-6 ${privadoOk ? 'bg-turquesa text-profundo' : 'bg-white/10 text-white'}`}>
              <h3 className={`text-2xl ${privadoOk ? 'text-profundo' : 'text-white'}`}>{nado.privado.nombre}</h3>
              <p className={`mt-1 text-sm ${privadoOk ? 'text-profundo/80' : 'text-white/80'}`}>Desde {pesos(nado.privado.precio)}, de 1 a {nado.privado.maximo} personas</p>
              {privadoOk ? (
                <>
                  <p className="mt-4 font-titulo text-4xl font-extrabold">{pesos(nado.privado.precio)}</p>
                  <p className="text-sm text-profundo/80">{grupo > 1 ? `unos ${pesos(Math.round(nado.privado.precio / grupo))} por persona` : 'todo el bote para ti'} · nado ilimitado y una hora de pesca</p>
                  <a href={wa(`Hola, queremos el tour privado VIP de tiburón ballena para ${grupo} ${grupo === 1 ? 'persona' : 'personas'}. ¿Qué fechas tienen?`)} className="boton mt-5 w-full bg-profundo text-white hover:bg-mar"><Icono d={iWhats} /> Reservar privado</a>
                </>
              ) : (
                <>
                  <p className="mt-4">Su precio publicado es para grupos de hasta {nado.privado.maximo}. Para {grupo}, pregunta por dos botes o una cotización.</p>
                  <a href={wa(`Hola, somos ${grupo} personas y nos interesa el tour privado de tiburón ballena. ¿Cómo lo cotizan?`)} className="boton mt-5 w-full bg-white text-profundo hover:bg-arena"><Icono d={iWhats} /> Preguntar</a>
                </>
              )}
            </article>
          </div>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          <img {...foto('tiburon')} alt="Tiburón ballena de frente bajo el agua azul" className="aspect-[16/9] w-full rounded-3xl object-cover" loading="lazy" />
          <div className="rounded-3xl bg-white/[0.07] p-6">
            <h3 className="text-2xl">Qué incluye</h3>
            <ul className="mt-3 space-y-1.5 text-white/90">
              {nado.privado.incluye.map((i, n) => (
                <li key={i} className="flex gap-2"><span className="text-turquesa" aria-hidden="true">•</span><span>{i}{n >= 5 && <span className="text-sm text-white/70"> (solo privado)</span>}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tours() {
  return (
    <section id="tours" className="py-16 sm:py-24">
      <div className="contenedor">
        <p className="antetitulo">En la isla</p>
        <h2 className="mt-2 text-4xl sm:text-5xl">Tours en Isla Holbox</h2>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tours.map((t) => (
            <li key={t.id} className="flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-profundo/10">
              {t.foto ? (
                <img {...foto(t.foto)} alt={t.alt} className="aspect-[4/3] w-full object-cover" loading="lazy" />
              ) : (
                <div className="relative aspect-[4/3] overflow-hidden bg-[#061a2a]" aria-hidden="true">
                  {Array.from({ length: 60 }, (_, i) => (
                    <span key={i} className="absolute rounded-full bg-turquesa" style={{ left: `${(i * 37) % 100}%`, top: `${55 + ((i * 23) % 40)}%`, width: 3 + (i % 3), height: 3 + (i % 3), opacity: 0.35 + (i % 5) / 8, boxShadow: '0 0 8px #3fd0c9' }} />
                  ))}
                  <span className="absolute inset-x-0 top-6 text-center font-titulo text-2xl font-bold text-white/90">El mar que brilla de noche</span>
                </div>
              )}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-2xl text-profundo">{t.nombre}</h3>
                <p className="text-sm font-semibold text-rosaosc">{t.sub}</p>
                <p className="mt-3 text-[0.98rem] text-gris">{t.incluye}</p>
                <p className="mt-auto pt-4"><span className="font-titulo text-3xl font-extrabold text-profundo">{t.precio}</span> <span className="text-sm text-gris">{t.nota ?? ''}</span></p>
                <a href={wa(`Hola, me interesa el tour ${t.nombre}. ¿Qué fechas tienen?`)} className="boton mt-3 border-2 border-rosa/40 text-rosaosc hover:border-rosa hover:bg-arena"><Icono d={iWhats} /> Reservar</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Excursiones() {
  return (
    <section id="excursiones" className="bg-white py-16 sm:py-24">
      <div className="contenedor">
        <p className="antetitulo">Desde Holbox, de un día</p>
        <h2 className="mt-2 text-4xl sm:text-5xl">Zonas arqueológicas y cenotes</h2>
        <p className="mt-4 max-w-2xl text-gris">Con transportación VIP ida y vuelta desde Holbox. Mínimo 3 personas.</p>
        <ul className="mt-10 grid gap-5 lg:grid-cols-3">
          {excursiones.map((e) => (
            <li key={e.nombre} className="flex flex-col rounded-3xl bg-arena p-6 ring-1 ring-profundo/10">
              <p className="inline-flex self-start rounded-full bg-profundo px-3 py-1 text-sm font-semibold text-white">{e.salidas}</p>
              <h3 className="mt-4 text-3xl text-profundo">{e.nombre}</h3>
              <p className="mt-2 text-gris">{e.incluye}</p>
              <p className="mt-auto pt-5"><span className="font-titulo text-3xl font-extrabold text-profundo">{e.precio}</span> <span className="text-sm text-gris">por persona</span></p>
              <a href={wa(`Hola, nos interesa la excursión ${e.nombre} (${e.salidas.toLowerCase()}). Somos ___ personas.`)} className="boton mt-3 bg-profundo text-white hover:bg-mar"><Icono d={iWhats} /> Apartar lugar</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Holbox() {
  return (
    <section id="holbox" className="py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2 lg:items-center">
        <img {...foto('playa')} alt="Palapa de palma y dos camastros de madera en la arena blanca frente al mar turquesa de Holbox" className="aspect-[4/3] w-full rounded-[2rem] object-cover" loading="lazy" />
        <div>
          <p className="antetitulo">El secreto mejor guardado de México</p>
          <h2 className="mt-2 text-4xl sm:text-5xl">Isla Holbox</h2>
          <p className="mt-4 text-gris">Una isla pequeña a 10 km de la costa noreste de la Península de Yucatán, en el municipio de Lázaro Cárdenas, Quintana Roo. Se llega por mar desde el puerto de Chiquilá, en 30 minutos de ferry.</p>
          <p className="mt-3 text-gris">No hay calles pavimentadas: todas son de arena blanca, y se anda en carrito de golf, moto o bicicleta. Es parte del Área de Protección de Flora y Fauna Yum Balam, decretada el 6 de junio de 1994, refugio de especies en peligro y santuario del tiburón ballena.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={negocio.transporte} className="boton bg-profundo text-white hover:bg-mar">Transporte a Holbox</a>
            <a href={negocio.guia} className="boton border-2 border-profundo/20 text-profundo hover:bg-white">Guía de Holbox gratis</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="oscuro bg-rosaosc py-16 text-white sm:py-20">
      <div className="contenedor grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-4xl sm:text-5xl">¡Listo para la aventura!</h2>
          <p className="mt-3 text-lg text-white/90">Escríbenos o llama para apartar tu tour.</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <a href={wa(saludo)} className="boton bg-white text-rosaosc hover:bg-arena"><Icono d={iWhats} /> WhatsApp</a>
          <a href={`tel:${negocio.telefono.tel}`} className="boton border-2 border-white/60 hover:bg-white/10"><Icono d={iTel} /> +52 {negocio.telefono.texto}</a>
          <a href={`mailto:${negocio.correo}`} className="boton border-2 border-white/60 hover:bg-white/10"><Icono d={iCorreo} /> {negocio.correo}</a>
          <a href={negocio.facebook} className="boton border border-white/40 hover:bg-white/10">Facebook</a>
          <a href={negocio.instagram} className="boton border border-white/40 hover:bg-white/10">Instagram</a>
          <a href={negocio.youtube} className="boton border border-white/40 hover:bg-white/10">YouTube</a>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro bg-profundo py-10 pb-24 text-sm text-white/80 md:pb-10">
      <div className="contenedor flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <img {...foto('logo-blanco')} alt="Holbox Tours" className="h-[46px] w-auto self-start" loading="lazy" />
        <p>Tours en {negocio.lugar} · <a href={negocio.reservas} className="underline underline-offset-4 hover:text-white">Reservas en línea</a></p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/10 bg-profundo text-white md:hidden">
      <a href={wa(saludo)} className="flex min-h-15 items-center justify-center gap-2 bg-rosa font-semibold"><Icono d={iWhats} /> WhatsApp</a>
      <a href={`tel:${negocio.telefono.tel}`} className="flex min-h-15 items-center justify-center gap-2 font-semibold"><Icono d={iTel} /> Llamar</a>
      <a href={`mailto:${negocio.correo}`} className="flex min-h-15 items-center justify-center gap-2 font-semibold"><Icono d={iCorreo} /> Correo</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <Encabezado />
      <main>
        <Portada />
        <JuntoAlGigante />
        <Tours />
        <Excursiones />
        <Holbox />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
