import { useState } from 'react';
import {
  archivo, carta, escuela, eventos, foto, horario, loyalty, negocio, opcionesCertificado, testimonios, valores, wa, waCita,
} from './data/content';

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


const secciones = [
  ['#servicios', 'Servicios'],
  ['#certificados', 'Certificados'],
  ['#promociones', 'Promociones'],
  ['#nosotros', 'Nosotros'],
  ['#contacto', 'Contacto'],
] as const;

function Encabezado() {
  return (
    <header className="oscuro sticky top-0 z-40 border-b border-hoja/15 bg-bosque/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" aria-label="GreenSpa, ir al inicio">
          <img src={archivo('logo-blanco.svg')} alt="GreenSpa" width={150} height={30} className="h-6 w-auto" />
        </a>
        <nav aria-label="Secciones" className="hidden lg:block">
          <ul className="flex gap-7 text-[0.98rem]">
            {secciones.map(([href, texto]) => <li key={href}><a href={href} className="text-crema/85 hover:text-crema">{texto}</a></li>)}
          </ul>
        </nav>
        <a href={waCita} className="btn hidden sm:inline-flex" target="_blank" rel="noopener"><IconoWa /> Agendar cita</a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="oscuro relative overflow-hidden">
      <img src={foto('hoja-b')} alt="" aria-hidden="true" width={420} height={252} className="pointer-events-none absolute -right-16 top-6 w-72 opacity-30 sm:w-96" />
      <div className="contenedor grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <div>
          <p className="antetitulo">Bienvenidos · Welcome · Zapopan, Jalisco</p>
          <h1 className="mt-4 text-[2.8rem] sm:text-[4rem]">Masajes y bienestar en GreenSpa</h1>
          <p className="mt-5 max-w-xl text-[1.15rem]">
            Desde {negocio.desde}, masajes, faciales, días de spa, corporales y reductivos para que cada persona que confíe su
            bienestar viva una experiencia profesional y de la más alta calidad.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waCita} className="btn" target="_blank" rel="noopener"><IconoWa /> Agendar por WhatsApp</a>
            <a href="#servicios" className="btn-claro">Ver servicios y precios</a>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-hoja/20 pt-6">
            <div><dt className="text-[0.85rem]">Masaje de 1 h</dt><dd className="font-display text-[1.6rem] text-hoja">$1,200</dd></div>
            <div><dt className="text-[0.85rem]">Faciales desde</dt><dd className="font-display text-[1.6rem] text-hoja">$1,050</dd></div>
            <div><dt className="text-[0.85rem]">Martes a viernes</dt><dd className="font-display text-[1.6rem] text-hoja">9 a 21 h</dd></div>
          </dl>
        </div>
        <div className="relative">
          <img src={foto('terapeuta-masaje')} alt="Terapeuta de GreenSpa con uniforme blanco dando un masaje de pierna" width={1000} height={1000}
            fetchPriority="high" className="aspect-square w-full rounded-[2rem] object-cover" />
          <img src={foto('hoja-a')} alt="" aria-hidden="true" width={420} height={437} className="pointer-events-none absolute -bottom-10 -left-8 w-32 sm:w-40" />
        </div>
      </div>
    </section>
  );
}

function Servicios() {
  const [activa, setActiva] = useState(carta[0].id);
  const cat = carta.find((c) => c.id === activa)!;
  return (
    <section id="servicios" className="py-20 sm:py-24">
      <div className="contenedor">
        <div className="max-w-2xl">
          <p className="antetitulo">Servicios</p>
          <h2 className="mt-3 text-[2.2rem] sm:text-[2.8rem]">La carta completa, con precios</h2>
          <p className="mt-3 text-gris">Elija una categoría. Los precios son los de su página de servicios.</p>
        </div>
        <div role="tablist" aria-label="Categorías de servicios" className="mt-8 flex flex-wrap gap-2">
          {carta.map((c) => (
            <button key={c.id} role="tab" id={`tab-${c.id}`} aria-selected={c.id === activa} aria-controls="panel-servicios" onClick={() => setActiva(c.id)}
              className={`min-h-[44px] rounded-full px-5 py-2 text-[0.98rem] font-bold transition-colors ${c.id === activa ? 'bg-salvia text-crema' : 'border-2 border-salvia/30 text-salvia hover:border-salvia'}`}>
              {c.nombre}
            </button>
          ))}
        </div>
        <div id="panel-servicios" role="tabpanel" aria-labelledby={`tab-${activa}`} className="mt-8 rounded-3xl bg-papel p-6 sm:p-9">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="text-[1.9rem]">{cat.nombre}{cat.ingles ? <span className="text-gris"> · {cat.ingles}</span> : null}</h3>
            {cat.intro ? <p className="font-bold text-oro">{cat.intro}</p> : null}
          </div>
          <ul className="mt-6 grid gap-x-10 md:grid-cols-2">
            {cat.servicios.map((s) => (
              <li key={s.nombre} className="border-b border-salvia/15 py-3.5">
                <div className="flex items-baseline gap-3">
                  <p className="font-bold">{s.nombre}</p>
                  <span className="flex-1 border-b border-dotted border-salvia/35" aria-hidden="true" />
                  {s.precio ? <p className="shrink-0 font-bold text-oro">{s.precio}</p> : <p className="shrink-0 text-[0.92rem] text-gris">Consultar</p>}
                </div>
                {(s.duracion || s.nota) ? <p className="mt-0.5 text-[0.95rem] text-gris">{[s.duracion, s.nota].filter(Boolean).join(' · ')}</p> : null}
              </li>
            ))}
          </ul>
          <a href={wa(`Hola, quiero agendar una cita en GreenSpa para un servicio de ${cat.nombre.toLowerCase()}: (servicio), el día (…).`)}
            className="btn-salvia mt-8" target="_blank" rel="noopener"><IconoWa /> Agendar {cat.nombre.toLowerCase()}</a>
        </div>
      </div>
    </section>
  );
}

function Certificado() {
  const [para, setPara] = useState('');
  const [de, setDe] = useState('');
  const [opcion, setOpcion] = useState(0);
  const [mensaje, setMensaje] = useState('');
  const o = opcionesCertificado[opcion];
  const texto = `Hola, me interesa un certificado de regalo de GreenSpa.\n` +
    `Servicio: ${o.nombre} (${o.precio} según su sitio).\n` +
    `Para: ${para.trim() || '(nombre)'}\nDe: ${de.trim() || '(nombre)'}` +
    (mensaje.trim() ? `\nMensaje: ${mensaje.trim()}` : '') + `\n¿Me ayudan a cotizarlo?`;
  return (
    <section id="certificados" className="oscuro py-20 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14">
        <div>
          <p className="antetitulo">Certificados de regalo</p>
          <h2 className="mt-3 text-[2.2rem] sm:text-[2.8rem]">Regalar bienestar</h2>
          <p className="mt-4">
            Uno de los detalles que más hacen feliz a quienes más quieres: para cumpleaños, Día de las Madres, Navidad, San
            Valentín o simplemente para agradecer. El certificado tiene 3 meses de vigencia para agendar.
          </p>
          <form className="mt-8 grid gap-4 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
            <label className="text-[0.95rem] font-bold">Para
              <input className="campo font-normal" value={para} onChange={(e) => setPara(e.target.value)} placeholder="¿A quién se lo regalas?" maxLength={40} />
            </label>
            <label className="text-[0.95rem] font-bold">De
              <input className="campo font-normal" value={de} onChange={(e) => setDe(e.target.value)} placeholder="Tu nombre" maxLength={40} />
            </label>
            <label className="text-[0.95rem] font-bold sm:col-span-2">Servicio
              <select className="campo font-normal" value={opcion} onChange={(e) => setOpcion(Number(e.target.value))}>
                {opcionesCertificado.map((x, i) => <option key={x.nombre} value={i} className="bg-bosque">{x.nombre} · {x.precio}</option>)}
              </select>
            </label>
            <label className="text-[0.95rem] font-bold sm:col-span-2">Mensaje (opcional)
              <input className="campo font-normal" value={mensaje} onChange={(e) => setMensaje(e.target.value)} placeholder="Feliz cumpleaños, mamá" maxLength={70} />
            </label>
          </form>
        </div>

        <div>
          <div className="certificado" aria-live="polite">
            <img src={foto('hoja-a')} alt="" aria-hidden="true" width={420} height={437} className="pointer-events-none absolute -right-6 -top-6 w-28 rotate-12 opacity-90" />
            <p className="antetitulo">GreenSpa · Certificado de regalo</p>
            <p className="mt-5 font-display text-[1.05rem] text-gris">Para</p>
            <p className="font-display text-[2rem] leading-tight">{para.trim() || 'Alguien especial'}</p>
            <p className="mt-5 text-gris">Un regalo de <span className="font-bold text-tinta">{de.trim() || 'ti'}</span></p>
            <div className="mt-6 rounded-xl bg-crema px-5 py-4">
              <p className="font-bold">{o.nombre}</p>
              <p className="text-[0.95rem] text-oro">{o.precio} según su lista de precios</p>
            </div>
            {mensaje.trim() ? <p className="mt-5 font-display text-[1.25rem] italic text-salvia">“{mensaje.trim()}”</p> : null}
            <p className="mt-6 border-t border-salvia/20 pt-4 text-[0.9rem] text-gris">Vigencia de 3 meses para agendar. {negocio.direccion}.</p>
          </div>
          <a href={wa(texto)} className="btn mt-6 w-full sm:w-auto" target="_blank" rel="noopener"><IconoWa /> Cotizar este certificado</a>
        </div>
      </div>
    </section>
  );
}

function Promociones() {
  return (
    <section id="promociones" className="py-20 sm:py-24">
      <div className="contenedor">
        <p className="antetitulo">Promociones</p>
        <h2 className="mt-3 text-[2.2rem] sm:text-[2.8rem]">Amamos consentirte</h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <article className="rounded-3xl bg-papel p-7">
            <h3 className="text-[1.6rem]">Programa Green Loyalty</h3>
            <p className="mt-1 font-display text-[1.6rem] text-oro">{loyalty.precio}</p>
            <ul className="mt-4 space-y-2 text-gris">{loyalty.beneficios.map((b) => <li key={b} className="flex gap-2"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-salvia" aria-hidden="true" />{b}</li>)}</ul>
            <a href={wa('Hola, quiero información del programa Green Loyalty de GreenSpa.')} className="enlace mt-5 inline-block" target="_blank" rel="noopener">Quiero Green Loyalty</a>
          </article>
          <article className="rounded-3xl bg-papel p-7">
            <h3 className="text-[1.6rem]">Eventos especiales</h3>
            <p className="mt-3 text-gris">{eventos.tipos.join(' · ')} y más.</p>
            <p className="mt-4 font-bold">{eventos.paquete}</p>
            <p className="font-display text-[1.4rem] text-oro">{eventos.detalle}</p>
            <a href={wa('Hola, quiero cotizar un evento en GreenSpa: tipo de evento (…), fecha (…) y número de personas (…).')} className="enlace mt-5 inline-block" target="_blank" rel="noopener">Cotizar un evento</a>
          </article>
          <article className="rounded-3xl bg-salvia p-7 text-crema">
            <h3 className="text-[1.6rem] !text-crema">Tu mes de cumpleaños</h3>
            <p className="mt-2 font-display text-[3rem] leading-none text-hoja">−15%</p>
            <p className="mt-3">En todos sus servicios, durante todo tu mes de cumpleaños.</p>
            <a href={wa('Hola, es mi mes de cumpleaños y quiero agendar una cita en GreenSpa con el 15% de descuento.')} className="btn mt-6" target="_blank" rel="noopener"><IconoWa /> Agendar</a>
          </article>
        </div>
      </div>
    </section>
  );
}

function Nosotros() {
  return (
    <section id="nosotros" className="bg-papel py-20 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-14">
        <div className="grid grid-cols-2 gap-4 lg:sticky lg:top-24">
          <img src={foto('equipo-fachada')} alt="El equipo de GreenSpa con uniforme verde frente a la fachada con el letrero GreenSpa" width={685} height={824} loading="lazy" className="aspect-[3/4] w-full rounded-3xl object-cover" />
          <img src={foto('terapeuta-facial')} alt="Terapeuta de GreenSpa haciendo un tratamiento facial con aparatología junto a una ventana en arco" width={668} height={891} loading="lazy" className="mt-10 aspect-[3/4] w-full rounded-3xl object-cover" />
        </div>
        <div>
          <p className="antetitulo">Nosotros</p>
          <h2 className="mt-3 text-[2.2rem] sm:text-[2.8rem]">Amamos lo que hacemos y te lo demostraremos en cada visita</h2>
          <p className="mt-4 text-gris">GreenSpa nació en {negocio.desde} con la intención de que cada persona que les confíe su bienestar viva una experiencia profesional y de la más alta calidad.</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {valores.map((v) => <li key={v} className="rounded-2xl bg-crema px-4 py-3 font-bold text-salvia">{v}</li>)}
          </ul>
          <div className="mt-10 space-y-5">
            {testimonios.map((t) => (
              <figure key={t.autor} className="border-l-4 border-hoja pl-5">
                <blockquote className="font-display text-[1.2rem] leading-snug">“{t.texto}”</blockquote>
                <figcaption className="mt-1 text-[0.95rem] text-gris">{t.autor}, en su página de testimonios</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Escuela() {
  return (
    <section id="escuela" className="py-16">
      <div className="contenedor grid gap-6 rounded-3xl border-2 border-salvia/25 p-7 sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <p className="antetitulo">Escuela de masajes</p>
          <h2 className="mt-2 text-[1.9rem]">Aprende con quienes te dan el masaje</h2>
          <p className="mt-3 text-gris">{escuela.texto}</p>
        </div>
        <div>
          <ul className="divide-y divide-salvia/15">
            {escuela.opciones.map(([n, p]) => <li key={n} className="flex justify-between py-2.5"><span>{n}</span><span className="font-bold text-oro">{p}</span></li>)}
          </ul>
          <a href={negocio.escuela} className="enlace mt-4 inline-block" target="_blank" rel="noopener">escuelademasajesgreenspa.mx</a>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="oscuro py-20 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="antetitulo">Contacto · Citas</p>
          <h2 className="mt-3 text-[2.2rem] sm:text-[2.8rem]">Te esperamos en Zapopan</h2>
          <p className="mt-4 flex gap-2"><IconoPin className="mt-1 h-5 w-5 shrink-0 text-hoja" />{negocio.direccion}</p>
          <a href={negocio.mapa} className="enlace mt-2 inline-block" target="_blank" rel="noopener">Abrir en Google Maps</a>
          <dl className="mt-7 grid gap-2">
            {horario.map(([d, h]) => <div key={d} className="flex justify-between gap-4 border-b border-crema/10 pb-2"><dt>{d}</dt><dd className="font-bold text-crema">{h}</dd></div>)}
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waCita} className="btn" target="_blank" rel="noopener"><IconoWa /> {negocio.whatsappTexto}</a>
            <a href={negocio.telefonoHref} className="btn-claro"><IconoTel /> {negocio.telefono}</a>
          </div>
          <a href={`mailto:${negocio.correo}`} className="enlace mt-5 inline-block">{negocio.correo}</a>
        </div>
        <div className="relative min-h-[340px] overflow-hidden rounded-3xl bg-salvia/30">
          <a href={negocio.mapa} target="_blank" rel="noopener" className="enlace absolute inset-0 grid place-items-center p-6 text-center">Ver la ubicación en Google Maps</a>
          <iframe src={negocio.mapaIframe} title="Mapa de Google con la ubicación de GreenSpa" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            className="relative h-full min-h-[340px] w-full border-0" />
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-tinta pb-28 pt-10 text-crema/80 lg:pb-10">
      <div className="contenedor flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <img src={archivo('logo-blanco.svg')} alt="GreenSpa" width={150} height={30} loading="lazy" className="h-6 w-auto" />
        <p className="text-[0.95rem]">Masajes · Faciales · Días spa · Corporales · Reductivos. Zapopan, Jalisco.</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-hoja/25 bg-bosque text-crema lg:hidden">
      <a href={waCita} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 bg-hoja text-[0.9rem] font-bold text-bosque"><IconoWa />Agendar</a>
      <a href={negocio.telefonoHref} className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-bold"><IconoTel />Llamar</a>
      <a href={negocio.mapa} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-bold"><IconoPin />Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#principal" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-crema focus:px-4 focus:py-2">Saltar al contenido</a>
      <Encabezado />
      <main id="principal">
        <Portada />
        <Servicios />
        <Certificado />
        <Promociones />
        <Nosotros />
        <Escuela />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
