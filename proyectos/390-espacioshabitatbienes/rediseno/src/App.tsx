import { useState } from 'react';
import { asesores, foto, inmuebles, negocio, servicios, wa, waGeneral, type Foto, type Inmueble } from './data/content';

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

function Img({ f, className = '', loading = 'lazy' }: { f: Foto; className?: string; loading?: 'lazy' | 'eager' }) {
  return <img src={f.src} width={f.w} height={f.h} alt={f.alt} loading={loading} decoding="async" className={className} />;
}

const pesos = (n: number) => `$${Math.round(n).toLocaleString('es-MX')}`;
const m2 = (n: number) => `${n.toLocaleString('es-MX', { maximumFractionDigits: 2 })} m²`;
const precioCorto = (i: Inmueble) =>
  i.operacion === 'Renta' ? `${pesos(i.precio)} al mes` : `${pesos(i.precio)} MXN`;
const telDe = (n: string) => `tel:+52${n}`;
const telVisible = (n: string) => `${n.slice(0, 3)} ${n.slice(3, 6)} ${n.slice(6)}`;
const tel = `tel:${negocio.telLink}`;

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-marino/10 bg-white/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" aria-label="RE/MAX Espacios Hábitat, inicio" className="shrink-0">
          <img src={foto('logo.png')} alt="RE/MAX Espacios Hábitat" width={124} height={48} className="h-11 w-auto" />
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-6 font-semibold text-marino lg:flex">
          <a href="#metro" className="hover:text-rojo-hondo">Inmuebles</a>
          <a href="#vender" className="hover:text-rojo-hondo">Vende o renta</a>
          <a href="#asesores" className="hover:text-rojo-hondo">Asesores</a>
          <a href="#oficina" className="hover:text-rojo-hondo">Oficina</a>
        </nav>
        <a href={waGeneral} className="btn !min-h-[40px] !px-4 !py-2 text-sm" target="_blank" rel="noopener"><IconoWa className="h-4 w-4" /> Escríbenos</a>
      </div>
    </header>
  );
}

const porId = Object.fromEntries(inmuebles.map((i) => [i.id, i])) as Record<string, Inmueble>;

function Portada() {
  const a = porId['los-santos'].foto!, b = porId['lomas-altas'].foto!, c = porId['luz-valencia'].foto!;
  return (
    <section id="inicio" className="overflow-hidden">
      <div className="contenedor grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1fr_1.05fr] lg:py-24">
        <div className="min-w-0">
          <p className="font-semibold text-rojo-hondo">RE/MAX Espacios Hábitat, en Hermosillo</p>
          <h1 className="mt-3 text-5xl sm:text-6xl lg:text-7xl">Bienes raíces en Hermosillo</h1>
          <p className="mt-6 max-w-xl text-lg">La inmobiliaria RE/MAX Espacios Hábitat en Hermosillo te ayuda a la venta, renta y gestión de inmuebles residenciales, comerciales e industriales, con la atención de expertos asesores inmobiliarios.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#metro" className="btn">Ver inmuebles metro a metro</a>
            <a href={waGeneral} className="btn-linea" target="_blank" rel="noopener"><IconoWa /> Hablar con un asesor</a>
          </div>
        </div>
        <div className="grid min-w-0 grid-cols-[1.5fr_1fr] gap-3">
          <Img f={a} loading="eager" className="row-span-2 h-full w-full min-w-0 rounded-md object-cover" />
          <Img f={b} loading="eager" className="aspect-[4/3] w-full min-w-0 rounded-md object-cover" />
          <Img f={c} loading="eager" className="aspect-[4/3] w-full min-w-0 rounded-md object-cover" />
        </div>
      </div>
    </section>
  );
}

/* ---------- Metro a metro: todos los inmuebles dibujados a la misma escala ---------- */

const CANCHA = { largo: 105, ancho: 68 }; // medidas de una cancha de fútbol reglamentaria (FIFA), como referencia
const CANCHA_M2 = CANCHA.largo * CANCHA.ancho;
const LADO_MAX = Math.sqrt(Math.max(...inmuebles.map((i) => i.terreno)));
const MARGEN = 4;
const VB = Math.ceil(LADO_MAX) + MARGEN * 2; // lado del plano, en metros
const BASE = VB - MARGEN; // la esquina donde se apoyan todos los lotes (abajo a la izquierda)

function comparacion(m: number) {
  if (m >= CANCHA_M2 * 0.95) return `Equivale a ${(m / CANCHA_M2).toLocaleString('es-MX', { maximumFractionDigits: 1 })} canchas de fútbol.`;
  if (m >= CANCHA_M2 * 0.5) return `Es el ${Math.round((m / CANCHA_M2) * 100)} % de una cancha de fútbol.`;
  return `En una cancha de fútbol cabe ${Math.floor(CANCHA_M2 / m)} veces.`;
}

function porMetro(i: Inmueble) {
  if (i.operacion === 'Renta') return { valor: `${pesos(i.precio / i.terreno)} al mes`, base: 'por m² del departamento' };
  if (i.construccion) return { valor: pesos(i.precio / i.construccion), base: 'por m² construido' };
  return { valor: pesos(i.precio / i.terreno), base: 'por m² de terreno' };
}

function Plano({ sel, cancha }: { sel: Inmueble; cancha: boolean }) {
  const lado = Math.sqrt(sel.terreno);
  const ladoC = sel.construccion ? Math.sqrt(sel.construccion) : 0;
  const lineas = [];
  for (let m = 10; m < VB - MARGEN * 2; m += 10) {
    lineas.push(<line key={`v${m}`} x1={MARGEN + m} y1={MARGEN} x2={MARGEN + m} y2={BASE} />);
    lineas.push(<line key={`h${m}`} x1={MARGEN} y1={BASE - m} x2={VB - MARGEN} y2={BASE - m} />);
  }
  const ordenados = [...inmuebles].sort((a, b) => b.terreno - a.terreno);
  const etiquetaDentro = lado > VB - MARGEN * 2 - 30;
  return (
    <svg viewBox={`0 0 ${VB} ${VB}`} role="img" aria-labelledby="plano-titulo plano-desc" className="block h-auto w-full rounded-md bg-white ring-1 ring-marino/15">
      <title id="plano-titulo">{`${sel.corto}: ${m2(sel.terreno)} dibujados a escala`}</title>
      <desc id="plano-desc">Cada inmueble destacado se dibuja como un cuadro con su misma superficie, todos a la misma escala y apoyados en la misma esquina. La cuadrícula es de 10 metros.</desc>
      <g stroke="#0b1f5c" strokeOpacity="0.08" strokeWidth="0.25">{lineas}</g>
      <rect x={MARGEN} y={MARGEN} width={VB - MARGEN * 2} height={VB - MARGEN * 2} fill="none" stroke="#0b1f5c" strokeOpacity="0.15" strokeWidth="0.3" />
      {ordenados.map((i) => {
        const l = Math.sqrt(i.terreno);
        return i.id === sel.id ? null : (
          <rect key={i.id} className="lote" x={MARGEN} y={BASE - l} width={l} height={l} fill="none" stroke="#7a5a2e" strokeOpacity="0.5" strokeWidth="0.35" />
        );
      })}
      <g key={sel.id} className="asienta">
        <rect x={MARGEN} y={BASE - lado} width={lado} height={lado} fill="#e8dcc4" />
        {ladoC > 0 && <rect x={MARGEN} y={BASE - ladoC} width={ladoC} height={ladoC} fill="#0b1f5c" fillOpacity="0.85" />}
        <rect x={MARGEN} y={BASE - lado} width={lado} height={lado} fill="none" stroke="#9c0c23" strokeWidth="0.8" />
      </g>
      <text x={etiquetaDentro ? MARGEN + 3 : MARGEN + lado + 1.5} y={etiquetaDentro ? BASE - lado + 7 : BASE - lado + 3.2} fontSize="4.2" fontWeight="700" fill="#0b1f5c" stroke="#fff" strokeWidth="1.2" paintOrder="stroke" fontFamily="Inter, sans-serif">{m2(Math.round(sel.terreno))}</text>
      {cancha && (
        <g fill="none" stroke="#c8102e" strokeWidth="0.55" strokeDasharray="1.6 1.1">
          <rect x={MARGEN} y={BASE - CANCHA.ancho} width={CANCHA.largo} height={CANCHA.ancho} />
          <line x1={MARGEN + CANCHA.largo / 2} y1={BASE - CANCHA.ancho} x2={MARGEN + CANCHA.largo / 2} y2={BASE} />
          <circle cx={MARGEN + CANCHA.largo / 2} cy={BASE - CANCHA.ancho / 2} r="9.15" />
        </g>
      )}
      <g transform={`translate(${VB - MARGEN - 24} ${MARGEN + 5})`}>
        <rect x="-2" y="-3" width="24" height="10" fill="#fff" />
        <line x1="0" y1="0" x2="20" y2="0" stroke="#3b4152" strokeWidth="0.6" />
        <line x1="0" y1="-1.2" x2="0" y2="1.2" stroke="#3b4152" strokeWidth="0.6" />
        <line x1="20" y1="-1.2" x2="20" y2="1.2" stroke="#3b4152" strokeWidth="0.6" />
        <text x="10" y="5.4" fontSize="3.8" textAnchor="middle" fill="#3b4152" fontFamily="Inter, sans-serif">20 m</text>
      </g>
    </svg>
  );
}

function Selector({ sel, elegir }: { sel: Inmueble; elegir: (id: string) => void }) {
  const grupos: [string, Inmueble['grupo']][] = [['Para vivir', 'vivir'], ['Para construir o invertir', 'invertir']];
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
      {grupos.map(([titulo, g]) => (
        <fieldset key={g} className="min-w-0">
          <legend className="font-titulo text-lg font-bold text-marino">{titulo}</legend>
          <ul className="mt-2 divide-y divide-marino/10 border-y border-marino/10">
            {inmuebles.filter((i) => i.grupo === g).map((i) => {
              const on = i.id === sel.id;
              return (
                <li key={i.id}>
                  <button type="button" aria-pressed={on} onClick={() => elegir(i.id)}
                    className={`flex min-h-[44px] w-full items-baseline justify-between gap-3 px-3 py-2.5 text-left transition-colors ${on ? 'bg-marino text-white' : 'text-marino hover:bg-tierra/50'}`}>
                    <span className="min-w-0 font-semibold leading-snug">{i.corto}</span>
                    <span className={`shrink-0 text-sm tabular-nums ${on ? 'text-white/85' : 'text-texto'}`}>{m2(Math.round(i.terreno))}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </fieldset>
      ))}
    </div>
  );
}

function Ficha({ i }: { i: Inmueble }) {
  const pm = porMetro(i);
  const mensaje = `Hola, me interesa el inmueble "${i.titulo}" (${precioCorto(i)}) que vi en su sitio. Asesor: ${i.asesor}. ¿Me pueden dar más información?`;
  return (
    <article className="min-w-0" aria-live="polite">
      {i.foto ? (
        <Img f={i.foto} className="aspect-[4/3] w-full rounded-md object-cover" />
      ) : (
        <div className="flex aspect-[4/3] w-full items-center justify-center rounded-md bg-tierra/60 p-6 text-center text-tierra-honda">
          <p className="font-semibold">Sin foto publicada. {i.sinFoto}</p>
        </div>
      )}
      <p className="mt-4 text-sm font-semibold text-rojo-hondo">{i.operacion === 'Renta' ? 'En renta' : 'En venta'}</p>
      <h3 className="mt-1 text-2xl">{i.titulo}</h3>
      <p className="mt-1 text-[0.95rem]">{i.zona}.</p>
      <p className="mt-3 font-titulo text-3xl font-extrabold text-marino">{precioCorto(i)}</p>
      <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-[0.95rem]">
        <div><dt className="text-sm">{i.construccion || i.grupo === 'invertir' ? 'Terreno' : 'Superficie'}</dt><dd className="font-semibold text-marino">{m2(i.terreno)}</dd></div>
        {i.construccion && <div><dt className="text-sm">Construcción</dt><dd className="font-semibold text-marino">{m2(i.construccion)}</dd></div>}
        {i.recamaras && <div><dt className="text-sm">Recámaras</dt><dd className="font-semibold text-marino">{i.recamaras}</dd></div>}
        {i.banos && <div><dt className="text-sm">Baños</dt><dd className="font-semibold text-marino">{i.banos}</dd></div>}
        <div className="col-span-2"><dt className="text-sm">Precio {pm.base}</dt><dd className="font-semibold text-marino">{pm.valor}</dd></div>
      </dl>
      <p className="mt-4 text-[0.95rem]">{i.detalle}</p>
      <p className="mt-3 text-[0.95rem]">Asesor: <strong className="text-marino">{i.asesor}</strong>, <a href={telDe(i.telAsesor)} className="enlace">{telVisible(i.telAsesor)}</a></p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a href={wa(mensaje)} className="btn" target="_blank" rel="noopener"><IconoWa /> Me interesa</a>
        <a href={i.ficha} className="btn-linea" target="_blank" rel="noopener">Ver ficha completa</a>
      </div>
    </article>
  );
}

function MetroAMetro() {
  const [selId, setSelId] = useState('los-santos');
  const [cancha, setCancha] = useState(true);
  const sel = porId[selId];
  const lado = Math.sqrt(sel.terreno);
  return (
    <section id="metro" className="border-y border-marino/10 bg-white py-16 sm:py-24">
      <div className="contenedor">
        <div className="max-w-3xl">
          <h2 className="text-4xl sm:text-5xl">Metro a metro</h2>
          <p className="mt-4 text-lg">Sus nueve inmuebles destacados, del departamento de 66 m² al terreno de 12,675 m², dibujados a la misma escala. Elige uno y compáralo con los demás y con una cancha de fútbol.</p>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[14rem_minmax(0,1.2fr)_minmax(0,0.9fr)] lg:gap-10">
          <div className="min-w-0"><Selector sel={sel} elegir={setSelId} /></div>
          <div className="min-w-0">
            <Plano sel={sel} cancha={cancha} />
            <div className="mt-4 flex flex-wrap items-start justify-between gap-3">
              <p className="min-w-0 max-w-md text-[0.95rem]">
                <strong className="text-marino">{sel.corto}: {m2(sel.terreno)}</strong>, un cuadro de {lado.toLocaleString('es-MX', { maximumFractionDigits: 1 })} m por lado. {comparacion(sel.terreno)}
                {sel.construccion ? <> En azul, sus {m2(sel.construccion)} construidos.</> : null}
              </p>
              <label className="flex min-h-[44px] cursor-pointer items-center gap-2 text-[0.95rem] font-semibold text-marino">
                <input type="checkbox" checked={cancha} onChange={(e) => setCancha(e.target.checked)} className="h-5 w-5 accent-rojo" />
                Cancha de fútbol
              </label>
            </div>
          </div>
          <div className="min-w-0"><Ficha i={sel} /></div>
        </div>
        <p className="mt-10 max-w-3xl text-sm">Cada inmueble se dibuja como un cuadro con su misma superficie, no con la forma de su terreno. El precio por metro divide el precio publicado entre los metros de su ficha. Precios y medidas de las fichas de su sitio; pueden cambiar sin previo aviso.</p>
      </div>
    </section>
  );
}

function VendeORenta() {
  return (
    <section id="vender" className="noche bg-marino py-16 text-white/85 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="min-w-0">
          <h2 className="text-4xl sm:text-5xl">¿Quieres vender o rentar tu propiedad?</h2>
          <p className="mt-5 text-lg">Brindamos asesoría personalizada a clientes para que vendan o renten su propiedad en el menor tiempo posible a un precio justo de mercado, y para encontrar el inmueble de sus sueños de una forma segura, fácil y sin complicaciones.</p>
          <a href={wa('Hola, quiero asesoría para vender o rentar mi propiedad con RE/MAX Espacios Hábitat.')} className="btn mt-8" target="_blank" rel="noopener"><IconoWa /> Quiero vender o rentar</a>
        </div>
        <div className="min-w-0 border-t border-white/20 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          <p>No es lo mismo vender, comprar o rentar, ni es lo mismo un hogar que una inversión. Por eso trabajamos con procesos, herramientas y marketing inmobiliario enfocados en resultados: análisis de mercado, posicionamiento del inmueble, difusión multicanal, filtrado de prospectos y seguimiento puntual.</p>
          <h3 className="mt-8 text-xl">Servicios</h3>
          <p className="mt-2 text-lg font-semibold text-white">{servicios.join(', ')}.</p>
        </div>
      </div>
    </section>
  );
}

function Asesores() {
  return (
    <section id="asesores" className="py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="min-w-0">
          <h2 className="text-4xl sm:text-5xl">Un equipo de asesores en Hermosillo</h2>
          <p className="mt-5 text-lg">En RE/MAX Espacios Hábitat somos un equipo de profesionales inmobiliarios en Hermosillo comprometidos con algo muy simple: que tu operación se haga bien, con estrategia, con información clara y con acompañamiento real de principio a fin.</p>
          <p className="mt-4">Creemos en relaciones de largo plazo. Por eso nuestra promesa es estar presentes, comunicar con honestidad y actuar con ética profesional en cada decisión.</p>
          <div className="mt-8 rounded-md bg-tierra/60 p-6">
            <h3 className="text-xl">¿Quieres ser asesor?</h3>
            <p className="mt-2">Si tienes deseos de emprender, disfrutar de más tiempo y mejorar tu nivel de vida, únete a RE/MAX. No es necesaria experiencia: te enseñamos el proceso, los sistemas y los métodos para tener éxito en el negocio de bienes raíces.</p>
            <a href={wa('¡Hola! Quiero unirme a RE/MAX Espacios Hábitat.', negocio.whatsappUnete)} className="enlace mt-3 inline-block" target="_blank" rel="noopener">Pedir una entrevista por WhatsApp</a>
          </div>
        </div>
        <div className="min-w-0">
          <ul className="grid border-t border-marino/15 sm:grid-cols-2 sm:gap-x-8">
            {asesores.map(([nombre, cel]) => (
              <li key={nombre} className="flex items-baseline justify-between gap-3 border-b border-marino/15 py-3.5">
                <span className="min-w-0 font-semibold text-marino">{nombre}</span>
                <a href={telDe(cel)} className="shrink-0 text-[0.95rem] tabular-nums text-rojo-hondo underline-offset-4 hover:underline">{telVisible(cel)}</a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm">Hay más asesores en <a href="https://espacioshabitat.com/asesores/" className="enlace" target="_blank" rel="noopener">la página de asesores</a>.</p>
        </div>
      </div>
    </section>
  );
}

function Oficina() {
  return (
    <section id="oficina" className="border-t border-marino/10 bg-white py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div className="min-w-0">
          <h2 className="text-4xl sm:text-5xl">La oficina, en Valle Grande</h2>
          <p className="mt-5 text-lg">{negocio.direccion}.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={negocio.mapa} className="btn" target="_blank" rel="noopener"><IconoPin /> Ver en Google Maps</a>
            <a href={tel} className="btn-linea"><IconoTel /> {negocio.telefono}</a>
          </div>
        </div>
        <div className="min-w-0">
          <table className="w-full text-left">
            <caption className="mb-2 text-left font-titulo text-xl font-bold text-marino">Horario</caption>
            <tbody>
              {negocio.horario.map(([d, h]) => (
                <tr key={d} className="border-b border-marino/15"><th scope="row" className="py-3 font-semibold text-marino">{d}</th><td className="py-3 text-right tabular-nums">{h}</td></tr>
              ))}
            </tbody>
          </table>
          <p className="mt-6"><a href={`mailto:${negocio.correo}`} className="enlace">{negocio.correo}</a></p>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            <li><a href={negocio.facebook} className="enlace" target="_blank" rel="noopener">Facebook</a></li>
            <li><a href={negocio.instagram} className="enlace" target="_blank" rel="noopener">Instagram</a></li>
            <li><a href={negocio.linkedin} className="enlace" target="_blank" rel="noopener">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="noche bg-marino pb-28 pt-12 text-sm text-white/80 md:pb-10">
      <div className="contenedor flex flex-wrap items-center justify-between gap-4">
        <img src={foto('logo-blanco.png')} alt="RE/MAX Espacios Hábitat" width={124} height={48} className="h-10 w-auto" />
        <p>Inmobiliaria en Hermosillo: inmuebles residenciales, comerciales e industriales. Tel. <a href={tel} className="enlace">{negocio.telefono}</a></p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-marino text-[0.8rem] font-semibold text-white md:hidden">
      <a href={waGeneral} className="flex flex-col items-center gap-1 bg-rojo py-3" target="_blank" rel="noopener"><IconoWa />WhatsApp</a>
      <a href={tel} className="flex flex-col items-center gap-1 py-3"><IconoTel />Llamar</a>
      <a href={negocio.mapa} className="flex flex-col items-center gap-1 py-3" target="_blank" rel="noopener"><IconoPin />Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#metro" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-marino">Ir a los inmuebles</a>
      <Encabezado />
      <main>
        <Portada />
        <MetroAMetro />
        <VendeORenta />
        <Asesores />
        <Oficina />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
