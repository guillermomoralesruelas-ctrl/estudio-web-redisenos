import { useState } from 'react';
import { franjas, habitaciones, negocio, salones, servicios, wa } from './data/content';


function IconoWa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.2.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}
function IconoTel({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 3h4l2 5-3 2a11 11 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A18 18 0 0 1 3 5a2 2 0 0 1 2-2Z" /></svg>;
}
function IconoPin({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>;
}

const waHola = wa('Hola, quiero consultar disponibilidad y tarifas en Hafersons Inn.');
const secciones = [['#dia', 'Tu día'], ['#habitaciones', 'Habitaciones'], ['#salones', 'Eventos'], ['#contacto', 'Contacto']] as const;
const horas = [0, 6, 12, 18, 24];

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-hueso/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" aria-label="Hafersons Inn, inicio"><img src="./logo.webp" alt="Hafersons Inn Hotel & Suites" width={355} height={142} className="h-11 w-auto" /></a>
        <nav aria-label="Secciones" className="hidden md:block">
          <ul className="flex gap-7">{secciones.map(([h, t]) => <li key={h}><a href={h} className="text-gris hover:text-tinta">{t}</a></li>)}</ul>
        </nav>
        <a href={waHola} className="btn !min-h-[42px] !px-4 !py-2" target="_blank" rel="noopener"><IconoWa /> <span className="hidden sm:inline">Reservar</span></a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="grid lg:grid-cols-[1.1fr_1fr]">
      <div className="contenedor flex flex-col justify-center py-16 lg:max-w-none lg:py-24 lg:pl-[max(2rem,calc((100vw-72rem)/2+2rem))] lg:pr-12">
        <p className="font-semibold text-oliva">Tu casa en Ciudad Madero</p>
        <h1 className="mt-3 text-[2.6rem] sm:text-[3.5rem]">Hotel en Ciudad Madero sobre Av. Ejército Mexicano</h1>
        <p className="mt-5 max-w-xl text-[1.1rem] text-gris">Habitaciones estándar y Junior Suites, alberca, gimnasio, restaurante con desayuno y centro de negocios las 24 horas. {negocio.referencia}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={waHola} className="btn" target="_blank" rel="noopener"><IconoWa /> Consultar disponibilidad</a>
          <a href={negocio.telefonoLink} className="btn-linea"><IconoTel /> {negocio.telefono}</a>
        </div>
      </div>
      <img src="./fachada.webp" alt="Fachada amarilla del Hafersons Inn Hotel & Suites con banderas y la entrada techada" width={1242} height={1066} fetchPriority="high" className="h-80 w-full object-cover sm:h-[28rem] lg:h-full" />
    </section>
  );
}

function Dia() {
  const [cuando, setCuando] = useState<'semana' | 'finde'>('semana');
  const f = franjas[cuando];
  return (
    <section id="dia" className="bg-salvia py-20 md:py-28">
      <div className="contenedor">
        <h2 className="max-w-2xl text-[2.3rem] sm:text-[3rem]">Un día en el hotel</h2>
        <p className="mt-4 max-w-2xl text-gris">A qué hora puedes desayunar, comer o trabajar. El desayuno cambia en fin de semana.</p>
        <div role="group" aria-label="Día" className="mt-8 inline-flex rounded-md border-2 border-tinta/15 bg-white p-1">
          {([['semana', 'Lunes a viernes'], ['finde', 'Sábado y domingo']] as const).map(([id, t]) => (
            <button key={id} type="button" aria-pressed={cuando === id} onClick={() => setCuando(id)}
              className={`min-h-[44px] rounded px-5 font-semibold transition-colors ${cuando === id ? 'bg-oliva text-white' : 'hover:bg-salvia'}`}>{t}</button>
          ))}
        </div>
        <div className="mt-8 rounded-xl bg-white p-5 sm:p-8" aria-live="polite">
          <div className="relative ml-0 sm:ml-44">
            <div className="relative h-5 text-[0.85rem] text-gris" aria-hidden="true">
              {horas.map((h) => <span key={h} className={`absolute ${h === 0 ? '' : h === 24 ? '-translate-x-full' : '-translate-x-1/2'}`} style={{ left: `${(h / 24) * 100}%` }}>{h}:00</span>)}
            </div>
          </div>
          <ul className="mt-2 grid gap-4">
            {f.map((x) => (
              <li key={x.nombre} className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:items-center sm:gap-4">
                <p><span className="font-semibold">{x.nombre}</span> <span className="text-gris sm:block">{x.texto}</span></p>
                <div className="relative h-8 rounded bg-salvia" aria-hidden="true">
                  <div className={`franja absolute inset-y-0 rounded ${x.a - x.de === 24 ? 'bg-tinta' : 'bg-oliva'}`} style={{ left: `${(x.de / 24) * 100}%`, width: `${((x.a - x.de) / 24) * 100}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <li className="overflow-hidden rounded-xl bg-white"><img src="./desayuno.webp" alt="Desayuno servido: huevos, fruta, jugo de naranja, café y tortillas en el restaurante" width={1280} height={960} loading="lazy" className="aspect-[4/3] w-full object-cover" /><p className="p-4 font-semibold">Desayuno en el restaurante</p></li>
          <li className="overflow-hidden rounded-xl bg-white"><img src="./restaurante.webp" alt="Restaurante del hotel con mesas de madera, lámparas colgantes y ventanales" width={1280} height={960} loading="lazy" className="aspect-[4/3] w-full object-cover" /><p className="p-4 font-semibold">Restaurante, de 7:00 a 15:00</p></li>
          <li className="overflow-hidden rounded-xl bg-white sm:col-span-2 lg:col-span-1"><img src="./recepcion.webp" alt="Recepción con mostrador de madera, arreglo de flores y domo" width={1280} height={960} loading="lazy" className="aspect-[4/3] w-full object-cover" /><p className="p-4 font-semibold">Recepción y lobby</p></li>
        </ul>
      </div>
    </section>
  );
}

function Habitaciones() {
  return (
    <section id="habitaciones" className="py-20 md:py-28">
      <div className="contenedor">
        <h2 className="text-[2.3rem] sm:text-[3rem]">Habitaciones estándar y Junior Suites</h2>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-gris">{servicios.map((s) => <li key={s.nombre}><span className="font-semibold text-tinta">{s.nombre}.</span> {s.texto}</li>)}</ul>
        <ul className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {habitaciones.map((h) => <li key={h.foto}><img src={`./${h.foto}`} alt={h.alt} width={h.ancho} height={h.alto} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover" /></li>)}
        </ul>
        <a href={wa('Hola, quiero consultar tarifas de habitación estándar y Junior Suite.')} target="_blank" rel="noopener" className="btn mt-8"><IconoWa /> Consultar tarifas</a>
      </div>
    </section>
  );
}

function Salones() {
  return (
    <section id="salones" className="oscuro py-20 md:py-28">
      <div className="contenedor grid items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-[2.3rem] sm:text-[3rem]">Cinco salones para tu evento</h2>
          <ul className="mt-6 flex flex-wrap gap-2">{salones.map((s) => <li key={s} className="rounded-full border border-hueso/25 px-4 py-1.5">Salón {s}</li>)}</ul>
          <a href={wa('Hola, quiero información de sus salones para un evento.')} target="_blank" rel="noopener" className="btn mt-8"><IconoWa /> Cotizar un evento</a>
        </div>
        <img src="./lobby.webp" alt="Lobby del hotel con piso de mármol, mesa de vidrio con flores y puertas de madera" width={1280} height={960} loading="lazy" className="w-full rounded-xl object-cover" />
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="py-20 md:py-28">
      <div className="contenedor grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-[2.3rem] sm:text-[3rem]">Reserva directo con el hotel</h2>
          <p className="mt-4 max-w-md text-gris">Escribe tus fechas y cuántas personas son.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waHola} className="btn" target="_blank" rel="noopener"><IconoWa /> WhatsApp {negocio.whatsappTexto}</a>
            <a href={negocio.telefonoLink} className="btn-linea"><IconoTel /> {negocio.telefono}</a>
          </div>
        </div>
        <dl className="grid gap-6">
          <div><dt className="font-semibold text-oliva">Dirección</dt><dd>{negocio.direccion}<br /><a href={negocio.mapa} target="_blank" rel="noopener" className="font-semibold text-oliva underline underline-offset-4"><IconoPin className="mr-1 inline h-4 w-4" />Abrir en Google Maps</a></dd></div>
          <div><dt className="font-semibold text-oliva">Redes</dt><dd className="flex flex-wrap gap-x-5">{negocio.redes.map((r) => <a key={r.nombre} href={r.url} target="_blank" rel="noopener" className="underline underline-offset-4">{r.nombre}</a>)}</dd></div>
        </dl>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="border-t border-hueso/10 bg-tinta pb-24 pt-8 text-[0.95rem] text-hueso/75 md:pb-8">
      <div className="contenedor flex flex-wrap items-center justify-between gap-3">
        <p>Hafersons Inn Hotel & Suites, Ciudad Madero</p>
        <p>Tel. {negocio.telefono}</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-hueso/15 bg-tinta text-hueso md:hidden">
      <a href={waHola} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 bg-oliva text-[0.9rem] font-semibold text-white"><IconoWa />WhatsApp</a>
      <a href={negocio.telefonoLink} className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-semibold"><IconoTel />Llamar</a>
      <a href={negocio.mapa} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-semibold"><IconoPin />Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#principal" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:text-tinta">Saltar al contenido</a>
      <Encabezado />
      <main id="principal">
        <Portada />
        <Dia />
        <Habitaciones />
        <Salones />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
