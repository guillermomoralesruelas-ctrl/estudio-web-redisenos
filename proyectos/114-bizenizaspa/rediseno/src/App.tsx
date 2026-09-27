import { useMemo, useState } from 'react';
import { categorias, foto, fotos, negocio, servicios, wa, waGeneral, zonas, type Categoria, type Foto, type Servicio, type Zona } from './data/content';

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

function IconoCasa({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M3 11 12 3l9 8M5 9.5V21h14V9.5" />
    </svg>
  );
}

function Img({ f, className = '', loading = 'lazy' }: { f: Foto; className?: string; loading?: 'lazy' | 'eager' }) {
  return <img src={f.src} width={f.w} height={f.h} alt={f.alt} loading={loading} decoding="async" className={className} />;
}

const tel = `tel:${negocio.telLink}`;
const mensajeServicio = (s: Servicio, enCasa = false) =>
  `Hola, buen día. Estoy interesado en su servicio: '${s.nombre}' (${s.dur}${s.precio ? `, ${s.precio}` : ''})${enCasa ? ', a domicilio' : ', en el spa'}. Me gustaría saber más y qué días tienen disponibles.`;

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-white/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" aria-label="Bizé Nizá Spa, inicio" className="shrink-0">
          <img src={foto('logo.webp')} alt="Bizé Nizá Spa" width={204} height={110} className="h-11 w-auto" />
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-7 font-bold text-tinta md:flex">
          <a href="#consentir" className="hover:text-azul-hondo">Elige tu zona</a>
          <a href="#servicios" className="hover:text-azul-hondo">Servicios</a>
          <a href="#domicilio" className="hover:text-azul-hondo">A domicilio</a>
          <a href="#visitanos" className="hover:text-azul-hondo">Visítanos</a>
        </nav>
        <a href={waGeneral} className="btn !min-h-[40px] !px-4 !py-2 text-sm" target="_blank" rel="noopener"><IconoWa className="h-4 w-4" /> WhatsApp</a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="overflow-hidden bg-white">
      <div className="contenedor grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div className="min-w-0">
          <p className="font-titulo text-xl italic text-azul-hondo">Un espacio ideal para escaparse un momento del estrés diario</p>
          <h1 className="mt-4 text-5xl sm:text-6xl">Masajes, faciales y rituales en Puebla</h1>
          <p className="mt-6 max-w-xl text-lg">Recuperar la calma, vitalidad y salud que son necesarias para vivir en equilibrio. Bizé Nizá Spa es un espacio en donde las personas podrán disfrutarse a sí mismas, relajarse y sentir.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#consentir" className="btn">¿Qué quieres consentir hoy?</a>
            <a href={waGeneral} className="btn-linea" target="_blank" rel="noopener"><IconoWa /> {negocio.whatsappTexto}</a>
          </div>
          <ul className="mt-10 grid gap-2 border-t border-tinta/10 pt-6 text-[0.98rem] sm:grid-cols-3 sm:gap-6">
            <li>Cuidamos tu cuerpo y tu alma</li>
            <li>Contamos con servicio a domicilio</li>
            <li>Certificado de regalo para quien tú quieras</li>
          </ul>
        </div>
        <div className="relative min-w-0">
          <div aria-hidden="true" className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-cielo" />
          <Img f={fotos.pareja} loading="eager" className="relative aspect-square w-full rounded-t-[12rem] object-cover" />
        </div>
      </div>
    </section>
  );
}

/* ---------- Elemento memorable: el cuerpo, zona por zona ---------- */

function Cuerpo({ activa, elegir }: { activa: Zona; elegir: (z: Zona) => void }) {
  const on = (z: Zona) => activa === z || activa === 'cuerpo';
  const fill = (z: Zona) => (on(z) ? 'var(--color-verde)' : '#ffffff');
  const props = (z: Zona) => ({
    className: 'zona',
    fill: fill(z),
    stroke: 'var(--color-azul-hondo)',
    strokeWidth: 1.6,
    onClick: () => elegir(z),
  });
  // El lado derecho se dibuja con el mismo trazo reflejado.
  const brazo = 'M63 99 C51 101 46 110 44 124 L35 210 L49 212 L58 134 L67 114 Z';
  const pierna = 'M71 222 Q86 232 98 233 L96 388 L78 388 Z';
  return (
    <svg viewBox="0 0 200 430" className="h-auto w-full max-w-[11rem] sm:max-w-[15rem] lg:max-w-[17rem]" aria-hidden="true">
      <circle cx="100" cy="215" r="96" fill="var(--color-cielo)" />
      {activa === 'cuerpo' ? <circle cx="100" cy="215" r="104" fill="none" stroke="var(--color-verde)" strokeWidth="3" className="brillo" /> : null}
      {/* brazos */}
      <path d={brazo} {...props('brazos')} />
      <path d={brazo} transform="translate(200 0) scale(-1 1)" {...props('brazos')} />
      {/* manos */}
      <ellipse cx="42" cy="224" rx="9" ry="12" {...props('manos')} />
      <ellipse cx="158" cy="224" rx="9" ry="12" {...props('manos')} />
      {/* piernas */}
      <path d={pierna} {...props('piernas')} />
      <path d={pierna} transform="translate(200 0) scale(-1 1)" {...props('piernas')} />
      {/* pies */}
      <ellipse cx="85" cy="398" rx="14" ry="8" {...props('pies')} />
      <ellipse cx="115" cy="398" rx="14" ry="8" {...props('pies')} />
      {/* vientre */}
      <path d="M68 168 Q100 176 132 168 L130 222 Q100 234 70 222 Z" {...props('vientre')} />
      {/* cuello y espalda (torso alto) */}
      <path d="M92 78 L108 78 L109 92 Q124 94 137 99 L132 168 Q100 176 68 168 L63 99 Q76 94 91 92 Z" {...props('espalda')} />
      {/* rostro, cabello (cabeza) y ojos cerrados, relajados */}
      <ellipse cx="100" cy="52" rx="24" ry="28" {...props('rostro')} />
      <path d="M76 50 C72 28 86 18 101 18 C117 18 129 29 124 50 C120 40 112 33 100 33 C89 33 80 40 76 50 Z" {...props('cabeza')} />
      <g onClick={() => elegir('ojos')} className="zona" style={{ cursor: 'pointer' }}>
        <rect x="80" y="47" width="40" height="14" fill="transparent" />
        <path d="M84 55 Q90 60 96 55" fill="none" stroke={on('ojos') ? 'var(--color-verde-hondo)' : 'var(--color-azul-hondo)'} strokeWidth={on('ojos') ? 3.2 : 1.8} strokeLinecap="round" />
        <path d="M104 55 Q110 60 116 55" fill="none" stroke={on('ojos') ? 'var(--color-verde-hondo)' : 'var(--color-azul-hondo)'} strokeWidth={on('ojos') ? 3.2 : 1.8} strokeLinecap="round" />
      </g>
      <path d="M95 68 Q100 71 105 68" fill="none" stroke="var(--color-azul-hondo)" strokeWidth="1.4" strokeLinecap="round" pointerEvents="none" />
    </svg>
  );
}

function Consentir() {
  const [zona, setZona] = useState<Zona>('espalda');
  const [elegido, setElegido] = useState<string>('Nelpilollia');
  const [enCasa, setEnCasa] = useState(false);
  const deZona = useMemo(() => servicios.filter((s) => s.zonas.includes(zona)), [zona]);
  const servicio = deZona.find((s) => s.nombre === elegido) ?? deZona[0];
  const z = zonas.find((x) => x.id === zona)!;
  const casa = enCasa && !!servicio?.domicilio;

  const elegirZona = (nueva: Zona) => {
    setZona(nueva);
    const primero = servicios.find((s) => s.zonas.includes(nueva));
    if (primero) setElegido(primero.nombre);
    setEnCasa(false);
  };

  return (
    <section id="consentir" className="py-20 sm:py-24">
      <div className="contenedor">
        <div className="max-w-2xl">
          <h2 className="text-4xl sm:text-5xl">¿Qué quieres consentir hoy?</h2>
          <p className="mt-4 text-lg">Toca una parte del cuerpo y te decimos qué servicios de Bizé Nizá la trabajan, cuánto duran y cuánto cuestan. Elige uno y pídelo por WhatsApp, en el spa o, si se puede, en tu casa.</p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[13rem_minmax(0,1fr)_18rem] xl:grid-cols-[15rem_minmax(0,1fr)_19rem] lg:gap-10">
          <div className="flex min-w-0 flex-col items-center gap-6">
            <Cuerpo activa={zona} elegir={elegirZona} />
          </div>

          <div className="min-w-0">
            <fieldset>
              <legend className="sr-only">Parte del cuerpo</legend>
              <div className="flex flex-wrap gap-2">
                {zonas.map((x) => {
                  const act = x.id === zona;
                  return (
                    <button key={x.id} type="button" aria-pressed={act} onClick={() => elegirZona(x.id)}
                      className={`min-h-[44px] rounded-full px-4 text-[0.95rem] font-bold transition-colors ${act ? 'bg-azul-hondo text-white' : 'bg-white text-tinta ring-1 ring-inset ring-tinta/20 hover:ring-azul-hondo'}`}>
                      {x.nombre}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <h3 className="mt-8 text-2xl" aria-live="polite">{deZona.length} {deZona.length === 1 ? 'servicio' : 'servicios'} {z.frase}</h3>
            <ul className="mt-4 divide-y divide-tinta/10 border-y border-tinta/10">
              {deZona.map((s) => {
                const act = s.nombre === servicio?.nombre;
                return (
                  <li key={s.nombre}>
                    <button type="button" aria-pressed={act} onClick={() => { setElegido(s.nombre); setEnCasa(false); }}
                      className={`block w-full px-3 py-4 text-left transition-colors ${act ? 'bg-white shadow-[inset_4px_0_0_var(--color-verde-hondo)]' : 'hover:bg-white/60'}`}>
                      <span className="flex flex-wrap items-baseline justify-between gap-x-4">
                        <span className="font-titulo text-xl text-tinta">{s.nombre}</span>
                        <span className="font-bold text-tinta">{s.precio ?? 'Pregunta el precio'}</span>
                      </span>
                      <span className="mt-1 block text-[0.95rem]">{s.desc}</span>
                      <span className="mt-1 flex flex-wrap gap-x-4 text-sm">
                        <span>{s.dur}</span>
                        {s.domicilio ? <span className="inline-flex items-center gap-1 font-bold text-verde-hondo"><IconoCasa /> También a domicilio</span> : null}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {servicio ? (
            <aside aria-label="Tu elección" className="noche min-w-0 self-start rounded-3xl bg-noche p-6 text-white/85 lg:sticky lg:top-24">
              <p className="text-sm font-bold text-lima">Tu elección</p>
              <p className="mt-2 font-titulo text-3xl text-white">{servicio.nombre}</p>
              <dl className="mt-5 grid gap-2 border-t border-white/15 pt-4">
                <div className="flex justify-between gap-3"><dt>Duración</dt><dd className="text-right font-bold text-white">{servicio.dur}</dd></div>
                <div className="flex justify-between gap-3"><dt>Precio</dt><dd className="text-right font-bold text-white">{servicio.precio ?? 'Pregunta'}</dd></div>
              </dl>
              {servicio.domicilio ? (
                <fieldset className="mt-5">
                  <legend className="text-sm font-bold text-white">¿Dónde lo quieres?</legend>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {[false, true].map((c) => (
                      <button key={String(c)} type="button" aria-pressed={enCasa === c} onClick={() => setEnCasa(c)}
                        className={`min-h-[44px] rounded-full text-sm font-bold ${enCasa === c ? 'bg-lima text-noche' : 'ring-1 ring-inset ring-white/40 hover:ring-white'}`}>
                        {c ? 'En mi casa' : 'En el spa'}
                      </button>
                    ))}
                  </div>
                </fieldset>
              ) : <p className="mt-5 text-sm">Este servicio se toma en el spa, en Vía Volkswagen 4501.</p>}
              <a href={wa(mensajeServicio(servicio, casa))} className="btn-claro mt-6 w-full" target="_blank" rel="noopener"><IconoWa /> Pedirlo por WhatsApp</a>
              <p className="mt-4 text-xs text-white/75">Precios en pesos mexicanos, tal como los publica el spa.</p>
            </aside>
          ) : null}
        </div>
        <p className="mt-8 text-[0.98rem]">¿Es para celebrar, en pareja o con tu mamá? Mira los <a href="#servicios" className="enlace">rituales</a>. ¿Para tu bebé? Bari, masaje para bebés desde los 3 meses.</p>
      </div>
    </section>
  );
}

function Servicios() {
  const [cat, setCat] = useState<Categoria>('corporal');
  const c = categorias.find((x) => x.id === cat)!;
  const lista = servicios.filter((s) => s.cat === cat);
  return (
    <section id="servicios" className="bg-white py-20 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <div className="min-w-0 self-start lg:sticky lg:top-24">
          <h2 className="text-4xl sm:text-5xl">Todos los servicios</h2>
          <div role="tablist" aria-label="Tipo de servicio" className="mt-8 flex flex-wrap gap-2 lg:flex-col lg:items-start">
            {categorias.map((x) => (
              <button key={x.id} role="tab" type="button" id={`tab-${x.id}`} aria-selected={x.id === cat} aria-controls="panel-servicios" onClick={() => setCat(x.id)}
                className={`font-titulo text-2xl transition-colors lg:text-3xl ${x.id === cat ? 'text-azul-hondo underline decoration-verde decoration-4 underline-offset-8' : 'text-tinta/70 hover:text-tinta'} min-h-[44px] px-2 lg:px-0`}>
                {x.nombre}
              </button>
            ))}
          </div>
          <p className="mt-8 font-titulo text-xl italic text-azul-hondo">{c.lema}</p>
          <p className="mt-2">{c.texto}</p>
          <p className="mt-6 text-sm">Pregunta por las promociones para ti y por los paquetes de varios servicios.</p>
        </div>
        <div id="panel-servicios" role="tabpanel" aria-labelledby={`tab-${cat}`} className="min-w-0">
          <ul className="divide-y divide-tinta/10 border-y-2 border-tinta/80">
            {lista.map((s) => (
              <li key={s.nombre} className="py-5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6">
                  <h3 className="text-2xl">{s.nombre}</h3>
                  <p className="font-bold text-tinta">{s.precio ?? 'Pregunta el precio'}</p>
                </div>
                <p className="mt-1 text-[0.97rem]">{s.desc}</p>
                <p className="mt-1 text-sm">{s.dur}</p>
                <p className="mt-2 text-sm">
                  <a href={wa(mensajeServicio(s))} className="enlace" target="_blank" rel="noopener">Pedir {s.nombre.split(',')[0]} por WhatsApp</a>
                  {s.domicilio ? <span className="ml-3 inline-flex items-center gap-1 font-bold text-verde-hondo"><IconoCasa /> También a domicilio</span> : null}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Nosotros() {
  return (
    <section className="py-20 sm:py-24">
      <div className="contenedor grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div className="grid min-w-0 grid-cols-2 gap-3">
          <Img f={fotos.espalda} className="aspect-[3/4] w-full rounded-t-full object-cover" />
          <div className="grid min-w-0 gap-3">
            <Img f={fotos.piedras} className="aspect-square w-full rounded-2xl object-cover" />
            <Img f={fotos.pantuflas} className="aspect-square w-full rounded-2xl object-cover" />
          </div>
        </div>
        <div className="min-w-0">
          <h2 className="text-4xl sm:text-5xl">10 años de experiencia</h2>
          <p className="mt-5 text-lg">Contamos con 10 años de experiencia, trabajando día a día para que nuestros clientes se liberen del estrés que cargan, así como de los dolores musculares, ayudándoles a sentirse renovados, con energía.</p>
          <p className="mt-4">Un espacio donde podrán darse la oportunidad de relajarse, sentir y sobre todo darle rienda suelta a los sueños que los tiempos modernos nos han hecho olvidar.</p>
          <dl className="mt-8 grid gap-4 border-t border-tinta/10 pt-6 sm:grid-cols-2">
            <div>
              <dt className="font-titulo text-2xl text-tinta">Especiales</dt>
              <dd className="mt-1">Novias, deportistas, parejas y niños.</dd>
            </div>
            <div>
              <dt className="font-titulo text-2xl text-tinta">Promociones</dt>
              <dd className="mt-1">Para sorprenderte todo el año, en las mejores fechas y cada semana.</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

function Domicilio() {
  const enCasa = servicios.filter((s) => s.domicilio);
  return (
    <section id="domicilio" className="noche bg-noche py-20 text-white/85 sm:py-24">
      <div className="contenedor grid gap-14 lg:grid-cols-2">
        <div className="min-w-0">
          <h2 className="text-4xl sm:text-5xl">Recibe a Bizé Nizá Spa en tu casa</h2>
          <p className="mt-4 text-lg">Servicio y comodidad en tu casa. Estos servicios se pueden pedir a domicilio:</p>
          <ul className="mt-6 divide-y divide-white/15 border-y border-white/15">
            {enCasa.map((s) => (
              <li key={s.nombre} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-4">
                <span className="font-titulo text-2xl text-white">{s.nombre}</span>
                <span>{s.dur}, <strong className="text-white">{s.precio}</strong></span>
              </li>
            ))}
          </ul>
          <a href={wa('Hola, buen día. Quisiera pedir un servicio a domicilio de Bizé Nizá Spa. ¿Qué días tienen disponibles?')} className="btn-claro mt-8" target="_blank" rel="noopener"><IconoWa /> Pedir a domicilio</a>
        </div>
        <div className="min-w-0 border-t border-white/15 pt-10 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0">
          <h2 className="text-4xl sm:text-5xl">Certificado de regalo</h2>
          <p className="mt-4 text-lg">Para quien tú quieras. Elige un masaje, un facial o un ritual y regálalo.</p>
          <p className="mt-4">¿Una novia, un cumpleaños, tu mamá? Los rituales Yeto Lut, Hopi y Paxia están pensados para eso.</p>
          <a href={wa('Hola, buen día. Quisiera regalar un certificado de regalo de Bizé Nizá Spa. ¿Cómo lo compro?')} className="btn-claro mt-8" target="_blank" rel="noopener"><IconoWa /> Quiero regalar</a>
        </div>
      </div>
    </section>
  );
}

function Visitanos() {
  return (
    <section id="visitanos" className="py-20 sm:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div className="min-w-0">
          <h2 className="text-4xl sm:text-5xl">Visítanos en La Paz, Puebla</h2>
          <address className="mt-5 text-lg not-italic">{negocio.calle}, {negocio.colonia}, C.P. {negocio.cp}, {negocio.ciudad}</address>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={negocio.mapa} className="btn" target="_blank" rel="noopener"><IconoPin /> Ver en Google Maps</a>
            <a href={tel} className="btn-linea"><IconoTel /> {negocio.telefono}</a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            <li><a href={negocio.instagram} className="enlace" target="_blank" rel="noopener">Instagram</a></li>
            <li><a href={negocio.facebook} className="enlace" target="_blank" rel="noopener">Facebook</a></li>
            <li><a href={negocio.twitter} className="enlace" target="_blank" rel="noopener">Twitter</a></li>
          </ul>
        </div>
        <div className="min-w-0 self-start rounded-3xl bg-white p-7">
          <h3 className="text-2xl">Horario</h3>
          <dl className="mt-4 divide-y divide-tinta/10">
            {negocio.horario.map(([d, h]) => (
              <div key={d} className="flex justify-between gap-4 py-3"><dt>{d}</dt><dd className="font-bold text-tinta">{h}</dd></div>
            ))}
          </dl>
          <p className="mt-4 text-sm">WhatsApp: <a href={waGeneral} className="enlace" target="_blank" rel="noopener">{negocio.whatsappTexto}</a></p>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="border-t border-tinta/10 bg-white pb-28 pt-10 text-sm md:pb-10">
      <div className="contenedor flex flex-wrap items-center justify-between gap-4">
        <img src={foto('logo.webp')} alt="Bizé Nizá Spa" width={204} height={110} loading="lazy" className="h-12 w-auto" />
        <p>Masajes, faciales, rituales y servicio a domicilio en Puebla, Pue.</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-tinta/10 bg-white text-[0.8rem] font-bold text-tinta md:hidden">
      <a href={waGeneral} className="flex flex-col items-center gap-1 bg-azul-hondo py-3 text-white" target="_blank" rel="noopener"><IconoWa />WhatsApp</a>
      <a href={tel} className="flex flex-col items-center gap-1 py-3"><IconoTel />Llamar</a>
      <a href={negocio.mapa} className="flex flex-col items-center gap-1 py-3" target="_blank" rel="noopener"><IconoPin />Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#consentir" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-tinta">Ir a los servicios</a>
      <Encabezado />
      <main>
        <Portada />
        <Consentir />
        <Servicios />
        <Nosotros />
        <Domicilio />
        <Visitanos />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
