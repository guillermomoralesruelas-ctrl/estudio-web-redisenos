import { useMemo, useRef, useState } from 'react';
import {
  equipo, foto, importante, logo, negocio, pasos, precios, preguntas, sedes, temas, wa, waGeneral,
  type Modalidad, type Psicoterapeuta,
} from './data/content';

const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;
const CUADROS = ['bg-turquesa', 'bg-ambar', 'bg-naranja', 'bg-vino'];
// Portada: 8 rostros del equipo (números) y los cuatro colores del logo, en 4 x 3.
const PATRON: (number | string)[] = [0, 'bg-turquesa', 1, 2, 3, 4, 'bg-ambar', 5, 'bg-naranja', 6, 7, 'bg-vino'];

/* ---------- iconos simples (dibujados por nosotros) ---------- */
function IconoWa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}
function IconoTel({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 3h3l1.5 4.5-2 1.3a12 12 0 0 0 7.7 7.7l1.3-2L21 16v3a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2Z" strokeLinejoin="round" />
    </svg>
  );
}
function IconoPin({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-papel/95 backdrop-blur">
      <div className="contenedor flex h-[4.5rem] items-center justify-between gap-4">
        <a href="#inicio" aria-label="Katarsis, Centro de Atención Psicológica Integral, inicio">
          <img src={logo.src} width={logo.width} height={logo.height} alt="" className="h-9 w-auto sm:h-10" />
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-7 text-[0.95rem] font-medium lg:flex">
          <a href="#hablar" className="hover:text-turquesahondo">Psicoterapeutas</a>
          <a href="#precios" className="hover:text-turquesahondo">Precios</a>
          <a href="#sedes" className="hover:text-turquesahondo">Sedes</a>
          <a href="#preguntas" className="hover:text-turquesahondo">Preguntas</a>
        </nav>
        <a href={waGeneral} className="btn hidden sm:inline-flex" target="_blank" rel="noopener"><IconoWa /> WhatsApp</a>
      </div>
    </header>
  );
}

function Portada() {
  const mosaico = equipo.slice(0, 8);
  return (
    <section id="inicio" className="overflow-hidden">
      <div className="contenedor grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <div className="min-w-0">
          <p className="font-titulo text-xl italic text-vino">Psicoterapia en un clic</p>
          <h1 className="mt-3 text-[2.5rem] leading-[1.05] sm:text-6xl">Psicoterapia en línea y presencial en la Ciudad de México</h1>
          <p className="mt-5 max-w-xl text-lg text-gris">
            Un equipo de psicoterapeutas que cuentan, cuando menos, con maestría en psicoterapia. Atención a niños, adolescentes, adultos, parejas y familias, por videollamada, teléfono o chat, o en consultorio previa cita.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#hablar" className="btn">Encontrar psicoterapeuta</a>
            <a href={waGeneral} className="btn-linea" target="_blank" rel="noopener"><IconoWa /> Escribir por WhatsApp</a>
          </div>
          <p className="mt-6 text-[0.95rem] text-gris">Sesiones de 50 minutos. En línea desde {pesos(precios.linea[2].porSesion)} por sesión en paquete; presencial, {pesos(precios.presencial[0].total)}.</p>
        </div>
        <div className="grid min-w-0 grid-cols-4 gap-2 sm:gap-3" aria-hidden="true">
          {PATRON.map((c, i) => {
            if (typeof c === 'string') return <div key={i} className={`aspect-square rounded-lg ${c}`} />;
            const f = foto(mosaico[c].id);
            return <img key={i} src={f.src} width={f.width} height={f.height} alt="" fetchPriority={c < 3 ? 'high' : undefined} className="aspect-square w-full rounded-lg object-cover" />;
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- elemento memorable: "¿De qué quieres hablar?" ---------- */
function Tarjeta({ p, modalidad, resaltar }: { p: Psicoterapeuta; modalidad: Modalidad; resaltar: boolean }) {
  const f = foto(p.id);
  const mensaje = `Hola, me gustaría tomar una sesión ${modalidad === 'linea' ? 'en línea' : 'presencial'} con ${p.nombre}.`;
  return (
    <li className={`flex flex-col rounded-2xl border bg-white p-4 transition-colors ${resaltar ? 'border-turquesahondo' : 'border-tinta/10'}`}>
      <div className="flex gap-4">
        <img src={f.src} width={f.width} height={f.height} loading="lazy" alt={`Retrato de ${p.nombre}`} className="h-20 w-20 shrink-0 rounded-xl object-cover" />
        <div className="min-w-0">
          <h3 className="text-xl leading-tight">{p.nombre}</h3>
          <p className="mt-1 text-sm text-gris">Cédula profesional {p.cedula}</p>
          {p.grado && <p className="mt-0.5 text-sm text-gris">{p.grado}</p>}
        </div>
      </div>
      {p.enfoques && <p className="mt-3 text-sm"><span className="font-semibold">Enfoque:</span> {p.enfoques}</p>}
      <p className="mt-2 text-sm text-gris">{p.perfil}</p>
      <p className="mt-2 text-sm">
        {p.atiende.length > 0 && <>Atiende a {p.atiende.join(', ')}.</>}
        {p.modalidades && <> Presencial y en línea.</>}
      </p>
      <a href={wa(mensaje)} target="_blank" rel="noopener" className="btn mt-4 self-start px-5 py-2.5 text-sm"><IconoWa className="h-4 w-4" /> Quiero una sesión</a>
    </li>
  );
}

function DeQueQuieresHablar() {
  const [tema, setTema] = useState<string | null>(null);
  const [modalidad, setModalidad] = useState<Modalidad>('linea');
  const lista = useRef<HTMLDivElement>(null);
  const elegido = temas.find((t) => t.tema === tema);
  const visibles = useMemo(
    () => (elegido ? equipo.filter((p) => elegido.quienes.includes(p.id)) : equipo),
    [elegido],
  );
  const elegir = (t: string | null) => {
    setTema(t);
    if (window.matchMedia('(max-width: 1023px)').matches) {
      requestAnimationFrame(() => lista.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }
  };

  return (
    <section id="hablar" className="bg-white py-16 md:py-24" aria-labelledby="hablar-titulo">
      <div className="contenedor">
        <div className="max-w-2xl">
          <h2 id="hablar-titulo" className="text-4xl sm:text-5xl">¿De qué quieres hablar?</h2>
          <p className="mt-4 text-gris">
            Cada psicoterapeuta de Katarsis publica su formación y su experiencia. Elige un tema y ve quién lo menciona en su perfil, con su cédula profesional y su enfoque.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[18rem_1fr] lg:gap-12">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div role="group" aria-label="Temas" className="flex flex-wrap gap-2">
              <button type="button" onClick={() => elegir(null)} aria-pressed={tema === null}
                className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${tema === null ? 'border-vino bg-vino text-white' : 'border-tinta/20 hover:border-tinta/50'}`}>
                Todo el equipo
              </button>
              {temas.map((t) => (
                <button key={t.tema} type="button" onClick={() => elegir(t.tema)} aria-pressed={tema === t.tema}
                  className={`rounded-full border px-3.5 py-1.5 text-left text-sm font-medium transition-colors ${tema === t.tema ? 'border-vino bg-vino text-white' : 'border-tinta/20 hover:border-tinta/50'}`}>
                  {t.tema}
                </button>
              ))}
            </div>
            <div className="mt-6 rounded-xl bg-papel p-4">
              <p className="text-sm font-semibold">¿Cómo quieres tu sesión?</p>
              <div role="group" aria-label="Modalidad" className="mt-2 flex gap-2">
                {(['linea', 'presencial'] as const).map((m) => (
                  <button key={m} type="button" onClick={() => setModalidad(m)} aria-pressed={modalidad === m}
                    className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium ${modalidad === m ? 'border-turquesahondo bg-turquesahondo text-white' : 'border-tinta/20'}`}>
                    {m === 'linea' ? 'En línea' : 'Presencial'}
                  </button>
                ))}
              </div>
              <p className="mt-3 text-sm text-gris">
                {modalidad === 'linea'
                  ? `Una sesión: ${pesos(precios.linea[0].total)}. Por videollamada, teléfono o chat.`
                  : `Una sesión: ${pesos(precios.presencial[0].total)}. En una de sus tres sedes, previa cita.`}
              </p>
            </div>
          </div>

          <div ref={lista} className="min-w-0 scroll-mt-24" aria-live="polite">
            <p className="text-[0.95rem] text-gris">
              {elegido
                ? `${visibles.length === 1 ? '1 psicoterapeuta menciona' : `${visibles.length} psicoterapeutas mencionan`} “${elegido.tema.toLowerCase()}” en su perfil.`
                : `${equipo.length} psicoterapeutas en el equipo.`}
            </p>
            <ul className="mt-4 grid gap-4 md:grid-cols-2">
              {visibles.map((p) => <Tarjeta key={p.id} p={p} modalidad={modalidad} resaltar={!!elegido} />)}
            </ul>
            <p className="mt-6 text-sm text-gris">
              ¿No encuentras tu tema? <a href={waGeneral} target="_blank" rel="noopener" className="font-semibold text-turquesahondo underline underline-offset-4">Escríbenos</a> y el equipo de Katarsis te asigna un psicoterapeuta según tu horario. El mensaje de WhatsApp solo dice con quién quieres tu sesión, no el tema.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Precios() {
  const tabla = (titulo: string, filas: typeof precios.linea) => (
    <div className="rounded-2xl border border-tinta/10 bg-white p-6">
      <h3 className="text-2xl">{titulo}</h3>
      <table className="mt-4 w-full text-left text-[0.97rem]">
        <thead className="text-sm text-gris">
          <tr><th className="pb-2 font-medium">Paquete</th><th className="pb-2 font-medium">Por sesión</th><th className="pb-2 text-right font-medium">Total</th></tr>
        </thead>
        <tbody>
          {filas.map((f) => (
            <tr key={f.sesiones} className="border-t border-tinta/10">
              <td className="py-2.5">{f.sesiones === 1 ? '1 sesión' : `${f.sesiones} sesiones`}</td>
              <td className="py-2.5 text-gris">{pesos(f.porSesion)}</td>
              <td className="py-2.5 text-right font-semibold">{pesos(f.total)} MXN</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  return (
    <section id="precios" className="py-16 md:py-24" aria-labelledby="precios-titulo">
      <div className="contenedor">
        <h2 id="precios-titulo" className="text-4xl sm:text-5xl">Precios</h2>
        <p className="mt-4 max-w-2xl text-gris">Terapia individual. Cada sesión dura 50 minutos. La tarifa de paquete solo aplica con pago anticipado de todo el paquete.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {tabla('En línea', precios.linea)}
          {tabla('Presencial', precios.presencial)}
        </div>
        <p className="mt-6 text-[1.02rem]"><span className="font-semibold">Terapia de pareja:</span> {pesos(precios.pareja)} MXN por sesión, en línea o presencial (no aplica paquete).</p>
      </div>
    </section>
  );
}

function ComoFunciona() {
  return (
    <section className="bg-noche py-16 text-papel md:py-20" aria-labelledby="funciona-titulo">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
        <div>
          <h2 id="funciona-titulo" className="text-4xl sm:text-5xl">¿Cómo funciona?</h2>
          <p className="mt-4 text-papel/80">
            El material de tus sesiones está protegido por el secreto profesional de los psicoterapeutas, y tus datos, por la ley de protección de datos.
          </p>
        </div>
        <ol className="space-y-4">
          {pasos.map((p, i) => (
            <li key={p} className="flex gap-4 border-t border-papel/15 pt-4">
              <span aria-hidden="true" className={`mt-1 h-4 w-4 shrink-0 rounded-sm ${CUADROS[i]}`} />
              <span>{p}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Sedes() {
  return (
    <section id="sedes" className="py-16 md:py-24" aria-labelledby="sedes-titulo">
      <div className="contenedor">
        <h2 id="sedes-titulo" className="text-4xl sm:text-5xl">Sedes para terapia presencial</h2>
        <p className="mt-4 max-w-2xl text-gris">Solo se atiende previa cita. Escríbenos para agendar en la sede que te quede mejor.</p>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {sedes.map((s, i) => (
            <li key={s.zona} className="flex flex-col rounded-2xl border border-tinta/10 bg-white p-6">
              <span aria-hidden="true" className={`h-2 w-10 rounded-full ${CUADROS[i]}`} />
              <h3 className="mt-4 text-2xl">{s.zona}</h3>
              <p className="mt-2 flex-1 text-gris">{s.direccion}</p>
              <a href={s.mapa} target="_blank" rel="noopener" className="mt-4 inline-flex items-center gap-2 font-semibold text-turquesahondo underline-offset-4 hover:underline">
                <IconoPin /> Ver en Google Maps
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Preguntas() {
  return (
    <section id="preguntas" className="bg-white py-16 md:py-24" aria-labelledby="preguntas-titulo">
      <div className="contenedor max-w-3xl">
        <h2 id="preguntas-titulo" className="text-4xl sm:text-5xl">Preguntas frecuentes</h2>
        <div className="mt-8 divide-y divide-tinta/10 border-y border-tinta/10">
          {preguntas.map((q) => (
            <details key={q.p} className="group py-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-lg font-medium">
                {q.p}
                <span aria-hidden="true" className="mt-1 text-turquesahondo transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-gris">{q.r}</p>
            </details>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-naranjahondo bg-papel p-5">
          <p className="font-semibold">Importante</p>
          <p className="mt-1 text-gris">{importante}</p>
        </div>
      </div>
    </section>
  );
}

function Empresas() {
  return (
    <section className="py-16 md:py-20" aria-labelledby="empresas-titulo">
      <div className="contenedor flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 id="empresas-titulo" className="text-3xl sm:text-4xl">Para empresas</h2>
          <p className="mt-3 text-gris">Katarsis pone al alcance del personal de tu empresa servicios de psicoterapia y se adecua a las necesidades de tu organización.</p>
        </div>
        <a href={wa('Hola, me interesa el servicio de psicoterapia de Katarsis para una empresa.')} target="_blank" rel="noopener" className="btn-linea shrink-0"><IconoWa /> Pedir información</a>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <>
      <footer className="bg-noche py-12 pb-24 text-papel/80 lg:pb-12">
        <div className="contenedor grid gap-8 text-sm md:grid-cols-3">
          <div>
            <p className="font-titulo text-2xl text-papel">Katarsis</p>
            <p className="mt-1">Centro de Atención Psicológica Integral</p>
          </div>
          <div className="space-y-1.5">
            <a href={`tel:+52${negocio.telefono}`} className="flex items-center gap-2 hover:text-white"><IconoTel className="h-4 w-4" /> {negocio.telefonoVisible}</a>
            <a href={`mailto:${negocio.correo}`} className="block hover:text-white">{negocio.correo}</a>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5">
            <a href={negocio.facebook} target="_blank" rel="noopener" className="hover:text-white">Facebook</a>
            <a href={negocio.instagram} target="_blank" rel="noopener" className="hover:text-white">Instagram</a>
            <a href={negocio.tiktok} target="_blank" rel="noopener" className="hover:text-white">TikTok</a>
          </div>
        </div>
      </footer>
      <nav className="fixed inset-x-0 bottom-0 z-40 flex border-t border-tinta/10 bg-papel/95 backdrop-blur lg:hidden" aria-label="Contacto rápido">
        <a href={waGeneral} target="_blank" rel="noopener" className="flex flex-1 flex-col items-center gap-1 py-2.5 text-xs font-medium text-turquesahondo"><IconoWa /> WhatsApp</a>
        <a href={`tel:+52${negocio.telefono}`} className="flex flex-1 flex-col items-center gap-1 border-x border-tinta/10 py-2.5 text-xs font-medium text-turquesahondo"><IconoTel /> Llamar</a>
        <a href="#sedes" className="flex flex-1 flex-col items-center gap-1 py-2.5 text-xs font-medium text-turquesahondo"><IconoPin /> Sedes</a>
      </nav>
    </>
  );
}

export default function App() {
  return (
    <>
      <Encabezado />
      <main>
        <Portada />
        <DeQueQuieresHablar />
        <Precios />
        <ComoFunciona />
        <Sedes />
        <Preguntas />
        <Empresas />
      </main>
      <Pie />
    </>
  );
}
