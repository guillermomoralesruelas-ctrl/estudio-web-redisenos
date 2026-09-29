import { useState } from 'react';
import { foto, generos, maestros, modalidades, negocio, servicios, teclas, wa } from './data/content';


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

const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;
const waHola = wa('Hola, quiero informes de las clases de música en la Academia Rubinstein.');
const secciones = [['#tocar', 'Clases'], ['#maestros', 'Maestros'], ['#estudio', 'El estudio'], ['#contacto', 'Contacto']] as const;

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-marfil/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="font-display text-[1.45rem] italic text-vino">Rubinstein</a>
        <nav aria-label="Secciones" className="hidden md:block">
          <ul className="flex gap-7">{secciones.map(([h, t]) => <li key={h}><a href={h} className="text-madera hover:text-tinta">{t}</a></li>)}</ul>
        </nav>
        <a href={waHola} className="btn !min-h-[42px] !py-2" target="_blank" rel="noopener"><IconoWa /> <span className="hidden sm:inline">WhatsApp</span></a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="contenedor grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.15fr_1fr]">
      <div>
        <p className="font-semibold text-vino">Academia Musical Rubinstein, Polanco</p>
        <h1 className="mt-3 text-[2.8rem] sm:text-[4.2rem]">Clases de música en Polanco, desde hace más de {negocio.anios} años</h1>
        <p className="mt-5 max-w-xl text-[1.12rem] text-madera">Clases personalizadas para cualquier edad y nivel: en el estudio, a domicilio o en línea. Todas incluyen solfeo, técnica y repertorio.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#tocar" className="btn">¿Qué quieres tocar?</a>
          <a href={`tel:${negocio.tel}`} className="btn-linea"><IconoTel /> {negocio.telVisible}</a>
        </div>
      </div>
      <div className="grid grid-cols-[1.2fr_1fr] gap-3">
        <img src={foto('salon-guitarras')} alt="Salón del estudio con tres guitarras eléctricas en sus bases y amplificadores" width={600} height={800} fetchPriority="high" className="aspect-[3/4] w-full rounded-lg object-cover" />
        <img src={foto('guitarra-atril')} alt="Guitarra acústica recargada junto a un atril con partitura" width={600} height={800} className="mt-10 aspect-[3/4] w-full rounded-lg object-cover" />
      </div>
    </section>
  );
}

function Tocar() {
  const [clase, setClase] = useState('Piano');
  const [modo, setModo] = useState('hora');
  const m = modalidades.find((x) => x.id === modo)!;
  const quienes = maestros.filter((x) => x.clases.includes(clase));
  const primerMes = m.inscripcion === null ? null : m.cuota + m.inscripcion;
  const mensaje = `Hola, quiero informes de clases de ${clase.toLowerCase()} en la Academia Rubinstein, modalidad: ${m.nombre.toLowerCase()}.`;

  return (
    <section id="tocar" className="oscuro py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="text-[2.5rem] sm:text-[3.6rem]">¿Qué quieres tocar?</h2>
        <p className="mt-3 max-w-2xl">Toca una tecla: te decimos quién da esa clase y cuánto sería tu primer mes.</p>
        <p className="mt-2 text-[0.9rem] text-laton md:hidden">Desliza el teclado para ver las diez clases.</p>

        <div className="mt-8 overflow-x-auto pb-2">
          <div className="relative flex min-w-[40rem] rounded-b-lg bg-[#2b2622] p-2 pt-3" role="group" aria-label="Instrumento o materia">
            {teclas.map((t) => (
              <button key={t} type="button" aria-pressed={clase === t} onClick={() => setClase(t)}
                className={`tecla relative flex h-40 flex-1 items-end justify-center rounded-b-md border border-tinta/30 px-1 pb-3 text-center text-[0.85rem] font-semibold leading-tight ${clase === t ? 'bg-laton text-tinta' : 'bg-marfil text-tinta hover:bg-white'}`}>
                {t}
              </button>
            ))}
            {[1, 2, 4, 5, 6, 8, 9].map((n) => (
              <span key={n} aria-hidden="true" className="pointer-events-none absolute top-3 h-24 w-[5%] -translate-x-1/2 rounded-b bg-tinta" style={{ left: `calc(0.5rem + (100% - 1rem) * ${n / 10})` }} />
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr]" aria-live="polite">
          <div>
            <h3 className="text-[1.8rem] !text-marfil">{clase}</h3>
            {quienes.length ? (
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {quienes.map((q) => (
                  <li key={q.nombre} className="flex items-center gap-3 rounded-lg bg-white/8 p-3">
                    {q.foto ? <img src={foto(q.foto)} alt={`Retrato de ${q.nombre}`} width={500} height={600} loading="lazy" className="h-16 w-14 shrink-0 rounded object-cover" />
                      : <span aria-hidden="true" className="grid h-16 w-14 shrink-0 place-items-center rounded bg-white/10 font-display text-[1.4rem] text-laton">{q.nombre.split(' ')[1][0]}</span>}
                    <span><strong className="block text-marfil">{q.nombre}</strong><span className="text-[0.9rem]">{q.clases.join(', ')}</span></span>
                  </li>
                ))}
              </ul>
            ) : <p className="mt-4">Su sitio no dice qué maestro da {clase.toLowerCase()}: pregúntalo por WhatsApp.</p>}
          </div>
          <div className="rounded-lg bg-marfil p-6 text-tinta">
            <fieldset>
              <legend className="font-semibold">Modalidad</legend>
              <div className="mt-2 grid gap-2">
                {modalidades.map((x) => (
                  <label key={x.id} className={`flex min-h-[44px] cursor-pointer items-center gap-3 rounded-md border-2 px-3 ${modo === x.id ? 'border-vino' : 'border-tinta/10'}`}>
                    <input type="radio" name="modo" checked={modo === x.id} onChange={() => setModo(x.id)} className="accent-vino" />
                    <span className="flex-1">{x.nombre}</span><span className="font-semibold">{pesos(x.cuota)}/mes</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <p className="mt-4 text-[0.95rem] text-madera">{m.nota}</p>
            <p className="mt-3 flex items-baseline justify-between gap-3 border-t border-tinta/10 pt-3">
              <span>Primer mes{m.inscripcion ? ` (cuota + inscripción anual de ${pesos(m.inscripcion)})` : ''}</span>
              <strong className="font-display text-[1.8rem] text-vino">{primerMes === null ? `${pesos(m.cuota)} + inscripción` : pesos(primerMes)}</strong>
            </p>
            <a href={wa(mensaje)} target="_blank" rel="noopener" className="btn mt-5 w-full"><IconoWa /> Pedir informes de {clase.toLowerCase()}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Maestros() {
  return (
    <section id="maestros" className="py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="text-[2.4rem] sm:text-[3.2rem]">Los maestros</h2>
        <ul className="mt-8 grid gap-5 sm:grid-cols-3">
          {maestros.filter((m) => m.foto).map((m) => (
            <li key={m.nombre}>
              <img src={foto(m.foto!)} alt={`Retrato de ${m.nombre}`} width={500} height={600} loading="lazy" className="aspect-[5/6] w-full rounded-lg object-cover" />
              <h3 className="mt-3 text-[1.35rem]">{m.nombre}</h3>
              <p className="text-madera">{m.clases.join(', ')}</p>
            </li>
          ))}
        </ul>
        <ul className="mt-8 grid gap-3 sm:grid-cols-3">
          {maestros.filter((m) => !m.foto).map((m) => (
            <li key={m.nombre} className="border-t border-tinta/15 pt-3"><strong>{m.nombre}</strong><span className="block text-madera">{m.clases.join(', ')}</span></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Estudio() {
  return (
    <section id="estudio" className="bg-white py-16 sm:py-24">
      <div className="contenedor grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
        <img src={foto('salon-puerta')} alt="Salón del estudio con piso de madera y una guitarra eléctrica junto a la puerta" width={600} height={800} loading="lazy" className="aspect-[4/5] w-full max-w-md rounded-lg object-cover" />
        <div>
          <h2 className="text-[2.2rem] sm:text-[3rem]">Clásica, rock, jazz y lo que quieras tocar</h2>
          <p className="mt-4 text-madera">Géneros: {generos.join(', ')} y muchos más.</p>
          <h3 className="mt-8 text-[1.5rem]">Además</h3>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">{servicios.map((s) => <li key={s} className="border-l-2 border-vino pl-3">{s}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-[2.4rem] sm:text-[3.2rem]">Visítanos en Polanco</h2>
          <p className="mt-4 flex gap-2 font-semibold"><IconoPin className="mt-1 h-5 w-5 shrink-0 text-vino" />{negocio.direccion}</p>
          <a href={negocio.mapa} target="_blank" rel="noopener" className="enlace mt-2 inline-block">Abrir en Google Maps</a>
          <p className="mt-4">{negocio.horario}</p>
        </div>
        <div className="rounded-lg border border-tinta/15 bg-white p-6 sm:p-8">
          <div className="flex flex-wrap gap-3">
            <a href={waHola} target="_blank" rel="noopener" className="btn"><IconoWa /> WhatsApp {negocio.whatsappVisible}</a>
            <a href={`tel:${negocio.tel}`} className="btn-linea"><IconoTel /> {negocio.telVisible}</a>
          </div>
          <p className="mt-5"><a href={`mailto:${negocio.correo}`} className="enlace">{negocio.correo}</a></p>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro pb-24 pt-10 md:pb-10">
      <div className="contenedor flex flex-wrap items-baseline justify-between gap-4">
        <p className="font-display text-[1.4rem] italic text-laton">Rubinstein</p>
        <p className="text-[0.95rem]">Estudio Musical Rubinstein, Polanco, Ciudad de México</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-marfil/15 bg-tinta text-marfil md:hidden">
      <a href={waHola} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 bg-vino text-[0.9rem] font-semibold text-white"><IconoWa />WhatsApp</a>
      <a href={`tel:${negocio.tel}`} className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-semibold"><IconoTel />Llamar</a>
      <a href={negocio.mapa} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-semibold"><IconoPin />Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#principal" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2">Saltar al contenido</a>
      <Encabezado />
      <main id="principal">
        <Portada />
        <Tocar />
        <Maestros />
        <Estudio />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
