import { useMemo, useState } from 'react';
import { consultorio, foto, motivos, negocio, servicios, sucursales, wa, waGeneral, type Foto, type Sucursal } from './data/content';

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

function Img({ f, className = '', loading = 'lazy' }: { f: Foto; className?: string; loading?: 'lazy' | 'eager' }) {
  return <img src={f.src} width={f.w} height={f.h} alt={f.alt} loading={loading} decoding="async" className={className} />;
}

const tel = `tel:${negocio.telLink}`;

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-noche/10 bg-white/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" aria-label="Animalitos Hospital Veterinario, inicio">
          <img src={foto('logo.svg')} alt="Animalitos" width={809} height={228} className="h-8 w-auto sm:h-9" />
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-6 font-bold text-noche md:flex">
          <a href="#cerca" className="hover:text-azul-hondo">Sucursales</a>
          <a href="#servicios" className="hover:text-azul-hondo">Servicios</a>
          <a href="#instalaciones" className="hover:text-azul-hondo">Instalaciones</a>
        </nav>
        <a href={tel} className="btn-urgencia !min-h-[40px] !px-4 !py-2 text-sm"><IconoTel className="h-4 w-4" /><span className="hidden sm:inline">Urgencias</span> {negocio.telefono}</a>
      </div>
    </header>
  );
}

function Portada() {
  const prado = sucursales.find((s) => s.id === 'prado-norte')!.foto!;
  return (
    <section id="inicio" className="relative overflow-hidden bg-cielo">
      <span aria-hidden="true" className="absolute -left-28 -top-28 h-56 w-56 rounded-full bg-amarillo/70" />
      <span aria-hidden="true" className="absolute -bottom-24 right-[-4rem] h-72 w-72 rounded-full bg-rosa/15" />
      <div className="contenedor relative grid items-center gap-10 py-12 lg:grid-cols-[1.15fr_1fr] lg:py-20">
        <div className="min-w-0">
          <h1 className="text-[2.4rem] sm:text-6xl">Hospital veterinario 24 horas en CDMX, Edomex y Puebla</h1>
          <p className="mt-5 max-w-xl text-lg">Seis hospitales Animalitos®: desde una vacuna o una consulta de rutina hasta especialidades, urgencias y estudios clínicos con tomógrafo.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={tel} className="btn-urgencia"><IconoTel /> Llamar al {negocio.telefono}</a>
            <a href={waGeneral} className="btn" target="_blank" rel="noopener"><IconoWa /> WhatsApp</a>
          </div>
          <a href="#cerca" className="enlace mt-6 inline-block">¿Cuál me queda más cerca?</a>
        </div>
        <div className="relative mx-auto w-full max-w-md min-w-0">
          <span aria-hidden="true" className="absolute -right-3 -top-3 h-24 w-24 rounded-full bg-verde" />
          <Img f={prado} loading="eager" className="relative aspect-[4/5] w-full rounded-[2.5rem] object-cover shadow-xl" />
          <p className="relative mt-3 text-sm">Tomógrafo en Animalitos Prado Norte.</p>
        </div>
      </div>
    </section>
  );
}

/* Proyección simple a escala (km) del Valle de México: 1° de latitud ≈ 111 km; 1° de longitud ≈ 104.7 km a 19.45° N. */
const LON0 = -99.335, LAT1 = 19.605, PX_KM = 17;
const KM_LON = 104.7, KM_LAT = 111;
const W = 356, H = 547;
const xy = (s: { lat: number; lng: number }) => ({ x: (s.lng - LON0) * KM_LON * PX_KM, y: (LAT1 - s.lat) * KM_LAT * PX_KM });
const dentro = (p: { x: number; y: number }) => p.x > 8 && p.x < W - 8 && p.y > 8 && p.y < H - 8;

function km(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  const r = Math.PI / 180, R = 6371;
  const dLat = (b.lat - a.lat) * r, dLng = (b.lng - a.lng) * r;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

const colores = ['#e72b66', '#008fd3', '#a1c53a', '#ffd200', '#e72b66', '#008fd3'];
const lado: Record<string, 'izq' | 'der'> = { 'prado-norte': 'izq', polanco: 'der', 'miguel-angel': 'izq', interlomas: 'der', 'zona-esmeralda': 'der' };
const corto: Record<string, string> = { 'miguel-angel': 'Miguel Ángel', 'prado-norte': 'Prado Norte', polanco: 'Polanco', interlomas: 'Interlomas', 'zona-esmeralda': 'Zona Esmeralda', puebla: 'Puebla' };

function Buscador() {
  const [elegida, setElegida] = useState<Sucursal['id']>('polanco');
  const [yo, setYo] = useState<{ lat: number; lng: number } | null>(null);
  const [estado, setEstado] = useState<'' | 'buscando' | 'error'>('');
  const [motivo, setMotivo] = useState('Consulta');

  const ordenadas = useMemo(() => {
    const lista = sucursales.map((s) => ({ s, d: yo ? km(yo, s) : null }));
    return yo ? [...lista].sort((a, b) => a.d! - b.d!) : lista;
  }, [yo]);
  const actual = sucursales.find((s) => s.id === elegida)!;
  const dActual = yo ? km(yo, actual) : null;
  const pActual = xy(actual);
  const pYo = yo ? xy(yo) : null;

  const ubicar = () => {
    if (!('geolocation' in navigator)) { setEstado('error'); return; }
    setEstado('buscando');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const p = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        setYo(p);
        setEstado('');
        const cercana = [...sucursales].sort((a, b) => km(p, a) - km(p, b))[0];
        setElegida(cercana.id);
      },
      () => setEstado('error'),
      { timeout: 10000, maximumAge: 300000 },
    );
  };

  const mensaje = `Hola, quiero agendar una cita en Animalitos ${actual.nombre}. Motivo: ${motivo}.`;

  return (
    <section id="cerca" className="py-20 sm:py-24">
      <div className="contenedor">
        <div className="max-w-2xl">
          <h2 className="text-4xl sm:text-5xl">Un Animalitos® cerca de ti</h2>
          <p className="mt-4 text-lg">Toca un hospital en el plano o deja que tu teléfono te diga cuál te queda más cerca. Tu ubicación solo se usa en esta página para medir la distancia; no se envía a nadie.</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="min-w-0">
            <div className="relative overflow-hidden rounded-[2rem] bg-cielo p-3">
              <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block h-auto w-full max-w-[26rem]" role="group" aria-label="Plano a escala con los hospitales Animalitos del Valle de México">
                <defs>
                  <pattern id="reticula" width={PX_KM * 2} height={PX_KM * 2} patternUnits="userSpaceOnUse">
                    <path d={`M ${PX_KM * 2} 0 L 0 0 0 ${PX_KM * 2}`} fill="none" stroke="#0a3d62" strokeOpacity="0.07" />
                  </pattern>
                </defs>
                <rect width={W} height={H} fill="url(#reticula)" />
                {actual.id !== 'puebla' && [2, 5, 10].map((r) => (
                  <g key={r}>
                    <circle cx={pActual.x} cy={pActual.y} r={r * PX_KM} fill="none" stroke="#006ea8" strokeOpacity="0.35" strokeDasharray="4 5" />
                    <text x={pActual.x + r * PX_KM * 0.71 + 3} y={pActual.y - r * PX_KM * 0.71 - 3} fontSize="11" fill="#0a3d62" fillOpacity="0.75" fontWeight="700">{r} km</text>
                  </g>
                ))}
                {sucursales.filter((s) => s.id !== 'puebla').map((s, n) => {
                  const p = xy(s);
                  const sel = s.id === elegida;
                  const izq = lado[s.id] === 'izq';
                  return (
                    <g key={s.id} role="button" tabIndex={0} aria-label={`${s.nombre}, ${s.horario}`} aria-pressed={sel}
                      onClick={() => setElegida(s.id)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setElegida(s.id); } }}
                      className="cursor-pointer outline-none">
                      {sel && <circle className="latido" cx={p.x} cy={p.y} r="16" fill={colores[n]} />}
                      <circle cx={p.x} cy={p.y} r={sel ? 17 : 13} fill={colores[n]} stroke="#fff" strokeWidth="3" />
                      {s.veinticuatro && <text x={p.x} y={p.y + 4} textAnchor="middle" fontSize="10.5" fontWeight="900" fill={n % 4 === 3 || n % 4 === 2 ? '#0a3d62' : '#fff'}>24</text>}
                      <text x={izq ? p.x - 22 : p.x + 22} y={p.y + 5} textAnchor={izq ? 'end' : 'start'} fontSize="15" fontWeight={sel ? 900 : 700} fill="#0a3d62"
                        stroke="#f2f8fc" strokeWidth="4" paintOrder="stroke">{corto[s.id]}</text>
                    </g>
                  );
                })}
                {pYo && dentro(pYo) && (
                  <g aria-label="Tu ubicación">
                    <circle cx={pYo.x} cy={pYo.y} r="7" fill="#0a3d62" stroke="#fff" strokeWidth="3" />
                    <text x={pYo.x + 12} y={pYo.y - 8} fontSize="13" fontWeight="900" fill="#0a3d62" stroke="#f2f8fc" strokeWidth="4" paintOrder="stroke">Tú</text>
                  </g>
                )}
                <g transform={`translate(16 ${H - 22})`} aria-hidden="true">
                  <rect width={PX_KM * 5} height="5" fill="#0a3d62" rx="2" />
                  <text y="-6" fontSize="11" fontWeight="700" fill="#0a3d62">5 km</text>
                </g>
                <g transform={`translate(${W - 26} 30)`} aria-hidden="true">
                  <path d="M0 -14 L7 6 L0 2 L-7 6 Z" fill="#0a3d62" />
                  <text y="20" textAnchor="middle" fontSize="11" fontWeight="900" fill="#0a3d62">N</text>
                </g>
              </svg>
              <button type="button" onClick={() => setElegida('puebla')} aria-pressed={elegida === 'puebla'}
                className={`absolute bottom-4 right-4 rounded-full px-4 py-2 text-sm font-bold shadow ${elegida === 'puebla' ? 'bg-noche text-white' : 'bg-white text-noche'}`}>
                Puebla Angelópolis →
              </button>
            </div>
            <p className="mt-3 text-sm">Posiciones a escala con las coordenadas de su sitio; no es un mapa de calles. Los círculos marcan 2, 5 y 10 km en línea recta.</p>
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <button type="button" onClick={ubicar} className="btn-linea"><IconoPin /> {estado === 'buscando' ? 'Buscando…' : yo ? 'Actualizar mi ubicación' : 'Usar mi ubicación'}</button>
              <p className="text-sm" aria-live="polite">
                {estado === 'error' && 'No pudimos leer tu ubicación. Elige un hospital en el plano o en la lista.'}
                {yo && estado === '' && `El más cercano a ti: ${ordenadas[0].s.nombre}, a ${ordenadas[0].d!.toFixed(1)} km en línea recta.`}
              </p>
            </div>

            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Hospitales">
              {ordenadas.map(({ s, d }) => (
                <li key={s.id}>
                  <button type="button" onClick={() => setElegida(s.id)} aria-pressed={s.id === elegida}
                    className={`min-h-[40px] rounded-full border-2 px-4 text-sm font-bold ${s.id === elegida ? 'border-noche bg-noche text-white' : 'border-noche/15 text-noche hover:border-noche'}`}>
                    {corto[s.id]}{d !== null ? ` (${d.toFixed(1)} km)` : ''}
                  </button>
                </li>
              ))}
            </ul>

            <article key={actual.id} className="aparece mt-6 overflow-hidden rounded-[2rem] border-2 border-noche/10 bg-white">
              {actual.foto ? (
                <Img f={actual.foto} className="aspect-[16/9] w-full object-cover" />
              ) : (
                <div className="grid aspect-[16/9] place-items-center bg-azul text-center text-white"><p className="px-6 text-2xl font-black">Animalitos Puebla Angelópolis</p></div>
              )}
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl">Animalitos {actual.nombre}</h3>
                  <span className={`rounded-full px-3 py-1 text-sm font-black ${actual.veinticuatro ? 'bg-verde text-noche' : 'bg-amarillo text-noche'}`}>{actual.horario}</span>
                </div>
                <p className="mt-2">{actual.direccion}</p>
                {dActual !== null && <p className="mt-1 text-sm font-bold text-azul-hondo">A {dActual.toFixed(1)} km de ti en línea recta.</p>}
                <fieldset className="mt-5">
                  <legend className="text-sm font-bold text-noche">¿Para qué es la cita?</legend>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {motivos.map((m) => (
                      <button key={m} type="button" onClick={() => setMotivo(m)} aria-pressed={motivo === m}
                        className={`min-h-[36px] rounded-full px-3 text-sm font-bold ${motivo === m ? 'bg-azul-hondo text-white' : 'bg-cielo text-noche hover:bg-azul/15'}`}>{m}</button>
                    ))}
                  </div>
                </fieldset>
                <div className="mt-6 flex flex-wrap gap-2">
                  <a href={wa(mensaje)} className="btn" target="_blank" rel="noopener"><IconoWa /> Agendar por WhatsApp</a>
                  <a href={tel} className="btn-linea"><IconoTel /> {negocio.telefono}</a>
                  <a href={actual.mapa} className="btn-linea" target="_blank" rel="noopener"><IconoPin /> Cómo llegar</a>
                </div>
                <p className="mt-4 text-sm">¿Tienes una emergencia? {actual.veinticuatro ? 'Este hospital está abierto las 24 horas.' : 'Prado Norte abre de 9:00 am a 7:00 pm; fuera de ese horario, ve a otro de sus hospitales 24 horas.'} Llama al {negocio.telefono}.</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function Servicios() {
  const puntos = ['bg-rosa', 'bg-azul', 'bg-verde', 'bg-amarillo'];
  return (
    <section id="servicios" className="noche relative overflow-hidden bg-noche py-20 text-white/85 sm:py-24">
      <span aria-hidden="true" className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-azul/25" />
      <div className="contenedor relative grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div className="min-w-0">
          <h2 className="text-4xl sm:text-5xl">De grandes a pequeñas necesidades</h2>
          <p className="mt-4 text-lg">Desde consulta médica general hasta especialidades y urgencias.</p>
          <p className="mt-4">Para agendar, sus asesores confirman la disponibilidad por teléfono. Si es una emergencia, sus hospitales 24 horas te reciben a cualquier hora.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa('Hola, quiero agendar una cita en Animalitos.')} className="btn !bg-white !text-noche hover:!bg-amarillo" target="_blank" rel="noopener"><IconoWa /> Agendar una cita</a>
            <a href={tel} className="btn-claro"><IconoTel /> {negocio.telefono}</a>
          </div>
        </div>
        <ul className="grid min-w-0 grid-cols-1 gap-x-8 sm:grid-cols-2">
          {servicios.map((s, n) => (
            <li key={s} className="flex items-center gap-3 border-b border-white/10 py-3 text-lg font-bold text-white">
              <span aria-hidden="true" className={`h-3 w-3 shrink-0 rounded-full ${puntos[n % 4]}`} />{s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Instalaciones() {
  const fotos = ['miguel-angel', 'polanco', 'interlomas'].map((id) => sucursales.find((s) => s.id === id)!);
  const zona = sucursales.find((s) => s.id === 'zona-esmeralda')!;
  return (
    <section id="instalaciones" className="bg-cielo py-20 sm:py-24">
      <div className="contenedor">
        <div className="max-w-2xl">
          <h2 className="text-4xl sm:text-5xl">Tecnología e instalaciones para cuidar a tu mejor amigo</h2>
          <p className="mt-4 text-lg">Un equipo de auténticos pet-lovers, expertos en cada área, en quirófanos y consultorios como estos.</p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          <figure className="col-span-2 min-w-0">
            <Img f={zona.foto!} className="aspect-[16/9] w-full rounded-3xl object-cover" />
            <figcaption className="mt-2 text-sm">Zona Esmeralda</figcaption>
          </figure>
          <figure className="col-span-2 min-w-0">
            <Img f={consultorio} className="aspect-[16/9] w-full rounded-3xl object-cover" />
            <figcaption className="mt-2 text-sm">“Ultra cute, ultra love”</figcaption>
          </figure>
          {fotos.map((s) => (
            <figure key={s.id} className="min-w-0">
              <Img f={s.foto!} className="aspect-[3/4] w-full rounded-3xl object-cover" />
              <figcaption className="mt-2 text-sm">{s.nombre}</figcaption>
            </figure>
          ))}
          <div className="grid min-w-0 place-items-center rounded-3xl bg-rosa-hondo p-5 text-center text-white">
            <p className="text-xl font-black">Seis hospitales, cinco abiertos las 24 horas</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="noche bg-noche pb-28 pt-12 text-sm text-white/80 md:pb-10">
      <div className="contenedor flex flex-wrap items-center justify-between gap-6">
        <img src={foto('logo-blanco.svg')} alt="Animalitos" width={809} height={228} className="h-9 w-auto" />
        <ul className="flex flex-wrap gap-5">
          <li><a href={negocio.instagram} className="hover:text-amarillo" target="_blank" rel="noopener">Instagram</a></li>
          <li><a href={negocio.facebook} className="hover:text-amarillo" target="_blank" rel="noopener">Facebook</a></li>
          <li><a href={negocio.tiktok} className="hover:text-amarillo" target="_blank" rel="noopener">TikTok</a></li>
          <li><a href="https://animalitosmexico.com/autofacturacion" className="hover:text-amarillo" target="_blank" rel="noopener">Factúrate</a></li>
        </ul>
      </div>
      <p className="contenedor mt-6">Tel. {negocio.telefono} en todos sus hospitales. WhatsApp {negocio.whatsappVisible}.</p>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-noche text-[0.8rem] font-bold text-white md:hidden">
      <a href={waGeneral} className="flex flex-col items-center gap-1 bg-azul-hondo py-3" target="_blank" rel="noopener"><IconoWa />WhatsApp</a>
      <a href={tel} className="flex flex-col items-center gap-1 bg-rosa-hondo py-3"><IconoTel />Llamar</a>
      <a href="#cerca" className="flex flex-col items-center gap-1 py-3"><IconoPin />Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#cerca" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-amarillo focus:px-4 focus:py-2 focus:text-noche">Ir a sucursales</a>
      <Encabezado />
      <main>
        <Portada />
        <Buscador />
        <Servicios />
        <Instalaciones />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
