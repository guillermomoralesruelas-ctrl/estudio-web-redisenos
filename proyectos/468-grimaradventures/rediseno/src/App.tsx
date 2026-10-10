import { useState } from 'react';
import { negocio, pasos, reglas, resenas, tours, wa, web, type Tour } from './data/content';
import fotos from './data/fotos.json';

const medidas = fotos as unknown as Record<string, [number, number]>;
const pesos = (n: number) => `$${Math.round(n).toLocaleString('es-MX')}`;

function Foto({ n, alt, className = '', prioridad = false, sizes }: { n: string; alt: string; className?: string; prioridad?: boolean; sizes?: string }) {
  const [w, h] = medidas[n] ?? [1600, 1200];
  return (
    <img src={web(n)} alt={alt} width={w} height={h} sizes={sizes} className={`object-cover ${className}`}
      loading={prioridad ? 'eager' : 'lazy'} decoding="async" fetchPriority={prioridad ? 'high' : 'auto'} />
  );
}

const Icono = {
  wa: <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3a.5.5 0 0 0 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.6 11.6 0 0 0 4.4 3.9c1.6.7 2.3.8 3.1.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3z" /></svg>,
  tel: <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>,
  pin: <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  persona: (lleno: boolean) => <svg viewBox="0 0 24 24" className="size-full" fill={lleno ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="12" cy="7" r="4" /><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8z" /></svg>,
};

function Cabecera() {
  const enlaces = [['#tours', 'Tours'], ['#colectivo-o-privado', '¿Colectivo o privado?'], ['#como-reservar', 'Cómo reservar'], ['#contacto', 'Contacto']];
  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-arena/95 backdrop-blur">
      <div className="contenedor flex h-[4.5rem] items-center justify-between gap-4">
        <a href="#inicio" aria-label="Grimar Adventures, inicio">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Grimar Adventures" width={medidas.logo[0]} height={medidas.logo[1]} className="h-11 w-auto" />
        </a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-8 text-[0.95rem] font-medium">{enlaces.map(([h, t]) => <li key={h}><a href={h} className="hover:text-chaleco-hondo">{t}</a></li>)}</ul>
        </nav>
        <a href={wa('Hola Grimar, quiero información de sus tours.')} className="btn-chaleco !px-5 !py-3 text-sm">{Icono.wa} Reservar</a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="overflow-hidden bg-mar text-white">
      <div className="contenedor grid gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14 lg:py-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-laguna">Cada aventura cuenta · desde Punta de Mita</p>
          <h1 className="mt-5 text-[3.2rem] sm:text-7xl lg:text-[5.4rem]">Explora Marietas y Punta Mita</h1>
          <p className="mt-6 max-w-xl text-lg text-white/90">Playa Escondida con acceso asegurado, snorkel en las Islas Marietas, ballenas jorobadas y la costa de Punta Mita, en lancha techada con grupos de máximo 8 personas.</p>
          <ul className="mt-7 flex flex-wrap gap-2 text-sm font-medium">
            <li className="rounded-full bg-white/12 px-4 py-2 ring-1 ring-white/25">Hasta 20% de descuento</li>
            <li className="rounded-full bg-white/12 px-4 py-2 ring-1 ring-white/25">Niños de 0 a 3 años: 80% menos en colectivos</li>
            <li className="rounded-full bg-white/12 px-4 py-2 ring-1 ring-white/25">Pago protegido</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#tours" className="btn-chaleco">Ver los tours</a>
            <a href={wa('Hola Grimar, quiero reservar un tour.')} className="btn-linea">{Icono.wa} WhatsApp</a>
          </div>
        </div>
        <figure className="relative mx-auto w-full max-w-md lg:max-w-none">
          <Foto n="playa-escondida-aerea" alt="Playa Escondida vista desde arriba: el cráter de roca y pasto con la playa de arena y el agua turquesa" prioridad
            className="aspect-[4/5] w-full rounded-[2.5rem] sm:aspect-[3/4]" sizes="(min-width: 1024px) 38vw, 90vw" />
          <figcaption className="absolute bottom-4 left-4 right-4 rounded-2xl bg-abismo/85 px-4 py-3 text-sm backdrop-blur">
            <strong>Playa Escondida</strong>, en las Islas Marietas: se entra nadando unos 100 m por un túnel natural.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function TarjetaTour({ t, alCalcular }: { t: Tour; alCalcular: (id: string) => void }) {
  const base = t.modalidades[0];
  return (
    <li className="flex flex-col overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-tinta/5">
      <Foto n={t.foto} alt={t.alt} className="aspect-[4/3] w-full" sizes="(min-width: 1024px) 38vw, 100vw" />
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="eyebrow">{t.zona}</p>
        <h3 className="mt-2 text-3xl">{t.t}</h3>
        <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm sm:grid-cols-4">
          {[['Duración', t.duracion], ['Grupo', t.grupo], ['Dificultad', t.dificultad], ['Edad', t.edad]].map(([k, v]) => (
            <div key={k}><dt className="text-gris">{k}</dt><dd className="font-semibold">{v}</dd></div>
          ))}
        </dl>
        <p className="mt-4 text-gris">{t.resumen}</p>
        {t.nota && <p className="mt-3 rounded-xl bg-laguna px-4 py-2.5 text-sm">{t.nota}</p>}
        <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-6">
          <p>
            <span className="block text-sm text-gris">{base.t.toLowerCase()} · {base.unidad === 'persona' ? 'por persona' : 'por lancha'}</span>
            <span className="font-display text-4xl font-bold">{pesos(base.promo)}</span> <s className="text-gris">{pesos(base.regular)}</s>
          </p>
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={() => alCalcular(t.id)} className="btn-mar !py-3 text-sm">Calcular mi grupo</button>
            <a href={t.url} target="_blank" rel="noopener" className="inline-flex items-center rounded-full px-4 py-3 text-sm font-semibold underline underline-offset-4">Detalles<span className="sr-only"> de {t.t}</span></a>
          </div>
        </div>
      </div>
    </li>
  );
}

// Elemento memorable: con sus precios por persona y por lancha, compara colectivo y privado para tu grupo y dibuja tu lancha.
function ColectivoOPrivado({ id, setId }: { id: string; setId: (id: string) => void }) {
  const [adultos, setAdultos] = useState(4);
  const [ninos, setNinos] = useState(0);
  const t = tours.find((x) => x.id === id)!;
  const colectivo = t.modalidades.find((m) => m.unidad === 'persona');
  const privados = t.modalidades.filter((m) => m.unidad === 'lancha');
  const total = adultos + (t.ninos ? ninos : 0);
  const privado = privados.find((m) => (m.pax ?? 8) >= total) ?? privados[privados.length - 1];
  const costoCol = colectivo ? colectivo.promo * adultos + (t.ninos ? colectivo.promo * 0.2 * ninos : 0) : null;
  const costoPriv = privado ? privado.promo : null;
  const gana = costoCol !== null && costoPriv !== null ? (costoCol <= costoPriv ? 'col' : 'priv') : costoCol !== null ? 'col' : 'priv';
  const elegida = gana === 'col' ? 'colectivo' : privado?.t.toLowerCase();
  const mensaje = `Hola Grimar, quiero reservar ${t.t}: ${adultos} ${adultos === 1 ? 'adulto' : 'adultos'}${t.ninos && ninos ? ` y ${ninos} ${ninos === 1 ? 'niño' : 'niños'} de 0 a 3 años` : ''}, en ${elegida}. ¿Qué fechas y horarios tienen?`;
  const asientos = 8;
  return (
    <section id="colectivo-o-privado" className="bg-abismo py-16 text-white lg:py-24">
      <div className="contenedor">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-turquesa">Tu lancha</p>
        <div className="mt-3 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <h2 className="text-5xl sm:text-6xl">¿Colectivo o privado?</h2>
          <p className="text-lg text-white/85 lg:pb-2">Dinos cuántos van y te decimos qué sale mejor: pagar por persona y compartir la lancha, o tenerla solo para tu grupo.</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-7">
            <fieldset>
              <legend className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">Tour</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {tours.map((x) => (
                  <button key={x.id} type="button" aria-pressed={x.id === id} onClick={() => setId(x.id)}
                    className={`rounded-full px-4 py-2.5 text-sm font-semibold ring-1 transition ${x.id === id ? 'bg-turquesa text-abismo ring-turquesa' : 'ring-white/30 hover:ring-white'}`}>{x.corto}</button>
                ))}
              </div>
            </fieldset>
            <div>
              <label htmlFor="adultos" className="flex items-baseline justify-between"><span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">{t.ninos ? 'Adultos y niños de 4 años o más' : 'Personas (de 10 a 64 años)'}</span><span className="font-display text-4xl font-bold">{adultos}</span></label>
              <input id="adultos" type="range" min={1} max={8 - (t.ninos ? ninos : 0)} value={adultos} onChange={(e) => setAdultos(+e.target.value)} className="mt-3 w-full" />
            </div>
            {t.ninos && colectivo && (
              <div>
                <label htmlFor="ninos" className="flex items-baseline justify-between"><span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">Niños de 0 a 3 años</span><span className="font-display text-4xl font-bold">{ninos}</span></label>
                <input id="ninos" type="range" min={0} max={Math.max(0, 8 - adultos)} value={ninos} onChange={(e) => setNinos(+e.target.value)} className="mt-3 w-full" />
                <p className="mt-1 text-sm text-white/70">En colectivo pagan 80% menos.</p>
              </div>
            )}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">Así va tu lancha</p>
              <div className="mt-3 rounded-[2rem_2rem_5rem_5rem] border-2 border-white/25 bg-mar/40 p-5">
                <ul className="grid grid-cols-4 gap-3" aria-label={`${total} de ${asientos} lugares para tu grupo`}>
                  {Array.from({ length: asientos }, (_, k) => (
                    <li key={k} className={`aspect-square rounded-2xl p-2.5 ${k < total ? 'bg-chaleco text-white' : gana === 'priv' ? 'bg-white/5 text-white/25' : 'bg-white/10 text-white/50'}`}>
                      {Icono.persona(k < total)}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-center text-sm text-white/80">
                  {gana === 'priv' ? `Lancha solo para ustedes (${privado?.t.toLowerCase()})` : `Comparten la lancha con otros viajeros, hasta 8`}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 self-start sm:grid-cols-2" aria-live="polite">
            {[
              { k: 'col', titulo: 'Colectivo', costo: costoCol, det: colectivo ? `${pesos(colectivo.promo)} por persona${t.ninos && ninos ? ` · niños ${pesos(colectivo.promo * 0.2)}` : ''}` : 'Este tour es solo privado' },
              { k: 'priv', titulo: privado ? privado.t : 'Privado', costo: costoPriv, det: privado ? `${pesos(privado.promo)} por lancha · ${costoPriv && total ? `${pesos(costoPriv / total)} por persona` : ''}` : '' },
            ].map((o) => (
              <div key={o.k} className={`relative rounded-[1.75rem] p-6 ${gana === o.k ? 'bg-white text-tinta' : 'bg-white/8 ring-1 ring-white/20'}`}>
                {gana === o.k && <span className="absolute -top-3 left-6 rounded-full bg-chaleco-hondo px-3 py-1 text-xs font-bold text-white">Te conviene</span>}
                <p className="text-sm font-semibold uppercase tracking-[0.16em] opacity-75">{o.titulo}</p>
                <p className="mt-2 font-display text-5xl font-bold">{o.costo !== null ? pesos(o.costo) : '—'}</p>
                <p className={`mt-2 text-sm ${gana === o.k ? 'text-gris' : 'text-white/75'}`}>{o.det}</p>
              </div>
            ))}
            <div className="sm:col-span-2">
              <a href={wa(mensaje)} className="btn-chaleco w-full !py-4 text-lg">{Icono.wa} Reservar por WhatsApp</a>
              <a href={t.url} target="_blank" rel="noopener" className="mt-3 block text-center text-sm underline underline-offset-4">o reserva en línea en su sitio</a>
              <p className="mt-5 text-xs text-white/70">Precios promocionales de su sitio al 10 de octubre de 2026, en pesos. Ellos aclaran que el precio final depende de la fecha, el horario y la anticipación.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Galeria() {
  const fotos = [
    { n: 'lancha-familia', a: 'Niños con chaleco salvavidas a bordo de la lancha techada' },
    { n: 'pareja-playa-escondida', a: 'Pareja dentro de Playa Escondida, bajo la bóveda de roca' },
    { n: 'ballena-cola', a: 'Ballena jorobada mostrando la cola y otra saltando' },
    { n: 'muelle', a: 'Lanchas en la orilla de Punta de Mita al amanecer' },
    { n: 'lancha-puente', a: 'Vista desde la lancha de las rocas de las islas y las olas' },
    { n: 'proa', a: 'Proa de la lancha navegando hacia las islas' },
  ];
  return (
    <section className="py-16 lg:py-24" aria-labelledby="resenas-t">
      <div className="contenedor">
        <p className="eyebrow">Lo que viven sus viajeros</p>
        <h2 id="resenas-t" className="mt-3 max-w-2xl text-5xl sm:text-6xl">Capitanes y guías con nombre</h2>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {fotos.map((f) => <li key={f.n}><Foto n={f.n} alt={f.a} className="aspect-[4/3] w-full rounded-[1.5rem]" sizes="(min-width: 1024px) 30vw, 50vw" /></li>)}
        </ul>
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {resenas.map((r) => (
            <li key={r.a} className="rounded-[1.5rem] bg-white p-6 ring-1 ring-tinta/5">
              <blockquote className="text-lg">“{r.t}”</blockquote>
              <p className="mt-3 text-sm font-semibold text-gris">{r.a}</p>
            </li>
          ))}
        </ul>
        <a href={negocio.tripadvisor} target="_blank" rel="noopener" className="btn-linea mt-8 text-mar">Ver opiniones en TripAdvisor</a>
      </div>
    </section>
  );
}

function ComoReservar() {
  return (
    <section id="como-reservar" className="bg-laguna py-16 lg:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Cómo reservar</p>
          <h2 className="mt-3 text-5xl sm:text-6xl">Tres pasos</h2>
          <ol className="mt-8 space-y-6">
            {pasos.map((p, k) => (
              <li key={p.t} className="flex gap-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-mar font-display text-xl font-bold text-white">{k + 1}</span>
                <div><h3 className="text-2xl">{p.t}</h3><p className="mt-1 text-gris">{p.d}</p></div>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h2 className="text-3xl">Antes de subir a la lancha</h2>
          <ul className="mt-6 space-y-3">
            {reglas.map((r) => <li key={r} className="flex gap-3 rounded-2xl bg-white/70 p-4"><span className="mt-1 size-2.5 shrink-0 rounded-full bg-chaleco" aria-hidden="true" />{r}</li>)}
          </ul>
          <p className="mt-5 text-sm text-gris">Los tours en Playa Escondida y nado en mar abierto no se recomiendan para embarazadas ni personas con problemas cardiovasculares.</p>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="py-16 lg:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2 className="mt-3 text-5xl sm:text-6xl">Salimos de Punta de Mita</h2>
          <p className="mt-5 text-lg text-gris">La experiencia comienza en su oficina en Punta de Mita; llega 15 minutos antes. Los tours no incluyen transporte terrestre: es una buena opción si te hospedas en Puerto Vallarta, Nuevo Vallarta, Bucerías o Sayulita.</p>
          <dl className="mt-8 grid gap-5 sm:grid-cols-2">
            <div><dt className="text-sm font-semibold uppercase tracking-[0.18em] text-gris">Teléfono y WhatsApp</dt><dd className="mt-1 text-lg"><a href={negocio.telHref} className="underline underline-offset-4">{negocio.telTxt}</a></dd></div>
            <div><dt className="text-sm font-semibold uppercase tracking-[0.18em] text-gris">Horario de atención</dt><dd className="mt-1 text-lg">{negocio.horario}</dd></div>
            <div className="sm:col-span-2"><dt className="text-sm font-semibold uppercase tracking-[0.18em] text-gris">Correo</dt><dd className="mt-1 text-lg"><a href={`mailto:${negocio.correo}`} className="underline underline-offset-4">{negocio.correo}</a></dd></div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa('Hola Grimar, quiero información de sus tours.')} className="btn-chaleco">{Icono.wa} WhatsApp</a>
            <a href={negocio.mapa} target="_blank" rel="noopener" className="btn-linea text-mar">{Icono.pin} Cómo llegar</a>
          </div>
          <p className="mt-6 flex gap-5 text-sm font-semibold">
            <a href={negocio.instagram} target="_blank" rel="noopener" className="hover:text-chaleco-hondo">Instagram</a>
            <a href={negocio.facebook} target="_blank" rel="noopener" className="hover:text-chaleco-hondo">Facebook</a>
            <a href={negocio.tripadvisor} target="_blank" rel="noopener" className="hover:text-chaleco-hondo">TripAdvisor</a>
          </p>
        </div>
        <Foto n="lancha" alt="Lancha techada de Grimar con asientos blancos, lista para salir" className="aspect-[4/3] w-full rounded-[2rem]" sizes="(min-width: 1024px) 45vw, 100vw" />
      </div>
    </section>
  );
}

function BarraMovil() {
  const acciones = [
    { h: wa('Hola Grimar, quiero reservar un tour.'), t: 'Reservar', i: Icono.wa, c: 'bg-chaleco-hondo text-white' },
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
  const [tourId, setTourId] = useState('playa-escondida');
  const calcular = (id: string) => {
    setTourId(id);
    document.getElementById('colectivo-o-privado')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  };
  return (
    <>
      <a href="#tours" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-tinta focus:px-4 focus:py-2 focus:text-white">Saltar a los tours</a>
      <Cabecera />
      <main>
        <Portada />
        <section id="tours" className="py-16 lg:py-24">
          <div className="contenedor">
            <p className="eyebrow">Tours</p>
            <div className="mt-3 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
              <h2 className="text-5xl sm:text-6xl">Cuatro formas de salir al mar</h2>
              <p className="text-lg text-gris lg:pb-2">Todos salen del muelle de Punta de Mita, uno de los puntos más cercanos a las Islas Marietas, en lancha techada con escalera para subir del agua.</p>
            </div>
            <ul className="mt-10 grid gap-6 lg:grid-cols-2">{tours.map((t) => <TarjetaTour key={t.id} t={t} alCalcular={calcular} />)}</ul>
          </div>
        </section>
        <ColectivoOPrivado id={tourId} setId={setTourId} />
        <Galeria />
        <ComoReservar />
        <Contacto />
      </main>
      <footer className="bg-abismo pb-28 pt-10 text-sm text-white/80 lg:pb-10">
        <div className="contenedor flex flex-col gap-2 sm:flex-row sm:justify-between">
          <p>© 2026 Grimar Adventures · Punta de Mita, Nayarit</p>
          <p>Con permisos del Parque Nacional Islas Marietas</p>
        </div>
      </footer>
      <BarraMovil />
    </>
  );
}
