import { useState } from 'react';
import {
  negocio, doctor, clinica, wa, preocupaciones, categorias, fabricantes,
} from './data/content';

// ── Iconos SVG inline ────────────────────────────────────────────────────────
const IconoWA = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="20" height="20">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.09-1.33A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Zm5.3 14.4c-.22.62-1.3 1.2-1.8 1.27-.46.06-1.04.09-1.68-.1a15.47 15.47 0 0 1-1.52-.57C9.7 16 8 13.5 7.87 13.33c-.13-.17-1.1-1.46-1.1-2.78 0-1.32.7-1.97 1-2.24.28-.28.6-.35.8-.35h.57c.2 0 .47-.07.73.56.27.65.9 2.2.98 2.36.08.16.13.35.03.56-.1.2-.15.33-.3.5-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.75 1.23 1.6 1.98 1.1 1 2.02 1.3 2.32 1.45.3.14.47.12.64-.07.17-.2.73-.85.93-1.14.19-.3.38-.24.64-.15.26.1 1.65.78 1.93.92.28.14.47.2.54.32.07.12.07.68-.15 1.3Z" />
  </svg>
);
const IconoTel = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="20" height="20">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8Z" />
  </svg>
);
const IconoMapa = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="20" height="20">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5Z" />
  </svg>
);

// ── Encabezado ───────────────────────────────────────────────────────────────
function Encabezado() {
  const [abierto, setAbierto] = useState(false);
  const msgWA = `Hola, me gustaría agendar una consulta con el ${negocio.doctor}.`;

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-noche/95 backdrop-blur-sm border-b border-hueso/10">
      <div className="contenedor flex items-center justify-between h-[4.5rem]">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 group" aria-label="Inicio">
          <img
            src={`${import.meta.env.BASE_URL}sello.svg`}
            alt="Sello Dr. Arístides Arellano"
            width={36} height={36}
            className="shrink-0"
          />
          <span className="font-titulo text-lg text-bronce leading-tight hidden sm:block">
            Dr. Arístides Arellano
          </span>
        </a>

        {/* Nav escritorio */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-hueso/80" aria-label="Navegación principal">
          <a href="#doctor" className="hover:text-bronce transition-colors">El Doctor</a>
          <a href="#arsenal" className="hover:text-bronce transition-colors">El Arsenal</a>
          <a href="#procedimientos" className="hover:text-bronce transition-colors">Procedimientos</a>
          <a href="#contacto" className="hover:text-bronce transition-colors">Contacto</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href={wa(msgWA)} target="_blank" rel="noopener noreferrer" className="btn hidden sm:inline-flex">
            <IconoWA /> Agendar valoración
          </a>
          {/* Hamburguesa móvil */}
          <button
            onClick={() => setAbierto(!abierto)}
            className="md:hidden p-2 text-hueso"
            aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={abierto}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26" aria-hidden="true">
              {abierto
                ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                : <><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></>
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {abierto && (
        <nav className="md:hidden bg-noche-2 border-t border-hueso/10 py-4 px-5 flex flex-col gap-4 text-base font-medium" aria-label="Menú móvil">
          {['doctor','arsenal','procedimientos','contacto'].map(id => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setAbierto(false)}
              className="text-hueso/80 hover:text-bronce transition-colors capitalize"
            >
              {id === 'arsenal' ? 'El Arsenal' : id === 'doctor' ? 'El Doctor' : id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <a
            href={wa(msgWA)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn self-start"
            onClick={() => setAbierto(false)}
          >
            <IconoWA /> Agendar valoración
          </a>
        </nav>
      )}
    </header>
  );
}

// ── Portada ──────────────────────────────────────────────────────────────────
function Portada() {
  const msgWA = `Hola, me gustaría agendar una consulta con el ${negocio.doctor}.`;
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-end pt-[4.5rem] overflow-hidden">
      {/* Imagen de fondo: doctor en quirófano */}
      <img
        src={doctor.foto}
        alt="El Dr. Arístides Arellano en su quirófano"
        width={928} height={1160}
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
        fetchPriority="high"
      />
      {/* Gradiente de abajo para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-t from-noche via-noche/60 to-transparent" aria-hidden="true" />

      <div className="relative contenedor pb-16 sm:pb-20">
        <p className="text-bronce text-sm font-medium tracking-widest uppercase mb-3">
          Cirugía Plástica · Puebla · desde 1971
        </p>
        <h1 className="font-titulo text-4xl sm:text-5xl md:text-6xl text-hueso max-w-2xl mb-4">
          Dr. Arístides Arellano
          <span className="block text-2xl sm:text-3xl md:text-4xl text-bronce mt-1">
            Cirujano Plástico y Reconstructivo en Puebla
          </span>
        </h1>
        <p className="text-hueso/80 text-lg max-w-xl mb-8">
          Más de 40 años de práctica. Cédula de especialidad D.G.P. 0002008.
          Cada caso se valora y se planea de forma individual.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href={wa(msgWA)} target="_blank" rel="noopener noreferrer" className="btn">
            <IconoWA /> Agendar valoración
          </a>
          <a href="#arsenal" className="btn-linea">Ver procedimientos</a>
        </div>
        {/* Credenciales */}
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-hueso/50">
          <span>F.I.C.S. N.º {negocio.fics}</span>
          <span>Cédula DGP {negocio.cedula2}</span>
          <span>COFEPRIS {negocio.cofepris}</span>
        </div>
      </div>
    </section>
  );
}

// ── El Doctor ────────────────────────────────────────────────────────────────
function ElDoctor() {
  return (
    <section id="doctor" className="py-20 bg-piedra">
      <div className="contenedor">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-bronce text-sm font-medium tracking-wider uppercase mb-3">El Doctor</p>
            <h2 className="font-titulo text-4xl sm:text-5xl text-hueso mb-6">
              {doctor.titulo}
            </h2>
            <p className="text-hueso/70 text-sm mb-6">{doctor.subtitulo}</p>
            <p className="text-hueso/80 mb-8 leading-relaxed">{doctor.bio}</p>

            <ul className="space-y-3 mb-8">
              {doctor.credenciales.map(c => (
                <li key={c.etiqueta} className="flex items-baseline gap-3 text-sm">
                  <span className="text-hueso/50 shrink-0">{c.etiqueta}</span>
                  <span className="flex-1 border-t border-hueso/15 mx-2" aria-hidden="true" />
                  <span className="text-bronce font-medium">{c.valor}</span>
                </li>
              ))}
            </ul>

            <p className="text-hueso/40 text-xs">{doctor.nota}</p>
          </div>

          <div className="flex justify-center">
            <img
              src={doctor.retrato}
              alt="Dr. Arístides Arellano, cirujano plástico en Puebla"
              width={471} height={589}
              className="rounded-xl object-cover max-h-[520px] w-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── El Arsenal (elemento memorable) ─────────────────────────────────────────
function ElArsenal() {
  const [seleccionId, setSeleccionId] = useState(preocupaciones[0].id);
  const seleccion = preocupaciones.find(p => p.id === seleccionId)!;
  const msgWA = (preocupacion: string) =>
    `Hola, me gustaría agendar una consulta con el ${negocio.doctor}. Me interesa tratar: ${preocupacion}.`;

  return (
    <section id="arsenal" className="py-20 bg-noche">
      <div className="contenedor">
        <p className="text-bronce text-sm font-medium tracking-wider uppercase mb-3">El Arsenal</p>
        <h2 className="font-titulo text-4xl sm:text-5xl text-hueso mb-3 max-w-2xl">
          ¿Qué quieres resolver?
        </h2>
        <p className="text-hueso/60 max-w-xl mb-10">
          Más de veinte plataformas en el consultorio. Se elige el equipo por el problema
          — no se fuerza el problema al único aparato disponible.
        </p>

        {/* Selector de preocupaciones */}
        <div className="flex flex-wrap gap-2 mb-10" role="listbox" aria-label="Selecciona tu preocupación">
          {preocupaciones.map(p => (
            <button
              key={p.id}
              role="option"
              aria-selected={p.id === seleccionId}
              onClick={() => setSeleccionId(p.id)}
              className={[
                'px-4 py-2 rounded-full text-sm font-medium transition-colors border',
                p.id === seleccionId
                  ? 'bg-bronce text-noche border-bronce'
                  : 'bg-transparent text-hueso/70 border-hueso/20 hover:border-bronce hover:text-bronce',
              ].join(' ')}
            >
              {p.etiqueta}
            </button>
          ))}
        </div>

        {/* Resultado */}
        <div key={seleccionId} className="fade-in">
          <p className="text-hueso/50 text-sm mb-6">{seleccion.descripcion}</p>

          <div className={`grid gap-6 ${seleccion.equipos.length === 1 ? 'sm:grid-cols-1 max-w-sm' : seleccion.equipos.length === 2 ? 'sm:grid-cols-2 max-w-2xl' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
            {seleccion.equipos.map(eq => (
              <article
                key={eq.nombre}
                className="bg-piedra rounded-xl overflow-hidden flex flex-col border border-hueso/10"
              >
                {eq.foto && (
                  <div className="aspect-[4/3] overflow-hidden bg-noche-2">
                    <img
                      src={eq.foto}
                      alt={eq.nombre}
                      width={eq.w} height={eq.h}
                      className="w-full h-full object-contain p-4"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-titulo text-xl text-hueso mb-1">{eq.nombre}</h3>
                  <p className="text-hueso/50 text-xs mb-3">{eq.descripcion}</p>
                  <p className="text-bronce text-sm flex-1">{eq.tratamiento}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <a
              href={msgWA(seleccion.etiqueta)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <IconoWA />
              Consultar sobre {seleccion.etiqueta.toLowerCase()}
            </a>
          </div>
        </div>

        {/* Ticker de logos de fabricantes */}
        <div className="mt-16 border-t border-hueso/10 pt-10">
          <p className="text-hueso/40 text-xs text-center mb-6 tracking-wider uppercase">Fabricantes</p>
          <div
            className="flex flex-wrap justify-center items-center gap-8"
            aria-label="Fabricantes de equipos médicos"
          >
            {fabricantes.map(f => (
              <img
                key={f.nombre}
                src={f.foto}
                alt={f.nombre}
                width={f.w} height={f.h}
                className="h-8 w-auto opacity-50 hover:opacity-80 transition-opacity"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Procedimientos ───────────────────────────────────────────────────────────
function Procedimientos() {
  const [activo, setActivo] = useState(categorias[0].id);
  const cat = categorias.find(c => c.id === activo)!;

  return (
    <section id="procedimientos" className="py-20 bg-crema">
      <div className="contenedor">
        <p className="text-bronce-hondo text-sm font-medium tracking-wider uppercase mb-3">Procedimientos</p>
        <h2 className="font-titulo text-4xl sm:text-5xl text-noche mb-4 max-w-2xl">
          Áreas de práctica
        </h2>
        <p className="text-noche/60 max-w-xl mb-10">
          Más de 140 procedimientos de cirugía plástica, medicina estética y dermatología,
          cada uno planeado de forma individual. Los resultados pueden variar según cada persona.
        </p>

        {/* Pestañas */}
        <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Categorías de procedimientos">
          {categorias.map(c => (
            <button
              key={c.id}
              role="tab"
              aria-selected={c.id === activo}
              aria-controls={`panel-${c.id}`}
              onClick={() => setActivo(c.id)}
              className={[
                'px-4 py-2 rounded-full text-sm font-medium transition-colors border',
                c.id === activo
                  ? 'bg-noche text-crema border-noche'
                  : 'bg-transparent text-noche/60 border-noche/20 hover:border-noche/60 hover:text-noche',
              ].join(' ')}
            >
              {c.titulo}
            </button>
          ))}
        </div>

        {/* Lista de procedimientos */}
        <div
          id={`panel-${activo}`}
          role="tabpanel"
          key={activo}
          className="fade-in"
        >
          <p className="text-noche/50 text-sm mb-6">{cat.descripcion}</p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
            {cat.procedimientos.map(p => (
              <li key={p} className="flex items-baseline gap-2 text-noche/80 text-sm border-b border-noche/10 pb-2">
                <span className="text-bronce-hondo shrink-0" aria-hidden="true">→</span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <a
            href={wa(`Hola, me gustaría saber más sobre los procedimientos de ${cat.titulo} del Dr. Arístides Arellano.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-bronce-hondo font-medium hover:text-noche transition-colors"
          >
            <IconoWA /> Consultar sobre {cat.titulo.toLowerCase()}
          </a>
        </div>
      </div>
    </section>
  );
}

// ── La Clínica + Contacto ────────────────────────────────────────────────────
function LaClinica() {
  const msgWA = `Hola, me gustaría agendar una valoración en la ${negocio.nombre}.`;
  return (
    <section id="contacto" className="py-20 bg-noche-2">
      <div className="contenedor">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Mapa embebido */}
          <div>
            <iframe
              src={negocio.mapaEmbed}
              width="100%"
              height="320"
              style={{ border: 0, borderRadius: '0.75rem' }}
              allowFullScreen
              loading="lazy"
              title={`Ubicación de ${negocio.nombre}`}
              className="w-full"
            />
          </div>

          {/* Datos de contacto */}
          <div>
            <p className="text-bronce text-sm font-medium tracking-wider uppercase mb-3">El Consultorio</p>
            <h2 className="font-titulo text-4xl sm:text-5xl text-hueso mb-4">
              {clinica.titulo}
            </h2>
            <p className="text-hueso/70 mb-8 leading-relaxed">{clinica.descripcion}</p>

            <address className="not-italic space-y-4 text-hueso/80 mb-8">
              <p>
                <strong className="text-hueso font-medium block text-sm">{negocio.nombre}</strong>
                {negocio.direccion}
              </p>
              <p>
                <strong className="text-hueso font-medium block text-sm">Horario</strong>
                {negocio.horario}
              </p>
              <div className="flex flex-col gap-2">
                <a href={`tel:${negocio.telefonoTel}`} className="flex items-center gap-2 hover:text-bronce transition-colors">
                  <IconoTel /> {negocio.telefono}
                </a>
                <a href={wa(msgWA)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-bronce transition-colors">
                  <IconoWA /> WhatsApp +52 221 155 2228
                </a>
                <a href={negocio.mapa} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-bronce transition-colors">
                  <IconoMapa /> Ver en Google Maps
                </a>
              </div>
            </address>

            <div className="flex flex-wrap gap-3">
              <a href={wa(msgWA)} target="_blank" rel="noopener noreferrer" className="btn">
                <IconoWA /> Agendar valoración
              </a>
              <a href={negocio.comollegar} target="_blank" rel="noopener noreferrer" className="btn-linea">
                <IconoMapa /> Cómo llegar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Pie de página ─────────────────────────────────────────────────────────────
function Pie() {
  return (
    <footer className="bg-noche border-t border-hueso/10 py-10">
      <div className="contenedor">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Identidad */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img src={`${import.meta.env.BASE_URL}sello.svg`} alt="" aria-hidden="true" width={32} height={32} />
              <span className="font-titulo text-base text-bronce">Dr. Arístides Arellano Huacuja</span>
            </div>
            <p className="text-hueso/50 text-sm leading-relaxed">
              Cirugía Plástica, Estética y Reconstructiva · Puebla.
              Una tradición de la forma humana desde 1971.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <p className="text-hueso/30 text-xs uppercase tracking-wider mb-3">Contacto</p>
            <address className="not-italic space-y-2 text-hueso/60 text-sm">
              <p>{negocio.direccion}</p>
              <a href={`tel:${negocio.telefonoTel}`} className="block hover:text-bronce transition-colors">{negocio.telefono}</a>
              <a href={`https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent('Hola, me gustaría agendar una consulta con el Dr. Arístides Arellano.')}`} target="_blank" rel="noopener noreferrer" className="block hover:text-bronce transition-colors">
                WhatsApp +52 221 155 2228
              </a>
              <p>{negocio.horario}</p>
            </address>
          </div>

          {/* Legal */}
          <div>
            <p className="text-hueso/30 text-xs uppercase tracking-wider mb-3">Legal</p>
            <ul className="space-y-1 text-hueso/50 text-xs">
              <li>Cédula Médico Cirujano D.G.P. {negocio.cedula1}</li>
              <li>Cédula Especialidad D.G.P. {negocio.cedula2}</li>
              <li>F.I.C.S. N.º {negocio.fics}</li>
              <li>Permiso Publicidad COFEPRIS {negocio.cofepris}</li>
              <li className="mt-2 leading-relaxed">
                Los resultados de todo procedimiento quirúrgico pueden variar de una persona a otra.
                La información de este sitio es de carácter divulgativo y no sustituye una consulta médica.
              </li>
              <li className="mt-2">© 2026 Dr. Arístides Arellano Huacuja · Puebla, México.</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── Barra fija en el celular ──────────────────────────────────────────────────
function BarraMovil() {
  const msgWA = `Hola, me gustaría agendar una consulta con el ${negocio.doctor}.`;
  return (
    <nav
      className="fixed bottom-0 inset-x-0 md:hidden z-50 bg-noche border-t border-hueso/10"
      aria-label="Acciones rápidas"
    >
      <div className="grid grid-cols-3">
        <a
          href={wa(msgWA)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 text-bronce text-[0.65rem] font-medium"
        >
          <IconoWA />
          <span>WhatsApp</span>
        </a>
        <a
          href={`tel:${negocio.telefonoTel}`}
          className="flex flex-col items-center justify-center gap-1 py-3 text-hueso/70 text-[0.65rem] font-medium hover:text-bronce transition-colors"
        >
          <IconoTel />
          <span>Llamar</span>
        </a>
        <a
          href={negocio.comollegar}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 text-hueso/70 text-[0.65rem] font-medium hover:text-bronce transition-colors"
        >
          <IconoMapa />
          <span>Cómo llegar</span>
        </a>
      </div>
    </nav>
  );
}

// ── App principal ─────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Encabezado />
      <main id="main">
        <Portada />
        <ElDoctor />
        <ElArsenal />
        <Procedimientos />
        <LaClinica />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
