import { useState, useEffect, useCallback } from 'react';
import { negocio, corteHora, categorias, galeria, foto, wa } from './data/content';

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

function IconoReloj({ cls = 'w-5 h-5' }: { cls?: string }) {
  return (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
    </svg>
  );
}

// ─── Hook: hora de Ciudad de México ─────────────────────────────────────────

interface EstadoEntrega {
  horaTexto: string;  // "10:35 am"
  fase: 'disponible' | 'cerrado' | 'madrugada';
  minutosRestantes: number;  // minutos hasta las 6 PM (solo en fase disponible)
  porcentajeRestante: number; // 0–100 (% del tiempo disponible de entrega que queda)
}

function calcularEstado(): EstadoEntrega {
  const ahora = new Date();
  const fmt = new Intl.DateTimeFormat('es-MX', {
    timeZone: 'America/Mexico_City',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
  const horaTexto = fmt.format(ahora);

  // Obtener hora y minuto actuales en CDMX
  const partesCDMX = new Intl.DateTimeFormat('es-MX', {
    timeZone: 'America/Mexico_City',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }).formatToParts(ahora);
  const horaCDMX = parseInt(partesCDMX.find(p => p.type === 'hour')?.value ?? '0', 10);
  const minutoCDMX = parseInt(partesCDMX.find(p => p.type === 'minute')?.value ?? '0', 10);

  const minutosDelDia = horaCDMX * 60 + minutoCDMX;
  const corteMinutos = corteHora * 60; // 18:00 = 1080 minutos
  const inicioEntrega = 8 * 60; // 8:00 am = 480 minutos

  if (minutosDelDia >= 0 && minutosDelDia < inicioEntrega) {
    return { horaTexto, fase: 'madrugada', minutosRestantes: 0, porcentajeRestante: 0 };
  } else if (minutosDelDia >= inicioEntrega && minutosDelDia < corteMinutos) {
    const restantes = corteMinutos - minutosDelDia;
    const ventana = corteMinutos - inicioEntrega; // 10 horas = 600 minutos
    const porcentaje = Math.round((restantes / ventana) * 100);
    return { horaTexto, fase: 'disponible', minutosRestantes: restantes, porcentajeRestante: porcentaje };
  } else {
    return { horaTexto, fase: 'cerrado', minutosRestantes: 0, porcentajeRestante: 0 };
  }
}

function useCDMX() {
  const [estado, setEstado] = useState<EstadoEntrega>(calcularEstado);
  useEffect(() => {
    const id = setInterval(() => setEstado(calcularEstado()), 30_000);
    return () => clearInterval(id);
  }, []);
  return estado;
}

// ─── Sección: Encabezado ─────────────────────────────────────────────────────

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 bg-oscuro text-white shadow-lg">
      <div className="contenedor flex items-center justify-between gap-4 py-3">
        {/* Logo */}
        <a href="#inicio" className="shrink-0" aria-label="Florería Mrs. Flowers — inicio">
          <img
            src={foto('logo.webp')}
            alt="Florería Mrs. Flowers"
            width={200}
            height={134}
            className="h-10 w-auto"
          />
        </a>

        {/* Aviso entrega */}
        <p className="hidden sm:block text-xs text-green-200 font-bold text-center leading-tight max-w-[14rem]">
          Entrega hoy en CDMX · Ordena antes de las 6 pm
        </p>

        {/* CTA escritorio */}
        <a
          href={wa('Hola, quiero pedir un arreglo con entrega hoy en CDMX, ¿me pueden ayudar?')}
          className="btn-wa hidden md:inline-flex"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconoWA />
          Pedir por WhatsApp
        </a>

        {/* CTA móvil */}
        <a
          href={wa('Hola, quiero pedir un arreglo con entrega hoy en CDMX, ¿me pueden ayudar?')}
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
      className="relative flex min-h-[72svh] items-end bg-oscuro"
      aria-labelledby="h1-principal"
    >
      {/* Foto de fondo */}
      <img
        src={foto('fondo-hero.webp')}
        alt="Flores frescas de Florería Mrs. Flowers, CDMX"
        width={1536}
        height={864}
        className="absolute inset-0 h-full w-full object-cover object-center opacity-55"
        fetchPriority="high"
      />

      {/* Degradado */}
      <div className="absolute inset-0 bg-gradient-to-t from-oscuro via-oscuro/50 to-transparent" />

      {/* Contenido */}
      <div className="relative contenedor pb-16 pt-20">
        <p className="text-green-200 font-bold text-sm tracking-wide mb-3">
          Florería Mrs. Flowers · Ciudad de México
        </p>
        <h1
          id="h1-principal"
          className="text-5xl sm:text-6xl lg:text-7xl text-white leading-none mb-4"
          style={{ fontFamily: 'var(--font-titulo)' }}
        >
          Flores a domicilio
          <br />
          en CDMX
        </h1>
        <p className="text-white/80 text-lg mb-8 max-w-xl">
          Arreglos florales frescos entregados en 2 a 3 horas. Rosas, tulipanes,
          girasoles, orquídeas y más. Ordena antes de las 6 pm.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={wa('Hola, quiero pedir un arreglo con entrega hoy en CDMX, ¿me pueden ayudar?')}
            className="btn-wa-rosa text-base px-8 py-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconoWA cls="w-5 h-5" />
            Pedir por WhatsApp
          </a>
          <a
            href="#llega-hoy"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-8 py-4 text-white text-base font-bold transition hover:bg-white/10"
          >
            <IconoReloj />
            ¿Llega hoy?
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Sección: ¿Llega hoy? ────────────────────────────────────────────────────

function LlegaHoy() {
  const { horaTexto, fase, minutosRestantes, porcentajeRestante } = useCDMX();

  const horas = Math.floor(minutosRestantes / 60);
  const minutos = minutosRestantes % 60;

  const msgHoy = wa('Hola, quiero pedir un arreglo con entrega hoy en CDMX, ¿me pueden ayudar?');

  return (
    <section
      id="llega-hoy"
      className="py-16 bg-fondo"
      aria-labelledby="tit-llega-hoy"
      aria-live="polite"
    >
      <div className="contenedor">
        <div className="max-w-2xl mx-auto rounded-2xl bg-oscuro text-white p-8 sm:p-10 shadow-xl">
          {/* Reloj */}
          <div className="flex items-center gap-3 mb-6">
            <IconoReloj cls="w-8 h-8 text-green-300 shrink-0" />
            <div>
              <p className="text-green-300 font-bold text-xs uppercase tracking-widest mb-1">
                Hora en Ciudad de México
              </p>
              <p className="text-4xl font-bold leading-none" style={{ fontFamily: 'var(--font-titulo)' }}>
                {horaTexto}
              </p>
            </div>
          </div>

          {/* Estado */}
          {fase === 'disponible' && (
            <>
              <h2
                id="tit-llega-hoy"
                className="text-2xl sm:text-3xl leading-snug mb-3"
                style={{ fontFamily: 'var(--font-titulo)' }}
              >
                Ordena antes de las 6 pm y tu arreglo llega <strong className="text-green-300">hoy</strong>.
              </h2>
              <p className="text-white/70 text-sm mb-4">
                {horas > 0
                  ? `Te quedan ${horas} hora${horas !== 1 ? 's' : ''} y ${minutos} minuto${minutos !== 1 ? 's' : ''}.`
                  : `Te quedan ${minutos} minuto${minutos !== 1 ? 's' : ''}.`}
              </p>
              {/* Barra de progreso */}
              <div
                className="h-3 rounded-full bg-white/20 overflow-hidden mb-6"
                role="progressbar"
                aria-valuenow={porcentajeRestante}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`Tiempo de entrega disponible: ${porcentajeRestante}%`}
              >
                <div
                  className="h-full rounded-full bg-green-400 transition-all duration-1000"
                  style={{ width: `${porcentajeRestante}%` }}
                />
              </div>
              <a
                href={msgHoy}
                className="btn-wa-rosa inline-flex"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconoWA />
                Ordenar con entrega hoy
              </a>
            </>
          )}

          {fase === 'cerrado' && (
            <>
              <h2
                id="tit-llega-hoy"
                className="text-2xl sm:text-3xl leading-snug mb-3"
                style={{ fontFamily: 'var(--font-titulo)' }}
              >
                El horario de entrega de hoy ya cerró.
              </h2>
              <p className="text-white/70 mb-6">
                Tu arreglo llega <strong className="text-white">mañana</strong> si ordenas ahora.
                Recibimos pedidos las 24 horas.
              </p>
              <a
                href={wa('Hola, quisiera pedir un arreglo para mañana en CDMX, ¿me pueden ayudar?')}
                className="btn-wa-rosa inline-flex"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconoWA />
                Pedir para mañana
              </a>
            </>
          )}

          {fase === 'madrugada' && (
            <>
              <h2
                id="tit-llega-hoy"
                className="text-2xl sm:text-3xl leading-snug mb-3"
                style={{ fontFamily: 'var(--font-titulo)' }}
              >
                Estamos preparando los arreglos del día.
              </h2>
              <p className="text-white/70 mb-6">
                Las entregas empiezan a las 8:00 am. Deja tu pedido ahora y lo
                tenemos listo para la primera entrega.
              </p>
              <a
                href={wa('Hola, quisiera pedir un arreglo para entrega en la mañana en CDMX, ¿me pueden ayudar?')}
                className="btn-wa-rosa inline-flex"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconoWA />
                Dejar mi pedido ahora
              </a>
            </>
          )}
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
      className="py-20 bg-rosa-suave"
      aria-labelledby="tit-galeria"
    >
      <div className="contenedor">
        <h2
          id="tit-galeria"
          className="text-4xl sm:text-5xl text-oscuro mb-3"
          style={{ fontFamily: 'var(--font-titulo)' }}
        >
          Arreglos de Florería Mrs. Flowers
        </h2>
        <p className="text-tinta/70 mb-10 max-w-xl">
          Rosas, girasoles, gerberas y más — todo fresco, hecho con cuidado y
          entregado en 2 a 3 horas en CDMX.
        </p>

        {/* Mosaico asimétrico */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
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

        <div className="mt-8 text-center">
          <a
            href={wa('Hola, quisiera ver el catálogo completo de arreglos de Mrs. Flowers, ¿me pueden ayudar?')}
            className="btn-wa-rosa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconoWA />
            Ver catálogo completo
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Sección: Categorías ─────────────────────────────────────────────────────

function Categorias() {
  const [activa, setActiva] = useState(0);
  const cat = categorias[activa];

  const handleKey = useCallback((e: React.KeyboardEvent, i: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiva(i);
    }
  }, []);

  return (
    <section
      id="categorias"
      className="py-20 bg-fondo"
      aria-labelledby="tit-categorias"
    >
      <div className="contenedor">
        <h2
          id="tit-categorias"
          className="text-4xl sm:text-5xl text-oscuro mb-3"
          style={{ fontFamily: 'var(--font-titulo)' }}
        >
          ¿Qué buscas?
        </h2>
        <p className="text-tinta/70 mb-8 max-w-xl">
          Elige el tipo de arreglo y te ayudamos con la entrega hoy en CDMX.
        </p>

        {/* Botones de categoría */}
        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Elige un tipo de arreglo">
          {categorias.map((c, i) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={i === activa}
              aria-controls="panel-categoria"
              onClick={() => setActiva(i)}
              onKeyDown={(e) => handleKey(e, i)}
              className={`cat-btn${i === activa ? ' activa' : ''}`}
            >
              {c.nombre}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div
          id="panel-categoria"
          role="tabpanel"
          className="grid md:grid-cols-2 gap-8 items-center"
          style={{ animation: 'fadeIn 0.25s ease' }}
          key={cat.id}
        >
          {/* Foto */}
          <div className="rounded-2xl overflow-hidden aspect-square bg-crema">
            <img
              src={foto(cat.foto)}
              alt={cat.nombre + ' — Florería Mrs. Flowers'}
              width={cat.fotoW}
              height={cat.fotoH}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            <div>
              <h3
                className="text-3xl sm:text-4xl text-oscuro leading-snug"
                style={{ fontFamily: 'var(--font-titulo)' }}
              >
                {cat.nombre}
              </h3>
              <p className="text-tinta/70 mt-2 leading-relaxed">{cat.descripcion}</p>
            </div>
            <p className="text-tinta/70 text-sm leading-relaxed">
              Entrega el mismo día en CDMX y Edomex. Ordena antes de las 6 pm y
              tu arreglo llega fresco en 2 a 3 horas. Recibimos fotos del arreglo
              terminado antes de salir a ruta.
            </p>
            <a
              href={wa(cat.mensaje)}
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

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        @media (prefers-reduced-motion: reduce) { @keyframes fadeIn { from { opacity: 1; } } }
      `}</style>
    </section>
  );
}

// ─── Sección: Servicio ───────────────────────────────────────────────────────

function Servicio() {
  const ventajas = [
    {
      titulo: 'Entrega en 2 a 3 horas',
      desc: 'Zonas clave: Polanco, Condesa, Roma, Santa Fe, Coyoacán y más. Ordena antes de las 6 pm.',
    },
    {
      titulo: 'Fotos por WhatsApp',
      desc: 'Te enviamos fotos del arreglo terminado antes de salir a ruta, para que veas lo que llega.',
    },
    {
      titulo: 'Pago seguro',
      desc: 'Tarjetas de crédito y débito con Stripe/BBVA. También expedimos factura.',
    },
    {
      titulo: 'Flores frescas',
      desc: 'Seleccionadas diariamente por floristas expertos para garantizar la mejor calidad.',
    },
  ];

  return (
    <section
      id="servicio"
      className="py-20 bg-oscuro text-white"
      aria-labelledby="tit-servicio"
    >
      <div className="contenedor">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Foto */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src={foto('ramo-amor.webp')}
              alt="Ramo de rosas frescas de Florería Mrs. Flowers para entrega en CDMX"
              width={590}
              height={701}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* Texto */}
          <div>
            <h2
              id="tit-servicio"
              className="text-4xl sm:text-5xl leading-tight mb-6"
              style={{ fontFamily: 'var(--font-titulo)' }}
            >
              Arreglos florales
              <br />
              premium para
              <br />
              esos momentos
            </h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              Enviamos arreglos a CDMX el mismo día. Creamos arreglos florales
              premium para esos momentos inolvidables — cumpleaños, aniversarios,
              condolencias, bodas y más.
            </p>

            <ul className="grid sm:grid-cols-2 gap-4 mb-8">
              {ventajas.map(v => (
                <li key={v.titulo} className="rounded-xl bg-white/10 p-4">
                  <p className="font-bold text-green-300 text-sm mb-1">{v.titulo}</p>
                  <p className="text-white/70 text-sm leading-relaxed">{v.desc}</p>
                </li>
              ))}
            </ul>

            <a
              href={wa('Hola, quisiera hacer un pedido con entrega hoy en CDMX, ¿me pueden ayudar?')}
              className="btn-wa-rosa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconoWA />
              Hacer mi pedido
            </a>
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
          {/* Info */}
          <div>
            <h2
              id="tit-contacto"
              className="text-4xl sm:text-5xl text-oscuro mb-6"
              style={{ fontFamily: 'var(--font-titulo)' }}
            >
              Contáctanos
            </h2>
            <p className="text-tinta/70 mb-8 leading-relaxed">
              Entregamos flores a domicilio en CDMX y Estado de México. No tenemos
              tienda física: todos los pedidos se hacen por WhatsApp o en línea.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href={wa('Hola, quisiera pedir un arreglo con entrega hoy en CDMX, ¿me pueden ayudar?')}
                className="btn-wa self-start"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconoWA />
                WhatsApp 55 1878 4901
              </a>
              <a
                href={`tel:${negocio.telefono}`}
                className="inline-flex items-center gap-2 text-tinta font-bold text-sm hover:text-rosa transition-colors"
              >
                <IconoTel />
                Llamar: 55 1878 4901
              </a>
              <a
                href={negocio.mapa}
                className="inline-flex items-center gap-2 text-tinta font-bold text-sm hover:text-oscuro transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconoMapa />
                Buscar en Google Maps
              </a>
            </div>
          </div>

          {/* Foto + zonas */}
          <div>
            <div className="rounded-2xl overflow-hidden mb-6">
              <img
                src={foto('caja-25-rosas.webp')}
                alt="Caja con 25 rosas rojas de Florería Mrs. Flowers"
                width={450}
                height={450}
                className="w-full h-64 object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="rounded-xl bg-crema p-5">
              <p className="font-bold text-oscuro text-sm mb-3">Zonas de entrega</p>
              <p className="text-tinta/70 text-sm leading-relaxed">
                Polanco, Condesa, Roma, Santa Fe, Coyoacán, Satélite, Naucalpan,
                Tlalnepantla, Ecatepec, Nezahualcóyotl y más zonas de CDMX y Edomex.
                Ordena antes de las 6 pm para entrega hoy.
              </p>
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
              alt="Florería Mrs. Flowers"
              width={200}
              height={134}
              className="h-10 w-auto mb-4"
              loading="lazy"
            />
            <p className="text-white/60 text-sm leading-relaxed">
              Flores a domicilio en CDMX con entrega hoy. Arreglos florales
              premium en 2 a 3 horas.
            </p>
          </div>

          {/* Servicio */}
          <div>
            <p className="text-green-300 font-bold text-xs uppercase tracking-wide mb-3">
              Servicio
            </p>
            <ul className="text-sm text-white/70 space-y-2">
              <li>Entrega el mismo día en CDMX</li>
              <li>Ordena antes de las 6 pm</li>
              <li>Entrega en 2 a 3 horas</li>
              <li>Pago con tarjeta · Stripe/BBVA</li>
              <li>Facturación disponible</li>
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
                  href={wa('Hola, quisiera pedir un arreglo con entrega hoy en CDMX, ¿me pueden ayudar?')}
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: 55 1878 4901
                </a>
              </li>
              <li>
                <a
                  href={`tel:${negocio.telefono}`}
                  className="hover:text-white transition-colors"
                >
                  Tel: 55 1878 4901
                </a>
              </li>
              <li>
                <a
                  href={negocio.mapa}
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ciudad de México, CDMX
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 flex flex-wrap gap-2 justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} Florería Mrs. Flowers. Todos los derechos reservados.</p>
          <p>Pedidos a domicilio en CDMX</p>
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
          href={wa('Hola, quiero pedir un arreglo con entrega hoy en CDMX, ¿me pueden ayudar?')}
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
    name: 'Florería Mrs. Flowers',
    description:
      'Flores a domicilio en CDMX con entrega hoy en 2 a 3 horas. Rosas, tulipanes, girasoles y arreglos premium. Ordena antes de las 6 pm.',
    telephone: '+525518784901',
    url: 'https://www.mrsflowers.com.mx/',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ciudad de México',
      addressRegion: 'CDMX',
      addressCountry: 'MX',
    },
    hasMap: 'https://www.google.com/maps/search/Mrs.+Flowers+CDMX',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:00',
        closes: '18:00',
      },
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
        <LlegaHoy />
        <Galeria />
        <Categorias />
        <Servicio />
        <Contacto />
      </main>
      <Pie />
      {/* Espaciado para no tapar la barra fija móvil */}
      <div className="h-16 md:hidden" aria-hidden="true" />
      <BarraMovil />
    </>
  );
}
