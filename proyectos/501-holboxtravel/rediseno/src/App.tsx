import { useState } from 'react';
import { negocio, wa, foto, tours, porQueNosotros, reseñas } from './data/content';

const WA_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.95-1.418A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm4.93 13.71c-.2.56-1.17 1.07-1.62 1.14-.42.07-.97.1-1.56-.1-.36-.12-.82-.28-1.41-.55-2.48-1.07-4.1-3.57-4.23-3.74-.13-.17-1.04-1.38-1.04-2.63 0-1.25.65-1.87.88-2.12.23-.25.5-.31.67-.31.17 0 .34 0 .49.01.16.01.37-.06.58.44.21.5.72 1.76.78 1.89.06.13.1.28.02.45-.08.17-.12.28-.24.43-.12.15-.25.34-.36.45-.12.12-.24.25-.1.49.14.24.62.99 1.33 1.6.91.8 1.68 1.05 1.92 1.17.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.56-.14 1.12z" />
  </svg>
);

const STAR = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-amber-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur shadow-sm">
      <div className="contenedor flex h-14 items-center justify-between gap-4">
        <span className="font-serif text-xl font-bold text-[--color-tinta] tracking-tight">
          Holbox Travel
        </span>
        <div className="flex items-center gap-2">
          <a
            href="#tours"
            className="hidden sm:inline-flex items-center rounded-full border border-[--color-acento] px-4 py-1.5 text-sm font-semibold text-[--color-acento] transition hover:bg-[--color-acento] hover:text-white"
          >
            Our Tours
          </a>
          <a
            href={wa('Hi, I would like to know more about your tours.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa text-sm py-2 px-4"
          >
            {WA_ICON}
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-end pb-16 sm:pb-24 overflow-hidden">
      <img
        src={foto('hero.webp')}
        alt="Holbox Island turquoise waters from above"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c2340]/80 via-[#0c2340]/30 to-transparent" />
      <div className="contenedor relative z-10">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 max-w-3xl">
          Discover Holbox Island
        </h1>
        <p className="text-white/90 text-lg sm:text-xl max-w-xl mb-8">
          Swim with whale sharks, explore three islands at sunrise and glow in bioluminescent waters.
          Local experts. Unforgettable adventures.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#tours" className="btn-acento text-base px-6 py-3">
            Choose Your Adventure
          </a>
          <a
            href={wa('Hi, I would like to learn about your tours in Holbox.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa text-base px-6 py-3"
          >
            {WA_ICON}
            <span>Chat with us</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Tours() {
  const [abierto, setAbierto] = useState<string | null>(null);

  return (
    <section id="tours" className="py-20 bg-white">
      <div className="contenedor">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[--color-tinta] mb-3">
            Choose Your Holbox Adventure
          </h2>
          <p className="text-[--color-suave] text-lg max-w-2xl mx-auto">
            Tap any tour to see what is included and book directly via WhatsApp.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {tours.map((tour) => {
            const open = abierto === tour.id;
            return (
              <article
                key={tour.id}
                className={[
                  'rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer',
                  open
                    ? 'border-[--color-acento] shadow-xl ring-2 ring-cyan-200'
                    : 'border-gray-200 shadow hover:shadow-md hover:-translate-y-0.5',
                ].join(' ')}
                onClick={() => setAbierto(open ? null : tour.id)}
              >
                <div className={['relative overflow-hidden transition-all duration-300', open ? 'h-64' : 'h-48'].join(' ')}>
                  <img
                    src={tour.img}
                    alt={tour.imgAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <p className="text-white font-serif font-bold text-xl leading-snug">{tour.titulo}</p>
                    <p className="text-white/80 text-sm">{tour.subtitulo}</p>
                  </div>
                  <div className={['absolute top-3 right-3 w-8 h-8 rounded-full border-2 border-white bg-black/30 flex items-center justify-center transition-transform duration-300', open ? 'rotate-45' : ''].join(' ')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                {open && (
                  <div className="p-5 sm:p-6 bg-white">
                    <p className="text-[--color-suave] mb-4 leading-relaxed">{tour.descripcion}</p>
                    <ul className="flex flex-wrap gap-2 mb-5">
                      {tour.detalles.map((d) => (
                        <li key={d} className="rounded-full bg-sky-50 border border-cyan-200 px-3 py-1 text-sm text-[--color-acento] font-medium">
                          {d}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={wa(tour.msgWA)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-wa w-full justify-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {WA_ICON}
                      Book via WhatsApp
                    </a>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PorQue() {
  return (
    <section className="py-20 bg-amber-50">
      <div className="contenedor">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[--color-tinta] text-center mb-12">
          Why Book with Holbox Travel?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {porQueNosotros.map((item) => (
            <div key={item.titulo} className="bg-white rounded-2xl p-6 shadow-sm">
              <span className="text-4xl mb-3 block" aria-hidden="true">{item.icono}</span>
              <h3 className="font-serif font-bold text-lg text-[--color-tinta] mb-2">{item.titulo}</h3>
              <p className="text-[--color-suave] text-sm leading-relaxed">{item.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Resenas() {
  return (
    <section className="py-20 bg-white">
      <div className="contenedor">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[--color-tinta] text-center mb-12">
          What Our Guests Say
        </h2>
        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reseñas.map((r) => (
            <blockquote key={r.autor} className="bg-sky-50 border border-cyan-100 rounded-2xl p-6">
              <div className="flex gap-0.5 mb-3" aria-label={r.estrellas + ' stars'}>
                {Array.from({ length: r.estrellas }).map((_, i) => (
                  <span key={i}>{STAR}</span>
                ))}
              </div>
              <p className="text-[--color-suave] text-sm leading-relaxed mb-4">&ldquo;{r.texto}&rdquo;</p>
              <footer className="font-semibold text-[--color-tinta] text-sm">— {r.autor}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="py-20 bg-[--color-tinta]">
      <div className="contenedor">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Book?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              We are available on WhatsApp every day. Reach out to check availability, ask questions or book your tour in minutes.
            </p>
            <div className="mb-8">
              <a
                href={wa('Hi, I would like to book a tour with Holbox Travel.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa text-base px-6 py-3"
              >
                {WA_ICON}
                WhatsApp {negocio.telefono}
              </a>
            </div>
            <div className="space-y-3 text-white/70 text-sm">
              <p>📍 {negocio.direccion}</p>
              <p>✉️ <a href={'mailto:' + negocio.email} className="underline hover:text-white">{negocio.email}</a></p>
              <div className="flex gap-4 pt-2">
                <a href={negocio.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Facebook</a>
                <a href={negocio.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram</a>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img
              src={foto('holbox-aerial.webp')}
              alt="Aerial view of Holbox Island"
              className="w-full h-72 lg:h-96 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#071525] py-8">
      <div className="contenedor flex flex-col sm:flex-row items-center justify-between gap-4 text-white/50 text-sm">
        <span className="font-serif font-bold text-white/80 text-base">Holbox Travel</span>
        <span>Holbox, Quintana Roo, Mexico</span>
        <span>© {new Date().getFullYear()} Holbox Travel. All rights reserved.</span>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white border-t border-gray-200 shadow-xl flex">
      <a
        href="#tours"
        className="flex-1 flex flex-col items-center justify-center py-3 text-[--color-acento] text-xs font-semibold gap-1"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
        </svg>
        See Tours
      </a>
      <a
        href={wa('Hi, I would like to book a tour with Holbox Travel.')}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-3 bg-[#25D366] text-white text-xs font-semibold gap-1"
      >
        {WA_ICON}
        Book via WhatsApp
      </a>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Tours />
        <PorQue />
        <Resenas />
        <Contacto />
      </main>
      <Footer />
      <BarraMovil />
    </>
  );
}
