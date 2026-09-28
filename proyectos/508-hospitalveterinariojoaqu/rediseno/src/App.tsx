import { useRef, useState } from 'react';
import { equipo, historias, negocio, salas, unidades, wa, type Sala } from './data/content';
import fotos from './data/fotos.json';

const medidas = fotos as unknown as Record<string, [number, number]>;
const foto = (n: string) => ({ src: `./${n}.webp`, width: medidas[n][0], height: medidas[n][1] });
const porId = Object.fromEntries(salas.map((s) => [s.id, s])) as Record<string, Sala>;
const urgencias = unidades[0];

function Icono({ d, className = 'size-5' }: { d: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}
const iWhats = 'M3 21l1.7-5A8.5 8.5 0 1 1 8 19.3L3 21zM9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.8-2.2-1-1 1a4.5 4.5 0 0 1-2.5-2.5l1-1-1-2.2L9 8.5z';
const iTel = 'M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2';
const iMapa = 'M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z';
const iReloj = 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2';

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-marino/10 bg-white/95 backdrop-blur">
      <div className="contenedor flex h-20 items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0">
          <img {...foto('logo')} alt="Hospital Veterinario de Puebla, Joaquín Buxadé" className="h-14 w-auto" />
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-7 font-medium text-marino md:flex">
          <a href="#plano" className="hover:text-uniforme">El hospital</a>
          <a href="#equipo" className="hover:text-uniforme">Equipo</a>
          <a href="#unidades" className="hover:text-uniforme">Unidades</a>
        </nav>
        <a href={`tel:${urgencias.telefono.tel}`} className="boton min-h-11 bg-alerta px-5 text-white hover:bg-[#8f3309]">
          <Icono d={iTel} />
          <span className="hidden sm:inline">Llamar, 24 horas</span>
          <span className="sm:hidden">24 h</span>
        </a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="bg-bruma">
      <div className="contenedor grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_1.1fr] lg:py-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-marino px-4 py-1.5 text-sm font-semibold text-white">
            <Icono d={iReloj} className="size-4" />
            Abierto las 24 horas, los 7 días
          </p>
          <h1 className="titulo mt-5 text-4xl text-marino sm:text-5xl lg:text-6xl">Hospital veterinario en Puebla con atención las 24 horas</h1>
          <p className="mt-5 max-w-xl text-lg text-gris">
            Con {negocio.experiencia} de experiencia: consulta, diagnóstico, hospitalización, cirugía y rehabilitación para perros, gatos y animales exóticos, con médicos veterinarios encabezados por el Dr. Joaquín Buxadé.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={`tel:${urgencias.telefono.tel}`} className="boton bg-alerta text-white hover:bg-[#8f3309]">
              <Icono d={iTel} />
              Urgencias {urgencias.telefono.texto}
            </a>
            <a href={wa('Hola, quiero información para mi mascota.')} className="boton border-2 border-marino text-marino hover:bg-white">
              <Icono d={iWhats} />
              WhatsApp
            </a>
          </div>
        </div>
        <figure className="relative">
          <img {...foto('f-unidad')} alt="El equipo del hospital, con batas y uniformes, frente a la fachada de la unidad Recta a Cholula" className="aspect-[16/10] w-full rounded-3xl object-cover shadow-xl" fetchPriority="high" />
          <figcaption className="mt-2 text-sm text-gris">Su nueva casa: Lateral Recta a Cholula 3608.</figcaption>
        </figure>
      </div>
    </section>
  );
}

function Puerta() {
  return (
    <svg viewBox="0 0 40 22" className="h-5 w-9 text-marino" aria-hidden="true">
      <path d="M2 20 H38" stroke="#fff" strokeWidth="7" />
      <path d="M4 20 A16 16 0 0 1 20 4 V20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
    </svg>
  );
}

function Plano() {
  const [elegida, setElegida] = useState('hospitalizacion');
  const ficha = useRef<HTMLDivElement>(null);
  const sala = porId[elegida];
  const areas: Record<string, string> = { hospitalizacion: 'h', quirofano: 'q', diagnostico: 'd', rehabilitacion: 'r', estetica: 'e', consulta: 'c', tienda: 't' };

  const elegir = (id: string) => {
    setElegida(id);
    if (window.matchMedia('(max-width: 1023px)').matches) {
      requestAnimationFrame(() => ficha.current?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' }));
    }
  };

  return (
    <section id="plano" className="py-16 sm:py-24">
      <div className="contenedor">
        <div className="max-w-3xl">
          <h2 className="titulo text-4xl text-marino sm:text-5xl">Pasa, te enseñamos el hospital</h2>
          <p className="mt-4 text-lg text-gris">
            Toca una sala del plano para ver qué pasa ahí, con sus fotos y el equipo con el que trabajan. Es un plano ilustrativo, no el de la obra: reúne lo que describe su sitio.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-start">
          <div className="rounded-3xl bg-bruma p-3 sm:p-5">
            <div className="plano muro rounded-sm bg-white p-[7px]">
              {salas.map((s) => {
                const activa = s.id === elegida;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => elegir(s.id)}
                    aria-pressed={activa}
                    style={{ gridArea: areas[s.id] }}
                    className={`muro relative flex min-h-28 flex-col justify-between gap-2 p-4 text-left transition-colors sm:min-h-32 ${activa ? 'bg-agua' : 'bg-white hover:bg-bruma'}`}
                  >
                    <span>
                      <span className="block font-titulo text-lg leading-tight font-bold text-marino">{s.nombre}</span>
                      <span className="mt-1 block text-sm text-gris">{s.corto}</span>
                    </span>
                    {s.id === 'hospitalizacion' && (
                      <span className="grid grid-cols-3 border-t-2 border-dashed border-marino/40 pt-2 text-center text-xs font-semibold text-marino" aria-hidden="true">
                        <span>Perros</span>
                        <span className="border-x-2 border-dashed border-marino/40">Gatos</span>
                        <span>Exóticos</span>
                      </span>
                    )}
                    {s.id === 'consulta' && (
                      <span className="absolute -bottom-[3px] left-1/2 flex -translate-x-1/2 translate-y-1/2 flex-col items-center">
                        <Puerta />
                        <span className="rounded-full bg-alerta px-2.5 py-0.5 text-xs font-bold whitespace-nowrap text-white">Entrada, 24 h</span>
                      </span>
                    )}
                  </button>
                );
              })}
              <div style={{ gridArea: 'p' }} className="flex min-h-14 items-center justify-center gap-2 text-xs font-semibold tracking-wide text-gris" aria-hidden="true">
                <span className="h-0 flex-1 border-t-2 border-dashed border-gris/40" />
                Pasillo
                <span className="h-0 flex-1 border-t-2 border-dashed border-gris/40" />
              </div>
            </div>
            <p className="mt-8 text-sm text-gris">Plano ilustrativo de las salas que menciona su sitio; no está a escala ni corresponde a una unidad en particular.</p>
          </div>

          <div ref={ficha} className="scroll-mt-24 lg:sticky lg:top-24">
            <article className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-marino/10" aria-live="polite">
              <img {...foto(sala.foto)} alt={sala.alt} className="aspect-[16/9] w-full object-cover" />
              <div className="p-6 sm:p-7">
                <h3 className="titulo text-3xl text-marino">{sala.nombre}</h3>
                {sala.texto.map((t) => <p key={t} className="mt-3">{t}</p>)}
                <ul className="mt-5 flex flex-wrap gap-2">
                  {sala.equipo.map((e) => <li key={e} className="rounded-full bg-bruma px-3 py-1 text-sm font-semibold text-uniforme">{e}</li>)}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={wa(sala.pregunta)} className="boton bg-uniforme text-white hover:bg-marino">
                    <Icono d={iWhats} />
                    Preguntar por WhatsApp
                  </a>
                  <a href="#plano" className="boton border-2 border-marino/20 text-marino hover:bg-bruma lg:hidden">Ver el plano</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function Especialidades() {
  return (
    <section className="bg-marino py-14 text-white">
      <div className="contenedor grid gap-6 lg:grid-cols-[1fr_2fr] lg:items-center">
        <h2 className="titulo text-3xl sm:text-4xl">Consulta general y de especialidad</h2>
        <ul className="flex flex-wrap gap-2.5">
          {negocio.especialidades.map((e) => (
            <li key={e} className="rounded-full border-2 border-agua/60 px-4 py-2 font-semibold text-agua">{e}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Historias() {
  return (
    <section id="historias" className="bg-bruma py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="titulo max-w-2xl text-4xl text-marino sm:text-5xl">Tori, Blacky, Parqui y Tango</h2>
        <p className="mt-4 max-w-2xl text-lg text-gris">Lo que cuentan sus dueños.</p>
        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {historias.map((h) => (
            <li key={h.mascota} className="flex flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-marino/5 sm:p-8">
              <p className="titulo text-3xl text-uniforme">{h.mascota}</p>
              <blockquote className="mt-3 flex-1 text-[1.02rem]">{h.texto}</blockquote>
              <p className="mt-4 font-semibold text-marino">{h.quien}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Equipo() {
  return (
    <section id="equipo" className="py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="titulo text-4xl text-marino sm:text-5xl">Al servicio de tu mascota</h2>
        <p className="mt-4 max-w-2xl text-lg text-gris">{equipo.length} médicos veterinarios, cada uno con uno de sus pacientes.</p>
        <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
          {equipo.map((p) => (
            <li key={p.nombre}>
              <img {...foto(p.foto)} alt={`${p.nombre}, ${p.cargo}`} className="aspect-[2/3] w-full rounded-2xl bg-marino object-cover" loading="lazy" />
              <p className="mt-2.5 leading-tight font-semibold text-marino">{p.nombre}</p>
              <p className="text-sm text-gris">{p.cargo}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Unidades() {
  return (
    <section id="unidades" className="bg-bruma py-16 pb-28 sm:py-24 md:pb-24">
      <div className="contenedor">
        <h2 className="titulo text-4xl text-marino sm:text-5xl">Dos unidades en Puebla</h2>
        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {unidades.map((u) => (
            <li key={u.id} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-marino/5 sm:p-8">
              <p className={`inline-block rounded-full px-3 py-1 text-sm font-bold ${u.id === 'cholula' ? 'bg-alerta text-white' : 'bg-bruma text-gris'}`}>{u.etiqueta}</p>
              <h3 className="titulo mt-3 text-2xl text-marino sm:text-3xl">{u.nombre}</h3>
              <address className="mt-2 not-italic text-gris">{u.direccion}</address>
              {u.nota && <p className="mt-1 text-sm text-gris">{u.nota}</p>}
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={`tel:${u.telefono.tel}`} className="boton bg-marino text-white hover:bg-noche">
                  <Icono d={iTel} />
                  {u.telefono.texto}
                </a>
                <a href={u.mapa} className="boton border-2 border-marino/20 text-marino hover:bg-bruma">
                  <Icono d={iMapa} />
                  Cómo llegar
                </a>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col gap-4 rounded-3xl bg-uniforme p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="titulo text-2xl">Estética con recolección y alimento a domicilio</p>
            <p className="mt-1 text-white/90">¿No puedes traerla? Pasan por ella. La entrega de alimento es sin cargo extra.</p>
          </div>
          <a href={wa('Hola, quiero pedir recolección para estética o alimento a domicilio.')} className="boton shrink-0 bg-white text-uniforme hover:bg-bruma">
            <Icono d={iWhats} />
            WhatsApp {negocio.whatsapp.texto}
          </a>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-noche py-10 pb-28 text-agua md:pb-10">
      <div className="contenedor flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-titulo text-lg font-bold text-white">{negocio.nombre}</p>
        <p className="text-sm">Puebla, Pue. Urgencias 24 horas: {urgencias.telefono.texto}.</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-marino/10 bg-white text-marino md:hidden">
      <a href={`tel:${urgencias.telefono.tel}`} className="flex min-h-15 flex-col items-center justify-center gap-0.5 bg-alerta text-sm font-semibold text-white">
        <Icono d={iTel} /> Llamar 24 h
      </a>
      <a href={wa('Hola, quiero información para mi mascota.')} className="flex min-h-15 flex-col items-center justify-center gap-0.5 text-sm font-semibold">
        <Icono d={iWhats} /> WhatsApp
      </a>
      <a href={urgencias.mapa} className="flex min-h-15 flex-col items-center justify-center gap-0.5 text-sm font-semibold">
        <Icono d={iMapa} /> Cómo llegar
      </a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <Encabezado />
      <main>
        <Portada />
        <Plano />
        <Especialidades />
        <Historias />
        <Equipo />
        <Unidades />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
