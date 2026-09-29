import { useState } from 'react';
import { espacios, faciales, masajes, negocio, notaPaquetes, opiniones, otros, paquetes, wa, type Paquete } from './data/content';


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
const waHola = wa('Hola, quiero agendar una cita en Dolcebella Spa.');
const secciones = [['#paquetes', 'Paquetes'], ['#carta', 'Faciales y masajes'], ['#spa', 'El spa'], ['#contacto', 'Contacto']] as const;
const maxMinutos = Math.max(...paquetes.map((p) => p.minutosTotales));

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-noche/10 bg-crema/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" aria-label="Dolcebella Spa, inicio"><img src="./logo.webp" alt="Dolcebella Spa" width={421} height={150} className="h-11 w-auto" /></a>
        <nav aria-label="Secciones" className="hidden md:block">
          <ul className="flex gap-7">{secciones.map(([h, t]) => <li key={h}><a href={h} className="text-malva hover:text-noche">{t}</a></li>)}</ul>
        </nav>
        <a href={waHola} className="btn !min-h-[42px] !px-4 !py-2" target="_blank" rel="noopener"><IconoWa /> <span className="hidden sm:inline">Agendar cita</span></a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="oscuro relative isolate overflow-hidden">
      <img src="./sala-meditacion.webp" alt="Sala de meditación de Dolcebella Spa: sillones con cojines, velas encendidas y cuencos con agua y pétalos" width={1024} height={681} fetchPriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-noche via-noche/75 to-noche/25 md:bg-gradient-to-r md:from-noche md:via-noche/80 md:to-noche/10" aria-hidden="true" />
      <div className="contenedor pb-14 pt-64 md:py-36">
        <p className="font-display text-[1.5rem] italic text-vela">Tiempo para relajarte</p>
        <h1 className="mt-2 max-w-2xl text-[2.9rem] sm:text-[4.4rem]">Spa en Tijuana para faciales, masajes y un día completo</h1>
        <p className="mt-5 max-w-xl text-[1.12rem]">Cabinas con luz cálida, sauna, sala de meditación y paquetes para ir solo o en pareja, en la Zona Río.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#paquetes" className="btn">Ver paquetes y precios</a>
          <a href={waHola} className="btn-linea" target="_blank" rel="noopener"><IconoWa /> WhatsApp</a>
        </div>
        <p className="mt-8 text-[0.98rem] text-crema/80">{negocio.horario}. Con cita previa.</p>
      </div>
    </section>
  );
}

function Recorrido({ p }: { p: Paquete }) {
  const conocidos = p.pasos.filter((s) => s.minutos !== null);
  const sumados = conocidos.reduce((a, s) => a + (s.minutos ?? 0), 0);
  const resto = p.minutosTotales - sumados;
  const sinTiempo = p.pasos.filter((s) => s.minutos === null);
  return (
    <div>
      <div className="flex h-9 overflow-hidden rounded-full bg-rosa" style={{ width: `${(p.minutosTotales / maxMinutos) * 100}%` }} aria-hidden="true">
        {conocidos.map((s, i) => (
          <div key={s.nombre} className={`tramo flex items-center justify-center border-r-2 border-crema text-[0.8rem] font-semibold text-white last:border-r-0 ${i % 2 ? 'bg-agua' : 'bg-ciruela'}`} style={{ flexGrow: s.minutos ?? 0, flexBasis: 0 }}>
            {s.minutos}′
          </div>
        ))}
        {resto > 0 && <div className="tramo flex items-center justify-center text-[0.8rem] font-semibold text-malva" style={{ flexGrow: resto, flexBasis: 0 }}>{resto}′</div>}
      </div>
      <ul className="mt-3 grid gap-x-5 gap-y-1 text-[0.95rem] sm:grid-cols-2">
        {p.pasos.map((s) => <li key={s.nombre}>{s.nombre}{s.minutos ? <span className="text-malva">, {s.minutos} min</span> : null}</li>)}
      </ul>
      {sinTiempo.length > 0 && resto > 0 && <p className="mt-1 text-[0.9rem] text-malva">La parte clara de la barra ({resto} min) es el resto del ritual; su sitio no detalla cuánto dura cada paso.</p>}
      {p.incluye && <p className="mt-1 text-[0.95rem]">{p.incluye}</p>}
    </div>
  );
}

function Paquetes() {
  const [personas, setPersonas] = useState<1 | 2>(1);
  return (
    <section id="paquetes" className="py-20 md:py-28">
      <div className="contenedor">
        <h2 className="max-w-2xl text-[2.5rem] sm:text-[3.3rem]">¿Vienes solo o en pareja?</h2>
        <p className="mt-4 max-w-2xl text-malva">Sus cuatro paquetes tienen precio para una y para dos personas. Elige cómo vienes y cada barra muestra cuánto dura el ritual y qué ocupa ese tiempo.</p>
        <div role="group" aria-label="Número de personas" className="mt-8 inline-flex rounded-full border-2 border-noche/15 bg-white p-1">
          {([1, 2] as const).map((n) => (
            <button key={n} type="button" aria-pressed={personas === n} onClick={() => setPersonas(n)}
              className={`min-h-[44px] rounded-full px-6 font-semibold transition-colors ${personas === n ? 'bg-ciruela text-white' : 'text-noche hover:bg-rosa'}`}>
              {n === 1 ? 'Voy solo' : 'Vamos dos'}
            </button>
          ))}
        </div>
        <ul className="mt-10 grid gap-6">
          {paquetes.map((p) => {
            const precio = personas === 1 ? p.individual : p.pareja;
            const ahorro = personas === 2 && p.individual ? p.individual * 2 - p.pareja : 0;
            const texto = `Hola, quiero reservar el paquete ${p.nombre} para ${personas === 1 ? 'una persona' : 'dos personas'}.`;
            return (
              <li key={p.id} className={`grid gap-5 rounded-2xl border border-noche/10 bg-white p-5 sm:p-7 md:grid-cols-[14rem_1fr_auto] md:items-start ${precio === null ? 'bg-white/60' : ''}`}>
                <div>
                  <h3 className="text-[2rem]">{p.nombre}</h3>
                  <p className="text-malva">{p.duracion}</p>
                </div>
                <Recorrido p={p} />
                <div className="md:text-right">
                  {precio === null ? (
                    <>
                      <p className="font-semibold text-malva">Solo para dos personas: {pesos(p.pareja)}</p>
                      <a href={wa(`Hola, quiero reservar el paquete ${p.nombre} para dos personas.`)} target="_blank" rel="noopener" className="btn-linea mt-4 !min-h-[44px] !px-5 !py-2"><IconoWa /> Reservar para dos</a>
                    </>
                  ) : (
                    <>
                      <p className="font-display text-[2.3rem] leading-none text-ciruela" aria-live="polite">{pesos(precio)}</p>
                      <p className="mt-1 text-[0.95rem] text-malva">{personas === 1 ? 'por persona' : 'las dos personas'}</p>
                      {ahorro > 0 && <p className="mt-1 text-[0.95rem] font-semibold text-agua">{pesos(ahorro)} menos que dos individuales</p>}
                      <a href={wa(texto)} target="_blank" rel="noopener" className="btn mt-4 !min-h-[44px] !px-5 !py-2"><IconoWa /> Reservar</a>
                    </>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
        <p className="mt-6 max-w-3xl text-[0.98rem] text-malva">{notaPaquetes}</p>
      </div>
    </section>
  );
}

function Carta() {
  return (
    <section id="carta" className="bg-rosa py-20 md:py-28">
      <div className="contenedor grid gap-14 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <h2 className="text-[2.4rem] sm:text-[3rem]">Faciales</h2>
          <p className="mt-3 text-malva">Precios por sesión, tal como los publica el spa.</p>
          <ul className="mt-6 divide-y divide-noche/10 border-y border-noche/10">
            {faciales.map((f) => (
              <li key={f.nombre} className="flex items-baseline justify-between gap-4 py-3">
                <span><span className="font-semibold">{f.nombre}</span>{f.duracion && <span className="text-malva">, {f.duracion}</span>}</span>
                <span className="shrink-0 text-right">{f.precio ?? <a href={wa(`Hola, ¿qué precio tiene el ${f.nombre.toLowerCase()}?`)} target="_blank" rel="noopener" className="enlace">Preguntar</a>}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-[2.4rem] sm:text-[3rem]">Masajes</h2>
          <p className="mt-3 text-malva">El precio se confirma por WhatsApp.</p>
          <ul className="mt-6 divide-y divide-noche/10 border-y border-noche/10">
            {masajes.map((m) => (
              <li key={m.nombre} className="flex items-baseline justify-between gap-4 py-3"><span className="font-semibold">{m.nombre}</span><span className="shrink-0 text-malva">{m.duracion}</span></li>
            ))}
          </ul>
          <h3 className="mt-10 text-[1.8rem]">Otros tratamientos</h3>
          <ul className="mt-3 list-disc pl-5">{otros.map((o) => <li key={o}>{o}</li>)}</ul>
          <a href={wa('Hola, quiero información de sus masajes y tratamientos.')} target="_blank" rel="noopener" className="btn mt-8"><IconoWa /> Preguntar por WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

function Spa() {
  return (
    <section id="spa" className="py-20 md:py-28">
      <div className="contenedor">
        <h2 className="max-w-2xl text-[2.4rem] sm:text-[3rem]">Así es el spa por dentro</h2>
        <p className="mt-3 max-w-2xl text-malva">La sala de meditación de la portada, con sillones, velas y agua con pétalos, es para antes o después de tu sesión.</p>
        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {espacios.map((e) => (
            <li key={e.foto}>
              <img src={`./${e.foto}`} alt={`${e.nombre} de Dolcebella Spa`} width={e.ancho} height={e.alto} loading="lazy" className="aspect-[3/2] w-full rounded-2xl object-cover" />
              <h3 className="mt-4 text-[1.7rem]">{e.nombre}</h3>
              <p className="text-malva">{e.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Opiniones() {
  return (
    <section aria-labelledby="t-opiniones" className="bg-rosa py-20">
      <div className="contenedor">
        <h2 id="t-opiniones" className="text-[2.4rem] sm:text-[3rem]">Lo que dicen al salir</h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-2">
          {opiniones.map((o) => (
            <li key={o.autor}>
              <blockquote className="font-display text-[1.6rem] italic leading-snug">“{o.texto}”</blockquote>
              <p className="mt-2 text-[0.95rem] text-malva">{o.autor}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="oscuro py-20 md:py-28">
      <div className="contenedor grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-[2.4rem] sm:text-[3rem]">Agenda tu cita</h2>
          <p className="mt-4 max-w-md">Se requiere cita previa y anticipo. Escribe qué paquete o tratamiento quieres y para cuántas personas.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waHola} className="btn" target="_blank" rel="noopener"><IconoWa /> WhatsApp</a>
            <a href={negocio.telefonoLink} className="btn-linea"><IconoTel /> {negocio.telefono}</a>
          </div>
        </div>
        <dl className="grid gap-6">
          <div><dt className="font-semibold text-vela">Dirección</dt><dd>{negocio.direccion}<br /><a href={negocio.mapa} target="_blank" rel="noopener" className="font-semibold text-crema underline underline-offset-4"><IconoPin className="mr-1 inline h-4 w-4" />Abrir en Google Maps</a></dd></div>
          <div><dt className="font-semibold text-vela">Horario</dt><dd>{negocio.horario}</dd></div>
          <div><dt className="font-semibold text-vela">Correo</dt><dd><a href={`mailto:${negocio.correo}`} className="underline underline-offset-4">{negocio.correo}</a></dd></div>
          <div><dt className="font-semibold text-vela">Redes</dt><dd className="flex flex-wrap gap-x-5">{negocio.redes.map((r) => <a key={r.nombre} href={r.url} target="_blank" rel="noopener" className="underline underline-offset-4">{r.nombre}</a>)}</dd></div>
        </dl>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="border-t border-crema/10 bg-noche pb-24 pt-8 text-[0.95rem] text-crema/75 md:pb-8">
      <div className="contenedor flex flex-wrap items-center justify-between gap-3">
        <p>Dolcebella Spa, {negocio.ciudad}</p>
        <p>{negocio.horario}</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-crema/15 bg-noche text-crema md:hidden">
      <a href={waHola} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 bg-ciruela text-[0.9rem] font-semibold text-white"><IconoWa />WhatsApp</a>
      <a href={negocio.telefonoLink} className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-semibold"><IconoTel />Llamar</a>
      <a href={negocio.mapa} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-semibold"><IconoPin />Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#principal" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:text-noche">Saltar al contenido</a>
      <Encabezado />
      <main id="principal">
        <Portada />
        <Paquetes />
        <Carta />
        <Spa />
        <Opiniones />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
