import { useState } from 'react';
import { barberia, estilos, horario, paquetes, resenas, servicios, wa } from './data/content';
import fotos from './data/fotos.json';

const medidas = fotos as unknown as Record<string, [number, number]>;
const foto = (n: string) => ({ src: `./${n}.webp`, width: medidas[n][0], height: medidas[n][1] });
const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;
const porId = Object.fromEntries(servicios.map((s) => [s.id, s]));

function Icono({ d, className = 'size-5' }: { d: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}
const iWhats = 'M3 21l1.7-5A8.5 8.5 0 1 1 8 19.3L3 21zM9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.8-2.2-1-1 1a4.5 4.5 0 0 1-2.5-2.5l1-1-1-2.2L9 8.5z';
const iTel = 'M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2';
const iMapa = 'M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z';

function abiertoAhora(): { abierto: boolean; texto: string } {
  try {
    const partes = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Cancun', weekday: 'short', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' }).formatToParts(new Date());
    const val = (t: string) => partes.find((p) => p.type === t)?.value ?? '';
    const min = Number(val('hour')) * 60 + Number(val('minute'));
    const domingo = val('weekday') === 'Sun';
    const cierra = domingo ? horario.cierraDomingo : horario.cierra;
    const abierto = min >= horario.abre && min < cierra;
    return { abierto, texto: abierto ? `Abierto ahora, hasta las ${domingo ? '6:30' : '8:30'} p. m.` : 'Cerrado ahora: abre a las 10 a. m.' };
  } catch {
    return { abierto: false, texto: 'Todos los días desde las 10 a. m.' };
  }
}

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 bg-negro/95 text-white backdrop-blur">
      <div className="contenedor flex h-18 items-center justify-between gap-4">
        <a href="#inicio" className="titulo shrink-0 text-3xl">Homme <span className="text-laton">Barbers</span></a>
        <nav aria-label="Principal" className="hidden items-center gap-7 font-medium md:flex">
          <a href="#paquete" className="hover:text-laton">¿Paquete o suelto?</a>
          <a href="#servicios" className="hover:text-laton">Servicios</a>
          <a href="#visita" className="hover:text-laton">Cómo llegar</a>
        </nav>
        <a href={`tel:${barberia.telefono.tel}`} className="boton min-h-11 bg-rojo px-5 text-white hover:bg-[#8e1d17]">
          <Icono d={iTel} />
          <span className="hidden sm:inline">{barberia.telefono.texto}</span>
          <span className="sm:hidden">Llamar</span>
        </a>
      </div>
    </header>
  );
}

function Portada() {
  const estado = abiertoAhora();
  return (
    <section id="inicio" className="bg-negro text-white">
      <div className="contenedor grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_1.05fr] lg:py-20">
        <div>
          <p className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold ${estado.abierto ? 'bg-[#1f6b3a]' : 'bg-white/10'}`}>
            <span className={`size-2 rounded-full ${estado.abierto ? 'bg-[#7ee2a0]' : 'bg-humo'}`} aria-hidden="true" />
            {estado.texto}
          </p>
          <h1 className="titulo mt-5 text-6xl sm:text-7xl lg:text-8xl">Barbería en Cancún, sin cita</h1>
          <p className="mt-5 max-w-xl text-lg text-white/85">Corte, barba, cejas y faciales en Av. Huayacán. Llegas y te atienden. {barberia.incluye}.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={barberia.mapa} className="boton bg-rojo text-white hover:bg-[#8e1d17]">
              <Icono d={iMapa} />
              Cómo llegar
            </a>
            <a href="#paquete" className="boton border-2 border-white/60 text-white hover:bg-white/10">Ver precios</a>
          </div>
        </div>
        <figure>
          <img {...foto('f-local')} alt="Interior de la barbería: sillas con capas negras, espejos, repisas con productos y lámparas colgantes" className="aspect-square w-full rounded-3xl object-cover" fetchPriority="high" />
        </figure>
      </div>
    </section>
  );
}

function Paquete() {
  const [elegidos, setElegidos] = useState<string[]>(['corte', 'ceja']);
  const alternar = (id: string) => setElegidos((e) => (e.includes(id) ? e.filter((x) => x !== id) : [...e, id]));

  const suelto = elegidos.reduce((t, id) => t + porId[id].precio, 0);
  const opciones = paquetes
    .filter((p) => elegidos.some((id) => p.cubre.includes(id)))
    .map((p) => {
      const fuera = elegidos.filter((id) => !p.cubre.includes(id));
      const total = p.precio + fuera.reduce((t, id) => t + porId[id].precio, 0);
      const regalo = p.cubre.filter((id) => !elegidos.includes(id)).map((id) => porId[id].nombre.toLowerCase());
      return { p, fuera, total, regalo };
    })
    .sort((a, b) => a.total - b.total);
  const mejor = opciones[0];
  const conviene = mejor && mejor.total < suelto;
  const cerca = mejor && !conviene && mejor.total - suelto <= 100 ? mejor : null;

  const mensaje = conviene
    ? `Hola, quiero el ${mejor.p.nombre}${mejor.fuera.length ? ` más ${mejor.fuera.map((id) => porId[id].nombre.toLowerCase()).join(' y ')}` : ''}. ¿A qué hora hay menos espera?`
    : `Hola, quiero ${elegidos.map((id) => porId[id].nombre.toLowerCase()).join(', ')}. ¿A qué hora hay menos espera?`;

  return (
    <section id="paquete" className="bg-crema py-16 sm:py-24">
      <div className="contenedor">
        <div className="max-w-3xl">
          <h2 className="titulo text-6xl sm:text-7xl">¿Paquete o suelto?</h2>
          <p className="mt-3 text-lg text-gris">Marca lo que te quieres hacer y te decimos qué sale más barato con sus precios: pedirlo suelto o en uno de sus cuatro paquetes.</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start">
          <fieldset>
            <legend className="font-semibold">Lo que te vas a hacer</legend>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {servicios.map((s) => {
                const activo = elegidos.includes(s.id);
                return (
                  <li key={s.id}>
                    <label className={`flex cursor-pointer items-center justify-between gap-3 rounded-2xl border-2 p-4 transition-colors has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-rojo ${activo ? 'border-negro bg-white' : 'border-negro/10 bg-white/60 hover:border-negro/30'}`}>
                      <span className="flex items-center gap-3">
                        <input type="checkbox" checked={activo} onChange={() => alternar(s.id)} className="size-5 accent-[#b3261e]" />
                        <span className="font-semibold leading-tight">{s.nombre}</span>
                      </span>
                      <span className="font-titulo text-2xl">{pesos(s.precio)}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </fieldset>

          <aside className="rounded-3xl bg-negro p-6 text-white sm:p-8 lg:sticky lg:top-24" aria-live="polite">
            {elegidos.length === 0 ? (
              <p className="text-lg">Marca al menos un servicio.</p>
            ) : (
              <>
                <dl className="space-y-3">
                  <div className="flex items-baseline justify-between gap-4 border-b border-white/15 pb-3">
                    <dt>Suelto</dt>
                    <dd className={`titulo text-4xl ${conviene ? 'text-humo line-through decoration-2' : 'text-laton'}`}>{pesos(suelto)}</dd>
                  </div>
                  {mejor && (
                    <div className="flex items-baseline justify-between gap-4">
                      <dt>
                        {mejor.p.nombre}
                        {mejor.fuera.length > 0 && <span className="block text-sm text-humo">más {mejor.fuera.map((id) => porId[id].nombre.toLowerCase()).join(' y ')}</span>}
                      </dt>
                      <dd className={`titulo text-4xl ${conviene ? 'text-laton' : 'text-humo'}`}>{pesos(mejor.total)}</dd>
                    </div>
                  )}
                </dl>
                <p className="mt-6 text-lg">
                  {conviene ? (
                    <>Te conviene el <strong className="text-laton">{mejor.p.nombre}</strong>: ahorras {pesos(suelto - mejor.total)}{mejor.regalo.length ? ` y además incluye ${mejor.regalo.join(' y ')}` : ''}{mejor.p.extras.length ? `, más ${mejor.p.extras.join(', ').toLowerCase()}` : ''}.</>
                  ) : cerca ? (
                    <>Pídelo suelto. Por {pesos(cerca.total - suelto)} más, el <strong className="text-laton">{cerca.p.nombre}</strong> suma {[...cerca.regalo, ...cerca.p.extras.map((x) => x.toLowerCase())].join(', ')}.</>
                  ) : (
                    <>Te conviene pedirlo suelto.</>
                  )}
                </p>
                <p className="mt-3 text-sm text-humo">{barberia.incluye}. Precios de su sitio, en pesos.</p>
                <a href={wa(mensaje)} className="boton mt-6 w-full bg-rojo text-white hover:bg-[#8e1d17]">
                  <Icono d={iWhats} />
                  Preguntar por WhatsApp
                </a>
              </>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}

function Servicios() {
  return (
    <section id="servicios" className="py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="titulo text-6xl sm:text-7xl">Sus paquetes</h2>
          <ul className="mt-6 space-y-4">
            {paquetes.map((p) => (
              <li key={p.id} className="rounded-3xl border-2 border-negro/10 p-5">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="titulo text-3xl">{p.nombre}</h3>
                  <p className="titulo text-3xl text-rojo">{pesos(p.precio)}</p>
                </div>
                <p className="mt-1 text-gris">{[...p.cubre.map((id) => porId[id].nombre), ...p.extras].join(', ')}.</p>
              </li>
            ))}
          </ul>
          <h3 className="titulo mt-10 text-3xl">Cortes que dominan</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {estilos.map((e) => <li key={e} className="rounded-full bg-crema px-3 py-1.5 font-medium">{e}</li>)}
          </ul>
          <p className="mt-3 text-gris">Con máquina y con tijera. También atienden a niños.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 self-start">
          <img {...foto('f-equipo')} alt="Tres barberos con playera negra junto a sus sillas con capas" className="col-span-2 aspect-[4/3] w-full rounded-3xl object-cover" loading="lazy" />
          <img {...foto('f-barbero')} alt="Un barbero tatuado detrás de su silla, frente al espejo y su estación" className="aspect-square w-full rounded-3xl object-cover" loading="lazy" />
          <img {...foto('f-mostrador')} alt="Mostrador de madera con el logo HB y repisas de productos para el cabello" className="aspect-square w-full rounded-3xl object-cover" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

function Resenas() {
  return (
    <section className="bg-negro py-16 text-white sm:py-24">
      <div className="contenedor">
        <h2 className="titulo text-6xl sm:text-7xl">Lo que dicen</h2>
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {resenas.map((r) => (
            <li key={r.nombre} className="rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/10">
              <blockquote>“{r.texto}”</blockquote>
              <p className="mt-4 font-semibold text-laton">{r.nombre}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Visita() {
  return (
    <section id="visita" className="py-16 pb-28 sm:py-24 md:pb-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="titulo text-6xl sm:text-7xl">Pasa sin cita</h2>
          <address className="mt-4 text-lg not-italic">{barberia.direccion}</address>
          <a href={barberia.mapa} className="boton mt-5 bg-negro text-white hover:bg-rojo">
            <Icono d={iMapa} />
            Abrir en Google Maps
          </a>
          <dl className="mt-8">
            {[
              ['Lunes a sábado', '10:00 a 20:30'],
              ['Domingo', '10:00 a 18:30'],
            ].map(([d, h]) => (
              <div key={d} className="flex max-w-sm justify-between gap-4 border-b border-negro/10 py-1.5">
                <dt>{d}</dt>
                <dd className="font-semibold">{h}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="rounded-3xl bg-crema p-6 sm:p-8">
          <h3 className="titulo text-4xl">Escríbenos o llámanos</h3>
          <ul className="mt-4 space-y-4">
            <li><a href={`tel:${barberia.telefono.tel}`} className="flex items-center gap-3 font-semibold text-rojo"><Icono d={iTel} /> {barberia.telefono.texto}</a></li>
            <li><a href={wa('Hola, ¿a qué hora hay menos espera?')} className="flex items-center gap-3 font-semibold text-rojo"><Icono d={iWhats} /> WhatsApp</a></li>
          </ul>
          <ul className="mt-6 flex gap-4">
            <li><a href={barberia.instagram} className="font-semibold underline underline-offset-2">Instagram</a></li>
            <li><a href={barberia.facebook} className="font-semibold underline underline-offset-2">Facebook</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-negro py-8 pb-28 text-humo md:pb-8">
      <div className="contenedor flex flex-col gap-2 text-sm sm:flex-row sm:justify-between">
        <p className="titulo text-2xl text-white">Homme Barbers</p>
        <p>{barberia.direccion}</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/10 bg-negro text-white md:hidden">
      <a href={barberia.mapa} className="flex min-h-15 flex-col items-center justify-center gap-0.5 bg-rojo text-sm font-semibold"><Icono d={iMapa} /> Cómo llegar</a>
      <a href={`tel:${barberia.telefono.tel}`} className="flex min-h-15 flex-col items-center justify-center gap-0.5 text-sm font-semibold"><Icono d={iTel} /> Llamar</a>
      <a href={wa('Hola, ¿a qué hora hay menos espera?')} className="flex min-h-15 flex-col items-center justify-center gap-0.5 text-sm font-semibold"><Icono d={iWhats} /> WhatsApp</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <Encabezado />
      <main>
        <Portada />
        <Paquete />
        <Servicios />
        <Resenas />
        <Visita />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
