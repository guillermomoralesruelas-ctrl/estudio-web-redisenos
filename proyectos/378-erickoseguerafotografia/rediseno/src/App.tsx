import { useState } from 'react';
import { negocio, wa, waHola, foto, archivo, ciudades, servicios, galeria, historias, pesos } from './data/content';

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

function IconoIg({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function Encabezado() {
  const enlaces: [string, string][] = [['#portafolio', 'Portafolio'], ['#precios', 'Precios'], ['#carta', 'Escríbele'], ['#sobre-mi', 'Sobre mí']];
  return (
    <header className="oscuro sticky top-0 z-40 border-b border-white/10 bg-noche/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Erick Oseguera, inicio">
          <img src={archivo('hoja.png')} alt="" width={18} height={36} className="h-9 w-auto" />
          <span className="font-display text-2xl tracking-[0.12em] text-papel">ERICK OSEGUERA</span>
        </a>
        <nav aria-label="Secciones" className="hidden gap-7 text-[0.85rem] uppercase tracking-[0.16em] lg:flex">
          {enlaces.map(([h, t]) => <a key={h} href={h} className="hover:text-oro">{t}</a>)}
        </nav>
        <a href={waHola} className="btn hidden !min-h-10 !py-2 !text-[0.8rem] sm:inline-flex" {...externo}><IconoWa />Disponibilidad</a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="oscuro relative isolate overflow-hidden">
      <img src={foto('pareja-pastizal')} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover object-[50%_40%]" fetchPriority="high" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-noche via-noche/60 to-noche/20" />
      <div className="contenedor flex min-h-[84vh] flex-col justify-end pb-14 pt-32 sm:pb-20">
        <p className="antetitulo">Fotografía y video · Con base en San Miguel de Allende</p>
        <h1 className="mt-4 max-w-3xl text-[3.2rem] sm:text-[5.2rem]">Fotógrafo de bodas en México</h1>
        <p className="mt-5 max-w-xl text-lg text-papel/90">
          Una narrativa nostálgica y poética: luces y sombras que cuentan la historia de su boda, desde los preparativos más íntimos hasta la fiesta más desenfrenada.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#carta" className="btn">Escríbele a Erick</a>
          <a href="#portafolio" className="btn-claro">Ver su trabajo</a>
        </div>
      </div>
    </section>
  );
}

function Portafolio() {
  return (
    <section id="portafolio" className="py-16 sm:py-24">
      <div className="contenedor">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="antetitulo">Bodas reales en su portafolio</p>
            <h2 className="mt-3 text-5xl sm:text-6xl">La poesía de la vida está en los detalles más pequeños</h2>
          </div>
          <p className="text-gris">Cada historia de amor es única. Su meta es atrapar esas chispas en cada captura y construir una cronología visual de la esencia del amor que une a cada pareja.</p>
        </div>
        <div className="mt-10 grid grid-flow-dense grid-cols-2 gap-3 md:grid-cols-3">
          {galeria.map((g) => (
            <figure key={g.f} className={`overflow-hidden rounded-sm bg-noche ${g.ancho ? 'col-span-2' : ''}`}>
              <img src={foto(g.f)} alt={g.alt} loading="lazy" className={`h-full w-full object-cover ${g.ancho ? 'aspect-[3/2]' : 'aspect-[2/3]'}`} />
            </figure>
          ))}
        </div>
        <div className="mt-10 border-t border-tinta/15 pt-6">
          <p className="text-[0.85rem] uppercase tracking-[0.2em] text-gris">Historias en su sitio</p>
          <p className="mt-3 font-display text-2xl italic leading-snug text-sepia">{historias.join(' · ')}</p>
          <a href={`${negocio.sitio}portfolio/`} className="enlace mt-4 inline-block" {...externo}>Ver las historias completas</a>
        </div>
      </div>
    </section>
  );
}

function Precios() {
  return (
    <section id="precios" className="bg-carta py-16 sm:py-24">
      <div className="contenedor">
        <p className="antetitulo">Precios de fotografía para tu boda</p>
        <h2 className="mt-3 max-w-2xl text-5xl sm:text-6xl">Desde una sesión hasta la boda completa</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {servicios.map((s) => (
            <article key={s.id} className="flex flex-col overflow-hidden rounded-sm border border-tinta/10 bg-papel">
              <img src={foto(s.foto)} alt={s.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-4xl">{s.nombre}</h3>
                <p className="mt-1 text-[0.85rem] uppercase tracking-[0.2em] text-gris">Desde <span className="font-display text-2xl normal-case tracking-normal text-sepia">{pesos(s.desde)}</span></p>
                <p className="mt-3 text-[0.97rem] text-gris">{s.texto}</p>
                <ul className="mt-4 space-y-1.5 text-[0.95rem]">
                  {s.puntos.map((p) => <li key={p} className="flex gap-2"><span aria-hidden="true" className="text-oro">—</span>{p}</li>)}
                </ul>
                <a href={wa(`¡Hola Erick! Quiero información de ${s.nombre}.`)} className="enlace mt-auto pt-5" {...externo}>Pedir cotización</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const hoyTexto = new Date().toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' });
const hoyCorto = new Date().toLocaleDateString('es-MX', { day: 'numeric', month: 'short', year: 'numeric' }).replace('.', '');

function Carta() {
  const [uno, setUno] = useState('');
  const [dos, setDos] = useState('');
  const [servicio, setServicio] = useState(servicios[0].id);
  const [ciudad, setCiudad] = useState(ciudades[0]);
  const [otra, setOtra] = useState('');
  const [fecha, setFecha] = useState('');
  const [historia, setHistoria] = useState('');
  const hoy = new Date().toISOString().slice(0, 10);

  const lugar = ciudad === 'Otro destino' ? (otra.trim() || 'otro destino') : ciudad;
  const nombres = uno.trim() && dos.trim() ? `${uno.trim()} y ${dos.trim()}` : uno.trim() || dos.trim() || '';
  const fechaTexto = fecha ? new Date(`${fecha}T12:00:00`).toLocaleDateString('es-MX', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) : '';
  const cuando = fechaTexto ? `el ${fechaTexto}` : '(fecha por definir)';
  const plan =
    servicio === 'boda' ? `Nos casamos ${cuando} en ${lugar} y queremos que cuentes nuestra historia.`
      : servicio === 'love' ? `Queremos una Love Session en ${lugar}${fechaTexto ? `, cerca del ${fechaTexto}` : ''}.`
        : `Queremos nuestra sesión Save the Date en ${lugar}${fechaTexto ? `; la boda es el ${fechaTexto}` : ''}.`;
  const conocimos = historia.trim() ? `Nos conocimos ${historia.trim().replace(/^nos conocimos\s*/i, '').replace(/\.$/, '')}.` : '';
  const pregunta = servicio === 'boda' ? '¿Tienes la fecha libre?' : '¿Cuándo tienes espacio?';
  const texto = ['Querido Erick:', `Somos ${nombres || '______ y ______'}. ${plan}`, conocimos, pregunta, `Con cariño, ${nombres || '______'}`].filter(Boolean);
  const chip = (activo: boolean) => `rounded-full border px-4 py-2 text-[0.9rem] transition-colors ${activo ? 'border-oro bg-oro text-noche' : 'border-papel/25 hover:border-oro'}`;

  return (
    <section id="carta" className="oscuro py-16 sm:py-24">
      <div className="contenedor">
        <p className="antetitulo">Contacto</p>
        <h2 className="mt-3 max-w-3xl text-5xl sm:text-6xl">Cada historia empieza con un saludo</h2>
        <p className="mt-4 max-w-2xl">
          A Erick le emociona descubrir cómo se cruzaron sus caminos. Escríbanle una carta: sus nombres, la fecha, la ciudad y cómo se conocieron. Sale por WhatsApp tal como la ven.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-3">
              <label className="block"><span className="text-[0.9rem] font-medium text-papel">Tu nombre</span><input className="campo" value={uno} onChange={(e) => setUno(e.target.value)} maxLength={30} autoComplete="given-name" /></label>
              <label className="block"><span className="text-[0.9rem] font-medium text-papel">Tu pareja</span><input className="campo" value={dos} onChange={(e) => setDos(e.target.value)} maxLength={30} /></label>
            </div>
            <fieldset>
              <legend className="text-[0.9rem] font-medium text-papel">¿Qué quieren?</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {servicios.map((s) => <button key={s.id} type="button" aria-pressed={servicio === s.id} onClick={() => setServicio(s.id)} className={chip(servicio === s.id)}>{s.nombre}</button>)}
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-[0.9rem] font-medium text-papel">¿Dónde?</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {[...ciudades, 'Otro destino'].map((c) => <button key={c} type="button" aria-pressed={ciudad === c} onClick={() => setCiudad(c)} className={chip(ciudad === c)}>{c}</button>)}
              </div>
              {ciudad === 'Otro destino' && (
                <label className="mt-3 block"><span className="sr-only">Destino</span><input className="campo" placeholder="Ciudad o lugar" value={otra} onChange={(e) => setOtra(e.target.value)} maxLength={40} /></label>
              )}
            </fieldset>
            <label className="block max-w-xs"><span className="text-[0.9rem] font-medium text-papel">Fecha</span><input type="date" min={hoy} className="campo [color-scheme:dark]" value={fecha} onChange={(e) => setFecha(e.target.value)} /></label>
            <label className="block">
              <span className="text-[0.9rem] font-medium text-papel">¿Cómo se conocieron? <span className="text-humo">(opcional)</span></span>
              <textarea className="campo min-h-24" maxLength={180} value={historia} onChange={(e) => setHistoria(e.target.value)} placeholder="en la universidad, en un viaje, por una amiga…" />
            </label>
          </form>

          <div className="lg:sticky lg:top-24">
            <div className="carta" aria-live="polite">
              <div className="flex items-start justify-between gap-4">
                <p className="text-[0.9rem] text-gris">{hoyTexto}</p>
                <div className="matasellos" aria-hidden="true">
                  <img src={archivo('hoja.png')} alt="" className="h-9 w-auto opacity-80 [filter:brightness(0)_saturate(100%)_invert(22%)_sepia(40%)_saturate(2000%)_hue-rotate(345deg)]" />
                  <span className="mt-1 px-2">{lugar}</span>
                  <span>{hoyCorto}</span>
                </div>
              </div>
              {texto.map((t, i) => <p key={i} className={`${i === 0 ? 'mt-2' : i === texto.length - 1 ? 'mt-6' : 'mt-2'} text-[1.02rem]`}>{t}</p>)}
            </div>
            <a href={wa(texto.join('\n'))} className="btn mt-6 w-full" {...externo}><IconoWa />Enviar la carta por WhatsApp</a>
            <p className="mt-3 text-center text-[0.85rem]">O escríbele a <a href={`mailto:${negocio.correo}?subject=${encodeURIComponent('Nuestra boda')}&body=${encodeURIComponent(texto.join('\n'))}`} className="enlace">{negocio.correo}</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SobreMi() {
  return (
    <section id="sobre-mi" className="py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <img src={foto('ceremonia-bosque')} alt="Ceremonia de boda entre pinos con camino de pétalos rojos" loading="lazy" className="aspect-[2/3] w-full rounded-sm object-cover" />
        <div>
          <p className="antetitulo">Sobre mí · Human. Friend. Buddhist. Disruptive.</p>
          <h2 className="mt-3 text-5xl sm:text-6xl">Un narrador de historias con cámara</h2>
          <p className="mt-5">
            Erick comenzó su viaje fotográfico a los 17 años y documenta bodas desde 2016. Su mirada es nostálgica, poética y bohemia: hecha de libros, películas, viajes y de las personas que ama. Trabaja con base en San Miguel de Allende y viaja a bodas en todo el país.
          </p>
          <blockquote className="mt-8 border-l-2 border-oro pl-5">
            <p className="font-display text-3xl italic leading-snug text-sepia">“La vida no es la que uno vivió, sino la que recuerda y cómo la recuerda para contarla.”</p>
            <footer className="mt-2 text-[0.9rem] uppercase tracking-[0.18em] text-gris">Gabriel García Márquez</footer>
          </blockquote>
          <p className="mt-8 text-[0.95rem] text-gris">Fotógrafos de boda en {ciudades.join(', ')}. Disponibles en todo el país.</p>
          <p className="mt-2 text-[0.95rem] text-gris">Su sitio muestra el sello “Junebug Weddings Approved Vendor 2024”.</p>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="oscuro relative isolate overflow-hidden py-16 sm:py-24">
      <img src={foto('silueta-mar')} alt="" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-noche/80" />
      <div className="contenedor text-center">
        <p className="antetitulo">Based in San Miguel de Allende · capturing stories all over Mexico</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-5xl sm:text-6xl">Su agenda se llena rápido. ¿Verificamos disponibilidad?</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={waHola} className="btn" {...externo}><IconoWa />WhatsApp {negocio.telefono}</a>
          <a href={negocio.telefonoHref} className="btn-claro"><IconoTel />Llamar</a>
        </div>
        <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-papel">
          <li><a href={`mailto:${negocio.correo}`} className="hover:text-oro">{negocio.correo}</a></li>
          <li><a href={negocio.instagram} className="inline-flex items-center gap-2 hover:text-oro" {...externo}><IconoIg />{negocio.instagramUsuario}</a></li>
          <li><a href={negocio.facebook} className="hover:text-oro" {...externo}>Facebook</a></li>
        </ul>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro border-t border-white/10 pb-24 pt-8 text-[0.85rem] md:pb-8">
      <div className="contenedor flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {negocio.marca}. San Miguel de Allende, Guanajuato.</p>
        <a href={negocio.sitio} className="enlace" {...externo}>Sitio actual</a>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-noche text-[0.78rem] font-medium text-papel md:hidden">
      <a href={waHola} className="flex flex-col items-center gap-1 bg-oro py-3 text-noche" {...externo}><IconoWa />WhatsApp</a>
      <a href={negocio.telefonoHref} className="flex flex-col items-center gap-1 py-3"><IconoTel />Llamar</a>
      <a href="#carta" className="flex flex-col items-center gap-1 py-3"><IconoCarta />Escribirle</a>
    </nav>
  );
}

function IconoCarta({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export default function App() {
  return (
    <>
      <a href="#portafolio" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded focus:bg-papel focus:px-3 focus:py-2">Saltar al contenido</a>
      <Encabezado />
      <main>
        <Portada />
        <Portafolio />
        <Precios />
        <Carta />
        <SobreMi />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
