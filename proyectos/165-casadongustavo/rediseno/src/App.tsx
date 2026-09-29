import { useState } from 'react';
import { negocio, wa, suites, restaurante, incluye, galeria } from './data/content';

const IMG = (f: string) => `${import.meta.env.BASE_URL}${f}`;

export default function App() {
  const [suite, setSuite] = useState(0);
  const s = suites[suite];

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#1a1108]/90 backdrop-blur-sm">
        <div className="contenedor flex items-center justify-between h-16">
          <span className="font-serif text-[#fdf8f0] text-lg font-semibold tracking-wide">
            Casa Don Gustavo
          </span>
          <a
            href={`tel:${negocio.telefono}`}
            className="hidden sm:inline-flex items-center gap-2 text-sm text-[#fdf8f0]/80 hover:text-[#fdf8f0] transition-colors"
          >
            <span>📞</span> {negocio.telefono}
          </a>
          <a
            href={wa('Hola, me gustaría reservar en Casa Don Gustavo.')}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#8b6914] hover:bg-[#a37a18] text-[#fdf8f0] text-sm font-medium px-4 py-2 rounded transition-colors"
          >
            Reservar
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-end pb-16 pt-16">
        <img
          src={IMG('hero.webp')}
          alt="Patio central de Casa Don Gustavo, casona colonial del siglo XVII en Campeche"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1108]/80 via-[#1a1108]/30 to-transparent" />
        <div className="contenedor relative z-10">
          <p className="text-[#d4a843] text-sm font-medium uppercase tracking-widest mb-3">
            Hotel Boutique · Campeche · 5 Estrellas
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#fdf8f0] mb-4 max-w-2xl leading-tight">
            Lo mejor de Campeche empieza aquí
          </h1>
          <p className="text-[#fdf8f0]/80 text-lg mb-8 max-w-xl">
            10 suites exclusivas en una casona colonial del siglo&nbsp;XVII.
            Desayuno y tour por la ciudad incluidos en reservas directas.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={wa('Hola, me gustaría reservar en Casa Don Gustavo. ¿Qué disponibilidad tienen?')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#8b6914] hover:bg-[#a37a18] text-[#fdf8f0] font-medium px-7 py-3 rounded transition-colors"
            >
              Reservar por WhatsApp
            </a>
            <a
              href={`tel:${negocio.telefono}`}
              className="border border-[#fdf8f0]/50 hover:border-[#fdf8f0] text-[#fdf8f0] font-medium px-7 py-3 rounded transition-colors"
            >
              {negocio.telefono}
            </a>
          </div>
        </div>
      </section>

      {/* Elemento memorable — selector de suites */}
      <section className="bg-[#fdf8f0] py-20" id="suites">
        <div className="contenedor">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1a1108] mb-2 text-center">
            ¿Qué tipo de suite buscas?
          </h2>
          <p className="text-stone-500 text-center mb-10 max-w-lg mx-auto">
            Cada suite de Casa Don Gustavo tiene su propia historia. Elige la tuya.
          </p>

          {/* Tab buttons */}
          <div className="flex gap-2 justify-center mb-10 flex-wrap">
            {suites.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setSuite(i)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  suite === i
                    ? 'bg-[#8b6914] text-[#fdf8f0]'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {s.nombre}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <img
              src={s.foto}
              alt={s.alt}
              className="w-full rounded-lg object-cover aspect-[4/3]"
            />
            <div>
              <p className="text-[#8b6914] text-sm font-medium uppercase tracking-wider mb-2">
                {s.tagline}
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1a1108] mb-4">{s.nombre}</h3>
              <p className="text-stone-600 leading-relaxed mb-6">{s.descripcion}</p>
              <ul className="grid grid-cols-2 gap-2 mb-8">
                {s.amenidades.map(a => (
                  <li key={a} className="flex items-center gap-2 text-sm text-stone-600">
                    <span className="text-[#8b6914]">✓</span> {a}
                  </li>
                ))}
              </ul>
              <a
                href={wa(s.waMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#8b6914] hover:bg-[#a37a18] text-[#fdf8f0] font-medium px-7 py-3 rounded transition-colors"
              >
                Reservar esta suite
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Qué incluye tu estancia? */}
      <section className="bg-[#1a1108] py-20">
        <div className="contenedor">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#fdf8f0] mb-12 text-center">
            Tu estancia incluye
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {incluye.map(it => (
              <div key={it.titulo} className="text-center">
                <div className="text-4xl mb-4">{it.icono}</div>
                <h3 className="font-serif text-lg text-[#fdf8f0] mb-2">{it.titulo}</h3>
                <p className="text-[#fdf8f0]/60 text-sm leading-relaxed">{it.detalle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurante */}
      <section className="bg-[#fdf8f0] py-20" id="restaurante">
        <div className="contenedor">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <img
              src={restaurante.foto}
              alt={restaurante.alt}
              className="w-full rounded-lg object-cover aspect-[4/3]"
            />
            <div>
              <p className="text-[#8b6914] text-sm font-medium uppercase tracking-wider mb-2">
                Abierto al público
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1a1108] mb-4">
                Restaurante Casa Don Gustavo
              </h2>
              <p className="text-stone-600 leading-relaxed mb-6">{restaurante.descripcion}</p>
              <ul className="space-y-2 mb-6">
                {restaurante.platillos.map(p => (
                  <li key={p} className="flex items-center gap-2 text-stone-600 text-sm">
                    <span className="text-[#8b6914]">•</span> {p}
                  </li>
                ))}
              </ul>
              <a
                href={wa('Hola, me gustaría reservar una mesa en el Restaurante Casa Don Gustavo.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-[#8b6914] text-[#8b6914] hover:bg-[#8b6914] hover:text-[#fdf8f0] font-medium px-6 py-2.5 rounded transition-colors"
              >
                Reservar mesa
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="bg-stone-100 py-16">
        <div className="contenedor">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1a1108] mb-8 text-center">
            La casona
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galeria.map(g => (
              <img
                key={g.src}
                src={g.src}
                alt={g.alt}
                className="w-full rounded object-cover aspect-square"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contacto y ubicación */}
      <section className="bg-[#fdf8f0] py-20" id="contacto">
        <div className="contenedor">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1a1108] mb-4">
              Reserva tu estancia
            </h2>
            <p className="text-stone-600 mb-8">
              {negocio.direccion}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={wa('Hola, me gustaría hacer una reserva en Casa Don Gustavo.')}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#8b6914] hover:bg-[#a37a18] text-[#fdf8f0] font-medium px-8 py-3 rounded transition-colors"
              >
                WhatsApp
              </a>
              <a
                href={`tel:${negocio.telefono}`}
                className="border border-[#8b6914] text-[#8b6914] hover:bg-[#8b6914] hover:text-[#fdf8f0] font-medium px-8 py-3 rounded transition-colors"
              >
                {negocio.telefono}
              </a>
              <a
                href={`mailto:${negocio.email}`}
                className="border border-stone-300 text-stone-600 hover:border-stone-500 font-medium px-8 py-3 rounded transition-colors"
              >
                {negocio.email}
              </a>
            </div>
            <a
              href="https://maps.app.goo.gl/YjcXnVbLz7FWmPtE7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8b6914] hover:underline text-sm"
            >
              Ver en Google Maps →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1108] py-8">
        <div className="contenedor flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-serif text-[#fdf8f0]/80 text-sm">
            © 2026 Casa Don Gustavo Boutique Hotel
          </span>
          <div className="flex gap-4 text-[#fdf8f0]/60 text-xs">
            <a href="https://www.instagram.com/casadongustavohotel/" target="_blank" rel="noopener noreferrer" className="hover:text-[#fdf8f0] transition-colors">Instagram</a>
            <a href="https://www.facebook.com/HotelBoutiqueCasaDonGustavo" target="_blank" rel="noopener noreferrer" className="hover:text-[#fdf8f0] transition-colors">Facebook</a>
          </div>
        </div>
      </footer>

      {/* Barra fija móvil */}
      <div className="fixed bottom-0 inset-x-0 z-50 sm:hidden bg-[#1a1108] border-t border-[#8b6914]/30 flex">
        <a
          href={`tel:${negocio.telefono}`}
          className="flex-1 flex flex-col items-center justify-center py-3 text-[#fdf8f0]/70 hover:text-[#fdf8f0] text-xs gap-1"
        >
          <span className="text-lg">📞</span>
          Llamar
        </a>
        <a
          href={wa('Hola, me gustaría reservar en Casa Don Gustavo.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-3 bg-[#8b6914] text-[#fdf8f0] text-xs font-semibold gap-1"
        >
          <span className="text-lg">💬</span>
          WhatsApp
        </a>
        <a
          href={`mailto:${negocio.email}`}
          className="flex-1 flex flex-col items-center justify-center py-3 text-[#fdf8f0]/70 hover:text-[#fdf8f0] text-xs gap-1"
        >
          <span className="text-lg">✉️</span>
          Correo
        </a>
      </div>
    </>
  );
}
