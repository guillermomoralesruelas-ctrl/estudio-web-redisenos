import { useEffect, useState } from 'react';
import {
  archivo, foto, galeria, grupos, intro, negocio, petcare, planes, porque, servicios, urgencias, wa, waInfo, zonas,
} from './data/content';

function IconoWa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.2.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}
function IconoTel({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 3h4l2 5-3 2a11 11 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A18 18 0 0 1 3 5a2 2 0 0 1 2-2Z" /></svg>;
}
function IconoPin({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>;
}

const [tel1] = negocio.telefonos;
const secciones = [['#cuerpo', 'Del hocico a la cola'], ['#servicios', 'Servicios'], ['#planes', 'Planes'], ['#contacto', 'Contacto']] as const;

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-turquesa/10 bg-white/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" aria-label="Hospital Veterinario Carson, ir al inicio"><img src={archivo('logo.png')} alt="Hospital Carson, Medicina Veterinaria" width={400} height={272} className="h-12 w-auto" /></a>
        <nav aria-label="Secciones" className="hidden lg:block">
          <ul className="flex gap-7">{secciones.map(([h, t]) => <li key={h}><a href={h} className="text-grafito hover:text-turquesa">{t}</a></li>)}</ul>
        </nav>
        <a href={tel1[1]} className="btn-alerta !min-h-[42px] !px-4 !py-2"><IconoTel /> <span className="hidden sm:inline">Urgencias 24h</span><span className="sm:hidden">24h</span></a>
      </div>
    </header>
  );
}

function useTurno() {
  const leer = () => {
    const p = Object.fromEntries(new Intl.DateTimeFormat('es-MX', { timeZone: 'America/Mexico_City', hour: '2-digit', minute: '2-digit', hour12: false })
      .formatToParts(new Date()).map((x) => [x.type, x.value]));
    const h = Number(p.hour) % 24; const m = Number(p.minute); const min = h * 60 + m;
    const diurno = min >= 9 * 60 && min <= 19 * 60 + 30;
    return { texto: `${String(h).padStart(2, '0')}:${p.minute}`, diurno };
  };
  const [t, setT] = useState(leer);
  useEffect(() => { const i = setInterval(() => setT(leer()), 30000); return () => clearInterval(i); }, []);
  return t;
}

function Portada() {
  const t = useTurno();
  return (
    <section id="inicio" className="bg-agua">
      <div className="contenedor grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <div>
          <p className="font-bold text-turquesa">Iztapalapa, Ciudad de México</p>
          <h1 className="mt-3 text-[2.7rem] sm:text-[3.8rem]">Hospital veterinario 24 horas</h1>
          <p className="mt-5 max-w-xl text-[1.08rem] text-grafito">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={tel1[1]} className="btn-alerta"><IconoTel /> Urgencias {tel1[0]}</a>
            <a href={waInfo} className="btn-linea" target="_blank" rel="noopener"><IconoWa /> WhatsApp</a>
          </div>
          <p className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 font-bold" aria-live="polite">
            <span className="h-2.5 w-2.5 rounded-full bg-[#16a34a]" aria-hidden="true" />
            Son las {t.texto}: abierto, turno {t.diurno ? 'diurno (9:00 a 19:30)' : 'nocturno (19:31 a 8:59)'}
          </p>
        </div>
        <img src={foto('pasillo')} alt={galeria[0][1]} width={600} height={450} fetchPriority="high" className="aspect-[4/3] w-full rounded-3xl object-cover" />
      </div>
    </section>
  );
}

type Especie = 'perro' | 'gato';
const posiciones: Record<Especie, Record<string, [number, number]>> = {
  perro: { ojos: [96, 86], dientes: [42, 118], corazon: [150, 152], rinones: [248, 118], huesos: [283, 216], piel: [205, 100] },
  gato: { ojos: [98, 98], dientes: [66, 122], corazon: [150, 158], rinones: [245, 130], huesos: [280, 220], piel: [205, 112] },
};

function Silueta({ especie }: { especie: Especie }) {
  const c = '#19707a';
  if (especie === 'perro') {
    return (
      <g fill={c}>
        <path d="M322 118 C350 100 362 78 366 58 C370 50 380 54 376 64 C372 90 356 116 330 134 Z" />
        <ellipse cx="212" cy="142" rx="112" ry="54" />
        <rect x="128" y="160" width="26" height="80" rx="12" /><rect x="164" y="166" width="24" height="74" rx="12" />
        <rect x="258" y="160" width="26" height="80" rx="12" /><rect x="292" y="152" width="24" height="88" rx="12" />
        <circle cx="104" cy="98" r="44" />
        <ellipse cx="54" cy="116" rx="36" ry="21" />
        <ellipse cx="124" cy="82" rx="15" ry="34" transform="rotate(22 124 82)" fill="#0f3b40" />
        <circle cx="22" cy="108" r="8" fill="#0f3b40" />
      </g>
    );
  }
  return (
    <g fill={c}>
      <path d="M316 132 C360 124 372 90 356 54 C352 44 364 38 370 50 C390 94 370 142 320 152 Z" />
      <ellipse cx="210" cy="152" rx="104" ry="46" />
      <rect x="132" y="168" width="22" height="72" rx="11" /><rect x="162" y="172" width="20" height="68" rx="10" />
      <rect x="252" y="168" width="22" height="72" rx="11" /><rect x="282" y="164" width="20" height="76" rx="10" />
      <circle cx="102" cy="108" r="40" />
      <path d="M72 82 L66 40 L96 70 Z M112 70 L138 40 L136 84 Z" />
      <ellipse cx="72" cy="124" rx="16" ry="11" fill="#0f3b40" opacity="0.35" />
    </g>
  );
}

function Cuerpo() {
  const [especie, setEspecie] = useState<Especie>('perro');
  const [zona, setZona] = useState('corazon');
  const z = zonas.find((x) => x.id === zona)!;
  return (
    <section id="cuerpo" className="py-16 sm:py-24">
      <div className="contenedor">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[2.2rem] sm:text-[2.9rem]">Del hocico a la cola</h2>
            <p className="mt-3 text-grafito">Toca la parte del cuerpo que te preocupa y verás qué servicios del hospital la atienden. Para cualquier urgencia, llama: están abiertos las 24 horas.</p>
          </div>
          <div className="flex rounded-full bg-agua p-1" role="group" aria-label="Especie">
            {(['perro', 'gato'] as Especie[]).map((e) => (
              <button key={e} type="button" aria-pressed={e === especie} onClick={() => setEspecie(e)}
                className={`min-h-[44px] rounded-full px-6 font-bold capitalize transition-colors ${e === especie ? 'bg-turquesa text-white' : 'text-turquesa'}`}>{e}</button>
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
          <div className="min-w-0 rounded-[2rem] bg-agua p-4 sm:p-8">
            <svg viewBox="0 0 400 260" className="h-auto w-full" role="img" aria-label={`Silueta de ${especie} con seis zonas del cuerpo`}>
              <Silueta especie={especie} />
              {zonas.map((x) => {
                const [cx, cy] = posiciones[especie][x.id];
                const on = x.id === zona;
                return (
                  <g key={x.id} className={`punto ${on ? 'on' : ''}`} onClick={() => setZona(x.id)}>
                    {on ? <circle cx={cx} cy={cy} r="14" fill="#c9d400" className="latido" /> : null}
                    <circle className="aro" cx={cx} cy={cy} r="13" fill={on ? '#c9d400' : '#ffffff'} stroke="#0f3b40" strokeWidth="2.5" />
                    <circle cx={cx} cy={cy} r="4" fill="#0f3b40" />
                  </g>
                );
              })}
            </svg>
            <div className="mt-4 flex flex-wrap justify-center gap-2" role="group" aria-label="Zonas del cuerpo">
              {zonas.map((x) => (
                <button key={x.id} type="button" aria-pressed={x.id === zona} onClick={() => setZona(x.id)}
                  className={`min-h-[40px] rounded-full border-2 px-3.5 text-[0.93rem] font-bold transition-colors ${x.id === zona ? 'border-abismo bg-abismo text-lima' : 'border-turquesa/30 bg-white text-turquesa hover:border-turquesa'}`}>{x.nombre}</button>
              ))}
            </div>
          </div>
          <div className="min-w-0" aria-live="polite">
            <p className="font-bold text-turquesa">{z.nombre} de tu {especie}</p>
            <ul className="mt-4 space-y-4">
              {z.servicios.map((id) => {
                const [n, t] = servicios[id];
                return (
                  <li key={id} className="rounded-2xl border border-turquesa/15 p-5">
                    <h3 className="text-[1.3rem]">{n}</h3>
                    <p className="mt-1 text-grafito">{t}</p>
                    <a href={wa(`Hola, quiero información sobre ${n.toLowerCase()} para mi ${especie}.`)} className="enlace mt-3 inline-flex items-center gap-1.5" target="_blank" rel="noopener"><IconoWa className="h-4 w-4" /> Preguntar por WhatsApp</a>
                  </li>
                );
              })}
            </ul>
            <div className="mt-6 rounded-2xl bg-alerta p-5 text-white">
              <p className="font-bold">¿Es una emergencia?</p>
              <p className="mt-1 text-[0.97rem] text-white/90">{urgencias}</p>
              <a href={tel1[1]} className="mt-3 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-white px-5 font-bold text-alerta"><IconoTel /> Llamar al {tel1[0]}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Servicios() {
  return (
    <section id="servicios" className="bg-agua py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="max-w-3xl text-[2.2rem] sm:text-[2.9rem]">Atención veterinaria integral</h2>
        <p className="mt-3 max-w-3xl text-grafito">{porque}</p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {grupos.map(([g, ids]) => (
            <div key={g} className="rounded-3xl bg-white p-6 sm:p-8">
              <h3 className="text-[1.5rem] text-turquesa">{g}</h3>
              <dl className="mt-3 divide-y divide-turquesa/10">
                {ids.map((id) => <div key={id} className="py-3"><dt className="font-bold">{servicios[id][0]}</dt><dd className="text-[0.96rem] text-grafito">{servicios[id][1]}</dd></div>)}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Planes() {
  return (
    <section id="planes" className="oscuro py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="text-[2.2rem] sm:text-[2.9rem]">Planes para tu mascota</h2>
        <p className="mt-3 max-w-2xl">Planes de vacunación y salud adaptados a las necesidades de tu mascota.</p>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {planes.map((p) => (
            <article key={p.especie} className="rounded-3xl bg-white/[0.06] p-7 ring-1 ring-white/15">
              <h3 className="text-[1.7rem] text-white">{p.especie}</h3>
              <dl className="mt-4 space-y-3">
                <div className="flex items-baseline justify-between gap-3 border-b border-white/10 pb-3"><dt>Vacunación</dt><dd><span className="text-[0.9rem]">desde </span><span className="font-display text-[1.8rem] text-lima">{p.vacunacion}</span></dd></div>
                <div className="flex items-baseline justify-between gap-3"><dt>Planes de salud</dt><dd><span className="text-[0.9rem]">desde </span><span className="font-display text-[1.8rem] text-lima">{p.salud}</span></dd></div>
              </dl>
              <a href={wa(`Hola, quiero información de los planes de vacunación y salud para ${p.especie.toLowerCase()}.`)} className="btn-lima mt-6" target="_blank" rel="noopener"><IconoWa /> Preguntar</a>
            </article>
          ))}
          <article className="rounded-3xl bg-lima p-7 text-abismo">
            <h3 className="text-[1.7rem]">Membresía PetCare</h3>
            <p className="mt-2 font-display text-[2.4rem] leading-none">{petcare.precio}<span className="text-[1rem]"> al año</span></p>
            <p className="mt-3">{petcare.texto}</p>
            <a href={wa('Hola, quiero información de la Membresía PetCare.')} className="btn mt-6 !bg-abismo" target="_blank" rel="noopener"><IconoWa /> Quiero PetCare</a>
          </article>
        </div>
      </div>
    </section>
  );
}

function Galeria() {
  return (
    <section className="py-16 sm:py-20">
      <div className="contenedor">
        <h2 className="text-[2.2rem]">Instalaciones</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {galeria.slice(1).map(([f, alt]) => <img key={f} src={foto(f)} alt={alt} width={500} height={500} loading="lazy" className="aspect-square w-full rounded-2xl object-cover" />)}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="bg-agua py-16 sm:py-20">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-[2.2rem] sm:text-[2.6rem]">Estamos aquí para ayudarte</h2>
          <p className="mt-4 flex gap-2"><IconoPin className="mt-1 h-5 w-5 shrink-0 text-turquesa" />{negocio.direccion}</p>
          <a href={negocio.mapa} className="enlace mt-2 inline-block" target="_blank" rel="noopener">Abrir en Google Maps</a>
          <dl className="mt-6 grid max-w-md gap-2">
            <div className="flex justify-between gap-4 border-b border-turquesa/15 pb-2"><dt>Diurno</dt><dd className="font-bold">9:00 AM a 7:30 PM</dd></div>
            <div className="flex justify-between gap-4 border-b border-turquesa/15 pb-2"><dt>Nocturno</dt><dd className="font-bold">7:31 PM a 8:59 AM</dd></div>
            <div className="flex justify-between gap-4"><dt>Urgencias</dt><dd className="font-bold text-alerta">24 horas</dd></div>
          </dl>
        </div>
        <div>
          <div className="flex flex-wrap gap-3">{negocio.telefonos.map(([t, h]) => <a key={t} href={h} className="btn"><IconoTel /> {t}</a>)}</div>
          <a href={waInfo} className="btn-linea mt-3" target="_blank" rel="noopener"><IconoWa /> WhatsApp {negocio.whatsappTexto}</a>
          <p className="mt-5"><a href={`mailto:${negocio.correo}`} className="enlace">{negocio.correo}</a></p>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro pb-28 pt-8 lg:pb-8">
      <div className="contenedor flex flex-col gap-2 sm:flex-row sm:justify-between">
        <p className="font-display text-[1.3rem] text-white">Hospital Veterinario Carson</p>
        <p>{negocio.lema}</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/15 bg-abismo text-white lg:hidden">
      <a href={tel1[1]} className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 bg-alerta text-[0.9rem] font-bold"><IconoTel />Urgencias</a>
      <a href={waInfo} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-bold"><IconoWa />WhatsApp</a>
      <a href={negocio.mapa} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-bold"><IconoPin />Cómo llegar</a>
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
        <Cuerpo />
        <Servicios />
        <Planes />
        <Galeria />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
