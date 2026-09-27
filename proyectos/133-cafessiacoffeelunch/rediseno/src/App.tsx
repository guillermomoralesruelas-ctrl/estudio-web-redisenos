import { useEffect, useState, type CSSProperties } from 'react';
import {
  apertura, bebidas, endulzantes, extras, fotos, jarabes, leches, lechesAmericano, MAX_JARABES, menu, negocio, notaFoam,
  personaliza, saludo, wa,
  type Bebida, type Foto, type Grupo, type Opcion, type Receta,
} from './data/content';

const externo = { target: '_blank', rel: 'noopener' } as const;

const Icono = {
  wa: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3a.5.5 0 0 0 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4 5.2 5.2 0 0 0 3.2.7 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z" /></svg>
  ),
  vaso: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true"><path d="M5 6h14l-1.6 15H6.6L5 6Z" /><path d="M4 6h16M8 3h8l1 3H7l1-3Z" /></svg>
  ),
  mapa: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
  ),
  tel: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true"><path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" /></svg>
  ),
};

function Img({ foto: fo, className = '', eager = false }: { foto: Foto; className?: string; eager?: boolean }) {
  return <img src={fo.src} alt={fo.alt} width={fo.w} height={fo.h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={`size-full object-cover ${className}`} />;
}

const pesos = (n: number) => `$${n}`;

// ---------- ¿Abren hoy? (hora de Hermosillo) ----------

function ahoraHermosillo() {
  const partes = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Hermosillo', weekday: 'short', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' }).formatToParts(new Date());
  const dias = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const v = (t: string) => partes.find((p) => p.type === t)?.value ?? '0';
  return { dia: dias.indexOf(v('weekday')), minuto: Number(v('hour')) * 60 + Number(v('minute')) };
}

function estadoHoy() {
  const { dia, minuto } = ahoraHermosillo();
  const abreHoy = apertura.dias.includes(dia);
  if (abreHoy && minuto >= apertura.abre && minuto < apertura.cierra) return { abierto: true, texto: 'Abierto ahora, hasta la 1:30 pm.' };
  if (abreHoy && minuto < apertura.abre) return { abierto: false, texto: 'Hoy abrimos a las 7:30 am.' };
  if (dia >= 1 && dia <= 4) return { abierto: false, texto: 'Ya cerramos por hoy. Mañana abrimos a las 7:30 am.' };
  if (dia === 0) return { abierto: false, texto: 'Hoy domingo cerramos. Mañana lunes abrimos a las 7:30 am.' };
  return { abierto: false, texto: 'Cerramos el fin de semana. El lunes abrimos a las 7:30 am.' };
}

function useEstadoHoy() {
  const [e, setE] = useState(estadoHoy);
  useEffect(() => {
    const t = setInterval(() => setE(estadoHoy()), 60_000);
    return () => clearInterval(t);
  }, []);
  return e;
}

// ---------- Encabezado y portada ----------

const nav = [
  { href: '#vaso', label: 'Arma tu vaso' },
  { href: '#menu', label: 'Menú' },
  { href: '#visitanos', label: 'Visítanos' },
];

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-cafe/10 bg-vaso/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
        <a href="#inicio" className="shrink-0" aria-label="Cafessia, volver al inicio">
          <img src={negocio.logo.src} alt={negocio.logo.alt} width={negocio.logo.w} height={negocio.logo.h} className="h-9 w-auto md:h-11" />
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {nav.map((n) => <a key={n.href} href={n.href} className="font-medium text-cafe hover:text-naranja-oscuro">{n.label}</a>)}
        </nav>
        <a href={negocio.ordenar} {...externo} className="btn px-5">Ordena aquí</a>
      </div>
    </header>
  );
}

function Portada() {
  const hoy = useEstadoHoy();
  const d = negocio.direccion;
  return (
    <section id="inicio" className="bg-naranja">
      <div className="contenedor grid items-end gap-10 pt-12 md:grid-cols-12 md:pt-16">
        <div className="min-w-0 pb-4 md:col-span-7 md:pb-20">
          <p className="font-medium text-cafe">{negocio.lema}, Hermosillo</p>
          <h1 className="mt-3 font-titulo text-[clamp(3rem,8vw,6.4rem)] font-medium italic leading-[0.95] text-cafe">{negocio.frase}</h1>
          <p className="mt-6 max-w-xl text-lg text-cafe md:text-xl">
            Café de calidad y desayunos para llevar o para quedarte en la terraza, en {d.calle}, {d.colonia}.
          </p>
          <p className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-vaso px-4 py-2 font-medium text-cafe" aria-live="polite">
            <span className={`size-2.5 rounded-full ${hoy.abierto ? 'bg-olivo' : 'bg-naranja-oscuro'}`} aria-hidden="true" />
            {hoy.texto}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#vaso" className="btn-cafe">{Icono.vaso} Arma tu vaso</a>
            <a href={negocio.ordenar} {...externo} className="btn-linea">Ordena aquí</a>
          </div>
        </div>
        <div className="relative min-w-0 md:col-span-5">
          <div className="mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-t-[12rem] border-[6px] border-b-0 border-vaso">
            <Img foto={negocio.ventanita} eager />
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Elemento memorable: "Arma tu vaso" ----------

type Capa = { color: string; peso: number; nombre: string };

/** Capas del vaso, de abajo hacia arriba. Proporciones ilustrativas, no la receta exacta. */
function capas(receta: Receta, frio: boolean, leche: Opcion | null, js: Opcion[], shot: boolean, foam: boolean): Capa[] {
  const espresso = '#3b2014';
  const lecheColor = leche?.color ?? '#f3e9d6';
  const chai = '#c89a6a';
  const c: Capa[] = js.map((j) => ({ color: j.color ?? '#c77a2a', peso: 0.05, nombre: `jarabe de ${j.nombre.toLowerCase()}` }));
  const esp = (p: number) => ({ color: espresso, peso: p + (shot ? 0.1 : 0), nombre: shot ? 'espresso con shot extra' : 'espresso' });
  if (receta === 'americano') {
    c.push(esp(0.22), { color: '#6a3a1f', peso: leche ? 0.56 : 0.7, nombre: frio ? 'agua con hielo' : 'agua caliente' });
    if (leche) c.push({ color: lecheColor, peso: 0.14, nombre: `leche ${leche.nombre.toLowerCase()}` });
  } else if (receta === 'capuccino') {
    c.push(esp(0.24), { color: lecheColor, peso: 0.34, nombre: 'leche' }, { color: '#fffaf0', peso: 0.36, nombre: 'espuma' });
  } else if (receta === 'latte') {
    c.push(esp(0.2), { color: lecheColor, peso: frio ? 0.72 : 0.6, nombre: 'leche' });
    if (!frio) c.push({ color: '#fffaf0', peso: 0.12, nombre: 'espuma' });
  } else {
    if (receta === 'dirty') c.push(esp(0.18));
    c.push({ color: chai, peso: receta === 'dirty' ? 0.58 : 0.74, nombre: 'chai con leche' });
    if (!frio) c.push({ color: '#f6ead8', peso: 0.12, nombre: 'espuma' });
  }
  if (foam) c.push({ color: js[0]?.color ? `${js[0].color}66` : '#fff6e6', peso: 0.14, nombre: 'cold foam' });
  return c;
}

/** El vaso dibujado en corte: el de papel con su etiqueta (caliente) o el transparente con hielo (frío). */
function DibujoVaso({ receta, frio, grande, leche, js, shot, foam }: { receta: Receta; frio: boolean; grande: boolean; leche: Opcion | null; js: Opcion[]; shot: boolean; foam: boolean }) {
  // Vaso grande: borde en y=40; mediano: y=92. Fondo siempre en y=300.
  const arriba = frio || grande ? 40 : 92;
  const fondo = 300;
  const xIzq = (y: number) => 34 + ((y - 40) / (fondo - 40)) * 26;
  const xDer = (y: number) => 206 - ((y - 40) / (fondo - 40)) * 26;
  const forma = `M${xIzq(arriba)} ${arriba} L${xDer(arriba)} ${arriba} L${xDer(fondo)} ${fondo} L${xIzq(fondo)} ${fondo} Z`;
  const lleno = arriba + 14;
  const alto = fondo - lleno;
  const lista = capas(receta, frio, leche, js, shot, foam);
  const total = lista.reduce((s, x) => s + x.peso, 0);
  let y = fondo;
  const rects = lista.map((x, i) => {
    const h = (x.peso / total) * alto;
    y -= h;
    return <rect key={i} className="capa" x="20" width="200" style={{ y, height: h + 0.5 } as CSSProperties} fill={x.color} />;
  });
  const cubos = [[70, 120, 12], [128, 106, -9], [96, 166, 18], [150, 178, 6], [76, 222, -14], [132, 240, 10]];
  const descripcion = `Dibujo de tu vaso ${frio ? 'frío' : 'caliente'}${frio ? '' : grande ? ' grande' : ' mediano'}, de abajo hacia arriba: ${lista.map((x) => x.nombre).join(', ')}`;
  return (
    <svg viewBox="0 0 240 320" className="mx-auto block h-[19rem] w-auto md:h-[25rem]" role="img" aria-label={descripcion}>
      <defs><clipPath id="dentro"><path d={forma} /></clipPath></defs>
      <path d={forma} fill={frio ? '#ffffff26' : '#fffdf9'} />
      <g clipPath="url(#dentro)">
        {rects}
        {frio && cubos.map(([cx, cy, a], i) => (
          <rect key={i} x={cx - 17} y={cy - 17} width="34" height="34" rx="6" transform={`rotate(${a} ${cx} ${cy})`} fill="#ffffff" fillOpacity="0.38" stroke="#ffffff" strokeOpacity="0.7" strokeWidth="1.5" />
        ))}
        {!frio && <rect x="20" y={arriba} width="200" height="14" fill="#fffdf9" />}
      </g>
      <path d={forma} fill="none" stroke={frio ? '#fffdf9' : '#2a2118'} strokeOpacity={frio ? 0.85 : 0.9} strokeWidth="3" strokeLinejoin="round" />
      <line x1={xIzq(arriba) - 6} y1={arriba} x2={xDer(arriba) + 6} y2={arriba} stroke={frio ? '#fffdf9' : '#2a2118'} strokeWidth="5" strokeLinecap="round" />
      {/* La etiqueta redonda de sus vasos */}
      <g transform={`translate(120 ${frio || grande ? 200 : 214})`}>
        <circle r="30" fill="#e6661f" stroke="#fffdf9" strokeWidth="3" />
        <text textAnchor="middle" y="5" fontFamily="Playfair Display, serif" fontStyle="italic" fontWeight="600" fontSize="15" fill="#fffdf9">cafessia</text>
      </g>
      {!frio && (
        <text x={xDer(arriba) + 12} y={arriba + 5} fontSize="13" fontFamily="DM Sans, sans-serif" fill="#f4ece2">{grande ? '16 oz' : '12 oz'}</text>
      )}
    </svg>
  );
}

function Chip({ activo, onClick, children, disabled = false }: { activo: boolean; onClick: () => void; children: React.ReactNode; disabled?: boolean }) {
  return (
    <button type="button" onClick={onClick} aria-pressed={activo} disabled={disabled}
      className={`min-h-11 rounded-full border px-4 py-2 text-left text-[0.95rem] font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${activo ? 'border-vaso bg-vaso text-cafe' : 'border-vaso/35 text-vaso hover:border-vaso'}`}>
      {children}
    </button>
  );
}

const mas = (o: Opcion) => (o.precio ? ` +${pesos(o.precio)}` : '');

function ArmaTuVaso() {
  const [bid, setBid] = useState<Receta>('latte');
  const [frio, setFrio] = useState(false);
  const [grande, setGrande] = useState(false);
  const [lecheId, setLecheId] = useState<string | null>('entera');
  const [jarabeIds, setJarabeIds] = useState<string[]>([]);
  const [endulzanteIds, setEndulzanteIds] = useState<string[]>([]);
  const [extraIds, setExtraIds] = useState<string[]>([]);

  const b = bebidas.find((x) => x.id === bid)!;
  const version = frio ? b.frio : b.caliente;
  const soloSitio = 'soloSitio' in version;
  const grupos: Grupo[] = soloSitio ? [] : version.grupos;
  const esAmericano = grupos.includes('lecheAmericano');
  const opcionesLeche = esAmericano ? lechesAmericano : leches;
  const leche = grupos.includes('leche') || esAmericano ? opcionesLeche.find((l) => l.id === lecheId) ?? null : null;
  const js = grupos.includes('jarabe') ? jarabes.filter((j) => jarabeIds.includes(j.id)) : [];
  const ends = grupos.includes('endulzante') ? endulzantes.filter((e) => endulzanteIds.includes(e.id)) : [];
  const exs = grupos.includes('extras') ? extras.filter((e) => extraIds.includes(e.id)) : [];

  const elegirBebida = (x: Bebida) => {
    setBid(x.id);
    if (x.id === 'americano') setLecheId(null);
    else if (!lecheId) setLecheId('entera');
  };

  const base = soloSitio ? version.soloSitio : !frio && grande && version.grande ? version.grande : version.precio;
  const tamano = frio ? '' : grande ? 'Grande (16 oz)' : 'Mediano (12 oz)';
  const renglones: [string, number][] = [
    [`${b.nombre} ${frio ? 'frío' : 'caliente'}${tamano ? `, ${tamano}` : ''}`, base],
    ...(leche ? [[`Leche ${leche.precio ? 'de ' : ''}${leche.nombre.toLowerCase()}`, leche.precio] as [string, number]] : []),
    ...js.map((j) => [`Jarabe de ${j.nombre.toLowerCase()}`, j.precio] as [string, number]),
    ...ends.map((e) => [e.nombre, e.precio] as [string, number]),
    ...exs.map((e) => [e.nombre, e.precio] as [string, number]),
  ];
  const total = renglones.reduce((s, [, p]) => s + p, 0);
  const pedido = renglones.map(([t, p]) => (p ? `${t} (${pesos(p)})` : t)).join(', ');
  const mensaje = `${saludo} Quiero pedir: ${pedido}. Total aprox.: ${pesos(total)}.`;

  const alternar = (lista: string[], set: (v: string[]) => void, id: string, max = 10) =>
    set(lista.includes(id) ? lista.filter((x) => x !== id) : lista.length < max ? [...lista, id] : lista);

  return (
    <section id="vaso" className="oscuro bg-olivo py-20 text-vaso md:py-28">
      <div className="contenedor">
        <div className="max-w-3xl">
          <h2 className="font-titulo text-[clamp(2.6rem,5.4vw,4.4rem)] font-medium text-vaso">Arma tu vaso</h2>
          <p className="mt-4 text-lg text-vaso/90">Elige tu bebida, el tamaño, la leche y lo que le quieras agregar. Te decimos cuánto sale y lo pides en línea o por WhatsApp.</p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div className="min-w-0 space-y-8 lg:col-span-7">
            <fieldset>
              <legend className="font-titulo text-2xl">¿Qué se te antoja?</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {bebidas.map((x) => <Chip key={x.id} activo={x.id === bid} onClick={() => elegirBebida(x)}>{x.nombre}</Chip>)}
              </div>
              <p className="mt-3 text-vaso/85">{b.texto}</p>
            </fieldset>

            <fieldset>
              <legend className="font-titulo text-2xl">¿Caliente o frío?</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                <Chip activo={!frio} onClick={() => setFrio(false)}>Caliente</Chip>
                <Chip activo={frio} onClick={() => setFrio(true)}>Frío</Chip>
                {!frio && (
                  <>
                    <span className="mx-1 self-center text-vaso/60" aria-hidden="true">|</span>
                    <Chip activo={!grande} onClick={() => setGrande(false)}>Mediano, 12 oz</Chip>
                    <Chip activo={grande} onClick={() => setGrande(true)}>Grande, 16 oz</Chip>
                  </>
                )}
              </div>
              {frio && !soloSitio && <p className="mt-3 text-[0.95rem] text-vaso/85">En frío hay un solo tamaño.</p>}
            </fieldset>

            {soloSitio && (
              <p className="rounded-2xl border border-vaso/30 p-5">
                El capuccino frío ({pesos(version.soloSitio)}) no está en el pedido en línea: pídelo por WhatsApp.
              </p>
            )}

            {(grupos.includes('leche') || esAmericano) && (
              <fieldset>
                <legend className="font-titulo text-2xl">Leche{esAmericano ? ' (si le quieres poner)' : ''}</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {esAmericano && <Chip activo={!lecheId} onClick={() => setLecheId(null)}>Sin leche</Chip>}
                  {opcionesLeche.map((l) => <Chip key={l.id} activo={lecheId === l.id} onClick={() => setLecheId(l.id)}>{l.nombre}{mas(l)}</Chip>)}
                </div>
              </fieldset>
            )}

            {grupos.includes('jarabe') && (
              <fieldset>
                <legend className="font-titulo text-2xl">Jarabe</legend>
                <p className="mt-1 text-[0.95rem] text-vaso/85">+$10 cada uno, hasta {MAX_JARABES}.</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {jarabes.map((j) => (
                    <Chip key={j.id} activo={jarabeIds.includes(j.id)} onClick={() => alternar(jarabeIds, setJarabeIds, j.id, MAX_JARABES)}
                      disabled={!jarabeIds.includes(j.id) && jarabeIds.length >= MAX_JARABES}>{j.nombre}</Chip>
                  ))}
                </div>
              </fieldset>
            )}

            {grupos.includes('endulzante') && (
              <fieldset>
                <legend className="font-titulo text-2xl">Endulzante</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {endulzantes.map((e) => <Chip key={e.id} activo={endulzanteIds.includes(e.id)} onClick={() => alternar(endulzanteIds, setEndulzanteIds, e.id)}>{e.nombre}</Chip>)}
                </div>
              </fieldset>
            )}

            {grupos.includes('extras') && (
              <fieldset>
                <legend className="font-titulo text-2xl">Extras</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {extras.map((e) => <Chip key={e.id} activo={extraIds.includes(e.id)} onClick={() => alternar(extraIds, setExtraIds, e.id)}>{e.nombre}{mas(e)}</Chip>)}
                </div>
                <p className="mt-3 text-[0.95rem] text-vaso/85">Cold foam: {notaFoam.charAt(0).toLowerCase() + notaFoam.slice(1)}</p>
              </fieldset>
            )}
          </div>

          <div className="min-w-0 lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <DibujoVaso receta={b.id} frio={frio} grande={grande} leche={leche} js={js} shot={extraIds.includes('shot') && grupos.includes('extras')} foam={extraIds.includes('foam') && grupos.includes('extras')} />
              <p className="mt-2 text-center text-sm text-vaso/80">Dibujo ilustrativo.</p>
              <div className="ticket mt-6 rounded-2xl bg-rosa p-5 text-cafe" aria-live="polite">
                <p className="font-titulo text-2xl italic">Tu vaso</p>
                <ul className="mt-3 space-y-1.5 border-t border-dashed border-cafe/35 pt-3">
                  {renglones.map(([t, p]) => (
                    <li key={t} className="flex items-baseline gap-2">
                      <span className="min-w-0">{t}</span>
                      <span className="puntos" aria-hidden="true" />
                      <span className="precio shrink-0">{p ? pesos(p) : 'sin costo'}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 flex items-baseline justify-between border-t border-dashed border-cafe/35 pt-3 font-bold">
                  <span>Total</span><span className="precio font-titulo text-3xl">{pesos(total)}</span>
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {!soloSitio && <a href={negocio.ordenar} {...externo} className="btn">Ordena aquí</a>}
                  <a href={wa(mensaje)} {...externo} className="btn-linea">{Icono.wa} Pedir por WhatsApp</a>
                </div>
                {!soloSitio && <p className="mt-3 text-sm">En el pedido en línea eliges lo mismo y lo mandas por WhatsApp.</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Menú ----------

function Menu() {
  return (
    <section id="menu" className="bg-crema py-20 md:py-28">
      <div className="contenedor">
        <div className="max-w-3xl">
          <h2 className="font-titulo text-[clamp(2.4rem,5vw,4rem)] font-medium">Nuestro menú</h2>
          <p className="mt-4 text-lg">Descubre nuestra variedad de cafés y delicias.</p>
        </div>
        <div className="mt-12 grid gap-x-14 gap-y-14 md:grid-cols-2">
          {menu.map((s) => (
            <div key={s.id} className="min-w-0">
              <h3 className="border-b-2 border-cafe pb-2 font-titulo text-3xl font-medium">{s.titulo}</h3>
              {s.nota && <p className="mt-3 text-[0.95rem]">{s.nota}</p>}
              <ul className="mt-4 space-y-4">
                {s.renglones.map((r) => (
                  <li key={r.nombre}>
                    <p className="flex items-baseline gap-2">
                      <span className="font-bold text-cafe">{r.nombre}</span>
                      <span className="puntos" aria-hidden="true" />
                      <span className="precio shrink-0 font-bold text-naranja-oscuro">{r.precio}</span>
                    </p>
                    {r.texto && <p className="mt-0.5 text-[0.95rem]">{r.texto}</p>}
                    {r.soloSitio && (
                      <p className="mt-0.5 text-[0.95rem]">
                        No está en el pedido en línea: <a href={wa(`${saludo} ¿Hoy tienen ${r.nombre.toLowerCase()}?`)} {...externo} className="font-bold text-naranja-oscuro underline underline-offset-4">pregúntanos por WhatsApp</a>.
                      </p>
                    )}
                  </li>
                ))}
              </ul>
              {s.fotos.length > 0 && (
                <div className={`mt-6 grid gap-3 ${s.fotos.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                  {s.fotos.map((fo) => (
                    <div key={fo.src} className={`overflow-hidden rounded-2xl ${s.fotos.length > 1 ? 'aspect-[4/5]' : 'aspect-[16/10]'}`}><Img foto={fo} /></div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] bg-vaso p-6 md:p-10">
          <h3 className="font-titulo text-3xl font-medium">Personaliza tu bebida</h3>
          <dl className="mt-6 grid gap-6 md:grid-cols-2">
            {personaliza.map(([t, v]) => (
              <div key={t} className="min-w-0 border-l-4 border-naranja pl-4">
                <dt className="font-bold text-cafe">{t}</dt>
                <dd className="mt-1 text-[0.95rem]">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={negocio.ordenar} {...externo} className="btn">Ordena aquí</a>
            <a href={negocio.whatsapp} {...externo} className="btn-linea-cafe">{Icono.wa} Pedir por WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- La frase, Visítanos, pie y barra del celular ----------

function Frase() {
  return (
    <section className="contenedor grid items-center gap-10 py-20 md:grid-cols-12 md:py-28">
      <div className="min-w-0 md:col-span-7">
        <blockquote className="font-titulo text-[clamp(2.4rem,5.6vw,4.6rem)] font-medium italic leading-[1.02] text-cafe">"{negocio.cita}"</blockquote>
      </div>
      <div className="min-w-0 md:col-span-5">
        <div className="aspect-[4/5] overflow-hidden rounded-[2rem]"><Img foto={fotos.dirty} /></div>
      </div>
    </section>
  );
}

function Visitanos() {
  const d = negocio.direccion;
  const hoy = useEstadoHoy();
  return (
    <section id="visitanos" className="oscuro bg-cafe py-20 text-vaso/85 md:py-28">
      <div className="contenedor grid gap-12 md:grid-cols-12">
        <div className="min-w-0 md:col-span-7">
          <h2 className="font-titulo text-[clamp(2.4rem,5vw,4rem)] font-medium text-vaso">Ven a visitarnos</h2>
          <p className="mt-3 text-lg">Y disfruta de un café inolvidable.</p>
          <dl className="mt-8 grid gap-6 text-lg sm:grid-cols-2">
            <div><dt className="text-sm text-vaso/70">Dirección</dt><dd className="text-vaso">{d.calle}, {d.colonia}, {d.cp} {d.ciudad}</dd></div>
            <div><dt className="text-sm text-vaso/70">Horario</dt><dd className="text-vaso">{negocio.horario}</dd><dd className="mt-1 text-[0.95rem]">{hoy.texto}</dd></div>
            <div><dt className="text-sm text-vaso/70">WhatsApp</dt><dd><a href={negocio.whatsapp} {...externo} className="text-vaso underline underline-offset-4">{negocio.telefonoVisible}</a></dd></div>
            <div><dt className="text-sm text-vaso/70">Instagram</dt><dd><a href={negocio.instagram} {...externo} className="text-vaso underline underline-offset-4">{negocio.instagramVisible}</a></dd></div>
          </dl>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={negocio.mapa} {...externo} className="btn-naranja">{Icono.mapa} Abrir en Google Maps</a>
            <a href={negocio.whatsapp} {...externo} className="btn-claro">{Icono.wa} Escríbenos</a>
          </div>
          <p className="mt-8 max-w-xl">¿Tienes preguntas? Estamos para atenderte.</p>
        </div>
        <a href={negocio.mapa} {...externo} className="group block min-w-0 md:col-span-5" aria-label="Abrir Cafessia en Google Maps">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border-4 border-vaso/10"><Img foto={negocio.terraza} className="transition-transform duration-500 group-hover:scale-[1.03]" /></div>
          <p className="mt-3 text-sm text-vaso/80">La terraza de Cafessia, en Llano Verde. Toca la foto para ver cómo llegar.</p>
        </a>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro border-t border-vaso/10 bg-cafe pb-28 pt-10 text-vaso/80 md:pb-10">
      <div className="contenedor flex flex-wrap items-center justify-between gap-6">
        <p><span className="font-titulo text-2xl italic text-vaso">Cafessia</span> <span className="ml-2">{negocio.lema}</span></p>
        <p className="text-sm">© {new Date().getFullYear()} Cafessia. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-cafe/10 bg-vaso/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-[1.8fr_1fr_1fr_1fr] gap-2">
        <a href={negocio.ordenar} {...externo} className="btn px-2">Ordena aquí</a>
        <a href={negocio.whatsapp} {...externo} className="btn-linea-cafe px-0" aria-label="Escribir a Cafessia por WhatsApp">{Icono.wa}</a>
        <a href={negocio.tel} className="btn-linea-cafe px-0" aria-label="Llamar a Cafessia">{Icono.tel}</a>
        <a href={negocio.mapa} {...externo} className="btn-linea-cafe px-0" aria-label="Cómo llegar a Cafessia en Google Maps">{Icono.mapa}</a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <a href="#vaso" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-vaso focus:px-3 focus:py-2">Ir a Arma tu vaso</a>
      <Encabezado />
      <main>
        <Portada />
        <ArmaTuVaso />
        <Menu />
        <Frase />
        <Visitanos />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
