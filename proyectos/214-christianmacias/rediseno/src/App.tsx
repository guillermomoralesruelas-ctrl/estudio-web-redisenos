import { useState, useEffect } from 'react';

// ─── Datos del negocio (del sitio original) ─────────────────────────────────
const NEGOCIO = {
  nombre:    'Christian Macías',
  cargo:     'Fotógrafo de bodas documental',
  ciudad:    'Guadalajara, Jalisco',
  direccion: 'Av. de las Américas 870, Guadalajara, Jalisco',
  tel:       '+52 33 3142 5580',
  telRaw:    '+523331425580',
  email:     'hola@christianmacias.com',
  wa:        '523331425580',
  mapsUrl:   'https://www.google.com/maps?cid=756245713289356238',
  instagram: 'https://www.instagram.com/christiancri1/',
  facebook:  'https://www.facebook.com/christian.macias.5458',
  tiktok:    'https://www.tiktok.com/@christianmaciasfotografo',
  youtube:   'https://www.youtube.com/@christianmacias893',
};

const B = import.meta.env.BASE_URL;

function waLink(texto: string) {
  return `https://wa.me/${NEGOCIO.wa}?text=${encodeURIComponent(texto)}`;
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Photographer', 'LocalBusiness'],
    name: 'Christian Macías — Fotógrafo de Bodas Documental',
    description: 'Christian Macías, fotógrafo de bodas documental en Guadalajara. Cobertura cinematográfica, sin poses, con paquetes propios en México y el extranjero.',
    url: 'https://www.christianmacias.com/',
    telephone: NEGOCIO.tel,
    email: NEGOCIO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. de las Américas 870',
      addressLocality: 'Guadalajara',
      addressRegion: 'Jalisco',
      addressCountry: 'MX',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 20.6833, longitude: -103.3479 },
    sameAs: [
      NEGOCIO.instagram, NEGOCIO.facebook, NEGOCIO.tiktok, NEGOCIO.youtube,
      'https://mywed.com/es/photographer/christianmacias/',
    ],
    priceRange: '$$$',
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  const links = [
    { href: '#filosofia',     label: 'Sobre mí' },
    { href: '#portafolio',    label: 'Portafolio' },
    { href: '#paquetes',      label: 'Paquetes' },
    { href: '#donde-trabajo', label: 'Destinos' },
    { href: '#contacto',      label: 'Contacto' },
  ];
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-bg/95 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="contenedor flex items-center justify-between h-16">
        <a href="#" className="font-serif text-xl italic text-white leading-none">
          CM
          <span className="hidden sm:inline text-sm font-sans not-italic text-white/60 ml-2">
            Christian Macías
          </span>
        </a>
        <nav aria-label="Menú principal" className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-white/70 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={waLink('Hola Christian, vengo de tu sitio web y quisiera más información.')}
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2 text-xs font-semibold text-white hover:bg-[#1fb956] transition-colors"
          target="_blank" rel="noopener noreferrer"
        >
          WhatsApp
        </a>
        <button
          className="md:hidden text-white p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            }
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-bg border-t border-white/10 py-4">
          {links.map(l => (
            <a
              key={l.href} href={l.href}
              className="block px-6 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="px-6 pt-3">
            <a
              href={waLink('Hola Christian, vengo de tu sitio web y quisiera más información.')}
              className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white w-full"
              target="_blank" rel="noopener noreferrer"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex flex-col justify-end overflow-hidden">
      <img
        src={`${B}hero.webp`}
        alt="Novia de espaldas con vestido de encaje, abrazada por su pareja entre árboles al atardecer — fotografía documental de Christian Macías"
        width={1280} height={853}
        className="absolute inset-0 w-full h-full object-cover object-center"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/30 to-transparent" />
      <div className="relative contenedor pb-16 sm:pb-20">
        <p className="font-sans text-gold text-xs tracking-[0.25em] uppercase mb-4">
          Christian Macías · Guadalajara, México
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl italic text-white leading-tight max-w-2xl mb-5">
          Fotógrafo de bodas<br />documental —<br />real, no forzado.
        </h1>
        <p className="text-white/70 text-base sm:text-lg max-w-md mb-8 leading-relaxed">
          Sin poses. Sin escenas armadas. Solo tu historia, contada desde adentro.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#portafolio" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm text-white hover:bg-white/10 transition-colors">Ver portafolio</a>
          <a href="#paquetes" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm text-white hover:bg-white/10 transition-colors">Paquetes y precios</a>
        </div>
      </div>
    </section>
  );
}

// ─── Filosofía ───────────────────────────────────────────────────────────────
function Filosofia() {
  return (
    <section id="filosofia" className="bg-bg py-20 sm:py-28">
      <div className="contenedor">
        <div className="grid md:grid-cols-3 gap-10 sm:gap-14">
          {[
            {
              titulo: 'Bodas sin pose',
              texto: 'No dirijo la escena: la espero. Fotografía documental y cinematográfica de autor, con paquetes propios y proyectos en Guadalajara, todo México y destinos internacionales como Bolivia, Francia, Bélgica y Colombia.',
            },
            {
              titulo: 'Presencia, no producción',
              texto: 'En fotografía documental ese momento existió una sola vez. Llego temprano, cuando todavía no hay nada montado. Me quedo en los márgenes de la escena: no acomodo a la familia, no pido que se repita un abrazo.',
            },
            {
              titulo: 'MyWed PRO — #1 México',
              texto: 'Primer lugar en México y en Guadalajara dentro del directorio internacional de fotógrafos de bodas MyWed. Más de 300 bodas documentadas en 12+ años de ejercicio, en 4 países fuera de México.',
            },
          ].map(item => (
            <div key={item.titulo}>
              <h2 className="font-serif text-2xl sm:text-3xl italic text-white mb-4">{item.titulo}</h2>
              <p className="text-white/60 text-sm leading-relaxed">{item.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Elemento memorable: cronógrafo del día de boda ─────────────────────────
const MOMENTOS = [
  {
    id: 'preparativos',
    hora: 'Mañana',
    label: 'Preparativos',
    dato: 'La primera luz del getting ready',
    texto: 'Llego cuando todavía no hay nada montado y la casa está en desorden. Me quedo en los márgenes: no acomodo a la familia, no pido que se repita un abrazo, no interrumpo para que alguien voltee a la cámara. Si algo pasa una sola vez, mi trabajo es estar ahí cuando pase.',
    img: 'galeria-07',
    imgAlt: 'Ceremonia de boda con ritual de incienso, fotografía documental de Christian Macías',
  },
  {
    id: 'ceremonia',
    hora: 'Tarde',
    label: 'Ceremonia',
    dato: 'El momento que no se repite',
    texto: 'En una boda tapatía suele querer decir tres o cuatro sedes en un mismo día —el getting ready, la iglesia o el registro civil, la sesión y el salón— con traslados de por medio. Voy en mi propio coche, con mi propio equipo, y no dependo de que nadie me haga espacio en la camioneta.',
    img: 'benazuza-ceremonia',
    imgAlt: 'Novios tomados de la mano durante la ceremonia con la luz dorada del atardecer, Hacienda Benazuza',
  },
  {
    id: 'sesion',
    hora: 'Hora dorada',
    label: 'Sesión',
    dato: 'La luz que no se puede pedir dos veces',
    texto: 'La hora dorada en Jalisco es corta. Conozco los tiempos reales de la ciudad: a qué hora empieza a caer la luz sobre la cantera del Templo Expiatorio, y por qué un sábado de diciembre por Chapalita no se cruza igual que un jueves cualquiera. No es un dato de turista.',
    img: 'sesion-previa',
    imgAlt: 'Sesión de compromiso en bosque con rayos de luz dorada, fotógrafo de bodas documental en Guadalajara',
  },
  {
    id: 'fiesta',
    hora: 'Noche',
    label: 'Fiesta',
    dato: 'El primer baile con chispas frías',
    texto: 'La fiesta no se documenta desde la barra: se documenta desde adentro. Las mejores fotos de un primer baile salen de estar a la altura correcta, con la lente adecuada, antes de que la música empiece. No de improvisar cuando ya todos están bailando.',
    img: 'benazuza-baile',
    imgAlt: 'Primer baile de los novios de noche con chispas frías sobre la pista pintada a mano, Hacienda Benazuza',
  },
];

function Cronografo() {
  const [activo, setActivo] = useState(0);
  const m = MOMENTOS[activo];

  return (
    <section id="cronografo" className="bg-paper py-20 sm:py-28" aria-label="Cómo es un día de boda con Christian Macías">
      <div className="contenedor">
        <div className="max-w-3xl mb-10">
          <p className="text-ink/50 text-xs font-sans tracking-[0.2em] uppercase mb-3">Cómo es un día de boda conmigo</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl italic text-ink leading-snug">
            ¿A qué hora de tu boda<br />está el fotógrafo?
          </h2>
          <p className="mt-4 text-ink/60 text-sm sm:text-base leading-relaxed max-w-xl">
            La fotografía documental no es llegar y disparar. Es presencia desde la primera hora hasta la última.
            Toca cada momento para ver qué está pasando.
          </p>
        </div>

        <div className="flex flex-wrap gap-0 border border-cream rounded-full overflow-hidden w-fit mb-12" role="tablist" aria-label="Momentos del día de boda">
          {MOMENTOS.map((mom, i) => (
            <button
              key={mom.id}
              id={`tab-${mom.id}`}
              role="tab"
              aria-selected={activo === i}
              aria-controls={`panel-${mom.id}`}
              onClick={() => setActivo(i)}
              className={`px-5 sm:px-7 py-3 text-xs sm:text-sm font-sans transition-colors ${
                activo === i
                  ? 'bg-ink text-white'
                  : 'text-ink/60 hover:text-ink hover:bg-cream/50'
              }`}
            >
              {mom.label}
            </button>
          ))}
        </div>

        <div
          id={`panel-${m.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${m.id}`}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <p className="font-sans text-gold text-xs tracking-[0.2em] uppercase mb-4">{m.hora} · {m.dato}</p>
            <blockquote className="font-serif text-xl sm:text-2xl italic text-ink leading-relaxed mb-6 border-l-4 border-gold pl-5">
              {m.texto}
            </blockquote>
            <a
              href={waLink(`Hola Christian, vengo de tu sitio web y me gustaría hablar sobre mi boda. Especialmente sobre la cobertura de ${m.label.toLowerCase()}.`)}
              className="inline-flex items-center gap-2 rounded-full bg-ink text-white px-6 py-3 text-sm font-semibold hover:bg-ink/80 transition-colors"
              target="_blank" rel="noopener noreferrer"
            >
              Platicamos sobre tu boda
            </a>
          </div>
          <div className="overflow-hidden rounded-lg min-w-0">
            <img
              src={`${B}${m.img}.webp`}
              alt={m.imgAlt}
              width={1000} height={667}
              loading="lazy"
              className="w-full h-64 sm:h-80 md:h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Sobre mí ─────────────────────────────────────────────────────────────────
function SobreMi() {
  return (
    <section className="bg-bg py-20 sm:py-28">
      <div className="contenedor grid md:grid-cols-2 gap-12 items-center">
        <div className="overflow-hidden rounded-lg">
          <img
            src={`${B}retrato-bn.webp`}
            alt="Christian Macías, fotógrafo de bodas documental, retrato en blanco y negro al aire libre con parka de capucha"
            width={640} height={800}
            loading="lazy"
            className="w-full object-cover"
          />
        </div>
        <div>
          <p className="text-gold text-xs tracking-[0.2em] uppercase font-sans mb-4">Sobre mí</p>
          <h2 className="font-serif text-3xl sm:text-4xl italic text-white mb-6 leading-tight">
            Documentar es<br />mi forma de ver<br />el mundo
          </h2>
          <div className="space-y-4 text-white/60 text-sm leading-relaxed">
            <p>
              Soy <strong className="text-white">Christian Macías</strong>, fotógrafo de bodas en Guadalajara
              y Zapopan, con un enfoque documental y cinematográfico. Desde ahí construí{' '}
              <strong className="text-white">Taking Moments Photography</strong>, dedicada a contar
              historias de boda con luz natural y sin dirección forzada.
            </p>
            <p>
              Mi trabajo se ha desarrollado en venues icónicos de Jalisco —del Templo Expiatorio a
              Hacienda Benazuza, de Tequila a Tapalpa— y en destinos como la Riviera Nayarit,
              Puerto Vallarta, la Ciudad de México, San Miguel de Allende y Oaxaca. A nivel
              internacional he documentado bodas en Bolivia, Francia, Bélgica y Colombia.
            </p>
            <p>
              Creo en la fotografía como testimonio, no como dirección. Esa forma de mirar la escribí
              a fondo en mi libro <strong className="text-white">El Verbo se Hizo Imagen</strong> (2025).
            </p>
          </div>
          <div className="flex gap-8 mt-8">
            {[
              { num: '300+', label: 'Bodas documentadas' },
              { num: '12+',  label: 'Años en el oficio' },
              { num: '4',    label: 'Países fuera de México' },
            ].map(s => (
              <div key={s.label}>
                <p className="font-serif text-3xl italic text-gold">{s.num}</p>
                <p className="text-white/40 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Portafolio ───────────────────────────────────────────────────────────────
const GALERIA = [
  { file: 'galeria-01', alt: 'Pareja abrazada recortada contra el cielo del atardecer, boda documental Guadalajara' },
  { file: 'galeria-02', alt: 'Novia en jardín tropical, boda documental Guadalajara' },
  { file: 'galeria-03', alt: 'Pareja bailando rodeada de luces desenfocadas, boda documental' },
  { file: 'galeria-04', alt: 'Invitados bailando alrededor de los novios, boda documental' },
  { file: 'galeria-05', alt: 'Dos novias tomadas de la mano al atardecer, boda documental' },
  { file: 'galeria-06', alt: 'Primer baile de bodas con invitados aplaudiendo' },
  { file: 'galeria-07', alt: 'Ceremonia de boda con ritual de incienso, fotografía documental' },
  { file: 'galeria-08', alt: 'Baile nocturno de novios bajo luces colgantes' },
  { file: 'galeria-10', alt: 'Retrato conceptual de pareja de novios, fotografía documental' },
  { file: 'galeria-11', alt: 'Pareja de novios en una carretera con paisaje desértico' },
  { file: 'galeria-14', alt: 'Baile de novios con decoración floral y velas' },
  { file: 'galeria-17', alt: 'Pareja de novios riendo, fotografía documental de bodas' },
  { file: 'galeria-19', alt: 'Novios abrazados bajo una luz cálida y dorada' },
  { file: 'galeria-20', alt: 'Novios saliendo de la ceremonia con invitados celebrando' },
  { file: 'benazuza-sombrillas', alt: 'Invitados con sombrillas de papel esperando la ceremonia, Hacienda Benazuza' },
  { file: 'benazuza-ceremonia', alt: 'Novios tomados de la mano durante la ceremonia con luz dorada, Hacienda Benazuza' },
  { file: 'benazuza-baile', alt: 'Primer baile de los novios de noche con chispas frías, Hacienda Benazuza' },
  { file: 'zapatos', alt: 'Detalle de zapatos de novia sostenidos a la entrada de una puerta' },
];

function Portafolio() {
  return (
    <section id="portafolio" className="bg-paper py-20 sm:py-28">
      <div className="contenedor">
        <div className="mb-10">
          <p className="text-ink/40 text-xs font-sans tracking-[0.2em] uppercase mb-3">Portafolio</p>
          <h2 className="font-serif text-3xl sm:text-4xl italic text-ink">
            Historias documentadas en Guadalajara y el mundo
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1.5 sm:gap-2">
          {GALERIA.map((foto, i) => (
            <div
              key={foto.file}
              className={`overflow-hidden min-w-0 ${(i === 0 || i === 16) ? 'col-span-2' : ''}`}
            >
              <img
                src={`${B}${foto.file}.webp`}
                alt={foto.alt}
                width={1000} height={667}
                loading="lazy"
                className="w-full h-full object-cover aspect-[3/2]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Dónde trabajo ────────────────────────────────────────────────────────────
const DESTINOS = [
  {
    nombre: 'Bodas en Oaxaca',
    desc: 'Santo Domingo, Mitla, un ex convento del siglo XVI y la costa de Mazunte. Cuatro lugares que no se parecen, de tres bodas y una sesión.',
    img: 'oaxaca', imgAlt: 'Novios frente al templo de Santo Domingo en Oaxaca al amanecer',
    href: 'https://www.christianmacias.com/bodas-oaxaca/',
  },
  {
    nombre: 'Hacienda El Centenario',
    desc: 'Tequila, a una hora de Guadalajara. Los cactus, las tres opciones de ceremonia y la callejoneada. Cuatro bodas ahí.',
    img: 'tequila', imgAlt: 'Novios entre los cactus de Hacienda El Centenario, Tequila, con luz dorada',
    href: 'https://www.christianmacias.com/fotografo-hacienda-el-centenario-tequila/',
  },
  {
    nombre: 'Monte Coxalá',
    desc: 'Jocotepec, a la orilla del lago de Chapala. Los atardeceres, el clima y esa arquitectura de influencia maya.',
    img: 'chapala', imgAlt: 'Novios al atardecer junto al lago de Chapala en Monte Coxalá, Jocotepec',
    href: 'https://www.christianmacias.com/fotografo-monte-coxala-jocotepec/',
  },
];

function DondeTrabajo() {
  return (
    <section id="donde-trabajo" className="bg-bg py-20 sm:py-28">
      <div className="contenedor">
        <div className="mb-10">
          <p className="text-gold text-xs tracking-[0.2em] uppercase font-sans mb-3">Guías de venue</p>
          <h2 className="font-serif text-3xl sm:text-4xl italic text-white">
            Lo que sé de cada lugar
          </h2>
          <p className="text-white/50 text-sm mt-3 max-w-xl">
            No son fichas de catálogo. Cada una sale de haber trabajado ahí: a qué hora pega la luz,
            dónde conviene la ceremonia, qué cuesta trabajo fotografiar.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {DESTINOS.map(d => (
            <a
              key={d.nombre}
              href={d.href}
              target="_blank" rel="noopener noreferrer"
              className="group block overflow-hidden"
              aria-label={`Ver guía: ${d.nombre}`}
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={`${B}${d.img}.webp`}
                  alt={d.imgAlt}
                  width={800} height={533}
                  loading="lazy"
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="pt-4">
                <h3 className="font-serif text-xl italic text-white mb-2">{d.nombre}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{d.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Paquetes ─────────────────────────────────────────────────────────────────
const PAQUETES = [
  {
    nombre: 'Esencia',
    subtitulo: 'Bodas íntimas · 8 horas',
    precio: '$32,000 MX',
    desc: 'Cobertura documental para parejas que buscan honestidad y profundidad sin producción excesiva.',
    incluye: [
      '8 horas de cobertura',
      'Fotografía por Christian Macías',
      '350–400 fotografías curadas',
      'Galería privada en línea',
      'Slideshow narrativo',
    ],
    msg: 'Hola Christian, me gustaría más información sobre la Colección Esencia ($32,000 MX).',
  },
  {
    nombre: 'Memoria',
    subtitulo: 'La historia como objeto · 10–12 horas',
    precio: '$48,000 MX',
    desc: 'Aquí la historia no solo se entrega digitalmente; se convierte en objeto.',
    incluye: [
      '10–12 horas de cobertura',
      '1 fotógrafo principal',
      'Segundo fotógrafo estratégico',
      'Sesión previa documental',
      '450 fotografías curadas',
      'Galería privada',
      'Slideshow narrativo',
      '1 Photo Book de autor',
    ],
    msg: 'Hola Christian, me gustaría más información sobre la Colección Memoria ($48,000 MX).',
  },
  {
    nombre: 'Autor',
    subtitulo: 'Día completo · legado',
    precio: '$69,000 MX',
    desc: 'Experiencia documental completa. Pensada para parejas que valoran la fotografía como legado.',
    incluye: [
      'Cobertura total del día sin límite de horas',
      'Dirección narrativa por Christian Macías',
      'Segundo fotógrafo seleccionado',
      '650 fotografías curadas',
      'Video documental (5–8 min, estilo autor)',
      '1 Photo Book premium + 1 para padres',
      'Sesión previa conceptual y entrega personalizada',
    ],
    msg: 'Hola Christian, me gustaría más información sobre la Colección Autor ($69,000 MX).',
  },
];

function Paquetes() {
  return (
    <section id="paquetes" className="bg-paper py-20 sm:py-28">
      <div className="contenedor">
        <div className="mb-10">
          <p className="text-ink/40 text-xs font-sans tracking-[0.2em] uppercase mb-3">Colecciones 2026</p>
          <h2 className="font-serif text-3xl sm:text-4xl italic text-ink">Paquetes de boda</h2>
          <p className="text-ink/60 text-sm mt-3 max-w-xl">
            Tres colecciones de fotografía documental. Sin listas de poses: cobertura, curaduría
            y entrega pensadas para que la historia quede completa.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {PAQUETES.map(p => (
            <div key={p.nombre} className="bg-white border border-cream rounded-lg p-7 flex flex-col min-w-0">
              <p className="text-ink/30 text-xs font-sans tracking-[0.15em] uppercase mb-1">{p.subtitulo}</p>
              <h3 className="font-serif text-2xl italic text-ink mb-2">{p.nombre}</h3>
              <p className="text-ink/60 text-sm mb-5">{p.desc}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {p.incluye.map(item => (
                  <li key={item} className="flex gap-2 text-sm text-ink/70 min-w-0">
                    <span className="text-gold mt-0.5 shrink-0" aria-hidden="true">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <p className="font-serif text-2xl italic text-gold mb-4">{p.precio}</p>
                <a
                  href={waLink(p.msg)}
                  className="flex items-center justify-center gap-2 w-full rounded-full bg-ink text-white px-6 py-3 text-sm font-semibold hover:bg-ink/80 transition-colors"
                  target="_blank" rel="noopener noreferrer"
                >
                  Reservar esta fecha
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 p-6 bg-cream/50 rounded-lg text-sm text-ink/60 space-y-1">
          <p>Los paquetes no incluyen viáticos (traslados, hospedaje y alimentos en bodas destino).</p>
          <p>Para reservar fecha se requiere el 50% de anticipo. Los precios tienen validez de 30 días.</p>
          <p>Entregas digitales en galería privada de alta calidad.</p>
        </div>
        <div className="mt-12">
          <h3 className="font-serif text-xl italic text-ink mb-6">Experiencias adicionales</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Trash the dress', precio: '$7,000 MX' },
              { label: 'Sesión previa', precio: '$5,000 MX' },
              { label: 'Segundo fotógrafo', precio: '$6,000 MX' },
              { label: 'Foto libro adicional', precio: '$4,500 MX' },
            ].map(a => (
              <div key={a.label} className="border border-cream rounded-lg p-4 min-w-0">
                <p className="text-ink/60 text-xs mb-1">{a.label}</p>
                <p className="font-serif text-lg italic text-gold">{a.precio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Reconocimientos ──────────────────────────────────────────────────────────
function Reconocimientos() {
  const items = [
    { titulo: 'MyWed', desc: 'Perfil PRO — primer lugar en México y en Guadalajara dentro del directorio internacional de fotógrafos de bodas.', href: 'https://mywed.com/es/photographer/christianmacias/' },
    { titulo: 'Inspiration Photographers', desc: 'Perfil PRO en la plataforma internacional de premios con foto premiada y colección destacada en 2026.', href: 'https://inspirationphotographers.com/pro/photographer/christian-macias-ramirez/' },
    { titulo: 'Google Business', desc: 'Ficha propia verificada en Guadalajara, donde los clientes dejan sus reseñas.', href: NEGOCIO.mapsUrl },
    { titulo: 'Educador y tallerista', desc: 'Talleres de fotografía documental en México, Colombia, Chile, Bolivia, Perú, Estados Unidos y otros países.', href: 'https://www.christianmacias.com/talleres/' },
  ];
  return (
    <section className="bg-bg py-20 sm:py-28">
      <div className="contenedor">
        <div className="mb-10">
          <p className="text-gold text-xs tracking-[0.2em] uppercase font-sans mb-3">Reconocimientos</p>
          <h2 className="font-serif text-3xl sm:text-4xl italic text-white">
            Trayectoria respaldada por la comunidad internacional
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(item => (
            <a
              key={item.titulo}
              href={item.href}
              target="_blank" rel="noopener noreferrer"
              className="border border-white/10 rounded-lg p-6 hover:border-gold/50 transition-colors group"
            >
              <h3 className="font-serif text-lg italic text-white mb-3 group-hover:text-gold transition-colors">{item.titulo}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonios ──────────────────────────────────────────────────────────────
function Testimonios() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="contenedor">
        <div className="mb-10">
          <p className="text-ink/40 text-xs font-sans tracking-[0.2em] uppercase mb-3">Lo que dicen las parejas</p>
          <h2 className="font-serif text-3xl sm:text-4xl italic text-ink">Testimonios</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <figure className="bg-white border border-cream rounded-lg p-8">
            <blockquote className="font-serif text-xl italic text-ink leading-relaxed mb-4">
              "Gracias a Christian y su equipo el mejor día de mi vida durará para siempre ♥️
              las fotos y videos son lo más increíble que he visto. ¡Gracias infinitas!"
            </blockquote>
            <figcaption className="text-ink/50 text-sm">
              — Alex & Andy · Boda en El Altto, San Ángel
            </figcaption>
          </figure>
          <figure className="bg-white border border-cream rounded-lg p-8">
            <blockquote className="font-serif text-xl italic text-ink leading-relaxed mb-4">
              "Fue un sueño tenerlo como nuestro fotógrafo de bodas. Su ojo es increíble y su estilo
              documental logró capturar cada momento de una manera tan natural y auténtica. Cada foto
              nos hace revivir nuestro día y sentir nuevamente todas esas emociones."
            </blockquote>
            <figcaption className="text-ink/50 text-sm">
              — Elisa & Jacob · Reseña en Google
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

// ─── Contacto ─────────────────────────────────────────────────────────────────
function Contacto() {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [lugar, setLugar] = useState('');

  function handleEnviar() {
    const msg = `Hola Christian, vengo de tu sitio web.\nNombre: ${nombre || '[sin nombre]'}\nFecha de boda: ${fecha || '[por definir]'}\nLugar: ${lugar || '[por definir]'}\nMe gustaría conocer tu disponibilidad.`;
    window.open(waLink(msg), '_blank', 'noopener,noreferrer');
  }

  return (
    <section id="contacto" className="bg-bg py-20 sm:py-28">
      <div className="contenedor">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-gold text-xs tracking-[0.2em] uppercase font-sans mb-4">Contacto</p>
            <h2 className="font-serif text-3xl sm:text-4xl italic text-white mb-6">
              Hablemos de tu boda o proyecto
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              Si buscas un fotógrafo de bodas documental en Guadalajara, Jalisco o cualquier destino
              en México o el extranjero, escríbeme y platicamos sobre tu historia.
            </p>
            <a
              href={waLink('Hola Christian, vengo de tu sitio web y quisiera más información sobre tu trabajo.')}
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1fb956] transition-colors mb-6"
              target="_blank" rel="noopener noreferrer"
            >
              Escribir por WhatsApp
            </a>
            <div className="space-y-3 mt-2">
              <a href={`mailto:${NEGOCIO.email}`} className="flex items-center gap-3 text-white/60 text-sm hover:text-white transition-colors">
                <span className="text-gold w-4" aria-hidden="true">✉</span>
                {NEGOCIO.email}
              </a>
              <a href={`tel:${NEGOCIO.telRaw}`} className="flex items-center gap-3 text-white/60 text-sm hover:text-white transition-colors">
                <span className="text-gold w-4" aria-hidden="true">☎</span>
                {NEGOCIO.tel}
              </a>
              <a href={NEGOCIO.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-white/60 text-sm hover:text-white transition-colors">
                <span className="text-gold w-4 mt-0.5 shrink-0" aria-hidden="true">📍</span>
                {NEGOCIO.direccion}
              </a>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-8">
            <p className="text-white/60 text-sm mb-6">
              Deja tus datos y te respondo ese mismo día.
            </p>
            <div className="space-y-4">
              <div>
                <label htmlFor="f-nombre" className="block text-white/40 text-xs tracking-[0.15em] uppercase mb-1">Nombre</label>
                <input
                  id="f-nombre" type="text" autoComplete="name"
                  value={nombre} onChange={e => setNombre(e.target.value)}
                  className="w-full bg-white/5 border border-white/15 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/60 placeholder-white/20"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="f-fecha" className="block text-white/40 text-xs tracking-[0.15em] uppercase mb-1">Fecha de boda</label>
                <input
                  id="f-fecha" type="text"
                  value={fecha} onChange={e => setFecha(e.target.value)}
                  className="w-full bg-white/5 border border-white/15 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/60 placeholder-white/20"
                  placeholder="ej. 12 de marzo de 2026"
                />
              </div>
              <div>
                <label htmlFor="f-lugar" className="block text-white/40 text-xs tracking-[0.15em] uppercase mb-1">Ciudad o venue</label>
                <input
                  id="f-lugar" type="text"
                  value={lugar} onChange={e => setLugar(e.target.value)}
                  className="w-full bg-white/5 border border-white/15 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/60 placeholder-white/20"
                  placeholder="Guadalajara, Hacienda Benazuza…"
                />
              </div>
              <button
                type="button"
                onClick={handleEnviar}
                className="flex items-center justify-center gap-2 w-full rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-semibold hover:bg-[#1fb956] transition-colors mt-2"
              >
                Enviar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-bg border-t border-white/10 py-12">
      <div className="contenedor">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="font-serif text-2xl italic text-white mb-1">Christian Macías</p>
            <p className="text-white/40 text-xs">{NEGOCIO.cargo} · {NEGOCIO.ciudad}</p>
          </div>
          <div className="flex items-center gap-5">
            <a href={NEGOCIO.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/40 hover:text-white transition-colors text-sm">IG</a>
            <a href={NEGOCIO.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/40 hover:text-white transition-colors text-sm">FB</a>
            <a href={NEGOCIO.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-white/40 hover:text-white transition-colors text-sm">TK</a>
            <a href={NEGOCIO.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white/40 hover:text-white transition-colors text-sm">YT</a>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-white/30 text-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p>CM© 2026 Christian Macías · Fotógrafo de bodas documental</p>
          <p>{NEGOCIO.direccion}</p>
        </div>
      </div>
    </footer>
  );
}

// ─── Barra fija móvil ─────────────────────────────────────────────────────────
function BarraMovil() {
  return (
    <nav
      aria-label="Acciones rápidas"
      className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-bg border-t border-white/15 flex pb-safe"
    >
      <a
        href={waLink('Hola Christian, vengo de tu sitio web y quisiera más información.')}
        target="_blank" rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-3 text-[#25D366] hover:bg-white/5 transition-colors gap-1"
        aria-label="Escribir por WhatsApp"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.55 4.1 1.517 5.829L.057 23.07a.75.75 0 0 0 .93.93l5.328-1.472A11.951 11.951 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.68-.513-5.208-1.407l-.37-.22-3.834 1.059 1.03-3.75-.24-.386A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
        <span className="text-[9px] font-sans">WhatsApp</span>
      </a>
      <a
        href={`tel:${NEGOCIO.telRaw}`}
        className="flex-1 flex flex-col items-center justify-center py-3 text-white/70 hover:bg-white/5 transition-colors gap-1"
        aria-label={`Llamar a ${NEGOCIO.tel}`}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6 6l.9-.9a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.72 16z"/></svg>
        <span className="text-[9px] font-sans">Llamar</span>
      </a>
      <a
        href={NEGOCIO.mapsUrl}
        target="_blank" rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-3 text-white/70 hover:bg-white/5 transition-colors gap-1"
        aria-label="Cómo llegar al estudio"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        <span className="text-[9px] font-sans">Maps</span>
      </a>
    </nav>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <JsonLd />
      <Nav />
      <main id="main-content">
        <Hero />
        <Filosofia />
        <Cronografo />
        <SobreMi />
        <Portafolio />
        <DondeTrabajo />
        <Paquetes />
        <Reconocimientos />
        <Testimonios />
        <Contacto />
      </main>
      <Footer />
      <BarraMovil />
    </>
  );
}
