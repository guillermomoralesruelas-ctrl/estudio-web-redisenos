import { cuartos, hotel, opiniones, restaurante, wa } from './data/content';
import fotos from './data/fotos.json';
import Salones from './Salones';

const medidas = fotos as unknown as Record<string, [number, number]>;
const foto = (n: string) => ({ src: `./${n}.webp`, width: medidas[n][0], height: medidas[n][1] });

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

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-cafe/10 bg-white/95 backdrop-blur">
      <div className="contenedor flex h-18 items-center justify-between gap-4">
        <a href="#inicio" className="flex shrink-0 items-center gap-3">
          <img {...foto('logo')} alt="Hotel Soleil, Business Class" className="h-13 w-auto" />
          <span className="hidden font-titulo text-lg leading-tight sm:block">Hotel Soleil<br /><span className="text-sm text-gris">Celaya</span></span>
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-7 font-medium md:flex">
          <a href="#habitaciones" className="hover:text-sol">Habitaciones</a>
          <a href="#salones" className="hover:text-sol">Salones</a>
          <a href="#hotel" className="hover:text-sol">El hotel</a>
          <a href="#contacto" className="hover:text-sol">Contacto</a>
        </nav>
        <a href={hotel.reservar} className="boton min-h-11 bg-sol px-5 text-white hover:bg-cafe">Reservar</a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="bg-cafe text-white">
      <div className="contenedor grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_1.15fr] lg:py-20">
        <div>
          <p className="font-semibold text-durazno">Business Class, {hotel.estrellas} estrellas, {hotel.habitaciones} habitaciones</p>
          <h1 className="titulo mt-3 text-4xl sm:text-5xl lg:text-6xl">Hotel de negocios en Celaya, con desayuno incluido y salones para tus eventos</h1>
          <p className="mt-5 max-w-xl text-lg text-white/85">{hotel.ubicacion} Estacionamiento techado sin costo, WiFi, restaurante, gimnasio y centro de negocios.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={hotel.reservar} className="boton bg-sol text-white hover:bg-[#8f3d10]">Reservar desde $880 la noche</a>
            <a href={wa('Hola, quiero información para hospedarme en el Hotel Soleil.')} className="boton border-2 border-white/60 text-white hover:bg-white/10">
              <Icono d={iWhats} />
              WhatsApp
            </a>
          </div>
          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
            {hotel.calificaciones.map(([n, f]) => (
              <div key={f}>
                <dt className="sr-only">{f}</dt>
                <dd className="titulo text-3xl text-durazno">{n}</dd>
                <dd className="text-sm text-piedra">en {f}</dd>
              </div>
            ))}
            <div>
              <dt className="sr-only">Horario de llegada y salida</dt>
              <dd className="titulo text-3xl text-durazno">{hotel.checkin} / {hotel.checkout}</dd>
              <dd className="text-sm text-piedra">check-in y check-out</dd>
            </div>
          </dl>
        </div>
        <img {...foto('f-junior')} alt="Junior Suite con cama King Size, tina de hidromasaje junto a la ventana y sillones" className="aspect-[16/10] w-full rounded-3xl object-cover" fetchPriority="high" />
      </div>
    </section>
  );
}

function Habitaciones() {
  return (
    <section id="habitaciones" className="py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="titulo text-4xl sm:text-5xl">Habitaciones</h2>
        <p className="mt-4 max-w-2xl text-lg text-gris">Tarifa por habitación y noche, con IVA y desayuno americano para 2 personas incluidos. {hotel.cancelacion}.</p>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {cuartos.map((c) => (
            <li key={c.id} className="flex flex-col overflow-hidden rounded-3xl ring-1 ring-cafe/10">
              <img {...foto(c.foto)} alt={c.alt} className="aspect-[3/2] w-full object-cover" loading="lazy" />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="titulo text-2xl">{c.nombre}</h3>
                <ul className="mt-3 space-y-1 text-[0.95rem] text-gris">
                  {c.detalle.map((d) => <li key={d}>{d}</li>)}
                </ul>
                <div className="mt-5 flex-1">
                  {c.tarifas.length > 0 ? (
                    <dl className="space-y-1">
                      {c.tarifas.map(([t, p]) => (
                        <div key={t} className="flex items-baseline justify-between gap-3 border-b border-cafe/10 pb-1">
                          <dt className="text-sm">{t}</dt>
                          <dd className="titulo text-2xl text-sol">{p}</dd>
                        </div>
                      ))}
                    </dl>
                  ) : null}
                  <p className="mt-2 text-sm text-gris">{c.capacidad}</p>
                </div>
                <a
                  href={c.tarifas.length > 0 ? hotel.reservar : wa(`Hola, quiero la tarifa de la ${c.nombre}.`)}
                  className="boton mt-5 border-2 border-cafe/20 hover:border-sol hover:text-sol"
                >
                  {c.tarifas.length > 0 ? 'Reservar' : 'Pedir tarifa por WhatsApp'}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ElHotel() {
  return (
    <section id="hotel" className="py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="titulo text-4xl sm:text-5xl">Para quien viaja a trabajar</h2>
          <ul className="mt-6 grid grid-cols-2 gap-3">
            {hotel.servicios.map((s) => <li key={s} className="rounded-2xl bg-arena px-4 py-3 font-medium">{s}</li>)}
          </ul>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="titulo text-2xl">Restaurante</h3>
              <p className="mt-1 text-gris">{restaurante.restaurante}</p>
            </div>
            <div>
              <h3 className="titulo text-2xl">Bar</h3>
              <p className="mt-1 text-gris">{restaurante.bar}</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="titulo text-2xl text-gris">Lo que dicen sus huéspedes</h2>
          <ul className="mt-4 space-y-4">
            {opiniones.map((o) => (
              <li key={o.texto} className="rounded-3xl border-l-4 border-sol bg-arena p-5">
                <blockquote>“{o.texto}”</blockquote>
                <p className="mt-2 text-sm text-gris">Huésped verificado, {o.fuente}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="bg-cafe py-16 pb-28 text-white sm:py-24 md:pb-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="titulo text-4xl sm:text-5xl">Cómo llegar</h2>
          <address className="mt-5 text-lg not-italic">{hotel.direccion}</address>
          <a href={hotel.mapa} className="boton mt-5 bg-white text-cafe hover:bg-arena">
            <Icono d={iMapa} />
            Abrir en Google Maps
          </a>
          <p className="mt-6 text-piedra">Check-in {hotel.checkin} h, check-out {hotel.checkout} h. {hotel.cancelacion}.</p>
        </div>
        <div className="rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/10 sm:p-8">
          <h3 className="titulo text-2xl">Reservaciones y eventos</h3>
          <p className="mt-1 text-piedra">{hotel.reservaciones}.</p>
          <ul className="mt-5 space-y-4">
            <li><a href={`tel:${hotel.telefono.tel}`} className="flex items-center gap-3 font-semibold text-durazno"><Icono d={iTel} /> {hotel.telefono.texto}</a></li>
            <li><a href={wa('Hola, quiero información del Hotel Soleil.')} className="flex items-center gap-3 font-semibold text-durazno"><Icono d={iWhats} /> WhatsApp {hotel.telefono.texto}</a></li>
            <li><a href={`mailto:${hotel.correo}`} className="break-all font-semibold text-durazno underline underline-offset-2">{hotel.correo}</a></li>
          </ul>
          <ul className="mt-6 flex gap-4">
            {hotel.redes.map(([n, u]) => <li key={n}><a href={u} className="font-semibold underline underline-offset-2">{n}</a></li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="border-t border-white/10 bg-cafe py-8 pb-28 text-piedra md:pb-8">
      <div className="contenedor flex flex-col gap-2 text-sm sm:flex-row sm:justify-between">
        <p className="font-titulo text-base text-white">{hotel.nombre}</p>
        <p>{hotel.calle}, Celaya, Gto.</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-cafe/10 bg-white text-cafe md:hidden">
      <a href={hotel.reservar} className="flex min-h-15 flex-col items-center justify-center bg-sol text-sm font-semibold text-white">Reservar</a>
      <a href={wa('Hola, quiero información del Hotel Soleil.')} className="flex min-h-15 flex-col items-center justify-center gap-0.5 text-sm font-semibold">
        <Icono d={iWhats} /> WhatsApp
      </a>
      <a href={hotel.mapa} className="flex min-h-15 flex-col items-center justify-center gap-0.5 text-sm font-semibold">
        <Icono d={iMapa} /> Cómo llegar
      </a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <Encabezado />
      <main>
        <Portada />
        <Habitaciones />
        <Salones />
        <ElHotel />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
