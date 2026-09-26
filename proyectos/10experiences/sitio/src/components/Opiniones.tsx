import { opiniones } from '../data/content';
import { Estrellas } from './Iconos';

export default function Opiniones() {
  return (
    <section id="opiniones" className="py-20 md:py-32" aria-labelledby="op-titulo">
      <div className="contenedor grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 id="op-titulo" className="text-4xl md:text-5xl">{opiniones.titulo}</h2>
          <div className="mt-6"><Estrellas className="size-5" /></div>
          <p className="mt-3 text-crema/75">{opiniones.resumen}</p>
        </div>
        <ul className="grid gap-x-12 gap-y-12 sm:grid-cols-2 md:col-span-8">
          {opiniones.citas.map((c) => (
            <li key={c.autor}>
              <figure>
                <blockquote className="font-display text-2xl leading-snug text-crema md:text-[1.7rem]">“{c.texto}”</blockquote>
                <figcaption className="mt-4 text-[0.95rem] text-champan">
                  {c.autor}, {c.lugar}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
