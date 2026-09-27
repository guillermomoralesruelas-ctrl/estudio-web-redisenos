import { useState } from 'react';
import { eventosGrandes, eventosIntimos, extrasBasico, foto, fotos, negocio, paquetes, preguntas, wa, waGeneral, type Foto, type Paquete } from './data/content';

function Img({ f, className = '', eager = false }: { f: Foto; className?: string; eager?: boolean }) {
  return <img src={f.src} width={f.w} height={f.h} alt={f.alt} className={className} loading={eager ? 'eager' : 'lazy'} decoding="async" />;
}

function IconoWa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.2.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}

const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;

function Encabezado() {
  return (
    <header className="oscuro sticky top-0 z-40 bg-grana">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio"><img src={foto('logo-la-grana-blanco.webp')} width={150} height={75} alt="La Grana Eventos" className="h-11 w-auto" /></a>
        <nav aria-label="Principal" className="hidden items-center gap-6 text-[0.95rem] font-semibold text-white/90 md:flex">
          <a href="#jardin" className="hover:text-white hover:underline">El jardín</a>
          <a href="#plano" className="hover:text-white hover:underline">Paquetes</a>
          <a href="#preguntas" className="hover:text-white hover:underline">Preguntas</a>
          <a href="#contacto" className="hover:text-white hover:underline">Ubicación</a>
        </nav>
        <a href={`tel:${negocio.telefonos[0].tel}`} className="hidden text-sm font-semibold text-white sm:block">¡Llámanos! {negocio.telefonos[0].visible}</a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="oscuro relative isolate overflow-hidden bg-bosque">
      <img src={fotos.lagoPuente.src} width={fotos.lagoPuente.w} height={fotos.lagoPuente.h} alt={fotos.lagoPuente.alt} className="absolute inset-0 -z-10 h-full w-full object-cover" fetchPriority="high" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-bosque via-bosque/75 to-bosque/25" aria-hidden="true" />
      <div className="contenedor flex min-h-[84vh] flex-col justify-end pb-14 pt-28 sm:pb-20">
        <p className="mb-3 font-semibold text-white/90">Zapopan, Jalisco, a la orilla del Bosque de La Primavera</p>
        <h1 className="max-w-4xl text-4xl sm:text-6xl">Terraza jardín para eventos, bodas y XV años en contacto con la naturaleza</h1>
        <p className="mt-5 max-w-2xl text-lg text-white/90">1,500 m² de área verde a 4 kilómetros del Periférico, con toldos para recibir cómodamente hasta 400 invitados y estacionamiento privado para 150 vehículos.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={waGeneral} className="btn" target="_blank" rel="noopener"><IconoWa /> Pedir informes por WhatsApp</a>
          <a href="#plano" className="btn-claro">Ver paquetes y precios</a>
        </div>
      </div>
    </section>
  );
}

function Jardin() {
  return (
    <section id="jardin" className="py-20 sm:py-28">
      <div className="contenedor grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div className="min-w-0">
          <h2 className="text-3xl sm:text-4xl">Diseñada para los amantes de la libertad y la naturaleza</h2>
          <p className="mt-6">Enclavada a la orilla del Bosque de La Primavera y a 4 kilómetros del Periférico, en Zapopan, Jalisco se encuentra La Grana, una terraza jardín para eventos diseñada para los amantes de la libertad; su ubicación privilegiada hará que su evento sea único, con una sensación de integración total con el bosque y la naturaleza.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-lg">El espacio ideal para festejar</h3>
              <p className="mt-2 text-[0.98rem]">{eventosGrandes.join(', ')}.</p>
            </div>
            <div>
              <h3 className="text-lg">Y para sus eventos más íntimos</h3>
              <p className="mt-2 text-[0.98rem]">Su terraza equipada con barra para manejo de alimentos y bebidas: {eventosIntimos.join(', ').toLowerCase()}.</p>
            </div>
          </div>
        </div>
        <div className="grid min-w-0 grid-cols-2 gap-3">
          <Img f={fotos.jardin} className="col-span-2 aspect-[16/9] w-full rounded-md object-cover" />
          <Img f={fotos.glorieta} className="aspect-[4/3] w-full rounded-md object-cover" />
          <Img f={fotos.puenteAtardecer} className="aspect-[4/3] w-full rounded-md object-cover" />
        </div>
      </div>
    </section>
  );
}

// Plano a escala: el jardín como un cuadrado de 1,500 m² (38.7 m por lado). 1 unidad = 0.1 m.
const LADO = 387;
const PASO = 35; // separación simbólica entre mesas (3.5 m)

function Plano({ invitados, paquete }: { invitados: number; paquete: Paquete }) {
  const mesas = Math.ceil(invitados / 10);
  const pista = paquete.pista ? paquete.pista * 10 : 0;
  const columnas = 10;
  const inicioY = pista ? 40 + pista + 30 : 50;
  return (
    <svg viewBox={`-12 -12 ${LADO + 24} ${LADO + 70}`} className="h-auto w-full" role="img" aria-label={`Plano simbólico del jardín de 1,500 m² con ${mesas} mesas de 10${pista ? ` y una pista de ${paquete.pista}×${paquete.pista} m` : ''}`}>
      <rect x="-12" y="-12" width={LADO + 24} height={LADO + 24} rx="10" fill="#1f3a2b" />
      <rect x="0" y="0" width={LADO} height={LADO} rx="4" fill="#7fae4c" />
      {/* franja de 1 m de pasto más oscuro para dar escala */}
      {Array.from({ length: 8 }, (_, i) => <line key={i} x1={0} x2={LADO} y1={(i + 1) * 43} y2={(i + 1) * 43} stroke="#6f9c40" strokeWidth="1" />)}
      {pista > 0 && (
        <g>
          <rect x={(LADO - pista) / 2} y={40} width={pista} height={pista} fill="#8a5a36" stroke="#fff" strokeWidth="2" />
          <text x={LADO / 2} y={40 + pista / 2 + 5} textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff">{paquete.pista}×{paquete.pista} m</text>
        </g>
      )}
      {Array.from({ length: mesas }, (_, i) => {
        const fila = Math.floor(i / columnas);
        const col = i % columnas;
        const cx = 36 + col * PASO;
        const cy = inicioY + fila * PASO;
        return <circle key={i} className="mesa" cx={cx} cy={cy} r="9" fill="#faf6ef" stroke="#930f3e" strokeWidth="2.5" style={{ animationDelay: `${Math.min(i, 30) * 12}ms` }} />;
      })}
      {/* regla de 10 m */}
      <g transform={`translate(0 ${LADO + 30})`}>
        <line x1="0" x2="100" y1="0" y2="0" stroke="#1f3a2b" strokeWidth="3" />
        <line x1="0" x2="0" y1="-6" y2="6" stroke="#1f3a2b" strokeWidth="3" />
        <line x1="100" x2="100" y1="-6" y2="6" stroke="#1f3a2b" strokeWidth="3" />
        <text x="110" y="5" fontSize="15" fill="#3b3033">10 m</text>
        <circle cx="200" cy="0" r="9" fill="#faf6ef" stroke="#930f3e" strokeWidth="2.5" />
        <text x="215" y="5" fontSize="15" fill="#3b3033">mesa de 10 personas</text>
      </g>
    </svg>
  );
}

function Planeador() {
  const [invitados, setInvitados] = useState(120);
  const [entreSemana, setEntreSemana] = useState(false);
  const [id, setId] = useState<Paquete['id']>('todo');
  const paquete = paquetes.find((p) => p.id === id)!;
  const mesas = Math.ceil(invitados / 10);

  let aviso: string | null = null;
  let total: number | null = null;
  if (paquete.id === 'basico') {
    if (!entreSemana) aviso = 'El Paquete Básico es solo de lunes a jueves.';
    else if (invitados > 80) aviso = 'El Paquete Básico es para hasta 80 personas; tiene "Persona extra $250" entre sus extras: pregunte si aplica.';
    else total = paquete.monto;
  } else if (paquete.minimo && invitados < paquete.minimo) {
    aviso = `Este paquete es para mínimo ${paquete.minimo} personas.`;
  } else {
    total = paquete.monto * invitados;
  }

  const mensaje = wa(
    `Hola, quiero informes del ${paquete.nombre} para ${invitados} invitados, ${entreSemana ? 'entre semana (lunes a jueves)' : 'en fin de semana (viernes a domingo)'}. ¿Qué fechas tienen disponibles?`,
  );

  return (
    <section id="plano" className="bg-papel py-20 sm:py-28">
      <div className="contenedor">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl">¿Cuánto jardín ocupa tu fiesta?</h2>
          <p className="mt-5 text-lg">Mueve el número de invitados y elige un paquete: el plano pone sus mesas de 10 y la pista en los 1,500 m² de jardín, y abajo ves lo que incluye y cuánto sale.</p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14">
          <div className="min-w-0 lg:sticky lg:top-24 lg:self-start">
            <Plano invitados={invitados} paquete={paquete} />
            <p className="mt-3 text-sm">Dibujo simbólico a escala del área (1,500 m²); la forma real del jardín es otra y el acomodo lo hace su coordinador. No incluye el estacionamiento para 150 vehículos.</p>
          </div>

          <div className="min-w-0">
            <label htmlFor="invitados" className="flex items-baseline justify-between gap-4 font-titulo font-bold text-bosque">
              <span className="text-lg">Invitados</span>
              <span className="cifra text-4xl text-grana">{invitados}</span>
            </label>
            <input id="invitados" type="range" min={20} max={400} step={10} value={invitados} onChange={(e) => setInvitados(Number(e.target.value))} className="mt-3 w-full accent-[#930f3e]" />
            <div className="mt-1 flex justify-between text-sm"><span>20</span><span>hasta 400 con toldos</span></div>
            <p className="mt-4 text-[0.98rem]"><strong className="cifra">{mesas} mesas</strong> de 10 personas.</p>

            <fieldset className="mt-7">
              <legend className="font-titulo font-bold text-bosque">¿Qué día?</legend>
              <div className="mt-3 inline-flex rounded-full border border-bosque/25 p-1">
                {[false, true].map((v) => (
                  <button key={String(v)} type="button" aria-pressed={entreSemana === v} onClick={() => setEntreSemana(v)} className={`rounded-full px-4 py-2 text-sm font-semibold ${entreSemana === v ? 'bg-bosque text-white' : 'text-bosque hover:bg-bosque/5'}`}>
                    {v ? 'Lunes a jueves' : 'Viernes a domingo'}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="mt-7">
              <legend className="font-titulo font-bold text-bosque">Paquete</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {paquetes.map((p) => (
                  <button key={p.id} type="button" aria-pressed={p.id === id} onClick={() => setId(p.id)} className={`rounded-lg border px-3 py-2 text-left text-sm ${p.id === id ? 'border-grana bg-grana text-white' : 'border-bosque/25 text-bosque hover:border-bosque'}`}>
                    <span className="block font-semibold">{p.nombre}</span>
                    <span className={p.id === id ? 'text-white/85' : 'text-texto'}>{p.precio}</span>
                  </button>
                ))}
              </div>
            </fieldset>

            <div key={id} className="ficha mt-7 rounded-lg border border-bosque/15 bg-crema p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-2xl">{paquete.nombre}</h3>
                <p className="font-semibold text-grana">{paquete.precio}</p>
              </div>
              <p className="mt-1 text-sm">{paquete.horas} horas de evento{paquete.dias ? `. ${paquete.dias}` : ''}{paquete.minimo ? `. Mínimo ${paquete.minimo} personas` : ''}.</p>
              <div className="mt-5 rounded-md bg-papel p-4" aria-live="polite">
                {total !== null ? (
                  <p><span className="text-sm">Para {invitados} invitados{paquete.desde ? ', desde' : ''}</span><span className="cifra block font-titulo text-3xl font-bold text-bosque">{pesos(total)}</span></p>
                ) : (
                  <p className="font-semibold text-grana-honda">{aviso}</p>
                )}
              </div>
              <ul className="mt-5 grid gap-x-6 gap-y-1 text-[0.95rem] sm:grid-cols-2">
                {paquete.incluye.map((x) => <li key={x} className="min-w-0 border-b border-bosque/10 py-1">{x}</li>)}
              </ul>
              {paquete.id === 'basico' && <p className="mt-4 text-sm"><strong>Extras:</strong> {extrasBasico.join('; ')}.</p>}
              <p className="mt-4 text-sm font-semibold">Estacionamiento para 150 vehículos.</p>
              <a href={mensaje} className="btn mt-6" target="_blank" rel="noopener"><IconoWa /> Preguntar por esta fecha</a>
            </div>
            <p className="mt-4 text-sm">Precios de su página de paquetes (enero de 2026). El evento debe quedar cubierto al 100% mínimo 48 horas antes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Momentos() {
  return (
    <section className="oscuro bg-bosque py-20 text-white/85 sm:py-28" aria-labelledby="momentos">
      <div className="contenedor">
        <h2 id="momentos" className="max-w-2xl text-3xl sm:text-4xl">Bodas en el bosque, pista bajo las estrellas</h2>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          <Img f={fotos.novios} className="col-span-2 aspect-[16/9] h-full w-full rounded-md object-cover md:row-span-2 md:aspect-auto" />
          <Img f={fotos.bodaNoche} className="col-span-2 aspect-[16/9] w-full rounded-md object-cover" />
          <Img f={fotos.pista} className="col-span-2 aspect-[16/9] w-full rounded-md object-cover" />
        </div>
        <p className="mt-6 text-sm">La pista de madera con cristal es una de las dos opciones de pista de sus paquetes Todo Incluido.</p>
      </div>
    </section>
  );
}

function Preguntas() {
  return (
    <section id="preguntas" className="py-20 sm:py-28">
      <div className="contenedor grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-3xl sm:text-4xl">Preguntas frecuentes</h2>
          <p className="mt-4">¿Aún no está seguro si podemos ayudarlo? Compruébelo a través de estas preguntas frecuentes y después regálenos una llamada o un mensaje.</p>
        </div>
        <div className="min-w-0 divide-y divide-bosque/15 border-y border-bosque/15">
          {preguntas.map((q) => (
            <div key={q.p} className="py-5">
              <h3 className="text-lg">{q.p}</h3>
              <p className="mt-2">{q.r}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="oscuro bg-grana-honda py-20 text-white/90 sm:py-28">
      <div className="contenedor grid gap-12 lg:grid-cols-2">
        <div className="min-w-0">
          <h2 className="text-3xl sm:text-4xl">Contáctenos</h2>
          <p className="mt-5">Cuéntenos la fecha, el tipo de evento y cuántos invitados espera.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waGeneral} className="btn !bg-white !text-grana-honda hover:!bg-crema" target="_blank" rel="noopener"><IconoWa /> WhatsApp</a>
            <a href={`tel:${negocio.telefonos[0].tel}`} className="btn-claro">Llamar al {negocio.telefonos[0].visible}</a>
          </div>
          <p className="mt-8 font-semibold text-white">Celulares</p>
          <ul className="mt-1">
            {negocio.telefonos.map((t) => <li key={t.tel}><a href={`tel:${t.tel}`} className="underline underline-offset-4 hover:text-white">{t.visible}</a></li>)}
          </ul>
          <p className="mt-6 flex gap-5">
            <a href={negocio.facebook} className="underline underline-offset-4 hover:text-white" target="_blank" rel="noopener">Facebook</a>
            <a href={negocio.instagram} className="underline underline-offset-4 hover:text-white" target="_blank" rel="noopener">Instagram</a>
          </p>
        </div>
        <a href={negocio.mapa} target="_blank" rel="noopener" className="group block min-w-0">
          <Img f={fotos.arco} className="aspect-[16/10] w-full rounded-md object-cover transition-opacity group-hover:opacity-90" />
          <p className="mt-4 font-semibold text-white">{negocio.direccion.join(', ')}</p>
          <p className="mt-1 underline underline-offset-4">Cómo llegar en Google Maps</p>
        </a>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro bg-grana-honda pb-28 text-sm text-white/80 md:pb-10">
      <div className="contenedor flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-8">
        <img src={foto('logo-la-grana-blanco.webp')} width={150} height={75} alt="La Grana Eventos" loading="lazy" className="h-10 w-auto" />
        <p>La Grana Eventos, terraza jardín en Zapopan, Jalisco</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-bosque text-[0.8rem] font-semibold text-white md:hidden">
      <a href={waGeneral} className="flex flex-col items-center gap-1 bg-grana py-3" target="_blank" rel="noopener"><IconoWa />WhatsApp</a>
      <a href={`tel:${negocio.telefonos[0].tel}`} className="flex flex-col items-center gap-1 py-3">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 3h4l2 5-3 2a11 11 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A18 18 0 0 1 3 5a2 2 0 0 1 2-2Z" /></svg>
        Llamar
      </a>
      <a href={negocio.mapa} className="flex flex-col items-center gap-1 py-3" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>
        Cómo llegar
      </a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#plano" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-grana">Ir a paquetes</a>
      <Encabezado />
      <main>
        <Portada />
        <Jardin />
        <Planeador />
        <Momentos />
        <Preguntas />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
