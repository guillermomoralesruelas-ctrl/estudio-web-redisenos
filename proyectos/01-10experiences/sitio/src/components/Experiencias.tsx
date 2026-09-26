import { experiencias, reserva } from '../data/content';
import { useReserva } from '../lib/reserva';

export default function Experiencias() {
  const abrir = useReserva();
  return (
    <section id="experiencias" className="bg-noche-2 py-20 md:py-32" aria-labelledby="exp-titulo">
      <div className="contenedor">
        <div className="max-w-2xl">
          <h2 id="exp-titulo" className="text-4xl md:text-6xl">Elige tu experiencia</h2>
          <p className="mt-5 text-crema/80">
            Cupo limitado y solo con reservación. Elige un horario y te confirmamos la disponibilidad por WhatsApp.
          </p>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-12 md:gap-10">
          {experiencias.map((e, i) => {
            const principal = i === 0;
            return (
              <article
                key={e.id}
                className={principal ? 'md:col-span-7' : 'md:col-span-5 md:mt-24'}
                aria-labelledby={`exp-${e.id}`}
              >
                <div className="relative overflow-hidden rounded-sm">
                  <img
                    src={e.imagen}
                    alt={e.alt}
                    width={768}
                    height={1349}
                    loading="lazy"
                    className={`w-full object-cover ${principal ? 'aspect-[4/5] md:aspect-[5/6]' : 'aspect-[4/5]'}`}
                  />
                  {principal && (
                    <p className="absolute left-4 top-4 rounded-sm bg-noche/85 px-3 py-1 text-sm text-champan">
                      La favorita de nuestros invitados
                    </p>
                  )}
                </div>

                <div className="mt-7 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <h3 id={`exp-${e.id}`} className={principal ? 'text-4xl md:text-5xl' : 'text-4xl'}>
                    {e.nombre}
                  </h3>
                  <p className="font-display text-3xl text-vela-claro">
                    ${e.precio} <span className="font-sans text-base text-crema/70">USD por persona</span>
                  </p>
                </div>
                <p className="mt-4 max-w-[60ch] text-crema/80">{e.texto}</p>
                <dl className="mt-6 grid gap-x-8 gap-y-3 text-[0.95rem] sm:grid-cols-2">
                  <div>
                    <dt className="text-crema/55">Incluye</dt>
                    <dd>{e.incluye}</dd>
                  </div>
                  <div>
                    <dt className="text-crema/55">Duración</dt>
                    <dd>{e.duracion}, {e.dias.toLowerCase()}</dd>
                  </div>
                </dl>

                <fieldset className="mt-7">
                  <legend className="text-[0.95rem] text-crema/55">Reserva un horario</legend>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {e.horarios.map((h) => (
                      <button
                        key={h}
                        type="button"
                        onClick={() => abrir(e.id, h)}
                        className={principal ? 'btn-primario min-w-36' : 'btn-linea min-w-36'}
                        aria-label={`Reservar ${e.nombre} a las ${h}`}
                      >
                        {h}
                      </button>
                    ))}
                  </div>
                </fieldset>
              </article>
            );
          })}
        </div>

        <p className="mt-16 max-w-2xl text-sm text-crema/60">{reserva.politica}</p>
      </div>
    </section>
  );
}
