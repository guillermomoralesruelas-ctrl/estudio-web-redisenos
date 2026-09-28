import { useState } from 'react';
import {
  negocio, wa, foto,
  especialistas, testimonios, servicios, tratamientosCosto,
} from './data/content';

// ── JSON-LD ──────────────────────────────────────────────────────────────────
const jsonLD = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: negocio.nombre,
  description:
    'Clínica dental en Ciudad Juárez especializada en cosmética, restauración y prevención dental. A 10 minutos del cruce fronterizo El Paso–Juárez.',
  url: 'https://internationalx.dental/',
  telephone: negocio.telMXJuarez,
  email: negocio.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Campos Eliseos #9388 L-6',
    addressLocality: 'Ciudad Juárez',
    addressRegion: 'Chihuahua',
    addressCountry: 'MX',
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '14:00' },
  ],
  sameAs: [negocio.facebook, negocio.instagram, negocio.tiktok],
};

// ── WhatsApp prellenado ──────────────────────────────────────────────────────
const WA_CITA = wa('Hola, me gustaría agendar una cita en International X Dental.');

// ── Íconos SVG inline ────────────────────────────────────────────────────────
function WaIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.122 1.532 5.856L.053 23.947l6.294-1.649A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.929 0-3.73-.516-5.286-1.418l-.377-.218-3.742.98.999-3.643-.245-.388A9.95 9.95 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  );
}

function PhoneIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
    </svg>
  );
}

function MapPinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );
}

// ── Barra superior ───────────────────────────────────────────────────────────
function BarraSuperior() {
  return (
    <div className="hidden md:block bg-azul text-white text-xs py-2">
      <div className="contenedor flex justify-between items-center gap-4 flex-wrap">
        <div className="flex gap-5">
          <a href={`tel:${negocio.telUSA}`} className="hover:underline flex items-center gap-1">
            <PhoneIcon size={12} />
            USA: +1 (806) 416-1012
          </a>
          <a href={`tel:${negocio.telMXJuarez}`} className="hover:underline flex items-center gap-1">
            <PhoneIcon size={12} />
            MX Juárez: (656) 634-0040
          </a>
          <a href={`tel:${negocio.telMXCancun}`} className="hover:underline flex items-center gap-1">
            <PhoneIcon size={12} />
            Cancún: (998) 343-0987
          </a>
        </div>
        <div className="text-white/80">
          Lun–Vie 9am–6pm &nbsp;·&nbsp; Sáb 9am–2pm
        </div>
      </div>
    </div>
  );
}

// ── Navegación ───────────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" aria-label="International X Dental — inicio">
          <img
            src={foto('logo-azul.webp')}
            alt="International X Dental"
            width={200}
            height={71}
            className="h-9 w-auto"
          />
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-texto">
          <a href="#servicios" className="hover:text-azul transition-colors">Servicios</a>
          <a href="#especialistas" className="hover:text-azul transition-colors">Especialistas</a>
          <a href="#ahorro" className="hover:text-azul transition-colors">Precios</a>
          <a href="#llegar" className="hover:text-azul transition-colors">Cómo llegar</a>
        </div>
        <a href={WA_CITA} target="_blank" rel="noopener noreferrer" className="btn-principal text-sm">
          <WaIcon size={16} />
          Agendar cita
        </a>
      </div>
    </nav>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="inicio" className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#0d1a2e]">
      <img
        src={foto('interior.webp')}
        alt="Instalaciones modernas de International X Dental en Ciudad Juárez"
        width={1350}
        height={857}
        className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
      />
      <div className="relative contenedor py-20">
        <div className="max-w-2xl text-white">
          <p className="text-azul-claro font-medium text-sm tracking-wide mb-3">
            Ciudad Juárez, Chihuahua — a 10 min de El Paso
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight mb-5">
            Odontología de calidad en la frontera México–Estados Unidos
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-xl">
            Odontología cosmética, restaurativa y preventiva para pacientes de México y Estados Unidos.
            Más de 1,213 reseñas de Google con 5 estrellas.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={WA_CITA} target="_blank" rel="noopener noreferrer" className="btn-principal">
              <WaIcon size={18} />
              Agendar por WhatsApp
            </a>
            <a href="#ahorro" className="btn-azul">
              Ver precios comparados
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Comparador de ahorro ─────────────────────────────────────────────────────
function Comparador() {
  const [seleccionado, setSeleccionado] = useState(tratamientosCosto[0]);

  const ahorro = seleccionado.precioUSA - seleccionado.precioMX;
  const pct = Math.round((ahorro / seleccionado.precioUSA) * 100);

  const waMsg = `Hola, me interesa saber más sobre ${seleccionado.nombre} en International X Dental.`;

  return (
    <section id="ahorro" className="py-20 bg-white">
      <div className="contenedor">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif text-texto mb-3">
            ¿Cuánto ahorras cruzando la frontera?
          </h2>
          <p className="text-gris max-w-xl mx-auto">
            A 10 minutos de El Paso, puedes recibir el mismo tratamiento dental
            con especialistas certificados a una fracción del costo en EE.&nbsp;UU.
          </p>
        </div>

        {/* Selector de tratamiento */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tratamientosCosto.map((t) => (
            <button
              key={t.id}
              onClick={() => setSeleccionado(t)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azul ${
                seleccionado.id === t.id
                  ? 'bg-azul text-white'
                  : 'bg-fondo text-texto border border-gray-200 hover:border-azul hover:text-azul'
              }`}
              aria-pressed={seleccionado.id === t.id}
            >
              {t.nombre}
            </button>
          ))}
        </div>

        {/* Resultado */}
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-0 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            {/* EE. UU. */}
            <div className="bg-gray-50 p-8 text-center">
              <p className="text-xs uppercase tracking-widest text-gris mb-2">EE.&nbsp;UU. (referencia)</p>
              <p className="text-3xl font-serif font-semibold text-texto mb-1">
                ${seleccionado.precioUSA.toLocaleString('en-US')}
              </p>
              <p className="text-sm text-gris">USD promedio</p>
            </div>

            {/* Ahorro (centro) */}
            <div className="bg-azul p-8 text-center flex flex-col items-center justify-center">
              <p className="text-white/80 text-xs uppercase tracking-widest mb-2">Tu ahorro</p>
              <p className="text-4xl font-serif font-semibold text-white mb-1">
                {pct}%
              </p>
              <p className="text-white/90 text-lg font-medium">
                ${ahorro.toLocaleString('en-US')} USD
              </p>
            </div>

            {/* Ciudad Juárez */}
            <div className="bg-fondo p-8 text-center">
              <p className="text-xs uppercase tracking-widest text-gris mb-2">Ciudad Juárez</p>
              <p className="text-3xl font-serif font-semibold text-azul mb-1">
                ${seleccionado.precioMX.toLocaleString('en-US')}
              </p>
              <p className="text-sm text-gris">USD aprox.</p>
            </div>
          </div>

          {/* Disclaimer + CTA */}
          <p className="text-center text-xs text-gris mt-4 mb-6">
            Los precios son aproximados. El precio final depende de la evaluación del especialista.
            Precios EE.&nbsp;UU. basados en promedios nacionales publicados (CostHelper Dental 2024).
          </p>
          <div className="text-center">
            <a
              href={`https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(waMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-principal"
            >
              <WaIcon size={18} />
              Preguntar por {seleccionado.nombre}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Servicios ────────────────────────────────────────────────────────────────
function Servicios() {
  return (
    <section id="servicios" className="py-20 bg-fondo">
      <div className="contenedor">
        <h2 className="text-3xl sm:text-4xl font-serif text-texto text-center mb-3">
          Nuestros servicios
        </h2>
        <p className="text-gris text-center mb-12 max-w-xl mx-auto">
          Odontología integral: estética, funcional y preventiva para toda la familia.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {servicios.map((s) => (
            <div key={s.nombre} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
              <div className="relative h-44 overflow-hidden">
                <img
                  src={foto(s.foto)}
                  alt={s.nombre}
                  width={500}
                  height={169}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-serif text-texto mb-2">{s.nombre}</h3>
                <p className="text-gris text-sm mb-4 flex-1">{s.descripcion}</p>
                <ul className="space-y-1">
                  {s.items.map((item) => (
                    <li key={item} className="text-xs text-gris flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-azul-claro flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(`Hola, me gustaría saber más sobre ${s.nombre} en International X Dental.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center gap-2 text-sm font-medium text-azul hover:text-azul-claro transition-colors"
                >
                  <WaIcon size={15} />
                  Preguntar por WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Especialistas ────────────────────────────────────────────────────────────
function Especialistas() {
  return (
    <section id="especialistas" className="py-20 bg-white">
      <div className="contenedor">
        <h2 className="text-3xl sm:text-4xl font-serif text-texto text-center mb-3">
          Nuestro equipo de especialistas
        </h2>
        <p className="text-gris text-center mb-12 max-w-xl mx-auto">
          Dentistas altamente calificados con experiencia en diseño oral, implantología, ortodoncia,
          periodoncia y odontopediatría.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5">
          {especialistas.map((e) => (
            <div
              key={e.nombre}
              className="flex flex-col items-center text-center gap-3 p-4 rounded-xl hover:bg-fondo transition-colors"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-azul/20 flex-shrink-0">
                <img
                  src={foto(e.foto)}
                  alt={e.nombre}
                  width={300}
                  height={200}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="min-w-0">
                <p className="font-medium text-texto text-sm leading-snug">{e.nombre}</p>
                <p className="text-xs text-gris mt-0.5">{e.especialidad}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Reseñas ──────────────────────────────────────────────────────────────────
function Resenas() {
  return (
    <section className="py-20 bg-fondo">
      <div className="contenedor">
        <div className="text-center mb-10">
          <div className="flex justify-center gap-1 mb-3" aria-label="5 de 5 estrellas">
            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
          </div>
          <h2 className="text-3xl font-serif text-texto mb-1">EXCELENTE</h2>
          <p className="text-gris text-sm">A base de <strong>1,213 reseñas</strong> en Google</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonios.map((t) => (
            <blockquote key={t.nombre} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex gap-0.5 mb-3" aria-label="5 estrellas">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <p className="text-sm text-texto leading-relaxed mb-4">&ldquo;{t.texto}&rdquo;</p>
              <footer className="text-xs font-medium text-azul">{t.nombre}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Cómo llegar ──────────────────────────────────────────────────────────────
function ComoLlegar() {
  return (
    <section id="llegar" className="py-20 bg-white">
      <div className="contenedor">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Mapa embebido */}
          <div className="rounded-2xl overflow-hidden shadow-md">
            <iframe
              src={negocio.mapaEmbed}
              width="100%"
              height="320"
              style={{ border: 0, borderRadius: '0.5rem' }}
              allowFullScreen
              loading="lazy"
              title={`Ubicación de ${negocio.nombre}`}
              className="w-full block"
            />
          </div>
          {/* Foto → Maps (ahora secundario) */}
          <a
            href={negocio.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl overflow-hidden shadow-md hover:opacity-90 transition-opacity"
            aria-label="Ver International X Dental en Google Maps"
          >
            <img
              src={foto('fachada.webp')}
              alt="Fachada de International X Dental en Ciudad Juárez"
              width={768}
              height={512}
              loading="lazy"
              className="w-full h-72 object-cover"
            />
            <div className="bg-azul text-white px-5 py-3 flex items-center gap-2 text-sm font-medium">
              <MapPinIcon size={16} />
              Ver en Google Maps
            </div>
          </a>

          {/* Info */}
          <div>
            <h2 className="text-3xl font-serif text-texto mb-6">Visítanos</h2>
            <div className="space-y-6 text-sm">
              <div>
                <p className="font-medium text-texto mb-1">Ciudad Juárez, Chihuahua</p>
                <p className="text-gris">{negocio.direccionJuarez}</p>
                <p className="text-gris mt-1">
                  A 10 minutos del cruce fronterizo Paso del Norte (El Paso, Texas)
                </p>
              </div>
              <div>
                <p className="font-medium text-texto mb-1">Cancún, Quintana Roo</p>
                <p className="text-gris">{negocio.direccionCancun}</p>
              </div>
              <div>
                <p className="font-medium text-texto mb-1">Horario de atención</p>
                <p className="text-gris">{negocio.horarioSemana}</p>
                <p className="text-gris">{negocio.horarioSabado}</p>
                <p className="text-gris">{negocio.horarioDomingo}</p>
              </div>
              <div>
                <p className="font-medium text-texto mb-1">Teléfonos</p>
                <p>
                  <a href={`tel:${negocio.telUSA}`} className="text-azul hover:underline">
                    USA: +1 (806) 416-1012
                  </a>
                </p>
                <p>
                  <a href={`tel:${negocio.telMXJuarez}`} className="text-azul hover:underline">
                    México Juárez: (656) 634-0040
                  </a>
                </p>
                <p>
                  <a href={`tel:${negocio.telMXCancun}`} className="text-azul hover:underline">
                    Cancún: (998) 343-0987
                  </a>
                </p>
              </div>
              <a
                href={WA_CITA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-principal inline-flex"
              >
                <WaIcon size={18} />
                Agendar cita por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Por qué elegirnos (strip) ────────────────────────────────────────────────
function PorQueElegirnos() {
  const razones = [
    { titulo: 'Ubicación ideal', desc: 'A 10 minutos del cruce fronterizo El Paso–Juárez, en zona segura.' },
    { titulo: 'Precios accesibles', desc: 'Ahorra hasta el 70% en tratamientos dentales sin renunciar a la calidad.' },
    { titulo: 'Especialistas certificados', desc: 'Equipo multidisciplinario en estética, implantes, ortodoncia y más.' },
    { titulo: 'Tecnología de punta', desc: 'Equipamiento moderno para diagnóstico y tratamientos de precisión.' },
    { titulo: 'Traslado incluido', desc: 'Nos encargamos de tu traslado hacia la clínica. [PENDIENTE confirmar detalles con el cliente]' },
  ];

  return (
    <section className="py-16 bg-azul text-white">
      <div className="contenedor">
        <h2 className="text-2xl sm:text-3xl font-serif text-center mb-10">
          ¿Por qué elegirnos?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {razones.map((r) => (
            <div key={r.titulo} className="text-center">
              <p className="font-semibold mb-2">{r.titulo}</p>
              <p className="text-white/80 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Pie ──────────────────────────────────────────────────────────────────────
function Pie() {
  return (
    <footer className="bg-[#0d1a2e] text-white/80 text-sm">
      <div className="contenedor py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo + redes */}
        <div>
          <img
            src={foto('logo-blanco.webp')}
            alt="International X Dental"
            width={200}
            height={71}
            loading="lazy"
            className="h-8 w-auto mb-4"
          />
          <p className="mb-4">Clínica dental en la frontera México–EE.&nbsp;UU., Ciudad Juárez, Chihuahua.</p>
          <div className="flex gap-3">
            <a href={negocio.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href={negocio.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>
        </div>

        {/* Cosmética */}
        <div>
          <p className="font-semibold text-white mb-3">Cosmética Dental</p>
          <ul className="space-y-1">
            {['Diseño de Sonrisa','Carillas Dentales','Blanqueamiento','Corona de Zirconio','Puente de Zirconio'].map(s => (
              <li key={s}><a href={WA_CITA} className="hover:text-white transition-colors">{s}</a></li>
            ))}
          </ul>
        </div>

        {/* Restaurativa */}
        <div>
          <p className="font-semibold text-white mb-3">Restauración Dental</p>
          <ul className="space-y-1">
            {['Implantes Dentales','All on 4 (6)','Snap In Denture','Ortodoncia','Limpiezas Dentales'].map(s => (
              <li key={s}><a href={WA_CITA} className="hover:text-white transition-colors">{s}</a></li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <p className="font-semibold text-white mb-3">Contacto</p>
          <ul className="space-y-2">
            <li>
              <a href={`tel:${negocio.telUSA}`} className="hover:text-white transition-colors flex items-start gap-1.5">
                <PhoneIcon size={14} />
                USA: +1 (806) 416-1012
              </a>
            </li>
            <li>
              <a href={`tel:${negocio.telMXJuarez}`} className="hover:text-white transition-colors flex items-start gap-1.5">
                <PhoneIcon size={14} />
                MX Juárez: (656) 634-0040
              </a>
            </li>
            <li>
              <a href={`tel:${negocio.telMXCancun}`} className="hover:text-white transition-colors flex items-start gap-1.5">
                <PhoneIcon size={14} />
                Cancún: (998) 343-0987
              </a>
            </li>
            <li>
              <a href={`mailto:${negocio.email}`} className="hover:text-white transition-colors">
                {negocio.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="contenedor py-4 flex flex-wrap justify-between gap-2 text-xs text-white/50">
          <p>© 2026 International X Dental Clinic. Todos los derechos reservados.</p>
          <p>Ciudad Juárez, Chih. México</p>
        </div>
      </div>
    </footer>
  );
}

// ── Barra fija móvil ─────────────────────────────────────────────────────────
function BarraMovil() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-lg"
      role="navigation"
      aria-label="Acciones rápidas"
    >
      <div className="grid grid-cols-3 divide-x divide-gray-200">
        <a
          href={WA_CITA}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 gap-1 text-[#25D366] hover:bg-green-50 transition-colors"
          aria-label="Escribir por WhatsApp"
        >
          <WaIcon size={22} />
          <span className="text-[10px] font-medium text-texto">WhatsApp</span>
        </a>
        <a
          href={`tel:${negocio.telMXJuarez}`}
          className="flex flex-col items-center justify-center py-3 gap-1 text-azul hover:bg-blue-50 transition-colors"
          aria-label="Llamar a Ciudad Juárez"
        >
          <PhoneIcon size={22} />
          <span className="text-[10px] font-medium text-texto">Llamar</span>
        </a>
        <a
          href={negocio.maps}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 gap-1 text-red-500 hover:bg-red-50 transition-colors"
          aria-label="Cómo llegar"
        >
          <MapPinIcon size={22} />
          <span className="text-[10px] font-medium text-texto">Maps</span>
        </a>
      </div>
    </div>
  );
}

// ── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
      />

      <BarraSuperior />
      <Nav />

      <main>
        <Hero />
        <Comparador />
        <Servicios />
        <Especialistas />
        <PorQueElegirnos />
        <Resenas />
        <ComoLlegar />
      </main>

      <Pie />
      <BarraMovil />

      {/* Spacer para que la barra fija no tape el contenido en móvil */}
      <div className="h-16 md:hidden" aria-hidden="true" />
    </>
  );
}
