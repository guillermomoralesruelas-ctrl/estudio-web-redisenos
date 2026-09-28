import { useState } from 'react';
import { casos, clinica, doctores, generales, primarios, wa } from './data/content';
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
const iWhats = 'M3 21l1.7-5A8.5 8.5 0 1 1 8 19.3L3 21zM9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.8-2.2-1-1 1a4.5 4.5 0 0 1-2.5-2.5l1-1-1-2.2L9 8.5z';
const iTel = 'M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2';
const iMapa = 'M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z';

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-white/95 backdrop-blur">
      <div className="contenedor flex h-18 items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0">
          <img {...foto('logo')} alt="Dr. Tooth" className="h-9 w-auto" />
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-7 font-medium md:flex">
          <a href="#sonrisas" className="hover:text-bronce">Resultados</a>
          <a href="#servicios" className="hover:text-bronce">Servicios</a>
          <a href="#doctores" className="hover:text-bronce">Doctores</a>
          <a href="#contacto" className="hover:text-bronce">Contacto</a>
        </nav>
        <a href={wa('Hola, me interesa una cita.')} className="boton min-h-11 bg-tinta px-5 text-white hover:bg-bronce">
          <Icono d={iWhats} />
          Agendar
        </a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="bg-marfil">
      <div className="contenedor grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.05fr_1fr] lg:py-20">
        <div>
          <p className="font-semibold text-bronce">{clinica.lema}</p>
          <h1 className="titulo mt-3 text-4xl sm:text-5xl lg:text-6xl">Implantes, diseño de sonrisa y ortodoncia en Saltillo</h1>
          <p className="mt-5 max-w-xl text-lg text-gris">
            Odontología digital con el Dr. Luis Alejandro Saucedo, especialista en rehabilitación oral e implantología, y la Dra. Yolitzma Lugo, especialista en ortodoncia. {clinica.cirugias}.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={wa('Hola, me interesa una cita.')} className="boton bg-tinta text-white hover:bg-bronce">
              <Icono d={iWhats} />
              Agendar por WhatsApp
            </a>
            <a href="#sonrisas" className="boton border-2 border-tinta/20 hover:border-tinta">Ver 9 resultados</a>
          </div>
        </div>
        <figure>
          <img {...foto('f-edificio')} alt="Edificio San Ángel, de vidrio y concreto, en Valle San Agustín, donde está la clínica" className="aspect-[4/3] w-full rounded-3xl object-cover" fetchPriority="high" />
          <figcaption className="mt-2 text-sm text-gris">Nueva ubicación: {clinica.edificio}.</figcaption>
        </figure>
      </div>
    </section>
  );
}

function Sonrisas() {
  const [valor, setValor] = useState(50);
  const etiqueta = valor <= 5 ? 'Antes' : valor >= 95 ? 'Después' : `${100 - valor}% antes, ${valor}% después`;
  return (
    <section id="sonrisas" className="bg-tinta py-16 text-white sm:py-24">
      <div className="contenedor">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <h2 className="titulo text-4xl sm:text-5xl">Nueve sonrisas, un solo gesto</h2>
            <p className="mt-4 max-w-2xl text-lg text-plata">
              Sus casos de antes y después, todos a la vez. Desliza y las nueve fotos cambian juntas: la línea dorada separa el antes, a la izquierda, del después.
            </p>
          </div>
          <div>
            <label htmlFor="deslizador" className="flex justify-between text-sm font-semibold">
              <span>Antes</span>
              <span className="text-oro">{etiqueta}</span>
              <span>Después</span>
            </label>
            <input id="deslizador" type="range" min={0} max={100} value={valor} onChange={(e) => setValor(Number(e.target.value))} className="mt-3 w-full accent-[#e0b421]" aria-valuetext={etiqueta} />
            <div className="mt-3 flex gap-2">
              <button type="button" onClick={() => setValor(0)} className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold hover:border-white">Todo antes</button>
              <button type="button" onClick={() => setValor(100)} className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold hover:border-white">Todo después</button>
            </div>
          </div>
        </div>

        <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-3 gap-2 sm:gap-4">
          {casos.map((c) => (
            <li key={c.id}>
              <figure>
                <div className="relative overflow-hidden rounded-xl">
                  <img {...foto(`a-${c.id}`)} alt={`${c.nombre}, antes del tratamiento`} className="block aspect-square w-full object-cover" loading="lazy" />
                  <img
                    {...foto(`d-${c.id}`)}
                    alt={`${c.nombre}, después del tratamiento`}
                    className="absolute inset-0 aspect-square w-full object-cover"
                    style={{ clipPath: `inset(0 0 0 ${100 - valor}%)` }}
                    loading="lazy"
                  />
                  <span className="absolute inset-y-0 w-0.5 bg-oro" style={{ left: `${100 - valor}%` }} aria-hidden="true" />
                </div>
                <figcaption className="mt-1.5 text-center text-sm text-plata">{c.nombre}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-6 max-w-4xl text-sm text-plata">Fotos de sus pacientes publicadas en su sitio. Cada caso lleva su propio tratamiento: pregunta cuál es el tuyo en la valoración.</p>
      </div>
    </section>
  );
}

function Servicios() {
  return (
    <section id="servicios" className="py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="titulo text-4xl sm:text-5xl">Servicios</h2>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {primarios.map((s) => (
            <li key={s.nombre} className="flex flex-col rounded-3xl bg-marfil p-6">
              <h3 className="titulo text-2xl">{s.nombre}</h3>
              <p className="mt-2 flex-1 text-gris">{s.texto}</p>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                <a href={wa(`Hola, me interesa ${s.nombre.toLowerCase()}.`)} className="font-semibold text-bronce underline underline-offset-2">Preguntar por WhatsApp</a>
                <a href={s.url} className="font-semibold text-gris underline underline-offset-2">Más información</a>
              </div>
            </li>
          ))}
        </ul>
        <h3 className="mt-12 font-titulo text-xl font-semibold">También</h3>
        <ul className="mt-3 flex flex-wrap gap-2">
          {generales.map((g) => (
            <li key={g.nombre}><a href={g.url} className="inline-block rounded-full border-2 border-tinta/10 px-4 py-2 font-medium hover:border-tinta">{g.nombre}</a></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Doctores() {
  return (
    <section id="doctores" className="bg-marfil py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="titulo text-4xl sm:text-5xl">Quién te atiende</h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {doctores.map((d) => (
            <li key={d.nombre} className="flex flex-col gap-5 rounded-3xl bg-white p-6 sm:flex-row sm:p-8">
              <img {...foto(d.foto)} alt={`Retrato de ${d.nombre}`} className="size-32 shrink-0 rounded-2xl object-cover" loading="lazy" />
              <div>
                <h3 className="titulo text-2xl">{d.nombre}</h3>
                <p className="mt-1 font-semibold text-bronce">{d.cargo}</p>
                <ul className="mt-3 space-y-1.5 text-[0.95rem] text-gris">
                  {d.cv.map((x) => <li key={x} className="flex gap-2"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-oro" />{x}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ul>
        <figure className="mt-10">
          <img {...foto('f-recepcion')} alt="Recepción de Dr. Tooth con el logo en la pared y dos sillones amarillos, durante la grabación de su podcast" className="aspect-[2/1] w-full rounded-3xl object-cover" loading="lazy" />
          <figcaption className="mt-2 text-sm text-gris">Su recepción, en una grabación del podcast Dr. Tooth.</figcaption>
        </figure>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="py-16 pb-28 sm:py-24 md:pb-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="titulo text-4xl sm:text-5xl">Visítanos</h2>
          <address className="mt-5 text-lg not-italic">{clinica.direccion}<br />{clinica.edificio}</address>
          <a href={clinica.mapa} className="boton mt-5 bg-tinta text-white hover:bg-bronce">
            <Icono d={iMapa} />
            Cómo llegar
          </a>
          <h3 className="mt-8 font-bold">Horario</h3>
          <dl className="mt-2">
            {clinica.horario.map(([d, h]) => (
              <div key={d} className="flex max-w-sm justify-between gap-4 border-b border-tinta/10 py-1.5">
                <dt>{d}</dt>
                <dd className="font-semibold">{h}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="rounded-3xl bg-tinta p-6 text-white sm:p-8">
          <h3 className="titulo text-2xl">Agenda tu valoración</h3>
          <ul className="mt-5 space-y-4">
            <li><a href={wa('Hola, me interesa una cita.')} className="flex items-center gap-3 font-semibold text-oro"><Icono d={iWhats} /> WhatsApp {clinica.whatsapp.texto}</a></li>
            {clinica.telefonos.map((t) => (
              <li key={t.tel}><a href={`tel:${t.tel}`} className="flex items-center gap-3 font-semibold"><Icono d={iTel} /> {t.texto}</a></li>
            ))}
            <li><a href={`mailto:${clinica.correo}`} className="break-all font-semibold underline underline-offset-2">{clinica.correo}</a></li>
          </ul>
          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
            {clinica.redes.map(([n, u]) => <li key={n}><a href={u} className="font-semibold text-plata underline underline-offset-2 hover:text-white">{n}</a></li>)}
          </ul>
          <p className="mt-6 text-sm text-plata">Visita también su sitio de <a href={clinica.implantologia} className="underline underline-offset-2">Implantología Digital</a>.</p>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-tinta py-8 pb-28 text-plata md:pb-8">
      <div className="contenedor flex flex-col gap-2 text-sm sm:flex-row sm:justify-between">
        <p className="font-titulo text-base text-white">{clinica.nombre}</p>
        <p>Ave. San Ángel 240, Valle San Agustín, Saltillo, Coah.</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-tinta/10 bg-white text-tinta md:hidden">
      <a href={wa('Hola, me interesa una cita.')} className="flex min-h-15 flex-col items-center justify-center gap-0.5 bg-tinta text-sm font-semibold text-white">
        <Icono d={iWhats} /> WhatsApp
      </a>
      <a href={`tel:${clinica.telefonos[0].tel}`} className="flex min-h-15 flex-col items-center justify-center gap-0.5 text-sm font-semibold">
        <Icono d={iTel} /> Llamar
      </a>
      <a href={clinica.mapa} className="flex min-h-15 flex-col items-center justify-center gap-0.5 text-sm font-semibold">
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
        <Sonrisas />
        <Servicios />
        <Doctores />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
