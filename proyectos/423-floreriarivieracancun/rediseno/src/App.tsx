import { useState } from 'react';
import {
  arreglos, bodas, condolencias, foto, negocio, nosotros, otros, pagos, reglas, wa, waInfo, zonas,
} from './data/content';

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
const secciones = [['#tarjeta', 'Tu tarjeta'], ['#arreglos', 'Arreglos'], ['#pedir', 'Cómo pedir'], ['#contacto', 'Contacto']] as const;

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-fucsia/10 bg-papel/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="font-display text-[1.7rem] font-semibold text-fucsia">Florería Riviera</a>
        <nav aria-label="Secciones" className="hidden lg:block">
          <ul className="flex gap-7">{secciones.map(([h, t]) => <li key={h}><a href={h} className="text-gris hover:text-fucsia">{t}</a></li>)}</ul>
        </nav>
        <div className="flex items-center gap-3">
          <a href={negocio.ingles} lang="en" className="font-bold text-fucsia underline underline-offset-4">English</a>
          <a href={waInfo} className="btn hidden !min-h-[42px] !py-2 sm:inline-flex" target="_blank" rel="noopener"><IconoWa /> WhatsApp</a>
        </div>
      </div>
    </header>
  );
}

function Portada() {
  const [a, b, c] = [arreglos[3], arreglos[2], arreglos[1]];
  return (
    <section id="inicio" className="bg-rubor">
      <div className="contenedor grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <div>
          <p className="font-bold text-hoja">Playa del Carmen y Riviera Maya</p>
          <h1 className="mt-3 text-[3rem] sm:text-[4.4rem]">Flores a domicilio en Playa del Carmen</h1>
          <p className="mt-5 max-w-xl text-[1.08rem] text-gris">{nosotros}</p>
          <p className="mt-4 max-w-xl font-bold text-fucsia">{reglas.mismoDia}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#tarjeta" className="btn">Elegir arreglo y escribir la tarjeta</a>
            <a href={waInfo} className="btn-linea" target="_blank" rel="noopener"><IconoWa /> {negocio.whatsappTexto}</a>
          </div>
        </div>
        <div className="grid grid-cols-3 items-end gap-3">
          {[b, a, c].map((x, i) => (
            <figure key={x.id} className={i === 1 ? '' : 'translate-y-6'}>
              <img src={foto(x.id)} alt={x.alt} width={300} height={360} fetchPriority={i === 1 ? 'high' : undefined} className="aspect-[5/6] w-full rounded-2xl object-cover" />
              <figcaption className="mt-2 text-center text-[0.9rem]"><span className="font-bold">{x.nombre}</span> <span className="text-fucsia">{pesos(x.precio)}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// Hora de Playa del Carmen (America/Cancun) para las reglas de entrega.
function ahoraCancun() {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Cancun', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hour12: false })
    .formatToParts(new Date()).map((x) => [x.type, x.value]));
  return { fecha: `${p.year}-${p.month}-${p.day}`, hora: Number(p.hour) % 24 };
}

function Tarjeta() {
  const [id, setId] = useState(arreglos[3].id);
  const [para, setPara] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [de, setDe] = useState('');
  const [fecha, setFecha] = useState('');
  const [zona, setZona] = useState(zonas[0]);
  const x = arreglos.find((y) => y.id === id)!;
  const hoy = ahoraCancun();

  const avisos: string[] = [];
  if (fecha) {
    const d = new Date(`${fecha}T12:00:00`);
    const md = fecha.slice(5);
    if (d.getDay() === 0) avisos.push('Es domingo: para entregas en domingo aplican restricciones.');
    if (md === '02-14' || md === '05-10') avisos.push('Es fecha especial: el pedido debe hacerse y pagarse con mínimo 24 horas de anticipación, y la entrega es en horario abierto de 8 am a 9 pm.');
    if (fecha === hoy.fecha) avisos.push(hoy.hora < 15 ? 'Entrega hoy: todavía estás antes de las 3:00 PM, hora de Playa del Carmen.' : 'Ya pasaron las 3:00 PM en Playa del Carmen: para hoy, confírmalo por WhatsApp.');
    if (fecha < hoy.fecha) avisos.push('Esa fecha ya pasó.');
  }

  const texto = `Hola, quiero pedir un arreglo de Florería Riviera.\nArreglo: ${x.nombre} (${x.codigo}), ${pesos(x.precio)} + envío\n` +
    `Fecha de entrega: ${fecha || '(por definir)'}\nZona: ${zona}\n` +
    `Tarjeta:\nPara: ${para.trim() || '(nombre)'}\n${mensaje.trim() || '(mensaje)'}\nDe: ${de.trim() || '(nombre)'}`;

  return (
    <section id="tarjeta" className="py-16 sm:py-24">
      <div className="contenedor">
        <div className="max-w-2xl">
          <h2 className="text-[2.6rem] sm:text-[3.4rem]">¿Qué dice la tarjeta?</h2>
          <p className="mt-3 text-gris">Cada arreglo lleva su tarjeta de dedicatoria. Elige el arreglo, escríbela aquí y mándala junto con la fecha y la zona de entrega.</p>
        </div>
        <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div className="min-w-0">
            <fieldset>
              <legend className="font-bold">El arreglo</legend>
              <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-7">
                {arreglos.map((y) => (
                  <button key={y.id} type="button" aria-pressed={y.id === id} aria-label={`${y.nombre}, ${pesos(y.precio)}`} onClick={() => setId(y.id)}
                    className={`overflow-hidden rounded-xl border-2 transition-colors ${y.id === id ? 'border-fucsia' : 'border-transparent opacity-80 hover:opacity-100'}`}>
                    <img src={foto(y.id)} alt="" width={300} height={360} loading="lazy" className="aspect-[5/6] w-full object-cover" />
                  </button>
                ))}
              </div>
            </fieldset>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="font-bold">Para<input className="campo" value={para} maxLength={40} onChange={(e) => setPara(e.target.value)} placeholder="¿A quién se lo mandas?" /></label>
              <label className="font-bold">De<input className="campo" value={de} maxLength={40} onChange={(e) => setDe(e.target.value)} placeholder="Tu nombre" /></label>
              <label className="font-bold sm:col-span-2">Mensaje de la tarjeta
                <textarea className="campo min-h-[96px]" value={mensaje} maxLength={160} onChange={(e) => setMensaje(e.target.value)} placeholder="Feliz aniversario, te quiero" />
                <span className="mt-1 block text-right text-[0.85rem] font-normal text-gris">{mensaje.length}/160</span>
              </label>
              <label className="font-bold">Fecha de entrega<input type="date" className="campo" value={fecha} onChange={(e) => setFecha(e.target.value)} /></label>
              <label className="font-bold">Zona
                <select className="campo" value={zona} onChange={(e) => setZona(e.target.value)}>{zonas.map((z) => <option key={z}>{z}</option>)}</select>
              </label>
            </div>
            <div className="mt-4 space-y-2" aria-live="polite">
              {avisos.map((t) => <p key={t} className="rounded-xl bg-rubor px-4 py-3 text-[0.95rem] font-bold text-fucsia">{t}</p>)}
            </div>
          </div>

          <div className="min-w-0">
            <div className="relative mx-auto max-w-[24rem]">
              <img src={foto(x.id)} alt={x.alt} width={300} height={360} className="aspect-[5/6] w-full rounded-3xl object-cover shadow-xl shadow-vino/15" />
              <p className="absolute left-4 top-4 rounded-full bg-papel/95 px-3 py-1 text-[0.9rem] font-bold">{x.codigo}, {pesos(x.precio)} + envío</p>
              <div className="tarjeta -mt-16 ml-auto mr-2 w-[82%]" aria-live="polite">
                <p className="text-[0.8rem] font-bold uppercase tracking-[0.15em] text-fucsia">Florería Riviera</p>
                <p className="mt-3 font-display text-[1.25rem] italic">Para {para.trim() || '…'}</p>
                <p className="mt-2 min-h-[3.5rem] font-display text-[1.5rem] italic leading-snug">{mensaje.trim() || 'Tu mensaje aparecerá aquí.'}</p>
                <p className="mt-3 text-right font-display text-[1.2rem] italic">Con cariño, {de.trim() || '…'}</p>
              </div>
            </div>
            <a href={wa(texto)} className="btn mt-8 w-full" target="_blank" rel="noopener"><IconoWa /> Pedir {x.nombre} por WhatsApp</a>
            <p className="mt-3 text-center text-[0.9rem] text-gris">¿Prefieres pagar en línea? <a href={negocio.pedido(x.codigo.slice(1))} className="enlace" target="_blank" rel="noopener">Compra {x.codigo} en su tienda</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Arreglos() {
  return (
    <section id="arreglos" className="bg-rubor py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="text-[2.6rem] sm:text-[3.2rem]">Nuevos modelos y más vendidos</h2>
        <p className="mt-2 text-gris">Precios en pesos, más envío.</p>
        <ul className="mt-9 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {arreglos.map((x) => (
            <li key={x.id} className="rounded-2xl bg-papel p-3">
              <img src={foto(x.id)} alt={x.alt} width={300} height={360} loading="lazy" className="aspect-[5/6] w-full rounded-xl object-cover" />
              <p className="mt-3 font-display text-[1.35rem] leading-tight">{x.nombre}</p>
              <p className="text-[0.95rem]"><span className="font-bold text-fucsia">{pesos(x.precio)}</span>{x.antes ? <s className="ml-2 text-gris">{pesos(x.antes)}</s> : null} <span className="text-gris">({x.codigo})</span></p>
              <a href={negocio.pedido(x.codigo.slice(1))} className="enlace mt-2 inline-block text-[0.95rem]" target="_blank" rel="noopener">Comprar</a>
            </li>
          ))}
          <li className="flex flex-col justify-center rounded-2xl border-2 border-dashed border-fucsia/30 p-5">
            <p className="font-display text-[1.5rem] leading-tight">Todo el catálogo</p>
            <p className="mt-2 text-[0.95rem] text-gris">Rosas, tulipanes, orquídeas, girasoles, gerberas y lilis.</p>
            <a href={negocio.catalogo} className="enlace mt-3" target="_blank" rel="noopener">Ver catálogo completo</a>
          </li>
        </ul>
        <h3 className="mt-14 text-[1.8rem]">Ofertas, frutales y orquídeas</h3>
        <ul className="mt-5 grid gap-x-10 sm:grid-cols-2">
          {otros.map(([c, n, p, antes]) => (
            <li key={c} className="flex items-baseline gap-3 border-b border-fucsia/15 py-2.5">
              <span className="font-bold">{n}</span><span className="text-[0.85rem] text-gris">{c}</span>
              <span className="flex-1 border-b border-dotted border-fucsia/30" aria-hidden="true" />
              <span className="font-bold text-fucsia">${p}</span>{antes ? <s className="text-[0.9rem] text-gris">${antes}</s> : null}
            </li>
          ))}
        </ul>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl bg-papel p-7"><h3 className="text-[1.7rem]">Condolencias</h3><p className="mt-2 text-gris">{condolencias}</p>
            <a href={wa('Hola, necesito un arreglo de condolencias en Playa del Carmen.')} className="enlace mt-4 inline-block" target="_blank" rel="noopener">Pedir un arreglo de condolencias</a></article>
          <article className="rounded-2xl bg-papel p-7"><h3 className="text-[1.7rem]">Bodas y eventos</h3><p className="mt-2 text-gris">{bodas}</p>
            <a href={wa('Hola, quiero cotizar flores para una boda o evento en la Riviera Maya.')} className="enlace mt-4 inline-block" target="_blank" rel="noopener">Cotizar mi boda</a></article>
        </div>
      </div>
    </section>
  );
}

function ComoPedir() {
  return (
    <section id="pedir" className="py-16 sm:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <h2 className="text-[2.6rem] sm:text-[3.2rem]">Entregas</h2>
          <ul className="mt-5 space-y-3 text-gris">
            <li>{reglas.mismoDia}</li><li>{reglas.horario}</li><li>{reglas.especiales}</li><li>{reglas.variacion}</li>
          </ul>
          <p className="mt-6 font-bold">Entregan en</p>
          <p className="text-gris">{zonas.join(', ')}.</p>
          <a href={negocio.estatus} className="enlace mt-6 inline-block" target="_blank" rel="noopener">Checa el estatus de tu pedido</a>
        </div>
        <div>
          <h2 className="text-[2.6rem] sm:text-[3.2rem]">Pagos</h2>
          <dl className="mt-5 divide-y divide-fucsia/15 border-y border-fucsia/15">
            {pagos.map(([t, d]) => <div key={t} className="py-4"><dt className="font-bold">{t}</dt><dd className="mt-1 text-gris">{d}</dd></div>)}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="oscuro py-16 sm:py-20">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-[2.6rem]">Florería Riviera</h2>
          <p className="mt-4 flex gap-2"><IconoPin className="mt-1 h-5 w-5 shrink-0 text-rosa" />{negocio.direccion}</p>
          <a href={negocio.mapa} className="enlace mt-2 inline-block" target="_blank" rel="noopener">Abrir en Google Maps</a>
        </div>
        <div>
          <a href={waInfo} className="btn !bg-rosa !text-vino hover:!bg-white" target="_blank" rel="noopener"><IconoWa /> WhatsApp {negocio.whatsappTexto}</a>
          <p className="mt-5"><a href={negocio.telefonoHref} className="enlace">Tel. {negocio.telefono}</a></p>
          <p className="mt-2"><a href={`mailto:${negocio.correo}`} className="enlace">{negocio.correo}</a></p>
          <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2">{negocio.redes.map(([n, u]) => <a key={n} href={u} className="enlace" target="_blank" rel="noopener">{n}</a>)}</p>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-[#241019] pb-28 pt-8 text-rubor/80 lg:pb-8">
      <div className="contenedor flex flex-col gap-2 text-[0.95rem] sm:flex-row sm:justify-between">
        <p className="font-display text-[1.3rem] text-rubor">Florería Riviera</p>
        <p>Flores a domicilio en Playa del Carmen y la Riviera Maya.</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-rubor/15 bg-vino text-rubor lg:hidden">
      <a href={waInfo} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 bg-fucsia text-[0.9rem] font-bold text-white"><IconoWa />WhatsApp</a>
      <a href={negocio.telefonoHref} className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-bold"><IconoTel />Llamar</a>
      <a href={negocio.mapa} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-bold"><IconoPin />Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#principal" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-papel focus:px-4 focus:py-2">Saltar al contenido</a>
      <Encabezado />
      <main id="principal">
        <Portada />
        <Tarjeta />
        <Arreglos />
        <ComoPedir />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
