import { useState } from 'react';
import { negocio, wa, foto, planes, coaches, porQueFC4, sedes } from './data/content';

const MSG = 'Hola, quiero más información sobre las clases de FC4 Boxing Gym';

export default function App() {
  const [coachActivo, setCoachActivo] = useState<number | null>(null);
  const [sedeActiva, setSedeActiva] = useState<0 | 1>(0);

  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SportsActivityLocation',
        name: negocio.nombre,
        description: 'Clases de boxeo y entrenamiento funcional en CDMX con dos sedes: Pánuco y Anzures.',
        address: [
          { '@type': 'PostalAddress', addressLocality: 'Pánuco, CDMX', addressCountry: 'MX' },
          { '@type': 'PostalAddress', addressLocality: 'Anzures, CDMX', addressCountry: 'MX' },
        ],
        telephone: '+525525601504',
        url: 'https://fc4boxinggym.com',
        sameAs: [negocio.instagram, negocio.facebook],
      })}} />

      {/* Navbar fijo móvil */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-red-600 flex md:hidden">
        <a href={wa('1', MSG)} className="flex-1 py-3 text-center text-white text-sm font-semibold">
          📍 Pánuco
        </a>
        <a href={wa('2', MSG)} className="flex-1 py-3 text-center text-white text-sm font-semibold border-l border-red-600">
          📍 Anzures
        </a>
      </nav>

      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src={foto('03/blonde-girl-has-a-training-with-experienced-boxer-2025-01-25-14-01-54-utc_3-scaled.jpg')}
          alt="Entrenamiento de boxeo en FC4 Boxing Gym"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.45)' }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <p className="text-red-500 font-bold tracking-widest uppercase text-sm mb-3">Ciudad de México</p>
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-none mb-4 tracking-tight">
            FC4 Boxing Gym
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-xl mx-auto">
            Golpea fuerte, crece más, vive FC4. Boxeo y entrenamiento funcional con coaches certificados.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={wa('1', MSG)} className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full transition-colors text-lg">
              Agendar clase — Pánuco
            </a>
            <a href={wa('2', MSG)} className="border-2 border-white text-white hover:bg-white hover:text-black font-bold py-4 px-8 rounded-full transition-colors text-lg">
              Agendar clase — Anzures
            </a>
          </div>
        </div>
      </section>

      {/* Sobre FC4 */}
      <section className="py-20 bg-zinc-900 text-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">Sobre FC4 Boxing Gym</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              En FC4 Boxing Gym combinamos boxeo y entrenamiento funcional. Nuestras clases en CDMX están diseñadas para que superes tus límites con entrenadores expertos e instalaciones de primera.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Más que un entrenamiento, en FC4 vivimos el boxeo como un estilo de vida. Creemos en la disciplina, la constancia y la resiliencia. Cada golpe te hace más fuerte.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={foto('03/SaveClip.App_469164792_17915011032034000_2065649853860948252_n_V2.jpg')} alt="Entrenamiento FC4" className="rounded-xl w-full h-48 object-cover" />
            <img src={foto('03/SaveClip.App_469164792_17915011032034000_2065649853860948252_n-2.jpg')} alt="Boxeo funcional FC4" className="rounded-xl w-full h-48 object-cover mt-6" />
          </div>
        </div>
      </section>

      {/* Planes */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-3">Planes y Membresías</h2>
          <p className="text-gray-400 mb-10">Inscripción: <strong className="text-red-500">$500 MXN</strong> — ¡<strong className="text-white">GRATIS</strong> si te inscribes el día de tu clase muestra!</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {planes.map((p, i) => (
              <div key={i} className={`border rounded-2xl p-8 ${i === 2 ? 'border-red-600 bg-red-600/10' : 'border-zinc-700'}`}>
                <p className="text-2xl font-black text-red-500 mb-1">{p.precio}</p>
                <p className="text-lg font-bold mb-6">{p.nombre}</p>
                <a href={wa('1', `Hola, me interesa el plan: ${p.nombre}`)} className="block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition-colors">
                  Agenda tu clase
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches — elemento memorable */}
      <section className="py-20 bg-zinc-900 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-center mb-3">Nuestro Equipo de Coaches</h2>
          <p className="text-gray-400 text-center mb-10">Toca cada coach para ver sus certificaciones y credenciales.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {coaches.map((c, i) => (
              <button
                key={i}
                onClick={() => setCoachActivo(coachActivo === i ? null : i)}
                className="text-left group"
                aria-expanded={coachActivo === i}
              >
                <div className="relative overflow-hidden rounded-xl mb-3">
                  <img src={c.img} alt={`Coach ${c.nombre} — FC4 Boxing Gym ${c.sede}`} className="w-full h-72 object-cover object-top group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <p className="font-black text-white text-xl">{c.nombre}</p>
                    <p className="text-red-400 text-sm">📍 {c.sede}</p>
                  </div>
                </div>
                {coachActivo === i && (
                  <ul className="bg-zinc-800 rounded-xl p-4 space-y-1 text-sm text-gray-300">
                    {c.creds.map((cr, j) => <li key={j} className="flex gap-2"><span className="text-red-500 flex-shrink-0">✓</span>{cr}</li>)}
                  </ul>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué FC4 */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black uppercase mb-10">¿Por qué elegir FC4 Boxing Gym?</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {porQueFC4.map((r, i) => (
              <div key={i} className="p-6 border border-zinc-700 rounded-2xl">
                <p className="text-2xl mb-3">🥊</p>
                <h3 className="font-bold text-lg mb-2">{r.titulo}</h3>
                <p className="text-gray-400 text-sm">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sedes y mapas */}
      <section className="py-20 bg-zinc-900 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-center mb-10">Nuestras Sedes</h2>
          <div className="flex gap-4 justify-center mb-8">
            {sedes.map((s, i) => (
              <button
                key={i}
                onClick={() => setSedeActiva(i as 0 | 1)}
                className={`px-6 py-2 rounded-full font-bold border transition-colors ${sedeActiva === i ? 'bg-red-600 border-red-600 text-white' : 'border-zinc-600 text-gray-400 hover:border-white hover:text-white'}`}
              >
                {s.nombre}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-black mb-4">FC4 {sedes[sedeActiva].nombre}</h3>
              <a href={wa(sedes[sedeActiva].waKey, `Hola, quiero información sobre la sede ${sedes[sedeActiva].nombre}`)} className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors mb-4">
                Contactar esta sede
              </a>
            </div>
            <iframe
              src={sedes[sedeActiva].mapaEmbed}
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '0.75rem' }}
              allowFullScreen
              loading="lazy"
              title={`Ubicación FC4 Boxing Gym ${sedes[sedeActiva].nombre}`}
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-500 py-10 text-center text-sm pb-20 md:pb-10">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-white font-black text-xl mb-4">{negocio.nombre}</p>
          <div className="flex justify-center gap-6 mb-4">
            <a href={negocio.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href={negocio.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
          </div>
          <p>© {new Date().getFullYear()} FC4 Boxing Gym · Ciudad de México</p>
        </div>
      </footer>
    </>
  );
}
