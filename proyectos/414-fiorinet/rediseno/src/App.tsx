import { useMemo, useState } from 'react';
import {
  negocio, contacto, arreglos, alcaldias, otrosEstados, hospitales, entrega, avisoFechas, cobertura,
  hospitalTextos, funeralTextos, pagos, factura, preguntas, type Arreglo,
} from './data/content';

const img = (n: string) => `${import.meta.env.BASE_URL}${n}.webp`;
const pesos = (n: number) => '$' + n.toLocaleString('es-MX');
const costoTxt = (n: number) => (n === 0 ? 'Sin costo' : pesos(n));
const wa = (texto: string) => `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(texto)}`;
const WA_GENERAL = wa('Hola FioriNET, quiero enviar un arreglo de flores. ¿Me ayudan con mi pedido?');
const TEL = contacto.telefonos[0];

function IconoWhats({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4 5.2 5.2 0 0 0 3.1.6 2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.2c0-.1-.2-.2-.4-.3Z" />
    </svg>
  );
}

function Encabezado() {
  return (
    <header className="sticky top-0 z-30 border-b border-salvia bg-crema/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0">
          <img src={`${import.meta.env.BASE_URL}logo-fiorinet.png`} width={224} height={88} alt="FioriNET" className="h-11 w-auto" />
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-6 text-[0.95rem] font-semibold text-olivo-oscuro lg:flex">
          <a href="#arreglos" className="hover:text-rosa">Arreglos</a>
          <a href="#envio" className="hover:text-rosa">Costo de envío</a>
          <a href="#hospitales" className="hover:text-rosa">Hospitales y funerales</a>
          <a href="#preguntas" className="hover:text-rosa">Preguntas</a>
          <a href="#tienda" className="hover:text-rosa">Tienda</a>
        </nav>
        <a href={WA_GENERAL} className="btn-rosa hidden py-2.5 text-sm sm:inline-flex" target="_blank" rel="noopener">
          <IconoWhats /> Pedir por WhatsApp
        </a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="overflow-hidden">
      <div className="contenedor grid items-center gap-10 py-12 md:grid-cols-[1.05fr_1fr] md:py-16">
        <div className="min-w-0">
          <p className="font-display text-2xl italic text-morado">{negocio.lema}</p>
          <h1 className="mt-3 text-[2.2rem] leading-[1.08] font-semibold text-olivo-oscuro sm:text-5xl">{negocio.h1}</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-gris">{negocio.queEs}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={WA_GENERAL} className="btn-rosa" target="_blank" rel="noopener"><IconoWhats /> Pedir por WhatsApp</a>
            <a href="#envio" className="btn-linea">¿Cuánto cuesta que llegue?</a>
          </div>
          <dl className="mt-9 grid max-w-lg grid-cols-3 gap-4 border-t border-salvia pt-6">
            <div><dt className="text-sm text-gris">Desde</dt><dd className="font-display text-2xl font-semibold text-olivo-oscuro">{negocio.fundada}</dd></div>
            <div><dt className="text-sm text-gris">Entrega en CDMX</dt><dd className="font-display text-2xl font-semibold text-olivo-oscuro">2 a 4 h</dd></div>
            <div>
              <dt className="text-sm text-gris">En Google</dt>
              <dd className="font-display text-2xl font-semibold text-olivo-oscuro">
                <a href={contacto.maps} target="_blank" rel="noopener" className="underline decoration-salvia underline-offset-4 hover:text-rosa">{negocio.google.calificacion}</a>
                <span className="ml-1 font-sans text-sm font-normal text-gris">({negocio.google.resenas})</span>
              </dd>
            </div>
          </dl>
        </div>
        <div className="relative grid min-w-0 grid-cols-5 grid-rows-5 gap-3" style={{ aspectRatio: '1 / 1' }}>
          <img src={img('colorful')} width={1000} height={1000} alt="Arreglo Colorful: rosas y flores de colores en base de cerámica" className="col-span-3 row-span-5 h-full w-full rounded-[1.75rem] object-cover" fetchPriority="high" />
          <img src={img('rosas-blancas-250')} width={900} height={900} alt="250 rosas blancas en cerámica" className="col-span-2 row-span-3 h-full w-full rounded-[1.75rem] object-cover" />
          <img src={img('cesta-primavera')} width={800} height={800} alt="Cesta Primavera con rosas, lisianthus y eucalipto" className="col-span-2 row-span-2 h-full w-full rounded-[1.75rem] object-cover" />
        </div>
      </div>
    </section>
  );
}

function Arreglos({ onElegir }: { onElegir: (a: Arreglo) => void }) {
  const [linea, setLinea] = useState<'regalo' | 'condolencias'>('regalo');
  const lista = arreglos.filter((a) => a.linea === linea);
  return (
    <section id="arreglos" className="bg-papel py-16 md:py-20">
      <div className="contenedor">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-olivo-oscuro sm:text-4xl">Algunos de sus arreglos</h2>
            <p className="mt-3 text-gris">{negocio.calidad}</p>
          </div>
          <div role="tablist" aria-label="Tipo de arreglo" className="flex rounded-full border-2 border-olivo p-1">
            {(['regalo', 'condolencias'] as const).map((l) => (
              <button key={l} role="tab" aria-selected={linea === l} onClick={() => setLinea(l)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${linea === l ? 'bg-olivo text-white' : 'text-olivo-oscuro hover:bg-salvia-claro'}`}>
                {l === 'regalo' ? 'Para regalar' : 'Condolencias'}
              </button>
            ))}
          </div>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
          {lista.map((a) => (
            <li key={a.id} className="flex min-w-0 flex-col">
              <img src={img(a.foto)} width={600} height={600} loading="lazy" alt={a.nombre} className="aspect-square w-full rounded-2xl bg-crema object-cover" />
              <h3 className="mt-3 font-sans text-[0.95rem] leading-snug font-bold">{a.nombre}</h3>
              <p className="mt-1 text-rosa font-bold">{a.desde ? 'Desde ' : ''}{pesos(a.precio)}</p>
              <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-3 text-sm">
                <button onClick={() => onElegir(a)} className="font-bold text-olivo-oscuro underline decoration-rosa decoration-2 underline-offset-4 hover:text-rosa">Enviar este</button>
                <a href={a.url} target="_blank" rel="noopener" className="text-gris hover:text-rosa">Ver en la tienda</a>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-sm text-gris">
          Precios de su tienda en línea, en pesos e IVA incluido; el envío se suma según la zona.{' '}
          <a href={contacto.tienda} target="_blank" rel="noopener" className="font-bold text-olivo-oscuro underline underline-offset-4 hover:text-rosa">Ver el catálogo completo</a>
        </p>
      </div>
    </section>
  );
}

type Destino =
  | { tipo: 'alcaldia'; nombre: string; costo: number }
  | { tipo: 'zona'; estado: string; nombre: string; costo: number }
  | { tipo: 'tienda' };

function Envio({ arreglo, setArreglo }: { arreglo: Arreglo | null; setArreglo: (a: Arreglo | null) => void }) {
  const [pestana, setPestana] = useState<string>('cdmx');
  const [destino, setDestino] = useState<Destino | null>({ tipo: 'alcaldia', nombre: 'Benito Juárez', costo: 0 });
  const [dedicatoria, setDedicatoria] = useState('');
  const [zonaSel, setZonaSel] = useState<Record<string, string>>({});

  const costo = destino ? (destino.tipo === 'tienda' ? 0 : destino.costo) : null;
  const total = arreglo && costo !== null ? arreglo.precio + costo : null;
  const lugar = !destino ? '' : destino.tipo === 'tienda' ? 'Recoger en la tienda de Piedad Narvarte' : destino.tipo === 'alcaldia' ? `${destino.nombre}, CDMX` : `${destino.nombre}, ${destino.estado}`;
  const hosp = destino?.tipo === 'alcaldia' ? hospitales[destino.nombre] ?? [] : [];

  const mensaje = useMemo(() => {
    const l = ['Hola FioriNET, quiero hacer un pedido.'];
    l.push(arreglo ? `Arreglo: ${arreglo.nombre} (${arreglo.desde ? 'desde ' : ''}${pesos(arreglo.precio)})` : 'Arreglo: me ayudan a elegir');
    if (destino) l.push(destino.tipo === 'tienda' ? 'Entrega: paso a recogerlo a la tienda' : `Entrega en: ${lugar} (envío ${costoTxt(destino.costo).toLowerCase()})`);
    if (total !== null) l.push(`Total aproximado: ${pesos(total)}`);
    if (dedicatoria.trim()) l.push(`Dedicatoria para la tarjeta: "${dedicatoria.trim()}"`);
    l.push('Fecha y hora de entrega: ');
    return l.join('\n');
  }, [arreglo, destino, lugar, total, dedicatoria]);

  const pestanas = [{ id: 'cdmx', nombre: 'Ciudad de México' }, ...otrosEstados.map((e) => ({ id: e.id, nombre: e.nombre })), { id: 'tienda', nombre: 'Recoger en tienda' }];

  return (
    <section id="envio" className="py-16 md:py-20">
      <div className="contenedor">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold text-olivo-oscuro sm:text-4xl">¿A dónde lo mandas?</h2>
          <p className="mt-3 text-gris">
            Toca la alcaldía o el municipio donde lo van a recibir: ves cuánto cuesta el envío, el total con tu arreglo y, si es un hospital, a cuáles de esa alcaldía ya entregan. {cobertura.precios.split('. ')[0]}.
          </p>
        </div>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Estado de entrega">
          {pestanas.map((p) => (
            <button key={p.id} role="tab" aria-selected={pestana === p.id}
              onClick={() => { setPestana(p.id); if (p.id === 'tienda') setDestino({ tipo: 'tienda' }); }}
              className={`shrink-0 rounded-full border-2 px-4 py-2 text-sm font-bold transition-colors ${pestana === p.id ? 'border-olivo bg-olivo text-white' : 'border-salvia text-olivo-oscuro hover:border-olivo'}`}>
              {p.nombre}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="min-w-0 rounded-3xl bg-papel p-5 sm:p-7">
            {pestana === 'cdmx' && (
              <>
                <div className="mx-auto max-w-[26rem]">
                  <div className="mosaico" role="group" aria-label="Alcaldías de la Ciudad de México">
                    {alcaldias.map((a) => {
                      const activa = destino?.tipo === 'alcaldia' && destino.nombre === a.nombre;
                      const gratis = a.costo === 0;
                      return (
                        <button key={a.nombre} onClick={() => setDestino({ tipo: 'alcaldia', nombre: a.nombre, costo: a.costo })}
                          aria-pressed={activa} aria-label={`${a.nombre}: envío ${costoTxt(a.costo).toLowerCase()}`}
                          style={{ gridColumn: a.col + 1, gridRow: a.fila + 1 }}
                          className={`relative flex min-w-0 flex-col items-center justify-center rounded-xl border-2 text-center leading-none transition-colors ${activa ? 'border-rosa bg-rosa text-white' : gratis ? 'border-salvia bg-salvia-claro text-olivo-oscuro hover:border-olivo' : 'border-[#e7c3d0] bg-rosa-claro text-[#7d2445] hover:border-rosa'}`}>
                          <span className="text-[0.8rem] font-bold sm:text-sm">{a.corto}</span>
                          <span className="mt-1 text-[0.65rem] sm:text-xs">{gratis ? '$0' : pesos(a.costo)}</span>
                          {a.nombre === 'Benito Juárez' && <span className={`absolute -top-2 -right-2 grid h-6 w-6 place-items-center rounded-full text-[0.7rem] ${activa ? 'bg-white text-rosa' : 'bg-morado text-white'}`} aria-hidden="true">✿</span>}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gris">
                  <span className="flex items-center gap-2"><span className="h-4 w-4 rounded border-2 border-salvia bg-salvia-claro" aria-hidden="true" /> Envío sin costo (13 alcaldías)</span>
                  <span className="flex items-center gap-2"><span className="h-4 w-4 rounded border-2 border-[#e7c3d0] bg-rosa-claro" aria-hidden="true" /> Con costo</span>
                  <span className="flex items-center gap-2"><span className="grid h-5 w-5 place-items-center rounded-full bg-morado text-[0.65rem] text-white" aria-hidden="true">✿</span> Su tienda, en Benito Juárez</span>
                </div>
                <p className="mt-3 text-xs text-gris">Esquema de las 16 alcaldías, no está a escala.</p>
              </>
            )}

            {otrosEstados.filter((e) => e.id === pestana).map((e) => (
              <div key={e.id}>
                <label htmlFor={`zona-${e.id}`} className="font-bold text-olivo-oscuro">Municipio en {e.nombre} ({e.zonas.length} zonas)</label>
                <select id={`zona-${e.id}`} value={zonaSel[e.id] ?? ''}
                  onChange={(ev) => {
                    const zona = e.zonas.find((x) => x.nombre === ev.target.value);
                    setZonaSel({ ...zonaSel, [e.id]: ev.target.value });
                    if (zona) setDestino({ tipo: 'zona', estado: e.nombre, nombre: zona.nombre, costo: zona.costo });
                  }}
                  className="mt-2 w-full rounded-xl border-2 border-salvia bg-crema px-4 py-3 text-base">
                  <option value="">Elige el municipio…</option>
                  {e.zonas.map((z) => <option key={z.nombre} value={z.nombre}>{z.nombre}: {costoTxt(z.costo)}</option>)}
                </select>
                <ul className="mt-5 grid grid-cols-1 gap-x-6 text-sm sm:grid-cols-2">
                  {e.zonas.map((z) => (
                    <li key={z.nombre} className="flex justify-between gap-3 border-b border-salvia-claro py-1.5">
                      <span className="min-w-0">{z.nombre}</span><span className={z.costo === 0 ? 'font-bold text-olivo' : 'text-gris'}>{costoTxt(z.costo)}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-gris">Entregamos directamente o a través de nuestra red de florerías asociadas, garantizando calidad y buen servicio.</p>
              </div>
            ))}

            {pestana === 'tienda' && (
              <div>
                <h3 className="text-2xl font-semibold text-olivo-oscuro">Pasar por el pedido a la floristería: sin costo</h3>
                <p className="mt-3 text-gris">{contacto.direccion}.</p>
                <p className="mt-2 text-gris">Coordina la hora al confirmar tu pedido.</p>
                <ul className="mt-4 text-sm">
                  {contacto.horario.map((h) => <li key={h.dias}><b>{h.dias}:</b> {h.horas}</li>)}
                </ul>
                <a href={contacto.maps} target="_blank" rel="noopener" className="btn-linea mt-5">Ver en Google Maps</a>
              </div>
            )}

            <p className="mt-6 border-t border-salvia-claro pt-4 text-sm text-gris">
              {cobertura.zonaNoListada} Envíos nacionales a casi toda la República e internacionales a {cobertura.paises.join(', ')} y más, con florerías asociadas.
            </p>
          </div>

          {/* La nota del pedido */}
          <div className="min-w-0 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border-2 border-olivo bg-papel p-5 shadow-[0_18px_40px_-24px_rgba(62,74,54,0.45)] sm:p-7">
              <p className="font-display text-xl italic text-morado">Tu pedido</p>
              <label htmlFor="arreglo" className="mt-4 block text-sm font-bold text-olivo-oscuro">Arreglo</label>
              <select id="arreglo" value={arreglo?.id ?? ''} onChange={(e) => setArreglo(arreglos.find((a) => a.id === e.target.value) ?? null)}
                className="mt-1 w-full rounded-xl border-2 border-salvia bg-crema px-3 py-2.5 text-base">
                <option value="">Todavía no lo elijo</option>
                <optgroup label="Para regalar">{arreglos.filter((a) => a.linea === 'regalo').map((a) => <option key={a.id} value={a.id}>{a.nombre}</option>)}</optgroup>
                <optgroup label="Condolencias">{arreglos.filter((a) => a.linea === 'condolencias').map((a) => <option key={a.id} value={a.id}>{a.nombre}</option>)}</optgroup>
              </select>
              {arreglo && (
                <div className="mt-4 flex items-center gap-4">
                  <img src={img(arreglo.foto)} width={600} height={600} alt={arreglo.nombre} loading="lazy" className="h-20 w-20 shrink-0 rounded-xl object-cover" />
                  <p className="min-w-0 text-sm text-gris">{arreglo.nombre}</p>
                </div>
              )}
              <dl className="nota mt-5 text-[0.98rem] leading-8">
                <div className="flex justify-between gap-4"><dt>Arreglo</dt><dd className="font-bold">{arreglo ? `${arreglo.desde ? 'desde ' : ''}${pesos(arreglo.precio)}` : '—'}</dd></div>
                <div className="flex justify-between gap-4"><dt className="min-w-0 truncate">{destino ? (destino.tipo === 'tienda' ? 'Recoger en tienda' : `Envío a ${destino.nombre}`) : 'Envío'}</dt><dd className="shrink-0 font-bold">{costo === null ? '—' : costoTxt(costo)}</dd></div>
                <div className="flex justify-between gap-4 border-t-2 border-olivo pt-1 font-display text-xl"><dt>Total</dt><dd className="font-semibold text-rosa">{total !== null ? pesos(total) : '—'}</dd></div>
              </dl>
              {destino?.tipo !== 'tienda' && <p className="mt-3 text-sm text-gris">Llega en 2 a 4 horas aprox. (tiempo promedio, no garantizado). Reparto de 9:00 a.m. a 7:00 p.m.</p>}
              {hosp.length > 0 && (
                <div className="mt-4 rounded-2xl bg-salvia-claro p-4 text-sm">
                  <p className="font-bold text-olivo-oscuro">¿Es para un hospital de {destino?.tipo === 'alcaldia' ? destino.nombre : ''}?</p>
                  <p className="mt-1 text-gris">Ya entregan en {hosp.join(', ')}.</p>
                </div>
              )}
              <label htmlFor="dedicatoria" className="mt-5 block text-sm font-bold text-olivo-oscuro">Dedicatoria para la tarjeta (sin costo)</label>
              <textarea id="dedicatoria" rows={2} maxLength={220} value={dedicatoria} onChange={(e) => setDedicatoria(e.target.value)}
                placeholder="Opcional" className="mt-1 w-full resize-none rounded-xl border-2 border-salvia bg-crema px-3 py-2 text-base" />
              <a href={wa(mensaje)} target="_blank" rel="noopener" className="btn-rosa mt-5 w-full"><IconoWhats /> Enviar mi pedido por WhatsApp</a>
              <p className="mt-3 text-center text-xs text-gris">El total es aproximado; FioriNET lo confirma por WhatsApp.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComoEntregan() {
  return (
    <section className="bg-olivo-oscuro py-16 text-white md:py-20">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <h2 className="text-3xl font-semibold sm:text-4xl">Armado y entregado en persona</h2>
          <p className="mt-4 leading-relaxed text-[#e4e9dc]">{negocio.sinPaqueteria}</p>
          <p className="mt-4 rounded-2xl bg-white/10 p-4 text-sm text-[#e4e9dc]">{avisoFechas}</p>
        </div>
        <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {entrega.map((e) => (
            <div key={e.titulo} className="border-t border-white/25 pt-4">
              <dt className="font-display text-xl font-semibold">{e.titulo}</dt>
              <dd className="mt-2 text-[#e4e9dc]">{e.texto}</dd>
            </div>
          ))}
          <div className="border-t border-white/25 pt-4">
            <dt className="font-display text-xl font-semibold">Cobertura nacional</dt>
            <dd className="mt-2 text-[#e4e9dc]">{cobertura.nacional}</dd>
          </div>
          <div className="border-t border-white/25 pt-4">
            <dt className="font-display text-xl font-semibold">Cobertura internacional</dt>
            <dd className="mt-2 text-[#e4e9dc]">{cobertura.internacional}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function HospitalesFunerales() {
  return (
    <section id="hospitales" className="bg-papel py-16 md:py-20">
      <div className="contenedor grid gap-12 lg:grid-cols-2">
        <div className="min-w-0">
          <h2 className="text-3xl font-semibold text-olivo-oscuro sm:text-4xl">Flores para un hospital</h2>
          <p className="mt-4 text-gris">{hospitalTextos.intro}</p>
          <p className="mt-3 text-gris">{hospitalTextos.datos}</p>
          <dl className="mt-6 space-y-4">
            {hospitalTextos.areas.map((a) => (
              <div key={a.area} className="rounded-2xl bg-crema p-4">
                <dt className="font-bold text-olivo-oscuro">{a.area}</dt>
                <dd className="mt-1 text-sm text-gris">{a.texto}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="min-w-0">
          <h2 className="text-3xl font-semibold text-olivo-oscuro sm:text-4xl">Coronas y arreglos para funerales</h2>
          <p className="mt-4 text-gris">{funeralTextos.tipos}</p>
          <p className="mt-3 text-gris">{funeralTextos.cinta}</p>
          <p className="mt-3 text-sm text-gris">Entregan en {funeralTextos.lugares}</p>
          <div className="mt-6 grid grid-cols-[6rem_1fr] items-center gap-4 rounded-2xl border-2 border-rosa p-4">
            <img src={img('corona-orquidea-blanca')} width={600} height={600} loading="lazy" alt="Corona de orquídea phalaenopsis blanca en tripié" className="h-24 w-24 rounded-xl object-cover" />
            <div className="min-w-0">
              <p className="font-bold text-rosa">Servicio urgente</p>
              <p className="mt-1 text-sm text-gris">{funeralTextos.urgente}</p>
            </div>
          </div>
          <a href={wa('Hola FioriNET, necesito enviar un arreglo fúnebre con urgencia. ¿Me ayudan?')} target="_blank" rel="noopener" className="btn-rosa mt-5"><IconoWhats /> Pedido urgente por WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

function Preguntas() {
  return (
    <section id="preguntas" className="py-16 md:py-20">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_2fr]">
        <div>
          <h2 className="text-3xl font-semibold text-olivo-oscuro sm:text-4xl">Preguntas frecuentes</h2>
          <p className="mt-4 text-gris">{pagos}</p>
          <p className="mt-3 text-gris">{factura}</p>
        </div>
        <div className="divide-y divide-salvia border-y border-salvia">
          {preguntas.map((q) => (
            <details key={q.p} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-olivo-oscuro">
                {q.p}<span className="shrink-0 text-xl text-rosa transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 text-gris">{q.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tienda() {
  return (
    <section id="tienda" className="bg-salvia-claro py-16 md:py-20">
      <div className="contenedor grid gap-10 md:grid-cols-2">
        <div className="min-w-0">
          <h2 className="text-3xl font-semibold text-olivo-oscuro sm:text-4xl">Su tienda en Piedad Narvarte</h2>
          <p className="mt-4 text-gris">{negocio.familia} Ahí puedes comprar, recoger pedidos y cotizar arreglos personalizados.</p>
          <address className="mt-5 not-italic">{contacto.direccion}</address>
          <ul className="mt-4">
            {contacto.horario.map((h) => <li key={h.dias}><b>{h.dias}:</b> {h.horas}</li>)}
          </ul>
          <p className="mt-2 text-sm text-gris">Los pedidos en línea se pueden hacer las 24 horas.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={contacto.maps} target="_blank" rel="noopener" className="btn-linea">Cómo llegar en Google Maps</a>
            <a href={WA_GENERAL} target="_blank" rel="noopener" className="btn-rosa"><IconoWhats /> WhatsApp</a>
          </div>
        </div>
        <div className="min-w-0 rounded-3xl bg-papel p-6 sm:p-8">
          <h3 className="text-2xl font-semibold text-olivo-oscuro">Teléfonos</h3>
          <ul className="mt-4 divide-y divide-salvia-claro">
            {contacto.telefonos.map((t) => (
              <li key={t.ciudad} className="flex flex-wrap justify-between gap-x-4 py-2.5">
                <span className="text-gris">{t.ciudad}</span>
                <a href={`tel:${t.tel}`} className="font-bold text-olivo-oscuro hover:text-rosa">{t.texto}</a>
              </li>
            ))}
            <li className="flex flex-wrap justify-between gap-x-4 py-2.5">
              <span className="text-gris">WhatsApp</span>
              <a href={WA_GENERAL} target="_blank" rel="noopener" className="font-bold text-olivo-oscuro hover:text-rosa">{contacto.whatsappTexto}</a>
            </li>
            <li className="flex flex-wrap justify-between gap-x-4 py-2.5">
              <span className="text-gris">Correo</span>
              <a href={`mailto:${contacto.correo}`} className="font-bold text-olivo-oscuro hover:text-rosa">{contacto.correo}</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-tinta pb-28 pt-10 text-sm text-[#d9ded2] md:pb-10">
      <div className="contenedor flex flex-wrap items-center justify-between gap-4">
        <p>® {new Date().getFullYear()} Flores FioriNET México. Florería desde {negocio.fundada}</p>
        <ul className="flex gap-5">
          {contacto.redes.map((r) => <li key={r.nombre}><a href={r.url} target="_blank" rel="noopener" className="hover:text-white">{r.nombre}</a></li>)}
          <li><a href={contacto.tienda} target="_blank" rel="noopener" className="hover:text-white">Tienda en línea</a></li>
        </ul>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-salvia bg-papel md:hidden">
      <a href={WA_GENERAL} target="_blank" rel="noopener" className="flex flex-col items-center gap-0.5 bg-rosa py-2.5 text-xs font-bold text-white"><IconoWhats /> WhatsApp</a>
      <a href={`tel:${TEL.tel}`} className="flex flex-col items-center gap-0.5 py-2.5 text-xs font-bold text-olivo-oscuro">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></svg>
        Llamar
      </a>
      <a href={contacto.maps} target="_blank" rel="noopener" className="flex flex-col items-center gap-0.5 py-2.5 text-xs font-bold text-olivo-oscuro">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>
        Cómo llegar
      </a>
    </nav>
  );
}

export default function App() {
  const [arreglo, setArreglo] = useState<Arreglo | null>(arreglos[0]);
  const elegir = (a: Arreglo) => {
    setArreglo(a);
    document.getElementById('envio')?.scrollIntoView({ block: 'start' });
  };
  return (
    <>
      <a href="#arreglos" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-papel focus:p-2">Ir al contenido</a>
      <Encabezado />
      <main>
        <Portada />
        <Arreglos onElegir={elegir} />
        <Envio arreglo={arreglo} setArreglo={setArreglo} />
        <ComoEntregan />
        <HospitalesFunerales />
        <Preguntas />
        <Tienda />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
