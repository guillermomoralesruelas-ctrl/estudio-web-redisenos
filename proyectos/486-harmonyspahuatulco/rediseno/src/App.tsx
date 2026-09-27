import { useMemo, useState } from 'react';
import {
  antiguedad, confianza, foto, negocio, paquetes, servicios, traslado, wa, type Paquete,
} from './data/content';

const miles = (n: number) => n.toLocaleString('es-MX');
const mxn = (n: number) => `$${miles(n)} MXN`;
const waGeneral = wa('Hola, quiero información de tarifas en Harmony Spa Huatulco por favor.');
const waPaquete = (p: Paquete) =>
  wa(`Hola, quiero reservar el paquete ${p.nombre} (${p.duracion}, ${mxn(p.precio)}) en Harmony Spa Huatulco. ¿Me pueden recoger en mi hotel?`);

/* ---------- iconos simples (dibujados por nosotros) ---------- */
function IconoWa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}
function IconoTel({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 3h3l1.5 4.5-2 1.3a12 12 0 0 0 7.7 7.7l1.3-2L21 16v3a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2Z" strokeLinejoin="round" />
    </svg>
  );
}
function IconoPin({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}
function IconoVan({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 16V8a1 1 0 0 1 1-1h9l4 4v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z" strokeLinejoin="round" />
      <path d="M13 7v4h5" strokeLinejoin="round" />
      <circle cx="7.5" cy="17.5" r="1.6" />
      <circle cx="16.5" cy="17.5" r="1.6" />
    </svg>
  );
}

function Logotipo({ claro = false }: { claro?: boolean }) {
  return (
    <span className={`inline-flex flex-col leading-none ${claro ? 'text-white' : 'text-profundo'}`}>
      <span className="font-titulo text-xl font-semibold tracking-wide">Harmony Spa</span>
      <span className={`text-[0.65rem] font-medium tracking-[0.3em] ${claro ? 'text-white/70' : 'text-gris'}`}>HUATULCO</span>
    </span>
  );
}

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-profundo/10 bg-white/95 backdrop-blur">
      <div className="contenedor flex h-[4.5rem] items-center justify-between gap-4">
        <a href="#inicio" aria-label="Harmony Spa Huatulco, inicio"><Logotipo /></a>
        <nav aria-label="Principal" className="hidden items-center gap-7 text-[0.95rem] font-medium lg:flex">
          <a href="#paquetes" className="hover:text-teal">Paquetes</a>
          <a href="#servicios" className="hover:text-teal">Servicios</a>
          <a href="#ubicacion" className="hover:text-teal">Ubicación</a>
        </nav>
        <a href={waGeneral} className="btn hidden sm:inline-flex" target="_blank" rel="noopener">
          <IconoWa /> WhatsApp
        </a>
      </div>
    </header>
  );
}

function Portada() {
  const f = foto('tratamiento-1.webp');
  return (
    <section id="inicio" className="relative overflow-hidden bg-crema">
      <div className="contenedor grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <div className="min-w-0">
          <h1 className="text-[2.3rem] leading-[1.1] sm:text-5xl lg:text-[3.1rem]">
            El verdadero hogar para tu cuerpo y mente en Huatulco
          </h1>
          <p className="mt-5 max-w-xl text-lg text-gris">{antiguedad}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waGeneral} className="btn" target="_blank" rel="noopener"><IconoWa /> Escribir por WhatsApp</a>
            <a href="#paquetes" className="btn-linea">Ver paquetes</a>
          </div>
        </div>
        <figure className="relative min-w-0">
          <img
            src={f.src} width={f.width} height={f.height}
            alt="Esteticista de Harmony Spa Huatulco, con cubrebocas y careta, aplicando una mascarilla facial a una clienta"
            className="aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-lg"
            fetchPriority="high"
          />
        </figure>
      </div>
    </section>
  );
}

/* ---------- elemento memorable: "Ida y vuelta, ya resuelta" ---------- */
function IdaYVuelta() {
  const [orden, setOrden] = useState<'precio' | 'duracion'>('precio');
  const [elegidoId, setElegidoId] = useState<string>(paquetes[0].id);
  const ordenados = useMemo(
    () => [...paquetes].sort((a, b) => (orden === 'precio' ? a.precio - b.precio : a.duracionMin - b.duracionMin)),
    [orden],
  );
  const elegido = paquetes.find((p) => p.id === elegidoId) ?? paquetes[0];
  const fotoElegido = foto(elegido.foto);

  return (
    <section id="paquetes" className="bg-profundo py-16 text-white md:py-24" aria-labelledby="idayvuelta-titulo">
      <div className="contenedor">
        <div className="max-w-2xl">
          <h2 id="idayvuelta-titulo" className="text-3xl sm:text-4xl">Ida y vuelta, ya resuelta</h2>
          <p className="mt-4 flex items-start gap-3 text-white/80">
            <IconoVan className="mt-1 h-6 w-6 shrink-0 text-terracota" />
            <span>{traslado}</span>
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          <div>
            <div className="mb-4 flex items-center gap-2 text-sm">
              <span className="text-white/60">Ordenar por:</span>
              <button
                type="button" onClick={() => setOrden('precio')}
                aria-pressed={orden === 'precio'}
                className={`rounded-full px-3 py-1 font-medium transition-colors ${orden === 'precio' ? 'bg-terracota text-profundo' : 'bg-white/10 text-white hover:bg-white/20'}`}
              >
                Precio
              </button>
              <button
                type="button" onClick={() => setOrden('duracion')}
                aria-pressed={orden === 'duracion'}
                className={`rounded-full px-3 py-1 font-medium transition-colors ${orden === 'duracion' ? 'bg-terracota text-profundo' : 'bg-white/10 text-white hover:bg-white/20'}`}
              >
                Duración
              </button>
            </div>
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {ordenados.map((p) => (
                <li key={p.id}>
                  <button
                    type="button"
                    onClick={() => setElegidoId(p.id)}
                    aria-pressed={elegido.id === p.id}
                    className={`w-full rounded-xl border px-4 py-3 text-left transition-colors ${
                      elegido.id === p.id ? 'border-terracota bg-white/10' : 'border-white/15 hover:border-white/40'
                    }`}
                  >
                    <span className="flex items-baseline justify-between gap-2">
                      <span className="font-semibold">{p.nombre}</span>
                      <span className="font-titulo text-terracota">{mxn(p.precio)}</span>
                    </span>
                    <span className="text-sm text-white/60">{p.duracion}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-white/5 p-6">
            <img
              key={elegido.id}
              src={fotoElegido.src} width={fotoElegido.width} height={fotoElegido.height}
              loading="lazy"
              alt={
                elegido.foto === 'temazcal.webp'
                  ? 'Domo de piedra del temazcal de Harmony Spa Huatulco, con entrada en arco y follaje alrededor'
                  : elegido.foto === 'sala.webp'
                    ? 'Sala de masajes de Harmony Spa Huatulco con camillas, velas y toallas'
                    : 'Tratamiento facial real en Harmony Spa Huatulco'
              }
              className="aspect-[4/3] w-full rounded-xl object-cover"
            />
            <h3 className="mt-5 font-titulo text-2xl">{elegido.nombre}</h3>
            <p className="mt-1 text-sm text-white/60">{elegido.duracion} · {mxn(elegido.precio)}</p>
            <p className="mt-3 text-white/80">{elegido.descripcion}</p>
            <a href={waPaquete(elegido)} target="_blank" rel="noopener" className="btn mt-5 bg-terracota text-profundo hover:bg-white">
              <IconoWa /> Reservar {elegido.nombre} por WhatsApp
            </a>
            <p className="mt-3 flex items-center gap-2 text-xs text-white/60">
              <IconoVan className="h-4 w-4 shrink-0" /> Te recogemos y te regresamos a tu hotel, sin costo extra.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Servicios() {
  return (
    <section id="servicios" className="bg-white py-16 md:py-24" aria-labelledby="servicios-titulo">
      <div className="contenedor max-w-3xl">
        <h2 id="servicios-titulo" className="text-3xl sm:text-4xl">Servicios de Harmony Spa Huatulco</h2>
        <ul className="mt-10 divide-y divide-profundo/10 border-t border-profundo/10">
          {servicios.map((s) => (
            <li key={s.nombre} className="py-6">
              <h3 className="text-xl">{s.nombre}</h3>
              <p className="mt-2 text-gris">{s.descripcion}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Confianza() {
  const imgs = ['tratamiento-3.webp', 'sala.webp', 'temazcal.webp'] as const;
  return (
    <section className="bg-crema py-16 md:py-24" aria-labelledby="confianza-titulo">
      <div className="contenedor">
        <h2 id="confianza-titulo" className="text-3xl sm:text-4xl">¿Qué encontrarás en Harmony Spa?</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {confianza.map((c, i) => {
            const f = foto(imgs[i]);
            return (
              <div key={c.titulo}>
                <img
                  src={f.src} width={f.width} height={f.height} loading="lazy"
                  alt=""
                  className="aspect-[4/3] w-full rounded-xl object-cover"
                />
                <h3 className="mt-4 text-lg font-semibold">{c.titulo}</h3>
                <p className="mt-1 text-gris">{c.texto}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Ubicacion() {
  return (
    <section id="ubicacion" className="bg-white py-16 md:py-24" aria-labelledby="ubicacion-titulo">
      <div className="contenedor grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <h2 id="ubicacion-titulo" className="text-3xl sm:text-4xl">Ubicación y contacto</h2>
          <dl className="mt-6 space-y-4 text-[1.05rem]">
            <div className="flex gap-3">
              <IconoPin className="mt-1 h-5 w-5 shrink-0 text-teal" />
              <div>
                <dt className="font-semibold">Dirección</dt>
                <dd className="text-gris">{negocio.direccion}</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <IconoTel className="mt-1 h-5 w-5 shrink-0 text-teal" />
              <div>
                <dt className="font-semibold">Teléfono / WhatsApp</dt>
                <dd><a href={`tel:+52${negocio.telefono}`} className="text-gris hover:text-teal">{negocio.telefono}</a></dd>
              </div>
            </div>
          </dl>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={negocio.mapa} target="_blank" rel="noopener" className="btn-linea">
              <IconoPin /> Cómo llegar
            </a>
            <a href={negocio.facebook} target="_blank" rel="noopener" className="btn-linea">Facebook</a>
            <a href={negocio.instagram} target="_blank" rel="noopener" className="btn-linea">Instagram</a>
          </div>
        </div>
        <figure className="min-w-0">
          <img
            src={foto('transporte.webp').src} width={foto('transporte.webp').width} height={foto('transporte.webp').height}
            loading="lazy"
            alt="Fachada de Harmony Spa Huatulco con las dos camionetas del traslado VIP estacionadas afuera"
            className="aspect-[50/17] w-full rounded-[1.5rem] object-cover shadow-lg"
          />
        </figure>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <>
      <footer className="bg-profundo py-10 text-white/70">
        <div className="contenedor flex flex-col items-center gap-3 text-center text-sm sm:flex-row sm:justify-between sm:text-left">
          <Logotipo claro />
          <p>{negocio.direccion}</p>
        </div>
      </footer>
      <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-profundo/10 bg-white/95 backdrop-blur lg:hidden" role="navigation" aria-label="Contacto rápido">
        <a href={waGeneral} target="_blank" rel="noopener" className="flex flex-1 flex-col items-center gap-1 py-2.5 text-xs font-medium text-teal">
          <IconoWa className="h-5 w-5" /> WhatsApp
        </a>
        <a href={`tel:+52${negocio.telefono}`} className="flex flex-1 flex-col items-center gap-1 border-x border-profundo/10 py-2.5 text-xs font-medium text-teal">
          <IconoTel className="h-5 w-5" /> Llamar
        </a>
        <a href={negocio.mapa} target="_blank" rel="noopener" className="flex flex-1 flex-col items-center gap-1 py-2.5 text-xs font-medium text-teal">
          <IconoPin className="h-5 w-5" /> Cómo llegar
        </a>
      </div>
    </>
  );
}

export default function App() {
  return (
    <>
      <Encabezado />
      <main className="pb-16 lg:pb-0">
        <Portada />
        <IdaYVuelta />
        <Servicios />
        <Confianza />
        <Ubicacion />
      </main>
      <Pie />
    </>
  );
}
