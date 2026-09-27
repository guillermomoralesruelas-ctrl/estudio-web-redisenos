import { useState } from 'react';
import {
  contacto,
  motorReservas,
  wa,
  gastronomia,
  habitaciones,
  vistas,
  type VistaId,
  actividades,
  razonesReservar,
  todoIncluido,
  bodas,
  costaAlegre,
} from './data/content';

// ---------------- helpers ----------------
const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;

// ---------------- Nav ----------------
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: '#gastronomia', label: 'Gastronomía' },
    { href: '#habitaciones', label: 'Habitaciones' },
    { href: '#experiencias', label: 'Experiencias' },
    { href: '#golf', label: 'Golf' },
    { href: '#ubicacion', label: 'Ubicación' },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-fondo/90 backdrop-blur border-b border-white/10">
      <div className="contenedor flex items-center justify-between h-16">
        <a href="#inicio" aria-label="Grand Isla Navidad Resort, volver al inicio">
          <img
            src={img('logo.webp')}
            alt="Grand Isla Navidad Resort"
            width={130}
            height={66}
            className="h-9 w-auto"
          />
        </a>
        <nav className="hidden md:flex gap-6" aria-label="Secciones">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-tinta-suave hover:text-tinta transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={motorReservas} className="btn-reserva hidden sm:inline-flex" target="_blank" rel="noopener noreferrer">
            Reservar
          </a>
          <button
            className="md:hidden p-2 text-tinta-suave"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-panel border-t border-white/10 py-4">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="block px-6 py-3 text-sm text-tinta-suave hover:text-tinta"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="px-6 pt-3">
            <a href={motorReservas} className="btn-reserva w-full justify-center" target="_blank" rel="noopener noreferrer">
              Reservar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// ---------------- Hero ----------------
function Hero() {
  return (
    <section id="inicio" className="relative h-screen min-h-[600px] flex items-end">
      <img
        src={img('aerea-resort.webp')}
        alt="Vista aérea del Grand Isla Navidad Resort con la laguna y el Océano Pacífico"
        width={1280}
        height={730}
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-fondo via-fondo/50 to-transparent" />
      <div className="relative contenedor pb-20 md:pb-28">
        <p className="etiqueta mb-3">Costa Alegre · Manzanillo, Colima</p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium leading-tight mb-4 max-w-2xl">
          Grand Isla Navidad Resort
        </h1>
        <p className="text-tinta-suave max-w-xl mb-8 text-lg">
          Entre la Laguna de la Navidad y el Océano Pacífico. Todo incluido, marina de 207 yates
          y campo de golf de campeonato.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href={motorReservas} className="btn-reserva" target="_blank" rel="noopener noreferrer">
            Reservar
          </a>
          <a href={wa('Hola, me gustaría obtener información sobre el resort y las tarifas disponibles.')} className="btn-outline" target="_blank" rel="noopener noreferrer">
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------------- Todo Incluido ----------------
function TodoIncluido() {
  return (
    <section className="py-20 bg-panel">
      <div className="contenedor">
        <div className="max-w-2xl mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-4">Todo Incluido</h2>
          <p className="text-tinta-suave">{todoIncluido.descripcion}</p>
          <p className="mt-3 text-sm text-tinta-suave">{todoIncluido.bebidas}</p>
        </div>
      </div>
    </section>
  );
}

// ---------------- Gastronomía ----------------
function Gastronomia() {
  return (
    <section id="gastronomia" className="py-20">
      <div className="contenedor">
        <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-12">Gastronomía</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gastronomia.map(r => (
            <article key={r.slug} className="bg-panel rounded-lg overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img(r.foto)}
                  alt={r.alt}
                  width={600}
                  height={450}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl font-medium mb-2">{r.nombre}</h3>
                <p className="text-sm text-tinta-suave">{r.descripcion}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- ¿A qué despiertas? (elemento memorable) ----------------

// SVG para la laguna (manglar y amanecer)
function DibujoLaguna() {
  return (
    <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-auto max-h-56">
      {/* cielo */}
      <defs>
        <linearGradient id="cielolg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d2b34" />
          <stop offset="60%" stopColor="#1a4a5a" />
          <stop offset="100%" stopColor="#e07b2a" />
        </linearGradient>
        <linearGradient id="agualg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a4a5a" />
          <stop offset="100%" stopColor="#0d2028" />
        </linearGradient>
      </defs>
      <rect width="400" height="220" fill="url(#cielolg)" />
      {/* agua */}
      <rect x="0" y="140" width="400" height="80" fill="url(#agualg)" />
      {/* reflejo amanecer en el agua */}
      <ellipse cx="200" cy="165" rx="30" ry="8" fill="#e07b2a" opacity="0.35" />
      <ellipse cx="200" cy="180" rx="50" ry="6" fill="#e07b2a" opacity="0.15" />
      {/* manglar izquierda */}
      <rect x="10" y="90" width="8" height="55" fill="#0d2820" />
      <ellipse cx="14" cy="90" rx="22" ry="28" fill="#0d3318" />
      <rect x="35" y="100" width="6" height="45" fill="#0d2820" />
      <ellipse cx="38" cy="99" rx="18" ry="22" fill="#0d3318" />
      <rect x="55" y="108" width="5" height="37" fill="#0d2820" />
      <ellipse cx="57" cy="108" rx="14" ry="18" fill="#0d3318" />
      {/* manglar derecha */}
      <rect x="350" y="95" width="8" height="50" fill="#0d2820" />
      <ellipse cx="354" cy="94" rx="22" ry="26" fill="#0d3318" />
      <rect x="325" y="103" width="7" height="42" fill="#0d2820" />
      <ellipse cx="329" cy="102" rx="18" ry="22" fill="#0d3318" />
      <rect x="310" y="110" width="5" height="35" fill="#0d2820" />
      <ellipse cx="312" cy="110" rx="14" ry="17" fill="#0d3318" />
      {/* horizonte */}
      <line x1="0" y1="140" x2="400" y2="140" stroke="#2a5a6a" strokeWidth="1" />
      {/* ave 1 */}
      <path d="M160 70 Q165 66 170 70" stroke="#e8d8b0" strokeWidth="1.5" fill="none" />
      {/* ave 2 */}
      <path d="M200 55 Q206 51 212 55" stroke="#e8d8b0" strokeWidth="1.5" fill="none" />
      {/* ave 3 */}
      <path d="M230 65 Q235 61 240 65" stroke="#e8d8b0" strokeWidth="1.3" fill="none" />
      {/* sol naciente */}
      {/* sol naciente como semicírculo */}
      <path d="M183 140 Q200 124 217 140" fill="#e07b2a" opacity="0.9" />
    </svg>
  );
}

// SVG para el Pacífico
function DibujoPacifico() {
  return (
    <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-auto max-h-56">
      <defs>
        <linearGradient id="cielopac" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1828" />
          <stop offset="55%" stopColor="#1a3a6a" />
          <stop offset="100%" stopColor="#f4843a" />
        </linearGradient>
        <linearGradient id="aguapac" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a3a6a" />
          <stop offset="100%" stopColor="#0a1828" />
        </linearGradient>
      </defs>
      <rect width="400" height="220" fill="url(#cielopac)" />
      <rect x="0" y="145" width="400" height="75" fill="url(#aguapac)" />
      {/* sol en el horizonte */}
      <path d="M175 145 Q200 118 225 145" fill="#f4843a" opacity="0.95" />
      <ellipse cx="200" cy="145" rx="25" ry="7" fill="#f4843a" opacity="0.7" />
      {/* destellos */}
      <ellipse cx="200" cy="170" rx="60" ry="6" fill="#f4843a" opacity="0.25" />
      <ellipse cx="200" cy="185" rx="90" ry="5" fill="#f4843a" opacity="0.12" />
      {/* terraza barandal */}
      <rect x="0" y="195" width="400" height="25" fill="#18130e" />
      <rect x="0" y="193" width="400" height="4" fill="#2a221a" />
      {/* postes del barandal */}
      {[0, 50, 100, 150, 200, 250, 300, 350].map(x => (
        <rect key={x} x={x + 15} y="193" width="3" height="27" fill="#3a2e24" />
      ))}
      {/* nubes */}
      <ellipse cx="100" cy="80" rx="40" ry="14" fill="#1a2f4a" opacity="0.6" />
      <ellipse cx="300" cy="65" rx="35" ry="12" fill="#1a2f4a" opacity="0.5" />
    </svg>
  );
}

// SVG para la marina
function DibujoMarina() {
  return (
    <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-auto max-h-56">
      <defs>
        <linearGradient id="cielomar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#060d14" />
          <stop offset="100%" stopColor="#102a3a" />
        </linearGradient>
        <linearGradient id="aguamar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1e2c" />
          <stop offset="100%" stopColor="#04100a" />
        </linearGradient>
      </defs>
      <rect width="400" height="220" fill="url(#cielomar)" />
      {/* estrellas */}
      {[[30,20],[80,35],[140,15],[190,28],[250,10],[300,22],[360,30],[50,55],[170,48],[320,42]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="1.2" fill="white" opacity="0.7" />
      ))}
      {/* luna */}
      <circle cx="340" cy="35" r="10" fill="#f0e8c0" />
      <circle cx="345" cy="31" r="9" fill="#102a3a" />
      {/* agua */}
      <rect x="0" y="130" width="400" height="90" fill="url(#aguamar)" />
      <line x1="0" y1="130" x2="400" y2="130" stroke="#1a3a4a" strokeWidth="1" />
      {/* yate 1 */}
      <rect x="40" y="100" width="50" height="32" rx="3" fill="#1c2c3c" />
      <rect x="63" y="75" width="3" height="28" fill="#2a3a4a" />
      <path d="M66 75 L86 100 L66 100 Z" fill="#d0c89a" opacity="0.5" />
      {/* yate 2 */}
      <rect x="120" y="105" width="60" height="27" rx="3" fill="#1c2c3c" />
      <rect x="148" y="78" width="3" height="30" fill="#2a3a4a" />
      <path d="M151 78 L175 105 L151 105 Z" fill="#d0c89a" opacity="0.45" />
      {/* yate 3 (más pequeño al fondo) */}
      <rect x="220" y="110" width="40" height="22" rx="2" fill="#162030" />
      <rect x="238" y="90" width="2" height="22" fill="#2a3a4a" />
      <path d="M240 90 L258 110 L240 110 Z" fill="#d0c89a" opacity="0.35" />
      {/* yate 4 */}
      <rect x="290" y="107" width="50" height="25" rx="3" fill="#1c2c3c" />
      <rect x="313" y="83" width="3" height="27" fill="#2a3a4a" />
      <path d="M316 83 L336 107 L316 107 Z" fill="#d0c89a" opacity="0.4" />
      {/* reflejos */}
      <line x1="65" y1="130" x2="60" y2="160" stroke="#d0c89a" strokeWidth="1" opacity="0.2" />
      <line x1="150" y1="130" x2="145" y2="165" stroke="#d0c89a" strokeWidth="1" opacity="0.2" />
      <line x1="316" y1="130" x2="311" y2="162" stroke="#d0c89a" strokeWidth="1" opacity="0.2" />
      {/* luces del embarcadero */}
      {[20, 70, 130, 190, 240, 300, 360].map((x, i) => (
        <circle key={i} cx={x} cy={128} r="2.5" fill="#ffd88a" opacity="0.8" />
      ))}
    </svg>
  );
}

function DespertarVista({ id }: { id: VistaId }) {
  if (id === 'laguna') return <DibujoLaguna />;
  if (id === 'pacifico') return <DibujoPacifico />;
  return <DibujoMarina />;
}

function AQueDespertas() {
  const [vistaId, setVistaId] = useState<VistaId>('laguna');
  const vista = vistas.find(v => v.id === vistaId)!;
  const suitesVista = habitaciones.filter(h => vista.suites.includes(h.slug));

  return (
    <section id="habitaciones" className="py-20 bg-panel">
      <div className="contenedor">
        <div className="mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-3">¿A qué despiertas?</h2>
          <p className="text-tinta-suave max-w-2xl">
            Grand Isla Navidad está en una isla: la laguna al norte, el Pacífico al oeste, la
            marina al sur. La vista desde tu habitación depende del lado que elijas.
          </p>
        </div>

        {/* Selector de vistas */}
        <div className="flex flex-wrap gap-3 mb-8" role="group" aria-label="Elegir vista">
          {vistas.map(v => (
            <button
              key={v.id}
              onClick={() => setVistaId(v.id)}
              aria-pressed={vistaId === v.id}
              className={`px-4 py-2 rounded text-sm font-medium font-sans transition-colors ${
                vistaId === v.id
                  ? 'bg-acento text-tinta'
                  : 'bg-panel2 text-tinta-suave hover:text-tinta'
              }`}
            >
              {v.nombre}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Dibujo */}
          <div
            className="rounded-xl overflow-hidden p-6 transition-colors"
            style={{ backgroundColor: vista.colorFondo }}
          >
            <div aria-label={`Ilustración de la vista: ${vista.nombre}`}>
              <DespertarVista id={vistaId} />
            </div>
            <p className="mt-4 text-sm text-tinta-suave">{vista.descripcion}</p>
          </div>

          {/* Suites con esta vista */}
          <div>
            <p className="etiqueta mb-4">
              {suitesVista.length === 1 ? 'Suite con esta vista' : 'Suites con esta vista'}
            </p>
            <div className="flex flex-col gap-5">
              {suitesVista.map(suite => (
                <article key={suite.slug} className="flex gap-4 bg-panel2 rounded-lg overflow-hidden">
                  <img
                    src={img(suite.foto)}
                    alt={suite.alt}
                    width={160}
                    height={120}
                    loading="lazy"
                    className="w-32 sm:w-40 object-cover flex-shrink-0"
                  />
                  <div className="p-4 min-w-0">
                    <h3 className="font-serif text-lg font-medium mb-1">{suite.nombre}</h3>
                    <p className="text-xs text-tinta-suave mb-3">{suite.descripcion}</p>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href={motorReservas}
                        className="btn-reserva text-xs px-3 py-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Reservar
                      </a>
                      <a
                        href={wa(`Hola, me interesa reservar la ${suite.nombre} con vista a ${vista.nombre}. ¿Me pueden dar disponibilidad y tarifa?`)}
                        className="btn-outline text-xs px-3 py-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-6">
              <a href={motorReservas} className="text-sm text-tinta-suave hover:text-tinta underline underline-offset-4" target="_blank" rel="noopener noreferrer">
                Ver todas las habitaciones →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------- Experiencias ----------------
function Experiencias() {
  const conFoto = actividades.filter(a => a.foto);
  const sinFoto = actividades.filter(a => !a.foto);
  return (
    <section id="experiencias" className="py-20">
      <div className="contenedor">
        <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-12">La experiencia</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {conFoto.map(a => (
            <div key={a.nombre} className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <img
                src={img(a.foto!)}
                alt={a.alt}
                width={600}
                height={450}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fondo/80 to-transparent flex flex-col justify-end p-5">
                <h3 className="font-serif text-xl font-medium">{a.nombre}</h3>
                <p className="text-sm text-tinta-suave mt-1">{a.descripcion}</p>
              </div>
            </div>
          ))}
          {sinFoto.map(a => (
            <div key={a.nombre} className="bg-panel rounded-xl p-6 flex flex-col">
              <h3 className="font-serif text-xl font-medium mb-2">{a.nombre}</h3>
              <p className="text-sm text-tinta-suave">{a.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- Country Club ----------------
function Golf() {
  return (
    <section id="golf" className="py-20 bg-panel">
      <div className="contenedor">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-4">Country Club Isla Navidad</h2>
            <p className="text-tinta-suave mb-6">
              Campo de golf de campeonato en la Costa Alegre. Fairways con vista a la laguna y al
              Pacífico, en un entorno natural único.
            </p>
            <a
              href={wa('Hola, me gustaría obtener información sobre el campo de golf y las tarifas para huéspedes del resort.')}
              className="btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Preguntar por el golf
            </a>
          </div>
          <div className="rounded-xl overflow-hidden aspect-video">
            <img
              src={img('golf.webp')}
              alt="Campo de golf del Country Club Isla Navidad con vista al Pacífico"
              width={1280}
              height={595}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------- Bodas y Eventos ----------------
function BodasEventos() {
  return (
    <section className="py-20">
      <div className="contenedor">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl overflow-hidden row-span-2">
              <img
                src={img('bodas-1.webp')}
                alt="Boda en el jardín del Grand Isla Navidad Resort"
                width={615}
                height={900}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src={img('bodas-2.webp')}
                alt="Decoración floral en evento de bodas del resort"
                width={615}
                height={900}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src={img('alberca.webp')}
                alt="Área de alberca disponible para eventos privados"
                width={1200}
                height={684}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-4">Bodas y Eventos</h2>
            <p className="text-tinta-suave mb-3">{bodas.descripcion}</p>
            <p className="text-sm text-tinta-suave mb-6">{bodas.capacidad}</p>
            <a
              href={wa('Hola, me gustaría información sobre bodas y eventos en Grand Isla Navidad Resort.')}
              className="btn-reserva"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar disponibilidad
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------- Costa Alegre ----------------
function CostaAlegre() {
  return (
    <section className="py-20 bg-panel">
      <div className="contenedor">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-4">Costa Alegre</h2>
            <p className="text-tinta-suave mb-8">{costaAlegre.descripcion}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {costaAlegre.alrededores.map(l => (
                <div key={l.nombre} className="bg-panel2 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-lg font-medium">{l.nombre}</h3>
                    <span className="text-xs text-tinta-suave">{l.tiempo}</span>
                  </div>
                  <p className="text-xs text-tinta-suave">{l.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img
              src={img('costa-alegre.webp')}
              alt="Panorámica de la Costa Alegre desde el Grand Isla Navidad Resort"
              width={600}
              height={496}
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------- ¿Por qué reservar directo? ----------------
function PorQueReservar() {
  return (
    <section className="py-16">
      <div className="contenedor">
        <div className="bg-panel2 rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium mb-2">¿Por qué reservar aquí?</h2>
            <p className="text-sm text-tinta-suave mb-6">Reserva directo en la página oficial del hotel.</p>
            <ul className="space-y-2">
              {razonesReservar.map(r => (
                <li key={r} className="flex items-start gap-3 text-sm text-tinta-suave">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-dorado flex-shrink-0 mt-0.5" aria-hidden="true">
                    <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M5.5 9l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <a href={motorReservas} className="btn-reserva justify-center" target="_blank" rel="noopener noreferrer">
              Reservar ahora
            </a>
            <a href={wa('Hola, me gustaría hacer una reservación en Grand Isla Navidad Resort. ¿Pueden orientarme con la disponibilidad?')} className="btn-outline justify-center" target="_blank" rel="noopener noreferrer">
              Reservar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------- Visítanos ----------------
function Visitanos() {
  return (
    <section id="ubicacion" className="py-20 bg-panel">
      <div className="contenedor">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-8">Visítanos</h2>
            <div className="space-y-5">
              <div>
                <p className="etiqueta mb-1">Teléfono principal</p>
                <a href={contacto.telUrl} className="text-lg hover:text-dorado transition-colors">
                  {contacto.telefono}
                </a>
              </div>
              <div>
                <p className="etiqueta mb-1">Call Center</p>
                <a href={contacto.callcenterUrl} className="text-lg hover:text-dorado transition-colors">
                  {contacto.callcenter}
                </a>
              </div>
              <div>
                <p className="etiqueta mb-1">WhatsApp</p>
                <a
                  href={wa('Hola, me gustaría información sobre Grand Isla Navidad Resort.')}
                  className="text-lg hover:text-dorado transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contacto.whatsapp}
                </a>
              </div>
              <div>
                <p className="etiqueta mb-1">Dirección</p>
                <p className="text-tinta-suave">{contacto.direccion}</p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={contacto.maps}
                className="btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cómo llegar en Google Maps
              </a>
            </div>
          </div>
          <a
            href={contacto.maps}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir la ubicación de Grand Isla Navidad Resort en Google Maps"
            className="block rounded-xl overflow-hidden"
          >
            <img
              src={img('laguna.webp')}
              alt="Vista aérea de la Laguna de la Navidad con el resort al fondo. Toca para ver en Google Maps."
              width={1280}
              height={730}
              loading="lazy"
              className="w-full h-auto hover:opacity-90 transition-opacity"
            />
            <div className="bg-panel2 p-3 text-sm text-center text-tinta-suave">
              Toca la foto para abrir Google Maps
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------------- Pie ----------------
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-fondo border-t border-white/10 py-12">
      <div className="contenedor flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
        <div>
          <img
            src={img('logo.webp')}
            alt="Grand Isla Navidad Resort"
            width={130}
            height={66}
            className="h-10 w-auto mb-4"
            loading="lazy"
          />
          <p className="text-xs text-tinta-suave">{contacto.direccion}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-tinta-suave">
          <a href={contacto.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-tinta transition-colors">Instagram</a>
          <a href={contacto.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-tinta transition-colors">Facebook</a>
          <a href={contacto.tripadvisor} target="_blank" rel="noopener noreferrer" className="hover:text-tinta transition-colors">TripAdvisor</a>
          <a href={contacto.maps} target="_blank" rel="noopener noreferrer" className="hover:text-tinta transition-colors">Google Maps</a>
        </div>
        <p className="text-xs text-tinta-suave">© {year} Grand Isla Navidad Resort</p>
      </div>
    </footer>
  );
}

// ---------------- Barra móvil fija ----------------
function BarraMovil() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex sm:hidden bg-panel border-t border-white/10"
      aria-label="Acciones rápidas"
    >
      <a
        href={wa('Hola, me gustaría hacer una reservación en Grand Isla Navidad Resort. ¿Pueden orientarme?')}
        className="flex-1 flex flex-col items-center justify-center py-3 text-xs text-tinta-suave hover:text-tinta gap-1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.12 1.519 5.861L0 24l6.335-1.502A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.912 0-3.696-.516-5.228-1.414l-.375-.222-3.87.917.934-3.774-.243-.388A9.793 9.793 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z" />
        </svg>
        Reservar
      </a>
      <a
        href={contacto.callcenterUrl}
        className="flex-1 flex flex-col items-center justify-center py-3 text-xs text-tinta-suave hover:text-tinta gap-1 border-l border-white/10"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.45 15a19.79 19.79 0 01-3.07-8.67A2 2 0 012.36 4h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 11.1a16 16 0 006 6l.71-.71a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 18.5v-1.58z" />
        </svg>
        Llamar
      </a>
      <a
        href={contacto.maps}
        className="flex-1 flex flex-col items-center justify-center py-3 text-xs text-tinta-suave hover:text-tinta gap-1 border-l border-white/10"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        Cómo llegar
      </a>
    </div>
  );
}

// ---------------- App ----------------
export default function App() {
  return (
    <>
      <a href="#inicio" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-fondo focus:text-tinta focus:p-2 focus:rounded">
        Ir al contenido
      </a>
      <Nav />
      <main className="pt-16">
        <Hero />
        <TodoIncluido />
        <Gastronomia />
        <AQueDespertas />
        <Experiencias />
        <Golf />
        <BodasEventos />
        <CostaAlegre />
        <PorQueReservar />
        <Visitanos />
      </main>
      <Footer />
      <BarraMovil />
    </>
  );
}
