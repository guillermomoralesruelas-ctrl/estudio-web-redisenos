import { useState } from 'react';
import { beneficios, horario, maestro, negocio, paquetes, preguntas, sueltas, testimonios, wa, type Dia, type Paquete } from './data/content';

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

const pesos = (n: number) => `$${n.toLocaleString('es-MX', Number.isInteger(n) ? {} : { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const waHola = wa('Hola, quiero agendar mi clase muestra en Harmonía Pilates.');
const secciones = [['#reformer', 'Horario'], ['#maestro', 'Maestro'], ['#precios', 'Precios'], ['#preguntas', 'Preguntas'], ['#visita', 'Ubicación']] as const;
const todos: Paquete[] = [...sueltas, ...paquetes];
const esManana = (h: string) => h.endsWith('am');

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-noche/10 bg-papel/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" aria-label="Harmonía Pilates, inicio"><img src="./logo.webp" alt="Harmonía Pilates, Reformer Studio" width={520} height={220} className="h-11 w-auto" /></a>
        <nav aria-label="Secciones" className="hidden lg:block">
          <ul className="flex gap-7">{secciones.map(([h, t]) => <li key={h}><a href={h} className="text-gris hover:text-noche">{t}</a></li>)}</ul>
        </nav>
        <a href="#reformer" className="btn !min-h-[42px] !px-5 !py-2">Agendar clase</a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="oscuro relative isolate overflow-hidden">
      <img src="./estudio-reformers.webp" alt="El estudio de Harmonía Pilates: reformers con tapetes azules de mandala, aros y pelotas sobre piso de madera" width={1044} height={915} fetchPriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover object-[40%_center]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-noche via-noche/85 to-noche/30 md:bg-gradient-to-r md:from-noche md:via-noche/85 md:to-noche/10" aria-hidden="true" />
      <div className="contenedor pb-14 pt-56 md:py-32">
        <p className="font-semibold text-ambar">Tlalnepantla, Estado de México. ¡Cumplimos 3 años!</p>
        <h1 className="mt-3 max-w-2xl text-[2.9rem] sm:text-[4.4rem]">Pilates Reformer, <em>máximo 8 por clase</em></h1>
        <p className="mt-5 max-w-xl text-[1.1rem]">Experimenta en Harmonía Pilates una disciplina de entrenamiento semipersonalizada con el Reformer, enfocada en la tonificación muscular.</p>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.98rem]">
          <li>Máximo 8 alumnos por clase</li><li>Instructor certificado</li><li>Equipos higienizados en cada turno</li>
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#reformer" className="btn">Elegir mi clase muestra</a>
          <a href={waHola} className="btn-linea" target="_blank" rel="noopener"><IconoWa /> WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

function Reformer({ n, activo, elegible, onElegir }: { n: number; activo: boolean; elegible: boolean; onElegir: () => void }) {
  return (
    <button type="button" onClick={onElegir} disabled={!elegible} aria-pressed={elegible ? activo : undefined}
      aria-label={elegible ? `Apartar el reformer ${n}` : `Reformer ${n}`}
      className={`group rounded-2xl p-2 text-center ${elegible ? 'cursor-pointer hover:bg-white' : 'cursor-default'}`}>
      <svg viewBox="0 0 60 150" className="mx-auto h-32 w-auto sm:h-36" aria-hidden="true">
        <rect x="6" y="4" width="48" height="142" rx="6" fill="none" stroke="#0e2f4f" strokeWidth="3" />
        <line x1="6" y1="22" x2="54" y2="22" stroke="#0e2f4f" strokeWidth="5" strokeLinecap="round" />
        {[20, 26, 32, 38, 44].map((x) => <line key={x} x1={x - 4} y1="126" x2={x - 4} y2="140" stroke="#4d5b69" strokeWidth="2" />)}
        <rect className="reformer" x="12" y={activo ? 48 : 58} width="36" height="56" rx="5" fill={activo ? '#f4b33d' : '#135d8c'} />
        <circle cx="30" cy={activo ? 76 : 86} r="12" fill="none" stroke={activo ? '#0e2f4f' : '#dcebf2'} strokeWidth="1.6" />
        <circle cx="30" cy={activo ? 76 : 86} r="6" fill="none" stroke={activo ? '#0e2f4f' : '#dcebf2'} strokeWidth="1.2" strokeDasharray="2 2" />
        <rect x="18" y={activo ? 40 : 50} width="24" height="6" rx="3" fill="#0e2f4f" />
      </svg>
      <span className={`mt-1 block text-[0.9rem] font-semibold ${activo ? 'text-noche' : 'text-gris'}`}>{n}</span>
    </button>
  );
}

function EligeTuReformer() {
  const [dia, setDia] = useState<Dia>('Sábado');
  const [hora, setHora] = useState('8 am');
  const [paqueteId, setPaqueteId] = useState('muestra');
  const [reformer, setReformer] = useState<number | null>(null);
  const paquete = todos.find((p) => p.id === paqueteId)!;
  const puedeApartar = !!paquete.aparta;
  const elegir = (d: Dia, h: string) => { setDia(d); setHora(h); };
  const cambiarPaquete = (id: string) => { setPaqueteId(id); if (!todos.find((p) => p.id === id)!.aparta) setReformer(null); };
  const texto = `Hola, quiero ${paquete.clases === 1 ? `una ${paquete.nombre.toLowerCase()}` : `el paquete ${paquete.nombre} (${paquete.clases} clases)`} de ${pesos(paquete.precio)} en Harmonía Pilates, para empezar el ${dia.toLowerCase()} a las ${hora}${reformer ? ` y apartar el reformer ${reformer}` : ''}. ¿Hay lugar?`;

  return (
    <section id="reformer" className="py-20 md:py-28">
      <div className="contenedor">
        <h2 className="max-w-3xl text-[2.5rem] sm:text-[3.5rem]">Elige tu hora <em>y tu reformer</em></h2>
        <p className="mt-4 max-w-2xl text-gris">Estas son las clases de la semana. Cada una es de máximo 8 alumnos: ocho reformers, un maestro. Elige cuándo quieres venir y con qué paquete, y te mandamos el mensaje listo.</p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_1fr]">
          <div className="min-w-0">
            <h3 className="text-[1.5rem]">¿Qué día y a qué hora?</h3>
            <ul className="mt-4 grid gap-2">
              {horario.map((d) => (
                <li key={d.dia} className="grid grid-cols-[5.5rem_1fr] items-center gap-3 border-b border-noche/10 pb-2">
                  <span className="font-semibold">{d.dia}</span>
                  <div className="flex flex-wrap gap-2">
                    {d.horas.map((h) => {
                      const si = dia === d.dia && hora === h;
                      return (
                        <button key={h} type="button" aria-pressed={si} onClick={() => elegir(d.dia, h)}
                          aria-label={`${d.dia} a las ${h}`}
                          className={`min-h-[44px] min-w-[4.5rem] rounded-full border-2 px-3 text-[0.95rem] font-semibold transition-colors ${si ? 'border-noche bg-ambar text-noche' : esManana(h) ? 'border-ambar/70 bg-white hover:border-noche' : 'border-azul/35 bg-white hover:border-noche'}`}>
                          {h}
                        </button>
                      );
                    })}
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[0.9rem] text-gris">Borde ámbar: clases de la mañana. Borde azul: de la tarde.</p>

            <h3 className="mt-10 text-[1.5rem]">¿Con qué paquete?</h3>
            <div role="group" aria-label="Paquete" className="mt-4 flex flex-wrap gap-2">
              {todos.map((p) => (
                <button key={p.id} type="button" aria-pressed={paqueteId === p.id} onClick={() => cambiarPaquete(p.id)}
                  className={`min-h-[44px] rounded-full border-2 px-4 text-[0.95rem] font-semibold transition-colors ${paqueteId === p.id ? 'border-azul bg-azul text-white' : 'border-noche/20 bg-white hover:border-noche'}`}>
                  {p.nombre}{p.clases > 1 ? `, ${p.clases} clases` : ''}
                </button>
              ))}
            </div>
          </div>

          <div className="min-w-0 rounded-3xl bg-hielo p-5 sm:p-7">
            <h3 className="text-[1.5rem]">El estudio, visto desde arriba</h3>
            <p className="mt-1 text-[0.95rem] text-gris" aria-live="polite">
              {puedeApartar ? (reformer ? `Apartaste el reformer ${reformer}. Tócalo otra vez para quitarlo.` : `Con ${paquete.nombre} puedes apartar tu reformer favorito: toca uno.`) : 'Ocho lugares por clase. Con los paquetes VIP y Elite puedes apartar tu reformer favorito.'}
            </p>
            <div className="mt-4 grid grid-cols-4 gap-1">
              {Array.from({ length: 8 }, (_, i) => i + 1).map((n) => (
                <Reformer key={n} n={n} activo={reformer === n} elegible={puedeApartar} onElegir={() => setReformer(reformer === n ? null : n)} />
              ))}
            </div>
            <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 rounded-2xl bg-white p-5 text-[0.98rem]">
              <div><dt className="text-gris">Primera clase</dt><dd className="font-semibold">{dia} a las {hora}</dd></div>
              <div><dt className="text-gris">Paquete</dt><dd className="font-semibold">{paquete.nombre}{paquete.clases > 1 ? `, ${paquete.clases} clases` : ''}</dd></div>
              <div><dt className="text-gris">Precio</dt><dd className="font-semibold text-azul">{pesos(paquete.precio)}{paquete.clases > 1 ? ` (${pesos(Math.round((paquete.precio / paquete.clases) * 100) / 100)} por clase)` : ''}</dd></div>
              <div><dt className="text-gris">Vigencia</dt><dd className="font-semibold">{paquete.vigencia}</dd></div>
            </dl>
            <a href={wa(texto)} target="_blank" rel="noopener" className="btn mt-5 w-full"><IconoWa /> Pedir mi lugar por WhatsApp</a>
            <p className="mt-3 text-[0.88rem] text-gris">El estudio te confirma si hay lugar en esa clase. {paquete.nota ? `${paquete.nota}.` : ''}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Beneficios() {
  return (
    <section className="bg-hielo py-20 md:py-24">
      <div className="contenedor grid gap-10 md:grid-cols-[1fr_1.3fr] md:items-center">
        <img src="./josue-reformer.webp" alt="El maestro Josué Miranda en plancha lateral sobre un reformer, sosteniendo una pelota azul en alto" width={810} height={902} loading="lazy" className="aspect-[9/10] w-full rounded-3xl object-cover" />
        <div>
          <h2 className="text-[2.4rem] sm:text-[3.2rem]">Lo que trabajas <em>en el Reformer</em></h2>
          <p className="mt-4 text-gris">Diseñado para fortalecer tu cuerpo de manera integral con la máxima precisión y control corporal.</p>
          <dl className="mt-8 grid gap-6 sm:grid-cols-2">
            {beneficios.map((b) => (
              <div key={b.titulo} className="border-l-4 border-ambar pl-4">
                <dt className="font-display text-[1.35rem] font-semibold">{b.titulo}</dt>
                <dd className="mt-1 text-[0.98rem]">{b.texto}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Maestro() {
  return (
    <section id="maestro" className="py-20 md:py-28">
      <div className="contenedor grid gap-10 md:grid-cols-[18rem_1fr] md:items-center">
        <img src="./josue-miranda.webp" alt="Josué Miranda, maestro de Harmonía Pilates, con gorra y playera del estudio" width={579} height={772} loading="lazy" className="mx-auto aspect-[3/4] w-64 rounded-3xl object-cover md:w-full" />
        <div>
          <p className="font-semibold text-azul">{maestro.nombre}, {maestro.puesto.toLowerCase()}</p>
          <h2 className="mt-2 text-[2.2rem] sm:text-[3rem]">{maestro.titulo}</h2>
          <p className="mt-5 max-w-2xl">{maestro.texto}</p>
          <p className="mt-5 text-gris"><span className="font-semibold text-noche">Especialista en:</span> {maestro.especialidades.join(', ')}.</p>
        </div>
      </div>
    </section>
  );
}

function Precios() {
  return (
    <section id="precios" className="oscuro py-20 md:py-28">
      <div className="contenedor">
        <h2 className="text-[2.4rem] sm:text-[3.4rem]">Precios <em>claros</em></h2>
        <p className="mt-4 max-w-2xl">Inscripción gratis para alumnos nuevos. Agenda cada sesión según tus horarios.</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {sueltas.map((p) => (
            <div key={p.id} className="rounded-2xl border border-papel/20 p-6">
              <h3 className="text-[1.6rem]">{p.nombre}</h3>
              <p className="mt-2"><span className="font-display text-[2.2rem] text-ambar">{pesos(p.precio)}</span>{p.antes ? <span className="ml-3 text-papel/70">antes {pesos(p.antes)}</span> : null}</p>
              <p className="text-[0.95rem]">Vigencia de {p.vigencia}.{p.nota ? ` ${p.nota}.` : ''}</p>
            </div>
          ))}
        </div>
        <h3 className="mt-12 text-[1.7rem]">Paquetes de clases</h3>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {paquetes.map((p) => (
            <li key={p.id} className={`rounded-2xl border p-5 ${p.popular ? 'border-ambar' : 'border-papel/20'}`}>
              <h4 className="font-display text-[1.45rem] font-semibold text-papel">{p.nombre}</h4>
              {p.popular ? <p className="mt-1 inline-block rounded-full bg-ambar px-2 py-0.5 text-[0.8rem] font-semibold text-noche">El más popular</p> : null}
              <p className="mt-2 text-[0.98rem]">{p.clases} clases en {p.vigencia}</p>
              <p className="mt-2"><span className="font-display text-[1.9rem] text-ambar">{pesos(p.precio)}</span> <span className="text-[0.9rem] text-papel/70">antes {pesos(p.antes!)}</span></p>
              <p className="text-[0.95rem]">{pesos(Math.round((p.precio / p.clases) * 100) / 100)} por clase</p>
              {p.aparta ? <p className="mt-2 text-[0.9rem] text-turquesa">Aparta tu reformer favorito</p> : null}
            </li>
          ))}
        </ul>
        <a href="#reformer" className="btn mt-8">Elegir mi hora</a>
      </div>
    </section>
  );
}

function Testimonios() {
  return (
    <section className="py-20 md:py-24">
      <div className="contenedor grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
        <div>
          <h2 className="text-[2.4rem] sm:text-[3.2rem]">Lo que dicen <em>sus alumnos</em></h2>
          <ul className="mt-8 grid gap-6">
            {testimonios.map((t) => (
              <li key={t.nombre}><blockquote className="font-display text-[1.3rem] italic leading-snug">"{t.texto}"</blockquote><p className="mt-1 font-semibold text-azul">{t.nombre}</p></li>
            ))}
          </ul>
        </div>
        <img src="./estudio-noche.webp" alt="El estudio por la noche, iluminado con luz azul, con los reformers en fila" width={756} height={1008} loading="lazy" className="mx-auto aspect-[3/4] w-full max-w-sm rounded-3xl object-cover" />
      </div>
    </section>
  );
}

function Preguntas() {
  return (
    <section id="preguntas" className="bg-hielo py-20 md:py-24">
      <div className="contenedor max-w-[52rem]">
        <h2 className="text-[2.4rem] sm:text-[3.2rem]">Preguntas <em>frecuentes</em></h2>
        <div className="mt-8 grid gap-3">
          {preguntas.map((q) => (
            <details key={q.p} className="rounded-2xl bg-white p-5">
              <summary className="cursor-pointer font-semibold">{q.p}</summary>
              <p className="mt-3 text-gris">{q.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Visita() {
  return (
    <section id="visita" className="oscuro py-20 md:py-28">
      <div className="contenedor grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-[2.4rem] sm:text-[3.4rem]">Inicia en <em>Harmonía Pilates</em></h2>
          <p className="mt-4 max-w-md">Un espacio tranquilo y moderno en Tlalnepantla. Escríbenos por WhatsApp y coordinamos la disponibilidad de tus clases.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waHola} className="btn" target="_blank" rel="noopener"><IconoWa /> WhatsApp</a>
            <a href={negocio.mapa} className="btn-linea" target="_blank" rel="noopener"><IconoPin /> Cómo llegar</a>
          </div>
          <dl className="mt-10 grid gap-5">
            <div><dt className="font-semibold text-turquesa">Dirección</dt><dd>{negocio.direccion}</dd></div>
            <div><dt className="font-semibold text-turquesa">Clases</dt><dd>Lunes a viernes por la tarde (6, 7 y 8 pm) y sábado de 7 a 9 am; viernes también a las 7 am.</dd></div>
            <div><dt className="font-semibold text-turquesa">WhatsApp</dt><dd><a href={negocio.telefonoLink} className="underline underline-offset-4">{negocio.telefono}</a></dd></div>
            <div><dt className="font-semibold text-turquesa">Redes</dt><dd><a href={negocio.instagram} target="_blank" rel="noopener" className="underline underline-offset-4">Instagram @harmonia.pilates</a><br /><a href={negocio.facebook} target="_blank" rel="noopener" className="underline underline-offset-4">Facebook</a></dd></div>
          </dl>
        </div>
        <div className="relative min-h-[20rem] overflow-hidden rounded-3xl border border-papel/15 bg-azul/40">
          <a href={negocio.mapa} target="_blank" rel="noopener" className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center font-semibold text-papel"><IconoPin className="h-8 w-8 text-turquesa" />Av. de los Ejidos 64, Tlalnepantla<span className="underline underline-offset-4">Abrir en Google Maps</span></a>
          <iframe src={negocio.mapaEmbed} title="Mapa de Harmonía Pilates en Tlalnepantla" className="relative h-full min-h-[20rem] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="border-t border-papel/10 bg-noche pb-24 pt-8 text-[0.95rem] text-papel/75 md:pb-8">
      <div className="contenedor flex flex-wrap items-center justify-between gap-3">
        <p>Harmonía Pilates, Reformer Studio. Tlalnepantla, Edo. Méx.</p>
        <p>© 2023 a 2026 Harmonía Pilates</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-papel/15 bg-noche text-papel md:hidden">
      <a href={waHola} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 bg-ambar text-[0.9rem] font-semibold text-noche"><IconoWa />WhatsApp</a>
      <a href={negocio.telefonoLink} className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-semibold"><IconoTel />Llamar</a>
      <a href={negocio.mapa} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-semibold"><IconoPin />Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#principal" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:text-noche">Saltar al contenido</a>
      <Encabezado />
      <main id="principal">
        <Portada />
        <EligeTuReformer />
        <Beneficios />
        <Maestro />
        <Precios />
        <Testimonios />
        <Preguntas />
        <Visita />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
