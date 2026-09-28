import { useState } from 'react';
import { negocio, ramos, ventajas, faq, foto, wa, type Ramo } from './data/content';

// ─── Iconos SVG ───────────────────────────────────────────────────────────────

function IcoWA({ cls = 'w-5 h-5' }: { cls?: string }) {
  return (
    <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function IcoTel({ cls = 'w-5 h-5' }: { cls?: string }) {
  return (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function IcoMapa({ cls = 'w-5 h-5' }: { cls?: string }) {
  return (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function IcoChevron({ abierto }: { abierto: boolean }) {
  return (
    <svg
      className={`w-5 h-5 shrink-0 transition-transform duration-200 ${abierto ? 'rotate-180' : ''}`}
      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

// ─── Encabezado ───────────────────────────────────────────────────────────────

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 bg-verde text-white shadow-md">
      <div className="contenedor flex items-center justify-between gap-4 py-3">
        <a href="#inicio" className="font-serif text-xl font-bold tracking-wide" aria-label="Florestudio — inicio">
          Florestudio
        </a>
        <a
          href={wa('Hola, me gustaría pedir un ramo floral.')}
          className="btn-wa text-sm hidden sm:inline-flex"
          target="_blank" rel="noopener noreferrer"
        >
          <IcoWA />
          Pedir por WhatsApp
        </a>
      </div>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="inicio" className="bg-suave py-16 sm:py-24">
      <div className="contenedor">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-tinta leading-tight mb-6">
            Ramos florales en Guadalajara con entrega el mismo día
          </h1>
          <p className="text-lg text-tinta/80 mb-8">
            En Florestudio creamos ramos únicos con flores frescas del día. Los entregamos en Guadalajara y Zona Metropolitana en 4 a 5 horas, con atención personalizada por WhatsApp.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={wa('Hola, me gustaría pedir un ramo floral. ¿Pueden ayudarme?')}
              className="btn-wa"
              target="_blank" rel="noopener noreferrer"
            >
              <IcoWA />
              Cotizar por WhatsApp
            </a>
            <a
              href="#presupuesto"
              className="inline-flex items-center gap-2 rounded-full border-2 border-acento px-5 py-2.5 text-sm font-semibold text-acento"
            >
              Ver precios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Elemento memorable: selector de presupuesto ─────────────────────────────

const PRECIOS = ramos.map((r) => r.precio).sort((a, b) => a - b);
const MIN_PRECIO = PRECIOS[0];
const MAX_PRECIO = PRECIOS[PRECIOS.length - 1];

function SelectorPresupuesto() {
  const [presupuesto, setPresupuesto] = useState(MAX_PRECIO);
  const [ramoElegido, setRamoElegido] = useState<Ramo | null>(null);

  const ramosDisponibles = ramos.filter((r) => r.precio <= presupuesto);

  const handleElegir = (ramo: Ramo) => {
    setRamoElegido(ramo === ramoElegido ? null : ramo);
  };

  const msgWA = ramoElegido
    ? `Hola, me interesa el "${ramoElegido.nombre}" ($${ramoElegido.precio.toLocaleString()}). ¿Tienen disponibilidad para entrega hoy en Guadalajara?`
    : `Hola, tengo un presupuesto de $${presupuesto.toLocaleString()} y me gustaría un ramo floral. ¿Qué opciones tienen?`;

  return (
    <section id="presupuesto" className="py-16 sm:py-20">
      <div className="contenedor">
        <h2 className="text-3xl sm:text-4xl font-bold text-tinta mb-3">
          ¿Cuánto quieres gastar?
        </h2>
        <p className="text-tinta/70 mb-10 max-w-xl">
          Mueve el control para ver qué ramos caben en tu presupuesto. Elige el que más te gusta y escríbenos por WhatsApp.
        </p>

        {/* Slider */}
        <div className="mb-10 max-w-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-tinta/60">${MIN_PRECIO.toLocaleString()}</span>
            <span className="text-2xl font-bold text-acento">${presupuesto.toLocaleString()}</span>
            <span className="text-sm text-tinta/60">${MAX_PRECIO.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min={MIN_PRECIO}
            max={MAX_PRECIO}
            step={50}
            value={presupuesto}
            onChange={(e) => {
              setPresupuesto(Number(e.target.value));
              setRamoElegido(null);
            }}
            className="w-full h-2 rounded-full appearance-none cursor-pointer"
            style={{
              accentColor: 'var(--color-acento)',
              background: `linear-gradient(to right, var(--color-acento) 0%, var(--color-acento) ${((presupuesto - MIN_PRECIO) / (MAX_PRECIO - MIN_PRECIO)) * 100}%, #e5e7eb ${((presupuesto - MIN_PRECIO) / (MAX_PRECIO - MIN_PRECIO)) * 100}%, #e5e7eb 100%)`,
            }}
            aria-label="Presupuesto máximo"
            aria-valuemin={MIN_PRECIO}
            aria-valuemax={MAX_PRECIO}
            aria-valuenow={presupuesto}
            aria-valuetext={`$${presupuesto.toLocaleString()} pesos`}
          />
          <p className="mt-2 text-sm text-tinta/60">
            {ramosDisponibles.length === 0
              ? 'Sube el presupuesto para ver opciones'
              : `${ramosDisponibles.length} ramo${ramosDisponibles.length !== 1 ? 's' : ''} disponible${ramosDisponibles.length !== 1 ? 's' : ''}`}
          </p>
        </div>

        {/* Grilla de ramos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
          {ramos.map((ramo) => {
            const disponible = ramo.precio <= presupuesto;
            const elegido = ramoElegido?.slug === ramo.slug;
            return (
              <button
                key={ramo.slug}
                onClick={() => disponible && handleElegir(ramo)}
                disabled={!disponible}
                aria-pressed={elegido}
                className={[
                  'text-left rounded-xl overflow-hidden border-2 transition-all duration-200',
                  disponible
                    ? elegido
                      ? 'border-acento shadow-lg scale-[1.02]'
                      : 'border-transparent hover:border-acento/40 cursor-pointer'
                    : 'border-transparent opacity-30 cursor-default',
                ].join(' ')}
              >
                <div className="relative aspect-square bg-suave">
                  <img
                    src={foto(ramo.imagen)}
                    alt={ramo.alt}
                    width={300}
                    height={300}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  {elegido && (
                    <div className="absolute inset-0 bg-acento/10 flex items-center justify-center">
                      <span className="bg-acento text-white text-xs font-bold px-2 py-1 rounded-full">Elegido</span>
                    </div>
                  )}
                </div>
                <div className="p-3 bg-white">
                  <p className="text-xs text-tinta/80 leading-snug line-clamp-2 mb-1">{ramo.nombre}</p>
                  <p className="text-sm font-bold text-acento">${ramo.precio.toLocaleString()}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={wa(msgWA)}
            className="btn-wa"
            target="_blank" rel="noopener noreferrer"
          >
            <IcoWA />
            {ramoElegido ? 'Pedir este ramo' : 'Pedir por WhatsApp'}
          </a>
          {ramoElegido && (
            <p className="text-sm text-tinta/70">
              <span className="font-semibold">{ramoElegido.nombre}</span> — ${ramoElegido.precio.toLocaleString()}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Ventajas ─────────────────────────────────────────────────────────────────

function Ventajas() {
  return (
    <section className="bg-suave py-16 sm:py-20">
      <div className="contenedor">
        <h2 className="text-3xl font-bold text-tinta mb-12">
          Flores frescas y diseños que transmiten emoción
        </h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {ventajas.map((v) => (
            <div key={v.titulo} className="flex gap-4">
              <div className="mt-1 w-2 h-2 rounded-full bg-acento shrink-0" aria-hidden="true" />
              <div>
                <h3 className="font-semibold text-tinta mb-1">{v.titulo}</h3>
                <p className="text-sm text-tinta/70 leading-relaxed">{v.texto}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-10 border-t border-tinta/10">
          <p className="text-sm text-tinta/60 mb-4">
            Trabajamos con flores frescas del día y armamos cada ramo de forma artesanal, combinando colores, volúmenes y estilos según la ocasión.
          </p>
          <a
            href={wa('Hola, me gustaría pedir un ramo artesanal personalizado. ¿Pueden ayudarme?')}
            className="btn-wa"
            target="_blank" rel="noopener noreferrer"
          >
            <IcoWA />
            Pedir ramo personalizado
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Cómo pedir ───────────────────────────────────────────────────────────────

function ComoPedir() {
  const pasos = [
    {
      paso: 'Escríbenos',
      texto: 'Manda un mensaje por WhatsApp con la ocasión, el presupuesto y la dirección de entrega en Guadalajara.',
    },
    {
      paso: 'Elegimos juntos',
      texto: 'Te mostramos opciones según tu presupuesto y te asesoramos para crear el detalle perfecto.',
    },
    {
      paso: 'Lo entregamos hoy',
      texto: 'Tu ramo llega en 4 a 5 horas, con presentación premium y empaque seguro.',
    },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="contenedor">
        <h2 className="text-3xl font-bold text-tinta mb-12">
          Tres pasos para regalar flores hoy
        </h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {pasos.map((p, i) => (
            <div key={p.paso} className="flex gap-4">
              <div className="shrink-0 w-9 h-9 rounded-full bg-verde text-white flex items-center justify-center text-sm font-bold" aria-hidden="true">
                {i + 1}
              </div>
              <div>
                <h3 className="font-semibold text-tinta mb-2">{p.paso}</h3>
                <p className="text-sm text-tinta/70 leading-relaxed">{p.texto}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <a
            href={wa('Hola, quiero pedir un ramo floral con entrega hoy en Guadalajara.')}
            className="btn-wa"
            target="_blank" rel="noopener noreferrer"
          >
            <IcoWA />
            Empezar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

function FAQ() {
  const [abierto, setAbierto] = useState<number | null>(null);
  return (
    <section className="bg-suave py-16 sm:py-20">
      <div className="contenedor">
        <h2 className="text-3xl font-bold text-tinta mb-10">Preguntas frecuentes</h2>
        <dl className="max-w-2xl divide-y divide-tinta/10">
          {faq.map((item, i) => (
            <div key={i}>
              <dt>
                <button
                  className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-semibold text-tinta"
                  onClick={() => setAbierto(abierto === i ? null : i)}
                  aria-expanded={abierto === i}
                >
                  {item.pregunta}
                  <IcoChevron abierto={abierto === i} />
                </button>
              </dt>
              {abierto === i && (
                <dd className="pb-4 text-sm text-tinta/70 leading-relaxed">
                  {item.respuesta}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

// ─── Pie de página ────────────────────────────────────────────────────────────

function Pie() {
  return (
    <footer className="bg-verde text-white py-10">
      <div className="contenedor">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">
          {/* Marca */}
          <div>
            <p className="font-serif text-xl font-bold mb-2">Florestudio</p>
            <p className="text-sm text-white/70 max-w-xs">
              Ramos florales artesanales con entrega a domicilio en Guadalajara y Zona Metropolitana. Atención 24/7 por WhatsApp.
            </p>
          </div>
          {/* Contacto */}
          <div>
            <p className="text-sm font-semibold mb-3">Contacto</p>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a
                  href={wa('Hola, me gustaría pedir un ramo floral.')}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                  target="_blank" rel="noopener noreferrer"
                >
                  <IcoWA cls="w-4 h-4" />
                  WhatsApp: 33 1946 8265
                </a>
              </li>
              <li>
                <a
                  href={`tel:${negocio.telefono}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <IcoTel cls="w-4 h-4" />
                  Llamar: 33 1946 8265
                </a>
              </li>
              <li>
                <a
                  href={negocio.mapa}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                  target="_blank" rel="noopener noreferrer"
                >
                  <IcoMapa cls="w-4 h-4" />
                  Guadalajara, Jalisco
                </a>
              </li>
            </ul>
          </div>
          {/* Zona */}
          <div>
            <p className="text-sm font-semibold mb-3">Zona de entrega</p>
            <p className="text-sm text-white/70">
              Guadalajara y Zona Metropolitana<br />
              Envío: $15 por km desde sucursal
            </p>
          </div>
        </div>
        <p className="mt-8 pt-6 border-t border-white/20 text-xs text-white/50">
          © 2026 Florestudio. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

// ─── Barra móvil fija ─────────────────────────────────────────────────────────

function BarraMovil() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-verde text-white shadow-[0_-2px_12px_rgba(0,0,0,0.15)]"
      aria-label="Acciones rápidas"
    >
      <div className="grid grid-cols-3">
        <a
          href={wa('Hola, me gustaría pedir un ramo floral.')}
          className="flex flex-col items-center gap-1 py-3 text-white hover:bg-white/10 transition-colors"
          target="_blank" rel="noopener noreferrer"
        >
          <IcoWA cls="w-5 h-5" />
          <span className="text-[10px] font-medium">WhatsApp</span>
        </a>
        <a
          href={`tel:${negocio.telefono}`}
          className="flex flex-col items-center gap-1 py-3 text-white hover:bg-white/10 transition-colors"
        >
          <IcoTel cls="w-5 h-5" />
          <span className="text-[10px] font-medium">Llamar</span>
        </a>
        <a
          href={negocio.mapa}
          className="flex flex-col items-center gap-1 py-3 text-white hover:bg-white/10 transition-colors"
          target="_blank" rel="noopener noreferrer"
        >
          <IcoMapa cls="w-5 h-5" />
          <span className="text-[10px] font-medium">Maps</span>
        </a>
      </div>
    </nav>
  );
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

function JSONLD() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Florist',
    name: 'Florestudio',
    description: 'Ramos florales artesanales con entrega a domicilio en Guadalajara y ZMG. Flores frescas del día, atención personalizada 24/7.',
    url: 'https://florestudio.shop/',
    telephone: '+523319468265',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Guadalajara',
      addressRegion: 'Jalisco',
      addressCountry: 'MX',
    },
    areaServed: {
      '@type': 'City',
      name: 'Guadalajara',
    },
    openingHours: 'Mo-Su 00:00-23:59',
    priceRange: '$$',
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <>
      <JSONLD />
      <Encabezado />
      <main>
        <Hero />
        <SelectorPresupuesto />
        <Ventajas />
        <ComoPedir />
        <FAQ />
      </main>
      <Pie />
      <BarraMovil />
      {/* Espaciado para la barra móvil */}
      <div className="h-14 sm:h-0" aria-hidden="true" />
    </>
  );
}
