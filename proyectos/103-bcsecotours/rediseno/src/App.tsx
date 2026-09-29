import { useState } from 'react';
import { negocio, wa, waInformes, foto, islas, fauna, actividades, safaris, equipoIncluido, delMarALaMesa, ballenaAzul, keiko, otrasSalidas, testimonios, preguntas, pesos } from './data/content';
import type { Safari } from './data/content';

const externo = { target: '_blank', rel: 'noopener noreferrer' } as const;

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


function IconoCorreo({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function Encabezado() {
  const enlaces: [string, string][] = [['#safaris', 'Safaris'], ['#keiko', 'Tu lugar en la Keiko'], ['#ballena-azul', 'Ballena azul'], ['#mas', 'Snorkel, buceo y pesca'], ['#contacto', 'Contacto']];
  return (
    <header className="oscuro sticky top-0 z-40 border-b border-white/10 bg-abismo/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-2.5" aria-label="BCS Eco Tours, inicio">
          <img src={`${import.meta.env.BASE_URL}icono.png`} alt="" width={36} height={36} className="h-9 w-9 rounded-full bg-concha p-0.5" />
          <span className="font-display text-xl text-concha">BCS Eco Tours</span>
        </a>
        <nav aria-label="Secciones" className="hidden gap-6 text-[0.92rem] font-medium lg:flex">
          {enlaces.map(([h, t]) => <a key={h} href={h} className="hover:text-sol">{t}</a>)}
        </nav>
        <a href={waInformes} className="btn hidden !min-h-10 !py-2 sm:inline-flex" {...externo}><IconoWa />Reservar</a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="oscuro relative isolate overflow-hidden">
      <img src={foto('playa-dron')} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" fetchPriority="high" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-abismo via-abismo/80 to-abismo/20" />
      <div className="contenedor pb-16 pt-24 sm:pb-24 sm:pt-32">
        <p className="antetitulo">Parque Nacional Bahía de Loreto · Baja California Sur</p>
        <h1 className="mt-3 max-w-2xl text-[2.9rem] sm:text-[4.4rem]">Safaris marinos en Loreto, en las lanchas Keiko</h1>
        <p className="mt-5 max-w-xl text-lg">
          ¡Un mar lleno de vida! Expediciones de 5 a 6 horas entre Isla Coronados, Carmen, Danzante y Monserrat: ballenas, delfines, lobos marinos, snorkel, pesca y mariscos del mar a la mesa. Operadores locales con más de 28 años en el Mar de Cortés.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#keiko" className="btn">Aparta tu lugar en la Keiko</a>
          <a href={waInformes} className="btn-claro" {...externo}><IconoWa />WhatsApp</a>
        </div>
        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem]">
          <li><strong className="text-concha">Desde {pesos(1350)}</strong> por persona</li>
          <li><strong className="text-concha">10 a 16</strong> pasajeros por salida</li>
          <li>Salida desde la <strong className="text-concha">Marina de Loreto</strong></li>
        </ul>
      </div>
    </section>
  );
}

function Safaris() {
  return (
    <section id="safaris" className="py-16 sm:py-24">
      <div className="contenedor">
        <p className="antetitulo">Nuestros tours</p>
        <h2 className="mt-2 max-w-2xl text-4xl sm:text-5xl">Tres formas de salir al Parque Nacional</h2>
        <p className="mt-4 max-w-2xl text-gris">Cada salida es distinta: no siguen una ruta fija, navegan buscando las señales que da el mar ese día. Todos parten temprano de la marina y pueden combinar actividades.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {safaris.map((s) => (
            <article key={s.id} className="flex flex-col rounded-2xl bg-concha p-6 shadow-[0_18px_40px_-30px_rgb(6_50_61/0.6)]">
              <p className="text-[0.85rem] font-semibold uppercase tracking-wider text-ocre">{s.lema}</p>
              <h3 className="mt-2 text-3xl">{s.nombre}</h3>
              <p className="mt-1 text-lg">Desde <strong className="font-display text-2xl text-mar">{pesos(s.precio)}</strong> <span className="text-gris">por persona</span></p>
              <p className="mt-3 text-[0.98rem] text-gris">{s.texto}</p>
              <p className="mt-3 text-[0.9rem]"><span className="font-semibold">Ideal para:</span> {s.ideal.join(', ').toLowerCase()}.</p>
              <p className="mt-2 text-[0.9rem] text-gris">{s.minimo ? `${s.minimo} a ${s.maximo} pasajeros` : 'Capacidad por confirmar'} · 5 a 6 horas</p>
            </article>
          ))}
        </div>
        <div className="mt-10 grid gap-8 rounded-2xl bg-mar p-6 text-espuma sm:p-8 lg:grid-cols-3">
          <div>
            <h3 className="text-2xl text-concha">Las islas</h3>
            <ul className="mt-3 space-y-1">{islas.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
          <div>
            <h3 className="text-2xl text-concha">Posibles encuentros</h3>
            <p className="mt-3">{fauna.join(', ')}.</p>
          </div>
          <div>
            <h3 className="text-2xl text-concha">Equipo incluido</h3>
            <ul className="mt-3 space-y-1">{equipoIncluido.map((e) => <li key={e}>{e}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Asientos de la ilustración: 8 por banda, de proa a popa.
const ASIENTOS = Array.from({ length: 16 }, (_, i) => ({ x: i % 2 === 0 ? 40 : 136, y: 168 + Math.floor(i / 2) * 38 }));

function Keiko() {
  const [id, setId] = useState<Safari['id']>('compartido');
  const [n, setN] = useState(4);
  const [elegidas, setElegidas] = useState<string[]>(['Observación de fauna marina', 'Snorkeling alrededor de las islas', 'Del Mar a la Mesa']);
  const [fecha, setFecha] = useState('');
  const s = safaris.find((x) => x.id === id)!;
  const compartido = id === 'compartido';
  const total = n * s.precio;
  const hoy = new Date().toISOString().slice(0, 10);
  const fechaTexto = fecha ? new Date(`${fecha}T12:00:00`).toLocaleDateString('es-MX', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) : '';
  const aviso = compartido
    ? `La salida compartida sale con un mínimo de 10 pasajeros; ${n === 16 ? 'ocupan toda la lancha' : `los otros ${16 - n} lugares pueden ser de otros viajeros`}.`
    : id === 'privado'
      ? n < 10 ? 'Su safari privado es para grupos de 10 a 16 pasajeros: pregunta por grupos más chicos.' : 'La lancha es solo para tu grupo.'
      : 'La lancha es solo para tu grupo; su sitio no indica capacidad, confírmala por WhatsApp.';
  const toggle = (a: string) => setElegidas((l) => (l.includes(a) ? l.filter((x) => x !== a) : [...l, a]));
  const mensaje = [
    `Hola BCS Eco Tours, quiero reservar el ${s.nombre}.`,
    `Pasajeros: ${n}`,
    `Fecha: ${fechaTexto || 'por definir'}`,
    elegidas.length ? `Me interesa: ${elegidas.join(', ')}` : '',
  ].filter(Boolean).join('\n');

  return (
    <section id="keiko" className="oscuro py-16 sm:py-24">
      <div className="contenedor">
        <p className="antetitulo">Aparta tu lugar</p>
        <h2 className="mt-2 max-w-3xl text-4xl sm:text-5xl">Tu lugar en la Keiko</h2>
        <p className="mt-4 max-w-2xl">
          Sus lanchas Keiko miden 30 pies y llevan de 10 a 16 pasajeros. Elige el safari y cuántos van: verás tus lugares en la lancha, el precio desde y un WhatsApp con todo listo.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-7">
            <fieldset>
              <legend className="font-semibold text-concha">Safari</legend>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {safaris.map((x) => (
                  <button key={x.id} type="button" aria-pressed={id === x.id} onClick={() => setId(x.id)}
                    className={`rounded-xl border px-3 py-3 text-left transition-colors sm:px-4 ${id === x.id ? 'border-sol bg-sol text-abismo' : 'border-white/20 hover:border-sol'}`}>
                    <span className="block font-semibold">{x.nombre.replace('Safari ', '')}</span>
                    <span className="text-[0.9rem]">{pesos(x.precio)} p/p</span>
                  </button>
                ))}
              </div>
            </fieldset>
            <div>
              <p className="font-semibold text-concha" id="pasajeros-titulo">Pasajeros de tu grupo</p>
              <div className="mt-3 flex items-center gap-3" role="group" aria-labelledby="pasajeros-titulo">
                <button type="button" onClick={() => setN((v) => Math.max(1, v - 1))} className="h-12 w-12 rounded-full border border-white/25 text-2xl hover:border-sol" aria-label="Uno menos">−</button>
                <output className="w-16 text-center font-display text-4xl text-concha" aria-live="polite">{n}</output>
                <button type="button" onClick={() => setN((v) => Math.min(16, v + 1))} className="h-12 w-12 rounded-full border border-white/25 text-2xl hover:border-sol" aria-label="Uno más">+</button>
              </div>
            </div>
            <fieldset>
              <legend className="font-semibold text-concha">¿Qué quieren hacer?</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {actividades.map((a) => (
                  <button key={a} type="button" aria-pressed={elegidas.includes(a)} onClick={() => toggle(a)}
                    className={`rounded-full border px-3.5 py-2 text-[0.9rem] transition-colors ${elegidas.includes(a) ? 'border-turquesa bg-turquesa text-abismo' : 'border-white/20 hover:border-turquesa'}`}>{a}</button>
                ))}
              </div>
            </fieldset>
            <label className="block max-w-xs">
              <span className="font-semibold text-concha">Fecha</span>
              <input type="date" min={hoy} value={fecha} onChange={(e) => setFecha(e.target.value)}
                className="mt-2 w-full rounded-xl border border-white/25 bg-mar px-4 py-3 text-concha [color-scheme:dark]" />
            </label>
          </div>

          <div className="rounded-2xl bg-mar/60 p-5 sm:p-6 lg:sticky lg:top-24">
            <div className="grid grid-cols-[150px_1fr] items-start gap-5 sm:grid-cols-[180px_1fr]">
              <svg viewBox="0 0 200 520" className="w-full" role="img" aria-label={`Ilustración de la lancha Keiko vista desde arriba: ${n} lugares de tu grupo de 16`}>
                <path d="M100 8 C150 58 176 140 178 240 L178 468 Q178 500 150 500 L50 500 Q22 500 22 468 L22 240 C24 140 50 58 100 8 Z" fill="#fffaf2" stroke="#5fd3cc" strokeWidth="3" />
                <path d="M100 30 C136 70 154 120 158 150 L42 150 C46 120 64 70 100 30 Z" fill="none" stroke="#56666a" strokeWidth="1.5" strokeDasharray="4 4" />
                <text x="100" y="118" textAnchor="middle" fontSize="13" fill="#56666a">Proa</text>
                <rect x="30" y="232" width="140" height="190" rx="10" fill="#0b5566" opacity="0.08" />
                <rect x="78" y="236" width="44" height="64" rx="6" fill="#0b5566" />
                <text x="100" y="273" textAnchor="middle" fontSize="11" fill="#fffaf2">Consola</text>
                {ASIENTOS.map((a, i) => {
                  const tuyo = i < n;
                  const fill = tuyo ? '#f0a04b' : compartido ? '#cfe9e6' : '#fffaf2';
                  const stroke = tuyo ? '#b4471f' : compartido ? '#0b5566' : '#cfe9e6';
                  return <rect key={i} className="asiento" x={a.x} y={a.y} width="24" height="26" rx="6" fill={fill} stroke={stroke} strokeWidth="2" strokeDasharray={!tuyo && !compartido ? '3 3' : undefined} />;
                })}
                <rect x="84" y="500" width="32" height="14" rx="3" fill="#06323d" />
                <text x="100" y="486" textAnchor="middle" fontSize="11" fill="#56666a">Popa · Yamaha 250</text>
              </svg>
              <div>
                <p className="text-[0.9rem] uppercase tracking-wider text-turquesa">{s.nombre}</p>
                <p className="mt-1 font-display text-4xl text-concha">{pesos(total)}</p>
                <p className="text-[0.95rem]">desde, por {n} {n === 1 ? 'pasajero' : 'pasajeros'} ({pesos(s.precio)} c/u)</p>
                <ul className="mt-4 space-y-2 text-[0.9rem]">
                  <li className="flex items-center gap-2"><span className="h-4 w-4 rounded bg-sol ring-2 ring-ocre" />Tu grupo</li>
                  {compartido
                    ? <li className="flex items-center gap-2"><span className="h-4 w-4 rounded bg-espuma ring-2 ring-mar" />Otros viajeros</li>
                    : <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border-2 border-dashed border-espuma" />Libre, solo para ustedes</li>}
                </ul>
                <p className="mt-4 text-[0.92rem]">{aviso}</p>
              </div>
            </div>
            <a href={wa(mensaje)} className="btn mt-6 w-full" {...externo}><IconoWa />Reservar por WhatsApp</a>
            <p className="mt-3 text-center text-[0.8rem] text-espuma/90">Ilustración, no es el plano real. Precios "desde" de su sitio; confirma el total al reservar.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BallenaAzul() {
  return (
    <section id="ballena-azul" className="py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="antetitulo">Temporada {ballenaAzul.temporada.toLowerCase()}</p>
          <h2 className="mt-2 text-4xl sm:text-5xl">Observación de la ballena azul</h2>
          <p className="mt-4">
            Cada invierno llega a la Bahía de Loreto el animal más grande del planeta. Salen en grupos pequeños, una salida por día, siguiendo las regulaciones del Parque Nacional y a distancia segura. También es común ver ballenas de aleta, jorobadas y piloto, mantas, lobos marinos y delfines.
          </p>
          <dl className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-concha p-4"><dt className="text-[0.85rem] text-gris">Compartido (mínimo {ballenaAzul.compartidoMinimo})</dt><dd className="font-display text-2xl text-mar">{pesos(ballenaAzul.compartido)} p/p</dd></div>
            <div className="rounded-xl bg-concha p-4"><dt className="text-[0.85rem] text-gris">Privado (hasta {ballenaAzul.maximo})</dt><dd className="font-display text-2xl text-mar">{pesos(ballenaAzul.privado)}</dd></div>
          </dl>
          <p className="mt-3 text-[0.95rem] text-gris"><strong className="text-tinta">Incluye:</strong> {ballenaAzul.incluye}</p>
          <a href={wa('Hola BCS Eco Tours, quiero información del tour de ballena azul.')} className="btn-mar mt-6" {...externo}><IconoWa />Preguntar por la ballena azul</a>
        </div>
        <div>
          <img src={foto('pangas-turistas')} alt="La lancha Keiko con pasajeros a bordo en aguas turquesa de la bahía" loading="lazy" className="aspect-[16/9] w-full rounded-2xl object-cover" />
          <ol className="mt-6 space-y-3 border-l-2 border-mar/30 pl-5">
            {ballenaAzul.itinerario.map(([h, t]) => (
              <li key={h}><span className="font-display text-lg text-mar">{h}</span> <span className="text-[0.95rem]">{t}</span></li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Mas() {
  return (
    <section id="mas" className="bg-concha py-16 sm:py-24">
      <div className="contenedor">
        <p className="antetitulo">Más salidas</p>
        <h2 className="mt-2 max-w-2xl text-4xl sm:text-5xl">Snorkel, buceo y pesca deportiva</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {otrasSalidas.map((o) => (
            <article key={o.titulo} className="overflow-hidden rounded-2xl bg-arena">
              <img src={foto(o.foto)} alt={o.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <h3 className="text-2xl">{o.titulo}</h3>
                <p className="mt-2 text-[0.97rem] text-gris">{o.texto}</p>
                <a href={wa(`Hola BCS Eco Tours, quiero información de ${o.titulo.toLowerCase()}.`)} className="enlace mt-3 inline-block text-[0.95rem]" {...externo}>Preguntar por WhatsApp</a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 grid items-center gap-8 lg:grid-cols-2">
          <img src={foto('mariscos')} alt="Charola de mariscos y pescado preparados a la orilla del mar" loading="lazy" className="aspect-[16/10] w-full rounded-2xl object-cover" />
          <div>
            <h3 className="text-3xl">Del mar a la mesa</h3>
            <p className="mt-3 text-gris">La aventura termina con los sabores del mismo océano que acabas de explorar:</p>
            <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">{delMarALaMesa.map((d) => <li key={d} className="flex gap-2"><span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-ocre" />{d}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Embarcaciones() {
  return (
    <section id="embarcaciones" className="py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="grid grid-cols-2 gap-3">
          <img src={foto('keiko-playa')} alt="Lancha Keiko varada en una playa de arena blanca" loading="lazy" className="col-span-2 aspect-[16/9] w-full rounded-2xl object-cover" />
          <img src={foto('playa-dron')} alt="Playa con palapa y lanchas vista desde un dron" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover" />
          <img src={foto('caleta-lancha')} alt="Lancha anclada en una caleta de agua turquesa entre rocas" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover" />
        </div>
        <div>
          <p className="antetitulo">Nuestras embarcaciones</p>
          <h2 className="mt-2 text-4xl sm:text-5xl">Keiko y Keiko I, diseñadas por ellos mismos</h2>
          <p className="mt-4 text-gris">Son instructores certificados, guías, capitanes y personal administrativo, todos residentes de Loreto. Con más de 28 años en turismo marítimo, diseñaron sus lanchas para pesca, buceo y snorkel.</p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {keiko.map((k) => <li key={k} className="flex gap-2 text-[0.97rem]"><span aria-hidden="true" className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-mar" />{k}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Opiniones() {
  return (
    <section className="oscuro py-16 sm:py-20">
      <div className="contenedor">
        <h2 className="text-4xl sm:text-5xl">Lo que opinan sus clientes</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {testimonios.map((t) => (
            <blockquote key={t} className="rounded-2xl border border-white/15 p-6">
              <p className="font-display text-xl leading-snug text-concha">“{t}”</p>
            </blockquote>
          ))}
        </div>
        <p className="mt-4 text-[0.9rem]">Testimonios publicados en su sitio.</p>
      </div>
    </section>
  );
}

function Preguntas() {
  return (
    <section id="preguntas" className="py-16 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <p className="antetitulo">Preguntas frecuentes</p>
          <h2 className="mt-2 text-4xl sm:text-5xl">Antes de subir a la lancha</h2>
          <p className="mt-4">¿Otra duda? <a href={waInformes} className="enlace" {...externo}>Escríbeles por WhatsApp</a>.</p>
        </div>
        <div className="divide-y divide-mar/15 border-y border-mar/15">
          {preguntas.map((q) => (
            <details key={q.p} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                {q.p}<span aria-hidden="true" className="text-2xl leading-none text-ocre transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-2 text-gris">{q.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="oscuro relative isolate overflow-hidden py-16 sm:py-24">
      <img src={foto('cardones-atardecer')} alt="" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-abismo/85" />
      <div className="contenedor grid gap-10 lg:grid-cols-2">
        <div>
          <p className="antetitulo">Tu viaje empieza con un mensaje</p>
          <h2 className="mt-2 text-4xl sm:text-5xl">Visítalos en Loreto</h2>
          <p className="mt-4 max-w-lg">Reserva por WhatsApp, por correo o en sus oficinas. Las salidas son desde la {negocio.salida}.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={waInformes} className="btn" {...externo}><IconoWa />WhatsApp {negocio.telefono}</a>
            <a href={negocio.mapa} className="btn-claro" {...externo}><IconoPin />Cómo llegar</a>
          </div>
        </div>
        <ul className="space-y-4 self-end text-concha">
          <li className="flex gap-3"><IconoPin className="mt-1 h-5 w-5 shrink-0 text-sol" /><span><span className="block text-[0.8rem] uppercase tracking-wider text-espuma">Oficina</span><a href={negocio.mapa} className="hover:text-sol" {...externo}>{negocio.direccion}</a></span></li>
          <li className="flex gap-3"><IconoPin className="mt-1 h-5 w-5 shrink-0 text-sol" /><span><span className="block text-[0.8rem] uppercase tracking-wider text-espuma">Salidas</span><a href={negocio.mapaDarsena} className="hover:text-sol" {...externo}>{negocio.salida}</a></span></li>
          <li className="flex gap-3"><IconoCorreo className="mt-1 h-5 w-5 shrink-0 text-sol" /><span><span className="block text-[0.8rem] uppercase tracking-wider text-espuma">Correo</span><a href={`mailto:${negocio.correo}`} className="hover:text-sol">{negocio.correo}</a></span></li>
          <li className="flex gap-5 pt-1 text-[0.95rem]">
            <a href={negocio.facebook} className="enlace" {...externo}>Facebook</a>
            <a href={negocio.youtube} className="enlace" {...externo}>YouTube</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro border-t border-white/10 pb-24 pt-8 text-[0.9rem] md:pb-8">
      <div className="contenedor flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} BCS Eco Tours. Loreto, Baja California Sur.</p>
        <a href={negocio.sitio} className="enlace" {...externo}>Sitio actual</a>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-abismo text-[0.8rem] font-semibold text-concha md:hidden">
      <a href={waInformes} className="flex flex-col items-center gap-1 bg-sol py-3 text-abismo" {...externo}><IconoWa />WhatsApp</a>
      <a href={negocio.telefonoHref} className="flex flex-col items-center gap-1 py-3"><IconoTel />Llamar</a>
      <a href={negocio.mapa} className="flex flex-col items-center gap-1 py-3" {...externo}><IconoPin />Cómo llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#safaris" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded focus:bg-concha focus:px-3 focus:py-2">Saltar al contenido</a>
      <Encabezado />
      <main>
        <Portada />
        <Safaris />
        <Keiko />
        <BallenaAzul />
        <Mas />
        <Embarcaciones />
        <Opiniones />
        <Preguntas />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
