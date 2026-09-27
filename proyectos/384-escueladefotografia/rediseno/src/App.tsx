import { useState } from 'react';
import {
  blog, camaras, cifras, fotoDe, logo, negocio, online, portafolio, presenciales, profesor, reglamento, talleres, cursosExtra, wa, waGeneral,
  type Camara, type Curso, type Foto, type Toma,
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

function Img({ f, className = '', loading = 'lazy' }: { f: Foto; className?: string; loading?: 'lazy' | 'eager' }) {
  return <img src={f.src} width={f.w} height={f.h} alt={f.alt} loading={loading} decoding="async" className={className} />;
}

/* Marcas del visor de una réflex: esquinas del encuadre y el recuadro de enfoque al centro. */
function MarcasVisor() {
  return (
    <svg aria-hidden="true" viewBox="0 0 300 200" preserveAspectRatio="none" className="pointer-events-none absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] text-white/70">
      <g fill="none" stroke="currentColor" strokeWidth="1.2" vectorEffect="non-scaling-stroke">
        <path d="M0 18V0h18M282 0h18v18M300 182v18h-18M18 200H0v-18" vectorEffect="non-scaling-stroke" />
        <rect x="142" y="94" width="16" height="12" vectorEffect="non-scaling-stroke" />
      </g>
    </svg>
  );
}

/* La lectura de abajo del visor: velocidad, diafragma, ISO y distancia focal, como en la cámara. */
function Lectura({ t }: { t: Pick<Toma, 'v' | 'f' | 'iso' | 'mm'> }) {
  return (
    <p className="flex flex-wrap gap-x-5 gap-y-1 font-mono text-[0.95rem] tracking-wide text-visor" aria-label={`Velocidad ${t.v}, diafragma f/${t.f}, ISO ${t.iso}${t.mm ? `, ${t.mm} milímetros` : ''}`}>
      <span>{t.v}</span><span>F{t.f}</span><span>ISO {t.iso}</span>{t.mm ? <span>{t.mm}mm</span> : null}
    </p>
  );
}

const telLink = `tel:${negocio.tel800Link}`;

function Encabezado() {
  return (
    <header className="noche sticky top-0 z-40 border-b border-white/10 bg-tinta/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" aria-label="Escuela de Fotografía, inicio" className="shrink-0">
          <img src={logo.src} width={logo.w} height={logo.h} alt={logo.alt} className="h-10 w-auto" />
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-6 font-semibold text-white/85 lg:flex">
          <a href="#camara" className="hover:text-rojo-claro">Tu cámara</a>
          <a href="#cursos" className="hover:text-rojo-claro">Cursos</a>
          <a href="#profesor" className="hover:text-rojo-claro">Profesor</a>
          <a href="#inscripcion" className="hover:text-rojo-claro">Inscripción</a>
          <a href="#contacto" className="hover:text-rojo-claro">Contacto</a>
        </nav>
        <a href={waGeneral} className="btn !min-h-[40px] !px-4 !py-2 text-sm" target="_blank" rel="noopener"><IconoWa className="h-4 w-4" /> Informes</a>
      </div>
    </header>
  );
}

function Portada() {
  const t = fotoDe(147);
  return (
    <section id="inicio" className="noche bg-tinta text-white/85">
      <div className="contenedor grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:py-24">
        <div className="min-w-0">
          <p className="font-semibold text-rojo-claro">Enseñando fotografía profesional desde {negocio.desde}</p>
          <h1 className="mt-3 text-5xl sm:text-7xl">Cursos de fotografía para principiantes</h1>
          <p className="mt-6 max-w-xl text-lg">¿Siempre te ha gustado la fotografía? Entonces has llegado al lugar indicado: desarrolla tu pasión con nuestros cursos de fotografía online y presenciales para principiantes, en los que te enseñamos paso a paso cómo lograr increíbles fotografías.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#camara" className="btn">¿Qué cámara tienes?</a>
            <a href={waGeneral} className="btn-claro" target="_blank" rel="noopener"><IconoWa /> WhatsApp</a>
          </div>
          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
            {cifras.map((c) => (
              <div key={c.valor}>
                <dt className="sr-only">{c.texto}</dt>
                <dd className="font-titulo text-4xl font-bold text-white">{c.valor}</dd>
                <dd className="max-w-[14rem] text-sm text-humo">{c.texto}</dd>
              </div>
            ))}
          </dl>
        </div>
        <figure className="min-w-0">
          <div className="relative overflow-hidden bg-black">
            <Img f={t.foto} loading="eager" className="aspect-[3/2] w-full object-cover object-[50%_30%]" />
            <MarcasVisor />
          </div>
          <figcaption className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 bg-black px-4 py-3">
            <Lectura t={t} />
            <span className="text-sm text-humo">Foto de alumno{t.autor ? `: ${t.autor}` : ''}, Nikon D90</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

const marcas = ['Canon', 'Nikon', 'Sony'] as const;

function TuCamara() {
  const [id, setId] = useState<string>(camaras[0].id);
  const [toma, setToma] = useState(0);
  const cam: Camara | undefined = camaras.find((c) => c.id === id);
  const t = cam?.fotos[Math.min(toma, cam.fotos.length - 1)];
  const elegir = (nuevo: string) => { setId(nuevo); setToma(0); };

  const mensaje = cam
    ? `Hola, tengo una cámara ${cam.marca} ${cam.modelo} y quiero informes de sus cursos de fotografía para principiantes.`
    : 'Hola, todavía no tengo cámara y quiero informes de sus cursos de fotografía para principiantes.';

  return (
    <section id="camara" className="noche bg-carbon py-16 text-white/85 sm:py-24">
      <div className="contenedor">
        <div className="max-w-3xl">
          <h2 className="text-4xl sm:text-6xl">¿Qué cámara tienes?</h2>
          <p className="mt-4 text-lg">Su formulario de inscripción lo pregunta. Elige la tuya y mira lo que sus alumnos fotografiaron con ella, con los ajustes que usaron: {portafolio.conDatos} de las {portafolio.total} fotos de su portafolio guardan la cámara, el lente y la exposición con que se tomaron.</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[17rem_minmax(0,1fr)]">
          <div className="min-w-0 space-y-5">
            {marcas.map((m) => (
              <fieldset key={m}>
                <legend className="font-titulo text-xl font-bold text-white">{m}</legend>
                <div className="mt-2 flex flex-wrap gap-2">
                  {camaras.filter((c) => c.marca === m).map((c) => {
                    const on = c.id === id;
                    return (
                      <button key={c.id} type="button" aria-pressed={on} onClick={() => elegir(c.id)}
                        className={`min-h-[44px] px-3 text-left font-semibold transition-colors ${on ? 'bg-rojo text-white' : 'bg-white/5 text-white/90 ring-1 ring-inset ring-white/20 hover:ring-white/60'}`}>
                        {c.modelo.replace('Alpha ', '')} <span className={`ml-1 font-mono text-[0.8rem] font-medium ${on ? 'text-white' : 'text-humo'}`}>{c.total}</span>
                      </button>
                    );
                  })}
                </div>
              </fieldset>
            ))}
            <button type="button" aria-pressed={!cam} onClick={() => elegir('ninguna')}
              className={`min-h-[44px] w-full px-3 text-left font-semibold transition-colors ${!cam ? 'bg-rojo text-white' : 'bg-white/5 text-white/90 ring-1 ring-inset ring-white/20 hover:ring-white/60'}`}>
              Todavía no tengo cámara
            </button>
            <p className="text-sm text-humo">El número es cuántas fotos de su portafolio se tomaron con esa cámara. Hay {portafolio.modelos} modelos distintos; aquí están los que tienen más fotos.</p>
          </div>

          <div className="min-w-0">
            <div className="relative overflow-hidden bg-black">
              {t ? (
                <img key={t.n} src={t.foto.src} width={t.foto.w} height={t.foto.h} alt={t.foto.alt} loading="lazy" decoding="async" className="revela aspect-[3/2] w-full object-contain" />
              ) : (
                <div className="flex aspect-[3/2] w-full items-center justify-center p-10 text-center">
                  <p className="max-w-md text-lg text-visor">Sin cámara todavía. Si necesitas cámara en préstamo durante la clase, solo trae una tarjeta SD para guardar tus fotos: no se prestan tarjetas de memoria.</p>
                </div>
              )}
              <MarcasVisor />
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 bg-black px-4 py-3">
              {t ? <Lectura t={t} /> : <p className="font-mono text-[0.95rem] text-visor">-- F-- ISO --</p>}
              <p className="text-sm text-humo" aria-live="polite">
                {cam && t ? `${cam.marca} ${cam.modelo}${t.lente ? `, lente ${t.lente}` : ''}${t.anio ? `, ${t.anio}` : ''}${t.autor ? `. Foto: ${t.autor}` : ''}` : 'Reglamento de la escuela, punto 14'}
              </p>
            </div>

            {cam ? (
              <div className="mt-3 grid grid-cols-6 gap-2" role="group" aria-label={`Fotos tomadas con la ${cam.marca} ${cam.modelo}`}>
                {cam.fotos.map((f, i) => (
                  <button key={f.n} type="button" aria-pressed={i === toma} onClick={() => setToma(i)} aria-label={`Ver: ${f.foto.alt}`}
                    className={`relative block overflow-hidden bg-black ${i === toma ? 'ring-2 ring-rojo-claro' : 'opacity-70 hover:opacity-100'}`}>
                    <img src={f.foto.src} width={f.foto.w} height={f.foto.h} alt="" loading="lazy" decoding="async" className="aspect-square w-full object-cover" />
                  </button>
                ))}
              </div>
            ) : null}

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a href={wa(mensaje)} className="btn" target="_blank" rel="noopener"><IconoWa /> {cam ? `Tengo una ${cam.modelo.replace('Alpha ', '')}: quiero informes` : 'Pedir informes sin cámara'}</a>
              <p className="text-sm text-humo">El mensaje ya lleva tu cámara escrita.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ListaCursos({ titulo, nota, cursos }: { titulo: string; nota: string; cursos: Curso[] }) {
  return (
    <div className="min-w-0">
      <h3 className="text-3xl">{titulo}</h3>
      <p className="mt-1 text-texto">{nota}</p>
      <ul className="mt-5 border-b border-tinta/15">
        {cursos.map((c) => (
          <li key={c.nombre} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-tinta/15 py-3">
            <span className="font-semibold text-tinta">{c.nombre}</span>
            <a className="enlace text-[0.95rem]" target="_blank" rel="noopener"
              href={wa(`Hola, quiero información del ${c.nombre} (modalidad ${c.modalidad.toLowerCase()}).`)}>
              Pedir informes
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Cursos() {
  return (
    <section id="cursos" className="py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="max-w-3xl text-4xl sm:text-6xl">Online con profesor en vivo, o presencial</h2>
        <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <ListaCursos titulo="Cursos online" nota="Profesor en vivo. Aprende fotografía desde donde estés." cursos={online} />
          <div className="min-w-0">
            <ListaCursos titulo="Cursos presenciales" nota="Solo algunas ciudades: su formulario de inscripción lista unidades en Aguascalientes, Durango, Saltillo y Torreón." cursos={presenciales} />
            <p className="mt-8 text-texto"><strong className="text-tinta">También hay talleres</strong> de {talleres.slice(0, -1).join(', ')} y {talleres[talleres.length - 1]}, y cursos de {cursosExtra.slice(0, -1).join(', ')} y {cursosExtra[cursosExtra.length - 1]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Profesor() {
  const f = profesor.foto;
  return (
    <section id="profesor" className="bg-white py-16 sm:py-24">
      <div className="contenedor grid items-center gap-10 md:grid-cols-[16rem_minmax(0,1fr)]">
        <img src={f.src} width={f.w} height={f.h} alt={f.alt} loading="lazy" decoding="async" className="mx-auto h-56 w-56 rounded-full md:h-64 md:w-64" />
        <div className="min-w-0">
          <h2 className="text-4xl sm:text-5xl">Cursos impartidos por {profesor.nombre}</h2>
          <p className="mt-5 max-w-3xl text-lg">{profesor.bio}</p>
          <a href={profesor.web} className="enlace mt-5 inline-block" target="_blank" rel="noopener">www.susunaga.mx</a>
        </div>
      </div>
    </section>
  );
}

function Inscripcion() {
  return (
    <section id="inscripcion" className="py-16 sm:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="min-w-0">
          <h2 className="text-4xl sm:text-6xl">Certifícate</h2>
          <p className="mt-4 text-lg">Obtén un diploma avalado por la Escuela de Fotografía y Artes Visuales Susunaga.</p>
          <p className="mt-6">Primero pide informes y aclara tus dudas; cuando estés listo, llena su formulario de inscripción. Ahí te preguntan el programa, si tu cámara es réflex o tiene modo manual, y su marca y modelo.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waGeneral} className="btn" target="_blank" rel="noopener"><IconoWa /> Pedir informes</a>
            <a href={negocio.inscripciones} className="btn-linea" target="_blank" rel="noopener">Formulario de inscripción</a>
          </div>
          <p className="mt-6 text-[0.95rem]">¿Ya eres alumno? <a className="enlace" href={negocio.pagos} target="_blank" rel="noopener">Pagos en línea</a>, <a className="enlace" href={negocio.material} target="_blank" rel="noopener">material de diplomados</a> y <a className="enlace" href={negocio.alumnos} target="_blank" rel="noopener">acceso alumnos</a>.</p>
        </div>
        <div className="min-w-0">
          <h3 className="text-3xl">Antes de inscribirte</h3>
          <dl className="mt-5 border-b border-tinta/15">
            {reglamento.map((r) => (
              <div key={r.t} className="grid gap-1 border-t border-tinta/15 py-4 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6">
                <dt className="font-semibold text-tinta">{r.t}</dt>
                <dd>{r.d}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm">Resumen de su <a className="enlace" href={negocio.reglamento} target="_blank" rel="noopener">reglamento interior</a>, vigente desde el 1 de enero de 2026.</p>
        </div>
      </div>
    </section>
  );
}

function Aprende() {
  return (
    <section id="aprende" className="bg-white py-16 sm:py-20">
      <div className="contenedor">
        <h2 className="text-4xl sm:text-5xl">Aprende ¡gratis!</h2>
        <p className="mt-3 max-w-2xl">Guías y consejos de Luis Susunaga en su fotoblog.</p>
        <ul className="mt-8 grid gap-x-10 md:grid-cols-2">
          {blog.map((b) => (
            <li key={b.url} className="border-t border-tinta/15 py-4">
              <a href={b.url} className="group block" target="_blank" rel="noopener">
                <span className="font-titulo text-2xl font-semibold leading-tight text-tinta group-hover:text-rojo">{b.t}</span>
                <span className="mt-1 block font-mono text-sm text-texto">{b.f}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="noche bg-tinta py-16 text-white/85 sm:py-24">
      <div className="contenedor grid gap-12 md:grid-cols-2">
        <div className="min-w-0">
          <h2 className="text-4xl sm:text-6xl">¿Necesitas información de nuestros cursos?</h2>
          <p className="mt-4 text-lg">Escríbenos; trataremos de contestar lo más rápido posible.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waGeneral} className="btn" target="_blank" rel="noopener"><IconoWa /> {negocio.whatsapp}</a>
            <a href={negocio.messenger} className="btn-claro" target="_blank" rel="noopener">Messenger</a>
          </div>
        </div>
        <div className="min-w-0 space-y-6">
          <div>
            <h3 className="text-2xl">Teléfonos y correo</h3>
            <p className="mt-2"><a className="enlace" href={telLink}>{negocio.tel800}</a> y <a className="enlace" href={`tel:${negocio.tel2Link}`}>{negocio.tel2}</a></p>
            <p><a className="enlace break-all" href={`mailto:${negocio.correo}`}>{negocio.correo}</a></p>
          </div>
          <div>
            <h3 className="text-2xl">Domicilio</h3>
            <p className="mt-2">{negocio.direccion}<br />{negocio.ciudad}</p>
            <a href={negocio.mapa} className="enlace mt-2 inline-flex items-center gap-2" target="_blank" rel="noopener"><IconoPin /> Ver en Google Maps</a>
          </div>
          <div>
            <h3 className="text-2xl">Redes</h3>
            <p className="mt-2 flex flex-wrap gap-x-5 gap-y-2">
              {negocio.redes.map((r) => <a key={r.nombre} className="enlace" href={r.url} target="_blank" rel="noopener">{r.nombre}</a>)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="noche border-t border-white/10 bg-tinta pb-24 pt-8 text-sm text-humo md:pb-8">
      <div className="contenedor flex flex-wrap justify-between gap-4">
        <p>{negocio.marca}. Enseñando fotografía desde {negocio.desde}.</p>
        <p>Fotos: portafolio de sus alumnos.</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-tinta text-[0.85rem] font-semibold text-white md:hidden">
      <a href={waGeneral} target="_blank" rel="noopener" className="flex min-h-[56px] flex-col items-center justify-center gap-0.5 bg-rojo"><IconoWa /> WhatsApp</a>
      <a href={telLink} className="flex min-h-[56px] flex-col items-center justify-center gap-0.5"><IconoTel /> Llamar</a>
      <a href={negocio.mapa} target="_blank" rel="noopener" className="flex min-h-[56px] flex-col items-center justify-center gap-0.5"><IconoPin /> Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#camara" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-tinta">Ir al contenido</a>
      <Encabezado />
      <main>
        <Portada />
        <TuCamara />
        <Cursos />
        <Profesor />
        <Inscripcion />
        <Aprende />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
