import { useMemo, useState } from 'react';
import fotos from './data/fotos.json';
import {
  negocio, web, wa, waGeneral, horario, dias, motivos, intro, servicios, estetica, medicos, pagos,
} from './data/content';

type NombreFoto = keyof typeof fotos;
function Foto({ n, alt, className = '', eager = false }: { n: NombreFoto; alt: string; className?: string; eager?: boolean }) {
  const [w, h] = fotos[n];
  return (
    <img src={web(`${n}.webp`)} width={w} height={h} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async"
      className={`block h-full w-full object-cover ${className}`} />
  );
}

function IconoWA({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.4-.3Z" />
    </svg>
  );
}

const hora12 = (h: number) => `${h > 12 ? h - 12 : h} ${h >= 12 ? 'pm' : 'am'}`;

// Fecha y hora actuales en Querétaro (zona del centro de México)
function ahoraQro() {
  const p = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Mexico_City', year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', hour12: false, weekday: 'short',
  }).formatToParts(new Date());
  const v = (t: string) => p.find((x) => x.type === t)?.value ?? '0';
  const fecha = new Date(Number(v('year')), Number(v('month')) - 1, Number(v('day')));
  return { fecha, hora: (Number(v('hour')) % 24) + Number(v('minute')) / 60 };
}

function estadoAhora(dia: number, hora: number) {
  const turnos = horario[dia];
  const actual = turnos.find(([a, b]) => hora >= a && hora < b);
  if (actual) {
    const siguiente = turnos.find(([a]) => a >= actual[1]);
    return { abierto: true, texto: `Abierto ahora. Cierra a las ${hora12(actual[1])}${siguiente ? ` y vuelve a abrir a las ${hora12(siguiente[0])}` : ''}.` };
  }
  const luego = turnos.find(([a]) => a > hora);
  if (luego) return { abierto: false, texto: `Cerrado en este momento. Abre hoy a las ${hora12(luego[0])}.` };
  for (let k = 1; k <= 7; k++) {
    const d = (dia + k) % 7;
    if (horario[d].length) return { abierto: false, texto: `Cerrado en este momento. Abre ${k === 1 ? 'mañana' : `el ${dias[d].toLowerCase()}`} a las ${hora12(horario[d][0][0])}.` };
  }
  return { abierto: false, texto: 'Cerrado.' };
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-carbon/10 bg-white/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0"><img src={web('logo.png')} width={250} height={105} alt="Dr. Memo, clínica veterinaria" className="h-11 w-auto" /></a>
        <nav aria-label="Secciones" className="hidden items-center gap-7 text-sm font-semibold text-gris md:flex">
          <a href="#agenda" className="hover:text-rojo-hondo">Agenda</a>
          <a href="#servicios" className="hover:text-rojo-hondo">Servicios</a>
          <a href="#estetica" className="hover:text-rojo-hondo">Estética</a>
          <a href="#clinica" className="hover:text-rojo-hondo">La clínica</a>
          <a href="#contacto" className="hover:text-rojo-hondo">Visítanos</a>
        </nav>
        <a href={negocio.citasHref} className="btn-rojo hidden sm:inline-flex">Citas: {negocio.citas}</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="bg-crema">
      <div className="contenedor grid items-center gap-10 py-12 md:grid-cols-[1fr_1.05fr] md:py-20">
        <div className="min-w-0">
          <p className="font-semibold text-rojo-hondo">Perros y gatos · Centro de Querétaro</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-[3.6rem]">¡Nuestra veterinaria está al servicio de tu mascota!</h1>
          <p className="mt-5 max-w-xl text-lg text-gris">Consulta, vacunas, cirugía, estética y trámites de viaje en la Clínica Veterinaria del Dr. Memo. Atendemos también los fines de semana.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#agenda" className="btn-rojo">Aparta tu cita</a>
            <a href={waGeneral} className="btn-linea"><IconoWA /> WhatsApp</a>
          </div>
          <p className="mt-8 border-l-4 border-rojo pl-4 text-lg italic text-carbon">“{negocio.lema}”</p>
        </div>
        <div className="grid aspect-[5/4] min-w-0 grid-cols-5 grid-rows-2 gap-3">
          <div className="col-span-3 row-span-2 overflow-hidden rounded-2xl"><Foto n="consultorio-medico" eager alt="Médico veterinario en el consultorio de la clínica" /></div>
          <div className="col-span-2 overflow-hidden rounded-2xl"><Foto n="laboratorio" eager alt="Veterinario trabajando con el microscopio del laboratorio" /></div>
          <div className="col-span-2 overflow-hidden rounded-2xl"><Foto n="recepcion" alt="Recepción de la clínica con sala de espera" /></div>
        </div>
      </div>
    </section>
  );
}

function Agenda() {
  const { fecha, hora } = useMemo(ahoraQro, []);
  const hoy = fecha.getDay();
  const semana = Array.from({ length: 7 }, (_, k) => {
    const d = new Date(fecha); d.setDate(fecha.getDate() + k); return d;
  });
  const primerAbierto = semana.findIndex((d, k) => {
    const turnos = horario[d.getDay()];
    return turnos.some(([, b]) => (k === 0 ? b - 1 > hora : true));
  });
  const [diaSel, setDiaSel] = useState(primerAbierto < 0 ? 1 : primerAbierto);
  const [horaSel, setHoraSel] = useState<number | null>(null);
  const [motivo, setMotivo] = useState(motivos[0].id);
  const [mascota, setMascota] = useState<'perro' | 'gato'>('perro');
  const estado = estadoAhora(hoy, hora);

  const d = semana[diaSel];
  const slots = horario[d.getDay()].flatMap(([a, b]) => Array.from({ length: b - a }, (_, i) => a + i));
  const fechaTxt = d.toLocaleDateString('es-MX', { weekday: 'long', day: 'numeric', month: 'long' });
  const fechaCap = fechaTxt.charAt(0).toUpperCase() + fechaTxt.slice(1);
  const mot = motivos.find((m) => m.id === motivo)!;
  const mensaje = `¡Hola! Quiero apartar una cita para mi ${mascota}: ${mot.nombre.toLowerCase()}, el ${fechaTxt}${horaSel !== null ? ` a las ${hora12(horaSel)}` : ''}. ¿Tienen lugar?`;

  return (
    <section id="agenda" className="bg-carbon py-16 text-white md:py-24">
      <div className="contenedor">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold sm:text-4xl">La agenda del Dr. Memo</h2>
            <p className="mt-3 text-lg text-white/80">Martes a sábado de 10 am a 3 pm y de 5 pm a 8 pm, domingos de 10 am a 3 pm. Los lunes está cerrado. Elige día, hora y motivo, y manda tu solicitud.</p>
          </div>
          <p className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${estado.abierto ? 'bg-verde/20 text-[#9BE7B4]' : 'bg-white/10 text-white/85'}`} aria-live="polite">
            <span className={`h-2.5 w-2.5 rounded-full ${estado.abierto ? 'bg-[#5DD38A]' : 'bg-white/50'}`} aria-hidden="true" />
            {estado.texto}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-7 gap-1.5 sm:gap-3" role="group" aria-label="Día">
          {semana.map((dd, k) => {
            const cerrado = horario[dd.getDay()].length === 0;
            const on = k === diaSel;
            return (
              <button key={k} type="button" disabled={cerrado} aria-pressed={on}
                onClick={() => { setDiaSel(k); setHoraSel(null); }}
                className={`min-w-0 rounded-xl border px-1 py-3 text-center transition-colors ${on ? 'border-rojo bg-rojo text-white' : cerrado ? 'cursor-not-allowed border-white/10 text-white/35' : 'border-white/20 hover:border-white/60'}`}>
                <span className="block text-[0.7rem] font-semibold uppercase tracking-wide sm:text-xs">{k === 0 ? 'Hoy' : dias[dd.getDay()].slice(0, 3)}</span>
                <span className="mt-1 block text-xl font-extrabold sm:text-2xl" style={{ fontFamily: 'var(--font-display)' }}>{dd.getDate()}</span>
                <span className="block text-[0.65rem] sm:text-xs">{cerrado ? 'Cerrado' : horario[dd.getDay()].length === 1 ? 'Hasta 3 pm' : '2 turnos'}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-white/70">{fechaCap}</p>
            <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Hora">
              {slots.map((h, i) => {
                const pasada = diaSel === 0 && h + 1 <= hora;
                const corte = i > 0 && h - slots[i - 1] > 1;
                return (
                  <span key={h} className="contents">
                    {corte && <span className="flex items-center px-2 text-xs text-white/55">cerrado de 3 a 5</span>}
                    <button type="button" disabled={pasada} aria-pressed={horaSel === h} onClick={() => setHoraSel(h)}
                      className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${horaSel === h ? 'border-ambar bg-ambar text-carbon' : pasada ? 'cursor-not-allowed border-white/10 text-white/30 line-through' : 'border-white/25 hover:border-ambar'}`}>
                      {hora12(h)}
                    </button>
                  </span>
                );
              })}
            </div>

            <fieldset className="mt-8">
              <legend className="text-sm font-semibold text-white/70">¿Para quién es?</legend>
              <div className="mt-3 flex gap-2">
                {(['perro', 'gato'] as const).map((m) => (
                  <button key={m} type="button" aria-pressed={mascota === m} onClick={() => setMascota(m)}
                    className={`rounded-full border px-5 py-2 text-sm font-semibold capitalize ${mascota === m ? 'border-white bg-white text-carbon' : 'border-white/25 text-white/85'}`}>{m}</button>
                ))}
              </div>
            </fieldset>

            <fieldset className="mt-6">
              <legend className="text-sm font-semibold text-white/70">Motivo</legend>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {motivos.map((m) => (
                  <button key={m.id} type="button" aria-pressed={motivo === m.id} onClick={() => setMotivo(m.id)}
                    className={`rounded-xl border p-3 text-left text-sm font-semibold leading-snug ${motivo === m.id ? 'border-rojo bg-rojo/15 text-white' : 'border-white/20 text-white/80 hover:border-white/50'}`}>{m.nombre}</button>
                ))}
              </div>
            </fieldset>
          </div>

          <div className="min-w-0 self-start rounded-2xl bg-white p-6 text-carbon">
            <p className="text-sm font-semibold text-rojo-hondo">Tu solicitud</p>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between gap-4 border-b border-carbon/10 pb-2"><dt className="text-gris">Mascota</dt><dd className="font-semibold capitalize">{mascota}</dd></div>
              <div className="flex justify-between gap-4 border-b border-carbon/10 pb-2"><dt className="text-gris">Motivo</dt><dd className="text-right font-semibold">{mot.detalle}</dd></div>
              <div className="flex justify-between gap-4 border-b border-carbon/10 pb-2"><dt className="text-gris">Día</dt><dd className="text-right font-semibold">{fechaCap}</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-gris">Hora</dt><dd className="font-semibold">{horaSel !== null ? hora12(horaSel) : 'Elige una hora'}</dd></div>
            </dl>
            <a href={wa(mensaje)} className="btn-rojo mt-6 w-full"><IconoWA /> Enviar por WhatsApp</a>
            <p className="mt-3 text-center text-xs text-gris">La clínica te confirma si hay lugar. También: <a href={negocio.citasHref} className="font-semibold underline">citas al {negocio.citas}</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Servicios() {
  return (
    <section id="servicios" className="contenedor py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div className="min-w-0">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Lo que hacemos por tu mascota</h2>
          {intro.map((p) => <p key={p.slice(0, 16)} className="mt-4 text-lg leading-relaxed text-gris">{p}</p>)}
          <div className="mt-8 aspect-[4/3] overflow-hidden rounded-2xl"><Foto n="quirofano" alt="Área de procedimientos con mesa de acero inoxidable" /></div>
        </div>
        <ul className="grid min-w-0 content-start gap-4 sm:grid-cols-2">
          {servicios.map((s) => (
            <li key={s.nombre} className="rounded-2xl border border-carbon/10 bg-white p-5">
              <h3 className="text-lg font-bold">{s.nombre}</h3>
              <p className="mt-2 leading-relaxed text-gris">{s.texto}</p>
            </li>
          ))}
          <li className="rounded-2xl bg-rojo p-5 text-white sm:col-span-2">
            <h3 className="text-lg font-bold">¿Viajas con tu mascota? ¡Nosotros te decimos qué requiere!</h3>
            <p className="mt-2 text-white/90">Hacemos el trámite para viajar o exportar a tu mascota, y colocamos microchips y plaquitas de identificación.</p>
            <a href={wa('¡Hola! Voy a viajar con mi mascota, ¿qué requiere el trámite?')} className="mt-4 inline-flex items-center gap-2 font-semibold underline underline-offset-4"><IconoWA /> Pregunta por tu viaje</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Estetica() {
  return (
    <section id="estetica" className="bg-crema py-16 md:py-24">
      <div className="contenedor grid items-center gap-10 md:grid-cols-2">
        <div className="min-w-0">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Estética canina y felina</h2>
          <p className="mt-4 text-lg text-gris">Nuestros estilistas hacen todo esto en cada visita:</p>
          <ul className="mt-6 space-y-3">
            {estetica.map((e) => (
              <li key={e} className="flex gap-3 text-lg">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-rojo" aria-hidden="true" />{e}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-gris">Y porque el cepillado a veces no es suficiente, practicamos la profilaxis dental con instrumental dental, extracción de piezas y productos para el cuidado dental de tu peludo.</p>
          <a href={wa('¡Hola! Quiero agendar estética para mi mascota.')} className="btn-rojo mt-8"><IconoWA /> Agenda su estética</a>
        </div>
        <div className="grid min-w-0 grid-cols-2 gap-3">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl"><Foto n="consultorio" alt="Consultorio con mesa de exploración y escritorio" /></div>
          <div className="aspect-[4/5] overflow-hidden rounded-2xl"><Foto n="accesorios" alt="Exhibidor de cepillos, juguetes y accesorios" /></div>
        </div>
      </div>
    </section>
  );
}

function Clinica() {
  const tienda: [NombreFoto, string][] = [
    ['farmacia', 'Farmacia veterinaria con medicamentos'],
    ['alimentos', 'Anaqueles con alimento para perros y gatos'],
    ['correas', 'Correas, collares y pecheras'],
    ['tienda', 'Tienda con camas, transportadoras y accesorios'],
  ];
  return (
    <section id="clinica" className="contenedor py-16 md:py-24">
      <h2 className="max-w-2xl text-3xl font-extrabold sm:text-4xl">La clínica y su tienda</h2>
      <p className="mt-4 max-w-2xl text-lg text-gris">Medicamento de uso veterinario, alimento, cepillos, correas y una amplia variedad de artículos para tu mascota, en el mismo lugar donde la atendemos.</p>
      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
        {tienda.map(([n, alt]) => (
          <figure key={n} className="min-w-0">
            <div className="aspect-square overflow-hidden rounded-2xl"><Foto n={n} alt={alt} /></div>
          </figure>
        ))}
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-[1fr_1fr]">
        <div className="min-w-0 rounded-2xl border border-carbon/10 bg-white p-6">
          <h3 className="text-xl font-bold">Médicos veterinarios zootecnistas</h3>
          <ul className="mt-4 space-y-3">
            {medicos.map((m) => (
              <li key={m.cedula}><span className="font-semibold">{m.nombre}</span><br /><span className="text-sm text-gris">Cédula profesional {m.cedula} · Universidad Autónoma de Querétaro</span></li>
            ))}
          </ul>
          <p className="mt-4 font-semibold text-rojo-hondo">{negocio.experiencia}</p>
        </div>
        <div className="min-w-0 rounded-2xl border border-carbon/10 bg-white p-6">
          <h3 className="text-xl font-bold">Formas de pago</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {pagos.map((p) => <li key={p} className="rounded-full bg-crema px-3 py-1.5 text-sm">{p}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="bg-rojo-hondo py-16 text-white md:py-20">
      <div className="contenedor grid items-center gap-10 md:grid-cols-2">
        <div className="min-w-0">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Trae a tu mascota a la clínica</h2>
          <p className="mt-3 text-lg text-white/85">¡No pases por alto ningún síntoma de tu animal de compañía!</p>
          <address className="mt-6 text-lg not-italic leading-relaxed">{negocio.direccion}<br />{negocio.ciudad}</address>
          <dl className="mt-4 space-y-1">
            <div className="flex gap-2"><dt className="text-white/75">Teléfono:</dt><dd><a href={negocio.telefonoHref} className="font-semibold underline underline-offset-4">{negocio.telefono}</a></dd></div>
            <div className="flex gap-2"><dt className="text-white/75">Citas y WhatsApp:</dt><dd><a href={negocio.citasHref} className="font-semibold underline underline-offset-4">{negocio.citas}</a></dd></div>
            <div className="flex flex-wrap gap-2"><dt className="text-white/75">Correo:</dt><dd><a href={`mailto:${negocio.email}`} className="break-all underline underline-offset-4">{negocio.email}</a></dd></div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waGeneral} className="btn bg-white text-rojo-hondo hover:bg-crema"><IconoWA /> Escríbenos</a>
            <a href={negocio.maps} className="btn border-2 border-white text-white hover:bg-white hover:text-rojo-hondo">Cómo llegar</a>
          </div>
        </div>
        <a href={negocio.maps} className="group block min-w-0 overflow-hidden rounded-2xl" aria-label="Abrir la ubicación de la clínica en Google Maps">
          <div className="aspect-[4/3]"><Foto n="tienda-mostrador" alt="Interior de la clínica con mostrador y tienda" className="transition-transform duration-500 group-hover:scale-105" /></div>
        </a>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-carbon pb-28 pt-10 text-white/70 md:pb-10">
      <div className="contenedor flex flex-col justify-between gap-3 text-sm md:flex-row">
        <p>© {new Date().getFullYear()} Clínica Veterinaria del Dr. Memo · Querétaro</p>
        <p>Martes a sábado 10 am a 3 pm y 5 pm a 8 pm · Domingo 10 am a 3 pm · Lunes cerrado</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-carbon/10 bg-white text-xs font-semibold md:hidden">
      <a href={waGeneral} className="flex flex-col items-center gap-1 bg-rojo-hondo py-3 text-white"><IconoWA className="h-5 w-5" /> WhatsApp</a>
      <a href={negocio.citasHref} className="flex flex-col items-center gap-1 py-3 text-rojo-hondo">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></svg>
        Llamar
      </a>
      <a href={negocio.maps} className="flex flex-col items-center gap-1 py-3 text-rojo-hondo">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>
        Cómo llegar
      </a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Agenda />
        <Servicios />
        <Estetica />
        <Clinica />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
