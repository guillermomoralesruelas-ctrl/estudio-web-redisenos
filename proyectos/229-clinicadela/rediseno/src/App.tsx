import { useState, useRef } from 'react';
import { negocio, wa, foto, credenciales, condiciones, tratamientos, resenas } from './data/content';

const MSG = 'Hola, quiero agendar una cita con la Dra. Reyna Beatriz Aguirre';

export default function App() {
  const [condActiva, setCondActiva] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
  };

  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Physician',
        name: negocio.doctora,
        medicalSpecialty: 'Dermatology',
        description: 'Dermatóloga con más de 30 años de experiencia. Especialista en acné, manchas, alopecia y dermatología cosmética en Mérida, Yucatán.',
        address: { '@type': 'PostalAddress', streetAddress: 'Calle 31E #275 por 24 y 26', addressLocality: 'Mérida', addressRegion: 'Yucatán', addressCountry: 'MX' },
        telephone: negocio.telefono,
        url: 'https://clinicadelacne.com.mx',
        openingHours: 'Mo-Fr 10:00-20:00',
        sameAs: [negocio.facebook, negocio.doctoralia],
      })}} />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
        <img
          src={foto('bg-full.jpg')}
          alt="Clínica del Acné — Dra. Reyna Beatriz Aguirre, Mérida Yucatán"
          className="absolute inset-0 w-full h-full object-cover object-top"
          style={{ filter: 'brightness(0.35)' }}
        />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-24 text-white">
          <p className="text-teal-400 font-semibold tracking-widest uppercase text-sm mb-4">Mérida, Yucatán</p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">
            Dermatóloga<br />en Mérida
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-3 font-semibold">
            {negocio.doctora}
          </p>
          <p className="text-gray-300 mb-8 max-w-xl">
            Más de 30 años de experiencia. Especialista en acné, manchas, alopecia y dermatología cosmética. Ced. Esp. 4111225.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={wa(MSG)} className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-full transition-colors text-center">
              Agendar por WhatsApp
            </a>
            <a href={negocio.doctoralia} target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold py-4 px-8 rounded-full transition-colors text-center">
              Reservar en Doctoralia
            </a>
          </div>
        </div>
      </section>

      {/* La Dermatóloga */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={foto('dra-small.jpg')}
              alt="Dra. Reyna Beatriz Aguirre Trejo — Dermatóloga en Mérida"
              className="rounded-2xl w-full max-w-xs mx-auto md:mx-0 object-cover shadow-lg"
            />
          </div>
          <div>
            <p className="text-teal-600 font-semibold tracking-widest uppercase text-sm mb-2">Currículum</p>
            <h2 className="text-3xl font-black text-slate-900 mb-6">{negocio.doctora}</h2>
            <ul className="space-y-3">
              {credenciales.map((c, i) => (
                <li key={i} className="flex gap-3 items-start text-slate-700">
                  <span className="text-teal-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Condiciones — elemento memorable */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-teal-600 font-semibold tracking-widest uppercase text-sm text-center mb-2">Especialidades</p>
          <h2 className="text-3xl font-black text-slate-900 text-center mb-3">¿Qué casos atendemos?</h2>
          <p className="text-gray-500 text-center mb-10">Toca cada padecimiento para ver cómo se trata.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {condiciones.map((c, i) => (
              <button
                key={i}
                onClick={() => setCondActiva(condActiva === i ? null : i)}
                aria-expanded={condActiva === i}
                className={`text-left p-6 rounded-2xl border-2 transition-all ${condActiva === i ? 'border-teal-500 bg-teal-50' : 'border-slate-200 bg-white hover:border-teal-300'}`}
              >
                <p className="font-bold text-slate-900 mb-2">{c.nombre}</p>
                {condActiva === i && (
                  <p className="text-sm text-slate-600 leading-relaxed mt-1">{c.desc}</p>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tratamientos cosméticos */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-teal-600 font-semibold tracking-widest uppercase text-sm text-center mb-2">Dermatología Cosmética</p>
          <h2 className="text-3xl font-black text-slate-900 text-center mb-10">Tratamientos</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {tratamientos.map((t, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <img src={t.img} alt={`${t.nombre} — Dra. Reyna Beatriz Aguirre`} className="w-full h-36 object-cover" />
                <div className="p-4">
                  <p className="font-bold text-slate-900 mb-1">{t.nombre}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulta en línea */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-4">Consulta en Línea</h2>
          <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
            Recibe tu diagnóstico y tratamiento desde donde estés. Videollamada por Skype o WhatsApp. Pago desde OXXO, banco o transferencia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <div className="bg-white/10 rounded-xl p-5 flex-1 max-w-xs mx-auto sm:mx-0">
              <p className="font-bold mb-1">1. Contáctanos</p>
              <p className="text-sm text-teal-100">Escríbenos y separa el día y hora que desees.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-5 flex-1 max-w-xs mx-auto sm:mx-0">
              <p className="font-bold mb-1">2. Realiza tu pago</p>
              <p className="text-sm text-teal-100">Desde OXXO, banco o transferencia.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-5 flex-1 max-w-xs mx-auto sm:mx-0">
              <p className="font-bold mb-1">3. Conéctate</p>
              <p className="text-sm text-teal-100">Videollamada a la hora acordada. Puedes enviar fotos de tu padecimiento.</p>
            </div>
          </div>
          <a href={wa('Hola, quiero agendar una consulta en línea con la Dra. Reyna')} className="inline-block bg-white text-teal-700 font-bold py-4 px-10 rounded-full hover:bg-teal-50 transition-colors">
            Agendar consulta en línea
          </a>
        </div>
      </section>

      {/* Reseñas — carrusel */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-teal-600 font-semibold tracking-widest uppercase text-sm text-center mb-2">Reseñas</p>
          <h2 className="text-3xl font-black text-slate-900 text-center mb-10">Lo que dicen mis pacientes</h2>
          <div className="relative">
            <div
              ref={carouselRef}
              className="flex gap-5 overflow-x-auto pb-4"
              style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' } as React.CSSProperties}
            >
              {resenas.map((r, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-72 bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <p className="text-teal-500 text-xl mb-3">★★★★★</p>
                  <p className="text-slate-700 text-sm leading-relaxed mb-4">"{r.texto}"</p>
                  <p className="font-bold text-slate-900 text-sm">{r.nombre}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-3 mt-6">
              <button onClick={() => scroll(-1)} className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-200 transition-colors" aria-label="Anterior reseña">‹</button>
              <button onClick={() => scroll(1)} className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-200 transition-colors" aria-label="Siguiente reseña">›</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-slate-900 text-center mb-10">Agenda tu Cita</h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <div>
                <p className="text-teal-600 font-semibold uppercase text-xs tracking-widest mb-1">Teléfono</p>
                <a href={`tel:${negocio.telefono}`} className="text-xl font-bold text-slate-900 hover:text-teal-600 transition-colors">
                  999 328 7515
                </a>
              </div>
              <div>
                <p className="text-teal-600 font-semibold uppercase text-xs tracking-widest mb-1">Horario</p>
                <p className="text-slate-700">{negocio.horario}</p>
              </div>
              <div>
                <p className="text-teal-600 font-semibold uppercase text-xs tracking-widest mb-1">Ubicación</p>
                <p className="text-slate-700">{negocio.direccion}</p>
              </div>
              <div className="flex flex-col gap-3">
                <a href={wa(MSG)} className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-full transition-colors text-center">
                  WhatsApp
                </a>
                <a href={`tel:${negocio.telefono}`} className="border-2 border-teal-600 text-teal-700 hover:bg-teal-50 font-bold py-3 px-8 rounded-full transition-colors text-center">
                  Llamar
                </a>
                <a href={negocio.doctoralia} target="_blank" rel="noopener noreferrer" className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 font-bold py-3 px-8 rounded-full transition-colors text-center">
                  Reservar en Doctoralia
                </a>
              </div>
            </div>
            <div>
              <img
                src={foto('clinica-del-acne.jpg')}
                alt="Clínica del Acné — Mérida, Yucatán"
                className="rounded-2xl w-full h-72 object-cover shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-400 py-10 text-center text-sm">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-white font-black text-lg mb-2">{negocio.doctora}</p>
          <p className="mb-4">Dermatóloga en {negocio.ciudad}</p>
          <div className="flex justify-center gap-6 mb-4">
            <a href={negocio.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
            <a href={negocio.doctoralia} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Doctoralia</a>
          </div>
          <p>© {new Date().getFullYear()} Clínica del Acné · Mérida, Yucatán</p>
        </div>
      </footer>
    </>
  );
}
