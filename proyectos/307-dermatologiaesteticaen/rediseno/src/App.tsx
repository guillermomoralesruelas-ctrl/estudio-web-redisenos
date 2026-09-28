import { useMemo, useState } from 'react';
import {
  avisoLegal, catalogo, ciudades, constancias, deriva, equipos, historia, mensajeBase, metodologia,
  negocio, opciones, opiniones, precios, presentacion, valoracion, wa, type Ciudad, type Opcion,
} from './data/content';

const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;

function Monograma({ className = 'h-10 w-10' }: { className?: string }) {
  // Su monograma DA con la jeringa al centro (de su favicon)
  return (
    <svg viewBox="0 0 512 512" className={className} aria-hidden="true">
      <rect width="512" height="512" rx="80" fill="#7A1E28" />
      <text x="128" y="340" fontFamily="'Playfair Display', Georgia, serif" fontSize="300" fill="#FAF7F3" textAnchor="middle">D</text>
      <rect x="248" y="156" width="16" height="220" rx="2" fill="#FAF7F3" />
      <rect x="240" y="142" width="32" height="20" rx="2" fill="#FAF7F3" />
      <rect x="252" y="376" width="8" height="32" fill="#FAF7F3" />
      <line x1="256" y1="408" x2="256" y2="440" stroke="#FAF7F3" strokeWidth="6" strokeLinecap="round" />
      <text x="384" y="340" fontFamily="'Playfair Display', Georgia, serif" fontSize="300" fill="#FAF7F3" textAnchor="middle">A</text>
    </svg>
  );
}

function IconoWa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.5 1 2.7.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  );
}

function BotonWa({ texto, children, className = '' }: { texto: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={wa(texto)} target="_blank" rel="noopener" className={`inline-flex items-center justify-center gap-2 rounded-full bg-vino px-6 py-3.5 font-semibold text-crema transition-colors hover:bg-vino-oscuro ${className}`}>
      <IconoWa />
      {children}
    </a>
  );
}

function Encabezado() {
  const enlaces = [
    ['#valoracion', 'Valoración'],
    ['#formacion', 'Formación'],
    ['#tratamientos', 'Tratamientos'],
    ['#clinica', 'La clínica'],
    ['#contacto', 'Contacto'],
  ];
  return (
    <header className="sticky top-0 z-30 border-b border-tinta/10 bg-crema/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="flex min-w-0 items-center gap-3">
          <Monograma className="h-10 w-10 shrink-0" />
          <span className="min-w-0 leading-tight">
            <span className="block font-serif text-lg text-tinta">{negocio.nombre}</span>
            <span className="block text-xs text-tinta/75">{negocio.especialidad}</span>
          </span>
        </a>
        <nav aria-label="Secciones" className="hidden lg:block">
          <ul className="flex gap-7 text-sm font-medium">
            {enlaces.map(([h, t]) => (
              <li key={h}><a href={h} className="text-tinta/85 hover:text-vino">{t}</a></li>
            ))}
          </ul>
        </nav>
        <a href={wa(mensajeBase)} target="_blank" rel="noopener" className="hidden items-center gap-2 rounded-full bg-vino px-4 py-2 text-sm font-semibold text-crema hover:bg-vino-oscuro sm:inline-flex">
          <IconoWa className="h-4 w-4" /> Agendar valoración
        </a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="contenedor grid overflow-x-clip items-center gap-10 py-12 md:grid-cols-[1.25fr_1fr] md:py-20">
      <div className="min-w-0">
        <p className="font-serif text-lg italic text-vino">Dra. Dafne Arellano Montalvo</p>
        <h1 className="mt-3 font-serif text-4xl leading-[1.08] text-tinta sm:text-5xl lg:text-6xl">
          Medicina estética y láser en Puebla
        </h1>
        <p className="mt-6 max-w-xl text-lg text-tinta/85">{presentacion}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <BotonWa texto={mensajeBase}>Agendar valoración</BotonWa>
          <a href={negocio.telefonoHref} className="inline-flex items-center justify-center rounded-full border border-vino px-6 py-3.5 font-semibold text-vino hover:bg-vino hover:text-crema">
            Llamar al {negocio.telefono.replace('+52 ', '')}
          </a>
        </div>
        <dl className="mt-10 grid max-w-xl gap-x-8 gap-y-4 border-t border-tinta/15 pt-6 text-sm sm:grid-cols-2">
          {negocio.cedulas.map((c) => (
            <div key={c.numero}>
              <dt className="text-tinta/75">Cédula profesional {c.numero}</dt>
              <dd className="font-medium text-tinta">{c.titulo}, {c.detalle}</dd>
            </div>
          ))}
          <div>
            <dt className="text-tinta/75">Clínica fundada en {negocio.fundada}</dt>
            <dd className="font-medium text-tinta">{negocio.direccionCorta}, Puebla</dd>
          </div>
          <div>
            <dt className="text-tinta/75">Horario</dt>
            <dd className="font-medium text-tinta">Lun a vie 9 a 19 h, sáb 9 a 14 h</dd>
          </div>
        </dl>
        <a href={negocio.verificarCedula} target="_blank" rel="noopener" className="mt-5 inline-block text-sm font-medium text-vino underline underline-offset-4">
          Verifica sus cédulas en el Registro Nacional de Profesionistas
        </a>
      </div>
      <figure className="relative mx-auto w-full max-w-sm">
        <div className="absolute -inset-3 -z-10 translate-x-5 translate-y-5 rounded-[2rem] bg-arena" aria-hidden="true" />
        <img src={img('dra-dafne.webp')} width={420} height={630} alt="Retrato de la Dra. Dafne Arellano Montalvo con saco blanco, de brazos cruzados" className="w-full rounded-[2rem] bg-tinta object-cover" fetchPriority="high" />
      </figure>
    </section>
  );
}

function Valoracion() {
  return (
    <section id="valoracion" className="bg-arena py-16 md:py-24">
      <div className="contenedor grid gap-12 md:grid-cols-2">
        <div className="min-w-0">
          <h2 className="font-serif text-3xl text-tinta sm:text-4xl">Todo empieza con una valoración</h2>
          <p className="mt-5 text-lg text-tinta/85">{valoracion.intro}</p>
          <div className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-y border-tinta/15 py-5">
            <span className="font-serif text-4xl text-vino">{valoracion.precio}</span>
            <span className="text-tinta/85">{valoracion.nota}. Dura {valoracion.duracion}.</span>
          </div>
          <h3 className="mt-8 font-semibold text-tinta">Incluye</h3>
          <ul className="mt-3 space-y-2 text-tinta/85">
            {valoracion.incluye.map((i) => (
              <li key={i} className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-oro" aria-hidden="true" />{i}</li>
            ))}
          </ul>
          <BotonWa texto="Hola, quiero agendar mi valoración con análisis VISIA con la Dra. Dafne Arellano." className="mt-8">Agendar mi valoración</BotonWa>
        </div>
        <div className="min-w-0 rounded-3xl bg-crema p-7 sm:p-9">
          <h3 className="font-serif text-2xl text-tinta">Cómo llegar a tu primera cita</h3>
          <p className="mt-2 text-sm text-tinta/75">Recomendaciones de la doctora</p>
          <ol className="mt-6 space-y-6">
            {valoracion.preparacion.map((p, i) => (
              <li key={p.t} className="grid grid-cols-[2.25rem_1fr] gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-vino font-serif text-vino" aria-hidden="true">{i + 1}</span>
                <p className="min-w-0 text-tinta/85"><strong className="font-semibold text-tinta">{p.t}</strong>, {p.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- Elemento memorable: mapa de formación ---------- */

const PUEBLA = ciudades.find((c) => c.id === 'puebla')!;

function proyecta(c: Ciudad) {
  if (c.lamina === 'america') return { x: 50 + (c.lon + 102.5) * 16.5, y: 50 + (27.5 - c.lat) * 16.5 };
  const x = 30 + (c.lon + 1.5) * 32 + (c.id === 'monaco' ? 9 : 0);
  return { x, y: 40 + (52.5 - c.lat) * 32 };
}

function kmAPuebla(c: Ciudad) {
  const r = Math.PI / 180;
  const a = Math.sin(((c.lat - PUEBLA.lat) * r) / 2) ** 2 + Math.cos(c.lat * r) * Math.cos(PUEBLA.lat * r) * Math.sin(((c.lon - PUEBLA.lon) * r) / 2) ** 2;
  return Math.round((6371 * 2 * Math.asin(Math.sqrt(a))) / 10) * 10;
}

function coincide(o: Opcion, temas: string[]) {
  return o.temas === 'todo' || temas.some((t) => (o.temas as string[]).includes(t));
}

function Etiqueta({ c, x, y, activa, tam }: { c: Ciudad; x: number; y: number; activa: boolean; tam: number }) {
  const pos = {
    der: { x: x + 12, y: y + tam * 0.35, a: 'start' as const },
    izq: { x: x - 12, y: y + tam * 0.35, a: 'end' as const },
    arriba: { x: x - 20, y: y - 14, a: 'start' as const },
    abajo: { x: x, y: y + tam + 12, a: 'middle' as const },
  }[c.etiqueta];
  return (
    <text x={pos.x} y={pos.y} textAnchor={pos.a} fontSize={tam} className={`mapa-t ${activa ? 'fill-crema font-semibold' : 'fill-crema/55'}`}>
      {c.nombre}
    </text>
  );
}

const CENTRO = ['cdmx', 'puebla', 'veracruz'];
// Ampliación del centro de México (CDMX, Puebla y Veracruz quedan muy juntas a escala)
const enLupa = (c: Ciudad) => ({ x: 70 + (c.lon + 99.6) * 50, y: 318 + (19.9 - c.lat) * 50 });

function Punto({ x, y, on, esPuebla }: { x: number; y: number; on: boolean; esPuebla: boolean }) {
  return (
    <>
      {on && <circle cx={x} cy={y} r={esPuebla ? 16 : 12} className="mapa-halo fill-oro/25" />}
      <circle cx={x} cy={y} r={esPuebla ? 8 : 6} className={on || esPuebla ? 'fill-oro' : 'fill-crema/35'} stroke={esPuebla ? '#FAF7F3' : 'none'} strokeWidth="2" />
    </>
  );
}

function Arco({ a, b, k = 0.25 }: { a: { x: number; y: number }; b: { x: number; y: number }; k?: number }) {
  const mx = (a.x + b.x) / 2;
  const my = Math.min(a.y, b.y) - Math.abs(a.x - b.x) * k - 14;
  return <path d={`M${a.x},${a.y} Q${mx},${my} ${b.x},${b.y}`} className="mapa-linea stroke-oro" fill="none" strokeWidth="2" strokeDasharray="5 5" />;
}

function Lamina({ lamina, activas }: { lamina: 'america' | 'europa'; activas: Set<string> }) {
  const w = lamina === 'america' ? 580 : 380;
  const h = 470;
  const tam = lamina === 'america' ? 22 : 17;
  const lista = ciudades.filter((c) => c.lamina === lamina);
  const paralelos = lamina === 'america' ? [25, 20, 15, 10, 5] : [50, 45, 40];
  const yLat = (lat: number) => (lamina === 'america' ? 50 + (27.5 - lat) * 16.5 : 40 + (52.5 - lat) * 32);
  const p = proyecta(PUEBLA);
  const pl = enLupa(PUEBLA);
  const mares = lamina === 'america'
    ? [{ t: 'Golfo de México', x: 223, y: 100 }, { t: 'Mar Caribe', x: 420, y: 262 }, { t: 'Océano Pacífico', x: 300, y: 420 }]
    : [{ t: 'Mar Mediterráneo', x: 190, y: 462 }];
  const lejanas = lista.filter((c) => !(lamina === 'america' && CENTRO.includes(c.id)));
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-auto w-full" role="img" aria-label={lamina === 'america' ? 'Lámina de México y Colombia' : 'Lámina de Europa'}>
      <rect width={w} height={h} rx="18" className="fill-vino-oscuro" />
      {paralelos.map((lat) => (
        <g key={lat}>
          <line x1="14" x2={w - 14} y1={yLat(lat)} y2={yLat(lat)} className="stroke-crema/12" strokeDasharray="2 6" />
          <text x={w - 18} y={yLat(lat) - 5} textAnchor="end" fontSize="12" className="fill-crema/45">{lat}° N</text>
        </g>
      ))}
      {mares.map((m) => (
        <text key={m.t} x={m.x} y={m.y} fontSize={lamina === 'america' ? 17 : 15} className="fill-crema/40 font-serif italic">{m.t}</text>
      ))}
      {/* líneas hacia la 20 Sur */}
      {lejanas.filter((c) => c.id !== 'puebla' && activas.has(c.id)).map((c) => {
        const q = proyecta(c);
        if (lamina === 'america') return <Arco key={c.id} a={q} b={p} />;
        return <path key={c.id} d={`M${q.x},${q.y} Q${q.x / 2},${q.y - 60} 0,${h / 2}`} className="mapa-linea stroke-oro" fill="none" strokeWidth="2" strokeDasharray="5 5" />;
      })}
      {lamina === 'europa' && lista.some((c) => activas.has(c.id)) && (
        <text x="14" y={h / 2 + 26} fontSize="13" className="fill-oro">← a Puebla</text>
      )}
      {lejanas.map((c) => {
        const q = proyecta(c);
        const on = activas.has(c.id);
        return (
          <g key={c.id}>
            <Punto x={q.x} y={q.y} on={on} esPuebla={false} />
            <Etiqueta c={c} x={q.x} y={q.y} activa={on} tam={tam} />
          </g>
        );
      })}
      {lamina === 'america' && (
        <g>
          {/* el centro de México a escala, marcado y ampliado abajo */}
          <rect x={p.x - 24} y={p.y - 16} width="62" height="28" rx="6" fill="none" className="stroke-oro/70" strokeWidth="1.5" />
          <line x1={p.x - 24} y1={p.y + 12} x2="30" y2="262" className="stroke-oro/40" strokeWidth="1" />
          <line x1={p.x + 38} y1={p.y + 12} x2="262" y2="262" className="stroke-oro/40" strokeWidth="1" />
          {CENTRO.map((id) => {
            const q = proyecta(ciudades.find((c) => c.id === id)!);
            return <circle key={id} cx={q.x} cy={q.y} r="3.5" className={activas.has(id) || id === 'puebla' ? 'fill-oro' : 'fill-crema/35'} />;
          })}
          <rect x="30" y="262" width="232" height="176" rx="12" className="fill-tinta/70 stroke-oro/40" strokeWidth="1" />
          <text x="44" y="286" fontSize="13" className="fill-crema/60">Centro de México, ampliado</text>
          {CENTRO.filter((id) => id !== 'puebla' && activas.has(id)).map((id) => (
            <Arco key={id} a={enLupa(ciudades.find((c) => c.id === id)!)} b={pl} k={0.5} />
          ))}
          {CENTRO.map((id) => {
            const c = ciudades.find((x) => x.id === id)!;
            const q = enLupa(c);
            const esPuebla = id === 'puebla';
            const on = activas.has(id);
            const lab = id === 'cdmx' ? { x: q.x - 16, y: q.y - 18, a: 'start' as const } : { x: q.x, y: q.y + 32, a: 'middle' as const };
            return (
              <g key={id}>
                <Punto x={q.x} y={q.y} on={on} esPuebla={esPuebla} />
                <text x={lab.x} y={lab.y} textAnchor={lab.a} fontSize={19} className={`mapa-t ${on || esPuebla ? 'fill-crema font-semibold' : 'fill-crema/55'}`}>{c.nombre}</text>
                {esPuebla && <text x={q.x} y={q.y + 52} textAnchor="middle" fontSize="14" className="fill-oro">la 20 Sur</text>}
              </g>
            );
          })}
        </g>
      )}
    </svg>
  );
}

function MapaFormacion() {
  const [sel, setSel] = useState<Opcion>(opciones[0]);
  const [todas, setTodas] = useState(false);
  const VISIBLES = 6;
  const lista = useMemo(
    () => constancias.filter((k) => coincide(sel, k.temas)).sort((a, b) => a.orden - b.orden),
    [sel],
  );
  const activas = useMemo(() => new Set(lista.map((k) => k.ciudad).filter(Boolean) as string[]), [lista]);
  const nCiudades = activas.size;
  const anios = lista.map((k) => Math.floor(k.orden));
  const rango = anios.length ? (Math.min(...anios) === Math.max(...anios) ? `${Math.min(...anios)}` : `de ${Math.min(...anios)} a ${Math.max(...anios)}`) : '';
  return (
    <section id="formacion" className="bg-tinta py-16 text-crema md:py-24">
      <div className="contenedor">
        <div className="max-w-3xl">
          <h2 className="font-serif text-3xl sm:text-4xl">¿Dónde aprendió lo que te va a aplicar?</h2>
          <p className="mt-4 text-lg text-crema/85">
            La doctora publica todas sus constancias. Elige un tratamiento y se encienden las ciudades donde se formó para hacerlo; todas llevan a la misma dirección: la 20 Sur, en Puebla.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Elige un tratamiento">
          {opciones.map((o) => (
            <button
              key={o.id}
              type="button"
              aria-pressed={sel.id === o.id}
              onClick={() => { setSel(o); setTodas(false); }}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${sel.id === o.id ? 'border-oro bg-oro text-tinta' : 'border-crema/35 text-crema hover:border-oro'}`}
            >
              {o.nombre}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-[580fr_380fr]">
          <Lamina lamina="america" activas={activas} />
          <Lamina lamina="europa" activas={activas} />
        </div>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_22rem]">
          <div className="min-w-0">
            <p className="font-serif text-2xl" aria-live="polite">
              {sel.id === 'todo' ? 'Toda su formación' : sel.nombre}: {lista.length} {lista.length === 1 ? 'constancia' : 'constancias'}
              {nCiudades > 0 && `, en ${nCiudades} ${nCiudades === 1 ? 'ciudad' : 'ciudades'}`}, {rango}
            </p>
            <ol className="mt-6 divide-y divide-crema/15 border-y border-crema/15">
              {(todas ? lista : lista.slice(0, VISIBLES)).map((k) => {
                const c = ciudades.find((x) => x.id === k.ciudad);
                return (
                  <li key={k.titulo} className="grid gap-1 py-4 sm:grid-cols-[6.5rem_1fr]">
                    <span className="font-serif text-oro">{k.fecha}</span>
                    <div className="min-w-0">
                      <p className="font-medium">{k.titulo}</p>
                      <p className="text-sm text-crema/75">
                        {k.institucion}. {c ? (c.id === 'puebla' ? 'En Puebla.' : `${c.nombre}, ${c.pais}: a ${kmAPuebla(c).toLocaleString('es-MX')} km de la 20 Sur.`) : 'Sin sede indicada.'}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
            {lista.length > VISIBLES && (
              <button type="button" onClick={() => setTodas(!todas)} aria-expanded={todas} className="mt-5 rounded-full border border-crema/40 px-5 py-2.5 text-sm font-medium hover:border-oro">
                {todas ? 'Ver menos' : `Ver las ${lista.length} constancias`}
              </button>
            )}
          </div>
          <aside className="h-fit rounded-3xl bg-crema p-7 text-tinta lg:sticky lg:top-24">
            <p className="font-serif text-2xl">{sel.id === 'todo' ? 'Valoración con VISIA' : sel.nombre}</p>
            {sel.id === 'todo' ? (
              <p className="mt-3 text-tinta/85">{valoracion.precio}, {valoracion.nota}.</p>
            ) : (
              <>
                {sel.precio && <p className="mt-3 text-xl font-semibold text-vino">{sel.precio}</p>}
                {sel.nota && <p className="mt-2 text-tinta/85">{sel.nota}</p>}
                <p className="mt-3 text-sm text-tinta/75">El plan y el precio final se definen en la valoración ({valoracion.precio}, {valoracion.nota}).</p>
              </>
            )}
            <BotonWa texto={sel.mensaje} className="mt-6 w-full">Preguntar por WhatsApp</BotonWa>
          </aside>
        </div>
        <p className="mt-8 max-w-3xl text-sm text-crema/70">
          Constancias tomadas de su página "La Doctora". La relación entre cada constancia y cada tratamiento es una lectura de su título. Distancias en línea recta.
        </p>
      </div>
    </section>
  );
}

function Tratamientos() {
  return (
    <section id="tratamientos" className="contenedor py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div className="min-w-0">
          <h2 className="font-serif text-3xl text-tinta sm:text-4xl">Tratamientos y precios 2026</h2>
          <p className="mt-4 text-tinta/85">Los precios que publica la clínica. Cada plan se diseña tras la valoración médica.</p>
          <dl className="mt-8 divide-y divide-tinta/15 border-y border-tinta/15">
            {precios.map((p) => (
              <div key={p.nombre} className="py-5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <dt className="font-serif text-xl text-tinta">{p.nombre}</dt>
                  <dd className="font-semibold text-vino">{p.precio} MXN</dd>
                </div>
                <dd className="mt-1 text-sm text-tinta/80">{p.detalle}</dd>
              </div>
            ))}
          </dl>
          <BotonWa texto="Hola, me interesa el Protocolo Estrella (EndyMed + carboxiterapia)." className="mt-8">Preguntar por el Protocolo Estrella</BotonWa>
        </div>
        <div className="min-w-0">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8">
            {catalogo.map((f) => (
              <div key={f.familia}>
                <h3 className="border-b border-oro pb-2 font-serif text-xl text-tinta">{f.familia}</h3>
                <ul className="mt-3 space-y-1.5 text-tinta/85">
                  {f.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-10 rounded-2xl bg-arena p-6 text-tinta/85">
            <strong className="font-semibold text-tinta">Equipos en la clínica:</strong> {equipos}
          </p>
        </div>
      </div>
    </section>
  );
}

function ComoTrabaja() {
  return (
    <section className="bg-arena py-16 md:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-2">
        <div className="min-w-0">
          <h2 className="font-serif text-3xl text-tinta sm:text-4xl">Cómo trabaja</h2>
          <dl className="mt-8 space-y-7">
            {metodologia.map((m) => (
              <div key={m.t}>
                <dt className="font-serif text-xl text-vino">{m.t}</dt>
                <dd className="mt-1 text-tinta/85">{m.d}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="min-w-0 self-start rounded-3xl border border-tinta/15 bg-crema p-7 sm:p-9">
          <h3 className="font-serif text-2xl text-tinta">Lo que no hace, y a quién te envía</h3>
          <ul className="mt-6 space-y-4 text-tinta/85">
            {deriva.map((d) => (
              <li key={d.t}><strong className="font-semibold text-tinta">{d.t}:</strong> {d.d}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Clinica() {
  return (
    <section id="clinica" className="contenedor py-16 md:py-24">
      <div className="max-w-3xl">
        <h2 className="font-serif text-3xl text-tinta sm:text-4xl">La misma dirección desde 1971</h2>
        <p className="mt-5 text-lg text-tinta/85">{historia.texto}</p>
        <p className="mt-4 text-tinta/80">{historia.aclaracion}</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-[1.6fr_1fr]">
        <figure className="min-w-0">
          <img src={img('fachada-1991.webp')} width={1400} height={923} loading="lazy" alt="Fachada de la clínica en 1991, con los letreros de Unidad de Cirugía Especializada y Clínica Dermatológica" className="w-full rounded-2xl object-cover" />
          <figcaption className="mt-2 text-sm text-tinta/75">Fachada de la clínica, fotografía de 1991.</figcaption>
        </figure>
        <figure className="min-w-0">
          <img src={img('dr-francisco-1992.webp')} width={761} height={1100} loading="lazy" alt="El Dr. Francisco Arellano Ocampo frente al cartel del 18th World Congress of Dermatology" className="aspect-[4/5] w-full rounded-2xl object-cover object-top" />
          <figcaption className="mt-2 text-sm text-tinta/75">Dr. Francisco Arellano Ocampo, fundador, en el 18th World Congress of Dermatology, Nueva York, 1992.</figcaption>
        </figure>
      </div>
    </section>
  );
}

function Opiniones() {
  return (
    <section className="border-t border-tinta/10 bg-crema py-16 md:py-20">
      <div className="contenedor">
        <h2 className="font-serif text-3xl text-tinta sm:text-4xl">Lo que dicen sus pacientes</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {opiniones.map((o) => (
            <figure key={o.autor} className="border-l-2 border-oro pl-6">
              <blockquote className="font-serif text-xl leading-relaxed text-tinta">“{o.texto}”</blockquote>
              <figcaption className="mt-3 text-sm text-tinta/75">{o.autor}, en {o.fuente}. {o.tratamiento}.</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="bg-vino py-16 text-crema md:py-24">
      <div className="contenedor grid gap-10 md:grid-cols-2">
        <div className="min-w-0">
          <h2 className="font-serif text-3xl sm:text-4xl">Agenda tu valoración</h2>
          <p className="mt-4 text-lg text-crema/90">Por WhatsApp o por teléfono al mismo número.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa(mensajeBase)} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-crema px-6 py-3.5 font-semibold text-vino hover:bg-arena">
              <IconoWa /> Escribir por WhatsApp
            </a>
            <a href={negocio.telefonoHref} className="inline-flex items-center rounded-full border border-crema px-6 py-3.5 font-semibold hover:bg-crema hover:text-vino">
              Llamar
            </a>
          </div>
        </div>
        <dl className="grid min-w-0 gap-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <dt className="text-sm text-crema/80">Dirección</dt>
            <dd className="mt-1 text-lg">{negocio.direccion}</dd>
            <dd className="mt-2"><a href={negocio.maps} target="_blank" rel="noopener" className="font-semibold underline underline-offset-4">Abrir en Google Maps</a></dd>
          </div>
          <div>
            <dt className="text-sm text-crema/80">Horario</dt>
            {negocio.horario.map((h) => <dd key={h.dias} className="mt-1">{h.dias}: {h.horas}</dd>)}
          </div>
          <div className="min-w-0">
            <dt className="text-sm text-crema/80">Teléfono y correo</dt>
            <dd className="mt-1"><a href={negocio.telefonoHref} className="underline-offset-4 hover:underline">{negocio.telefono}</a></dd>
            <dd className="mt-1 break-words"><a href={`mailto:${negocio.correo}`} className="underline-offset-4 hover:underline">{negocio.correo}</a></dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-tinta pb-28 pt-12 text-crema/80 md:pb-12">
      <div className="contenedor flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="flex items-center gap-3">
          <Monograma className="h-10 w-10" />
          <div>
            <p className="font-serif text-lg text-crema">{negocio.nombreCompleto}</p>
            <p className="text-sm">{negocio.especialidad}. {negocio.clinica}.</p>
          </div>
        </div>
        <ul className="flex gap-5 text-sm">
          {negocio.redes.map((r) => (
            <li key={r.nombre}><a href={r.url} target="_blank" rel="noopener" className="hover:text-oro">{r.nombre}</a></li>
          ))}
        </ul>
      </div>
      <p className="contenedor mt-8 text-sm">{avisoLegal}</p>
      <p className="contenedor mt-2 text-sm">Cédulas profesionales 9048813 y 11077470.</p>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-tinta/15 bg-crema text-sm font-semibold md:hidden">
      <a href={wa(mensajeBase)} target="_blank" rel="noopener" className="flex items-center justify-center gap-1.5 bg-vino py-3.5 text-crema"><IconoWa className="h-4 w-4" />WhatsApp</a>
      <a href={negocio.telefonoHref} className="flex items-center justify-center py-3.5 text-vino">Llamar</a>
      <a href={negocio.maps} target="_blank" rel="noopener" className="flex items-center justify-center py-3.5 text-vino">Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-crema focus:px-4 focus:py-2">Saltar al contenido</a>
      <Encabezado />
      <main id="contenido">
        <Portada />
        <Valoracion />
        <MapaFormacion />
        <Tratamientos />
        <ComoTrabaja />
        <Clinica />
        <Opiniones />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
