import { useState } from 'react';
import { barberos, negocio, servicios, tendencias, wa } from './data/content';


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

const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;
const waHola = wa('Hola, quiero agendar una cita en Cervus Barbería.');
const secciones = [['#tiempo', 'Servicios'], ['#equipo', 'El equipo'], ['#historia', 'Historia'], ['#visita', 'Visita']] as const;
const opciones = [25, 30, 40, 60, 80];
const maxMin = 80;

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-papel/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-2 font-display text-[1.7rem] italic text-azul" aria-label="Cervus Barbería, inicio">
          <img src="./mascota.webp" alt="" width={600} height={600} className="h-10 w-10" /> Cervus
        </a>
        <nav aria-label="Secciones" className="hidden md:block">
          <ul className="flex gap-7">{secciones.map(([h, t]) => <li key={h}><a href={h} className="text-gris hover:text-tinta">{t}</a></li>)}</ul>
        </nav>
        <a href={negocio.reservas} className="btn !min-h-[42px] !px-5 !py-2" target="_blank" rel="noopener">Reservar</a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="oscuro relative isolate overflow-hidden">
      <img src="./clientes.webp" alt="Barbero de Cervus con un cliente sonriente en la silla, los dos con el pulgar arriba" width={1200} height={800} fetchPriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover object-[65%_center]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-tinta via-tinta/80 to-tinta/20 md:bg-gradient-to-r md:from-tinta md:via-tinta/80 md:to-transparent" aria-hidden="true" />
      <div className="contenedor pb-14 pt-64 md:py-36">
        <p className="font-bold text-cielo">Zoquipan, Zapopan, desde 2021</p>
        <h1 className="mt-3 max-w-2xl text-[3.2rem] sm:text-[5rem]">Barbería en Zapopan donde el estilo <em>se construye</em></h1>
        <p className="mt-5 max-w-xl text-[1.1rem]">Cortes a tijera y máquina, barba con navaja y rituales con toalla caliente. Dos barberos, una misma técnica.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={negocio.reservas} className="btn" target="_blank" rel="noopener">Reservar en línea</a>
          <a href="#tiempo" className="btn-linea">Ver servicios</a>
        </div>
      </div>
    </section>
  );
}

function Tiempo() {
  const [min, setMin] = useState(40);
  const caben = servicios.filter((s) => s.minutos <= min);
  return (
    <section id="tiempo" className="py-20 md:py-28">
      <div className="contenedor">
        <h2 className="max-w-2xl text-[2.8rem] sm:text-[3.8rem]">¿Cuánto tiempo <em>tienes?</em></h2>
        <p className="mt-4 max-w-2xl text-gris">Cada servicio tiene su duración. Dinos de cuánto tiempo dispones y te mostramos lo que alcanzas a hacerte.</p>
        <div role="group" aria-label="Minutos disponibles" className="mt-8 flex flex-wrap gap-2">
          {opciones.map((m) => (
            <button key={m} type="button" aria-pressed={min === m} onClick={() => setMin(m)}
              className={`min-h-[48px] min-w-[5.5rem] rounded-full border-2 px-4 font-bold transition-colors ${min === m ? 'border-azul bg-azul text-white' : 'border-tinta/20 bg-white hover:border-tinta'}`}>{m} min</button>
          ))}
        </div>
        <p className="mt-6 text-[1.1rem] font-bold" aria-live="polite">En {min} minutos te da tiempo de {caben.length === servicios.length ? 'cualquier servicio' : `${caben.length} de ${servicios.length} servicios`}.</p>
        <ul className="mt-6 grid gap-3">
          {servicios.map((s) => {
            const si = s.minutos <= min;
            return (
              <li key={s.nombre} className={`servicio grid gap-3 rounded-2xl border bg-white p-5 sm:grid-cols-[1fr_auto] sm:items-center ${si ? 'border-tinta/15' : 'border-dashed border-tinta/25 bg-papel'}`}>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h3 className="text-[1.7rem]">{s.nombre}</h3>
                    <span className="font-bold text-azul">{pesos(s.precio)}</span>
                  </div>
                  <p className="text-[0.98rem] text-gris">{s.texto}</p>
                  <div className="mt-3 flex items-center gap-3" aria-hidden="true">
                    <div className="h-2 flex-1 rounded-full bg-lavanda"><div className={`h-2 rounded-full ${si ? 'bg-azul' : 'bg-gris/50'}`} style={{ width: `${(s.minutos / maxMin) * 100}%` }} /></div>
                    <span className="w-14 text-right text-[0.9rem] font-bold">{s.minutos} min</span>
                  </div>
                  <p className="sr-only">{s.minutos} minutos{si ? '' : ', no alcanza con el tiempo elegido'}</p>
                </div>
                {si ? <a href={negocio.reservas} target="_blank" rel="noopener" className="btn !min-h-[44px] !py-2">Reservar</a> : <span className="text-[0.95rem] font-bold text-gris">Necesitas {s.minutos} min</span>}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Equipo() {
  return (
    <section id="equipo" className="bg-lavanda py-20 md:py-28">
      <div className="contenedor">
        <h2 className="text-[2.8rem] sm:text-[3.8rem]">Dos barberos. <em>Una misma técnica.</em></h2>
        <ul className="mt-10 grid gap-10 sm:grid-cols-2">
          {barberos.map((b) => (
            <li key={b.nombre} className="grid gap-5 lg:grid-cols-[14rem_1fr] lg:items-end">
              <img src={`./${b.foto}`} alt={`${b.nombre}, ${b.puesto.toLowerCase()} de Cervus, de brazos cruzados frente a un muro de concreto`} width={1086} height={1448} loading="lazy" className="aspect-[3/4] w-full rounded-2xl object-cover" />
              <div>
                <h3 className="text-[2.4rem]">{b.nombre}</h3>
                <p className="font-bold text-azul">{b.puesto}</p>
                <p className="mt-2">{b.texto}</p>
                <p className="mt-2 text-[0.98rem] text-gris"><span className="font-bold text-tinta">Especialidad:</span> {b.especialidad}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Historia() {
  return (
    <section id="historia" className="py-20 md:py-28">
      <div className="contenedor grid items-center gap-10 md:grid-cols-[1fr_18rem]">
        <div>
          <h2 className="text-[2.8rem] sm:text-[3.6rem]">Empezó como tradición, <em>hoy es una experiencia.</em></h2>
          <p className="mt-5 max-w-2xl">Desde los primeros cortes en casa, aprendiendo de generación en generación, hasta hoy. Cervus nace de una historia real desde 1998, construida con paciencia, técnica y respeto por el oficio. La barbería abrió en 2021.</p>
          <p className="mt-6 max-w-2xl text-gris">¿No sabes qué pedir? Sus tendencias de temporada: {tendencias.join(', ')}.</p>
        </div>
        <img src="./mascota.webp" alt="Mascota de Cervus: un personaje dibujado en azul que camina cargando un banderín con el nombre de la barbería" width={600} height={600} loading="lazy" className="mx-auto w-56 md:w-full" />
      </div>
    </section>
  );
}

function Visita() {
  return (
    <section id="visita" className="oscuro py-20 md:py-28">
      <div className="contenedor grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-[2.8rem] sm:text-[3.6rem]">Visita la <em>barbería.</em></h2>
          <p className="mt-4 max-w-md">Reserva en línea con el servicio y el barbero que quieras, o llámanos.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={negocio.reservas} className="btn" target="_blank" rel="noopener">Reservar en línea</a>
            <a href={waHola} className="btn-linea" target="_blank" rel="noopener"><IconoWa /> WhatsApp</a>
          </div>
        </div>
        <dl className="grid gap-6">
          <div><dt className="font-bold text-cielo">Dirección</dt><dd>{negocio.direccion}<br /><a href={negocio.mapa} target="_blank" rel="noopener" className="font-bold text-papel underline underline-offset-4"><IconoPin className="mr-1 inline h-4 w-4" />Cómo llegar</a></dd></div>
          <div><dt className="font-bold text-cielo">Horario</dt><dd>{negocio.horario.map((h) => <span key={h.dias} className="block">{h.dias}: {h.horas}</span>)}</dd></div>
          <div><dt className="font-bold text-cielo">Teléfono y correo</dt><dd><a href={negocio.telefonoLink} className="underline underline-offset-4">{negocio.telefono}</a><br /><a href={`mailto:${negocio.correo}`} className="underline underline-offset-4">{negocio.correo}</a></dd></div>
          <div><dt className="font-bold text-cielo">Instagram</dt><dd><a href={negocio.instagram} target="_blank" rel="noopener" className="underline underline-offset-4">@cervusbarberia</a></dd></div>
        </dl>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="border-t border-papel/10 bg-tinta pb-24 pt-8 text-[0.95rem] text-papel/75 md:pb-8">
      <div className="contenedor flex flex-wrap items-center justify-between gap-3">
        <p>Cervus Barbería, Zoquipan, Zapopan</p>
        <p>Donde el estilo se construye y cada detalle importa.</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-papel/15 bg-tinta text-papel md:hidden">
      <a href={waHola} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 bg-azul text-[0.9rem] font-bold text-white"><IconoWa />WhatsApp</a>
      <a href={negocio.telefonoLink} className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-bold"><IconoTel />Llamar</a>
      <a href={negocio.mapa} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-bold"><IconoPin />Cómo llegar</a>
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
        <Tiempo />
        <Equipo />
        <Historia />
        <Visita />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
