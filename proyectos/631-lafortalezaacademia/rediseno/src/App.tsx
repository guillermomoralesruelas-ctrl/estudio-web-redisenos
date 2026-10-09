import { useMemo, useState } from 'react';
import {
  atencion, cartelera, cifras, diferencias, grupos, inscripcion, laSala, negocio, otrosEnfoques, porQue, preciosEnfoques,
  preguntas, programas, trayectoria, voces, wa, web, type Grupo, type Opcion, type Programa,
} from './data/content';
import fotos from './data/fotos.json';

const medidas = fotos as unknown as Record<string, [number, number]>;
const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;

function Foto({ n, alt, className = '', prioridad = false }: { n: string; alt: string; className?: string; prioridad?: boolean }) {
  const [w, h] = medidas[n] ?? [1200, 800];
  return (
    <img src={web(`${n}.webp`)} alt={alt} width={w} height={h} className={`object-cover ${className}`}
      loading={prioridad ? 'eager' : 'lazy'} decoding="async" fetchPriority={prioridad ? 'high' : 'auto'} />
  );
}

// Fecha de hoy en Guadalajara, AAAA-MM-DD, para ocultar funciones que ya pasaron.
const hoyGdl = () => new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Mexico_City', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());

const Icono = {
  wa: <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3a.5.5 0 0 0 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.6 11.6 0 0 0 4.4 3.9c1.6.7 2.3.8 3.1.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3z" /></svg>,
  mail: <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>,
  pin: <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>,
};

function Cabecera() {
  const [abierto, setAbierto] = useState(false);
  const enlaces = [['#programas', 'Programas'], ['#semana', 'Arma tu semana'], ['#cartelera', 'Cartelera'], ['#la-sala', 'La Sala'], ['#preguntas', 'Preguntas'], ['#contacto', 'Contacto']];
  return (
    <header className="sticky top-0 z-40 bg-escena text-white">
      <div className="contenedor flex h-[4.5rem] items-center justify-between gap-4">
        <a href="#inicio" aria-label="La Fortaleza Academia de Artes, inicio"><img src={web('logo.png')} alt="La Fortaleza Academia de Artes" width={480} height={202} className="h-10 w-auto" /></a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-7 text-sm font-medium">
            {enlaces.map(([h, t]) => <li key={h}><a href={h} className="hover:text-foco">{t}</a></li>)}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <a href={wa('Hola, quiero información de las clases en La Fortaleza.')} target="_blank" rel="noopener" className="btn-telon hidden !py-3 sm:inline-flex">{Icono.wa}Escríbenos</a>
          <button type="button" className="p-2 lg:hidden" aria-expanded={abierto} aria-controls="menu-movil" onClick={() => setAbierto(!abierto)}>
            <span className="sr-only">Menú</span>
            <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">{abierto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}</svg>
          </button>
        </div>
      </div>
      {abierto && (
        <nav id="menu-movil" aria-label="Menú móvil" className="border-t border-white/10 lg:hidden">
          <ul className="contenedor flex flex-col py-3">
            {enlaces.map(([h, t]) => <li key={h}><a href={h} onClick={() => setAbierto(false)} className="block py-3 text-lg">{t}</a></li>)}
          </ul>
        </nav>
      )}
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-escena text-white">
      <div className="seguidor absolute inset-0" aria-hidden="true" />
      <div className="contenedor relative grid items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-foco">Guadalajara · Artes escénicas · Desde 2021</p>
          <h1 className="mt-5 text-6xl sm:text-7xl lg:text-8xl">Donde los sueños se hacen arte<span className="text-foco">.</span></h1>
          <p className="mt-5 max-w-xl text-lg text-white/85">Escuela de teatro, canto y danza que forma artistas completos, sin importar tu edad ni experiencia. Clases, diplomado y montajes con función en teatro real.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#semana" className="btn-foco">Arma tu semana</a>
            <a href={wa('Hola, quiero información de las clases en La Fortaleza.')} target="_blank" rel="noopener" className="btn-linea">{Icono.wa}WhatsApp</a>
          </div>
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/15 pt-6">
            {cifras.map((c) => (
              <div key={c.texto}><dt className="sr-only">{c.texto}</dt><dd><span className="block font-[family-name:var(--font-display)] text-4xl text-foco">{c.valor}</span><span className="text-sm text-white/75">{c.texto}</span></dd></div>
            ))}
          </dl>
        </div>
        <figure className="relative">
          <Foto n="funcion-abanicos" alt="Elenco en escena con abanicos de plumas y vestuario de época" prioridad className="aspect-[4/3] w-full rounded-t-[10rem] rounded-b-lg" />
          <figcaption className="mt-3 text-sm text-white/70">Función de alumnos de La Fortaleza en teatro.</figcaption>
        </figure>
      </div>
      <div className="telon h-3 bg-telon" aria-hidden="true" />
    </section>
  );
}

function Programas() {
  const aei = programas.find((p) => p.id === 'aei')!;
  const enfoques = programas.filter((p) => p.tipo === 'enfoque');
  const talleres = programas.filter((p) => p.tipo === 'taller');
  return (
    <section id="programas" className="py-16 lg:py-24">
      <div className="contenedor">
        <p className="eyebrow">Lo que ofrecemos</p>
        <h2 className="mt-3 text-5xl sm:text-6xl">Tres caminos. Un solo destino.</h2>
        <p className="mt-4 max-w-2xl text-gris">Elige el que más se adapta a ti o combínalos. Todos los grupos son multinivel: desde quien nunca ha pisado un escenario hasta quien ya tiene trayectoria.</p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <article className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/5">
            <Foto n="funcion-roja" alt="Elenco bailando bajo luz roja en una función" className="aspect-[3/2] w-full" />
            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-bosque">01 · Formación continua</p>
              <h3 className="mt-2 text-4xl">{aei.nombre}</h3>
              <p className="mt-2 text-gris">{aei.texto}</p>
              <p className="mt-4 text-2xl font-bold">{pesos(aei.precio!)} <span className="text-base font-normal text-gris">al mes + IVA</span></p>
              <ul className="mt-3 space-y-1 text-sm">{aei.opciones.map((o) => <li key={o.id}>· {o.etiqueta} <span className="text-gris">({o.grupos.map(nombreGrupo).join(' y ')})</span></li>)}</ul>
            </div>
          </article>
          <article className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/5">
            <Foto n="funcion-verde" alt="Escena bajo luz verde con actores en el piso y un actor de pie" className="aspect-[3/2] w-full" />
            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-bosque">02 · Especialización</p>
              <h3 className="mt-2 text-4xl">Enfoques</h3>
              <p className="mt-2 text-gris">Clases de una disciplina, con ingreso continuo. Desde {pesos(preciosEnfoques.solo[0])} al mes + IVA.</p>
              <ul className="mt-4 space-y-2 text-sm">{enfoques.map((p) => <li key={p.id}><strong>{p.nombre}.</strong> <span className="text-gris">{p.texto}</span></li>)}</ul>
              <p className="mt-3 text-sm text-gris">{otrosEnfoques}</p>
            </div>
          </article>
          <article className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/5">
            <Foto n="elenco-saludo" alt="Elenco completo saludando al público al final de una función" className="aspect-[3/2] w-full" />
            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-bosque">03 · Producción escénica</p>
              <h3 className="mt-2 text-4xl">Taller de Montaje</h3>
              <p className="mt-2 text-gris">Un musical completo, de la audición a la función en teatro, con directores activos en el medio.</p>
              <ul className="mt-4 space-y-3 text-sm">
                {talleres.map((p) => (
                  <li key={p.id}><strong>{p.nombre}</strong> · {pesos(p.precio!)}/mes + IVA<br /><span className="text-gris">{p.opciones[0].etiqueta} · {p.estado}{p.nota ? ` · ${p.nota}` : ''}</span></li>
                ))}
              </ul>
            </div>
          </article>
        </div>
        <p className="mt-6 text-sm text-gris">Inscripción única {inscripcion}.</p>
      </div>
    </section>
  );
}

const nombreGrupo = (g: Grupo) => grupos.find((x) => x.id === g)!.nombre;

// ——— Tu semana en La Fortaleza: los bloques reales de clase en una cuadrícula semanal ———
const DIAS = [{ d: 1, t: 'Lun' }, { d: 2, t: 'Mar' }, { d: 3, t: 'Mié' }, { d: 4, t: 'Jue' }, { d: 5, t: 'Vie' }, { d: 6, t: 'Sáb' }, { d: 0, t: 'Dom' }];
const H0 = 9, H1 = 21;
const COLORES = ['bg-bosque text-white', 'bg-telon text-white', 'bg-escena text-white', 'bg-foco text-escena', 'bg-[#5B3A7A] text-white', 'bg-[#1F5A80] text-white', 'bg-[#8A4B12] text-white'];
const hora = (h: number) => (h === 12 ? '12 pm' : h > 12 ? `${h - 12} pm` : `${h} am`);

function Semana() {
  const [grupo, setGrupo] = useState<Grupo>('adultos');
  const [sel, setSel] = useState<Record<string, string>>({});

  const visibles = useMemo(
    () => programas.map((p) => ({ p, ops: p.opciones.filter((o) => o.grupos.includes(grupo)) })).filter((x) => x.ops.length > 0),
    [grupo],
  );
  const elegidos = useMemo(() => {
    const r: { p: Programa; o: Opcion; color: string }[] = [];
    visibles.forEach(({ p, ops }, i) => { const o = ops.find((x) => x.id === sel[p.id]); if (o) r.push({ p, o, color: COLORES[i % COLORES.length] }); });
    return r;
  }, [visibles, sel]);

  const bloques = elegidos.flatMap(({ p, o, color }) => o.bloques.map((b) => ({ ...b, p, color })));
  // Carril para que dos bloques que se cruzan se vean lado a lado.
  const carril = new Map<string, number>();
  bloques.forEach((a, i) => carril.set(`${a.p.id}-${a.dia}-${a.desde}`, bloques.slice(0, i).filter((b) => b.dia === a.dia && a.desde < b.hasta && b.desde < a.hasta).length % 2));
  const choques = new Set<string>();
  const avisos: string[] = [];
  bloques.forEach((a, i) => bloques.slice(i + 1).forEach((b) => {
    if (a.dia === b.dia && a.p.id !== b.p.id && a.desde < b.hasta && b.desde < a.hasta) {
      choques.add(`${a.p.id}-${a.dia}-${a.desde}`); choques.add(`${b.p.id}-${b.dia}-${b.desde}`);
      avisos.push(`${a.p.nombre} y ${b.p.nombre} se cruzan el ${DIAS.find((d) => d.d === a.dia)!.t.toLowerCase()}.`);
    }
  }));

  const conAei = elegidos.some((e) => e.p.tipo === 'diplomado');
  const nEnf = elegidos.filter((e) => e.p.tipo === 'enfoque').length;
  const base = conAei ? (nEnf ? preciosEnfoques.conAei[nEnf - 1] : 750) : nEnf ? preciosEnfoques.solo[nEnf - 1] : 0;
  const talleres = elegidos.filter((e) => e.p.tipo === 'taller').reduce((s, e) => s + (e.p.precio ?? 0), 0);
  const total = base + talleres;
  const horas = bloques.reduce((s, b) => s + (b.hasta - b.desde), 0);
  const planTexto = conAei && nEnf ? `Diplomado AEI + ${nEnf} enfoque${nEnf > 1 ? 's' : ''}` : conAei ? 'Diplomado AEI' : nEnf ? `${nEnf} enfoque${nEnf > 1 ? 's' : ''}` : '';

  const cambiarGrupo = (g: Grupo) => {
    setGrupo(g);
    setSel((s) => Object.fromEntries(Object.entries(s).filter(([pid, oid]) => programas.find((p) => p.id === pid)?.opciones.find((o) => o.id === oid)?.grupos.includes(g))));
  };
  const elegir = (pid: string, oid: string) => setSel((s) => {
    const n = { ...s };
    if (n[pid] === oid) delete n[pid]; else n[pid] = oid;
    return n;
  });

  const mensaje = `Hola, armé mi semana en La Fortaleza (grupo ${nombreGrupo(grupo)}):\n${elegidos.map((e) => `• ${e.p.nombre}: ${e.o.etiqueta}`).join('\n')}\nTotal estimado: ${pesos(total)} al mes + IVA. ¿Hay lugar?`;

  return (
    <section id="semana" className="bg-bosque py-16 text-white lg:py-24">
      <div className="contenedor">
        <p className="text-xs font-bold uppercase tracking-[0.26em] text-foco">Arma tu plan</p>
        <h2 className="mt-3 text-5xl sm:text-6xl">Tu semana en La Fortaleza</h2>
        <p className="mt-4 max-w-2xl text-white/85">Elige tu grupo y los horarios que te interesan. Verás tu semana real de clases, si algo se cruza y cuánto pagarías al mes con su tabla de precios.</p>

        <fieldset className="mt-8">
          <legend className="text-sm font-bold uppercase tracking-[0.16em] text-white/80">Tu grupo</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {grupos.map((g) => (
              <button key={g.id} type="button" aria-pressed={grupo === g.id} onClick={() => cambiarGrupo(g.id)}
                className={`rounded-full border-2 px-4 py-2 text-sm font-bold transition-colors ${grupo === g.id ? 'border-foco bg-foco text-escena' : 'border-white/40 hover:border-white'}`}>
                {g.nombre} <span className="font-normal">· {g.edad}</span>
              </button>
            ))}
          </div>
        </fieldset>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {visibles.map(({ p, ops }, i) => (
              <fieldset key={p.id} className="rounded-lg bg-white/10 p-4">
                <legend className="sr-only">{p.nombre}</legend>
                <p className="flex flex-wrap items-center gap-x-2 font-bold"><span className={`size-3 rounded-full ${COLORES[i % COLORES.length].split(' ')[0]} ring-2 ring-white`} aria-hidden="true" />{p.nombre}
                  {p.estado && <span className="w-full pl-5 text-xs font-normal text-white/75 sm:w-auto sm:pl-0">· {p.estado}</span>}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {ops.map((o) => (
                    <button key={o.id} type="button" aria-pressed={sel[p.id] === o.id} onClick={() => elegir(p.id, o.id)}
                      className={`rounded-md px-3 py-2 text-sm transition-colors ${sel[p.id] === o.id ? 'bg-white font-bold text-escena' : 'bg-escena/40 hover:bg-escena/70'}`}>
                      {o.etiqueta}
                    </button>
                  ))}
                </div>
              </fieldset>
            ))}
          </div>

          <div>
            <div className="overflow-hidden rounded-lg bg-papel p-2 text-tinta sm:p-4">
              <div className="grid grid-cols-[2.2rem_repeat(7,minmax(0,1fr))] text-center text-xs font-bold sm:grid-cols-[3rem_repeat(7,minmax(0,1fr))]">
                <span />
                {DIAS.map((d) => <span key={d.d} className="py-1">{d.t}</span>)}
              </div>
              <div className="relative grid grid-cols-[2.2rem_repeat(7,minmax(0,1fr))] sm:grid-cols-[3rem_repeat(7,minmax(0,1fr))]" style={{ gridTemplateRows: `repeat(${H1 - H0}, 1.6rem)` }}>
                {Array.from({ length: H1 - H0 }, (_, i) => (
                  <span key={i} className="border-t border-black/10 pr-1 text-right text-[0.65rem] leading-none text-gris" style={{ gridRow: i + 1, gridColumn: 1 }}>{hora(H0 + i)}</span>
                ))}
                {Array.from({ length: H1 - H0 }, (_, i) => (
                  <span key={`l${i}`} className="border-t border-black/10" style={{ gridRow: i + 1, gridColumn: '2 / 9' }} aria-hidden="true" />
                ))}
                {bloques.map((b) => {
                  const k = `${b.p.id}-${b.dia}-${b.desde}`;
                  const choca = choques.has(k);
                  const lado = choca ? (carril.get(k) ? 'w-[calc(50%-2px)] justify-self-end' : 'w-[calc(50%-2px)] justify-self-start') : '';
                  const col = DIAS.findIndex((d) => d.d === b.dia) + 2;
                  return (
                    <div key={k} title={`${b.p.nombre}, ${hora(b.desde)}–${hora(b.hasta)}`}
                      className={`m-px overflow-hidden rounded px-1 py-0.5 text-[0.6rem] font-bold leading-tight sm:text-xs ${b.color} ${lado} ${choca ? 'outline outline-2 outline-offset-[-2px] outline-telon [background-image:repeating-linear-gradient(135deg,transparent_0_6px,rgb(163_32_29/0.45)_6px_9px)]' : ''}`}
                      style={{ gridColumn: col, gridRow: `${b.desde - H0 + 1} / ${b.hasta - H0 + 1}` }}>
                      {b.p.nombre.includes(' · ') ? b.p.nombre.split(' · ')[1] : b.p.nombre.replace('Laboratorio de', 'Lab.')}
                    </div>
                  );
                })}
              </div>
              {bloques.length === 0 && <p className="px-2 pb-2 pt-3 text-sm text-gris">Elige un horario a la izquierda para verlo aquí.</p>}
            </div>

            <div className="mt-4 rounded-lg bg-escena p-5" aria-live="polite">
              {avisos.length > 0 && (
                <ul className="mb-4 space-y-1 rounded-md bg-telon px-4 py-3 text-sm font-bold">{avisos.map((a) => <li key={a}>⚠ {a} Elige otro horario.</li>)}</ul>
              )}
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-sm text-white/75">{elegidos.length ? `${horas} h de clase a la semana${planTexto ? ` · ${planTexto}` : ''}${talleres ? `${planTexto ? ' + ' : ' · '}taller` : ''}` : 'Aún no eliges horarios'}</p>
                  <p className="mt-1 font-[family-name:var(--font-display)] text-5xl text-foco">{pesos(total)} <span className="font-[family-name:var(--font-sans)] text-base text-white/85">al mes + IVA</span></p>
                  <p className="mt-1 text-xs text-white/70">Más inscripción única {inscripcion}. Precios de su tabla publicada.</p>
                </div>
                {elegidos.length > 0 && (
                  <a href={wa(mensaje)} target="_blank" rel="noopener" className="btn-foco">{Icono.wa}Apartar mi lugar</a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Precios() {
  return (
    <section className="py-16 lg:py-20">
      <div className="contenedor">
        <p className="eyebrow">Más formación, menos dinero</p>
        <h2 className="mt-3 text-5xl">Precios de enfoques</h2>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm sm:text-base">
            <caption className="sr-only">Mensualidad según el número de enfoques, con y sin Diplomado AEI</caption>
            <thead><tr className="border-b-2 border-escena text-sm"><th scope="col" className="py-3 pr-4">Plan <span className="font-normal sm:hidden">· n.º de enfoques</span></th>{[1, 2, 3, 4, 5].map((n) => <th key={n} scope="col" className="px-2 py-3 text-right">{n}<span className="hidden sm:inline"> enfoque{n > 1 ? 's' : ''}</span></th>)}</tr></thead>
            <tbody>
              <tr className="border-b border-black/10"><th scope="row" className="py-3 pr-4 font-medium">Solo enfoques</th>{preciosEnfoques.solo.map((p) => <td key={p} className="px-2 py-3 text-right">{pesos(p)}</td>)}</tr>
              <tr className="bg-bosque/10"><th scope="row" className="py-3 pl-2 pr-4 font-bold text-bosque">+ Diplomado AEI</th>{preciosEnfoques.conAei.map((p) => <td key={p} className="px-2 py-3 text-right font-bold">{pesos(p)}</td>)}</tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-gris">Todos los precios + IVA. Inscripción única {inscripcion}.</p>
      </div>
    </section>
  );
}

function Cartelera() {
  const hoy = hoyGdl();
  const proximas = cartelera.filter((c) => !c.fecha || c.fecha >= hoy);
  const fotosObra: Record<string, string> = { RENT: 'rent', 'In the Heights': 'in-the-heights', 'Shrek El Musical': 'shrek', 'Something Rotten': 'something-rotten' };
  return (
    <section id="cartelera" className="bg-escena py-16 text-white lg:py-24">
      <div className="contenedor">
        <p className="text-xs font-bold uppercase tracking-[0.26em] text-foco">Cartelera</p>
        <h2 className="mt-3 text-5xl sm:text-6xl">Escenarios reales, público real</h2>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {proximas.map((c) => (
            <li key={c.obra} className="rounded-lg border border-white/15 p-6">
              <p className={`text-sm font-bold uppercase tracking-[0.14em] ${c.fecha ? 'text-foco' : 'text-white/70'}`}>{c.cuando}{c.lugar && ` · ${c.lugar}`}</p>
              <h3 className="mt-2 text-4xl">{c.obra}</h3>
              <p className="mt-2 text-white/80">{c.texto}</p>
            </li>
          ))}
        </ul>

        <h3 className="mt-16 text-3xl text-foco">Producciones de nuestros alumnos</h3>
        <ol className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {trayectoria.filter((t) => fotosObra[t.obra]).map((t) => (
            <li key={t.obra} className="relative overflow-hidden rounded-lg">
              <Foto n={fotosObra[t.obra]} alt={`Función de ${t.obra} montada por La Fortaleza`} className="aspect-[4/3] w-full" />
              <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent px-3 pb-2 pt-8"><span className="text-xs text-foco">{t.año}</span><br /><span className="font-bold">{t.obra}</span></p>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-white/80">También: {trayectoria.filter((t) => !fotosObra[t.obra]).map((t) => `${t.obra} (${t.año})`).join(', ')}.</p>
      </div>
    </section>
  );
}

function PorQue() {
  return (
    <section className="py-16 lg:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Por qué La Fortaleza</p>
          <h2 className="mt-3 text-5xl">No solo tomas clases. Te formas como artista.</h2>
          <ul className="mt-8 space-y-6">
            {porQue.map((x) => <li key={x.titulo}><h3 className="text-2xl text-bosque">{x.titulo}</h3><p className="mt-1 text-gris">{x.texto}</p></li>)}
          </ul>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-3">
            <Foto n="tras-bambalinas" alt="Elenco reunido tras bambalinas antes de una función" className="aspect-[4/3] w-full rounded-lg" />
            <Foto n="funcion-roja-2" alt="Actriz al centro del escenario con el elenco bajo luz roja" className="aspect-[4/3] w-full rounded-lg" />
          </div>
          <ul className="mt-6 space-y-4">
            {diferencias.map((x) => <li key={x.titulo} className="border-l-4 border-telon pl-4"><h3 className="text-2xl">{x.titulo}</h3><p className="text-gris">{x.texto}</p></li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Voces() {
  return (
    <section className="bg-crema py-16 lg:py-24">
      <div className="contenedor">
        <p className="eyebrow">Lo que dicen nuestros alumnos</p>
        <h2 className="mt-3 text-5xl">Voces de La Fortaleza</h2>
        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {voces.map((v) => (
            <li key={v.autor}><figure className="h-full rounded-lg bg-white p-6 shadow-sm"><blockquote className="text-lg">“{v.texto}”</blockquote><figcaption className="mt-3 text-sm font-bold text-bosque">{v.autor}</figcaption></figure></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Sala() {
  return (
    <section id="la-sala" className="py-16 lg:py-20">
      <div className="contenedor grid items-center gap-8 rounded-lg bg-bosque-claro p-8 text-white sm:p-12 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-foco">Para 55 años o más</p>
          <h2 className="mt-3 text-5xl">La Sala</h2>
          <p className="mt-3 max-w-2xl text-white/90">{laSala}</p>
        </div>
        <a href={wa('Hola, quiero información de La Sala.')} target="_blank" rel="noopener" className="btn-foco">{Icono.wa}Pedir informes</a>
      </div>
    </section>
  );
}

function Preguntas() {
  return (
    <section id="preguntas" className="pb-16 lg:pb-24">
      <div className="contenedor max-w-3xl">
        <p className="eyebrow">Preguntas frecuentes</p>
        <h2 className="mt-3 text-5xl">Antes de tu primera clase</h2>
        <div className="mt-8 divide-y divide-black/10 border-y border-black/10">
          {preguntas.map((q) => (
            <details key={q.p} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold">{q.p}<span className="text-2xl text-telon transition-transform group-open:rotate-45" aria-hidden="true">+</span></summary>
              <p className="mt-2 text-gris">{q.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="bg-escena py-16 text-white lg:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-foco">Contacto</p>
          <h2 className="mt-3 text-5xl sm:text-6xl">Ven a conocer La Fortaleza</h2>
          <address className="mt-6 not-italic text-lg text-white/90">{negocio.direccion}<br />{negocio.referencia}</address>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={wa('Hola, quiero información de las clases en La Fortaleza.')} target="_blank" rel="noopener" className="btn-telon">{Icono.wa}{negocio.whatsappTexto}</a>
            <a href={negocio.maps} target="_blank" rel="noopener" className="btn-linea">{Icono.pin}Cómo llegar</a>
          </div>
          <p className="mt-6"><a href={`mailto:${negocio.email}`} className="inline-flex items-center gap-2 underline underline-offset-4 hover:text-foco">{Icono.mail}{negocio.email}</a></p>
        </div>
        <div>
          <h3 className="text-3xl text-foco">Horario de atención</h3>
          <dl className="mt-4 divide-y divide-white/10">
            {atencion.map((a) => <div key={a.dias} className="flex justify-between gap-4 py-3"><dt>{a.dias}</dt><dd className="font-bold">{a.horas}</dd></div>)}
          </dl>
          <h3 className="mt-8 text-3xl text-foco">Síguenos</h3>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            {[['Instagram', negocio.instagram], ['Facebook', negocio.facebook], ['YouTube', negocio.youtube], ['TikTok', negocio.tiktok]].map(([t, h]) => (
              <li key={t}><a href={h} target="_blank" rel="noopener" className="underline underline-offset-4 hover:text-foco">{t}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="border-t border-white/10 bg-escena pb-28 pt-10 text-white/75 lg:pb-10">
      <div className="contenedor flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <img src={web('logo.png')} alt="La Fortaleza Academia de Artes" width={480} height={202} loading="lazy" className="h-12 w-auto self-start" />
        <p className="text-xs">© {new Date().getFullYear()} La Fortaleza Academia de Artes · Guadalajara, Jalisco</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-escena text-white lg:hidden">
      <a href={wa('Hola, quiero información de las clases en La Fortaleza.')} target="_blank" rel="noopener" className="flex flex-col items-center gap-1 bg-telon py-3 text-xs font-bold">{Icono.wa}WhatsApp</a>
      <a href="#semana" className="flex flex-col items-center gap-1 py-3 text-xs font-semibold"><svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M3 9h18M8 2v4M16 2v4" /></svg>Mi semana</a>
      <a href={negocio.maps} target="_blank" rel="noopener" className="flex flex-col items-center gap-1 py-3 text-xs font-semibold">{Icono.pin}Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:text-escena">Saltar al contenido</a>
      <Cabecera />
      <main id="contenido">
        <Portada />
        <Programas />
        <Semana />
        <Precios />
        <Cartelera />
        <PorQue />
        <Voces />
        <Sala />
        <Preguntas />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
