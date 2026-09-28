import { useState } from 'react';
import {
  negocio,
  wa,
  foto,
  arreglosDestacados,
  ocasiones,
  faqs,
  type Ocasion,
} from './data/content';

/* ─── Nav ──────────────────────────────────────────────────────────────── */
function Nav() {
  const [abierto, setAbierto] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-crema/95 backdrop-blur-sm shadow-sm">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center shrink-0">
          <img
            src={foto('uploads/2025/03/floreria-lizette-logo.webp')}
            alt="Florería Lizette"
            className="h-10 w-auto"
          />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
          <a href="#catalogo" className="hover:text-rosa transition-colors">
            De Ocasión
          </a>
          <a href="#funebre" className="hover:text-rosa transition-colors">
            Arreglos Fúnebres
          </a>
          <a href="#contacto" className="hover:text-rosa transition-colors">
            Contacto
          </a>
        </nav>
        <a
          href={wa('Hola, vi su sitio web y me gustaría hacer un pedido')}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex btn-rosa text-xs"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.552 4.1 1.512 5.823L.057 23.75l6.052-1.427A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.854 0-3.6-.504-5.108-1.384l-.364-.217-3.793.894.946-3.686-.238-.383A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          </svg>
          WhatsApp
        </a>
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setAbierto(!abierto)}
          aria-label="Menú"
          aria-expanded={abierto}
        >
          <span className={`block w-6 h-0.5 bg-tinta transition-transform ${abierto ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-tinta transition-opacity ${abierto ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-tinta transition-transform ${abierto ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>
      {abierto && (
        <div className="md:hidden bg-crema border-t border-rosa-claro px-5 py-4 flex flex-col gap-4 text-sm font-semibold">
          <a href="#catalogo" onClick={() => setAbierto(false)} className="hover:text-rosa">
            De Ocasión
          </a>
          <a href="#funebre" onClick={() => setAbierto(false)} className="hover:text-rosa">
            Arreglos Fúnebres
          </a>
          <a href="#contacto" onClick={() => setAbierto(false)} className="hover:text-rosa">
            Contacto
          </a>
          <a
            href={wa('Hola, vi su sitio web y me gustaría hacer un pedido')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-rosa self-start text-xs"
          >
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}

/* ─── Hero ─────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="inicio" className="bg-crema py-16 md:py-24">
      <div className="contenedor grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <p className="text-rosa font-semibold text-sm tracking-widest uppercase mb-4">
            Monterrey · Entrega en 3 hrs o menos
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-tinta leading-tight mb-6">
            Flores que dicen lo que las palabras no alcanzan
          </h1>
          <p className="text-lg text-gris mb-8 leading-relaxed">
            Ramos y arreglos hechos a mano el mismo día, entregados en Monterrey
            y su área metropolitana en 3 horas o menos.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#catalogo" className="btn-rosa">
              Ver Arreglos de Ocasión
            </a>
            <a href="#funebre" className="btn-contorno">
              Arreglos Fúnebres
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gris">
            <span className="flex items-center gap-1.5">
              <span className="text-rosa">✿</span> Flores frescas del día
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-rosa">✿</span> Entrega 24/7
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-rosa">✿</span> 4.9 ★ en Google
            </span>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-full max-w-sm">
            <div className="absolute -inset-3 rounded-full bg-rosa-claro opacity-40" />
            <img
              src={foto('uploads/2026/02/VP-03.webp')}
              alt="Ramo de rosas rojas y alstroemerias rosadas — Florería Lizette Monterrey"
              className="relative rounded-2xl w-full aspect-square object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Props ─────────────────────────────────────────────────────────────── */
function Props() {
  const items = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.5 4-5 6-5 9a5 5 0 0010 0c0-3-3.5-5-5-9z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c0 2-1.5 3-1.5 3" />
        </svg>
      ),
      titulo: 'Flores frescas del día',
      desc: 'Cortadas la misma mañana',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" d="M12 7v5l3 3" />
        </svg>
      ),
      titulo: 'Entrega en 3 horas',
      desc: 'Monterrey y área metropolitana',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      titulo: 'Disponible 24/7',
      desc: 'Arreglos fúnebres a cualquier hora',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      titulo: '4.9 ★ en Google',
      desc: '+800 clientes satisfechos',
    },
  ];
  return (
    <section className="bg-rosa-claro py-12">
      <div className="contenedor grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.titulo} className="flex flex-col items-center text-center gap-3">
            <div className="text-rosa">{item.icon}</div>
            <div>
              <p className="font-semibold text-tinta text-sm">{item.titulo}</p>
              <p className="text-xs text-gris mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Catálogo: elemento memorable ────────────────────────────────────── */
function Catalogo() {
  const [activa, setActiva] = useState<Ocasion | null>(null);

  const arreglosMostrados = activa ? activa.arreglos : arreglosDestacados;
  const msgWA = activa ? activa.msgWA : 'Hola, vi su catálogo y me gustaría hacer un pedido';

  return (
    <section id="catalogo" className="py-16 md:py-24 bg-white">
      <div className="contenedor">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif text-tinta mb-3">
            El arreglo correcto para cada momento
          </h2>
          <p className="text-gris max-w-xl mx-auto">
            Dos caminos, una misma florería: flores para celebrar la vida y flores para despedirla con respeto.
          </p>
        </div>

        {/* Chips de ocasión */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {ocasiones.map((oc) => (
            <button
              key={oc.id}
              onClick={() => setActiva(activa?.id === oc.id ? null : oc)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition-colors ${
                activa?.id === oc.id
                  ? 'bg-rosa text-white border-rosa'
                  : 'border-rosa/30 text-tinta hover:border-rosa hover:text-rosa bg-white'
              }`}
            >
              <span>{oc.emoji}</span>
              {oc.label}
            </button>
          ))}
        </div>

        {/* Grid de arreglos */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-8">
          {arreglosMostrados.map((a) => (
            <div
              key={a.img}
              className="group rounded-2xl overflow-hidden bg-crema border border-rosa-claro"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={a.img}
                  alt={a.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <p className="font-semibold text-sm text-tinta leading-snug">{a.nombre}</p>
                {a.precio && (
                  <p className="text-rosa font-bold mt-1">{a.precio}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA WhatsApp */}
        <div className="text-center">
          <a
            href={wa(msgWA)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-rosa inline-flex"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.552 4.1 1.512 5.823L.057 23.75l6.052-1.427A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.854 0-3.6-.504-5.108-1.384l-.364-.217-3.793.894.946-3.686-.238-.383A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            {activa ? `Pedir arreglo para ${activa.label}` : 'Pedir por WhatsApp'}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Dos caminos ────────────────────────────────────────────────────── */
function DosCaminos() {
  return (
    <section className="py-16 md:py-24 bg-crema" id="ocasion">
      <div className="contenedor grid md:grid-cols-2 gap-8">
        {/* Ocasión */}
        <div className="rounded-2xl overflow-hidden group">
          <div className="relative h-72 overflow-hidden">
            <img
              src={foto('uploads/2025/03/SV-34.webp')}
              alt="Arreglo de rosas y hortensias — arreglos de ocasión Monterrey"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-xs font-semibold tracking-widest uppercase mb-2 opacity-80">
                Arreglos de Ocasión
              </p>
              <h2 className="text-2xl font-serif">Para celebrar la vida</h2>
            </div>
          </div>
          <div className="p-6 bg-white">
            <p className="text-gris mb-5 leading-relaxed">
              Ramos en papel decorativo, Limited Love Collection, corazones de rosas, cumpleaños,
              aniversario y más. 175 diseños para el momento que mereces celebrar.
            </p>
            <p className="text-sm text-tinta/60 mb-5">
              Flores Amarillas · Ramos · Corazones · Cumpleaños · Aniversario · Bodas · XV Años
            </p>
            <a href="#catalogo" className="btn-rosa">
              Ver arreglos de ocasión →
            </a>
          </div>
        </div>

        {/* Fúnebre */}
        <div id="funebre" className="rounded-2xl overflow-hidden group">
          <div className="relative h-72 overflow-hidden">
            <img
              src={foto('uploads/2025/03/CT-101-N.webp')}
              alt="Corona fúnebre con crisantemos — arreglos fúnebres Monterrey 24/7"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-xs font-semibold tracking-widest uppercase mb-2 opacity-80">
                Arreglos Fúnebres
              </p>
              <h2 className="text-2xl font-serif">Para despedir con respeto</h2>
            </div>
          </div>
          <div className="p-6 bg-funebre text-white">
            <p className="text-white/80 mb-5 leading-relaxed">
              Coronas, cruces y arreglos de piso entregados directo al velatorio.
              Servicio discreto y respetuoso, las 24 horas, todos los días.
            </p>
            <p className="text-sm text-white/50 mb-5">
              Corona Tradicional · Condolencias · Coronas Premium · Medallones · Cruces
            </p>
            <a
              href={wa('Hola, necesito un arreglo fúnebre con entrega inmediata, ¿pueden ayudarme?')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gris"
            >
              Consultar disponibilidad →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Cómo funciona ─────────────────────────────────────────────────── */
function ComoFunciona() {
  const pasos = [
    {
      num: '1',
      titulo: 'Elige tu arreglo',
      desc: 'Explora el catálogo por ocasión o por tipo de arreglo fúnebre y selecciona el diseño que mejor diga lo que sientes.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      ),
    },
    {
      num: '2',
      titulo: 'Confírmalo en línea o por WhatsApp',
      desc: 'Completa tu pedido en el sitio o escríbenos directo: te ayudamos a personalizar dedicatoria, colores y detalles.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.552 4.1 1.512 5.823L.057 23.75l6.052-1.427A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.854 0-3.6-.504-5.108-1.384l-.364-.217-3.793.894.946-3.686-.238-.383A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      ),
    },
    {
      num: '3',
      titulo: 'Lo entregamos en 3 horas',
      desc: 'Preparamos tu arreglo a mano y lo llevamos a domicilio, funeraria u oficina en Monterrey y su área metropolitana.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
    },
  ];
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="contenedor">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
          De tu pantalla a sus manos, hoy mismo
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pasos.map((paso) => (
            <div key={paso.num} className="text-center">
              <div className="w-16 h-16 rounded-full bg-rosa-claro flex items-center justify-center mx-auto mb-4 text-rosa">
                {paso.icon}
              </div>
              <div className="w-8 h-8 rounded-full bg-rosa text-white text-sm font-bold flex items-center justify-center mx-auto -mt-6 mb-4 relative z-10">
                {paso.num}
              </div>
              <h3 className="text-lg font-serif font-semibold mb-2">{paso.titulo}</h3>
              <p className="text-gris text-sm leading-relaxed">{paso.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gris mt-8">
          Tiempos de entrega aplican dentro del área metropolitana de Monterrey.
        </p>
      </div>
    </section>
  );
}

/* ─── Zonas ──────────────────────────────────────────────────────────── */
function Zonas() {
  const zonas = [
    'Monterrey',
    'San Pedro Garza García',
    'Guadalupe',
    'San Nicolás',
    'Apodaca',
    'Escobedo',
    'Santa Catarina',
    'García',
    'Juárez',
  ];
  return (
    <section className="py-16 bg-rosa-claro">
      <div className="contenedor text-center">
        <h2 className="text-3xl font-serif mb-4">
          Llegamos a toda el área metropolitana
        </h2>
        <p className="text-gris mb-8 max-w-xl mx-auto">
          Florería Lizette entrega flores frescas y arreglos florales a domicilio en toda la zona
          metropolitana de Monterrey.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {zonas.map((z) => (
            <span
              key={z}
              className="px-4 py-2 bg-white rounded-full text-sm font-medium text-tinta border border-rosa/20"
            >
              {z}
            </span>
          ))}
        </div>
        <a
          href={wa('Hola, ¿hacen entregas en mi zona?')}
          target="_blank"
          rel="noopener noreferrer"
          className="text-rosa font-semibold hover:underline text-sm"
        >
          ¿Otra zona? Pregúntanos →
        </a>
      </div>
    </section>
  );
}

/* ─── FAQ ─────────────────────────────────────────────────────────────── */
function FAQ() {
  const [abierto, setAbierto] = useState<number | null>(null);
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="contenedor max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-10">
          Lo que siempre nos preguntan
        </h2>
        <div className="divide-y divide-rosa-claro">
          {faqs.map((item, i) => (
            <div key={i}>
              <button
                className="w-full flex justify-between items-center py-5 text-left gap-4"
                onClick={() => setAbierto(abierto === i ? null : i)}
                aria-expanded={abierto === i}
              >
                <span className="font-semibold text-tinta">{item.q}</span>
                <span className={`text-rosa transition-transform shrink-0 ${abierto === i ? 'rotate-45' : ''}`} aria-hidden="true">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              {abierto === i && (
                <p className="pb-5 text-gris leading-relaxed">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA final ──────────────────────────────────────────────────────── */
function CTAFinal() {
  return (
    <section className="py-16 md:py-24 bg-rosa text-white">
      <div className="contenedor grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            ¿No sabes cuál elegir? Te ayudamos en minutos
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            Cuéntanos la ocasión y tu presupuesto. Te proponemos opciones y coordinamos la entrega hoy mismo.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={wa('Hola, vi su sitio web y me gustaría hacer un pedido')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white text-rosa px-6 py-3 text-sm font-semibold hover:bg-rosa-claro transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.552 4.1 1.512 5.823L.057 23.75l6.052-1.427A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.854 0-3.6-.504-5.108-1.384l-.364-.217-3.793.894.946-3.686-.238-.383A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Escríbenos por WhatsApp
            </a>
            <a
              href={`tel:${negocio.telefono}`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white text-white px-6 py-3 text-sm font-semibold hover:bg-white hover:text-rosa transition-colors"
            >
              Llámanos · {negocio.telefono}
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src={foto('uploads/2025/04/entregas-en-3-horas.webp')}
            alt="Entrega de flores a domicilio en Monterrey en 3 horas"
            className="rounded-2xl w-full max-w-sm mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────────────────────── */
function Footer() {
  const categorias = [
    'Aniversario',
    'Ramos de Flores',
    'Corazones con Rosas',
    'Cumpleaños',
    'Coronas Tradicionales',
    'Coronas Premium',
    'Condolencias',
    'Juegos para Funeral',
  ];
  return (
    <footer id="contacto" className="bg-funebre text-white py-14">
      <div className="contenedor grid md:grid-cols-3 gap-10">
        <div>
          <img
            src={foto('uploads/2025/03/floreria-lizette-logo-white.webp')}
            alt="Florería Lizette"
            className="h-10 w-auto mb-4"
          />
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            Entrega de arreglos florales a domicilio en Monterrey y su área metropolitana
            las 24 horas del día, los 7 días de la semana.
          </p>
          <div className="flex gap-4">
            <a href={negocio.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/60 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href={negocio.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/60 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href={negocio.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-white/60 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
            <a
              href={wa('Hola, vi su sitio web y me gustaría hacer un pedido')}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-white/60 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.552 4.1 1.512 5.823L.057 23.75l6.052-1.427A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.854 0-3.6-.504-5.108-1.384l-.364-.217-3.793.894.946-3.686-.238-.383A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-4">
            Categorías
          </h3>
          <ul className="space-y-2 text-sm text-white/70">
            {categorias.map((c) => (
              <li key={c}>
                <a href="#catalogo" className="hover:text-white transition-colors">
                  {c}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-4">
            Contacto
          </h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li>
              <a href={`tel:${negocio.telefono}`} className="hover:text-white transition-colors">
                📞 {negocio.telefono}
              </a>
            </li>
            <li>
              <a href={`mailto:${negocio.email}`} className="hover:text-white transition-colors">
                ✉️ {negocio.email}
              </a>
            </li>
            <li className="leading-relaxed">
              📍 {negocio.direccion}
            </li>
            <li>
              <a
                href={negocio.mapa}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors underline underline-offset-2"
              >
                Ver en Google Maps →
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="contenedor mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/40">
        © 2026 Florería Lizette. Todos los derechos reservados.
      </div>
    </footer>
  );
}

/* ─── App ────────────────────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Props />
        <Catalogo />
        <DosCaminos />
        <ComoFunciona />
        <Zonas />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
