import { useState } from 'react';
import { negocio, wa, waGeneral, fotos, sedes, mapa, programas, cifras, razones, avales, experiencias, type Programa } from './data/content';

const externo = { target: '_blank', rel: 'noopener noreferrer' } as const;
const dos = (n: number) => String(n).padStart(2, '0');

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


function Marca() {
  return (
    <span className="flex items-baseline gap-2 text-white">
      <span className="text-[1.6rem] font-extrabold tracking-tight">IAAC</span>
      <span className="hidden text-[0.8rem] font-semibold leading-tight text-humo sm:block">Instituto Argentino<br />de Artes Culinarias</span>
    </span>
  );
}

function Encabezado() {
  const enlaces: [string, string][] = [['#programas', 'Programas'], ['#sedes', 'Sedes'], ['#experiencias', 'Master Class y empresas'], ['#contacto', 'Contacto']];
  return (
    <header className="oscuro sticky top-0 z-40 border-b border-white/10 bg-carbon/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" aria-label="IAAC, Instituto Argentino de Artes Culinarias, inicio"><Marca /></a>
        <nav aria-label="Secciones" className="hidden gap-6 text-[0.92rem] font-semibold lg:flex">
          {enlaces.map(([href, t]) => <a key={href} href={href} className="hover:text-brasa">{t}</a>)}
        </nav>
        <a href={waGeneral} className="btn hidden !min-h-10 !py-2 sm:inline-flex" {...externo}><IconoWa />Informes</a>
      </div>
    </header>
  );
}

function Portada() {
  const puntos = ['Una clase por semana', 'Turnos matutino y vespertino', 'Insumos incluidos', 'Práctica desde el primer día'];
  return (
    <section id="inicio" className="oscuro relative overflow-hidden">
      <div className="relative h-[21rem] sm:h-[26rem] lg:h-[30rem]">
        <img src={fotos.portada.src} alt={fotos.portada.alt} width={fotos.portada.ancho} height={fotos.portada.alto}
          className="absolute inset-0 h-full w-full object-cover object-[40%_30%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/30 to-transparent" />
      </div>
      <div className="contenedor relative -mt-24 pb-14 sm:-mt-28">
        <p className="font-mono text-[0.9rem] text-brasa">Guadalajara · León · Querétaro · Mérida · Toluca</p>
        <h1 className="mt-3 max-w-4xl text-[2.5rem] sm:text-6xl lg:text-7xl">Escuela de gastronomía con práctica real desde el primer día</h1>
        <p className="mt-5 max-w-2xl text-lg">Diplomados, cursos y workshops para trabajar o emprender en la gastronomía, o para aprender por gusto, sin dejar tus actividades.</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {puntos.map((p) => <li key={p} className="rounded-md border border-white/20 px-3 py-1.5 text-[0.92rem] text-white">{p}</li>)}
        </ul>
        <dl className="mt-8 grid max-w-4xl grid-cols-3 gap-x-4 gap-y-4 border-y border-white/15 py-5 sm:grid-cols-6">
          {cifras.map(([n, t]) => (
            <div key={t} className="flex flex-col"><dt className="text-[0.85rem]">{t}</dt><dd className="order-first font-mono text-2xl font-semibold text-brasa sm:text-3xl">{n}</dd></div>
          ))}
        </dl>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={waGeneral} className="btn" {...externo}><IconoWa />Pedir informes por WhatsApp</a>
          <a href="#programas" className="btn-claro">Ver los planes de estudio</a>
        </div>
      </div>
    </section>
  );
}

function Ticket({ n, titulo, nota, clases, inicio }: { n: number; titulo: string; nota?: string; clases: string[]; inicio: number }) {
  return (
    <li className="relative w-[16.5rem] shrink-0 snap-start pt-5">
      {/* pinza que sujeta el ticket al riel */}
      <span aria-hidden="true" className="absolute left-1/2 top-0 h-7 w-10 -translate-x-1/2 rounded-b-md bg-gradient-to-b from-[#9aa2ab] to-[#6b737c]" />
      <div className="comanda px-4 pt-6">
        <p className="flex justify-between text-[0.75rem] text-gris"><span>IAAC</span><span>COMANDA {dos(n)}</span></p>
        <p className="mt-1 border-y border-dashed border-tinta/40 py-2 text-[0.95rem] font-semibold uppercase leading-snug">{titulo}</p>
        {nota && <p className="mt-2 text-[0.78rem] italic text-gris">{nota}</p>}
        <ol className="mt-2 space-y-1">
          {clases.map((c, i) => (
            <li key={c + i} className="grid grid-cols-[2rem_1fr] leading-snug"><span className="text-chile">{dos(inicio + i)}</span><span>{c}</span></li>
          ))}
        </ol>
        <p className="mt-3 border-t border-dashed border-tinta/40 pt-2 text-center text-[0.75rem] text-gris">{clases.length} {clases.length === 1 ? 'línea' : 'líneas'}</p>
      </div>
    </li>
  );
}

function Programas() {
  const [id, setId] = useState('chef');
  const [sede, setSede] = useState('');
  const p: Programa = programas.find((x) => x.id === id) ?? programas[0];
  const numerado = !p.comandas.some((c) => c.nota?.startsWith('Algunas') || c.titulo === 'Módulos');
  let cuenta = 0;
  const total = p.comandas.reduce((s, c) => s + c.clases.length, 0);
  const tipoTexto = p.tipo === 'Diplomado' ? 'el diplomado' : p.tipo === 'Curso' ? 'el curso' : 'el workshop';
  const mensaje = `Hola IAAC, quiero informes de ${tipoTexto} ${p.nombre}${sede ? ` en la sede ${sede}` : ''}: horarios, costo y fecha de inicio.`;
  const grupos: [string, Programa['tipo'][]][] = [['Diplomados y cursos', ['Diplomado', 'Curso']], ['Workshops', ['Workshop']]];

  return (
    <section id="programas" className="py-16 sm:py-24">
      <div className="contenedor">
        <div className="max-w-3xl">
          <p className="font-mono text-[0.9rem] text-chile">Planes de estudio completos</p>
          <h2 className="mt-2 text-4xl sm:text-5xl">Tu programa, comanda por comanda</h2>
          <p className="mt-4 text-lg">Elige un programa y míralo como se ve en la cocina: cada comanda es un módulo de su plan de estudios, con sus clases en orden.</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {grupos.map(([g, tipos]) => (
            <div key={g}>
              <p className="text-[0.85rem] font-semibold text-gris">{g}</p>
              <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label={g}>
                {programas.filter((x) => tipos.includes(x.tipo)).map((x) => (
                  <button key={x.id} type="button" aria-pressed={x.id === p.id} onClick={() => setId(x.id)}
                    className={`rounded-md border-2 px-3.5 py-2 text-[0.95rem] font-semibold ${x.id === p.id ? 'border-carbon bg-carbon text-white' : 'border-tinta/15 bg-white hover:border-carbon'}`}>
                    {x.nombre}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-xl bg-carbon-medio">
          <div className="flex flex-wrap items-end justify-between gap-4 p-5 sm:p-7">
            <div className="text-humo">
              <p className="font-mono text-[0.85rem] text-brasa">{p.tipo}</p>
              <h3 className="mt-1 text-3xl !text-white sm:text-4xl">{p.nombre}</h3>
              <p className="mt-1 max-w-xl">{p.lema}</p>
            </div>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-1 text-[0.92rem] text-humo sm:flex sm:gap-8">
              <div><dt className="text-[0.78rem]">Duración</dt><dd className="font-semibold text-white">{p.duracion ?? 'Pregunta por WhatsApp'}</dd></div>
              <div><dt className="text-[0.78rem]">Turno</dt><dd className="font-semibold text-white">{p.turno ?? 'Consulta en tu sede'}</dd></div>
              {numerado && <div><dt className="text-[0.78rem]">Clases en el plan</dt><dd className="font-semibold text-white">{total}</dd></div>}
            </dl>
          </div>
          <div className="relative">
            <div aria-hidden="true" className="riel absolute inset-x-0 top-0 h-3" />
            <ol className="flex snap-x gap-4 overflow-x-auto px-5 pb-8 sm:px-7" aria-label={`Plan de estudios de ${p.nombre}`} tabIndex={0}>
              {p.comandas.map((c, i) => {
                const inicio = numerado ? cuenta + 1 : 1;
                if (numerado) cuenta += c.clases.length;
                return <Ticket key={p.id + c.titulo} n={i + 1} titulo={c.titulo} nota={c.nota} clases={c.clases} inicio={inicio} />;
              })}
            </ol>
          </div>
          <div className="flex flex-wrap items-center gap-3 border-t border-white/10 p-5 sm:p-7">
            <label className="flex items-center gap-2 text-[0.95rem] text-humo">
              Sede
              <select value={sede} onChange={(e) => setSede(e.target.value)} className="min-h-11 rounded-md border border-white/25 bg-carbon px-3 text-white">
                <option value="">La que me quede cerca</option>
                {sedes.map((s) => <option key={s.id} value={s.nombre}>{s.nombre}</option>)}
              </select>
            </label>
            <a href={wa(mensaje)} className="btn" {...externo}><IconoWa />Pedir informes de {p.nombre}</a>
            {p.extra && <p className="w-full text-[0.9rem] text-humo">{p.extra}</p>}
          </div>
        </div>
        <p className="mt-3 text-[0.88rem] text-gris">Desliza las comandas para ver el plan completo. Los costos, horarios y fechas de inicio se confirman con admisiones.</p>
      </div>
    </section>
  );
}

function Sedes() {
  return (
    <section id="sedes" className="bg-white py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="text-4xl sm:text-5xl">Seis sedes, cocinas de práctica</h2>
        <p className="mt-3 max-w-2xl text-lg">Guadalajara, León, Querétaro, Mérida y Toluca. Todas con cocinas equipadas para practicar desde la primera clase.</p>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sedes.filter((s) => s.foto).map((s) => {
            // Querétaro tiene dos sedes; Campanario no tiene foto en su sitio, así que va en la misma tarjeta.
            const juntas = s.id === 'queretaro' ? sedes.filter((x) => x.id === 'queretaro' || x.id === 'campanario') : [s];
            return (
              <li key={s.id} className="flex flex-col overflow-hidden rounded-xl border border-tinta/10 bg-acero-claro">
                <img src={s.foto} alt={`Cocina de práctica del IAAC en ${s.nombre}`} width={370} height={370} loading="lazy" className="aspect-[16/10] w-full object-cover" />
                <div className="flex flex-1 flex-col gap-4 p-5">
                  <h3 className="text-2xl">{s.id === 'queretaro' ? 'Querétaro, dos sedes' : s.nombre}</h3>
                  {juntas.map((x) => (
                    <div key={x.id}>
                      {juntas.length > 1 && <p className="font-semibold">{x.nombre.replace('Querétaro ', '')}</p>}
                      <p className="text-[0.95rem] text-gris">{x.direccion}, C.P. {x.cp}</p>
                      <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2">
                        <a href={mapa(x)} className="enlace inline-flex items-center gap-1" {...externo}><IconoPin className="h-4 w-4" />Cómo llegar</a>
                        <a href={wa(`Hola IAAC, quiero informes de la sede ${x.nombre}.`)} className="enlace inline-flex items-center gap-1" {...externo}><IconoWa className="h-4 w-4" />WhatsApp</a>
                      </div>
                    </div>
                  ))}
                </div>
              </li>
            );
          })}
          <li className="oscuro flex flex-col justify-between gap-6 rounded-xl p-6">
            <div>
              <h3 className="text-2xl">Admisiones</h3>
              <p className="mt-2">Un solo número para todas las sedes. {negocio.horario}.</p>
            </div>
            <div className="flex flex-col gap-3">
              <a href={waGeneral} className="btn" {...externo}><IconoWa />WhatsApp {negocio.whatsappTexto}</a>
              <a href={negocio.admisionesHref} className="btn-claro"><IconoTel />Llamar al {negocio.admisiones}</a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Experiencias() {
  return (
    <section id="experiencias" className="py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <h2 className="text-4xl sm:text-5xl">También para una tarde o para tu empresa</h2>
          <h3 className="mt-10 text-xl">Por qué estudiar en el IAAC</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {razones.map((r) => <li key={r} className="rounded-md bg-white px-3 py-1.5 text-[0.92rem] font-semibold">{r}</li>)}
          </ul>
          <p className="mt-6 text-[0.92rem] text-gris">Su sitio indica que sus programas están avalados por {avales.join(', ')}.</p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {experiencias.map((e) => (
            <li key={e.titulo} className="rounded-xl border border-tinta/10 bg-white p-6">
              <h3 className="text-2xl">{e.titulo}</h3>
              <p className="mt-2 text-[0.97rem] text-gris">{e.texto}</p>
              <a href={wa(`Hola IAAC, quiero informes de ${e.titulo}.`)} className="enlace mt-4 inline-block" {...externo}>Preguntar por WhatsApp</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="oscuro py-16 sm:py-20">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl sm:text-5xl">Aparta tu lugar</h2>
          <p className="mt-4 max-w-md">Escribe qué programa te interesa y en qué sede; admisiones te comparte horarios, costos y la fecha del próximo inicio.</p>
          <a href={waGeneral} className="btn mt-6" {...externo}><IconoWa />Escribir por WhatsApp</a>
        </div>
        <ul className="space-y-4 text-white">
          <li className="flex gap-3"><IconoWa className="mt-1 h-5 w-5 shrink-0 text-brasa" /><span>WhatsApp<br /><a href={waGeneral} className="enlace" {...externo}>{negocio.whatsappTexto}</a></span></li>
          <li className="flex gap-3"><IconoTel className="mt-1 h-5 w-5 shrink-0 text-brasa" /><span>Admisiones<br /><a href={negocio.admisionesHref} className="enlace">{negocio.admisiones}</a></span></li>
          <li className="flex gap-3"><span aria-hidden="true" className="mt-0.5 w-5 shrink-0 text-center font-mono text-brasa">◷</span><span>Horario de atención<br />{negocio.horario}</span></li>
          <li className="flex flex-wrap gap-x-6 gap-y-2 pl-8">
            <a href={negocio.facebook} className="enlace" {...externo}>Facebook</a>
            <a href={negocio.instagram} className="enlace" {...externo}>Instagram</a>
            <a href={negocio.youtube} className="enlace" {...externo}>YouTube</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro border-t border-white/10 pb-24 pt-8 text-[0.88rem] md:pb-8">
      <div className="contenedor flex flex-wrap items-center justify-between gap-4">
        <Marca />
        <p>{negocio.nombreLargo}. Sedes en Guadalajara, León, Querétaro, Mérida y Toluca.</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-carbon text-[0.8rem] font-semibold text-white md:hidden">
      <a href={waGeneral} className="flex flex-col items-center gap-1 bg-chile py-3" {...externo}><IconoWa />WhatsApp</a>
      <a href={negocio.admisionesHref} className="flex flex-col items-center gap-1 py-3"><IconoTel />Llamar</a>
      <a href="#sedes" className="flex flex-col items-center gap-1 py-3"><IconoPin />Sedes</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <Encabezado />
      <main>
        <Portada />
        <Programas />
        <Sedes />
        <Experiencias />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
