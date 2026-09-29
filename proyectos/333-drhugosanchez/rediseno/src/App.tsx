import { useState } from 'react';
import { equipo, motivos, negocio, servicios, wa } from './data/content';


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

const waHola = wa('Hola, quiero agendar una cita con el Dr. Hugo Sánchez.');
const secciones = [['#motivo', 'Servicios'], ['#doctor', 'El doctor'], ['#clinica', 'La clínica'], ['#contacto', 'Contacto']] as const;

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-crema/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="font-display text-[1.25rem] leading-tight text-tinta">Dr. Hugo Sánchez<span className="block font-sans text-[0.8rem] text-gris">Cirujano dentista, Oaxaca</span></a>
        <nav aria-label="Secciones" className="hidden md:block">
          <ul className="flex gap-7">{secciones.map(([h, t]) => <li key={h}><a href={h} className="text-gris hover:text-tinta">{t}</a></li>)}</ul>
        </nav>
        <a href={waHola} className="btn !min-h-[42px] !px-4 !py-2" target="_blank" rel="noopener"><IconoWa /> <span className="hidden sm:inline">Agendar cita</span></a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="grid lg:grid-cols-2">
      <div className="contenedor flex flex-col justify-center py-16 lg:max-w-none lg:py-24 lg:pl-[max(2rem,calc((100vw-72rem)/2+2rem))] lg:pr-12">
        <p className="font-display text-[1.25rem] italic text-jade">El lugar donde tu sonrisa vuelve a reflejar tu verdadera esencia</p>
        <h1 className="mt-3 text-[2.6rem] sm:text-[3.6rem]">Dentista en Oaxaca, sobre Calzada Cuauhtémoc</h1>
        <p className="mt-5 max-w-xl text-[1.1rem] text-gris">Clínica del Dr. Hugo Sánchez Martínez, cirujano dentista con más de 10 años de experiencia. Estética dental, implantes, endodoncia, ortodoncia y urgencias, a minutos del centro histórico.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={waHola} className="btn" target="_blank" rel="noopener"><IconoWa /> Agendar por WhatsApp</a>
          <a href={negocio.telefonoLink} className="btn-linea"><IconoTel /> {negocio.telefono}</a>
        </div>
        <p className="mt-6 text-[0.98rem] text-gris">{negocio.horario.map((h) => `${h.dias}, ${h.horas}`).join('. ')}.</p>
      </div>
      <img src="./doctor-paciente.webp" alt="El Dr. Hugo Sánchez sonríe junto a una paciente que se mira en un espejo en el sillón dental" width={1400} height={933} fetchPriority="high" className="h-72 w-full object-cover sm:h-96 lg:h-full" />
    </section>
  );
}

function Motivo() {
  const [id, setId] = useState('dolor');
  const m = motivos.find((x) => x.id === id)!;
  return (
    <section id="motivo" className="bg-menta py-20 md:py-28">
      <div className="contenedor">
        <h2 className="max-w-2xl text-[2.3rem] sm:text-[3rem]">¿Qué te trae a consulta?</h2>
        <p className="mt-4 max-w-2xl text-gris">Elige lo que más se parece a tu caso y te mostramos los servicios de la clínica que tienen que ver. Es solo una guía: el diagnóstico lo hace el doctor en la valoración.</p>
        <div role="group" aria-label="Motivo de consulta" className="mt-8 grid grid-cols-2 gap-2 md:grid-cols-4">
          {motivos.map((x) => (
            <button key={x.id} type="button" aria-pressed={id === x.id} onClick={() => setId(x.id)}
              className={`min-h-[56px] rounded-lg border-2 px-3 font-bold transition-colors ${id === x.id ? 'border-jade bg-jade text-white' : 'border-tinta/15 bg-white hover:border-tinta'}`}>{x.boton}</button>
          ))}
        </div>
        <div className="mt-8 rounded-2xl bg-white p-6 sm:p-8" aria-live="polite">
          <h3 className="text-[1.7rem]">{m.titulo}</h3>
          <ul className="mt-5 grid gap-5 md:grid-cols-3">
            {m.servicios.map((s) => (
              <li key={s} className="border-t-2 border-jade/40 pt-4">
                <p className="font-bold text-jade">{servicios[s].nombre}</p>
                <p className="mt-1 text-[0.98rem]">{servicios[s].texto}</p>
              </li>
            ))}
          </ul>
          <a href={wa(m.mensaje)} target="_blank" rel="noopener" className="btn mt-8"><IconoWa /> Pedir cita por esto</a>
        </div>
        <p className="mt-6 text-[0.98rem] text-gris">Todos sus servicios: {Object.values(servicios).map((s) => s.nombre).join(', ')}.</p>
      </div>
    </section>
  );
}

function Doctor() {
  return (
    <section id="doctor" className="py-20 md:py-28">
      <div className="contenedor grid items-center gap-12 md:grid-cols-2">
        <img src="./doctor-equipo.webp" alt="El Dr. Hugo Sánchez atendiendo a una paciente con dos asistentes en el consultorio" width={1400} height={934} loading="lazy" className="w-full rounded-2xl object-cover" />
        <div>
          <h2 className="text-[2.3rem] sm:text-[3rem]">{negocio.doctor}</h2>
          <p className="mt-2 font-bold text-jade">Cirujano dentista, cédula profesional {negocio.cedula}</p>
          <p className="mt-4">Egresado de la {negocio.universidad}. Se mantiene en actualización con cursos, congresos y certificaciones, y sigue a cada paciente desde la cita hasta el seguimiento después del tratamiento.</p>
          <blockquote className="mt-6 border-l-4 border-jade pl-5 font-display text-[1.3rem] italic leading-snug">“No solo tratamos dientes, acompañamos personas.”</blockquote>
        </div>
      </div>
    </section>
  );
}

function Clinica() {
  return (
    <section id="clinica" className="oscuro py-20 md:py-28">
      <div className="contenedor">
        <h2 className="text-[2.3rem] sm:text-[3rem]">La clínica</h2>
        <p className="mt-4 max-w-2xl">En cada consulta: una evaluación clínica honesta, explicaciones claras del diagnóstico y del tratamiento, y un ambiente cómodo.</p>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          <li><img src="./consultorio.webp" alt="Consultorio con sillón dental, lámpara, pantalla y un cuadro de colores en la pared" width={1400} height={1050} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" /><p className="mt-3 text-crema/80">Consultorio</p></li>
          <li><img src="./recepcion.webp" alt="Recepción de la clínica con escritorio, silla, plantas y piso claro" width={1400} height={1050} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" /><p className="mt-3 text-crema/80">Recepción</p></li>
        </ul>
        <p className="mt-10 font-bold text-durazno">Equipo con el que trabajan</p>
        <ul className="mt-3 flex flex-wrap gap-2">{equipo.map((e) => <li key={e} className="rounded-full border border-crema/25 px-4 py-1.5 text-[0.95rem]">{e}</li>)}</ul>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="py-20 md:py-28">
      <div className="contenedor grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-[2.3rem] sm:text-[3rem]">Agenda tu valoración</h2>
          <p className="mt-4 max-w-md text-gris">Escribe o llama para agendar. Si es una urgencia, dilo en tu mensaje.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waHola} className="btn" target="_blank" rel="noopener"><IconoWa /> WhatsApp</a>
            <a href={negocio.telefonoLink} className="btn-linea"><IconoTel /> {negocio.telefono}</a>
          </div>
        </div>
        <dl className="grid gap-6">
          <div><dt className="font-bold text-jade">Dirección</dt><dd>{negocio.direccion}<br /><span className="text-gris">{negocio.referencia}</span><br /><a href={negocio.mapa} target="_blank" rel="noopener" className="font-bold text-jade underline underline-offset-4"><IconoPin className="mr-1 inline h-4 w-4" />Abrir en Google Maps</a></dd></div>
          <div><dt className="font-bold text-jade">Horario</dt><dd>{negocio.horario.map((h) => <span key={h.dias} className="block">{h.dias}: {h.horas}</span>)}</dd></div>
          <div><dt className="font-bold text-jade">Redes</dt><dd className="flex flex-wrap gap-x-5">{negocio.redes.map((r) => <a key={r.nombre} href={r.url} target="_blank" rel="noopener" className="underline underline-offset-4">{r.nombre}</a>)}</dd></div>
        </dl>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="border-t border-crema/10 bg-tinta pb-24 pt-8 text-[0.95rem] text-crema/75 md:pb-8">
      <div className="contenedor flex flex-wrap items-center justify-between gap-3">
        <p>Clínica del Dr. Hugo Sánchez, Oaxaca de Juárez</p>
        <p>Cédula profesional {negocio.cedula}</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-crema/15 bg-tinta text-crema md:hidden">
      <a href={waHola} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 bg-jade text-[0.9rem] font-bold text-white"><IconoWa />WhatsApp</a>
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
        <Motivo />
        <Doctor />
        <Clinica />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
