import { useState } from 'react';
import fotosJson from './data/fotos.json';
import {
  negocio, sucursales, lugares, dias, diasCortos, extras, cafes, pases, colive, eventos, dondeEncontrarnos, merch,
} from './data/content';

const fotos = fotosJson as unknown as Record<string, [number, number]>;
const src = (n: string) => `./${n}.webp`;
const pesos = (n: number) => `MX$${n.toLocaleString('es-MX')}`;
const wa = (t: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(t)}`;

function Foto({ n, alt, className = '', eager = false }: { n: string; alt: string; className?: string; eager?: boolean }) {
  const [w, h] = fotos[n] ?? [1200, 800];
  return <img src={src(n)} alt={alt} width={w} height={h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={className} />;
}

const nav = [
  ['#dia', '¿Qué día?'],
  ['#cafe', 'Café'],
  ['#sucursales', 'Sucursales'],
  ['#cowork', 'Cowork'],
  ['#comunidad', 'Comunidad'],
];

/* ---------- Elemento memorable: ¿Qué día vienes? ---------- */
const H0 = 7;
const H1 = 20;
const pct = (h: number) => ((h - H0) / (H1 - H0)) * 100;
const colores = { cafe: 'bg-sol', bar: 'bg-pizarra', cowork: 'bg-olivo' } as const;

function Ola() {
  return (
    <svg viewBox="0 0 200 20" className="ola h-5 w-[200%]" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 10 Q 12.5 0 25 10 T 50 10 T 75 10 T 100 10 T 125 10 T 150 10 T 175 10 T 200 10" fill="none" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

function QueDia() {
  const [dia, setDia] = useState(() => new Date().getDay());
  const abiertos = lugares.filter((l) => l.franjas(dia).length > 0).map((l) => l.nombre);
  const mensaje = `Hola, LAB. Pensamos ir el ${dias[dia].toLowerCase()}${abiertos.length ? ` a ${abiertos[0]}` : ''}. ¿Nos pueden ayudar?`;
  return (
    <section id="dia" className="bg-olivo text-white" aria-labelledby="dia-t">
      <div className="contenedor py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sol">Planea tu visita</p>
            <h2 id="dia-t" className="mt-3 text-5xl md:text-6xl">¿Qué día vienes?</h2>
          </div>
          <p className="max-w-xl text-white/80">
            Dos LAB y un cowork, cada uno con su horario. Elige el día y te decimos dónde hay café, dónde sigue el bar y quién se fue a surfear.
          </p>
        </div>

        <div role="radiogroup" aria-label="Día de la semana" className="mt-10 grid grid-cols-7 gap-1.5 sm:gap-2">
          {diasCortos.map((d, i) => {
            const on = i === dia;
            return (
              <button
                key={d}
                role="radio"
                aria-checked={on}
                aria-label={dias[i]}
                onClick={() => setDia(i)}
                className={`rounded-full py-3 text-sm font-semibold transition-colors sm:text-base ${on ? 'bg-sol text-olivo-2' : 'bg-white/10 text-white hover:bg-white/20'}`}
              >
                {d}
              </button>
            );
          })}
        </div>

        <div className="mt-8 rounded-3xl bg-olivo-2 p-5 sm:p-8" aria-live="polite">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-sol">{dias[dia]}</p>
            {extras[dia] && <p className="text-sm text-white/80">{extras[dia]}</p>}
          </div>

          {/* Escala de horas */}
          <div className="relative mt-6 hidden h-5 text-xs text-white/60 sm:block" aria-hidden="true">
            {[7, 9, 11, 13, 15, 17, 19].map((h) => (
              <span key={h} className="absolute -translate-x-1/2" style={{ left: `${pct(h)}%` }}>{h}:00</span>
            ))}
          </div>

          <ul className="mt-3 space-y-5">
            {lugares.map((l) => {
              const f = l.franjas(dia);
              return (
                <li key={l.id}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <p className="font-semibold">{l.nombre} <span className="font-normal text-white/60">· {l.detalle}</span></p>
                    <p className="text-sm text-white/80">{f.length ? f.map((x) => x.etiqueta).join(' · ') : 'Cerrado'}</p>
                  </div>
                  <div className="relative mt-2 h-4 overflow-hidden rounded-full bg-white/10">
                    {f.map((x) => (
                      <span key={x.etiqueta} className={`absolute inset-y-0 rounded-full ${colores[x.tipo]}`} style={{ left: `${pct(x.de)}%`, width: `${pct(x.a) - pct(x.de)}%` }} />
                    ))}
                    {!f.length && l.id === 'centro' && (
                      <span className="absolute inset-0 flex items-center overflow-hidden text-sol/70"><Ola /></span>
                    )}
                  </div>
                  {!f.length && l.cerrado && <p className="mt-1.5 text-sm text-white/70">{l.cerrado}</p>}
                </li>
              );
            })}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/70">
            <span className="flex items-center gap-2"><span className="h-2.5 w-5 rounded-full bg-sol" />Café y comida</span>
            <span className="flex items-center gap-2"><span className="h-2.5 w-5 rounded-full bg-pizarra" />Bebidas (LAB Playita)</span>
            <span className="flex items-center gap-2"><span className="h-2.5 w-5 rounded-full bg-olivo ring-1 ring-white/30" />Cowork</span>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-white/70">Horarios tomados de su sitio. LAB Centro publica dos horarios distintos: confírmalo antes de ir.</p>
            <a href={wa(mensaje)} className="btn-sol shrink-0">Escribir para el {dias[dia].toLowerCase()}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Altitud de cada café ---------- */
function Altitud({ a }: { a: [number, number] }) {
  const y = (m: number) => 100 - ((m - 1000) / 1000) * 100;
  return (
    <svg viewBox="0 0 120 100" className="h-24 w-full" role="img" aria-label={`Altitud: ${a[0] === a[1] ? a[0] : `${a[0]} a ${a[1]}`} metros`}>
      <path d="M0 100 L30 55 L45 70 L70 25 L90 50 L120 30 L120 100 Z" className="fill-arena-2" />
      {[1000, 1500, 2000].map((m) => (
        <line key={m} x1="0" x2="120" y1={y(m)} y2={y(m)} className="stroke-tinta/15" strokeDasharray="2 3" />
      ))}
      <rect x="0" width="120" y={y(a[1]) - (a[0] === a[1] ? 2 : 0)} height={Math.max(4, y(a[0]) - y(a[1]))} className="fill-sol/80" />
    </svg>
  );
}

export default function App() {
  const [centro, playita] = sucursales;
  return (
    <>
      <a href="#inicio" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2">Saltar al contenido</a>

      <header className="sticky top-0 z-40 border-b border-tinta/10 bg-arena/95 backdrop-blur">
        <div className="contenedor flex h-16 items-center justify-between gap-4">
          <a href="#inicio" className="flex items-center gap-3" aria-label="LAB, inicio">
            <img src="./logo-lab.png" alt="LAB" width="70" height="48" className="h-9 w-auto" />
            <span className="hidden text-xs font-semibold uppercase tracking-[0.2em] text-pizarra sm:inline">Lab Baja Roasters</span>
          </a>
          <nav aria-label="Principal" className="hidden items-center gap-6 text-sm font-medium md:flex">
            {nav.map(([h, t]) => <a key={h} href={h} className="hover:text-pizarra">{t}</a>)}
          </nav>
          <a href={wa('Hola, LAB. Tengo una pregunta.')} className="btn-olivo hidden px-5 py-3 md:inline-flex">WhatsApp</a>
        </div>
      </header>

      <main id="inicio">
        {/* Portada */}
        <section className="relative overflow-hidden">
          <div className="contenedor grid gap-10 pb-16 pt-10 md:grid-cols-[1.05fr_1fr] md:items-center md:pb-24 md:pt-16">
            <div>
              <p className="eyebrow">San José del Cabo · Baja California Sur</p>
              <h1 className="mt-4 text-[clamp(2.9rem,7.5vw,5.6rem)] text-olivo">
                Café tostado en Baja Sur, <span className="text-pizarra">para compartir.</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg text-gris">{negocio.intro}</p>
              <p className="mt-3 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-olivo">{negocio.lema}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#dia" className="btn-sol">¿Qué día vienes?</a>
                <a href="#cafe" className="btn-linea text-olivo">Nuestros granos</a>
              </div>
            </div>
            <div className="relative">
              <Foto n="lab-entrada" eager alt="Entrada de LAB con el letrero Coffee Culture Community, buganvilias y bolsas de café en la ventana" className="aspect-[4/5] w-full rounded-[2rem] object-cover md:aspect-[5/6]" />
              <div className="absolute -bottom-5 left-5 rounded-2xl bg-sol px-5 py-3 text-olivo-2 shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-[0.2em]">Dos casas</p>
                <p className="font-[family-name:var(--font-display)] text-xl font-bold">Centro · La Playita</p>
              </div>
            </div>
          </div>
        </section>

        <QueDia />

        {/* Café */}
        <section id="cafe" className="py-20 md:py-28" aria-labelledby="cafe-t">
          <div className="contenedor">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <h2 id="cafe-t" className="text-5xl text-olivo md:text-6xl">Granos de cuatro montañas de México</h2>
                <p className="mt-6 max-w-lg text-gris">
                  Compramos y tostamos cafés de Oaxaca, Chiapas, Veracruz y Guerrero. Cada lote se tuesta en pequeñas cantidades en Baja Sur
                  para resaltar el carácter de su región: de los brillantes y cítricos a los de chocolate y caramelo, para mañanas lentas y mesas compartidas.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Foto n="tostador-diedrich" alt="Tostador de LAB vigilando el tueste junto a la máquina tostadora" className="aspect-[3/4] w-full rounded-2xl object-cover" />
                <Foto n="tostado-granos" alt="Mano con una cuchara de muestra sobre los granos recién tostados en la tostadora Diedrich" className="mt-10 aspect-[3/4] w-full rounded-2xl object-cover" />
              </div>
            </div>

            <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {cafes.map((c) => (
                <li key={c.origen} className="flex flex-col rounded-3xl bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.06)]">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-3xl text-olivo">{c.origen}</h3>
                    {c.agotado && <span className="rounded-full bg-arena-2 px-3 py-1 text-xs font-semibold text-gris">Agotado</span>}
                  </div>
                  <p className="mt-1 text-sm text-gris">{c.proceso} · {c.variedades}</p>
                  <div className="mt-4">
                    <Altitud a={c.altitud} />
                    <p className="text-sm font-semibold text-pizarra">
                      {c.altitud[0] === c.altitud[1] ? `${c.altitud[0].toLocaleString('es-MX')} m` : `${c.altitud[0].toLocaleString('es-MX')} a ${c.altitud[1].toLocaleString('es-MX')} m`} sobre el nivel del mar
                    </p>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Notas de taza">
                    {c.notas.map((n) => <li key={n} className="rounded-full bg-sol-claro px-3 py-1 text-xs font-medium text-olivo">{n}</li>)}
                  </ul>
                  <p className="mt-4 text-sm text-gris">{c.texto} Acidez: {c.acidez.toLowerCase()}.</p>
                  <div className="mt-auto pt-6">
                    <p className="text-sm"><span className="font-semibold">{pesos(c.precio250)}</span> 250 g · <span className="font-semibold">{pesos(c.precio1kg)}</span> 1 kg</p>
                    <a href={c.enlace} className="mt-3 inline-flex text-sm font-semibold text-pizarra underline underline-offset-4 hover:text-olivo">
                      {c.agotado ? 'Ver en la tienda' : 'Comprar en la tienda'}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-gris">Precios y disponibilidad de su tienda en línea al 12 de octubre de 2026.</p>

            <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
              <div className="grid grid-cols-[0.9fr_1fr] overflow-hidden rounded-3xl bg-sol-claro">
                <Foto n="cold-brew" alt="Cuatro botellas de cold brew de LAB junto a una planta" className="h-full w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-3xl text-olivo">Cold brew</h3>
                  <p className="mt-3 text-sm text-gris">Reposado 22 horas en frío y embotellado fresco cada semana. También lo llevan a tu evento.</p>
                  <a href={negocio.coldBrew} className="mt-4 inline-flex text-sm font-semibold text-pizarra underline underline-offset-4">Ver cold brew</a>
                </div>
              </div>
              <div className="rounded-3xl bg-white p-6 sm:p-8">
                <h3 className="text-3xl text-olivo">También nos encuentras en</h3>
                <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {dondeEncontrarnos.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-sol" />{d}</li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-gris">¿Tienes un café, hotel o restaurante? Ofrecemos catas para quienes quieren comprar al mayoreo.</p>
                <a href={wa('Hola, LAB. Me interesa comprar café al mayoreo y agendar una cata.')} className="btn-olivo mt-5">Pedir una cata de mayoreo</a>
              </div>
            </div>
          </div>
        </section>

        {/* Sucursales */}
        <section id="sucursales" className="bg-white py-20 md:py-28" aria-labelledby="suc-t">
          <div className="contenedor">
            <h2 id="suc-t" className=" text-5xl text-olivo md:text-6xl">Dos LAB en San José del Cabo</h2>
            <div className="mt-14 space-y-20">
              {[centro, playita].map((s, i) => (
                <article key={s.id} className="grid gap-8 lg:grid-cols-2 lg:items-center" aria-labelledby={`suc-${s.id}`}>
                  <div className={`grid grid-cols-2 gap-3 ${i % 2 ? 'lg:order-2' : ''}`}>
                    {s.fotos.slice(0, 3).map((f, j) => (
                      <Foto key={f.n} n={f.n} alt={f.alt} className={`w-full rounded-2xl object-cover ${j === 0 ? 'col-span-2 aspect-[16/10]' : 'aspect-square'}`} />
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pizarra">{s.desde}</p>
                    <h3 id={`suc-${s.id}`} className="mt-2 text-4xl text-olivo md:text-5xl">{s.nombre}</h3>
                    <p className="mt-5 max-w-lg text-gris">{s.texto}</p>
                    <dl className="mt-6 space-y-3 text-sm">
                      <div><dt className="font-semibold">Dirección</dt><dd className="text-gris">{s.direccion}</dd></div>
                      <div><dt className="font-semibold">Horario</dt><dd className="text-gris">{s.horario}</dd></div>
                      <div><dt className="font-semibold">Teléfono</dt><dd><a href={`tel:${s.telefonoLink}`} className="text-pizarra underline underline-offset-4">{s.telefono}</a></dd></div>
                    </dl>
                    <div className="mt-7 flex flex-wrap gap-3">
                      <a href={s.mapa} className="btn-olivo">Cómo llegar</a>
                      <a href={negocio.menus} className="btn-linea text-olivo">Ver menús</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Cowork y co-live */}
        <section id="cowork" className="py-20 md:py-28" aria-labelledby="cow-t">
          <div className="contenedor">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <Foto n="cowork-ventanal" alt="Mujer trabajando en su laptop frente al ventanal del cowork, con una bebida de LAB" className="aspect-[4/5] w-full rounded-[2rem] object-cover" />
              <div>
                <h2 id="cow-t" className=" text-5xl text-olivo md:text-6xl">Trabaja con café de verdad al lado</h2>
                <p className="mt-6 max-w-lg text-gris">
                  Outsite Cowork Lounge: espacio flexible por día con café, wifi y comunidad, sillas de diseño, wifi de 400 Mbps y 10% de descuento
                  en comida y bebida de Coffee Lab. Lunes a viernes, de 8:00 a 15:00. También hay oficinas privadas y sala de juntas.
                </p>
                <ul className="mt-8 grid grid-cols-3 gap-2 sm:gap-3">
                  {pases.map((p) => (
                    <li key={p.t} className="rounded-2xl bg-white p-3 sm:p-5">
                      <p className="text-sm font-semibold text-pizarra">{p.t}</p>
                      <p className="mt-1 font-[family-name:var(--font-display)] text-3xl font-bold text-olivo max-sm:text-xl">{pesos(p.precio)}</p>
                      <p className="mt-1 text-xs text-gris">{p.d}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href={negocio.pasesCowork} className="btn-sol">Comprar un pase</a>
                  <a href={wa('Hola, LAB. Quisiera agendar un recorrido por el cowork.')} className="btn-linea text-olivo">Agendar un recorrido</a>
                </div>
              </div>
            </div>

            <div className="mt-16 grid gap-5 md:grid-cols-2">
              {colive.map((c) => (
                <article key={c.t} className="rounded-3xl bg-olivo p-7 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sol">Co-live</p>
                  <h3 className="mt-2 text-3xl">{c.t}</h3>
                  <p className="mt-3 text-sm text-white/80">{c.d}</p>
                  <a href={c.enlace} className="mt-5 inline-flex text-sm font-semibold text-sol underline underline-offset-4">{c.cta}</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Comunidad */}
        <section id="comunidad" className="bg-olivo-2 py-20 text-white md:py-28" aria-labelledby="com-t">
          <div className="contenedor">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 id="com-t" className=" text-5xl md:text-6xl">Más que una barra de café</h2>
                <p className="mt-6 max-w-lg text-white/80">
                  Galería que va rotando, noches de cine, pop ups con cocinas invitadas, vinos, vinilos y talleres. Lo que viene se anuncia en Instagram.
                </p>
                <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
                  {eventos.map((e) => (
                    <li key={e.t} className="py-4">
                      <p className="font-semibold text-sol">{e.t}</p>
                      <p className="mt-1 text-sm text-white/75">{e.d}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={negocio.instagram} className="btn-sol">Ver {negocio.instagramUsuario}</a>
                  <a href={negocio.experiencias} className="btn-linea text-white hover:bg-white/10">Experiencias</a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 self-start">
                <Foto n="centro-noche-de-cine" alt="Público sentado bajo los árboles en una noche de cine en LAB" className="col-span-2 aspect-[16/10] w-full rounded-2xl object-cover" />
                <Foto n="centro-dj" alt="DJ mezclando vinilos en un evento de LAB" className="aspect-[4/5] w-full rounded-2xl object-cover" />
                <Foto n="playita-noroom" alt="Bar Noroom con su colección de discos y clientes en la barra" className="aspect-[4/5] w-full rounded-2xl object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Merch */}
        <section className="py-20" aria-labelledby="merch-t">
          <div className="contenedor grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
            <Foto n="bolsa-en-mano" alt="Mano sosteniendo una bolsa de café de LAB con el logotipo L A B" className="aspect-[4/5] w-full max-w-sm rounded-[2rem] object-cover" />
            <div>
              <h2 id="merch-t" className=" text-5xl text-olivo">Una bolsa para casa</h2>
              <p className="mt-5 max-w-lg text-gris">Llévate café en grano de 250 g o 1 kg, y la mercancía de LAB.</p>
              <ul className="mt-6 grid max-w-md grid-cols-2 gap-3">
                {merch.map((m) => (
                  <li key={m.t} className="flex items-baseline justify-between rounded-2xl bg-white px-5 py-4 text-sm">
                    <span className="font-semibold">{m.t}</span><span className="text-gris">{pesos(m.precio)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={negocio.tienda} className="btn-olivo">Tienda de café</a>
                <a href={negocio.merch} className="btn-linea text-olivo">Ver mercancía</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-olivo pb-24 pt-14 text-white md:pb-10">
        <div className="contenedor grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-[family-name:var(--font-display)] text-4xl font-bold text-sol">LAB</p>
            <p className="mt-2 text-sm text-white/75">{negocio.lema} Tostador de café de especialidad en San José del Cabo, B.C.S.</p>
            <a href={wa('Hola, LAB. Tengo una pregunta.')} className="btn-sol mt-6">Escríbenos por WhatsApp</a>
          </div>
          {sucursales.map((s) => (
            <div key={s.id} className="text-sm">
              <p className="font-semibold text-sol">{s.nombre}</p>
              <p className="mt-2 text-white/75">{s.direccion}</p>
              <p className="mt-2 text-white/75">{s.horario}</p>
              <p className="mt-2"><a href={`tel:${s.telefonoLink}`} className="underline underline-offset-4">{s.telefono}</a> · <a href={s.mapa} className="underline underline-offset-4">Mapa</a></p>
            </div>
          ))}
        </div>
        <div className="contenedor mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/70 sm:flex-row sm:justify-between">
          <p><a href={`mailto:${negocio.correo}`} className="underline underline-offset-4">{negocio.correo}</a> · <a href={negocio.instagram} className="underline underline-offset-4">Instagram</a> · <a href={negocio.facebook} className="underline underline-offset-4">Facebook</a></p>
          <p>Propuesta de rediseño · Fotos y datos de lab-baja.mx</p>
        </div>
      </footer>

      <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-white/10 bg-olivo-2 p-3 md:hidden">
        <a href={`tel:${centro.telefonoLink}`} className="btn-linea py-3 text-white hover:bg-white/10">Llamar</a>
        <a href={wa('Hola, LAB. Tengo una pregunta.')} className="btn-sol py-3">WhatsApp</a>
      </nav>
    </>
  );
}
