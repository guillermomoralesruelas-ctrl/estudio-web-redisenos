import { useState } from 'react';
import {
  espacios, negocio, portada, preguntas, refugio, servicios, spa, testimonios, unica, wa,
  type Espacio, type Foto,
} from './data/content';
import { amenidades, noches, planes, politica, suites, type Amenidad, type Noche, type Plan, type Suite } from './data/suites';

const externo = { target: '_blank', rel: 'noopener' } as const;
const pesos = (n: number) => `$${n.toLocaleString('es-MX', { maximumFractionDigits: 0 })}`;
const desde = Math.min(...suites.map((s) => s.precio.semana.europeo));

// El arco lobulado de la cabecera de sus suites y de sus puertas (en una caja de 100 x 160).
const ARCO = 'M8 160V66C8 54 15 47 24 45C27 35 35 29 43 27C45 17 48 10 50 4C52 10 55 17 57 27C65 29 73 35 76 45C85 47 92 54 92 66V160Z';

const Icono = {
  wa: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3a.5.5 0 0 0 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4 5.2 5.2 0 0 0 3.2.7 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z" /></svg>
  ),
  tel: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>
  ),
  mapa: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
  ),
  cal: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15" rx="2" /><path d="M3.5 10h17M8 3v4m8-4v4" /></svg>
  ),
};

function Img({ foto, className = '', eager = false }: { foto: Foto; className?: string; eager?: boolean }) {
  return <img src={foto.src} alt={foto.alt} width={foto.w} height={foto.h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={`size-full object-cover ${className}`} />;
}

/** El trazado del arco como máscara para fotos (clase .arco). */
function ArcoDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id="arco-clip" clipPathUnits="objectBoundingBox">
          <path d={ARCO} transform="scale(0.01 0.00625)" />
        </clipPath>
      </defs>
    </svg>
  );
}

// ---------- Encabezado y portada ----------

const nav = [
  { href: '#suites', label: 'Suites' },
  { href: '#spa', label: 'Spa' },
  { href: '#restaurante', label: 'Restaurante y eventos' },
  { href: '#preguntas', label: 'Preguntas' },
  { href: '#contacto', label: 'Contacto' },
];

function Encabezado() {
  const [abierto, setAbierto] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-arena/95 backdrop-blur">
      <div className="contenedor flex h-[4.5rem] items-center justify-between gap-4">
        <a href="#inicio" className="min-w-0 shrink" aria-label="La Mezquita, volver al inicio">
          <img src={negocio.logo.src} alt="" width={negocio.logo.w} height={negocio.logo.h} className="h-9 w-auto sm:h-10" />
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {nav.map((n) => <a key={n.href} href={n.href} className="text-[0.95rem] font-medium text-tinta hover:text-cobre-oscuro">{n.label}</a>)}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <a href={negocio.reservar} {...externo} className="btn hidden sm:inline-flex">Reservar</a>
          <button type="button" onClick={() => setAbierto((v) => !v)} aria-expanded={abierto} aria-controls="menu-movil" aria-label="Abrir el menú"
            className="grid size-11 place-items-center rounded-full border border-tinta/25 text-tinta lg:hidden">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">{abierto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}</svg>
          </button>
        </div>
      </div>
      {abierto && (
        <nav id="menu-movil" className="border-t border-tinta/10 lg:hidden" aria-label="Menú del celular">
          <div className="contenedor flex flex-col py-3">
            {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setAbierto(false)} className="titulo border-b border-tinta/10 py-3 text-2xl text-tinta">{n.label}</a>)}
          </div>
        </nav>
      )}
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="contenedor grid items-center gap-10 pb-16 pt-10 md:grid-cols-12 md:pb-24 md:pt-14">
      <div className="min-w-0 md:col-span-7">
        <p className="titulo text-2xl italic text-cobre-oscuro">La Mezquita, hotel boutique & spa en Aguascalientes</p>
        <h1 className="titulo mt-3 text-[clamp(2.9rem,7vw,5.6rem)] leading-[0.95]">{refugio.titulo}</h1>
        <p className="mt-6 max-w-xl text-lg">{portada.texto}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={negocio.reservar} {...externo} className="btn">{Icono.cal} Reservar en línea</a>
          <a href={wa(negocio.saludo)} {...externo} className="btn-linea">{Icono.wa} Escríbenos por WhatsApp</a>
        </div>
        <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-tinta/15 pt-6 sm:grid-cols-4">
          <div><dt className="text-sm">Check-in</dt><dd className="font-semibold text-tinta">3:00 p.m.</dd></div>
          <div><dt className="text-sm">Check-out</dt><dd className="font-semibold text-tinta">12:00 p.m.</dd></div>
          <div><dt className="text-sm">Huéspedes</dt><dd className="font-semibold text-tinta">Solo adultos</dd></div>
          <div><dt className="text-sm">Suites</dt><dd className="font-semibold text-tinta">Desde {pesos(desde)} la noche</dd></div>
        </dl>
      </div>
      <div className="min-w-0 md:col-span-5">
        <div className="relative mx-auto max-w-[23rem]">
          <svg viewBox="0 0 100 160" className="pointer-events-none absolute -left-3 -top-3 h-[calc(100%+1.5rem)] w-[calc(100%+1.5rem)]" aria-hidden="true" preserveAspectRatio="none">
            <path d={ARCO} fill="none" stroke="var(--color-cobre)" strokeWidth="0.6" vectorEffect="non-scaling-stroke" />
          </svg>
          <div className="arco aspect-[10/16] bg-crema"><Img foto={portada.foto} eager /></div>
        </div>
      </div>
      <p className="min-w-0 text-[0.95rem] md:col-span-12">
        <span className="font-semibold text-tinta">Todo en un solo lugar:</span> {portada.todo.join(', ').replace(/, ([^,]*)$/, ' y $1')}.
      </p>
    </section>
  );
}

function Refugio() {
  return (
    <section className="bg-crema py-16 md:py-20">
      <div className="contenedor grid gap-8 md:grid-cols-12">
        <h2 className="titulo min-w-0 text-[clamp(2rem,4vw,3rem)] md:col-span-4">Un concepto único en Aguascalientes</h2>
        <div className="min-w-0 space-y-4 text-lg md:col-span-8">
          {refugio.parrafos.map((p) => <p key={p}>{p}</p>)}
        </div>
      </div>
    </section>
  );
}

// ---------- Elemento memorable: "Seis suites, seis puertas" ----------

type Filtro = Amenidad | 'grupo';
const filtros: { id: Filtro; label: string }[] = [
  { id: 'jacuzzi', label: 'Jacuzzi' },
  { id: 'tina', label: 'Tina' },
  { id: 'pantalla', label: 'Pantalla' },
  { id: 'grupo', label: 'Para 3 o 4 personas' },
];

const cumple = (s: Suite, f: Filtro[]) => f.every((x) => (x === 'grupo' ? s.personas >= 3 : s.amenidades.includes(x)));

function Puerta({ s, luz, activa, precio, onClick }: { s: Suite; luz: boolean; activa: boolean; precio: number; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} aria-pressed={activa}
      aria-label={`${s.nombre}, ${s.tipo.toLowerCase()}, ${pesos(precio)} la noche${luz ? '' : ', no tiene lo que buscas'}`}
      className={`group flex min-w-0 flex-col items-center rounded-2xl px-1 pb-3 pt-2 text-center transition-colors ${activa ? 'bg-arena/10' : 'hover:bg-arena/5'}`}>
      <svg viewBox="0 0 100 160" className="w-full max-w-[8.5rem]" aria-hidden="true">
        <defs>
          <radialGradient id={`luz-${s.id}`} cx="50%" cy="62%" r="70%">
            <stop offset="0%" stopColor="#ffe3a8" />
            <stop offset="45%" stopColor="#e9a85a" />
            <stop offset="100%" stopColor="#8e4a22" />
          </radialGradient>
        </defs>
        <path d={ARCO} fill="#2a211b" />
        <path d={ARCO} fill={`url(#luz-${s.id})`} className="puerta-luz" opacity={luz ? 1 : 0} />
        {/* Hojas de la puerta y la lámpara colgante */}
        <path d="M50 30V160" stroke={luz ? '#8e4a22' : '#3a2e26'} strokeWidth="1.2" />
        <line x1="50" y1="30" x2="50" y2="58" stroke={luz ? '#5a2a12' : '#4a3c31'} strokeWidth="0.8" />
        <path d="M44 58h12l-2 9h-8Z" fill={luz ? '#fff1cf' : '#4a3c31'} />
        <path d={ARCO} fill="none" stroke={activa ? '#e9c98c' : luz ? '#d9b56f' : '#5a4a3f'} strokeWidth={activa ? 3 : 1.6} />
      </svg>
      <span className={`titulo mt-3 text-[1.35rem] leading-tight ${luz ? 'text-arena' : 'text-arena/60'}`}>{s.nombre}</span>
      <span className={`precio text-[0.85rem] ${luz ? 'text-oro' : 'text-arena/55'}`}>{pesos(precio)}</span>
    </button>
  );
}

function SeisPuertas() {
  const [sel, setSel] = useState<Filtro[]>([]);
  const [noche, setNoche] = useState<Noche>('semana');
  const [plan, setPlan] = useState<Plan>('europeo');
  const [id, setId] = useState(suites[0].id);

  const coinciden = suites.filter((s) => cumple(s, sel));
  const suite = suites.find((s) => s.id === id)!;
  const tieneLo = cumple(suite, sel);

  const alternar = (f: Filtro) => {
    const nuevo = sel.includes(f) ? sel.filter((x) => x !== f) : [...sel, f];
    setSel(nuevo);
    const primera = suites.find((s) => cumple(s, nuevo));
    if (primera && !cumple(suite, nuevo)) setId(primera.id);
  };

  const mensaje = `Hola, me interesa la suite ${suite.nombre} (${suite.tipo.toLowerCase()}) con ${planes[plan].nombre}, para una noche de ${noches[noche].toLowerCase()}. ¿Tienen disponible el día __? Seríamos __ personas.`;
  const segmento = (activo: boolean) =>
    `rounded-full px-4 py-2 text-[0.9rem] font-medium transition-colors ${activo ? 'bg-arena text-tinta' : 'text-arena hover:bg-arena/10'}`;

  return (
    <section id="suites" className="oscuro bg-noche py-20 text-arena/85 md:py-28">
      <div className="contenedor">
        <div className="max-w-3xl">
          <h2 className="titulo text-[clamp(2.6rem,5.6vw,4.6rem)]">Seis suites, seis puertas</h2>
          <p className="mt-4 text-lg">Cada suite de La Mezquita tiene nombre propio. Dinos qué no puede faltar y se encienden las puertas de las que lo tienen, con su precio por noche.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr_1fr]">
          <fieldset className="min-w-0">
            <legend className="mb-3 font-medium text-oro">¿Qué no puede faltar?</legend>
            <div className="flex flex-wrap gap-2">
              {filtros.map((f) => (
                <button key={f.id} type="button" onClick={() => alternar(f.id)} aria-pressed={sel.includes(f.id)}
                  className={`rounded-full border px-4 py-2 text-[0.9rem] font-medium transition-colors ${sel.includes(f.id) ? 'border-oro bg-oro text-tinta' : 'border-arena/30 text-arena hover:border-arena'}`}>
                  {f.label}
                </button>
              ))}
            </div>
          </fieldset>
          <fieldset className="min-w-0">
            <legend className="mb-3 font-medium text-oro">¿Qué noche?</legend>
            <div className="inline-flex flex-wrap gap-1 rounded-full border border-arena/25 p-1">
              {(Object.keys(noches) as Noche[]).map((n) => (
                <button key={n} type="button" onClick={() => setNoche(n)} aria-pressed={noche === n} className={segmento(noche === n)}>{noches[n]}</button>
              ))}
            </div>
          </fieldset>
          <fieldset className="min-w-0">
            <legend className="mb-3 font-medium text-oro">¿Qué plan?</legend>
            <div className="inline-flex flex-wrap gap-1 rounded-full border border-arena/25 p-1">
              {(Object.keys(planes) as Plan[]).map((p) => (
                <button key={p} type="button" onClick={() => setPlan(p)} aria-pressed={plan === p} className={segmento(plan === p)}>{planes[p].corto}</button>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-x-2 gap-y-6 sm:gap-x-4 lg:grid-cols-6" role="group" aria-label="Las seis suites">
          {suites.map((s) => (
            <Puerta key={s.id} s={s} luz={cumple(s, sel)} activa={s.id === id} precio={s.precio[noche][plan]} onClick={() => setId(s.id)} />
          ))}
        </div>
        <p className="mt-4 text-center text-[0.95rem]" aria-live="polite">
          {coinciden.length === 0
            ? 'Ninguna suite tiene todo eso junto: quita una opción.'
            : sel.length === 0
              ? 'Precio por noche para 2 personas, con impuestos. Toca una puerta para ver su suite.'
              : coinciden.length === 1 ? 'Una suite lo tiene.' : `${coinciden.length} suites lo tienen.`}
        </p>

        <article className="mt-10 grid gap-8 rounded-3xl border border-oro/30 p-6 sm:p-9 md:grid-cols-12" aria-live="polite">
          <div className="min-w-0 md:col-span-7">
            <p className="text-oro">{suite.tipo}, hasta {suite.personas} personas</p>
            <h3 className="titulo mt-1 text-5xl">{suite.nombre}</h3>
            {!tieneLo && <p className="mt-2 text-[0.95rem] text-oro-claro">Esta suite no tiene todo lo que elegiste.</p>}
            <p className="mt-4">
              {suite.amenidades.length
                ? `${suite.amenidades.map((a) => amenidades[a]).join(', ').replace(/, ([^,]*)$/, ' y $1')}.`
                : 'Su motor de reservas no enlista sus amenidades: pregúntalas por WhatsApp.'}
            </p>
            <p className="mt-4 text-[0.95rem] text-arena/75">{planes[plan].nombre}: {planes[plan].que}</p>
          </div>
          <div className="min-w-0 md:col-span-5">
            <dl className="divide-y divide-arena/15 border-y border-arena/15">
              {(Object.keys(planes) as Plan[]).map((p) => (
                <div key={p} className={`flex items-baseline justify-between gap-4 py-3 ${p === plan ? 'text-arena' : ''}`}>
                  <dt>{planes[p].nombre}<span className="block text-[0.85rem] text-arena/70">{planes[p].corto}</span></dt>
                  <dd className={`precio titulo shrink-0 text-3xl ${p === plan ? 'text-oro-claro' : 'text-arena/70'}`}>{pesos(suite.precio[noche][p])}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-2 text-[0.85rem] text-arena/70">Por noche de {noches[noche].toLowerCase()}, para 2 personas, con impuestos.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={negocio.reservar} {...externo} className="btn-oro">{Icono.cal} Reservar en línea</a>
              <a href={wa(mensaje)} {...externo} className="btn-claro">{Icono.wa} Preguntar por WhatsApp</a>
            </div>
          </div>
        </article>

        <div className="mt-14 grid gap-8 md:grid-cols-12">
          <h3 className="titulo min-w-0 text-3xl md:col-span-4">Antes de reservar</h3>
          <ul className="min-w-0 space-y-2 md:col-span-8">
            {politica.map((t) => <li key={t} className="border-b border-arena/10 pb-2">{t}</li>)}
          </ul>
        </div>
        <p className="mt-6 text-[0.85rem] text-arena/70">
          Suites, planes, precios y política tomados de su motor de reservas el 27 de septiembre de 2026; las tarifas cambian según la fecha y la disponibilidad. Las puertas son un dibujo, no la foto de cada suite.
        </p>
      </div>
    </section>
  );
}

// ---------- Spa & Experiencias ----------

function Spa() {
  return (
    <section id="spa" className="oscuro bg-azulejo py-20 text-arena/90 md:py-28">
      <div className="contenedor grid gap-12 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-5">
          <h2 className="titulo text-[clamp(2.4rem,5vw,4rem)]">{spa.titulo}</h2>
          <p className="mt-4 text-lg">{spa.intro}</p>
          <p className="mt-4">Masajes: {spa.masajes.join(', ').replace(/, ([^,]*)$/, ' y $1').toLowerCase()}.</p>
          <div className="mt-8 aspect-[3/2] overflow-hidden rounded-2xl"><Img foto={spa.foto} /></div>
          <a href={wa('Hola, quiero reservar en el spa de La Mezquita. ¿Qué horarios tienen el día __?')} {...externo} className="btn-oro mt-8">{Icono.wa} Reservar en el spa</a>
        </div>
        <ul className="min-w-0 divide-y divide-arena/20 border-y border-arena/20 lg:col-span-7">
          {servicios.map((s) => (
            <li key={s.nombre} className="py-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="titulo text-3xl">{s.nombre}</h3>
                {s.proximamente && <span className="text-oro-claro">Próximamente</span>}
              </div>
              <p className="mt-2">{s.que}</p>
              {s.detalle && <p className="mt-1 text-arena/80">{s.detalle}</p>}
              {!s.proximamente && (
                <p className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem]">
                  <a href={wa(`Hola, quiero reservar ${s.nombre.toLowerCase()} en La Mezquita. ¿Qué horarios tienen el día __?`)} {...externo} className="font-medium text-oro-claro underline decoration-oro-claro/50 underline-offset-4 hover:decoration-oro-claro">Reservar por WhatsApp</a>
                  {s.pagina && <a href={s.pagina} {...externo} className="text-arena underline decoration-arena/40 underline-offset-4 hover:decoration-arena">Conocer más</a>}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ---------- Restaurante, cenas y eventos ----------

function Bloque({ e, className = '' }: { e: Espacio; className?: string }) {
  return (
    <article className={`min-w-0 ${className}`}>
      <h3 className="titulo text-4xl">{e.nombre}</h3>
      <p className="mt-3 text-lg">{e.que}</p>
      <a href={wa(e.mensaje)} {...externo} className="btn mt-6">{Icono.wa} {e.id === 'restaurante' ? 'Reservar mesa' : 'Pedir información'}</a>
    </article>
  );
}

function Restaurante() {
  const [rest, cenas, eventos] = espacios;
  return (
    <section id="restaurante" className="contenedor py-20 md:py-28">
      <h2 className="titulo max-w-3xl text-[clamp(2.4rem,5vw,4rem)]">Restaurante, cenas y eventos</h2>
      <div className="mt-12 grid items-center gap-10 md:grid-cols-12">
        <div className="min-w-0 md:col-span-4">
          <div className="arco mx-auto aspect-[10/16] max-w-[18rem] bg-crema">{rest.foto && <Img foto={rest.foto} />}</div>
        </div>
        <Bloque e={rest} className="md:col-span-7 md:col-start-6" />
      </div>
      <div className="mt-16 grid items-center gap-10 md:grid-cols-12">
        <Bloque e={eventos} className="md:col-span-6" />
        <div className="min-w-0 md:col-span-6">
          <div className="aspect-[3/2] overflow-hidden rounded-2xl bg-crema">{eventos.foto && <Img foto={eventos.foto} />}</div>
        </div>
      </div>
      <div className="mt-16 rounded-3xl bg-crema p-7 sm:p-10">
        <Bloque e={cenas} />
      </div>
    </section>
  );
}

// ---------- Lo que la hace única, testimonios y preguntas ----------

function Unica() {
  return (
    <section className="bg-crema py-20 md:py-28">
      <div className="contenedor grid gap-12 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-6">
          <h2 className="titulo text-[clamp(2.2rem,4.4vw,3.4rem)]">{unica.titulo}</h2>
          {unica.parrafos.map((p) => <p key={p} className="mt-4 text-lg">{p}</p>)}
        </div>
        <div className="min-w-0 lg:col-span-5 lg:col-start-8">
          <h3 className="titulo text-3xl">Experiencias contadas por nuestros clientes</h3>
          <ul className="mt-5 space-y-6">
            {testimonios.map((t) => (
              <li key={t.nombre}>
                <blockquote className="titulo text-[1.45rem] italic leading-snug text-tinta">“{t.texto}”</blockquote>
                <p className="mt-2 text-[0.95rem]"><span className="font-semibold text-tinta">{t.nombre}</span>, {t.estancia}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Preguntas() {
  return (
    <section id="preguntas" className="contenedor grid gap-10 py-20 md:grid-cols-12 md:py-28">
      <div className="min-w-0 md:col-span-4">
        <h2 className="titulo text-[clamp(2.4rem,5vw,3.6rem)]">Preguntas frecuentes</h2>
        <p className="mt-4">Encuentra aquí las respuestas a las preguntas más frecuentes y disfruta tu visita con total tranquilidad.</p>
      </div>
      <div className="min-w-0 border-t border-tinta/15 md:col-span-8">
        {preguntas.map((q) => (
          <details key={q.p} className="border-b border-tinta/15">
            <summary className="flex items-center justify-between gap-4 py-4 text-lg font-medium text-tinta">
              {q.p}
              <span className="mas grid size-8 shrink-0 place-items-center rounded-full border border-tinta/25 text-xl leading-none" aria-hidden="true">+</span>
            </summary>
            <p className="pb-5 pr-10">{q.r}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

// ---------- Contacto, pie y barra del celular ----------

function Contacto() {
  return (
    <section id="contacto" className="bg-crema py-20 md:py-28">
      <div className="contenedor grid gap-10 md:grid-cols-12">
        <div className="min-w-0 md:col-span-5">
          <h2 className="titulo text-[clamp(2.4rem,5vw,4rem)]">Haz tu reservación hoy</h2>
          <p className="mt-4 text-lg">Asegura tu estancia y vive un concepto único en Aguascalientes.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={negocio.reservar} {...externo} className="btn">{Icono.cal} Reservar en línea</a>
            <a href={wa(negocio.saludo)} {...externo} className="btn-linea">{Icono.wa} WhatsApp</a>
          </div>
        </div>
        <dl className="min-w-0 grid gap-6 sm:grid-cols-2 md:col-span-7">
          <div>
            <dt className="text-sm">Dónde estamos</dt>
            <dd className="font-semibold text-tinta">{negocio.direccion}, {negocio.ciudad}.</dd>
            <dd className="mt-2"><a href={negocio.mapa} {...externo} className="enlace inline-flex items-center gap-1">{Icono.mapa} Ver ubicación en Google Maps</a></dd>
          </div>
          <div>
            <dt className="text-sm">Teléfono y WhatsApp</dt>
            <dd><a href={negocio.tel} className="enlace">{negocio.telefono}</a></dd>
          </div>
          <div>
            <dt className="text-sm">Correo</dt>
            <dd><a href={`mailto:${negocio.correo}`} className="enlace break-all">{negocio.correo}</a></dd>
          </div>
          <div>
            <dt className="text-sm">Síguenos</dt>
            <dd className="flex flex-wrap gap-x-4">
              <a href={negocio.instagram} {...externo} className="enlace">Instagram</a>
              <a href={negocio.facebook} {...externo} className="enlace">Facebook</a>
              <a href={negocio.tiktok} {...externo} className="enlace">TikTok</a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro bg-noche pb-32 pt-14 text-arena/80 md:pb-14">
      <div className="contenedor flex flex-wrap items-end justify-between gap-8">
        <div>
          <p className="titulo text-4xl tracking-[0.18em] text-arena">LA MEZQUITA</p>
          <p className="mt-1">{negocio.lema}, Aguascalientes.</p>
        </div>
        <p className="flex flex-wrap gap-x-5">
          <a href={negocio.blog} {...externo} className="text-arena underline decoration-oro/60 underline-offset-4">Blog</a>
          <a href={negocio.instagram} {...externo} className="text-arena underline decoration-oro/60 underline-offset-4">Instagram</a>
          <a href={negocio.facebook} {...externo} className="text-arena underline decoration-oro/60 underline-offset-4">Facebook</a>
          <a href={negocio.tiktok} {...externo} className="text-arena underline decoration-oro/60 underline-offset-4">TikTok</a>
        </p>
        <p className="w-full border-t border-arena/15 pt-6 text-sm">© {new Date().getFullYear()} La Mezquita | Concept Hotel & Spa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-tinta/15 bg-arena/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-[1.3fr_1.2fr_auto_auto] gap-2">
        <a href={negocio.reservar} {...externo} className="btn px-2 text-[0.85rem]">{Icono.cal} Reservar</a>
        <a href={wa(negocio.saludo)} {...externo} className="btn-linea px-2 text-[0.85rem]">{Icono.wa} WhatsApp</a>
        <a href={negocio.tel} className="btn-linea w-12 px-0" aria-label="Llamar a La Mezquita">{Icono.tel}</a>
        <a href={negocio.mapa} {...externo} className="btn-linea w-12 px-0" aria-label="Cómo llegar a La Mezquita en Google Maps">{Icono.mapa}</a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <a href="#suites" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2">Ir a las suites</a>
      <ArcoDefs />
      <Encabezado />
      <main>
        <Portada />
        <Refugio />
        <SeisPuertas />
        <Spa />
        <Restaurante />
        <Unica />
        <Preguntas />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
