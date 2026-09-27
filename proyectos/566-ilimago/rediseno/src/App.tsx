import { useState } from 'react';
import {
  negocio,
  contacto,
  servicios,
  planes,
  nosotros,
  clientes,
  type Plan,
} from './data/content';

// ============================================================
// ICONOS SVG inline (sin dependencia externa)
// ============================================================
function IconWA({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.533 5.857L.057 23.5a.5.5 0 0 0 .61.61l5.66-1.484A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.933 0-3.742-.523-5.29-1.433l-.38-.226-3.934 1.032 1.051-3.838-.248-.394A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

function IconPhone({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.84 12 19.79 19.79 0 0 1 1.81 3.43 2 2 0 0 1 3.78 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconMap({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconCheck({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 8l4 4 8-8" />
    </svg>
  );
}

function IconFB({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

function IconIG({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function IconLI({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// ============================================================
// UTILIDADES
// ============================================================
function formatPeso(n: number) {
  return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(n);
}

// ============================================================
// COMPONENTES
// ============================================================

function NavBar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 flex h-[4.5rem] items-center border-b border-white/8 bg-fondo/90 backdrop-blur-md"
      aria-label="Navegación principal"
    >
      <div className="contenedor flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <img
            src={`${import.meta.env.BASE_URL}ilimago-blanco.svg`}
            alt="ilimago logo"
            width={120}
            height={32}
            className="h-8 w-auto"
          />
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm text-tinta2">
          <a href="#servicios" className="hover:text-blanco transition-colors">Servicios</a>
          <a href="#planes" className="hover:text-blanco transition-colors">Planes</a>
          <a href="#clientes" className="hover:text-blanco transition-colors">Clientes</a>
          <a href="#nosotros" className="hover:text-blanco transition-colors">Nosotros</a>
          <a
            href={contacto.waBase}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primario !py-2 !px-4"
          >
            <IconWA size={16} />
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-[4.5rem]"
      aria-labelledby="hero-titulo"
    >
      {/* Gradiente de fondo */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(61,107,255,0.18) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="contenedor relative z-10 py-20 text-center">
        <span className="mb-6 inline-block rounded-full border border-acento/40 bg-acento/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-acento2">
          {negocio.taglineBadge}
        </span>

        <h1
          id="hero-titulo"
          className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-blanco sm:text-5xl lg:text-6xl"
        >
          {negocio.taglineH1}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-tinta2 sm:text-lg leading-relaxed">
          {negocio.subtitulo}
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={contacto.waBase}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primario text-base !px-8 !py-3.5"
          >
            <IconWA size={20} />
            Iniciar proyecto
          </a>
          <a href="#servicios" className="btn-secundario text-base !px-8 !py-3.5">
            Ver soluciones
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-3">
          <span className="text-4xl font-extrabold text-acento">{negocio.anos}</span>
          <span className="text-sm text-tinta2 text-left leading-tight">
            años de<br />trayectoria
          </span>
          <span className="mx-4 h-8 w-px bg-white/15" aria-hidden="true" />
          <span className="text-4xl font-extrabold text-acento">28+</span>
          <span className="text-sm text-tinta2 text-left leading-tight">
            marcas que<br />confían en nosotros
          </span>
        </div>
      </div>
    </section>
  );
}

function Servicios() {
  return (
    <section id="servicios" className="py-20" aria-labelledby="servicios-titulo">
      <div className="contenedor">
        <p className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-acento">
          Especialidades
        </p>
        <h2
          id="servicios-titulo"
          className="mb-4 text-center text-3xl font-extrabold text-blanco sm:text-4xl"
        >
          Nuestras Soluciones
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-tinta2">
          Un ecosistema completo de servicios digitales para hacer crecer tu empresa.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map((s) => (
            <article key={s.id} className="card group flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.imagen}
                  alt={s.alt}
                  width={480}
                  height={192}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  style={{ transition: 'transform 0.4s ease' }}
                  onMouseEnter={(e) => {
                    if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
                      (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)';
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(10,10,20,0.7) 0%, transparent 60%)' }}
                  aria-hidden="true"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-2 text-lg font-bold text-blanco">{s.nombre}</h3>
                <p className="flex-1 text-sm text-tinta2 leading-relaxed">{s.descripcion}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// CALCULADORA DE INVERSIÓN (elemento memorable)
// ============================================================
function Planes() {
  const [planActivo, setPlanActivo] = useState<Plan>(planes[1]); // Plan Acelera por defecto

  const inversion = planActivo.precio * planActivo.meses;

  return (
    <section id="planes" className="py-20" aria-labelledby="planes-titulo">
      <div className="contenedor">
        <p className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-acento">
          Inversión Táctica
        </p>
        <h2
          id="planes-titulo"
          className="mb-2 text-center text-3xl font-extrabold text-blanco sm:text-4xl"
        >
          ¿Cuánto es tu inversión mínima?
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-tinta2">
          Selecciona un plan y calcula tu inversión total. Sin sorpresas.
        </p>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* Selectores de plan */}
          <div className="flex flex-col gap-4">
            {planes.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPlanActivo(p)}
                className={`plan-selector${planActivo.id === p.id ? ' activo' : ''}`}
                aria-pressed={planActivo.id === p.id}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-blanco">{p.nombre}</span>
                      {p.recomendado && <span className="badge-rec">Recomendado</span>}
                    </div>
                    <p className="text-xs text-tinta2 leading-snug">{p.subtitulo}</p>
                  </div>
                  <span className="shrink-0 mt-0.5 text-right">
                    <span className="block text-lg font-extrabold text-acento">
                      {formatPeso(p.precio)}
                    </span>
                    <span className="text-xs text-tinta2">/mes</span>
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.plataformas.map((plat) => (
                    <span
                      key={plat}
                      className="rounded-full bg-white/8 px-2 py-0.5 text-xs text-tinta2"
                    >
                      {plat}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>

          {/* Panel de resultado */}
          <div
            className="card p-6 lg:sticky lg:top-24"
            aria-live="polite"
            aria-label="Detalle de inversión"
          >
            <div className="mb-2 flex items-center gap-2">
              <h3 className="text-xl font-bold text-blanco">{planActivo.nombre}</h3>
              {planActivo.recomendado && <span className="badge-rec">Recomendado</span>}
            </div>
            <p className="mb-5 text-sm text-tinta2">{planActivo.subtitulo}</p>

            {/* Números clave */}
            <div className="mb-6 grid grid-cols-3 gap-3 rounded-xl bg-fondo3 p-4">
              <div className="text-center">
                <div className="text-xl font-extrabold text-blanco">{formatPeso(planActivo.precio)}</div>
                <div className="text-xs text-tinta2">por mes</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-extrabold text-blanco">{planActivo.meses}</div>
                <div className="text-xs text-tinta2">meses mín.</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-extrabold text-blanco">{planActivo.contenidos}</div>
                <div className="text-xs text-tinta2">contenidos/mes</div>
              </div>
            </div>

            {/* Inversión mínima total */}
            <div className="mb-6 rounded-2xl bg-acento/15 border border-acento/30 p-5 text-center">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-acento">
                Inversión mínima total
              </p>
              <p
                className="text-4xl font-extrabold text-blanco"
                style={{ textShadow: '0 0 24px rgba(61,107,255,0.5)' }}
              >
                {formatPeso(inversion)}
              </p>
              <p className="mt-1 text-xs text-tinta2">
                {formatPeso(planActivo.precio)} × {planActivo.meses} meses
              </p>
            </div>

            {/* Lista de características */}
            <ul className="mb-6 flex flex-col gap-2">
              {planActivo.caracteristicas.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-tinta2">
                  <span className="mt-0.5 shrink-0 text-acento">
                    <IconCheck size={14} />
                  </span>
                  {c}
                </li>
              ))}
            </ul>

            <a
              href={planActivo.waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primario w-full justify-center text-base !py-3.5"
            >
              <IconWA size={20} />
              Cotizar {planActivo.nombre}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Clientes() {
  // Duplicamos el array para el ticker infinito
  const doble = [...clientes, ...clientes];

  return (
    <section id="clientes" className="py-20 overflow-hidden" aria-labelledby="clientes-titulo">
      <div className="contenedor mb-12">
        <p className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-acento">
          Prueba Social
        </p>
        <h2
          id="clientes-titulo"
          className="mb-4 text-center text-3xl font-extrabold text-blanco sm:text-4xl"
        >
          Marcas que confían en nosotros
        </h2>
        <p className="mx-auto max-w-xl text-center text-tinta2">
          Cuando inviertes con ilimago, inviertes en la garantía de éxito de tu proyecto. Construimos relaciones a largo plazo basadas en resultados reales y métricas de negocio estables.
        </p>
      </div>

      {/* Ticker de logos */}
      <div
        className="relative"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)' }}
        aria-hidden="true"
      >
        <div className="flex ticker-track" style={{ width: 'max-content' }}>
          {doble.map((c, i) => (
            <div
              key={`${c.nombre}-${i}`}
              className="mx-4 flex h-16 w-32 shrink-0 items-center justify-center rounded-xl bg-white/5 px-3"
            >
              <img
                src={c.archivo}
                alt={`Logo de ${c.nombre}`}
                width={96}
                height={40}
                loading="lazy"
                className="max-h-10 w-auto object-contain filter brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Grid visible para lectores de pantalla y cuando no hay animación */}
      <div className="contenedor mt-8 sr-only">
        <ul className="grid grid-cols-4 gap-4 sm:grid-cols-6 lg:grid-cols-7">
          {clientes.map((c) => (
            <li key={c.nombre}>
              <img
                src={c.archivo}
                alt={`Logo de ${c.nombre}`}
                width={80}
                height={32}
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Nosotros() {
  return (
    <section id="nosotros" className="py-20" aria-labelledby="nosotros-titulo">
      <div className="contenedor">
        <p className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-acento">
          Autoridad
        </p>
        <h2
          id="nosotros-titulo"
          className="mb-4 text-center text-3xl font-extrabold text-blanco sm:text-4xl"
        >
          Acerca de nosotros
        </h2>

        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Descripción y métricas */}
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="text-6xl font-extrabold text-acento leading-none">{negocio.anos}</span>
              <span className="text-lg font-semibold text-blanco leading-snug">
                años haciendo<br />lo que nos apasiona.
              </span>
            </div>
            <p className="mb-6 text-tinta2 leading-relaxed">{nosotros.descripcion}</p>

            <div className="flex flex-col gap-5">
              <div className="rounded-xl border border-white/8 bg-fondo2 p-4">
                <p className="mb-1 text-xs font-bold uppercase tracking-wider text-acento">Visión</p>
                <p className="text-sm text-tinta2">{nosotros.vision}</p>
              </div>
              <div className="rounded-xl border border-white/8 bg-fondo2 p-4">
                <p className="mb-1 text-xs font-bold uppercase tracking-wider text-acento">Misión</p>
                <p className="text-sm text-tinta2">{nosotros.mision}</p>
              </div>
              <div className="rounded-xl border border-white/8 bg-fondo2 p-4">
                <p className="mb-1 text-xs font-bold uppercase tracking-wider text-acento">Valores</p>
                <p className="text-sm text-tinta2">{nosotros.valores}</p>
              </div>
            </div>
          </div>

          {/* Equipo y sectores */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="mb-4 text-lg font-bold text-blanco">
                Talento haciendo equipo
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {nosotros.equipo.map((m) => (
                  <div key={m.rol} className="rounded-xl border border-white/8 bg-fondo2 p-4">
                    <p className="mb-1 text-sm font-bold text-blanco">{m.rol}</p>
                    <p className="text-xs text-tinta2 leading-snug">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-bold text-blanco">
                Sectores para los que trabajamos
              </h3>
              <div className="flex flex-wrap gap-2">
                {nosotros.sectores.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-tinta2"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/8 bg-fondo2 py-12">
      <div className="contenedor">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo y descripción */}
          <div className="lg:col-span-2">
            <img
              src={`${import.meta.env.BASE_URL}ilimago-blanco.svg`}
              alt="ilimago logo"
              width={120}
              height={32}
              loading="lazy"
              className="mb-4 h-8 w-auto"
            />
            <p className="mb-4 max-w-xs text-sm text-tinta2 leading-relaxed">
              Agencia creativa premium de marketing digital. Estrategia, branding y desarrollo web con resultados reales.
            </p>
            <div className="flex gap-3">
              <a
                href={contacto.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-tinta2 hover:border-acento hover:text-acento transition-colors"
                aria-label="Facebook de ilimago"
              >
                <IconFB size={16} />
              </a>
              <a
                href={contacto.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-tinta2 hover:border-acento hover:text-acento transition-colors"
                aria-label="Instagram de ilimago"
              >
                <IconIG size={16} />
              </a>
              <a
                href={contacto.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-tinta2 hover:border-acento hover:text-acento transition-colors"
                aria-label="LinkedIn de ilimago"
              >
                <IconLI size={16} />
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="mb-4 text-sm font-bold text-blanco uppercase tracking-wider">Contacto</h4>
            <ul className="flex flex-col gap-3 text-sm text-tinta2">
              <li>
                <a
                  href={contacto.waBase}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-blanco transition-colors"
                >
                  <IconWA size={16} />
                  {contacto.telefono}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contacto.email}`}
                  className="hover:text-blanco transition-colors"
                >
                  {contacto.email}
                </a>
              </li>
              <li>
                <a
                  href={contacto.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-blanco transition-colors"
                >
                  <IconMap size={16} />
                  <span>{negocio.direccion}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="mb-4 text-sm font-bold text-blanco uppercase tracking-wider">Especialidades</h4>
            <ul className="flex flex-col gap-2 text-sm text-tinta2">
              {servicios.map((s) => (
                <li key={s.id}>
                  <a href="#servicios" className="hover:text-blanco transition-colors">
                    {s.nombre}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 border-t border-white/8 pt-8 text-center text-xs text-tinta2 sm:flex-row sm:justify-between">
          <p>© 2026 Ilimago Company S.A. de C.V. Todos los derechos reservados.</p>
          <p>Ciudad de México, CDMX</p>
        </div>
      </div>
    </footer>
  );
}

// Barra inferior fija para móvil
function BarraMovil() {
  return (
    <div className="barra-movil md:hidden" role="navigation" aria-label="Acciones rápidas">
      <a
        href={contacto.waBase}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <IconWA size={22} />
        <span>WhatsApp</span>
      </a>
      <a
        href={contacto.telLink}
        aria-label="Llamar a ilimago"
      >
        <IconPhone size={22} />
        <span>Llamar</span>
      </a>
      <a
        href={contacto.maps}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ver ubicación en Maps"
      >
        <IconMap size={22} />
        <span>Maps</span>
      </a>
    </div>
  );
}

// ============================================================
// APP
// ============================================================
export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Servicios />
        <Planes />
        <Clientes />
        <Nosotros />
      </main>
      <Footer />
      <BarraMovil />
    </>
  );
}
