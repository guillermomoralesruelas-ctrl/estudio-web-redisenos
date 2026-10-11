import { useState } from 'react';
import fotosJson from './data/fotos.json';
import { negocio, intro, yogaPrecios, clases, horario, avisosYoga, spa, especial, jardin, invitados, retiros, equipo, type Precio } from './data/content';

const fotos = fotosJson as unknown as Record<string, [number, number]>;
const base = import.meta.env.BASE_URL;
const src = (n: string) => `${base}${n}.webp`;
const peso = (n: number) => '$' + Math.round(n).toLocaleString('es-MX');
const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;
type Pago = 0 | 1; // 0 efectivo, 1 tarjeta

function Foto({ n, alt, className = '', eager = false }: { n: string; alt: string; className?: string; eager?: boolean }) {
  const [w, h] = fotos[n] ?? [1200, 800];
  return <img src={src(n)} alt={alt} width={w} height={h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={className} />;
}

function SelectorPago({ pago, setPago, oscuro = false }: { pago: Pago; setPago: (p: Pago) => void; oscuro?: boolean }) {
  return (
    <div role="group" aria-label="Forma de pago para mostrar precios" className={`inline-flex rounded-full p-1 text-sm font-bold ${oscuro ? 'bg-white/15' : 'bg-cal-2'}`}>
      {(['Efectivo', 'Tarjeta'] as const).map((t, i) => (
        <button key={t} type="button" aria-pressed={pago === i} onClick={() => setPago(i as Pago)}
          className={`rounded-full px-3.5 py-1.5 transition-colors ${pago === i ? 'bg-rosa text-white' : oscuro ? 'text-white' : 'text-tinta'}`}>{t}</button>
      ))}
    </div>
  );
}

const Monto = ({ p, pago }: { p: Precio; pago: Pago }) => <>{peso(p[pago])}</>;

function Encabezado({ pago, setPago }: { pago: Pago; setPago: (p: Pago) => void }) {
  const enlaces = [['#yoga', 'Yoga'], ['#spa', 'Spa'], ['#jardin', 'Jardín y experiencias'], ['#equipo', 'Equipo'], ['#contacto', 'Contacto']];
  return (
    <header className="sticky top-0 z-30 border-b border-tinta/10 bg-cal/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-3">
        <a href="#inicio" className="flex shrink-0 items-center gap-2.5">
          <img src={`${base}logo.png`} alt="" width={300} height={262} className="h-10 w-auto" />
          <span className="font-display text-xl leading-none tracking-wide">ESENCIA<span className="block text-[0.65rem] font-sans font-bold tracking-[0.3em] text-gris">YOGA · SPA</span></span>
        </a>
        <nav aria-label="Principal" className="hidden xl:block">
          <ul className="flex gap-6 text-sm font-bold">{enlaces.map(([h, t]) => <li key={h}><a href={h} className="hover:text-rosa">{t}</a></li>)}</ul>
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden sm:block"><SelectorPago pago={pago} setPago={setPago} /></div>
          <a href={wa('Hola, quisiera información sobre yoga y spa en Esencia.')} className="btn-rosa hidden px-4 py-2.5 text-sm md:inline-flex">WhatsApp</a>
        </div>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-turquesa-osc text-white">
      <Foto n="fachada-grupo" alt="Alumnas y profesoras haciendo posturas de yoga frente a la fachada turquesa de Esencia Yoga Spa" eager className="absolute inset-0 -z-10 h-full w-full object-cover object-top" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0B3F44] via-[#0B3F44]/70 to-[#0B3F44]/20" />
      <div className="contenedor flex min-h-[36rem] flex-col justify-end py-14 sm:min-h-[40rem] sm:py-20">
        <p className="eyebrow text-rosa-claro">Potrero 13 · San Miguel de Allende</p>
        <h1 className="mt-3 max-w-3xl text-4xl sm:text-6xl lg:text-7xl">Yoga, spa y un jardín con jacuzzi en el centro de San Miguel</h1>
        <p className="mt-5 max-w-2xl text-lg text-white/90">{intro[0]}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#yoga" className="btn-rosa">¿Qué paquete de yoga me conviene?</a>
          <a href="#spa" className="btn-linea">Ver menú de spa</a>
          <img src={`${base}yoga-alliance.png`} alt="Sellos de Yoga Alliance: E-RYT 500 y escuela RYS 200" width={322} height={100} className="h-12 w-auto rounded-md bg-black/30 p-1" />
        </div>
      </div>
    </section>
  );
}

function BandaPago({ pago, setPago }: { pago: Pago; setPago: (p: Pago) => void }) {
  return (
    <div className="bg-rosa text-white">
      <div className="contenedor flex flex-col items-start gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm sm:text-base"><strong>Cada precio tiene dos cifras.</strong> Con tarjeta pagas 20% más que en efectivo; elige cómo vas a pagar y toda la página se ajusta.</p>
        <SelectorPago pago={pago} setPago={setPago} oscuro />
      </div>
    </div>
  );
}

function Calculadora({ pago }: { pago: Pago }) {
  const [n, setN] = useState(8);
  const [indiv, diez, ilim] = [yogaPrecios[0].precio[pago], yogaPrecios[1].precio[pago], yogaPrecios[2].precio[pago]];
  // El paquete de 10 vence en 2 meses: con menos de 5 clases al mes, las que sobran se pierden.
  const opciones = [
    { id: 'indiv', nombre: 'Clase por clase', total: n * indiv, nota: `${peso(indiv)} cada clase` },
    { id: 'diez', nombre: 'Paquete de 10 clases', total: Math.max(n, 5) * diez / 10, nota: n < 5 ? `Vence en 2 meses: con ${n} al mes se pierden ${10 - 2 * n}` : `${peso(diez / 10)} por clase · vence en 2 meses` },
    { id: 'ilim', nombre: 'Yoga ilimitado mensual', total: ilim, nota: `${peso(ilim / n)} por clase con ${n} al mes` },
  ];
  const mejor = opciones.reduce((a, b) => (b.total < a.total ? b : a));
  const max = Math.max(...opciones.map((o) => o.total));

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-tinta/10 sm:p-8">
      <h3 className="text-3xl">¿Cuántas clases al mes vas a tomar?</h3>
      <div className="mt-6 flex items-center gap-4">
        <button type="button" onClick={() => setN((x) => Math.max(1, x - 1))} aria-label="Una clase menos" className="h-11 w-11 shrink-0 rounded-full bg-cal-2 text-xl font-bold hover:bg-rosa-claro">−</button>
        <label htmlFor="clases" className="sr-only">Clases al mes</label>
        <input id="clases" type="range" min={1} max={25} value={n} onChange={(e) => setN(Number(e.target.value))} className="w-full" />
        <button type="button" onClick={() => setN((x) => Math.min(25, x + 1))} aria-label="Una clase más" className="h-11 w-11 shrink-0 rounded-full bg-cal-2 text-xl font-bold hover:bg-rosa-claro">+</button>
      </div>
      <p className="mt-3 text-center font-display text-2xl" aria-live="polite">{n} {n === 1 ? 'clase' : 'clases'} al mes · {pago ? 'con tarjeta' : 'en efectivo'}</p>
      <ul className="mt-6 grid gap-3">
        {opciones.map((o) => (
          <li key={o.id} className={`rounded-xl p-4 ring-1 ${o.id === mejor.id ? 'bg-rosa-claro ring-rosa' : 'ring-tinta/10'}`}>
            <div className="flex items-baseline justify-between gap-3">
              <p className="font-bold">{o.nombre}{o.id === mejor.id && <span className="ml-2 rounded-full bg-rosa px-2 py-0.5 text-xs text-white">Te conviene</span>}</p>
              <p className="font-display text-2xl">{peso(o.total)}<span className="text-sm font-sans text-gris"> /mes</span></p>
            </div>
            <div className="mt-2 h-2 rounded-full bg-cal-2" aria-hidden="true"><div className={`h-2 rounded-full ${o.id === mejor.id ? 'bg-rosa' : 'bg-turquesa'}`} style={{ width: `${(o.total / max) * 100}%` }} /></div>
            <p className="mt-1.5 text-sm text-gris">{o.nota}</p>
          </li>
        ))}
      </ul>
      <a href={wa(`Hola, quiero empezar yoga en Esencia: unas ${n} clases al mes. Me interesa: ${mejor.nombre}.`)} className="btn-rosa mt-6 w-full">Preguntar por {mejor.nombre.toLowerCase()}</a>
      <p className="mt-3 text-xs text-gris">Cálculo orientativo con los precios de su sitio. El paquete de 10 y el ilimitado incluyen jacuzzi. Hay más paquetes en la lista de precios.</p>
    </div>
  );
}

function Yoga({ pago }: { pago: Pago }) {
  return (
    <section id="yoga" className="py-20 sm:py-24">
      <div className="contenedor">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <p className="eyebrow">Yoga</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">Diez estilos, con y sin calor infrarrojo</h2>
            <p className="mt-4 text-gris">{intro[1]}</p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl"><Foto n="clase-yoga" alt="Clase de yoga en el estudio con la profesora al frente" className="absolute inset-0 h-full w-full object-cover" /></div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl"><Foto n="melinda-guerrero" alt="Melinda Marino en postura de guerrero frente a un muro rojo" className="absolute inset-0 h-full w-full object-cover" /></div>
            </div>
            <h3 className="mt-10 text-2xl">Precios de yoga</h3>
            <table className="mt-3 w-full text-sm">
              <caption className="sr-only">Precios de yoga {pago ? 'con tarjeta' : 'en efectivo'}</caption>
              <tbody>
                {yogaPrecios.map((p) => (
                  <tr key={p.nombre} className="border-t border-tinta/10 align-top">
                    <td className="py-2.5 pr-4"><span className="font-bold">{p.nombre}</span>{p.nota && <span className="block text-gris">{p.nota}</span>}</td>
                    <td className="py-2.5 text-right font-display text-lg whitespace-nowrap"><Monto p={p.precio} pago={pago} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="lg:sticky lg:top-24 lg:self-start"><Calculadora pago={pago} /></div>
        </div>

        <h3 className="mt-16 text-3xl">Las clases</h3>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clases.map((c) => (
            <li key={c.nombre} className="rounded-xl bg-white p-5 ring-1 ring-tinta/10">
              <div className="flex items-start justify-between gap-3">
                <h4 className="font-display text-xl">{c.nombre}</h4>
                {c.calor && <span className="shrink-0 rounded-full bg-terracota px-2.5 py-0.5 text-xs font-bold text-white">Con calor</span>}
              </div>
              <p className="mt-1 text-sm font-bold text-turquesa-osc">{c.min} min · {c.nivel}</p>
              <p className="mt-2 text-sm text-gris">{c.texto}</p>
            </li>
          ))}
        </ul>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="min-w-0">
            <h3 className="text-3xl">Horario publicado</h3>
            <p className="mt-2 text-sm text-gris">De su imagen de horario (enero de 2026). "Calor" son las clases con calor infrarrojo. No dice qué estilo hay en cada bloque: [PENDIENTE] confirmar en Mindbody.</p>
            <div className="mt-4">
              <table className="w-full table-fixed border-separate border-spacing-1 text-center text-sm">
                <caption className="sr-only">Horario semanal de clases</caption>
                <thead><tr><th className="w-14 text-left text-gris">Hora</th>{horario.dias.map((d) => <th key={d} className="font-bold">{d}</th>)}</tr></thead>
                <tbody>
                  {horario.filas.map((f) => (
                    <tr key={f.hora}>
                      <th className="whitespace-nowrap py-1 text-left font-bold">{f.hora}<span className="block text-xs font-normal text-gris">{f.min} min</span></th>
                      {f.bloques.map((b, i) => (
                        <td key={i} className={`rounded-md py-2 text-xs font-bold ${b === 'calor' ? 'bg-terracota text-white' : b === 'si' ? 'bg-turquesa/25 text-turquesa-osc' : 'bg-cal-2/60'}`}>
                          {b === 'calor' ? 'Calor' : b === 'si' ? 'Yoga' : <span className="sr-only">Sin clase</span>}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 className="text-3xl">Antes de venir</h3>
            <ul className="mt-4 grid gap-3">
              {avisosYoga.map((a) => <li key={a} className="rounded-xl bg-turquesa/10 p-4 text-sm">{a}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Spa({ pago, setPago }: { pago: Pago; setPago: (p: Pago) => void }) {
  const [cat, setCat] = useState(spa[0].id);
  const c = spa.find((x) => x.id === cat)!;
  const altFoto: Record<string, string> = {
    'pedicura-petalos': 'Pedicura con los pies en una vasija con pétalos de flores',
    facial: 'Clienta recostada con mascarilla facial oscura',
    'piedras-calientes': 'Terapeuta acomodando piedras calientes en la espalda de una clienta',
    'cabina-spa': 'Cabina de spa con cortinas turquesa y camilla',
  };
  return (
    <section id="spa" className="bg-cal-2 py-20 sm:py-24">
      <div className="contenedor">
        <p className="eyebrow">Spa</p>
        <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-4xl sm:text-5xl">El menú de spa, con su precio</h2>
          <SelectorPago pago={pago} setPago={setPago} />
        </div>
        <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Categorías del spa">
          {spa.map((x) => <button key={x.id} type="button" aria-pressed={x.id === cat} onClick={() => setCat(x.id)} className="chip">{x.nombre}</button>)}
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-auto lg:min-h-[28rem]"><Foto n={c.foto} alt={altFoto[c.foto]} className="absolute inset-0 h-full w-full object-cover" /></div>
          <div className="rounded-2xl bg-white p-5 ring-1 ring-tinta/10 sm:p-7">
            <h3 className="text-2xl">{c.nombre}</h3>
            <table className="mt-3 w-full text-sm">
              <caption className="sr-only">{c.nombre}: precios {pago ? 'con tarjeta' : 'en efectivo'}</caption>
              <thead><tr className="text-left text-xs uppercase tracking-wider text-gris"><th className="pb-2 font-bold">Tratamiento</th><th className="pb-2 font-bold">Min</th><th className="pb-2 text-right font-bold">Precio</th></tr></thead>
              <tbody>
                {c.servicios.map((s, i) => (
                  <tr key={s.nombre + i} className="border-t border-tinta/10 align-top">
                    <td className="py-2.5 pr-3">{s.nombre}</td>
                    <td className="py-2.5 pr-3 text-gris">{s.min}</td>
                    <td className="py-2.5 text-right font-display text-base whitespace-nowrap"><Monto p={s.precio} pago={pago} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
            {c.id === 'faciales' && <p className="mt-3 text-xs text-gris">Según su sitio, son el único spa de San Miguel con productos de grado médico Neova y Revision.</p>}
            <a href={wa(`Hola, quisiera reservar un tratamiento de ${c.nombre.toLowerCase()} en Esencia.`)} className="btn-turquesa mt-5">Reservar {c.nombre.toLowerCase()}</a>
          </div>
        </div>
        <div className="mt-8 grid gap-6 rounded-2xl bg-terracota p-6 text-white sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/80">{especial.titulo}</p>
            <p className="mt-2 font-display text-2xl">{especial.texto}</p>
          </div>
          <div className="md:text-right">
            <p className="text-sm text-white/80 line-through">{peso(especial.regular)}</p>
            <p className="font-display text-4xl">{peso(especial.precio)}</p>
            <p className="text-sm text-white/85">{especial.nota}</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[['manicura', 'Manicura con esmalte rojo en la mesa del spa'], ['productos-spa', 'Cuencos con sales, pétalos y aceites junto a un vitral'], ['toallas-spa', 'Toallas blancas bordadas con la palabra Spa'], ['cirila-ramirez', 'Masajista trabajando la espalda de una clienta']].map(([n, a]) => (
            <div key={n} className="relative aspect-square overflow-hidden rounded-xl"><Foto n={n} alt={a} className="absolute inset-0 h-full w-full object-cover" /></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Jardin({ pago }: { pago: Pago }) {
  return (
    <section id="jardin" className="py-20 sm:py-24">
      <div className="contenedor">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Jardín y experiencias</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">{jardin.titulo}</h2>
            <p className="mt-4 text-gris">{jardin.texto}</p>
            <p className="mt-6 inline-flex items-baseline gap-3 rounded-xl bg-white px-5 py-4 ring-1 ring-tinta/10">
              <span className="font-bold">{jardin.tina.nombre}, {jardin.tina.min} min</span>
              <span className="font-display text-2xl text-rosa"><Monto p={jardin.tina.precio} pago={pago} /></span>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-2xl"><Foto n="jardin-jacuzzi" alt="Jacuzzi del jardín de meditación rodeado de plantas" className="absolute inset-0 h-full w-full object-cover" /></div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl"><Foto n="jacuzzi-amigas" alt="Tres amigas sonriendo dentro del jacuzzi del jardín" className="absolute inset-0 h-full w-full object-cover" /></div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl"><Foto n="lounge-batas" alt="Clientas en bata descansando en la sala del spa" className="absolute inset-0 h-full w-full object-cover" /></div>
          </div>
        </div>

        <h3 className="mt-16 text-3xl">Terapeutas invitados</h3>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {invitados.map((x) => (
            <li key={x.nombre} className="flex gap-4 rounded-xl bg-white p-4 ring-1 ring-tinta/10">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg"><Foto n={x.foto} alt={`${x.nombre}: ${x.quien}`} className="absolute inset-0 h-full w-full object-cover" /></div>
              <div>
                <h4 className="font-display text-lg leading-tight">{x.nombre}</h4>
                <p className="text-sm text-gris">{x.quien}</p>
                <p className="mt-1 text-sm"><span className="font-bold"><Monto p={x.precio} pago={pago} /></span> · {x.min} min{x.nota ? ` · ${x.nota}` : ''}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-16 grid gap-8 overflow-hidden rounded-2xl bg-turquesa-osc text-white lg:grid-cols-2">
          <div className="relative min-h-[16rem]"><Foto n="retiro" alt="Grupo de mujeres con coronas de flores en un retiro en Esencia" className="absolute inset-0 h-full w-full object-cover" /></div>
          <div className="p-6 sm:p-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-rosa-claro">Retiros</p>
            <h3 className="mt-2 text-3xl sm:text-4xl">De 3, 5 o 10 días, a la carta</h3>
            <p className="mt-4 text-white/90">{retiros.texto}</p>
            <p className="mt-3 text-sm text-white/75">{retiros.experiencias}</p>
            <a href={`mailto:${negocio.correo}?subject=${encodeURIComponent('Retiro en Esencia Yoga Spa')}`} className="btn mt-6 bg-white text-turquesa-osc hover:bg-rosa-claro">Pedir información del retiro</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Equipo() {
  return (
    <section id="equipo" className="bg-cal-2 py-20 sm:py-24">
      <div className="contenedor">
        <p className="eyebrow">Equipo</p>
        <h2 className="mt-3 text-4xl sm:text-5xl">Quién te recibe, te enseña y te atiende</h2>
        <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 lg:gap-6">
          {equipo.map((p) => (
            <li key={p.nombre}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white"><Foto n={p.foto} alt={`Retrato de ${p.nombre}`} className="absolute inset-0 h-full w-full object-cover object-top" /></div>
              <h3 className="mt-3 text-xl">{p.nombre}</h3>
              <p className="text-sm font-bold text-turquesa-osc">{p.rol}</p>
              <p className="mt-1 text-sm text-gris">{p.texto}</p>
            </li>
          ))}
          <li>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl"><Foto n="equipo" alt="Equipo de spa de Esencia frente al mural de lotos" className="absolute inset-0 h-full w-full object-cover" /></div>
            <h3 className="mt-3 text-xl">Y el resto del equipo</h3>
            <p className="mt-1 text-sm text-gris">Técnicas de spa formadas bajo la guía de Melinda y Vanessa.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="py-20 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="eyebrow">Cita y contacto</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Potrero 13, colonia San Antonio</h2>
          <p className="mt-3 text-gris">{negocio.direccion}</p>
          <dl className="mt-6 grid max-w-sm gap-1 text-sm">
            {negocio.horario.map((h) => <div key={h.dias} className="flex justify-between border-b border-tinta/10 py-1.5"><dt className="font-bold">{h.dias}</dt><dd>{h.horas}</dd></div>)}
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa('Hola, quisiera agendar en Esencia Yoga Spa.')} className="btn-rosa">WhatsApp {negocio.whatsappTexto}</a>
            <a href={negocio.mapa} className="btn border-2 border-tinta hover:bg-tinta hover:text-white">Cómo llegar</a>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6 ring-1 ring-tinta/10 sm:p-8">
          <ul className="grid gap-3">
            <li><a href={`tel:${negocio.telefonoLink}`} className="font-bold text-turquesa-osc hover:underline">Teléfono {negocio.telefono}</a></li>
            <li><a href={`mailto:${negocio.correo}`} className="font-bold text-turquesa-osc hover:underline">{negocio.correo}</a></li>
            <li><a href={negocio.instagram} className="font-bold text-turquesa-osc hover:underline">Instagram @esenciayogaspa</a></li>
            <li><a href={negocio.facebook} className="font-bold text-turquesa-osc hover:underline">Facebook</a></li>
            <li><a href={negocio.tripadvisor} className="font-bold text-turquesa-osc hover:underline">Opiniones en TripAdvisor</a></li>
          </ul>
          <div className="relative mt-6 aspect-[3/2] overflow-hidden rounded-xl"><Foto n="recepcion" alt="Recepción de Esencia con muros turquesa, flores y un mural" className="absolute inset-0 h-full w-full object-cover" /></div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [pago, setPago] = useState<Pago>(0);
  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2">Saltar al contenido</a>
      <Encabezado pago={pago} setPago={setPago} />
      <main id="contenido">
        <Portada />
        <BandaPago pago={pago} setPago={setPago} />
        <Yoga pago={pago} />
        <Spa pago={pago} setPago={setPago} />
        <Jardin pago={pago} />
        <Equipo />
        <Contacto />
      </main>
      <footer className="bg-turquesa-osc pb-24 pt-10 text-sm text-white/80 md:pb-10">
        <div className="contenedor flex flex-col gap-3 sm:flex-row sm:justify-between">
          <p><span className="font-bold text-white">{negocio.nombre}</span> · {negocio.direccion}</p>
          <p>Tel. {negocio.telefono} · WhatsApp {negocio.whatsappTexto}</p>
        </div>
      </footer>
      <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/10 bg-turquesa-osc text-sm font-bold text-white md:hidden">
        <a href={`tel:${negocio.telefonoLink}`} className="py-3.5 text-center">Llamar</a>
        <a href={wa('Hola, quisiera agendar en Esencia Yoga Spa.')} className="bg-rosa py-3.5 text-center">WhatsApp</a>
        <a href={negocio.mapa} className="py-3.5 text-center">Mapa</a>
      </nav>
    </>
  );
}
