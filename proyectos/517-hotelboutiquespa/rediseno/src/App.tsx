import { useEffect, useRef, useState } from 'react';
import fotosJson from './data/fotos.json';
import { negocio, intro, habitaciones, enTodas, extrasNombre, amenidades, spa, restaurantes, experiencias, bodas, decoraciones, comoLlegar } from './data/content';
import type { Extra, Habitacion } from './data/content';

const fotos = fotosJson as unknown as Record<string, [number, number]>;
const base = import.meta.env.BASE_URL;
const src = (n: string) => `${base}${n}.webp`;
const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

function Foto({ n, alt, className = '', eager = false }: { n: string; alt: string; className?: string; eager?: boolean }) {
  const [w, h] = fotos[n] ?? [1200, 800];
  return <img src={src(n)} alt={alt} width={w} height={h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={className} />;
}

function capacidad(h: Habitacion) {
  if (h.porConfirmar) return 'Capacidad por confirmar';
  if (h.total) return `Hasta ${h.total} huéspedes`;
  const a = `${h.adultos} adultos`;
  return h.ninos ? `${a} + ${h.ninos} niños` : a;
}

// ¿La habitación admite a este grupo según su ficha? Las fichas sin dato de niños solo cuentan para grupos sin niños.
function cabe(h: Habitacion, adultos: number, ninos: number) {
  if (h.porConfirmar) return false;
  if (h.total) return adultos + ninos <= h.total;
  if (h.adultos == null || adultos > h.adultos) return false;
  if (ninos === 0) return true;
  return h.ninos != null && ninos <= h.ninos;
}
const plazas = (h: Habitacion) => h.total ?? (h.adultos ?? 0) + (h.ninos ?? 0);

function Encabezado() {
  const enlaces = [['#habitaciones', 'Habitaciones'], ['#spa', 'Spa'], ['#restaurantes', 'Restaurantes'], ['#experiencias', 'Experiencias'], ['#bodas', 'Bodas'], ['#llegar', 'Cómo llegar']];
  return (
    <header className="sticky top-0 z-30 border-b border-tinta/10 bg-arena/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0"><img src={`${base}logo.png`} alt="Hotel Boutique & Spa Valle de Guadalupe" width={600} height={144} className="h-9 w-auto sm:h-10" /></a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-6 text-sm font-semibold">{enlaces.map(([h, t]) => <li key={h}><a href={h} className="hover:text-terracota">{t}</a></li>)}</ul>
        </nav>
        <a href={negocio.reservar} className="btn-terracota px-4 py-2.5">Reservar</a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-olivo-osc text-white">
      <Foto n="hero-alberca" alt="Alberca del hotel entre palmeras, con los viñedos y los cerros del valle al fondo" eager className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#1A2210] via-[#1A2210]/65 to-[#1A2210]/25" />
      <div className="contenedor flex min-h-[36rem] flex-col justify-end pb-12 pt-24 sm:min-h-[42rem]">
        <p className="eyebrow text-trigo">Ruta del Vino · Ensenada, Baja California</p>
        <h1 className="mt-3 max-w-4xl text-5xl sm:text-6xl lg:text-7xl">Hotel boutique y spa entre los viñedos de Valle de Guadalupe</h1>
        <p className="mt-5 max-w-2xl text-lg text-white/90">17 tipos de habitación, spa con alberca infinita, dos restaurantes, club ecuestre y jardines para bodas.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#habitaciones" className="btn-terracota">Encuentra tu habitación</a>
          <a href={wa('Hola, quisiera información para hospedarme en el Hotel Boutique Valle de Guadalupe.')} className="btn-linea">Escribir por WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

function Contador({ etiqueta, nota, valor, min, max, cambiar }: { etiqueta: string; nota?: string; valor: number; min: number; max: number; cambiar: (n: number) => void }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl bg-white px-4 py-3 ring-1 ring-tinta/10">
      <div><p className="font-bold">{etiqueta}</p>{nota && <p className="text-xs text-gris">{nota}</p>}</div>
      <div className="flex items-center gap-3">
        <button type="button" onClick={() => cambiar(Math.max(min, valor - 1))} disabled={valor <= min} aria-label={`Quitar ${etiqueta.toLowerCase()}`} className="grid h-10 w-10 place-items-center rounded-full border border-tinta/25 text-xl disabled:opacity-35">−</button>
        <output aria-live="polite" className="w-6 text-center font-display text-2xl">{valor}</output>
        <button type="button" onClick={() => cambiar(Math.min(max, valor + 1))} disabled={valor >= max} aria-label={`Agregar ${etiqueta.toLowerCase()}`} className="grid h-10 w-10 place-items-center rounded-full border border-tinta/25 text-xl disabled:opacity-35">+</button>
      </div>
    </div>
  );
}

function Detalle({ h, adultos, ninos, cerrar }: { h: Habitacion | null; adultos: number; ninos: number; cerrar: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (h && !d.open) d.showModal();
    if (!h && d.open) d.close();
  }, [h]);
  const grupo = `${adultos} ${adultos === 1 ? 'adulto' : 'adultos'}${ninos ? ` y ${ninos} ${ninos === 1 ? 'niño' : 'niños'}` : ''}`;
  return (
    <dialog ref={ref} onClose={cerrar} aria-labelledby="detalle-t" className="m-auto w-[min(56rem,calc(100%-2rem))] max-h-[90vh] overflow-y-auto rounded-3xl bg-arena p-0 text-tinta backdrop:bg-black/60">
      {h && (
        <div>
          <div className="grid grid-cols-2 gap-1">
            {h.fotos.map((f, i) => <div key={f + i} className="relative aspect-[4/3]"><Foto n={f} alt={h.alt[i]} className="absolute inset-0 h-full w-full object-cover" /></div>)}
          </div>
          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <h3 id="detalle-t" className="text-3xl sm:text-4xl">{h.nombre}</h3>
              <button type="button" onClick={cerrar} className="shrink-0 rounded-full border border-tinta/25 px-4 py-2 text-sm font-bold">Cerrar</button>
            </div>
            <p className="mt-2 font-semibold text-olivo">{capacidad(h)}{h.m2 ? ` · aprox. ${h.m2} m²` : ''}</p>
            {h.porConfirmar && <p className="mt-3 rounded-xl bg-terracota-claro px-4 py-3 text-sm">{h.porConfirmar}</p>}
            <div className="mt-5 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="eyebrow">Camas</p>
                <p className="mt-2">{h.camas}</p>
                {h.rasgos.length > 0 && <><p className="eyebrow mt-5">Lo que la distingue</p><ul className="mt-2 space-y-1">{h.rasgos.map((r) => <li key={r}>· {r}</li>)}</ul></>}
              </div>
              <div>
                <p className="eyebrow">En todas las habitaciones</p>
                <ul className="mt-2 space-y-1 text-gris">{enTodas.map((r) => <li key={r}>· {r}</li>)}</ul>
                {(h.ninos || h.total) && <p className="mt-3 text-sm text-gris">Niños: hasta 12 años.</p>}
              </div>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={negocio.reservar} className="btn-terracota">Ver fechas y tarifas</a>
              <a href={wa(`Hola, me interesa la habitación ${h.nombre} para ${grupo}. ¿Tienen disponibilidad?`)} className="btn-olivo">Preguntar por WhatsApp</a>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}

function Habitaciones() {
  const [adultos, setAdultos] = useState(2);
  const [ninos, setNinos] = useState(0);
  const [pide, setPide] = useState<Extra[]>([]);
  const [todas, setTodas] = useState(false);
  const [abierta, setAbierta] = useState<Habitacion | null>(null);
  const filtros: Extra[] = ['terraza', 'fogata', 'jacuzzi', 'cocina', 'tina', 'dos-recamaras'];
  const alternar = (e: Extra) => setPide((p) => (p.includes(e) ? p.filter((x) => x !== e) : [...p, e]));
  const resultado = habitaciones
    .filter((h) => cabe(h, adultos, ninos) && pide.every((e) => h.extras.includes(e)))
    .sort((a, b) => plazas(a) - plazas(b));
  const lista = todas ? habitaciones : resultado;
  const sinDatoNinos = ninos > 0 ? habitaciones.filter((h) => !h.total && h.ninos == null && !h.porConfirmar && h.adultos != null && adultos <= h.adultos && pide.every((e) => h.extras.includes(e))) : [];
  return (
    <section id="habitaciones" className="py-20 sm:py-24">
      <div className="contenedor">
        <div className="grid gap-10 lg:grid-cols-[22rem_1fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="eyebrow">Habitaciones</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">¿Cuántos vienen?</h2>
            <p className="mt-4 text-gris">Diecisiete tipos de habitación, de la Classic para dos a la Governor de dos recámaras para ocho. Dinos quiénes viajan y qué no puede faltar.</p>
            <div className="mt-6 space-y-3">
              <Contador etiqueta="Adultos" valor={adultos} min={1} max={8} cambiar={setAdultos} />
              <Contador etiqueta="Niños" nota="Hasta 12 años" valor={ninos} min={0} max={4} cambiar={setNinos} />
            </div>
            <p className="mt-6 text-sm font-bold">Que tenga</p>
            <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Filtrar por características">
              {filtros.map((e) => <button key={e} type="button" aria-pressed={pide.includes(e)} onClick={() => alternar(e)} className="chip">{extrasNombre[e]}</button>)}
            </div>
          </div>
          <div className="min-w-0">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <p aria-live="polite" className="font-display text-2xl">
                {todas ? `Las ${habitaciones.length} habitaciones` : resultado.length ? `${resultado.length} ${resultado.length === 1 ? 'habitación' : 'habitaciones'} para ustedes` : 'Ninguna habitación coincide'}
              </p>
              <button type="button" onClick={() => setTodas((t) => !t)} className="text-sm font-bold text-terracota underline underline-offset-4">{todas ? 'Volver a mi búsqueda' : 'Ver las 17'}</button>
            </div>
            {!todas && resultado.length === 0 && (
              <p className="mt-4 rounded-2xl bg-white p-5 ring-1 ring-tinta/10">Para grupos grandes se pueden combinar habitaciones. <a href={wa(`Hola, somos ${adultos} adultos${ninos ? ` y ${ninos} niños` : ''}. ¿Qué habitaciones nos recomiendan?`)} className="font-bold text-terracota underline">Pregunta por WhatsApp</a> y el hotel te arma la opción.</p>
            )}
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
              {lista.map((h) => (
                <li key={h.id} className="group overflow-hidden rounded-3xl bg-white ring-1 ring-tinta/10">
                  <button type="button" onClick={() => setAbierta(h)} className="grid w-full grid-cols-[7.5rem_1fr] text-left sm:block" aria-label={`Ver detalles de ${h.nombre}`}>
                    <div className="relative overflow-hidden sm:aspect-[4/3]"><Foto n={h.fotos[0]} alt={h.alt[0]} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /></div>
                    <div className="p-4 sm:p-5">
                      <h3 className="text-xl sm:text-2xl">{h.nombre}</h3>
                      <p className="mt-1 text-sm font-semibold text-olivo">{capacidad(h)}{h.m2 ? ` · ${h.m2} m²` : ''}</p>
                      <p className="mt-2 text-sm text-gris">{h.camas === '[PENDIENTE]' ? 'Camas por confirmar' : h.camas}</p>
                      {h.extras.length > 0 && <p className="mt-3 flex flex-wrap gap-1.5">{h.extras.map((e) => <span key={e} className="rounded-full bg-arena-2 px-2.5 py-1 text-xs font-semibold">{extrasNombre[e]}</span>)}</p>}
                      <span className="mt-3 inline-block text-sm font-bold text-terracota sm:mt-4">Ver detalles →</span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
            {!todas && sinDatoNinos.length > 0 && (
              <p className="mt-6 text-sm text-gris">Las fichas de {sinDatoNinos.map((h) => h.nombre).join(', ')} no indican si admiten niños. <a href={wa('Hola, viajo con niños. ¿Puedo hospedarme en estas habitaciones: ' + sinDatoNinos.map((h) => h.nombre).join(', ') + '?')} className="font-bold text-terracota underline">Pregúntalo por WhatsApp</a>.</p>
            )}
          </div>
        </div>
      </div>
      <Detalle h={abierta} adultos={adultos} ninos={ninos} cerrar={() => setAbierta(null)} />
    </section>
  );
}

function Hotel() {
  return (
    <section id="hotel" className="bg-olivo-osc py-20 text-white sm:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow text-trigo">El hotel</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Privacidad, exclusividad y tranquilidad en la Ruta del Vino</h2>
          {intro.map((t) => <p key={t.slice(0, 20)} className="mt-4 text-white/85">{t}</p>)}
          <ul className="mt-8 grid gap-x-6 gap-y-2 sm:grid-cols-2">
            {amenidades.map((a) => <li key={a} className="flex gap-2 text-white/90"><span aria-hidden="true" className="text-trigo">✦</span>{a}</li>)}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-3xl"><Foto n="alberca-vinedos" alt="Alberca con salas y fogata frente a los viñedos" className="absolute inset-0 h-full w-full object-cover" /></div>
          <div className="relative aspect-square overflow-hidden rounded-3xl"><Foto n="aerea" alt="Vista aérea del jardín, la alberca y el jacuzzi del hotel" className="absolute inset-0 h-full w-full object-cover" /></div>
          <div className="relative aspect-square overflow-hidden rounded-3xl"><Foto n="caballo-vinedo" alt="Jinete a caballo por un camino entre viñedos frente a las villas" className="absolute inset-0 h-full w-full object-cover" /></div>
        </div>
      </div>
    </section>
  );
}

function Spa() {
  return (
    <section id="spa" className="py-20 sm:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="grid grid-cols-6 gap-3">
          <div className="relative col-span-4 aspect-[4/5] overflow-hidden rounded-3xl"><Foto n="yoga" alt="Dos mujeres meditando frente a un ventanal con vista a los viñedos" className="absolute inset-0 h-full w-full object-cover" /></div>
          <div className="col-span-2 grid grid-rows-2 gap-3">
            <div className="relative overflow-hidden rounded-3xl"><Foto n="spa-infinity" alt="Alberca infinita del spa frente a los viñedos" className="absolute inset-0 h-full w-full object-cover" /></div>
            <div className="relative overflow-hidden rounded-3xl"><Foto n="sauna" alt="Pareja en batas blancas dentro del sauna de madera" className="absolute inset-0 h-full w-full object-cover" /></div>
          </div>
        </div>
        <div>
          <p className="eyebrow">Spa Luna de Sol · Yoga Spa Retreat</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Cuerpo, mente y corazón, frente a los viñedos</h2>
          {spa.texto.map((t) => <p key={t.slice(0, 20)} className="mt-4 text-gris">{t}</p>)}
          <dl className="mt-8 divide-y divide-tinta/10 border-y border-tinta/10">
            {spa.servicios.map((s) => <div key={s.t} className="grid gap-1 py-3 sm:grid-cols-[10rem_1fr]"><dt className="font-bold">{s.t}</dt><dd className="text-gris">{s.d}</dd></div>)}
          </dl>
          <a href={wa('Hola, quisiera información de los servicios del spa Luna de Sol.')} className="btn-olivo mt-8">Reservar en el spa</a>
        </div>
      </div>
    </section>
  );
}

function Restaurantes() {
  const [fuego, omakase] = restaurantes;
  return (
    <section id="restaurantes" className="bg-arena-2 py-20 sm:py-24">
      <div className="contenedor">
        <p className="eyebrow">Restaurantes</p>
        <h2 className="mt-3 max-w-3xl text-4xl sm:text-5xl">Dos cocinas: la del valle y la del chef</h2>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {[fuego, omakase].map((r) => (
            <article key={r.nombre} className="overflow-hidden rounded-3xl bg-white ring-1 ring-tinta/10">
              <div className="grid grid-cols-[1.4fr_1fr] gap-1">
                <div className="relative aspect-[4/3]"><Foto n={r.fotos[0]} alt={r.alt[0]} className="absolute inset-0 h-full w-full object-cover" /></div>
                <div className="relative"><Foto n={r.fotos[1]} alt={r.alt[1]} className="absolute inset-0 h-full w-full object-cover" /></div>
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-sm font-bold text-terracota">{r.tipo}</p>
                <h3 className="mt-1 text-3xl">{r.nombre}</h3>
                <p className="mt-3 text-gris">{r.texto}</p>
                {'terrazas' in r && r.terrazas && (
                  <ul className="mt-5 space-y-3">{r.terrazas.map((t) => <li key={t.t}><p className="font-bold">{t.t}</p><p className="text-sm text-gris">{t.d}</p></li>)}</ul>
                )}
                {'chef' in r && r.chef && <p className="mt-5 border-l-2 border-terracota pl-4 text-sm text-gris"><span className="font-bold text-tinta">Chef Antonio Quindere. </span>{r.chef}</p>}
                <a href={wa(`Hola, quisiera reservar mesa en ${r.nombre}.`)} className="btn-terracota mt-6">Reservar mesa</a>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-gris">Menús y horarios: [PENDIENTE] (el sitio enlaza un menú que no está publicado como texto).</p>
      </div>
    </section>
  );
}

function Experiencias() {
  return (
    <section id="experiencias" className="py-20 sm:py-24">
      <div className="contenedor">
        <p className="eyebrow">Experiencias</p>
        <h2 className="mt-3 max-w-3xl text-4xl sm:text-5xl">A caballo, en bicicleta o de cata por el valle</h2>
        <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-6 lg:grid-cols-4">
          {experiencias.map((e) => (
            <li key={e.t}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl"><Foto n={e.foto} alt={e.alt} className="absolute inset-0 h-full w-full object-cover" /></div>
              <h3 className="mt-4 text-xl sm:text-2xl">{e.t}</h3>
              <p className="mt-2 text-sm text-gris sm:text-base">{e.d}</p>
            </li>
          ))}
        </ul>
        <a href={wa('Hola, quisiera información de las experiencias del hotel (Equitarius, Valle Tours, catas o bicicletas).')} className="btn-olivo mt-10">Preguntar por una experiencia</a>
      </div>
    </section>
  );
}

function Bodas() {
  return (
    <section id="bodas" className="relative isolate overflow-hidden bg-tinto py-20 text-white sm:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow text-trigo">Bodas entre viñedos</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">El escenario más romántico de Baja California</h2>
          <p className="mt-4 text-white/85">{bodas.texto}</p>
          <p className="mt-6 text-sm text-white/70">Se han casado aquí: {bodas.parejas.join(', ')}.</p>
          <a href={wa('Hola, quisiera información para hacer mi boda en el Hotel Boutique Valle de Guadalupe.')} className="btn-linea mt-8">Planear mi boda</a>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl"><Foto n="boda" alt="Novios besándose entre flores rosas" className="absolute inset-0 h-full w-full object-cover" /></div>
          <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-3xl"><Foto n="boda-3" alt="Novios junto a una fuente de piedra en el jardín" className="absolute inset-0 h-full w-full object-cover" /></div>
        </div>
      </div>
    </section>
  );
}

function Decoraciones() {
  const [n, setN] = useState(0);
  return (
    <section id="decoraciones" className="py-20 sm:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl"><Foto n="decoracion" alt="Cama decorada con globos de aniversario, pétalos y una botella de vino" className="absolute inset-0 h-full w-full object-cover" /></div>
        <div>
          <p className="eyebrow">Paquetes de decoración</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Llega y que la habitación ya esté de fiesta</h2>
          <p className="mt-4 text-gris">{decoraciones.texto}</p>
          <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Paquetes">
            {decoraciones.paquetes.map((_, i) => <button key={i} type="button" role="tab" aria-selected={n === i} onClick={() => setN(i)} className={`chip ${n === i ? 'border-terracota bg-terracota text-white' : ''}`}>Paquete {i + 1}</button>)}
          </div>
          <ul role="tabpanel" className="mt-5 grid gap-2 rounded-2xl bg-white p-5 ring-1 ring-tinta/10 sm:grid-cols-2">
            {decoraciones.paquetes[n].map((x) => <li key={x} className="flex gap-2"><span aria-hidden="true" className="text-terracota">♥</span>{x}</li>)}
          </ul>
          <ul className="mt-4 space-y-1 text-sm text-gris">{decoraciones.condiciones.map((c) => <li key={c}>· {c}</li>)}</ul>
          <a href={wa(`Hola, quisiera el paquete de decoración #${n + 1} para mi estancia.`)} className="btn-terracota mt-6">Pedir el paquete {n + 1}</a>
        </div>
      </div>
    </section>
  );
}

function ComoLlegar() {
  return (
    <section id="llegar" className="bg-arena-2 py-20 sm:py-24">
      <div className="contenedor">
        <p className="eyebrow">Cómo llegar</p>
        <h2 className="mt-3 max-w-3xl text-4xl sm:text-5xl">Del aeropuerto de Tijuana al Camino de los Ranchos</h2>
        <ol className="mt-12 grid gap-6 lg:grid-cols-3">
          {comoLlegar.map((t, i) => (
            <li key={t.t} className="rounded-3xl bg-white p-6 ring-1 ring-tinta/10">
              <p className="font-display text-5xl text-terracota">{i + 1}</p>
              <h3 className="mt-2 text-2xl">{t.t}</h3>
              <ul className="mt-4 space-y-3 text-gris">{t.pasos.map((p) => <li key={p}>{p}</li>)}</ul>
            </li>
          ))}
        </ol>
        <a href={negocio.mapa} className="btn-olivo mt-8">Abrir en Google Maps</a>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="py-20 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Te esperamos en el valle</h2>
          <p className="mt-4 text-gris">{negocio.horario}.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={negocio.reservar} className="btn-terracota">Reservar en línea</a>
            <a href={wa('Hola, quisiera información del Hotel Boutique Valle de Guadalupe.')} className="btn-olivo">WhatsApp</a>
          </div>
        </div>
        <dl className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2"><dt className="eyebrow">Dirección</dt><dd className="mt-1">{negocio.direccion}</dd></div>
          <div><dt className="eyebrow">Teléfonos</dt><dd className="mt-1 space-y-1">{negocio.telefonos.map((t) => <a key={t.t} href={`tel:${t.link}`} className="block hover:text-terracota">{t.t} <span className="text-sm text-gris">· {t.nota}</span></a>)}<a href={`tel:${negocio.concierge.link}`} className="block hover:text-terracota">{negocio.concierge.t} <span className="text-sm text-gris">· Concierge</span></a></dd></div>
          <div className="sm:col-span-2"><dt className="eyebrow">Correo</dt><dd className="mt-1 space-y-1 break-all sm:break-normal"><a href={`mailto:${negocio.correo}`} className="block hover:text-terracota">{negocio.correo}</a><a href={`mailto:${negocio.correoContacto}`} className="block hover:text-terracota">{negocio.correoContacto}</a></dd></div>
          <div className="sm:col-span-2"><dt className="eyebrow">Síguenos</dt><dd className="mt-2 flex flex-wrap gap-2"><a href={negocio.instagram} className="chip">Instagram</a><a href={negocio.facebook} className="chip">Facebook</a><a href={negocio.tripadvisor} className="chip">Tripadvisor</a></dd></div>
        </dl>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a href="#habitaciones" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2">Ir a las habitaciones</a>
      <Encabezado />
      <main>
        <Portada />
        <Habitaciones />
        <Hotel />
        <Spa />
        <Restaurantes />
        <Experiencias />
        <Bodas />
        <Decoraciones />
        <ComoLlegar />
        <Contacto />
      </main>
      <footer className="bg-olivo-osc pb-24 pt-10 text-sm text-white/75 md:pb-10">
        <div className="contenedor flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <img src={`${base}logo.png`} alt="Hotel Boutique & Spa Valle de Guadalupe" width={600} height={144} loading="lazy" className="h-9 w-auto brightness-0 invert" />
          <p>© {negocio.nombre} · Valle de Guadalupe, Ensenada, B.C.</p>
        </div>
      </footer>
      <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/10 bg-olivo-osc text-sm font-semibold text-white md:hidden">
        <a href={`tel:${negocio.telefonos[0].link}`} className="py-3.5 text-center">Llamar</a>
        <a href={wa('Hola, quisiera información del Hotel Boutique Valle de Guadalupe.')} className="border-x border-white/10 py-3.5 text-center">WhatsApp</a>
        <a href={negocio.reservar} className="bg-terracota py-3.5 text-center">Reservar</a>
      </nav>
    </>
  );
}
