import { useState } from 'react';
import '@fontsource/playfair-display/700.css';
import '@fontsource/source-sans-3/400.css';
import '@fontsource/source-sans-3/600.css';
import {
  negocio, wa, habitaciones, fotosBanner,
  fotosRestaurante, fotosTerraza, fotoBarrio,
} from './data/content';

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2c1810]/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <span className="font-[Playfair_Display] text-white text-lg font-bold tracking-wide">
          La Purificadora
        </span>
        <div className="flex items-center gap-3">
          <a
            href={`tel:${negocio.telefono.replace(/\s|\(|\)|-/g, '')}`}
            className="hidden sm:block text-[#f5ede0] text-sm hover:text-white transition-colors"
          >
            {negocio.telefono}
          </a>
          <a
            href={negocio.reservar}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#c2622d] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[#a8521f] transition-colors"
          >
            Reservar
          </a>
        </div>
      </div>
    </nav>
  );
}

function BarraMovil() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden flex">
      <a
        href={wa('Hola, me gustaría información sobre La Purificadora')}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-[#25d366] text-white text-center py-3.5 font-semibold text-sm"
      >
        WhatsApp
      </a>
      <a
        href={negocio.reservar}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-[#c2622d] text-white text-center py-3.5 font-semibold text-sm"
      >
        Reservar ahora
      </a>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative h-screen min-h-[560px] flex items-center justify-center">
      <img
        src={fotosBanner}
        alt="La Purificadora — hotel boutique en el Centro Histórico de Puebla"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-[#2c1810]/55" />
      <div className="relative text-center text-white px-4 max-w-2xl">
        <p className="text-[#f5ede0] text-sm tracking-[0.2em] uppercase mb-4">
          Centro Histórico · Puebla · Patrimonio de la Humanidad UNESCO
        </p>
        <h1 className="font-[Playfair_Display] text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          La Purificadora
        </h1>
        <p className="text-[#f5ede0] text-lg mb-8 max-w-xl mx-auto">
          Hotel boutique en una purificadora de agua del siglo XIX, diseñada por Ricardo Legorreta. Historia viva en el corazón de Puebla.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={negocio.reservar}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#c2622d] text-white px-8 py-3.5 font-semibold hover:bg-[#a8521f] transition-colors rounded"
          >
            Ver disponibilidad
          </a>
          <a
            href={wa('Hola, me gustaría información y tarifas de La Purificadora')}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white px-8 py-3.5 font-semibold hover:bg-white/10 transition-colors rounded"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function SeccionHabitaciones() {
  const [activa, setActiva] = useState<string | null>(null);

  return (
    <section className="py-20 bg-[#f5ede0]" id="habitaciones">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-[#c2622d] text-sm tracking-[0.15em] uppercase text-center mb-2">Alojamiento</p>
        <h2 className="font-[Playfair_Display] text-3xl sm:text-4xl font-bold text-[#2c1810] text-center mb-3">
          Elige tu habitación
        </h2>
        <p className="text-[#6b4226] text-center max-w-xl mx-auto mb-12">
          Siete tipos de habitación, todas con carácter único dentro de la fábrica restaurada.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {habitaciones.map((h) => (
            <div
              key={h.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setActiva(activa === h.id ? null : h.id)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={h.img}
                  alt={h.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-[Playfair_Display] text-lg font-bold text-[#2c1810] mb-1">{h.nombre}</h3>
                <p className="text-[#6b4226] text-sm leading-relaxed mb-3">{h.descripcion}</p>

                {activa === h.id && (
                  <ul className="mb-4 space-y-1">
                    {h.detalles.map((d) => (
                      <li key={d} className="text-sm text-[#2c1810] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c2622d] flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex items-center justify-between">
                  <button
                    className="text-[#c2622d] text-sm font-semibold hover:underline"
                    aria-expanded={activa === h.id}
                  >
                    {activa === h.id ? 'Ocultar detalles ▲' : 'Ver detalles ▼'}
                  </button>
                  <a
                    href={negocio.reservar}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="bg-[#c2622d] text-white text-xs font-semibold px-4 py-2 rounded hover:bg-[#a8521f] transition-colors"
                  >
                    Ver disponibilidad
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SeccionRestaurante() {
  return (
    <section className="py-20 bg-white" id="restaurante">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#c2622d] text-sm tracking-[0.15em] uppercase mb-2">Gastronomía</p>
            <h2 className="font-[Playfair_Display] text-3xl sm:text-4xl font-bold text-[#2c1810] mb-5">
              Restaurante
            </h2>
            <p className="text-[#6b4226] leading-relaxed mb-4">
              Cocina mexicana contemporánea honesta en un entorno diseñado por Ricardo Legorreta. Las mesas compartidas fueron elaboradas con la madera apolillada encontrada en la antigua purificadora de agua.
            </p>
            <p className="text-[#6b4226] leading-relaxed mb-6">
              La Chef Nanyely Pastrana dirige una propuesta que combina ingredientes frescos y locales con la riqueza gastronómica de Puebla.
            </p>
            <div className="bg-[#f5ede0] rounded-lg p-4 mb-6">
              <p className="text-sm font-semibold text-[#2c1810] mb-1">Horarios</p>
              <p className="text-sm text-[#6b4226]">Domingo a Jueves: 07:00 – 23:00</p>
              <p className="text-sm text-[#6b4226]">Viernes y Sábado: 07:00 – 00:00</p>
            </div>
            <a
              href={wa('Hola, me gustaría reservar mesa en el restaurante de La Purificadora')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#c2622d] text-white px-6 py-3 font-semibold rounded hover:bg-[#a8521f] transition-colors"
            >
              Reservar mesa
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {fotosRestaurante.map((f, i) => (
              <div key={i} className={`overflow-hidden rounded-lg ${i === 0 ? 'col-span-2' : ''}`}>
                <img
                  src={f.src}
                  alt={f.alt}
                  className="w-full h-full object-cover aspect-video"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SeccionTerraza() {
  return (
    <section className="py-20 bg-[#2c1810]" id="terraza">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-[#c2622d] text-sm tracking-[0.15em] uppercase text-center mb-2">Tercer piso</p>
        <h2 className="font-[Playfair_Display] text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          Terraza
        </h2>
        <p className="text-[#f5ede0]/80 text-center max-w-xl mx-auto mb-12">
          Vistas panorámicas al Centro Histórico. Cócteles artesanales, tapas y gastronomía gourmet en la terraza más elegante de Puebla.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {fotosTerraza.map((f, i) => (
            <div key={i} className="overflow-hidden rounded-lg aspect-[4/3]">
              <img
                src={f.src}
                alt={f.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href={wa('Hola, me gustaría información sobre la terraza de La Purificadora')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[#c2622d] text-[#c2622d] px-8 py-3 font-semibold rounded hover:bg-[#c2622d] hover:text-white transition-colors"
          >
            Consultar disponibilidad
          </a>
        </div>
      </div>
    </section>
  );
}

function SeccionBarrio() {
  return (
    <section className="py-20 bg-[#f5ede0]" id="barrio">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden rounded-lg">
            <img
              src={fotoBarrio}
              alt="Centro Histórico de Puebla — Patrimonio de la Humanidad UNESCO"
              className="w-full object-cover aspect-[4/3]"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-[#c2622d] text-sm tracking-[0.15em] uppercase mb-2">Ubicación</p>
            <h2 className="font-[Playfair_Display] text-3xl sm:text-4xl font-bold text-[#2c1810] mb-5">
              En el corazón del Centro Histórico
            </h2>
            <p className="text-[#6b4226] leading-relaxed mb-4">
              A un costado de la iglesia de San Francisco, en Puebla, ciudad colonial Patrimonio de la Humanidad UNESCO, a 1.5 horas de la Ciudad de México.
            </p>
            <p className="text-[#6b4226] leading-relaxed mb-6">
              Arquitectura del siglo XIX, restaurada por Legorreta+Legorreta, rodeada de museos, mercados y los mejores restaurantes de la gastronomía poblana.
            </p>
            <div className="bg-white rounded-lg p-4 mb-6 border border-[#e8d5c0]">
              <p className="text-sm font-semibold text-[#2c1810] mb-1">Dirección</p>
              <p className="text-sm text-[#6b4226]">{negocio.direccion}</p>
            </div>
            <a
              href={negocio.reservar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#c2622d] text-white px-6 py-3 font-semibold rounded hover:bg-[#a8521f] transition-colors"
            >
              Ver disponibilidad
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SeccionContacto() {
  return (
    <section className="py-20 bg-white" id="contacto">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-[#c2622d] text-sm tracking-[0.15em] uppercase mb-2">Contacto</p>
        <h2 className="font-[Playfair_Display] text-3xl sm:text-4xl font-bold text-[#2c1810] mb-4">
          Reserva tu estancia
        </h2>
        <p className="text-[#6b4226] max-w-lg mx-auto mb-10">
          Contáctanos por WhatsApp o reserva directamente en nuestro motor de reservas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href={wa('Hola, me gustaría información sobre disponibilidad en La Purificadora')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25d366] text-white px-8 py-3.5 font-semibold rounded hover:bg-[#1fba58] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.524 5.85L.057 23.5l5.773-1.513A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.791 9.791 0 01-4.988-1.368l-.358-.213-3.407.893.909-3.32-.234-.382A9.784 9.784 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.431 0 9.818 4.388 9.818 9.818 0 5.431-4.387 9.818-9.818 9.818z" />
            </svg>
            WhatsApp
          </a>
          <a
            href={negocio.reservar}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#c2622d] text-white px-8 py-3.5 font-semibold rounded hover:bg-[#a8521f] transition-colors"
          >
            Motor de reservas
          </a>
          <a
            href={`tel:${negocio.telefono.replace(/\s|\(|\)/g, '')}`}
            className="inline-block border border-[#c2622d] text-[#c2622d] px-8 py-3.5 font-semibold rounded hover:bg-[#c2622d] hover:text-white transition-colors"
          >
            {negocio.telefono}
          </a>
        </div>
        <p className="text-sm text-[#6b4226]">{negocio.direccion}</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#2c1810] text-[#f5ede0]/70 py-10 pb-20 sm:pb-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-[Playfair_Display] text-white font-bold">La Purificadora</p>
        <p className="text-xs text-center">{negocio.ciudad} · {negocio.telefono}</p>
        <div className="flex gap-4">
          <a href={negocio.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-sm">Instagram</a>
          <a href={negocio.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-sm">Facebook</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LodgingBusiness',
            name: 'La Purificadora',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Callejón de la 10 Norte 802',
              addressLocality: 'Puebla',
              addressRegion: 'Puebla',
              addressCountry: 'MX',
            },
            telephone: '+522223091920',
            url: 'https://www.lapurificadora.com/',
            sameAs: [negocio.instagram, negocio.facebook],
          }),
        }}
      />
      <NavBar />
      <Hero />
      <SeccionHabitaciones />
      <SeccionRestaurante />
      <SeccionTerraza />
      <SeccionBarrio />
      <SeccionContacto />
      <Footer />
      <BarraMovil />
    </>
  );
}
