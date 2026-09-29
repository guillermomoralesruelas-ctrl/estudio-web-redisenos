import { useState } from 'react';
import {
  aparte, archivo, capas, caracteristicas, doctor, especialidades, foto, listaServicios, negocio, resenas, sobre, wa, waCita,
  type Capa,
} from './data/content';

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

function IconoCalendario({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  );
}

const secciones = [
  ['#diente', 'Especialidades'],
  ['#especialista', 'Especialista'],
  ['#servicios', 'Servicios'],
  ['#pacientes', 'Pacientes'],
  ['#contacto', 'Contacto'],
] as const;

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-marino/10 bg-white/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" aria-label="COEC Centro Odontológico, ir al inicio">
          <img src={archivo('logo.png')} alt="COEC Centro Odontológico" width={599} height={198} className="h-10 w-auto" />
        </a>
        <nav aria-label="Secciones" className="hidden lg:block">
          <ul className="flex gap-7 text-[0.95rem]">
            {secciones.map(([href, texto]) => <li key={href}><a href={href} className="text-grafito hover:text-marino">{texto}</a></li>)}
          </ul>
        </nav>
        <div className="hidden items-center gap-2 sm:flex">
          <a href={negocio.citas} className="btn-linea !min-h-[42px] !py-2" target="_blank" rel="noopener"><IconoCalendario /> Agenda en línea</a>
          <a href={waCita} className="btn-marino !min-h-[42px] !py-2" target="_blank" rel="noopener"><IconoWa /> WhatsApp</a>
        </div>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="bg-espuma">
      <div className="contenedor grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        <div>
          <p className="font-medium text-sillon">Dentistas en Puerto Escondido, Oaxaca</p>
          <h1 className="mt-3 text-[2.15rem] sm:text-[3.1rem]">Centro Odontológico Especializado de la Costa</h1>
          <p className="mt-5 max-w-xl text-[1.05rem] text-grafito">{sobre}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waCita} className="btn-marino" target="_blank" rel="noopener"><IconoWa /> Escribir por WhatsApp</a>
            <a href={negocio.citas} className="btn-linea" target="_blank" rel="noopener"><IconoCalendario /> Agenda tu cita en línea</a>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-marino/15 pt-6">
            <div><dt className="text-[0.85rem] text-grafito">Experiencia</dt><dd className="text-[1.6rem] font-semibold text-marino">{negocio.anios} años</dd></div>
            <div><dt className="text-[0.85rem] text-grafito">Servicios</dt><dd className="text-[1.6rem] font-semibold text-marino">{negocio.servicios}</dd></div>
            <div><dt className="text-[0.85rem] text-grafito">Horario</dt><dd className="text-[1.6rem] font-semibold text-marino">9 a 18 h</dd></div>
          </dl>
        </div>
        <div className="relative">
          <img src={foto('sala-espera')} alt="Sala de espera de COEC con sillones azules empotrados, flores rojas, dispensador de agua y pantalla"
            width={480} height={535} fetchPriority="high" className="aspect-[4/5] w-full rounded-[2rem] object-cover lg:ml-auto lg:max-w-[26rem]" />
          <p className="absolute -bottom-4 left-4 rounded-2xl bg-white px-4 py-3 text-[0.9rem] shadow-lg shadow-marino/10 sm:left-8">
            <span className="block font-semibold text-marino">Varias especialidades en un mismo lugar</span>
            <span className="text-grafito">y tomografía 3D en la clínica</span>
          </p>
        </div>
      </div>
    </section>
  );
}

// El molar en corte: hueso, encía, raíces y corona, pulpa con sus conductos y un implante al lado.
function Diente({ activa, elegir }: { activa: string; elegir: (id: string) => void }) {
  const todo = activa === '3d';
  const on = (id: string) => `capa ${todo || activa === id ? 'on' : ''}`;
  return (
    <svg viewBox="0 0 440 460" className="diente h-auto w-full" data-activa={activa} aria-hidden="true">
      <defs>
        <pattern id="trabecula" width="22" height="22" patternUnits="userSpaceOnUse">
          <rect width="22" height="22" fill="#e8d9b8" />
          <circle cx="6" cy="7" r="3.2" fill="#d6c298" /><circle cx="16" cy="15" r="2.4" fill="#d6c298" /><circle cx="17" cy="4" r="1.5" fill="#d6c298" />
        </pattern>
        <linearGradient id="rosca" x1="0" x2="1">
          <stop offset="0" stopColor="#7d8896" /><stop offset="0.5" stopColor="#c9d0d8" /><stop offset="1" stopColor="#7d8896" />
        </linearGradient>
      </defs>

      <g className={on('hueso')} onClick={() => elegir('hueso')}>
        <path d="M0,286 C60,280 120,290 220,284 C300,280 380,290 440,284 L440,460 L0,460 Z" fill="url(#trabecula)" />
        {/* Implante: tornillo en el hueso, pilar y corona. */}
        <path d="M322,282 L360,282 L354,408 C352,424 330,424 328,408 Z" fill="url(#rosca)" />
        {[296, 312, 328, 344, 360, 376, 392].map((y) => <path key={y} d={`M${322 + (y - 282) * 0.05},${y} L${360 - (y - 282) * 0.05},${y - 6}`} stroke="#5d6774" strokeWidth="2.5" />)}
        <rect x="331" y="244" width="20" height="40" rx="3" fill="#aab3bd" />
        <path d="M292,178 C290,146 302,124 322,124 C334,124 338,136 341,136 C344,136 348,124 360,124 C380,124 392,146 390,178 C389,204 380,236 364,248 L318,248 C302,236 293,204 292,178 Z" fill="#fbfbf8" stroke="#b9c2cc" strokeWidth="2" />
      </g>

      <g className={on('encia')} onClick={() => elegir('encia')}>
        <path d="M0,252 C30,244 60,232 82,226 C90,236 208,236 218,226 C240,232 270,244 300,248 C312,250 320,246 330,244 L352,244 C362,246 372,250 390,248 C410,246 426,248 440,250 L440,302 C300,298 140,300 0,304 Z" fill="#e79aa3" />
        <path d="M0,252 C30,244 60,232 82,226 C90,236 208,236 218,226 C240,232 270,244 300,248" fill="none" stroke="#c96b78" strokeWidth="3" />
      </g>

      <g className={on('esmalte')} onClick={() => elegir('esmalte')}>
        {/* Diente completo en color dentina (raíces incluidas) y encima la corona de esmalte. */}
        <path d="M72,130 C68,92 82,62 108,62 C126,62 134,80 150,80 C166,80 174,62 192,62 C218,62 232,92 228,130 C226,170 222,205 214,245 C210,300 212,350 200,400 C196,414 182,414 180,400 C176,360 170,320 150,300 C130,320 124,360 120,400 C118,414 104,414 100,400 C88,350 90,300 86,245 C78,205 74,170 72,130 Z" fill="#f2e3c2" stroke="#cdb88f" strokeWidth="2" />
        <path d="M72,130 C68,92 82,62 108,62 C126,62 134,80 150,80 C166,80 174,62 192,62 C218,62 232,92 228,130 C226,165 223,190 220,208 C190,198 110,198 80,208 C77,190 74,165 72,130 Z" fill="#fdfdfb" stroke="#cfd6de" strokeWidth="2" />
        <path d="M88,135 C86,104 96,84 112,84 C126,86 134,100 150,100 C166,100 174,86 188,84 C204,84 214,104 212,135 C211,160 209,182 207,200 C180,194 120,194 93,200 C91,182 89,160 88,135 Z" fill="#f2e3c2" />
      </g>

      {/* La encía abraza el cuello del diente por los dos lados. */}
      <g className={on('encia')} onClick={() => elegir('encia')}>
        <path d="M56,240 C72,232 84,227 88,228 C90,246 92,264 95,284 L56,288 Z" fill="#e79aa3" />
        <path d="M212,228 C216,227 228,232 244,240 L244,288 L205,284 C208,264 210,246 212,228 Z" fill="#e79aa3" />
      </g>

      <g className={on('pulpa')} onClick={() => elegir('pulpa')}>
        <path d="M118,150 C118,132 132,128 140,138 C146,144 154,144 160,138 C168,128 182,132 182,150 C182,175 178,200 176,230 C174,280 186,340 192,394 L187,396 C176,340 160,292 150,268 C140,292 124,340 113,396 L108,394 C114,340 126,280 124,230 C122,200 118,175 118,150 Z" fill="#d9606d" />
        <path d="M130,170 C140,190 160,190 170,170" fill="none" stroke="#f5b7be" strokeWidth="2" opacity="0.8" />
      </g>

      {todo ? <rect className="escaneo" x="0" y="40" width="440" height="6" fill="#14e49a" opacity="0.7" /> : null}
    </svg>
  );
}

function CapasDelDiente() {
  const [activa, setActiva] = useState('esmalte');
  const todas: Capa[] = [...capas, ...aparte];
  const capa = todas.find((c) => c.id === activa)!;
  const boton = (c: Capa) => (
    <button key={c.id} type="button" aria-pressed={c.id === activa} onClick={() => setActiva(c.id)}
      className={`min-h-[44px] rounded-full px-4 py-2 text-[0.92rem] font-semibold transition-colors ${c.id === activa ? 'bg-menta text-noche' : 'border-2 border-white/25 text-white hover:border-white/60'}`}>
      {c.nombre}
    </button>
  );
  return (
    <section id="diente" className="oscuro py-16 sm:py-24">
      <div className="contenedor">
        <div className="max-w-2xl">
          <h2 className="text-[2rem] sm:text-[2.6rem]">Un diente, de la corona al hueso</h2>
          <p className="mt-3 text-niebla">
            En COEC trabajan varias especialidades bajo un mismo techo. Toca una parte del diente y verás cuál la atiende,
            con sus propias palabras; el mensaje de WhatsApp ya lleva el nombre del tratamiento.
          </p>
        </div>
        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start">
          <div className="min-w-0">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Partes del diente">{capas.map(boton)}</div>
            <div className="mx-auto mt-6 max-w-[27rem] rounded-[2rem] bg-white/[0.04] p-4 ring-1 ring-white/10">
              <Diente activa={activa} elegir={setActiva} />
            </div>
            <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Otros casos">{aparte.map(boton)}</div>
          </div>
          <div className="min-w-0 lg:sticky lg:top-24" aria-live="polite">
            <p className="text-[0.95rem] text-menta">{capa.donde}</p>
            <h3 className="mt-1 text-[1.7rem]">{capa.nombre}</h3>
            <div className="mt-5 space-y-5">
              {capa.especialidades.map((id) => {
                const e = especialidades[id];
                return (
                  <article key={id} className="rounded-3xl bg-white p-6 text-tinta sm:p-7">
                    <h4 className="text-[1.25rem] font-semibold text-marino">{e.nombre}</h4>
                    <p className="mt-2 text-[0.97rem] text-grafito">{e.texto}</p>
                    <a href={wa(`Hola, quiero una valoración en COEC para ${e.nombre.toLowerCase()}.`)} className="btn-marino mt-5" target="_blank" rel="noopener">
                      <IconoWa /> Preguntar por {e.nombre.toLowerCase()}
                    </a>
                  </article>
                );
              })}
            </div>
            {activa === '3d' ? (
              <p className="mt-5 text-niebla">La tomografía Cone Beam es uno de los servicios de la clínica. <a href="#especialista" className="enlace">Conoce al especialista</a></p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function Especialista() {
  return (
    <section id="especialista" className="py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <img src={foto('doctor-tomografo')} alt="El Dr. Mario Cruz Pérez con bata blanca junto al tomógrafo dental de la clínica"
          width={750} height={880} loading="lazy" className="mx-auto aspect-[15/17] w-full max-w-[26rem] rounded-[2rem] bg-espuma object-cover" />
        <div>
          <p className="font-medium text-sillon">Cuidamos de cada paciente</p>
          <h2 className="mt-2 text-[2rem] sm:text-[2.5rem]">{doctor.nombre}</h2>
          <dl className="mt-5 flex flex-wrap gap-3">
            {doctor.cedulas.map(([t, n]) => (
              <div key={t} className="rounded-2xl bg-espuma px-5 py-3">
                <dt className="text-[0.85rem] text-grafito">{t}</dt>
                <dd className="text-[1.25rem] font-semibold tracking-wide text-marino">{n}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-[0.92rem] text-grafito">
            Las cédulas se pueden consultar en el <a href={doctor.verificar} className="enlace" target="_blank" rel="noopener">Registro Nacional de Profesionistas de la SEP</a>.
          </p>
          <h3 className="mt-9 text-[1.3rem]">Tomografía Cone Beam en la misma clínica</h3>
          <p className="mt-2 text-grafito">{especialidades.conebeam.texto}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={negocio.telefonoHref} className="btn-marino"><IconoTel /> ¡Llama ahora! {negocio.telefono}</a>
            <a href={negocio.videoPromocional} className="btn-linea" target="_blank" rel="noopener">Ver su video en YouTube</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Servicios() {
  return (
    <section id="servicios" className="bg-espuma py-16 sm:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div>
          <h2 className="text-[2rem] sm:text-[2.5rem]">Servicios dentales de calidad con especialistas certificados</h2>
          <ul className="mt-7 grid gap-x-6 sm:grid-cols-2">
            {listaServicios.map((s) => (
              <li key={s} className="flex items-start gap-3 border-b border-marino/10 py-2.5">
                <svg viewBox="0 0 20 20" className="mt-1.5 h-4 w-4 shrink-0 text-sillon" aria-hidden="true"><path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /></svg>
                <span>{s}</span>
              </li>
            ))}
          </ul>
          <img src={foto('sala-sillon')} alt="Otra vista de la sala de espera de COEC: sillón azul con cojines, ventilador y dispensador de agua"
            width={780} height={750} loading="lazy" className="mt-9 aspect-[16/10] w-full rounded-3xl object-cover" />
        </div>
        <div>
          <h3 className="text-[1.45rem]">Características que te encantarán</h3>
          <dl className="mt-5 divide-y divide-marino/10 rounded-3xl bg-white px-6 sm:px-8">
            {caracteristicas.map(([t, d]) => (
              <div key={t} className="py-5">
                <dt className="font-semibold text-marino">{t}</dt>
                <dd className="mt-1 text-grafito">{d}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 rounded-3xl bg-marino p-6 text-white sm:p-8">
            <p className="text-[1.2rem] font-semibold">Invisalign®</p>
            <p className="mt-1 text-white/85">¿Conoces la opción más moderna, cómoda y eficaz para alinear tus dientes?</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={wa('Hola, quiero información sobre Invisalign® en COEC.')} className="btn" target="_blank" rel="noopener"><IconoWa /> Preguntar por Invisalign®</a>
              <a href={negocio.videoInvisalign} className="btn-claro" target="_blank" rel="noopener">Ver el video</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pacientes() {
  const [principal, ...otras] = resenas;
  return (
    <section id="pacientes" className="py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="text-[2rem] sm:text-[2.5rem]">Pacientes felices</h2>
        <p className="mt-2 text-grafito">Lo que escriben sus pacientes, en inglés tal como aparece en su sitio.</p>
        <div className="mt-9 grid gap-6 lg:grid-cols-[1.25fr_1fr]">
          <figure lang="en" className="rounded-[2rem] bg-espuma p-7 sm:p-10">
            <blockquote className="text-[1.25rem] leading-relaxed text-marino sm:text-[1.4rem]">“{principal.texto}”</blockquote>
            <figcaption className="mt-5 font-semibold">{principal.autor}</figcaption>
          </figure>
          <div className="space-y-6">
            {otras.map((r) => (
              <figure key={r.autor} lang="en" className="border-l-4 border-menta pl-5">
                <blockquote className="text-grafito">“{r.texto}”</blockquote>
                <figcaption className="mt-2 font-semibold text-marino">{r.autor}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="oscuro py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="text-[2rem] sm:text-[2.5rem]">Es hora de verlo sonreír</h2>
          <p className="mt-3 text-niebla">Estamos a tus órdenes para aclarar cualquiera de tus dudas.</p>
          <dl className="mt-7 grid gap-3">
            <div className="flex justify-between gap-4 border-b border-white/10 pb-2"><dt>Horario</dt><dd className="font-semibold text-white">{negocio.horario}</dd></div>
            <div className="flex justify-between gap-4 border-b border-white/10 pb-2"><dt>WhatsApp</dt><dd className="font-semibold text-white">{negocio.whatsappTexto}</dd></div>
            <div className="flex justify-between gap-4 border-b border-white/10 pb-2"><dt>Teléfono</dt><dd className="font-semibold text-white">{negocio.telefono}</dd></div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waCita} className="btn" target="_blank" rel="noopener"><IconoWa /> Escribir por WhatsApp</a>
            <a href={negocio.citas} className="btn-claro" target="_blank" rel="noopener"><IconoCalendario /> Agenda en línea</a>
          </div>
          <p className="mt-6 flex gap-2"><IconoPin className="mt-1 h-5 w-5 shrink-0 text-menta" />{negocio.ciudad}.</p>
          <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
            <a href={negocio.mapa} className="enlace" target="_blank" rel="noopener">Abrir en Google Maps</a>
            <a href={negocio.facebook} className="enlace" target="_blank" rel="noopener">Facebook</a>
          </div>
        </div>
        <div className="relative min-h-[340px] overflow-hidden rounded-3xl bg-marino/40">
          <a href={negocio.mapa} target="_blank" rel="noopener" className="enlace absolute inset-0 grid place-items-center p-6 text-center">Ver la ubicación en Google Maps</a>
          <iframe src={negocio.mapaEmbed} title="Mapa de Google con la ubicación de COEC en Puerto Escondido" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            className="relative h-full min-h-[340px] w-full border-0" />
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-tinta pb-28 pt-10 text-white/80 lg:pb-10">
      <div className="contenedor flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold text-white">COEC Centro Odontológico Especializado de la Costa</p>
        <p className="text-[0.92rem]">Dentistas en Puerto Escondido, Oaxaca.</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/15 bg-noche text-white lg:hidden">
      <a href={waCita} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 bg-menta text-[0.88rem] font-semibold text-noche"><IconoWa />WhatsApp</a>
      <a href={negocio.telefonoHref} className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.88rem] font-semibold"><IconoTel />Llamar</a>
      <a href={negocio.mapa} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.88rem] font-semibold"><IconoPin />Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#principal" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2">Saltar al contenido</a>
      <Encabezado />
      <main id="principal">
        <Portada />
        <CapasDelDiente />
        <Especialista />
        <Servicios />
        <Pacientes />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
