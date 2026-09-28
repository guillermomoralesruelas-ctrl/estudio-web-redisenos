import { useState } from 'react';
import {
  negocio, wa, waGeneral, fotos, paquetesBoda, paquetesXV, horaExtra, maxHoras, momentos, extras,
  galeria, calificacion, opiniones, preguntas, formasPago, servicios, pesos,
  type Paquete, type Momento, type Extra, type Foto,
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


function Imagen({ foto, className = '', eager = false, sizes = '(min-width: 768px) 33vw, 100vw' }: { foto: Foto; className?: string; eager?: boolean; sizes?: string }) {
  return (
    <img src={foto.src} alt={foto.alt} width={foto.ancho} height={foto.alto} sizes={sizes}
      loading={eager ? 'eager' : 'lazy'} decoding="async" className={`object-cover ${className}`} />
  );
}

function Marca({ className = '' }: { className?: string }) {
  return (
    <span className={`font-display text-[1.6rem] leading-none text-marfil ${className}`}>
      Cuadro <span className="italic text-oro">x</span> Cuadro
    </span>
  );
}

function Encabezado() {
  const enlaces: [string, string][] = [['#tu-dia', 'Paquetes'], ['#galeria', 'Galería'], ['#opiniones', 'Opiniones'], ['#preguntas', 'Preguntas'], ['#contacto', 'Contacto']];
  return (
    <header className="oscuro sticky top-0 z-40 border-b border-white/10 bg-sala/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" aria-label="Cuadro x Cuadro, inicio"><Marca /></a>
        <nav aria-label="Secciones" className="hidden gap-6 text-[0.92rem] font-semibold lg:flex">
          {enlaces.map(([href, texto]) => <a key={href} href={href} className="hover:text-oro">{texto}</a>)}
        </nav>
        <a href={waGeneral} className="btn hidden !min-h-10 !py-2 sm:inline-flex" {...externo}><IconoWa />Cotizar</a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="oscuro relative">
      {/* Bandas de pantalla ancha: la foto va entre dos franjas negras, como en el cine */}
      <div className="relative mx-auto max-w-[110rem] sm:px-6 sm:pt-6">
        <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[21/9]">
          <Imagen foto={fotos.portada} eager sizes="100vw" className="absolute inset-0 h-full w-full object-[50%_60%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-sala via-sala/40 to-transparent sm:bg-gradient-to-r sm:from-sala/85 sm:via-sala/30" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:inset-y-0 sm:flex sm:max-w-[40rem] sm:flex-col sm:justify-end sm:p-10 lg:p-14">
            <p className="font-display text-xl italic text-oro">{negocio.lema}</p>
            <h1 className="mt-2 text-[2.6rem] sm:text-6xl">Fotografía y video de bodas y XV años en la Ciudad de México</h1>
          </div>
        </div>
      </div>
      <div className="contenedor grid gap-8 py-10 md:grid-cols-[1.3fr_1fr] md:items-end">
        <div>
          <blockquote className="font-display text-2xl italic leading-snug text-marfil sm:text-[1.9rem]">
            “Las flores se marchitan, el vino se acaba; el único recuerdo que tendrás del día más maravilloso de tu vida son las fotos y el video. Que sean extraordinarios.”
          </blockquote>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={waGeneral} className="btn" {...externo}><IconoWa />Cotizar por WhatsApp</a>
            <a href="#tu-dia" className="btn-claro">Ver qué cubre cada paquete</a>
          </div>
        </div>
        <dl className="grid grid-cols-3 gap-4 border-t border-white/15 pt-6 text-center md:border-l md:border-t-0 md:pl-8 md:pt-0 md:text-left">
          <div className="flex flex-col"><dt className="text-[0.8rem]">de experiencia</dt><dd className="order-first font-display text-3xl text-oro sm:text-4xl">{negocio.anios} años</dd></div>
          <div className="flex flex-col"><dt className="text-[0.8rem]">por día, para cuidarlo</dt><dd className="order-first font-display text-3xl text-oro sm:text-4xl">1 evento</dd></div>
          <div className="flex flex-col"><dt className="text-[0.8rem]">{calificacion.total} opiniones en {calificacion.fuente}</dt><dd className="order-first font-display text-3xl text-oro sm:text-4xl">{calificacion.promedio}</dd></div>
        </dl>
      </div>
    </section>
  );
}

function Lista({ titulo, items }: { titulo: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-[0.8rem] font-bold uppercase tracking-wider text-oro-hondo">{titulo}</h4>
      <ul className="mt-2 space-y-1.5 text-[0.95rem]">
        {items.map((t) => <li key={t} className="flex gap-2"><span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-oro-hondo" />{t}</li>)}
      </ul>
    </div>
  );
}

function TuDia() {
  const [evento, setEvento] = useState<'boda' | 'xv'>('boda');
  const lista = evento === 'boda' ? paquetesBoda : paquetesXV;
  const [id, setId] = useState('premium');
  const [extra, setExtra] = useState(0);
  const paq: Paquete = lista.find((p) => p.id === id) ?? lista[0];
  const total = paq.horas + extra;
  const nombreEvento = evento === 'boda' ? 'boda' : 'XV años';

  const cambiarEvento = (e: 'boda' | 'xv') => { setEvento(e); setExtra(0); if (e === 'xv' && id.startsWith('basico')) setId('premium'); };

  const mensaje = `Hola Cuadro x Cuadro, me interesa el paquete ${paq.nombre} de ${nombreEvento} (${paq.horas} horas)` +
    (extra ? ` con ${extra} hora${extra > 1 ? 's' : ''} extra` : '') + '. ¿Me pueden cotizar? Mi fecha es: ';

  const celdas = Array.from({ length: maxHoras + 3 }, (_, i) => i + 1);

  return (
    <section id="tu-dia" className="py-16 sm:py-24">
      <div className="contenedor">
        <div className="max-w-3xl">
          <h2 className="text-5xl sm:text-6xl">Tu día, <em className="text-oro-hondo">cuadro por cuadro</em></h2>
          <p className="mt-4 text-lg">Elige tu evento y un paquete. Cada cuadro es una hora de estancia del equipo: mira qué momentos alcanza a cubrir y agrega horas si la fiesta se alarga.</p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
          <div className="inline-flex rounded-sm border border-tinta/20 p-1" role="group" aria-label="Tipo de evento">
            {(['boda', 'xv'] as const).map((e) => (
              <button key={e} type="button" aria-pressed={evento === e} onClick={() => cambiarEvento(e)}
                className={`rounded-[2px] px-5 py-2 font-bold ${evento === e ? 'bg-sala text-marfil' : 'text-tinta hover:bg-white'}`}>
                {e === 'boda' ? 'Boda' : 'XV años'}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Paquete">
            {lista.map((p) => (
              <button key={p.id} type="button" aria-pressed={paq.id === p.id} onClick={() => { setId(p.id); setExtra(0); }}
                className={`rounded-sm border px-4 py-2 font-semibold ${paq.id === p.id ? 'border-oro-hondo bg-oro-hondo text-white' : 'border-tinta/20 hover:border-oro-hondo'}`}>
                {p.nombre} <span className="font-normal opacity-80">· {p.horas} h</span>
              </button>
            ))}
          </div>
        </div>

        {/* La cinta: 11 cuadros de estancia más hasta 3 de hora extra */}
        <div className="mt-8 rounded-md bg-sala p-3 sm:p-4">
          <ol className="grid grid-cols-7 gap-1.5 sm:grid-cols-14" aria-label={`${total} horas de estancia`}>
            {celdas.map((n) => {
              const incluida = n <= paq.horas;
              const esExtra = n > paq.horas && n <= total;
              const base = n <= maxHoras;
              if (!base && !esExtra) return <li key={n} className="cuadro border-dashed border-white/15 text-white/30" aria-hidden="true">+</li>;
              return (
                <li key={n} className={`cuadro ${incluida ? 'border-oro/60 bg-[#2b261f] text-oro' : esExtra ? 'border-oro bg-oro text-sala' : 'border-white/15 text-white/35'}`}>
                  <span className="sr-only">{incluida ? 'Hora incluida' : esExtra ? 'Hora extra' : 'Hora no incluida'} </span>
                  <span className="mb-1.5">{n}</span>
                </li>
              );
            })}
          </ol>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3 px-1 text-[0.92rem] text-gris-claro">
            <p aria-live="polite"><strong className="text-marfil">{total} horas</strong> de estancia{extra ? `: ${paq.horas} del paquete y ${extra} extra` : ' en el evento'}.</p>
            <div className="flex items-center gap-2">
              <button type="button" onClick={() => setExtra((x) => Math.max(0, x - 1))} disabled={extra === 0}
                className="h-10 w-10 rounded-sm border border-white/25 text-lg font-bold text-marfil disabled:opacity-40" aria-label="Quitar una hora extra">−</button>
              <span className="min-w-[8.5rem] text-center">Hora extra: {pesos(horaExtra)}</span>
              <button type="button" onClick={() => setExtra((x) => Math.min(3, x + 1))} disabled={extra === 3}
                className="h-10 w-10 rounded-sm border border-white/25 text-lg font-bold text-marfil disabled:opacity-40" aria-label="Agregar una hora extra">+</button>
            </div>
          </div>
        </div>

        {/* Los momentos que cubre */}
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {(Object.keys(momentos) as Momento[]).map((m) => {
            const si = paq.momentos.includes(m);
            return (
              <figure key={m} className={`grid grid-cols-[7.5rem_1fr] overflow-hidden rounded-md bg-white shadow-sm transition sm:block ${si ? '' : 'opacity-55'}`}>
                <Imagen foto={momentos[m].foto} className={`h-full w-full sm:aspect-[3/2] sm:h-auto ${si ? '' : 'grayscale'}`} />
                <figcaption className="flex flex-col justify-between gap-1 p-4 sm:flex-row sm:items-baseline sm:gap-3">
                  <span><strong className="font-display text-2xl">{momentos[m].nombre}</strong><span className="block text-[0.9rem] text-gris">{momentos[m].texto}</span></span>
                  <span className={`shrink-0 text-[0.85rem] font-bold ${si ? 'text-oro-hondo' : 'text-gris'}`}>{si ? 'Incluido' : 'No incluido'}</span>
                </figcaption>
              </figure>
            );
          })}
        </div>
        <ul className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-4" aria-label="Sesiones y tomas extra">
          {(Object.keys(extras) as Extra[]).map((x) => {
            const si = paq.extras.includes(x);
            const nombre = x === 'posterior' && evento === 'xv' ? 'Sesión pos-XV' : extras[x].nombre;
            if (x === 'trash' && evento === 'xv') return null;
            return (
              <li key={x} className={`flex items-center gap-3 rounded-md border p-2 ${si ? 'border-oro-hondo/50 bg-white' : 'border-tinta/10 opacity-55'}`}>
                <Imagen foto={extras[x].foto} className={`h-14 w-16 shrink-0 rounded-[3px] ${si ? '' : 'grayscale'}`} sizes="64px" />
                <span className="text-[0.9rem] leading-tight"><strong className="block">{nombre}</strong>{si ? 'Incluida' : 'No incluida'}</span>
              </li>
            );
          })}
        </ul>

        {/* Lo que se entrega */}
        <div className="mt-8 grid gap-8 rounded-md border border-tinta/10 bg-white p-6 sm:p-8 lg:grid-cols-[1fr_1fr_1.3fr_auto]">
          <Lista titulo="Fotografía" items={paq.foto} />
          <Lista titulo="Impresos" items={paq.impresos} />
          <Lista titulo="Video" items={paq.video} />
          <div className="flex flex-col justify-between gap-4 border-t border-tinta/10 pt-6 lg:w-60 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <div>
              <p className="text-[0.85rem] text-gris">Paquete {paq.nombre}, {nombreEvento}</p>
              {paq.precio ? (
                <p className="font-display text-4xl">{pesos(paq.precio + extra * horaExtra)}</p>
              ) : (
                <p className="font-display text-3xl leading-tight">Precio por WhatsApp</p>
              )}
              <p className="mt-1 text-[0.85rem] text-gris">
                {paq.precio ? `Precio publicado en su página${extra ? `, más ${extra} × ${pesos(horaExtra)} de hora extra` : ''}.` : `Su página no publica este precio${extra ? `; la hora extra es de ${pesos(horaExtra)}` : ''}.`}
              </p>
              {paq.nota && evento === 'boda' && <p className="mt-3 border-l-2 border-oro-hondo pl-3 text-[0.85rem]">{paq.nota}</p>}
            </div>
            <a href={wa(mensaje)} className="btn" {...externo}><IconoWa />Pedir este paquete</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Galeria() {
  const [g, setG] = useState(0);
  const grupo = galeria[g];
  return (
    <section id="galeria" className="oscuro py-16 sm:py-24">
      <div className="contenedor">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-5xl sm:text-6xl">Su trabajo</h2>
          <div className="flex gap-2" role="tablist" aria-label="Galerías">
            {galeria.map((x, i) => (
              <button key={x.titulo} type="button" role="tab" aria-selected={g === i} onClick={() => setG(i)}
                className={`rounded-sm border px-4 py-2 font-semibold ${g === i ? 'border-oro bg-oro text-sala' : 'border-white/25 text-marfil hover:border-oro'}`}>{x.titulo}</button>
            ))}
          </div>
        </div>
        <div role="tabpanel" aria-label={grupo.titulo} className="mt-8 columns-2 gap-3 lg:columns-3">
          {grupo.fotos.map((f) => (
            <Imagen key={f.src} foto={f} className="mb-3 w-full break-inside-avoid rounded-[3px]" />
          ))}
        </div>
      </div>
    </section>
  );
}

function Cine() {
  return (
    <section className="bg-sala-media py-16 text-gris-claro sm:py-24 oscuro">
      <div className="contenedor grid items-center gap-10 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-3">
          <Imagen foto={fotos.vals} className="col-span-2 aspect-[3/2] w-full rounded-[3px]" />
          <Imagen foto={fotos.piramide} className="aspect-[3/2] w-full rounded-[3px]" />
          <Imagen foto={fotos.xvViolin} className="aspect-[3/2] w-full rounded-[3px]" />
        </div>
        <div>
          <h2 className="text-5xl sm:text-6xl">De una producción común a una <em className="text-oro">cinematográfica</em></h2>
          <p className="mt-5">Sus películas se graban en Full HD con estabilizador profesional Ronin-S de DJI y cámaras DSLR, y las tomas aéreas con su drone DJI Mavic. Cubren el día completo: sesión previa, backstage, video cronológico, fotos con amigos y video story love.</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div><h3 className="font-sans text-[0.8rem] font-bold uppercase tracking-wider !text-oro">Fotografía</h3><p className="mt-2 text-[0.95rem]">{servicios.foto.join(', ')}.</p></div>
            <div><h3 className="font-sans text-[0.8rem] font-bold uppercase tracking-wider !text-oro">Video</h3><p className="mt-2 text-[0.95rem]">{servicios.video.join(', ')}.</p></div>
          </div>
          <a href={negocio.youtube} className="btn-claro mt-8" {...externo}>Ver sus videos en YouTube</a>
        </div>
      </div>
    </section>
  );
}

function Opiniones() {
  return (
    <section id="opiniones" className="py-16 sm:py-24">
      <div className="contenedor">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-5xl sm:text-6xl">Lo que dicen las parejas</h2>
          <p><strong className="font-display text-4xl text-oro-hondo">{calificacion.promedio}</strong> de 5 en {calificacion.total} opiniones de {calificacion.fuente}</p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {opiniones.map((o) => (
            <figure key={o.nombre} className="flex flex-col rounded-md border border-tinta/10 bg-white p-6">
              <p className="font-display text-2xl leading-tight">{o.titulo}</p>
              <blockquote className="mt-3 flex-1 text-[0.97rem]">“{o.texto}”</blockquote>
              <figcaption className="mt-5 flex items-center justify-between border-t border-tinta/10 pt-4 text-[0.88rem]">
                <span><strong>{o.nombre}</strong><span className="block text-gris">{o.fecha}</span></span>
                <span className="font-bold text-oro-hondo">{o.nota} / 5</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <a href={negocio.opiniones} className="enlace mt-6 inline-block" {...externo}>Leer todas sus opiniones en bodas.com.mx</a>
      </div>
    </section>
  );
}

function Preguntas() {
  return (
    <section id="preguntas" className="border-t border-tinta/10 py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <h2 className="text-5xl sm:text-6xl">Preguntas frecuentes</h2>
          <Imagen foto={fotos.xvCascada} className="mt-8 hidden aspect-square w-full rounded-[3px] lg:block" />
        </div>
        <div>
          <div className="divide-y divide-tinta/10 border-y border-tinta/10">
            {preguntas.map((q) => (
              <details key={q.p} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  {q.p}<span aria-hidden="true" className="text-xl text-oro-hondo transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-2 text-gris">{q.r}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 rounded-md bg-white p-6">
            <h3 className="text-3xl">Formas de pago</h3>
            <ol className="mt-3 space-y-2">
              {formasPago.map((f, i) => <li key={f} className="flex gap-3"><strong className="text-oro-hondo">{i + 1}.</strong>{f}</li>)}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="oscuro relative overflow-hidden py-16 sm:py-24">
      <Imagen foto={fotos.veloBosque} sizes="100vw" className="absolute inset-0 h-full w-full opacity-15" />
      <div className="contenedor relative grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-5xl sm:text-6xl">Cuéntales de tu evento</h2>
          <p className="mt-4 max-w-md">Escríbeles con tu fecha y tu lugar. Contrata con al menos un mes de anticipación: cubren un solo evento por día.</p>
          <a href={waGeneral} className="btn mt-6" {...externo}><IconoWa />Escribir por WhatsApp</a>
        </div>
        <ul className="space-y-4 text-marfil">
          <li className="flex gap-3"><IconoTel className="mt-1 h-5 w-5 shrink-0 text-oro" /><span>Teléfono y WhatsApp<br /><a href={negocio.telefonoHref} className="enlace">{negocio.telefono}</a></span></li>
          <li className="flex gap-3"><span aria-hidden="true" className="mt-0.5 w-5 shrink-0 text-center text-oro">@</span><span>Correo<br /><a href={`mailto:${negocio.correo}`} className="enlace break-all">{negocio.correo}</a></span></li>
          <li className="flex gap-3"><IconoPin className="mt-1 h-5 w-5 shrink-0 text-oro" /><span>{negocio.zona}<br /><a href={negocio.mapa} className="enlace" {...externo}>Ver en Google Maps</a></span></li>
          <li className="flex flex-wrap gap-x-6 gap-y-2 pl-8">
            <a href={negocio.facebook} className="enlace" {...externo}>Facebook</a>
            <a href={negocio.youtube} className="enlace" {...externo}>YouTube</a>
            <a href={negocio.opiniones} className="enlace" {...externo}>bodas.com.mx</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro border-t border-white/10 pb-24 pt-8 text-[0.88rem] md:pb-8">
      <div className="contenedor flex flex-wrap items-center justify-between gap-4">
        <Marca className="!text-xl" />
        <p>Fotografía y video de bodas, XV años, bautizos y empresas. {negocio.ciudad} y toda la República.</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-sala text-[0.8rem] font-semibold text-marfil md:hidden">
      <a href={waGeneral} className="flex flex-col items-center gap-1 bg-oro py-3 text-sala" {...externo}><IconoWa />WhatsApp</a>
      <a href={negocio.telefonoHref} className="flex flex-col items-center gap-1 py-3"><IconoTel />Llamar</a>
      <a href="#tu-dia" className="flex flex-col items-center gap-1 py-3"><svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="1" /><path d="M8 6v12M16 6v12" /></svg>Paquetes</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <Encabezado />
      <main>
        <Portada />
        <TuDia />
        <Galeria />
        <Cine />
        <Opiniones />
        <Preguntas />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
