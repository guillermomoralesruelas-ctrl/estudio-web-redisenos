import { useState } from 'react';
import {
  negocio, wa, waGeneral, foto,
  categorias, servicios, zonasLaser,
  type Servicio, type ZonaLaser,
} from './data/content';

// ── Íconos ─────────────────────────────────────────────────────────────────

function IcoWa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.2.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}

function IcoTel({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 3h4l2 5-3 2a11 11 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A18 18 0 0 1 3 5a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

function IcoPin({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function IcoMail({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 7 10-7" />
    </svg>
  );
}

// ── Encabezado ──────────────────────────────────────────────────────────────

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-white/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" aria-label="Armonía Spa, inicio" className="shrink-0">
          <img
            src={foto('logo.webp')}
            alt="Armonía Spa"
            width={210}
            height={42}
            className="h-9 w-auto"
          />
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-6 text-sm font-medium text-tinta md:flex">
          <a href="#nosotros"  className="hover:text-acento transition-colors">Nosotros</a>
          <a href="#servicios" className="hover:text-acento transition-colors">Servicios</a>
          <a href="#laser"     className="hover:text-acento transition-colors">Láser</a>
          <a href="#visitanos" className="hover:text-acento transition-colors">Visítanos</a>
        </nav>
        <a
          href={waGeneral}
          className="btn hidden sm:flex"
          target="_blank"
          rel="noopener"
        >
          <IcoWa className="h-4 w-4" /> Agendar cita
        </a>
      </div>
    </header>
  );
}

// ── Hero ───────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="inicio" className="overflow-hidden bg-blush">
      <div className="contenedor grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="min-w-0">
          <p className="font-titulo text-xl italic text-acento">Renueva tu cuerpo, mente y espíritu</p>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl">
            Spa en Chihuahua para relajarte y renovarte de verdad
          </h1>
          <p className="mt-5 max-w-xl text-lg text-tinta/75">
            {negocio.descripcion}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#laser" className="btn">Ver el calculador láser</a>
            <a href={waGeneral} className="btn-linea" target="_blank" rel="noopener">
              <IcoWa /> WhatsApp
            </a>
          </div>
          <ul className="mt-8 grid gap-2 border-t border-tinta/10 pt-6 text-sm text-tinta/70 sm:grid-cols-3">
            <li>Tratamientos faciales</li>
            <li>Masajes relajantes</li>
            <li>Depilación láser</li>
          </ul>
        </div>
        <div className="relative min-w-0">
          <img
            src={foto('hero.webp')}
            alt="Servicio de spa en Armonía Spa Chihuahua"
            width={735}
            height={487}
            loading="eager"
            decoding="async"
            className="w-full rounded-3xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

// ── Nosotros ────────────────────────────────────────────────────────────────

function Nosotros() {
  return (
    <section id="nosotros" className="py-16 sm:py-24">
      <div className="contenedor grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="min-w-0">
          <img
            src={foto('nosotros.webp')}
            alt="Espacio de bienestar en Armonía Spa"
            width={603}
            height={295}
            loading="lazy"
            decoding="async"
            className="w-full rounded-2xl object-cover shadow-lg"
          />
        </div>
        <div className="min-w-0">
          <p className="font-titulo text-lg italic text-acento">Sobre nosotros</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">Un espacio creado para ti</h2>
          <p className="mt-4 text-lg text-tinta/75">{negocio.descripcion}</p>
          <ul className="mt-6 space-y-3 text-tinta/80">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-acento" aria-hidden="true">✦</span>
              Tratamientos personalizados para cada necesidad
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-acento" aria-hidden="true">✦</span>
              Tecnología de depilación láser IPL y tridiodo
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-acento" aria-hidden="true">✦</span>
              Ambiente de relajación y cuidado personal
            </li>
          </ul>
          <a href={waGeneral} className="btn mt-8 inline-flex" target="_blank" rel="noopener">
            <IcoWa /> Agendar cita
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Servicios ──────────────────────────────────────────────────────────────

function ServicioCard({ s }: { s: Servicio }) {
  const msg = `Hola, me interesa el servicio "${s.nombre}" (${s.precio}). ¿Tienen disponibilidad para agendar una cita?`;
  return (
    <article className="grupo flex flex-col overflow-hidden rounded-2xl border border-tinta/10 bg-white shadow-sm hover:shadow-md transition-shadow">
      <img
        src={foto(s.img)}
        alt={s.nombre}
        width={s.w}
        height={s.h}
        loading="lazy"
        decoding="async"
        className="aspect-[4/3] w-full object-cover"
      />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-semibold">{s.nombre}</h3>
        <p className="flex-1 text-sm text-tinta/70">{s.desc}</p>
        <div className="flex items-center justify-between gap-3">
          <span className="font-titulo text-xl font-semibold text-acento">{s.precio}</span>
          <a
            href={wa(msg)}
            className="btn-chico"
            target="_blank"
            rel="noopener"
          >
            <IcoWa className="h-4 w-4" /> Agendar
          </a>
        </div>
      </div>
    </article>
  );
}

function Servicios() {
  const [catActiva, setCatActiva] = useState<string>('facial');
  const filtrados = servicios.filter((s) => s.categoria === catActiva);
  const cat = categorias.find((c) => c.id === catActiva);

  return (
    <section id="servicios" className="bg-blush py-16 sm:py-24">
      <div className="contenedor">
        <p className="font-titulo text-lg italic text-acento">Nuestros servicios</p>
        <h2 className="mt-1 text-3xl sm:text-4xl">¿Qué tratamiento buscas?</h2>
        <p className="mt-3 max-w-2xl text-tinta/70">
          Todos los servicios con precio publicado. Agéndalo directo por WhatsApp.
        </p>

        {/* Tabs de categorías */}
        <div role="tablist" aria-label="Categorías de servicios" className="mt-8 flex flex-wrap gap-2">
          {categorias.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={catActiva === c.id}
              onClick={() => setCatActiva(c.id)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-acento ${
                catActiva === c.id
                  ? 'border-acento bg-acento text-white'
                  : 'border-tinta/20 bg-white text-tinta/70 hover:border-acento/60 hover:text-acento'
              }`}
            >
              {c.nombre}
            </button>
          ))}
        </div>

        {cat && (
          <p className="mt-6 text-sm text-tinta/50">
            {filtrados.length} servicio{filtrados.length !== 1 ? 's' : ''} en {cat.nombre.toLowerCase()}
          </p>
        )}

        <div
          role="tabpanel"
          aria-label={cat?.nombre ?? ''}
          className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {filtrados.map((s) => (
            <ServicioCard key={s.id} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Calculador Láser (elemento memorable) ─────────────────────────────────
// "¿Cuánto te costaría tu plan de depilación?"
// Elige zonas + tecnología → precio total con WhatsApp

type Seleccion = { zonaId: string; tech: 'ipl' | 'tridiodo' };

function CalculadorLaser() {
  const [seleccion, setSeleccion] = useState<Seleccion[]>([]);
  const [tech, setTech] = useState<'ipl' | 'tridiodo'>('ipl');

  function toggleZona(zonaId: string) {
    setSeleccion((prev) => {
      const existe = prev.find((s) => s.zonaId === zonaId);
      if (existe) return prev.filter((s) => s.zonaId !== zonaId);
      return [...prev, { zonaId, tech }];
    });
  }

  function cambiarTech(nueva: 'ipl' | 'tridiodo') {
    setTech(nueva);
    setSeleccion((prev) => prev.map((s) => ({ ...s, tech: nueva })));
  }

  function precioZona(z: ZonaLaser, t: 'ipl' | 'tridiodo') {
    const d = t === 'ipl' ? z.ipl : z.tridiodo;
    return d.precio;
  }

  function esPorSesion(z: ZonaLaser, t: 'ipl' | 'tridiodo') {
    const d = t === 'ipl' ? z.ipl : z.tridiodo;
    return d.esPorSesion;
  }

  const total = seleccion.reduce((acc, s) => {
    const z = zonasLaser.find((z) => z.id === s.zonaId)!;
    return acc + precioZona(z, s.tech);
  }, 0);

  const resumen = seleccion
    .map((s) => {
      const z = zonasLaser.find((z) => z.id === s.zonaId)!;
      const precio = precioZona(z, s.tech);
      const nota = esPorSesion(z, s.tech) ? '/sesión' : '(paquete 10 sesiones)';
      return `${z.nombre}: $${precio.toLocaleString('es-MX')} MXN ${nota}`;
    })
    .join(', ');

  const tecLabel = tech === 'ipl' ? 'IPL' : 'tridiodo';
  const msgWa =
    seleccion.length === 0
      ? 'Hola, me gustaría más información sobre la depilación láser en Armonía Spa.'
      : `Hola, estoy interesada/o en un plan de depilación láser ${tecLabel} en Armonía Spa. Zonas: ${resumen}. Total estimado: $${total.toLocaleString('es-MX')} MXN. ¿Me pueden dar más información y disponibilidad?`;

  return (
    <section id="laser" className="py-16 sm:py-24">
      <div className="contenedor">
        <p className="font-titulo text-lg italic text-acento">Depilación láser</p>
        <h2 className="mt-1 text-3xl sm:text-4xl">
          ¿Cuánto cuesta tu plan de depilación?
        </h2>
        <p className="mt-3 max-w-2xl text-tinta/70">
          Elige las zonas que quieres tratar y la tecnología. El precio es el publicado en el sitio.
          El total es referencial; en el spa te orientan sobre el número de sesiones según tu caso.
        </p>

        {/* Selector de tecnología */}
        <div className="mt-8 flex flex-wrap gap-3">
          <p className="w-full text-sm font-semibold text-tinta/60">Tecnología</p>
          {(['ipl', 'tridiodo'] as const).map((t) => (
            <button
              key={t}
              onClick={() => cambiarTech(t)}
              aria-pressed={tech === t}
              className={`rounded-xl border px-5 py-3 text-sm font-medium transition-colors focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-acento ${
                tech === t
                  ? 'border-acento bg-acento text-white'
                  : 'border-tinta/20 bg-white text-tinta/70 hover:border-acento/60'
              }`}
            >
              {t === 'ipl' ? (
                <>Láser IPL <span className="ml-1 text-xs opacity-80">luz pulsada</span></>
              ) : (
                <>Láser tridiodo <span className="ml-1 text-xs opacity-80">mayor precisión</span></>
              )}
            </button>
          ))}
        </div>

        {/* Selector de zonas */}
        <div className="mt-6">
          <p className="mb-3 text-sm font-semibold text-tinta/60">Zonas a tratar</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {zonasLaser.map((z) => {
              const seleccionada = seleccion.some((s) => s.zonaId === z.id);
              const precio = precioZona(z, tech);
              const porSesion = esPorSesion(z, tech);
              return (
                <button
                  key={z.id}
                  onClick={() => toggleZona(z.id)}
                  aria-pressed={seleccionada}
                  className={`group flex flex-col gap-2 rounded-2xl border p-5 text-left transition-all focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-acento ${
                    seleccionada
                      ? 'border-acento bg-acento/5 shadow-sm'
                      : 'border-tinta/15 bg-white hover:border-acento/40'
                  }`}
                >
                  <span className={`text-base font-semibold ${seleccionada ? 'text-acento' : 'text-tinta'}`}>
                    {z.nombre}
                  </span>
                  <span className="font-titulo text-2xl font-semibold text-acento">
                    ${precio.toLocaleString('es-MX')}
                    <span className="ml-1 text-sm font-normal text-tinta/60">MXN</span>
                  </span>
                  <span className="text-xs text-tinta/50">
                    {porSesion ? 'por sesión' : 'paquete 10 sesiones'}
                  </span>
                  {seleccionada && (
                    <span className="text-xs font-semibold text-acento">✓ Seleccionado</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Resultado */}
        <div className="mt-8 rounded-2xl border border-acento/20 bg-blush p-6 sm:p-8">
          {seleccion.length === 0 ? (
            <p className="text-tinta/60">Selecciona al menos una zona para ver el total estimado.</p>
          ) : (
            <>
              <p className="text-sm text-tinta/60">Total estimado con láser {tecLabel}</p>
              <p className="mt-1 font-titulo text-4xl font-semibold text-acento">
                ${total.toLocaleString('es-MX')}
                <span className="ml-2 text-xl font-normal text-tinta/60">MXN</span>
              </p>
              <ul className="mt-3 space-y-1 text-sm text-tinta/70">
                {seleccion.map((s) => {
                  const z = zonasLaser.find((z) => z.id === s.zonaId)!;
                  const precio = precioZona(z, s.tech);
                  const porSesion = esPorSesion(z, s.tech);
                  return (
                    <li key={s.zonaId} className="flex justify-between gap-4">
                      <span>{z.nombre}</span>
                      <span className="font-medium">
                        ${precio.toLocaleString('es-MX')} {porSesion ? '/sesión' : '(paquete)'}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={wa(msgWa)}
              className="btn"
              target="_blank"
              rel="noopener"
            >
              <IcoWa /> {seleccion.length === 0 ? 'Preguntar por láser' : 'Agendar mi plan'}
            </a>
            <a href={`tel:${negocio.telLink}`} className="btn-linea">
              <IcoTel /> Llamar
            </a>
          </div>
        </div>

        {/* Fotos de depilación láser */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <img src={foto('dep-ipl.webp')}      alt="Depilación láser IPL en Armonía Spa"           width={1200} height={800} loading="lazy" decoding="async" className="w-full rounded-2xl object-cover aspect-[4/3]" />
          <img src={foto('tridiodo.webp')}      alt="Depilación láser tridiodo en Armonía Spa"      width={1200} height={800} loading="lazy" decoding="async" className="w-full rounded-2xl object-cover aspect-[4/3]" />
          <img src={foto('dep-ipl-piernas.webp')} alt="Depilación láser en piernas, Armonía Spa"   width={1200} height={800} loading="lazy" decoding="async" className="w-full rounded-2xl object-cover aspect-[4/3]" />
        </div>
      </div>
    </section>
  );
}

// ── Promociones ─────────────────────────────────────────────────────────────

function Promociones() {
  const promos = [
    { img: 'promo1.webp', w: 900, h: 754, alt: 'Promoción de tratamientos faciales en Armonía Spa' },
    { img: 'promo2.webp', w: 900, h: 900, alt: 'Hollywood Peeling — piel luminosa sin manchas' },
    { img: 'promo3.webp', w: 900, h: 754, alt: 'Masaje relajante y descontracturante en Armonía Spa' },
    { img: 'promo4.webp', w: 720, h: 900, alt: 'Depilación láser — resultados permanentes' },
    { img: 'promo5.webp', w: 900, h: 754, alt: 'Manicure y pedicure con acabado perfecto' },
    { img: 'promo6.webp', w: 720, h: 900, alt: 'Paquetes y promociones especiales en Armonía Spa' },
  ];
  return (
    <section className="bg-blush py-16 sm:py-24">
      <div className="contenedor">
        <p className="font-titulo text-lg italic text-acento">Promociones</p>
        <h2 className="mt-1 text-3xl sm:text-4xl">Nuestras promociones</h2>
        <p className="mt-3 text-tinta/70">
          Escríbenos por WhatsApp para conocer la vigencia y los detalles de cada promoción.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {promos.map((p) => (
            <a
              key={p.img}
              href={waGeneral}
              target="_blank"
              rel="noopener"
              aria-label={`${p.alt} — preguntar por WhatsApp`}
              className="group block overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={foto(p.img)}
                alt={p.alt}
                width={p.w}
                height={p.h}
                loading="lazy"
                decoding="async"
                className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </a>
          ))}
        </div>
        <p className="mt-4 text-center text-sm text-tinta/50">
          Toca una promoción para preguntar por WhatsApp
        </p>
      </div>
    </section>
  );
}

// ── Visítanos ──────────────────────────────────────────────────────────────

function Visitanos() {
  return (
    <section id="visitanos" className="py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="min-w-0">
          <p className="font-titulo text-lg italic text-acento">Contáctanos</p>
          <h2 className="mt-1 text-3xl sm:text-4xl">Visítanos en Chihuahua</h2>
          <p className="mt-4 text-tinta/70">
            Estamos en {negocio.ciudad}. Escríbenos o llámanos para agendar tu cita o resolver cualquier duda.
          </p>
          <ul className="mt-6 space-y-4 text-tinta/80">
            <li className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-acento/10 text-acento">
                <IcoTel />
              </span>
              <div>
                <p className="text-xs text-tinta/50">Teléfono</p>
                <a href={`tel:${negocio.telLink}`} className="font-semibold hover:text-acento transition-colors">
                  {negocio.tel}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-acento/10 text-acento">
                <IcoWa />
              </span>
              <div>
                <p className="text-xs text-tinta/50">WhatsApp</p>
                <a href={waGeneral} target="_blank" rel="noopener" className="font-semibold hover:text-acento transition-colors">
                  {negocio.tel}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-acento/10 text-acento">
                <IcoMail />
              </span>
              <div>
                <p className="text-xs text-tinta/50">Correo</p>
                <a href={`mailto:${negocio.email}`} className="font-semibold hover:text-acento transition-colors">
                  {negocio.email}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-acento/10 text-acento">
                <IcoPin />
              </span>
              <div>
                <p className="text-xs text-tinta/50">Ubicación</p>
                <a href={negocio.maps} target="_blank" rel="noopener" className="font-semibold hover:text-acento transition-colors">
                  Chihuahua, Chihuahua → Ver en Maps
                </a>
              </div>
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waGeneral} className="btn" target="_blank" rel="noopener">
              <IcoWa /> Agendar cita
            </a>
            <a href={negocio.maps} className="btn-linea" target="_blank" rel="noopener">
              <IcoPin /> Cómo llegar
            </a>
          </div>
        </div>

        {/* Mapa estático → enlace a Google Maps */}
        <a
          href={negocio.maps}
          target="_blank"
          rel="noopener"
          aria-label="Ver Armonía Spa en Google Maps"
          className="group block overflow-hidden rounded-2xl border border-tinta/10 shadow-sm hover:shadow-md transition-shadow min-w-0"
        >
          <div className="flex h-full min-h-64 items-center justify-center bg-blush">
            <div className="text-center">
              <IcoPin className="mx-auto h-16 w-16 text-acento/40" />
              <p className="mt-4 font-semibold text-tinta/60">Armonía Spa</p>
              <p className="text-sm text-tinta/40">Chihuahua, Chihuahua</p>
              <p className="mt-3 text-sm text-acento group-hover:underline">Ver en Google Maps →</p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

// ── Pie de página ───────────────────────────────────────────────────────────

function Pie() {
  return (
    <footer className="border-t border-tinta/10 bg-tinta py-10 text-white/70">
      <div className="contenedor flex flex-wrap items-center justify-between gap-6">
        <div>
          <img src={foto('logo.webp')} alt="Armonía Spa" width={210} height={42} className="h-8 w-auto brightness-[4]" />
          <p className="mt-2 text-sm">{negocio.ciudad}</p>
          <p className="text-sm">
            <a href={`tel:${negocio.telLink}`} className="hover:text-white transition-colors">{negocio.tel}</a>
            {' · '}
            <a href={`mailto:${negocio.email}`} className="hover:text-white transition-colors">{negocio.email}</a>
          </p>
        </div>
        <nav aria-label="Redes sociales" className="flex items-center gap-4">
          <a href={negocio.instagram} target="_blank" rel="noopener" aria-label="Instagram de Armonía Spa" className="hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
            </svg>
          </a>
          <a href={negocio.facebook} target="_blank" rel="noopener" aria-label="Facebook de Armonía Spa" className="hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          <a href={waGeneral} target="_blank" rel="noopener" aria-label="WhatsApp de Armonía Spa" className="hover:text-white transition-colors">
            <IcoWa />
          </a>
        </nav>
        <p className="w-full text-xs text-white/40 sm:w-auto">© 2025 Armonía Spa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

// ── Barra fija móvil ────────────────────────────────────────────────────────

function BarraMovil() {
  return (
    <nav
      aria-label="Acciones rápidas"
      className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-tinta/10 bg-white shadow-lg sm:hidden"
    >
      <a
        href={waGeneral}
        target="_blank"
        rel="noopener"
        className="flex flex-1 flex-col items-center gap-1 py-3 text-xs font-medium text-acento"
      >
        <IcoWa className="h-5 w-5" />
        WhatsApp
      </a>
      <a
        href={`tel:${negocio.telLink}`}
        className="flex flex-1 flex-col items-center gap-1 border-x border-tinta/10 py-3 text-xs font-medium text-tinta/70"
      >
        <IcoTel className="h-5 w-5" />
        Llamar
      </a>
      <a
        href={negocio.maps}
        target="_blank"
        rel="noopener"
        className="flex flex-1 flex-col items-center gap-1 py-3 text-xs font-medium text-tinta/70"
      >
        <IcoPin className="h-5 w-5" />
        Maps
      </a>
    </nav>
  );
}

// ── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <>
      <Encabezado />
      <main>
        <Hero />
        <Nosotros />
        <Servicios />
        <CalculadorLaser />
        <Promociones />
        <Visitanos />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
