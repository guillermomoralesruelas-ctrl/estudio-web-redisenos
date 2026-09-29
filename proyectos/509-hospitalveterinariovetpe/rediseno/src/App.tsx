import { useEffect, useState } from 'react';
import { archivo, foto, galeria, intro, negocio, servicios, sucursales, tel24, telHref, wa, waCita, type Sucursal } from './data/content';

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

const secciones = [['#urgencia', '¿Es una emergencia?'], ['#servicios', 'Servicios'], ['#sucursales', 'Sucursales']] as const;

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-azul/10 bg-white/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" aria-label="VetPets Hospitales Veterinarios, ir al inicio"><img src={archivo('logo.png')} alt="VetPets Hospitales Veterinarios" width={480} height={117} className="h-9 w-auto" /></a>
        <nav aria-label="Secciones" className="hidden lg:block">
          <ul className="flex gap-7">{secciones.map(([h, t]) => <li key={h}><a href={h} className="text-pizarra hover:text-azul">{t}</a></li>)}</ul>
        </nav>
        <a href={tel24} className="btn-rojo !min-h-[42px] !px-4 !py-2"><IconoTel /> <span className="hidden sm:inline">Urgencias 24/7</span><span className="sm:hidden">24/7</span></a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="bg-cielo">
      <div className="contenedor grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        <div>
          <p className="font-semibold text-rojo">Hospital veterinario en Zapopan, Jalisco</p>
          <h1 className="mt-3 text-[2.6rem] sm:text-[3.6rem]">Medicina veterinaria con calidad humana</h1>
          <p className="mt-5 max-w-xl text-[1.08rem] text-pizarra">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#urgencia" className="btn-rojo">¿Es una emergencia?</a>
            <a href={waCita} className="btn-linea" target="_blank" rel="noopener"><IconoWa /> Agenda una cita</a>
          </div>
          <dl className="mt-9 flex flex-wrap gap-x-10 gap-y-3 border-t border-azul/15 pt-6">
            <div><dt className="text-[0.9rem] text-pizarra">Años de experiencia</dt><dd className="font-display text-[1.8rem] font-bold text-azul">{negocio.anios}</dd></div>
            <div><dt className="text-[0.9rem] text-pizarra">Urgencias en Naciones Unidas</dt><dd className="font-display text-[1.8rem] font-bold text-rojo">24/7</dd></div>
          </dl>
        </div>
        <img src={foto('portada-perro')} alt="Médica veterinaria de VetPets con estetoscopio abrazando a un perro que le lame la cara" width={1366} height={784}
          fetchPriority="high" className="aspect-[4/3] w-full rounded-3xl object-cover object-left" />
      </div>
    </section>
  );
}

// Hora de Guadalajara (America/Mexico_City).
function useHora() {
  const leer = () => {
    const p = Object.fromEntries(new Intl.DateTimeFormat('es-MX', { timeZone: 'America/Mexico_City', hour: '2-digit', minute: '2-digit', hour12: false })
      .formatToParts(new Date()).map((x) => [x.type, x.value]));
    return { h: Number(p.hour) % 24, m: Number(p.minute), texto: `${String(Number(p.hour) % 24).padStart(2, '0')}:${p.minute}` };
  };
  const [hora, setHora] = useState(leer);
  useEffect(() => { const t = setInterval(() => setHora(leer()), 30000); return () => clearInterval(t); }, []);
  return hora;
}

function estado(s: Sucursal, h: number) {
  if (s.veinticuatro) return { abierta: true, texto: 'Abierta, 24 horas' };
  if (s.horario) return h >= s.horario[0] && h < s.horario[1] ? { abierta: true, texto: 'Abierta ahora (9 a 21 h)' } : { abierta: false, texto: 'Cerrada ahora (abre a las 9:00)' };
  return { abierta: null, texto: 'Horario no publicado' };
}

const casos = [
  { id: 'urgencia', titulo: 'Es una emergencia', detalle: 'Algo le pasó y no puede esperar a una cita.' },
  { id: 'cirugia', titulo: 'Cirugía o endoscopia', detalle: 'Cirugía general, ortopedia, laparoscopía o un estudio endoscópico.' },
  { id: 'consulta', titulo: 'Consulta, vacuna o desparasitación', detalle: 'Chequeo, vacunas, desparasitación o una consulta de medicina interna.' },
] as const;

function Urgencia() {
  const [caso, setCaso] = useState<string>('urgencia');
  const hora = useHora();
  const nu = sucursales[0];
  return (
    <section id="urgencia" className="oscuro py-16 sm:py-24">
      <div className="contenedor">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="text-[2.2rem] sm:text-[2.9rem]">¿Es una emergencia?</h2>
            <p className="mt-3">Dinos qué necesita tu mascota y te decimos a qué sucursal ir y a quién llamar, con la hora de Guadalajara.</p>
          </div>
          <p className="flex items-center gap-2 font-display text-[1.6rem] text-white" aria-live="polite">
            <span className="pulso h-3 w-3 rounded-full bg-rojo" aria-hidden="true" />Son las {hora.texto}
          </p>
        </div>
        <div className="mt-8 grid gap-3 md:grid-cols-3" role="group" aria-label="Qué necesita tu mascota">
          {casos.map((c) => (
            <button key={c.id} type="button" aria-pressed={c.id === caso} onClick={() => setCaso(c.id)}
              className={`rounded-2xl border-2 p-5 text-left transition-colors ${c.id === caso ? (c.id === 'urgencia' ? 'border-rojo bg-rojo text-white' : 'border-celeste bg-white text-noche') : 'border-white/20 hover:border-white/60'}`}>
              <span className="block font-display text-[1.3rem] font-bold">{c.titulo}</span>
              <span className={`mt-1 block text-[0.95rem] ${c.id === caso ? '' : 'text-white/75'}`}>{c.detalle}</span>
            </button>
          ))}
        </div>

        <div className="mt-8" aria-live="polite">
          {caso !== 'consulta' ? (
            <div className="grid overflow-hidden rounded-3xl bg-white text-noche lg:grid-cols-[1fr_1.1fr]">
              <img src={foto(nu.foto!)} alt={nu.alt!} width={900} height={873} loading="lazy" className="h-64 w-full object-cover lg:h-full" />
              <div className="p-6 sm:p-9">
                <p className="font-semibold text-rojo">{caso === 'urgencia' ? `Son las ${hora.texto}: está abierta, 24 horas` : 'Servicio de hospital con quirófanos equipados'}</p>
                <h3 className="mt-1 text-[2rem] !text-azul">Ve a Naciones Unidas</h3>
                <p className="mt-2 flex gap-2 text-pizarra"><IconoPin className="mt-1 h-5 w-5 shrink-0 text-azul" />{nu.direccion}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {nu.telefonos.map((t) => <a key={t} href={telHref(t)} className="btn-rojo text-[1.1rem]"><IconoTel /> {t}</a>)}
                </div>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a href={nu.mapa} className="btn-linea" target="_blank" rel="noopener"><IconoPin /> Cómo llegar</a>
                  {caso === 'cirugia' ? <a href={wa('Hola, quiero información sobre una cirugía o endoscopia para mi mascota en VetPets Naciones Unidas.')} className="btn-linea" target="_blank" rel="noopener"><IconoWa /> Preguntar por WhatsApp</a> : null}
                </div>
                {caso === 'urgencia' ? <p className="mt-5 text-[0.95rem] text-pizarra">Las situaciones de emergencia pueden surgir en cualquier momento: llama mientras vas en camino.</p> : null}
              </div>
            </div>
          ) : (
            <ul className="grid gap-4 md:grid-cols-2">
              {sucursales.map((s) => {
                const e = estado(s, hora.h);
                return (
                  <li key={s.id} className="rounded-2xl bg-white p-6 text-noche">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-[1.5rem] !text-azul">{s.nombre}</h3>
                      <span className={`rounded-full px-3 py-1 text-[0.85rem] font-semibold ${e.abierta === true ? 'bg-[#e3f4e8] text-[#1d6b34]' : e.abierta === false ? 'bg-[#fde8eb] text-rojo' : 'bg-cielo text-pizarra'}`}>{e.texto}</span>
                    </div>
                    <p className="mt-2 text-[0.97rem] text-pizarra">{s.direccion}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {s.telefonos.map((t) => <a key={t} href={telHref(t)} className="btn !min-h-[44px] !px-4 !py-2"><IconoTel /> {t}</a>)}
                      <a href={s.mapa} className="enlace self-center px-2 !text-azul" target="_blank" rel="noopener">Cómo llegar</a>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

function Servicios() {
  return (
    <section id="servicios" className="py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="max-w-2xl text-[2.2rem] sm:text-[2.9rem]">Servicios veterinarios con calidad humana</h2>
        <p className="mt-3 max-w-3xl text-pizarra">
          Un hospital veterinario en Zapopan con una amplia gama de servicios especializados para el cuidado integral de su
          mascota.
        </p>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <img src={foto('portada-quirofano')} alt="Quirófano de VetPets con mesa de cirugía, máquina de anestesia y monitores" width={1366} height={784} loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover" />
          <div className="grid gap-5 sm:grid-cols-2">
            {servicios.map((s) => (
              <article key={s.titulo} className="rounded-2xl bg-cielo p-6">
                <h3 className="text-[1.3rem]">{s.titulo}</h3>
                <p className="mt-1 font-semibold">{s.lema}</p>
                <ul className="mt-3 space-y-1.5 text-[0.97rem] text-pizarra">{s.puntos.map((p) => <li key={p}>{p}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Sucursales() {
  return (
    <section id="sucursales" className="bg-cielo py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="text-[2.2rem] sm:text-[2.9rem]">Nuestras sucursales en Zapopan</h2>
        <p className="mt-3 max-w-3xl text-pizarra">Cada una con personal capacitado para consultas de rutina, exámenes o cirugías. Tres están dentro de PETCO.</p>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {sucursales.map((s) => (
            <li key={s.id} className="flex min-w-0 flex-col overflow-hidden rounded-3xl bg-white">
              {s.foto ? <img src={foto(s.foto)} alt={s.alt!} width={900} height={873} loading="lazy" className="aspect-[16/9] w-full object-cover" />
                : <div className="grid aspect-[16/9] w-full place-items-center bg-azul/10 p-6 text-center font-display text-[1.3rem] font-bold text-azul">Dentro de PETCO Bosque Real</div>}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-[1.5rem]">{s.nombre}</h3>
                <p className={`mt-1 font-semibold ${s.veinticuatro ? 'text-rojo' : 'text-noche'}`}>{s.nota}</p>
                <p className="mt-2 flex flex-1 gap-2 text-pizarra"><IconoPin className="mt-1 h-5 w-5 shrink-0 text-azul" />{s.direccion}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.telefonos.map((t) => <a key={t} href={telHref(t)} className={`${s.veinticuatro ? 'btn-rojo' : 'btn'} !min-h-[44px] !px-4 !py-2`}><IconoTel /> {t}</a>)}
                  <a href={s.mapa} className="enlace self-center px-2" target="_blank" rel="noopener">Cómo llegar</a>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <h3 className="mt-14 text-[1.6rem]">Instalaciones de primera</h3>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <img src={foto('portada-gato')} alt="Veterinario de VetPets con tatuajes revisando a un gato sobre la mesa" width={1366} height={784} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" />
          {galeria.map((g) => <img key={g.foto} src={foto(g.foto)} alt={g.alt} width={900} height={870} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" />)}
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro pb-28 pt-12 lg:pb-12">
      <div className="contenedor grid gap-8 sm:grid-cols-2">
        <div>
          <p className="font-display text-[1.6rem] font-bold text-white">VetPets Hospitales Veterinarios</p>
          <p className="mt-2">Contáctenos hoy mismo para programar una revisión veterinaria en Zapopan.</p>
          <a href={waCita} className="btn mt-5 !bg-white !text-azul" target="_blank" rel="noopener"><IconoWa /> WhatsApp {negocio.whatsappTexto}</a>
        </div>
        <div className="sm:text-right">
          <ul className="space-y-1 text-[0.97rem]">
            {sucursales.map((s) => <li key={s.id}><strong className="text-white">{s.nombre}:</strong> {s.telefonos.map((t, i) => <span key={t}>{i ? ' / ' : ''}<a href={telHref(t)} className="enlace">{t}</a></span>)}</li>)}
          </ul>
          <p className="mt-4 flex gap-5 sm:justify-end">
            <a href={negocio.facebook} className="enlace" target="_blank" rel="noopener">Facebook</a>
            <a href={negocio.instagram} className="enlace" target="_blank" rel="noopener">Instagram</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/15 bg-noche text-white lg:hidden">
      <a href={tel24} className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 bg-rojo text-[0.9rem] font-semibold"><IconoTel />Urgencias</a>
      <a href={waCita} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-semibold"><IconoWa />WhatsApp</a>
      <a href={sucursales[0].mapa} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-semibold"><IconoPin />Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#principal" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2">Saltar al contenido</a>
      <Encabezado />
      <main id="principal">
        <Portada />
        <Urgencia />
        <Servicios />
        <Sucursales />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
