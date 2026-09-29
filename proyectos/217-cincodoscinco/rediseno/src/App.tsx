import { useState } from 'react';
import { galeria, horario, negocio, planes, servicios, ventajas, wa } from './data/content';


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
const waHola = wa('Hola, quiero agendar una clase de prueba en Cinco Dos.');
const secciones = [['#pizarron', 'Membresías'], ['#box', 'El box'], ['#comunidad', 'Comunidad'], ['#contacto', 'Contacto']] as const;

function Encabezado() {
  return (
    <header className="oscuro sticky top-0 z-40 border-b border-blanco/10 bg-negro/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="font-display text-[1.9rem] uppercase leading-none text-blanco" aria-label="Cinco Dos, inicio"><span className="text-naranja">52</span> Cinco Dos</a>
        <nav aria-label="Secciones" className="hidden md:block">
          <ul className="flex gap-7">{secciones.map(([h, t]) => <li key={h}><a href={h} className="font-bold text-blanco/75 hover:text-blanco">{t}</a></li>)}</ul>
        </nav>
        <a href={waHola} className="btn !min-h-[42px] !px-4 !py-2" target="_blank" rel="noopener"><IconoWa /> <span className="hidden sm:inline">Clase de prueba</span></a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="oscuro relative isolate overflow-hidden">
      <img src="./coach-grupo.webp" alt="Coach dando indicaciones a un grupo grande dentro del box, con el 52 pintado al fondo" width={1300} height={866} fetchPriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-negro via-negro/80 to-negro/20 md:bg-gradient-to-r md:from-negro md:via-negro/80 md:to-negro/10" aria-hidden="true" />
      <div className="contenedor pb-14 pt-64 md:py-36">
        <p className="plumon text-[1.4rem] text-naranja">{negocio.lema}</p>
        <h1 className="mt-3 max-w-3xl text-[3.6rem] sm:text-[6rem]">CrossFit en Hermosillo, colonia 5 de Mayo</h1>
        <p className="mt-5 max-w-xl text-[1.12rem]">Afiliado oficial de CrossFit desde hace 14 años. Clases de 5:00 a 20:30, grupos de 15 a 20 y sin reservas: llegas y entrenas.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={waHola} className="btn" target="_blank" rel="noopener"><IconoWa /> Agendar clase de prueba</a>
          <a href="#pizarron" className="btn-linea">Ver membresías</a>
        </div>
      </div>
    </section>
  );
}

function Pizarron() {
  const [id, setId] = useState('probar');
  const p = planes.find((x) => x.id === id)!;
  return (
    <section id="pizarron" className="py-20 md:py-28">
      <div className="contenedor">
        <h2 className="max-w-3xl text-[3rem] sm:text-[4.2rem]">¿Desde dónde empiezas?</h2>
        <p className="mt-4 max-w-2xl text-gris">Elige tu punto de partida y el pizarrón te dice cuánto pagas hoy y qué incluye.</p>
        <div role="group" aria-label="Punto de partida" className="mt-8 grid grid-cols-3 gap-2 sm:inline-grid sm:gap-3">
          {planes.map((x) => (
            <button key={x.id} type="button" aria-pressed={id === x.id} onClick={() => setId(x.id)}
              className={`min-h-[52px] rounded-md border-2 px-3 font-bold transition-colors sm:px-6 ${id === x.id ? 'border-negro bg-negro text-blanco' : 'border-negro/20 bg-white hover:border-negro'}`}>{x.boton}</button>
          ))}
        </div>
        <div className="pizarron mt-8 grid gap-8 rounded-md p-6 sm:p-10 md:grid-cols-2" aria-live="polite">
          <div>
            <p className="plumon text-[1.6rem] text-plumon-azul">{p.nombre}</p>
            <p className="plumon mt-4 text-[1.1rem] text-negro">Hoy pagas</p>
            <p className="plumon text-[4.2rem] leading-none text-plumon-rojo">{pesos(p.hoy)}</p>
            {p.despues && <p className="plumon mt-2 text-[1.2rem] text-plumon-azul">después, {p.despues}</p>}
            <p className="mt-5 max-w-sm">{p.para}</p>
          </div>
          <div>
            <p className="plumon text-[1.3rem] text-negro">Incluye</p>
            <ul className="plumon mt-2 grid gap-1 text-[1.25rem] text-plumon-azul">{p.incluye.map((i) => <li key={i}>✓ {i}</li>)}</ul>
            <p className="plumon mt-6 text-[1.3rem] text-negro">Horario</p>
            <ul className="plumon mt-2 grid gap-1 text-[1.1rem] text-plumon-azul">{horario.map((h) => <li key={h.texto}>{h.dias}: {h.texto}</li>)}</ul>
            <p className="plumon mt-4 text-[1.15rem] text-plumon-rojo">Sin reservas: llegas y entrenas</p>
          </div>
          <div className="md:col-span-2">
            <a href={wa(`Hola, me interesa ${p.nombre} (${pesos(p.hoy)}) en Cinco Dos.`)} target="_blank" rel="noopener" className="btn btn-oscuro"><IconoWa /> Lo quiero</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Box() {
  return (
    <section id="box" className="oscuro py-20 md:py-28">
      <div className="contenedor grid gap-12 md:grid-cols-[1fr_20rem] md:items-start">
        <div>
          <h2 className="text-[3rem] sm:text-[4rem]">Lo que encuentras en el Cinco Dos</h2>
          <dl className="mt-10 grid gap-8 sm:grid-cols-2">
            {ventajas.map((v) => <div key={v.titulo}><dt className="font-display text-[1.7rem] uppercase text-naranja">{v.titulo}</dt><dd className="mt-1">{v.texto}</dd></div>)}
          </dl>
          <p className="mt-10 font-bold text-blanco">Servicios: <span className="font-normal text-blanco/85">{servicios.join(', ')}.</span></p>
        </div>
        <figure>
          <img src="./neon-52.webp" alt="Letrero de neón naranja con el 52 dentro de un hexágono" width={866} height={1300} loading="lazy" className="w-full rounded-md object-cover" />
          <figcaption className="mt-3 text-[0.95rem] text-blanco/75">Coach Isaac A. Aguirre Rosas, CrossFit Certified Trainer L3.</figcaption>
        </figure>
      </div>
    </section>
  );
}

function Comunidad() {
  return (
    <section id="comunidad" className="py-20 md:py-28">
      <div className="contenedor">
        <h2 className="max-w-3xl text-[3rem] sm:text-[4rem]">Relax, have fun, workout</h2>
        <p className="mt-4 max-w-2xl text-gris">Más allá del esfuerzo, un espacio de convivencia para conectar con gente que comparte tu disciplina.</p>
        <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
          {galeria.map((g) => <li key={g.foto}><img src={`./${g.foto}`} alt={g.alt} width={g.ancho} height={g.alto} loading="lazy" className="aspect-[4/3] w-full rounded-md object-cover" /></li>)}
        </ul>
        <figure className="mt-10 overflow-hidden rounded-md">
          <img src="./equipo.webp" alt="El equipo de Cinco Dos posando con playeras negras frente a un avión pintado con el logotipo" width={1300} height={867} loading="lazy" className="aspect-[21/9] w-full object-cover" />
        </figure>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="oscuro py-20 md:py-28">
      <div className="contenedor grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-[3rem] sm:text-[4rem]">¿Tienes dudas?</h2>
          <p className="mt-4 max-w-md">Escríbenos para tu clase de prueba o para saber qué membresía te conviene.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waHola} className="btn" target="_blank" rel="noopener"><IconoWa /> WhatsApp</a>
            <a href={negocio.telefonoLink} className="btn-linea"><IconoTel /> {negocio.telefono}</a>
          </div>
        </div>
        <dl className="grid gap-6">
          <div><dt className="font-bold text-naranja">Dirección</dt><dd>{negocio.direccion}<br /><a href={negocio.mapa} target="_blank" rel="noopener" className="font-bold text-blanco underline underline-offset-4"><IconoPin className="mr-1 inline h-4 w-4" />Abrir en Google Maps</a></dd></div>
          <div><dt className="font-bold text-naranja">Horario</dt><dd>{horario.map((h) => <span key={h.texto} className="block">{h.dias}: {h.texto}</span>)}</dd></div>
          <div><dt className="font-bold text-naranja">Correo</dt><dd><a href={`mailto:${negocio.correo}`} className="underline underline-offset-4">{negocio.correo}</a></dd></div>
          <div><dt className="font-bold text-naranja">Redes</dt><dd className="flex flex-wrap gap-x-5">{negocio.redes.map((r) => <a key={r.nombre} href={r.url} target="_blank" rel="noopener" className="underline underline-offset-4">{r.nombre}</a>)}</dd></div>
        </dl>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="border-t border-blanco/10 bg-negro pb-24 pt-8 text-[0.95rem] text-blanco/75 md:pb-8">
      <div className="contenedor flex flex-wrap items-center justify-between gap-3">
        <p>52 CrossFit Cinco Dos, Hermosillo, Sonora</p>
        <p>Abierto de lunes a sábado</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-blanco/15 bg-negro text-blanco md:hidden">
      <a href={waHola} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 bg-naranja text-[0.9rem] font-bold text-negro"><IconoWa />WhatsApp</a>
      <a href={negocio.telefonoLink} className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-bold"><IconoTel />Llamar</a>
      <a href={negocio.mapa} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-bold"><IconoPin />Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#principal" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:text-negro">Saltar al contenido</a>
      <Encabezado />
      <main id="principal">
        <Portada />
        <Pizarron />
        <Box />
        <Comunidad />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
