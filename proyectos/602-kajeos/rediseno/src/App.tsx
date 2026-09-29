import { useState } from 'react';
import { masPropiedades, negocio, pesos, propiedades, servicios, wa, type Tipo } from './data/content';
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
const iMapa = 'M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z';
const iMas = 'M12 5v14M5 12h14';
const iCheck = 'M5 12.5l4.5 4.5L19 7.5';

const saludo = 'Hola, me interesa una propiedad de KAJEOS.';
const tipos: (Tipo | 'Todas')[] = ['Todas', 'Casa', 'Departamento', 'Terreno'];
const plural: Record<string, string> = { Todas: 'Todas', Casa: 'Casas', Departamento: 'Departamentos', Terreno: 'Terrenos' };

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 bg-marfil/95 shadow-[0_1px_0_rgb(16_42_67/0.08)] backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0"><img {...foto('logo')} alt="KAJEOS Grupo Inmobiliario" className="h-9 w-auto sm:h-10" /></a>
        <nav aria-label="Principal" className="hidden items-center gap-6 font-semibold text-marino lg:flex">
          <a href="#propiedades" className="hover:text-azul">Propiedades</a>
          <a href="#vender" className="hover:text-azul">Vender</a>
          <a href="#contacto" className="hover:text-azul">Contacto</a>
        </nav>
        <a href={wa(saludo)} className="boton min-h-11 bg-marino px-5 text-white hover:bg-azul"><Icono d={iWhats} /> <span>WhatsApp</span></a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="overflow-hidden">
      <div className="contenedor grid gap-10 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:py-20">
        <div>
          <p className="antetitulo">Grupo inmobiliario en {negocio.lugar}</p>
          <h1 className="mt-3 text-[2.9rem] sm:text-7xl">Casas, departamentos y terrenos en Puebla</h1>
          <p className="mt-5 max-w-xl text-lg text-gris">Propiedades en zonas de alta plusvalía como Lomas de Angelópolis, Zavaleta y Cholula, con asesoría personalizada para comprar, vender o invertir.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#propiedades" className="boton bg-marino text-white hover:bg-azul">Ver propiedades y armar mi visita</a>
            <a href={`tel:${negocio.celular.tel}`} className="boton border-2 border-marino/25 text-marino hover:border-marino"><Icono d={iTel} /> {negocio.celular.texto}</a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <img {...foto('p-zavaleta')} alt="Residencia en Jardines de Zavaleta con jardín y muro de enredadera" className="col-span-2 aspect-[16/9] w-full rounded-3xl object-cover" fetchPriority="high" />
          <img {...foto('p-actipan')} alt="Casa de dos niveles en San José Actipan con ventanales" className="aspect-[4/3] w-full rounded-3xl object-cover" />
          <img {...foto('p-magdalena')} alt="Casas nuevas en privada en el Barrio de la Magdalena, Cholula" className="aspect-[4/3] w-full rounded-3xl object-cover" />
        </div>
      </div>
    </section>
  );
}

function Propiedades() {
  const [tipo, setTipo] = useState<Tipo | 'Todas'>('Todas');
  const [carpeta, setCarpeta] = useState<string[]>(['avista', 'magdalena']);
  const [turno, setTurno] = useState('entre semana por la mañana');

  const lista = propiedades.filter((p) => tipo === 'Todas' || p.tipo === tipo);
  const elegidas = propiedades.filter((p) => carpeta.includes(p.id));
  const alternar = (id: string) => setCarpeta((c) => (c.includes(id) ? c.filter((x) => x !== id) : c.length >= 4 ? c : [...c, id]));
  const mensaje = `Hola KAJEOS, quiero agendar un recorrido ${turno} para ver: ${elegidas.map((p, i) => `${i + 1}) ${p.nombre} (${pesos(p.precio)})`).join('; ')}.`;

  return (
    <section id="propiedades" className="bg-white py-16 sm:py-24">
      <div className="contenedor">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="antetitulo">Propiedades disponibles</p>
            <h2 className="mt-2 text-4xl sm:text-6xl">Arma tu carpeta de visitas</h2>
            <p className="mt-4 text-lg text-gris">Agrega hasta cuatro propiedades a tu carpeta. Te arma las fichas en orden y las manda por WhatsApp para agendar el recorrido.</p>
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por tipo">
            {tipos.map((t) => (
              <button key={t} type="button" aria-pressed={tipo === t} onClick={() => setTipo(t)} className={`min-h-11 rounded-full px-4 font-semibold ring-1 transition ${tipo === t ? 'bg-marino text-white ring-marino' : 'bg-marfil text-marino ring-marino/15 hover:ring-marino/40'}`}>{plural[t]}</button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:items-start">
          <ul className="grid gap-5 sm:grid-cols-2">
            {lista.map((p) => {
              const dentro = carpeta.includes(p.id);
              return (
                <li key={p.id} className={`flex flex-col overflow-hidden rounded-3xl bg-marfil ring-2 transition ${dentro ? 'ring-azul' : 'ring-transparent'}`}>
                  <div className="relative">
                    <img {...foto(p.foto)} alt={p.alt} className="aspect-[16/10] w-full object-cover" loading="lazy" />
                    <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-sm font-semibold text-marino">{p.tipo} · {p.zona}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="font-serif text-3xl text-marino">{pesos(p.precio)}</p>
                    {p.nota && <p className="text-sm text-gris">{p.nota}</p>}
                    <h3 className="mt-2 font-sans text-lg font-bold leading-snug text-tinta">{p.nombre}</h3>
                    <p className="mt-1 text-[0.95rem] text-gris">{p.detalle}</p>
                    <dl className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm font-semibold text-marino">
                      <div><dt className="sr-only">Superficie</dt><dd>{p.m2.toLocaleString('es-MX')} m² {p.m2Etiqueta}</dd></div>
                      {p.recamaras && <div><dt className="sr-only">Recámaras</dt><dd>{p.recamaras} recámaras</dd></div>}
                      {p.banos && <div><dt className="sr-only">Baños</dt><dd>{p.banos} baños</dd></div>}
                    </dl>
                    <button type="button" aria-pressed={dentro} onClick={() => alternar(p.id)} disabled={!dentro && carpeta.length >= 4}
                      className={`boton mt-auto min-h-11 w-full disabled:opacity-50 ${dentro ? 'bg-azul text-white hover:bg-marino' : 'mt-4 border-2 border-marino/25 text-marino hover:border-marino'}`}>
                      <Icono d={dentro ? iCheck : iMas} /> {dentro ? 'En tu carpeta' : 'Agregar a mi carpeta'}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>

          <aside className="min-w-0 lg:sticky lg:top-24" aria-live="polite">
            <div className="carpeta relative rounded-[1.25rem] bg-manila p-6 pt-10 shadow-[0_24px_50px_-28px_rgb(16_42_67/0.5)] sm:p-7 sm:pt-11">
              <span className="absolute -top-4 left-6 rounded-t-xl bg-manila px-5 pt-2 pb-1 text-sm font-bold uppercase tracking-[0.18em] text-cafe">Mi carpeta</span>
              <p className="text-sm font-semibold text-cafe">Recorrido con KAJEOS · {elegidas.length} de 4</p>
              {elegidas.length === 0 ? (
                <p className="mt-4 rounded-xl border-2 border-dashed border-cafe/30 p-5 text-cafe">Tu carpeta está vacía. Toca "Agregar a mi carpeta" en las propiedades que quieras ver.</p>
              ) : (
                <ol className="mt-4 space-y-3">
                  {elegidas.map((p, i) => (
                    <li key={p.id} className="flex gap-3 rounded-xl bg-white p-3 shadow-sm">
                      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-marino font-bold text-white">{i + 1}</span>
                      <img {...foto(p.foto)} alt="" className="h-14 w-20 shrink-0 rounded-lg object-cover" />
                      <span className="min-w-0 leading-snug">
                        <span className="block truncate font-semibold text-tinta">{p.nombre}</span>
                        <span className="text-sm text-gris">{pesos(p.precio)} · {p.zona}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              )}
              <label htmlFor="turno" className="mt-5 block text-sm font-semibold text-cafe">¿Cuándo te acomoda?</label>
              <select id="turno" value={turno} onChange={(e) => setTurno(e.target.value)} className="mt-1 min-h-11 w-full rounded-xl border border-cafe/25 bg-white px-3">
                <option>entre semana por la mañana</option>
                <option>entre semana por la tarde</option>
                <option>entre semana después de las 6</option>
              </select>
              <p className="mt-2 text-xs text-cafe">Su horario es de lunes a viernes, de 9:00 a 21:00.</p>
              {elegidas.length > 0 ? (
                <a href={wa(mensaje)} className="boton mt-5 w-full bg-marino text-white hover:bg-azul"><Icono d={iWhats} /> Agendar recorrido</a>
              ) : (
                <span className="boton mt-5 w-full cursor-not-allowed bg-marino/40 text-white" aria-disabled="true"><Icono d={iWhats} /> Agendar recorrido</span>
              )}
            </div>
          </aside>
        </div>

        <div className="mt-14">
          <h3 className="text-3xl">Más en su catálogo</h3>
          <ul className="mt-5 divide-y divide-marino/10 border-y border-marino/10">
            {masPropiedades.map((p) => (
              <li key={p.nombre + p.precio} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <span><span className="font-semibold text-tinta">{p.nombre}</span> <span className="text-gris">· {p.dato}</span></span>
                <span className="flex items-center gap-4">
                  <span className="font-serif text-2xl text-marino">{pesos(p.precio)}</span>
                  <a href={wa(`Hola, me interesa: ${p.nombre} (${pesos(p.precio)}).`)} className="font-semibold text-azul underline underline-offset-4 hover:text-marino">Preguntar</a>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Vender() {
  return (
    <section id="vender" className="oscuro bg-marino py-16 text-white sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="antetitulo">¿Quieres vender o rentar?</p>
          <h2 className="mt-2 text-4xl sm:text-6xl">Te ayudamos a mover tu propiedad</h2>
          <p className="mt-4 text-lg text-white/85">Asesores, análisis de mercado, fotografía profesional y campañas de publicidad para que tu propiedad se vea.</p>
          <a href={wa('Hola, quiero vender o rentar mi propiedad con KAJEOS.')} className="boton mt-7 bg-celeste text-marino hover:bg-white"><Icono d={iWhats} /> Quiero vender mi propiedad</a>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {servicios.map((s) => (
            <li key={s.titulo} className="rounded-2xl bg-white/[0.07] p-5">
              <p className="font-serif text-2xl text-white">{s.titulo}</p>
              <p className="mt-1 text-white/80">{s.texto}</p>
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
      <div className="contenedor grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
        <div>
          <p className="antetitulo">Agenda una cita</p>
          <h2 className="mt-2 text-4xl sm:text-6xl">Oficina en Torre Inxignia</h2>
          <p className="mt-4 text-gris">Piso 4, oficina 446, Puebla. Te atiende {negocio.asesora}.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={wa(saludo)} className="boton bg-marino text-white hover:bg-azul"><Icono d={iWhats} /> WhatsApp</a>
            <a href={`tel:${negocio.celular.tel}`} className="boton border-2 border-marino/25 text-marino hover:border-marino"><Icono d={iTel} /> Cel. {negocio.celular.texto}</a>
            <a href={`tel:${negocio.telefono.tel}`} className="boton border-2 border-marino/25 text-marino hover:border-marino"><Icono d={iTel} /> Tel. {negocio.telefono.texto}</a>
          </div>
        </div>
        <dl className="grid gap-6 rounded-3xl bg-white p-7 ring-1 ring-marino/10 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <dt className="antetitulo">Ubicación</dt>
            <dd className="mt-1">{negocio.direccion}</dd>
            <dd><a href={negocio.mapa} className="mt-1 inline-flex min-h-11 items-center gap-2 font-semibold text-azul underline underline-offset-4 hover:text-marino"><Icono d={iMapa} /> Abrir en Google Maps</a></dd>
          </div>
          <div>
            <dt className="antetitulo">Horario</dt>
            <dd className="mt-1">{negocio.horario}</dd>
          </div>
          <div>
            <dt className="antetitulo">Correo</dt>
            <dd className="mt-1"><a href={`mailto:${negocio.correo}`} className="underline underline-offset-4 hover:text-azul">{negocio.correo}</a></dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro bg-marino py-10 pb-24 text-sm text-white/80 md:pb-10">
      <div className="contenedor flex flex-col gap-2 sm:flex-row sm:justify-between">
        <p className="font-serif text-2xl text-white">KAJEOS</p>
        <p>Grupo inmobiliario · {negocio.lugar}</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-marino/10 bg-white text-marino md:hidden">
      <a href={wa(saludo)} className="flex min-h-15 items-center justify-center gap-2 bg-marino font-semibold text-white"><Icono d={iWhats} /> WhatsApp</a>
      <a href={`tel:${negocio.celular.tel}`} className="flex min-h-15 items-center justify-center gap-2 font-semibold"><Icono d={iTel} /> Llamar</a>
      <a href={negocio.mapa} className="flex min-h-15 items-center justify-center gap-2 font-semibold"><Icono d={iMapa} /> Oficina</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <Encabezado />
      <main>
        <Portada />
        <Propiedades />
        <Vender />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
