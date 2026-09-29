import { useState } from 'react';
import { archivo, blog, curriculum, foto, modalidades, motivos, negocio, queEs, wa, waCita } from './data/content';

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
  ['#hoja', 'Agendar'],
  ['#consulta', 'Consulta'],
  ['#curriculum', 'Currículum'],
  ['#blog', 'Blog'],
  ['#contacto', 'Contacto'],
] as const;

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-jade/10 bg-papel/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" aria-label="Fátima Buenfil Nutrición Clínica, ir al inicio">
          <img src={archivo('logo.png')} alt="Fátima Buenfil Nutrición Clínica" width={488} height={160} className="h-11 w-auto" />
        </a>
        <nav aria-label="Secciones" className="hidden lg:block">
          <ul className="flex gap-7">
            {secciones.map(([href, texto]) => <li key={href}><a href={href} className="text-gris hover:text-jade">{texto}</a></li>)}
          </ul>
        </nav>
        <a href={waCita} className="btn-jade hidden !min-h-[42px] !py-2 sm:inline-flex" target="_blank" rel="noopener"><IconoWa /> {negocio.whatsappTexto}</a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="relative">
      <div className="relative">
        <img src={foto('consulta')} alt="Fátima Buenfil con bata blanca en consulta, mostrando un glucómetro a una paciente frente a su escritorio con alimentos"
          width={1600} height={583} fetchPriority="high" className="h-[18rem] w-full object-cover object-[70%_center] sm:h-[26rem] lg:h-[30rem]" />
      </div>
      <div className="contenedor">
        <div className="relative -mt-16 max-w-3xl rounded-2xl bg-papel p-6 shadow-xl shadow-ciruela/10 sm:-mt-24 sm:p-10">
          <p className="text-granada">{negocio.titulo}</p>
          <h1 className="mt-2 text-[2.5rem] sm:text-[3.6rem]">Nutrición clínica en Mérida, Yucatán</h1>
          <p className="mt-4 text-[1.1rem] text-gris">
            Especialista en nutrición clínica: maestra en nutrición clínica, educadora en diabetes e investigadora clínica.
            Consulta en el <strong className="text-tinta">{negocio.consultorio}</strong>, a domicilio y a distancia.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#hoja" className="btn-jade">Llenar mi hoja de consulta</a>
            <a href={waCita} className="btn-linea" target="_blank" rel="noopener"><IconoWa /> WhatsApp {negocio.whatsappTexto}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function HojaDeConsulta() {
  const [motivo, setMotivo] = useState(motivos[0].id);
  const [modalidad, setModalidad] = useState(modalidades[0].id);
  const [nombre, setNombre] = useState('');
  const [institucion, setInstitucion] = useState('');
  const [nota, setNota] = useState('');
  const m = motivos.find((x) => x.id === motivo)!;
  const mod = modalidades.find((x) => x.id === modalidad)!;
  const fecha = new Date().toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'America/Merida' });
  const inst = !!m.institucional;
  const titulo = inst ? 'Solicitud de servicio' : 'Hoja de primera consulta';

  const mensaje = [
    `Hola, Fátima. Le envío mi ${titulo.toLowerCase()}:`,
    `Nombre: ${nombre.trim() || '(mi nombre)'}`,
    inst ? `Empresa o escuela: ${institucion.trim() || '(nombre)'}` : `Modalidad: ${mod.enHoja}`,
    `Motivo: ${m.nombre}`,
    nota.trim() ? `Nota: ${nota.trim()}` : '',
    inst ? '¿Me puede enviar información?' : '¿Qué fechas tiene disponibles?',
  ].filter(Boolean).join('\n');

  return (
    <section id="hoja" className="oscuro py-16 sm:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14">
        <div className="min-w-0">
          <h2 className="text-[2.3rem] sm:text-[3rem]">Tu hoja de primera consulta</h2>
          <p className="mt-3 text-papel/85">
            Una nutrióloga de hospital empieza con una hoja clínica. Llena la tuya aquí: se escribe sola a la derecha y la
            mandas por WhatsApp para agendar.
          </p>

          <fieldset className="mt-8">
            <legend className="font-bold text-miel">¿Para qué es la consulta?</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {motivos.map((x) => (
                <button key={x.id} type="button" aria-pressed={x.id === motivo} onClick={() => setMotivo(x.id)}
                  className={`opcion ${x.id === motivo ? 'border-miel bg-miel font-bold text-ciruela' : 'border-papel/25 text-papel hover:border-papel/60'}`}>
                  {x.nombre}
                </button>
              ))}
            </div>
          </fieldset>

          {inst ? (
            <label className="mt-7 block font-bold text-miel">Empresa o escuela
              <input value={institucion} onChange={(e) => setInstitucion(e.target.value)} maxLength={60} placeholder="Nombre de la institución"
                className="mt-2 w-full rounded-xl border border-papel/25 bg-white/10 px-4 py-3 font-normal text-papel placeholder:text-papel/60" />
            </label>
          ) : (
            <fieldset className="mt-7">
              <legend className="font-bold text-miel">¿Cómo te atiende?</legend>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {modalidades.map((x) => (
                  <button key={x.id} type="button" aria-pressed={x.id === modalidad} onClick={() => setModalidad(x.id)}
                    className={`rounded-xl border-2 px-4 py-3 text-left transition-colors ${x.id === modalidad ? 'border-agua bg-agua/15' : 'border-papel/20 hover:border-papel/50'}`}>
                    <span className="block font-bold text-papel">{x.nombre}</span>
                    <span className="mt-1 block text-[0.9rem] text-papel/80">{x.texto}</span>
                  </button>
                ))}
              </div>
            </fieldset>
          )}

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <label className="block font-bold text-miel">Tu nombre
              <input value={nombre} onChange={(e) => setNombre(e.target.value)} maxLength={50} placeholder="Nombre y apellido"
                className="mt-2 w-full rounded-xl border border-papel/25 bg-white/10 px-4 py-3 font-normal text-papel placeholder:text-papel/60" />
            </label>
            <label className="block font-bold text-miel">Nota (opcional)
              <input value={nota} onChange={(e) => setNota(e.target.value)} maxLength={90} placeholder="Algo que quieras adelantar"
                className="mt-2 w-full rounded-xl border border-papel/25 bg-white/10 px-4 py-3 font-normal text-papel placeholder:text-papel/60" />
            </label>
          </div>
        </div>

        <div className="min-w-0">
          <div className="hoja p-6 sm:p-9" aria-live="polite">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b-2 border-granada pb-4">
              <img src={archivo('logo.png')} alt="" aria-hidden="true" width={488} height={160} className="h-12 w-auto" />
              <div className="text-right text-[0.8rem] leading-snug text-gris">
                <p className="font-bold text-tinta">{negocio.titulo}</p>
                {negocio.cedulas.map(([t, n]) => <p key={t}>{t}: {n}</p>)}
              </div>
            </div>
            <p className="mt-5 font-display text-[1.6rem] text-jade">{titulo}</p>
            <p className="text-[0.85rem] text-gris">Mérida, Yucatán, {fecha}</p>
            <dl className="mt-4">
              <div className="renglon"><dt>Nombre</dt><dd>{nombre.trim() || ' '}</dd></div>
              {inst
                ? <div className="renglon"><dt>Institución</dt><dd>{institucion.trim() || ' '}</dd></div>
                : <div className="renglon"><dt>Modalidad</dt><dd>{mod.enHoja}</dd></div>}
              <div className="renglon"><dt>Motivo</dt><dd>{m.nombre}</dd></div>
              <div className="renglon"><dt>Nota</dt><dd>{nota.trim() || ' '}</dd></div>
            </dl>
            <p className="mt-6 text-[0.85rem] text-gris">{negocio.consultorio}. WhatsApp {negocio.whatsappTexto}.</p>
          </div>
          <a href={wa(mensaje)} className="btn mt-6 w-full sm:w-auto" target="_blank" rel="noopener"><IconoWa /> Enviar mi hoja por WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

function Consulta() {
  return (
    <section id="consulta" className="py-16 sm:py-24">
      <div className="contenedor">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-14">
          <div>
            <h2 className="text-[2.2rem] sm:text-[2.8rem]">¿Qué es la nutrición clínica?</h2>
            <p className="mt-4 text-gris">{queEs}</p>
            <ul className="mt-8 space-y-5">
              {modalidades.map((x) => (
                <li key={x.id} className="border-l-4 border-agua pl-5">
                  <h3 className="text-[1.2rem]">{x.nombre}</h3>
                  <p className="mt-1 text-gris">{x.texto}</p>
                </li>
              ))}
            </ul>
          </div>
          <figure>
            <img src={foto('calorimetria')} alt="Fátima Buenfil midiendo con un calorímetro la respiración de una paciente sentada"
              width={1600} height={583} loading="lazy" className="aspect-[16/9] w-full rounded-2xl object-cover object-right" />
            <div className="mt-4 grid grid-cols-2 gap-4">
              <img src={foto('escritorio')} alt="Fátima Buenfil en su escritorio con platos de fruta, verdura y cereales"
                width={350} height={350} loading="lazy" className="aspect-square w-full rounded-2xl object-cover" />
              <img src={foto('deporte')} alt="Fátima Buenfil en ropa deportiva en un gimnasio, sosteniendo una barra"
                width={350} height={350} loading="lazy" className="aspect-square w-full rounded-2xl object-cover" />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Curriculum() {
  return (
    <section id="curriculum" className="bg-white py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="text-[2.2rem] sm:text-[2.8rem]">{negocio.titulo}</h2>
          <ul className="mt-5 space-y-1.5">
            {negocio.grados.map((g) => <li key={g} className="flex gap-2"><span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-granada" aria-hidden="true" />{g}</li>)}
          </ul>
          <dl className="mt-6 flex flex-wrap gap-3">
            {negocio.cedulas.map(([t, n]) => (
              <div key={t} className="rounded-xl border-2 border-agua/60 px-4 py-2.5">
                <dt className="text-[0.85rem] text-gris">{t}</dt>
                <dd className="text-[1.25rem] font-bold tracking-wide text-jade">{n}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-[0.92rem] text-gris">
            Se pueden consultar en el <a href="https://www.cedulaprofesional.sep.gob.mx/" className="enlace" target="_blank" rel="noopener">Registro Nacional de Profesionistas de la SEP</a>.
          </p>
        </div>
        <div className="divide-y divide-jade/15 border-y border-jade/15">
          {curriculum.map((g, i) => (
            <details key={g.titulo} open={i === 0} className="group py-2">
              <summary className="flex min-h-[48px] cursor-pointer list-none items-center justify-between gap-4 py-2">
                <h3 className="text-[1.25rem]">{g.titulo}</h3>
                <span className="flex items-center gap-3 text-gris">
                  <span className="text-[0.9rem]">{g.items.length}</span>
                  <span aria-hidden="true" className="text-[1.4rem] text-jade transition-transform group-open:rotate-45">+</span>
                </span>
              </summary>
              <ul className="space-y-3 pb-5 pt-1">
                {g.items.map((t) => <li key={t} className="text-gris">{t}</li>)}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section id="blog" className="py-16 sm:py-20">
      <div className="contenedor">
        <h2 className="text-[2.2rem] sm:text-[2.6rem]">De su blog</h2>
        <ul className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-3">
          {blog.map((b) => (
            <li key={b.url} className="border-t-2 border-granada pt-4">
              <h3 className="text-[1.2rem]"><a href={b.url} className="hover:text-jade" target="_blank" rel="noopener">{b.titulo}</a></h3>
              <p className="mt-2 text-[0.97rem] text-gris">{b.resumen}</p>
              <a href={b.url} className="enlace mt-3 inline-block text-[0.95rem]" target="_blank" rel="noopener">Leer el artículo</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="oscuro py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-[2.2rem] sm:text-[2.8rem]">Agenda tu cita</h2>
          <p className="mt-3 text-papel/85">Escríbele por WhatsApp; si ya llenaste tu hoja, mándala desde ahí.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={waCita} className="btn" target="_blank" rel="noopener"><IconoWa /> WhatsApp {negocio.whatsappTexto}</a>
            <a href="#hoja" className="btn-claro">Llenar mi hoja</a>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            <a href={negocio.facebook} className="enlace" target="_blank" rel="noopener">Facebook</a>
            <a href={negocio.instagram} className="enlace" target="_blank" rel="noopener">Instagram @fatimanutricion</a>
          </div>
        </div>
        <ul className="space-y-4">
          <li className="rounded-2xl bg-white/[0.06] p-6 ring-1 ring-papel/15">
            <p className="flex gap-2 font-bold text-papel"><IconoPin className="mt-1 h-5 w-5 shrink-0 text-miel" />{negocio.consultorio}</p>
            <a href={negocio.mapa} className="enlace mt-2 inline-block" target="_blank" rel="noopener">Abrir en Google Maps</a>
          </li>
          <li className="rounded-2xl bg-white/[0.06] p-6 ring-1 ring-papel/15">
            <p className="flex gap-2 font-bold text-papel"><IconoPin className="mt-1 h-5 w-5 shrink-0 text-miel" />{negocio.otroHospital}</p>
            <a href={negocio.mapaAmericas} className="enlace mt-2 inline-block" target="_blank" rel="noopener">Abrir en Google Maps</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-tinta pb-28 pt-10 text-papel/80 lg:pb-10">
      <div className="contenedor flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-bold text-papel">Fátima Buenfil, Nutrición Clínica</p>
        <p className="text-[0.95rem]">Especialista en nutrición clínica en Mérida, Yucatán.</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-papel/15 bg-ciruela text-papel lg:hidden">
      <a href={waCita} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 bg-miel text-[0.9rem] font-bold text-ciruela"><IconoWa />WhatsApp</a>
      <a href={negocio.telefonoHref} className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-bold"><IconoTel />Llamar</a>
      <a href={negocio.mapa} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-bold"><IconoPin />Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#principal" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-papel focus:px-4 focus:py-2">Saltar al contenido</a>
      <Encabezado />
      <main id="principal">
        <Portada />
        <HojaDeConsulta />
        <Consulta />
        <Curriculum />
        <Blog />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
