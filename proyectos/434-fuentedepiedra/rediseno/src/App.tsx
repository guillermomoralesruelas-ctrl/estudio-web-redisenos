import { useState } from 'react';
import { cifras, colaboradores, espaciosFrase, eventos, instalaciones, lugares, negocio, planes, servicios, siguientes, suite, tiposEvento, wa } from './data/content';
import fotos from './data/fotos.json';

const medidas = fotos as unknown as Record<string, [number, number]>;
const foto = (n: string) => ({ src: `./${n}.webp`, width: medidas[n][0], height: medidas[n][1] });

function Icono({ d, className = 'size-5' }: { d: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}
const iWhats = 'M3 21l1.7-5A8.5 8.5 0 1 1 8 19.3L3 21zM9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.8-2.2-1-1 1a4.5 4.5 0 0 1-2.5-2.5l1-1-1-2.2L9 8.5z';
const iTel = 'M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2';
const iMapa = 'M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z';

const saludo = 'Hola, quiero información de Fuente de Piedra para un evento.';

function Encabezado() {
  return (
    <header className="oscuro sticky top-0 z-40 bg-piedra/95 text-arena backdrop-blur">
      <div className="contenedor flex h-18 items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0">
          <img {...foto('logo')} alt="Fuente de Piedra, Eventos Boutique" className="h-11 w-auto" />
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-7 text-[0.95rem] lg:flex">
          <a href="#frase" className="hover:text-oro">Tu evento</a>
          <a href="#lugar" className="hover:text-oro">El lugar</a>
          <a href="#eventos" className="hover:text-oro">Eventos</a>
          <a href="#servicios" className="hover:text-oro">Servicios</a>
          <a href="#contacto" className="hover:text-oro">Contacto</a>
        </nav>
        <a href={wa(saludo)} className="boton min-h-11 bg-oro px-5 text-piedra hover:bg-arena">
          <Icono d={iWhats} />
          <span>WhatsApp</span>
        </a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="oscuro relative overflow-hidden bg-piedra text-arena">
      <img {...foto('atardecer')} alt="Mesa puesta al atardecer bajo un árbol con luces, con los cerros del Bosque de la Primavera al fondo" className="absolute inset-0 size-full object-cover" fetchPriority="high" />
      <div className="absolute inset-0 bg-gradient-to-t from-piedra via-piedra/70 to-piedra/65 sm:bg-gradient-to-r sm:from-piedra/90 sm:via-piedra/55 sm:to-piedra/10" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-piedra to-transparent" />
      <div className="contenedor relative flex min-h-[38rem] flex-col justify-end py-14 sm:min-h-[42rem] sm:py-20">
        <p className="antetitulo">{negocio.lugar} · zona metropolitana de Guadalajara</p>
        <h1 className="mt-4 max-w-3xl text-[2.7rem] text-white sm:text-7xl">Salón de eventos con vista al Bosque de la Primavera</h1>
        <p className="mt-5 max-w-2xl text-lg text-arena/90">Un salón nuevo, terminado en diciembre de 2024: explanada techada, jardín, fogata y suite de preparación para bodas, XV años y todo tipo de celebraciones.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#frase" className="boton bg-oro text-piedra hover:bg-arena">Cuéntanos tu evento</a>
          <a href={wa('Hola, queremos agendar una visita a Fuente de Piedra.')} className="boton border border-arena/60 text-white hover:bg-white/10">Agendar una visita</a>
        </div>
        <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-arena/25 pt-6">
          {cifras.map((c) => (
            <div key={c.texto}>
              <dt className="sr-only">{c.texto}</dt>
              <dd>
                <span className="block font-serif text-3xl text-white sm:text-4xl">{c.valor}</span>
                <span className="text-sm text-arena/85">{c.texto}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Frase() {
  const [tipo, setTipo] = useState('boda');
  const [invitados, setInvitados] = useState(150);
  const [espacioId, setEspacioId] = useState('explanada');
  const [plan, setPlan] = useState('todo');
  const [fecha, setFecha] = useState('');
  const [siguiente, setSiguiente] = useState('visita');

  const espacio = espaciosFrase.find((e) => e.id === espacioId)!;
  const tipoTexto = tiposEvento.find((t) => t.id === tipo)!.texto;
  const planTexto = planes.find((p) => p.id === plan)!.texto;
  const sigTexto = siguientes.find((s) => s.id === siguiente)!.texto;
  const fechaTexto = fecha ? new Date(`${fecha}T12:00`).toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' }) : '';
  const hoy = new Date().toISOString().slice(0, 10);

  const mensaje = `Hola, queremos celebrar ${tipoTexto} para ${invitados} invitados ${espacio.texto}, con ${planTexto}, ${fechaTexto ? `el ${fechaTexto}` : 'con fecha por definir'}. Nos gustaría ${sigTexto}.`;
  const lleno = Math.round((invitados / negocio.capacidad) * 100);

  return (
    <section id="frase" className="oscuro bg-piedra py-16 text-arena sm:py-24">
      <div className="contenedor">
        <p className="antetitulo">Cuéntanos tu evento</p>
        <h2 className="mt-3 max-w-2xl text-4xl text-white sm:text-5xl">Tu evento en una frase</h2>
        <p className="mt-4 max-w-2xl text-arena/85">Toca las palabras subrayadas para cambiarlas. La frase es el mensaje que nos llega por WhatsApp.</p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-start">
          <div>
            <p className="font-serif text-[1.65rem] leading-[1.75] text-arena sm:text-[2.15rem]">
              Queremos celebrar{' '}
              <label className="sr-only" htmlFor="f-tipo">Tipo de evento</label>
              <select id="f-tipo" value={tipo} onChange={(e) => setTipo(e.target.value)} className="hueco">
                {tiposEvento.map((t) => <option key={t.id} value={t.id}>{t.texto}</option>)}
              </select>{' '}
              para{' '}
              <label className="sr-only" htmlFor="f-invitados">Número de invitados</label>
              <input id="f-invitados" type="number" min={10} max={negocio.capacidad} step={10} value={invitados}
                onChange={(e) => setInvitados(Math.max(10, Math.min(negocio.capacidad, Number(e.target.value) || 10)))}
                className="hueco w-[3.4em] !bg-none !pr-1 text-center" />{' '}
              invitados{' '}
              <label className="sr-only" htmlFor="f-espacio">Espacio</label>
              <select id="f-espacio" value={espacioId} onChange={(e) => setEspacioId(e.target.value)} className="hueco">
                {espaciosFrase.map((s) => <option key={s.id} value={s.id}>{s.texto}</option>)}
              </select>, con{' '}
              <label className="sr-only" htmlFor="f-plan">Plan</label>
              <select id="f-plan" value={plan} onChange={(e) => setPlan(e.target.value)} className="hueco">
                {planes.map((p) => <option key={p.id} value={p.id}>{p.texto}</option>)}
              </select>
              ,{' '}
              {fecha ? 'el ' : 'con fecha '}
              <label className="sr-only" htmlFor="f-fecha">Fecha del evento (opcional)</label>
              <input id="f-fecha" type="date" min={hoy} value={fecha} onChange={(e) => setFecha(e.target.value)}
                className={`hueco !bg-none !pr-1 [color-scheme:dark] ${fecha ? 'w-auto' : 'w-[7.2em] text-arena/60'}`} aria-describedby="f-fecha-nota" />
              . Nos gustaría{' '}
              <label className="sr-only" htmlFor="f-siguiente">Siguiente paso</label>
              <select id="f-siguiente" value={siguiente} onChange={(e) => setSiguiente(e.target.value)} className="hueco">
                {siguientes.map((s) => <option key={s.id} value={s.id}>{s.texto}</option>)}
              </select>.
            </p>
            <p id="f-fecha-nota" className="mt-3 text-sm text-arena/75">La fecha es opcional: si aún no la tienes, se envía "con fecha por definir".</p>

            <div className="mt-8">
              <label htmlFor="f-rango" className="text-sm text-arena/85">Invitados: {invitados} de {negocio.capacidad}</label>
              <input id="f-rango" type="range" min={10} max={negocio.capacidad} step={10} value={invitados} onChange={(e) => setInvitados(Number(e.target.value))} className="mt-2 w-full accent-[#c8a766]" />
            </div>

            <a href={wa(mensaje)} className="boton mt-8 bg-oro text-piedra hover:bg-arena">
              <Icono d={iWhats} />
              Enviar esta frase por WhatsApp
            </a>
          </div>

          <figure className="overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10" aria-live="polite">
            <img {...foto(espacio.foto)} alt={espacio.alt} className="aspect-[4/3] w-full object-cover" loading="lazy" />
            <figcaption className="p-6">
              <p className="text-sm italic text-oro">{espacio.pie}</p>
              <p className="mt-2 text-arena/90">{espacio.dato}</p>
              <div className="mt-5" aria-hidden="true">
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-oro transition-[width] duration-500" style={{ width: `${lleno}%` }} />
                </div>
              </div>
              <p className="mt-2 text-sm text-arena/80">
                {invitados} de {negocio.capacidad} invitados, la capacidad del salón de recepciones y jardines.
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Lugar() {
  return (
    <section id="lugar" className="py-16 sm:py-24">
      <div className="contenedor">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="antetitulo">Nuestro lugar</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">Naturaleza y diseño contemporáneo</h2>
          </div>
          <p className="text-gris">En una zona con vista panorámica al Bosque de la Primavera y a la ciudad, con acceso a avenidas principales. Espacios interiores y exteriores, y zonas de servicio pensadas para que el evento fluya.</p>
        </div>
        <ul className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-2">
          {lugares.map((l, i) => (
            <li key={l.id} className={i % 2 === 1 ? 'md:mt-16' : ''}>
              <img {...foto(l.foto)} alt={l.alt} className="aspect-[4/3] w-full rounded-2xl object-cover" loading="lazy" />
              <p className="mt-5 text-sm font-medium uppercase tracking-[0.2em] text-orooscuro">{l.dato}</p>
              <h3 className="mt-1 text-3xl">{l.nombre}</h3>
              <p className="mt-2 text-gris">{l.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Suite() {
  return (
    <section className="bg-cantera py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center">
        <div>
          <p className="antetitulo">Para bodas y XV años</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Suite de preparación</h2>
          <p className="mt-4 text-gris">Para arreglarse con calma el gran día: aire acondicionado, baño completo, sala, tocador doble, clóset y sofá cama.</p>
          <h3 className="mt-10 text-2xl">Instalaciones para invitados</h3>
          <p className="mt-2 text-gris">Sanitarios amplios y exclusivos, atendidos por nuestro staff durante todo el evento, y sanitarios aparte para el personal de servicio.</p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[...suite, ...instalaciones].map((s) => (
            <figure key={s.foto}>
              <img {...foto(s.foto)} alt={s.alt} className="aspect-[3/4] w-full rounded-xl object-cover" loading="lazy" />
              <figcaption className="mt-2 text-sm leading-snug text-gris">{s.pie}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Eventos() {
  return (
    <section id="eventos" className="py-16 sm:py-24">
      <div className="contenedor">
        <p className="antetitulo">Eventos en Fuente de Piedra</p>
        <h2 className="mt-3 text-4xl sm:text-5xl">Lo que ya se ha celebrado aquí</h2>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {eventos.map((e) => (
            <li key={e.pie}>
              <figure>
                <img {...foto(e.foto)} alt={e.alt} className="aspect-[4/5] w-full rounded-2xl object-cover" loading="lazy" />
                <figcaption className="mt-3 font-serif text-lg italic">{e.pie}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Servicios() {
  return (
    <section id="servicios" className="oscuro bg-olivo py-16 text-arena sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div>
          <p className="antetitulo">Nuestros servicios</p>
          <h2 className="mt-3 text-4xl text-white sm:text-5xl">Todo incluido o solo renta</h2>
          <p className="mt-4 text-arena/90">Tú eliges: el salón con catering personalizado y menú a tu gusto, o solo el espacio para trabajar con tus proveedores. En los dos casos, nuestro staff supervisa montaje, evento y desmontaje.</p>
          <a href={wa('Hola, quiero la cotización de Fuente de Piedra (todo incluido y solo renta).')} className="boton mt-7 bg-oro text-piedra hover:bg-arena">
            <Icono d={iWhats} />
            Solicitar cotización
          </a>
        </div>
        <ul className="grid gap-x-8 sm:grid-cols-2">
          {servicios.map((s) => (
            <li key={s} className="border-b border-arena/15 py-3">{s}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Colaboradores() {
  return (
    <section className="py-14 sm:py-20">
      <div className="contenedor">
        <p className="antetitulo">Nuestros colaboradores</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">Profesionales que trabajan en Fuente de Piedra</h2>
        <ul className="mt-8 flex flex-wrap gap-3">
          {colaboradores.map((c) => (
            <li key={c.nombre}>
              <a href={c.url} className="inline-flex min-h-12 items-center rounded-full border border-olivo/30 px-5 font-serif text-lg hover:border-olivo hover:bg-cantera">{c.nombre}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="bg-cantera py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <p className="antetitulo">Contáctanos</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Ven a conocer el salón</h2>
          <p className="mt-4 text-gris">Escríbenos para programar un recorrido o pedir más información.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={wa('Hola, queremos agendar una visita a Fuente de Piedra.')} className="boton bg-olivo text-white hover:bg-piedra"><Icono d={iWhats} /> WhatsApp</a>
            <a href={`tel:${negocio.telefono.tel}`} className="boton border border-olivo/50 text-olivo hover:bg-arena"><Icono d={iTel} /> {negocio.telefono.texto}</a>
          </div>
          <dl className="mt-10 space-y-5">
            <div>
              <dt className="antetitulo">Ubicación</dt>
              <dd className="mt-1">{negocio.direccion}</dd>
              <dd><a href={negocio.mapa} className="mt-1 inline-flex min-h-11 items-center gap-2 font-medium text-olivo underline underline-offset-4 hover:text-piedra"><Icono d={iMapa} /> Abrir en Google Maps</a></dd>
            </div>
            <div>
              <dt className="antetitulo">Correo</dt>
              <dd className="mt-1"><a href={`mailto:${negocio.correo}`} className="underline underline-offset-4 hover:text-olivo">{negocio.correo}</a></dd>
            </div>
            <div>
              <dt className="antetitulo">Síguenos</dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                <a href={negocio.instagram} className="boton min-h-11 border border-olivo/30 px-4 hover:bg-arena">Instagram</a>
                <a href={negocio.facebook} className="boton min-h-11 border border-olivo/30 px-4 hover:bg-arena">Facebook</a>
                <a href={negocio.tiktok} className="boton min-h-11 border border-olivo/30 px-4 hover:bg-arena">TikTok</a>
              </dd>
            </div>
          </dl>
        </div>
        <div className="relative min-h-80 overflow-hidden rounded-2xl bg-arena ring-1 ring-olivo/15">
          <a href={negocio.mapa} className="absolute inset-0 grid place-items-center text-center text-olivo underline underline-offset-4">Ver la ubicación en Google Maps</a>
          <iframe
          src={negocio.mapaEmbed}
          width="100%"
          height="420"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Ubicación de ${negocio.nombre} en Google Maps`}
          className="relative block h-full min-h-80 w-full"
        />
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro bg-piedra py-10 pb-24 text-sm text-arena/80 md:pb-10">
      <div className="contenedor flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <img {...foto('logo')} alt="Fuente de Piedra" className="h-10 w-auto self-start" loading="lazy" />
        <p>{negocio.lema} · {negocio.lugar}</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/10 bg-piedra text-arena md:hidden">
      <a href={wa(saludo)} className="flex min-h-15 items-center justify-center gap-2 bg-olivo font-medium text-white"><Icono d={iWhats} /> WhatsApp</a>
      <a href={`tel:${negocio.telefono.tel}`} className="flex min-h-15 items-center justify-center gap-2 font-medium"><Icono d={iTel} /> Llamar</a>
      <a href={negocio.mapa} className="flex min-h-15 items-center justify-center gap-2 font-medium"><Icono d={iMapa} /> Llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <Encabezado />
      <main>
        <Portada />
        <Frase />
        <Lugar />
        <Suite />
        <Eventos />
        <Servicios />
        <Colaboradores />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
