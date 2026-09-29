import { useState } from 'react';
import { negocio, servicios, foto, wa } from './data/content';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DaySpa',
  name: negocio.nombre,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Tulum 32 entre Av. Satélite y Av. Centauro',
    addressLocality: 'Tulum',
    addressRegion: 'Quintana Roo',
    addressCountry: 'MX',
  },
  telephone: negocio.telefono,
  email: 'cacaospatulum@gmail.com',
  url: 'https://www.cacaospatulum.com/',
  openingHours: 'Mo-Su 11:00-20:00',
};

export default function App() {
  const [activo, setActivo] = useState(0);
  const sv = servicios[activo];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-40 bg-[#faf7f2]/90 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <span className="font-serif text-[#5a6d41] font-semibold text-lg tracking-wide">
            Cacao Spa Tulum
          </span>
          <a
            href={negocio.mapa}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-500 hover:text-[#5a6d41] text-sm transition-colors"
            aria-label="Ver ubicación en Google Maps"
          >
            Av. Tulum 32, Centro
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative min-h-[90svh] flex flex-col justify-end" aria-label="Portada">
          <img
            src={foto('hero.webp')}
            alt="Interior de Cacao Spa Tulum"
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1109] via-[#1c1109]/50 to-transparent" />
          <div className="relative z-10 max-w-5xl mx-auto px-4 pb-14 pt-24">
            <h1 className="font-serif text-4xl sm:text-6xl text-stone-100 leading-tight mb-3">
              Cacao Spa Tulum
            </h1>
            <p className="text-stone-300 text-lg sm:text-xl mb-8 max-w-xl">
              Un oasis de bienestar en el corazón de Tulum. Masajes, faciales orgánicos y rituales inspirados en la tradición maya del cacao.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={wa('Hola, me gustaría reservar en Cacao Spa Tulum.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#5a6d41] hover:bg-[#4a5c33] text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                Reservar por WhatsApp
              </a>
              <a
                href={negocio.mapa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-stone-400 hover:border-[#5a6d41] text-stone-200 hover:text-[#5a6d41] font-semibold px-6 py-3 rounded-full transition-colors"
              >
                Cómo llegar
              </a>
            </div>
          </div>
        </section>

        {/* Elemento memorable: ¿Qué ritual necesitas hoy? */}
        <section className="bg-[#faf7f2] py-16 px-4" aria-label="Nuestros servicios">
          <div className="max-w-5xl mx-auto">
            <p className="text-stone-500 text-sm uppercase tracking-widest mb-2">Nuestros servicios</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1c1109] mb-8">
              ¿Qué ritual necesitas hoy?
            </h2>

            <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Servicios">
              {servicios.map((s, i) => (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={activo === i}
                  aria-controls={`panel-${s.id}`}
                  onClick={() => setActivo(i)}
                  className={[
                    'px-5 py-2 rounded-full text-sm font-medium transition-colors',
                    activo === i
                      ? 'bg-[#5a6d41] text-white'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200',
                  ].join(' ')}
                >
                  {s.nombre}
                </button>
              ))}
            </div>

            <div
              id={`panel-${sv.id}`}
              role="tabpanel"
              aria-label={sv.nombre}
              className="grid sm:grid-cols-2 gap-8 items-start"
            >
              <img
                src={sv.foto}
                alt={sv.alt}
                className="w-full aspect-[4/3] object-cover rounded-2xl"
                loading="lazy"
              />
              <div className="flex flex-col justify-center">
                <h3 className="font-serif text-2xl text-[#1c1109] mb-3">{sv.nombre}</h3>
                <p className="text-stone-600 leading-relaxed mb-6">{sv.descripcion}</p>
                <a
                  href={sv.waMsg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start inline-block bg-[#5a6d41] hover:bg-[#4a5c33] text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
                >
                  Reservar este servicio
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Galería de salas */}
        <section className="bg-stone-100 py-16 px-4 border-t border-stone-200" aria-label="Espacios del spa">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1c1109] mb-6">Nuestros espacios</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <img src={foto('sala-1.webp')} alt="Sala de tratamientos en Cacao Spa Tulum" className="w-full aspect-square object-cover rounded-xl" loading="lazy" />
              <img src={foto('sala-2.webp')} alt="Espacio de relajación en Cacao Spa Tulum" className="w-full aspect-square object-cover rounded-xl" loading="lazy" />
              <img src={foto('exterior.webp')} alt="Exterior de Cacao Spa Tulum" className="w-full aspect-square object-cover rounded-xl" loading="lazy" />
            </div>
          </div>
        </section>

        {/* Info práctica */}
        <section className="bg-[#faf7f2] py-16 px-4 border-t border-stone-200" aria-label="Información práctica">
          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-10">
            <div>
              <h2 className="font-serif text-2xl text-[#1c1109] mb-4">Horario</h2>
              <p className="text-stone-600 mb-2">Todos los días: <span className="text-[#5a6d41] font-semibold">11:00 – 20:00 h</span></p>
              <p className="text-stone-500 text-sm">Se aceptan walk-ins sujetos a disponibilidad. Llega 15 min antes de tu cita.</p>
            </div>
            <div>
              <h2 className="font-serif text-2xl text-[#1c1109] mb-4">Cómo llegar</h2>
              <address className="not-italic text-stone-600 mb-4 leading-relaxed">
                {negocio.direccion}<br />
                <span className="text-stone-500 text-sm">2do piso frente a Strawhat Hostel</span>
              </address>
              <a
                href={negocio.mapa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-stone-200 hover:bg-stone-300 text-stone-800 font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
              >
                Abrir en Google Maps
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1c1109] py-8 px-4 text-center text-stone-400 text-sm">
        <p className="font-serif text-[#a3b88a] font-semibold mb-1">Cacao Spa Tulum</p>
        <p>Av. Tulum 32, Centro, Tulum, Quintana Roo</p>
        <p className="mt-1">
          <a href="tel:+529982418650" className="hover:text-[#a3b88a] transition-colors">+52 998 241 8650</a>
          {' · '}
          <a href="mailto:cacaospatulum@gmail.com" className="hover:text-[#a3b88a] transition-colors">cacaospatulum@gmail.com</a>
        </p>
      </footer>

      {/* Barra fija móvil */}
      <div className="fixed bottom-0 inset-x-0 z-50 sm:hidden bg-[#faf7f2] border-t border-stone-200 p-3">
        <a
          href={wa('Hola, me gustaría reservar en Cacao Spa Tulum.')}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-[#5a6d41] hover:bg-[#4a5c33] text-white font-semibold py-3 rounded-full text-center text-sm transition-colors"
        >
          Reservar por WhatsApp
        </a>
      </div>
    </>
  );
}
