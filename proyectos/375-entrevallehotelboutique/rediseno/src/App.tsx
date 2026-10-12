import { useState } from 'react';
import fotosJson from './data/fotos.json';
import {
  negocio, wa, intro, cifras, premios, estancia, habitaciones, enCadaHabitacion, amenidades,
  restaurante, spa, boda, meses, grupos, politicas, preguntas,
} from './data/content';
import type { Temporada } from './data/content';

const fotos = fotosJson as unknown as Record<string, [number, number]>;
const base = import.meta.env.BASE_URL;
const src = (n: string) => `${base}${n}.webp`;

function Foto({ n, alt, className = '', eager = false }: { n: string; alt: string; className?: string; eager?: boolean }) {
  const [w, h] = fotos[n] ?? [1600, 1067];
  return <img src={src(n)} alt={alt} width={w} height={h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={className} />;
}

function Encabezado() {
  const enlaces = [['#habitaciones', 'Habitaciones'], ['#restaurante', 'EVA Restaurante'], ['#spa', 'Spa'], ['#bodas', 'Bodas'], ['#llegar', 'Cómo llegar']];
  return (
    <header className="sticky top-0 z-30 border-b border-tinta/10 bg-arena/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0"><img src={`${base}logo-verde.png`} alt="Entrevalle Hospedaje" width={384} height={220} className="h-11 w-auto" /></a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-7 text-sm font-medium">{enlaces.map(([h, t]) => <li key={h}><a href={h} className="hover:text-adobe-osc">{t}</a></li>)}</ul>
        </nav>
        <a href={negocio.reservar} className="btn-salvia px-5 py-2.5">Reservar</a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-noche text-white">
      <Foto n="vista-cabanas" alt="Las cabañas de Entrevalle entre jardines, con los cerros del Valle de Guadalupe al fondo" eager className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-noche via-noche/55 to-noche/10" />
      <div className="contenedor flex min-h-[36rem] flex-col justify-end pb-14 pt-28 sm:min-h-[42rem]">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#CFE0D4]">{negocio.zona}</p>
        <h1 className="mt-4 max-w-3xl text-5xl sm:text-7xl">Entrevalle Hotel Boutique</h1>
        <p className="mt-4 font-[family-name:var(--font-display)] text-2xl text-white/90 sm:text-3xl">{negocio.lema}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={negocio.reservar} className="btn-claro">Reservar en línea</a>
          <a href={wa('Hola, Entrevalle. Quisiera información para hospedarme en el hotel.')} className="btn-linea">Escribir por WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

function Llegada() {
  return (
    <section className="contenedor grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.1fr_1fr] lg:items-center">
      <div>
        <p className="eyebrow">Ruta del Vino</p>
        <h2 className="mt-3 text-4xl sm:text-5xl">A minutos de las casas vinícolas</h2>
        <p className="mt-5 text-lg text-gris">{intro}</p>
        <dl className="mt-8 grid gap-6 sm:grid-cols-3">
          {cifras.map((c) => (
            <div key={c.valor} className="border-t-2 border-adobe pt-3">
              <dt className="font-[family-name:var(--font-display)] text-4xl text-salvia-osc">{c.valor}</dt>
              <dd className="mt-1 text-sm text-gris">{c.texto}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-8 flex items-center gap-4">
          {premios.map((p) => <Foto key={p.foto} n={p.foto} alt={p.alt} className="h-20 w-auto rounded-md sm:h-24" />)}
          <p className="text-sm text-gris">Sellos de Booking.com Traveller Review Awards que el hotel recibió en 2025 y 2026.</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Foto n="copa-balcon" alt="Copa de vino tinto en el balcón, con el valle y los cerros de fondo" className="row-span-2 h-full w-full rounded-2xl object-cover" />
        <Foto n="cabanas-atardecer" alt="Cabañas de adobe al atardecer junto a la entrada del viñedo" className="aspect-[4/3] w-full rounded-2xl object-cover" />
        <Foto n="terraza-fogatero" alt="Terraza con sillas alrededor del fogatero y vista abierta al valle" className="aspect-[4/3] w-full rounded-2xl object-cover" />
      </div>
    </section>
  );
}

function Habitaciones() {
  const [sel, setSel] = useState(0);
  const h = habitaciones[sel];
  const [principal, ...resto] = h.fotos;
  return (
    <section id="habitaciones" className="bg-white py-16 sm:py-24">
      <div className="contenedor">
        <p className="eyebrow">Habitaciones</p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-2xl text-4xl sm:text-5xl">Estilo tradicional del valle y confort contemporáneo</h2>
          <div role="tablist" aria-label="Tipo de habitación" className="inline-flex rounded-full bg-arena p-1">
            {habitaciones.map((x, i) => (
              <button key={x.id} role="tab" aria-selected={i === sel} onClick={() => setSel(i)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${i === sel ? 'bg-salvia-osc text-white' : 'text-tinta hover:text-salvia-osc'}`}>
                {x.personas === 2 ? 'Para 2' : 'Para 4'}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.35fr_1fr]">
          <div className="grid grid-cols-3 gap-3">
            <Foto n={principal.n} alt={principal.alt} className="col-span-3 aspect-[3/2] w-full rounded-2xl object-cover" />
            {resto.map((f) => <Foto key={f.n} n={f.n} alt={f.alt} className="aspect-[4/3] w-full rounded-xl object-cover" />)}
          </div>
          <div role="tabpanel">
            <h3 className="text-3xl">{h.nombre}</h3>
            <ul className="mt-4 flex flex-wrap gap-2 text-sm font-medium">
              <li className="rounded-full bg-arena px-3 py-1.5">{h.m2} m²</li>
              <li className="rounded-full bg-arena px-3 py-1.5">{h.personas} personas</li>
              <li className="rounded-full bg-arena px-3 py-1.5">{h.camas}</li>
            </ul>
            <p className="mt-5 text-gris">{h.texto}</p>
            <h4 className="mt-6 text-sm font-semibold uppercase tracking-[0.16em]">En la habitación</h4>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
              {enCadaHabitacion.map((a) => <li key={a} className="flex gap-2"><span aria-hidden className="text-salvia">✦</span>{a}</li>)}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={negocio.reservar} className="btn-salvia">Ver fechas y precio</a>
              <a href={wa(`Hola, Entrevalle. Quisiera reservar una ${h.nombre} (${h.personas} personas). ¿Tienen disponibilidad para estas fechas: `)} className="btn border border-salvia-osc text-salvia-osc hover:bg-arena">WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="mt-16 grid gap-8 border-t border-tinta/10 pt-12 md:grid-cols-3">
          {estancia.map((t) => <p key={t.slice(0, 20)} className="text-gris">{t}</p>)}
        </div>
      </div>
    </section>
  );
}

function Amenidades() {
  return (
    <section className="contenedor grid gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
      <div className="grid grid-cols-2 gap-3">
        <Foto n="alberca" alt="Huésped en la alberca, frente a las cabañas" className="aspect-square w-full rounded-2xl object-cover" />
        <Foto n="jardin-primavera" alt="Jardín en flor frente a las cabañas en primavera" className="aspect-square w-full rounded-2xl object-cover" />
        <Foto n="flores" alt="Flores silvestres moradas, rojas y naranjas del jardín" className="aspect-square w-full rounded-2xl object-cover" />
        <Foto n="bienvenidos" alt="Letrero de bienvenida con buganvilias sobre la cama" className="aspect-square w-full rounded-2xl object-cover" />
      </div>
      <div>
        <p className="eyebrow">Servicios y amenidades</p>
        <h2 className="mt-3 text-4xl sm:text-5xl">Viñedo, alberca, jacuzzi y cielo estrellado</h2>
        <ul className="mt-8 grid grid-cols-2 gap-3">
          {amenidades.map((a) => <li key={a} className="rounded-xl border border-tinta/10 bg-white px-4 py-3 text-sm font-medium">{a}</li>)}
        </ul>
      </div>
    </section>
  );
}

function Restaurante() {
  return (
    <section id="restaurante" className="bg-adobe-osc py-16 text-white sm:py-24">
      <div className="contenedor">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#F6D9CB]">Dentro del hotel</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">{restaurante.nombre}</h2>
            {restaurante.texto.map((t) => <p key={t.slice(0, 20)} className="mt-5 text-white/90">{t}</p>)}
            <dl className="mt-8 grid gap-3 sm:grid-cols-2">
              {restaurante.horario.map((x) => (
                <div key={x.dias} className="rounded-xl bg-white/10 px-4 py-3">
                  <dt className="text-sm text-white/80">{x.dias}</dt>
                  <dd className="font-[family-name:var(--font-display)] text-2xl">{x.horas}</dd>
                </div>
              ))}
            </dl>
            <ul className="mt-6 flex flex-wrap gap-2 text-sm">{restaurante.detalles.map((d) => <li key={d} className="rounded-full border border-white/30 px-3 py-1">{d}</li>)}</ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={negocio.menuEs} className="btn-claro">Ver el menú (PDF)</a>
              <a href={negocio.menuEn} className="btn-linea" lang="en">Menu in English</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {restaurante.fotos.map((f, i) => (i === 0
              ? <div key={f.n} className="relative col-span-2 row-span-2 aspect-square overflow-hidden rounded-xl sm:aspect-auto"><Foto n={f.n} alt={f.alt} className="absolute inset-0 h-full w-full object-cover" /></div>
              : <Foto key={f.n} n={f.n} alt={f.alt} className={`aspect-[4/5] w-full rounded-xl object-cover ${i === 5 ? 'max-sm:hidden' : ''}`} />))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Spa() {
  return (
    <section id="spa" className="contenedor py-16 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end">
        <div>
          <p className="eyebrow">Masajes</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">{spa.titulo}</h2>
          <p className="mt-5 text-lg text-gris">{spa.texto}</p>
          <a href={wa('Hola, Entrevalle. Quisiera agendar una sesión de masaje durante mi estancia.')} className="btn-salvia mt-8">Agendar por WhatsApp</a>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {spa.fotos.map((f) => <Foto key={f.n} n={f.n} alt={f.alt} className="aspect-[4/3] w-full rounded-2xl object-cover" />)}
        </div>
      </div>
    </section>
  );
}

const estilo: Record<Temporada, { celda: string; titulo: string; texto: string }> = {
  recomendado: { celda: 'bg-salvia text-white', titulo: 'Mes recomendado', texto: 'Está entre los meses que el hotel recomienda para casarse en el Valle de Guadalupe (de marzo a octubre, sin julio ni agosto).' },
  vendimia: { celda: 'bg-tinto text-white', titulo: 'Temporada alta de Vendimia', texto: 'Es temporada alta del valle por los festivales de la Vendimia: los costos suelen subir y algunos viñedos abren su agenda en estas fechas.' },
  consultar: { celda: 'bg-white/10 text-white/85 ring-1 ring-inset ring-white/25', titulo: 'Fuera de los meses recomendados', texto: 'El hotel no lo incluye entre los mejores meses para una boda en el valle. Pregunta disponibilidad y condiciones.' },
};

function Bodas() {
  const [mes, setMes] = useState(4);
  const [cuartos, setCuartos] = useState(8);
  const hoy = new Date();
  const anios = [0, 1, 2].map((d) => hoy.getFullYear() + d);
  const [anio, setAnio] = useState(anios[0] + (mes < hoy.getMonth() ? 1 : 0));
  const m = meses[mes];
  const e = estilo[m.t];
  const esGrupo = cuartos >= 8;
  const mensaje = `Hola, Entrevalle. Me interesa celebrar mi boda en el hotel en ${m.nombre} de ${anio} y hospedar a mis invitados en ${cuartos} ${cuartos === 1 ? 'habitación' : 'habitaciones'}. ¿Me pueden dar información?`;
  return (
    <section id="bodas" className="cielo relative isolate overflow-hidden bg-noche py-16 text-white sm:py-24">
      <div className="contenedor">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#CFE0D4]">Bodas en el viñedo</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">{boda.titulo}</h2>
            <p className="mt-5 text-lg text-white/85">{boda.texto}</p>
          </div>
          <div className="grid grid-cols-[1.4fr_1fr] gap-3">
            <Foto n="boda-ceremonia" alt="Novios bailando en la terraza de madera durante la ceremonia, con los cerros de fondo" className="aspect-[3/2] h-full w-full rounded-2xl object-cover" />
            <Foto n="lavanda" alt="Detalle de lavanda en una mesa" className="aspect-square h-full w-full rounded-2xl object-cover" />
          </div>
        </div>

        <div className="mt-14 rounded-3xl bg-white/5 p-5 ring-1 ring-white/15 sm:p-8">
          <h3 className="text-3xl">El año del valle, mes por mes</h3>
          <p className="mt-2 max-w-3xl text-white/75">Elige el mes de tu boda: verás qué dice el hotel de esa época y, según cuántas habitaciones necesiten tus invitados, si aplican sus condiciones de grupo.</p>
          <div role="radiogroup" aria-label="Mes de la boda" className="mt-6 grid grid-cols-6 gap-2 lg:grid-cols-12">
            {meses.map((x, i) => (
              <button key={x.nombre} role="radio" aria-checked={i === mes} aria-label={`${x.nombre}: ${estilo[x.t].titulo}`} onClick={() => setMes(i)}
                className={`relative flex h-20 flex-col items-center justify-end rounded-xl pb-2 text-sm font-semibold transition-transform ${estilo[x.t].celda} ${i === mes ? 'scale-105 outline-3 outline-offset-2 outline-[#F2C9B8]' : 'opacity-90 hover:opacity-100'}`}>
                <svg aria-hidden viewBox="0 0 24 24" className="absolute top-2 h-7 w-7 opacity-80" fill="none" stroke="currentColor" strokeWidth="1.4">
                  {x.t === 'consultar'
                    ? <path d="M12 21V9M12 9c-3 0-5-2-5-5M12 9c3 0 5-2 5-5" />
                    : <><path d="M12 3v3M9 6h6" /><circle cx="10" cy="10" r="2" /><circle cx="14" cy="10" r="2" /><circle cx="12" cy="13.5" r="2" /><circle cx="9" cy="14" r="1.8" /><circle cx="15" cy="14" r="1.8" /><circle cx="12" cy="17.5" r="2" /></>}
                </svg>
                {x.corto}
              </button>
            ))}
          </div>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-salvia" />Recomendado</li>
            <li className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-tinto ring-1 ring-white/40" />Vendimia, temporada alta</li>
            <li className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm ring-1 ring-white/40" />Fuera de lo recomendado</li>
          </ul>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div aria-live="polite">
              <p className="text-sm uppercase tracking-[0.18em] text-white/70">{m.nombre}</p>
              <p className="mt-1 font-[family-name:var(--font-display)] text-3xl">{e.titulo}</p>
              <p className="mt-3 text-white/85">{e.texto}</p>
              <label className="mt-6 block text-sm text-white/80">Año
                <select value={anio} onChange={(ev) => setAnio(Number(ev.target.value))} className="ml-3 rounded-lg bg-white px-3 py-2 text-tinta">
                  {anios.map((a) => <option key={a}>{a}</option>)}
                </select>
              </label>
            </div>
            <div>
              <label htmlFor="cuartos" className="text-sm text-white/80">Habitaciones para tus invitados (el hotel tiene 17 cabañas)</label>
              <div className="mt-2 flex items-center gap-4">
                <input id="cuartos" type="range" min={1} max={17} value={cuartos} onChange={(ev) => setCuartos(Number(ev.target.value))} className="w-full accent-[#9CC2AA]" />
                <output htmlFor="cuartos" className="w-10 text-right font-[family-name:var(--font-display)] text-3xl">{cuartos}</output>
              </div>
              {esGrupo ? (
                <div className="mt-4 rounded-2xl bg-white/10 p-4">
                  <p className="font-semibold">Con {cuartos} habitaciones es una reserva de grupo:</p>
                  <ul className="mt-2 space-y-1.5 text-sm text-white/85">{grupos.slice(1).map((g) => <li key={g} className="flex gap-2"><span aria-hidden className="text-[#9CC2AA]">✦</span>{g}</li>)}</ul>
                </div>
              ) : (
                <p className="mt-4 rounded-2xl bg-white/10 p-4 text-sm text-white/85">{grupos[0]} Con {cuartos} {cuartos === 1 ? 'habitación' : 'habitaciones'} aplican las políticas normales de cancelación.</p>
              )}
              <a href={wa(mensaje)} className="btn-claro mt-6">Preguntar por {m.nombre} de {anio}</a>
            </div>
          </div>
          <p className="mt-8 border-t border-white/15 pt-5 text-sm text-white/65">Del hotel: «{boda.epoca}»</p>
        </div>
      </div>
    </section>
  );
}

function Politicas() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Antes de llegar</p>
          <h2 className="mt-3 text-4xl">Lo que conviene saber</h2>
          <dl className="mt-8 space-y-5">
            {politicas.map((p) => (
              <div key={p.t} className="border-l-2 border-salvia pl-4">
                <dt className="font-semibold">{p.t}</dt>
                <dd className="mt-1 text-gris">{p.d}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2 className="mt-3 text-4xl">Dudas de los huéspedes</h2>
          <div className="mt-8 divide-y divide-tinta/10 border-y border-tinta/10">
            {preguntas.map((q) => (
              <details key={q.p} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">{q.p}<span aria-hidden className="text-xl text-adobe-osc transition-transform group-open:rotate-45">+</span></summary>
                <p className="mt-2 text-gris">{q.r}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="llegar" className="contenedor grid gap-10 py-16 sm:py-24 lg:grid-cols-[1fr_1.1fr] lg:items-center">
      <div>
        <p className="eyebrow">Cómo llegar</p>
        <h2 className="mt-3 text-4xl sm:text-5xl">Km 88.9 de la Carretera Federal 3</h2>
        <address className="mt-5 not-italic text-lg text-gris">{negocio.direccion}</address>
        <ul className="mt-8 space-y-3">
          <li><a href={wa('Hola, Entrevalle. Tengo una pregunta.')} className="font-semibold text-salvia-osc underline-offset-4 hover:underline">WhatsApp {negocio.telefonoVer}</a></li>
          <li><a href={`tel:${negocio.telefono.replace(/\s/g, '')}`} className="underline-offset-4 hover:underline">Llamar al {negocio.telefonoVer}</a> <span className="text-gris">· también {negocio.telefono2Ver}</span></li>
          <li><a href={`mailto:${negocio.correo}`} className="underline-offset-4 hover:underline">{negocio.correo}</a></li>
          <li className="flex gap-5 pt-2 text-sm font-semibold"><a href={negocio.instagram} className="hover:text-adobe-osc">Instagram</a><a href={negocio.facebook} className="hover:text-adobe-osc">Facebook</a></li>
        </ul>
        <a href={negocio.mapa} className="btn-adobe mt-8">Abrir en Google Maps</a>
      </div>
      <a href={negocio.mapa} className="group relative block overflow-hidden rounded-3xl">
        <Foto n="pergola-restaurante" alt="Pérgolas de madera y mesas del restaurante en el jardín de Entrevalle" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <span className="absolute bottom-4 left-4 rounded-full bg-arena px-4 py-2 text-sm font-semibold">32.0099° N, 116.6425° O · Ver mapa</span>
      </a>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-noche pb-24 pt-12 text-white/80 md:pb-10">
      <div className="contenedor flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <img src={`${base}logo-blanco.png`} alt="Entrevalle Hospedaje" width={384} height={220} className="h-14 w-auto" loading="lazy" />
        <p className="text-sm">{negocio.nombre} · {negocio.direccion}</p>
        <a href={negocio.reservar} className="text-sm font-semibold text-white underline-offset-4 hover:underline">Reservar en línea</a>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 gap-2 border-t border-tinta/10 bg-arena/95 p-3 backdrop-blur md:hidden">
      <a href={`tel:${negocio.telefono.replace(/\s/g, '')}`} className="btn border border-tinta/20 px-2 py-3">Llamar</a>
      <a href={wa('Hola, Entrevalle. Quisiera información para hospedarme en el hotel.')} className="btn bg-salvia-osc px-2 py-3 text-white">WhatsApp</a>
      <a href={negocio.reservar} className="btn bg-adobe-osc px-2 py-3 text-white">Reservar</a>
    </div>
  );
}

export default function App() {
  return (
    <>
      <a href="#principal" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:p-3">Saltar al contenido</a>
      <Encabezado />
      <main id="principal">
        <Portada />
        <Llegada />
        <Habitaciones />
        <Amenidades />
        <Restaurante />
        <Spa />
        <Bodas />
        <Politicas />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
