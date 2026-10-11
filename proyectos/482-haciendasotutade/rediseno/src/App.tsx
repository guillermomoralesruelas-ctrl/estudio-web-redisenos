import { useState } from 'react';
import fotosJson from './data/fotos.json';
import { negocio, cifras, anillo, habitaciones, incluido, museo, actividades, restaurantes, cocinaExtra, wellness, bodas, opcionesVisita } from './data/content';

const fotos = fotosJson as unknown as Record<string, [number, number]>;
const base = import.meta.env.BASE_URL;
const src = (n: string) => `${base}${n}.webp`;
const peso = (n: number) => '$' + n.toLocaleString('es-MX');
const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;

function Foto({ n, alt, className = '', eager = false }: { n: string; alt: string; className?: string; eager?: boolean }) {
  const [w, h] = fotos[n] ?? [1200, 800];
  return <img src={src(n)} alt={alt} width={w} height={h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={className} />;
}

function Encabezado() {
  const enlaces = [['#cenotes', 'Cenotes'], ['#hotel', 'Hotel'], ['#museo', 'Museo vivo'], ['#restaurantes', 'Restaurantes'], ['#bodas', 'Bodas'], ['#contacto', 'Contacto']];
  return (
    <header className="sticky top-0 z-30 bg-henequen text-white">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0"><img src={`${base}logo-blanco.png`} alt="Sotuta de Peón, hacienda viva" width={600} height={179} className="h-9 w-auto" /></a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-6 text-sm font-medium">{enlaces.map(([h, t]) => <li key={h}><a href={h} className="hover:text-ocre">{t}</a></li>)}</ul>
        </nav>
        <a href={negocio.reservarHotel} className="btn-ocre px-4 py-2.5">Reservar</a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-henequen text-white">
      <Foto n="aerea-atardecer" alt="Vista aérea de la hacienda y la selva al atardecer" eager className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#1F2816] via-[#1F2816]/55 to-[#1F2816]/10" />
      <div className="contenedor flex min-h-[38rem] flex-col justify-end pb-10 pt-24 sm:min-h-[42rem]">
        <p className="eyebrow text-ocre">{negocio.lema} · Tecoh, Yucatán</p>
        <h1 className="mt-3 max-w-4xl text-5xl sm:text-6xl lg:text-7xl">Una hacienda henequenera con quince cenotes, a 45 minutos de Mérida</h1>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={negocio.reservarHotel} className="btn-ocre">Reservar habitación</a>
          <a href={wa('Hola, quisiera reservar un tour en Hacienda Sotuta de Peón.')} className="btn-linea">Reservar tour por WhatsApp</a>
        </div>
        <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-white/20 pt-6 sm:grid-cols-4">
          {cifras.map((c) => <div key={c.t}><dt className="sr-only">{c.t}</dt><dd><span className="block font-display text-5xl text-ocre">{c.n}</span><span className="text-sm text-white/80">{c.t}</span></dd></div>)}
        </dl>
      </div>
    </section>
  );
}

function Anillo() {
  const [vista, setVista] = useState<'anillo' | 'cenotes'>('anillo');
  // Esquema (no a escala): costa arriba, centro del cráter en la costa y el anillo como semicírculo hacia el sur.
  const cx = 200, cy = 40, r = 150;
  const puntos = Array.from({ length: 23 }, (_, i) => {
    const a = Math.PI * (0.06 + (0.88 * i) / 22);
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  });
  const aSotuta = Math.PI * 0.36;
  const sotuta = [cx + r * Math.cos(aSotuta), cy + r * Math.sin(aSotuta)];
  return (
    <section id="cenotes" className="bg-henequen py-20 text-white sm:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <div>
          <p className="eyebrow text-ocre">El Anillo de los Cenotes</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">La hacienda está sobre el borde del cráter de Chicxulub</h2>
          {anillo.texto.map((t) => <p key={t.slice(0, 20)} className="mt-4 text-white/85">{t}</p>)}
          <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {anillo.datos.map((d) => <div key={d.t} className="border-l-2 border-ocre pl-3"><dt className="sr-only">{d.t}</dt><dd><span className="block font-display text-3xl text-ocre">{d.n}</span><span className="text-xs text-white/75">{d.t}</span></dd></div>)}
          </dl>
        </div>
        <div className="rounded-lg bg-henequen-2/60 p-5 ring-1 ring-white/10 sm:p-7">
          <div className="flex gap-2" role="group" aria-label="Cambiar vista">
            <button type="button" aria-pressed={vista === 'anillo'} onClick={() => setVista('anillo')} className={`btn px-4 py-2.5 ${vista === 'anillo' ? 'bg-ocre text-henequen' : 'border border-white/30'}`}>El anillo</button>
            <button type="button" aria-pressed={vista === 'cenotes'} onClick={() => setVista('cenotes')} className={`btn px-4 py-2.5 ${vista === 'cenotes' ? 'bg-ocre text-henequen' : 'border border-white/30'}`}>Los 15 cenotes</button>
          </div>
          {vista === 'anillo' ? (
            <figure className="mt-5">
              <svg viewBox="0 0 400 240" className="w-full" role="img" aria-labelledby="anillo-t">
                <title id="anillo-t">Esquema del Anillo de los Cenotes: semicírculo de cenotes alrededor del centro del cráter en la costa, con Mérida dentro y Sotuta de Peón sobre el anillo</title>
                <path d="M0 40 C 60 30, 120 46, 200 40 S 330 30, 400 42 L400 0 L0 0 Z" fill="#157F82" opacity="0.55" />
                <text x="18" y="22" fill="#CDEBE8" fontSize="11" fontStyle="italic">Golfo de México</text>
                <path d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 0 ${cx + r} ${cy}`} fill="none" stroke="#E0A83A" strokeOpacity="0.35" strokeWidth="14" />
                {puntos.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="4" fill="#CDEBE8" />)}
                <circle cx={cx} cy={cy} r="5" fill="#E0A83A" />
                <text x={cx + 8} y={cy + 16} fill="#fff" fontSize="10">Centro del cráter (Chicxulub)</text>
                <circle cx={cx - 22} cy={cy + 52} r="5" fill="#fff" />
                <text x={cx - 70} y={cy + 72} fill="#fff" fontSize="11">Mérida</text>
                <line x1={cx - 22} y1={cy + 52} x2={sotuta[0]} y2={sotuta[1]} stroke="#fff" strokeDasharray="3 3" />
                <text x={(cx - 22 + sotuta[0]) / 2 + 8} y={(cy + 52 + sotuta[1]) / 2} fill="#E0A83A" fontSize="11">45 min</text>
                <circle cx={sotuta[0]} cy={sotuta[1]} r="8" fill="#9A3A27" stroke="#fff" strokeWidth="2" />
                <text x={sotuta[0]} y={sotuta[1] + 24} fill="#fff" fontSize="12" fontWeight="600" textAnchor="middle">Sotuta de Peón (Tecoh)</text>
              </svg>
              <figcaption className="mt-2 text-xs text-white/60">Esquema ilustrativo, no a escala: el anillo mide más de 160 km de diámetro y atraviesa 27 municipios.</figcaption>
            </figure>
          ) : (
            <div className="mt-5">
              <ul className="grid grid-cols-5 gap-3" aria-label="Los 15 cenotes de la hacienda">
                {Array.from({ length: 15 }, (_, i) => (
                  <li key={i} className={`flex aspect-square items-center justify-center rounded-full text-xs font-semibold ${i < 8 ? 'bg-cenote text-white' : 'border-2 border-dashed border-white/40 text-white/60'}`}>
                    <span className="sr-only">{i < 8 ? 'Cenote en las actividades' : 'Cenote intacto en la selva'}</span><span aria-hidden="true">{i + 1}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 grid gap-2 text-sm">
                <p><span className="mr-2 inline-block h-3 w-3 rounded-full bg-cenote align-middle" />8 forman parte de las experiencias: se puede nadar y explorar sus formaciones.</p>
                <p><span className="mr-2 inline-block h-3 w-3 rounded-full border-2 border-dashed border-white/60 align-middle" />7 permanecen ocultos e intactos en la selva.</p>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-2">
                <div className="relative aspect-[4/3] overflow-hidden rounded"><Foto n="cenote-3" alt="Mujer nadando en un cenote iluminado entre estalactitas" className="absolute inset-0 h-full w-full object-cover" /></div>
                <div className="relative aspect-[4/3] overflow-hidden rounded"><Foto n="cenote-turquesa" alt="Cenote de agua turquesa bajo una bóveda de roca" className="absolute inset-0 h-full w-full object-cover" /></div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="contenedor mt-14 grid grid-cols-2 gap-3 md:grid-cols-4">
        {[['cenote-1', 'Pareja en la escalera de madera de un cenote'], ['cenote-2', 'Formaciones de roca sobre el agua del cenote'], ['cenote-4', 'Persona bajando al agua cristalina del cenote'], ['cenote-caverna', 'Visitante dentro de una caverna con raíces']].map(([n, a]) => (
          <div key={n} className="relative aspect-[4/3] overflow-hidden rounded"><Foto n={n} alt={a} className="absolute inset-0 h-full w-full object-cover" /></div>
        ))}
      </div>
    </section>
  );
}

function Aviso() {
  return (
    <div className="bg-ocre text-henequen">
      <p className="contenedor py-4 text-sm font-medium"><strong>Estimados visitantes:</strong> {negocio.aviso} <a href={wa('Hola, quisiera consultar disponibilidad en Hacienda Sotuta de Peón.')} className="font-semibold underline">Consultar por WhatsApp</a></p>
    </div>
  );
}

function Hotel() {
  return (
    <section id="hotel" className="py-20 sm:py-24">
      <div className="contenedor">
        <p className="eyebrow">Cenotes Resort</p>
        <h2 className="mt-3 max-w-3xl text-4xl sm:text-5xl">Un hotel boutique de 30 habitaciones entre henequenales y selva</h2>
        <p className="mt-4 max-w-2xl text-gris">Selva mediana, plantaciones históricas de henequén y corredores de fauna donde conviven aves, reptiles y mamíferos de Yucatán. Reservaciones directas con la mejor tarifa garantizada.</p>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {habitaciones.map((h) => (
            <article key={h.nombre} className="overflow-hidden rounded-lg bg-white ring-1 ring-tinta/10">
              <div className="grid grid-cols-2 gap-1">
                <div className="relative col-span-2 aspect-[16/10]"><Foto n={h.fotos[0].n} alt={h.fotos[0].alt} className="absolute inset-0 h-full w-full object-cover" /></div>
                {h.fotos.slice(1).map((f) => <div key={f.n} className="relative aspect-square"><Foto n={f.n} alt={f.alt} className="absolute inset-0 h-full w-full object-cover" /></div>)}
              </div>
              <div className="p-6">
                <h3 className="text-3xl">Habitación {h.nombre}</h3>
                <p className="mt-2 text-gris">{h.texto}</p>
                <p className="mt-3 text-sm font-semibold">{h.camas}</p>
                <ul className="mt-3 flex flex-wrap gap-2">{h.rasgos.map((r) => <li key={r} className="rounded-sm bg-cal-2 px-2.5 py-1 text-xs font-semibold">{r}</li>)}</ul>
                <p className="mt-3 text-sm text-gris">Tarifa: [PENDIENTE] se consulta en el sistema de reservas.</p>
                <a href={negocio.reservarHotel} className="btn-oxido mt-5">Ver disponibilidad</a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-lg bg-cenote-claro p-6 sm:p-8">
          <h3 className="text-2xl">Incluido en tu estadía</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">{incluido.map((x) => <li key={x} className="flex items-center gap-2 font-medium"><span className="h-2 w-2 rounded-full bg-cenote" aria-hidden="true" />{x}</li>)}</ul>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[['piscina', 'Piscina del resort con camastros y jardín'], ['noche', 'Terraza con palapa iluminada de noche'], ['corredor', 'Corredor con arcos, mecedoras y piso de pasta'], ['deluxe-exterior', 'Edificio de dos pisos de habitaciones con techo de palma']].map(([n, a]) => (
            <div key={n} className="relative aspect-[4/3] overflow-hidden rounded"><Foto n={n} alt={a} className="absolute inset-0 h-full w-full object-cover" /></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Museo() {
  return (
    <section id="museo" className="bg-cal-2 py-20 sm:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="grid grid-cols-2 gap-3">
          <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded"><Foto n="truk-mulas" alt="Truk tirado por mulas sobre rieles entre henequenales" className="absolute inset-0 h-full w-full object-cover" /></div>
          <div className="relative aspect-square overflow-hidden rounded"><Foto n="henequen-artesano" alt="Artesano trabajando la fibra de henequén" className="absolute inset-0 h-full w-full object-cover" /></div>
          <div className="relative aspect-square overflow-hidden rounded"><Foto n="cordeleria" alt="Trabajadores junto a la maquinaria de la cordelería" className="absolute inset-0 h-full w-full object-cover" /></div>
        </div>
        <div>
          <p className="eyebrow">Museo vivo de las haciendas henequeneras</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Del henequén a la fibra, sobre rieles y con mulas</h2>
          {museo.texto.map((t) => <p key={t.slice(0, 20)} className="mt-4 text-gris">{t}</p>)}
          <p className="mt-4 text-sm font-semibold">{museo.visita}</p>
          <h3 className="mt-8 text-2xl">Modalidades del tour henequenero</h3>
          <ul className="mt-3 flex flex-wrap gap-2">{museo.modalidades.map((m) => <li key={m} className="rounded-sm bg-white px-3 py-1.5 text-sm font-semibold ring-1 ring-tinta/10">{m}</li>)}</ul>
          <p className="mt-3 text-sm text-gris">Horarios y precios: [PENDIENTE] se confirman al reservar.</p>
          <a href={wa('Hola, quisiera reservar el tour henequenero.')} className="btn-oxido mt-6">Reservar tour</a>
        </div>
      </div>
      <div className="contenedor mt-14">
        <h3 className="text-3xl">Tours y actividades</h3>
        <p className="mt-2 max-w-2xl text-gris">De visita por el día o hospedado: tours henequeneros, caballo, cuatrimoto, bicicleta, wellness, temazcal, huerto orgánico y sesiones de fotos.</p>
        <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {actividades.map((a) => (
            <li key={a.nombre} className="group relative aspect-[3/4] overflow-hidden rounded">
              <Foto n={a.foto} alt={a.alt} className="absolute inset-0 h-full w-full object-cover" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-10 font-display text-xl leading-tight text-white">{a.nombre}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Restaurantes() {
  return (
    <section id="restaurantes" className="py-20 sm:py-24">
      <div className="contenedor">
        <p className="eyebrow">Restaurantes</p>
        <h2 className="mt-3 text-4xl sm:text-5xl">Dos cocinas: la yucateca del casco y la del hotel</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {restaurantes.map((r) => (
            <article key={r.nombre} className="rounded-lg bg-white p-6 ring-1 ring-tinta/10 sm:p-8">
              <div className="flex items-center gap-4">
                <img src={`${base}${r.logo}.png`} alt={`Logotipo del restaurante ${r.nombre}`} width={120} height={110} className={`h-16 w-auto rounded p-1 ${r.nombre === 'Kih' ? 'bg-white ring-1 ring-tinta/10' : 'bg-tinta'}`} />
                <div><h3 className="text-3xl">{r.nombre}</h3><p className="text-sm font-semibold text-cenote">{r.tipo}</p></div>
              </div>
              <p className="mt-4 text-gris">{r.texto}</p>
              <dl className="mt-4 grid gap-1 text-sm">{r.horario.map((h) => <div key={h.t} className="flex justify-between border-b border-tinta/10 py-1.5"><dt className="font-semibold">{h.t}</dt><dd>{h.h}</dd></div>)}</dl>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-gris">{cocinaExtra}</p>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[['mesa-yucateca', 'Mesa con platillos yucatecos vista desde arriba'], ['platillo-2', 'Panuchos con cebolla morada'], ['platillo-1', 'Papadzules bañados en salsa de jitomate'], ['restaurante-palapa', 'Comedor bajo una gran palapa']].map(([n, a]) => (
            <div key={n} className="relative aspect-[4/3] overflow-hidden rounded"><Foto n={n} alt={a} className="absolute inset-0 h-full w-full object-cover" /></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Wellness() {
  const m = wellness.masajes[0];
  return (
    <section id="wellness" className="bg-cenote py-20 text-white sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <p className="eyebrow text-cenote-claro">Wellness</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Masajes mayas y temazcal con hierbas del huerto</h2>
          <p className="mt-4 text-white/85">{wellness.texto}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-white/10 p-5">
              <h3 className="text-2xl">{m.nombre}</h3>
              <p className="mt-1 text-sm text-white/80">{m.detalle}</p>
              <ul className="mt-3 grid gap-1">{m.opciones.map((o) => <li key={o.min} className="flex justify-between border-t border-white/15 pt-1.5"><span>{o.min} minutos</span><span className="font-semibold">{peso(o.precio)} MX</span></li>)}</ul>
            </div>
            <div className="rounded-lg bg-white/10 p-5">
              <h3 className="text-2xl">Temazcal</h3>
              <p className="mt-1 text-sm text-white/80">{wellness.temazcal.texto}</p>
              <p className="mt-3 border-t border-white/15 pt-1.5">{wellness.temazcal.min} minutos · {wellness.temazcal.minimo}</p>
              <p className="text-sm text-white/70">Precio: {wellness.temazcal.precio}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded"><Foto n="masaje-sentado" alt="Terapeutas dando masaje sentado en la terraza" className="absolute inset-0 h-full w-full object-cover" /></div>
          <div className="relative aspect-[3/4] overflow-hidden rounded"><Foto n="temazcal" alt="Temazcal de piedra con techo de palma en el jardín" className="absolute inset-0 h-full w-full object-cover" /></div>
          <div className="relative aspect-[3/4] overflow-hidden rounded"><Foto n="masaje" alt="Terapeuta dando masaje en la espalda" className="absolute inset-0 h-full w-full object-cover" /></div>
        </div>
      </div>
    </section>
  );
}

function Bodas() {
  return (
    <section id="bodas" className="py-20 sm:py-24">
      <div className="contenedor">
        <p className="eyebrow">Bodas y eventos</p>
        <h2 className="mt-3 max-w-3xl text-4xl sm:text-5xl">Capilla, cenote, jardines o casa principal</h2>
        <p className="mt-4 max-w-3xl text-gris">{bodas.texto}</p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bodas.tipos.map((b) => (
            <li key={b.nombre} className="overflow-hidden rounded-lg bg-white ring-1 ring-tinta/10">
              <div className="relative aspect-square"><Foto n={b.foto} alt={`${b.nombre} en Sotuta de Peón`} className="absolute inset-0 h-full w-full object-cover" /></div>
              <div className="p-5">
                <h3 className="text-2xl">{b.nombre}</h3>
                <ul className="mt-2 grid gap-1 text-sm text-gris">{b.puntos.map((p) => <li key={p}>· {p}</li>)}</ul>
              </div>
            </li>
          ))}
        </ul>
        <a href={`mailto:${negocio.correo}?subject=${encodeURIComponent('Boda o evento en Sotuta de Peón')}`} className="btn-oxido mt-8">Cotizar boda o evento</a>
      </div>
    </section>
  );
}

function ArmaVisita() {
  const [tipo, setTipo] = useState<'dia' | 'hospedaje'>('dia');
  const [elegidas, setElegidas] = useState<string[]>(['Tour henequenero', 'Nadar en cenote']);
  const [personas, setPersonas] = useState(2);
  const alternar = (x: string) => setElegidas((l) => (l.includes(x) ? l.filter((y) => y !== x) : [...l, x]));
  const msg = `Hola, quisiera planear una visita a Sotuta de Peón (${tipo === 'dia' ? 'visita de día' : 'con hospedaje'}), ${personas} ${personas === 1 ? 'persona' : 'personas'}. Me interesa: ${elegidas.length ? elegidas.join(', ') : 'recibir opciones'}. Fecha: `;
  return (
    <section id="visita" className="bg-henequen py-20 text-white sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="eyebrow text-ocre">Arma tu visita</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Elige qué quieres hacer y mándalo por WhatsApp</h2>
          <p className="mt-4 text-white/80">Los tours y el restaurante tienen cupo limitado. Marca lo que te interesa y la hacienda te confirma horarios, precios y disponibilidad.</p>
        </div>
        <div className="rounded-lg bg-henequen-2/60 p-6 ring-1 ring-white/10">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Tipo de visita">
            {([['dia', 'Visita de día'], ['hospedaje', 'Con hospedaje']] as const).map(([k, t]) => (
              <button key={k} type="button" aria-pressed={tipo === k} onClick={() => setTipo(k)} className={`btn px-4 py-2.5 ${tipo === k ? 'bg-ocre text-henequen' : 'border border-white/30'}`}>{t}</button>
            ))}
          </div>
          <p className="mt-6 text-sm font-semibold text-white/80" id="act-t">Actividades</p>
          <div className="mt-2 flex flex-wrap gap-2" role="group" aria-labelledby="act-t">
            {opcionesVisita.map((x) => (
              <button key={x} type="button" aria-pressed={elegidas.includes(x)} onClick={() => alternar(x)} className={`rounded-sm px-3 py-2 text-sm font-semibold ring-1 transition-colors ${elegidas.includes(x) ? 'bg-cenote ring-cenote' : 'ring-white/30 hover:bg-white/10'}`}>{x}</button>
            ))}
          </div>
          <label htmlFor="personas" className="mt-6 block text-sm font-semibold text-white/80">Personas</label>
          <div className="mt-2 flex items-center gap-3">
            <button type="button" onClick={() => setPersonas((p) => Math.max(1, p - 1))} aria-label="Una persona menos" className="h-10 w-10 rounded-sm ring-1 ring-white/30 hover:bg-white/10">−</button>
            <input id="personas" type="number" min={1} max={60} value={personas} onChange={(e) => setPersonas(Math.max(1, Math.min(60, Number(e.target.value) || 1)))} className="w-16 rounded-sm bg-white px-2 py-2 text-center text-tinta" />
            <button type="button" onClick={() => setPersonas((p) => Math.min(60, p + 1))} aria-label="Una persona más" className="h-10 w-10 rounded-sm ring-1 ring-white/30 hover:bg-white/10">+</button>
          </div>
          {elegidas.includes('Temazcal') && personas < 6 && <p className="mt-3 text-sm text-ocre">El temazcal es para mínimo 6 personas.</p>}
          <a href={wa(msg)} className="btn-ocre mt-6 w-full">Enviar por WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="py-20 sm:py-24">
      <div className="contenedor grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Sotuta de Peón, Tecoh, Yucatán</h2>
          <p className="mt-3 text-gris">{negocio.direccion}</p>
          <ul className="mt-6 grid gap-2">
            {negocio.telefonos.map((t) => <li key={t}><a href={`tel:+52${t.replace(/\D/g, '')}`} className="font-semibold text-oxido hover:underline">Tel. {t}</a></li>)}
            <li><a href={wa('Hola, quisiera información de Hacienda Sotuta de Peón.')} className="font-semibold text-oxido hover:underline">WhatsApp {negocio.whatsappTexto}</a></li>
            <li><a href={`mailto:${negocio.correo}`} className="font-semibold text-oxido hover:underline">{negocio.correo}</a></li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={negocio.reservarHotel} className="btn-oxido">Reservar habitación</a>
            <a href={negocio.mapa} className="btn border border-tinta hover:bg-tinta hover:text-white">Cómo llegar</a>
          </div>
          <p className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
            <a href={negocio.facebook} className="hover:text-oxido">Facebook</a>
            <a href={negocio.instagram} className="hover:text-oxido">Instagram</a>
            <a href={negocio.tripadvisor} className="hover:text-oxido">TripAdvisor</a>
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg"><Foto n="casa-principal-noche" alt="Casa principal de la hacienda iluminada de noche" className="absolute inset-0 h-full w-full object-cover" /></div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2">Saltar al contenido</a>
      <Encabezado />
      <main id="contenido">
        <Portada />
        <Aviso />
        <Anillo />
        <Hotel />
        <Museo />
        <Restaurantes />
        <Wellness />
        <Bodas />
        <ArmaVisita />
        <Contacto />
      </main>
      <footer className="bg-tinta pb-24 pt-10 text-sm text-white/75 md:pb-10">
        <div className="contenedor flex flex-col gap-3 sm:flex-row sm:justify-between">
          <p><span className="font-semibold text-white">{negocio.nombre}</span> · {negocio.lema}</p>
          <p>Tel. {negocio.telefonos[0]} · WhatsApp {negocio.whatsappTexto}</p>
        </div>
      </footer>
      <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/10 bg-henequen text-sm font-semibold text-white md:hidden">
        <a href={`tel:${negocio.telefonoLink}`} className="py-3.5 text-center">Llamar</a>
        <a href={wa('Hola, quisiera información de Hacienda Sotuta de Peón.')} className="bg-oxido py-3.5 text-center">WhatsApp</a>
        <a href={negocio.reservarHotel} className="py-3.5 text-center">Reservar</a>
      </nav>
    </>
  );
}
