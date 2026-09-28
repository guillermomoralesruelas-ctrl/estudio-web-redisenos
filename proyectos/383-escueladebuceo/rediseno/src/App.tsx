import { useRef, useState } from 'react';
import { albercas, cursos, negocio, niveles, ramales, viajes, vip, wa, type Curso, type Ramal } from './data/content';
import fotos from './data/fotos.json';

const medidas = fotos as unknown as Record<string, [number, number]>;
const foto = (n: string) => ({ src: `./${n}.webp`, width: medidas[n][0], height: medidas[n][1] });

const colorRamal: Record<Ramal, string> = {
  principal: 'var(--color-azul)',
  prueba: 'var(--color-rojo)',
  sinbuzo: 'var(--color-ambar)',
  owd: 'var(--color-turquesa)',
  avanzado: 'var(--color-morado)',
};

const principal = cursos.filter((c) => c.ramal === 'principal');
const porId = Object.fromEntries(cursos.map((c) => [c.id, c])) as Record<string, Curso>;

type Estado = 'ya' | 'listo' | 'edad' | 'nivel' | 'libre';

function estadoDe(c: Curso, nivel: number | null, edad: number | null): Estado {
  if (nivel === null) return 'libre';
  if (c.otorga !== undefined && c.otorga <= nivel) return 'ya';
  if (c.hasta !== undefined && nivel > c.hasta) return 'ya';
  if (nivel < c.nivel) return 'nivel';
  if (edad !== null && edad < c.edad) return 'edad';
  return 'listo';
}

const nombreNivel = (n: number) => niveles.find((x) => x.id === n)!.texto;

// Las estaciones de la línea principal que faltan entre tu nivel y el que pide el curso.
function trayecto(c: Curso, nivel: number): Curso[] {
  return principal.filter((p) => p.otorga! > nivel && p.otorga! <= c.nivel);
}

function Icono({ d, className = 'size-5' }: { d: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}
const iWhats = 'M3 21l1.7-5A8.5 8.5 0 1 1 8 19.3L3 21zM9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.8-2.2-1-1 1a4.5 4.5 0 0 1-2.5-2.5l1-1-1-2.2L9 8.5z';
const iTel = 'M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2';
const iMapa = 'M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z';
const iFlecha = 'M5 12h14M13 6l6 6-6 6';

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 bg-abismo/95 text-white backdrop-blur">
      <div className="contenedor flex h-20 items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0">
          <img {...foto('logo')} alt="Escuela de Buceo Proyecto Azul" className="h-16 w-auto" />
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-7 font-medium md:flex">
          <a href="#linea" className="hover:text-celeste">Cursos</a>
          <a href="#viajes" className="hover:text-celeste">Viajes</a>
          <a href="#albercas" className="hover:text-celeste">Albercas</a>
          <a href="#contacto" className="hover:text-celeste">Contacto</a>
        </nav>
        <a href={wa('Hola, quiero información de sus cursos de buceo.')} className="boton min-h-11 bg-rojo px-5 text-white hover:bg-[#9e1317]">
          <Icono d={iWhats} />
          <span>WhatsApp</span>
        </a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-abismo text-white">
      <img {...foto('f-fondo')} alt="Bajo el agua: un cardumen de peces cruza un arco de roca" className="absolute inset-0 size-full object-cover opacity-45" fetchPriority="high" />
      <div className="absolute inset-0 bg-gradient-to-b from-abismo/40 via-abismo/55 to-abismo" />
      <div className="contenedor relative py-20 sm:py-28 lg:py-32">
        <p className="font-titulo text-2xl font-semibold text-celeste">Hacemos burbujas desde {negocio.desde}</p>
        <h1 className="titulo mt-3 max-w-4xl text-5xl sm:text-6xl lg:text-7xl">Aprende a bucear en la Ciudad de México, desde nadar hasta Dive Master</h1>
        <p className="mt-6 max-w-2xl text-lg text-white/90">
          Escuela de buceo {negocio.agencias} con clases en 2 albercas de la CDMX, tienda de equipo en la Escandón y viajes a bucear por todo México.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#linea" className="boton bg-white text-abismo hover:bg-espuma">
            ¿En qué estación vas?
            <Icono d={iFlecha} />
          </a>
          <a href={wa('Hola, quiero información de sus cursos de buceo.')} className="boton border-2 border-white/70 text-white hover:bg-white/10">
            <Icono d={iWhats} />
            Escribir por WhatsApp
          </a>
        </div>
        <dl className="mt-14 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            ['1998', 'Haciendo burbujas'],
            ['20', 'Cursos y especialidades'],
            ['2', 'Albercas en la CDMX'],
            ['14', 'Viajes en su calendario'],
          ].map(([n, t]) => (
            <div key={t} className="border-l-4 border-rojo pl-4">
              <dt className="sr-only">{t}</dt>
              <dd className="titulo text-4xl">{n}</dd>
              <dd className="text-sm text-white/85">{t}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Punto({ c, estado, activo, chico, onElegir }: { c: Curso; estado: Estado; activo: boolean; chico?: boolean; onElegir: (id: string) => void }) {
  const color = colorRamal[c.ramal];
  const tam = chico ? 18 : 30;
  const lleno = estado === 'listo' || estado === 'ya' || estado === 'libre';
  const apagado = estado === 'nivel' || estado === 'edad';
  const etiqueta = {
    ya: c.otorga ? 'Ya la tienes' : 'Ya no la necesitas',
    listo: c.bitacora ? `Puedes tomarlo si llevas ${c.bitacora} buceos` : 'Puedes tomarlo',
    edad: `Desde ${c.edad} años`,
    nivel: `Necesitas ${nombreNivel(c.nivel).split(' (')[0]}`,
    libre: c.nota ? c.nota.replace('.', '') : `Desde ${c.edad} años`,
  }[estado];
  return (
    <button
      type="button"
      onClick={() => onElegir(c.id)}
      aria-pressed={activo}
      className={`group relative flex w-full items-start gap-3 rounded-lg py-1.5 pr-2 text-left transition-colors ${activo ? 'bg-white shadow-md' : 'hover:bg-white/70'}`}
    >
      <span
        className="relative z-10 mt-0.5 grid shrink-0 place-items-center rounded-full border-[5px] bg-white"
        style={{ width: tam, height: tam, borderColor: color, borderWidth: chico ? 4 : 6, background: activo ? color : lleno ? '#fff' : 'var(--color-espuma)', opacity: apagado ? 0.55 : 1 }}
      >
        {estado === 'ya' && !activo && (
          <svg viewBox="0 0 12 12" className="size-3" aria-hidden="true"><path d="M2 6.5l2.5 2.5L10 3.5" stroke={color} strokeWidth="2.4" fill="none" /></svg>
        )}
      </span>
      <span className="min-w-0">
        <span className={`block leading-tight ${chico ? 'font-semibold' : 'titulo text-2xl sm:text-3xl'} ${apagado ? 'text-gris' : 'text-tinta'}`}>{c.nombre}</span>
        <span className={`mt-0.5 block text-sm ${estado === 'listo' ? 'font-semibold text-turquesa' : estado === 'ya' ? 'text-azul' : 'text-gris'}`}>{etiqueta}</span>
      </span>
    </button>
  );
}

function Ficha({ c, nivel, edad }: { c: Curso; nivel: number | null; edad: number | null }) {
  const estado = estadoDe(c, nivel, edad);
  const faltan = nivel !== null ? trayecto(c, nivel) : [];
  const color = colorRamal[c.ramal];
  const ramal = c.ramal === 'principal' ? 'Línea principal' : `${ramales[c.ramal].nombre}: ${ramales[c.ramal].texto}`;
  const conViaje = c.consiste.some((x) => /viaje|mar\b|aguas abiertas|naufragios/i.test(x));
  const mensaje = [
    `Hola, me interesa el curso ${c.nombre}.`,
    nivel !== null ? `Mi nivel: ${nombreNivel(nivel)}.` : '',
    edad !== null ? `Tengo ${edad} años.` : '',
  ].filter(Boolean).join(' ');
  const aviso: Record<Estado, string> = {
    ya: c.otorga ? 'Con tu nivel, esta estación ya la pasaste.' : 'Es para quien todavía no se certifica: con tu nivel ya no la necesitas.',
    listo: c.bitacora ? `Con tu nivel y edad puedes tomarlo; también piden ${c.bitacora} buceos o más en tu bitácora.` : 'Con tu nivel y edad puedes tomarlo.',
    edad: `Piden ${c.edad} años cumplidos.`,
    nivel: edad !== null && edad < c.edad ? `Piden ${c.edad} años cumplidos y antes te faltan estas estaciones:` : 'Antes te faltan estas estaciones:',
    libre: 'Elige tu nivel arriba para ver si ya puedes tomarlo.',
  };
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5" aria-live="polite">
      <div className="h-2" style={{ background: color }} />
      <div className="p-6 sm:p-7">
        <p className="text-sm font-semibold" style={{ color }}>{ramal}</p>
        <h3 className="titulo mt-1 text-4xl">{c.nombre}</h3>
        <p className="mt-1 font-titulo text-xl font-semibold text-gris">{c.aventura}</p>
        <p className="mt-4">{c.objetivo}</p>

        <div className={`mt-5 rounded-xl p-4 ${estado === 'listo' ? 'bg-[#e3f3f1]' : 'bg-espuma'}`}>
          <p className="font-semibold">{aviso[estado]}</p>
          {estado === 'nivel' && faltan.length > 0 && (
            <ol className="mt-3 flex flex-wrap items-center gap-2 text-sm">
              {faltan.map((p, i) => (
                <li key={p.id} className="flex items-center gap-2">
                  {i > 0 && <Icono d={iFlecha} className="size-4 text-gris" />}
                  <span className="rounded-full bg-azul px-3 py-1 font-semibold text-white">{p.nombre}</span>
                </li>
              ))}
              {c.bitacora && <li className="text-gris">y {c.bitacora} buceos en bitácora</li>}
            </ol>
          )}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <h4 className="font-bold">Consiste en</h4>
            <ul className="mt-2 space-y-1.5 text-[0.95rem]">
              {c.consiste.map((x) => <li key={x} className="flex gap-2"><span className="mt-2 size-1.5 shrink-0 rounded-full" style={{ background: color }} />{x}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Requisitos</h4>
            <ul className="mt-2 space-y-1.5 text-[0.95rem]">
              {c.requisitos.map((x) => <li key={x} className="flex gap-2"><span className="mt-2 size-1.5 shrink-0 rounded-full" style={{ background: color }} />{x}</li>)}
            </ul>
          </div>
        </div>
        {conViaje && (
          <p className="mt-5 text-sm text-gris">
            Los buceos en aguas abiertas se hacen en sus <a href="#viajes" className="font-semibold text-azul underline underline-offset-2">viajes programados</a> o en uno privado.
          </p>
        )}
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={wa(mensaje)} className="boton bg-rojo text-white hover:bg-[#9e1317]">
            <Icono d={iWhats} />
            Preguntar por este curso
          </a>
          <a href={c.url} className="boton border-2 border-azul text-azul hover:bg-espuma">Ver su ficha</a>
        </div>
        <a href="#mapa" className="mt-5 inline-block font-semibold text-azul underline underline-offset-2 lg:hidden">Volver al mapa</a>
      </div>
    </article>
  );
}

function Ramales({ desde, nivel, edad, elegido, onElegir }: { desde: string; nivel: number | null; edad: number | null; elegido: string; onElegir: (id: string) => void }) {
  const lista = (Object.keys(ramales) as Exclude<Ramal, 'principal'>[]).filter((r) => ramales[r].desde === desde);
  return (
    <>
      {lista.map((r) => {
        const color = colorRamal[r];
        const suyos = cursos.filter((c) => c.ramal === r);
        return (
          <div key={r} className="relative mt-3 mb-2 pl-8">
            <span className="absolute -left-[39px] top-3 h-1 w-[62px] rounded" style={{ background: color }} aria-hidden="true" />
            <span className="absolute left-[21px] top-3 bottom-4 w-1 rounded" style={{ background: color }} aria-hidden="true" />
            <p className="-ml-4 inline-block rounded-full px-3 py-0.5 text-sm font-bold text-white" style={{ background: color }}>
              {ramales[r].nombre}: <span className="font-medium">{ramales[r].texto}</span>
            </p>
            <ul className="mt-2 grid gap-0.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {suyos.map((c) => (
                <li key={c.id} className="-ml-4.5">
                  <Punto c={c} chico estado={estadoDe(c, nivel, edad)} activo={elegido === c.id} onElegir={onElegir} />
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </>
  );
}

function LineaAzul() {
  const [nivel, setNivel] = useState<number | null>(null);
  const [edad, setEdad] = useState<number | null>(null);
  const [elegido, setElegido] = useState('owd');
  const fichaMovil = useRef<HTMLDivElement>(null);
  const curso = porId[elegido];

  const elegir = (id: string) => {
    setElegido(id);
    if (window.matchMedia('(max-width: 1023px)').matches) {
      requestAnimationFrame(() => fichaMovil.current?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' }));
    }
  };

  const puedes = nivel === null ? [] : cursos.filter((c) => estadoDe(c, nivel, edad) === 'listo');

  return (
    <section id="linea" className="bg-espuma py-16 sm:py-24">
      <div className="contenedor">
        <div className="max-w-3xl">
          <h2 className="titulo text-5xl sm:text-6xl">La Línea Azul</h2>
          <p className="mt-4 text-lg text-gris">
            Sus 20 cursos, como un mapa del metro: la línea principal va de aprender a nadar a Dive Master, y de cada estación salen las especialidades que ya puedes tomar. Dinos en qué estación vas y te marcamos a dónde puedes llegar.
          </p>
        </div>

        <form className="mt-8 grid gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 sm:grid-cols-[1fr_auto] sm:items-end" onSubmit={(e) => e.preventDefault()}>
          <label className="block">
            <span className="font-semibold">¿En qué estación vas?</span>
            <select
              className="mt-2 block min-h-12 w-full rounded-lg border-2 border-bruma bg-white px-3 text-base focus:border-azul"
              value={nivel ?? ''}
              onChange={(e) => setNivel(e.target.value === '' ? null : Number(e.target.value))}
            >
              <option value="">Elige tu nivel</option>
              {niveles.map((n) => <option key={n.id} value={n.id}>{n.texto}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="font-semibold">Edad</span>
            <input
              type="number"
              inputMode="numeric"
              min={4}
              max={90}
              placeholder="Años"
              className="mt-2 block min-h-12 w-full rounded-lg border-2 border-bruma px-3 text-base focus:border-azul sm:w-32"
              value={edad ?? ''}
              onChange={(e) => {
                const v = parseInt(e.target.value, 10);
                setEdad(Number.isNaN(v) ? null : Math.max(0, Math.min(99, v)));
              }}
            />
          </label>
          <p className="text-gris sm:col-span-2" aria-live="polite">
            {nivel === null
              ? 'Toca cualquier estación para ver en qué consiste y qué piden.'
              : puedes.length === 0
                ? 'Con esos datos todavía no hay una estación nueva: revisa la edad que pide cada una.'
                : `Puedes tomar ${puedes.length} ${puedes.length === 1 ? 'curso' : 'cursos'} ya: ${puedes.map((c) => c.nombre).join(', ')}.`}
          </p>
        </form>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
          <div id="mapa" className="relative scroll-mt-24">
            <span className="absolute left-[10px] top-4 bottom-12 w-2.5 rounded-full bg-azul" aria-hidden="true" />
            <ol>
              {principal.map((c, i) => (
                <li key={c.id} className="relative pb-5">
                  <div>
                    <Punto c={c} estado={estadoDe(c, nivel, edad)} activo={elegido === c.id} onElegir={elegir} />
                  </div>
                  <div className="pl-[3.4rem]">
                    <Ramales desde={c.id} nivel={nivel} edad={edad} elegido={elegido} onElegir={elegir} />
                  </div>
                  {i === principal.length - 1 && <p className="pl-[3.4rem] text-sm text-gris">Terminal: título PADI y/o SSI.</p>}
                </li>
              ))}
            </ol>
            <p className="mt-2 text-sm text-gris">
              El orden de la línea y los requisitos son los de sus fichas; las equivalencias (PADI, SSI, NAUI o CMAS) también.
            </p>
          </div>
          <div ref={fichaMovil} className="scroll-mt-24 lg:sticky lg:top-24 lg:self-start">
            <Ficha c={curso} nivel={nivel} edad={edad} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Albercas() {
  return (
    <section id="albercas" className="py-16 sm:py-24">
      <div className="contenedor grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="titulo text-5xl sm:text-6xl">Dos albercas, oriente y poniente</h2>
          <p className="mt-4 text-lg text-gris">Las clases de nado, snorkel y las prácticas de buceo son en alberca. Elige la que te quede más cerca; no es necesario saber nadar: ellos te enseñan.</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {albercas.map((a) => (
              <li key={a.nombre} className="rounded-2xl border-2 border-espuma p-5">
                <p className="text-sm font-semibold text-azul">{a.zona}</p>
                <h3 className="titulo mt-1 text-3xl">Deportivo {a.nombre}</h3>
                <p className="mt-2 text-gris">{a.texto}</p>
                <p className="mt-3 font-semibold">Nado y snorkeling desde {a.snorkelDesde} años</p>
                <a href={a.mapa} className="mt-3 inline-flex items-center gap-1.5 font-semibold text-azul underline underline-offset-2">
                  <Icono d={iMapa} className="size-4" />
                  Cómo llegar
                </a>
              </li>
            ))}
          </ul>
        </div>
        <figure>
          <img {...foto('f-snorkel')} alt="Alumnos de snorkel con visor y aletas, sentados a la orilla de un río, saludan a la cámara" className="w-full rounded-2xl object-cover" loading="lazy" />
          <figcaption className="mt-2 text-sm text-gris">Una salida de snorkel de Proyecto Azul.</figcaption>
        </figure>
      </div>
    </section>
  );
}

function Viajes() {
  return (
    <section id="viajes" className="bg-abismo py-16 text-white sm:py-24">
      <div className="contenedor">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <div>
            <h2 className="titulo text-5xl sm:text-6xl">Un viaje a bucear casi cada mes</h2>
            <p className="mt-4 text-lg text-white/85">Aquí se hacen los buceos de evaluación de los cursos y los de quien ya es buzo. Su calendario, de enero a diciembre:</p>
          </div>
          <figure className="relative overflow-hidden rounded-2xl">
            <img {...foto('f-playa')} alt="Playa de Cabo Pulmo con olas y un cerro al fondo" className="aspect-[16/7] w-full object-cover" loading="lazy" />
            <figcaption className="absolute bottom-0 left-0 bg-abismo/85 px-4 py-2 text-sm">Cabo Pulmo, noviembre de 2017</figcaption>
          </figure>
        </div>
        <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {viajes.map((v) => (
            <li key={v.url}>
              <a href={v.url} className="flex h-full gap-4 rounded-xl bg-white/[0.07] p-4 ring-1 ring-white/10 transition-colors hover:bg-white/[0.13]">
                <span className="titulo grid size-14 shrink-0 place-items-center rounded-full bg-rojo text-2xl">{v.mes}</span>
                <span>
                  <span className="block text-sm text-celeste">{v.fechas}</span>
                  <span className="block font-semibold">{v.lugar}</span>
                  <span className="block text-sm text-white/80">{v.titulo}</span>
                </span>
              </a>
            </li>
          ))}
          <li>
            <a href={vip.url} className="flex h-full flex-col justify-center rounded-xl border-2 border-dashed border-celeste/60 p-4 hover:bg-white/[0.07]">
              <span className="font-semibold">{vip.titulo}</span>
              <span className="text-sm text-white/80">{vip.texto}</span>
            </a>
          </li>
        </ol>
        <p className="mt-6 text-sm text-bruma">Fechas tal como las publica su página de viajes; pregunta costo y lugares por WhatsApp.</p>
      </div>
    </section>
  );
}

function Nosotros() {
  return (
    <section id="nosotros" className="py-16 sm:py-24">
      <div className="contenedor grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <img {...foto('f-costa')} alt="Costa de Cabo Pulmo: agua turquesa, una playa en curva y cerros con vegetación" className="w-full rounded-2xl object-cover" loading="lazy" />
        <div>
          <p className="font-titulo text-2xl font-semibold text-rojo">{negocio.lema}</p>
          <h2 className="titulo mt-2 text-5xl sm:text-6xl">Una escuela 100% mexicana</h2>
          <p className="mt-4 text-lg text-gris">{negocio.mision}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            <li className="rounded-xl bg-espuma p-4"><strong className="block">Escuela y tienda</strong>Cursos {negocio.agencias} y <a href={negocio.tienda} className="text-azul underline underline-offset-2">tienda de equipo</a> en la Escandón.</li>
            <li className="rounded-xl bg-espuma p-4"><strong className="block">Cuidan el mar</strong>Apoyan a {negocio.causas.join(' y ')}.</li>
            <li className="rounded-xl bg-espuma p-4"><strong className="block">Seguro de buceo</strong>Contrata el <a href={negocio.dan} className="text-azul underline underline-offset-2">seguro DAN</a> con ellos.</li>
            <li className="rounded-xl bg-espuma p-4"><strong className="block">Dudas frecuentes</strong>Revisa sus <a href={negocio.faq} className="text-azul underline underline-offset-2">preguntas frecuentes</a>.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="bg-espuma py-16 pb-28 sm:py-24 md:pb-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="titulo text-5xl sm:text-6xl">Visítanos en la tienda</h2>
          <address className="mt-5 text-lg not-italic">{negocio.direccion}</address>
          <a href={negocio.mapa} className="boton mt-5 bg-azul text-white hover:bg-abismo">
            <Icono d={iMapa} />
            Cómo llegar
          </a>
          <h3 className="mt-8 font-bold">Horario</h3>
          <dl className="mt-2 space-y-1">
            {negocio.horario.map(([d, h]) => (
              <div key={d} className="flex max-w-sm justify-between gap-4 border-b border-bruma/60 py-1.5">
                <dt>{d}</dt>
                <dd className="font-semibold">{h}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
          <h3 className="titulo text-3xl">Escríbenos o llámanos</h3>
          <ul className="mt-5 space-y-4">
            <li>
              <a href={wa('Hola, quiero información de sus cursos de buceo.')} className="flex items-center gap-3 font-semibold text-rojo">
                <Icono d={iWhats} /> WhatsApp {negocio.whatsapp.texto}
              </a>
            </li>
            {negocio.telefonos.map((t) => (
              <li key={t.tel}>
                <a href={`tel:${t.tel}`} className="flex items-center gap-3 font-semibold text-azul">
                  <Icono d={iTel} /> {t.texto}
                </a>
              </li>
            ))}
            <li><a href={`mailto:${negocio.correo}`} className="break-all font-semibold text-azul underline underline-offset-2">{negocio.correo}</a></li>
          </ul>
          <div className="mt-6 flex gap-4">
            <a href={negocio.facebook} className="font-semibold text-azul underline underline-offset-2">Facebook</a>
            <a href={negocio.instagram} className="font-semibold text-azul underline underline-offset-2">Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-abismo py-10 pb-28 text-bruma md:pb-10">
      <div className="contenedor flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <img {...foto('logo')} alt="Escuela de Buceo Proyecto Azul" className="h-12 w-auto self-start" loading="lazy" />
        <p className="text-sm">{negocio.razonSocial}, {negocio.calle}, Ciudad de México.</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/10 bg-abismo text-white md:hidden">
      <a href={wa('Hola, quiero información de sus cursos de buceo.')} className="flex min-h-15 flex-col items-center justify-center gap-0.5 bg-rojo text-sm font-semibold">
        <Icono d={iWhats} /> WhatsApp
      </a>
      <a href={`tel:${negocio.telefonos[0].tel}`} className="flex min-h-15 flex-col items-center justify-center gap-0.5 text-sm font-semibold">
        <Icono d={iTel} /> Llamar
      </a>
      <a href={negocio.mapa} className="flex min-h-15 flex-col items-center justify-center gap-0.5 text-sm font-semibold">
        <Icono d={iMapa} /> Cómo llegar
      </a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <Encabezado />
      <main>
        <Portada />
        <LineaAzul />
        <Albercas />
        <Viajes />
        <Nosotros />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
