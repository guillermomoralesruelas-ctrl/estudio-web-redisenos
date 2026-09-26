import { preguntas } from '../data/content';

export default function Preguntas() {
  return (
    <section id="preguntas" className="py-20 md:py-32" aria-labelledby="faq-titulo">
      <div className="contenedor grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 id="faq-titulo" className="text-4xl md:text-5xl">Antes de reservar</h2>
          <p className="mt-5 text-crema/80">Las dudas que más nos hacen. Si la tuya no está aquí, escríbenos por WhatsApp.</p>
        </div>
        <div className="space-y-12 md:col-span-8">
          {preguntas.map((g) => (
            <div key={g.grupo}>
              <h3 className="font-display text-3xl text-champan">{g.grupo}</h3>
              <div className="mt-4 divide-y divide-crema/10 border-y border-crema/10">
                {g.items.map((q) => (
                  <details key={q.p} className="group">
                    <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-4 text-lg text-crema [&::-webkit-details-marker]:hidden">
                      {q.p}
                      <span aria-hidden="true" className="text-2xl leading-none text-vela transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="max-w-[65ch] pb-6 text-crema/75">{q.r}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
