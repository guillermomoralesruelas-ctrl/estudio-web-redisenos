import { useState } from 'react';
import { acompanantes, cursos, estudio, paquetes, wa } from './data/content';
import fotos from './data/fotos.json';

const medidas = fotos as unknown as Record<string, [number, number]>;
const foto = (n: string) => ({ src: `./${n}.webp`, width: medidas[n][0], height: medidas[n][1] });
const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;

function Icono({ d, className = 'size-5' }: { d: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}
const iWhats = 'M3 21l1.7-5A8.5 8.5 0 1 1 8 19.3L3 21zM9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.8-2.2-1-1 1a4.5 4.5 0 0 1-2.5-2.5l1-1-1-2.2L9 8.5z';
const iTel = 'M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1-2-2';
const iMapa = 'M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z';

// Silueta de busto con peinado; la festejada lleva velo o tiara.
function Figura({ principal, tipo }: { principal?: boolean; tipo?: 'novia' | 'quince' }) {
  return (
    <svg viewBox="0 0 40 56" className={principal ? 'h-24 w-auto' : 'h-14 w-auto'} aria-hidden="true">
      {principal && tipo === 'novia' && <path d="M8 16 Q20 -2 32 16 L38 52 L2 52 Z" fill="var(--color-polvo)" opacity="0.9" />}
      <ellipse cx="20" cy="17" rx="9" ry="10" fill={principal ? 'var(--color-rubor)' : 'var(--color-labial)'} />
      <path d="M11 16 Q12 5 20 5 Q29 5 29 16 Q27 10 20 10 Q13 10 11 16 Z" fill="var(--color-vino)" />
      <path d="M6 54 Q6 32 20 30 Q34 32 34 54 Z" fill={principal ? 'var(--color-rubor)' : 'var(--color-labial)'} />
      {principal && tipo === 'quince' && <path d="M13 6 L15 1 L18 5 L20 0 L22 5 L25 1 L27 6 Z" fill="var(--color-oro)" />}
    </svg>
  );
}

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-vino/10 bg-white/95 backdrop-blur">
      <div className="contenedor flex h-18 items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0 leading-none">
          <span className="font-titulo text-2xl italic">Dulce Vega</span>
          <span className="block text-sm text-gris">Make up Artist Studio</span>
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-7 font-medium md:flex">
          <a href="#corte" className="hover:text-labial">Tu corte de honor</a>
          <a href="#paquetes" className="hover:text-labial">Paquetes</a>
          <a href="#cursos" className="hover:text-labial">Cursos</a>
          <a href="#contacto" className="hover:text-labial">Contacto</a>
        </nav>
        <a href={wa('Hola, quiero información de sus paquetes de maquillaje y peinado.')} className="boton min-h-11 bg-labial px-5 text-white hover:bg-vino">
          <Icono d={iWhats} />
          WhatsApp
        </a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="bg-polvo">
      <div className="contenedor grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.05fr_1fr] lg:py-20">
        <div>
          <p className="font-titulo text-xl italic text-labial">{estudio.lema}</p>
          <h1 className="titulo mt-3 text-5xl sm:text-6xl lg:text-7xl">Maquillaje y peinado para novias, quinceañeras y eventos en Guadalajara</h1>
          <p className="mt-5 max-w-xl text-lg text-gris">Estudio y academia con {estudio.anios} en Chapalita. Tu prueba, tu día y el de las mujeres que te acompañan, con su equipo de Masters DV.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#corte" className="boton bg-vino text-white hover:bg-labial">Arma tu corte de honor</a>
            <a href="#cursos" className="boton border-2 border-vino/20 hover:border-vino">Ver cursos</a>
          </div>
        </div>
        <img {...foto('f-novia')} alt="Novia con peinado recogido, tocado de cristales y maquillaje natural, de perfil" className="aspect-[4/5] w-full rounded-[2rem] object-cover" fetchPriority="high" />
      </div>
    </section>
  );
}

function Corte() {
  const [tipo, setTipo] = useState<'novia' | 'quince'>('novia');
  const [cuantas, setCuantas] = useState<Record<string, number>>({ mama: 1, madrina: 0, damas: 2, otras: 0 });
  const principal = tipo === 'novia' ? paquetes.novia : paquetes.quince;
  const total = Object.values(cuantas).reduce((a, b) => a + b, 0);
  const suma = principal.precio + total * paquetes.social.precio;
  const cambiar = (id: string, d: number) => setCuantas((c) => ({ ...c, [id]: Math.max(0, Math.min(12, c[id] + d)) }));

  const detalle = acompanantes.filter((a) => cuantas[a.id] > 0).map((a) => `${cuantas[a.id]} ${a.nombre.toLowerCase()}`).join(', ');
  const mensaje = `Hola, quiero cotizar el ${principal.nombre}${total ? ` y ${total} ${total === 1 ? 'Paquete Social' : 'Paquetes Sociales'} para ${detalle}` : ''}. ¿Tienen disponible mi fecha?`;

  return (
    <section id="corte" className="py-16 sm:py-24">
      <div className="contenedor">
        <div className="max-w-3xl">
          <h2 className="titulo text-4xl sm:text-5xl">Tu corte de honor</h2>
          <p className="mt-4 text-lg text-gris">Su equipo puede maquillar y peinar a las mujeres importantes de tu gran día, sin importar cuántas sean. Súmalas y mira quiénes se arreglan contigo y cuánto es con sus precios.</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start">
          <div className="space-y-6">
            <div role="radiogroup" aria-label="¿Quién es la festejada?" className="inline-flex rounded-full bg-polvo p-1">
              {(['novia', 'quince'] as const).map((t) => (
                <button key={t} type="button" role="radio" aria-checked={tipo === t} onClick={() => setTipo(t)} className={`min-h-11 rounded-full px-5 font-semibold ${tipo === t ? 'bg-vino text-white' : ''}`}>
                  {t === 'novia' ? 'Novia' : 'Quinceañera'}
                </button>
              ))}
            </div>
            <ul className="divide-y divide-vino/10 rounded-3xl border-2 border-vino/10 px-5">
              {acompanantes.map((a) => (
                <li key={a.id} className="flex items-center justify-between gap-4 py-3">
                  <span className="font-semibold">{a.nombre}</span>
                  <span className="flex items-center gap-3">
                    <button type="button" onClick={() => cambiar(a.id, -1)} aria-label={`Quitar ${a.nombre}`} className="grid size-10 place-items-center rounded-full border-2 border-vino/20 text-xl hover:border-vino">−</button>
                    <span className="w-6 text-center font-titulo text-2xl" aria-live="polite">{cuantas[a.id]}</span>
                    <button type="button" onClick={() => cambiar(a.id, 1)} aria-label={`Agregar ${a.nombre}`} className="grid size-10 place-items-center rounded-full border-2 border-vino/20 text-xl hover:border-vino">+</button>
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gris">Cada acompañante con el {paquetes.social.nombre}: {paquetes.social.incluye} Servicio a domicilio y foráneo: cotízalo con ellas.</p>
          </div>

          <aside className="rounded-[2rem] bg-vino p-6 text-white sm:p-8 lg:sticky lg:top-24" aria-live="polite">
            <div className="flex flex-wrap items-end gap-1.5" role="img" aria-label={`${tipo === 'novia' ? 'La novia' : 'La quinceañera'} y ${total} acompañantes`}>
              <Figura principal tipo={tipo} />
              {Array.from({ length: total }, (_, i) => <Figura key={i} />)}
            </div>
            <dl className="mt-6 space-y-3">
              <div className="flex justify-between gap-4 border-b border-white/15 pb-3">
                <dt>{principal.nombre}</dt>
                <dd className="font-semibold">{pesos(principal.precio)}</dd>
              </div>
              {total > 0 && (
                <div className="flex justify-between gap-4 border-b border-white/15 pb-3">
                  <dt>{paquetes.social.nombre} × {total}<span className="block text-sm text-rubor">{detalle}</span></dt>
                  <dd className="font-semibold">{pesos(total * paquetes.social.precio)}</dd>
                </div>
              )}
              <div className="flex items-baseline justify-between gap-4 pt-1">
                <dt className="font-titulo text-xl">{1 + total} {1 + total === 1 ? 'mujer' : 'mujeres'} listas</dt>
                <dd className="titulo text-4xl text-rubor">{pesos(suma)}</dd>
              </div>
            </dl>
            <p className="mt-3 text-sm text-rubor">{principal.incluye}</p>
            <p className="mt-2 text-sm text-white/70">Precios publicados en su lista de precios; el estudio confirma fecha y precio final.</p>
            <a href={wa(mensaje)} className="boton mt-6 w-full bg-labial text-white hover:bg-[#7e2444]">
              <Icono d={iWhats} />
              Cotizar mi fecha por WhatsApp
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Paquetes() {
  return (
    <section id="paquetes" className="bg-polvo py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="titulo text-4xl sm:text-5xl">Sus paquetes</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[paquetes.novia, paquetes.quince, paquetes.social].map((p) => (
              <li key={p.nombre} className="rounded-3xl bg-white p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="titulo text-2xl">{p.nombre}</h3>
                  <p className="titulo text-3xl text-labial">{pesos(p.precio)}</p>
                </div>
                <p className="mt-2 text-gris">{p.incluye}</p>
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <img {...foto('f-noche')} alt="Maquillaje de noche con delineado ahumado y labios rojos" className="aspect-square w-full rounded-3xl object-cover" loading="lazy" />
            <img {...foto('f-color')} alt="Maquillaje de color en fucsia con cabello afro, sobre fondo verde" className="aspect-square w-full rounded-3xl object-cover" loading="lazy" />
            <img {...foto('f-novias')} alt="Dos novias maquilladas y peinadas en un salón de muros azules y molduras doradas" className="col-span-2 aspect-[16/7] w-full rounded-3xl object-cover" loading="lazy" />
          </div>
        </div>
        <p className="mt-8 text-gris">También maquillaje y peinado para producciones: han trabajado con {estudio.marcas.join(', ')}.</p>
      </div>
    </section>
  );
}

function Cursos() {
  return (
    <section id="cursos" className="py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="titulo text-4xl sm:text-5xl">Aprende con ellas</h2>
          <p className="mt-4 text-lg text-gris">Academia de maquillaje y peinado para ti o para emprender. Además, su propia línea de cosméticos.</p>
          <div className="mt-6 grid grid-cols-3 gap-3">
            <img {...foto('p-labiales')} alt="Labiales indelebles Dulce Vega en varios tonos" className="aspect-square w-full rounded-2xl object-cover" loading="lazy" />
            <img {...foto('p-crema')} alt="Maquillaje en crema Dulce Vega en lata" className="aspect-square w-full rounded-2xl object-cover" loading="lazy" />
            <img {...foto('p-fijador')} alt="Fijador para maquillaje Dulce Vega en atomizador" className="aspect-square w-full rounded-2xl object-cover" loading="lazy" />
          </div>
          <a href={estudio.tienda} className="mt-4 inline-block font-semibold text-labial underline underline-offset-2">Ver su tienda en línea</a>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {cursos.map((c) => (
            <li key={c.nombre}>
              <a href={c.url} className="block h-full rounded-3xl border-2 border-vino/10 p-5 hover:border-labial">
                <h3 className="titulo text-2xl">{c.nombre}</h3>
                <p className="mt-1 text-gris">{c.texto}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="bg-vino py-16 pb-28 text-white sm:py-24 md:pb-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="titulo text-4xl sm:text-5xl">Visita el estudio</h2>
          <address className="mt-5 text-lg not-italic">{estudio.direccion}</address>
          <a href={estudio.mapa} className="boton mt-5 bg-white text-vino hover:bg-polvo">
            <Icono d={iMapa} />
            Cómo llegar
          </a>
          <dl className="mt-8">
            {estudio.horario.map(([d, h]) => (
              <div key={d} className="flex max-w-md justify-between gap-4 border-b border-white/15 py-1.5">
                <dt>{d}</dt>
                <dd className="font-semibold">{h}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <img {...foto('f-evento')} alt="Dulce Vega en la alfombra del evento México en el Alma" className="aspect-[3/2] w-full rounded-3xl object-cover" loading="lazy" />
          <ul className="mt-6 space-y-3">
            <li><a href={wa('Hola, quiero información de sus paquetes de maquillaje y peinado.')} className="flex items-center gap-3 font-semibold text-rubor"><Icono d={iWhats} /> WhatsApp {estudio.whatsapp.texto}</a></li>
            {estudio.telefonos.map((t) => <li key={t.tel}><a href={`tel:${t.tel}`} className="flex items-center gap-3 font-semibold"><Icono d={iTel} /> {t.texto}</a></li>)}
            <li><a href={`mailto:${estudio.correo}`} className="font-semibold underline underline-offset-2">{estudio.correo}</a></li>
          </ul>
          <ul className="mt-5 flex gap-4">
            {estudio.redes.map(([n, u]) => <li key={n}><a href={u} className="font-semibold text-rubor underline underline-offset-2">{n}</a></li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="border-t border-white/10 bg-vino py-8 pb-28 text-rubor md:pb-8">
      <div className="contenedor flex flex-col gap-2 text-sm sm:flex-row sm:justify-between">
        <p className="font-titulo text-lg italic text-white">Dulce Vega</p>
        <p>Chapalita, Guadalajara. {estudio.frase}.</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-vino/10 bg-white text-vino md:hidden">
      <a href={wa('Hola, quiero información de sus paquetes de maquillaje y peinado.')} className="flex min-h-15 flex-col items-center justify-center gap-0.5 bg-labial text-sm font-semibold text-white"><Icono d={iWhats} /> WhatsApp</a>
      <a href={`tel:${estudio.telefonos[0].tel}`} className="flex min-h-15 flex-col items-center justify-center gap-0.5 text-sm font-semibold"><Icono d={iTel} /> Llamar</a>
      <a href={estudio.mapa} className="flex min-h-15 flex-col items-center justify-center gap-0.5 text-sm font-semibold"><Icono d={iMapa} /> Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <Encabezado />
      <main>
        <Portada />
        <Corte />
        <Paquetes />
        <Cursos />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
