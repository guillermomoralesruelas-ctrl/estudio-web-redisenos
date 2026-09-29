import { useState } from 'react';
import {
  analisis, app, archivo, cortes, foto, franquicia, horario, negocio, primeraVisita, sucursales, wa, waCita,
} from './data/content';

function IconoWa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.2.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z" />
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

function Tijeras({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M8.1 8.1 20 20M8.1 15.9 20 4M14 12l-2 0" />
    </svg>
  );
}

const secciones = [
  ['#sellos', 'Sellos'],
  ['#analisis', 'Análisis facial'],
  ['#app', 'La app'],
  ['#sucursales', 'Sucursales'],
  ['#franquicias', 'Franquicias'],
] as const;

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-oro/15 bg-carbon/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" aria-label="Barberías Premium, ir al inicio">
          <img src={archivo('logo.png')} alt="Barberías Premium" width={480} height={222} className="h-10 w-auto" />
        </a>
        <nav aria-label="Secciones" className="hidden lg:block">
          <ul className="flex gap-7 text-[0.95rem]">
            {secciones.map(([href, t]) => <li key={href}><a href={href} className="text-hueso/80 hover:text-oro">{t}</a></li>)}
          </ul>
        </nav>
        <div className="hidden items-center gap-2 sm:flex">
          <a href={waCita} className="btn-linea !min-h-[42px] !px-4 !py-2" target="_blank" rel="noopener" aria-label="WhatsApp"><IconoWa /></a>
          <a href={negocio.reservar} className="btn !min-h-[42px] !py-2" target="_blank" rel="noopener">Reservar</a>
        </div>
      </div>
    </header>
  );
}

function Portada() {
  const p = primeraVisita;
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="contenedor grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        <div>
          <p className="text-oropalido">Ciudad del Carmen, desde {negocio.desde}</p>
          <h1 className="mt-3 text-[2.9rem] sm:text-[4.4rem]">Barberías en Ciudad del Carmen</h1>
          <p className="mt-5 max-w-xl text-[1.08rem] text-hueso/85">
            Cortes de cabello, barba y asesoría de estilo en tres sucursales. Tu barbero guarda tus looks y preferencias en
            Premium ID: tu siguiente corte no empieza de cero.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={negocio.reservar} className="btn" target="_blank" rel="noopener"><IconoCalendario /> Reservar mi cita</a>
            <a href={waCita} className="btn-linea" target="_blank" rel="noopener"><IconoWa /> WhatsApp</a>
          </div>
        </div>
        <div className="grid gap-4">
          <img src={foto('sucursal-plaza-real')} alt={sucursales[0].alt} width={1000} height={731} fetchPriority="high"
            className="aspect-[4/3] w-full rounded-xl object-cover" />
          <div className="rounded-xl border border-oro/40 bg-grafito p-5 sm:p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-display text-[1.3rem] uppercase text-hueso">¿Primera vez? {p.nombre}</p>
              <p className="font-display text-[2rem] leading-none text-oro">{p.precio}<span className="ml-2 text-[1rem] text-gris">{p.minutos} min</span></p>
            </div>
            <p className="mt-2 text-[0.95rem] text-hueso/80">{p.incluye.join(', ')}.</p>
            <p className="mt-1 text-[0.95rem] text-oropalido">¿Quieres barba? Agrégala por {p.barba.precio}, {p.barba.minutos} minutos.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const frecuencias = [2, 3, 4, 5, 6];

function TarjetaDeSellos() {
  const [semanas, setSemanas] = useState(3);
  const hoy = new Date();
  const fmt = (d: Date) => d.toLocaleDateString('es-MX', { day: 'numeric', month: 'short', timeZone: 'America/Merida' });
  const fechas = Array.from({ length: 7 }, (_, i) => new Date(hoy.getTime() + i * semanas * 7 * 86400000));
  const gratis = fechas[6];
  const gratisLargo = gratis.toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'America/Merida' });
  return (
    <section id="sellos" className="claro py-16 sm:py-24">
      <div className="contenedor">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:items-center lg:gap-14">
          <div>
            <h2 className="text-[2.3rem] sm:text-[3rem]">¿Cada cuánto te cortas?</h2>
            <p className="mt-4">
              En su app, seis cortes pagados elegibles te dan un corte gratis. Elige cada cuánto vienes y mira cuándo te toca
              el tuyo, empezando hoy.
            </p>
            <div className="mt-7" role="group" aria-label="Cada cuántas semanas vienes">
              <p className="font-semibold text-carbon">Vengo cada…</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {frecuencias.map((n) => (
                  <button key={n} type="button" aria-pressed={n === semanas} onClick={() => setSemanas(n)}
                    className={`min-h-[46px] rounded-md border-2 px-4 font-display text-[1.05rem] uppercase transition-colors ${n === semanas ? 'border-carbon bg-carbon text-oro' : 'border-carbon/25 text-carbon hover:border-carbon'}`}>
                    {n} semanas
                  </button>
                ))}
              </div>
            </div>
            <p className="mt-7 text-[1.1rem] text-carbon" aria-live="polite">
              Tu corte gratis llegaría alrededor del <strong className="text-bronce">{gratisLargo}</strong>, en tu séptima visita.
            </p>
            <p className="mt-2 text-[0.9rem]">Beneficios según tu perfil, sucursal y versión de la app. Fechas aproximadas.</p>
          </div>

          <div className="rounded-2xl bg-carbon p-6 text-hueso shadow-2xl shadow-carbon/30 sm:p-9">
            <div className="flex items-center justify-between gap-4 border-b border-oro/25 pb-4">
              <img src={archivo('logo.png')} alt="" aria-hidden="true" width={480} height={222} className="h-9 w-auto" />
              <p className="font-display text-[1rem] uppercase tracking-wider text-oropalido">Tarjeta de sellos</p>
            </div>
            <ol className="mt-6 grid grid-cols-4 gap-3 sm:grid-cols-7 sm:gap-3">
              {fechas.map((d, i) => {
                const esGratis = i === 6;
                return (
                  <li key={i} className="min-w-0 text-center">
                    <div className={`sello ${esGratis ? 'gratis' : 'lleno'}`}>
                      <span className="marca font-display text-[0.95rem] uppercase leading-none">
                        {esGratis ? 'Gratis' : <Tijeras className="h-6 w-6" />}
                      </span>
                    </div>
                    <p className={`mt-2 text-[0.8rem] ${esGratis ? 'font-semibold text-oro' : 'text-gris'}`}>{i === 0 ? 'Hoy' : fmt(d)}</p>
                  </li>
                );
              })}
            </ol>
            <p className="mt-6 text-[0.95rem] text-hueso/80">Seis visitas pagadas, una cada {semanas} semanas. La séptima va por la casa.</p>
            <a href={negocio.reservar} className="btn mt-6 w-full sm:w-auto" target="_blank" rel="noopener"><IconoCalendario /> Reservar la primera</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Cortes() {
  return (
    <section className="py-16 sm:py-20">
      <div className="contenedor">
        <h2 className="text-[2.2rem] sm:text-[2.8rem]">Cortes hechos en la silla</h2>
        <p className="mt-3 max-w-2xl text-hueso/80">Antes de empezar, habla con tu barbero sobre largos, remolinos, textura y el tiempo que dedicas a peinarte.</p>
        <ul className="mt-9 grid grid-cols-3 gap-3 sm:gap-5">
          {cortes.map((c) => (
            <li key={c.foto}>
              <img src={foto(c.foto)} alt={`Corte ${c.titulo.toLowerCase()} hecho en Barberías Premium, visto de lado`} width={375} height={375} loading="lazy"
                className="aspect-square w-full rounded-xl object-cover" />
              <p className="mt-3 font-display text-[0.95rem] uppercase leading-tight text-oropalido sm:text-[1.15rem]">{c.titulo}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Analisis() {
  return (
    <section id="analisis" className="border-y border-oro/15 bg-grafito py-16 sm:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <h2 className="text-[2.2rem] sm:text-[2.8rem]">Análisis facial avanzado</h2>
          <p className="mt-4 text-hueso/85">
            Un solo reporte para entender qué corte, peinado y lentes te favorecen. Hecho con tus proporciones, tu cabello y tu
            forma de vivir.
          </p>
          <dl className="mt-8 grid grid-cols-3 gap-4">
            {analisis.cifras.map(([n, t]) => (
              <div key={t}>
                <dt className="sr-only">{t}</dt>
                <dd><span className="block font-display text-[3rem] leading-none text-oro">{n}</span><span className="mt-2 block text-[0.9rem] text-hueso/80">{t}</span></dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-[0.95rem] text-gris">{analisis.nota}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={negocio.reservar} className="btn" target="_blank" rel="noopener">Reservar mi análisis</a>
            <a href={`${negocio.sitio}/#look-rapido`} className="btn-linea" target="_blank" rel="noopener">Probar un look con mi selfie</a>
          </div>
        </div>
        <ul className="space-y-6">
          {analisis.incluye.map(([t, d]) => (
            <li key={t} className="border-l-2 border-oro pl-5">
              <h3 className="text-[1.3rem]">{t}</h3>
              <p className="mt-2 text-hueso/80">{d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function LaApp() {
  return (
    <section id="app" className="py-16 sm:py-24">
      <div className="contenedor">
        <div className="max-w-2xl">
          <h2 className="text-[2.2rem] sm:text-[2.8rem]">Premium ID y la app: todo lo tuyo en tu teléfono</h2>
          <p className="mt-4 text-hueso/85">
            Cada visita suma datos útiles sobre tu rostro, cabello, remolinos, largos, técnica y forma de peinar. Tu próxima cita,
            tus cortes favoritos y los de tu familia.
          </p>
        </div>
        <dl className="mt-10 grid gap-x-10 gap-y-7 md:grid-cols-2 lg:grid-cols-3">
          {app.map(([t, d]) => (
            <div key={t} className="border-t border-oro/25 pt-4">
              <dt className="font-display text-[1.2rem] uppercase text-oropalido">{t}</dt>
              <dd className="mt-2 text-hueso/80">{d}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={negocio.appIphone} className="btn" target="_blank" rel="noopener">Descargar para iPhone</a>
          <a href={wa('Hola, quiero consultar el acceso a la nueva app de Barberías Premium en Android.')} className="btn-linea" target="_blank" rel="noopener"><IconoWa /> Acceso para Android</a>
        </div>
      </div>
    </section>
  );
}

function Sucursales() {
  return (
    <section id="sucursales" className="claro py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="text-[2.3rem] sm:text-[3rem]">Tres sucursales en Ciudad del Carmen</h2>
        <dl className="mt-4 flex flex-wrap gap-x-8 gap-y-1">
          {horario.map(([d, h]) => <div key={d} className="flex gap-2"><dt>{d}</dt><dd className="font-semibold text-carbon">{h}</dd></div>)}
        </dl>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {sucursales.map((s) => (
            <li key={s.id} className="flex min-w-0 flex-col overflow-hidden rounded-xl bg-white">
              <img src={foto(s.foto)} alt={s.alt} width={s.medidas[0]} height={s.medidas[1]} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-[1.5rem]">{s.nombre}</h3>
                <p className="mt-2 flex flex-1 gap-2"><IconoPin className="mt-1 h-5 w-5 shrink-0 text-bronce" />{s.direccion}.</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <a href={negocio.reservar} className="btn-negro !min-h-[44px] !px-4 !py-2 !text-[0.95rem]" target="_blank" rel="noopener">Reservar aquí</a>
                  <a href={s.mapa} className="enlace self-center px-2" target="_blank" rel="noopener">Cómo llegar</a>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[0.95rem]">En la plataforma eliges sucursal, servicio, barbero y horario, y ves el precio y la duración antes de confirmar.</p>
      </div>
    </section>
  );
}

function Franquicias() {
  return (
    <section id="franquicias" className="py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-14">
        <div>
          <h2 className="text-[2.2rem] sm:text-[2.8rem]">Tu franquicia de barbería, con método Premium</h2>
          <p className="mt-4 text-hueso/85">
            Formación de barberos, software propio (Premium CRM) y apoyo de marketing. Es un negocio que requiere gestión
            activa y atención diaria.
          </p>
          <p className="mt-4 text-[0.95rem] text-gris">{franquicia.detalle}</p>
          <a href={franquicia.url} className="btn mt-7" target="_blank" rel="noopener">Conocer el modelo completo</a>
        </div>
        <ul className="grid grid-cols-2 gap-4">
          {franquicia.cifras.map(([n, t]) => (
            <li key={t} className="rounded-xl border border-oro/30 p-5">
              <p className="font-display text-[2.2rem] leading-none text-oro">{n}</p>
              <p className="mt-2 text-[0.95rem] text-hueso/80">{t}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="border-t border-oro/15 bg-grafito pb-28 pt-12 lg:pb-12">
      <div className="contenedor grid gap-8 sm:grid-cols-2">
        <div>
          <img src={archivo('logo.png')} alt="Barberías Premium" width={480} height={222} loading="lazy" className="h-12 w-auto" />
          <p className="mt-3 text-[0.95rem] text-gris">Barberías en {negocio.ciudad}, desde {negocio.desde}.</p>
        </div>
        <div className="text-[0.95rem] sm:text-right">
          <p>Atención de la marca: <a href={negocio.telefonoHref} className="enlace">{negocio.telefono}</a></p>
          <p className="mt-1"><a href={`mailto:${negocio.correo}`} className="enlace">{negocio.correo}</a></p>
          <p className="mt-3 flex gap-5 sm:justify-end">
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
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-oro/25 bg-carbon text-hueso lg:hidden">
      <a href={negocio.reservar} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 bg-oro font-display text-[0.9rem] uppercase text-carbon"><IconoCalendario />Reservar</a>
      <a href={waCita} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 font-display text-[0.9rem] uppercase"><IconoWa />WhatsApp</a>
      <a href="#sucursales" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 font-display text-[0.9rem] uppercase"><IconoPin />Cómo llegar</a>
    </nav>
  );
}

export default function Pagina() {
  return (
    <>
      <a href="#principal" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-md focus:bg-oro focus:px-4 focus:py-2 focus:text-carbon">Saltar al contenido</a>
      <Encabezado />
      <main id="principal">
        <Portada />
        <TarjetaDeSellos />
        <Cortes />
        <Analisis />
        <LaApp />
        <Sucursales />
        <Franquicias />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
