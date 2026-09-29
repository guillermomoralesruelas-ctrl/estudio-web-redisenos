import { useState } from 'react';
import { extendido, extendidoHasta, foto, historia, incluye, negocio, niveles, pilares, rutaIngles, seguridad, servicios, testimonios, wa } from './data/content';


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
const hora = (m: number) => `${Math.floor(m / 60)}:${String(m % 60).padStart(2, '0')}`;
const duracion = (m: number) => { const hh = Math.floor(m / 60); const mm = m % 60; return `${hh} h${mm ? ` ${mm} min` : ''}`; };
const secciones = [['#horario', 'Horario'], ['#modelo', 'Modelo'], ['#seguridad', 'Seguridad'], ['#colegiatura', 'Colegiatura'], ['#contacto', 'Contacto']] as const;
const waInformes = wa('Hola, quiero informes de Colegio Banting');
const waVisita = wa('Hola, quiero agendar una visita a Colegio Banting');

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-uva/10 bg-papel/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="font-display text-[1.5rem] text-uva">Colegio Banting</a>
        <nav aria-label="Secciones" className="hidden lg:block">
          <ul className="flex gap-7">{secciones.map(([h, t]) => <li key={h}><a href={h} className="font-bold text-pizarra hover:text-uva">{t}</a></li>)}</ul>
        </nav>
        <a href={waVisita} className="btn !min-h-[42px] !py-2" target="_blank" rel="noopener"><IconoWa /> <span className="hidden sm:inline">Agendar visita</span></a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="contenedor grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.05fr_1fr]">
      <div>
        <p className="font-bold text-pizarra">Preescolar · Primaria · Secundaria · Coyoacán</p>
        <h1 className="mt-3 text-[2.8rem] sm:text-[4.2rem]">Colegio bilingüe en Coyoacán, desde {negocio.desde}</h1>
        <p className="mt-5 max-w-xl text-[1.12rem] text-pizarra">Una escuela que nació con seis alumnos para hacer bien las cosas: inglés con certificación Oxford y Cambridge, robótica, emprendimiento y acompañamiento cercano en cada etapa.</p>
        <p className="mt-6 inline-flex flex-wrap items-baseline gap-x-2 rounded-2xl bg-lila px-5 py-3"><span>Colegiatura desde</span><span className="font-display text-[2rem] text-uva">{pesos(negocio.colegiatura)}</span><span>al mes</span></p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href={waVisita} className="btn" target="_blank" rel="noopener"><IconoWa /> Agendar visita</a>
          <a href="#horario" className="btn-linea">¿A qué hora pasas por él?</a>
        </div>
      </div>
      <img src={foto('chromebook')} alt="Alumnos de secundaria con uniforme morado trabajando juntos en una Chromebook" width={1400} height={872} fetchPriority="high"
        className="aspect-[4/3] w-full rounded-[2rem] object-cover" />
    </section>
  );
}

function Horario() {
  const [nivelId, setNivelId] = useState('primaria');
  const nivel = niveles.find((n) => n.id === nivelId)!;
  const opciones: number[] = [];
  for (let t = nivel.salida; t <= extendidoHasta; t += 30) opciones.push(t);
  if (opciones[opciones.length - 1] !== extendidoHasta) opciones.push(extendidoHasta);
  const [recoge, setRecoge] = useState(17 * 60);
  const pasa = Math.min(Math.max(recoge, nivel.salida), extendidoHasta);
  const inicio = 6 * 60 + 30;
  const total = extendidoHasta - inicio;
  const pct = (m: number) => `${((m - inicio) / total) * 100}%`;
  const extra = pasa - nivel.salida;
  const mensaje = `Hola, quiero informes de ${nivel.nombre} en Colegio Banting. Pasaríamos por nuestro hijo a las ${hora(pasa)}${extra > 0 ? ', así que nos interesa el horario extendido' : ''}. ¿Podemos agendar una visita?`;

  return (
    <section id="horario" className="oscuro py-16 sm:py-24">
      <div className="contenedor">
        <p className="font-bold text-sol">Para familias que trabajan</p>
        <h2 className="mt-2 text-[2.6rem] sm:text-[3.8rem]">¿A qué hora pasas por él?</h2>
        <p className="mt-3 max-w-2xl">Elige su nivel y la hora a la que puedes recogerlo. Te mostramos su día en Banting, de la entrada a tu llegada, con el horario extendido hasta las 19:00.</p>

        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Nivel">
          {niveles.map((n) => (
            <button key={n.id} type="button" aria-pressed={n.id === nivelId} onClick={() => setNivelId(n.id)}
              className={`min-h-[48px] rounded-full px-5 font-bold transition-colors ${n.id === nivelId ? 'bg-sol text-tinta' : 'bg-white/10 text-papel hover:bg-white/20'}`}>
              {n.nombre} <span className="font-normal">· {n.edades}</span>
            </button>
          ))}
        </div>

        <fieldset className="mt-6">
          <legend className="font-bold text-papel">Paso por él a las…</legend>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {opciones.map((t) => (
              <button key={t} type="button" aria-pressed={pasa === t} onClick={() => setRecoge(t)}
                className={`min-h-[44px] min-w-[4.2rem] rounded-xl px-2 font-bold transition-colors ${pasa === t ? 'bg-papel text-uva' : 'bg-white/10 text-papel hover:bg-white/20'}`}>{hora(t)}</button>
            ))}
          </div>
        </fieldset>

        <div className="mt-8" aria-hidden="true">
          <div className="relative h-10 overflow-hidden rounded-full bg-white/10">
            <span className="absolute inset-y-0 bg-papel" style={{ left: pct(nivel.entrada), width: `calc(${pct(nivel.salida)} - ${pct(nivel.entrada)})` }} />
            {extra > 0 && <span className="absolute inset-y-0 bg-sol" style={{ left: pct(nivel.salida), width: `calc(${pct(pasa)} - ${pct(nivel.salida)})` }} />}
          </div>
          <div className="relative mt-1 h-5 text-[0.8rem]">
            {[7, 9, 11, 13, 15, 17, 19].map((hh) => <span key={hh} className="absolute -translate-x-1/2" style={{ left: pct(hh * 60) }}>{hh}:00</span>)}
          </div>
        </div>

        <p className="mt-6 text-[1.15rem] text-papel" aria-live="polite">
          En {nivel.nombre.toLowerCase()} entra a las <strong>{hora(nivel.entrada)}</strong> y sale a las <strong>{hora(nivel.salida)}</strong>.{' '}
          {extra > 0 ? <>Si pasas a las <strong className="text-sol">{hora(pasa)}</strong>, se queda {duracion(extra)} en horario extendido.</> : 'Pasas justo a la salida.'}
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <ol className="grid gap-3">
            {nivel.bloques.map((b) => (
              <li key={b.hora} className="grid grid-cols-[4rem_1fr] gap-3 border-t border-papel/15 pt-3">
                <span className="font-display text-[1.25rem] text-sol">{hora(b.hora)}</span>
                <span><strong className="text-papel">{b.nombre}</strong><span className="block text-[0.95rem]">{b.texto}</span></span>
              </li>
            ))}
            <li className="grid grid-cols-[4rem_1fr] gap-3 border-t border-papel/15 pt-3">
              <span className="font-display text-[1.25rem] text-sol">{hora(nivel.salida)}</span>
              <span><strong className="text-papel">Salida{extra > 0 ? ` y horario extendido hasta las ${hora(pasa)}` : ''}</strong>
                {extra > 0 && <span className="block text-[0.95rem]">{extendido.join(' · ')}</span>}</span>
            </li>
          </ol>
          <div className="self-start rounded-3xl bg-white/8 p-6">
            <p className="font-bold text-sol">Al terminar {nivel.nombre.toLowerCase()}, tu hijo podrá…</p>
            <p className="mt-2">{nivel.logro}</p>
            <a href={wa(mensaje)} target="_blank" rel="noopener" className="btn-sol mt-6 w-full"><IconoWa /> Pedir informes de este horario</a>
            <p className="mt-3 text-[0.85rem]">Horarios de su página "Un día en Banting". El horario extendido se confirma con admisiones.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Modelo() {
  return (
    <section id="modelo" className="py-16 sm:py-24">
      <div className="contenedor">
        <p className="font-bold text-pizarra">Modelo Educativo Banting</p>
        <h2 className="mt-2 text-[2.6rem] sm:text-[3.6rem]">Tradición y vanguardia para formar alumnos completos</h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {pilares.map((p, i) => (
            <li key={p.nombre} className="rounded-3xl bg-lila p-5">
              <span className="font-display text-[1.6rem] text-uva/60">{i + 1}</span>
              <h3 className="mt-1 text-[1.25rem]">{p.nombre}</h3>
              <p className="mt-2 text-[0.95rem] text-pizarra">{p.texto}</p>
            </li>
          ))}
        </ul>
        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1fr_1.1fr]">
          <img src={foto('taekwondo')} alt="Alumnos con dobok de taekwondo en una exhibición de los talleres, frente a familias" width={1280} height={960} loading="lazy" className="aspect-[4/3] w-full rounded-[2rem] object-cover" />
          <div>
            <h3 className="text-[2rem]">Una ruta de inglés medible</h3>
            <p className="mt-2 text-pizarra">Docentes con Teacher Certificate y nivel C1 como mínimo. Preparan a los alumnos para certificarse en 6º de primaria y 3º de secundaria, alineados al Marco Común Europeo.</p>
            <ol className="mt-5 grid gap-2">
              {rutaIngles.map((r, i) => (
                <li key={r.etapa} className="flex items-center gap-3">
                  <span className="h-3 rounded-full bg-uva" style={{ width: `${(i + 1) * 2.4}rem` }} aria-hidden="true" />
                  <span><strong>{r.etapa}:</strong> {r.meta}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function Seguridad() {
  return (
    <section id="seguridad" className="bg-white py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="max-w-3xl text-[2.4rem] sm:text-[3.4rem]">Tu hijo solo se entrega a personas que tú autorizaste</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {seguridad.map((s) => (
            <article key={s.nombre} className="rounded-3xl border-2 border-lila p-6">
              <h3 className="text-[1.4rem]">{s.nombre}</h3>
              <p className="mt-2 text-pizarra">{s.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Colegiatura() {
  return (
    <section id="colegiatura" className="py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div className="self-start rounded-[2rem] bg-uva p-7 text-papel/90 sm:p-10">
          <p className="font-bold text-sol">Ciclo 2026-2027</p>
          <h2 className="mt-2 text-[2.2rem] !text-papel">Colegiatura mensual desde <span className="text-sol">{pesos(negocio.colegiatura)}</span></h2>
          <p className="mt-4 font-bold text-papel">Incluye:</p>
          <ul className="mt-2 grid gap-1.5">{incluye.map((i) => <li key={i} className="flex gap-2"><span aria-hidden="true" className="text-sol">✓</span>{i}</li>)}</ul>
          <p className="mt-4 text-[0.95rem]">Los costos por nivel y de inscripción se piden a admisiones.</p>
          <a href={wa('Hola, quiero conocer los costos 2026-2027 por nivel de Colegio Banting.')} target="_blank" rel="noopener" className="btn-sol mt-6"><IconoWa /> Pedir costos por nivel</a>
        </div>
        <div>
          <h2 className="text-[2.2rem] sm:text-[2.8rem]">Servicios que te devuelven tiempo</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {servicios.map((s) => <li key={s.nombre}><h3 className="text-[1.25rem]">{s.nombre}</h3><p className="text-pizarra">{s.texto}</p></li>)}
          </ul>
          <img src={foto('comedor')} alt="Niños de preescolar comiendo en platos verdes en el comedor" width={1280} height={714} loading="lazy" className="mt-6 aspect-[16/9] w-full rounded-[2rem] object-cover" />
        </div>
      </div>
    </section>
  );
}

function Historia() {
  return (
    <section className="bg-lila py-16 sm:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="text-[2.4rem] sm:text-[3.2rem]">Una escuela que nació para hacer bien las cosas</h2>
          <p className="mt-4 text-pizarra">Su nombre honra a Frederick Grant Banting, el fisiólogo que aisló la insulina: el conocimiento al servicio de la vida.</p>
          <ol className="mt-6 grid gap-3">
            {historia.map((h) => <li key={h.anio} className="grid grid-cols-[6.2rem_1fr] gap-2"><strong className="font-display text-[1.15rem] text-uva">{h.anio}</strong><span>{h.texto}</span></li>)}
          </ol>
        </div>
        <ul className="grid gap-5">
          {testimonios.map((t) => (
            <li key={t.texto} className="flex gap-4 rounded-3xl bg-white p-5">
              {t.foto && <img src={foto(t.foto)} alt={t.alt} width={400} height={400} loading="lazy" className="h-20 w-20 shrink-0 rounded-2xl object-cover" />}
              <div>
                <blockquote>“{t.texto}”</blockquote>
                <p className="mt-2 text-[0.9rem] font-bold text-uva">{t.quien} · Encuesta de satisfacción 2025</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-[2.6rem] sm:text-[3.4rem]">Conócelo en persona</h2>
          <p className="mt-3 text-pizarra">Agenda tu visita o pide informes. Cupo limitado para el ciclo 2026-2027.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={waVisita} target="_blank" rel="noopener" className="btn"><IconoWa /> Agendar visita</a>
            <a href={`tel:${negocio.tel}`} className="btn-linea"><IconoTel /> {negocio.telVisible}</a>
          </div>
          <p className="mt-5">Admisiones: <a href={`mailto:${negocio.admisiones}`} className="enlace">{negocio.admisiones}</a></p>
          <p className="mt-1">Empleos: <a href={`mailto:${negocio.empleos}`} className="enlace">{negocio.empleos}</a></p>
          <p className="mt-1"><a href={negocio.instagram} target="_blank" rel="noopener" className="enlace">Instagram</a> · <a href={negocio.facebook} target="_blank" rel="noopener" className="enlace">Facebook</a> · <a href={negocio.linkedin} target="_blank" rel="noopener" className="enlace">LinkedIn</a></p>
        </div>
        <div className="rounded-3xl bg-lila p-6 sm:p-8">
          <p className="flex gap-2 font-bold"><IconoPin className="mt-1 h-5 w-5 shrink-0 text-uva" />{negocio.direccion}</p>
          <a href={negocio.mapa} target="_blank" rel="noopener" className="enlace mt-2 inline-block">Abrir en Google Maps</a>
          <p className="mt-4">Oficina: {negocio.oficina}</p>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro pb-24 pt-10 lg:pb-10">
      <div className="contenedor flex flex-wrap items-baseline justify-between gap-4">
        <p className="font-display text-[1.4rem] text-papel">Colegio Banting</p>
        <p className="text-[0.95rem]">Parte del Grupo Educativo Banting · Coyoacán, CDMX</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-papel/15 bg-noche text-papel lg:hidden">
      <a href={waInformes} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 bg-uva text-[0.9rem] font-bold text-white"><IconoWa />WhatsApp</a>
      <a href={`tel:${negocio.tel}`} className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-bold"><IconoTel />Llamar</a>
      <a href={negocio.mapa} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-bold"><IconoPin />Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#principal" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2">Saltar al contenido</a>
      <Encabezado />
      <main id="principal">
        <Portada />
        <Horario />
        <Modelo />
        <Seguridad />
        <Colegiatura />
        <Historia />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
