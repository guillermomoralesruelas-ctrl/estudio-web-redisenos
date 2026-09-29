import { useState } from 'react';
import { comodidades, cuartos, habitaciones, instalaciones, negocio, ocasiones, opiniones, wa } from './data/content';


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

const waHola = wa('Hola, quiero consultar disponibilidad en Hotel Maculís.');
const articulo: Record<string, string> = { 'Cumpleaños': 'un cumpleaños', 'Aniversario': 'un aniversario', 'Pedida de mano': 'una pedida de mano', 'Luna de miel': 'nuestra luna de miel', 'Escapada en pareja': 'una escapada en pareja', 'Viaje en familia': 'un viaje en familia', 'Solo descansar': 'descansar unos días' };
const secciones = [['#escapada', 'Tu escapada'], ['#hotel', 'El hotel'], ['#habitaciones', 'Habitaciones'], ['#contacto', 'Contacto']] as const;

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-noche/10 bg-marfil/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Hotel Maculís, inicio">
          <img src="./logo.webp" alt="" width={161} height={160} className="h-11 w-11" />
          <span className="font-display text-[1.3rem] text-morado">Maculís</span>
        </a>
        <nav aria-label="Secciones" className="hidden md:block">
          <ul className="flex gap-7">{secciones.map(([h, t]) => <li key={h}><a href={h} className="text-gris hover:text-noche">{t}</a></li>)}</ul>
        </nav>
        <a href={waHola} className="btn !min-h-[42px] !px-4 !py-2" target="_blank" rel="noopener"><IconoWa /> <span className="hidden sm:inline">Reservar</span></a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="oscuro relative isolate overflow-hidden">
      <img src="./patio.webp" alt="Patio del hotel con muros azules, palmeras, camastros y andador de madera" width={867} height={1300} fetchPriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-noche via-noche/75 to-noche/20 md:bg-gradient-to-r md:from-noche md:via-noche/80 md:to-noche/10" aria-hidden="true" />
      <div className="contenedor pb-14 pt-64 md:py-36">
        <p className="font-bold text-oro">Barrio de San Román, Campeche</p>
        <h1 className="mt-3 max-w-2xl text-[2.5rem] sm:text-[3.8rem]">Hotel boutique en una casa colonial de Campeche</h1>
        <p className="mt-5 max-w-xl text-[1.1rem]">Alberca entre plantas, jardín, habitaciones con piso de pasta y mascotas bienvenidas, en uno de los barrios fundadores de la ciudad.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#escapada" className="btn">Arma tu escapada</a>
          <a href={waHola} className="btn-linea" target="_blank" rel="noopener"><IconoWa /> WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

function Escapada() {
  const [ocasion, setOcasion] = useState('Aniversario');
  const [cuarto, setCuarto] = useState(cuartos[0]);
  const [mascota, setMascota] = useState(false);
  const mensaje = `Hola, quiero reservar en Hotel Maculís. Es para ${articulo[ocasion]} y me interesa la ${cuarto.toLowerCase()}.${mascota ? ' Viajo con mi mascota.' : ''}${ocasion === 'Solo descansar' || ocasion === 'Viaje en familia' ? '' : ' ¿Me ayudan a preparar algún detalle especial?'} ¿Tienen disponibilidad para estas fechas: `;
  return (
    <section id="escapada" className="py-20 md:py-28">
      <div className="contenedor grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        <div>
          <h2 className="max-w-2xl text-[2.2rem] sm:text-[2.9rem]">Arma tu escapada</h2>
          <p className="mt-4 max-w-xl text-gris">El hotel prepara detalles para cumpleaños, aniversarios, pedidas de mano y lunas de miel: decoración, amenidades y sorpresas en la habitación. Elige y te dejamos el mensaje listo.</p>
          <fieldset className="mt-8">
            <legend className="font-bold">¿Qué celebras?</legend>
            <div className="mt-3 flex flex-wrap gap-2">{ocasiones.map((o) => <button key={o} type="button" aria-pressed={ocasion === o} onClick={() => setOcasion(o)} className="chip">{o}</button>)}</div>
          </fieldset>
          <fieldset className="mt-6">
            <legend className="font-bold">¿Qué habitación?</legend>
            <div className="mt-3 flex flex-wrap gap-2">{cuartos.map((c) => <button key={c} type="button" aria-pressed={cuarto === c} onClick={() => setCuarto(c)} className="chip">{c}</button>)}</div>
          </fieldset>
          <label className="mt-6 flex min-h-[44px] cursor-pointer items-center gap-3 font-bold">
            <input type="checkbox" checked={mascota} onChange={(e) => setMascota(e.target.checked)} className="h-5 w-5 accent-[var(--color-morado)]" />
            Viene mi mascota
          </label>
        </div>
        <div className="rounded-2xl bg-lila p-5 sm:p-8">
          <p className="text-[0.95rem] font-bold text-gris">Tu mensaje para el hotel</p>
          <div className="burbuja ml-2 mt-4 bg-burbuja p-4 text-burbuja-texto" aria-live="polite">{mensaje}<span className="text-gris">…</span></div>
          <a href={wa(mensaje)} target="_blank" rel="noopener" className="btn mt-6 w-full"><IconoWa /> Enviar por WhatsApp</a>
          <p className="mt-3 text-center text-[0.95rem] text-gris">Agrega tus fechas al final del mensaje.</p>
        </div>
      </div>
    </section>
  );
}

function Hotel() {
  return (
    <section id="hotel" className="bg-lila py-20 md:py-28">
      <div className="contenedor">
        <h2 className="max-w-2xl text-[2.2rem] sm:text-[2.9rem]">En el barrio de San Román</h2>
        <p className="mt-4 max-w-3xl text-gris">San Román, fundado en el siglo XVI, es uno de los barrios que dieron origen a la ciudad colonial. Sus huéspedes lo describen como un lugar tranquilo frente a la plaza del barrio.</p>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {instalaciones.map((i) => (
            <li key={i.titulo} className="overflow-hidden rounded-xl bg-white">
              <img src={`./${i.foto}`} alt={i.alt} width={1300} height={975} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <div className="p-5"><h3 className="text-[1.35rem]">{i.titulo}</h3><p className="mt-1 text-[0.98rem] text-gris">{i.texto}</p></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Habitaciones() {
  return (
    <section id="habitaciones" className="py-20 md:py-28">
      <div className="contenedor">
        <h2 className="text-[2.2rem] sm:text-[2.9rem]">Habitaciones</h2>
        <p className="mt-4 text-gris">{cuartos.join(', ')}.</p>
        <ul className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {habitaciones.map((h) => <li key={h.foto}><img src={`./${h.foto}`} alt={h.alt} width={h.ancho} height={h.alto} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover" /></li>)}
        </ul>
        <ul className="mt-8 flex flex-wrap gap-2">{comodidades.map((c) => <li key={c} className="rounded-full border border-noche/20 px-4 py-1.5 text-[0.95rem]">{c}</li>)}</ul>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {opiniones.map((o) => (
            <figure key={o.autor}>
              <blockquote className="text-[1.05rem] italic">“{o.texto}”</blockquote>
              <figcaption className="mt-2 text-[0.95rem] font-bold text-morado">{o.autor}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="oscuro py-20 md:py-28">
      <div className="contenedor grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-[2.2rem] sm:text-[2.9rem]">Reserva con nosotros</h2>
          <p className="mt-4 max-w-md">Escríbenos tus fechas o llámanos.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waHola} className="btn" target="_blank" rel="noopener"><IconoWa /> WhatsApp {negocio.whatsappTexto}</a>
            <a href={negocio.telefonoLink} className="btn-linea"><IconoTel /> {negocio.telefono}</a>
          </div>
          <dl className="mt-10 grid gap-5">
            <div><dt className="font-bold text-oro">Dirección</dt><dd>{negocio.direccion}<br /><a href={negocio.mapa} target="_blank" rel="noopener" className="font-bold text-marfil underline underline-offset-4"><IconoPin className="mr-1 inline h-4 w-4" />Abrir en Google Maps</a></dd></div>
            <div><dt className="font-bold text-oro">Correo</dt><dd><a href={`mailto:${negocio.correo}`} className="underline underline-offset-4">{negocio.correo}</a></dd></div>
            <div><dt className="font-bold text-oro">Facebook</dt><dd><a href={negocio.facebook} target="_blank" rel="noopener" className="underline underline-offset-4">Hotel Maculís</a></dd></div>
          </dl>
        </div>
        <iframe title="Mapa de Hotel Maculís en el barrio de San Román, Campeche" src={negocio.mapaEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[22rem] w-full rounded-xl border-0 md:h-full md:min-h-[26rem]" />
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="border-t border-marfil/10 bg-noche pb-24 pt-8 text-[0.95rem] text-marfil/75 md:pb-8">
      <div className="contenedor flex flex-wrap items-center justify-between gap-3">
        <p>Hotel Maculís, hotel boutique en San Román, Campeche</p>
        <img src="./fachada.webp" alt="Fachada del Hotel Maculís en la calle Bravo" width={1280} height={853} loading="lazy" className="h-14 w-24 rounded object-cover" />
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-marfil/15 bg-noche text-marfil md:hidden">
      <a href={waHola} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 bg-morado text-[0.9rem] font-bold text-white"><IconoWa />WhatsApp</a>
      <a href={negocio.telefonoLink} className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-bold"><IconoTel />Llamar</a>
      <a href={negocio.mapa} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-bold"><IconoPin />Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#principal" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:text-noche">Saltar al contenido</a>
      <Encabezado />
      <main id="principal">
        <Portada />
        <Escapada />
        <Hotel />
        <Habitaciones />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
