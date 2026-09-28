import { useMemo, useState } from 'react';
import { artes, clases, dias, disciplinas, foto, fotos, horas, negocio, precios, wa, waGeneral, type Disciplina, type Foto } from './data/content';

function IconoWa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.2.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}

function IconoTel({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 3h4l2 5-3 2a11 11 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A18 18 0 0 1 3 5a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

function IconoPin({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function Img({ f, className = '', loading = 'lazy' }: { f: Foto; className?: string; loading?: 'lazy' | 'eager' }) {
  return <img src={f.src} width={f.w} height={f.h} alt={f.alt} loading={loading} decoding="async" className={className} />;
}

const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;
const tel = `tel:${negocio.telLink}`;

function Encabezado() {
  return (
    <header className="noche sticky top-0 z-40 border-b border-white/10 bg-tinta/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Baan Singto Central, inicio">
          <img src={foto('logo.webp')} alt="" width={40} height={40} className="h-10 w-10 rounded-full bg-white" />
          <span className="font-titulo text-lg font-bold uppercase tracking-wide text-white">Baan Singto <span className="text-oro">Central</span></span>
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-6 font-semibold uppercase tracking-wide text-white/85 md:flex">
          <a href="#semana" className="hover:text-oro">Horarios</a>
          <a href="#artes" className="hover:text-oro">Artes marciales</a>
          <a href="#precios" className="hover:text-oro">Precios</a>
          <a href="#ubicacion" className="hover:text-oro">Ubicación</a>
        </nav>
        <a href={waGeneral} className="btn !min-h-[40px] !px-4 !py-2 text-sm" target="_blank" rel="noopener"><IconoWa className="h-4 w-4" /> Informes</a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="noche relative overflow-hidden bg-tinta text-white/85">
      <Img f={fotos.patada} loading="eager" className="absolute inset-0 h-full w-full object-cover opacity-35" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-tinta via-tinta/85 to-tinta/30" />
      <div className="contenedor relative py-20 sm:py-28 lg:py-36">
        <p className="font-semibold text-oro">Escuela forjadora de campeones, desde hace más de 20 años</p>
        <h1 className="mt-4 max-w-3xl text-5xl sm:text-7xl">Muay Thai y artes marciales en Zapopan</h1>
        <p className="mt-6 max-w-xl text-lg">Academia de artes marciales y centro de entrenamiento deportivo, especializada en Muay Thai (boxeo tailandés). También Jiu-jitsu, Box, Judo y defensa personal, en Plaza La Perla.</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#semana" className="btn">Arma tu semana</a>
          <a href={waGeneral} className="btn-claro" target="_blank" rel="noopener"><IconoWa /> {negocio.telefono}</a>
        </div>
      </div>
    </section>
  );
}

const colorDe = Object.fromEntries(disciplinas.map((d) => [d.id, d.clase])) as Record<Disciplina, string>;
const nombreDe = Object.fromEntries(disciplinas.map((d) => [d.id, d.nombre])) as Record<Disciplina, string>;

function plan(elegidas: Disciplina[]) {
  const ninos = elegidas.includes('kids');
  const adultos = elegidas.filter((d) => d !== 'kids');
  const partes: { nombre: string; monto: number }[] = [];
  if (adultos.length === 1) partes.push({ nombre: 'Una disciplina', monto: precios.una });
  if (adultos.length > 1) partes.push({ nombre: 'Todas las disciplinas', monto: precios.todas });
  if (ninos) partes.push({ nombre: 'Clase de niños', monto: precios.ninos });
  return partes;
}

function Semana() {
  const [elegidas, setElegidas] = useState<Disciplina[]>(['muaythai']);
  const alternar = (d: Disciplina) => setElegidas((e) => (e.includes(d) ? e.filter((x) => x !== d) : [...e, d]));
  const mias = useMemo(() => clases.filter((c) => elegidas.includes(c.d)), [elegidas]);
  const partes = plan(elegidas);
  const mensual = partes.reduce((n, p) => n + p.monto, 0);

  const mensaje = elegidas.length
    ? `Hola, requiero informes para entrenar en Baan Singto Central: ${elegidas.map((d) => nombreDe[d]).join(', ')}.${partes.length ? ` Vi el plan ${partes.map((p) => `${p.nombre} (${pesos(p.monto)} al mes)`).join(' y ')}.` : ''}`
    : 'Hola, requiero informes de las clases de Baan Singto Central.';

  return (
    <section id="semana" className="py-20 sm:py-24">
      <div className="contenedor">
        <div className="max-w-2xl">
          <h2 className="text-4xl sm:text-6xl">Arma tu semana</h2>
          <p className="mt-4 text-lg">Elige lo que quieres entrenar y ve en su horario de grupo cuándo te toca, cuántas clases tienes a la semana y qué mensualidad te corresponde.</p>
        </div>

        <fieldset className="mt-8">
          <legend className="sr-only">Disciplinas</legend>
          <div className="flex flex-wrap gap-2">
            {disciplinas.map((d) => {
              const on = elegidas.includes(d.id);
              return (
                <button key={d.id} type="button" aria-pressed={on} onClick={() => alternar(d.id)}
                  className={`min-h-[44px] px-4 text-[0.95rem] font-semibold uppercase tracking-wide transition-opacity ${on ? d.clase : 'bg-white text-tinta ring-1 ring-inset ring-tinta/20 hover:ring-tinta'}`}>
                  {on ? '✓ ' : ''}{d.nombre}
                </button>
              );
            })}
          </div>
          {disciplinas.filter((d) => d.nota && elegidas.includes(d.id)).map((d) => (
            <p key={d.id} className="mt-3 text-sm"><strong className="text-tinta">{d.nombre}:</strong> {d.nota}.</p>
          ))}
        </fieldset>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
          {/* Tabla completa en pantallas anchas */}
          <div className="hidden min-w-0 overflow-hidden border-2 border-tinta bg-white md:block">
            <table className="w-full table-fixed border-collapse text-sm">
              <caption className="sr-only">Horario de clases de grupo por día y hora</caption>
              <thead>
                <tr className="bg-tinta text-white">
                  <th scope="col" className="w-20 p-2 text-left font-titulo uppercase">Hora</th>
                  {dias.map((d) => <th key={d} scope="col" className="p-2 text-left font-titulo uppercase">{d}</th>)}
                </tr>
              </thead>
              <tbody>
                {horas.map((h) => (
                  <tr key={h} className="border-t border-tinta/10 align-top">
                    <th scope="row" className="p-2 text-left font-semibold whitespace-nowrap text-tinta">{h}</th>
                    {dias.map((_, dia) => {
                      const aqui = clases.filter((c) => c.dia === dia && c.hora === h);
                      return (
                        <td key={dia} className="p-1">
                          <div className="flex flex-col gap-1">
                            {aqui.map((c) => {
                              const on = elegidas.includes(c.d);
                              return (
                                <span key={c.d} className={`block px-2 py-1 font-semibold leading-tight ${on ? `entra ${colorDe[c.d]}` : 'text-texto/80'}`}>
                                  {nombreDe[c.d]}{c.area ? <span className="block text-[0.72rem] font-normal opacity-90">Área {c.area}</span> : null}
                                </span>
                              );
                            })}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Lista por día en el celular */}
          <ol className="grid min-w-0 gap-3 md:hidden">
            {dias.map((d, dia) => {
              const delDia = mias.filter((c) => c.dia === dia);
              return (
                <li key={d} className="border-l-4 border-tinta bg-white p-4">
                  <h3 className="text-xl">{d}</h3>
                  {delDia.length ? (
                    <ul className="mt-2 grid gap-1.5">
                      {delDia.map((c) => (
                        <li key={c.hora + c.d} className="entra flex items-center gap-3">
                          <span className="w-16 shrink-0 font-semibold text-tinta">{c.hora}</span>
                          <span className={`px-2 py-0.5 text-sm font-semibold ${colorDe[c.d]}`}>{nombreDe[c.d]}</span>
                        </li>
                      ))}
                    </ul>
                  ) : <p className="mt-1 text-sm">Sin clases de lo que elegiste.</p>}
                </li>
              );
            })}
          </ol>

          <aside aria-label="Tu semana" className="noche min-w-0 self-start bg-tinta p-6 text-white/85 lg:sticky lg:top-24">
            <p className="font-titulo text-6xl font-bold text-oro" aria-live="polite">{mias.length}</p>
            <p className="font-semibold uppercase tracking-wide text-white">clases a la semana</p>
            {partes.length > 0 ? (
              <dl className="mt-6 grid gap-2 border-t border-white/15 pt-5">
                {partes.map((p) => (
                  <div key={p.nombre} className="flex justify-between gap-3"><dt>{p.nombre}</dt><dd className="font-semibold text-white">{pesos(p.monto)} al mes</dd></div>
                ))}
                <div className="flex justify-between gap-3"><dt>Inscripción (una vez)</dt><dd className="font-semibold text-white">{pesos(precios.inscripcion)}</dd></div>
                <div className="mt-2 flex justify-between gap-3 border-t border-white/15 pt-3 text-lg"><dt className="font-semibold text-white">Primer mes</dt><dd className="font-titulo text-2xl font-bold text-oro">{pesos(mensual + precios.inscripcion)}</dd></div>
              </dl>
            ) : <p className="mt-6">Elige al menos una disciplina.</p>}
            <p className="mt-4 text-sm">¿Solo quieres probar? Clase por visita, {pesos(precios.visita)}.</p>
            <a href={wa(mensaje)} className="btn mt-6 w-full" target="_blank" rel="noopener"><IconoWa /> Pedir informes</a>
            <p className="mt-4 text-xs text-white/70">Horario de abril de 2026. Puede cambiar según la demanda, con previo aviso.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Artes() {
  return (
    <section id="artes" className="noche bg-carbon py-20 text-white/85 sm:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div className="min-w-0">
          <h2 className="text-4xl sm:text-6xl">Artes marciales</h2>
          <p className="mt-4 text-lg">Una escuela internacional de Muay Thai con más de 20 años de trayectoria en México, conocida como "Escuela Forjadora de Campeones Nacionales e Internacionales".</p>
          <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {artes.map((a) => (
              <li key={a.nombre} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4">
                <h3 className="text-2xl">{a.nombre}</h3>
                <p className="text-white/75">{a.sub}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6">Además: Grappling, Combat Conditioning, el Baansingto Fight Team y Muay Thai Kids. Pregunta por las clases privadas.</p>
        </div>
        <div className="grid min-w-0 grid-cols-2 gap-3 self-start">
          <figure className="row-span-2 min-w-0">
            <Img f={fotos.kru} className="aspect-[2/3] w-full object-cover" />
            <figcaption className="mt-2 text-sm">Kru Carlos</figcaption>
          </figure>
          <Img f={fotos.ring} className="aspect-[3/2] w-full object-cover" />
          <Img f={fotos.guardia} className="aspect-[3/2] w-full object-cover object-top" />
        </div>
      </div>
    </section>
  );
}

function Academia() {
  return (
    <section className="py-20 sm:py-24">
      <div className="contenedor grid grid-cols-2 gap-3 md:grid-cols-4">
        <Img f={fotos.letrero} className="aspect-[3/4] w-full object-cover" />
        <Img f={fotos.tatami} className="col-span-2 aspect-[3/2] w-full object-cover md:aspect-auto md:h-full" />
        <Img f={fotos.grupo} className="aspect-[3/4] w-full object-cover" />
      </div>
    </section>
  );
}

function Precios() {
  const filas = [
    ['Una disciplina', precios.una, 'al mes'],
    ['Todas las disciplinas', precios.todas, 'al mes'],
    ['Clase de niños', precios.ninos, 'al mes'],
    ['Por visita', precios.visita, 'por clase'],
    ['Inscripción', precios.inscripcion, 'una vez'],
  ] as const;
  return (
    <section id="precios" className="bg-white py-20 sm:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div className="min-w-0">
          <h2 className="text-4xl sm:text-6xl">Precios</h2>
          <p className="mt-4 text-lg">Mensualidades en pesos mexicanos, tal como las publica la academia. Pregunta por sus promociones.</p>
          <div className="mt-8 border-l-4 border-rojo bg-papel p-6">
            <p className="font-titulo text-xl font-bold uppercase text-tinta">Anualidad</p>
            <p className="mt-2"><span className="font-titulo text-4xl font-bold text-rojo-hondo">{pesos(precios.anualPromo)}</span> <span className="font-semibold">en promoción</span></p>
            <p className="mt-1 text-sm">Precio normal: {pesos(precios.anual)}.</p>
          </div>
        </div>
        <dl className="min-w-0 divide-y divide-tinta/10 border-y-2 border-tinta">
          {filas.map(([n, m, u]) => (
            <div key={n} className="flex items-baseline justify-between gap-4 py-4">
              <dt className="font-titulo text-xl font-bold uppercase text-tinta">{n}</dt>
              <dd><span className="font-titulo text-3xl font-bold text-tinta">{pesos(m)}</span> <span className="text-sm">{u}</span></dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Ubicacion() {
  return (
    <section id="ubicacion" className="py-20 sm:py-24">
      <div className="contenedor grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="min-w-0 overflow-hidden">
          <iframe
            src={negocio.mapaEmbed}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title={`Ubicación de ${negocio.nombre}`}
            className="aspect-[14/9] w-full"
          />
        </div>
        <div className="min-w-0">
          <h2 className="text-4xl sm:text-6xl">Plaza La Perla</h2>
          <p className="mt-4 text-lg">{negocio.direccion}.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={negocio.mapa} className="btn" target="_blank" rel="noopener"><IconoPin /> Ver en Google Maps</a>
            <a href={tel} className="btn-linea"><IconoTel /> {negocio.telefono}</a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-semibold">
            <li><a href={negocio.instagram} className="enlace" target="_blank" rel="noopener">Instagram</a></li>
            <li><a href={negocio.facebook} className="enlace" target="_blank" rel="noopener">Facebook</a></li>
            <li><a href={negocio.tiktok} className="enlace" target="_blank" rel="noopener">TikTok</a></li>
            <li><a href={negocio.youtube} className="enlace" target="_blank" rel="noopener">YouTube</a></li>
            <li><a href={negocio.blog} className="enlace" target="_blank" rel="noopener">Blog y eventos</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="noche bg-tinta pb-28 pt-12 text-sm text-white/75 md:pb-10">
      <div className="contenedor flex flex-wrap items-center justify-between gap-4">
        <p className="font-titulo text-xl font-bold uppercase tracking-wide text-white">Baan Singto <span className="text-oro">Central</span></p>
        <p>Muay Thai, Jiu-jitsu, Box, Judo y defensa personal en Zapopan, Jalisco.</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-tinta text-[0.8rem] font-semibold uppercase text-white md:hidden">
      <a href={waGeneral} className="flex flex-col items-center gap-1 bg-rojo py-3" target="_blank" rel="noopener"><IconoWa />WhatsApp</a>
      <a href={tel} className="flex flex-col items-center gap-1 py-3"><IconoTel />Llamar</a>
      <a href={negocio.mapa} className="flex flex-col items-center gap-1 py-3" target="_blank" rel="noopener"><IconoPin />Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#semana" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-oro focus:px-4 focus:py-2 focus:text-tinta">Ir a horarios</a>
      <Encabezado />
      <main>
        <Portada />
        <Semana />
        <Artes />
        <Academia />
        <Precios />
        <Ubicacion />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
