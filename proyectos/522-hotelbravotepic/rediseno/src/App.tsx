import { useRef, useState } from 'react';
import {
  habitaciones, hotel, incluyenTodas, promociones, saludo, servicios, tepic, wa, type Cama, type Foto, type Habitacion,
} from './data/content';

const externo = { target: '_blank', rel: 'noopener' } as const;

const Icono = {
  wa: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3a.5.5 0 0 0 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4 5.2 5.2 0 0 0 3.2.7 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z" /></svg>
  ),
  tel: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" strokeLinejoin="round" /></svg>
  ),
  mapa: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
  ),
  correo: (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
  ),
};

function Img({ foto, className = '', eager = false }: { foto: Foto; className?: string; eager?: boolean }) {
  return <img src={foto.src} alt={foto.alt} width={foto.w} height={foto.h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={`size-full object-cover ${className}`} />;
}

const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;
const climaTexto = (c: Habitacion['clima']) => (c === 'aire' ? 'aire acondicionado' : 'ventilador');
const desde = Math.min(...habitaciones.map((h) => h.desde));
const telPrincipal = hotel.telefonos[0];

// ---------- Secciones ----------

function Encabezado() {
  const [abierto, setAbierto] = useState(false);
  const nav = [
    { href: '#dormir', label: 'Habitaciones' },
    { href: '#promociones', label: 'Promociones' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#tepic', label: 'Tepic' },
    { href: '#contacto', label: 'Contacto' },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-crema/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4 md:h-20">
        <a href="#inicio" className="shrink-0" aria-label="Hotel Bravo Tepic, ir al inicio">
          <img src={hotel.logo.src} alt={hotel.logo.alt} width={hotel.logo.w} height={hotel.logo.h} className="h-10 w-auto md:h-12" />
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {nav.map((n) => <a key={n.href} href={n.href} className="font-medium text-tinta/80 hover:text-vino">{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={telPrincipal.href} className="btn hidden sm:inline-flex">{Icono.tel} {telPrincipal.visible}</a>
          <button type="button" onClick={() => setAbierto((v) => !v)} aria-expanded={abierto} aria-controls="menu-movil" aria-label="Abrir navegación"
            className="grid size-11 place-items-center rounded-full border border-tinta/20 text-tinta lg:hidden">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">{abierto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}</svg>
          </button>
        </div>
      </div>
      {abierto && (
        <nav id="menu-movil" className="border-t border-tinta/10 bg-crema lg:hidden" aria-label="Móvil">
          <div className="contenedor flex flex-col py-3">
            {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setAbierto(false)} className="border-b border-tinta/10 py-3 text-xl font-semibold text-tinta">{n.label}</a>)}
          </div>
        </nav>
      )}
    </header>
  );
}

function Portada() {
  const datos = [
    ['Por noche, desde', `${pesos(desde)} MXN`],
    ['Central camionera', 'A 15 minutos'],
    ['Playa, en San Blas', 'A 30 minutos'],
    ['Todo el hotel', 'Libre de humo'],
  ];
  return (
    <section id="inicio" className="contenedor grid gap-10 pb-16 pt-10 md:grid-cols-12 md:items-center md:gap-12 md:pb-20 md:pt-14">
      <div className="min-w-0 md:col-span-6">
        <p className="text-lg font-semibold text-vino">Calle Bravo #186 Pte., Centro de Tepic</p>
        <h1 className="mt-3 text-[clamp(2.9rem,7vw,5.4rem)]">Hotel Bravo <span className="text-vino">Tepic</span></h1>
        <p className="mt-5 max-w-xl text-xl text-tinta">{hotel.lema}.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={hotel.whatsapp} {...externo} className="btn">{Icono.wa} Escríbenos por WhatsApp</a>
          <a href={telPrincipal.href} className="btn-linea">{Icono.tel} Llamar para reservar</a>
        </div>
        <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-4 border-t border-tinta/15 pt-6 sm:grid-cols-4">
          {datos.map(([t, d]) => (
            <div key={t} className="min-w-0">
              <dt className="text-sm">{t}</dt>
              <dd className="font-semibold text-tinta">{d}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="min-w-0 md:col-span-6">
        <div className="aspect-[16/10] overflow-hidden rounded-[1.75rem]">
          <Img foto={hotel.lobby} eager />
        </div>
      </div>
    </section>
  );
}

// ---------- Elemento memorable: ¿Cómo quieres dormir? ----------

const S = 40; // px por metro en el dibujo
/** Medidas estándar de colchón en metros (ancho, largo). El dibujo es ilustrativo: el hotel no publica planos. */
const medidaCama: Record<Cama, [number, number]> = { individual: [0.99, 1.9], matrimonial: [1.37, 1.9], king: [1.93, 2.03] };

function CamaDibujo({ x, y, tipo, abajo, patron }: { x: number; y: number; tipo: Cama; abajo?: boolean; patron: string }) {
  const [a, l] = medidaCama[tipo];
  const w = a * S, h = l * S;
  const almohadas = tipo === 'individual' ? 1 : 2;
  const aw = (w - 6 - (almohadas - 1) * 3) / almohadas;
  const ay = abajo ? y + h - 11 : y + 3;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="3" fill={`url(#${patron})`} stroke="#231a1e" strokeWidth="1.4" />
      <line x1={x - 1} x2={x + w + 1} y1={abajo ? y + h + 1 : y - 1} y2={abajo ? y + h + 1 : y - 1} stroke="#64133a" strokeWidth="3" strokeLinecap="round" />
      {Array.from({ length: almohadas }, (_, k) => (
        <rect key={k} x={x + 3 + k * (aw + 3)} y={ay} width={aw} height="8" rx="3" fill="#fff" stroke="#231a1e" strokeWidth="0.8" />
      ))}
    </g>
  );
}

function Plano({ h }: { h: Habitacion }) {
  const { tipo, n } = h.camas;
  const w = medidaCama[tipo][0] * S, largo = medidaCama[tipo][1] * S;
  const patron = `cuadros-${h.id}`;
  const camas: { x: number; y: number; abajo?: boolean }[] = [];
  if (n === 6) {
    const gap = 10, fila = 3 * w + 2 * gap, x0 = (220 - fila) / 2;
    for (let k = 0; k < 3; k++) camas.push({ x: x0 + k * (w + gap), y: 10 });
    for (let k = 0; k < 3; k++) camas.push({ x: x0 + k * (w + gap), y: 171 - largo, abajo: true });
  } else {
    const gap = 22, fila = n * w + (n - 1) * gap, x0 = (220 - fila) / 2;
    for (let k = 0; k < n; k++) camas.push({ x: x0 + k * (w + gap), y: 10 });
  }
  return (
    <svg viewBox="0 0 220 180" className="h-auto w-full" aria-hidden="true">
      <defs>
        <pattern id={patron} width="10" height="10" patternUnits="userSpaceOnUse">
          <rect width="10" height="10" fill="#2e3a8c" />
          <rect width="5" height="5" fill="#e3d1a0" />
          <rect x="5" y="5" width="5" height="5" fill="#e3d1a0" />
        </pattern>
      </defs>
      {/* muros, con la ventana a la izquierda y la puerta a la derecha */}
      <rect x="6" y="6" width="208" height="168" fill="#fffdf7" />
      <path d="M6 6H214V116M214 154V174H6V6" fill="none" stroke="#231a1e" strokeWidth="3" strokeLinejoin="round" />
      <path d="M6 40V96" stroke="#fffdf7" strokeWidth="4" />
      <path d="M4 40V96M8 40V96" stroke="#2e3a8c" strokeWidth="1.4" />
      <path d="M214 116L184 124" fill="none" stroke="#231a1e" strokeWidth="1.6" />
      <path d="M184 124A31 31 0 0 1 214 154" fill="none" stroke="#231a1e" strokeWidth="0.8" strokeDasharray="3 3" />
      {camas.map((c, k) => <CamaDibujo key={k} {...c} tipo={tipo} patron={patron} />)}
      {h.clima === 'ventilador' ? (
        <g transform="translate(24 156)" fill="none" stroke="#64133a" strokeWidth="1.6">
          <circle r="11" />
          <path d="M0 0C-2-5 1-9 4-8S3-2 0 0ZM0 0C5-1 9 2 8 5S2 3 0 0ZM0 0C-3 4-8 4-8 1S-3-1 0 0Z" fill="#64133a" stroke="none" />
        </g>
      ) : (
        <g transform="translate(12 148)" fill="none" stroke="#64133a" strokeWidth="1.6">
          <rect width="26" height="10" rx="2" />
          <path d="M4 6H22" />
          <path d="M5 15q2 2 0 4M13 15q2 2 0 4M21 15q2 2 0 4" strokeLinecap="round" />
        </g>
      )}
    </svg>
  );
}

type Filtro = 'todas' | 'aire' | 'ventilador';

function Dormir() {
  const [filtro, setFiltro] = useState<Filtro>('todas');
  const [elegida, setElegida] = useState('king');
  const ficha = useRef<HTMLDivElement>(null);
  const elegir = (id: string) => {
    setElegida(id);
    if (window.matchMedia('(max-width: 1023px)').matches) {
      const quieto = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      requestAnimationFrame(() => ficha.current?.scrollIntoView({ behavior: quieto ? 'auto' : 'smooth', block: 'start' }));
    }
  };
  const visibles = habitaciones.filter((h) => filtro === 'todas' || h.clima === filtro);
  const actual = visibles.find((h) => h.id === elegida) ?? visibles[0];
  const filtros: [Filtro, string][] = [['todas', 'Todas'], ['aire', 'Con aire acondicionado'], ['ventilador', 'Con ventilador']];
  const mensaje = `${saludo} Me interesa la ${actual.nombre} (${actual.camasTexto}, ${climaTexto(actual.clima)}). ¿Me pueden dar disponibilidad y tarifa?`;

  return (
    <section id="dormir" className="border-y border-tinta/10 bg-white py-20 md:py-24">
      <div className="contenedor">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2 className="text-[clamp(2.3rem,4.8vw,3.8rem)] md:col-span-6">¿Cómo quieres dormir?</h2>
          <p className="text-lg md:col-span-6">Las cuatro habitaciones se distinguen por sus camas y por su clima. Elige la tuya y pide disponibilidad con un mensaje o una llamada: {' '}
            <span className="text-tinta">comodidad y confort tanto para estancias de negocios, familiares y de placer.</span></p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filtrar por clima">
          {filtros.map(([id, label]) => (
            <button key={id} type="button" onClick={() => setFiltro(id)} aria-pressed={filtro === id}
              className={`min-h-11 rounded-full border px-5 py-2 font-medium transition-colors ${filtro === id ? 'border-colcha bg-colcha text-white' : 'border-tinta/20 text-tinta hover:border-tinta'}`}>{label}</button>
          ))}
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-12">
          <ul className="grid min-w-0 grid-cols-2 content-start gap-3 sm:gap-4 lg:col-span-7">
            {visibles.map((h) => {
              const activo = h.id === actual.id;
              return (
                <li key={h.id} className="min-w-0">
                  <button type="button" onClick={() => elegir(h.id)} aria-pressed={activo}
                    className={`block h-full w-full rounded-2xl border-2 p-2.5 text-left sm:p-4 transition-colors ${activo ? 'border-vino bg-arena/60' : 'border-tinta/10 bg-crema hover:border-tinta/30'}`}>
                    <Plano h={h} />
                    <span className="mt-2 block font-bold text-tinta sm:mt-3 sm:text-lg">{h.nombre.replace('Habitación ', '')}</span>
                    <span className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <span className="text-sm text-tinta/80 sm:text-[0.95rem]">{h.camasTexto}, {climaTexto(h.clima)}</span>
                      <span className="precio font-semibold text-vino">desde {pesos(h.desde)}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div ref={ficha} className="min-w-0 scroll-mt-20 lg:col-span-5">
            <article key={actual.id} className="aparece overflow-hidden rounded-3xl bg-vino text-white lg:sticky lg:top-24" aria-live="polite">
              {actual.foto ? (
                <div className="aspect-[16/10] overflow-hidden"><Img foto={actual.foto} /></div>
              ) : (
                <div className="grid aspect-[16/10] place-items-center bg-vino-2 px-8 text-center">
                  <p className="text-white/90">El sitio del hotel todavía no tiene una foto propia de esta habitación. Pregúntanos por ella al pedir disponibilidad.</p>
                </div>
              )}
              <div className="p-6 md:p-8">
                <h3 className="text-3xl text-white">{actual.nombre}</h3>
                <p className="precio mt-2"><span className="text-4xl font-bold">{pesos(actual.desde)}</span> <span className="text-white/85">MXN por noche, desde</span></p>
                <ul className="mt-5 grid gap-1.5 text-white/90">
                  <li><span className="font-semibold text-white">Camas:</span> {actual.camasTexto}</li>
                  <li><span className="font-semibold text-white">Clima:</span> {climaTexto(actual.clima).replace(/^./, (l) => l.toUpperCase())}</li>
                  <li><span className="font-semibold text-white">Incluye:</span> {incluyenTodas}</li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={wa(mensaje)} {...externo} className="btn-arena">{Icono.wa} Pedir disponibilidad por WhatsApp</a>
                  <a href={telPrincipal.href} className="btn-claro">{Icono.tel} Llamar para reservar</a>
                </div>
                <p className="mt-6 border-t border-white/20 pt-4 text-[0.95rem] text-white/85">¿Te quedas una semana? {promociones.noche.texto}</p>
              </div>
            </article>
            <p className="mt-4 text-sm">Dibujo ilustrativo: las camas van en su medida estándar y el acomodo es aproximado; el hotel no publica planos ni medidas de sus habitaciones. Precios "desde" publicados en su sitio.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Promociones() {
  const { noche, salon } = promociones;
  return (
    <section id="promociones" className="oscuro bg-colcha text-white">
      <div className="contenedor grid gap-14 py-20 md:py-24 lg:grid-cols-12 lg:gap-10">
        <div className="min-w-0 lg:col-span-7">
          <p className="text-lg font-semibold text-arena">{noche.titulo}</p>
          <h2 className="mt-2 text-[clamp(2.2rem,4.6vw,3.5rem)] text-white">Seis noches seguidas y la séptima va por nuestra cuenta</h2>
          <p className="mt-4 max-w-xl text-lg text-white/90">{noche.subtitulo}. {noche.texto}</p>
          <ol className="mt-8 grid max-w-xl grid-cols-7 gap-1.5" aria-label="Seis noches pagadas y una gratis">
            {Array.from({ length: 7 }, (_, k) => (
              <li key={k} className={`grid aspect-square min-w-0 place-items-center rounded-lg text-center text-[0.7rem] font-semibold sm:text-sm ${k === 6 ? 'bg-arena text-tinta' : 'border border-white/35 text-white'}`}>
                {k === 6 ? 'Gratis' : k + 1}
              </li>
            ))}
          </ol>
          <a href={wa(`${saludo} Me interesa la promoción de una noche gratis al reservar 6 noches consecutivas. ¿Me pueden dar información?`)} {...externo} className="btn-arena mt-8">{Icono.wa} Preguntar por la noche gratis</a>
        </div>
        <div className="min-w-0 border-t border-white/25 pt-10 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          <p className="text-lg font-semibold text-arena">{salon.titulo}</p>
          <p className="precio mt-2 text-6xl font-bold text-white">{pesos(salon.precio)} <span className="text-xl font-medium text-white/85">MXN por hora</span></p>
          <h3 className="mt-4 text-2xl text-white">Salón para negocios</h3>
          <p className="mt-2 text-lg text-white/90">{salon.subtitulo}. {salon.texto}</p>
          <a href={wa(`${saludo} Me interesa rentar el salón para negocios. ¿Me pueden dar información y disponibilidad?`)} {...externo} className="btn-claro mt-8">{Icono.wa} Preguntar por el salón</a>
        </div>
      </div>
    </section>
  );
}

function ElHotel() {
  return (
    <section className="contenedor grid gap-12 py-20 md:grid-cols-12 md:py-24">
      <div className="min-w-0 md:col-span-7">
        <h2 className="text-[clamp(2.2rem,4.4vw,3.4rem)]">{hotel.sublema}</h2>
        <p className="mt-5 text-lg text-tinta">{hotel.texto}</p>
        <p className="mt-4">{hotel.ubicados}</p>
        <ul className="mt-4 grid gap-1">
          {hotel.cerca.map((c) => <li key={c} className="border-l-2 border-vino pl-3 font-medium text-tinta">{c}</li>)}
        </ul>
        <p className="mt-4">{hotel.cierre}</p>
      </div>
      <aside className="min-w-0 self-start rounded-2xl border-2 border-vino/80 bg-white p-6 md:col-span-5">
        <h3 className="text-2xl text-vino">{hotel.humo.titulo}</h3>
        <p className="mt-3 text-[0.98rem]">{hotel.humo.texto}</p>
      </aside>
    </section>
  );
}

function Servicios() {
  return (
    <section id="servicios" className="border-t border-tinta/10 py-20 md:py-24">
      <div className="contenedor">
        <div className="grid gap-4 md:grid-cols-12 md:items-end">
          <h2 className="text-[clamp(2.2rem,4.4vw,3.4rem)] md:col-span-6">{servicios.titulo}</h2>
          <p className="text-lg md:col-span-6">{servicios.subtitulo}.</p>
        </div>
        <ul className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.lista.map((s) => (
            <li key={s.nombre} className="min-w-0 border-t border-tinta/15 pt-3">
              <p className="font-semibold text-tinta">{s.nombre}</p>
              <p className="text-[0.97rem]">{s.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Tepic() {
  return (
    <section id="tepic" className="border-y border-tinta/10 bg-white py-20 md:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-5">
          <h2 className="text-[clamp(2.2rem,4.4vw,3.4rem)]">{tepic.titulo}</h2>
          <p className="mt-2 text-xl font-semibold text-vino">{tepic.subtitulo}</p>
          <p className="mt-5 text-lg">{tepic.texto}</p>
          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6">
            {tepic.numeros.map((n) => (
              <li key={n.texto} className="min-w-0 border-t-2 border-colcha pt-3">
                <p className="precio text-4xl font-bold text-tinta">{n.valor}</p>
                <p className="mt-1 text-[0.95rem]">{n.texto}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid min-w-0 gap-3 sm:grid-cols-5 lg:col-span-7">
          <figure className="min-w-0 sm:col-span-3">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-auto sm:h-full"><Img foto={tepic.fotos[0]} className="object-[40%_50%]" /></div>
          </figure>
          <figure className="flex min-w-0 flex-col gap-3 sm:col-span-2">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-[3/4]"><Img foto={tepic.fotos[1]} className="object-[45%_50%]" /></div>
            <figcaption className="text-sm">Fotos de Tepic y sus alrededores, publicadas en el sitio del hotel.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="oscuro bg-vino text-white">
      <div className="contenedor grid gap-12 py-20 md:grid-cols-12 md:py-24">
        <div className="min-w-0 md:col-span-6">
          <h2 className="text-[clamp(2.2rem,4.4vw,3.4rem)] text-white">¿Necesitas saber más acerca de Hotel Bravo Tepic?</h2>
          <p className="mt-4 text-lg text-white/90">{hotel.contactoTexto}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={hotel.whatsapp} {...externo} className="btn-arena">{Icono.wa} Escríbenos por WhatsApp</a>
            <a href={telPrincipal.href} className="btn-claro">{Icono.tel} Llamar</a>
          </div>
        </div>
        <dl className="grid min-w-0 content-start gap-6 sm:grid-cols-2 md:col-span-6">
          <div className="sm:col-span-2">
            <dt className="font-semibold text-arena">Dirección</dt>
            <dd className="mt-1 text-lg">{hotel.direccion}</dd>
            <dd className="mt-3"><a href={hotel.mapa} {...externo} className="inline-flex items-center gap-2 font-semibold text-white underline decoration-arena decoration-2 underline-offset-4">{Icono.mapa} Cómo llegar en Google Maps</a></dd>
          </div>
          <div>
            <dt className="font-semibold text-arena">Reservaciones</dt>
            {hotel.telefonos.map((t) => (
              <dd key={t.href} className="mt-1"><a className="text-lg text-white underline underline-offset-4" href={t.href}>{t.visible}</a></dd>
            ))}
          </div>
          <div>
            <dt className="font-semibold text-arena">Facebook</dt>
            <dd className="mt-1"><a className="text-lg text-white underline underline-offset-4" href={hotel.facebook} {...externo}>Hotel Bravo Tepic</a></dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="font-semibold text-arena">Correo</dt>
            <dd className="mt-1"><a className="break-all text-white underline underline-offset-4 sm:text-lg" href={`mailto:${hotel.email}?subject=${encodeURIComponent('Reservación en Hotel Bravo Tepic')}`}>{hotel.email}</a></dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-crema pb-28 pt-12 md:pb-12">
      <div className="contenedor grid gap-8 md:grid-cols-12 md:items-center">
        <div className="flex min-w-0 items-center gap-5 md:col-span-7">
          <img src={hotel.logo.src} alt={hotel.logo.alt} width={hotel.logo.w} height={hotel.logo.h} loading="lazy" className="h-12 w-auto" />
          <p className="text-sm">{hotel.cierre}</p>
        </div>
        <p className="text-sm md:col-span-5 md:text-right">© 2000-{new Date().getFullYear()} {hotel.nombre}. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-tinta/10 bg-crema/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-[1.8fr_1fr_1fr] gap-2">
        <a href={telPrincipal.href} className="btn px-3">{Icono.tel} Llamar</a>
        <a href={hotel.whatsapp} {...externo} className="btn-linea px-0" aria-label="Escribir por WhatsApp al Hotel Bravo Tepic">{Icono.wa}</a>
        <a href={hotel.mapa} {...externo} className="btn-linea px-0" aria-label="Cómo llegar al Hotel Bravo Tepic">{Icono.mapa}</a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <a href="#dormir" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2">Saltar a elegir habitación</a>
      <Encabezado />
      <main>
        <Portada />
        <Dormir />
        <Promociones />
        <ElHotel />
        <Servicios />
        <Tepic />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
