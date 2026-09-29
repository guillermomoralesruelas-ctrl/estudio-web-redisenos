import { useState } from 'react';
import { espacios, galeria, incluye, negocio, salones, tiempos, tipos, wa } from './data/content';


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

const waHola = wa('Hola, quiero información para un evento en Eventos Jubileo.');
const secciones = [['#arma', 'Arma tu evento'], ['#incluye', 'Paquete'], ['#espacios', 'Espacios'], ['#contacto', 'Contacto']] as const;
const totalMin = tiempos.reduce((a, t) => a + t.minutos, 0);

function Encabezado() {
  return (
    <header className="oscuro sticky top-0 z-40 border-b border-marfil/10 bg-noche/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="font-display text-[1.5rem] italic text-marfil">Eventos Jubileo</a>
        <nav aria-label="Secciones" className="hidden md:block">
          <ul className="flex gap-7">{secciones.map(([h, t]) => <li key={h}><a href={h} className="text-marfil/75 hover:text-marfil">{t}</a></li>)}</ul>
        </nav>
        <a href={waHola} className="btn !min-h-[42px] !px-4 !py-2" target="_blank" rel="noopener"><IconoWa /> <span className="hidden sm:inline">Cotizar</span></a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="oscuro relative isolate overflow-hidden">
      <img src="./xv-baile.webp" alt="Quinceañera con vestido de gala bailando con sus chambelanes bajo luces moradas en el Gran Salón" width={1300} height={867} fetchPriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-noche via-noche/80 to-noche/20 md:bg-gradient-to-r md:from-noche md:via-noche/80 md:to-noche/10" aria-hidden="true" />
      <div className="contenedor pb-14 pt-64 md:py-36">
        <p className="font-bold text-dorado">{negocio.zona}</p>
        <h1 className="mt-3 max-w-2xl text-[2.8rem] sm:text-[4.4rem]">Salón de fiestas en Azcapotzalco para XV años, bodas y empresas</h1>
        <p className="mt-5 max-w-xl text-[1.1rem]">Dos salones, de 80 y de 260 invitados, con lobby, balcón y terraza. Paquete con montaje, meseros, flores, menú, DJ y coordinación.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#arma" className="btn">Arma tu evento</a>
          <a href={waHola} className="btn-linea" target="_blank" rel="noopener"><IconoWa /> WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

function Arma() {
  const [tipo, setTipo] = useState('xv');
  const [inv, setInv] = useState(120);
  const salon = salones.find((s) => inv <= s.max) ?? null;
  const nombreTipo = tipos.find((t) => t.id === tipo)!.nombre;
  const fotos = galeria.filter((g) => g.tipo === tipo);
  const texto = `Hola, quiero cotizar ${tipo === 'xv' ? 'unos XV años' : nombreTipo.toLowerCase()} para ${inv} invitados${salon ? ` en ${salon.nombre}` : ''}.`;
  return (
    <section id="arma" className="py-20 md:py-28">
      <div className="contenedor">
        <h2 className="max-w-2xl text-[2.5rem] sm:text-[3.4rem]">Arma tu evento</h2>
        <p className="mt-4 max-w-2xl text-gris">Dinos qué celebras y cuántos invitados esperas: te decimos qué salón te toca y cómo se reparte la fiesta.</p>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="grid content-start gap-8">
            <div>
              <p className="font-bold">¿Qué celebras?</p>
              <div role="group" aria-label="Tipo de evento" className="mt-3 flex flex-wrap gap-2">
                {tipos.map((t) => (
                  <button key={t.id} type="button" aria-pressed={tipo === t.id} onClick={() => setTipo(t.id)}
                    className={`min-h-[46px] rounded-full border-2 px-5 font-bold transition-colors ${tipo === t.id ? 'border-ciruela bg-ciruela text-white' : 'border-noche/20 bg-white hover:border-noche'}`}>{t.nombre}</button>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="invitados" className="font-bold">¿Cuántos invitados? <span className="font-display text-[1.6rem] text-ciruela">{inv}</span></label>
              <input id="invitados" type="range" min={20} max={300} step={10} value={inv} onChange={(e) => setInv(Number(e.target.value))} className="mt-3 w-full" />
              <div className="relative h-5 text-[0.9rem] text-gris" aria-hidden="true">{[20, 80, 260, 300].map((v) => <span key={v} className="absolute -translate-x-1/2" style={{ left: `${((v - 20) / 280) * 100}%` }}>{v}</span>)}</div>
            </div>
            <div aria-live="polite" className="rounded-2xl bg-rubor p-6">
              {salon ? (
                <>
                  <p className="text-[0.95rem] text-gris">Te toca</p>
                  <p className="font-display text-[2.2rem] leading-tight text-ciruela">{salon.nombre}</p>
                  <p>Hasta {salon.max} invitados. {salon.texto}</p>
                </>
              ) : (
                <p>Para más de 260 invitados, escríbenos y vemos opciones.</p>
              )}
              <p className="mt-5 font-bold">Horas base del evento</p>
              <div className="mt-2 flex h-9 overflow-hidden rounded-full" aria-hidden="true">
                {tiempos.map((t, i) => <div key={t.nombre} className={`flex items-center justify-center text-[0.8rem] font-bold ${i === 1 ? 'bg-ciruela text-white' : 'bg-dorado text-noche'}`} style={{ flexGrow: t.minutos, flexBasis: 0 }}>{t.minutos >= 60 ? `${t.minutos / 60} h` : `${t.minutos}′`}</div>)}
              </div>
              <p className="mt-2 text-[0.95rem] text-gris">{tiempos.map((t) => `${t.nombre} ${t.minutos >= 60 ? `${t.minutos / 60} horas` : `${t.minutos} min`}`).join(', ')}: {totalMin / 60} horas en total.</p>
              <a href={wa(texto)} target="_blank" rel="noopener" className="btn mt-6"><IconoWa /> Cotizar mi evento</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 self-start">
            {salon && <img key={salon.foto} src={`./${salon.foto}`} alt={salon.alt} width={1300} height={867} loading="lazy" className="col-span-2 aspect-[16/9] w-full rounded-2xl object-cover" />}
            {fotos.map((f) => <img key={f.foto} src={`./${f.foto}`} alt={f.alt} width={1300} height={867} loading="lazy" className={`aspect-[4/3] w-full rounded-2xl object-cover ${fotos.length === 1 ? 'col-span-2' : ''}`} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function Incluye() {
  return (
    <section id="incluye" className="oscuro py-20 md:py-28">
      <div className="contenedor">
        <h2 className="max-w-2xl text-[2.5rem] sm:text-[3.4rem]">Qué incluye el paquete</h2>
        <dl className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {incluye.map((i) => <div key={i.titulo} className="border-t border-marfil/20 pt-4"><dt className="font-display text-[1.5rem] italic text-dorado">{i.titulo}</dt><dd className="mt-1">{i.texto}</dd></div>)}
        </dl>
        <p className="mt-10 text-marfil/80">{negocio.estacionamiento}.</p>
      </div>
    </section>
  );
}

function Espacios() {
  return (
    <section id="espacios" className="py-20 md:py-28">
      <div className="contenedor">
        <h2 className="text-[2.5rem] sm:text-[3.4rem]">Lobby, balcón y terraza</h2>
        <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {espacios.map((e) => (
            <li key={e.foto}>
              <img src={`./${e.foto}`} alt={e.alt} width={1300} height={867} loading="lazy" className="aspect-[3/4] w-full rounded-2xl object-cover" />
              <p className="mt-2 font-bold">{e.nombre}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="oscuro py-20 md:py-28">
      <div className="contenedor grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-[2.5rem] sm:text-[3.4rem]">Ven a conocer el salón</h2>
          <p className="mt-4 max-w-md">Agenda una visita o pide tu cotización con la fecha, el tipo de evento y los invitados.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waHola} className="btn" target="_blank" rel="noopener"><IconoWa /> WhatsApp</a>
            <a href={negocio.telefonoLink} className="btn-linea"><IconoTel /> {negocio.telefono}</a>
          </div>
        </div>
        <dl className="grid gap-6">
          <div><dt className="font-bold text-dorado">Dirección</dt><dd>{negocio.direccion}<br /><a href={negocio.mapa} target="_blank" rel="noopener" className="font-bold text-marfil underline underline-offset-4"><IconoPin className="mr-1 inline h-4 w-4" />Abrir en Google Maps</a></dd></div>
          <div><dt className="font-bold text-dorado">Horario</dt><dd>{negocio.horario}</dd></div>
          <div><dt className="font-bold text-dorado">Otro WhatsApp</dt><dd><a href={`https://wa.me/${negocio.whatsapp2}`} target="_blank" rel="noopener" className="underline underline-offset-4">55 2270 4428</a></dd></div>
          <div><dt className="font-bold text-dorado">Correo</dt><dd><a href={`mailto:${negocio.correo}`} className="underline underline-offset-4">{negocio.correo}</a></dd></div>
        </dl>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="border-t border-marfil/10 bg-noche pb-24 pt-8 text-[0.95rem] text-marfil/75 md:pb-8">
      <div className="contenedor flex flex-wrap items-center justify-between gap-3">
        <p>Eventos Jubileo, {negocio.zona}</p>
        <p>XV años, bodas, aniversarios y empresas</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-marfil/15 bg-noche text-marfil md:hidden">
      <a href={waHola} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 bg-ciruela text-[0.9rem] font-bold text-white"><IconoWa />WhatsApp</a>
      <a href={negocio.telefonoLink} className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-bold"><IconoTel />Llamar</a>
      <a href={negocio.mapa} target="_blank" rel="noopener" className="flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-[0.9rem] font-bold"><IconoPin />Cómo llegar</a>
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
        <Arma />
        <Incluye />
        <Espacios />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
