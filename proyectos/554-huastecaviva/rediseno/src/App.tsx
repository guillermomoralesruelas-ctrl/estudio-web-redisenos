import { useState } from 'react';
import { aventuras, cifras, condiciones, incluye, negocio, niveles, otras, precio, recomendaciones, rutas, wa } from './data/content';
import fotos from './data/fotos.json';

const medidas = fotos as unknown as Record<string, [number, number]>;
const foto = (n: string) => ({ src: `./${n}.webp`, width: medidas[n][0], height: medidas[n][1] });
const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;

function Icono({ d, className = 'size-5' }: { d: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}
const iWhats = 'M3 21l1.7-5A8.5 8.5 0 1 1 8 19.3L3 21zM9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.8-2.2-1-1 1a4.5 4.5 0 0 1-2.5-2.5l1-1-1-2.2L9 8.5z';
const iTel = 'M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2';
const iMapa = 'M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z';
const iCheck = 'M5 12.5l4.5 4.5L19 7.5';

const saludo = 'Hola, quiero información de sus tours por la Huasteca.';

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 bg-crema/95 shadow-[0_1px_0_rgb(13_53_40/0.08)] backdrop-blur">
      <div className="contenedor flex h-18 items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0">
          <img {...foto('logo')} alt="Huasteca Viva" className="h-11 w-auto sm:h-12" />
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-6 font-bold text-selva lg:flex">
          <a href="#mojar" className="hover:text-verde">¿Hasta dónde?</a>
          <a href="#rutas" className="hover:text-verde">Rutas</a>
          <a href="#aventura" className="hover:text-verde">Aventura</a>
          <a href="#grupos" className="hover:text-verde">Grupos</a>
          <a href="#contacto" className="hover:text-verde">Contacto</a>
        </nav>
        <a href={wa(saludo)} className="boton min-h-11 bg-verde px-5 text-white hover:bg-selva">
          <Icono d={iWhats} />
          <span>WhatsApp</span>
        </a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="oscuro relative overflow-hidden bg-selva text-crema">
      <img {...foto('r-tamul')} alt="Viajeros con chaleco en una panga sobre el río Tampaón, con la cascada de Tamul al fondo" className="absolute inset-0 size-full object-cover" fetchPriority="high" />
      <div className="absolute inset-0 bg-gradient-to-t from-selva via-selva/70 to-selva/10 sm:bg-gradient-to-r sm:from-selva sm:via-selva/75 sm:to-selva/0" />
      <div className="contenedor relative flex min-h-[36rem] flex-col justify-end py-14 sm:min-h-[38rem] sm:justify-center sm:py-20">
        <p className="antetitulo">{negocio.lugar}</p>
        <h1 className="mt-3 max-w-2xl text-[2.6rem] text-white sm:text-6xl">Un día entero en la Huasteca Potosina, de tu hotel al río</h1>
        <p className="mt-5 max-w-xl text-lg text-crema/90">Te recogemos en tu hotel de Cd. Valles entre 9:15 y 9:30 y regresas entre 6 y 7 de la noche. Guía, transporte, entradas, equipo, seguro y comida incluidos.</p>
        <p className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="font-titulo text-4xl font-extrabold text-sol">{pesos(precio.adulto)}</span>
          <span className="text-crema/90">por adulto · niños de 6 a 10, {pesos(precio.nino)} · menores de 5 no pagan</span>
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="#mojar" className="boton bg-sol text-selva hover:bg-white">Elige tu ruta</a>
          <a href={wa(saludo)} className="boton border-2 border-crema/60 text-white hover:bg-white/10">
            <Icono d={iWhats} />
            {negocio.whatsapp.texto}
          </a>
        </div>
        <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-crema/20 pt-6">
          {cifras.map((c) => (
            <div key={c.texto}>
              <dt className="sr-only">{c.texto}</dt>
              <dd>
                <span className="block font-titulo text-3xl font-extrabold text-white">{c.valor}</span>
                <span className="text-sm text-crema/85">{c.texto}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Figura({ agua }: { agua: number }) {
  // Figura de una persona con los brazos arriba; el agua sube hasta el porcentaje del nivel (viewBox de 200 × 300).
  const y = 300 - agua * 3;
  return (
    <div className="mx-auto w-60 sm:w-64" aria-hidden="true">
      <svg viewBox="0 0 200 300" className="block h-auto w-full overflow-hidden rounded-[2rem] bg-[#e4efe9] ring-1 ring-selva/10">
        <g className="text-selva" stroke="currentColor" strokeLinecap="round" fill="none">
          <path d="M84 88 L66 22 M116 88 L134 22" strokeWidth="12" />
          <path d="M91 170 L88 280 M109 170 L112 280" strokeWidth="17" />
          <rect x="78" y="76" width="44" height="100" rx="20" fill="currentColor" stroke="none" />
          <circle cx="100" cy="50" r="19" fill="currentColor" stroke="none" />
        </g>
        <g className="agua" style={{ transform: `translateY(${y}px)` }}>
          <g className="ola">
            <path d="M0 0 Q 25 -7 50 0 T 100 0 T 150 0 T 200 0 T 250 0 T 300 0 T 350 0 T 400 0 V 320 H 0 Z" fill="#39c6bd" fillOpacity="0.82" />
          </g>
        </g>
        <g className="fill-selva/70 text-[11px] font-bold" textAnchor="end">
          <text x="188" y="54">cabeza</text>
          <text x="188" y="150">cintura</text>
          <text x="188" y="284">pies</text>
        </g>
      </svg>
    </div>
  );
}

function Contador({ etiqueta, nota, valor, min, cambiar }: { etiqueta: string; nota: string; valor: number; min: number; cambiar: (n: number) => void }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <p className="leading-tight">
        <span className="block font-bold">{etiqueta}</span>
        <span className="text-sm text-crema/80">{nota}</span>
      </p>
      <div className="flex items-center gap-2">
        <button type="button" onClick={() => cambiar(Math.max(min, valor - 1))} className="grid size-11 place-items-center rounded-full bg-white/10 text-xl font-bold hover:bg-white/20" aria-label={`Uno menos: ${etiqueta}`}>−</button>
        <span className="w-7 text-center font-titulo text-2xl font-extrabold" aria-live="polite">{valor}</span>
        <button type="button" onClick={() => cambiar(Math.min(20, valor + 1))} className="grid size-11 place-items-center rounded-full bg-white/10 text-xl font-bold hover:bg-white/20" aria-label={`Uno más: ${etiqueta}`}>+</button>
      </div>
    </div>
  );
}

function Mojar() {
  const [nivelId, setNivelId] = useState('cueva');
  const [adultos, setAdultos] = useState(2);
  const [ninos, setNinos] = useState(0);
  const [bebes, setBebes] = useState(0);

  const nivel = niveles.find((n) => n.id === nivelId)!;
  const ruta = nivel.ruta ? rutas.find((r) => r.id === nivel.ruta)! : null;
  const aventura = nivel.aventura ? aventuras.find((a) => a.id === nivel.aventura)! : null;

  const nombre = ruta ? ruta.nombre : aventura!.nombre;
  const personas = adultos + ninos;
  let total: number | null;
  let detalle: string;
  if (ruta) {
    total = adultos * precio.adulto + ninos * precio.nino;
    detalle = `${adultos} ${adultos === 1 ? 'adulto' : 'adultos'} × ${pesos(precio.adulto)}${ninos ? ` + ${ninos} ${ninos === 1 ? 'niño' : 'niños'} × ${pesos(precio.nino)}` : ''}`;
  } else {
    total = personas >= 4 ? adultos * 1500 : null;
    detalle = personas >= 4 ? `${adultos} ${adultos === 1 ? 'adulto' : 'adultos'} × $1,500${ninos ? ' + niños por confirmar' : ''}` : 'El rafting es de mínimo 4 personas';
  }
  const quienes = [
    `${adultos} ${adultos === 1 ? 'adulto' : 'adultos'}`,
    ninos ? `${ninos} ${ninos === 1 ? 'niño' : 'niños'} de 6 a 10 años` : '',
    bebes ? `${bebes} menor${bebes === 1 ? '' : 'es'} de 5 años` : '',
  ].filter(Boolean).join(', ');
  const mensaje = `Hola, quiero ${ruta ? 'la ruta' : ''} ${nombre} (nivel "${nivel.etiqueta}"). Somos ${quienes}. ¿Qué fechas tienen?`.replace('  ', ' ');

  return (
    <section id="mojar" className="py-16 sm:py-24">
      <div className="contenedor">
        <div className="max-w-3xl">
          <p className="antetitulo">Elige tu ruta</p>
          <h2 className="mt-2 text-4xl sm:text-5xl">¿Hasta dónde te quieres mojar?</h2>
          <p className="mt-4 text-lg text-gris">Todas las rutas llevan agua turquesa, pero no igual. Sube el agua hasta donde te animes y te decimos qué ruta es la tuya.</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[auto_minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start">
          <Figura agua={nivel.agua} />

          <fieldset>
            <legend className="sr-only">Qué tanto te quieres mojar</legend>
            <ol className="flex flex-col-reverse gap-2">
              {niveles.map((n, i) => (
                <li key={n.id}>
                  <button
                    type="button"
                    aria-pressed={nivelId === n.id}
                    onClick={() => setNivelId(n.id)}
                    className={`flex min-h-14 w-full items-center gap-3 rounded-2xl px-4 py-2 text-left font-bold transition ${nivelId === n.id ? 'bg-rio text-white' : 'bg-white text-selva ring-1 ring-selva/10 hover:ring-rio/50'}`}
                  >
                    <span className={`grid size-8 shrink-0 place-items-center rounded-full font-titulo text-sm ${nivelId === n.id ? 'bg-white text-rio' : 'bg-[#e4efe9] text-selva'}`}>{i + 1}</span>
                    <span>{n.etiqueta}</span>
                  </button>
                </li>
              ))}
            </ol>
            <p className="mt-3 text-sm text-gris">Del 1 (casi seco) al 6 (todo el día en el río).</p>
          </fieldset>

          <article className="oscuro overflow-hidden rounded-3xl bg-selva text-crema" aria-live="polite">
            <img {...foto(ruta ? ruta.foto : aventura!.foto!)} alt={ruta ? ruta.alt : aventura!.alt!} className="aspect-[2/1] w-full object-cover" loading="lazy" />
            <div className="p-6 sm:p-7">
              <p className="antetitulo">{nivel.titulo}</p>
              <h3 className="mt-2 text-2xl text-white sm:text-3xl">{nombre}</h3>
              <p className="mt-3 text-crema/90">{nivel.texto}</p>
              {ruta && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {ruta.datos.map((d) => <li key={d} className="rounded-full bg-white/10 px-3 py-1 text-sm font-bold text-white">{d}</li>)}
                </ul>
              )}
              <p className="mt-4 text-sm text-crema/80">{ruta ? ruta.aviso : 'Precio de niño y edad mínima del rafting: pregúntalos al reservar.'}</p>

              <div className="mt-6 space-y-3 border-t border-white/15 pt-5">
                <Contador etiqueta="Adultos" nota={ruta ? pesos(precio.adulto) : '$1,500 c/u'} valor={adultos} min={1} cambiar={setAdultos} />
                <Contador etiqueta="Niños de 6 a 10" nota={ruta ? pesos(precio.nino) : 'precio por confirmar'} valor={ninos} min={0} cambiar={setNinos} />
                <Contador etiqueta="Menores de 5" nota="no pagan el tour" valor={bebes} min={0} cambiar={setBebes} />
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4 rounded-2xl bg-white/10 px-4 py-3">
                <span className="text-sm text-crema/85">{detalle}</span>
                <span className="font-titulo text-3xl font-extrabold text-sol">{total !== null ? pesos(total) : '—'}</span>
              </div>
              <a href={wa(mensaje)} className="boton mt-5 w-full bg-sol text-selva hover:bg-white">
                <Icono d={iWhats} />
                Pedir fechas por WhatsApp
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Rutas() {
  return (
    <section id="rutas" className="bg-white py-16 sm:py-24">
      <div className="contenedor">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="antetitulo">Rutas principales</p>
            <h2 className="mt-2 text-4xl sm:text-5xl">Seis rutas de un día, el mismo precio</h2>
          </div>
          <p className="max-w-md text-gris">{pesos(precio.adulto)} por adulto y {pesos(precio.nino)} por niño de 6 a 10 años, en cualquiera de las seis.</p>
        </div>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {rutas.map((r) => (
            <li key={r.id} className="flex flex-col overflow-hidden rounded-3xl bg-crema ring-1 ring-selva/10">
              <img {...foto(r.foto)} alt={r.alt} className="aspect-[2/1] w-full object-cover" loading="lazy" />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-2xl">{r.nombre}</h3>
                <p className="mt-2 text-gris">{r.corto}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {r.datos.map((d) => <li key={d} className="chip">{d}</li>)}
                </ul>
                <details className="group mt-4">
                  <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 font-bold text-rio">
                    <span className="grid size-6 place-items-center rounded-full bg-rio text-white transition group-open:rotate-45" aria-hidden="true">+</span>
                    Itinerario del día
                  </summary>
                  <ol className="mt-2 space-y-1.5 border-l-2 border-turquesa pl-4 text-[0.98rem]">
                    {r.itinerario.map((p) => <li key={p}>{p}</li>)}
                  </ol>
                  <p className="mt-3 text-sm text-gris">{r.aviso}</p>
                </details>
                <a href={wa(`Hola, quiero la ruta ${r.nombre}. ¿Qué fechas tienen?`)} className="boton mt-auto self-start bg-verde text-white hover:bg-selva">
                  <Icono d={iWhats} />
                  Reservar esta ruta
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Incluye() {
  return (
    <section className="oscuro bg-selva py-16 text-crema sm:py-20">
      <div className="contenedor grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
        <div>
          <p className="antetitulo">En todas las rutas</p>
          <h2 className="mt-2 text-4xl text-white sm:text-5xl">Qué incluye tu día</h2>
          <p className="mt-4 text-crema/90">Tú solo llevas ropa cómoda, sandalias ajustables o tenis y bloqueador. Lo demás lo ponemos nosotros.</p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {incluye.map((i) => (
            <li key={i} className="flex items-start gap-3 rounded-2xl bg-white/[0.07] p-4">
              <Icono d={iCheck} className="mt-0.5 size-5 shrink-0 text-turquesa" />
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Aventura() {
  return (
    <section id="aventura" className="py-16 sm:py-24">
      <div className="contenedor">
        <div className="max-w-2xl">
          <p className="antetitulo">+ Aventura</p>
          <h2 className="mt-2 text-4xl sm:text-5xl">¿Eres más extremo?</h2>
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {aventuras.map((a) => (
            <li key={a.id} className="flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-selva/10">
              {a.foto ? (
                <img {...foto(a.foto)} alt={a.alt} className="aspect-[4/3] w-full object-cover" loading="lazy" />
              ) : (
                <div className="grid aspect-[4/3] place-items-center bg-rio text-white" aria-hidden="true">
                  <span className="text-center font-titulo text-5xl font-extrabold leading-none">14 m<span className="mt-1 block text-base font-bold">de profundidad</span></span>
                </div>
              )}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl">{a.nombre}</h3>
                <p className="mt-2 text-[0.98rem] text-gris">{a.texto}</p>
                {a.incluye.length > 0 && <p className="mt-3 text-sm text-gris">Incluye: {a.incluye.join(', ').toLowerCase()}.</p>}
                <p className="mt-auto pt-4">
                  <span className="font-titulo text-3xl font-extrabold text-verde">{a.precio}</span>
                  <span className="ml-2 text-sm text-gris">{a.nota}</span>
                </p>
                <a href={wa(`Hola, me interesa ${a.nombre.toLowerCase()}. ¿Qué fechas tienen?`)} className="boton mt-3 border-2 border-verde/40 text-verde hover:border-verde hover:bg-crema">
                  <Icono d={iWhats} />
                  Preguntar
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Otras() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="contenedor">
        <div className="max-w-2xl">
          <p className="antetitulo">Más rutas en la Huasteca</p>
          <h2 className="mt-2 text-4xl sm:text-5xl">Para armar tu itinerario</h2>
          <p className="mt-4 text-gris">Estos lugares no tienen ruta ni precio fijo: pregúntanos cómo agregarlos a tu viaje.</p>
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {otras.map((o) => (
            <li key={o.id}>
              <img {...foto(o.foto)} alt={o.alt} className="aspect-[4/3] w-full rounded-3xl object-cover" loading="lazy" />
              <h3 className="mt-4 text-xl">{o.nombre}</h3>
              <p className="mt-1.5 text-[0.98rem] text-gris">{o.texto}</p>
            </li>
          ))}
        </ul>
        <a href={wa('Hola, quiero armar un itinerario por la Huasteca que incluya ')} className="boton mt-10 bg-verde text-white hover:bg-selva">
          <Icono d={iWhats} />
          Armar mi itinerario
        </a>
      </div>
    </section>
  );
}

function Grupos() {
  return (
    <section id="grupos" className="py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="antetitulo">Viajes en grupo</p>
          <h2 className="mt-2 text-4xl sm:text-5xl">Desde 12 personas, precio especial</h2>
          <p className="mt-4 text-lg text-gris">Olvídate del viaje donde cada quien se va por su lado. Te ayudamos a armar el itinerario y te recomendamos hoteles, restaurantes y rutas. También puedes contratar nuestros servicios por separado.</p>
          <a href={wa('Hola, somos un grupo de ___ personas y queremos cotizar un viaje a la Huasteca.')} className="boton mt-7 bg-verde text-white hover:bg-selva">
            <Icono d={iWhats} />
            Cotizar para mi grupo
          </a>
        </div>
        <ul className="grid grid-cols-2 gap-3">
          {['Transporte', 'Entradas a los sitios', 'Servicio de guías', 'Equipo para actividades', 'Seguro de gastos médicos', 'Servicio de comidas'].map((s) => (
            <li key={s} className="flex min-h-20 items-center rounded-2xl bg-white p-4 font-bold text-selva ring-1 ring-selva/10">{s}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function AntesDeIr() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="text-4xl sm:text-5xl">Antes de ir</h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl">Qué llevar</h3>
            <ul className="mt-4 space-y-3">
              {recomendaciones.map((r) => (
                <li key={r} className="flex gap-3"><Icono d={iCheck} className="mt-1 size-5 shrink-0 text-verde" /><span>{r}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl">Condiciones de viaje</h3>
            <ul className="mt-4 space-y-3">
              {condiciones.map((c) => (
                <li key={c} className="border-l-2 border-turquesa pl-4">{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="oscuro bg-selva py-16 text-crema sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <p className="antetitulo">Contacto</p>
          <h2 className="mt-2 text-4xl text-white sm:text-5xl">Reserva tu ruta</h2>
          <p className="mt-4 text-lg text-crema/90">Al reservar te confirmamos la hora de recogida en tu hotel, el itinerario y el equipo que te acompaña.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={wa(saludo)} className="boton bg-sol text-selva hover:bg-white"><Icono d={iWhats} /> WhatsApp {negocio.whatsapp.texto}</a>
            <a href={`tel:${negocio.telefono.tel}`} className="boton border-2 border-crema/50 text-white hover:bg-white/10"><Icono d={iTel} /> {negocio.telefono.texto}</a>
          </div>
        </div>
        <dl className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <dt className="antetitulo">Oficina</dt>
            <dd className="mt-1">{negocio.direccion}</dd>
            <dd><a href={negocio.mapa} className="mt-2 inline-flex min-h-11 items-center gap-2 font-bold text-turquesa underline underline-offset-4 hover:text-white"><Icono d={iMapa} /> Abrir en Google Maps</a></dd>
          </div>
          <div>
            <dt className="antetitulo">Horario</dt>
            <dd className="mt-1">{negocio.horario}</dd>
          </div>
          <div>
            <dt className="antetitulo">Correo</dt>
            <dd className="mt-1 break-words"><a href={`mailto:${negocio.correo}`} className="underline underline-offset-4 hover:text-white">{negocio.correo}</a></dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="antetitulo">Redes</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              <a href={negocio.facebook} className="boton min-h-11 border border-crema/30 px-4 text-white hover:bg-white/10">Facebook</a>
              <a href={negocio.instagram} className="boton min-h-11 border border-crema/30 px-4 text-white hover:bg-white/10">Instagram</a>
              <a href={negocio.twitter} className="boton min-h-11 border border-crema/30 px-4 text-white hover:bg-white/10">X (Twitter)</a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="border-t border-white/10 bg-selva py-8 pb-24 text-sm text-crema/80 md:pb-8">
      <div className="contenedor flex flex-col gap-2 sm:flex-row sm:justify-between">
        <p className="font-titulo text-base font-extrabold text-white">{negocio.nombre}</p>
        <p>Tours por la Huasteca Potosina desde {negocio.lugar}</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/10 bg-selva text-white md:hidden">
      <a href={wa(saludo)} className="flex min-h-15 items-center justify-center gap-2 bg-verde font-bold"><Icono d={iWhats} /> WhatsApp</a>
      <a href={`tel:${negocio.telefono.tel}`} className="flex min-h-15 items-center justify-center gap-2 font-bold"><Icono d={iTel} /> Llamar</a>
      <a href={negocio.mapa} className="flex min-h-15 items-center justify-center gap-2 font-bold"><Icono d={iMapa} /> Llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <Encabezado />
      <main>
        <Portada />
        <Mojar />
        <Rutas />
        <Incluye />
        <Aventura />
        <Otras />
        <Grupos />
        <AntesDeIr />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
