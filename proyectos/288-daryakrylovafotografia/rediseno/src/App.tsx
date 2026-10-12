import { useState } from 'react';
import fotos from './data/fotos.json';
import {
  negocio, wa, portada, servicios, tomas, niveles, paquetes, portafolio, proceso, beneficios, sobre, testimonios, preguntas,
} from './data/content';

const medidas = fotos as unknown as Record<string, [number, number]>;

function Foto({ f, alt, className = '', eager = false, sizes = '(min-width: 768px) 33vw, 100vw' }: { f: string; alt: string; className?: string; eager?: boolean; sizes?: string }) {
  const [w, h] = medidas[f] ?? [1200, 1500];
  return <img src={`./${f}.webp`} alt={alt} width={w} height={h} sizes={sizes} loading={eager ? 'eager' : 'lazy'} decoding="async" className={className} />;
}

const IconoWa = ({ className = 'h-5 w-5' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" /></svg>
);

const enlaces = [
  ['#servicios', 'Servicios'],
  ['#tomas', '¿Cuántas fotos?'],
  ['#portafolio', 'Portafolio'],
  ['#proceso', 'Proceso'],
  ['#preguntas', 'Preguntas'],
];

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-papel/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-3">
          <img src="./logo.png" alt="Logotipo dK Creative Studio" width={40} height={40} className="h-10 w-10 rounded bg-tinta p-1" />
          <span className="leading-tight">
            <span className="block font-serif text-lg">Darya Krylova</span>
            <span className="block text-[11px] font-medium text-gris">Fotografía de producto</span>
          </span>
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {enlaces.map(([h, t]) => <a key={h} href={h} className="hover:text-morado">{t}</a>)}
        </nav>
        <a href={wa('Hola Darya, quiero cotizar fotografía de producto.')} className="btn-morado hidden !py-2.5 sm:inline-flex"><IconoWa className="h-4 w-4" />Cotizar</a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="overflow-hidden">
      <div className="contenedor grid items-center gap-10 py-12 md:grid-cols-[1.05fr_1fr] md:py-20">
        <div>
          <p className="mb-4 text-sm font-semibold text-morado">{negocio.marca} · Guadalajara</p>
          <h1 className="font-serif text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl">
            Fotografía de producto <em className="text-morado">en Guadalajara</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg">{portada.bajada}</p>
          <p className="mt-3 max-w-xl text-gris">{portada.texto}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa('Hola Darya, quiero cotizar fotografía de producto.')} className="btn-morado"><IconoWa />Cotizar por WhatsApp</a>
            <a href="#portafolio" className="btn-borde">Ver portafolio</a>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {portada.datos.map((d) => <li key={d} className="border-l-2 border-amarillo pl-3">{d}</li>)}
          </ul>
        </div>
        <div className="relative grid grid-cols-5 grid-rows-6 gap-3 sm:gap-4">
          <Foto f="creativa-13" alt="Tarros de crema de miel apilados con miel escurriendo, fondo amarillo" eager sizes="(min-width: 768px) 30vw, 60vw" className="col-span-3 row-span-6 h-full w-full rounded-2xl object-cover" />
          <Foto f="creativa-31" alt="Frasco de suero azul entre gotas de agua" eager sizes="(min-width: 768px) 20vw, 40vw" className="col-span-2 row-span-3 h-full w-full rounded-2xl object-cover" />
          <Foto f="creativa-38" alt="Frascos verdes KUCH sobre una toalla gris con peine de madera" eager sizes="(min-width: 768px) 20vw, 40vw" className="col-span-2 row-span-3 h-full w-full rounded-2xl object-cover" />
        </div>
      </div>
    </section>
  );
}

function Servicios() {
  return (
    <section id="servicios" className="bg-white py-16 md:py-24">
      <div className="contenedor">
        <h2 className="titulo max-w-2xl">Tres usos, un mismo cuidado por el detalle</h2>
        <p className="mt-4 max-w-2xl text-gris">Catálogos, redes sociales y tiendas en línea: cada uno pide otra luz, otro encuadre y otra cantidad de imágenes.</p>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {servicios.map((s) => (
            <article key={s.id} className="flex flex-col">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-papel sm:aspect-[4/5]">
                <Foto f={s.foto} alt={s.alt} className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-5 font-serif text-2xl">{s.nombre}</h3>
              <p className="mt-2 italic text-gris">{s.frase}</p>
              <ul className="mt-4 space-y-1.5 text-sm">
                {s.usos.map((u) => <li key={u} className="flex gap-2"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-turquesa" />{u}</li>)}
              </ul>
              <a href={wa(`Hola Darya, me interesa la ${s.nombre.toLowerCase()}.`)} className="mt-5 text-sm font-semibold text-morado underline underline-offset-4">Preguntar por WhatsApp</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// Elemento memorable: la silla para bebé de su portafolio en 7 tomas.
function SieteTomas() {
  const [nivel, setNivel] = useState(2);
  const [productos, setProductos] = useState(10);
  const n = niveles[nivel];
  const total = n.imagenes * productos;
  const ultima = tomas[n.imagenes - 1];
  const mensaje = `Hola Darya, tengo ${productos} producto${productos === 1 ? '' : 's'} y me interesan ${n.imagenes} imagen${n.imagenes === 1 ? '' : 'es'} por producto (${total} en total). Paquete de referencia: ${n.paquetes.map((p) => p.nombre).join(' o ')}. ¿Me ayudas a cotizar?`;
  return (
    <section id="tomas" className="bg-tinta py-16 text-white md:py-24">
      <div className="contenedor">
        <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
          <h2 className="titulo">¿Cuántas fotos necesita <em className="text-amarillo">tu producto?</em></h2>
          <p className="text-white/80">Esta silla para bebé está en su portafolio con 7 tomas. Elige cuántas imágenes por producto quieres y mira qué se ve en cada paquete: de una foto limpia de frente hasta el producto desarmado pieza por pieza.</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.25fr_1fr]">
          <div className="rounded-3xl bg-white p-4 text-tinta sm:p-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white">
              {tomas.map((t, i) => (
                <img key={t.foto} src={`./${t.foto}.webp`} alt={i === n.imagenes - 1 ? t.alt : ''} aria-hidden={i === n.imagenes - 1 ? undefined : true}
                  width={medidas[t.foto]?.[0]} height={medidas[t.foto]?.[1]} loading="lazy" decoding="async"
                  className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${i === n.imagenes - 1 ? 'opacity-100' : 'opacity-0'}`} />
              ))}
              <p className="absolute left-3 top-3 rounded-full bg-papel px-3 py-1 text-xs font-semibold">Toma {n.imagenes} de 7 · {ultima.nombre}</p>
            </div>
            <ol className="mt-4 grid grid-cols-7 gap-1.5 sm:gap-2" aria-label="Tomas incluidas">
              {tomas.map((t, i) => {
                const dentro = i < n.imagenes;
                return (
                  <li key={t.foto} className={`relative overflow-hidden rounded-lg border-2 transition ${dentro ? 'border-morado' : 'border-transparent opacity-35 grayscale'}`}>
                    <img src={`./${t.foto}.webp`} alt="" width={medidas[t.foto]?.[0]} height={medidas[t.foto]?.[1]} loading="lazy" className="aspect-square w-full bg-white object-contain" />
                    <span className="sr-only">{t.nombre}: {dentro ? 'incluida' : 'no incluida'}</span>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="flex flex-col">
            <fieldset>
              <legend className="text-sm font-semibold text-white/80">Imágenes por producto</legend>
              <div className="mt-3 grid grid-cols-4 gap-2">
                {niveles.map((l, i) => (
                  <button key={l.imagenes} type="button" onClick={() => setNivel(i)} aria-pressed={nivel === i}
                    className={`rounded-2xl border py-4 font-serif text-3xl transition ${nivel === i ? 'border-amarillo bg-amarillo text-tinta' : 'border-white/25 hover:border-white'}`}>
                    {l.imagenes}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mt-6">
              <label htmlFor="productos" className="text-sm font-semibold text-white/80">¿Cuántos productos? <span className="font-normal">(sin mínimo)</span></label>
              <div className="mt-3 flex items-center gap-3">
                <button type="button" onClick={() => setProductos((p) => Math.max(1, p - 1))} className="h-11 w-11 rounded-full border border-white/30 text-xl" aria-label="Un producto menos">−</button>
                <input id="productos" type="number" min={1} max={200} value={productos}
                  onChange={(e) => setProductos(Math.min(200, Math.max(1, Number(e.target.value) || 1)))}
                  className="h-11 w-20 rounded-xl bg-white/10 text-center text-lg font-semibold" />
                <button type="button" onClick={() => setProductos((p) => Math.min(200, p + 1))} className="h-11 w-11 rounded-full border border-white/30 text-xl" aria-label="Un producto más">+</button>
                <p className="ml-auto text-right text-sm text-white/80" aria-live="polite"><span className="block font-serif text-3xl text-white">{total}</span>imágenes en total</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/15 p-5">
              <p className="text-xs font-semibold text-lila">Paquete de referencia</p>
              {n.paquetes.map((p) => (
                <p key={p.nombre} className="mt-2"><span className="font-serif text-2xl">{p.nombre}</span><span className="block text-sm text-white/75">{p.linea}</span></p>
              ))}
              <p className="mt-3 text-sm text-white/85">{n.para}</p>
            </div>
            <a href={wa(mensaje)} className="btn mt-6 bg-amarillo text-tinta hover:bg-white"><IconoWa />Mandar esta selección por WhatsApp</a>
            <p className="mt-3 text-xs text-white/60">El precio depende del producto y de la edición: se cotiza en la videollamada. El orden de las tomas es ilustrativo.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Paquetes() {
  return (
    <section id="paquetes" className="py-16 md:py-24">
      <div className="contenedor">
        <h2 className="titulo">Paquetes</h2>
        <p className="mt-4 max-w-2xl text-gris">Se pueden personalizar. Todos incluyen concepto creativo previo, edición profesional y 2 revisiones en posproducción.</p>
        <div className="mt-12 space-y-14">
          {paquetes.map((g) => (
            <div key={g.servicio} className="grid gap-6 md:grid-cols-[14rem_1fr]">
              <div>
                <h3 className="font-serif text-2xl text-morado">{g.servicio}</h3>
                <p className="mt-2 text-sm text-gris">{g.nota}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {g.lista.map((p) => (
                  <article key={p.nombre} className="flex flex-col rounded-2xl border border-tinta/10 bg-white p-5">
                    <h4 className="font-serif text-xl">{p.nombre}</h4>
                    <p className="mt-1 text-sm font-semibold text-turquesa">{p.cantidad}</p>
                    {p.resumen && <p className="mt-3 text-sm">{p.resumen}</p>}
                    <ul className="mt-3 space-y-1.5 text-sm text-gris">
                      {p.ideal.map((i) => <li key={i}>✓ {i}</li>)}
                    </ul>
                    <a href={wa(`Hola Darya, me interesa el paquete ${p.nombre} (${g.servicio}).`)} className="mt-auto pt-4 text-sm font-semibold text-morado underline underline-offset-4">Cotizar {p.nombre}</a>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portafolio() {
  const [activa, setActiva] = useState(portafolio[0].id);
  const g = portafolio.find((x) => x.id === activa)!;
  return (
    <section id="portafolio" className="bg-white py-16 md:py-24">
      <div className="contenedor">
        <h2 className="titulo">Portafolio</h2>
        <div role="tablist" aria-label="Galerías" className="mt-8 flex gap-2 overflow-x-auto pb-2">
          {portafolio.map((x) => (
            <button key={x.id} role="tab" type="button" aria-selected={activa === x.id} onClick={() => setActiva(x.id)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition ${activa === x.id ? 'border-tinta bg-tinta text-white' : 'border-tinta/20 hover:border-tinta'}`}>
              {x.nombre} <span className="opacity-60">{x.fotos.length}</span>
            </button>
          ))}
        </div>
        <div role="tabpanel" aria-label={g.nombre} className="mt-8 columns-2 gap-3 sm:gap-4 md:columns-3 lg:columns-4">
          {g.fotos.map((p) => (
            <Foto key={p.f} f={p.f} alt={p.alt} sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" className="mb-3 w-full break-inside-avoid rounded-xl bg-papel sm:mb-4" />
          ))}
        </div>
      </div>
    </section>
  );
}

function Proceso() {
  return (
    <section id="proceso" className="py-16 md:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <h2 className="titulo">De concepto creativo a creación final</h2>
          <p className="mt-5 text-gris">Antes de cada sesión se desarrolla y aprueba contigo un concepto visual detallado. Así se minimiza el riesgo de diferencias entre lo que esperas y el resultado, y tu inversión tiene más certeza.</p>
          <ul className="mt-8 space-y-4">
            {beneficios.map((b) => (
              <li key={b.titulo}><p className="font-semibold">{b.titulo}</p><p className="text-sm text-gris">{b.texto}</p></li>
            ))}
          </ul>
        </div>
        <ol className="relative ml-5 space-y-8 border-l-2 border-lila pl-8 md:ml-0">
          {proceso.map((p, i) => (
            <li key={p.titulo} className="relative">
              <span className="absolute -left-[3.05rem] top-0 flex h-9 w-9 items-center justify-center rounded-full bg-morado font-serif text-white">{i + 1}</span>
              <h3 className="font-serif text-2xl">{p.titulo}</h3>
              <p className="mt-2 text-gris">{p.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="bg-papel-2 py-16 md:py-24">
      <div className="contenedor grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">
        <Foto f="darya-retrato" alt="Darya Krylova, fotógrafa de producto, sonriendo con suéter verde" sizes="(min-width: 768px) 35vw, 100vw" className="aspect-[4/5] w-full rounded-3xl object-cover" />
        <div>
          <h2 className="titulo">{sobre.titulo}</h2>
          {sobre.parrafos.map((p) => <p key={p} className="mt-4 text-lg leading-relaxed">{p}</p>)}
        </div>
      </div>
    </section>
  );
}

function Testimonios() {
  return (
    <section id="testimonios" className="py-16 md:py-24">
      <div className="contenedor">
        <h2 className="titulo">Lo que dicen sus clientes</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonios.map((t, i) => (
            <figure key={t.nombre} className={`rounded-2xl p-6 ${i === 1 ? 'bg-morado text-white lg:row-span-2' : 'bg-white'}`}>
              <blockquote className={`font-serif ${i === 1 ? 'text-2xl leading-snug' : 'text-lg'}`}>“{t.texto}”</blockquote>
              <figcaption className="mt-4 text-sm"><span className="font-semibold">{t.nombre}</span> · <span className={i === 1 ? 'text-white/80' : 'text-gris'}>{t.producto}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Preguntas() {
  return (
    <section id="preguntas" className="bg-white py-16 md:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_2fr]">
        <h2 className="titulo">Preguntas frecuentes</h2>
        <div className="divide-y divide-tinta/10 border-y border-tinta/10">
          {preguntas.map((q) => (
            <details key={q.p} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                {q.p}<span aria-hidden="true" className="text-xl text-morado transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-gris">{q.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="bg-morado py-16 text-white md:py-24">
      <div className="contenedor grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="titulo">Empieza aquí tu proyecto de fotografía de producto</h2>
          <p className="mt-4 text-white/85">Cuéntale qué producto tienes, cuántos son y dónde vas a usar las imágenes. Estudio en {negocio.ciudad}; recibe productos de cualquier ciudad o país.</p>
          <a href={wa('Hola Darya, quiero cotizar fotografía de producto. Mi producto es: ')} className="btn mt-8 bg-amarillo text-tinta hover:bg-white"><IconoWa />Escribir por WhatsApp</a>
        </div>
        <dl className="grid gap-5 rounded-3xl bg-white/10 p-6 sm:p-8">
          <div><dt className="text-sm text-white/75">Teléfono y WhatsApp</dt><dd><a href={`tel:${negocio.telefono.replace(/\s/g, '')}`} className="font-serif text-2xl">{negocio.telefonoVisible}</a></dd></div>
          <div><dt className="text-sm text-white/75">Correo</dt><dd><a href={`mailto:${negocio.correo}`} className="font-serif text-2xl break-all">{negocio.correo}</a></dd></div>
          <div><dt className="text-sm text-white/75">Redes</dt><dd className="flex flex-wrap gap-x-5 gap-y-1"><a href={negocio.instagram} className="underline underline-offset-4">Instagram {negocio.instagramUsuario}</a><a href={negocio.facebook} className="underline underline-offset-4">Facebook</a></dd></div>
          <div><dt className="text-sm text-white/75">Ubicación</dt><dd>{negocio.ciudad} · <a href="https://www.google.com/maps/search/?api=1&query=Guadalajara%2C%20Jalisco" className="underline underline-offset-4">Ver en Google Maps</a></dd></div>
        </dl>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a href="#servicios" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:p-3">Saltar al contenido</a>
      <Encabezado />
      <main>
        <Portada />
        <Servicios />
        <SieteTomas />
        <Paquetes />
        <Portafolio />
        <Proceso />
        <Sobre />
        <Testimonios />
        <Preguntas />
        <Contacto />
      </main>
      <footer className="bg-tinta pb-24 pt-10 text-sm text-white/75 md:pb-10">
        <div className="contenedor flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {negocio.marca} · {negocio.ciudad}</p>
          <p>Fotografía de producto para catálogos, e-commerce y redes sociales.</p>
        </div>
      </footer>
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-tinta/10 bg-papel/95 p-3 backdrop-blur md:hidden">
        <a href={`tel:${negocio.telefono.replace(/\s/g, '')}`} className="btn-borde !px-3">Llamar</a>
        <a href={wa('Hola Darya, quiero cotizar fotografía de producto.')} className="btn-morado !px-3"><IconoWa className="h-4 w-4" />WhatsApp</a>
      </div>
    </>
  );
}
