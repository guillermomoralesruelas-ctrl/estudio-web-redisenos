import { useState } from 'react';
import fotosJson from './data/fotos.json';
import { negocio, bienvenida, cita, servicios, habitaciones, enTodas, distancias, aPasos, lugares, museos, preguntas } from './data/content';

const fotos = fotosJson as unknown as Record<string, [number, number]>;
const base = import.meta.env.BASE_URL;
const src = (n: string) => `${base}${n}.webp`;
const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

function Foto({ n, alt, className = '', eager = false }: { n: string; alt: string; className?: string; eager?: boolean }) {
  const [w, h] = fotos[n] ?? [1200, 800];
  return <img src={src(n)} alt={alt} width={w} height={h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={className} />;
}

function Encabezado() {
  const enlaces = [['#habitaciones', 'Habitaciones'], ['#ubicacion', 'Ubicación'], ['#oaxaca', 'Qué hacer'], ['#preguntas', 'Preguntas'], ['#contacto', 'Contacto']];
  return (
    <header className="sticky top-0 z-30 bg-hiedra text-white">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0"><img src={`${base}logo-blanco.png`} alt="Hotel Maela" width={489} height={259} className="h-11 w-auto" /></a>
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-6 text-sm font-semibold">{enlaces.map(([h, t]) => <li key={h}><a href={h} className="hover:text-ocre">{t}</a></li>)}</ul>
        </nav>
        <a href={negocio.reservar} className="btn-barro px-4 py-2.5">Reservar</a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-hiedra text-white">
      <Foto n="fachada-2" alt="Fachada del Hotel Maela cubierta de hiedra en una calle del centro de Oaxaca" eager className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#1B2A18] via-[#1B2A18]/70 to-[#1B2A18]/45" />
      <div className="contenedor flex min-h-[34rem] flex-col justify-end pb-12 pt-24 sm:min-h-[40rem]">
        <p className="eyebrow text-ocre">Centro histórico · Oaxaca de Juárez</p>
        <h1 className="mt-3 max-w-3xl text-5xl sm:text-6xl lg:text-7xl">Hotel en el centro de Oaxaca, a pasos de Santo Domingo</h1>
        <p className="mt-5 max-w-xl text-lg text-white/90">Nueve tipos de habitación de 2 a 5 personas, estacionamiento y wifi gratis, recepción las 24 horas y restaurante dentro del hotel.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={negocio.reservar} className="btn-barro">Reserva directa</a>
          <a href={wa('Hola, quisiera información para hospedarme en Hotel Maela.')} className="btn-linea">Escribir por WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

function Bienvenida() {
  return (
    <section className="py-20 sm:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <p className="eyebrow">Bienvenidos</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Tu estancia en el corazón de Oaxaca</h2>
          <p className="mt-4 text-gris">{bienvenida}</p>
          <blockquote className="mt-6 border-l-4 border-ocre pl-4 font-display text-xl">“{cita}”</blockquote>
          <ul className="mt-8 grid grid-cols-2 gap-4">
            {servicios.map((s) => <li key={s.t}><p className="font-bold">{s.t}</p><p className="text-sm text-gris">{s.d}</p></li>)}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-lg"><Foto n="terraza" alt="Terraza con sombrilla, mesas de herrería y plantas" className="absolute inset-0 h-full w-full object-cover" /></div>
          <div className="relative aspect-square overflow-hidden rounded-lg"><Foto n="patio" alt="Patio con plantas y muros rojos frente a las habitaciones" className="absolute inset-0 h-full w-full object-cover" /></div>
          <div className="relative aspect-square overflow-hidden rounded-lg"><Foto n="recepcion" alt="Recepción del hotel con sillones y candil" className="absolute inset-0 h-full w-full object-cover" /></div>
        </div>
      </div>
    </section>
  );
}

function Habitaciones() {
  const [personas, setPersonas] = useState(2);
  const lista = habitaciones.filter((h) => h.max >= personas).sort((a, b) => a.max - b.max);
  return (
    <section id="habitaciones" className="bg-cal-2 py-20 sm:py-24">
      <div className="contenedor">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Habitaciones</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">¿Cuántos son?</h2>
            <p className="mt-4 text-gris">Todas tienen {enTodas}</p>
          </div>
          <div role="group" aria-label="Número de personas" className="flex gap-2">
            {[1, 2, 3, 4, 5].map((n) => <button key={n} type="button" aria-pressed={personas === n} onClick={() => setPersonas(n)} className="chip h-12 w-12 px-0 text-lg">{n}</button>)}
          </div>
        </div>
        <p aria-live="polite" className="mt-6 font-display text-2xl">{lista.length} {lista.length === 1 ? 'opción' : 'opciones'} para {personas} {personas === 1 ? 'persona' : 'personas'}</p>
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {lista.map((h) => (
            <li key={h.id} className="flex flex-col overflow-hidden rounded-lg bg-white ring-1 ring-tinta/10">
              <div className="relative aspect-[3/2]">
                <Foto n={h.foto} alt={h.alt} className="absolute inset-0 h-full w-full object-cover" />
                {h.suite && <span className="absolute left-3 top-3 rounded bg-rosa px-2.5 py-1 text-xs font-bold text-white">Suite con vista a Santo Domingo</span>}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-2xl">{h.nombre}</h3>
                <p className="mt-1 text-sm font-semibold text-hiedra-2">{h.camas} · hasta {h.max} personas</p>
                {h.extra && <p className="mt-2 text-sm text-gris">{h.extra}</p>}
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  <a href={h.reservar} className="btn-barro px-4 py-3">Ver tarifas</a>
                  <a href={wa(`Hola, quisiera reservar la habitación ${h.nombre} para ${personas} ${personas === 1 ? 'persona' : 'personas'}.`)} className="btn border-2 border-hiedra px-4 py-2.5 text-hiedra hover:bg-hiedra hover:text-white">WhatsApp</a>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-gris">Tarifas: [PENDIENTE] (se consultan en su sistema de reservas). Para más de 5 personas, combina habitaciones o <a href={wa('Hola, somos un grupo de más de 5 personas. ¿Qué habitaciones nos recomiendan?')} className="font-bold text-barro underline">pregunta por WhatsApp</a>.</p>
      </div>
    </section>
  );
}

function Ubicacion() {
  // Escala logarítmica: 350 m y 45 km caben en la misma regla sin que los cercanos se encimen.
  const min = Math.log10(100), max = Math.log10(80000);
  const x = (m: number) => ((Math.log10(m) - min) / (max - min)) * 100;
  return (
    <section id="ubicacion" className="bg-hiedra py-20 text-white sm:py-24">
      <div className="contenedor">
        <p className="eyebrow text-ocre">Ubicación</p>
        <h2 className="mt-3 max-w-3xl text-4xl sm:text-5xl">Oaxaca a la medida de tus pasos</h2>
        <p className="mt-4 max-w-2xl text-white/85">Desde Constitución 206 se camina a casi todo: museos, artesanías, cafés, arquitectura colonial y la vida del centro. Para lo demás, estas son las distancias que publica el hotel.</p>

        <figure className="mt-12">
          <div className="relative hidden h-40 sm:block" aria-hidden="true">
            <div className="absolute inset-x-0 top-1/2 h-0.5 bg-white/30" />
            <div className="absolute top-1/2 -translate-y-1/2" style={{ left: '0%' }}><span className="block h-5 w-5 rounded-full bg-ocre ring-4 ring-hiedra" /></div>
            {distancias.map((d, i) => (
              <div key={d.t} className="absolute top-1/2 -translate-x-1/2" style={{ left: `${x(d.m)}%` }}>
                <span className="block h-3 w-3 -translate-y-1/2 rounded-full bg-white" />
                <span className={`absolute left-1/2 w-32 -translate-x-1/2 text-center text-xs leading-tight ${i % 2 ? 'top-4' : 'bottom-4'}`}>
                  <b className="block font-display text-lg text-ocre">{d.d}</b>{d.t}
                </span>
              </div>
            ))}
          </div>
          <ol className="space-y-3 sm:hidden">
            {distancias.map((d) => <li key={d.t} className="flex items-baseline gap-3 border-b border-white/15 pb-3"><b className="w-20 shrink-0 font-display text-xl text-ocre">{d.d}</b><span>{d.t}</span></li>)}
          </ol>
          <figcaption className="mt-4 text-xs text-white/60">Regla en escala logarítmica, del hotel (punto amarillo) a Mitla.</figcaption>
        </figure>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <h3 className="text-2xl">A unos pasos, caminando</h3>
            <ul className="mt-4 flex flex-wrap gap-2">{aPasos.map((a) => <li key={a} className="rounded-md bg-white/10 px-3 py-1.5 text-sm">{a}</li>)}</ul>
            <a href={negocio.mapa} className="btn-linea mt-8">Ver en Google Maps</a>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg"><Foto n="andador-papel-picado" alt="Calle del centro de Oaxaca cubierta de papel picado de colores" className="absolute inset-0 h-full w-full object-cover" /></div>
        </div>
      </div>
    </section>
  );
}

function Oaxaca() {
  return (
    <section id="oaxaca" className="py-20 sm:py-24">
      <div className="contenedor">
        <p className="eyebrow">Qué hacer en Oaxaca de Juárez</p>
        <h2 className="mt-3 max-w-3xl text-4xl sm:text-5xl">Museos, mercados, cocina y talleres, saliendo por la puerta</h2>
        <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-8 lg:grid-cols-4">
          {lugares.map((l) => (
            <li key={l.t}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg"><Foto n={l.foto} alt={l.alt} className="absolute inset-0 h-full w-full object-cover" /></div>
              <h3 className="mt-4 text-lg sm:text-xl">{l.t}</h3>
              <p className="mt-2 text-sm text-gris">{l.d}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl text-gris"><b className="text-tinta">Más museos y paseos:</b> {museos}</p>
      </div>
    </section>
  );
}

function Restaurante() {
  return (
    <section className="bg-cal-2 py-16">
      <div className="contenedor grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg"><Foto n="pasillo" alt="Pasillo del hotel con puertas de madera y muebles oaxaqueños" className="absolute inset-0 h-full w-full object-cover" /></div>
        <div>
          <p className="eyebrow">Deleita tu paladar</p>
          <h2 className="mt-3 text-4xl">Restaurante Lulaa</h2>
          <p className="mt-4 text-gris">Dentro del hotel: una comida o cena después del paseo, mientras planeas la siguiente aventura en Oaxaca.</p>
          <p className="mt-3 text-sm text-gris">Horario y menú: [PENDIENTE].</p>
        </div>
      </div>
    </section>
  );
}

function Preguntas() {
  return (
    <section id="preguntas" className="py-20 sm:py-24">
      <div className="contenedor max-w-3xl">
        <p className="eyebrow">Preguntas frecuentes</p>
        <h2 className="mt-3 text-4xl sm:text-5xl">Antes de reservar</h2>
        <div className="mt-8 divide-y divide-tinta/10 border-y border-tinta/10">
          {preguntas.map((q) => (
            <details key={q.p} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">{q.p}<span aria-hidden="true" className="text-xl text-barro transition-transform group-open:rotate-45">+</span></summary>
              <p className="mt-2 text-gris">{q.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="bg-cal-2 py-20 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <p className="eyebrow">Contacto y reservaciones</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Nos alegra recibirte</h2>
          <dl className="mt-8 space-y-4">
            <div><dt className="text-sm font-bold text-gris">Dirección</dt><dd className="text-lg">{negocio.direccion}</dd></div>
            <div><dt className="text-sm font-bold text-gris">Teléfono</dt><dd className="text-lg"><a href={`tel:${negocio.telefonoLink}`} className="hover:text-barro">{negocio.telefono}</a></dd></div>
            <div><dt className="text-sm font-bold text-gris">WhatsApp</dt><dd className="text-lg"><a href={wa('Hola, quisiera información de Hotel Maela.')} className="hover:text-barro">{negocio.whatsappTexto}</a></dd></div>
            <div><dt className="text-sm font-bold text-gris">Correo</dt><dd className="text-lg"><a href={`mailto:${negocio.correo}`} className="hover:text-barro">{negocio.correo}</a></dd></div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={negocio.reservar} className="btn-barro">Reserva directa</a>
            <a href={negocio.mapa} className="btn-hiedra">Cómo llegar</a>
            <a href={negocio.instagram} className="btn border-2 border-tinta/30">Instagram</a>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg"><Foto n="calle-fachada" alt="Calle empedrada con la fachada de hiedra del hotel" className="absolute inset-0 h-full w-full object-cover" /></div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a href="#habitaciones" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2">Ir a las habitaciones</a>
      <Encabezado />
      <main>
        <Portada />
        <Bienvenida />
        <Habitaciones />
        <Ubicacion />
        <Oaxaca />
        <Restaurante />
        <Preguntas />
        <Contacto />
      </main>
      <footer className="bg-tinta pb-24 pt-10 text-sm text-white/75 md:pb-10">
        <div className="contenedor flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <img src={`${base}logo-blanco.png`} alt="Hotel Maela" width={489} height={259} loading="lazy" className="h-12 w-auto" />
          <p>© Hotel Maela · Constitución 206, Centro, Oaxaca de Juárez</p>
        </div>
      </footer>
      <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/10 bg-hiedra text-sm font-semibold text-white md:hidden">
        <a href={`tel:${negocio.telefonoLink}`} className="py-3.5 text-center">Llamar</a>
        <a href={wa('Hola, quisiera información de Hotel Maela.')} className="border-x border-white/10 py-3.5 text-center">WhatsApp</a>
        <a href={negocio.reservar} className="bg-barro py-3.5 text-center">Reservar</a>
      </nav>
    </>
  );
}
