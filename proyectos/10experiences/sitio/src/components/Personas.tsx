import { personas } from '../data/content';

export default function Personas() {
  return (
    <section aria-label="Las personas detrás de 10 Experiences">
      {personas.map((p, i) => (
        <article key={p.nombre} className="relative isolate flex min-h-[80svh] items-end overflow-hidden md:min-h-[42rem] md:items-center">
          <img src={p.imagen} alt={p.alt} width={1920} height={1200} loading="lazy" className="absolute inset-0 -z-10 size-full object-cover object-[70%_center]" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-noche via-noche/60 to-transparent md:bg-gradient-to-r md:from-noche md:via-noche/70 md:to-transparent" />
          <div className="contenedor py-16">
            <div className="max-w-lg">
              <p className="font-display text-2xl italic text-champan">{p.rol}</p>
              <h2 className="mt-1 text-5xl md:text-6xl">{p.nombre}</h2>
              <p className="mt-6 text-crema/85">{p.texto}</p>
            </div>
          </div>
          {i < personas.length - 1 && <div className="absolute inset-x-0 bottom-0 h-px bg-crema/10" />}
        </article>
      ))}
    </section>
  );
}
