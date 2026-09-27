import { useMemo, useState } from 'react';
import {
  bienvenida, experiencias, otrosEnlaces, faciales, mapsHref, negocio, politicas, precio, sello, servicios, sucursales, telHref, wa,
  type Opcion, type Servicio, type Sucursal, type Tipo,
} from './data/content';

const img = (f: string) => `${import.meta.env.BASE_URL}${f}`;
const MENSAJE_BASE = 'Hola, quisiera agendar una cita';

export default function App() {
  const [sucursalId, setSucursalId] = useState('napoles');
  const sucursal = sucursales.find((s) => s.id === sucursalId) ?? sucursales[0];
  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:bg-crema focus:px-4 focus:py-2">
        Saltar al contenido
      </a>
      <Encabezado />
      <main id="contenido">
        <Portada />
        <RelojDeArena sucursal={sucursal} setSucursalId={setSucursalId} />
        <Sello />
        <Masajes />
        <Faciales />
        <Oxigeno />
        <Experiencias />
        <Sucursales actual={sucursal.id} setSucursalId={setSucursalId} />
      </main>
      <Pie />
      <BarraMovil sucursal={sucursal} />
    </>
  );
}

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-crema/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#contenido" className="shrink-0" aria-label="Desértika Spa, inicio">
          <img src={img('logo-tinta.webp')} width={364} height={87} alt="Desértika Spa Boutique" className="h-9 w-auto sm:h-10" />
        </a>
        <nav aria-label="Secciones" className="hidden items-center gap-6 text-[0.95rem] md:flex">
          <a className="enlace-nav" href="#tiempo">¿Cuánto tiempo tienes?</a>
          <a className="enlace-nav" href="#masajes">Masajes</a>
          <a className="enlace-nav" href="#faciales">Faciales</a>
          <a className="enlace-nav" href="#sucursales">Sucursales</a>
        </nav>
        <a href={wa(MENSAJE_BASE)} className="boton boton-terracota hidden sm:inline-flex">Agenda en WhatsApp</a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section className="relative overflow-hidden">
      <div className="contenedor grid items-center gap-10 py-12 md:grid-cols-[1.1fr_0.9fr] md:py-20">
        <div className="min-w-0">
          <p className="font-titulo text-2xl italic text-terracota">{bienvenida.frase}</p>
          <h1 className="mt-3 font-titulo text-[2.5rem] leading-[1.05] font-medium sm:text-6xl">
            Masajes y faciales a tu medida en la Ciudad de México
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-tinta/85">{bienvenida.texto}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa(MENSAJE_BASE)} className="boton boton-terracota">Agenda en WhatsApp</a>
            <a href="#tiempo" className="boton boton-borde">Elige por tu tiempo</a>
          </div>
          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
            {bienvenida.cifras.map((c) => (
              <div key={c.t}>
                <dt className="sr-only">{c.t}</dt>
                <dd className="font-titulo text-3xl">{c.n}</dd>
                <dd className="text-sm text-tinta/75">{c.t}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative mx-auto w-full max-w-[19rem] min-w-0 sm:max-w-md">
          <div className="arco overflow-hidden bg-duna">
            <img
              src={img('aceite-espalda.webp')} width={733} height={1100} fetchPriority="high"
              alt="Terapeuta vertiendo aceite tibio sobre la espalda de una clienta"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <Emblema className="absolute -bottom-5 -left-5 h-24 w-24 text-terracota sm:h-28 sm:w-28" />
        </div>
      </div>
    </section>
  );
}

// El emblema de su logotipo (sol y duna), redibujado en SVG como adorno.
function Emblema({ className = '' }: { className?: string }) {
  const rayos = Array.from({ length: 9 }, (_, i) => {
    const a = Math.PI + (i + 1) * (Math.PI / 10);
    return [50 + 18 * Math.cos(a), 50 + 18 * Math.sin(a), 50 + 40 * Math.cos(a), 50 + 40 * Math.sin(a)];
  });
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="46" fill="var(--color-crema)" stroke="currentColor" strokeWidth="3" />
      {rayos.map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      ))}
      <path d="M12 72 C 30 52, 44 50, 54 62 C 62 72, 74 70, 88 60 L 88 70 C 80 84, 66 92, 50 92 C 32 92, 18 84, 12 72 Z" fill="currentColor" />
    </svg>
  );
}

const MINUTOS = [15, 20, 25, 30, 50, 80, 110];
const TIPOS: { id: 'todo' | Tipo; t: string }[] = [
  { id: 'todo', t: 'Todo' },
  { id: 'masaje', t: 'Masajes' },
  { id: 'facial', t: 'Faciales' },
  { id: 'oxigeno', t: 'Bar de oxígeno' },
];

type Ajuste = { s: Servicio; o: Opcion };

function RelojDeArena({ sucursal, setSucursalId }: { sucursal: Sucursal; setSucursalId: (id: string) => void }) {
  const [minutos, setMinutos] = useState(50);
  const [tipo, setTipo] = useState<'todo' | Tipo>('todo');
  const [elegido, setElegido] = useState<string | null>(null);

  const caben: Ajuste[] = useMemo(() => {
    return servicios
      .filter((s) => tipo === 'todo' || s.tipo === tipo)
      .map((s) => {
        const o = s.opciones.filter((x) => x.min <= minutos).sort((a, b) => b.min - a.min)[0];
        return o ? { s, o } : null;
      })
      .filter((x): x is Ajuste => x !== null)
      .sort((a, b) => b.o.min - a.o.min || a.o.precio - b.o.precio);
  }, [minutos, tipo]);

  const seleccion = caben.find((c) => c.s.id === elegido) ?? null;
  const llenado = minutos / 110;

  return (
    <section id="tiempo" className="bg-noche py-16 text-crema md:py-24" aria-labelledby="tiempo-titulo">
      <div className="contenedor grid gap-10 lg:grid-cols-[18rem_1fr] lg:gap-16">
        <div className="min-w-0">
          <h2 id="tiempo-titulo" className="font-titulo text-4xl font-medium sm:text-5xl">¿Cuánto tiempo tienes?</h2>
          <p className="mt-4 leading-relaxed text-crema/85">
            Puedes elegir de acuerdo con el tiempo disponible con el que cuentas, lo que deseas sentir y la zona de la
            ciudad que te resulte más conveniente.
          </p>
          <Reloj llenado={llenado} minutos={minutos} />
        </div>

        <div className="min-w-0">
          <fieldset>
            <legend className="font-titulo text-xl">Tengo libres</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {MINUTOS.map((m) => (
                <button
                  key={m} type="button" aria-pressed={minutos === m}
                  onClick={() => { setMinutos(m); setElegido(null); }}
                  className={`ficha ${minutos === m ? 'ficha-activa' : ''}`}
                >
                  {m} min
                </button>
              ))}
            </div>
          </fieldset>
          <fieldset className="mt-6">
            <legend className="font-titulo text-xl">Quiero</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {TIPOS.map((t) => (
                <button
                  key={t.id} type="button" aria-pressed={tipo === t.id}
                  onClick={() => { setTipo(t.id); setElegido(null); }}
                  className={`ficha ${tipo === t.id ? 'ficha-activa' : ''}`}
                >
                  {t.t}
                </button>
              ))}
            </div>
          </fieldset>

          <p className="mt-8 text-crema/85" aria-live="polite">
            {caben.length === 0
              ? `En ${minutos} minutos no cabe ningún servicio de este tipo. Prueba con más tiempo.`
              : `${caben.length} ${caben.length === 1 ? 'opción cabe' : 'opciones caben'} en ${minutos} minutos. Toca una para armar tu cita.`}
          </p>
          <ul className="mt-4 grid border-t border-crema/15 lg:grid-cols-2 lg:gap-x-6">
            {caben.map(({ s, o }) => {
              const activo = seleccion?.s.id === s.id;
              return (
                <li key={s.id} className="border-b border-crema/15">
                  <button
                    type="button" aria-pressed={activo} onClick={() => setElegido(s.id)}
                    className={`flex w-full items-baseline gap-4 px-2 py-2.5 text-left transition-colors ${activo ? 'bg-crema/10' : 'hover:bg-crema/5'}`}
                  >
                    <span className="min-w-0 flex-1">
                      <span className="block font-medium">{s.nombre}</span>
                      <span className="hidden text-sm text-crema/75 sm:block">{s.grupo}</span>
                    </span>
                    <span className="shrink-0 text-right tabular-nums">
                      <span className="block">{o.min} min</span>
                      <span className="block text-sm text-arena">{precio(o.precio)}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <TuPausa seleccion={seleccion} sucursal={sucursal} setSucursalId={setSucursalId} />
        </div>
      </div>
    </section>
  );
}

function Reloj({ llenado, minutos }: { llenado: number; minutos: number }) {
  const arriba = 'M40 30 L160 30 C160 95 108 118 104 150 L96 150 C92 118 40 95 40 30 Z';
  const abajo = 'M96 150 L104 150 C108 182 160 205 160 270 L40 270 C40 205 92 182 96 150 Z';
  return (
    <figure className="mx-auto mt-6 w-36 sm:w-48 lg:mx-0 lg:mt-8 lg:w-56">
      <svg viewBox="0 0 200 300" className="w-full" role="img" aria-label={`Reloj de arena con ${minutos} minutos`}>
        <defs>
          <clipPath id="bulbo-arriba"><path d={arriba} /></clipPath>
          <clipPath id="bulbo-abajo"><path d={abajo} /></clipPath>
        </defs>
        <rect x="24" y="14" width="152" height="14" rx="4" fill="var(--color-salvia)" />
        <rect x="24" y="272" width="152" height="14" rx="4" fill="var(--color-salvia)" />
        <line x1="34" y1="28" x2="34" y2="272" stroke="var(--color-salvia)" strokeWidth="4" />
        <line x1="166" y1="28" x2="166" y2="272" stroke="var(--color-salvia)" strokeWidth="4" />
        <g clipPath="url(#bulbo-arriba)">
          <rect className="arena-arriba" x="40" y="30" width="120" height="120" fill="var(--color-arena)"
            style={{ transform: `scaleY(${llenado})` }} />
        </g>
        <g clipPath="url(#bulbo-abajo)">
          <path d="M40 270 C60 244 86 232 100 230 C114 232 140 244 160 270 Z" fill="var(--color-arena)" opacity="0.9" />
        </g>
        <line className="chorro" x1="100" y1="150" x2="100" y2="232" stroke="var(--color-arena)" strokeWidth="2" strokeDasharray="3 5" />
        <path d={arriba} fill="none" stroke="var(--color-crema)" strokeOpacity="0.7" strokeWidth="2" />
        <path d={abajo} fill="none" stroke="var(--color-crema)" strokeOpacity="0.7" strokeWidth="2" />
      </svg>
      <figcaption className="mt-2 text-center font-titulo text-3xl tabular-nums lg:text-left">{minutos} min</figcaption>
    </figure>
  );
}

function TuPausa({ seleccion, sucursal, setSucursalId }: { seleccion: Ajuste | null; sucursal: Sucursal; setSucursalId: (id: string) => void }) {
  const mensaje = seleccion
    ? `${MENSAJE_BASE}: ${seleccion.s.nombre}, ${seleccion.o.min} min (${precio(seleccion.o.precio)} M.N.), en la sucursal ${sucursal.nombre}.`
    : `${MENSAJE_BASE} en la sucursal ${sucursal.nombre}.`;
  return (
    <div className="mt-8 rounded-[1.25rem] bg-crema p-5 text-tinta sm:p-6">
      <h3 className="font-titulo text-2xl">Tu pausa</h3>
      {seleccion ? (
        <p className="mt-2 text-lg">
          <strong className="font-semibold">{seleccion.s.nombre}</strong>, {seleccion.o.min} min,{' '}
          <span className="tabular-nums">{precio(seleccion.o.precio)} M.N.</span>
        </p>
      ) : (
        <p className="mt-2 text-tinta/80">Elige un servicio de la lista.</p>
      )}
      <label className="mt-4 block text-sm font-semibold" htmlFor="sucursal-reloj">¿En qué sucursal?</label>
      <select
        id="sucursal-reloj" value={sucursal.id} onChange={(e) => setSucursalId(e.target.value)}
        className="mt-1 w-full rounded-lg border border-tinta/25 bg-white px-3 py-2.5"
      >
        {sucursales.map((s) => (
          <option key={s.id} value={s.id}>{s.nombre} ({s.zona})</option>
        ))}
      </select>
      <p className="mt-2 text-sm text-tinta/75">
        {sucursal.direccion}.{sucursal.nota ? ` ${sucursal.nota}` : ''} Revisa la disponibilidad por sucursal antes de reservar.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a href={wa(mensaje)} className="boton boton-terracota">Pedir por WhatsApp</a>
        {seleccion && seleccion.o.reserva !== 'whatsapp' && (
          <a href={seleccion.o.reserva} className="boton boton-salvia">Agendar en línea</a>
        )}
        {sucursal.agenda && (
          <a href={sucursal.agenda} className="boton boton-borde">Agenda de {sucursal.nombre}</a>
        )}
      </div>
    </div>
  );
}

function Sello() {
  return (
    <section className="py-12 md:py-24" aria-labelledby="sello-titulo">
      <div className="contenedor grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <img
          src={img('toalla-logo.webp')} width={900} height={900} loading="lazy"
          alt="Masaje de espalda sobre una toalla bordada con el logotipo Desértika Spa Boutique"
          className="arco-bajo aspect-[4/3] w-full object-cover sm:aspect-square"
        />
        <div className="min-w-0">
          <h2 id="sello-titulo" className="font-titulo text-4xl font-medium sm:text-5xl">El sello Desértika</h2>
          <p className="mt-4 text-lg leading-relaxed text-tinta/85">{sello.texto}</p>
          <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
            {sello.elementos.map((e) => (
              <li key={e.t} className="border-t border-tinta/15 py-3">
                <span className="block font-semibold">{e.t}</span>
                <span className="block text-sm text-tinta/75">{e.d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FilaServicio({ s, foto = false }: { s: Servicio; foto?: boolean }) {
  return (
    <li className="grid grid-cols-1 gap-3 border-t border-tinta/15 py-5 sm:grid-cols-[1fr_auto] sm:gap-4 sm:py-6">
      <div className={`min-w-0 ${foto && s.foto ? 'flex gap-4' : ''}`}>
        {foto && s.foto && (
          <img src={img(s.foto.src)} width={640} height={640} loading="lazy" alt={s.foto.alt}
            className="h-16 w-16 shrink-0 rounded-full object-cover sm:h-28 sm:w-28" />
        )}
        <div className="min-w-0">
          <h3 className="font-titulo text-xl sm:text-2xl">{s.nombre}</h3>
          <p className="text-[0.95rem] italic text-terracota">{s.lema}</p>
          <p className="mt-1.5 max-w-prose text-[0.95rem] leading-relaxed text-tinta/85 sm:mt-2 sm:text-base">{s.texto}</p>
        </div>
      </div>
      <ul className="flex flex-wrap gap-2 self-start sm:flex-col sm:items-end">
        {s.opciones.map((o) => (
          <li key={o.min}>
            <a
              href={o.reserva === 'whatsapp' ? wa(`${MENSAJE_BASE}: ${s.nombre}, ${o.min} min.`) : o.reserva}
              className="precio" aria-label={`Reservar ${s.nombre}, ${o.min} minutos, ${precio(o.precio)} pesos`}
            >
              <span>{o.min} min</span>
              <span className="font-semibold">{precio(o.precio)}</span>
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}

function Masajes() {
  const cuerpo = servicios.filter((s) => s.grupo === 'Cuerpo completo');
  const zona = servicios.filter((s) => s.grupo === 'Zona específica');
  return (
    <section id="masajes" className="bg-duna py-12 md:py-24" aria-labelledby="masajes-titulo">
      <div className="contenedor">
        <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-end">
          <div className="min-w-0">
            <h2 id="masajes-titulo" className="font-titulo text-4xl font-medium sm:text-5xl">Elige el masaje que necesitas hoy</h2>
            <p className="mt-4 text-lg leading-relaxed text-tinta/85">
              No todos los días se sienten igual. Puedes elegir una experiencia enfocada en relajarte, atender zonas de
              tensión o simplemente regalarte una pausa. Nuestro equipo te orientará para seleccionar la técnica y la
              presión más adecuadas.
            </p>
          </div>
          <p className="text-tinta/80 md:text-right">Precios en pesos mexicanos. Toca una duración para reservarla.</p>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-5">
          {['piedras', 'rebozo', 'lomi'].map((id) => {
            const s = servicios.find((x) => x.id === id)!;
            return (
              <img key={id} src={img(s.foto!.src)} width={640} height={640} loading="lazy" alt={s.foto!.alt}
                className="aspect-square w-full rounded-[1rem] object-cover" />
            );
          })}
        </div>

        <h3 className="mt-12 font-titulo text-3xl">Cuerpo completo</h3>
        <ul className="mt-4">{cuerpo.map((s) => <FilaServicio key={s.id} s={s} />)}</ul>
        <h3 className="mt-12 font-titulo text-3xl">En zona específica</h3>
        <ul className="mt-4">{zona.map((s) => <FilaServicio key={s.id} s={s} foto />)}</ul>
      </div>
    </section>
  );
}

function Faciales() {
  const lista = servicios.filter((s) => s.tipo === 'facial');
  return (
    <section id="faciales" className="py-12 md:py-24" aria-labelledby="faciales-titulo">
      <div className="contenedor grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="min-w-0 lg:sticky lg:top-24 lg:self-start">
          <h2 id="faciales-titulo" className="font-titulo text-4xl font-medium sm:text-5xl">Faciales</h2>
          <p className="mt-4 text-lg leading-relaxed text-tinta/85">{faciales.texto}</p>
          <p className="mt-4 leading-relaxed text-tinta/85">{faciales.touch}</p>
          <p className="mt-4 border-l-4 border-terracota pl-4 leading-relaxed">{faciales.faceMapping}</p>
          <p className="mt-4 text-sm text-tinta/75">Duración de cada facial: 50 minutos.</p>
        </div>
        <ul className="min-w-0">{lista.map((s) => <FilaServicio key={s.id} s={s} foto />)}</ul>
      </div>
    </section>
  );
}

function Oxigeno() {
  const s = servicios.find((x) => x.id === 'oxigeno')!;
  return (
    <section className="bg-salvia-clara py-12 md:py-20" aria-labelledby="oxigeno-titulo">
      <div className="contenedor grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">
        <img src={img(s.foto!.src)} width={640} height={609} loading="lazy" alt={s.foto!.alt}
          className="arco w-2/3 max-w-sm object-cover justify-self-center sm:w-full" />
        <div className="min-w-0">
          <h2 id="oxigeno-titulo" className="font-titulo text-4xl font-medium sm:text-5xl">Bar de Oxígeno</h2>
          <p className="mt-4 text-lg leading-relaxed text-tinta/85">{s.texto}</p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {s.opciones.map((o) => (
              <li key={o.min}>
                <a href={wa(`${MENSAJE_BASE}: Bar de Oxígeno, ${o.min} minutos.`)} className="precio">
                  <span>{o.min} minutos</span>
                  <span className="font-semibold">{precio(o.precio)}</span>
                </a>
              </li>
            ))}
          </ul>
          <a href={wa('Hola, me gustaría información del Bar de Oxígeno para un evento.')} className="boton boton-salvia mt-6">
            Disponible para eventos
          </a>
        </div>
      </div>
    </section>
  );
}

function Experiencias() {
  return (
    <section className="py-12 md:py-24" aria-labelledby="exp-titulo">
      <div className="contenedor">
        <h2 id="exp-titulo" className="max-w-2xl font-titulo text-4xl font-medium sm:text-5xl">Más formas de consentirte</h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-tinta/85">
          Técnicas de todo el mundo, experiencias en pareja o con amigas y rituales como el temazcal. Cada una tiene su
          página con los detalles en desertikaspa.com.
        </p>
        <ul className="mt-10 grid gap-x-12 md:grid-cols-2">
          {experiencias.map((e) => (
            <li key={e.nombre} className="border-t border-tinta/15 py-5">
              <h3 className="font-titulo text-2xl">
                <a href={e.url} className="hover:text-terracota">{e.nombre} <span aria-hidden="true">→</span></a>
              </h3>
              <p className="mt-1 leading-relaxed text-tinta/85">{e.texto}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-tinta/15 pt-5">
          <span className="text-tinta/80">También:</span>
          {otrosEnlaces.map((o) => <a key={o.nombre} className="enlace" href={o.url}>{o.nombre}</a>)}
        </p>
        <div className="mt-10 flex flex-col items-start gap-4 rounded-[1.25rem] bg-terracota px-6 py-6 text-crema sm:flex-row sm:items-center">
          <p className="min-w-0 flex-1 font-titulo text-2xl">Regala una experiencia Desértika.</p>
          <a href={negocio.giftcard} className="boton boton-crema">Comprar una giftcard</a>
        </div>
      </div>
    </section>
  );
}

function Sucursales({ actual, setSucursalId }: { actual: string; setSucursalId: (id: string) => void }) {
  return (
    <section id="sucursales" className="bg-duna py-12 md:py-24" aria-labelledby="suc-titulo">
      <div className="contenedor">
        <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-center">
          <div className="min-w-0">
            <h2 id="suc-titulo" className="font-titulo text-4xl font-medium sm:text-5xl">Un Desértika cerca de ti</h2>
            <p className="mt-4 text-lg leading-relaxed text-tinta/85">
              En las mejores zonas de la Ciudad de México y el área metropolitana. Consulta la sede más cercana y
              comunícate directamente para reservar.
            </p>
          </div>
          <div className="grid grid-cols-[1.2fr_1fr] gap-3">
            <img src={img('recepcion.webp')} width={596} height={350} loading="lazy"
              alt="Recepción de una sucursal Desértika con el logotipo en madera" className="h-full w-full rounded-[1rem] object-cover" />
            <img src={img('pasillo-velas.webp')} width={488} height={350} loading="lazy"
              alt="Pasillo hacia las cabinas iluminado con velas" className="h-full w-full rounded-[1rem] object-cover" />
          </div>
        </div>

        <div className="mt-10 sm:hidden">
          <p className="font-semibold" id="elige-suc">Elige tu sucursal</p>
          <div className="mt-3 flex flex-wrap gap-2" role="group" aria-labelledby="elige-suc">
            {sucursales.map((s) => (
              <button key={s.id} type="button" aria-pressed={actual === s.id} onClick={() => setSucursalId(s.id)}
                className={`min-h-11 rounded-full border px-3.5 py-2 text-[0.95rem] ${actual === s.id ? 'border-terracota bg-terracota text-white' : 'border-tinta/25 bg-white/60'}`}>
                {s.nombre}
              </button>
            ))}
          </div>
          <div className="mt-5 rounded-[1.25rem] bg-crema p-5" aria-live="polite">
            <FichaSucursal s={sucursales.find((x) => x.id === actual) ?? sucursales[0]} />
          </div>
        </div>

        <ul className="mt-12 hidden gap-x-10 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {sucursales.map((s) => (
            <li key={s.id} className={`border-t py-5 ${actual === s.id ? 'border-terracota' : 'border-tinta/15'}`}>
              <FichaSucursal s={s} />
              <button type="button" className="enlace mt-1 text-[0.95rem]" aria-pressed={actual === s.id} onClick={() => setSucursalId(s.id)}>
                {actual === s.id ? 'Tu sucursal' : 'Es mi sucursal'}
              </button>
            </li>
          ))}
        </ul>

        <ul className="mt-12 grid gap-6 border-t border-tinta/15 pt-8 md:grid-cols-3">
          {politicas.map((p) => (
            <li key={p.t}>
              <h3 className="font-semibold">{p.t}</h3>
              <p className="mt-1 text-sm leading-relaxed text-tinta/80">{p.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FichaSucursal({ s }: { s: Sucursal }) {
  return (
    <>
      <h3 className="font-titulo text-2xl">{s.nombre}</h3>
      <p className="mt-1 text-tinta/85">{s.direccion}</p>
      {s.tels.length > 0 && (
        <p className="mt-1">
          {s.tels.map((t, i) => (
            <span key={t}>{i > 0 && ' / '}<a className="enlace" href={telHref(t)}>{t}</a></span>
          ))}
        </p>
      )}
      {s.nota && <p className="mt-1 text-sm text-tinta/75">{s.nota}</p>}
      <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[0.95rem]">
        {s.agenda
          ? <a className="enlace" href={s.agenda}>Agendar cita</a>
          : s.id !== 'hyatt' && <a className="enlace" href={wa(`${MENSAJE_BASE} en la sucursal ${s.nombre}.`)}>Agendar por WhatsApp</a>}
        <a className="enlace" href={mapsHref(s)}>Cómo llegar</a>
      </p>
    </>
  );
}

function Pie() {
  return (
    <footer className="bg-noche pb-28 pt-14 text-crema md:pb-14">
      <div className="contenedor grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="min-w-0">
          <img src={img('logo-blanco.webp')} width={364} height={87} loading="lazy" alt="Desértika Spa Boutique" className="h-11 w-auto" />
          <p className="mt-4 text-crema/85">Agenda en WhatsApp: <a className="enlace-claro" href={wa(MENSAJE_BASE)}>{negocio.whatsappVisible}</a></p>
          <p className="mt-1 text-crema/85"><a className="enlace-claro" href={negocio.agendaEnLinea}>Agenda en línea</a></p>
        </div>
        <ul className="space-y-2 text-crema/85">
          <li><a className="enlace-claro" href={negocio.giftcard}>Giftcard</a></li>
          <li><a className="enlace-claro" href={negocio.tienda}>Tienda en línea</a></li>
          <li><a className="enlace-claro" href={negocio.membresias}>Membresías</a></li>
          <li><a className="enlace-claro" href={negocio.factura}>Solicita tu factura</a></li>
          <li><a className="enlace-claro" href={negocio.bolsa}>Bolsa de trabajo</a></li>
        </ul>
        <div className="min-w-0">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-crema/85">
            {negocio.redes.map((r) => <li key={r.nombre}><a className="enlace-claro" href={r.url}>{r.nombre}</a></li>)}
          </ul>
          <p className="mt-6 text-sm text-crema/75">
            <a className="enlace-claro" href={negocio.privacidad}>Aviso de privacidad</a>
            {' / '}
            <a className="enlace-claro" href={negocio.terminos}>Términos y condiciones</a>
          </p>
          <p className="mt-2 text-sm text-crema/75">Desértika Spa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

function BarraMovil({ sucursal }: { sucursal: Sucursal }) {
  const conTel = sucursal.tels.length > 0 ? sucursal : sucursales[0];
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-crema/20 bg-noche text-crema md:hidden">
      <a href={wa(MENSAJE_BASE)} className="barra-boton bg-terracota">WhatsApp</a>
      <a href={telHref(conTel.tels[0])} className="barra-boton">
        Llamar<span className="block text-[0.7rem] font-normal text-crema/80">{conTel.nombre}</span>
      </a>
      <a href={mapsHref(sucursal)} className="barra-boton">
        Cómo llegar<span className="block text-[0.7rem] font-normal text-crema/80">{sucursal.nombre}</span>
      </a>
    </nav>
  );
}
