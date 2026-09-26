import { useEffect, useState } from 'react';
import {
  catas, cataCiegas, cataEnLinea, etiqueta, giftCard, negocio, OPENTABLE, paquetes, platillos, politicas, portada, producto,
  saludo, tienda, vinohistorias, vinos, wa, winebar,
  type Foto, type PlatilloId, type Vino,
} from './data/content';

const externo = { target: '_blank', rel: 'noopener' } as const;
const pesos = (n: number) => `$${n.toLocaleString('es-MX', { maximumFractionDigits: 0 })}`;
const base = import.meta.env.BASE_URL;

const Icono = {
  wa: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3a.5.5 0 0 0 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4 5.2 5.2 0 0 0 3.2.7 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z" /></svg>
  ),
  mesa: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M4 10h16M9 3v4M15 3v4" /></svg>
  ),
  tel: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>
  ),
  mapa: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
  ),
  bolsa: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true"><path d="M5 8h14l-1 12H6L5 8Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></svg>
  ),
};

function Img({ foto, className = '', eager = false }: { foto: Foto; className?: string; eager?: boolean }) {
  return <img src={foto.src} alt={foto.alt} width={foto.w} height={foto.h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={`size-full object-cover ${className}`} />;
}

const subrayado = 'font-bold underline decoration-2 underline-offset-4';

// ---------- Encabezado y portada ----------

const nav = [
  { href: '#winebar', label: 'Winebar' },
  { href: '#catas', label: 'Catas' },
  { href: '#vinos', label: '¿Qué vas a servir?' },
  { href: '#regalos', label: 'Regalos' },
  { href: '#visitanos', label: 'Visítanos' },
];

function Encabezado() {
  const [abierto, setAbierto] = useState(false);
  return (
    <header className="oscuro sticky top-0 z-40 bg-noche text-papel">
      <p className="bg-oro px-4 py-1.5 text-center text-sm font-bold text-noche">{negocio.cinta}</p>
      <div className="contenedor flex h-[4.5rem] items-center justify-between gap-4 border-b border-papel/10">
        <a href="#inicio" className="flex shrink-0 items-center gap-3" aria-label="Invino Cava & Copeo, volver al inicio">
          <img src={negocio.logo.src} alt="" width={negocio.logo.w} height={negocio.logo.h} className="h-9 w-auto" />
          <span className="hidden text-sm leading-tight text-humo sm:block">Cava & Copeo<br />San Pedro Garza García</span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {nav.map((n) => <a key={n.href} href={n.href} className="font-semibold text-papel/90 hover:text-oro">{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={OPENTABLE} {...externo} className="btn-oro hidden sm:inline-flex">{Icono.mesa} Reservar mesa</a>
          <button type="button" onClick={() => setAbierto((v) => !v)} aria-expanded={abierto} aria-controls="menu-movil" aria-label="Abrir el menú"
            className="grid size-11 place-items-center rounded-full border border-papel/30 text-papel lg:hidden">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">{abierto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}</svg>
          </button>
        </div>
      </div>
      {abierto && (
        <nav id="menu-movil" className="border-b border-papel/15 lg:hidden" aria-label="Menú del celular">
          <div className="contenedor flex flex-col py-3">
            {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setAbierto(false)} className="titulo border-b border-papel/15 py-3 text-2xl text-papel">{n.label}</a>)}
          </div>
        </nav>
      )}
    </header>
  );
}

function Portada() {
  const d = negocio.direccion;
  return (
    <section id="inicio" className="oscuro bg-noche text-humo">
      <div className="contenedor grid items-center gap-10 pb-16 pt-8 md:grid-cols-12 md:pb-24 md:pt-14">
        <div className="min-w-0 md:col-span-5">
          <h1 className="text-[clamp(3rem,6.6vw,5.6rem)] text-papel">{portada.titulo}</h1>
          <p className="mt-6 max-w-md text-lg">{portada.texto} Más de 100 etiquetas por copa y por botella, catas y vino con envío a todo México.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={OPENTABLE} {...externo} className="btn-oro">{Icono.mesa} Reservar mesa</a>
            <a href={negocio.whatsapp} {...externo} className="btn-claro">{Icono.wa} Escríbenos</a>
          </div>
          <p className="mt-10 border-t border-papel/15 pt-5">
            <a href={negocio.mapa} {...externo} className="font-semibold text-papel hover:text-oro">{d.calle}, {d.colonia}, {d.cp} {d.ciudad}</a>
            <span className="block text-[0.95rem]">Centrito Valle. Vino y café durante todo el día.</span>
          </p>
        </div>
        <div className="min-w-0 md:col-span-7">
          <div className="aspect-[3/2] overflow-hidden rounded-[1.75rem]"><Img foto={portada.foto} eager className="object-[center_40%]" /></div>
        </div>
      </div>
    </section>
  );
}

// ---------- El winebar ----------

function Winebar() {
  const [buenaMesa, ...otras] = [winebar.citas[2], winebar.citas[0], winebar.citas[1]];
  return (
    <section id="winebar" className="py-16 md:py-28">
      <div className="contenedor grid gap-12 md:grid-cols-12">
        <div className="min-w-0 md:col-span-6">
          <h2 className="text-[clamp(2.6rem,5.4vw,4.4rem)] text-noche">{winebar.titulo}</h2>
          {winebar.textos.map((t) => <p key={t} className="mt-5 text-lg">{t}</p>)}
          <figure className="mt-10 border-l-4 border-oro pl-6">
            <blockquote className="titulo text-[clamp(1.6rem,2.8vw,2.2rem)] leading-tight text-noche">"{buenaMesa.texto}"</blockquote>
            <figcaption className="mt-3 text-[0.95rem]">{buenaMesa.autor}, <cite className="not-italic font-bold">{buenaMesa.medio}</cite></figcaption>
          </figure>
        </div>
        <div className="min-w-0 md:col-span-6">
          <a href={negocio.starWineList} {...externo} className="block aspect-[3/2] overflow-hidden rounded-[1.5rem]" aria-label="Ver a Invino en Star Wine List">
            <Img foto={winebar.starFoto} />
          </a>
          <h3 className="mt-6 text-[clamp(1.8rem,3vw,2.4rem)] text-noche">{winebar.starTitulo}</h3>
          <p className="mt-3">{winebar.starTexto}</p>
          <a href={negocio.starWineList} {...externo} className={`mt-3 inline-block text-oro-oscuro ${subrayado}`}>Ver a Invino en Star Wine List</a>
        </div>
      </div>

      <div className="contenedor mt-12 md:mt-16 grid gap-8 border-t border-noche/15 pt-10 md:grid-cols-2">
        {otras.map((c) => (
          <figure key={c.autor} className="min-w-0">
            <blockquote lang={c.idioma} className="text-lg italic text-noche">"{c.texto}"</blockquote>
            {c.traduccion && <p className="mt-2 text-[0.95rem]">En español: {c.traduccion}</p>}
            <figcaption className="mt-2 text-[0.95rem] font-bold">{c.autor}{c.medio && `, ${c.medio}`}</figcaption>
          </figure>
        ))}
      </div>

      <div className="contenedor mt-12 md:mt-16">
        <div className="oscuro flex flex-wrap items-center justify-between gap-6 rounded-[1.5rem] bg-noche px-6 py-8 text-humo sm:px-10">
          <div className="min-w-0 max-w-2xl">
            <p className="text-oro">{winebar.renta.antes}</p>
            <h3 className="mt-1 text-[clamp(1.9rem,3.4vw,2.8rem)] text-papel">{winebar.renta.titulo}</h3>
            <p className="mt-2">{winebar.renta.texto}</p>
          </div>
          <a href={wa(winebar.renta.mensaje)} {...externo} className="btn-oro">{Icono.wa} Preguntar por WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

// ---------- Catas ----------

function Catas() {
  const yaPaso = Date.now() > new Date(cataCiegas.fechaISO).getTime();
  return (
    <section id="catas" className="oscuro bg-vino py-20 text-[#e0c8c4] md:py-28">
      <div className="contenedor">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="min-w-0 md:col-span-7">
            <h2 className="text-[clamp(2.6rem,5.4vw,4.4rem)] text-papel">{catas.titulo}</h2>
            <p className="mt-3 text-xl text-oro">{catas.frase}</p>
            <p className="mt-4 max-w-2xl text-lg">{catas.texto}</p>
          </div>
          <div className="hidden min-w-0 md:col-span-5 md:block">
            <div className="aspect-[3/2] overflow-hidden rounded-[1.5rem]"><Img foto={catas.foto} /></div>
          </div>
        </div>

        {/* La próxima cata publicada */}
        <article className="mt-14 grid gap-8 rounded-[1.75rem] bg-noche p-5 sm:p-8 md:grid-cols-12 md:items-center">
          <div className="mx-auto aspect-[4/5] w-full max-w-[15rem] overflow-hidden rounded-[1.25rem] sm:max-w-sm md:col-span-5 md:max-w-none">
            <Img foto={cataCiegas.foto} />
          </div>
          <div className="min-w-0 md:col-span-7">
            <p className="font-bold text-oro">{yaPaso ? 'La última cata' : 'Próxima cata en el winebar'}</p>
            <h3 className="mt-1 text-[clamp(2.4rem,4.6vw,3.8rem)] text-papel">{cataCiegas.nombre}</h3>
            {cataCiegas.textos.map((t) => <p key={t} className="mt-3 text-lg text-humo">{t}</p>)}
            <dl className="mt-6 grid gap-x-8 gap-y-3 border-y border-papel/15 py-5 text-humo sm:grid-cols-2">
              <div><dt className="text-sm">Fecha</dt><dd className="font-bold text-papel">{cataCiegas.fechaTexto}</dd></div>
              <div><dt className="text-sm">Lugar</dt><dd className="font-bold text-papel">{cataCiegas.lugar}</dd></div>
              <div><dt className="text-sm">Incluye</dt><dd className="font-bold text-papel">{cataCiegas.incluye}</dd></div>
              <div><dt className="text-sm">Precio</dt><dd className="precio font-bold text-papel">{pesos(cataCiegas.precio)}</dd></div>
            </dl>
            {yaPaso ? (
              <>
                <p className="mt-5 text-humo">Esta cata ya pasó. Cada cata tiene un tema diferente: pregúntanos por la próxima.</p>
                <a href={wa(`${saludo} Quiero saber cuándo es su próxima cata.`)} {...externo} className="btn-oro mt-5">{Icono.wa} Preguntar por la próxima</a>
              </>
            ) : (
              <>
                <p className="mt-5 text-humo">{cataCiegas.cupo}.</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a href={producto(cataCiegas.handle)} {...externo} className="btn-oro">{Icono.bolsa} Comprar mi lugar</a>
                  <a href={wa(`${saludo} Quiero preguntar por la Cata a ciegas del ${cataCiegas.fechaTexto}.`)} {...externo} className="btn-claro">{Icono.wa} Preguntar</a>
                </div>
              </>
            )}
          </div>
        </article>

        {/* Cata en línea */}
        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12">
          <div className="min-w-0 md:col-span-5">
            <p className="font-bold text-oro">{cataEnLinea.nombre}</p>
            <h3 className="mt-1 text-[clamp(2.2rem,4vw,3.2rem)] text-papel">{cataEnLinea.titulo}</h3>
            <p className="mt-4 text-lg">{cataEnLinea.texto}</p>
            <p className="mt-4 hidden sm:block">{cataEnLinea.descripcion}</p>
            <p className="titulo precio mt-6 text-5xl text-papel">{pesos(cataEnLinea.precio)}</p>
            <a href={producto(cataEnLinea.handle)} {...externo} className="btn-oro mt-5">{Icono.bolsa} Comprar la cata en línea</a>
          </div>
          <div className="min-w-0 md:col-span-7">
            <ol className="space-y-6">
              {cataEnLinea.pasos.map((p, i) => (
                <li key={p.titulo} className="grid grid-cols-[3rem_1fr] gap-4">
                  <span className="titulo grid size-12 place-items-center rounded-full border-2 border-oro text-2xl text-oro" aria-hidden="true">{i + 1}</span>
                  <div className="min-w-0">
                    <h4 className="text-2xl text-papel">{p.titulo}</h4>
                    <p className="mt-1">{p.texto}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 rounded-[1.25rem] border border-papel/20 p-5">
              <p className="font-bold text-papel">Incluye</p>
              <ul className="mt-2 grid gap-x-6 gap-y-1 sm:grid-cols-2">
                {cataEnLinea.incluye.map((i) => <li key={i} className="flex gap-2"><span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-oro" aria-hidden="true" />{i}</li>)}
              </ul>
              <details className="group mt-4 border-t border-papel/15 pt-4 text-[0.95rem]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-papel">Antes de comprar<span className="text-2xl text-oro transition-transform group-open:rotate-45" aria-hidden="true">+</span></summary>
                <ul className="mt-2 space-y-2">{cataEnLinea.notas.map((n) => <li key={n}>{n}</li>)}</ul>
              </details>
            </div>
          </div>
        </div>

        {/* Cata privada y dudas */}
        <div className="mt-12 grid gap-10 border-t border-papel/15 pt-10 md:mt-16 md:pt-12 md:grid-cols-12">
          <div className="min-w-0 md:col-span-5">
            <h3 className="text-[clamp(1.9rem,3.2vw,2.6rem)] text-papel">{catas.privada.pregunta}</h3>
            <p className="mt-3">{catas.privada.respuesta}</p>
            <a href={wa(catas.privada.mensaje)} {...externo} className="btn-oro mt-5">{Icono.wa} Organizar una cata privada</a>
            <p className="mt-6 text-[0.95rem]">{catas.certificado}</p>
          </div>
          <div className="min-w-0 md:col-span-7">
            {catas.preguntas.map((q) => (
              <details key={q.p} className="group border-b border-papel/15 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-papel">
                  {q.p}
                  <span className="text-2xl text-oro transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-2">{q.r}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- ¿Qué vas a servir? (elemento memorable) ----------

/** La copa dibujada: se llena con el color de la nota "Vista" del vino elegido. */
function Copa({ vino }: { vino: Vino | undefined }) {
  // Al cambiar de vino, la copa se vacía y se vuelve a servir (sin animación con prefers-reduced-motion).
  const [servido, setServido] = useState(false);
  useEffect(() => {
    setServido(false);
    let b = 0;
    const a = requestAnimationFrame(() => { b = requestAnimationFrame(() => setServido(true)); });
    return () => { cancelAnimationFrame(a); cancelAnimationFrame(b); };
  }, [vino?.handle]);
  const lleno = Boolean(vino) && servido;
  return (
    <svg viewBox="0 0 200 320" className="h-auto w-full max-w-[15rem]" role="img" aria-label={vino ? `Copa servida con ${vino.nombre}: ${vino.vista.toLowerCase()}` : 'Copa vacía'}>
      <defs>
        <clipPath id="copa-interior"><path d="M52 24 C46 92 50 140 72 166 C84 180 92 186 100 186 C108 186 116 180 128 166 C150 140 154 92 148 24 Z" /></clipPath>
      </defs>
      <g clipPath="url(#copa-interior)">
        <g className="vino-nivel" style={{ transform: `translateY(${lleno ? 0 : 110}px)` }}>
          <rect x="30" y="98" width="140" height="100" fill={vino?.color ?? 'transparent'} />
          <ellipse cx="100" cy="98" rx="49" ry="6" fill={vino?.color ?? 'transparent'} style={{ filter: 'brightness(1.25)' }} />
          {vino?.burbujas && [62, 84, 100, 116, 134].map((x, i) => (
            <circle key={x} cx={x} cy={180} r={i % 2 ? 1.8 : 2.4} fill="#fffbe8" className="burbuja" style={{ animationDelay: `${i * 0.6}s` }} />
          ))}
        </g>
      </g>
      <path d="M52 24 C46 92 50 140 72 166 C84 180 92 186 100 186 C108 186 116 180 128 166 C150 140 154 92 148 24" fill="none" stroke="#f0eeea" strokeWidth="3" strokeLinecap="round" />
      <path d="M64 44 C60 90 62 124 76 148" fill="none" stroke="#f0eeea" strokeOpacity="0.35" strokeWidth="4" strokeLinecap="round" />
      <path d="M100 186 V286" stroke="#f0eeea" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="100" cy="292" rx="48" ry="8" fill="none" stroke="#f0eeea" strokeWidth="3" />
    </svg>
  );
}

function Dato({ t, v }: { t: string; v?: string }) {
  if (!v) return null;
  return <div className="min-w-0"><dt className="text-sm text-humo">{t}</dt><dd className="text-papel">{v}</dd></div>;
}

function QueVasAServir() {
  const [pid, setPid] = useState<PlatilloId>('mar');
  const lista = vinos.filter((v) => v.platillos.includes(pid)).sort((a, b) => Number(b.disponible) - Number(a.disponible));
  const [handle, setHandle] = useState<string>(lista[0].handle);
  const vino = lista.find((v) => v.handle === handle) ?? lista[0];
  const pl = platillos.find((p) => p.id === pid)!;

  const elegirPlatillo = (id: PlatilloId) => {
    setPid(id);
    const nueva = vinos.filter((v) => v.platillos.includes(id)).sort((a, b) => Number(b.disponible) - Number(a.disponible));
    setHandle(nueva[0].handle);
  };

  const frase = pid === 'solo' ? 'Busco un vino para tomar solo.' : `Voy a servir ${pl.corto}.`;
  const mensaje = vino.disponible
    ? `${saludo} ${frase} Me interesa el ${vino.nombre} (${vino.tamano}, ${pesos(vino.precio)}). ¿Me ayudan con mi compra?`
    : `${saludo} ${frase} Me interesa el ${vino.nombre}. ¿Lo tienen o me recomiendan uno parecido?`;

  const chip = (activo: boolean) =>
    `rounded-full border px-3.5 py-1.5 text-[0.9rem] font-bold sm:px-4 sm:py-2 sm:text-[0.95rem] transition-colors ${activo ? 'border-oro bg-oro text-noche' : 'border-papel/25 text-papel hover:border-papel'}`;

  return (
    <section id="vinos" className="oscuro bg-noche py-20 text-humo md:py-28">
      <div className="contenedor">
        <div className="max-w-3xl">
          <h2 className="text-[clamp(2.8rem,6vw,5rem)] text-papel">¿Qué vas a servir?</h2>
          <p className="mt-4 text-lg">Dinos qué hay en la mesa y te enseñamos los vinos de nuestra tienda que lo acompañan, según su ficha de cata.</p>
        </div>

        <fieldset className="mt-10">
          <legend className="sr-only">¿Qué vas a servir?</legend>
          <div className="flex flex-wrap gap-2">
            {platillos.map((p) => (
              <button key={p.id} type="button" aria-pressed={p.id === pid} onClick={() => elegirPlatillo(p.id)} className={chip(p.id === pid)}>{p.nombre}</button>
            ))}
          </div>
        </fieldset>

        {/* La fila de botellas */}
        <div className="mt-10 border-b border-papel/15 pb-2">
          <p className="text-[0.95rem]">{lista.length === 1 ? 'Un vino de la tienda lo acompaña:' : `${lista.length} vinos de la tienda lo acompañan:`}</p>
          <ul className="mt-4 flex gap-3 overflow-x-auto pb-4" aria-label={`Vinos para ${pl.corto}`}>
            {lista.map((v) => (
              <li key={v.handle} className="shrink-0">
                <button type="button" onClick={() => setHandle(v.handle)} aria-pressed={v.handle === vino.handle}
                  className={`flex w-32 flex-col items-center rounded-2xl border px-2 pb-3 pt-4 text-center transition-colors ${v.handle === vino.handle ? 'border-oro bg-papel/10' : 'border-transparent hover:border-papel/25'}`}>
                  <img src={`${base}${v.foto}.webp`} alt="" width={v.w} height={v.h} loading="lazy" className="h-40 w-auto" />
                  <span className="mt-3 text-[0.85rem] font-bold leading-tight text-papel">{v.nombre}</span>
                  <span className={`mt-1 text-[0.8rem] ${v.disponible ? 'text-oro' : 'text-humo'}`}>{v.disponible ? 'Disponible en línea' : 'Agotado en línea'}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* La copa y la ficha */}
        <div className="mt-10 grid gap-10 md:grid-cols-12" aria-live="polite">
          <div className="flex min-w-0 flex-col items-center md:col-span-4">
            <Copa vino={vino} />
            <p className="mt-4 max-w-[16rem] text-center text-[0.9rem]">A la vista: {vino.vista.toLowerCase()}</p>
          </div>
          <div className="min-w-0 md:col-span-8">
            <p className="text-[0.95rem]">{vino.tipo}, {vino.bodega}</p>
            <h3 className="mt-1 text-[clamp(2rem,4vw,3.2rem)] text-papel">{vino.nombre}</h3>
            <p className="mt-4 rounded-xl border-l-4 border-oro bg-papel/5 px-4 py-3 text-papel">
              <span className="font-bold text-oro">Maridaje: </span>{vino.maridaje}
            </p>
            <dl className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              <Dato t="Uva" v={vino.uva} />
              <Dato t="Región" v={vino.region} />
              <Dato t="Crianza" v={vino.crianza} />
              <Dato t="Nariz" v={vino.nariz} />
              <Dato t="Boca" v={vino.boca} />
            </dl>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-papel/15 pt-6">
              <p>
                <span className="titulo precio text-4xl text-papel">{pesos(vino.precio)}</span>
                <span className="ml-2 text-[0.95rem]">{vino.tamano}</span>
              </p>
              {vino.disponible ? (
                <a href={producto(vino.handle)} {...externo} className="btn-oro">{Icono.bolsa} Comprar en la tienda</a>
              ) : (
                <p className="rounded-full border border-papel/30 px-4 py-2 text-[0.95rem] text-papel">Agotado en la tienda en línea</p>
              )}
              <a href={wa(mensaje)} {...externo} className="btn-claro">{Icono.wa} {vino.disponible ? 'Pedir por WhatsApp' : 'Preguntar por WhatsApp'}</a>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 border-t border-papel/15 pt-8 text-[0.95rem] md:grid-cols-3">
          <p><span className="font-bold text-papel">Envío gratis. </span>{tienda.envio}</p>
          <p><span className="font-bold text-papel">Atención personalizada. </span>{tienda.asesoria}</p>
          <p><span className="font-bold text-papel">Pagos seguros. </span>{tienda.pagos}</p>
        </div>
        <p className="mt-6 text-[0.9rem]">
          El color de la copa es una interpretación de la nota de vista de cada ficha. Precios y existencias de la tienda en línea al 26 de septiembre de 2026; en el winebar hay más de 100 etiquetas.{' '}
          <a href={`${negocio.whatsapp}`} {...externo} className={`text-oro ${subrayado}`}>Pregúntanos</a>.
        </p>
      </div>
    </section>
  );
}

// ---------- Regalos ----------

function Regalos() {
  return (
    <section id="regalos" className="py-16 md:py-28">
      <div className="contenedor">
        <h2 className="text-[clamp(2.6rem,5.4vw,4.4rem)] text-noche">Regala vino</h2>

        <div className="mt-10 grid gap-10 md:grid-cols-12 md:items-center">
          <div className="mx-auto aspect-[2/3] w-full max-w-[13rem] overflow-hidden rounded-[1.5rem] sm:max-w-xs md:col-span-4 md:max-w-none"><Img foto={etiqueta.foto} /></div>
          <div className="min-w-0 md:col-span-8">
            <h3 className="text-[clamp(2rem,3.6vw,3rem)] text-noche">Una botella con su nombre</h3>
            <p className="mt-3 text-lg">{etiqueta.texto}</p>
            <p className="mt-5 font-bold text-noche">Elige la celebración y el diseño de la etiqueta:</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {etiqueta.celebraciones.map((c) => (
                <li key={c.nombre} className="rounded-full bg-white px-3.5 py-1 text-[0.9rem] sm:px-4 sm:py-1.5 sm:text-[0.95rem]"><span className="font-bold text-noche">{c.nombre}</span>, {c.disenos} diseños</li>
              ))}
            </ul>
            <p className="mt-4">Las letras van en acabado metálico (foil) dorado o plateado. {etiqueta.nota}</p>
            <div className="mt-6 flex flex-wrap items-center gap-5">
              <p><span className="titulo precio text-4xl text-noche">{pesos(etiqueta.precio)}</span> <span className="text-[0.95rem]">por etiqueta, sin el vino</span></p>
              <a href={producto(etiqueta.handle)} {...externo} className="btn">{Icono.bolsa} Personalizar en la tienda</a>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-12">
          <div className="min-w-0 md:col-span-8">
            <h3 className="text-[clamp(2rem,3.6vw,3rem)] text-noche">{paquetes.titulo}</h3>
            <ul className="mt-6 divide-y divide-noche/10 border-t-2 border-noche">
              {paquetes.lista.map((p) => (
                <li key={p.nombre} className="py-4">
                  <p className="flex items-baseline gap-2">
                    <a href={producto(p.handle)} {...externo} className="titulo text-2xl text-noche hover:text-oro-oscuro">{p.nombre}</a>
                    <span className="puntos" aria-hidden="true" />
                    <span className="precio shrink-0 font-bold text-oro-oscuro">{pesos(p.precio)}</span>
                  </p>
                  <p className="mt-1 text-[0.95rem] leading-snug">{p.incluye.join(', ')}.</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[0.95rem]">{paquetes.nota}</p>
          </div>
          <div className="hidden min-w-0 md:col-span-4 md:block">
            <div className="aspect-[2/3] overflow-hidden rounded-[1.5rem]"><Img foto={paquetes.foto} /></div>
          </div>
        </div>

        <div className="mt-14 md:mt-20 rounded-[1.5rem] bg-white p-6 sm:p-10">
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="min-w-0 md:col-span-7">
              <h3 className="text-[clamp(2rem,3.6vw,3rem)] text-noche">Gift Card</h3>
              <p className="mt-3">{giftCard.texto}</p>
              <p className="mt-2">
                {giftCard.otraCantidad}{' '}
                <a href={wa(`${saludo} Quiero una Gift Card por otra cantidad.`)} {...externo} className={`text-oro-oscuro ${subrayado}`}>WhatsApp</a>
              </p>
            </div>
            <div className="min-w-0 md:col-span-5">
              <ul className="flex flex-wrap gap-2" aria-label="Valores de la Gift Card">
                {giftCard.valores.map((v) => <li key={v} className="precio titulo rounded-xl border-2 border-noche px-4 py-2 text-2xl text-noche">{pesos(v)}</li>)}
              </ul>
              <a href={producto(giftCard.handle)} {...externo} className="btn mt-5">{Icono.bolsa} Comprar una Gift Card</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Vinohistorias ----------

function Vinohistorias() {
  return (
    <section className="border-t border-noche/10 bg-white py-16 md:py-28">
      <div className="contenedor grid gap-12 md:grid-cols-12">
        <div className="min-w-0 md:col-span-6">
          <h2 className="text-[clamp(2.4rem,5vw,4rem)] text-noche">{vinohistorias.titulo}</h2>
          <p className="mt-5 text-lg">{vinohistorias.origen}</p>
          {vinohistorias.david.map((t) => <p key={t} className="mt-4">{t}</p>)}
          <p className="mt-4">
            Síguelo en Instagram: <a href={vinohistorias.instagram} {...externo} className={`text-oro-oscuro ${subrayado}`}>@vinohistorias</a>
          </p>
        </div>
        <div className="min-w-0 md:col-span-6">
          <h3 className="text-[clamp(1.8rem,3vw,2.4rem)] text-noche">Para restaurantes, hoteles y marcas</h3>
          <p className="mt-3">{vinohistorias.somos}</p>
          <dl className="mt-6 divide-y divide-noche/10 border-y border-noche/15">
            {vinohistorias.servicios.map((s) => (
              <div key={s.titulo} className="py-4">
                <dt className="titulo text-xl text-noche">{s.titulo}</dt>
                <dd className="mt-1 text-[0.97rem]">{s.texto}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-[0.97rem]">{vinohistorias.trayectoria}</p>
          <a href={wa(vinohistorias.mensaje)} {...externo} className="btn mt-6">{Icono.wa} Pedir información para mi negocio</a>
        </div>
      </div>
    </section>
  );
}

// ---------- Visítanos, pie y barra del celular ----------

function Visitanos() {
  const d = negocio.direccion;
  const enlace = `font-semibold text-papel underline decoration-oro decoration-2 underline-offset-4`;
  return (
    <section id="visitanos" className="oscuro bg-noche py-20 text-humo md:py-28">
      <div className="contenedor grid gap-12 md:grid-cols-12">
        <div className="min-w-0 md:col-span-5">
          <h2 className="text-[clamp(2.4rem,5vw,4rem)] text-papel">Visítanos en Centrito Valle</h2>
          <dl className="mt-8 space-y-5 text-lg">
            <div><dt className="text-sm">Dirección</dt><dd className="font-semibold text-papel">{d.calle}, {d.colonia}, {d.cp} {d.ciudad}</dd></div>
            <div><dt className="text-sm">Horario</dt><dd className="font-semibold text-papel">Vino y café durante todo el día. Consulta el horario por WhatsApp.</dd></div>
            <div><dt className="text-sm">WhatsApp y teléfono</dt><dd><a href={negocio.whatsapp} {...externo} className={enlace}>{negocio.telefono}</a></dd></div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={OPENTABLE} {...externo} className="btn-oro">{Icono.mesa} Reservar en OpenTable</a>
            <a href={negocio.mapa} {...externo} className="btn-claro">{Icono.mapa} Cómo llegar</a>
          </div>
          <p className="mt-8">
            Síguenos en <a href={negocio.instagram} {...externo} className={enlace}>Instagram</a> y <a href={negocio.facebook} {...externo} className={enlace}>Facebook</a>.
          </p>
        </div>
        <a href={negocio.mapa} {...externo} className="group relative block min-w-0 overflow-hidden rounded-[1.75rem] md:col-span-7" aria-label="Abrir Invino Cava & Copeo en Google Maps">
          <div className="aspect-[2/1] md:aspect-auto md:h-full"><Img foto={winebar.foto} className="transition-transform duration-500 group-hover:scale-[1.03]" /></div>
          <span className="absolute bottom-4 left-4 rounded-full bg-oro px-4 py-2 text-sm font-bold text-noche">Ver en Google Maps</span>
        </a>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro border-t border-papel/10 bg-noche pb-28 pt-12 text-humo md:pb-12">
      <div className="contenedor flex flex-wrap items-start justify-between gap-8">
        <div>
          <img src={negocio.logo.src} alt={negocio.logo.alt} width={negocio.logo.w} height={negocio.logo.h} loading="lazy" className="h-12 w-auto" />
          <p className="mt-4 text-sm">© {new Date().getFullYear()} Invino Cava & Copeo. San Pedro Garza García, Nuevo León.</p>
          <p className="mt-1 text-sm">Venta de bebidas alcohólicas solo a mayores de 18 años. Evita el exceso.</p>
        </div>
        <ul className="grid gap-1 text-sm">
          {politicas.map((p) => <li key={p.href}><a href={p.href} {...externo} className="underline underline-offset-4 hover:text-oro">{p.texto}</a></li>)}
        </ul>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-papel/15 bg-noche/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-[1.7fr_1fr_1fr_1fr] gap-2">
        <a href={OPENTABLE} {...externo} className="btn-oro px-3">{Icono.mesa} Reservar</a>
        <a href={negocio.whatsapp} {...externo} className="btn-claro px-0" aria-label="Escribir a Invino por WhatsApp">{Icono.wa}</a>
        <a href={negocio.tel} className="btn-claro px-0" aria-label="Llamar a Invino">{Icono.tel}</a>
        <a href={negocio.mapa} {...externo} className="btn-claro px-0" aria-label="Cómo llegar a Invino en Google Maps">{Icono.mapa}</a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <a href="#vinos" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2">Ir a los vinos</a>
      <Encabezado />
      <main>
        <Portada />
        <Winebar />
        <Catas />
        <QueVasAServir />
        <Regalos />
        <Vinohistorias />
        <Visitanos />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
