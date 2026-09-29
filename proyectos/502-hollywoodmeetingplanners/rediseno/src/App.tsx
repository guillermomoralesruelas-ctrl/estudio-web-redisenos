import { useState } from 'react';
import { negocio, wa, waCotizar, foto, cifras, servicios, tematicas, tiposEvento, galeria, porQue, preguntas } from './data/content';

const externo = { target: '_blank', rel: 'noopener noreferrer' } as const;

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

function IconoCorreo({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function IconoEstrella({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9Z" />
    </svg>
  );
}

function Encabezado() {
  const enlaces: [string, string][] = [['#servicios', 'Servicios'], ['#marquesina', 'Cotiza tu evento'], ['#galeria', 'Galería'], ['#nosotros', 'Nosotros'], ['#preguntas', 'Preguntas']];
  return (
    <header className="oscuro sticky top-0 z-40 border-b border-white/10 bg-negro/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-2.5" aria-label="Hollywood Meeting Planners, inicio">
          <img src={`${import.meta.env.BASE_URL}icono.png`} alt="" width={36} height={36} className="h-9 w-9 rounded-md" />
          <span className="font-display text-[1.7rem] leading-none tracking-wide text-papel">Hollywood <span className="text-dorado">Cancún</span></span>
        </a>
        <nav aria-label="Secciones" className="hidden gap-6 text-[0.92rem] font-medium lg:flex">
          {enlaces.map(([h, t]) => <a key={h} href={h} className="hover:text-dorado">{t}</a>)}
        </nav>
        <a href={waCotizar} className="btn hidden !min-h-10 !py-2 sm:inline-flex" {...externo}><IconoWa />Cotizar</a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="oscuro relative isolate overflow-hidden">
      <img src={foto('pista-gala')} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" fetchPriority="high" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-negro via-negro/80 to-negro/40" />
      <div className="contenedor pb-14 pt-24 sm:pb-20 sm:pt-36">
        <p className="antetitulo">Producción de eventos especiales</p>
        <h1 className="mt-3 max-w-3xl text-[3.6rem] sm:text-[5.5rem] lg:text-[6.5rem]">Hablamos el idioma de los eventos</h1>
        <p className="mt-5 max-w-2xl text-lg text-papel/90">
          Hollywood Meeting Planners &amp; Event Management: bodas espectaculares, grupos de incentivo, convenciones y noches temáticas en Cancún, Mérida y la Riviera Maya.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#marquesina" className="btn">Arma tu marquesina</a>
          <a href={waCotizar} className="btn-claro" {...externo}><IconoWa />Escríbenos por WhatsApp</a>
        </div>
        <dl className="mt-12 grid max-w-3xl grid-cols-3 gap-4 border-t border-white/15 pt-6">
          {cifras.map((c) => (
            <div key={c.valor}>
              <dt className="sr-only">{c.texto}</dt>
              <dd className="font-display text-4xl text-dorado sm:text-5xl">{c.valor}</dd>
              <dd className="mt-1 text-[0.85rem] leading-snug sm:text-[0.95rem]">{c.texto}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Servicios() {
  return (
    <section id="servicios" className="py-16 sm:py-24">
      <div className="contenedor">
        <p className="antetitulo">Todo lo que necesitas, en un solo lugar</p>
        <h2 className="mt-2 max-w-2xl text-5xl sm:text-6xl">Planificación profesional con el estilo hollywoodense</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map((s) => (
            <article key={s.id} id={s.id} className="flex flex-col overflow-hidden rounded-2xl bg-papel shadow-[0_18px_40px_-28px_rgb(17_13_18/0.6)]">
              <img src={foto(s.foto)} alt={s.alt} loading="lazy" className="aspect-[16/9] w-full object-cover sm:aspect-[4/3]" />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-[2.1rem]">{s.titulo}</h3>
                <p className="mt-2 text-[0.98rem] text-gris">{s.texto}</p>
                {s.puntos && (
                  <ul className="mt-3 space-y-1.5 text-[0.95rem]">
                    {s.puntos.map((p) => <li key={p} className="flex gap-2"><span aria-hidden="true" className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-rojo" />{p}</li>)}
                  </ul>
                )}
                <a href={wa(`Hola Hollywood, quiero información de ${s.titulo.toLowerCase()}.`)} className="enlace mt-auto pt-4 text-[0.95rem]" {...externo}>Preguntar por {s.titulo.toLowerCase()}</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const DESTINOS = ['Cancún', 'Riviera Maya', 'Mérida', 'Por definir'];
const nombreTema = (t: string) => t.replace(/\s*\(.*\)/, '');

function Linea({ texto, className = '', roja = false }: { texto: string; className?: string; roja?: boolean }) {
  return (
    <p className={`text-center ${className}`} aria-hidden="true">
      {texto.toUpperCase().split(' ').map((palabra, i) => (
        <span key={i} className="inline-block whitespace-nowrap">
          {i > 0 && <span className="espacio" />}
          {[...palabra].map((l, j) => <span key={j} className={`letra ${roja ? 'letra-roja' : ''}`}>{l}</span>)}
        </span>
      ))}
    </p>
  );
}

function Marquesina() {
  const [tipo, setTipo] = useState(tiposEvento[0]);
  const [tema, setTema] = useState('Hollywood');
  const [destino, setDestino] = useState(DESTINOS[0]);
  const [invitados, setInvitados] = useState('150');
  const [mes, setMes] = useState('');
  const hoy = new Date();
  const minimo = `${hoy.getFullYear()}-${String(hoy.getMonth() + 1).padStart(2, '0')}`;

  const mesTexto = mes ? new Date(`${mes}-15T12:00:00`).toLocaleDateString('es-MX', { month: 'long', year: 'numeric' }) : '';
  const temaTexto = tema === 'A tu medida' ? 'Tu propia temática' : nombreTema(tema);
  const lugar = destino === 'Por definir' ? 'locación por definir' : `en ${destino}`;
  const n = parseInt(invitados, 10);
  const invitadosTexto = n > 0 ? `${n.toLocaleString('es-MX')} invitados` : 'invitados por confirmar';
  const linea3 = `${tipo} ${lugar}`;
  const linea4 = invitadosTexto;
  const linea5 = mesTexto || 'fecha por definir';
  const resumen = `Hollywood presenta: ${temaTexto}. ${linea3}. ${linea4}, ${linea5}.`;
  const mensaje = [
    'Hola Hollywood, quiero cotizar un evento.',
    `Tipo: ${tipo}`,
    `Temática: ${tema}`,
    `Destino: ${destino}`,
    `Fecha: ${mesTexto || 'por definir'}`,
    `Invitados: ${n > 0 ? n : 'por confirmar'}`,
  ].join('\n');

  const chip = (activo: boolean) =>
    `rounded-full border px-3.5 py-2 text-[0.9rem] font-medium transition-colors ${activo ? 'border-dorado bg-dorado text-negro' : 'border-white/25 text-papel hover:border-dorado'}`;

  return (
    <section id="marquesina" className="oscuro py-16 sm:py-24">
      <div className="contenedor">
        <p className="antetitulo">Cotiza tu evento</p>
        <h2 className="mt-2 max-w-3xl text-5xl sm:text-6xl">Tu evento en la marquesina</h2>
        <p className="mt-4 max-w-2xl">
          Su experiencia viene de la producción de cine y teatro. Elige el tipo de evento, una de sus 13 temáticas, el destino y la fecha: tu evento aparece en cartelera y el WhatsApp ya lleva todo escrito para que te coticen.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <div className="space-y-7">
            <fieldset>
              <legend className="font-bold text-papel">Tipo de evento</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {tiposEvento.map((t) => <button key={t} type="button" aria-pressed={tipo === t} onClick={() => setTipo(t)} className={chip(tipo === t)}>{t}</button>)}
              </div>
            </fieldset>
            <fieldset>
              <legend className="font-bold text-papel">Temática</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {[...tematicas, 'A tu medida'].map((t) => <button key={t} type="button" aria-pressed={tema === t} onClick={() => setTema(t)} className={chip(tema === t)}>{t}</button>)}
              </div>
            </fieldset>
            <fieldset>
              <legend className="font-bold text-papel">Destino</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {DESTINOS.map((d) => <button key={d} type="button" aria-pressed={destino === d} onClick={() => setDestino(d)} className={chip(destino === d)}>{d}</button>)}
              </div>
            </fieldset>
            <div className="grid grid-cols-2 gap-4">
              <label className="block">
                <span className="font-bold text-papel">Invitados</span>
                <input type="number" inputMode="numeric" min={1} max={20000} value={invitados} onChange={(e) => setInvitados(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/25 bg-carbon px-4 py-3 text-papel" />
              </label>
              <label className="block">
                <span className="font-bold text-papel">Mes del evento</span>
                <input type="month" min={minimo} value={mes} onChange={(e) => setMes(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/25 bg-carbon px-4 py-3 text-papel [color-scheme:dark]" />
              </label>
            </div>
          </div>

          <div className="lg:sticky lg:top-24">
            <div className="marquesina">
              <div className="tablero">
                <Linea texto="Hollywood presenta" roja className="text-[1.15rem] sm:text-[1.5rem]" />
                <Linea texto={temaTexto} className="mt-2 text-[2.3rem] sm:text-[3.6rem]" />
                <Linea texto={linea3} className="mt-2 text-[1.25rem] sm:text-[1.8rem]" />
                <Linea texto={linea4} roja className="mt-1 text-[1.05rem] sm:text-[1.4rem]" />
                <Linea texto={linea5} roja className="text-[1.05rem] sm:text-[1.4rem]" />
                <p className="sr-only" aria-live="polite">{resumen}</p>
              </div>
            </div>
            <div className="mx-auto h-5 w-2/3 rounded-b-xl bg-[#2a1f14]" aria-hidden="true" />
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href={wa(mensaje)} className="btn" {...externo}><IconoWa />Cotizar este evento</a>
              <p className="text-[0.92rem]">Precios a la medida: dependen del tipo de evento, invitados, locación y estilo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Galeria() {
  return (
    <section id="galeria" className="py-16 sm:py-24">
      <div className="contenedor">
        <p className="antetitulo">Galería de eventos</p>
        <h2 className="mt-2 max-w-3xl text-5xl sm:text-6xl">Escenografía, luz y show, montados por su equipo</h2>
        <div className="mt-10 grid grid-flow-dense grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {galeria.map((g, i) => (
            <figure key={g.f} className={`overflow-hidden rounded-xl bg-carbon ${g.ancho ? 'col-span-2' : ''} ${i >= 7 ? 'hidden sm:block' : ''}`}>
              <img src={foto(g.f)} alt={g.alt} loading="lazy" className={`h-full w-full object-cover ${g.ancho ? 'aspect-[2/1.1]' : 'aspect-square'}`} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Nosotros() {
  return (
    <section id="nosotros" className="bg-papel py-16 sm:py-24">
      <div className="contenedor grid items-center gap-10 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-3">
          <img src={foto('equipo-avion')} alt="Equipo de Hollywood frente a una escenografía de avión y muro de ladrillo" loading="lazy" className="aspect-[3/4] w-full rounded-xl object-cover" />
          <img src={foto('staff-retro')} alt="Staff con vestuario retro en la entrada de un evento temático" loading="lazy" className="mt-10 aspect-[3/4] w-full rounded-xl object-cover" />
        </div>
        <div>
          <p className="antetitulo">¿Quiénes somos?</p>
          <h2 className="mt-2 text-5xl sm:text-6xl">De Los Ángeles a la Península de Yucatán</h2>
          <p className="mt-4">
            Hollywood es una productora de eventos especiales con más de 40 años de experiencia, originaria de Los Ángeles, California, y con los últimos 22 años en Cancún, Mérida y la Riviera Maya. Planea eventos integrales, grupos de incentivo, convenciones, bodas y exhibiciones: desde la logística general hasta decoración escenográfica, entretenimiento, integración grupal, hostess, edecanes, modelos y animación.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {porQue.map((p) => (
              <div key={p.titulo} className="border-t-2 border-rojo pt-3">
                <h3 className="font-sans text-[1.05rem] font-bold leading-snug tracking-normal">{p.titulo}</h3>
                <p className="mt-1 text-[0.95rem] text-gris">{p.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Preguntas() {
  return (
    <section id="preguntas" className="py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <p className="antetitulo">Preguntas frecuentes</p>
          <h2 className="mt-2 text-5xl sm:text-6xl">Tu evento empieza con una buena información</h2>
          <p className="mt-4">¿Otra duda? <a href={waCotizar} className="enlace" {...externo}>Escríbeles por WhatsApp</a>.</p>
        </div>
        <div className="divide-y divide-tinta/15 border-y border-tinta/15">
          {preguntas.map((q) => (
            <details key={q.p} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
                {q.p}<span aria-hidden="true" className="text-2xl leading-none text-rojo transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-2 text-gris">{q.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="oscuro relative isolate overflow-hidden py-16 sm:py-24">
      <img src={foto('salon-estrellas')} alt="" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-negro/85" />
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <p className="antetitulo">Contáctanos</p>
          <h2 className="mt-2 text-5xl sm:text-6xl">¿Listo para impresionar a tus invitados? Hablemos</h2>
          <p className="mt-4 max-w-xl">Cuéntales tu idea, la fecha, el lugar y la temática. Trabajan en Cancún, la Riviera Maya y Mérida, en playas, jardines, salones y locaciones privadas.</p>
          <a href={waCotizar} className="btn mt-7" {...externo}><IconoWa />WhatsApp 998 845 8951</a>
        </div>
        <ul className="space-y-4 self-end text-papel">
          {negocio.telefonos.map((t) => (
            <li key={t.tel}><a href={`tel:${t.tel}`} className="flex items-center gap-3 hover:text-dorado"><IconoTel className="h-5 w-5 text-dorado" /><span><span className="block text-[0.8rem] uppercase tracking-wider text-humo">{t.etiqueta}</span>{t.numero}</span></a></li>
          ))}
          <li><a href={`mailto:${negocio.correo}`} className="flex items-center gap-3 hover:text-dorado"><IconoCorreo className="h-5 w-5 text-dorado" /><span><span className="block text-[0.8rem] uppercase tracking-wider text-humo">Correo</span>{negocio.correo}</span></a></li>
          <li className="flex gap-5 pt-2 text-[0.95rem]">
            <a href={negocio.facebook} className="enlace" {...externo}>Facebook</a>
            <a href={negocio.x} className="enlace" {...externo}>X (Twitter)</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro border-t border-white/10 pb-24 pt-8 text-[0.9rem] md:pb-8">
      <div className="contenedor flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {negocio.nombre}. Cancún, Mérida y Riviera Maya.</p>
        <a href={negocio.sitio} className="enlace" {...externo}>Sitio actual</a>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-negro text-[0.8rem] font-bold text-papel md:hidden">
      <a href={waCotizar} className="flex flex-col items-center gap-1 bg-dorado py-3 text-negro" {...externo}><IconoWa />WhatsApp</a>
      <a href={`tel:${negocio.telefonos[0].tel}`} className="flex flex-col items-center gap-1 py-3"><IconoTel />Llamar</a>
      <a href="#marquesina" className="flex flex-col items-center gap-1 py-3"><IconoEstrella />Cotizar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#servicios" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded focus:bg-papel focus:px-3 focus:py-2">Saltar al contenido</a>
      <Encabezado />
      <main>
        <Portada />
        <Servicios />
        <Marquesina />
        <Galeria />
        <Nosotros />
        <Preguntas />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
