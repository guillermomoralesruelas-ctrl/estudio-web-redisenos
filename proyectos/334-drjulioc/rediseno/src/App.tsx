import { useState } from 'react';
import { atiende, credenciales, cuando, foto, idiomas, negocio, opiniones, proceso, terapias, wa, type Idioma } from './data/content';


function IconoWa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.2.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}
function IconoTel({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 3h4l2 5-3 2a11 11 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A18 18 0 0 1 3 5a2 2 0 0 1 2-2Z" /></svg>;
}
function IconoPin({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>;
}

const secciones = [['#mensaje', 'Agendar'], ['#doctor', 'El doctor'], ['#proceso', 'Proceso'], ['#contacto', 'Ubicación']] as const;
const waHola = wa('Hola, Dr. Julio. Me gustaría agendar una cita de valoración.');

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-niebla/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="leading-tight"><span className="block font-display text-[1.2rem] text-tinta">Dr. Julio Jiménez</span><span className="block text-[0.8rem] font-semibold text-azul">Psiquiatría</span></a>
        <nav aria-label="Secciones" className="hidden md:block">
          <ul className="flex gap-7">{secciones.map(([h, t]) => <li key={h}><a href={h} className="font-semibold text-pizarra hover:text-tinta">{t}</a></li>)}</ul>
        </nav>
        <a href={waHola} className="btn !min-h-[42px] !py-2" target="_blank" rel="noopener"><IconoWa /> <span className="hidden sm:inline">Agendar</span></a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="contenedor grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.15fr_1fr]">
      <div>
        <p className="font-semibold text-azul">Consulta presencial y en línea · solo adultos</p>
        <h1 className="mt-3 text-[2.7rem] sm:text-[4rem]">Psiquiatra en San Pedro Garza García y Monterrey</h1>
        <p className="mt-5 max-w-xl text-[1.12rem] text-pizarra">Un espacio seguro, empático y sin juicios, con terapias basadas en evidencia y, cuando es necesario, tratamiento farmacológico. Atiende en español, inglés y francés.</p>
        <ul className="mt-6 flex flex-wrap gap-2 text-[0.95rem]">
          {['Certificado por el Consejo Mexicano de Psiquiatría', 'Céd. Esp. 14039782'].map((t) => <li key={t} className="rounded-full bg-lavanda px-3 py-1 font-semibold">{t}</li>)}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#mensaje" className="btn">Escribir el primer mensaje</a>
          <a href={`tel:${negocio.tel}`} className="btn-linea"><IconoTel /> {negocio.telVisible}</a>
        </div>
      </div>
      <img src={foto('dr-consultorio')} alt="El Dr. Julio Jiménez de pie en su consultorio, con los brazos cruzados y sonriendo" width={681} height={1024} fetchPriority="high"
        className="mx-auto aspect-[4/5] w-full max-w-md rounded-[2rem] object-cover object-top" />
    </section>
  );
}

function Mensaje() {
  const [idioma, setIdioma] = useState<Idioma>('es');
  const [modo, setModo] = useState<'presencial' | 'enLinea'>('presencial');
  const [hora, setHora] = useState<'manana' | 'tarde' | 'cualquiera'>('cualquiera');
  const [para, setPara] = useState<'paraMi' | 'familiar'>('paraMi');
  const [reservar, setReservar] = useState(true);
  const t = idiomas[idioma];
  const texto = [t.saludo, `${t.cita} ${modo === 'presencial' ? t.presencial : t.enLinea}.`, t[para], t[hora], reservar ? t.motivo : '', t.cierre].filter(Boolean).join(' ');

  const grupo = <T extends string>(etiqueta: string, valor: T, opciones: [T, string][], set: (v: T) => void) => (
    <fieldset>
      <legend className="font-semibold">{etiqueta}</legend>
      <div className="mt-2 flex flex-wrap gap-2">
        {opciones.map(([v, n]) => <button key={v} type="button" className="chip" aria-pressed={valor === v} onClick={() => set(v)}>{n}</button>)}
      </div>
    </fieldset>
  );

  return (
    <section id="mensaje" className="bg-white py-16 sm:py-24">
      <div className="contenedor">
        <p className="font-semibold text-azul">Agendar una cita de valoración</p>
        <h2 className="mt-2 max-w-3xl text-[2.4rem] sm:text-[3.4rem]">El primer mensaje, sin tener que explicarlo todo</h2>
        <p className="mt-3 max-w-2xl text-pizarra">Escribir para pedir ayuda cuesta. Elige unas cuantas opciones y el mensaje queda listo para enviarlo por WhatsApp. El motivo lo puedes platicar en la consulta. Esta página no guarda nada.</p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="grid gap-6">
            {grupo('Idioma del mensaje', idioma, [['es', 'Español'], ['en', 'English'], ['fr', 'Français']], setIdioma)}
            {grupo('Consulta', modo, [['presencial', 'Presencial en San Pedro'], ['enLinea', 'En línea']], setModo)}
            {grupo('Horario que prefieres', hora, [['manana', 'Mañana'], ['tarde', 'Tarde'], ['cualquiera', 'El que haya']], setHora)}
            {grupo('La cita es para', para, [['paraMi', 'Mí'], ['familiar', 'Un familiar adulto']], setPara)}
            <label className="flex min-h-[44px] items-center gap-3 font-semibold">
              <input type="checkbox" checked={reservar} onChange={(e) => setReservar(e.target.checked)} className="h-5 w-5 accent-azul" />
              Prefiero contar el motivo en la consulta
            </label>
          </div>

          <div className="self-start rounded-[2rem] bg-[#e9e3d9] p-5 sm:p-7">
            <p className="text-center text-[0.85rem] font-semibold text-pizarra">Vista previa en WhatsApp · {negocio.whatsappVisible}</p>
            <div className="ml-auto mt-4 max-w-[26rem] rounded-2xl rounded-tr-sm bg-[#d9fdd3] p-4 text-[1rem] text-[#111b21] shadow-sm" lang={idioma} aria-live="polite">{texto}</div>
            <a href={wa(texto)} target="_blank" rel="noopener" className="btn mt-6 w-full"><IconoWa /> Enviar por WhatsApp</a>
            <p className="mt-3 text-center text-[0.9rem] text-pizarra">¿Prefieres llamar? <a href={`tel:${negocio.tel}`} className="enlace">{negocio.telVisible}</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Doctor() {
  return (
    <section id="doctor" className="py-16 sm:py-24">
      <div className="contenedor grid items-start gap-10 lg:grid-cols-[1fr_1.3fr]">
        <img src={foto('dr-escritorio')} alt="El Dr. Julio Jiménez escribiendo notas en su escritorio" width={1024} height={681} loading="lazy" className="aspect-[3/2] w-full rounded-[2rem] object-cover" />
        <div>
          <h2 className="text-[2.2rem] sm:text-[3rem]">Dr. Julio César Jiménez López</h2>
          <p className="mt-4 text-pizarra">Trabaja con un enfoque personalizado: integra terapias con respaldo científico y, cuando es necesario, tratamiento farmacológico, para ofrecer la opción más adecuada a cada persona.</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {credenciales.map((c) => (
              <li key={c.titulo} className="rounded-2xl bg-lavanda p-4">
                <strong className="block">{c.titulo}</strong>
                <span className="text-[0.95rem] text-pizarra">{c.lugar}</span>
                {c.dato && <span className="mt-1 block text-[0.9rem] font-semibold text-azul">{c.dato}</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Cuando() {
  return (
    <section className="oscuro py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-[2.2rem] sm:text-[3rem]">¿Cuándo acudir con un psiquiatra?</h2>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">{cuando.map((c) => <li key={c} className="flex gap-2"><span aria-hidden="true" className="text-cielo">—</span>{c}</li>)}</ul>
          <p className="mt-6 text-[0.95rem]">Si estás en crisis o en riesgo inmediato, llama al 911 o acude a urgencias.</p>
        </div>
        <div>
          <h3 className="text-[1.6rem] !text-niebla">Qué atiende</h3>
          <ul className="mt-4 flex flex-wrap gap-2">{atiende.map((a) => <li key={a} className="rounded-full border border-cielo/40 px-3 py-1">{a}</li>)}</ul>
          <img src={foto('dr-puerta')} alt="El Dr. Julio Jiménez en la puerta de su consultorio" width={768} height={1024} loading="lazy" className="mt-8 hidden aspect-[4/3] w-full rounded-[2rem] object-cover object-top md:block" />
        </div>
      </div>
    </section>
  );
}

function Proceso() {
  return (
    <section id="proceso" className="py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="text-[2.2rem] sm:text-[3rem]">Cómo es el proceso</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-4">
          {proceso.map((p, i) => (
            <li key={p.nombre} className="rounded-2xl bg-white p-5">
              <span className="font-display text-[2rem] text-azul">{i + 1}</span>
              <h3 className="mt-1 text-[1.2rem]">{p.nombre}</h3>
              <p className="mt-2 text-[0.95rem] text-pizarra">{p.texto}</p>
            </li>
          ))}
        </ol>
        <h3 className="mt-12 text-[1.6rem]">Tratamientos que puede ofrecerte</h3>
        <ul className="mt-4 grid gap-4 md:grid-cols-2">
          {terapias.map((t) => <li key={t.nombre} className="border-t border-tinta/15 pt-3"><strong>{t.nombre}</strong><p className="text-pizarra">{t.texto}</p></li>)}
        </ul>
      </div>
    </section>
  );
}

function Opiniones() {
  return (
    <section className="bg-lavanda py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="text-[2.2rem] sm:text-[3rem]">Lo que dicen sus pacientes del trato</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {opiniones.map((o) => (
            <li key={o.autor} className="rounded-2xl bg-white p-6">
              <blockquote>“{o.texto}”</blockquote>
              <p className="mt-2 font-semibold text-azul">{o.autor}</p>
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
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-[2.2rem] sm:text-[3rem]">Consultorio en San Pedro</h2>
          <p className="mt-4 flex gap-2 font-semibold"><IconoPin className="mt-1 h-5 w-5 shrink-0 text-azul" /><span>{negocio.edificio}<span className="block font-normal text-pizarra">{negocio.direccion}</span></span></p>
          <a href={negocio.mapa} target="_blank" rel="noopener" className="enlace mt-3 inline-block">Abrir en Google Maps</a>
          <p className="mt-5 text-pizarra">Llamada o mensaje para agendar una cita de valoración. También hay consulta en línea.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={waHola} target="_blank" rel="noopener" className="btn"><IconoWa /> WhatsApp {negocio.whatsappVisible}</a>
            <a href={`tel:${negocio.tel}`} className="btn-linea"><IconoTel /> {negocio.telVisible}</a>
          </div>
        </div>
        <div className="relative min-h-[340px] overflow-hidden rounded-[2rem] bg-lavanda">
          <a href={negocio.mapa} target="_blank" rel="noopener" className="enlace absolute inset-0 grid place-items-center p-6 text-center">Ver la ubicación en Google Maps</a>
          <iframe src={negocio.mapaEmbed} title="Mapa de Google con la ubicación del Edificio Valle Real en San Pedro Garza García" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            className="relative h-full min-h-[340px] w-full border-0" />
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro pb-24 pt-10 md:pb-10">
      <div className="contenedor flex flex-wrap items-baseline justify-between gap-4 text-[0.95rem]">
        <p className="font-display text-[1.3rem] text-niebla">Dr. Julio C. Jiménez López · Psiquiatría</p>
        <p>Céd. Prof. 11779182 · Céd. Esp. 14039782</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-niebla/15 bg-tinta text-niebla md:hidden">
      <a href={waHola} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 bg-azul text-[0.9rem] font-semibold text-white"><IconoWa />WhatsApp</a>
      <a href={`tel:${negocio.tel}`} className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-semibold"><IconoTel />Llamar</a>
      <a href={negocio.mapa} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-semibold"><IconoPin />Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#principal" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2">Saltar al contenido</a>
      <Encabezado />
      <main id="principal">
        <Portada />
        <Mensaje />
        <Doctor />
        <Cuando />
        <Proceso />
        <Opiniones />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
