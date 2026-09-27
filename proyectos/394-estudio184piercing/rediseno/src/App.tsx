import { useState, type ReactNode } from 'react';
import {
  artistas, foto, horario, negocio, prensa, sucursales, wa, waGeneral, zonasPerforacion, zonasTatuaje,
  type Artista, type Sucursal,
} from './data/content';

type Tipo = 'tatuaje' | 'perforacion';
type Cotizacion = { tipo: Tipo; sucursal: Sucursal; zona: string; ancho: number; alto: number; artista: string | null; idea: string };

/* ---------- iconos y logotipo (dibujados por nosotros) ---------- */
function IconoWa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}
function IconoTel({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 3h3l1.5 4.5-2 1.3a12 12 0 0 0 7.7 7.7l1.3-2L21 16v3a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2Z" strokeLinejoin="round" />
    </svg>
  );
}
function IconoPin({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}
function Logotipo() {
  return (
    <svg viewBox="0 0 200 56" className="h-10 w-auto" role="img" aria-label="Estudio 184">
      <text x="0" y="40" fontFamily="'Space Grotesk', Arial, sans-serif" fontSize="34" fill="#a8a29c" letterSpacing="-0.5">estudio</text>
      <circle cx="170" cy="28" r="27" fill="#45143e" />
      <text x="170" y="40" textAnchor="middle" fontFamily="'Space Grotesk', Arial, sans-serif" fontSize="30" fontWeight="700" fill="#f4efe9">184</text>
    </svg>
  );
}

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-hueso/10 bg-noche/95 backdrop-blur">
      <div className="contenedor flex h-[4.5rem] items-center justify-between gap-4">
        <a href="#inicio" aria-label="Estudio 184, inicio"><Logotipo /></a>
        <nav aria-label="Principal" className="hidden items-center gap-7 text-[0.95rem] font-medium lg:flex">
          <a href="#cotiza" className="hover:text-lila">Cotiza</a>
          <a href="#artistas" className="hover:text-lila">Artistas</a>
          <a href="#prensa" className="hover:text-lila">Prensa</a>
          <a href="#visitanos" className="hover:text-lila">Visítanos</a>
        </nav>
        <a href={waGeneral} className="btn hidden sm:inline-flex" target="_blank" rel="noopener"><IconoWa /> WhatsApp</a>
      </div>
    </header>
  );
}

function Portada({ cotizar }: { cotizar: (c: Partial<Cotizacion>) => void }) {
  const f = foto('fachada');
  return (
    <section id="inicio" className="relative">
      <div className="contenedor grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
        <div className="min-w-0">
          <p className="text-[0.95rem] text-gris">Colima #184, Roma Norte, CDMX</p>
          <h1 className="mt-3 text-[2.6rem] leading-[1.02] sm:text-6xl">Estudio 184, tatuaje personalizado y perforaciones en la Roma</h1>
          <p className="mt-5 max-w-xl text-lg text-gris">
            Somos un estudio profesional de tatuajes y perforaciones. Trabajamos diseños mediante procesos creativos: no repetimos ni copiamos diseños, y nuestra atención es totalmente personalizada.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button type="button" className="btn" onClick={() => cotizar({ tipo: 'tatuaje' })}>Cotiza tu tatuaje</button>
            <button type="button" className="btn-linea" onClick={() => cotizar({ tipo: 'perforacion', sucursal: 'roma' })}>Agenda una perforación</button>
          </div>
        </div>
        <figure className="min-w-0">
          <img src={f.src} width={f.width} height={f.height} fetchPriority="high"
            alt="Fachada de vidrio de Estudio 184 con su letrero “estudio 184, Piercing & Custom Tattoo”, al anochecer"
            className="aspect-[2/1] w-full rounded-2xl object-cover" />
        </figure>
      </div>
    </section>
  );
}

/* ---------- elemento memorable: "Tu idea, en papel de stencil" ---------- */
function HojaStencil({ c }: { c: Cotizacion }) {
  const W = 300, H = 380, margen = 26;
  const artista = artistas.find((a) => a.id === c.artista);
  // Escala de la cuadrícula: la hoja crece si el tatuaje es grande, para que siempre quepa con margen.
  const escala = Math.min((W - margen * 2) / Math.max(c.ancho + 4, 18), (H - 150) / Math.max(c.alto + 4, 14));
  const w = c.ancho * escala, h = c.alto * escala;
  const x = (W - w) / 2, y = 70 + (H - 150 - h) / 2;
  const lineas: number[] = [];
  for (let v = margen; v <= W - margen + 0.1; v += escala) lineas.push(v);
  const filas: number[] = [];
  for (let v = 60; v <= H - 70; v += escala) filas.push(v);
  const tinta = '#4a2877';
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full max-w-[26rem] drop-shadow-xl" role="img"
      aria-label={c.tipo === 'tatuaje'
        ? `Hoja de cotización: tatuaje de ${c.ancho} por ${c.alto} centímetros en ${c.zona.toLowerCase()}, sucursal ${sucursales[c.sucursal].nombre}${artista ? `, con ${artista.nombre}` : ''}`
        : `Hoja de cita: perforación en ${c.zona.toLowerCase()}, sucursal Roma${artista ? `, con ${artista.nombre}` : ''}`}>
      <rect x="0" y="0" width={W} height={H} rx="6" fill="#f5eff6" />
      <rect x="0" y="0" width={W} height="10" rx="6" fill="#d9c9e6" />
      {c.tipo === 'tatuaje' && (
        <g opacity="0.35">
          {lineas.map((v) => <line key={`v${v}`} x1={v} x2={v} y1="60" y2={H - 70} stroke={tinta} strokeWidth="0.5" />)}
          {filas.map((v) => <line key={`h${v}`} x1={margen} x2={W - margen} y1={v} y2={v} stroke={tinta} strokeWidth="0.5" />)}
        </g>
      )}
      <text x="18" y="42" fontFamily="Caveat, cursive" fontSize="26" fill={tinta}>{c.tipo === 'tatuaje' ? 'Cotización de tatuaje' : 'Cita de perforación'}</text>
      <g>
        <circle cx={W - 34} cy="36" r="20" fill="none" stroke={tinta} strokeWidth="1.6" />
        <text x={W - 34} y="42" textAnchor="middle" fontFamily="'Space Grotesk', Arial" fontWeight="700" fontSize="15" fill={tinta}>184</text>
      </g>
      {c.tipo === 'tatuaje' ? (
        <g>
          <rect x={x} y={y} width={w} height={h} fill="none" stroke={tinta} strokeWidth="2" strokeDasharray="6 4" rx="3" />
          <line x1={x} x2={x + w} y1={y - 10} y2={y - 10} stroke={tinta} strokeWidth="1.2" />
          <line x1={x} x2={x} y1={y - 14} y2={y - 6} stroke={tinta} strokeWidth="1.2" />
          <line x1={x + w} x2={x + w} y1={y - 14} y2={y - 6} stroke={tinta} strokeWidth="1.2" />
          <text x={x + w / 2} y={y - 16} textAnchor="middle" fontFamily="Caveat, cursive" fontSize="19" fill={tinta}>{c.ancho} cm</text>
          <line x1={x + w + 10} x2={x + w + 10} y1={y} y2={y + h} stroke={tinta} strokeWidth="1.2" />
          <text x={x + w + 16} y={y + h / 2 + 6} fontFamily="Caveat, cursive" fontSize="19" fill={tinta}>{c.alto} cm</text>
          <text x={x + w / 2} y={y + h / 2 + 6} textAnchor="middle" fontFamily="Caveat, cursive" fontSize={Math.max(14, Math.min(24, w / 6))} fill={tinta} opacity="0.75">tu diseño</text>
          <text x={margen} y={H - 52} fontFamily="Caveat, cursive" fontSize="14" fill={tinta} opacity="0.8">cada cuadro = 1 cm</text>
        </g>
      ) : (
        <g>
          <circle cx={W / 2} cy="190" r="46" fill="none" stroke={tinta} strokeWidth="1.6" strokeDasharray="5 4" />
          <circle cx={W / 2} cy="190" r="4" fill={tinta} />
          <line x1={W / 2 - 18} x2={W / 2 + 18} y1="190" y2="190" stroke={tinta} strokeWidth="1" />
          <line x1={W / 2} x2={W / 2} y1="172" y2="208" stroke={tinta} strokeWidth="1" />
          <text x={W / 2} y="265" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="22" fill={tinta}>{c.zona}</text>
        </g>
      )}
      <line x1="18" x2={W - 18} y1={H - 42} y2={H - 42} stroke={tinta} strokeWidth="1" opacity="0.5" />
      <text x="18" y={H - 20} fontFamily="Caveat, cursive" fontSize="19" fill={tinta}>
        {c.tipo === 'tatuaje' ? `${c.zona}, ${sucursales[c.sucursal].nombre}` : 'Roma'}{artista ? `, ${artista.nombre}` : ''}
      </text>
    </svg>
  );
}

function mensajeDe(c: Cotizacion) {
  const artista = artistas.find((a) => a.id === c.artista);
  if (c.tipo === 'tatuaje') {
    return [
      `Hola, quiero cotizar un tatuaje original en Estudio 184 (${sucursales[c.sucursal].nombre}).`,
      `Zona del cuerpo: ${c.zona}.`,
      `Tamaño aproximado: ${c.ancho} × ${c.alto} cm.`,
      artista ? `Me gustaría con ${artista.nombre}.` : '',
      c.idea.trim() ? `Mi idea: ${c.idea.trim()}` : '',
      'Les mando una imagen de referencia.',
    ].filter(Boolean).join(' ');
  }
  return [
    'Hola, quiero agendar una perforación en Estudio 184 (Roma).',
    `Zona: ${c.zona}.`,
    artista ? `Me gustaría con ${artista.nombre}.` : '',
    c.idea.trim() ? `Comentarios: ${c.idea.trim()}` : '',
  ].filter(Boolean).join(' ');
}

function Chip({ activo, onClick, children, disabled }: { activo: boolean; onClick: () => void; children: ReactNode; disabled?: boolean }) {
  return (
    <button type="button" onClick={onClick} aria-pressed={activo} disabled={disabled}
      className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors disabled:opacity-40 ${activo ? 'border-lila bg-lila text-noche' : 'border-hueso/25 hover:border-hueso/60'}`}>
      {children}
    </button>
  );
}

function Stencil({ c, set }: { c: Cotizacion; set: (p: Partial<Cotizacion>) => void }) {
  const zonas = c.tipo === 'tatuaje' ? zonasTatuaje : zonasPerforacion;
  const oficio = c.tipo === 'tatuaje' ? 'tatuador' : 'perforador';
  const disponibles = artistas.filter((a) => a.oficio === oficio && a.sucursales.includes(c.sucursal));
  const mensaje = mensajeDe(c);
  return (
    <section id="cotiza" className="border-y border-hueso/10 bg-[#1d181a] py-16 md:py-24" aria-labelledby="cotiza-titulo">
      <div className="contenedor">
        <div className="max-w-2xl">
          <h2 id="cotiza-titulo" className="text-4xl sm:text-5xl">Tu idea, en papel de stencil</h2>
          <p className="mt-4 text-gris">
            Así cotiza el estudio: mandas una imagen de referencia, el tamaño en centímetros y la zona del cuerpo, y te dan un costo aproximado; si estás de acuerdo, se hace la cita para crear tu tatuaje. Llena los datos y míralos en la hoja antes de enviarlos.
          </p>
        </div>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-14">
          <div className="min-w-0 space-y-7">
            <fieldset>
              <legend className="text-sm font-semibold text-hueso">¿Qué quieres?</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                <Chip activo={c.tipo === 'tatuaje'} onClick={() => set({ tipo: 'tatuaje', zona: zonasTatuaje[0], artista: null })}>Tatuaje</Chip>
                <Chip activo={c.tipo === 'perforacion'} onClick={() => set({ tipo: 'perforacion', sucursal: 'roma', zona: zonasPerforacion[0], artista: null })}>Perforación</Chip>
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-semibold text-hueso">Sucursal</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {(['roma', 'valle'] as const).map((s) => (
                  <Chip key={s} activo={c.sucursal === s} disabled={c.tipo === 'perforacion' && s === 'valle'}
                    onClick={() => set({ sucursal: s, artista: null })}>{sucursales[s].nombre}</Chip>
                ))}
              </div>
              {c.tipo === 'perforacion' && <p className="mt-2 text-sm text-gris">Su sitio lista a sus perforadores en la sucursal Roma.</p>}
            </fieldset>
            <fieldset>
              <legend className="text-sm font-semibold text-hueso">Zona del cuerpo</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {zonas.map((z) => <Chip key={z} activo={c.zona === z} onClick={() => set({ zona: z })}>{z}</Chip>)}
              </div>
            </fieldset>
            {c.tipo === 'tatuaje' && (
              <fieldset className="grid gap-5 sm:grid-cols-2">
                <legend className="sr-only">Tamaño aproximado en centímetros</legend>
                {(['ancho', 'alto'] as const).map((k) => (
                  <label key={k} className="block">
                    <span className="flex justify-between text-sm font-semibold text-hueso"><span>{k === 'ancho' ? 'Ancho' : 'Alto'}</span><span className="text-lila">{c[k]} cm</span></span>
                    <input type="range" min={2} max={40} value={c[k]} onChange={(e) => set({ [k]: Number(e.target.value) } as Partial<Cotizacion>)}
                      className="mt-2 w-full accent-[#d7b3d0]" aria-valuetext={`${c[k]} centímetros`} />
                  </label>
                ))}
              </fieldset>
            )}
            <fieldset>
              <legend className="text-sm font-semibold text-hueso">{c.tipo === 'tatuaje' ? 'Tatuador (opcional)' : 'Perforador (opcional)'}</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                <Chip activo={c.artista === null} onClick={() => set({ artista: null })}>Quien esté disponible</Chip>
                {disponibles.map((a) => <Chip key={a.id} activo={c.artista === a.id} onClick={() => set({ artista: a.id })}>{a.nombre}</Chip>)}
              </div>
            </fieldset>
            <label className="block">
              <span className="text-sm font-semibold text-hueso">{c.tipo === 'tatuaje' ? 'Tu idea en pocas palabras (opcional)' : 'Comentarios (opcional)'}</span>
              <textarea value={c.idea} maxLength={200} rows={2} onChange={(e) => set({ idea: e.target.value })}
                className="mt-2 w-full rounded-lg border border-hueso/20 bg-noche px-3 py-2.5 text-hueso placeholder:text-gris/70"
                placeholder={c.tipo === 'tatuaje' ? 'Por ejemplo: una golondrina en línea fina' : 'Por ejemplo: es mi primera perforación'} />
            </label>
          </div>

          <div className="flex min-w-0 flex-col items-center gap-5 lg:sticky lg:top-24 lg:w-[26rem]">
            <HojaStencil c={c} />
            <div className="w-full">
              <a href={wa(c.sucursal, mensaje)} target="_blank" rel="noopener" className="btn w-full"><IconoWa /> Enviar a {sucursales[c.sucursal].nombre} por WhatsApp</a>
              <p className="mt-3 text-sm text-gris">
                {c.tipo === 'tatuaje' ? 'Adjunta tu imagen de referencia en el chat. ' : ''}O agenda en línea en su{' '}
                <a href={c.tipo === 'tatuaje' ? negocio.reservaTatuaje : negocio.reservaPerforacion} target="_blank" rel="noopener" className="font-semibold text-lila underline underline-offset-4">página de reservas</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Artistas({ cotizar }: { cotizar: (c: Partial<Cotizacion>) => void }) {
  const grupo = (titulo: string, lista: Artista[], tipo: Tipo) => (
    <div className="mt-10">
      <h3 className="text-2xl sm:text-3xl">{titulo}</h3>
      <ul className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {lista.map((a) => {
          const f = foto(a.id);
          return (
            <li key={a.id} className="min-w-0">
              <img src={f.src} width={f.width} height={f.height} loading="lazy" alt={a.alt} className="aspect-square w-full rounded-xl object-cover" />
              <p className="mt-2 font-semibold">{a.nombre}</p>
              <p className="text-sm text-gris">{a.sucursales.map((s) => sucursales[s].nombre).join(' y ')}{a.invitado ? ', invitado' : ''}</p>
              <button type="button" onClick={() => cotizar({ tipo, artista: a.id, sucursal: a.sucursales[0], zona: tipo === 'tatuaje' ? zonasTatuaje[0] : zonasPerforacion[0] })}
                className="mt-1 text-sm font-semibold text-lila underline-offset-4 hover:underline">
                {tipo === 'tatuaje' ? 'Cotizar con' : 'Agendar con'} {a.nombre.split(' ')[0]}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
  const joyeria = foto('joyeria');
  return (
    <section id="artistas" className="py-16 md:py-24" aria-labelledby="artistas-titulo">
      <div className="contenedor">
        <h2 id="artistas-titulo" className="text-4xl sm:text-5xl">Artistas</h2>
        <p className="mt-4 max-w-2xl text-gris">Cada uno con su estilo. Esta es una muestra del trabajo que cada quien publica en el portafolio del estudio.</p>
        {grupo('Tatuadores', artistas.filter((a) => a.oficio === 'tatuador'), 'tatuaje')}
        {grupo('Perforadores', artistas.filter((a) => a.oficio === 'perforador'), 'perforacion')}
        <p className="mt-4 text-sm text-gris">También perfora Reeky, socio del estudio, en la sucursal Roma.</p>
        <div className="mt-12 grid items-center gap-8 rounded-2xl bg-[#1d181a] p-6 md:grid-cols-[1fr_1.2fr] md:p-8">
          <img src={joyeria.src} width={joyeria.width} height={joyeria.height} loading="lazy"
            alt="Muestrario de joyería para perforación: aretes con piedras, barras con cristales, un clicker con piedras rosas y un aro de metal"
            className="aspect-square w-full rounded-xl object-cover" />
          <div>
            <h3 className="text-2xl sm:text-3xl">Joyería</h3>
            <p className="mt-3 text-gris">El estudio tiene su propia vitrina de joyería para perforación. Pregunta por las piezas disponibles cuando agendes tu perforación.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Prensa() {
  const f = foto('tatuando');
  return (
    <section id="prensa" className="py-16 md:py-24" aria-labelledby="prensa-titulo">
      <div className="contenedor">
        <img src={f.src} width={f.width} height={f.height} loading="lazy"
          alt="Un tatuador con gorra y cubrebocas trabaja bajo la lámpara sobre la pierna de un cliente"
          className="aspect-[21/8] w-full rounded-2xl object-cover" />
        <h2 id="prensa-titulo" className="mt-12 text-4xl sm:text-5xl">Lo que han dicho de nosotros</h2>
        <ul className="mt-8 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {prensa.map((p) => (
            <li key={p.medio} className="border-t border-hueso/15 pt-5">
              <blockquote className="text-[1.05rem] leading-relaxed">“{p.cita}”</blockquote>
              <a href={p.url} target="_blank" rel="noopener" className="mt-3 inline-block text-sm font-semibold text-lila underline-offset-4 hover:underline">{p.medio}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Visitanos() {
  return (
    <section id="visitanos" className="border-t border-hueso/10 bg-[#1d181a] py-16 md:py-24" aria-labelledby="visitanos-titulo">
      <div className="contenedor grid gap-12 lg:grid-cols-2">
        <div>
          <h2 id="visitanos-titulo" className="text-4xl sm:text-5xl">Visítanos</h2>
          <p className="mt-6 flex gap-3 text-lg"><IconoPin className="mt-1 h-5 w-5 shrink-0 text-lila" /><span>{negocio.direccion}<br /><span className="text-gris">{negocio.entreCalles}</span></span></p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={negocio.mapa} target="_blank" rel="noopener" className="btn-linea"><IconoPin /> Cómo llegar</a>
            <a href={`tel:+52${negocio.telefono}`} className="btn-linea"><IconoTel /> {negocio.telefonoVisible}</a>
          </div>
          <h3 className="mt-10 text-2xl">Horario</h3>
          <dl className="mt-3 space-y-1.5">
            {horario.map((h) => (
              <div key={h.dias} className="flex justify-between gap-6 border-b border-hueso/10 pb-1.5"><dt>{h.dias}</dt><dd className="text-gris">{h.horas}</dd></div>
            ))}
          </dl>
        </div>
        <div>
          <h3 className="text-2xl">WhatsApp</h3>
          <ul className="mt-3 space-y-3">
            {(['roma', 'valle'] as const).map((s) => (
              <li key={s}>
                <a href={wa(s, 'Hola, quiero información de Estudio 184.')} target="_blank" rel="noopener" className="flex items-center gap-3 rounded-xl border border-hueso/15 p-4 hover:border-lila">
                  <IconoWa className="h-6 w-6 text-lila" />
                  <span><span className="block font-semibold">Sucursal {sucursales[s].nombre}: {sucursales[s].whatsappVisible}</span><span className="text-sm text-gris">{sucursales[s].nota}</span></span>
                </a>
              </li>
            ))}
          </ul>
          <h3 className="mt-10 text-2xl">Correo y redes</h3>
          <p className="mt-3"><a href={`mailto:${negocio.correo}`} className="text-lila underline-offset-4 hover:underline">{negocio.correo}</a></p>
          <p className="mt-2 flex gap-5">
            <a href={negocio.instagram} target="_blank" rel="noopener" className="hover:text-lila">Instagram</a>
            <a href={negocio.facebook} target="_blank" rel="noopener" className="hover:text-lila">Facebook</a>
          </p>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <>
      <footer className="border-t border-hueso/10 py-10 pb-24 text-sm text-gris lg:pb-10">
        <div className="contenedor flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Logotipo />
          <p>{negocio.lema}. Colima #184, Roma Norte, CDMX.</p>
        </div>
      </footer>
      <nav className="fixed inset-x-0 bottom-0 z-40 flex border-t border-hueso/10 bg-noche/95 backdrop-blur lg:hidden" aria-label="Contacto rápido">
        <a href={waGeneral} target="_blank" rel="noopener" className="flex flex-1 flex-col items-center gap-1 py-2.5 text-xs font-medium text-lila"><IconoWa /> WhatsApp</a>
        <a href={`tel:+52${negocio.telefono}`} className="flex flex-1 flex-col items-center gap-1 border-x border-hueso/10 py-2.5 text-xs font-medium text-lila"><IconoTel /> Llamar</a>
        <a href={negocio.mapa} target="_blank" rel="noopener" className="flex flex-1 flex-col items-center gap-1 py-2.5 text-xs font-medium text-lila"><IconoPin /> Cómo llegar</a>
      </nav>
    </>
  );
}

export default function App() {
  const [c, setC] = useState<Cotizacion>({ tipo: 'tatuaje', sucursal: 'roma', zona: zonasTatuaje[0], ancho: 10, alto: 8, artista: null, idea: '' });
  const set = (p: Partial<Cotizacion>) => setC((prev) => ({ ...prev, ...p }));
  const cotizar = (p: Partial<Cotizacion>) => {
    set(p);
    requestAnimationFrame(() => document.getElementById('cotiza')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  };
  return (
    <>
      <Encabezado />
      <main>
        <Portada cotizar={cotizar} />
        <Stencil c={c} set={set} />
        <Artistas cotizar={cotizar} />
        <Prensa />
        <Visitanos />
      </main>
      <Pie />
    </>
  );
}
