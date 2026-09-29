import { useMemo, useState } from 'react';
import { foto, llevar, lugares, negocio, opiniones, paquetes, salida, tours, traslados, wa, type LugarId } from './data/content';


function IconoWa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.2.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}
function IconoTel({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 3h4l2 5-3 2a11 11 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A18 18 0 0 1 3 5a2 2 0 0 1 2-2Z" /></svg>;
}
function IconoPin({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>;
}

const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;
const secciones = [['#mapa', 'Tours'], ['#traslados', 'Traslados'], ['#paquetes', 'Paquetes'], ['#contacto', 'Contacto']] as const;
const waHola = wa('Hola, necesito información de un tour en Palenque.');
const ids = Object.keys(lugares) as LugarId[];
const colorTipo = { ruinas: '#9b2c1f', agua: '#1f6f55', selva: '#12332a', ciudad: '#5a5f55' } as const;

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-selva/10 bg-cal/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="font-display text-[1.35rem] text-jaguar">Kichan Bajlum</a>
        <nav aria-label="Secciones" className="hidden md:block">
          <ul className="flex gap-7">{secciones.map(([h, t]) => <li key={h}><a href={h} className="font-bold text-musgo hover:text-selva">{t}</a></li>)}</ul>
        </nav>
        <a href={waHola} className="btn !min-h-[42px] !py-2" target="_blank" rel="noopener"><IconoWa /> <span className="hidden sm:inline">WhatsApp</span></a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="oscuro relative isolate overflow-hidden">
      <img src={foto('palenque')} alt="La zona arqueológica de Palenque entre la selva, con el Templo de las Inscripciones al fondo" width={1600} height={1067} fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-selva via-selva/75 to-selva/35 md:bg-gradient-to-r md:from-selva md:via-selva/70 md:to-transparent" aria-hidden="true" />
      <div className="contenedor pb-14 pt-40 md:py-28">
        <p className="font-bold text-ocre">Palenque, corazón del mundo maya</p>
        <h1 className="mt-3 max-w-2xl text-[2.9rem] sm:text-[4.4rem]">Tours desde Palenque, Chiapas</h1>
        <p className="mt-5 max-w-xl text-[1.15rem]">Ruinas mayas, cascadas y Selva Lacandona con un equipo local. La mayoría incluye recogida en hoteles de la zona urbana de Palenque.</p>
        <p className="mt-6 font-display text-[1.6rem] text-ocre">Desde {pesos(600)} por persona</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="#mapa" className="btn">¿Qué quieres ver?</a>
          <a href={waHola} className="btn-claro" target="_blank" rel="noopener"><IconoWa /> Hablar con un experto</a>
        </div>
      </div>
    </section>
  );
}

function Mapa() {
  const [elegidos, setElegidos] = useState<LugarId[]>(['mis', 'agu']);
  const [tourSel, setTourSel] = useState<string | null>(null);
  const lista = useMemo(() => tours.filter((t) => elegidos.every((e) => t.paradas.includes(e))).sort((a, b) => a.precio - b.precio), [elegidos]);
  const activo = lista.find((t) => t.nombre === tourSel) ?? lista[0];
  const alternar = (id: LugarId) => { setTourSel(null); setElegidos((e) => (e.includes(id) ? e.filter((x) => x !== id) : [...e, id])); };
  const ruta = activo ? [salida, ...activo.paradas.map((p) => lugares[p])].map((p) => `${p.x},${p.y}`).join(' ') : '';

  return (
    <section id="mapa" className="py-16 sm:py-24">
      <div className="contenedor">
        <p className="font-bold text-jade">23 tours compartidos · salida desde Palenque</p>
        <h2 className="mt-2 text-[2.4rem] sm:text-[3.4rem]">¿Qué quieres ver desde Palenque?</h2>
        <p className="mt-3 max-w-2xl text-musgo">Toca los lugares que te interesan: quedan solo los tours que los incluyen todos, del más barato al más caro. El mapa es un esquema, no está a escala.</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <svg viewBox="0 0 420 290" className="w-full rounded-3xl bg-[#e7efe3]" role="img" aria-label={activo ? `Ruta de ${activo.nombre}` : 'Mapa esquemático de destinos desde Palenque'}>
              <path d="M0 230 C80 200 120 250 190 225 S320 260 420 240 V290 H0Z" fill="#d7e4d2" />
              {ids.map((id) => <line key={id} x1={salida.x} y1={salida.y} x2={lugares[id].x} y2={lugares[id].y} stroke="#12332a" strokeOpacity="0.12" strokeDasharray="3 4" />)}
              {activo && <polyline points={ruta} fill="none" stroke="#9b2c1f" strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round" />}
              <circle cx={salida.x} cy={salida.y} r="7" fill="#e0a43a" stroke="#12332a" strokeWidth="2" />
              <text x={salida.x + 14} y={salida.y + 14} fontSize="13" fontWeight="700" textAnchor="start" fill="#12332a">Palenque (salida)</text>
              {ids.map((id) => {
                const l = lugares[id];
                const on = elegidos.includes(id);
                const enRuta = activo?.paradas.includes(id);
                const izquierda = l.lado === 'izq';
                return (
                  <g key={id}>
                    <circle cx={l.x} cy={l.y} r={on ? 9 : 6} fill={on || enRuta ? colorTipo[l.tipo] : '#ffffff'} stroke={colorTipo[l.tipo]} strokeWidth="2.5" />
                    <text x={izquierda ? l.x - 12 : l.x + 12} y={l.y + 4} fontSize="12.5" fontWeight={on ? 700 : 400} textAnchor={izquierda ? 'end' : 'start'} fill="#12332a">{l.corto}</text>
                  </g>
                );
              })}
            </svg>
            <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Lugares">
              {ids.map((id) => (
                <button key={id} type="button" aria-pressed={elegidos.includes(id)} onClick={() => alternar(id)}
                  className={`min-h-[44px] rounded-full border-2 px-3.5 text-[0.95rem] font-bold transition-colors ${elegidos.includes(id) ? 'border-selva bg-selva text-cal' : 'border-selva/20 bg-white hover:border-selva/60'}`}>
                  {lugares[id].nombre}
                </button>
              ))}
              {elegidos.length > 0 && <button type="button" onClick={() => { setElegidos([]); setTourSel(null); }} className="min-h-[44px] px-3 font-bold text-jaguar underline underline-offset-4">Ver todos</button>}
            </div>
          </div>

          <div>
            <p className="font-bold" aria-live="polite">{lista.length === 0 ? 'Ningún tour incluye todos esos lugares juntos. Quita alguno o pregúntanos por un tour privado.' : `${lista.length} ${lista.length === 1 ? 'tour' : 'tours'}`}</p>
            <ul className="mt-3 grid max-h-[34rem] gap-2 overflow-y-auto pr-1">
              {lista.map((t) => {
                const sel = activo?.nombre === t.nombre;
                return (
                  <li key={t.nombre}>
                    <button type="button" aria-pressed={sel} onClick={() => setTourSel(t.nombre)}
                      className={`w-full rounded-2xl border-2 p-4 text-left transition-colors ${sel ? 'border-jaguar bg-white' : 'border-transparent bg-white/70 hover:border-selva/20'}`}>
                      <span className="flex items-baseline justify-between gap-3">
                        <span className="font-bold">{t.nombre}</span>
                        <span className="shrink-0 font-display text-[1.2rem] text-jaguar">{pesos(t.precio)}</span>
                      </span>
                      <span className="mt-1 block text-[0.9rem] text-musgo">Sale {t.salida}{t.duracion && ` · ${t.duracion}`} · ★ {t.opinion} · por persona</span>
                    </button>
                  </li>
                );
              })}
            </ul>
            {activo && <a href={wa(`Hola, necesito información del tour ${activo.nombre} (${pesos(activo.precio)} por persona).`)} target="_blank" rel="noopener" className="btn mt-4 w-full"><IconoWa /> Pedir “{activo.nombre.length > 34 ? `${activo.nombre.slice(0, 32)}…` : activo.nombre}”</a>}
          </div>
        </div>
      </div>
    </section>
  );
}

function Galeria() {
  const fotos = [
    ['misolha', 'La cascada de Misol-Ha cayendo sobre su poza entre la selva'],
    ['aguaazul', 'Las cascadas escalonadas de Agua Azul con agua turquesa'],
    ['robertobarrios', 'Una visitante en las pozas de las cascadas de Roberto Barrios'],
    ['selva', 'Un edificio maya cubierto de musgo en la Selva Lacandona'],
    ['laguna', 'Balsas de madera en una laguna de la Selva Lacandona'],
    ['grupo', 'Un grupo de viajeros con su guía junto a la camioneta de Kichan Bajlum'],
  ] as const;
  return (
    <section className="oscuro py-14">
      <ul className="contenedor grid grid-cols-2 gap-3 md:grid-cols-3">
        {fotos.map(([f, alt]) => <li key={f}><img src={foto(f)} alt={alt} width={800} height={800} loading="lazy" className="aspect-square w-full rounded-2xl object-cover" /></li>)}
      </ul>
    </section>
  );
}

function Traslados() {
  return (
    <section id="traslados" className="py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-[2.2rem] sm:text-[3rem]">Traslados cómodos y puntuales</h2>
          <p className="mt-3 text-musgo">Precio por grupo, desde Palenque.</p>
          <ul className="mt-6 grid gap-2">
            {traslados.map((t) => (
              <li key={t.nombre} className="flex items-baseline justify-between gap-3 rounded-2xl bg-white p-4">
                <span><strong>{t.nombre}</strong><span className="block text-[0.9rem] text-musgo">Sale {t.salida}</span></span>
                <span className="shrink-0 font-display text-[1.2rem] text-jaguar">{pesos(t.precio)}</span>
              </li>
            ))}
          </ul>
          <a href={wa('Hola, necesito información de un traslado desde Palenque.')} target="_blank" rel="noopener" className="btn mt-5"><IconoWa /> Consultar traslado</a>
        </div>
        <div className="grid grid-cols-2 gap-3 self-start">
          <img src={foto('camioneta')} alt="Viajeros bajando de una camioneta Sprinter de Kichan Bajlum" width={800} height={800} loading="lazy" className="aspect-square w-full rounded-2xl object-cover" />
          <img src={foto('flores')} alt="Vista aérea de la isla de Flores en el lago Petén Itzá, Guatemala" width={800} height={800} loading="lazy" className="aspect-square w-full rounded-2xl object-cover" />
        </div>
      </div>
    </section>
  );
}

function Paquetes() {
  return (
    <section id="paquetes" className="bg-white py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="text-[2.2rem] sm:text-[3rem]">Paquetes desde San Cristóbal</h2>
        <p className="mt-3 max-w-2xl text-musgo">Salida y regreso en San Cristóbal de las Casas, grupos de 1 a 10 personas. ¿Prefieres uno a tu medida? Arman el itinerario según tu presupuesto y tus días.</p>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {paquetes.map((p) => (
            <li key={p.nombre} className="rounded-3xl bg-cal p-6">
              <h3 className="text-[1.5rem]">{p.nombre}</h3>
              <p className="text-musgo">{p.dias}</p>
              <p className="mt-3 font-display text-[1.5rem] text-jaguar">Desde {pesos(p.precio)}</p>
              <a href={wa(`Hola, quiero información del paquete ${p.nombre} (${p.dias}).`)} target="_blank" rel="noopener" className="enlace mt-3 inline-block">Pedir itinerario</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Confianza() {
  return (
    <section className="py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <h2 className="text-[2rem] sm:text-[2.6rem]">Antes de viajar</h2>
          <ol className="mt-5 grid gap-3">
            {[['Elige', 'Encuentra la ruta ideal para tu estilo de viaje.'], ['Reserva', 'Confirma tu lugar; recibes los detalles por correo o WhatsApp.'], ['Disfruta', 'Te recogen en tu hotel de Palenque y te acompañan.']].map(([t, d], i) => (
              <li key={t} className="flex gap-3"><span className="font-display text-[1.5rem] text-ocre">0{i + 1}</span><span><strong>{t}.</strong> {d}</span></li>
            ))}
          </ol>
          <h3 className="mt-8 text-[1.3rem]">Qué llevar</h3>
          <p className="mt-2 text-musgo">{llevar.join(' · ')}</p>
        </div>
        <ul className="grid gap-4">
          {opiniones.map((o) => (
            <li key={o.autor} className="rounded-3xl bg-white p-6">
              <blockquote>“{o.texto}”</blockquote>
              <p className="mt-2 font-bold text-jade">{o.autor} · {o.fuente}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="oscuro py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-[2.4rem] sm:text-[3.2rem]">Chiapas te espera. Ellos te llevan.</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={waHola} target="_blank" rel="noopener" className="btn"><IconoWa /> WhatsApp {negocio.whatsappVisible}</a>
            <a href={`tel:${negocio.tel}`} className="btn-claro"><IconoTel /> {negocio.telVisible}</a>
          </div>
          <p className="mt-5"><a href={`mailto:${negocio.correo}`} className="font-bold text-ocre underline underline-offset-4">{negocio.correo}</a></p>
        </div>
        <div className="rounded-3xl bg-white/8 p-6 sm:p-8">
          <p className="flex gap-2 font-bold text-cal"><IconoPin className="mt-1 h-5 w-5 shrink-0 text-ocre" />{negocio.direccion}</p>
          <a href={negocio.mapa} target="_blank" rel="noopener" className="mt-2 inline-block font-bold text-ocre underline underline-offset-4">Abrir en Google Maps</a>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-[#0c241d] pb-24 pt-8 text-cal/80 md:pb-8">
      <div className="contenedor flex flex-wrap items-baseline justify-between gap-4">
        <p className="font-display text-[1.3rem] text-cal">Kichan Bajlum</p>
        <p className="text-[0.95rem]">Tour operador en Palenque, Chiapas · Precios por persona en MXN</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-cal/15 bg-selva text-cal md:hidden">
      <a href={waHola} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 bg-jaguar text-[0.9rem] font-bold text-white"><IconoWa />WhatsApp</a>
      <a href={`tel:${negocio.tel}`} className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-bold"><IconoTel />Llamar</a>
      <a href={negocio.mapa} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-bold"><IconoPin />Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#principal" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2">Saltar al contenido</a>
      <Encabezado />
      <main id="principal">
        <Portada />
        <Mapa />
        <Galeria />
        <Traslados />
        <Paquetes />
        <Confianza />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
