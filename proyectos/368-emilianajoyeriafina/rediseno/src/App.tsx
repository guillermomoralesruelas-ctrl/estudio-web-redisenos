import { useState } from 'react';
import { negocio, wa, colecciones, birthstones } from './data/content';

// ──────────────────────────────────────────────────────────────
// Utilidades
// ──────────────────────────────────────────────────────────────
const f = (archivo: string) => `${import.meta.env.BASE_URL}${archivo}`;

// ──────────────────────────────────────────────────────────────
// JSON-LD
// ──────────────────────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'JewelryStore',
  name: negocio.nombre,
  description: negocio.descripcion,
  url: 'https://emiliana.com.mx/',
  telephone: negocio.telefono,
  email: negocio.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Avenida Campestre x 7 #15',
    addressLocality: 'Mérida',
    addressRegion: 'Yucatán',
    postalCode: '97120',
    addressCountry: 'MX',
  },
  sameAs: [negocio.facebook, negocio.instagram],
};

// ──────────────────────────────────────────────────────────────
// Subcomponentes
// ──────────────────────────────────────────────────────────────

/** SVG de joya ovalada (birthstone) */
function JoyaSVG({ color, color2, size = 80 }: { color: string; color2: string; size?: number }) {
  return (
    <svg
      width={size}
      height={Math.round(size * 1.18)}
      viewBox="0 0 80 95"
      aria-hidden="true"
      style={{ display: 'block' }}
    >
      <defs>
        <radialGradient id="gj" cx="38%" cy="32%" r="60%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="40%" stopColor={color} stopOpacity="0.9" />
          <stop offset="100%" stopColor={color2} />
        </radialGradient>
      </defs>
      {/* sombra */}
      <ellipse cx="40" cy="90" rx="22" ry="5" fill="#0f0c07" opacity="0.15" />
      {/* cuerpo */}
      <ellipse cx="40" cy="46" rx="36" ry="42" fill="url(#gj)" />
      {/* brillo */}
      <ellipse cx="30" cy="30" rx="10" ry="7" fill="#ffffff" opacity="0.35" transform="rotate(-20 30 30)" />
    </svg>
  );
}

/** Encabezado */
function Encabezado() {
  const [abierto, setAbierto] = useState(false);
  const navItems = [
    { label: 'Colecciones', href: '#colecciones' },
    { label: 'Tu piedra', href: '#tu-piedra' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Showroom', href: '#showroom' },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-oscuro text-white">
      <div className="contenedor flex items-center justify-between h-[4.25rem]">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 shrink-0">
          <img
            src={f('logo.webp')}
            alt="Emiliana Joyería Fina"
            width={140}
            height={40}
            className="h-8 w-auto"
          />
        </a>
        {/* Nav escritorio */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-sans font-bold tracking-wide">
          {navItems.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-white/80 hover:text-oro transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        {/* CTA escritorio */}
        <a
          href={negocio.tienda}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex btn-oro text-xs"
        >
          Ver tienda
        </a>
        {/* Botón menú móvil */}
        <button
          type="button"
          aria-expanded={abierto}
          aria-controls="nav-movil"
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setAbierto(!abierto)}
          className="md:hidden p-2 text-white"
        >
          {abierto ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <line x1="3" y1="3" x2="19" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="19" y1="3" x2="3" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>
      {/* Nav móvil */}
      {abierto && (
        <div id="nav-movil" className="md:hidden bg-oscuro border-t border-white/10">
          <nav className="contenedor py-4 flex flex-col gap-4 text-sm font-bold">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-white/80 hover:text-oro transition-colors py-1"
                onClick={() => setAbierto(false)}
              >
                {n.label}
              </a>
            ))}
            <a
              href={negocio.tienda}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-oro text-xs self-start mt-2"
              onClick={() => setAbierto(false)}
            >
              Ver tienda
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/** Portada */
function Portada() {
  return (
    <section id="inicio" className="relative min-h-[90svh] flex items-end overflow-hidden bg-oscuro">
      {/* Foto hero */}
      <img
        src={f('hero-joyeria.webp')}
        alt="Joyería fina Emiliana: anillos y aretes en oro de 14K sobre piedra blanca"
        width={1440}
        height={1440}
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
        fetchPriority="high"
      />
      {/* Gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-oscuro/90 via-oscuro/30 to-transparent" />
      {/* Contenido */}
      <div className="relative z-10 contenedor pb-16 pt-28">
        <p className="font-sans text-oro text-sm font-bold tracking-[0.2em] uppercase mb-4">
          Oro Yucateco · Est. {negocio.anio}
        </p>
        <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl leading-tight mb-4 max-w-2xl">
          Joyería fina hecha a mano en Mérida
        </h1>
        <p className="text-white/80 font-sans text-base sm:text-lg max-w-xl mb-8">
          Oro 14K con gemas naturales: esmeraldas, zafiros, rubíes y diamantes.
          Cuatro generaciones haciendo piezas únicas en Yucatán.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#colecciones"
            className="btn-oro"
          >
            Ver colecciones
          </a>
          <a
            href={wa('¡Hola! Quiero información sobre sus joyas')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-contorno text-white border-white/60 hover:bg-white/10"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/** Colecciones */
function Colecciones() {
  return (
    <section id="colecciones" className="py-20 bg-fondo">
      <div className="contenedor">
        <div className="mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-tinta mb-3">
            Las colecciones
          </h2>
          <p className="font-sans text-piedra max-w-lg">
            Cada pieza es joyería fina en oro de 14K con gemas naturales certificadas.
            Envíos asegurados a toda la República.
          </p>
        </div>
        {/* Mosaico asimétrico */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Anillos: grande (span 2 en md) */}
          <a
            href={colecciones[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-oscuro md:col-span-2 rounded-sm aspect-[4/3]"
          >
            <img
              src={f(colecciones[0].foto)}
              alt={`Colección ${colecciones[0].nombre} Emiliana`}
              width={colecciones[0].w}
              height={colecciones[0].h}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-oscuro/40 group-hover:bg-oscuro/50 transition-colors" />
            <div className="absolute bottom-5 left-5">
              <span className="font-serif text-white text-2xl">{colecciones[0].nombre}</span>
              <p className="font-sans text-white/70 text-xs mt-1">{colecciones[0].descripcion}</p>
            </div>
          </a>
          {/* Aretes */}
          <a
            href={colecciones[1].url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-oscuro rounded-sm aspect-[1/1]"
          >
            <img
              src={f(colecciones[1].foto)}
              alt={`Colección ${colecciones[1].nombre} Emiliana`}
              width={colecciones[1].w}
              height={colecciones[1].h}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-oscuro/40 group-hover:bg-oscuro/50 transition-colors" />
            <div className="absolute bottom-4 left-4">
              <span className="font-serif text-white text-xl">{colecciones[1].nombre}</span>
            </div>
          </a>
          {/* Collares */}
          <a
            href={colecciones[2].url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-oscuro rounded-sm aspect-[1/1]"
          >
            <img
              src={f(colecciones[2].foto)}
              alt={`Colección ${colecciones[2].nombre} Emiliana`}
              width={colecciones[2].w}
              height={colecciones[2].h}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-oscuro/40 group-hover:bg-oscuro/50 transition-colors" />
            <div className="absolute bottom-4 left-4">
              <span className="font-serif text-white text-xl">{colecciones[2].nombre}</span>
            </div>
          </a>
          {/* Engagement */}
          <a
            href={colecciones[3].url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-oscuro rounded-sm aspect-[1/1]"
          >
            <img
              src={f(colecciones[3].foto)}
              alt={`Colección ${colecciones[3].nombre} Emiliana`}
              width={colecciones[3].w}
              height={colecciones[3].h}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-oscuro/40 group-hover:bg-oscuro/50 transition-colors" />
            <div className="absolute bottom-4 left-4">
              <span className="font-serif text-white text-xl">{colecciones[3].nombre}</span>
            </div>
          </a>
          {/* Pulseras */}
          <a
            href={colecciones[4].url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-oscuro rounded-sm aspect-[1/1]"
          >
            <img
              src={f(colecciones[4].foto)}
              alt={`Colección ${colecciones[4].nombre} Emiliana`}
              width={colecciones[4].w}
              height={colecciones[4].h}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-oscuro/40 group-hover:bg-oscuro/50 transition-colors" />
            <div className="absolute bottom-4 left-4">
              <span className="font-serif text-white text-xl">{colecciones[4].nombre}</span>
            </div>
          </a>
          {/* Lab Grown */}
          <a
            href={colecciones[5].url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-oscuro rounded-sm aspect-[1/1]"
          >
            <img
              src={f(colecciones[5].foto)}
              alt={`Colección ${colecciones[5].nombre} Emiliana`}
              width={colecciones[5].w}
              height={colecciones[5].h}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-oscuro/40 group-hover:bg-oscuro/50 transition-colors" />
            <div className="absolute bottom-4 left-4">
              <span className="font-serif text-white text-xl">{colecciones[5].nombre}</span>
            </div>
          </a>
        </div>
        <div className="mt-8 text-center">
          <a
            href={negocio.tienda}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-contorno text-tinta border-tinta hover:bg-tinta hover:text-white"
          >
            Ver todo el catálogo →
          </a>
        </div>
      </div>
    </section>
  );
}

/** ¿Cuál es tu piedra? */
function TuPiedra() {
  const [mes, setMes] = useState(0);
  const bs = birthstones[mes];

  return (
    <section id="tu-piedra" className="py-20 bg-oro-suave">
      <div className="contenedor">
        <div className="mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl text-tinta mb-3">
            ¿Cuál es tu piedra?
          </h2>
          <p className="font-sans text-piedra max-w-lg">
            Cada mes tiene su gema según la tradición joyera. Elige el tuyo
            y descubre el anillo que lleva tu piedra.
          </p>
        </div>
        {/* Selector de meses */}
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-2 mb-10">
          {birthstones.map((b, i) => (
            <button
              key={b.mes}
              type="button"
              onClick={() => setMes(i)}
              aria-pressed={mes === i}
              className={[
                'flex flex-col items-center gap-1.5 p-2 rounded-sm border transition-all text-center',
                mes === i
                  ? 'border-oro bg-white shadow-md'
                  : 'border-transparent bg-white/50 hover:bg-white hover:border-oro/40',
              ].join(' ')}
            >
              <span
                className="w-5 h-5 rounded-full border-2 border-white shadow-sm"
                style={{ backgroundColor: b.color }}
                aria-hidden="true"
              />
              <span className="font-sans text-[10px] text-tinta font-bold leading-tight">
                {b.mes.substring(0, 3)}
              </span>
            </button>
          ))}
        </div>
        {/* Ficha de la piedra */}
        <div className="bg-white rounded-sm shadow-md p-8 flex flex-col sm:flex-row items-center gap-8 max-w-2xl">
          <div className="shrink-0">
            <JoyaSVG color={bs.color} color2={bs.color2} size={100} />
          </div>
          <div className="text-center sm:text-left min-w-0">
            <p className="font-sans text-xs text-piedra font-bold tracking-widest uppercase mb-1">
              {bs.mes}
            </p>
            <p className="font-serif text-3xl text-tinta mb-3">{bs.piedra}</p>
            <p className="font-sans text-sm text-piedra leading-relaxed mb-5">
              {bs.significado}
            </p>
            <a
              href={wa(`¡Hola! Me interesa un anillo de ${bs.piedra} de la colección Birthstone Rings`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-oro text-sm"
            >
              Pedir anillo de {bs.piedra} →
            </a>
          </div>
        </div>
        <p className="mt-4 font-sans text-xs text-piedra/70 max-w-md">
          La colección Birthstone Rings está disponible en{' '}
          <a
            href="https://emiliana.com.mx/collections/birthstone-rings"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-oro"
          >
            emiliana.com.mx
          </a>
          . Los significados de las piedras son datos de la tradición joyera internacional.
        </p>
      </div>
    </section>
  );
}

/** Piezas especiales */
function PiezasEspeciales() {
  return (
    <section className="py-20 bg-fondo">
      <div className="contenedor">
        <h2 className="font-serif text-3xl sm:text-4xl text-tinta mb-12">
          Piezas para momentos especiales
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Argollas de boda */}
          <div className="group relative overflow-hidden bg-oscuro rounded-sm aspect-[4/3]">
            <img
              src={f('argollas-boda.webp')}
              alt="Argollas de boda en oro de 14K — Emiliana Joyería Fina"
              width={1200}
              height={1200}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-oscuro/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-serif text-white text-2xl mb-2">Argollas de boda</h3>
              <p className="font-sans text-white/80 text-sm mb-4">
                Los costos cambian según la talla y los milímetros de ancho requeridos.
                Con gusto te cotizamos.
              </p>
              <a
                href={wa('¡Hola! Quiero cotizar argollas de boda')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-oro text-sm"
              >
                Cotizar argollas
              </a>
            </div>
          </div>
          {/* Piezas personalizadas */}
          <div className="group relative overflow-hidden bg-oscuro rounded-sm aspect-[4/3]">
            <img
              src={f('anillo-sorrento.webp')}
              alt="Joyería personalizada — Emiliana crea la pieza de tus sueños"
              width={900}
              height={1200}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-oscuro/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-serif text-white text-2xl mb-2">Creamos la pieza de tus sueños</h3>
              <p className="font-sans text-white/80 text-sm mb-4">
                ¿Tienes un diseño en mente? Nosotros te ayudamos a hacerlo realidad.
              </p>
              <a
                href={wa('¡Hola! Tengo un diseño en mente y quiero cotizar una pieza personalizada')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-oro text-sm"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Nosotros */
function Nosotros() {
  const pilares = [
    {
      titulo: 'Oro 14K',
      texto: 'Autenticidad y calidad garantizadas en todas nuestras piedras y metales preciosos.',
    },
    {
      titulo: '4ª generación',
      texto: 'Reunimos el talento de los mejores artesanos en Mérida, Yucatán por más de 40 años.',
    },
    {
      titulo: 'Gemas naturales',
      texto: 'Esmeraldas, zafiros, rubíes, diamantes y una gran variedad de gemas de color.',
    },
    {
      titulo: 'Envíos asegurados',
      texto: 'Todos nuestros envíos están asegurados a toda la República Mexicana.',
    },
  ];
  return (
    <section id="nosotros" className="py-20 bg-oscuro text-white">
      <div className="contenedor">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl mb-6">Nosotros</h2>
            <p className="font-sans text-white/80 leading-relaxed mb-8">
              Emiliana nació en 2018, inspirada en el amor por la joyería que ha vivido
              en nuestra familia por cuatro generaciones. Hacemos joyería fina con
              materiales de la más alta calidad desde Mérida, Yucatán.
            </p>
            <div className="grid grid-cols-2 gap-5">
              {pilares.map((p) => (
                <div key={p.titulo}>
                  <p className="font-serif text-oro text-lg mb-1">{p.titulo}</p>
                  <p className="font-sans text-white/70 text-sm leading-snug">{p.texto}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Foto */}
          <div className="relative rounded-sm overflow-hidden aspect-[3/2]">
            <img
              src={f('taller-joyas.webp')}
              alt="Taller de joyería Emiliana en Mérida, Yucatán"
              width={1400}
              height={888}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Galería rápida */
function Galeria() {
  const fotos = [
    { src: 'mano-anillo-boda.webp', alt: 'Anillo de boda en oro de 14K — Emiliana', w: 900, h: 1200 },
    { src: 'anillo-compromiso.webp', alt: 'Anillo de compromiso en oro de 14K — Emiliana', w: 900, h: 1200 },
    { src: 'sortija-gema.webp', alt: 'Sortija con gema de color en oro de 14K — Emiliana', w: 900, h: 1200 },
  ];
  return (
    <section className="py-12 bg-fondo">
      <div className="contenedor">
        <div className="grid grid-cols-3 gap-3">
          {fotos.map((f2) => (
            <div key={f2.src} className="overflow-hidden rounded-sm aspect-[3/4] bg-oro-suave">
              <img
                src={f(f2.src)}
                alt={f2.alt}
                width={f2.w}
                height={f2.h}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
        <p className="text-center mt-6">
          <a
            href={negocio.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-piedra hover:text-oro font-bold"
          >
            @emiliana_mx en Instagram →
          </a>
        </p>
      </div>
    </section>
  );
}

/** Showroom */
function Showroom() {
  return (
    <section id="showroom" className="py-20 bg-oro-suave">
      <div className="contenedor">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Foto del anillo de boda / showroom */}
          <div className="relative rounded-sm overflow-hidden aspect-[1/1]">
            <img
              src={f('argollas-boda.webp')}
              alt="Showroom Emiliana — Avenida Campestre, Mérida"
              width={1200}
              height={1200}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <a
              href={negocio.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver en Google Maps"
              className="absolute inset-0 flex items-center justify-center bg-oscuro/0 hover:bg-oscuro/30 transition-colors group"
            >
              <span className="bg-white/90 text-oscuro font-sans text-xs font-bold px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Abrir en Maps →
              </span>
            </a>
          </div>
          {/* Datos de contacto */}
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-tinta mb-2">Showroom</h2>
            <p className="font-sans text-piedra mb-8">
              Visítanos en{' '}
              <a
                href={negocio.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-oro underline hover:no-underline"
              >
                Bundal
              </a>
              , Mérida.
            </p>
            <div className="space-y-5 font-sans text-tinta text-sm">
              <div>
                <p className="text-piedra text-xs font-bold tracking-widest uppercase mb-1">Dirección</p>
                <a
                  href={negocio.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tinta hover:text-oro"
                >
                  {negocio.direccion}
                </a>
              </div>
              <div>
                <p className="text-piedra text-xs font-bold tracking-widest uppercase mb-1">WhatsApp / Teléfono</p>
                <a
                  href={`tel:${negocio.telefono}`}
                  className="text-tinta hover:text-oro"
                >
                  9993 64 12 46
                </a>
              </div>
              <div>
                <p className="text-piedra text-xs font-bold tracking-widest uppercase mb-1">Correo</p>
                <a
                  href={`mailto:${negocio.email}`}
                  className="text-tinta hover:text-oro"
                >
                  {negocio.email}
                </a>
              </div>
              <div>
                <p className="text-piedra text-xs font-bold tracking-widest uppercase mb-1">Redes</p>
                <div className="flex gap-4">
                  <a
                    href={negocio.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-tinta hover:text-oro"
                  >
                    Instagram
                  </a>
                  <a
                    href={negocio.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-tinta hover:text-oro"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href={wa('¡Hola! Quiero agendar una cita en el showroom')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-oro"
              >
                Agendar cita
              </a>
              <a
                href={negocio.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-contorno text-tinta border-tinta hover:bg-tinta hover:text-white"
              >
                Cómo llegar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Pie */
function Pie() {
  return (
    <footer className="bg-oscuro text-white py-12">
      <div className="contenedor">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          {/* Logo */}
          <img
            src={f('logo.webp')}
            alt="Emiliana Joyería Fina"
            width={140}
            height={40}
            loading="lazy"
            className="h-7 w-auto"
          />
          {/* Redes */}
          <div className="flex gap-5 font-sans text-sm">
            <a
              href={negocio.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-oro"
            >
              Instagram
            </a>
            <a
              href={negocio.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-oro"
            >
              Facebook
            </a>
          </div>
          {/* Links */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 font-sans text-xs text-white/50">
            <a href="https://emiliana.com.mx/policies/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white">Privacidad</a>
            <a href="https://emiliana.com.mx/policies/refund-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white">Reembolso</a>
            <a href="https://emiliana.com.mx/policies/shipping-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white">Envíos</a>
            <a href="https://emiliana.com.mx/pages/garantia" target="_blank" rel="noopener noreferrer" className="hover:text-white">Garantía</a>
            <a href="https://emiliana.com.mx/pages/cuidados" target="_blank" rel="noopener noreferrer" className="hover:text-white">Cuidados</a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 font-sans text-xs text-white/40">
          © {new Date().getFullYear()} Emiliana Joyería Fina · Mérida, Yucatán
        </div>
      </div>
    </footer>
  );
}

/** Barra fija celular */
function BarraMovil() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-oscuro border-t border-white/10">
      <div className="grid grid-cols-3">
        <a
          href={wa('¡Hola! Quiero información sobre sus joyas')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 text-white/80 hover:text-oro transition-colors text-[10px] font-sans font-bold"
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M11.945 0C5.353 0 0 5.353 0 11.945c0 2.088.544 4.048 1.496 5.747L0 24l6.498-1.471A11.9 11.9 0 0011.945 23.89C18.537 23.89 24 18.537 24 11.945 24 5.353 18.537 0 11.945 0zm0 21.783a9.83 9.83 0 01-5.007-1.371l-.359-.213-3.721.842.856-3.62-.234-.37a9.838 9.838 0 01-1.509-5.281c0-5.435 4.423-9.858 9.974-9.858 5.435 0 9.858 4.423 9.858 9.858 0 5.435-4.423 9.858-9.858 9.858v-.005z" />
          </svg>
          WhatsApp
        </a>
        <a
          href={`tel:${negocio.telefono}`}
          className="flex flex-col items-center justify-center gap-1 py-3 text-white/80 hover:text-oro transition-colors text-[10px] font-sans font-bold border-x border-white/10"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Llamar
        </a>
        <a
          href={negocio.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 text-white/80 hover:text-oro transition-colors text-[10px] font-sans font-bold"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Cómo llegar
        </a>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// App
// ──────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Encabezado />
      <main>
        <Portada />
        <Colecciones />
        <TuPiedra />
        <PiezasEspeciales />
        <Nosotros />
        <Galeria />
        <Showroom />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
