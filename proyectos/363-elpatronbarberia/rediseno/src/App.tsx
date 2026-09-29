import { useState } from 'react';
import { equipo, faq, foto, membresia, negocio, servicios, wa, waCita } from './data/content';

function IconoWa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.2.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}
function IconoPin({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>;
}
function IconoCal({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></svg>;
}

const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;
const secciones = [['#servicios', 'Servicios'], ['#anio', 'Membresía'], ['#equipo', 'Equipo'], ['#ubicacion', 'Ubicación']] as const;

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-amarillo/15 bg-negro/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="font-display text-[1.9rem] leading-none text-amarillo">El Patrón</a>
        <nav aria-label="Secciones" className="hidden lg:block">
          <ul className="flex gap-7">{secciones.map(([h, t]) => <li key={h}><a href={h} className="text-humo hover:text-amarillo">{t}</a></li>)}</ul>
        </nav>
        <div className="flex items-center gap-2">
          <a href={waCita} className="btn-linea !min-h-[42px] !px-3 !py-1.5" target="_blank" rel="noopener" aria-label="WhatsApp"><IconoWa /></a>
          <a href={negocio.reservar} className="btn !min-h-[42px] !py-1.5" target="_blank" rel="noopener">Reservar</a>
        </div>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      <img src={foto('local')} alt="Interior de El Patrón Juárez: sillones de barbero, muros de madera y un barbero con playera negra con la P de la marca" width={900} height={600}
        fetchPriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-negro via-negro/80 to-negro/10" aria-hidden="true" />
      <div className="contenedor py-20 sm:py-28">
        <p className="font-semibold text-amarillo">Colonia Juárez, CDMX</p>
        <h1 className="mt-3 max-w-3xl text-[4rem] sm:text-[6.5rem]">Atrévete a ser el Patrón</h1>
        <p className="mt-4 max-w-xl text-[1.15rem] text-hueso/90">Barbería en Insurgentes Sur 26. Diseño de imagen y precisión estética: corte, ritual de barba y faciales con productos naturales.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={negocio.reservar} className="btn" target="_blank" rel="noopener"><IconoCal /> Reservar ahora</a>
          <a href={waCita} className="btn-linea" target="_blank" rel="noopener"><IconoWa /> WhatsApp</a>
        </div>
        <p className="mt-8 text-humo"><strong className="text-hueso">{negocio.google} en Google.</strong> La agenda se llena: reserva con 24 horas de anticipación.</p>
      </div>
    </section>
  );
}

function Servicios() {
  return (
    <section id="servicios" className="claro py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="text-[3.4rem] sm:text-[4.4rem]">Servicios</h2>
        <p className="mt-1 text-[1.1rem]">Técnica experta, productos orgánicos. Cada visita incluye bebida de cortesía, lavado, masaje y styling.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicios.map((s) => (
            <article key={s.id} className="flex flex-col overflow-hidden rounded-xl bg-white">
              <img src={foto(s.foto)} alt={s.alt} width={800} height={800} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-[2.1rem]">{s.nombre}</h3>
                  <p className="font-display text-[2rem] text-negro">{pesos(s.precio)}</p>
                </div>
                <p className="text-[0.95rem] font-semibold">{s.duracion}</p>
                <ul className="mt-3 flex-1 space-y-1 text-[0.97rem]">{s.incluye.map((i) => <li key={i} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 bg-negro" aria-hidden="true" />{i}</li>)}</ul>
                <a href={wa(`¡Hola! Quiero agendar: ${s.nombre} (${pesos(s.precio)}) en El Patrón Juárez.`)} className="btn-negro mt-5 !text-[1.1rem]" target="_blank" rel="noopener"><IconoWa /> Agendar</a>
              </div>
            </article>
          ))}
          <article className="flex flex-col justify-center rounded-xl border-2 border-dashed border-negro/30 p-6">
            <h3 className="text-[2.1rem]">¿Buscas algo más?</h3>
            <p className="mt-2">Pigmentación, depilación y más. Pregunta en tu visita.</p>
            <a href={negocio.visagista} className="enlace mt-4" target="_blank" rel="noopener">Prueba su Visagismo IA (beta)</a>
          </article>
        </div>
      </div>
    </section>
  );
}

const opciones = [
  { id: 'corte', nombre: 'Corte', precio: 290 },
  { id: 'barba', nombre: 'Barba', precio: 290 },
  { id: 'facial', nombre: 'Facial', precio: 290 },
  { id: 'experiencia', nombre: 'Experiencia', precio: 800 },
  { id: 'nada', nombre: 'Sin visita', precio: 0 },
];
const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

function AnioPatron() {
  const [ninos, setNinos] = useState(false);
  const [plan, setPlan] = useState<string[]>(Array(12).fill('corte'));
  const m = ninos ? membresia.ninos : membresia.adulto;
  const ops = ninos ? [{ id: 'patroncitos', nombre: 'Patroncito', precio: 220 }, { id: 'nada', nombre: 'Sin visita', precio: 0 }] : opciones;
  const planActual = plan.map((p) => (ops.some((o) => o.id === p) ? p : ops[0].id));
  const gasto = planActual.reduce((t, p) => t + ops.find((o) => o.id === p)!.precio, 0);
  const resta = m.credito - gasto;
  const uso = Math.min(100, (gasto / m.credito) * 100);
  const cambiar = (i: number) => {
    const idx = ops.findIndex((o) => o.id === planActual[i]);
    const nuevo = [...planActual]; nuevo[i] = ops[(idx + 1) % ops.length].id; setPlan(nuevo);
  };
  const resumen = planActual.map((p, i) => `${meses[i]}: ${ops.find((o) => o.id === p)!.nombre}`).join(', ');
  return (
    <section id="anio" className="py-16 sm:py-24">
      <div className="contenedor">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[3.4rem] sm:text-[4.4rem]">Tu año de Patrón</h2>
            <p className="mt-2 text-[1.1rem] text-hueso/85">
              Con la membresía anual pagas {pesos(m.precio)} y tienes {pesos(m.credito)} de crédito:
              {ninos ? ' doce Patroncitos de $220.' : ' doce cortes de $290, uno por mes.'} Toca un mes para cambiar el servicio.
            </p>
          </div>
          <div className="flex rounded-md bg-carbon p-1" role="group" aria-label="Tipo de membresía">
            {[false, true].map((v) => (
              <button key={String(v)} type="button" aria-pressed={ninos === v} onClick={() => setNinos(v)}
                className={`min-h-[44px] rounded px-5 font-display text-[1.2rem] tracking-wide ${ninos === v ? 'bg-amarillo text-negro' : 'text-hueso'}`}>{v ? 'Niños' : 'Adulto'}</button>
            ))}
          </div>
        </div>

        <ol className="mt-9 grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-6" aria-label="Doce meses">
          {planActual.map((p, i) => {
            const o = ops.find((x) => x.id === p)!;
            const vacio = o.id === 'nada';
            return (
              <li key={i}>
                <button type="button" onClick={() => cambiar(i)} aria-label={`${meses[i]}: ${o.nombre}. Toca para cambiar`}
                  className={`flex h-full min-h-[96px] w-full flex-col justify-between rounded-lg border-2 p-3 text-left transition-colors ${vacio ? 'border-dashed border-hueso/20 text-humo' : 'border-amarillo/60 bg-carbon hover:border-amarillo'}`}>
                  <span className="text-[0.85rem] font-semibold uppercase tracking-wider text-humo">{meses[i]}</span>
                  <span className={`font-display text-[1.6rem] leading-none ${vacio ? '' : 'text-amarillo'}`}>{o.nombre}</span>
                  <span className="text-[0.9rem]">{o.precio ? pesos(o.precio) : 'Nada'}</span>
                </button>
              </li>
            );
          })}
        </ol>

        <div className="mt-8 grid gap-6 rounded-xl bg-carbon p-6 sm:p-8 lg:grid-cols-[1.4fr_1fr] lg:items-center" aria-live="polite">
          <div>
            <div className="flex items-baseline justify-between gap-4">
              <p className="font-display text-[1.6rem]">Tu cartera</p>
              <p className="text-humo">{pesos(gasto)} de {pesos(m.credito)}</p>
            </div>
            <div className="mt-3 h-4 overflow-hidden rounded-full bg-negro" aria-hidden="true">
              <div className={`h-full rounded-full ${resta < 0 ? 'bg-[#ff7a59]' : 'bg-amarillo'}`} style={{ width: `${uso}%` }} />
            </div>
            <p className="mt-3 text-[1.05rem]">
              {resta >= 0
                ? <>Te quedan <strong className="text-amarillo">{pesos(resta)}</strong> de crédito. Pagaste {pesos(m.precio)}.</>
                : <>Tu plan pasa el crédito por <strong className="text-[#ff9f85]">{pesos(-resta)}</strong>.</>}
            </p>
          </div>
          <a href={wa(`¡Hola! Me interesa la membresía anual ${ninos ? 'para niños' : ''} de El Patrón (${pesos(m.precio)} con ${pesos(m.credito)} de crédito). Mi plan: ${resumen}.`)}
            className="btn w-full" target="_blank" rel="noopener"><IconoWa /> Quiero mi membresía</a>
        </div>
        <p className="mt-6 text-humo"><strong className="text-hueso">Lealtad Patrón: 7 + 1.</strong> Siete visitas y la octava es gratis; pídela en caja.</p>
      </div>
    </section>
  );
}

function Equipo() {
  return (
    <section id="equipo" className="claro py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="text-[3.4rem] sm:text-[4.4rem]">Maestros de la navaja y el estilo</h2>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {equipo.map((b) => (
            <li key={b.nombre} className="flex flex-col overflow-hidden rounded-xl bg-white">
              {b.foto
                ? <img src={foto(b.foto)} alt={b.alt!} width={576} height={1024} loading="lazy" className="aspect-[3/4] w-full object-cover object-top" />
                : <div className="grid aspect-[3/4] w-full place-items-center bg-negro font-display text-[7rem] text-amarillo" aria-hidden="true">{b.nombre[0]}</div>}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-[2.2rem]">{b.nombre}</h3>
                <p className="font-semibold">{b.rol}</p>
                <p className="mt-2 flex-1 text-[0.95rem]">{b.especialidades.join(', ')}.</p>
                <a href={wa(`¡Hola! Quiero agendar una cita con ${b.nombre.toUpperCase()}`)} className="btn-negro mt-4 !text-[1.1rem]" target="_blank" rel="noopener"><IconoWa /> Con {b.nombre}</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Ubicacion() {
  return (
    <section id="ubicacion" className="py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="text-[3.4rem] sm:text-[4.2rem]">Ubicación Juárez</h2>
          <p className="mt-3 flex gap-2"><IconoPin className="mt-1 h-5 w-5 shrink-0 text-amarillo" />{negocio.direccion}</p>
          <a href={negocio.mapa} className="enlace mt-2 inline-block" target="_blank" rel="noopener">Ver en Google Maps</a>
          <dl className="mt-6 grid gap-2">{negocio.horario.map(([d, h]) => <div key={d} className="flex justify-between gap-4 border-b border-hueso/10 pb-2"><dt className="text-humo">{d}</dt><dd className="font-semibold">{h}</dd></div>)}</dl>
          <dl className="mt-8 space-y-5">{faq.map(([q, a]) => <div key={q}><dt className="font-semibold text-amarillo">{q}</dt><dd className="mt-1 text-hueso/85">{a}</dd></div>)}</dl>
        </div>
        <div>
          <div className="relative min-h-[320px] overflow-hidden rounded-xl bg-carbon">
            <a href={negocio.mapa} target="_blank" rel="noopener" className="enlace absolute inset-0 grid place-items-center p-6 text-center">Ver la ubicación en Google Maps</a>
            <iframe src={negocio.mapaEmbed} title="Mapa de Google con la ubicación de El Patrón Juárez" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="relative h-full min-h-[320px] w-full border-0" />
          </div>
          <h3 className="mt-8 text-[2.2rem]">También en Querétaro</h3>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            {negocio.sedes.map(([n, d, t, u]) => (
              <li key={n} className="rounded-lg bg-carbon p-4">
                <p className="font-display text-[1.5rem] text-amarillo">{n}</p>
                <p className="text-[0.95rem] text-hueso/85">{d}</p>
                <p className="mt-1 text-[0.95rem]"><a href={`tel:+52${t.replace(/\s/g, '')}`} className="enlace">{t}</a>, <a href={u} className="enlace" target="_blank" rel="noopener">Ver sede</a></p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="border-t border-amarillo/15 bg-carbon pb-28 pt-8 lg:pb-8">
      <div className="contenedor flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-[1.8rem] text-amarillo">El Patrón Barbería</p>
        <p className="flex gap-5"><a href={negocio.instagram} className="enlace" target="_blank" rel="noopener">Instagram</a><a href={negocio.facebook} className="enlace" target="_blank" rel="noopener">Facebook</a><a href={negocio.telefonoHref} className="enlace">{negocio.telefono}</a></p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-amarillo/25 bg-negro text-hueso lg:hidden">
      <a href={negocio.reservar} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 bg-amarillo font-display text-[1.1rem] text-negro"><IconoCal />Reservar</a>
      <a href={waCita} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 font-display text-[1.1rem]"><IconoWa />WhatsApp</a>
      <a href={negocio.mapa} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 font-display text-[1.1rem]"><IconoPin />Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#principal" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded focus:bg-amarillo focus:px-4 focus:py-2 focus:text-negro">Saltar al contenido</a>
      <Encabezado />
      <main id="principal">
        <Portada />
        <Servicios />
        <AnioPatron />
        <Equipo />
        <Ubicacion />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
