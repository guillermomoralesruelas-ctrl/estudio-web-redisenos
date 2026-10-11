import { useState } from 'react';
import fotosJson from './data/fotos.json';
import { negocio, ventajas, concepto, habitaciones, nombreHab, restaurante, alberca, type Habitacion, type Tramo } from './data/content';

const fotos = fotosJson as unknown as Record<string, [number, number]>;
const base = import.meta.env.BASE_URL;
const src = (n: string) => `${base}${n}.webp`;
const peso = (n: number) => '$' + n.toLocaleString('es-MX');
const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

function Foto({ n, alt, className = '', eager = false }: { n: string; alt: string; className?: string; eager?: boolean }) {
  const [w, h] = fotos[n] ?? [1200, 800];
  return <img src={src(n)} alt={alt} width={w} height={h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={className} />;
}

const TRAMOS: Tramo[] = [4, 7, 14, 28];
const tramoDe = (noches: number): Tramo | null => [...TRAMOS].reverse().find((t) => noches >= t) ?? null;
const nombreTramo = (t: Tramo) => (t === 28 ? '4 semanas' : `${t} noches`);

function Encabezado() {
  const enlaces = [['#habitaciones', 'Habitaciones'], ['#larga-estadia', 'Larga estadía'], ['#restaurante', 'Restaurante'], ['#alberca', 'Alberca'], ['#ubicacion', 'Ubicación']];
  return (
    <header className="sticky top-0 z-30 border-b border-tinta/10 bg-arena/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0"><img src={`${base}logo.png`} alt="Hotel El Dorado Hermosillo" width={520} height={173} className="h-11 w-auto" /></a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-6 text-sm font-semibold">{enlaces.map(([h, t]) => <li key={h}><a href={h} className="hover:text-rojo">{t}</a></li>)}</ul>
        </nav>
        <a href={wa('Hola, quisiera reservar / información.')} className="btn-rojo px-4 py-2.5 text-sm">Reservar por WhatsApp</a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-noche text-white">
      <Foto n="fachada-noche" alt="Fachada del Hotel El Dorado de noche con su letrero rojo encendido" eager className="absolute inset-0 -z-10 h-full w-full object-cover object-[70%_40%] opacity-90" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-noche via-noche/75 to-transparent" />
      <div className="contenedor py-20 sm:py-28 lg:py-36">
        <p className="eyebrow text-oro">Hermosillo, Sonora</p>
        <h1 className="mt-4 max-w-2xl text-5xl sm:text-6xl lg:text-7xl">Duerme a 5 minutos del aeropuerto</h1>
        <p className="mt-6 max-w-xl text-lg text-white/85">{concepto}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#larga-estadia" className="btn-oro">Calcula tu estancia</a>
          <a href={wa('Hola, quisiera reservar / información.')} className="btn-linea">WhatsApp {negocio.whatsappTexto}</a>
        </div>
      </div>
      <div className="border-t border-white/10 bg-noche/90">
        <ul className="contenedor grid gap-px py-2 sm:grid-cols-2 lg:grid-cols-4">
          {ventajas.map((v) => (
            <li key={v.titulo} className="px-1 py-4 lg:px-4">
              <p className="font-display text-lg font-medium uppercase leading-tight text-oro">{v.titulo}</p>
              <p className="mt-1.5 text-sm text-white/75">{v.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function TarjetaHab({ h, onCalcular }: { h: Habitacion; onCalcular: () => void }) {
  const [i, setI] = useState(0);
  const f = h.fotos[i];
  return (
    <article className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-tinta/10">
      <div className="relative aspect-[4/3] bg-arena-2">
        <Foto n={f.n} alt={f.alt} className="absolute inset-0 h-full w-full object-cover" />
        <span className="absolute left-3 top-3 rounded bg-noche/85 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-oro">{h.familia} · {h.m2} m²</span>
      </div>
      {h.fotos.length > 1 && (
        <div className="flex gap-1.5 px-4 pt-3">
          {h.fotos.map((x, k) => (
            <button key={x.n} type="button" onClick={() => setI(k)} aria-label={`Ver foto ${k + 1} de ${h.fotos.length}`} aria-pressed={k === i}
              className={`h-1.5 flex-1 rounded-full ${k === i ? 'bg-rojo' : 'bg-tinta/15 hover:bg-tinta/30'}`} />
          ))}
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-2xl">{h.camas}</h3>
        <p className="mt-1 text-sm text-gris">Habitación {h.familia.toLowerCase()} · capacidad {h.capacidad}</p>
        <p className="mt-4"><span className="font-display text-3xl font-semibold text-rojo">{peso(h.tarifa)}</span> <span className="text-sm text-gris">MXN por noche, impuestos incluidos</span></p>
        <p className="text-sm text-gris">Desde 4 noches: {peso(h.larga[4])} por noche</p>
        <details className="group mt-4 border-t border-tinta/10 pt-3">
          <summary className="cursor-pointer text-sm font-semibold text-rojo-osc">Qué incluye</summary>
          <ul className="mt-2 grid gap-1 text-sm text-gris">{h.incluye.map((x) => <li key={x}>· {x}</li>)}</ul>
        </details>
        <div className="mt-auto pt-5"><button type="button" onClick={onCalcular} className="btn-rojo w-full">Calcular mi estancia</button></div>
      </div>
    </article>
  );
}

function Habitaciones({ elegir }: { elegir: (id: string) => void }) {
  return (
    <section id="habitaciones" className="py-20 sm:py-24">
      <div className="contenedor">
        <p className="eyebrow">Habitaciones</p>
        <h2 className="mt-3 text-4xl sm:text-5xl">Estándar de 18 m² o ejecutiva de 23 m²</h2>
        <p className="mt-4 max-w-2xl text-gris">Todas incluyen desayuno continental caliente de cortesía. Tarifas publicadas por el hotel, impuestos incluidos.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {habitaciones.map((h) => <TarjetaHab key={h.id} h={h} onCalcular={() => elegir(h.id)} />)}
        </div>
      </div>
    </section>
  );
}

function Calculadora({ habId, setHabId }: { habId: string; setHabId: (id: string) => void }) {
  const [noches, setNoches] = useState(7);
  const h = habitaciones.find((x) => x.id === habId)!;
  const tramo = tramoDe(noches);
  const porNoche = tramo ? h.larga[tramo] : h.tarifa;
  const total = porNoche * noches;
  const ahorro = (h.tarifa - porNoche) * noches;
  const siguiente = TRAMOS.find((t) => t > noches);
  const colorCelda = (n: number) => {
    const t = tramoDe(n);
    if (n > noches) return 'bg-white/8';
    return t === null ? 'bg-humo/60' : t === 4 ? 'bg-oro/60' : t === 7 ? 'bg-oro/80' : t === 14 ? 'bg-oro' : 'bg-rojo';
  };
  const mensaje = `Hola, quisiera reservar en El Dorado: habitación ${nombreHab(h)}, ${noches} ${noches === 1 ? 'noche' : 'noches'}. Llegada: `;

  return (
    <section id="larga-estadia" className="bg-noche py-20 text-white sm:py-24">
      <div className="contenedor">
        <p className="eyebrow text-oro">Plan Larga Estadía</p>
        <h2 className="mt-3 text-4xl sm:text-5xl">¿Cuántas noches te quedas?</h2>
        <p className="mt-4 max-w-2xl text-white/75">Desde 4 noches la tarifa por noche baja, y vuelve a bajar a las 7, a las 14 y a las 4 semanas. Elige habitación y mueve las noches para ver cuánto pagarías.</p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold text-white/70" id="hab-titulo">Habitación</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2" role="group" aria-labelledby="hab-titulo">
              {habitaciones.map((x) => (
                <button key={x.id} type="button" aria-pressed={x.id === habId} onClick={() => setHabId(x.id)} className="chip border-white/20 bg-noche-2 text-white aria-pressed:border-oro aria-pressed:bg-oro aria-pressed:text-noche">
                  <span className="block text-xs uppercase tracking-wider opacity-75">{x.familia}</span>{x.camas}
                </button>
              ))}
            </div>

            <label htmlFor="noches" className="mt-8 block text-sm font-semibold text-white/70">Noches</label>
            <div className="mt-3 flex items-center gap-3">
              <button type="button" onClick={() => setNoches((n) => Math.max(1, n - 1))} className="h-11 w-11 shrink-0 rounded-md bg-noche-2 text-xl font-bold ring-1 ring-white/20 hover:bg-white/10" aria-label="Una noche menos">−</button>
              <input id="noches" type="range" min={1} max={30} value={noches} onChange={(e) => setNoches(Number(e.target.value))} className="w-full" />
              <button type="button" onClick={() => setNoches((n) => Math.min(30, n + 1))} className="h-11 w-11 shrink-0 rounded-md bg-noche-2 text-xl font-bold ring-1 ring-white/20 hover:bg-white/10" aria-label="Una noche más">+</button>
            </div>

            <div className="mt-6" aria-hidden="true">
              <div className="grid grid-cols-[repeat(15,minmax(0,1fr))] gap-1 sm:grid-cols-[repeat(30,minmax(0,1fr))]">
                {Array.from({ length: 30 }, (_, k) => k + 1).map((n) => (
                  <button key={n} type="button" tabIndex={-1} onClick={() => setNoches(n)} className={`h-7 rounded-sm transition-colors ${colorCelda(n)} ${TRAMOS.includes(n as Tramo) ? 'ring-1 ring-oro/70' : ''}`} title={`${n} noches`} />
                ))}
              </div>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/60">
                <span><i className="mr-1 inline-block h-2.5 w-2.5 rounded-sm bg-humo/60" />1–3 tarifa normal</span>
                <span><i className="mr-1 inline-block h-2.5 w-2.5 rounded-sm bg-oro/60" />4–6</span>
                <span><i className="mr-1 inline-block h-2.5 w-2.5 rounded-sm bg-oro/80" />7–13</span>
                <span><i className="mr-1 inline-block h-2.5 w-2.5 rounded-sm bg-oro" />14–27</span>
                <span><i className="mr-1 inline-block h-2.5 w-2.5 rounded-sm bg-rojo" />4 semanas</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-noche-2 p-6 ring-1 ring-white/10 sm:p-8" aria-live="polite">
            <p className="text-sm text-white/70">{nombreHab(h)} · {noches} {noches === 1 ? 'noche' : 'noches'}</p>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white/60">Por noche</p>
                <p className="font-display text-4xl font-semibold text-oro sm:text-5xl">{peso(porNoche)}</p>
                <p className="text-sm text-white/60">{tramo ? `Tarifa Larga Estadía de ${nombreTramo(tramo)}` : 'Tarifa normal'}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white/60">Total estimado</p>
                <p className="font-display text-4xl font-semibold sm:text-5xl">{peso(total)}</p>
                <p className="text-sm text-white/60">{ahorro > 0 ? `${peso(ahorro)} menos que a tarifa normal` : 'Impuestos incluidos'}</p>
              </div>
            </div>
            {siguiente && (
              <p className="mt-6 rounded-md bg-white/5 px-4 py-3 text-sm text-white/80">
                Con {siguiente - noches} {siguiente - noches === 1 ? 'noche' : 'noches'} más llegas a {nombreTramo(siguiente)}: {peso(h.larga[siguiente])} por noche.
              </p>
            )}
            <table className="mt-6 w-full text-sm">
              <caption className="sr-only">Tarifas por noche de {nombreHab(h)}</caption>
              <thead><tr className="text-left text-white/60"><th className="pb-2 font-semibold">Estancia</th><th className="pb-2 text-right font-semibold">Por noche</th></tr></thead>
              <tbody>
                <tr className={!tramo ? 'text-oro' : ''}><td className="border-t border-white/10 py-1.5">1 a 3 noches</td><td className="border-t border-white/10 py-1.5 text-right">{peso(h.tarifa)}</td></tr>
                {TRAMOS.map((t) => (
                  <tr key={t} className={t === tramo ? 'font-semibold text-oro' : ''}><td className="border-t border-white/10 py-1.5">{nombreTramo(t)}</td><td className="border-t border-white/10 py-1.5 text-right">{peso(h.larga[t])}</td></tr>
                ))}
              </tbody>
            </table>
            <a href={wa(mensaje)} className="btn-rojo mt-6 w-full">Pedir esta estancia por WhatsApp</a>
            <p className="mt-4 text-xs text-white/55">Cálculo orientativo con las tarifas que publica el hotel, impuestos incluidos; se aplica la tarifa del escalón alcanzado. La tarifa de Larga Estadía es para un máximo de {h.ocupacionLarga} personas por habitación. Confirma precio y disponibilidad con el hotel.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Restaurante() {
  const [p, setP] = useState(0);
  const c = restaurante.carta[p];
  return (
    <section id="restaurante" className="py-20 sm:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="eyebrow">Restaurante</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Desayuno incluido, cocina hasta las 10 de la noche</h2>
          <dl className="mt-6 grid gap-3 sm:grid-cols-2">
            {restaurante.horarios.map((x) => (
              <div key={x.nombre} className="rounded-lg bg-white p-4 ring-1 ring-tinta/10"><dt className="text-sm font-semibold text-gris">{x.nombre}</dt><dd className="font-display text-xl font-medium">{x.horario}</dd></div>
            ))}
          </dl>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {restaurante.fotos.map((f) => (
              <div key={f.n} className="relative aspect-[16/10] overflow-hidden rounded-lg"><Foto n={f.n} alt={f.alt} className="absolute inset-0 h-full w-full object-cover" /></div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl">La carta</h3>
          <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Páginas de la carta">
            {restaurante.carta.map((x, k) => (
              <button key={x.n} type="button" aria-pressed={k === p} onClick={() => setP(k)} className="chip py-1.5 text-xs">{x.titulo}</button>
            ))}
          </div>
          <figure className="mt-4">
            <div className="relative mx-auto aspect-[1583/2048] max-w-md overflow-hidden rounded-lg bg-white shadow ring-1 ring-tinta/10">
              <Foto n={c.n} alt={`Carta del restaurante, página de ${c.titulo.toLowerCase()} con platillos y precios`} className="absolute inset-0 h-full w-full object-contain" />
            </div>
            <figcaption className="mt-3 flex items-center justify-between text-sm text-gris">
              <button type="button" onClick={() => setP((p + restaurante.carta.length - 1) % restaurante.carta.length)} className="font-semibold text-rojo-osc hover:underline">← Anterior</button>
              <span>Página {p + 1} de {restaurante.carta.length}</span>
              <button type="button" onClick={() => setP((p + 1) % restaurante.carta.length)} className="font-semibold text-rojo-osc hover:underline">Siguiente →</button>
            </figcaption>
            <p className="mt-2 text-center text-xs text-gris"><a href={src(c.n)} className="underline">Abrir página en grande</a></p>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Alberca() {
  return (
    <section id="alberca" className="bg-arena-2 py-20 sm:py-24">
      <div className="contenedor">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <div>
            <p className="eyebrow">Alberca y áreas comunes</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">Alberca abierta hasta las 10 de la noche</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <p className="rounded-lg bg-white p-4 ring-1 ring-tinta/10"><span className="block text-sm font-semibold text-gris">Horario</span><span className="font-display text-xl font-medium">{alberca.horario}</span></p>
            <p className="rounded-lg bg-white p-4 text-sm ring-1 ring-tinta/10"><span className="block font-semibold text-gris">Toallas</span>{alberca.toallas}</p>
          </div>
        </div>
        <div className="mt-10 grid gap-3 md:grid-cols-[2fr_1fr]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl md:aspect-auto md:min-h-[26rem]"><Foto n={alberca.fotos[0].n} alt={alberca.fotos[0].alt} className="absolute inset-0 h-full w-full object-cover" /></div>
          <div className="grid gap-3">
            {alberca.fotos.slice(1).map((f) => <div key={f.n} className="relative aspect-[16/9] overflow-hidden rounded-xl"><Foto n={f.n} alt={f.alt} className="absolute inset-0 h-full w-full object-cover" /></div>)}
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-4">
          {alberca.otros.map((f) => <div key={f.n} className="relative aspect-[4/3] overflow-hidden rounded-xl"><Foto n={f.n} alt={f.alt} className="absolute inset-0 h-full w-full object-cover" /></div>)}
        </div>
      </div>
    </section>
  );
}

function Ubicacion() {
  return (
    <section id="ubicacion" className="py-20 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow">Ubicación y reservas</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Blvd. Jesús García Morales, El Llano</h2>
          <p className="mt-4 text-gris">{negocio.direccion}</p>
          <ul className="mt-6 grid gap-2">
            <li><a href={wa('Hola, quisiera reservar / información.')} className="font-semibold text-rojo-osc hover:underline">WhatsApp {negocio.whatsappTexto}</a></li>
            <li><a href={`tel:${negocio.telefonoLink}`} className="font-semibold text-rojo-osc hover:underline">Teléfono {negocio.telefono}</a></li>
            <li><a href={negocio.facebook} className="font-semibold text-rojo-osc hover:underline">Facebook /eldoradohermosillo</a></li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={negocio.mapa} className="btn-rojo">Cómo llegar</a>
            <a href={wa('Hola, quisiera reservar / información.')} className="btn border-2 border-tinta hover:bg-tinta hover:text-white">Reservar por WhatsApp</a>
          </div>
        </div>
        <div className="rounded-xl bg-noche p-6 text-white sm:p-8">
          <p className="text-xs font-bold uppercase tracking-wider text-oro">Traslado de cortesía</p>
          <div className="mt-6 flex items-center gap-3" aria-hidden="true">
            <span className="rounded-md bg-rojo px-3 py-2 font-display text-lg font-semibold uppercase">Hotel</span>
            <span className="relative h-px flex-1 border-t-2 border-dashed border-oro"><span className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm text-oro">5 min</span></span>
            <span className="rounded-md bg-white px-3 py-2 font-display text-lg font-semibold uppercase text-noche">Aeropuerto</span>
          </div>
          <p className="mt-6 text-white/80">Estamos a sólo 5 minutos del Aeropuerto Internacional de Hermosillo. Durante tu estadía, la transportación redonda hotel–aeropuerto y al Consulado / CAS es gratis.</p>
          <p className="mt-3 text-sm text-white/55">Pide tu traslado al reservar por WhatsApp o teléfono.</p>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [habId, setHabId] = useState('estandar-king');
  const elegir = (id: string) => {
    setHabId(id);
    document.getElementById('larga-estadia')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  };
  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2">Saltar al contenido</a>
      <Encabezado />
      <main id="contenido">
        <Portada />
        <Habitaciones elegir={elegir} />
        <Calculadora habId={habId} setHabId={setHabId} />
        <Restaurante />
        <Alberca />
        <Ubicacion />
      </main>
      <footer className="bg-noche pb-24 pt-10 text-sm text-white/70 md:pb-10">
        <div className="contenedor flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p><span className="font-semibold text-white">{negocio.nombre}</span> · {negocio.direccion}</p>
          <p>Tel. {negocio.telefono} · WhatsApp {negocio.whatsappTexto}</p>
        </div>
      </footer>

      <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/10 bg-noche text-sm font-semibold text-white md:hidden">
        <a href={`tel:${negocio.telefonoLink}`} className="py-3.5 text-center">Llamar</a>
        <a href={wa('Hola, quisiera reservar / información.')} className="bg-rojo py-3.5 text-center">WhatsApp</a>
        <a href={negocio.mapa} className="py-3.5 text-center">Mapa</a>
      </nav>
    </>
  );
}
