import { useRef, useState, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { viaje } from '../data/content';
import { IconoFlecha } from './Iconos';

export default function Pasaporte() {
  const pista = useRef<HTMLUListElement>(null);
  const reducir = useReducedMotion();
  const [activo, setActivo] = useState(0);
  const arrastrando = useRef(false);
  const origenX = useRef(0);
  const origenScroll = useRef(0);

  const mover = (dir: 1 | -1) => {
    const el = pista.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 640), behavior: reducir ? 'auto' : 'smooth' });
  };

  const irA = (i: number) => {
    const el = pista.current;
    if (!el) return;
    const ancho = el.scrollWidth / viaje.estados.length;
    el.scrollTo({ left: ancho * i, behavior: reducir ? 'auto' : 'smooth' });
  };

  const onScroll = useCallback(() => {
    const el = pista.current;
    if (!el) return;
    const ancho = el.scrollWidth / viaje.estados.length;
    setActivo(Math.round(el.scrollLeft / ancho));
  }, []);

  // Drag con mouse (pointer events)
  const onPointerDown = (e: React.PointerEvent<HTMLUListElement>) => {
    const el = pista.current;
    if (!el || e.pointerType === 'touch') return;
    arrastrando.current = true;
    origenX.current = e.clientX;
    origenScroll.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
    el.style.scrollSnapType = 'none';
  };

  const onPointerMove = (e: React.PointerEvent<HTMLUListElement>) => {
    if (!arrastrando.current || !pista.current) return;
    const dx = origenX.current - e.clientX;
    pista.current.scrollLeft = origenScroll.current + dx;
  };

  const onPointerUp = (e: React.PointerEvent<HTMLUListElement>) => {
    if (!arrastrando.current || !pista.current) return;
    arrastrando.current = false;
    pista.current.releasePointerCapture(e.pointerId);
    // Restaura snap y deja que quede en la postal más cercana
    pista.current.style.scrollSnapType = '';
    const ancho = pista.current.scrollWidth / viaje.estados.length;
    const idx = Math.round(pista.current.scrollLeft / ancho);
    irA(idx);
  };

  return (
    <section id="viaje" className="papel relative overflow-hidden py-20 text-tinta md:py-28" aria-labelledby="viaje-titulo">
      <img src={viaje.calendario} alt="" aria-hidden="true" loading="lazy"
        className="pointer-events-none absolute -right-24 -top-24 w-80 opacity-[0.12] md:w-[28rem]" />

      <div className="contenedor relative">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <h2 id="viaje-titulo" className="text-4xl text-tinta md:text-6xl">{viaje.titulo}</h2>
            <p className="mt-4 text-tinta/75">{viaje.texto}</p>
          </div>
          <div className="flex gap-2">
            <button type="button" onClick={() => mover(-1)}
              className="inline-flex size-10 items-center justify-center rounded-full border border-tinta/25 text-tinta transition-colors hover:bg-tinta hover:text-papel md:size-12"
              aria-label="Postales anteriores">
              <IconoFlecha dir="izq" />
            </button>
            <button type="button" onClick={() => mover(1)}
              className="inline-flex size-10 items-center justify-center rounded-full border border-tinta/25 text-tinta transition-colors hover:bg-tinta hover:text-papel md:size-12"
              aria-label="Siguientes postales">
              <IconoFlecha />
            </button>
          </div>
        </div>
      </div>

      <ul
        ref={pista}
        onScroll={onScroll}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="sin-scrollbar mt-12 flex cursor-grab snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-10 pt-6 active:cursor-grabbing sm:px-8 md:gap-8 lg:px-[max(2rem,calc((100vw-76rem)/2+2rem))]"
        aria-label="Postales de los estados"
        style={{ userSelect: 'none' }}
      >
        {viaje.estados.map((e, i) => {
          const giro = i % 2 === 0 ? -1.5 : 1.2;
          return (
            <li key={e.nombre} className="w-[78vw] max-w-[20rem] shrink-0 snap-start sm:w-80">
              <figure className="postal relative p-3 pb-6" style={{ transform: `rotate(${giro}deg)` }}>
                <img src={e.ilustracion} alt={`${e.icono}, ${e.nombre}`} width={768} height={603} loading="lazy"
                  className="aspect-[768/603] w-full object-cover" />
                <motion.img src={e.sello} alt="" aria-hidden="true" loading="lazy"
                  className="absolute -right-4 -top-5 w-20 drop-shadow-sm"
                  initial={reducir ? false : { opacity: 0, scale: 1.6, rotate: -18 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 8 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 18, delay: 0.08 * (i % 4) }}
                />
                <figcaption className="px-2 pt-5">
                  <p className="font-display text-3xl leading-none text-tinta">{e.nombre}</p>
                  <p className="mt-1 font-display text-xl italic text-sello">{e.icono}</p>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-tinta/75">{e.texto}</p>
                </figcaption>
                <motion.img src={e.admitido} alt="" aria-hidden="true" loading="lazy"
                  className="pointer-events-none absolute left-1 top-[42%] w-24 opacity-70 mix-blend-multiply md:w-28"
                  initial={reducir ? false : { opacity: 0, scale: 1.8 }}
                  whileInView={{ opacity: 0.7, scale: 1, rotate: -12 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ type: 'spring', stiffness: 420, damping: 16, delay: 0.25 + 0.08 * (i % 4) }}
                />
              </figure>
            </li>
          );
        })}
      </ul>

      {/* Indicador de posición */}
      <div className="contenedor mt-4 flex items-center gap-1.5" aria-hidden="true">
        {viaje.estados.map((_, i) => (
          <button
            key={i}
            onClick={() => irA(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activo ? 'w-5 bg-tinta' : 'w-1.5 bg-tinta/30 hover:bg-tinta/50'
            }`}
            aria-label={`Ir a ${viaje.estados[i].nombre}`}
          />
        ))}
        <span className="ml-auto text-sm text-tinta/50">{activo + 1} / {viaje.estados.length}</span>
      </div>
    </section>
  );
}
