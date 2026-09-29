import { useState } from 'react';
import { foto, historia, negocio, preguntas, servicios, wa } from './data/content';


function IconoWa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.2.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}
function IconoPin({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>;
}
function IconoIg({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>;
}
function IconoReloj({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
}

const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;
const secciones = [['#silla', 'Servicios'], ['#trabajo', 'Trabajo'], ['#joy', 'Joy'], ['#contacto', 'Contacto']] as const;
const waHola = wa('Hola Joy, quiero agendar una cita.');

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-hueso/10 bg-concreto/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="font-display text-[1.6rem] uppercase text-hueso">Joy D <span className="text-laton">Fadez</span></a>
        <nav aria-label="Secciones" className="hidden md:block">
          <ul className="flex gap-7 text-[0.95rem] uppercase tracking-wider">{secciones.map(([h, t]) => <li key={h}><a href={h} className="text-hueso/75 hover:text-laton">{t}</a></li>)}</ul>
        </nav>
        <a href={waHola} className="btn !min-h-[42px] !px-4 !py-2" target="_blank" rel="noopener"><IconoWa /> <span className="hidden sm:inline">Reservar</span></a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="contenedor grid items-end gap-10 py-12 sm:py-16 lg:grid-cols-[1.15fr_1fr]">
      <div className="self-center">
        <p className="font-semibold uppercase tracking-[0.2em] text-laton">Industrial Elegance · desde 2013</p>
        <h1 className="mt-4 text-[3.6rem] sm:text-[6rem]">Barbería de precisión en Monterrey</h1>
        <p className="mt-5 max-w-xl text-[1.1rem]">Cortes, barba, tinte y uñas con la misma exigencia, en el estudio o donde tú decidas. Joy te atiende en persona, con cita.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#silla" className="btn">Arma tu servicio</a>
          <a href={waHola} className="btn-linea" target="_blank" rel="noopener"><IconoWa /> WhatsApp</a>
        </div>
        <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-hueso/15 pt-5">
          <div><dt className="text-[0.85rem] uppercase tracking-wider text-hueso/60">Oficio</dt><dd className="font-display text-[2.2rem] text-laton">12+ años</dd></div>
          <div><dt className="text-[0.85rem] uppercase tracking-wider text-hueso/60">Servicios</dt><dd className="font-display text-[2.2rem] text-laton">8</dd></div>
          <div><dt className="text-[0.85rem] uppercase tracking-wider text-hueso/60">Domicilio</dt><dd className="font-display text-[2.2rem] text-laton">ZMM</dd></div>
        </dl>
      </div>
      <img src={foto('fade-1')} alt="Corte fade ejecutado en el estudio, visto de perfil" width={1000} height={1778} fetchPriority="high" className="aspect-[4/5] w-full object-cover" />
    </section>
  );
}

function Silla() {
  const [elegidos, setElegidos] = useState<string[]>(['corte', 'barba']);
  const sel = servicios.filter((s) => elegidos.includes(s.id));
  const minutos = sel.reduce((t, s) => t + (s.minutos ?? 0), 0);
  const precio = sel.reduce((t, s) => t + s.precio, 0);
  const domicilio = elegidos.includes('domicilio');
  const escala = Math.max(120, minutos);
  const r = 88;
  const c = 2 * Math.PI * r;
  let acumulado = 0;
  const alternar = (id: string) => setElegidos((e) => (e.includes(id) ? e.filter((x) => x !== id) : [...e, id]));
  const nombres = sel.map((s) => s.nombre.toLowerCase());
  const lista = nombres.length <= 1 ? nombres.join('') : `${nombres.slice(0, -1).join(', ')} y ${nombres[nombres.length - 1]}`;
  const mensaje = sel.length === 0 ? 'Hola Joy, quiero agendar una cita.' : `Hola Joy, quiero agendar: ${lista}${minutos ? ` (unos ${minutos} min)` : ''}. Desde ${pesos(precio)}. ¿Qué horario tienes?`;
  const hh = Math.floor(minutos / 60);
  const mm = minutos % 60;

  return (
    <section id="silla" className="claro py-16 sm:py-24">
      <div className="contenedor">
        <p className="font-semibold uppercase tracking-[0.2em] text-bronce">Cada servicio se cobra por lo que dura</p>
        <h2 className="mt-3 text-[3rem] sm:text-[4.6rem]">Tu tiempo en la silla</h2>
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="relative mx-auto w-full max-w-[22rem]">
            <svg viewBox="0 0 220 220" className="w-full -rotate-90" role="img" aria-label={`${minutos} minutos en la silla`}>
              <circle cx="110" cy="110" r={r} fill="none" stroke="#1b1a19" strokeOpacity="0.08" strokeWidth="26" />
              {Array.from({ length: 12 }, (_, i) => <line key={i} x1="110" y1="8" x2="110" y2="16" stroke="#1b1a19" strokeOpacity="0.35" strokeWidth="2" transform={`rotate(${i * 30} 110 110)`} />)}
              {sel.filter((s) => s.minutos).map((s) => {
                const largo = (s.minutos! / escala) * c;
                const seg = <circle key={s.id} cx="110" cy="110" r={r} fill="none" stroke={s.color} strokeWidth="26" strokeDasharray={`${Math.max(largo - 2, 0)} ${c}`} strokeDashoffset={-acumulado} />;
                acumulado += largo;
                return seg;
              })}
            </svg>
            <div className="absolute inset-0 grid place-items-center text-center" aria-live="polite">
              <div>
                <p className="font-display text-[3.4rem] leading-none text-concreto">{minutos ? `${hh ? `${hh} h ` : ''}${mm ? `${mm} min` : ''}` : '0 min'}</p>
                <p className="mt-1 text-[0.95rem] text-humo">{domicilio ? '+ tiempo a medida' : escala > 120 ? 'más de 2 horas' : 'en la silla'}</p>
                <p className="mt-2 font-display text-[2rem] text-bronce">desde {pesos(precio)}</p>
              </div>
            </div>
          </div>

          <div>
            <ul className="grid gap-2" role="group" aria-label="Servicios">
              {servicios.map((s) => {
                const on = elegidos.includes(s.id);
                return (
                  <li key={s.id}>
                    <button type="button" aria-pressed={on} onClick={() => alternar(s.id)}
                      className={`flex w-full items-center gap-3 border-2 px-4 py-3 text-left transition-colors ${on ? 'border-concreto bg-concreto text-hueso' : 'border-concreto/15 bg-white hover:border-concreto/50'}`}>
                      <span className="h-4 w-4 shrink-0 rounded-full border border-concreto/30" style={{ background: on ? s.color : 'transparent' }} aria-hidden="true" />
                      <span className="flex-1"><span className="font-semibold">{s.nombre}</span><span className={`block text-[0.88rem] ${on ? 'text-hueso/70' : 'text-humo'}`}>{s.lema}</span></span>
                      <span className="shrink-0 text-right"><span className="block font-display text-[1.4rem] leading-none">{pesos(s.precio)}+</span><span className={`text-[0.85rem] ${on ? 'text-hueso/70' : 'text-humo'}`}>{s.minutos ? `${s.minutos} min` : 'a medida'}</span></span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <a href={wa(mensaje)} target="_blank" rel="noopener" className="btn mt-5 w-full !bg-concreto !text-hueso hover:!bg-bronce"><IconoWa /> Reservar esto por WhatsApp</a>
            <p className="mt-3 text-[0.9rem] text-humo">Precios "desde", tal como su menú. Pagas al terminar; no hay pago previo.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trabajo() {
  return (
    <section id="trabajo" className="py-16 sm:py-24">
      <div className="contenedor">
        <h2 className="text-[2.8rem] sm:text-[4rem]">El trabajo, sin filtros</h2>
        <ul className="mt-8 grid grid-cols-2 gap-3 md:max-w-3xl">
          <li><img src={foto('fade-2')} alt="Acabado de un fade visto por la nuca, con la línea limpia" width={1000} height={1333} loading="lazy" className="aspect-[3/4] w-full object-cover" /></li>
          <li><img src={foto('fade-3')} alt="Corte con foco en el contorno, visto de perfil" width={1000} height={1333} loading="lazy" className="aspect-[3/4] w-full object-cover" /></li>
        </ul>
        <a href={negocio.instagram} target="_blank" rel="noopener" className="enlace mt-6 inline-flex items-center gap-2"><IconoIg /> Lo más reciente vive en Instagram</a>
      </div>
    </section>
  );
}

function Joy() {
  return (
    <section id="joy" className="bg-grafito py-16 sm:py-24">
      <div className="contenedor grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
        <img src={foto('rooftop')} alt="Joy D Fadez en una sesión rooftop en Monterrey al atardecer" width={1000} height={1333} loading="lazy" className="aspect-[4/5] w-full max-w-md object-cover" />
        <div>
          <h2 className="text-[2.8rem] sm:text-[4rem]">Hecho a mano, cliente por cliente</h2>
          <blockquote className="mt-5 text-[1.1rem]">“Soy Joy, barbero y estilista en Monterrey. Empecé en 2013 con una silla prestada y una idea fija: el oficio se nota. No vendo paquetes ni promociones: vendo el tiempo y la atención que cada cliente merece.”</blockquote>
          <ol className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {historia.map((h) => <li key={h.anio} className="border-t-2 border-laton pt-2"><span className="font-display text-[1.8rem] text-laton">{h.anio}</span><span className="block text-[0.95rem]">{h.texto}</span></li>)}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Preguntas() {
  return (
    <section className="claro py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <h2 className="text-[2.6rem] sm:text-[3.6rem]">Antes de tu primera cita</h2>
          <ol className="mt-6 grid gap-2 text-[1rem]">
            {['Reserva: elige servicio y horario.', 'Consulta: lee tu cabello, tu rostro y lo que buscas.', 'Ejecución: música, café y nada de prisas.', 'Resultado: acabado y recomendaciones para mantenerlo.'].map((t, i) => (
              <li key={t} className="flex gap-3"><span className="font-display text-[1.4rem] text-bronce">0{i + 1}</span><span>{t}</span></li>
            ))}
          </ol>
        </div>
        <dl className="grid gap-4">
          {preguntas.map((q) => <div key={q.p} className="border-b border-concreto/15 pb-4"><dt className="font-semibold">{q.p}</dt><dd className="mt-1 text-humo">{q.r}</dd></div>)}
        </dl>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-[3rem] sm:text-[4.4rem]">Hablemos de tu corte</h2>
          <p className="mt-4">Para citas, dudas, cotizaciones a domicilio y reagendar, Joy responde en persona por WhatsApp.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={waHola} target="_blank" rel="noopener" className="btn"><IconoWa /> {negocio.whatsappVisible}</a>
            <a href={negocio.instagram} target="_blank" rel="noopener" className="btn-linea"><IconoIg /> Instagram</a>
          </div>
          <p className="mt-5"><a href={negocio.facebook} target="_blank" rel="noopener" className="enlace">Facebook</a></p>
        </div>
        <div className="border border-hueso/15 p-6 sm:p-8">
          <p className="flex gap-2 font-semibold text-hueso"><IconoPin className="mt-1 h-5 w-5 shrink-0 text-laton" />{negocio.ciudad} y zona metropolitana, en estudio o a domicilio</p>
          <a href={negocio.mapa} target="_blank" rel="noopener" className="enlace mt-2 inline-block">Ver en Google Maps</a>
          <h3 className="mt-6 text-[1.6rem]">Horario</h3>
          <dl className="mt-2 grid gap-1">{negocio.horario.map((h) => <div key={h.dias} className="flex justify-between gap-4 border-b border-hueso/10 py-1.5"><dt>{h.dias}</dt><dd className="text-laton">{h.horas}</dd></div>)}</dl>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="border-t border-hueso/10 pb-24 pt-8 md:pb-8">
      <div className="contenedor flex flex-wrap items-baseline justify-between gap-4">
        <p className="font-display text-[1.5rem] uppercase text-hueso">Joy D <span className="text-laton">Fadez</span></p>
        <p className="text-[0.95rem] text-hueso/70">Estilismo de precisión desde 2013 · Monterrey, N. L.</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-hueso/15 bg-concreto text-hueso md:hidden">
      <a href={waHola} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 bg-laton text-[0.9rem] font-semibold text-concreto"><IconoWa />WhatsApp</a>
      <a href={negocio.instagram} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-semibold"><IconoIg />Instagram</a>
      <a href="#contacto" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-semibold"><IconoReloj />Horario</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#principal" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:text-concreto">Saltar al contenido</a>
      <Encabezado />
      <main id="principal">
        <Portada />
        <Silla />
        <Trabajo />
        <Joy />
        <Preguntas />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
