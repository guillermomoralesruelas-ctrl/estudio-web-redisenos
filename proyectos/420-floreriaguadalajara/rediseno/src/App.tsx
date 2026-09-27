import { useState } from 'react';
import { negocio, horarios, ocasiones, galeria, foto, wa } from './data/content';

// ─── Iconos SVG inline ───────────────────────────────────────────────────────

function IconoWA({ cls = 'w-5 h-5' }: { cls?: string }) {
  return (
    <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function IconoTel({ cls = 'w-5 h-5' }: { cls?: string }) {
  return (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function IconoMapa({ cls = 'w-5 h-5' }: { cls?: string }) {
  return (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function IconoIG({ cls = 'w-5 h-5' }: { cls?: string }) {
  return (
    <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function IconoFB({ cls = 'w-5 h-5' }: { cls?: string }) {
  return (
    <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

// ─── Sección: Encabezado ─────────────────────────────────────────────────────

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 bg-oscuro text-white shadow-lg">
      <div className="contenedor flex items-center justify-between gap-4 py-3">
        {/* Logo */}
        <a href="#inicio" className="shrink-0" aria-label="Florería Guadalajara — inicio">
          <img
            src={foto('logo.webp')}
            alt="Florería Guadalajara"
            width={132}
            height={61}
            className="h-9 w-auto"
          />
        </a>

        {/* Aviso de negocio único */}
        <p className="hidden sm:block text-xs text-green-200 font-bold text-center leading-tight max-w-[14rem]">
          Sin sucursales · Tel. único: 3322106699
        </p>

        {/* CTA escritorio */}
        <a
          href={wa('Hola, quisiera pedir un arreglo floral, ¿me pueden orientar?')}
          className="btn-wa hidden md:inline-flex"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconoWA />
          Pedir por WhatsApp
        </a>

        {/* CTA móvil */}
        <a
          href={wa('Hola, quisiera pedir un arreglo floral, ¿me pueden orientar?')}
          className="btn-wa md:hidden"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pedir por WhatsApp"
        >
          <IconoWA />
          <span className="sr-only">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}

// ─── Sección: Hero ───────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[70svh] items-end bg-oscuro"
      aria-labelledby="h1-principal"
    >
      {/* Foto de fondo */}
      <img
        src={foto('hero-rosas-rojas.webp')}
        alt="Ramo de 100 rosas rojas de Florería Guadalajara"
        width={1600}
        height={1600}
        className="absolute inset-0 h-full w-full object-cover object-center opacity-60"
        fetchPriority="high"
      />

      {/* Degradado */}
      <div className="absolute inset-0 bg-gradient-to-t from-oscuro via-oscuro/40 to-transparent" />

      {/* Contenido */}
      <div className="relative contenedor pb-14 pt-20">
        <p className="text-green-200 font-bold text-sm tracking-wide mb-3">
          Paulina Fernández · más de 20 años de experiencia
        </p>
        <h1
          id="h1-principal"
          className="text-5xl sm:text-6xl lg:text-7xl text-white leading-none mb-4"
          style={{ fontFamily: 'var(--font-titulo)' }}
        >
          Flores que llegan
          <br />
          al corazón
        </h1>
        <p className="text-white/80 text-lg mb-8 max-w-xl">
          Entrega el mismo día en Guadalajara, Zapopan, Tonalá y Tlaquepaque.
          Ordena antes de la 1:00 pm.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={wa('Hola, quisiera pedir un arreglo floral, ¿me pueden orientar?')}
            className="btn-wa text-base px-8 py-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconoWA cls="w-5 h-5" />
            Pedir por WhatsApp
          </a>
          <a
            href="#para-quien"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-8 py-4 text-white text-base font-bold transition hover:bg-white/10"
          >
            Ver arreglos
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Sección: ¿Para quién es? ────────────────────────────────────────────────

function ParaQuien() {
  const [activa, setActiva] = useState(0);
  const oc = ocasiones[activa];

  return (
    <section
      id="para-quien"
      className="py-20 bg-fondo"
      aria-labelledby="tit-para-quien"
    >
      <div className="contenedor">
        <h2
          id="tit-para-quien"
          className="text-4xl sm:text-5xl text-oscuro mb-3"
          style={{ fontFamily: 'var(--font-titulo)' }}
        >
          ¿Para quién es?
        </h2>
        <p className="text-tinta/70 mb-8 max-w-xl">
          Elige la ocasión y te ayudamos a encontrar el arreglo perfecto.
        </p>

        {/* Botones de ocasión */}
        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Elige una ocasión">
          {ocasiones.map((oc, i) => (
            <button
              key={oc.id}
              role="tab"
              aria-selected={i === activa}
              aria-controls="panel-ocasion"
              onClick={() => setActiva(i)}
              className={`ocasion-btn${i === activa ? ' activa' : ''}`}
            >
              <span aria-hidden="true">{oc.icono}</span> {oc.etiqueta}
            </button>
          ))}
        </div>

        {/* Panel de la ocasión seleccionada */}
        <div
          id="panel-ocasion"
          role="tabpanel"
          className="grid md:grid-cols-2 gap-8 items-center"
          style={{ animation: 'fadeIn 0.25s ease' }}
          key={oc.id}
        >
          {/* Foto */}
          <div className="rounded-2xl overflow-hidden aspect-square bg-crema">
            <img
              src={foto(oc.foto)}
              alt={oc.arreglo + ' — Florería Guadalajara'}
              width={oc.fotoW}
              height={oc.fotoH}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-rosa font-bold text-sm mb-2 uppercase tracking-wide">
                {oc.icono} {oc.etiqueta}
              </p>
              <h3
                className="text-3xl sm:text-4xl text-oscuro leading-snug"
                style={{ fontFamily: 'var(--font-titulo)' }}
              >
                {oc.arreglo}
              </h3>
            </div>
            <p className="text-tinta/70 leading-relaxed">
              Hacemos entregas el mismo día. Ordena antes de la 1:00 pm y tu
              arreglo llega fresco el mismo día.
            </p>
            <a
              href={wa(oc.mensaje)}
              className="btn-wa-rosa self-start text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconoWA />
              Pedir por WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Animación CSS para el fade */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        @media (prefers-reduced-motion: reduce) { @keyframes fadeIn { from { opacity: 1; } } }
      `}</style>
    </section>
  );
}

// ─── Sección: La Florista ────────────────────────────────────────────────────

function LaFlorista() {
  return (
    <section
      id="florista"
      className="py-20 bg-oscuro text-white"
      aria-labelledby="tit-florista"
    >
      <div className="contenedor grid md:grid-cols-2 gap-12 items-center">
        {/* Foto */}
        <div className="rounded-2xl overflow-hidden">
          <img
            src={foto('tulipanes-amarillos.webp')}
            alt="Arreglo de tulipanes amarillos frescos de Florería Guadalajara"
            width={1000}
            height={951}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

        {/* Texto */}
        <div>
          <p className="text-green-300 font-bold text-sm tracking-wide mb-4 uppercase">
            Quiénes somos
          </p>
          <h2
            id="tit-florista"
            className="text-4xl sm:text-5xl leading-tight mb-6"
            style={{ fontFamily: 'var(--font-titulo)' }}
          >
            Paulina Fernández,
            <br />
            más de 20 años
            <br />
            creando momentos
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Nosotros tenemos el detalle más bonito y delicado creado por el
            Universo que son las flores. Aquí las cuidamos, las hidratamos y las
            transformamos en un hermoso arreglo floral; el último toque se lo das
            tú con tu mensaje de amor.
          </p>
          <p className="text-white/80 leading-relaxed mb-8">
            Sus diseños están inspirados en su tiempo viviendo en la vibrante
            Ciudad de Nueva York. En su estudio ella fusiona lo clásico, moderno
            y elegante en cada creación. Esta combinación da como resultado ramos
            con una presencia fuerte pero refinada. Cada composición es una obra
            donde mezcla texturas, aromas y colores creando una experiencia
            única, vibrante e inolvidable.
          </p>
          <a
            href={wa('Hola, quisiera hacer un pedido, ¿me pueden ayudar?')}
            className="btn-wa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconoWA />
            Hacer un pedido
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Sección: Galería ────────────────────────────────────────────────────────

function Galeria() {
  return (
    <section
      id="galeria"
      className="py-20 bg-fondo"
      aria-labelledby="tit-galeria"
    >
      <div className="contenedor">
        <h2
          id="tit-galeria"
          className="text-4xl sm:text-5xl text-oscuro mb-3"
          style={{ fontFamily: 'var(--font-titulo)' }}
        >
          Arreglos que inspiran
        </h2>
        <p className="text-tinta/70 mb-10 max-w-xl">
          Rosas, tulipanes, orquídeas, girasoles y más — todo fresco y hecho con
          cuidado para cada ocasión.
        </p>

        {/* Mosaico asimétrico */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galeria.map((img, i) => (
            <div
              key={img.src}
              className={`rounded-xl overflow-hidden bg-crema${i === 0 ? ' row-span-2' : ''}`}
            >
              <img
                src={foto(img.src)}
                alt={img.alt}
                width={img.w}
                height={img.h}
                className="w-full h-full object-cover aspect-square"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href={negocio.instagram}
            className="inline-flex items-center gap-2 rounded-full border-2 border-rosa text-rosa px-6 py-3 font-bold text-sm transition hover:bg-rosa hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconoIG />
            Ver más en Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Sección: Entrega ────────────────────────────────────────────────────────

function Entrega() {
  return (
    <section
      id="entrega"
      className="py-20 bg-rosa-suave"
      aria-labelledby="tit-entrega"
    >
      <div className="contenedor">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div>
            <h2
              id="tit-entrega"
              className="text-4xl sm:text-5xl text-oscuro mb-6"
              style={{ fontFamily: 'var(--font-titulo)' }}
            >
              Entrega el mismo día
            </h2>
            <p className="text-tinta/80 leading-relaxed mb-6">
              Hacemos entregas el mismo día en Guadalajara, Zapopan, Tonalá y
              Tlaquepaque. Solicita tu pedido antes de la 1:00 pm.
            </p>

            {/* Zonas */}
            <ul className="grid grid-cols-2 gap-2 mb-8">
              {['Guadalajara', 'Zapopan', 'Tonalá', 'Tlaquepaque'].map(z => (
                <li key={z} className="flex items-center gap-2 text-tinta font-bold">
                  <span className="inline-block w-2 h-2 rounded-full bg-rosa shrink-0" />
                  {z}
                </li>
              ))}
            </ul>

            {/* Aviso importante */}
            <div className="rounded-xl bg-oscuro text-white p-5 mb-8">
              <p className="text-sm leading-relaxed">
                <strong>⚠️ Importante:</strong> Florería Guadalajara <strong>NO tiene sucursales</strong>.
                Único teléfono para pedidos e información:{' '}
                <a href="tel:3322106699" className="underline font-bold">
                  3322106699
                </a>
              </p>
            </div>

            <a
              href={wa('Hola, quisiera pedir un arreglo floral, ¿me pueden orientar?')}
              className="btn-wa-rosa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconoWA />
              Hacer mi pedido
            </a>
          </div>

          {/* Foto */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src={foto('ramo-amalfi.webp')}
              alt="Ramo Amalfi de Florería Guadalajara"
              width={1000}
              height={1000}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Sección: Contacto ───────────────────────────────────────────────────────

function Contacto() {
  return (
    <section
      id="contacto"
      className="py-20 bg-fondo"
      aria-labelledby="tit-contacto"
    >
      <div className="contenedor">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Horarios */}
          <div>
            <h2
              id="tit-contacto"
              className="text-4xl sm:text-5xl text-oscuro mb-8"
              style={{ fontFamily: 'var(--font-titulo)' }}
            >
              Horarios y contacto
            </h2>

            <table className="w-full mb-8 text-sm">
              <tbody>
                {horarios.map(h => (
                  <tr key={h.dia} className="border-b border-crema">
                    <td className="py-3 font-bold text-tinta w-2/5">{h.dia}</td>
                    <td className={`py-3 ${h.hora === 'Cerrado' ? 'text-rosa font-bold' : 'text-tinta/70'}`}>
                      {h.hora}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Botones de acción */}
            <div className="flex flex-col gap-3">
              <a
                href={wa('Hola, quisiera pedir un arreglo floral, ¿me pueden orientar?')}
                className="btn-wa self-start"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconoWA />
                WhatsApp 3322106699
              </a>
              <a
                href={`tel:${negocio.telefono}`}
                className="inline-flex items-center gap-2 text-tinta font-bold text-sm hover:text-rosa transition-colors"
              >
                <IconoTel />
                Llamar: {negocio.telefono}
              </a>
              <a
                href={negocio.mapa}
                className="inline-flex items-center gap-2 text-tinta font-bold text-sm hover:text-verde transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconoMapa />
                Ver en Google Maps
              </a>
            </div>
          </div>

          {/* Foto + redes */}
          <div>
            <div className="rounded-2xl overflow-hidden mb-6">
              <img
                src={foto('girasoles.webp')}
                alt="Ramo de girasoles frescos de Florería Guadalajara"
                width={1000}
                height={1000}
                className="w-full h-64 object-cover object-center"
                loading="lazy"
              />
            </div>
            <p className="text-tinta/70 mb-4 text-sm">
              Síguenos para ver los arreglos más recientes y novedades de temporada.
            </p>
            <div className="flex gap-4">
              <a
                href={negocio.instagram}
                className="inline-flex items-center gap-2 text-tinta font-bold text-sm hover:text-rosa transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconoIG />
                @floreriaguadalajara
              </a>
              <a
                href={negocio.facebook}
                className="inline-flex items-center gap-2 text-tinta font-bold text-sm hover:text-rosa transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconoFB />
                floreriagdl
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Pie de página ───────────────────────────────────────────────────────────

function Pie() {
  return (
    <footer className="bg-oscuro text-white py-12">
      <div className="contenedor">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
          {/* Logo y descripción */}
          <div className="md:col-span-1">
            <img
              src={foto('logo.webp')}
              alt="Florería Guadalajara"
              width={132}
              height={61}
              className="h-10 w-auto mb-4"
              loading="lazy"
            />
            <p className="text-white/60 text-sm leading-relaxed">
              22 años haciendo entregas de flores frescas en Guadalajara y su
              zona metropolitana.
            </p>
          </div>

          {/* Horarios pie */}
          <div>
            <p className="text-green-300 font-bold text-xs uppercase tracking-wide mb-3">
              Horarios
            </p>
            <ul className="text-sm text-white/70 space-y-1">
              {horarios.map(h => (
                <li key={h.dia}>
                  <span className="text-white font-bold">{h.dia}</span>{' '}
                  {h.hora}
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto pie */}
          <div>
            <p className="text-green-300 font-bold text-xs uppercase tracking-wide mb-3">
              Contacto
            </p>
            <ul className="text-sm text-white/70 space-y-2">
              <li>
                <a
                  href={wa('Hola, quisiera pedir un arreglo floral, ¿me pueden orientar?')}
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: 3322106699
                </a>
              </li>
              <li>
                <a
                  href={`tel:${negocio.telefono}`}
                  className="hover:text-white transition-colors"
                >
                  Tel: {negocio.telefono}
                </a>
              </li>
              <li>
                <a
                  href={negocio.mapa}
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Guadalajara, Jalisco
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href={negocio.instagram}
                className="text-white/60 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Florería Guadalajara"
              >
                <IconoIG />
              </a>
              <a
                href={negocio.facebook}
                className="text-white/60 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de Florería Guadalajara"
              >
                <IconoFB />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 flex flex-wrap gap-2 justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} Florería Guadalajara. Todos los derechos reservados.</p>
          <p>Sin sucursales · Único teléfono: 3322106699</p>
        </div>
      </div>
    </footer>
  );
}

// ─── Barra fija móvil ────────────────────────────────────────────────────────

function BarraMovil() {
  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-oscuro border-t border-white/20 text-white"
      aria-label="Acciones rápidas"
    >
      <div className="grid grid-cols-3 text-center">
        <a
          href={wa('Hola, quisiera pedir un arreglo floral, ¿me pueden orientar?')}
          className="flex flex-col items-center gap-1 py-3 text-[11px] font-bold hover:bg-white/10 transition-colors text-green-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconoWA cls="w-6 h-6" />
          WhatsApp
        </a>
        <a
          href={`tel:${negocio.telefono}`}
          className="flex flex-col items-center gap-1 py-3 text-[11px] font-bold hover:bg-white/10 transition-colors"
        >
          <IconoTel cls="w-6 h-6" />
          Llamar
        </a>
        <a
          href={negocio.mapa}
          className="flex flex-col items-center gap-1 py-3 text-[11px] font-bold hover:bg-white/10 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconoMapa cls="w-6 h-6" />
          Cómo llegar
        </a>
      </div>
    </nav>
  );
}

// ─── JSON-LD ─────────────────────────────────────────────────────────────────

function JsonLD() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Florist',
    name: 'Florería Guadalajara',
    description:
      'Florería con más de 20 años en Guadalajara. Entrega el mismo día de rosas, tulipanes, orquídeas, arreglos para bodas y más. Únicos. Sin sucursales.',
    telephone: '+523322106699',
    url: 'https://floreriaguadalajara.com/',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Guadalajara',
      addressRegion: 'Jalisco',
      addressCountry: 'MX',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:30',
        closes: '18:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '13:00',
      },
    ],
    sameAs: [
      'https://www.instagram.com/floreriaguadalajara',
      'https://www.facebook.com/floreriagdl',
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <>
      <JsonLD />
      <Encabezado />
      <main>
        <Hero />
        <ParaQuien />
        <LaFlorista />
        <Galeria />
        <Entrega />
        <Contacto />
      </main>
      <Pie />
      {/* Barra fija móvil: padding al contenido para no tapar la barra */}
      <div className="h-16 md:hidden" aria-hidden="true" />
      <BarraMovil />
    </>
  );
}
