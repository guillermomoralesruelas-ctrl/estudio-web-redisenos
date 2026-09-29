import { useState } from 'react';
import { equipo, horario, inquietudes, negocio, resenas, tratamientos, wa, type Inquietud } from './data/content';
import fotos from './data/fotos.json';

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
const iMapa = 'M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z';

const saludo = 'Hola, quiero agendar una cita en JoyaDent Center.';

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 shadow-[0_1px_0_rgb(28_47_94/0.08)] backdrop-blur">
      <div className="contenedor flex h-18 items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0">
          <img {...foto('logo')} alt="JoyaDent Center" className="h-12 w-auto" />
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-7 font-semibold text-marino lg:flex">
          <a href="#sonrisa" className="hover:text-azul">Tu sonrisa</a>
          <a href="#tratamientos" className="hover:text-azul">Tratamientos</a>
          <a href="#equipo" className="hover:text-azul">Equipo</a>
          <a href="#contacto" className="hover:text-azul">Contacto</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href={`tel:${negocio.telefono.tel}`} className="hidden font-semibold text-azul sm:inline">{negocio.telefono.texto}</a>
          <a href={wa(saludo)} className="boton min-h-11 bg-azul px-5 text-white hover:bg-marino">
            <Icono d={iWhats} />
            <span>Agendar</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="overflow-hidden bg-white">
      <div className="contenedor grid gap-10 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:py-20">
        <div>
          <p className="antetitulo">{negocio.lugar}</p>
          <h1 className="mt-3 text-[2.5rem] sm:text-6xl">Clínica dental de periodoncia e implantología</h1>
          <p className="mt-5 max-w-xl text-lg text-gris">Odontología integral con atención personalizada: de limpiezas y carillas a implantes, ortodoncia y tratamiento de encías, con especialistas del Consejo Mexicano de Periodoncia.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={wa(saludo)} className="boton bg-azul text-white hover:bg-marino"><Icono d={iWhats} /> Agendar cita</a>
            <a href="#sonrisa" className="boton border-2 border-azul/30 text-azul hover:border-azul hover:bg-nube">¿Qué le quieres cambiar a tu sonrisa?</a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-2 text-sm font-semibold text-marino">
            <li className="rounded-full bg-lila px-3 py-1.5">Implantes Straumann®, Nobel Biocare® y Neodent®</li>
            <li className="rounded-full bg-lila px-3 py-1.5">Invisalign</li>
            <li className="rounded-full bg-lila px-3 py-1.5">Más de 10 años de experiencia</li>
          </ul>
        </div>
        <div className="relative">
          <img {...foto('recepcion')} alt="Recepción de JoyaDent Center: sillones blancos, mesa de madera, plantas y una pantalla con un acuario" className="aspect-[4/3] w-full rounded-[2rem] object-cover" fetchPriority="high" />
          <div className="absolute -bottom-5 left-5 hidden rounded-2xl bg-marino px-5 py-4 text-white shadow-xl sm:block">
            <p className="text-sm text-menta">Horario</p>
            <p className="font-semibold">L a V 10 a 14 y 15 a 19 h · Sáb 10 a 14 h</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Dibujo de la arcada superior: diez dientes que cambian según lo que eliges.
const anchos = [30, 32, 34, 38, 44, 44, 38, 34, 32, 30];
const altos = [46, 52, 58, 64, 72, 72, 64, 58, 52, 46];
const dientes = (() => {
  let x = 8;
  return anchos.map((w, i) => {
    const cx = x + w / 2;
    const y = 50 - 0.0009 * (cx - 200) ** 2;
    const d = { x, y, w, h: altos[i], cx };
    x += w + 3;
    return d;
  });
})();
const giros = [6, -8, 5, -5, 3, -4, 6, -7, 8, -5];

function Arcada({ dibujo }: { dibujo: Inquietud['dibujo'] }) {
  const encia = dibujo === 'encias' ? '#d9606f' : '#f2aab4';
  return (
    <svg viewBox="0 -6 400 140" className="w-full" role="img" aria-label={`Dibujo de una sonrisa: ${inquietudes.find((q) => q.dibujo === dibujo)!.pregunta.toLowerCase()}`}>
      <path className="encia" d="M0 -6 L400 -6 L400 22 Q200 94 0 22 Z" fill={encia} />
      {dientes.map((t, i) => {
        const falta = (dibujo === 'hueco' && i === 6) || (dibujo === 'todos' && i > 0 && i < 9);
        const giro = dibujo === 'chuecos' ? giros[i] : 0;
        const baja = dibujo === 'chuecos' ? (i % 2 ? 5 : -2) : 0;
        const corto = dibujo === 'desgaste' && i > 1 && i < 8 ? 0.72 : 1;
        const color = dibujo === 'manchas' ? '#ead9a2' : '#ffffff';
        return (
          <g key={i}>
            {falta && <rect x={t.x + 3} y={t.y + 4} width={t.w - 6} height={t.h - 10} rx={10} fill="none" stroke="#9aa6c2" strokeDasharray="4 4" />}
            <rect
              className="diente"
              x={t.x} y={t.y} width={t.w} height={t.h} rx={11}
              fill={color} stroke="#c9d1e3" strokeWidth={1.5}
              opacity={falta ? 0 : 1}
              style={{ transform: `translateY(${baja}px) rotate(${giro}deg) scaleY(${corto})` }}
            />
          </g>
        );
      })}
      {dibujo === 'manchas' && [2, 4, 5, 7].map((i) => (
        <ellipse key={i} cx={dientes[i].cx + (i % 2 ? 4 : -5)} cy={dientes[i].y + dientes[i].h * 0.62} rx={5} ry={3.5} fill="#c9aa5b" opacity={0.7} />
      ))}
      {dibujo === 'roto' && (
        <>
          <path d={`M${dientes[4].x + dientes[4].w - 20} ${dientes[4].y + dientes[4].h + 1} L${dientes[4].x + dientes[4].w - 9} ${dientes[4].y + dientes[4].h - 12} L${dientes[4].x + dientes[4].w + 1} ${dientes[4].y + dientes[4].h - 24} L${dientes[4].x + dientes[4].w + 1} ${dientes[4].y + dientes[4].h + 1} Z`} fill="#f4f6fb" stroke="#9aa6c2" strokeWidth={1.5} strokeLinejoin="round" />
          <circle cx={dientes[8].cx} cy={dientes[8].y + dientes[8].h * 0.6} r={8} fill="#7d8494" />
        </>
      )}
      {dibujo === 'encias' && dientes.map((t, i) => (
        <path key={i} d={`M${t.x + 3} ${t.y + 6} Q${t.cx} ${t.y + 13} ${t.x + t.w - 3} ${t.y + 6}`} fill="none" stroke="#b83a4b" strokeWidth={2} />
      ))}
      {dibujo === 'todos' && [2, 4, 5, 7].map((i) => (
        <rect key={i} x={dientes[i].cx - 3} y={dientes[i].y + 4} width={6} height={20} rx={2} fill="#9aa6c2" />
      ))}
    </svg>
  );
}

function Sonrisa() {
  const [id, setId] = useState('manchas');
  const q = inquietudes.find((x) => x.id === id)!;
  const doc = equipo.find((d) => d.id === q.doctora)!;
  const mensaje = `Hola, quiero agendar una valoración en JoyaDent Center. ${q.pregunta} y me interesa: ${q.tratamiento.toLowerCase()}.`;

  return (
    <section id="sonrisa" className="py-16 sm:py-24">
      <div className="contenedor">
        <div className="max-w-3xl">
          <p className="antetitulo">Empieza por lo que ves</p>
          <h2 className="mt-2 text-4xl sm:text-5xl">¿Qué le quieres cambiar a tu sonrisa?</h2>
          <p className="mt-4 text-lg text-gris">Elige lo que notas en el espejo. Te decimos qué tratamiento de la clínica lo atiende, qué opciones tiene y quién del equipo lo ve. El diagnóstico siempre es en tu valoración.</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <fieldset>
            <legend className="sr-only">Lo que notas en tu sonrisa</legend>
            <ul className="grid grid-cols-2 gap-2 lg:grid-cols-1">
              {inquietudes.map((x) => (
                <li key={x.id}>
                  <button
                    type="button"
                    aria-pressed={id === x.id}
                    onClick={() => setId(x.id)}
                    className={`flex h-full min-h-13 w-full items-center rounded-2xl px-3 py-2.5 text-left text-[0.92rem] leading-snug font-semibold transition sm:px-5 sm:text-base ${id === x.id ? 'bg-marino text-white' : 'bg-white text-marino ring-1 ring-marino/10 hover:ring-azul/40'}`}
                  >
                    {x.pregunta}
                  </button>
                </li>
              ))}
            </ul>
          </fieldset>

          <div className="overflow-hidden rounded-[2rem] bg-white ring-1 ring-marino/10" aria-live="polite">
            <div className="bg-gradient-to-b from-lila to-white px-6 pt-8 pb-4 sm:px-12">
              <Arcada dibujo={q.dibujo} />
            </div>
            <div className="p-6 sm:p-8">
              <p className="antetitulo">{q.pregunta}</p>
              <h3 className="mt-2 text-3xl">{q.tratamiento}</h3>
              <p className="mt-3 text-gris">{q.texto}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {q.opciones.map((o) => <li key={o} className="rounded-full bg-nube px-3 py-1.5 text-sm font-semibold text-marino ring-1 ring-marino/10">{o}</li>)}
              </ul>
              <div className="mt-6 flex items-center gap-4 border-t border-marino/10 pt-5">
                {doc.foto ? (
                  <img {...foto(doc.foto)} alt={doc.nombre} className="size-14 rounded-full object-cover object-top" loading="lazy" />
                ) : (
                  <span className="grid size-14 place-items-center rounded-full bg-lila font-serif text-lg text-marino" aria-hidden="true">{doc.nombre.replace('Dra. ', '').split(' ').map((p) => p[0]).slice(0, 2).join('')}</span>
                )}
                <p className="leading-snug">
                  <span className="block text-sm text-gris">Lo ve, por su especialidad</span>
                  <span className="font-semibold text-marino">{doc.nombre}</span>
                  <span className="text-gris"> · {doc.titulo}</span>
                </p>
              </div>
              <a href={wa(mensaje)} className="boton mt-6 w-full bg-azul text-white hover:bg-marino sm:w-auto">
                <Icono d={iWhats} />
                Agendar valoración por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tratamientos() {
  return (
    <section id="tratamientos" className="bg-white py-16 sm:py-24">
      <div className="contenedor">
        <p className="antetitulo">Nuestros tratamientos</p>
        <h2 className="mt-2 max-w-2xl text-4xl sm:text-5xl">Odontología integral en un solo lugar</h2>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tratamientos.map((t) => (
            <li key={t.titulo} className="rounded-3xl bg-nube p-6 ring-1 ring-marino/5">
              <h3 className="text-2xl">{t.titulo}</h3>
              <p className="mt-2 text-gris">{t.texto}</p>
            </li>
          ))}
        </ul>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="oscuro rounded-3xl bg-marino p-7 text-white/90 sm:p-9">
            <p className="antetitulo">All on 4 · All on 6</p>
            <h3 className="mt-2 text-3xl">Toda una arcada sobre cuatro implantes</h3>
            <p className="mt-3">Con All on 4, todos los dientes de arriba o de abajo se reemplazan por un juego de dientes fijos sobre solo cuatro implantes. Los implantes de atrás se inclinan 45° hacia la parte posterior de la boca y se colocan donde el hueso es más denso, por eso no requiere la misma densidad ósea que otros métodos.</p>
          </article>
          <article className="rounded-3xl bg-lila p-7 sm:p-9">
            <p className="antetitulo">Tecnología</p>
            <h3 className="mt-2 text-3xl">Cámara intraoral</h3>
            <p className="mt-3 text-gris">Una pequeña cámara toma fotos y video del interior de tu boca en tiempo real y los proyecta en una pantalla: ves lo mismo que tu dentista y entiendes mejor el tratamiento que te recomienda.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Equipo() {
  const joya = equipo[0];
  return (
    <section id="equipo" className="py-16 sm:py-24">
      <div className="contenedor">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center">
          <img {...foto(joya.foto!)} alt="La Dra. Karla Joya Medina sentada en su escritorio, con un cuadro de un diente detrás" className="aspect-[4/5] w-full rounded-[2rem] object-cover" loading="lazy" />
          <div>
            <p className="antetitulo">{joya.titulo}</p>
            <h2 className="mt-2 text-4xl sm:text-5xl">{joya.nombre}</h2>
            <ul className="mt-6 space-y-3">
              {joya.detalle!.map((d) => <li key={d} className="border-l-2 border-menta pl-4 text-gris">{d}</li>)}
            </ul>
            <h3 className="mt-10 text-2xl">Con ella trabajan</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {equipo.slice(1).map((d) => (
                <li key={d.id} className="rounded-2xl bg-white p-5 ring-1 ring-marino/10">
                  <p className="font-serif text-xl text-marino">{d.nombre}</p>
                  <p className="text-gris">{d.titulo}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ul className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {[
            { f: 'consulta', a: 'Una doctora de JoyaDent revisa una radiografía en la pantalla con un paciente en el sillón' },
            { f: 'procedimiento', a: 'Dos especialistas con bata y cubrebocas atienden a una paciente en el consultorio' },
            { f: 'equipo-quirurgico', a: 'Integrante del equipo con uniforme quirúrgico guinda y pinzas en la mano' },
            { f: 'equipo-guantes', a: 'Integrante del equipo con filipina negra bordada y guantes rosas, sonriendo' },
          ].map((x) => (
            <li key={x.f}><img {...foto(x.f)} alt={x.a} className="aspect-[3/4] w-full rounded-2xl object-cover" loading="lazy" /></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Vacaciones() {
  return (
    <section className="oscuro bg-marino py-16 text-white/90 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="antetitulo">Bahía de Banderas y Puerto Vallarta</p>
          <h2 className="mt-2 text-4xl sm:text-5xl">¿Vienes de vacaciones?</h2>
          <p className="mt-4 text-lg">La clínica está en una zona vacacional, rodeada de resorts y restaurantes, con fácil acceso desde Puerto Vallarta y Bahía de Banderas. Puedes hacer tu tratamiento y disfrutar de tus vacaciones.</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {['Carillas', 'Implantes', 'Ortodoncia', 'All on 4', 'Coronas'].map((t) => <li key={t} className="rounded-full bg-white/10 px-4 py-1.5 font-semibold text-white">{t}</li>)}
          </ul>
        </div>
        <ul className="grid gap-4">
          {resenas.map((r) => (
            <li key={r.autor} className="rounded-2xl bg-white/[0.07] p-5">
              <blockquote className="font-serif text-lg italic text-white">“{r.texto}”</blockquote>
              <p className="mt-2 text-sm text-menta">{r.autor} · reseña de Google, {r.fecha}</p>
            </li>
          ))}
          <li className="text-sm text-white/75">Reseñas tomadas del widget de Google de su sitio (14 reseñas).</li>
        </ul>
      </div>
    </section>
  );
}

function Clinica() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="contenedor">
        <p className="antetitulo">La clínica</p>
        <h2 className="mt-2 text-4xl sm:text-5xl">Edificio MITA, Nuevo Vallarta</h2>
        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          <img {...foto('consultorio')} alt="Consultorio con sillón dental, muebles blancos y diplomas en la pared" className="aspect-[4/3] w-full rounded-2xl object-cover sm:col-span-2 sm:row-span-2 sm:aspect-auto sm:h-full" loading="lazy" />
          <img {...foto('consultorio-2')} alt="Otro consultorio con sillón dental negro, lámpara y cuadros de dientes" className="aspect-[4/3] w-full rounded-2xl object-cover" loading="lazy" />
          <img {...foto('fachada')} alt="Fachada de cristal de JoyaDent Center con su logo y la foto de una paciente sonriendo" className="aspect-[4/3] w-full rounded-2xl object-cover" loading="lazy" />
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
          <p className="antetitulo">Agenda tu cita</p>
          <h2 className="mt-2 text-4xl sm:text-5xl">JoyaDent Center en Nuevo Vallarta</h2>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={wa(saludo)} className="boton bg-azul text-white hover:bg-marino"><Icono d={iWhats} /> WhatsApp</a>
            <a href={`tel:${negocio.telefono.tel}`} className="boton border-2 border-azul/30 text-azul hover:bg-white"><Icono d={iTel} /> {negocio.telefono.texto}</a>
            <a href={`tel:${negocio.telefono2.tel}`} className="boton border-2 border-azul/30 text-azul hover:bg-white"><Icono d={iTel} /> {negocio.telefono2.texto}</a>
          </div>
          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <dt className="antetitulo">Consultorio</dt>
              <dd className="mt-1">{negocio.direccion}</dd>
              <dd><a href={negocio.mapa} className="mt-1 inline-flex min-h-11 items-center gap-2 font-semibold text-azul underline underline-offset-4 hover:text-marino"><Icono d={iMapa} /> Abrir en Google Maps</a></dd>
            </div>
            <div>
              <dt className="antetitulo">Horario</dt>
              {horario.map((h) => <dd key={h.dias} className="mt-1"><span className="font-semibold">{h.dias}:</span> {h.horas}</dd>)}
            </div>
            <div>
              <dt className="antetitulo">Correo y redes</dt>
              <dd className="mt-1"><a href={`mailto:${negocio.correo}`} className="underline underline-offset-4 hover:text-azul">{negocio.correo}</a></dd>
              <dd className="mt-2 flex flex-wrap gap-2">
                <a href={negocio.facebook} className="boton min-h-11 border border-marino/20 px-4 text-marino hover:bg-white">Facebook</a>
                <a href={negocio.instagram} className="boton min-h-11 border border-marino/20 px-4 text-marino hover:bg-white">Instagram</a>
              </dd>
            </div>
          </dl>
        </div>
        <div className="relative min-h-80 overflow-hidden rounded-[2rem] bg-lila ring-1 ring-marino/10">
          <a href={negocio.mapa} className="absolute inset-0 grid place-items-center text-center font-semibold text-azul underline underline-offset-4">Ver JoyaDent Center en Google Maps</a>
          <iframe
            src={negocio.mapaEmbed}
            width="100%"
            height="440"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Ubicación de ${negocio.nombre} en Google Maps`}
            className="relative block h-full min-h-80 w-full"
          />
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="oscuro bg-marino py-10 pb-24 text-sm text-white/80 md:pb-10">
      <div className="contenedor flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <img {...foto('logo-blanco')} alt="JoyaDent Center, Dra. Karla Joya Medina, periodoncia e implantología" className="h-16 w-auto self-start" loading="lazy" />
        <p>{negocio.especialidad} · {negocio.lugar}</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-marino/10 bg-white text-marino md:hidden">
      <a href={wa(saludo)} className="flex min-h-15 items-center justify-center gap-2 bg-azul font-semibold text-white"><Icono d={iWhats} /> Agendar</a>
      <a href={`tel:${negocio.telefono.tel}`} className="flex min-h-15 items-center justify-center gap-2 font-semibold"><Icono d={iTel} /> Llamar</a>
      <a href={negocio.mapa} className="flex min-h-15 items-center justify-center gap-2 font-semibold"><Icono d={iMapa} /> Llegar</a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <Encabezado />
      <main>
        <Portada />
        <Sonrisa />
        <Tratamientos />
        <Equipo />
        <Vacaciones />
        <Clinica />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
