import { useState } from 'react';
import { galeria, intro, lugares, masajes, negocio, oasis, promociones, vales, wa, web, type Lugar } from './data/content';
import fotos from './data/fotos.json';

const medidas = fotos as unknown as Record<string, [number, number]>;
const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;

function Foto({ n, alt, className = '', prioridad = false, sizes }: { n: string; alt: string; className?: string; prioridad?: boolean; sizes?: string }) {
  const [w, h] = medidas[n] ?? [1200, 900];
  return (
    <img src={web(n)} alt={alt} width={w} height={h} sizes={sizes} className={`object-cover ${className}`}
      loading={prioridad ? 'eager' : 'lazy'} decoding="async" fetchPriority={prioridad ? 'high' : 'auto'} />
  );
}

const Icono = {
  wa: <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3a.5.5 0 0 0 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.6 11.6 0 0 0 4.4 3.9c1.6.7 2.3.8 3.1.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3z" /></svg>,
  tel: <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>,
  pin: <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  estrella: <svg viewBox="0 0 24 24" className="size-4 shrink-0" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" /></svg>,
};

function Cabecera() {
  const enlaces = [['#arma-tu-masaje', 'Arma tu masaje'], ['#promociones', 'Promociones'], ['#vales', 'Vales de regalo'], ['#visitanos', 'Visítanos']];
  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-arena/95 backdrop-blur">
      <div className="contenedor flex h-[4.5rem] items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Gema Spa, inicio">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="" width={medidas.logo[0]} height={medidas.logo[1]} className="h-12 w-auto" />
          <span className="font-serif text-2xl font-semibold leading-none">Gema Spa <span className="block font-sans text-[0.65rem] font-medium uppercase tracking-[0.24em] text-gris">Huatulco</span></span>
        </a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-8 text-[0.95rem]">{enlaces.map(([h, t]) => <li key={h}><a href={h} className="hover:text-coral">{t}</a></li>)}</ul>
        </nav>
        <a href={wa('Hola, vengo de la web y quisiera reservar un masaje.')} className="btn-coral !px-5 !py-3 text-sm">{Icono.wa} Reservar</a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-bahia text-white">
      <Foto n="playa-dos" alt="Dos camillas listas bajo la carpa de Gema Spa en la playa de Huatulco, con el sol sobre el mar" prioridad className="absolute inset-0 -z-10 h-full w-full" sizes="100vw" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-bahia via-bahia/55 to-bahia/10" />
      <div className="contenedor flex min-h-[86svh] flex-col justify-end pb-14 pt-32 lg:min-h-[44rem]">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/90">Gema Spa · Santa Cruz Huatulco, Oaxaca</p>
        <h1 className="mt-4 max-w-3xl text-[3.4rem] sm:text-7xl lg:text-[5.6rem]">Relájate en el paraíso</h1>
        <p className="mt-5 max-w-xl text-lg text-white/90">{intro}</p>
        <p className="mt-5 flex items-center gap-2 text-sm"><span className="flex text-loto">{Icono.estrella}{Icono.estrella}{Icono.estrella}{Icono.estrella}{Icono.estrella}</span> {negocio.google.calificacion} en Google · {negocio.google.opiniones} opiniones</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#arma-tu-masaje" className="btn-coral">Arma tu masaje</a>
          <a href={wa('Hola, vengo de la web y quisiera información.')} className="btn-linea">{Icono.wa} WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

function Oasis() {
  return (
    <section className="contenedor grid gap-10 py-16 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16 lg:py-24">
      <div>
        <p className="eyebrow">Sobre Gema Spa</p>
        <h2 className="mt-3 text-5xl sm:text-6xl">Más que un spa, un oasis de relajación</h2>
        <p className="mt-6 text-lg text-gris">{oasis}</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Foto n="cabina" alt="Cabina de masajes con muro de plantas, espejo iluminado y dos camillas" className="aspect-[3/4] w-full rounded-[2rem]" sizes="(min-width: 1024px) 26vw, 50vw" />
        <Foto n="productos" alt="Aceites y cremas sobre una toalla bordada con el logotipo de Gema Spa" className="mt-10 aspect-[3/4] w-full rounded-[2rem]" sizes="(min-width: 1024px) 26vw, 50vw" />
      </div>
    </section>
  );
}

// Elemento memorable: elige dónde y qué masaje; precio y duración de su lista, y el mensaje de WhatsApp listo.
function ArmaTuMasaje() {
  const [lugar, setLugar] = useState<Lugar>('playa');
  const [id, setId] = useState('relajante');
  const m = masajes.find((x) => x.id === id)!;
  const precio = m.precios[lugar];
  const l = lugares.find((x) => x.id === lugar)!;
  const elegirLugar = (nuevo: Lugar) => {
    setLugar(nuevo);
    if (!m.precios[nuevo]) setId('relajante');
  };
  const mensaje = `Hola, vengo de la web. Quiero reservar: ${m.t} ${l.t.toLowerCase()}${precio ? ` (${pesos(precio)} MXN)` : ''}. ¿Qué horarios tienen?`;
  return (
    <section id="arma-tu-masaje" className="bg-concha py-16 lg:py-24">
      <div className="contenedor">
        <p className="eyebrow">Arma tu masaje</p>
        <div className="mt-3 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <h2 className="text-5xl sm:text-6xl">¿Dónde quieres tu masaje?</h2>
          <p className="text-lg text-gris lg:pb-2">Elige el lugar y el masaje: ves el precio de su lista y lo mandas por WhatsApp para apartar tu horario.</p>
        </div>

        <fieldset className="mt-10">
          <legend className="sr-only">Lugar</legend>
          <div className="grid gap-4 sm:grid-cols-3">
            {lugares.map((x) => (
              <label key={x.id} className={`group relative cursor-pointer overflow-hidden rounded-[1.75rem] ring-2 transition ${lugar === x.id ? 'ring-coral' : 'ring-transparent hover:ring-tinta/20'}`}>
                <input type="radio" name="lugar" value={x.id} checked={lugar === x.id} onChange={() => elegirLugar(x.id)} className="peer sr-only" />
                <Foto n={x.foto} alt={x.alt} className="aspect-[16/10] w-full sm:aspect-[4/3]" sizes="(min-width: 640px) 33vw, 100vw" />
                <span className="absolute inset-0 bg-gradient-to-t from-bahia/85 via-bahia/20 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <span className="block font-serif text-3xl">{x.t}</span>
                  <span className="text-sm text-white/90">{x.d}</span>
                </span>
                <span className={`absolute right-4 top-4 grid size-8 place-items-center rounded-full border-2 border-white ${lugar === x.id ? 'bg-coral' : 'bg-white/20'}`} aria-hidden="true">{lugar === x.id ? '✓' : ''}</span>
                <span className="pointer-events-none absolute inset-0 rounded-[1.75rem] peer-focus-visible:outline peer-focus-visible:outline-3 peer-focus-visible:outline-coral" />
              </label>
            ))}
          </div>
        </fieldset>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.35fr_1fr]">
          <fieldset>
            <legend className="text-sm font-semibold uppercase tracking-[0.2em] text-gris">Masaje</legend>
            <ul className="mt-4 divide-y divide-tinta/10 border-y border-tinta/10">
              {masajes.map((x) => {
                const p = x.precios[lugar];
                return (
                  <li key={x.id}>
                    <label className={`flex items-center gap-4 py-3.5 ${p ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`}>
                      <input type="radio" name="masaje" value={x.id} checked={id === x.id} disabled={!p} onChange={() => setId(x.id)} className="size-4 shrink-0 accent-[var(--color-coral)]" />
                      <span className="flex-1">
                        <span className="block font-medium">{x.t}{x.tipo === 'especial' && <span className="ml-2 rounded-full bg-loto/20 px-2 py-0.5 text-xs text-coral-hondo">Especial</span>}</span>
                        <span className="block text-sm text-gris">{x.d}</span>
                      </span>
                      <span className="shrink-0 text-right font-medium">{p ? pesos(p) : <span className="text-sm">No {lugar === 'playa' ? 'en playa' : lugar === 'cabina' ? 'en cabina' : 'a domicilio'}</span>}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </fieldset>

          <aside className="self-start rounded-[2rem] bg-carpa p-7 text-white lg:sticky lg:top-24" aria-live="polite">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">Tu masaje</p>
            <p className="mt-3 font-serif text-4xl leading-tight">{m.t}</p>
            <p className="mt-1 text-white/85">{l.t}{m.min ? ` · ${m.min}` : ''}</p>
            <p className="mt-6 font-serif text-6xl">{precio ? pesos(precio) : '—'}<span className="ml-2 font-sans text-base text-white/80">MXN</span></p>
            {m.nota && <p className="mt-3 text-sm text-white/85">{m.nota}</p>}
            <a href={wa(mensaje)} className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-medium text-carpa hover:bg-arena">{Icono.wa} Reservar por WhatsApp</a>
            <a href={negocio.reservar} target="_blank" rel="noopener" className="mt-3 block text-center text-sm underline underline-offset-4">o agenda en su calendario en línea</a>
            <p className="mt-5 text-xs text-white/75">Precios de su sitio al 9 de octubre de 2026. La disponibilidad y el horario los confirma el spa.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Promociones() {
  return (
    <section id="promociones" className="py-16 lg:py-24">
      <div className="contenedor">
        <p className="eyebrow">Promociones</p>
        <h2 className="mt-3 max-w-2xl text-5xl sm:text-6xl">Para tu primera visita, en pareja o en tu cumpleaños</h2>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {promociones.map((p) => (
            <li key={p.t} className="flex flex-col rounded-[1.75rem] border border-tinta/10 bg-concha p-6">
              <h3 className="text-3xl">{p.t}</h3>
              <p className="mt-3"><span className="font-serif text-4xl text-coral">{p.p}</span>{p.antes && <s className="ml-2 text-gris">{p.antes}</s>}</p>
              <p className="mt-3 flex-1 text-[0.95rem] text-gris">{p.d}</p>
              <a href={wa(`Hola, vengo de la web. Me interesa la promoción "${p.t}".`)} className="mt-5 inline-flex items-center gap-2 font-medium text-coral hover:text-coral-hondo">{Icono.wa} La quiero</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Vales() {
  return (
    <section id="vales" className="relative isolate overflow-hidden bg-bahia py-16 text-white lg:py-24">
      <Foto n="alberca-noche" alt="" className="absolute inset-0 -z-10 h-full w-full opacity-35" sizes="100vw" />
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white">Vales de regalo</p>
          <h2 className="mt-3 text-5xl sm:text-6xl">Regala bienestar</h2>
          <p className="mt-5 max-w-lg text-lg text-white/90">Sorprende a tus seres queridos con una experiencia única de relajación y cuidado personal. Vales personalizados para cualquier tipo de tratamiento, válidos por 3 meses.</p>
        </div>
        <ul className="grid grid-cols-3 gap-3 sm:gap-4">
          {vales.map((v) => (
            <li key={v}>
              <a href={negocio.tienda} target="_blank" rel="noopener" className="flex aspect-[3/4] flex-col justify-between rounded-[1.5rem] border border-white/30 bg-white/10 p-4 backdrop-blur hover:bg-white/20 sm:p-5">
                <span className="text-xs uppercase tracking-[0.2em] text-white/80">Vale</span>
                <span className="font-serif text-3xl sm:text-5xl">{pesos(v)}</span>
                <span className="text-sm underline underline-offset-4">Comprar<span className="sr-only"> vale de {pesos(v)}</span></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Galeria() {
  return (
    <section className="py-16 lg:py-24" aria-labelledby="galeria-t">
      <div className="contenedor">
        <p className="eyebrow">Galería</p>
        <h2 id="galeria-t" className="mt-3 text-5xl sm:text-6xl">Huatulco de fondo</h2>
        <ul className="mt-10 columns-2 gap-4 lg:columns-4">
          {galeria.map((g) => (
            <li key={g.f} className="mb-4 break-inside-avoid">
              <Foto n={g.f} alt={g.alt} className="w-full rounded-[1.5rem]" sizes="(min-width: 1024px) 24vw, 50vw" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Visitanos() {
  return (
    <section id="visitanos" className="bg-concha py-16 lg:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
        <div>
          <p className="eyebrow">Visítanos</p>
          <h2 className="mt-3 text-5xl sm:text-6xl">En Bahías de Huatulco</h2>
          <dl className="mt-8 space-y-5">
            <div><dt className="text-sm font-semibold uppercase tracking-[0.2em] text-gris">Dirección</dt><dd className="mt-1 text-lg">{negocio.direccion}, {negocio.cp} {negocio.ciudad}</dd></div>
            <div><dt className="text-sm font-semibold uppercase tracking-[0.2em] text-gris">Horario</dt><dd className="mt-1 text-lg">{negocio.horario} · confirma tu horario por WhatsApp</dd></div>
            <div><dt className="text-sm font-semibold uppercase tracking-[0.2em] text-gris">Contacto</dt><dd className="mt-1 text-lg"><a href={negocio.telHref} className="underline underline-offset-4">{negocio.telTxt}</a> · <a href={`mailto:${negocio.correo}`} className="underline underline-offset-4">{negocio.correo}</a></dd></div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa('Hola, vengo de la web y quisiera información.')} className="btn-coral">{Icono.wa} WhatsApp</a>
            <a href={negocio.mapa} target="_blank" rel="noopener" className="btn-linea">{Icono.pin} Cómo llegar</a>
          </div>
          <p className="mt-8 text-[0.95rem] text-gris">También hacen faciales y tratamientos corporales: <a href={negocio.faciales} target="_blank" rel="noopener" className="font-medium text-coral underline underline-offset-4">ver la lista en su sitio</a>.</p>
          <p className="mt-4 flex gap-5 text-sm font-medium">
            <a href={negocio.instagram} target="_blank" rel="noopener" className="hover:text-coral">Instagram</a>
            <a href={negocio.facebook} target="_blank" rel="noopener" className="hover:text-coral">Facebook</a>
            <a href={negocio.tiktok} target="_blank" rel="noopener" className="hover:text-coral">TikTok</a>
          </p>
        </div>
        <Foto n="terraza-plantas" alt="Camilla con toallas en una terraza con plantas y vista al mar" className="aspect-[4/3] w-full rounded-[2rem]" sizes="(min-width: 1024px) 45vw, 100vw" />
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-bahia pb-28 pt-12 text-white/85 lg:pb-12">
      <div className="contenedor flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-serif text-3xl text-white">Gema Spa <span className="font-sans text-sm text-white/75">· {negocio.lema}</span></p>
        <p className="text-sm">© 2026 Gema Spa · Bahías de Huatulco, Oaxaca</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  const acciones = [
    { h: wa('Hola, vengo de la web y quisiera reservar un masaje.'), t: 'Reservar', i: Icono.wa, c: 'bg-coral text-white' },
    { h: negocio.telHref, t: 'Llamar', i: Icono.tel, c: '' },
    { h: negocio.mapa, t: 'Cómo llegar', i: Icono.pin, c: '' },
  ];
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-tinta/15 bg-arena lg:hidden">
      {acciones.map((a) => <a key={a.t} href={a.h} className={`flex flex-col items-center justify-center gap-1 py-3 text-xs font-semibold ${a.c}`}>{a.i}{a.t}</a>)}
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#arma-tu-masaje" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-tinta focus:px-4 focus:py-2 focus:text-white">Saltar a reservar</a>
      <Cabecera />
      <main>
        <Portada />
        <Oasis />
        <ArmaTuMasaje />
        <Promociones />
        <Vales />
        <Galeria />
        <Visitanos />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
