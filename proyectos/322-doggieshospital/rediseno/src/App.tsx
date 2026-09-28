import { useState } from 'react';
import { certificaciones, especialidades, hospitales, negocio, servicios, wa } from './data/content';
import fotos from './data/fotos.json';

const medidas = fotos as unknown as Record<string, [number, number]>;
const foto = (n: string) => ({ src: `./${n}.webp`, width: medidas[n][0], height: medidas[n][1] });

function Icono({ d, className = 'size-5' }: { d: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}
const iTel = 'M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2';
const iMapa = 'M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z';
const iWhats = 'M3 21l1.7-5A8.5 8.5 0 1 1 8 19.3L3 21zM9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.8-2.2-1-1 1a4.5 4.5 0 0 1-2.5-2.5l1-1-1-2.2L9 8.5z';

function horaMonterrey(): number {
  try {
    return Number(new Intl.DateTimeFormat('es-MX', { hour: 'numeric', hourCycle: 'h23', timeZone: 'America/Monterrey' }).format(new Date()));
  } catch {
    return new Date().getHours();
  }
}

const textoHora = (h: number) => {
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:00 ${h < 12 ? 'a. m.' : 'p. m.'}`;
};
const esNoche = (h: number) => h >= 20 || h < 7;

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-noche/10 bg-white/95 backdrop-blur">
      <div className="contenedor flex h-18 items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0">
          <img {...foto('logo')} alt="Doggie’s Hospital Veterinario" className="h-12 w-auto" />
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-7 font-semibold md:flex">
          <a href="#reloj" className="hover:text-rojo">A cualquier hora</a>
          <a href="#especialidades" className="hover:text-rojo">Especialidades</a>
          <a href="#servicios" className="hover:text-rojo">Servicios</a>
          <a href="#hospitales" className="hover:text-rojo">Hospitales</a>
        </nav>
        <a href={`tel:${negocio.urgencias.tel}`} className="boton min-h-11 bg-rojo px-5 text-white hover:bg-[#9d1822]">
          <Icono d={iTel} />
          Urgencias
        </a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="bg-hielo">
      <div className="contenedor grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_1.1fr] lg:py-20">
        <div>
          <p className="font-titulo text-lg font-extrabold text-rojo">Desde {negocio.desde}, al sur de Monterrey</p>
          <h1 className="titulo mt-3 text-4xl text-azul sm:text-5xl lg:text-6xl">Hospital veterinario de especialidades, abierto las 24 horas</h1>
          <p className="mt-5 max-w-xl text-lg text-gris">{negocio.lema}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={`tel:${negocio.urgencias.tel}`} className="boton bg-rojo text-white hover:bg-[#9d1822]">
              <Icono d={iTel} />
              Urgencias {negocio.urgencias.texto}
            </a>
            <a href="#hospitales" className="boton border-2 border-azul text-azul hover:bg-white">Ver los 3 hospitales</a>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4">
            {negocio.cifras.map(([n, t]) => (
              <div key={t}>
                <dt className="sr-only">{t}</dt>
                <dd className="titulo text-3xl text-azul">{n}</dd>
                <dd className="mt-1 text-sm text-gris">{t}</dd>
              </div>
            ))}
          </dl>
        </div>
        <figure>
          <img {...foto('f-fachada')} alt="Fachada blanca de Doggie’s Sur con el letrero rojo de 24/7" className="aspect-[3/2] w-full rounded-3xl object-cover shadow-xl" fetchPriority="high" />
          <figcaption className="mt-2 text-sm text-gris">Doggie’s Sur, sobre la Carretera Nacional.</figcaption>
        </figure>
      </div>
    </section>
  );
}

function Reloj() {
  const [hora, setHora] = useState(horaMonterrey);
  const noche = esNoche(hora);
  const angulo = (hora / 24) * 360 - 90;
  const R = 120;
  return (
    <section id="reloj" className="bg-noche py-16 text-white sm:py-24">
      <div className="contenedor">
        <div className="max-w-3xl">
          <h2 className="titulo text-4xl sm:text-5xl">¿A qué hora es tu urgencia?</h2>
          <p className="mt-4 text-lg text-lluvia">
            Mueve el reloj a la hora en que necesitas ayuda y te decimos qué hospital de Doggie’s te abre. Empieza en la hora actual de Monterrey.
          </p>
        </div>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="mx-auto w-full max-w-sm">
            <svg viewBox="-150 -150 300 300" className="w-full" aria-hidden="true">
              {Array.from({ length: 24 }, (_, h) => {
                const a0 = ((h / 24) * 360 - 90) * (Math.PI / 180);
                const a1 = (((h + 1) / 24) * 360 - 90) * (Math.PI / 180);
                const r1 = R + 16, r0 = R - 6;
                const p = (r: number, a: number) => `${r * Math.cos(a)} ${r * Math.sin(a)}`;
                return (
                  <path
                    key={h}
                    d={`M ${p(r0, a0)} L ${p(r1, a0)} A ${r1} ${r1} 0 0 1 ${p(r1, a1)} L ${p(r0, a1)} A ${r0} ${r0} 0 0 0 ${p(r0, a0)} Z`}
                    fill={h === hora ? 'var(--color-amarillo)' : esNoche(h) ? '#1c2c4d' : '#2f4f86'}
                    stroke="var(--color-noche)"
                    strokeWidth={1.5}
                  />
                );
              })}
              {[0, 6, 12, 18].map((h) => {
                const a = ((h / 24) * 360 - 90) * (Math.PI / 180);
                return <text key={h} x={(R - 26) * Math.cos(a)} y={(R - 26) * Math.sin(a) + 5} textAnchor="middle" fontSize={14} fill="var(--color-lluvia)">{h === 0 ? '0 h' : `${h} h`}</text>;
              })}
              <line x1={66 * Math.cos((angulo + 7.5) * (Math.PI / 180))} y1={66 * Math.sin((angulo + 7.5) * (Math.PI / 180))} x2={(R - 14) * Math.cos((angulo + 7.5) * (Math.PI / 180))} y2={(R - 14) * Math.sin((angulo + 7.5) * (Math.PI / 180))} stroke="var(--color-amarillo)" strokeWidth={4} strokeLinecap="round" />
              <circle r={62} fill="var(--color-noche)" stroke="#2f4f86" strokeWidth={2} />
              <text y={-6} textAnchor="middle" fontSize={24} fontWeight={800} fill="#fff">{textoHora(hora)}</text>
              <text y={20} textAnchor="middle" fontSize={13} fill="var(--color-lluvia)">{noche ? 'de noche' : 'de día'}</text>
            </svg>
            <label htmlFor="hora" className="mt-4 block text-center font-semibold">Hora: {textoHora(hora)}</label>
            <input id="hora" type="range" min={0} max={23} step={1} value={hora} onChange={(e) => setHora(Number(e.target.value))} className="mt-3 w-full accent-[#fcef02]" aria-valuetext={textoHora(hora)} />
            <div className="mt-3 flex justify-center">
              <button type="button" onClick={() => setHora(horaMonterrey())} className="rounded-full border-2 border-white/30 px-4 py-2 text-sm font-semibold hover:border-white">Volver a la hora actual</button>
            </div>
          </div>

          <div aria-live="polite">
            <p className="font-titulo text-2xl font-extrabold">A las {textoHora(hora)}:</p>
            <ul className="mt-5 space-y-4">
              {hospitales.map((h) => (
                <li key={h.id} className={`rounded-3xl p-5 ring-1 sm:p-6 ${h.veinticuatro ? 'bg-white text-noche ring-white' : 'bg-white/[0.06] ring-white/15'}`}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="titulo text-2xl">{h.nombre}</h3>
                    <span className={`rounded-full px-3 py-1 text-sm font-bold ${h.veinticuatro ? 'bg-verde text-white' : 'bg-white/10 text-lluvia'}`}>
                      {h.veinticuatro ? 'Abierto: 24 horas' : 'Horario no publicado'}
                    </span>
                  </div>
                  <p className={`mt-1 text-sm ${h.veinticuatro ? 'text-gris' : 'text-lluvia'}`}>{h.direccion}</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {h.telefono ? (
                      <a href={`tel:${h.telefono.tel}`} className={`boton min-h-11 px-5 ${h.veinticuatro ? 'bg-rojo text-white hover:bg-[#9d1822]' : 'border-2 border-white/40 hover:border-white'}`}>
                        <Icono d={iTel} />
                        {h.veinticuatro ? `Llamar a urgencias ${h.telefono.texto}` : `Llamar antes ${h.telefono.texto}`}
                      </a>
                    ) : (
                      <span className="text-sm text-lluvia">Sin teléfono publicado: llama a Especialidades.</span>
                    )}
                    <a href={h.mapa} className={`boton min-h-11 px-5 ${h.veinticuatro ? 'border-2 border-noche/15 hover:border-noche/40' : 'border-2 border-white/20 hover:border-white'}`}>
                      <Icono d={iMapa} />
                      Cómo llegar
                    </a>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-lluvia">“Ofrecemos servicio de hospital veterinario 24/7 para atender las emergencias inesperadas.” Su sitio dice que Especialidades está abierto las 24 horas y no publica el horario de Serena ni de Sur.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Especialidades() {
  return (
    <section id="especialidades" className="py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="titulo max-w-3xl text-4xl text-azul sm:text-5xl">Especialistas para cada caso</h2>
        <p className="mt-4 max-w-2xl text-lg text-gris">{negocio.quienes} Fundado en {negocio.desde} por el {negocio.fundador}.</p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {especialidades.map((e) => (
            <li key={e.nombre} className="overflow-hidden rounded-3xl bg-nube ring-1 ring-noche/5">
              <img {...foto(e.foto)} alt={e.alt} className="aspect-[4/3] w-full object-cover" loading="lazy" />
              <div className="p-6">
                <h3 className="titulo text-2xl text-azul">{e.nombre}</h3>
                <p className="mt-2 text-gris">{e.texto}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Servicios() {
  return (
    <section id="servicios" className="bg-hielo py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="titulo text-4xl text-azul sm:text-5xl">Todo en el mismo lugar</h2>
        <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {servicios.map((s) => (
            <li key={s.nombre}>
              <img {...foto(s.foto)} alt={s.alt} className="aspect-square w-full rounded-2xl object-cover" loading="lazy" />
              <p className="mt-2 font-titulo text-lg leading-tight font-extrabold">{s.nombre}</p>
            </li>
          ))}
        </ul>
        <div className="mt-12 grid gap-6 rounded-3xl bg-white p-6 ring-1 ring-noche/5 sm:p-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <h3 className="titulo text-2xl text-azul">Clínica oftalmológica</h3>
            <p className="mt-2 text-gris">En colaboración con su empresa hermana Eye Clinic, con expertos en oftalmología veterinaria reconocidos por el Colegio Latinoamericano de Oftalmología Veterinaria (CLOVE).</p>
            <a href={negocio.eyeclinic} className="mt-3 inline-block font-semibold text-azul underline underline-offset-2">Conocer Eye Clinic</a>
          </div>
          <div>
            <h3 className="font-bold">Certificaciones y asociaciones</h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {certificaciones.map((c) => <li key={c} className="rounded-full bg-hielo px-3 py-1 text-sm font-semibold text-azul">{c}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Hospitales() {
  return (
    <section id="hospitales" className="py-16 pb-28 sm:py-24 md:pb-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h2 className="titulo text-4xl text-azul sm:text-5xl">Tres hospitales al sur de Monterrey</h2>
          <ul className="mt-8 space-y-5">
            {hospitales.map((h) => (
              <li key={h.id} className="border-l-4 border-rojo pl-5">
                <h3 className="titulo text-2xl">{h.nombre}{h.veinticuatro && <span className="ml-2 align-middle rounded-full bg-rojo px-2.5 py-0.5 text-sm font-bold text-white">24 h</span>}</h3>
                <p className="mt-1 text-gris">{h.direccion}</p>
                <p className="mt-1 flex flex-wrap gap-x-4">
                  {h.telefono && <a href={`tel:${h.telefono.tel}`} className="font-semibold text-azul underline underline-offset-2">{h.telefono.texto}</a>}
                  <a href={h.mapa} className="font-semibold text-azul underline underline-offset-2">Cómo llegar</a>
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl bg-azul p-6 text-white sm:p-8">
          <h3 className="titulo text-3xl">Escríbenos</h3>
          <p className="mt-2 text-white/85">Cuéntanos tu caso: contamos con médicos altamente capacitados para atender la salud de tu mascota.</p>
          <ul className="mt-5 space-y-3">
            <li><a href={wa('Hola, quiero agendar una cita para mi mascota.')} className="flex items-center gap-3 font-semibold"><Icono d={iWhats} /> WhatsApp {negocio.urgencias.texto}</a></li>
            <li><a href={`mailto:${negocio.correo}`} className="font-semibold underline underline-offset-2">{negocio.correo}</a></li>
          </ul>
          <ul className="mt-6 flex gap-4">
            <li><a href={negocio.instagram} className="font-semibold underline underline-offset-2">Instagram</a></li>
            <li><a href={negocio.facebook} className="font-semibold underline underline-offset-2">Facebook</a></li>
          </ul>
          <img {...foto('f-golden')} alt="Un golden retriever con un veterinario en el consultorio" className="mt-6 aspect-[3/2] w-full rounded-2xl object-cover" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-noche py-8 pb-28 text-lluvia md:pb-8">
      <div className="contenedor flex flex-col gap-2 text-sm sm:flex-row sm:justify-between">
        <p className="font-titulo text-base font-extrabold text-white">{negocio.nombre}</p>
        <p>{negocio.razon}, Monterrey, N.L. Urgencias 24 h: {negocio.urgencias.texto}.</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-noche/10 bg-white text-noche md:hidden">
      <a href={`tel:${negocio.urgencias.tel}`} className="flex min-h-15 flex-col items-center justify-center gap-0.5 bg-rojo text-sm font-bold text-white">
        <Icono d={iTel} /> Urgencias
      </a>
      <a href={wa('Hola, quiero agendar una cita para mi mascota.')} className="flex min-h-15 flex-col items-center justify-center gap-0.5 text-sm font-bold">
        <Icono d={iWhats} /> WhatsApp
      </a>
      <a href={hospitales[0].mapa} className="flex min-h-15 flex-col items-center justify-center gap-0.5 text-sm font-bold">
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
        <Reloj />
        <Especialidades />
        <Servicios />
        <Hospitales />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
