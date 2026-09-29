import { useState } from 'react';
import { negocio, horarios, tabComer, tabBeber, foto, wa } from './data/content';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',
  name: negocio.nombre,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Lisboa 162A',
    addressLocality: 'Puerto Vallarta',
    addressRegion: 'Jalisco',
    postalCode: '48310',
    addressCountry: 'MX',
  },
  telephone: negocio.telefono,
  url: 'https://elreybarpv.com/',
  servesCuisine: ['BBQ', 'Cócteles', 'Cerveza artesanal'],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '16:00', closes: '23:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday'], opens: '11:00', closes: '23:00' },
  ],
};

type Tab = 'comer' | 'beber';

export default function App() {
  const [tab, setTab] = useState<Tab>('comer');
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Nav ─────────────────────────────────────────────── */}
      <header className="fixed top-0 inset-x-0 z-40 bg-zinc-950/90 backdrop-blur-sm border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <span className="font-serif text-amber-400 font-semibold tracking-wide text-lg">
            El Rey Bar
          </span>
          <a
            href={negocio.mapa}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-amber-400 text-sm transition-colors"
            aria-label="Ver ubicación en Google Maps"
          >
            Lisboa 162A, Versalles, PV
          </a>
        </div>
      </header>

      <main>
        {/* ── Hero ───────────────────────────────────────────── */}
        <section
          className="relative min-h-[90svh] flex flex-col justify-end"
          aria-label="Portada"
        >
          <img
            src={foto('hero.webp')}
            alt="Interior de El Rey Bar & Supper Club, Puerto Vallarta"
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
          <div className="relative z-10 max-w-5xl mx-auto px-4 pb-14 pt-24">
            <h1 className="font-serif text-4xl sm:text-6xl text-zinc-100 leading-tight mb-3">
              El Rey Bar &amp;<br />Supper Club
            </h1>
            <p className="text-zinc-300 text-lg sm:text-xl mb-8 max-w-xl">
              BBQ de autor, cocteles artesanales y la mayor selección de agave en Puerto Vallarta — en un ambiente speakeasy con patio jardín.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={wa('Hola, quiero reservar en El Rey Bar & Supper Club.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-amber-400 hover:bg-amber-300 text-zinc-900 font-semibold px-6 py-3 rounded-full transition-colors"
              >
                Reservar por WhatsApp
              </a>
              <a
                href={negocio.mapa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-zinc-500 hover:border-amber-400 text-zinc-200 hover:text-amber-400 font-semibold px-6 py-3 rounded-full transition-colors"
              >
                Cómo llegar
              </a>
            </div>
          </div>
        </section>

        {/* ── Elemento memorable: ¿Qué te trae al Rey? ────────── */}
        <section
          className="bg-zinc-900 py-16 px-4"
          aria-label="¿Qué te trae al Rey?"
        >
          <div className="max-w-5xl mx-auto">
            <p className="text-zinc-400 text-sm uppercase tracking-widest mb-2">Descubre el lugar</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-zinc-100 mb-8">
              ¿Qué te trae al Rey?
            </h2>

            {/* Tabs */}
            <div className="flex gap-3 mb-10" role="tablist" aria-label="Comer o Beber">
              {(['comer', 'beber'] as Tab[]).map((t) => (
                <button
                  key={t}
                  role="tab"
                  aria-selected={tab === t}
                  aria-controls={`panel-${t}`}
                  onClick={() => setTab(t)}
                  className={[
                    'px-6 py-2.5 rounded-full font-semibold text-sm transition-colors',
                    tab === t
                      ? 'bg-amber-400 text-zinc-900'
                      : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700',
                  ].join(' ')}
                >
                  {t === 'comer' ? 'Comer' : 'Beber'}
                </button>
              ))}
            </div>

            {/* Panel Comer */}
            <div
              id="panel-comer"
              role="tabpanel"
              aria-label="Comer"
              hidden={tab !== 'comer'}
              className="animate-none"
            >
              <div className="grid sm:grid-cols-2 gap-6 items-start">
                <img
                  src={tabComer.fotoMain}
                  alt={tabComer.fotoMainAlt}
                  className="w-full aspect-[4/3] object-cover rounded-xl"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-serif text-2xl text-zinc-100 mb-3">{tabComer.titulo}</h3>
                  <p className="text-zinc-400 mb-6 leading-relaxed">{tabComer.descripcion}</p>
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {tabComer.platos.map((p) => (
                      <figure key={p.nombre} className="space-y-1">
                        <img
                          src={p.foto}
                          alt={p.alt}
                          className="w-full aspect-square object-cover rounded-lg"
                          loading="lazy"
                        />
                        <figcaption className="text-xs text-zinc-400 text-center">{p.nombre}</figcaption>
                      </figure>
                    ))}
                  </div>
                  <a
                    href={tabComer.wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-amber-400 hover:bg-amber-300 text-zinc-900 font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
                  >
                    Reservar para cenar
                  </a>
                </div>
              </div>
            </div>

            {/* Panel Beber */}
            <div
              id="panel-beber"
              role="tabpanel"
              aria-label="Beber"
              hidden={tab !== 'beber'}
            >
              <div className="grid sm:grid-cols-2 gap-6 items-start">
                <div className="grid grid-cols-2 gap-2">
                  <img
                    src={tabBeber.fotos[0].src}
                    alt={tabBeber.fotos[0].alt}
                    className="col-span-2 w-full aspect-[16/9] object-cover rounded-xl"
                    loading="lazy"
                  />
                  <img
                    src={tabBeber.fotos[1].src}
                    alt={tabBeber.fotos[1].alt}
                    className="w-full aspect-square object-cover rounded-xl"
                    loading="lazy"
                  />
                  <img
                    src={tabBeber.fotos[2].src}
                    alt={tabBeber.fotos[2].alt}
                    className="w-full aspect-square object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-zinc-100 mb-3">{tabBeber.titulo}</h3>
                  <p className="text-zinc-400 mb-6 leading-relaxed">{tabBeber.descripcion}</p>
                  <a
                    href={tabBeber.wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-amber-400 hover:bg-amber-300 text-zinc-900 font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
                  >
                    Reservar en el bar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Cata de tequila ─────────────────────────────────── */}
        <section className="bg-zinc-950 py-16 px-4 border-t border-zinc-800" aria-label="Cata de tequila">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-zinc-100 mb-2">
                Cata privada de tequila
              </h2>
              <p className="text-zinc-400 max-w-lg">
                Una de las selecciones de agave más completas de Puerto Vallarta. Reserva una experiencia privada para tu grupo — también disponible para clases de cocina y fiestas.
              </p>
            </div>
            <a
              href={wa('Hola, me gustaría reservar una cata de tequila en El Rey Bar.')}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-block border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-zinc-900 font-semibold px-6 py-3 rounded-full transition-colors text-center"
            >
              Reservar cata
            </a>
          </div>
        </section>

        {/* ── Horarios y ubicación ─────────────────────────────── */}
        <section className="bg-zinc-900 py-16 px-4 border-t border-zinc-800" aria-label="Horarios y ubicación">
          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-10">
            <div>
              <h2 className="font-serif text-2xl text-zinc-100 mb-6">Horarios</h2>
              <table className="w-full text-sm text-zinc-300 border-collapse">
                <tbody>
                  {horarios.map(({ dia, horas }) => (
                    <tr key={dia} className="border-b border-zinc-800">
                      <td className="py-2 pr-4 font-medium text-zinc-200">{dia}</td>
                      <td className={`py-2 ${horas === 'Cerrado' ? 'text-zinc-500' : 'text-amber-400'}`}>
                        {horas}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-zinc-500 text-xs mt-3">Pregunta por el Brunch y el Day Pass de alberca los domingos.</p>
            </div>
            <div>
              <h2 className="font-serif text-2xl text-zinc-100 mb-6">Cómo llegar</h2>
              <address className="not-italic text-zinc-400 mb-4 leading-relaxed">
                {negocio.direccion}
              </address>
              <a
                href={negocio.mapa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
              >
                Abrir en Google Maps
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-8 px-4 text-center text-zinc-500 text-sm">
        <p className="font-serif text-amber-400 font-semibold mb-1">El Rey Bar &amp; Supper Club</p>
        <p>Lisboa 162A, Versalles, Puerto Vallarta, Jalisco</p>
        <p className="mt-1">
          <a href={`tel:${negocio.telefono}`} className="hover:text-amber-400 transition-colors">
            +52 322 115 2881
          </a>
        </p>
      </footer>

      {/* ── Barra fija móvil ────────────────────────────────── */}
      <div className="fixed bottom-0 inset-x-0 z-50 sm:hidden bg-zinc-900 border-t border-zinc-800 p-3">
        <a
          href={wa('Hola, quiero reservar en El Rey Bar & Supper Club.')}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-amber-400 hover:bg-amber-300 text-zinc-900 font-semibold py-3 rounded-full text-center text-sm transition-colors"
        >
          Reservar por WhatsApp
        </a>
      </div>
    </>
  );
}
