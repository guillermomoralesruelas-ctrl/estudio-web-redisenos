import { useMemo, useState } from 'react';
import {
  negocio, wa, waClaseGratis, waInformes, fotos, ritmos, otrosRitmos, horario, paquetes, inscripcion, claseSuelta,
  boda, promo, otrasFormas, cifras, equipo, resenas, preguntas, pesos, type Foto,
} from './data/content';

const externo = { target: '_blank', rel: 'noopener noreferrer' } as const;

function IconoWa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.2.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}

function IconoTel({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 3h4l2 5-3 2a11 11 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A18 18 0 0 1 3 5a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

function IconoPin({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}


function Imagen({ foto, className = '', eager = false }: { foto: Foto; className?: string; eager?: boolean }) {
  return <img src={foto.src} alt={foto.alt} width={foto.ancho} height={foto.alto} loading={eager ? 'eager' : 'lazy'} decoding="async" className={`object-cover ${className}`} />;
}

function Encabezado() {
  const enlaces: [string, string][] = [['#ritmos', 'Ritmos'], ['#cuantas-clases', 'Paquetes'], ['#boda', 'Boda'], ['#visitanos', 'Horario y ubicación'], ['#preguntas', 'Preguntas']];
  return (
    <header className="oscuro sticky top-0 z-40 border-b border-white/10 bg-noche/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-2.5" aria-label="Academia de baile ARIA, inicio">
          <img src={`${import.meta.env.BASE_URL}icono.png`} alt="" width={36} height={36} className="h-9 w-9 rounded-lg" />
          <span className="font-display text-2xl font-extrabold tracking-tight text-white">ARIA</span>
        </a>
        <nav aria-label="Secciones" className="hidden gap-6 text-[0.92rem] font-semibold lg:flex">
          {enlaces.map(([h, t]) => <a key={h} href={h} className="hover:text-amarillo">{t}</a>)}
        </nav>
        <a href={waClaseGratis} className="btn hidden !min-h-10 !py-2 sm:inline-flex" {...externo}><IconoWa />Clase gratis</a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="oscuro overflow-hidden">
      <div className="contenedor grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_1fr] lg:py-20">
        <div>
          <p className="font-semibold text-amarillo">Academia de baile en la Condesa, CDMX</p>
          <h1 className="mt-3 text-[2.7rem] sm:text-6xl">Aprende a bailar desde cero y a tu propio ritmo</h1>
          <p className="mt-5 max-w-xl text-lg">Cumbia, salsa y bachata en clases semi-personalizadas: llegas a la hora que quieras, eliges el ritmo y tu instructor empieza contigo. No necesitas pareja.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={waClaseGratis} className="btn" {...externo}><IconoWa />Tomar mi primera clase gratis</a>
            <a href="#cuantas-clases" className="btn-claro">Ver paquetes y precios</a>
          </div>
          <dl className="mt-9 grid grid-cols-3 gap-4 border-t border-white/15 pt-6">
            {cifras.map((c) => (
              <div key={c.t} className="flex flex-col"><dt className="text-[0.85rem] leading-snug">{c.t}</dt><dd className="order-first font-display text-3xl font-extrabold text-amarillo sm:text-4xl">{c.n}</dd></div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <Imagen foto={fotos.portada} eager className="aspect-[4/3] w-full rounded-[2rem]" />
          <Imagen foto={fotos.bachata} className="absolute -bottom-6 -left-4 hidden aspect-[16/10] w-44 rounded-2xl border-4 border-noche sm:block" />
        </div>
      </div>
    </section>
  );
}

function Ritmos() {
  return (
    <section id="ritmos" className="py-16 sm:py-24">
      <div className="contenedor">
        <div className="max-w-2xl">
          <h2 className="text-4xl sm:text-5xl">Todos los ritmos, sin horario fijo</h2>
          <p className="mt-4 text-lg">No hay horario por ritmo: cuando llegas, dices qué quieres aprender. Puedes empezar con cumbia y cambiar a salsa con el mismo paquete.</p>
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-5">
          {ritmos.map((r) => (
            <li key={r.nombre} className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <Imagen foto={r.foto} className="aspect-[4/3] w-full" />
              <p className="p-3 font-display text-lg font-bold leading-tight">{r.nombre}</p>
            </li>
          ))}
          <li className="flex flex-col justify-center rounded-2xl bg-lila-claro p-4 md:hidden">
            <p className="font-display text-lg font-bold">Y también</p>
            <p className="text-[0.95rem] text-gris">{otrosRitmos.join(', ')}.</p>
          </li>
        </ul>
        <p className="mt-4 hidden text-gris md:block">También enseñan {otrosRitmos.join(', ').toLowerCase()}.</p>
      </div>
    </section>
  );
}

const DIAS = [
  { d: 1, c: 'L', n: 'lunes' }, { d: 2, c: 'M', n: 'martes' }, { d: 3, c: 'M', n: 'miércoles' },
  { d: 4, c: 'J', n: 'jueves' }, { d: 5, c: 'V', n: 'viernes' }, { d: 6, c: 'S', n: 'sábado' },
];
const fechaCorta = (f: Date) => f.toLocaleDateString('es-MX', { weekday: 'short', day: 'numeric', month: 'short' });

function CuantasClases() {
  const [dias, setDias] = useState<number[]>([2, 4, 6]);
  const [horas, setHoras] = useState(1.5);
  const [modo, setModo] = useState<'individual' | 'pareja'>('individual');
  const [sel, setSel] = useState(0);

  const inicio = useMemo(() => {
    const h = new Date(); h.setHours(12, 0, 0, 0);
    if (h.getDay() === 0) h.setDate(h.getDate() + 1);
    return h;
  }, []);
  const calendario = useMemo(() => Array.from({ length: 38 }, (_, i) => {
    const f = new Date(inicio); f.setDate(f.getDate() + i);
    return { f, visita: dias.includes(f.getDay()) };
  }), [inicio, dias]);

  const resultados = paquetes.map((p) => {
    let acum = 0; let fin = -1;
    for (let i = 0; i < p.vigencia; i++) {
      if (calendario[i].visita) acum += horas;
      if (fin < 0 && acum >= p.clases) fin = i;
    }
    return { p, fin, usadas: Math.min(acum, p.clases), precio: modo === 'individual' ? p.individual : p.pareja };
  });
  const terminados = resultados.filter((r) => r.fin >= 0);
  const recomendado = terminados.length ? terminados[terminados.length - 1] : null;
  const r = resultados[sel];
  const horasSemana = dias.length * horas;
  const promoVigente = Date.now() <= new Date(promo.hasta).getTime();

  const alternar = (d: number) => setDias((xs) => (xs.includes(d) ? xs.filter((x) => x !== d) : [...xs, d].sort()));
  const nombresDias = DIAS.filter((x) => dias.includes(x.d)).map((x) => x.n).join(', ');
  const mensaje = `Hola ARIA, me interesa el paquete de ${r.p.clases} clases ${modo === 'individual' ? 'individual' : 'en pareja'}. Podría ir ${nombresDias || 'algunos días'}, ${horas} h por visita. ¿Me ayudan a empezar?`;

  const offset = (inicio.getDay() + 6) % 7; // semana que empieza en lunes
  const celdas = [...Array(offset).fill(null), ...calendario.map((c, i) => ({ ...c, i }))];

  return (
    <section id="cuantas-clases" className="bg-white py-16 sm:py-24">
      <div className="contenedor">
        <div className="max-w-3xl">
          <h2 className="text-4xl sm:text-5xl">¿Cuántas clases te caben?</h2>
          <p className="mt-4 text-lg">Cada paquete tiene una vigencia: 8 clases en 16 días, 24 en 38. Marca los días que puedes ir y cuánto tiempo, y mira en el calendario, con fechas reales desde hoy, qué paquete alcanzas a terminar.</p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.15fr]">
          <div className="space-y-6">
            <fieldset>
              <legend className="font-semibold">¿Qué días puedes ir?</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {DIAS.map((x) => (
                  <button key={x.d} type="button" aria-pressed={dias.includes(x.d)} onClick={() => alternar(x.d)} aria-label={x.n}
                    className={`h-12 w-12 rounded-full border-2 font-display text-lg font-bold ${dias.includes(x.d) ? 'border-morado bg-morado text-white' : 'border-morado/25 text-tinta hover:border-morado'}`}>{x.c}</button>
                ))}
                <span className="flex h-12 items-center px-2 text-[0.9rem] text-gris">Domingo cerrado</span>
              </div>
            </fieldset>
            <fieldset>
              <legend className="font-semibold">¿Cuánto tiempo por visita?</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {[0.5, 1, 1.5, 2].map((h) => (
                  <button key={h} type="button" aria-pressed={horas === h} onClick={() => setHoras(h)}
                    className={`rounded-full border-2 px-4 py-2 font-semibold ${horas === h ? 'border-morado bg-morado text-white' : 'border-morado/25 hover:border-morado'}`}>{h === 0.5 ? 'Media hora' : `${h} h`}</button>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="font-semibold">¿Vienes solo o en pareja?</legend>
              <div className="mt-2 flex gap-2">
                {(['individual', 'pareja'] as const).map((m) => (
                  <button key={m} type="button" aria-pressed={modo === m} onClick={() => setModo(m)}
                    className={`rounded-full border-2 px-4 py-2 font-semibold ${modo === m ? 'border-morado bg-morado text-white' : 'border-morado/25 hover:border-morado'}`}>{m === 'individual' ? 'Individual' : 'En pareja (precio por los dos)'}</button>
                ))}
              </div>
            </fieldset>

            <ul className="grid grid-cols-2 gap-2" aria-label="Paquetes">
              {resultados.map((x, i) => (
                <li key={x.p.clases}>
                  <button type="button" aria-pressed={sel === i} onClick={() => setSel(i)}
                    className={`h-full w-full rounded-2xl border-2 p-3 text-left ${sel === i ? 'border-morado bg-lila-claro' : 'border-morado/15 hover:border-morado/50'}`}>
                    <span className="flex flex-wrap items-baseline justify-between gap-x-2">
                      <strong className="font-display text-xl">{x.p.clases} clases</strong>
                      {recomendado?.p.clases === x.p.clases && <span className="whitespace-nowrap rounded-full bg-amarillo px-2 py-0.5 text-[0.75rem] font-bold text-noche">Te conviene</span>}
                    </span>
                    <span className="block font-semibold">{pesos(x.precio)} <span className="font-normal text-gris">· {x.p.vigencia} días</span></span>
                    <span className={`mt-1 block text-[0.85rem] ${x.fin >= 0 ? 'text-morado' : 'text-gris'}`}>
                      {x.fin >= 0 ? `Lo terminas el ${fechaCorta(calendario[x.fin].f)}` : `Usarías ${x.usadas} de ${x.p.clases} antes de que venza`}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.75rem] bg-noche p-4 text-lila sm:p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-display text-xl font-bold text-white">Paquete de {r.p.clases} clases</p>
              <p className="text-[0.9rem]">{horasSemana} h por semana</p>
            </div>
            <div className="mt-4 grid grid-cols-7 gap-1 text-center text-[0.75rem]" aria-hidden="true">
              {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((d, i) => <span key={i} className="font-bold text-lila/70">{d}</span>)}
            </div>
            <ol className="mt-1 grid grid-cols-7 gap-1" aria-label="Calendario de tus visitas">
              {celdas.map((c, k) => {
                if (!c) return <li key={`v${k}`} aria-hidden="true" />;
                const dentro = c.i < r.p.vigencia;
                const esFin = c.i === r.fin;
                const vence = c.i === r.p.vigencia - 1;
                const domingo = c.f.getDay() === 0;
                const clase = esFin ? 'bg-amarillo text-noche font-bold'
                  : c.visita && dentro ? 'bg-morado text-white font-bold'
                  : !dentro ? 'text-lila/30' : domingo ? 'text-lila/40' : 'bg-white/5 text-lila';
                return (
                  <li key={c.i} className={`relative flex aspect-square flex-col items-center justify-center rounded-lg text-[0.82rem] ${clase} ${vence ? 'ring-2 ring-amarillo ring-inset' : ''}`}>
                    <span>{c.f.getDate()}</span>
                    <span className="sr-only">{fechaCorta(c.f)}{c.visita && dentro ? ', vas a clase' : ''}{esFin ? ', terminas el paquete' : ''}{vence ? ', vence' : ''}</span>
                  </li>
                );
              })}
            </ol>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[0.82rem]">
              <li className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-morado" />Vas a clase</li>
              <li className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-amarillo" />Terminas tus clases</li>
              <li className="flex items-center gap-1.5"><span className="h-3 w-3 rounded ring-2 ring-amarillo ring-inset" />Último día de vigencia</li>
            </ul>
            <p className="mt-4 text-[0.95rem] text-white" aria-live="polite">
              {dias.length === 0 ? 'Marca al menos un día.'
                : r.fin >= 0 ? `Con ${horasSemana} h por semana terminas tus ${r.p.clases} clases el ${fechaCorta(calendario[r.fin].f)}, antes de que venza el ${fechaCorta(calendario[r.p.vigencia - 1].f)}.`
                : `A este ritmo usarías ${r.usadas} de ${r.p.clases} clases antes del ${fechaCorta(calendario[r.p.vigencia - 1].f)}. Suma días u horas, o elige un paquete más chico.`}
            </p>
            <p className="mt-2 text-[0.85rem]">
              {pesos(r.precio)}{modo === 'pareja' ? ' por los dos' : ''}, {pesos(Math.round(r.precio / r.p.clases))} por hora{r.p.inscripcion === 'aparte' ? `, más ${pesos(inscripcion)} de inscripción si eres nuevo` : r.p.inscripcion === 'incluida' ? ', inscripción incluida' : ''}. Clase suelta: {pesos(claseSuelta[modo])} la hora.
            </p>
            <a href={wa(mensaje)} className="btn mt-5 w-full sm:w-auto" {...externo}><IconoWa />Pedir este paquete por WhatsApp</a>
          </div>
        </div>
        <p className="mt-4 text-[0.9rem] text-gris">
          Precios de lista de su sitio, en pesos e impuestos incluidos.{promoVigente ? ` ${promo.texto}` : ''} La vigencia cuenta desde el día que inicias el paquete; aquí se toma hoy como el primer día.
        </p>
      </div>
    </section>
  );
}

function Metodo() {
  const puntos = [
    ['Semi-personalizadas', 'Tu instructor te enseña tus pasos, según el ritmo que quieres, al lado de compañeros que aprenden otros. No hay clases grupales.'],
    ['Tu propio estilo', 'Con ejercicios que te ayudan a soltar el cuerpo poco a poco.'],
    ['Aprendes socializando', 'Practicas con otras personas lo que vas aprendiendo; te avisan de los eventos sociales.'],
  ];
  return (
    <section className="py-16 sm:py-24">
      <div className="contenedor grid items-center gap-10 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-3">
          <Imagen foto={fotos.enClase} className="col-span-2 aspect-[16/9] w-full rounded-3xl" />
          <Imagen foto={fotos.instructores} className="aspect-[4/3] w-full rounded-3xl" />
          <Imagen foto={fotos.aprendiendo} className="aspect-[4/3] w-full rounded-3xl" />
        </div>
        <div>
          <h2 className="text-4xl sm:text-5xl">Aprendes a tu velocidad, no a la del grupo</h2>
          <dl className="mt-6 space-y-5">
            {puntos.map(([t, d]) => <div key={t}><dt className="font-display text-xl font-bold text-morado">{t}</dt><dd className="mt-1">{d}</dd></div>)}
          </dl>
          <p className="mt-6 text-[0.95rem] text-gris">Te enseñan {equipo.join(', ')}. Academia fundada en 2022 en la Ciudad de México.</p>
        </div>
      </div>
    </section>
  );
}

function Boda() {
  return (
    <section id="boda" className="bg-lila-claro py-16 sm:py-20">
      <div className="contenedor grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <h2 className="text-4xl sm:text-5xl">Coreografía para su primer baile</h2>
          <p className="mt-4 text-lg">Una coreografía personalizada para el primer baile de los novios, sobre la canción que elijan, sin importar si nunca han bailado. Los ensayos son en su estudio y puedes cancelar hasta una hora antes sin perder la clase.</p>
        </div>
        <div>
          <ul className="grid grid-cols-3 gap-3">
            {boda.map((b) => (
              <li key={b.clases} className="rounded-2xl bg-white p-4 text-center">
                <p className="font-display text-3xl font-extrabold text-morado">{b.clases}</p>
                <p className="text-[0.9rem]">clases privadas</p>
                <p className="mt-2 font-bold">{pesos(b.precio)}</p>
              </li>
            ))}
          </ul>
          <a href={wa('Hola ARIA, quiero informes de la coreografía para nuestra boda. Nuestra fecha es: ')} className="btn-morado mt-5" {...externo}><IconoWa />Preguntar por la coreografía</a>
        </div>
      </div>
      <div className="contenedor mt-12">
        <h3 className="text-2xl">Otras formas de venir</h3>
        <ul className="mt-4 grid gap-3 md:grid-cols-3">
          {otrasFormas.map((o) => (
            <li key={o.titulo} className="rounded-2xl bg-white p-5">
              <p className="font-display text-xl font-bold">{o.titulo}</p>
              <p className="mt-1 text-[0.95rem] text-gris">{o.texto}</p>
              <a href={wa(o.mensaje)} className="enlace mt-3 inline-block" {...externo}>Preguntar por WhatsApp</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Resenas() {
  return (
    <section className="py-16 sm:py-24">
      <div className="contenedor">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-4xl sm:text-5xl">Lo que dicen sus alumnos</h2>
          <p><strong className="font-display text-3xl text-morado">4.8</strong> de 5 en Google</p>
        </div>
        <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {resenas.map((x) => (
            <li key={x.nombre} className="flex flex-col rounded-2xl border border-morado/15 bg-white p-5">
              <blockquote className="flex-1 text-[0.97rem]">“{x.texto}”</blockquote>
              <p className="mt-4 font-bold">{x.nombre}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Visitanos() {
  return (
    <section id="visitanos" className="oscuro py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl sm:text-5xl">En la Condesa, cerca del metro Chilpancingo</h2>
          <p className="mt-4 text-white">{negocio.direccion}</p>
          <p className="mt-2">{negocio.llegar}</p>
          <dl className="mt-6 space-y-2">
            {horario.map((h) => <div key={h.dias} className="flex flex-wrap gap-x-3"><dt className="w-36 font-bold text-white">{h.dias}</dt><dd>{h.turnos}</dd></div>)}
            <div className="flex flex-wrap gap-x-3"><dt className="w-36 font-bold text-white">Domingo</dt><dd>Cerrado</dd></div>
          </dl>
          <p className="mt-5 rounded-2xl border border-amarillo/40 p-4 text-[0.95rem]">{negocio.aviso}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={waClaseGratis} className="btn" {...externo}><IconoWa />Agendar clase gratis</a>
            <a href={negocio.mapa} className="btn-claro" {...externo}><IconoPin />Cómo llegar</a>
          </div>
        </div>
        <div className="relative min-h-[20rem] overflow-hidden rounded-3xl bg-[#2c1452]">
          <a href={negocio.mapa} className="enlace absolute inset-0 flex items-center justify-center" {...externo}>Ver ARIA en Google Maps</a>
          <iframe src={negocio.mapaEmbed} title="Mapa de la Academia de baile ARIA en Google Maps" className="relative h-full min-h-[20rem] w-full border-0" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </section>
  );
}

function Preguntas() {
  return (
    <section id="preguntas" className="py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <h2 className="text-4xl sm:text-5xl">Preguntas frecuentes</h2>
          <p className="mt-4">¿Otra duda? <a href={waInformes} className="enlace" {...externo}>Escríbeles por WhatsApp</a> o llama al <a href={negocio.telefonoHref} className="enlace">{negocio.telefono}</a>.</p>
        </div>
        <div className="divide-y divide-morado/15 border-y border-morado/15">
          {preguntas.map((q) => (
            <details key={q.p} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                {q.p}<span aria-hidden="true" className="text-2xl leading-none text-morado transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-2 text-gris">{q.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro border-t border-white/10 pb-24 pt-8 text-[0.9rem] md:pb-8">
      <div className="contenedor flex flex-wrap items-center justify-between gap-4">
        <p className="font-display text-xl font-extrabold text-white">ARIA</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a href={negocio.instagram} className="enlace" {...externo}>Instagram</a>
          <a href={negocio.facebook} className="enlace" {...externo}>Facebook</a>
          <a href={negocio.tiktok} className="enlace" {...externo}>TikTok</a>
          <a href={negocio.youtube} className="enlace" {...externo}>YouTube</a>
        </div>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-noche text-[0.8rem] font-semibold text-white md:hidden">
      <a href={waClaseGratis} className="flex flex-col items-center gap-1 bg-amarillo py-3 text-noche" {...externo}><IconoWa />Clase gratis</a>
      <a href={negocio.telefonoHref} className="flex flex-col items-center gap-1 py-3"><IconoTel />Llamar</a>
      <a href={negocio.mapa} className="flex flex-col items-center gap-1 py-3" {...externo}><IconoPin />Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <Encabezado />
      <main>
        <Portada />
        <Ritmos />
        <CuantasClases />
        <Metodo />
        <Boda />
        <Resenas />
        <Visitanos />
        <Preguntas />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
