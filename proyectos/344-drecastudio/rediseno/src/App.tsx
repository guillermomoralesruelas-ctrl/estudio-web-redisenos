import { useState } from 'react';
import { negocio, bio, servicios, galerias, invitaciones, notasInvitacion, resenas } from './data/content';
import fotos from './data/fotos.json';

const medidas = fotos as unknown as Record<string, [number, number]>;
const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

function Foto({ n, alt, className = '', eager = false }: { n: string; alt: string; className?: string; eager?: boolean }) {
  const [w, h] = medidas[n];
  return <img src={`./${n}.webp`} width={w} height={h} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" className={className} />;
}

function Icono({ d, className = 'h-5 w-5' }: { d: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}
const iChat = 'M21 11.5a8.4 8.4 0 0 1-9 8.4 8.6 8.6 0 0 1-3.8-.9L3 21l1.9-5.1A8.4 8.4 0 0 1 3.5 11.5 8.5 8.5 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5Z';
const iPin = 'M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z';
const iTel = 'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z';
const iCam = 'M4 7h3l2-3h6l2 3h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Zm8 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z';

// Elemento memorable: la invitación digital armada en vivo dentro de un celular, con el largo y los botones de cada formato.
function InvitacionEnVivo() {
  const [tipo, setTipo] = useState('mediana');
  const [nombre, setNombre] = useState('Valeria');
  const [evento, setEvento] = useState('Mis XV años');
  const [fecha, setFecha] = useState('Sábado 14 de marzo');
  const [lugar, setLugar] = useState('Salón Jardín, 8:00 p. m.');
  const inv = invitaciones.find((i) => i.id === tipo)!;
  const botones = ['Ver ubicación', 'Confirmar asistencia', 'Mesa de regalos', 'Código de vestimenta', 'Itinerario'].slice(0, inv.botones);
  const mensaje = `Hola Frank, me interesa la invitación ${inv.nombre} ($${inv.precio}). Es para: ${evento} de ${nombre}, ${fecha}, en ${lugar}.`;
  const campo = 'mt-1 w-full rounded-lg border border-tinta/20 bg-white px-3 py-2.5 text-base outline-none focus:border-verde-osc';
  return (
    <div className="grid items-start gap-10 lg:grid-cols-[1fr_auto]">
      <div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Formato de invitación">
          {invitaciones.map((i) => (
            <button key={i.id} type="button" className="chip" aria-pressed={tipo === i.id} onClick={() => setTipo(i.id)}>{i.nombre} · ${i.precio}</button>
          ))}
        </div>
        <p className="mt-4 text-gris">{inv.formato}. {inv.nota}</p>
        <p className="mt-2 text-xs text-gris">Los datos de abajo son un ejemplo: cámbialos por los de tu evento.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-semibold">Festejado(s)<input className={campo} value={nombre} onChange={(e) => setNombre(e.target.value)} /></label>
          <label className="text-sm font-semibold">Evento<input className={campo} value={evento} onChange={(e) => setEvento(e.target.value)} /></label>
          <label className="text-sm font-semibold">Fecha<input className={campo} value={fecha} onChange={(e) => setFecha(e.target.value)} /></label>
          <label className="text-sm font-semibold">Lugar y hora<input className={campo} value={lugar} onChange={(e) => setLugar(e.target.value)} /></label>
        </div>
        <a href={wa(mensaje)} className="btn-oscuro mt-6" target="_blank" rel="noopener"><Icono d={iChat} /> Pedir mi invitación por WhatsApp</a>
        <ul className="mt-6 grid gap-1.5 text-sm text-gris">
          {notasInvitacion.map((n) => <li key={n}>· {n}</li>)}
        </ul>
      </div>
      {/* el celular */}
      <div className="mx-auto w-[260px] rounded-[2.4rem] border-[10px] border-carbon bg-carbon shadow-2xl" aria-label="Vista previa de la invitación" role="img">
        <div className="h-[480px] overflow-hidden rounded-[1.7rem] bg-[#FBF8F2]">
          <div className="transition-transform duration-700" style={{ animation: inv.largo > 1 ? `subir-${inv.id} 7s ease-in-out infinite alternate` : undefined }}>
            <div className="flex flex-col items-center px-6 text-center" style={{ minHeight: `${480 * inv.largo}px` }}>
              <div className="mt-10 h-24 w-24 overflow-hidden rounded-full border-4 border-[#E8D9B5]">
                <Foto n="sesion-47" alt="" className="h-full w-full object-cover" />
              </div>
              <p className="mt-5 text-[0.7rem] font-bold uppercase tracking-[0.3em] text-[#9A7B3F]">{evento || 'Tu evento'}</p>
              <p className="mt-2 font-[family-name:var(--font-display)] text-3xl font-extrabold leading-none text-tinta [overflow-wrap:anywhere]">{nombre || 'Nombre'}</p>
              <div className="my-5 h-px w-16 bg-[#E8D9B5]" />
              <p className="text-sm font-semibold">{fecha || 'Fecha'}</p>
              <p className="mt-1 text-sm text-gris">{lugar || 'Lugar y hora'}</p>
              {inv.largo > 1 && (
                <>
                  <div className="my-6 h-px w-16 bg-[#E8D9B5]" />
                  <p className="text-xs leading-relaxed text-gris">Aquí van más detalles: padres y padrinos, misa y recepción, itinerario y lo que quieras contar.</p>
                  {inv.largo > 2 && <Foto n="norma-y-bruna-46" alt="" className="mt-6 w-full rounded-lg grayscale" />}
                </>
              )}
              <div className="mt-6 grid w-full gap-2 pb-8">
                {botones.map((b) => <span key={b} className="rounded-full bg-tinta px-3 py-2 text-xs font-semibold text-white">{b}</span>)}
                {inv.botones === 0 && <span className="text-[0.65rem] text-gris">Imagen fija, sin botones</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{invitaciones.filter((i) => i.largo > 1).map((i) => `@keyframes subir-${i.id}{0%,15%{transform:translateY(0)}85%,100%{transform:translateY(-${Math.round(480 * (i.largo - 1))}px)}}`).join('')}</style>
    </div>
  );
}

export default function App() {
  const [gal, setGal] = useState(galerias[0].id);
  const g = galerias.find((x) => x.id === gal)!;

  return (
    <>
      <a href="#galeria" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2">Saltar a la galería</a>

      <header className="sticky top-0 z-40 bg-carbon/95 text-papel backdrop-blur">
        <div className="contenedor flex h-16 items-center justify-between gap-4">
          <a href="#inicio"><img src="./logo.png" width={600} height={182} alt="DRECA Studio" className="h-8 w-auto" /></a>
          <nav aria-label="Principal" className="hidden items-center gap-7 text-sm font-semibold md:flex">
            <a href="#servicios" className="hover:text-verde">Servicios</a>
            <a href="#galeria" className="hover:text-verde">Galería</a>
            <a href="#invitaciones" className="hover:text-verde">Invitaciones</a>
            <a href="#frank" className="hover:text-verde">Frank</a>
          </nav>
          <a href={wa('Hola Frank, quiero una cotización.')} className="btn-verde px-4 py-2.5 text-sm" target="_blank" rel="noopener"><Icono d={iChat} className="h-4 w-4" /> Cotizar</a>
        </div>
      </header>

      <main id="inicio">
        <section className="bg-carbon text-papel">
          <div className="contenedor grid items-end gap-10 pb-14 pt-10 lg:grid-cols-[1.1fr_1fr] lg:pb-20 lg:pt-16">
            <div className="lg:pb-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-verde sm:tracking-[0.24em]">Fotografía y video profesional · CDMX</p>
              <h1 className="mt-5 text-[2.5rem] sm:text-6xl lg:text-7xl">Bodas, XV años, sesiones y eventos <span className="text-verde">bien contados</span>.</h1>
              <p className="mt-6 max-w-lg text-lg text-niebla">Foto y video con Frank, de DRECA Studio: de tu familia en estudio a la conferencia de tu empresa. 4.9 de 5 en Google.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={wa('Hola Frank, quiero una cotización para mi evento.')} className="btn-verde" target="_blank" rel="noopener"><Icono d={iChat} /> Solicita una cotización</a>
                <a href="#galeria" className="btn-linea"><Icono d={iCam} /> Ver galería</a>
              </div>
            </div>
            <Foto n="norma-y-bruna-47" alt="Retrato en blanco y negro de una mamá con su bebé" eager className="aspect-[4/3] w-full rounded-2xl object-cover" />
          </div>
        </section>

        <section id="servicios" className="contenedor py-16 md:py-24">
          <p className="eyebrow">Servicios</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">¿Qué vamos a fotografiar?</h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-tinta/10 bg-tinta/10 sm:grid-cols-2 lg:grid-cols-5">
            {servicios.map((s, i) => (
              <a key={s.nombre} href={wa(`Hola Frank, quiero cotizar: ${s.nombre}.`)} target="_blank" rel="noopener" className="group flex flex-col gap-3 bg-white p-6 transition-colors hover:bg-carbon hover:text-papel">
                <span className="font-mono text-sm text-gris group-hover:text-verde">0{i + 1}</span>
                <span className="font-[family-name:var(--font-display)] text-2xl font-extrabold lg:text-lg xl:text-xl">{s.nombre}</span>
                <span className="text-sm text-gris group-hover:text-niebla">{s.texto}</span>
                <span className="mt-auto pt-3 text-sm font-semibold text-verde-osc group-hover:text-verde">Cotizar →</span>
              </a>
            ))}
          </div>
        </section>

        <section id="galeria" className="bg-white py-16 md:py-24">
          <div className="contenedor">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow">Galería</p>
                <h2 className="mt-3 text-4xl sm:text-5xl">Su trabajo, por mundo</h2>
              </div>
              <div className="flex flex-wrap gap-2" role="group" aria-label="Galería">
                {galerias.map((x) => <button key={x.id} type="button" className="chip" aria-pressed={gal === x.id} onClick={() => setGal(x.id)}>{x.nombre}</button>)}
              </div>
            </div>
            <div className="mt-10 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
              {g.fotos.map((f) => <Foto key={f.n} n={f.n} alt={f.alt} className="w-full break-inside-avoid rounded-lg" />)}
            </div>
          </div>
        </section>

        <section id="invitaciones" className="contenedor py-16 md:py-24">
          <p className="eyebrow">Invitaciones digitales</p>
          <h2 className="mt-3 text-[2rem] sm:text-5xl">Tu invitación, en vivo en el celular</h2>
          <p className="mt-3 mb-10 max-w-2xl text-gris">Escribe los datos de tu evento, elige el formato y mira cómo se ve antes de pedirla. Desde $250.</p>
          <InvitacionEnVivo />
        </section>

        <section id="frank" className="bg-carbon py-16 text-papel md:py-24">
          <div className="contenedor grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-verde">Quién está detrás de la cámara</p>
              <h2 className="mt-3 text-4xl sm:text-5xl">Frank</h2>
              {bio.map((b) => <p key={b} className="mt-4 text-niebla">{b}</p>)}
            </div>
            <div>
              <p className="font-[family-name:var(--font-display)] text-6xl font-extrabold text-verde">{negocio.google.calificacion}<span className="text-2xl text-niebla"> / 5</span></p>
              <p className="text-sm text-niebla">en Google, con {negocio.google.resenas} reseñas</p>
              <div className="mt-6 grid gap-4">
                {resenas.map((r) => (
                  <figure key={r.autor} className="rounded-xl bg-carbon-2 p-5">
                    <blockquote className="text-papel">“{r.texto}”</blockquote>
                    <figcaption className="mt-2 text-sm text-niebla">{r.autor}, en Google</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-verde-osc py-14 text-white">
          <div className="contenedor flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl">Cuéntale a Frank de tu evento</h2>
              <p className="mt-2 text-white/85">WhatsApp {negocio.whatsappTexto} · {negocio.ciudad} · <a href={negocio.instagram} className="underline underline-offset-4" target="_blank" rel="noopener">Instagram</a> · <a href={negocio.facebook} className="underline underline-offset-4" target="_blank" rel="noopener">Facebook</a></p>
            </div>
            <a href={wa('Hola Frank, quiero una cotización para mi evento.')} className="btn bg-white text-verde-osc hover:bg-papel" target="_blank" rel="noopener"><Icono d={iChat} /> Escribir por WhatsApp</a>
          </div>
        </section>
      </main>

      <footer className="bg-carbon pb-24 pt-8 text-sm text-niebla md:pb-8">
        <div className="contenedor flex flex-col justify-between gap-2 sm:flex-row">
          <p>© {new Date().getFullYear()} {negocio.nombre}</p>
          <p>Fotografía y video profesional · {negocio.ciudad}</p>
        </div>
      </footer>

      <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/10 bg-carbon text-sm font-semibold text-papel md:hidden">
        <a href={`tel:+52${negocio.whatsappTexto.replace(/ /g, '')}`} className="flex flex-col items-center gap-1 py-2.5"><Icono d={iTel} /> Llamar</a>
        <a href={wa('Hola Frank, quiero una cotización.')} className="flex flex-col items-center gap-1 bg-verde py-2.5 text-carbon" target="_blank" rel="noopener"><Icono d={iChat} /> WhatsApp</a>
        <a href={negocio.mapa} className="flex flex-col items-center gap-1 py-2.5" target="_blank" rel="noopener"><Icono d={iPin} /> Mapa</a>
      </nav>
    </>
  );
}
