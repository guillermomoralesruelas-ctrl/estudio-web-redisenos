import { useMemo, useState } from 'react';
import { casas, experiencias, negocio, noches, pilaAdentro, porque, soloParaTi, suites, enCasa, type CasaId } from './data/content';


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

const foto = (n: string) => `${import.meta.env.BASE_URL}${n}`;
const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;
const wa = (casa: CasaId, texto: string) => `https://wa.me/${casas[casa].whatsapp}?text=${encodeURIComponent(texto)}`;
const mapa = (casa: CasaId) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${casas[casa].nombre}, ${casas[casa].direccion}, San Miguel de Allende, Gto.`)}`;
const secciones = [['#casas', 'Las dos casas'], ['#noches', 'Tarifas'], ['#pila-seca', 'Spa y Florios'], ['#experiencias', 'Experiencias'], ['#contacto', 'Contacto']] as const;

function Encabezado({ casa }: { casa: CasaId }) {
  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-cal/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="font-display text-[1.75rem] tracking-wide text-tinta">Clandestino</a>
        <nav aria-label="Secciones" className="hidden lg:block">
          <ul className="flex gap-7">{secciones.map(([h, t]) => <li key={h}><a href={h} className="text-piedra hover:text-tinta">{t}</a></li>)}</ul>
        </nav>
        <a href={wa(casa, `Hola, quiero información para hospedarme en ${casas[casa].nombre}.`)} className="btn !min-h-[42px] !py-2" target="_blank" rel="noopener"><IconoWa /> <span className="hidden sm:inline">WhatsApp</span></a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="contenedor grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.1fr_1fr]">
      <div>
        <p className="font-bold text-almagre">Centro Histórico · desde {negocio.desde}</p>
        <h1 className="mt-3 text-[3.1rem] sm:text-[4.6rem]">Hotel boutique en San Miguel de Allende</h1>
        <p className="mt-5 max-w-xl text-[1.12rem] text-piedra">Dos casonas centenarias a unas calles de la Parroquia: Recreo, con rooftop, y Pila Seca, con patios. Veintiún suites, solo adultos, y tu perro también es bienvenido.</p>
        <ul className="mt-6 flex flex-wrap gap-2 text-[0.95rem]">
          {['21 suites', 'Solo adultos', 'Pet friendly', 'Desayuno incluido', 'Valet parking incluido'].map((t) => <li key={t} className="rounded-full border border-tinta/20 px-3 py-1">{t}</li>)}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#noches" className="btn">¿Qué noches vienes?</a>
          <a href="#casas" className="btn-linea">Conocer las casas</a>
        </div>
      </div>
      <div className="relative">
        <img src={foto('recreo-terraza.webp')} alt="Dos huéspedes en el rooftop de Hotel Recreo con la Parroquia de San Miguel al fondo" width={1000} height={667} fetchPriority="high"
          className="arco aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]" />
        <p className="absolute bottom-4 left-4 rounded-full bg-cal/95 px-4 py-1.5 text-[0.9rem] font-bold">Rooftop de Recreo</p>
      </div>
    </section>
  );
}

function Casas() {
  return (
    <section id="casas" className="oscuro py-16 sm:py-24">
      <div className="contenedor">
        <p className="font-bold text-cantera">A cinco minutos una de la otra</p>
        <h2 className="mt-2 text-[2.6rem] sm:text-[3.6rem]">Dos casas, un mismo espíritu</h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {(Object.keys(casas) as CasaId[]).map((id) => {
            const c = casas[id];
            return (
              <article key={id}>
                <div className="grid grid-cols-[1.6fr_1fr] gap-3">
                  <img src={foto(c.foto)} alt={c.fotoAlt} width={1024} height={683} loading="lazy" className="arco aspect-[4/5] w-full object-cover" />
                  <img src={foto(c.foto2)} alt={c.foto2Alt} width={1024} height={683} loading="lazy" className="mt-12 aspect-[3/4] w-full rounded-2xl object-cover" />
                </div>
                <p className="mt-6 font-bold text-cantera">{c.para}</p>
                <h3 className="mt-1 text-[2.3rem] !text-cal">{c.nombre}</h3>
                <p className="text-[0.95rem]">{c.direccion} · {c.ubicacion}</p>
                <p className="mt-3">{c.texto}</p>
                <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
                  {c.puntos.map((p) => <li key={p} className="flex gap-2"><span aria-hidden="true" className="text-cantera">—</span>{p}</li>)}
                </ul>
                <p className="mt-4 text-[0.95rem]">Tel. <a href={`tel:${c.tel}`} className="font-bold text-cal underline underline-offset-4">{c.telVisible}</a></p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Noches({ casa, setCasa }: { casa: CasaId; setCasa: (c: CasaId) => void }) {
  const disponibles = suites.filter((s) => s.casas.includes(casa));
  const [suiteId, setSuiteId] = useState('balcon');
  const [personas, setPersonas] = useState<2 | 3 | 4>(2);
  const [elegidas, setElegidas] = useState<number[]>([5, 6]);
  const suite = disponibles.find((s) => s.id === suiteId) ?? disponibles[0];
  const tarifa = suite.porPersonas ? suite.porPersonas[personas] : { semana: suite.semana, finde: suite.finde };
  const total = elegidas.reduce((t, i) => t + (noches[i].finde ? tarifa.finde : tarifa.semana), 0);
  const nombreSuite = suite.id === 'balcon' && casa === 'pila' ? 'Suite Grande con Terraza' : suite.nombre;

  const alternar = (i: number) => setElegidas((e) => (e.includes(i) ? e.filter((x) => x !== i) : [...e, i].sort()));
  const cambiarCasa = (c: CasaId) => { setCasa(c); if (!suites.find((s) => s.id === suiteId)?.casas.includes(c)) setSuiteId('balcon'); };

  const lista = elegidas.map((i) => noches[i].largo);
  const texto = lista.length === 0 ? '' : lista.length === 1 ? lista[0] : `${lista.slice(0, -1).join(', ')} y ${lista[lista.length - 1]}`;
  const mensaje = useMemo(() => elegidas.length === 0
    ? `Hola, quiero información de la ${nombreSuite} en ${casas[casa].nombre}.`
    : `Hola, quiero reservar la ${nombreSuite} en ${casas[casa].nombre}${suite.porPersonas ? ` para ${personas} personas` : ''}: ${elegidas.length} ${elegidas.length === 1 ? 'noche' : 'noches'} (${texto}). Total estimado ${pesos(total)} MXN. ¿Qué fechas tienen disponibles?`,
  [casa, nombreSuite, suite.porPersonas, personas, elegidas.length, texto, total]);

  return (
    <section id="noches" className="py-16 sm:py-24">
      <div className="contenedor">
        <p className="font-bold text-almagre">Tarifas por noche, con impuestos, desayuno y valet</p>
        <h2 className="mt-2 text-[2.8rem] sm:text-[4rem]">¿Qué noches vienes?</h2>
        <p className="mt-3 max-w-2xl text-piedra">De domingo a jueves aplica la tarifa entre semana; viernes y sábado, la de fin de semana. Elige casa, suite y noches, y te decimos cuánto sería antes de escribir.</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <fieldset>
              <legend className="font-bold">Casa</legend>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {(Object.keys(casas) as CasaId[]).map((c) => (
                  <button key={c} type="button" aria-pressed={casa === c} onClick={() => cambiarCasa(c)}
                    className={`min-h-[52px] rounded-2xl border-2 px-4 text-left font-bold transition-colors ${casa === c ? (c === 'recreo' ? 'border-almagre bg-almagre text-white' : 'border-nopal bg-nopal text-white') : 'border-tinta/15 bg-white hover:border-tinta/40'}`}>
                    {casas[c].nombre} <span className="block text-[0.85rem] font-normal">{casas[c].suites} suites</span>
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="mt-6">
              <legend className="font-bold">Suite</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {disponibles.map((s) => {
                  const n = s.id === 'balcon' && casa === 'pila' ? 'Grande con Terraza' : s.nombre.replace('Suite ', '');
                  return (
                    <button key={s.id} type="button" aria-pressed={suite.id === s.id} onClick={() => setSuiteId(s.id)}
                      className={`min-h-[44px] rounded-full border-2 px-4 font-bold transition-colors ${suite.id === s.id ? 'border-tinta bg-tinta text-cal' : 'border-tinta/20 hover:border-tinta'}`}>{n}</button>
                  );
                })}
              </div>
              {suite.porPersonas && (
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="text-[0.95rem]">Personas:</span>
                  {([2, 3, 4] as const).map((p) => (
                    <button key={p} type="button" aria-pressed={personas === p} onClick={() => setPersonas(p)}
                      className={`h-11 w-11 rounded-full border-2 font-bold ${personas === p ? 'border-tinta bg-tinta text-cal' : 'border-tinta/20'}`}>{p}</button>
                  ))}
                </div>
              )}
            </fieldset>

            <fieldset className="mt-6">
              <legend className="font-bold">Noches (toca las que te quedas)</legend>
              <div className="mt-2 grid grid-cols-7 gap-1.5 sm:gap-2">
                {noches.map((n, i) => {
                  const on = elegidas.includes(i);
                  return (
                    <button key={n.corto} type="button" aria-pressed={on} onClick={() => alternar(i)} aria-label={`Noche del ${n.largo}, ${n.finde ? 'fin de semana' : 'entre semana'}, ${pesos(n.finde ? tarifa.finde : tarifa.semana)}`}
                      className={`arco flex min-h-[112px] flex-col items-center justify-end gap-1 border-2 px-0.5 pb-3 transition-colors ${on ? 'border-tinta bg-tinta text-cal' : 'border-tinta/15 bg-white hover:border-tinta/50'}`}>
                      <span className="font-bold">{n.corto}</span>
                      <span className={`text-[0.7rem] leading-tight sm:text-[0.8rem] ${on ? 'text-cantera' : 'text-piedra'}`}>{pesos(n.finde ? tarifa.finde : tarifa.semana)}</span>
                    </button>
                  );
                })}
              </div>
              <p className="mt-2 text-[0.9rem] text-piedra">Viernes y sábado: tarifa de fin de semana. Check-in {negocio.checkIn}, check-out {negocio.checkOut}.</p>
            </fieldset>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-[0_1px_0_rgb(43_33_29/0.08)] sm:p-8">
            <p className={`font-bold ${casa === 'recreo' ? 'text-almagre' : 'text-nopal'}`}>{suite.etiqueta} · {casas[casa].nombre}</p>
            <h3 className="mt-1 text-[2.2rem]">{nombreSuite}</h3>
            <p className="mt-2 text-piedra">{enCasa(suite.texto, casa)}</p>
            <ul className="mt-4 grid gap-1 text-[0.95rem]">
              {[suite.personas, enCasa(suite.cama, casa), `Baño: ${enCasa(suite.bano, casa)}`, ...suite.extras.map((x) => enCasa(x, casa))].filter(Boolean).map((t) => <li key={t} className="flex gap-2"><span aria-hidden="true" className="text-almagre">·</span>{t}</li>)}
            </ul>
            <div className="mt-6 border-t border-tinta/10 pt-5" aria-live="polite">
              <p className="text-[0.95rem] text-piedra">{elegidas.length === 0 ? 'Elige al menos una noche' : `${elegidas.length} ${elegidas.length === 1 ? 'noche' : 'noches'}: ${texto}`}</p>
              <p className="font-display text-[2.8rem] leading-none">{pesos(total)} <span className="font-sans text-[1rem] text-piedra">MXN</span></p>
              <p className="mt-2 text-[0.9rem] text-piedra">Incluye {negocio.incluye.join(', ').toLowerCase()}. Tarifa directa estimada; la disponibilidad se confirma por WhatsApp.</p>
            </div>
            <a href={wa(casa, mensaje)} target="_blank" rel="noopener" className="btn mt-5 w-full"><IconoWa /> Pedir estas noches</a>
            <p className="mt-3 text-center text-[0.9rem]">o llama a {casas[casa].corto}: <a href={`tel:${casas[casa].tel}`} className="enlace">{casas[casa].telVisible}</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PilaAdentro() {
  return (
    <section id="pila-seca" className="bg-white py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="font-bold text-nopal">Dentro de Hotel Pila Seca</p>
          <h2 className="mt-2 text-[2.6rem] sm:text-[3.4rem]">Spa y restaurante, sin salir a la calle</h2>
          <img src={foto('sala.webp')} alt="Sala con escalera de herrería, plantas y arte en una de las casonas de Clandestino" width={1024} height={768} loading="lazy" className="mt-6 aspect-[4/3] w-full rounded-2xl object-cover" />
        </div>
        <div className="grid gap-5 self-center sm:grid-cols-2">
          {pilaAdentro.map((p) => (
            <article key={p.nombre} className="rounded-3xl bg-cal p-6">
              <h3 className="text-[1.9rem]">{p.nombre}</h3>
              <p className="mt-2 text-piedra">{p.texto}</p>
              <ul className="mt-4 grid gap-1 text-[0.95rem]">{p.lista.map((l) => <li key={l} className="flex gap-2"><span aria-hidden="true" className="text-nopal">—</span>{l}</li>)}</ul>
            </article>
          ))}
          <a href={wa('pila', 'Hola, quiero reservar una sesión en el Spa / una mesa en Florios de Hotel Pila Seca.')} target="_blank" rel="noopener" className="btn sm:col-span-2 sm:justify-self-start"><IconoWa /> Reservar Spa o mesa</a>
        </div>
      </div>
    </section>
  );
}

function Experiencias() {
  return (
    <section id="experiencias" className="py-16 sm:py-24">
      <div className="contenedor">
        <p className="font-bold text-almagre">Más que una habitación</p>
        <h2 className="mt-2 text-[2.6rem] sm:text-[3.6rem]">San Miguel se camina, se saborea y se vive despacio</h2>
        <p className="mt-3 max-w-2xl text-piedra">No venden paquetes rígidos: cuéntale al concierge el motivo del viaje y arma contigo la estancia.</p>
        <ul className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {experiencias.map((e) => (
            <li key={e.nombre} className="border-t border-tinta/15 pt-4">
              <h3 className="font-sans text-[1.05rem] font-bold">{e.nombre}</h3>
              <p className="mt-1 text-piedra">{e.texto}</p>
            </li>
          ))}
        </ul>

        <div className="oscuro mt-14 grid overflow-hidden rounded-3xl lg:grid-cols-[1fr_1.2fr]">
          <img src={foto('suite.webp')} alt="Suite de Clandestino con cama de postes y piso de pasta" width={900} height={600} loading="lazy" className="h-full min-h-[240px] w-full object-cover" />
          <div className="p-7 sm:p-10">
            <p className="font-bold text-cantera">Clandestino solo para Ti</p>
            <h3 className="mt-1 text-[2.3rem] !text-cal">La casa entera, para tu celebración</h3>
            <p className="mt-3">{soloParaTi.texto}</p>
            <p className="mt-4 text-cantera">{soloParaTi.ocasiones.join(' · ')}</p>
            <ul className="mt-4 grid gap-1 text-[0.95rem]">{soloParaTi.incluye.map((i) => <li key={i} className="flex gap-2"><span aria-hidden="true" className="text-cantera">—</span>{i}</li>)}</ul>
            <a href={wa('recreo', 'Hola, quiero cotizar «Clandestino solo para Ti» para un evento privado.')} target="_blank" rel="noopener" className="btn mt-6"><IconoWa /> Cotizar mi evento</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="bg-white py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="text-[2.6rem] sm:text-[3.6rem]">Reservaciones</h2>
        <ul className="mt-6 grid gap-x-8 gap-y-2 text-piedra sm:grid-cols-2 lg:grid-cols-3">{porque.map((p) => <li key={p} className="flex gap-2"><span aria-hidden="true" className="text-almagre">—</span>{p}</li>)}</ul>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {(Object.keys(casas) as CasaId[]).map((id) => {
            const c = casas[id];
            return (
              <article key={id} className="rounded-3xl bg-cal p-6 sm:p-8">
                <h3 className="text-[2rem]">{c.nombre}</h3>
                <p className="mt-2 flex gap-2"><IconoPin className="mt-1 h-5 w-5 shrink-0 text-almagre" />{c.direccion}, San Miguel de Allende, Gto.</p>
                <a href={mapa(id)} target="_blank" rel="noopener" className="enlace mt-2 inline-block">Abrir en Google Maps</a>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a href={wa(id, `Hola, quiero información para hospedarme en ${c.nombre}.`)} target="_blank" rel="noopener" className="btn"><IconoWa /> {c.whatsappVisible}</a>
                  <a href={`tel:${c.tel}`} className="btn-linea"><IconoTel /> {c.telVisible}</a>
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-8">Correo: <a href={`mailto:${negocio.correo}`} className="enlace">{negocio.correo}</a> · <a href={negocio.instagram} target="_blank" rel="noopener" className="enlace">Instagram</a> · <a href={negocio.facebook} target="_blank" rel="noopener" className="enlace">Facebook</a></p>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro pb-24 pt-10 lg:pb-10">
      <div className="contenedor flex flex-wrap items-baseline justify-between gap-4">
        <p className="font-display text-[1.6rem] text-cal">Clandestino Hotel</p>
        <p className="text-[0.95rem]">Hotel Recreo y Hotel Pila Seca · Centro Histórico, San Miguel de Allende</p>
      </div>
    </footer>
  );
}

function BarraMovil({ casa }: { casa: CasaId }) {
  const c = casas[casa];
  return (
    <nav aria-label={`Contacto rápido con ${c.nombre}`} className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-cal/15 bg-tinta text-cal lg:hidden">
      <a href={wa(casa, `Hola, quiero información para hospedarme en ${c.nombre}.`)} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 bg-almagre text-[0.9rem] font-bold text-white"><IconoWa />WhatsApp</a>
      <a href={`tel:${c.tel}`} className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-bold"><IconoTel />Llamar a {c.corto}</a>
      <a href={mapa(casa)} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-bold"><IconoPin />Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  const [casa, setCasa] = useState<CasaId>('recreo');
  return (
    <>
      <a href="#principal" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2">Saltar al contenido</a>
      <Encabezado casa={casa} />
      <main id="principal">
        <Portada />
        <Casas />
        <Noches casa={casa} setCasa={setCasa} />
        <PilaAdentro />
        <Experiencias />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil casa={casa} />
    </>
  );
}
