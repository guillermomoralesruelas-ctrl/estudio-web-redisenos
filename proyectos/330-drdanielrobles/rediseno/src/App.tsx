import { useState } from 'react';

// ── Datos del negocio ───────────────────────────────────────────────────────
const TEL = '3336400933';
const TEL2 = '3336400998';
const WA_NUM = '523336400933';
const MAPS = 'https://maps.app.goo.gl/dijQtr7EDt22gZDN6';
const FB = 'https://www.facebook.com/DrDanielRobles';
const IG = 'https://www.instagram.com/drdanielrobles';

type Zona = 'cara' | 'pecho' | 'cuerpo' | 'no-quir';

const PROCEDIMIENTOS: Record<Zona, { nombre: string; lista: string[] }> = {
  cara: {
    nombre: 'Cirugías Faciales',
    lista: [
      'Rejuvenecimiento de Párpados',
      'Rejuvenecimiento Facial (Lifting)',
      'Nariz (Rinoplastía)',
      'Orejas',
      'Bichectomía',
      'Elevación de Cejas',
      'Perfiloplastía (Cirugía de Perfil)',
      'Aumento de Mentón',
      'Lipotransferencia Grasa',
    ],
  },
  pecho: {
    nombre: 'Cirugías Mamarias',
    lista: [
      'Aumento Mamario (Lipotransferencia)',
      'Implante Mamario',
      'Reducción de la Mama',
      'Levantamiento de la Mama (Pexia)',
      'Reconstrucción Mamaria',
      'Ginecomastia (Retiro de glándula en hombre)',
    ],
  },
  cuerpo: {
    nombre: 'Cirugías Corporales',
    lista: [
      'Liposucción + Abdominoplastía',
      'Lipoescultura + Abdomino + Implantes',
      'Lipectomía Abdominal',
      'Lipoescultura + Implantes',
      'Liposucción (Lipoescultura)',
      'Cirugía Corporal Post Bariátrica',
      'Implantes de Pantorrilla',
      'Aumento de Glúteos',
      'Braquioplastia (Flacidez en brazos)',
      'Mini Abdominoplastia',
    ],
  },
  'no-quir': {
    nombre: 'Procedimientos No Quirúrgicos',
    lista: [
      'Toxina Botulínica',
      'Relleno para Nariz (Rinomodelación)',
      'Rejuvenecimiento sin Cirugía',
      'Regenerador de Colágeno',
      'Hiperhidrosis',
    ],
  },
};

const TESTIMONIOS = [
  {
    inicial: 'S',
    nombre: 'Sara',
    ciudad: 'Guadalajara, Jal.',
    texto:
      'Estoy feliz con los resultados de mi cirugía, superó mis expectativas. El Dr. Daniel reconstruyó completamente mi estómago y la cicatriz. Recomiendo ampliamente al Dr. Daniel: una persona muy consciente en todos los aspectos, te habla con la verdad de los procedimientos y sobre todo está primero la seguridad del paciente.',
  },
  {
    inicial: 'H',
    nombre: 'Helen',
    ciudad: 'Houston, Tx.',
    texto:
      'Fui con el Dr. Daniel por recomendación de unas amigas y fue la mejor decisión que pude tomar. Tenía mucho miedo de operarme los párpados. El Dr. me explicó perfectamente lo que necesitaba, se tomó el tiempo de resolver mis dudas, y mi resultado superó mis expectativas. Mis ojos se ven mucho más jóvenes.',
  },
  {
    inicial: 'R',
    nombre: 'Roxana',
    ciudad: 'México',
    texto:
      'Me realicé una cirugía con el Doctor Daniel Robles. Mi cirugía fue implantes de glúteos, implantes de busto y una lipo. Quedé muy contenta con su trabajo. Es una persona con mucha ética profesional y le gusta que sus pacientes quedemos estéticamente muy bien. Es un excelente cirujano.',
  },
  {
    inicial: 'M',
    nombre: 'Maru',
    ciudad: 'Guadalajara, Jal.',
    texto:
      'Mi experiencia con el doctor Daniel Robles desde el inicio hasta el final fue excelente. Es muy profesional y está certificado, eso me dio mucha confianza y seguridad. Siempre tuvo la mejor atención en todo momento. ¡Es el mejor doctor de Guadalajara! Lo recomiendo ampliamente.',
  },
  {
    inicial: 'E',
    nombre: 'Ma. Eugenia',
    ciudad: 'Guadalajara, Jal.',
    texto:
      'Excelente doctor con gran calidez y empatía por sus pacientes. Te explica perfectamente todo procedimiento que realiza con gran ética que te hace sentir segura y acompañada antes y después de la cirugía.',
  },
];

const HOSPITALES = [
  { archivo: 'hosp-angeles.webp',       alt: 'Hospital Ángeles del Carmen', w: 179, h: 120 },
  { archivo: 'hosp-real-san-jose.webp', alt: 'Hospital Real San José Valle Real', w: 144, h: 120 },
  { archivo: 'hosp-san-javier.webp',    alt: 'Hospital San Javier', w: 81, h: 120 },
  { archivo: 'hosp-puerta-hierro.webp', alt: 'Hospitales Puerta de Hierro', w: 158, h: 120 },
  { archivo: 'hosp-country.webp',       alt: 'Hospital Country 2000', w: 96, h: 120 },
  { archivo: 'hosp-pablo-neruda.webp',  alt: 'Hospital Pablo Neruda', w: 206, h: 80 },
  { archivo: 'hosp-altamira.webp',      alt: 'Hospital Altamira', w: 200, h: 120 },
];

const CREDENCIALES = [
  { archivo: 'cred-asps.webp',   alt: 'American Society of Plastic Surgeons', w: 163, h: 120 },
  { archivo: 'cred-cmcper.webp', alt: 'Colegio y Sociedad de Cirujanos Plásticos', w: 120, h: 120 },
  { archivo: 'cred-amcper.webp', alt: 'AMCPER', w: 95, h: 120 },
  { archivo: 'cred-isaps.webp',  alt: 'ISAPS', w: 304, h: 120 },
];

// ── Helpers ──────────────────────────────────────────────────────────────────
function waLink(texto: string) {
  return `https://wa.me/${WA_NUM}?text=${encodeURIComponent(texto)}`;
}
const img = (ruta: string) => `${import.meta.env.BASE_URL}${ruta}`;

// ── Icono WhatsApp ───────────────────────────────────────────────────────────
function IcoWA() {
  return (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

// ── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  const [abierto, setAbierto] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-fondo/95 backdrop-blur border-b border-borde">
      <div className="contenedor flex items-center justify-between h-16 gap-4">
        <a href="#inicio" aria-label="Dr. Daniel Robles — inicio">
          <img src={img('logo.webp')} alt="Dr. Daniel Robles Pereyra" width={220} height={32} className="h-8 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#doctor" className="text-tinta-suave hover:text-azul transition-colors">Nosotros</a>
          <a href="#procedimientos" className="text-tinta-suave hover:text-azul transition-colors">Procedimientos</a>
          <a href="#turismo" className="text-tinta-suave hover:text-azul transition-colors">Turismo médico</a>
          <a href={`tel:${TEL}`} className="text-tinta-suave hover:text-azul transition-colors">(33) 3640 0933</a>
          <a href={waLink('Hola Dr. Robles, me gustaría agendar una consulta.')} target="_blank" rel="noopener noreferrer" className="btn-azul text-xs">
            Agendar cita
          </a>
        </div>
        <button
          onClick={() => setAbierto(!abierto)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded"
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={abierto}
        >
          <span className={`block w-5 h-0.5 bg-tinta transition-transform ${abierto ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block w-5 h-0.5 bg-tinta transition-opacity ${abierto ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-tinta transition-transform ${abierto ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>
      {abierto && (
        <div className="md:hidden bg-fondo border-t border-borde px-5 pb-4 flex flex-col gap-3 text-sm font-medium">
          <a href="#doctor" onClick={() => setAbierto(false)} className="py-2 text-tinta-suave">Nosotros</a>
          <a href="#procedimientos" onClick={() => setAbierto(false)} className="py-2 text-tinta-suave">Procedimientos</a>
          <a href="#turismo" onClick={() => setAbierto(false)} className="py-2 text-tinta-suave">Turismo médico</a>
          <a href={`tel:${TEL}`} className="py-2 text-tinta-suave">(33) 3640 0933</a>
          <a href={waLink('Hola Dr. Robles, me gustaría agendar una consulta.')} target="_blank" rel="noopener noreferrer" className="btn-azul text-center">
            Agendar cita
          </a>
        </div>
      )}
    </nav>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-tinta">
      <img
        src={img('hero.webp')}
        alt="Consulta con el Dr. Daniel Robles Pereyra, cirujano plástico en Guadalajara"
        width={1440}
        height={507}
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="contenedor relative z-10 py-24 sm:py-32 lg:py-40">
        <div className="max-w-2xl">
          <p className="text-azul font-semibold text-sm tracking-wide mb-3">Guadalajara, Jalisco</p>
          <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight mb-4">
            Cirugía Plástica,<br />Estética y Reconstructiva
          </h1>
          <p className="text-lg text-white/80 mb-2 font-medium">Dr. Daniel Robles Pereyra</p>
          <p className="text-sm text-white/60 mb-8">
            Certificado CMCPER Núm. 1185 · Miembro AMCPER, ASPS, ISAPS · DGP UAG 2276610 · Ced. Esp. UDG 3872854
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={waLink('Hola Dr. Robles, me gustaría agendar una consulta.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-azul"
            >
              <IcoWA />
              Escríbenos por WhatsApp
            </a>
            <a href={`tel:${TEL}`} className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
              (33) 3640 0933
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Doctor ───────────────────────────────────────────────────────────────────
function Doctor() {
  return (
    <section id="doctor" className="py-20 bg-fondo">
      <div className="contenedor grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <img
            src={img('doctor.webp')}
            alt="Conoce al Dr. Daniel Robles Pereyra, cirujano plástico certificado en Guadalajara"
            width={624}
            height={797}
            loading="lazy"
            className="rounded-2xl w-full max-w-sm mx-auto md:max-w-none object-cover"
          />
        </div>
        <div className="min-w-0">
          <h2 className="text-2xl sm:text-3xl font-bold text-tinta mb-4">
            Salud y belleza en las manos de un experto
          </h2>
          <p className="text-tinta-suave mb-4 leading-relaxed">
            Hola, soy el doctor Daniel Robles Pereyra. Antes que nada, quiero agradecer que te des el tiempo de conocerme para que puedas tomar una decisión en pro de tu salud y tu belleza.
          </p>
          <p className="text-tinta-suave mb-4 leading-relaxed">
            Soy Cirujano Plástico egresado de la Universidad Autónoma de Guadalajara. Certificado ante el Consejo Mexicano de Cirugía Plástica, Estética y Reconstructiva (CMCPER) Núm. 1185. Miembro de las asociaciones más reconocidas en México, EE. UU. y Latinoamérica: AMCPER, ISAPS y ASPS.
          </p>
          <p className="text-tinta-suave mb-4 leading-relaxed">
            Como especialista me es muy importante ofrecer a mis pacientes la más alta tecnología empleando las últimas técnicas quirúrgicas y aparatos de vanguardia, que nos permiten alcanzar los mejores resultados con los menores tiempos de recuperación.
          </p>
          <p className="text-xs text-tinta-suave mb-6">DGP UAG 2276610 · Cédula Especialista UDG 3872854</p>
          <div className="flex flex-wrap gap-4 items-center">
            {CREDENCIALES.map((c) => (
              <img
                key={c.archivo}
                src={img(c.archivo)}
                alt={c.alt}
                width={c.w}
                height={c.h}
                loading="lazy"
                className="h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Procedimientos — elemento memorable ─────────────────────────────────────
function Procedimientos() {
  const [zonaActiva, setZonaActiva] = useState<Zona | null>(null);
  const [procActivo, setProcActivo] = useState<string | null>(null);

  const categorias: Array<{ id: Zona; archivo: string; label: string }> = [
    { id: 'pecho',   archivo: 'cat-mamarias.webp',       label: 'Cirugías Mamarias' },
    { id: 'cuerpo',  archivo: 'cat-corporales.webp',     label: 'Cirugías Corporales' },
    { id: 'no-quir', archivo: 'cat-no-quirurgicos.webp', label: 'No Quirúrgicos' },
    { id: 'cara',    archivo: 'cat-faciales.webp',        label: 'Cirugías Faciales' },
  ];

  const seleccionado = zonaActiva ? PROCEDIMIENTOS[zonaActiva] : null;

  function toggleZona(z: Zona) {
    setZonaActiva(prev => prev === z ? null : z);
    setProcActivo(null);
  }

  return (
    <section id="procedimientos" className="py-20 bg-cielo">
      <div className="contenedor">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-tinta mb-3">
            ¿Qué área quieres trabajar?
          </h2>
          <p className="text-tinta-suave max-w-xl mx-auto">
            Toca una zona del cuerpo y aparece la lista de procedimientos de esa área. Elige el que te interesa y te abrimos WhatsApp con el mensaje ya escrito.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start justify-center">
          {/* Silueta SVG interactiva */}
          <div className="flex-shrink-0 mx-auto" aria-hidden="true">
            <svg viewBox="0 0 240 540" width="220" height="495" className="drop-shadow">
              {/* Cabeza */}
              <ellipse cx="120" cy="52" rx="32" ry="40"
                fill={zonaActiva === 'cara' ? '#0277BD' : '#BFD8EC'}
                fillOpacity={zonaActiva === 'cara' ? 0.9 : 0.55}
                stroke={zonaActiva === 'cara' ? '#01578b' : '#88A1AF'} strokeWidth="2"
                style={{ cursor: 'pointer' }}
                onClick={() => toggleZona('cara')}
              />
              <text x="120" y="52" textAnchor="middle" dominantBaseline="middle" fontSize="10"
                fill={zonaActiva === 'cara' ? '#fff' : '#202124'}
                fontFamily="Montserrat,sans-serif" fontWeight="700" style={{ pointerEvents: 'none' }}>
                Cara
              </text>
              {/* Cuello */}
              <rect x="108" y="91" width="24" height="18" rx="4" fill="#E0EBF4" />
              {/* Torso pecho */}
              <rect x="80" y="108" width="80" height="65" rx="10"
                fill={zonaActiva === 'pecho' ? '#0277BD' : '#BFD8EC'}
                fillOpacity={zonaActiva === 'pecho' ? 0.9 : 0.55}
                stroke={zonaActiva === 'pecho' ? '#01578b' : '#88A1AF'} strokeWidth="2"
                style={{ cursor: 'pointer' }}
                onClick={() => toggleZona('pecho')}
              />
              <text x="120" y="140" textAnchor="middle" dominantBaseline="middle" fontSize="10"
                fill={zonaActiva === 'pecho' ? '#fff' : '#202124'}
                fontFamily="Montserrat,sans-serif" fontWeight="700" style={{ pointerEvents: 'none' }}>
                Pecho
              </text>
              {/* Brazos */}
              <rect x="40" y="110" width="38" height="80" rx="10" fill="#D6E8F4" stroke="#A8C3D8" strokeWidth="1.5" />
              <rect x="162" y="110" width="38" height="80" rx="10" fill="#D6E8F4" stroke="#A8C3D8" strokeWidth="1.5" />
              {/* Abdomen / cuerpo */}
              <rect x="80" y="172" width="80" height="95" rx="10"
                fill={zonaActiva === 'cuerpo' ? '#0277BD' : '#BFD8EC'}
                fillOpacity={zonaActiva === 'cuerpo' ? 0.9 : 0.55}
                stroke={zonaActiva === 'cuerpo' ? '#01578b' : '#88A1AF'} strokeWidth="2"
                style={{ cursor: 'pointer' }}
                onClick={() => toggleZona('cuerpo')}
              />
              <text x="120" y="214" textAnchor="middle" dominantBaseline="middle" fontSize="10"
                fill={zonaActiva === 'cuerpo' ? '#fff' : '#202124'}
                fontFamily="Montserrat,sans-serif" fontWeight="700" style={{ pointerEvents: 'none' }}>
                Cuerpo
              </text>
              {/* Piernas */}
              <rect x="82" y="266" width="34" height="140" rx="10" fill="#D6E8F4" stroke="#A8C3D8" strokeWidth="1.5" />
              <rect x="124" y="266" width="34" height="140" rx="10" fill="#D6E8F4" stroke="#A8C3D8" strokeWidth="1.5" />
              {/* Pies */}
              <rect x="78" y="404" width="40" height="28" rx="8" fill="#C8DCEA" stroke="#A8C3D8" strokeWidth="1.5" />
              <rect x="122" y="404" width="40" height="28" rx="8" fill="#C8DCEA" stroke="#A8C3D8" strokeWidth="1.5" />
              {/* Sin bisturí — cápsula lateral */}
              <rect x="185" y="120" width="52" height="52" rx="8"
                fill={zonaActiva === 'no-quir' ? '#426C81' : '#DDEEF9'}
                fillOpacity={zonaActiva === 'no-quir' ? 0.95 : 0.7}
                stroke={zonaActiva === 'no-quir' ? '#01578b' : '#88A1AF'} strokeWidth="2"
                style={{ cursor: 'pointer' }}
                onClick={() => toggleZona('no-quir')}
              />
              <text x="211" y="139" textAnchor="middle" fontSize="8"
                fill={zonaActiva === 'no-quir' ? '#fff' : '#5F6368'}
                fontFamily="Montserrat,sans-serif" fontWeight="700" style={{ pointerEvents: 'none' }}>
                Sin
              </text>
              <text x="211" y="150" textAnchor="middle" fontSize="8"
                fill={zonaActiva === 'no-quir' ? '#fff' : '#5F6368'}
                fontFamily="Montserrat,sans-serif" fontWeight="700" style={{ pointerEvents: 'none' }}>
                bisturí
              </text>
              {/* Línea de conector */}
              <line x1="162" y1="146" x2="185" y2="146" stroke="#88A1AF" strokeWidth="1.5" strokeDasharray="4 2" />
            </svg>
          </div>

          {/* Panel de resultados */}
          <div className="flex-1 min-w-0 max-w-xl w-full">
            {!zonaActiva && (
              <div className="flex flex-col gap-3">
                <p className="text-tinta-suave font-medium mb-1">Elige una zona o una categoría:</p>
                {(Object.keys(PROCEDIMIENTOS) as Zona[]).map(z => (
                  <button
                    key={z}
                    onClick={() => toggleZona(z)}
                    className="text-left px-5 py-4 rounded-xl bg-white border border-borde hover:border-azul hover:bg-cielo transition-colors font-medium text-tinta"
                  >
                    {PROCEDIMIENTOS[z].nombre}
                    <span className="text-tinta-suave text-sm ml-2">({PROCEDIMIENTOS[z].lista.length})</span>
                  </button>
                ))}
              </div>
            )}

            {zonaActiva && seleccionado && (
              <div>
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h3 className="text-xl font-bold text-tinta">{seleccionado.nombre}</h3>
                  <button
                    onClick={() => { setZonaActiva(null); setProcActivo(null); }}
                    className="text-sm text-azul hover:text-azul-oscuro font-medium"
                  >
                    ← Ver todas
                  </button>
                </div>
                <p className="text-sm text-tinta-suave mb-4">
                  Toca un procedimiento para consultar al Dr. Robles por WhatsApp:
                </p>
                <div className="flex flex-col gap-2">
                  {seleccionado.lista.map(proc => (
                    <div key={proc}>
                      <button
                        onClick={() => setProcActivo(procActivo === proc ? null : proc)}
                        className={`w-full text-left px-5 py-3 rounded-xl border transition-colors font-medium text-sm ${
                          procActivo === proc
                            ? 'bg-azul text-white border-azul'
                            : 'bg-white text-tinta border-borde hover:border-azul hover:bg-cielo'
                        }`}
                      >
                        {proc}
                      </button>
                      {procActivo === proc && (
                        <div className="mx-2 p-4 bg-white rounded-b-xl border border-t-0 border-azul/30">
                          <p className="text-sm text-tinta-suave mb-3">
                            ¿Te interesa <strong>{proc}</strong>? Escríbele directamente al Dr. Robles:
                          </p>
                          <a
                            href={waLink(`Hola Dr. Robles, me gustaría información sobre ${proc}. ¿Podría agendar una consulta?`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-azul text-sm"
                          >
                            <IcoWA />
                            Preguntar por {proc}
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Galería de categorías */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categorias.map(cat => (
            <button
              key={cat.id}
              onClick={() => { toggleZona(cat.id); window.scrollTo({ top: document.getElementById('procedimientos')?.offsetTop ?? 0, behavior: 'smooth' }); }}
              className="relative overflow-hidden rounded-xl aspect-[3/4] group focus:outline-none focus-visible:ring-2 focus-visible:ring-azul"
            >
              <img
                src={img(cat.archivo)}
                alt={cat.label}
                width={583}
                height={700}
                loading="lazy"
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tinta/70 to-transparent" />
              <span className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold text-left">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Hospitales ───────────────────────────────────────────────────────────────
function Hospitales() {
  return (
    <section className="py-14 bg-fondo border-y border-borde">
      <div className="contenedor">
        <p className="text-center text-xs font-semibold text-tinta-suave mb-8 tracking-widest uppercase">
          En colaboración con
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {HOSPITALES.map(h => (
            <img
              key={h.archivo}
              src={img(h.archivo)}
              alt={h.alt}
              width={h.w}
              height={h.h}
              loading="lazy"
              className="h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Testimonios ──────────────────────────────────────────────────────────────
function Testimonios() {
  return (
    <section id="testimonios" className="py-20 bg-cielo">
      <div className="contenedor">
        <h2 className="text-2xl sm:text-3xl font-bold text-tinta mb-10 text-center">
          Lo que dicen nuestros pacientes
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIOS.map((t, i) => (
            <figure key={i} className="bg-white rounded-2xl p-6 shadow-sm flex flex-col">
              <blockquote className="text-tinta-suave text-sm leading-relaxed mb-4 flex-1">
                "{t.texto}"
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-azul text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {t.inicial}
                </span>
                <div>
                  <p className="font-semibold text-tinta text-sm">{t.nombre}</p>
                  <p className="text-xs text-tinta-suave">{t.ciudad}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Turismo médico ───────────────────────────────────────────────────────────
function TurismoMedico() {
  return (
    <section id="turismo" className="py-20 bg-fondo">
      <div className="contenedor grid md:grid-cols-2 gap-12 items-center">
        <div className="min-w-0">
          <h2 className="text-2xl sm:text-3xl font-bold text-tinta mb-4">
            Viajando a Guadalajara
          </h2>
          <p className="text-tinta-suave mb-4 leading-relaxed">
            Guadalajara es uno de los destinos de turismo médico más reconocidos de México, con cirujanos de talla internacional y hospitales de primer nivel. Si vienes de otra ciudad o del extranjero, el Dr. Robles y su equipo te acompañan en cada paso del proceso, desde la primera consulta hasta tu recuperación.
          </p>
          <p className="text-tinta-suave mb-6">
            <strong>Av. Providencia #2915</strong>, Col. Providencia, Guadalajara, Jalisco, México.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={MAPS}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-contorno text-sm"
            >
              Ver en Google Maps
            </a>
            <a
              href={waLink('Hola Dr. Robles, vengo de fuera de Guadalajara y me interesa información sobre cirugía.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-azul text-sm"
            >
              <IcoWA />
              Consultar por WhatsApp
            </a>
          </div>
        </div>
        <div>
          <img
            src={img('turismo.webp')}
            alt="Consultorios y atención del Dr. Daniel Robles Pereyra en Guadalajara"
            width={570}
            height={703}
            loading="lazy"
            className="rounded-2xl w-full object-cover max-h-[480px]"
          />
        </div>
      </div>
    </section>
  );
}

// ── CTA final ────────────────────────────────────────────────────────────────
function CtaFinal() {
  return (
    <section className="relative py-20 overflow-hidden bg-azul-oscuro">
      <img
        src={img('cta-fondo.webp')}
        alt=""
        aria-hidden="true"
        width={1440}
        height={360}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="contenedor relative z-10 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Es hora de dar el siguiente paso
        </h2>
        <p className="text-white/70 mb-8 max-w-lg mx-auto">
          Agenda tu consulta con el Dr. Daniel Robles Pereyra. La primera conversación es sin compromiso.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={waLink('Hola Dr. Robles, me gustaría agendar una consulta.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-azul"
          >
            <IcoWA />
            Agendar por WhatsApp
          </a>
          <a
            href={`tel:${TEL}`}
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Llamar: (33) 3640 0933
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Pie ──────────────────────────────────────────────────────────────────────
function Pie() {
  return (
    <footer className="bg-tinta text-white/70 py-12">
      <div className="contenedor">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={img('logo-dark.webp')} alt="Dr. Daniel Robles Pereyra" width={200} height={29} loading="lazy" className="h-7 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm">Cirugía Plástica, Estética y Reconstructiva</p>
            <p className="text-xs mt-2">DGP UAG 2276610 · Cédula Especialista UDG 3872854</p>
          </div>
          <div>
            <p className="font-semibold text-white text-sm mb-3">Contacto</p>
            <address className="not-italic text-sm space-y-2">
              <p>
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Av. Providencia #2915, Col. Providencia<br />Guadalajara, Jalisco, México
                </a>
              </p>
              <p><a href={`tel:${TEL}`} className="hover:text-white transition-colors">(33) 3640 0933</a></p>
              <p><a href={`tel:${TEL2}`} className="hover:text-white transition-colors">(33) 3640 0998</a></p>
            </address>
          </div>
          <div>
            <p className="font-semibold text-white text-sm mb-3">Redes sociales</p>
            <div className="flex gap-4">
              <a href={FB} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-sm">Facebook</a>
              <a href={IG} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-sm">Instagram</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs">
          <p>© 2026 Dr. Daniel Robles Pereyra. Todos los derechos reservados.</p>
          <a href="https://drdanielrobles.com/aviso-de-privacidad" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Aviso de Privacidad</a>
        </div>
      </div>
    </footer>
  );
}

// ── Barra móvil fija ─────────────────────────────────────────────────────────
function BarraMovil() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-fondo border-t border-borde">
      <div className="grid grid-cols-3 divide-x divide-borde">
        <a
          href={waLink('Hola Dr. Robles, me gustaría agendar una consulta.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-3 text-azul"
        >
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span className="text-[10px] font-medium">WhatsApp</span>
        </a>
        <a href={`tel:${TEL}`} className="flex flex-col items-center gap-1 py-3 text-tinta-suave hover:text-azul transition-colors">
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          <span className="text-[10px] font-medium">Llamar</span>
        </a>
        <a href={MAPS} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 py-3 text-tinta-suave hover:text-azul transition-colors">
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          <span className="text-[10px] font-medium">Maps</span>
        </a>
      </div>
    </div>
  );
}

// ── JSON-LD ──────────────────────────────────────────────────────────────────
function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["Physician", "MedicalBusiness"],
    "name": "Dr. Daniel Robles Pereyra",
    "description": "Cirujano Plástico, Estético y Reconstructivo certificado CMCPER Núm. 1185 en Guadalajara, Jalisco. Miembro AMCPER, ASPS, ISAPS.",
    "url": "https://drdanielrobles.com/",
    "telephone": ["+52-33-3640-0933", "+52-33-3640-0998"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Providencia #2915",
      "addressLocality": "Guadalajara",
      "addressRegion": "Jalisco",
      "addressCountry": "MX"
    },
    "hasMap": MAPS,
    "sameAs": [FB, IG],
    "medicalSpecialty": "PlasticSurgery"
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// ── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <JsonLd />
      <Nav />
      <main>
        <Hero />
        <Doctor />
        <Procedimientos />
        <Hospitales />
        <Testimonios />
        <TurismoMedico />
        <CtaFinal />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
