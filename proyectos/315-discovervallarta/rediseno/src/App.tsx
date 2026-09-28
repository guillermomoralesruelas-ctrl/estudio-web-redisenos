import { useState } from 'react';
import { negocio, wa, foto, tours, transferAddons, porQueNosotros } from './data/content';

const WA_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.95-1.418A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm4.93 13.71c-.2.56-1.17 1.07-1.62 1.14-.42.07-.97.1-1.56-.1-.36-.12-.82-.28-1.41-.55-2.48-1.07-4.1-3.57-4.23-3.74-.13-.17-1.04-1.38-1.04-2.63 0-1.25.65-1.87.88-2.12.23-.25.5-.31.67-.31.17 0 .34 0 .49.01.16.01.37-.06.58.44.21.5.72 1.76.78 1.89.06.13.1.28.02.45-.08.17-.12.28-.24.43-.12.15-.25.34-.36.45-.12.12-.24.25-.1.49.14.24.62.99 1.33 1.6.91.8 1.68 1.05 1.92 1.17.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.56-.14 1.12z" />
  </svg>
);

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur shadow-sm">
      <div className="contenedor flex h-14 items-center justify-between gap-4">
        <span className="font-serif text-xl font-bold text-[--color-tinta] tracking-tight">
          Discover Vallarta
        </span>
        <div className="flex items-center gap-2">
          <a
            href="#tours"
            className="hidden sm:inline-flex items-center rounded-full border border-[--color-acento] px-4 py-1.5 text-sm font-semibold text-[--color-acento] transition hover:bg-[--color-acento] hover:text-white"
          >
            Our Tours
          </a>
          <a
            href={wa('Hi, I would like to know more about your tours in Puerto Vallarta.')}
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
        src={foto('extra-1.webp')}
        alt="Puerto Vallarta bay and jungle coastline from above"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f3d2e]/85 via-[#0f3d2e]/30 to-transparent" />
      <div className="contenedor relative z-10">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 max-w-3xl">
          Private Tours &amp; Adventures in Puerto Vallarta
        </h1>
        <p className="text-white/90 text-lg sm:text-xl max-w-xl mb-8">
          Bilingual guides. Private groups. City tours, snorkeling, jungle hikes, airport transfers and more — tailored to your vacation.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#tours" className="btn-acento text-base px-6 py-3">
            Explore Our Tours
          </a>
          <a
            href={wa('Hi, I\'d like to learn about your tours and services in Puerto Vallarta.')}
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
            Private Guided Tours
          </h2>
          <p className="text-[--color-suave] text-lg max-w-2xl mx-auto">
            All tours are private — just your group. Tap any tour to see what is included and book directly via WhatsApp.
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
                    ? 'border-[--color-acento] shadow-xl ring-2 ring-teal-200'
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
                        <li key={d} className="rounded-full bg-teal-50 border border-teal-200 px-3 py-1 text-sm text-[--color-acento] font-medium">
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
        <p className="text-center text-[--color-suave] text-sm mt-8">
          Looking for adventure tours (ATV, zip lines, Marietas Islands, Yelapa)? Ask us via WhatsApp — we have more experiences available.
        </p>
      </div>
    </section>
  );
}

function Transfers() {
  return (
    <section className="py-20 bg-[--color-arena]">
      <div className="contenedor">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[--color-tinta] mb-4">
              Private Airport Transfers
            </h2>
            <p className="text-[--color-suave] text-lg mb-6">
              Start your Puerto Vallarta vacation the right way. We meet you at the airport, load your luggage, and get you to your hotel comfortably — no waiting, no haggling. Round trip available.
            </p>
            <div className="mb-6">
              <p className="font-semibold text-[--color-tinta] mb-3">Optional add-ons:</p>
              <ul className="space-y-2">
                {transferAddons.map((a) => (
                  <li key={a.nombre} className="flex justify-between items-center bg-white rounded-xl px-4 py-2.5 shadow-sm text-sm">
                    <span className="text-[--color-suave]">{a.nombre}</span>
                    <span className="font-semibold text-[--color-acento] ml-4 shrink-0">{a.precio}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={wa('Hi! I need an airport transfer in Puerto Vallarta. Can you give me more information and pricing?')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa text-base px-6 py-3"
            >
              {WA_ICON}
              Book Your Transfer
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img
              src={foto('shuttle-private.webp')}
              alt="Private airport transfer vehicle — Discover Vallarta"
              className="w-full h-72 lg:h-96 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function PorQue() {
  return (
    <section className="py-20 bg-white">
      <div className="contenedor">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[--color-tinta] text-center mb-12">
          Why Discover Vallarta?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {porQueNosotros.map((item) => (
            <div key={item.titulo} className="bg-[--color-fondo] rounded-2xl p-6 shadow-sm">
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
              We are available on WhatsApp every day. Reach out to check availability, customize your tour, or simply ask a question — we respond fast.
            </p>
            <div className="mb-8">
              <a
                href={wa('Hi, I would like to book a tour or transfer with Discover Vallarta.')}
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
              <p>🕐 {negocio.horario}</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img
              src={foto('home-activities.webp')}
              alt="Puerto Vallarta bay and marina"
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
    <footer className="bg-[#071a12] py-8">
      <div className="contenedor flex flex-col sm:flex-row items-center justify-between gap-4 text-white/50 text-sm">
        <span className="font-serif font-bold text-white/80 text-base">Discover Vallarta</span>
        <span>Puerto Vallarta, Jalisco, Mexico</span>
        <span>© {new Date().getFullYear()} Discover Vallarta S.A. de C.V.</span>
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
        href={wa('Hi, I would like to book a tour or transfer with Discover Vallarta.')}
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
        <Transfers />
        <PorQue />
        <Contacto />
      </main>
      <Footer />
      <BarraMovil />
    </>
  );
}
