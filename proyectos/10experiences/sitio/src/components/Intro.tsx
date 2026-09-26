import { intro } from '../data/content';

export default function Intro() {
  return (
    <section className="py-20 md:py-32" aria-labelledby="intro-titulo">
      <div className="contenedor grid items-center gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-6">
          <h2 id="intro-titulo" className="text-4xl text-crema md:text-6xl">{intro.titulo}</h2>
          {intro.parrafos.map((p) => (
            <p key={p} className="mt-6 max-w-[62ch] text-crema/80">{p}</p>
          ))}
          <p className="mt-6 max-w-[62ch] border-l-2 border-vela pl-5 font-display text-2xl italic leading-snug text-champan">
            {intro.secreto}
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-crema/10 pt-8">
            {intro.datos.map((d) => (
              <div key={d.termino}>
                <dt className="text-sm text-crema/60">{d.termino}</dt>
                <dd className="mt-1 font-display text-2xl text-crema">{d.valor}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="md:col-span-6">
          <img src={intro.imagen} alt={intro.alt} width={768} height={768} loading="lazy" className="aspect-square w-full rounded-sm object-cover" />
        </div>
      </div>
    </section>
  );
}
