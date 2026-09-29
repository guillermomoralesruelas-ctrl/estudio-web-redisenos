import { useMemo, useState } from 'react';
import { amenidades, ecosistema, foto, incluye, kumo, legal, lotes, nahya, negocio, wa, waInfo, type Lote } from './data/content';

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
const secciones = [['#lotes', 'Lotes'], ['#kumo', 'Kumo Living'], ['#nahya', 'Nahya'], ['#amenidades', 'Amenidades'], ['#contacto', 'Contacto']] as const;

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-selva/10 bg-arena/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="font-display text-[1.6rem] text-selva">Cumbres de Mita</a>
        <nav aria-label="Secciones" className="hidden lg:block">
          <ul className="flex gap-7">{secciones.map(([h, t]) => <li key={h}><a href={h} className="text-musgo hover:text-selva">{t}</a></li>)}</ul>
        </nav>
        <a href={waInfo} className="btn !min-h-[42px] !py-2" target="_blank" rel="noopener"><IconoWa /> <span className="hidden sm:inline">WhatsApp</span></a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="oscuro relative isolate overflow-hidden">
      <img src={foto('desarrollo')} alt="Vista aérea de Cumbres de Mita: el circuito de calles entre la selva y la Casa Club" width={1400} height={933} fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-55" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-selva via-selva/80 to-selva/20" aria-hidden="true" />
      <div className="contenedor py-20 sm:py-28">
        <p className="font-bold text-trigo">Punta de Mita, Riviera Nayarit</p>
        <h1 className="mt-3 max-w-3xl text-[3rem] sm:text-[4.6rem]">Punta de Mita empieza aquí</h1>
        <p className="mt-5 max-w-xl text-[1.1rem]">192 unidades en Corral del Risco: 157 lotes residenciales, 8 residencias Nahya y 27 departamentos Kumo Living. Diseñado por CAM Grupo.</p>
        <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
          <div><dt className="text-[0.9rem]">Terrenos desde</dt><dd className="font-display text-[2.2rem] text-trigo">{pesos(negocio.precioM2)}/m²</dd></div>
          <div><dt className="text-[0.9rem]">Departamentos desde</dt><dd className="font-display text-[2.2rem] text-trigo">$2.9M</dd></div>
          <div><dt className="text-[0.9rem]">Entrega estimada</dt><dd className="font-display text-[2.2rem] text-trigo">2027</dd></div>
        </dl>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#lotes" className="btn">Ver los 12 lotes</a>
          <a href={wa('Hola, quiero agendar un tour privado en Cumbres de Mita.')} className="btn-claro" target="_blank" rel="noopener">Agendar tour</a>
        </div>
      </div>
    </section>
  );
}

type Filtro = 'Todos' | Lote['tipo'];

function Lotes() {
  const [filtro, setFiltro] = useState<Filtro>('Todos');
  const [sel, setSel] = useState('309');
  // Posición de cada lote disponible en la cuadrícula (repartidos en orden; no es su lugar en el plano).
  const posiciones = useMemo(() => {
    const m = new Map<number, Lote>();
    lotes.forEach((l, i) => m.set(Math.round(6 + (i * (negocio.totalLotes - 12)) / (lotes.length - 1)), l));
    return m;
  }, []);
  const l = lotes.find((x) => x.num === sel)!;
  return (
    <section id="lotes" className="py-16 sm:py-24">
      <div className="contenedor">
        <div className="max-w-2xl">
          <h2 className="text-[2.6rem] sm:text-[3.6rem]">Quedan 12 de 157</h2>
          <p className="mt-3 text-musgo">
            {negocio.vendidos} lotes se vendieron en preventa. Cada cuadrito es un lote; los encendidos son los 12 finales. Toca uno para ver su ficha.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Tamaño del lote">
          {(['Todos', 'Compacto', 'Mediano', 'Amplio'] as Filtro[]).map((f) => (
            <button key={f} type="button" aria-pressed={f === filtro} onClick={() => setFiltro(f)}
              className={`min-h-[44px] rounded-full border-2 px-4 font-bold transition-colors ${f === filtro ? 'border-selva bg-selva text-arena' : 'border-selva/25 hover:border-selva'}`}>{f}</button>
          ))}
        </div>
        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-start">
          <div className="min-w-0">
            <ol className="grid grid-cols-[repeat(13,minmax(0,1fr))] gap-1 sm:gap-1.5" aria-label="157 lotes de Cumbres de Mita">
              {Array.from({ length: negocio.totalLotes }, (_, i) => {
                const lote = posiciones.get(i);
                if (!lote) return <li key={i} className="aspect-square rounded-[3px] bg-selva/15" aria-hidden="true" />;
                const visible = filtro === 'Todos' || lote.tipo === filtro;
                const on = lote.num === sel;
                return (
                  <li key={i} className="aspect-square">
                    <button type="button" onClick={() => setSel(lote.num)} disabled={!visible} aria-pressed={on} aria-label={`Lote ${lote.num}, ${lote.m2} m², ${pesos(lote.precio)}`}
                      className={`grid h-full w-full place-items-center rounded-[3px] text-[0.55rem] font-bold transition-colors sm:text-[0.7rem] ${on ? 'bg-selva text-trigo ring-2 ring-teja ring-offset-2 ring-offset-arena' : visible ? 'bg-teja text-white hover:bg-selva' : 'bg-teja/25 text-white/80'}`}>
                      {lote.num}
                    </button>
                  </li>
                );
              })}
            </ol>
            <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[0.9rem] text-musgo">
              <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-[2px] bg-selva/15" aria-hidden="true" />Vendido ({negocio.vendidos})</span>
              <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-[2px] bg-teja" aria-hidden="true" />Disponible (12)</span>
              <span>La cuadrícula no es el plano del desarrollo.</span>
            </p>
          </div>
          <article className="min-w-0 rounded-3xl bg-white p-6 shadow-sm sm:p-8" aria-live="polite">
            <p className="text-[0.95rem] font-bold text-teja">{l.tipo}, manzana {l.manzana}</p>
            <h3 className="mt-1 text-[2.4rem]">Lote {l.num}</h3>
            <p className="text-musgo">{l.calle}</p>
            <dl className="mt-5 grid grid-cols-2 gap-4">
              <div><dt className="text-[0.85rem] text-musgo">Superficie</dt><dd className="font-display text-[1.7rem]">{l.m2.toLocaleString('es-MX')} m²</dd></div>
              <div><dt className="text-[0.85rem] text-musgo">Frente × fondo</dt><dd className="font-display text-[1.4rem]">{l.medidas}</dd></div>
              <div><dt className="text-[0.85rem] text-musgo">Lados</dt><dd className="font-display text-[1.7rem]">{l.lados}</dd></div>
              <div><dt className="text-[0.85rem] text-musgo">Precio</dt><dd className="font-display text-[1.7rem] text-teja">{pesos(l.precio)}</dd></div>
            </dl>
            <p className="mt-4 text-[0.95rem] text-musgo">Desde 160 m², vista a la selva y acceso a la Casa Club, alberca infinity, senderos y seguridad 24/7 (gym en planeación). Apartado con contrato de promesa de compraventa.</p>
            <a href={wa(`Hola, quiero información del lote ${l.num} (${l.manzana}, ${l.calle}, ${l.m2} m², ${pesos(l.precio)}) en Cumbres de Mita.`)} className="btn mt-6 w-full" target="_blank" rel="noopener"><IconoWa /> Solicitar información del lote {l.num}</a>
          </article>
        </div>
        <img src={foto('lotes')} alt="Vista aérea de los lotes de Cumbres de Mita entre la selva, con el mar de Punta de Mita al fondo" width={1400} height={933} loading="lazy" className="mt-12 aspect-[21/9] w-full rounded-3xl object-cover" />
      </div>
    </section>
  );
}

function Kumo() {
  return (
    <section id="kumo" className="oscuro py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <img src={foto('kumo')} alt="Render de Kumo Living: edificio de departamentos de cuatro niveles entre la selva al atardecer" width={1400} height={1045} loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover" />
        <div>
          <p className="font-bold text-trigo">Preventa, entrega 2027</p>
          <h2 className="mt-2 text-[2.6rem] sm:text-[3.4rem]">Kumo Living</h2>
          <p className="mt-3">{kumo.texto}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {kumo.tipologias.map((t) => (
              <li key={t.nombre} className="rounded-2xl bg-arena/10 p-4 ring-1 ring-arena/15">
                <p className="font-bold text-arena">{t.nombre}</p>
                <p className="font-display text-[1.8rem] text-trigo">desde {t.precio}</p>
                <p className="text-[0.9rem]">{t.detalle.join(', ')}.</p>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[0.95rem]">Amenidades: {kumo.amenidades.join(', ')}.</p>
          <a href={wa('Hola, quiero el plano y precios de Kumo Living en Cumbres de Mita.')} className="btn mt-6" target="_blank" rel="noopener"><IconoWa /> Pedir el plano de una tipología</a>
        </div>
      </div>
    </section>
  );
}

function Nahya() {
  return (
    <section id="nahya" className="py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <p className="font-bold text-teja">100% vendido en preventa</p>
          <h2 className="mt-2 text-[2.6rem] sm:text-[3.4rem]">Nahya Residences: 8 de 8</h2>
          <p className="mt-3 text-musgo">{nahya}</p>
          <ol className="mt-6 flex gap-2" aria-label="Ocho residencias vendidas">
            {Array.from({ length: 8 }, (_, i) => <li key={i} className="grid h-12 flex-1 place-items-center rounded-lg bg-selva font-bold text-trigo">{i + 1}</li>)}
          </ol>
        </div>
        <img src={foto('nahya')} alt="Render de la terraza de Nahya Residences con comedor exterior, sombrilla y jardineras" width={1400} height={776} loading="lazy" className="aspect-[16/10] w-full rounded-3xl object-cover" />
      </div>
    </section>
  );
}

function Amenidades() {
  return (
    <section id="amenidades" className="bg-white py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="text-[2.6rem] sm:text-[3.4rem]">Amenidades que se usan</h2>
        <p className="mt-2 text-musgo">Diseñadas para el día a día, no para el folleto.</p>
        <div className="mt-9 grid gap-6 md:grid-cols-3">
          {amenidades.map((a) => (
            <article key={a.nombre} className="overflow-hidden rounded-3xl bg-arena">
              {a.foto ? <img src={foto(a.foto)} alt={a.alt!} width={1400} height={933} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                : <div className="grid aspect-[4/3] place-items-center bg-selva/10 font-display text-[1.6rem] text-selva">En planeación</div>}
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-3"><h3 className="text-[1.6rem]">{a.nombre}</h3><span className={`text-[0.85rem] font-bold ${a.estado === 'Construida' ? 'text-selva' : 'text-teja'}`}>{a.estado}</span></div>
                <p className="mt-2 text-musgo">{a.texto}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-musgo">También incluye: {incluye.join(', ')}.</p>
      </div>
    </section>
  );
}

function Ecosistema() {
  return (
    <section className="oscuro relative isolate overflow-hidden py-16 sm:py-24">
      <img src={foto('punta-mita')} alt="" aria-hidden="true" width={1400} height={781} loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" />
      <div className="contenedor">
        <h2 className="max-w-2xl text-[2.6rem] sm:text-[3.4rem]">600 hectáreas. Un plan. Desde 1994.</h2>
        <p className="mt-3 max-w-2xl">La península de Punta de Mita tiene un master plan controlado: su superficie es finita y el plan ya está definido.</p>
        <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ecosistema.map(([n, t]) => <div key={t} className="border-t border-trigo/40 pt-4"><dt className="font-display text-[2.6rem] text-trigo">{n}</dt><dd className="mt-1">{t}</dd></div>)}
        </dl>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-[2.6rem] sm:text-[3.4rem]">¿Quieres ver los lotes en persona?</h2>
          <p className="mt-3 text-musgo">Agenda un tour privado, sin compromiso.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={wa('Hola, quiero agendar un tour privado en Cumbres de Mita.')} className="btn" target="_blank" rel="noopener"><IconoWa /> Agendar tour</a>
            <a href={negocio.telefonoHref} className="btn-linea"><IconoTel /> {negocio.telefono}</a>
          </div>
          <a href={`mailto:${negocio.correo}`} className="enlace mt-5 inline-block">{negocio.correo}</a>
        </div>
        <div className="rounded-3xl bg-white p-7">
          <p className="flex gap-2 font-bold"><IconoPin className="mt-1 h-5 w-5 shrink-0 text-teja" />{negocio.direccion}</p>
          <a href={negocio.mapa} className="enlace mt-2 inline-block" target="_blank" rel="noopener">Abrir en Google Maps</a>
          <p className="mt-6 text-[0.95rem] text-musgo">Desarrollado por CAM Grupo. Comercializado por Century 21 CAM Grupo.</p>
          <p className="mt-2 text-[0.9rem] text-musgo">{legal}</p>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro pb-28 pt-8 lg:pb-8">
      <div className="contenedor flex flex-col gap-2 sm:flex-row sm:justify-between">
        <p className="font-display text-[1.4rem] text-arena">Cumbres de Mita</p>
        <p className="text-[0.95rem]">Punta de Mita, Nayarit, México.</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-arena/15 bg-selva text-arena lg:hidden">
      <a href={waInfo} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 bg-teja text-[0.9rem] font-bold text-white"><IconoWa />WhatsApp</a>
      <a href={negocio.telefonoHref} className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-bold"><IconoTel />Llamar</a>
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
        <Lotes />
        <Kumo />
        <Nahya />
        <Amenidades />
        <Ecosistema />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
