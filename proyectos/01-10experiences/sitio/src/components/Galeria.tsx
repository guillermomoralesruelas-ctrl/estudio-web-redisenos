import { useCallback, useEffect, useRef, useState } from 'react';
import { galeria } from '../data/content';
import { IconoCerrar, IconoFlecha } from './Iconos';

export default function Galeria() {
  const [cat, setCat] = useState(0);
  const [abierta, setAbierta] = useState<number | null>(null);
  const dialogo = useRef<HTMLDialogElement>(null);
  const actual = galeria.categorias[cat];

  const cerrar = useCallback(() => setAbierta(null), []);
  const paso = useCallback(
    (d: number) => setAbierta((i) => (i === null ? i : (i + d + actual.fotos.length) % actual.fotos.length)),
    [actual.fotos.length],
  );

  useEffect(() => {
    const d = dialogo.current;
    if (!d) return;
    if (abierta !== null && !d.open) d.showModal();
    if (abierta === null && d.open) d.close();
  }, [abierta]);

  useEffect(() => {
    if (abierta === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') paso(1);
      if (e.key === 'ArrowLeft') paso(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [abierta, paso]);

  return (
    <section id="galeria" className="bg-noche-2 py-20 md:py-32" aria-labelledby="gal-titulo">
      <div className="contenedor">
        <h2 id="gal-titulo" className="text-4xl md:text-6xl">{galeria.titulo}</h2>

        <div role="tablist" aria-label="Categorías de la galería" className="sin-scrollbar -mx-5 mt-8 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          {galeria.categorias.map((c, i) => (
            <button
              key={c.id}
              role="tab"
              type="button"
              aria-selected={i === cat}
              aria-controls="gal-panel"
              onClick={() => setCat(i)}
              className={`shrink-0 rounded-full border px-4 py-2 text-[0.95rem] transition-colors ${
                i === cat ? 'border-vela bg-vela text-noche' : 'border-crema/20 text-crema/80 hover:border-champan'
              }`}
            >
              {c.nombre}
            </button>
          ))}
        </div>

        <ul id="gal-panel" role="tabpanel" className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {actual.fotos.map((f, i) => (
            <li key={f} className={i === 0 ? 'col-span-2 row-span-2' : i === 6 ? 'md:hidden' : i > 6 ? 'hidden' : ''}>
              <button type="button" onClick={() => setAbierta(i)} className="block size-full overflow-hidden rounded-sm" aria-label={`Ampliar foto ${i + 1} de ${actual.fotos.length}: ${actual.nombre}`}>
                <img src={f} alt={`${actual.alt} (${i + 1})`} width={768} height={1152} loading="lazy" className="size-full object-cover transition duration-500 hover:scale-[1.03]" />
              </button>
            </li>
          ))}
        </ul>
        <button type="button" onClick={() => setAbierta(0)} className="enlace mt-6">
          Ver las {actual.fotos.length} fotos de {actual.nombre.toLowerCase()}
        </button>
      </div>

      <dialog
        ref={dialogo}
        onClose={cerrar}
        onClick={(e) => e.target === dialogo.current && cerrar()}
        className="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-noche/95"
        aria-label="Visor de fotos"
      >
        {abierta !== null && (
          <div className="flex h-[100dvh] w-screen items-center justify-center p-4">
            <img src={actual.fotos[abierta]} alt={`${actual.alt} (${abierta + 1})`} className="max-h-[85dvh] max-w-full rounded-sm object-contain" />
            <button type="button" onClick={cerrar} className="absolute right-4 top-4 inline-flex size-12 items-center justify-center rounded-full bg-noche/80 text-crema" aria-label="Cerrar visor">
              <IconoCerrar />
            </button>
            <button type="button" onClick={() => paso(-1)} className="absolute left-3 top-1/2 inline-flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-noche/80 text-crema" aria-label="Foto anterior">
              <IconoFlecha dir="izq" />
            </button>
            <button type="button" onClick={() => paso(1)} className="absolute right-3 top-1/2 inline-flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-noche/80 text-crema" aria-label="Foto siguiente">
              <IconoFlecha />
            </button>
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-crema/70">
              {abierta + 1} de {actual.fotos.length}
            </p>
          </div>
        )}
      </dialog>
    </section>
  );
}
