import { equipo } from '../data/content';

export default function Equipo() {
  return (
    <section className="py-20 md:py-32" aria-labelledby="eq-titulo">
      <div className="contenedor grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 id="eq-titulo" className="text-4xl md:text-5xl">{equipo.titulo}</h2>
          <p className="mt-5 text-crema/80">{equipo.texto}</p>
        </div>
        <ul className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-4 md:col-span-8">
          {equipo.personas.map((p) => (
            <li key={p.nombre} className="group">
              <img
                src={p.foto}
                alt={`${p.nombre}, ${p.rol.toLowerCase()}`}
                width={360}
                height={360}
                loading="lazy"
                className="aspect-square w-full rounded-sm object-cover grayscale transition duration-500 group-hover:grayscale-0"
              />
              <p className="mt-3 font-display text-2xl leading-none">{p.nombre}</p>
              <p className="text-sm text-crema/60">{p.rol}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
