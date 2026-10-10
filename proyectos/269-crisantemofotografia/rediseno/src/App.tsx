import { useState } from 'react';
import { negocio, coberturas, ajusteFinDeSemana, notasSesion, paquetes, notasPaquete, ampliaciones, extras, galeria } from './data/content';
import fotos from './data/fotos.json';

const medidas = fotos as unknown as Record<string, [number, number]>;
const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;
const tel = `tel:+${negocio.telefonoE164}`;
const pesos = (n: number) => '$' + n.toLocaleString('es-MX');

function Foto({ n, alt, className = '', eager = false }: { n: string; alt: string; className?: string; eager?: boolean }) {
  const [w, h] = medidas[n];
  return <img src={`./${n}.webp`} width={w} height={h} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" className={className} />;
}

function Icono({ d, className = 'h-5 w-5' }: { d: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}
const iTel = 'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z';
const iChat = 'M21 11.5a8.4 8.4 0 0 1-9 8.4 8.6 8.6 0 0 1-3.8-.9L3 21l1.9-5.1A8.4 8.4 0 0 1 3.5 11.5 8.5 8.5 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5Z';
const iPin = 'M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z';

// Elemento memorable: las ampliaciones dibujadas a escala sobre una pared con un sillón de referencia.
function EnTuPared() {
  const [talla, setTalla] = useState('20x24');
  const a = ampliaciones.find((x) => x.id === talla)!;
  const px = 4; // 1 pulgada = 4 unidades del dibujo
  const sofa = 78 * px; // sillón de referencia de unos 2 m (78″)
  const W = 640;
  const marco = 1.5 * px;
  const fw = a.ancho * px + marco * 2;
  const fh = a.alto * px + marco * 2;
  const piso = 420;
  const top = piso - 34 * px - 10 * px - fh; // el cuadro cuelga unos 25 cm arriba del respaldo
  return (
    <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
      <div className="overflow-hidden rounded-2xl bg-polvo">
        <svg viewBox={`0 50 ${W} 390`} className="w-full" role="img" aria-label={`Ampliación de ${a.ancho} por ${a.alto} pulgadas a escala sobre un sillón de unos dos metros`}>
          <defs>
            <clipPath id="foto"><rect x={(W - a.ancho * px) / 2} y={top + marco} width={a.ancho * px} height={a.alto * px} /></clipPath>
          </defs>
          <rect x="0" y={piso} width={W} height="20" fill="#E3D3CC" />
          <g style={{ transition: 'all .4s' }}>
            <rect x={(W - fw) / 2} y={top} width={fw} height={fh} fill="#C9A46A" />
            <image href="./lancha-estanque.webp" x={(W - a.alto * px * 1.33) / 2} y={top + marco} width={a.alto * px * 1.33} height={a.alto * px} preserveAspectRatio="xMidYMid slice" clipPath="url(#foto)" />
          </g>
          {/* sillón de referencia */}
          <g fill="#5E6F55">
            <rect x={(W - sofa) / 2} y={piso - 34 * px} width={sofa} height={20 * px} rx="16" />
            <rect x={(W - sofa) / 2 - 14} y={piso - 22 * px} width="34" height={18 * px} rx="12" />
            <rect x={(W + sofa) / 2 - 20} y={piso - 22 * px} width="34" height={18 * px} rx="12" />
            <rect x={(W - sofa) / 2 + 10} y={piso - 16 * px} width={sofa - 20} height={12 * px} rx="10" fill="#6F8165" />
            <rect x={(W - sofa) / 2 + 20} y={piso - 4 * px} width="8" height={4 * px} fill="#3B2C30" />
            <rect x={(W + sofa) / 2 - 28} y={piso - 4 * px} width="8" height={4 * px} fill="#3B2C30" />
          </g>
        </svg>
      </div>
      <div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Tamaño de la ampliación">
          {ampliaciones.map((x) => (
            <button key={x.id} type="button" className="chip" aria-pressed={talla === x.id} onClick={() => setTalla(x.id)}>{x.ancho}×{x.alto}″</button>
          ))}
        </div>
        <p className="mt-6 font-[family-name:var(--font-display)] text-5xl text-vino">{pesos(a.precio)}</p>
        <p className="mt-2 text-gris">
          Ampliación de {a.ancho}×{a.alto}″ (unos {Math.round(a.ancho * 2.54)}×{Math.round(a.alto * 2.54)} cm), montada, texturizada y enmarcada.
          Se agrega a cualquier paquete integral o de sesión.
        </p>
        <a href={wa(`Hola Luis, me interesa una ampliación de ${a.ancho}x${a.alto}" (${pesos(a.precio)}). ¿Me das informes?`)} className="btn-vino mt-6" target="_blank" rel="noopener">
          <Icono d={iChat} /> Pedir esta ampliación
        </a>
        <p className="mt-3 text-xs text-gris">El sillón mide unos 2 metros, como referencia del tamaño.</p>
      </div>
    </div>
  );
}

export default function App() {
  const [finde, setFinde] = useState(false);

  return (
    <>
      <a href="#sesiones" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2">Saltar a precios</a>

      <header className="sticky top-0 z-40 bg-ciruela/95 text-crema backdrop-blur">
        <div className="contenedor flex h-16 items-center justify-between gap-4">
          <a href="#inicio" className="flex items-center gap-2">
            <img src="./logo.png" width={400} height={400} alt="" className="h-9 w-9" />
            <span className="font-[family-name:var(--font-display)] text-xl tracking-[0.12em]">CRISANTEMO</span>
          </a>
          <nav aria-label="Principal" className="hidden items-center gap-7 text-sm font-semibold md:flex">
            <a href="#galeria" className="hover:text-rosa">Galería</a>
            <a href="#sesiones" className="hover:text-rosa">Sesiones</a>
            <a href="#paquetes" className="hover:text-rosa">Paquetes</a>
            <a href="#pared" className="hover:text-rosa">Ampliaciones</a>
            <a href="#contacto" className="hover:text-rosa">Contacto</a>
          </nav>
          <a href={wa('Hola Luis, quiero informes de una sesión.')} className="btn-rosa px-4 py-2.5 text-sm" target="_blank" rel="noopener"><Icono d={iChat} className="h-4 w-4" /> WhatsApp</a>
        </div>
      </header>

      <main id="inicio">
        <section className="bg-ciruela text-crema">
          <div className="contenedor grid items-center gap-10 pb-16 pt-10 md:grid-cols-[1fr_1.1fr] md:pb-24 md:pt-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-rosa">Monterrey · por {negocio.fotografo}</p>
              <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl">Retratos y eventos que <em className="text-rosa">se quedan</em> en la pared.</h1>
              <p className="mt-6 max-w-lg text-lg text-crema/85">
                Sesiones fotográficas en locación y paquetes con foto y video para tu evento en el área metropolitana de Monterrey. Precios a la vista.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#sesiones" className="btn-rosa">Ver precios</a>
                <a href={wa('Hola Luis, quiero separar una fecha.')} className="btn-linea" target="_blank" rel="noopener"><Icono d={iChat} /> Separar una fecha</a>
              </div>
            </div>
            <figure className="relative">
              <Foto n="lancha-estanque" alt={galeria[0].alt} eager className="aspect-[4/3] w-full rounded-t-[12rem] object-cover" />
              <img src="./logo.png" width={400} height={400} alt="" className="absolute -bottom-8 -left-6 hidden h-32 w-32 opacity-80 md:block" />
            </figure>
          </div>
        </section>

        <section id="galeria" className="contenedor py-16 md:py-24">
          <p className="eyebrow">Galería</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Locaciones, luz y vestido</h2>
          <div className="mt-10 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
            {galeria.slice(1).map((g) => (
              <Foto key={g.foto} n={g.foto} alt={g.alt} className="w-full break-inside-avoid rounded-lg" />
            ))}
          </div>
        </section>

        <section id="sesiones" className="bg-polvo py-16 md:py-24">
          <div className="contenedor">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow">Sesiones fotográficas</p>
                <h2 className="mt-3 text-4xl sm:text-5xl">Tres coberturas en locación</h2>
                <p className="mt-3 max-w-xl text-gris">En un parque, una zona urbana, el interior de un edificio o una nave industrial: tú eliges. Entrega por galería en la nube.</p>
              </div>
              <div role="group" aria-label="Día de la sesión" className="flex gap-2">
                <button type="button" className="chip" aria-pressed={!finde} onClick={() => setFinde(false)}>Lunes a jueves</button>
                <button type="button" className="chip" aria-pressed={finde} onClick={() => setFinde(true)}>Fin de semana</button>
              </div>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {coberturas.map((c, i) => (
                <article key={c.id} className={`flex flex-col rounded-2xl p-7 ${i === 1 ? 'bg-ciruela text-crema' : 'bg-crema'}`}>
                  <h3 className="text-3xl">{c.nombre}</h3>
                  <p className={`mt-4 font-[family-name:var(--font-display)] text-5xl ${i === 1 ? 'text-rosa' : 'text-vino'}`}>{pesos(c.precio + (finde ? ajusteFinDeSemana : 0))}</p>
                  <p className={`mt-1 text-sm ${i === 1 ? 'text-crema/75' : 'text-gris'}`}>{finde ? `incluye $${ajusteFinDeSemana} de fin de semana` : 'de lunes a jueves'}</p>
                  <ul className="mt-6 grid gap-2">
                    <li>{c.minutos < 60 ? `${c.minutos} minutos` : c.minutos === 60 ? '1 hora' : '1 hora y media'} en locación</li>
                    <li>Mínimo {c.fotos} fotos con retoque de luz y color</li>
                  </ul>
                  <a href={wa(`Hola Luis, me interesa la cobertura ${c.nombre} (${pesos(c.precio + (finde ? ajusteFinDeSemana : 0))}, ${finde ? 'fin de semana' : 'entre semana'}). ¿Qué fechas tienes?`)} className={`${i === 1 ? 'btn-rosa' : 'btn-vino'} mt-auto self-start`} style={{ marginTop: '2rem' }} target="_blank" rel="noopener">Pedir fecha</a>
                </article>
              ))}
            </div>
            <ul className="mt-8 grid gap-2 text-sm text-gris md:grid-cols-2">
              {notasSesion.map((n) => <li key={n} className="flex gap-2"><span aria-hidden="true" className="text-vino">✿</span>{n}</li>)}
            </ul>
          </div>
        </section>

        <section id="paquetes" className="contenedor py-16 md:py-24">
          <p className="eyebrow">Paquetes integrales</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Dos sesiones, fotoclip y tu evento con foto y video</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {paquetes.map((p) => (
              <article key={p.id} className="flex flex-col rounded-2xl border border-tinta/10 bg-white p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-3xl">{p.nombre}</h3>
                  <p className="font-[family-name:var(--font-display)] text-4xl text-vino">{pesos(p.precio)}</p>
                </div>
                <ul className="mt-6 grid gap-3">
                  {p.incluye.map((x) => <li key={x} className="flex gap-3"><span aria-hidden="true" className="mt-0.5 text-vino">✿</span>{x}</li>)}
                </ul>
                <a href={wa(`Hola Luis, me interesa el paquete ${p.nombre.toLowerCase()} (${pesos(p.precio)}). ¿Tienes disponible mi fecha?`)} className="btn-vino mt-8 self-start" target="_blank" rel="noopener">Preguntar por mi fecha</a>
              </article>
            ))}
          </div>
          <ul className="mt-8 grid gap-2 text-sm text-gris md:grid-cols-2">
            {notasPaquete.map((n) => <li key={n} className="flex gap-2"><span aria-hidden="true" className="text-vino">✿</span>{n}</li>)}
          </ul>
        </section>

        <section id="pared" className="bg-crema pb-16 md:pb-24">
          <div className="contenedor">
            <p className="eyebrow">Ampliaciones</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">¿Qué tan grande en tu pared?</h2>
            <p className="mt-3 mb-10 max-w-2xl text-gris">Elige un tamaño y míralo a escala sobre un sillón. Todas van montadas, texturizadas y enmarcadas.</p>
            <EnTuPared />
          </div>
        </section>

        <section className="bg-polvo py-16 md:py-20">
          <div className="contenedor">
            <h2 className="text-3xl sm:text-4xl">Extras para tu paquete</h2>
            <p className="mt-2 text-sm text-gris">Precios válidos al contratar un paquete integral o de sesión.</p>
            <dl className="mt-8 grid gap-x-10 md:grid-cols-2">
              {extras.map((e) => (
                <div key={e.nombre} className="flex items-baseline gap-3 border-b border-tinta/10 py-3">
                  <dt className="flex-1">{e.nombre}</dt>
                  <dd className="font-semibold">{pesos(e.precio)}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="contacto" className="bg-ciruela py-16 text-crema md:py-24">
          <div className="contenedor grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-rosa">Contacto</p>
              <h2 className="mt-3 text-4xl sm:text-5xl">Platiquemos tu sesión</h2>
              <p className="mt-4 text-crema/85">Atendemos por mensaje, llamada o videollamada. No tenemos oficina abierta al público: así podemos ofrecer mejores precios.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={wa('Hola Luis, quiero informes de una sesión.')} className="btn-rosa" target="_blank" rel="noopener"><Icono d={iChat} /> WhatsApp</a>
                <a href={tel} className="btn-linea"><Icono d={iTel} /> {negocio.telefono}</a>
              </div>
            </div>
            <dl className="grid content-start gap-5">
              <div><dt className="text-sm font-bold uppercase tracking-wider text-rosa">Punto de reunión</dt><dd className="mt-1">{negocio.puntoDeReunion}, {negocio.ciudad}<br /><a href={negocio.mapa} className="underline underline-offset-4" target="_blank" rel="noopener">Ver en Google Maps</a></dd></div>
              <div><dt className="text-sm font-bold uppercase tracking-wider text-rosa">Correo</dt><dd className="mt-1"><a href={`mailto:${negocio.correo}`} className="underline underline-offset-4">{negocio.correo}</a></dd></div>
              <div><dt className="text-sm font-bold uppercase tracking-wider text-rosa">Redes</dt><dd className="mt-1 flex flex-wrap gap-x-4">{negocio.redes.map((r) => <a key={r.nombre} href={r.url} className="underline underline-offset-4" target="_blank" rel="noopener">{r.nombre}</a>)}</dd></div>
            </dl>
          </div>
        </section>
      </main>

      <footer className="bg-ciruela pb-24 text-sm text-crema/70 md:pb-8">
        <div className="contenedor flex flex-col justify-between gap-2 border-t border-white/10 pt-6 sm:flex-row">
          <p>© {new Date().getFullYear()} {negocio.nombre} · {negocio.fotografo}</p>
          <p>Precios sujetos a cambios sin previo aviso.</p>
        </div>
      </footer>

      <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/10 bg-ciruela text-sm font-semibold text-crema md:hidden">
        <a href={tel} className="flex flex-col items-center gap-1 py-2.5"><Icono d={iTel} /> Llamar</a>
        <a href={wa('Hola Luis, quiero informes de una sesión.')} className="flex flex-col items-center gap-1 bg-rosa py-2.5 text-ciruela" target="_blank" rel="noopener"><Icono d={iChat} /> WhatsApp</a>
        <a href={negocio.mapa} className="flex flex-col items-center gap-1 py-2.5" target="_blank" rel="noopener"><Icono d={iPin} /> Reunión</a>
      </nav>
    </>
  );
}
