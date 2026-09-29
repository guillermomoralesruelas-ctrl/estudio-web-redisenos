import { useState } from 'react';
import { amenidadesComunes, distancias, eventos, negocio, reglas, suites, wa } from './data/content';


function IconoWa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.2.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}
function IconoPin({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>;
}

const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;
const waHola = wa('Hola, me interesa hospedarme en Casa Pitic. ¿Me pueden compartir disponibilidad y tarifas?');
const secciones = [['#suites', 'Las suites'], ['#estancia', 'Tu estancia'], ['#barrio', 'El barrio'], ['#contacto', 'Contacto']] as const;
const noches = [14, 21, 30] as const;

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-cal/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="font-display text-[1.5rem] text-tinta">Casa Pitic</a>
        <nav aria-label="Secciones" className="hidden md:block">
          <ul className="flex gap-7">{secciones.map(([h, t]) => <li key={h}><a href={h} className="text-laja hover:text-tinta">{t}</a></li>)}</ul>
        </nav>
        <a href={waHola} className="btn !min-h-[42px] !px-4 !py-2" target="_blank" rel="noopener"><IconoWa /> <span className="hidden sm:inline">Reservar</span></a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="oscuro relative isolate overflow-hidden">
      <img src="./patio.webp" alt="Patio interior de Casa Pitic con pérgola de teja, muro de laja, mesa de travertino y plantas" width={960} height={1280} fetchPriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover object-[center_60%]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-tinta via-tinta/80 to-tinta/25 md:bg-gradient-to-r md:from-tinta md:via-tinta/80 md:to-tinta/10" aria-hidden="true" />
      <div className="contenedor pb-14 pt-64 md:py-36">
        <p className="font-semibold text-atardecer">Colonia Pitic, Hermosillo</p>
        <h1 className="mt-3 max-w-2xl text-[2.8rem] sm:text-[4.2rem]">Hospedaje ejecutivo en Hermosillo, en una casona de Colonia Pitic</h1>
        <p className="mt-5 max-w-xl text-[1.1rem]">Dos suites independientes de 2 recámaras, con cocina, espacio de trabajo y cochera techada. Desde una noche, con tarifa escalonada y factura CFDI.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#suites" className="btn">Elegir suite</a>
          <a href={waHola} className="btn-linea" target="_blank" rel="noopener"><IconoWa /> WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

function Suites() {
  const [id, setId] = useState<'kino' | 'pitic'>('kino');
  const [n, setN] = useState<(typeof noches)[number]>(30);
  const s = suites.find((x) => x.id === id)!;
  const total = n === 30 ? s.mes : s.desde * n;
  const texto = `Hola, me interesa ${s.nombre} en Casa Pitic por ${n} noches. ¿Disponibilidad y tarifa?`;
  return (
    <section id="suites" className="py-20 md:py-28">
      <div className="contenedor">
        <h2 className="max-w-2xl text-[2.4rem] sm:text-[3.2rem]">¿Arriba o abajo?</h2>
        <p className="mt-4 max-w-2xl text-laja">La casa tiene una suite en cada planta y las dos dan al mismo patio. Toca una planta para ver cómo es y cuánto sale según las noches.</p>
        <div className="mt-10 grid gap-10 lg:grid-cols-[22rem_1fr] lg:items-start">
          <div>
            <div aria-hidden="true" className="teja mx-auto h-14 w-full" />
            <div role="group" aria-label="Plantas de la casa" className="grid gap-2 border-x-4 border-b-4 border-laja/40 bg-adobe p-3">
              {suites.map((x) => (
                <div key={x.id} className="flex items-stretch gap-2">
                  <button type="button" aria-pressed={id === x.id} onClick={() => setId(x.id as 'kino' | 'pitic')} className="planta min-h-[96px] rounded-sm">
                    <span className="text-[0.9rem] opacity-90">{x.planta}</span>
                    <span className="font-display text-[1.5rem] leading-tight">{x.nombre}</span>
                    <span className="text-[0.9rem] opacity-90">{x.m2} m², {x.banos}</span>
                  </button>
                  {x.terraza ? <div className="pergola w-16 shrink-0 rounded-sm border-2 border-teja/40 bg-cal" title="Terraza privada"><span className="sr-only">Terraza privada</span></div> : <div className="w-16 shrink-0" />}
                </div>
              ))}
              <p className="mt-1 border-t-2 border-dashed border-laja/40 pt-2 text-center text-[0.9rem] text-laja">Patio con pérgola y entrada de cada suite</p>
            </div>
            <div className="mt-6">
              <p className="font-semibold">¿Cuántas noches?</p>
              <div role="group" aria-label="Noches" className="mt-2 flex gap-2">
                {noches.map((x) => (
                  <button key={x} type="button" aria-pressed={n === x} onClick={() => setN(x)}
                    className={`min-h-[44px] flex-1 rounded-md border-2 font-semibold transition-colors ${n === x ? 'border-tinta bg-tinta text-cal' : 'border-tinta/20 bg-white hover:border-tinta'}`}>{x === 30 ? 'Un mes' : `${x}`}</button>
                ))}
              </div>
              <p className="mt-2 text-[0.92rem] text-laja">Para menos de 14 noches, la tarifa se cotiza por WhatsApp.</p>
            </div>
          </div>
          <div className="rounded-xl border border-tinta/10 bg-white">
            <div className="grid grid-cols-2 gap-1 p-1">
              {s.fotos.map((f, i) => <img key={f.foto} src={`./${f.foto}`} alt={f.alt} width={960} height={1280} loading="lazy" className={`aspect-[4/3] w-full rounded-lg object-cover ${i === 0 && s.fotos.length % 2 === 1 ? 'col-span-2 aspect-[16/9]' : ''}`} />)}
            </div>
            <div className="p-6 sm:p-8">
              <p className="font-semibold text-mezquite">{s.planta}</p>
              <h3 className="mt-1 text-[2rem]">{s.nombre}</h3>
              <p className="mt-3">{s.resumen}</p>
              <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 text-[0.98rem] sm:grid-cols-4">
                <div><dt className="text-laja">Recámaras</dt><dd className="font-semibold">{s.recamaras}</dd></div>
                <div><dt className="text-laja">Baños</dt><dd className="font-semibold">{s.banos}</dd></div>
                <div><dt className="text-laja">Superficie</dt><dd className="font-semibold">{s.m2} m²</dd></div>
                <div><dt className="text-laja">Personas</dt><dd className="font-semibold">Hasta 4</dd></div>
              </dl>
              <p className="mt-4 text-[0.98rem]"><span className="text-laja">Acceso:</span> {s.acceso}. <span className="text-laja">Ideal para:</span> {s.ideal}</p>
              <div className="mt-6 flex flex-wrap items-end justify-between gap-4 border-t border-tinta/10 pt-6" aria-live="polite">
                <div>
                  <p className="text-[0.95rem] text-laja">{n === 30 ? 'Mes completo (30 noches)' : `${n} noches, desde ${pesos(s.desde)} por noche`}</p>
                  <p className="font-display text-[2.4rem] leading-none text-teja">{n === 30 ? '' : 'desde '}{pesos(total)}</p>
                  {n === 30 && <p className="text-[0.95rem] text-laja">Equivale a {pesos(Math.round(s.mes / 30))} por noche.</p>}
                </div>
                <a href={wa(texto)} target="_blank" rel="noopener" className="btn"><IconoWa /> Pedir disponibilidad</a>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-8 max-w-3xl text-[0.95rem] text-laja">Precios en pesos mexicanos, sin IVA, para reserva directa. ¿Son 8 personas? Se pueden reservar las dos suites: <a href={wa('Hola, me interesa reservar ambas unidades de Casa Pitic. ¿Disponibilidad y tarifa?')} target="_blank" rel="noopener" className="font-semibold text-teja underline underline-offset-4">consultar ambas</a>.</p>
      </div>
    </section>
  );
}

function Estancia() {
  return (
    <section id="estancia" className="bg-adobe py-20 md:py-28">
      <div className="contenedor grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-[2.4rem] sm:text-[3rem]">Para trabajar desde aquí</h2>
          <p className="mt-4 text-laja">Las dos suites incluyen:</p>
          <ul className="mt-4 grid gap-2">{amenidadesComunes.map((a) => <li key={a} className="border-b border-tinta/10 pb-2">{a}</li>)}</ul>
        </div>
        <dl className="grid gap-6 self-start">
          {reglas.map((r) => <div key={r.titulo}><dt className="font-display text-[1.5rem]">{r.titulo}</dt><dd className="mt-1 text-laja">{r.texto}</dd></div>)}
        </dl>
      </div>
    </section>
  );
}

function Barrio() {
  return (
    <section id="barrio" className="py-20 md:py-28">
      <div className="contenedor grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-[2.4rem] sm:text-[3rem]">Colonia residencial, todo cerca</h2>
          <p className="mt-4 text-laja">Hermosillo se recorre en auto. Estos son los tiempos desde la casa:</p>
          <table className="mt-6 w-full text-left">
            <caption className="sr-only">Tiempos en auto desde Casa Pitic</caption>
            <tbody>{distancias.map((d) => <tr key={d.lugar} className="border-b border-tinta/10"><th scope="row" className="py-2 font-normal">{d.lugar}</th><td className="py-2 text-right font-semibold">{d.tiempo}</td></tr>)}</tbody>
          </table>
        </div>
        <div>
          <h3 className="text-[1.8rem]">Base para los grandes eventos</h3>
          <ul className="mt-4 grid gap-4">
            {eventos.map((e) => <li key={e.nombre} className="rounded-lg border border-tinta/10 bg-white p-5"><p className="font-semibold">{e.nombre}</p><p className="text-laja">{e.fecha}</p></li>)}
          </ul>
          <a href={wa('Hola, me interesa hospedarme en Casa Pitic durante un evento en Hermosillo. ¿Me pueden compartir disponibilidad?')} target="_blank" rel="noopener" className="btn mt-6"><IconoWa /> Consultar por un evento</a>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="oscuro py-20 md:py-28">
      <div className="contenedor grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-[2.4rem] sm:text-[3rem]">Reserva directo</h2>
          <p className="mt-4 max-w-md">Dinos fechas, cuántas personas y si necesitas factura. Empresas: tarifas corporativas y acuerdos directos.</p>
          <a href={waHola} className="btn mt-8" target="_blank" rel="noopener"><IconoWa /> WhatsApp {negocio.whatsappTexto}</a>
        </div>
        <dl className="grid gap-6 self-start">
          <div><dt className="font-semibold text-atardecer">Dirección</dt><dd>{negocio.direccion}<br /><a href={negocio.mapa} target="_blank" rel="noopener" className="font-semibold text-cal underline underline-offset-4"><IconoPin className="mr-1 inline h-4 w-4" />Abrir en Google Maps</a></dd></div>
          <div><dt className="font-semibold text-atardecer">Correo</dt><dd><a href={`mailto:${negocio.correo}`} className="underline underline-offset-4">{negocio.correo}</a></dd></div>
        </dl>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="border-t border-cal/10 bg-tinta pb-24 pt-8 text-[0.95rem] text-cal/75 md:pb-8">
      <div className="contenedor flex flex-wrap items-center justify-between gap-3">
        <p>Casa Pitic, residencia ejecutiva en Colonia Pitic, Hermosillo</p>
        <p>Check-in 15:00, check-out 11:00</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-cal/15 bg-tinta text-cal md:hidden">
      <a href={waHola} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 bg-teja text-[0.9rem] font-semibold text-white"><IconoWa />WhatsApp</a>
      <a href="#suites" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-semibold"><span aria-hidden="true" className="font-display text-[1.1rem] leading-5">2</span>Suites</a>
      <a href={negocio.mapa} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-semibold"><IconoPin />Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#principal" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:text-tinta">Saltar al contenido</a>
      <Encabezado />
      <main id="principal">
        <Portada />
        <Suites />
        <Estancia />
        <Barrio />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
