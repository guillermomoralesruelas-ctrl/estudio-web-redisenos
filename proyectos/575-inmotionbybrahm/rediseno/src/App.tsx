import { useMemo, useState } from 'react';
import {
  negocio, wa, clases, atajos, paquetesStudio, paqueteLinea, nosotras, coaches, testimonios, corporativo,
  type Clase, type Modalidad,
} from './data/content';

const img = (ruta: string) => `${import.meta.env.BASE_URL}${ruta}`;
const pesos = (n: number) => '$' + n.toLocaleString('es-MX', { minimumFractionDigits: 0, maximumFractionDigits: 0 });

/* ---------- Iconos ---------- */
function IconoWhatsApp({ className = 'size-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.2-.3-.2-.5-.3Z" />
    </svg>
  );
}
function IconoTel({ className = 'size-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 3h3l2 5-2.5 1.5a11 11 0 0 0 7 7L16 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" />
    </svg>
  );
}
function IconoPin({ className = 'size-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

/* ---------- Encabezado ---------- */
function Encabezado() {
  const enlaces = [
    ['#tapete', 'Clases'], ['#paquetes', 'Paquetes'], ['#nosotras', 'Nosotras'], ['#coaches', 'Coaches'], ['#visitanos', 'Contacto'],
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-bruma bg-fondo/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0" aria-label="InMotion by Brahmā, inicio">
          <img src={img('logo-verde.png')} width={600} height={154} alt="InMotion by Brahmā" className="h-9 w-auto" />
        </a>
        <nav aria-label="Secciones" className="hidden md:block">
          <ul className="flex gap-7 text-[0.95rem]">
            {enlaces.map(([href, texto]) => (
              <li key={href}><a href={href} className="text-tinta/80 hover:text-salvia-osc">{texto}</a></li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <a href={negocio.entrar} className="hidden text-[0.95rem] text-tinta/80 hover:text-salvia-osc lg:inline">Entrar</a>
          <a href={wa('Hola, quiero información de las clases de brahmā studio.')} className="boton-principal !px-4 !py-2 text-sm">
            <IconoWhatsApp className="size-4" /> WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------- Portada ---------- */
function Portada() {
  return (
    <section id="inicio" className="bg-papel">
      <div className="contenedor grid items-center gap-8 pb-12 pt-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12 md:py-16">
        <div className="min-w-0">
          <p className="font-titulo text-xl italic text-salvia-osc">{negocio.lema}</p>
          <h1 className="mt-3 font-titulo text-[2.6rem] leading-[1.05] sm:text-6xl">Intención a través del movimiento</h1>
          <p className="mt-5 max-w-md text-lg text-tinta/80">
            Yoga, pilates y entrenamiento funcional en Las Lomas, San Luis Potosí. Diez formatos de clase, en studio y en línea.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#tapete" className="boton-principal">Elige tu clase</a>
            <a href={wa('Hola, quiero agendar mi primera clase en brahmā studio.')} className="boton-secundario">
              <IconoWhatsApp /> Escríbenos
            </a>
          </div>
        </div>
        <figure className="min-w-0">
          <img
            src={img('tres-triangulo.webp')} width={2000} height={1333} fetchPriority="high"
            alt="Tres alumnas en postura de triángulo con un brazo hacia el techo, en fondo blanco"
            className="aspect-[3/2] w-full object-cover"
          />
        </figure>
      </div>
    </section>
  );
}

/* ---------- Elemento memorable: el tapete ---------- */
function Tapete() {
  const [energia, setEnergia] = useState(40);
  const [modo, setModo] = useState<Modalidad>('studio');

  const disponibles = useMemo(() => clases.filter((c) => c.modalidades.includes(modo)), [modo]);
  const elegida: Clase = useMemo(
    () => disponibles.reduce((a, b) => (Math.abs(b.energia - energia) < Math.abs(a.energia - energia) ? b : a)),
    [disponibles, energia],
  );
  const x = (e: number) => 4 + e * 0.92; // posición en % sobre el tapete

  const textoWa = modo === 'studio'
    ? `Hola, quiero tomar una clase de ${elegida.nombre} en el studio. ¿Qué horarios tienen esta semana?`
    : `Hola, me interesa la clase en línea de ${elegida.nombre}. ¿Cómo me registro a los 14 días de prueba?`;

  return (
    <section id="tapete" className="bg-fondo py-16 md:py-24" aria-labelledby="tapete-titulo">
      <div className="contenedor">
        <div className="grid gap-6 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:items-end">
          <h2 id="tapete-titulo" className="font-titulo text-4xl leading-tight sm:text-5xl">¿Con qué energía llegas hoy?</h2>
          <p className="text-tinta/80">
            “{nosotras.eleccion}” Desliza tu energía sobre el tapete y te decimos cuál de nuestras clases te toca.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <div role="radiogroup" aria-label="Modalidad" className="inline-flex rounded-full border border-salvia bg-papel p-1">
            {([['studio', 'En studio'], ['linea', 'En línea']] as const).map(([valor, texto]) => (
              <button
                key={valor} type="button" role="radio" aria-checked={modo === valor}
                onClick={() => setModo(valor)}
                className={`rounded-full px-4 py-1.5 text-sm transition-colors motion-reduce:transition-none ${modo === valor ? 'bg-salvia-osc text-white' : 'text-tinta/80 hover:text-tinta'}`}
              >{texto}</button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {atajos.map((a) => (
              <button
                key={a.texto} type="button" onClick={() => setEnergia(a.energia)}
                className="rounded-full border border-bruma bg-papel px-3.5 py-1.5 text-sm text-tinta/85 hover:border-salvia"
              >{a.texto}</button>
            ))}
          </div>
        </div>

        {/* El tapete */}
        <div className="mt-8">
          <div className="flex justify-between text-sm text-tinta/70">
            <span>Más suave</span><span>Más intenso</span>
          </div>
          <div className="relative mt-2">
            {/* nombres sobre el tapete (escritorio) */}
            <div className="relative hidden h-16 md:block" aria-hidden="true">
              {clases.map((c, i) => {
                const activa = c.id === elegida.id;
                const hay = c.modalidades.includes(modo);
                return (
                  <span
                    key={c.id}
                    style={{ left: `${x(c.energia)}%`, top: i % 2 === 0 ? '0' : '1.9rem' }}
                    className={`absolute -translate-x-1/2 whitespace-nowrap text-sm transition-colors motion-reduce:transition-none ${activa ? 'font-semibold text-salvia-osc' : hay ? 'text-tinta/75' : 'text-tinta/35 line-through'}`}
                  >{c.nombre}</span>
                );
              })}
            </div>
            <div className="relative">
              <svg viewBox="0 0 1000 120" className="block h-auto w-full" aria-hidden="true" preserveAspectRatio="none">
                <rect x="0" y="10" width="1000" height="100" rx="16" fill="#26302a" />
                {Array.from({ length: 24 }, (_, i) => (
                  <line key={i} x1={20 + i * 41} y1="22" x2={20 + i * 41} y2="98" stroke="#3a463e" strokeWidth="2" />
                ))}
                <rect x="0" y="10" width="1000" height="100" rx="16" fill="none" stroke="#7E8D80" strokeWidth="3" />
              </svg>
              <div className="pointer-events-none absolute inset-0">
                {clases.map((c) => {
                  const activa = c.id === elegida.id;
                  const hay = c.modalidades.includes(modo);
                  return (
                    <span
                      key={c.id}
                      style={{ left: `${x(c.energia)}%` }}
                      className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all motion-reduce:transition-none ${activa ? 'size-4 bg-white ring-4 ring-salvia' : hay ? 'size-2.5 bg-salvia' : 'size-2 bg-white/25'}`}
                    />
                  );
                })}
                <span
                  style={{ left: `${x(energia)}%` }}
                  className="absolute -bottom-3 -translate-x-1/2 transition-[left] duration-300 motion-reduce:transition-none"
                >
                  <svg viewBox="0 0 20 12" className="h-3 w-5" aria-hidden="true"><path d="M10 0 20 12H0Z" fill="#4E5B51" /></svg>
                </span>
              </div>
              <label htmlFor="energia" className="sr-only">Tu energía hoy, de más suave a más intenso</label>
              <input
                id="energia" type="range" min={0} max={100} value={energia}
                onChange={(e) => setEnergia(Number(e.target.value))}
                aria-valuetext={`Te toca ${elegida.nombre}`}
                className="rango absolute inset-0 h-full w-full cursor-pointer opacity-0"
              />
            </div>
          </div>
          {/* lista de clases (celular) */}
          <ul className="mt-6 flex flex-wrap gap-2 md:hidden">
            {disponibles.map((c) => (
              <li key={c.id}>
                <button
                  type="button" onClick={() => setEnergia(c.energia)} aria-pressed={c.id === elegida.id}
                  className={`rounded-full border px-3 py-1 text-sm ${c.id === elegida.id ? 'border-salvia-osc bg-salvia-osc text-white' : 'border-bruma bg-papel text-tinta/85'}`}
                >{c.nombre}</button>
              </li>
            ))}
          </ul>
        </div>

        {/* La clase que te toca */}
        <article className="mt-10 grid overflow-hidden border border-bruma bg-papel md:grid-cols-[minmax(0,4fr)_minmax(0,7fr)]" aria-live="polite">
          <div className="min-w-0 bg-papel">
            {elegida.foto ? (
              <img
                key={elegida.id}
                src={img(elegida.foto.src)} width={elegida.foto.w} height={elegida.foto.h} alt={elegida.foto.alt} loading="lazy"
                className="aparece aspect-[4/5] w-full object-cover md:aspect-auto md:h-full md:max-h-[34rem]"
              />
            ) : (
              <div className="flex aspect-[4/5] h-full w-full flex-col items-center justify-center gap-4 bg-bruma p-8 text-center md:aspect-auto md:min-h-[26rem]">
                <svg viewBox="0 0 120 60" className="w-36" aria-hidden="true">
                  <rect x="4" y="30" width="112" height="16" rx="4" fill="#26302a" />
                  <circle cx="60" cy="16" r="9" fill="none" stroke="#4E5B51" strokeWidth="2.5" />
                </svg>
                <p className="text-sm text-tinta/75">Solo en línea: se toma desde casa con tu registro.</p>
              </div>
            )}
          </div>
          <div className="min-w-0 p-6 sm:p-10">
            <p className="text-sm text-tinta/70">
              {elegida.modalidades.length === 2 ? 'En studio y en línea' : 'Solo en línea'}
            </p>
            <h3 className="mt-1 font-titulo text-4xl">{elegida.nombre}</h3>
            <p className="mt-4 text-tinta/85">{elegida.descripcion}</p>
            <p className="mt-5 border-l-2 border-salvia pl-4 font-titulo text-xl italic text-salvia-osc">“{elegida.frase}”.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              {modo === 'studio' ? (
                <a href={negocio.reservar} className="boton-principal">Reservar en studio</a>
              ) : (
                <a href={negocio.registro} className="boton-principal">Registrarme: 14 días gratis</a>
              )}
              <a href={wa(textoWa)} className="boton-secundario"><IconoWhatsApp /> Preguntar por WhatsApp</a>
            </div>
            <p className="mt-5 text-sm text-tinta/65">
              El orden del tapete lo armamos con la descripción de cada clase; tu coach te orienta en tu primera visita.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

/* ---------- Paquetes ---------- */
function Paquetes() {
  return (
    <section id="paquetes" className="bg-papel py-16 md:py-24" aria-labelledby="paquetes-titulo">
      <div className="contenedor grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)]">
        <div className="min-w-0">
          <h2 id="paquetes-titulo" className="font-titulo text-4xl sm:text-5xl">Paquetes en studio</h2>
          <p className="mt-3 text-tinta/75">Todos tienen una vigencia de 30 días. Se compran en línea con tu cuenta.</p>
          <ul className="mt-8 divide-y divide-bruma border-y border-bruma">
            {paquetesStudio.map((p) => (
              <li key={p.url} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-1 py-5 sm:grid-cols-[minmax(0,1fr)_7rem_6rem_auto]">
                <div className="min-w-0">
                  <h3 className="font-titulo text-2xl">{p.nombre}</h3>
                  <p className="text-sm text-tinta/75">{p.detalle}{p.nota ? ` ${p.nota}` : ''}</p>
                </div>
                <p className="hidden text-right text-sm text-tinta/70 sm:block">
                  {p.clases && p.clases > 1 ? `${pesos(p.precio / p.clases)} por clase` : ''}
                </p>
                <p className="text-right font-titulo text-2xl sm:order-none">{pesos(p.precio)}</p>
                <a href={p.url} className="col-span-2 justify-self-start text-sm font-medium text-salvia-osc underline decoration-salvia underline-offset-4 hover:decoration-salvia-osc sm:col-span-1 sm:justify-self-end">
                  Adquirir<span className="sr-only"> {p.nombre}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <aside className="min-w-0 self-start bg-tapete p-8 text-white sm:p-10" aria-labelledby="linea-titulo">
          <h2 id="linea-titulo" className="font-titulo text-3xl">Clases en línea</h2>
          <p className="mt-2 text-white/85">{paqueteLinea.nombre}</p>
          <p className="mt-6 font-titulo text-5xl">{pesos(paqueteLinea.precio)}<span className="ml-2 font-sans text-base text-white/75">al mes</span></p>
          <p className="mt-6 font-medium">{paqueteLinea.prueba}</p>
          <p className="mt-2 text-sm text-white/80">{paqueteLinea.pruebaNota}</p>
          <p className="mt-4 text-sm text-white/80">{paqueteLinea.detalle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={negocio.registro} className="inline-flex items-center rounded-full bg-white px-5 py-3 font-medium text-tinta hover:bg-bruma">Registrarme</a>
            <a href={paqueteLinea.url} className="inline-flex items-center rounded-full border border-white/60 px-5 py-3 text-white hover:border-white">Ver paquete</a>
          </div>
        </aside>
      </div>
    </section>
  );
}

/* ---------- Nosotras ---------- */
function Nosotras() {
  return (
    <section id="nosotras" className="bg-fondo py-16 md:py-24" aria-labelledby="nosotras-titulo">
      <div className="contenedor grid gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-16">
        <div className="min-w-0">
          <img src={img('escorpion.webp')} width={800} height={1200} loading="lazy"
            alt="Alumna en postura de escorpión sobre los antebrazos, en fondo blanco"
            className="aspect-[4/5] w-full bg-papel object-cover" />
        </div>
        <div className="min-w-0">
          <h2 id="nosotras-titulo" className="font-titulo text-4xl sm:text-5xl">¿Qué es brahmā studio?</h2>
          <p className="mt-5 text-lg text-tinta/85">{nosotras.que}</p>
          <p className="mt-4 text-tinta/80">{nosotras.intencion}</p>
          <dl className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {nosotras.valores.map((v) => (
              <div key={v.nombre} className="border-t border-salvia pt-3">
                <dt className="font-titulo text-xl italic">{v.nombre}</dt>
                <dd className="mt-1 text-sm text-tinta/80">{v.texto}</dd>
              </div>
            ))}
          </dl>
          <h3 className="mt-10 font-titulo text-2xl">Nuestra historia</h3>
          {nosotras.historia.map((p) => <p key={p.slice(0, 20)} className="mt-3 text-tinta/80">{p}</p>)}
        </div>
      </div>
    </section>
  );
}

/* ---------- Coaches ---------- */
function Coaches() {
  return (
    <section id="coaches" className="bg-papel py-16 md:py-24" aria-labelledby="coaches-titulo">
      <div className="contenedor">
        <h2 id="coaches-titulo" className="font-titulo text-4xl sm:text-5xl">Coaches</h2>
        <p className="mt-3 max-w-2xl text-tinta/75">Quién guía cada práctica, con sus estudios y, en sus palabras, su intención.</p>
        <ul className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {coaches.map((c) => (
            <li key={c.nombre} className="min-w-0">
              <h3 className="font-titulo text-2xl">{c.nombre}</h3>
              <p className="mt-1 text-sm text-tinta/70">{c.estudios}</p>
              <p className="mt-2 text-[0.95rem] text-tinta/85">Mi intención es {c.intencion.charAt(0).toLowerCase() + c.intencion.slice(1)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Testimonios ---------- */
function Testimonios() {
  return (
    <section className="bg-bruma py-16 md:py-20" aria-labelledby="testimonios-titulo">
      <div className="contenedor">
        <h2 id="testimonios-titulo" className="font-titulo text-4xl sm:text-5xl">Testimonios con intención</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,6fr)_minmax(0,5fr)]">
          <blockquote className="min-w-0">
            <p className="font-titulo text-2xl leading-snug sm:text-3xl">“{testimonios[0].texto}”</p>
            <footer className="mt-4 text-sm text-tinta/75">{testimonios[0].nombre}</footer>
          </blockquote>
          <div className="grid min-w-0 gap-8">
            {testimonios.slice(1).map((t) => (
              <blockquote key={t.nombre} className="border-l-2 border-salvia pl-5">
                <p className="text-tinta/85">“{t.texto}”</p>
                <footer className="mt-2 text-sm text-tinta/70">{t.nombre}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Corporativo ---------- */
function Corporativo() {
  return (
    <section id="corporativo" className="bg-fondo py-16 md:py-24" aria-labelledby="corp-titulo">
      <div className="contenedor grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div className="min-w-0">
          <h2 id="corp-titulo" className="font-titulo text-4xl leading-tight sm:text-5xl">{corporativo.titulo}</h2>
          <p className="mt-5 text-tinta/80">{corporativo.texto}</p>
          <a href={wa('Hola, quiero información del servicio corporativo de brahmā studio para mi empresa.')} className="boton-principal mt-7">
            <IconoWhatsApp /> Hablemos de tu empresa
          </a>
        </div>
        <dl className="grid min-w-0 gap-6 sm:grid-cols-2">
          {corporativo.servicios.map((s) => (
            <div key={s.nombre} className="border-t border-salvia pt-4">
              <dt className="font-titulo text-2xl">{s.nombre}</dt>
              <dd className="mt-2 text-tinta/80">{s.texto}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ---------- Visítanos ---------- */
function Visitanos() {
  return (
    <section id="visitanos" className="bg-papel py-16 md:py-24" aria-labelledby="visitanos-titulo">
      <div className="contenedor grid gap-10 md:grid-cols-2 md:gap-16">
        <a href={negocio.maps} className="group block min-w-0" aria-label="Abrir la ubicación de brahmā studio en Google Maps">
          <img src={img('plancha-lateral.webp')} width={1600} height={1067} loading="lazy"
            alt="Alumna en plancha lateral tomándose el pie con la mano"
            className="aspect-[3/2] w-full object-cover" />
          <span className="mt-3 inline-flex items-center gap-2 text-salvia-osc underline decoration-salvia underline-offset-4 group-hover:decoration-salvia-osc">
            <IconoPin /> Cómo llegar en Google Maps
          </span>
        </a>
        <div className="min-w-0">
          <h2 id="visitanos-titulo" className="font-titulo text-4xl sm:text-5xl">Let’s flow InMotion</h2>
          <address className="mt-6 not-italic text-lg">{negocio.direccion}</address>
          <ul className="mt-6 space-y-3">
            <li><a href={negocio.telefonoHref} className="inline-flex items-center gap-2 hover:text-salvia-osc"><IconoTel /> {negocio.telefono}</a></li>
            <li><a href={wa('Hola, quiero información de las clases de brahmā studio.')} className="inline-flex items-center gap-2 hover:text-salvia-osc"><IconoWhatsApp /> WhatsApp</a></li>
            <li><a href={`mailto:${negocio.correo}`} className="break-all hover:text-salvia-osc">{negocio.correo}</a></li>
          </ul>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {negocio.redes.map((r) => (
              <li key={r.url}><a href={r.url} className="text-tinta/80 underline decoration-bruma underline-offset-4 hover:text-salvia-osc">{r.red} {r.nombre}</a></li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-tinta/70">
            Los horarios de la semana y los lugares disponibles están en <a href={negocio.reservar} className="text-salvia-osc underline underline-offset-4">nuestra página de reservas</a>.
            ¿Quieres leer más? Visita <a href={negocio.blog} className="text-salvia-osc underline underline-offset-4">el blog</a>.
          </p>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-tapete pb-28 pt-12 text-white/85 md:pb-12">
      <div className="contenedor flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <img src={img('logo-claro.png')} width={600} height={153} alt="InMotion by Brahmā" loading="lazy" className="h-10 w-auto" />
        <p className="text-sm">© brahmā studio, San Luis Potosí</p>
        <p className="text-sm">
          <a href="https://inmotionbybrahma.com/terminos-y-condiciones" className="underline underline-offset-4">Términos y condiciones</a>
          <span className="mx-2" aria-hidden="true">/</span>
          <a href="https://inmotionbybrahma.com/aviso-de-privacidad" className="underline underline-offset-4">Aviso de privacidad</a>
        </p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  const btn = 'flex flex-1 flex-col items-center justify-center gap-0.5 py-2 text-xs font-medium';
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-50 flex border-t border-bruma bg-papel md:hidden">
      <a href={wa('Hola, quiero información de las clases de brahmā studio.')} className={`${btn} bg-salvia-osc text-white`}><IconoWhatsApp /> WhatsApp</a>
      <a href={negocio.telefonoHref} className={`${btn} text-tinta`}><IconoTel /> Llamar</a>
      <a href={negocio.maps} className={`${btn} text-tinta`}><IconoPin /> Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#tapete" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:bg-papel focus:p-3">Saltar a las clases</a>
      <Encabezado />
      <main>
        <Portada />
        <Tapete />
        <Paquetes />
        <Nosotras />
        <Coaches />
        <Testimonios />
        <Corporativo />
        <Visitanos />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
