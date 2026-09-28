import { useMemo, useState } from 'react';
import { cajas, catalogo, colores, entregas, eventos, foto, hechosAMano, incluye, negocio, wa, waGeneral, type NombreFoto } from './data/content';

const pesos = (n: number) => `$${n.toLocaleString('es-MX')}`;

/* ---------- iconos (dibujados por nosotros) ---------- */
function IconoWa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}
function IconoBolsa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 8h14l-1 12H6Z" strokeLinejoin="round" /><path d="M9 8a3 3 0 0 1 6 0" />
    </svg>
  );
}

function Encabezado() {
  const l = foto('logo');
  return (
    <header className="sticky top-0 z-40 border-b border-malva/20 bg-white/95 backdrop-blur">
      <div className="contenedor flex h-20 items-center justify-between gap-4">
        <a href="#inicio" aria-label="Florería Flordivan, inicio"><img src={l.src} width={l.width} height={l.height} alt="" className="h-14 w-auto" /></a>
        <nav aria-label="Principal" className="hidden items-center gap-7 text-[0.95rem] font-medium lg:flex">
          <a href="#caja" className="hover:text-frambuesa">Cajas de rosas</a>
          <a href="#arreglos" className="hover:text-frambuesa">Arreglos</a>
          <a href="#eventos" className="hover:text-frambuesa">Eventos</a>
          <a href="#entregas" className="hover:text-frambuesa">Entregas</a>
        </nav>
        <a href={waGeneral} className="btn hidden sm:inline-flex" target="_blank" rel="noopener"><IconoWa /> WhatsApp</a>
      </div>
    </header>
  );
}

function Portada() {
  const a = foto('a-fdpk02');
  const b = foto('e-novios');
  return (
    <section id="inicio" className="bg-palo">
      <div className="contenedor grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        <div className="min-w-0">
          <p className="font-titulo text-lg italic text-frambuesa">Boutique de flores en Guadalajara</p>
          <h1 className="mt-3 text-[2.5rem] leading-[1.08] sm:text-[3.4rem]">Arreglos de flores a domicilio en la Zona Metropolitana de Guadalajara</h1>
          <p className="mt-5 max-w-xl text-lg text-gris">Diseños únicos, hechos uno a uno de manera artesanal: cajas de rosas, arreglos, ramos y el diseño floral de tu boda o evento.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#caja" className="btn">Llena tu caja de rosas</a>
            <a href={waGeneral} className="btn-linea" target="_blank" rel="noopener"><IconoWa /> Pedir un diseño personalizado</a>
          </div>
        </div>
        <div className="grid min-w-0 grid-cols-[1fr_1.25fr] items-end gap-4">
          <img src={a.src} width={a.width} height={a.height} fetchPriority="high"
            alt="Caja cuadrada blanca con listón Flordivan llena de rosas rosas, blancas y hortensias, sostenida con ambas manos"
            className="aspect-square w-full rounded-t-full rounded-b-2xl object-cover" />
          <img src={b.src} width={b.width} height={b.height}
            alt="Pareja de novios junto a su mesa con un camino de flores en tonos pastel y candelabros"
            className="aspect-[4/5] w-full rounded-2xl object-cover" />
        </div>
      </div>
    </section>
  );
}

/* ---------- elemento memorable: "Llena tu caja" ---------- */
const DORADO = (137.508 * Math.PI) / 180;

function CajaRedonda({ n, color }: { n: number; color: (typeof colores)[number] }) {
  const R = 158; // radio interior de la caja
  const rosas = useMemo(() => {
    const c = R / (Math.sqrt(n + 0.6) + 0.9);
    return Array.from({ length: n }, (_, i) => {
      const r = c * Math.sqrt(i + 0.6);
      const t = i * DORADO;
      return { x: 200 + r * Math.cos(t), y: 200 + r * Math.sin(t), r: c, giro: (i * 47) % 360 };
    });
  }, [n]);
  const leyenda = 'FLORDIVAN      BOUTIQUE DE FLORES      ';
  return (
    <svg viewBox="0 0 400 400" className="h-auto w-full max-w-[26rem]" role="img" aria-label={`Caja redonda vista desde arriba con ${n} rosas ${color.nombre.toLowerCase()}`}>
      <defs><path id="borde" d="M200 200 m -181 0 a 181 181 0 1 1 362 0 a 181 181 0 1 1 -362 0" /></defs>
      <circle cx="200" cy="200" r="196" fill="#ead6d7" />
      <circle cx="200" cy="200" r="190" fill="#f7ecea" stroke="#d9bfc1" strokeWidth="2" />
      <text fontFamily="'Playfair Display Variable', Georgia, serif" fontSize="12" letterSpacing="3" fill="#847878">
        <textPath href="#borde">{leyenda.repeat(3)}</textPath>
      </text>
      <circle cx="200" cy="200" r={R + 6} fill="#40503a" />
      {rosas.map((p, i) => (
        <g key={i} transform={`rotate(${p.giro} ${p.x} ${p.y})`}>
          <circle cx={p.x} cy={p.y} r={p.r * 1.02} fill={color.rosa} stroke={color.centro} strokeOpacity="0.35" strokeWidth={Math.max(0.6, p.r * 0.06)} />
          <circle cx={p.x} cy={p.y} r={p.r * 0.62} fill="none" stroke={color.centro} strokeWidth={Math.max(0.8, p.r * 0.12)} strokeDasharray={`${p.r * 1.8} ${p.r * 0.6}`} />
          <circle cx={p.x} cy={p.y} r={p.r * 0.26} fill={color.centro} />
        </g>
      ))}
    </svg>
  );
}

function LlenaTuCaja() {
  const [i, setI] = useState(1);
  const [c, setC] = useState(0);
  const [mensaje, setMensaje] = useState('');
  const caja = cajas[i];
  const color = colores[c];
  const texto = `Hola, quiero una caja redonda con ${caja.rosas} rosas ${color.nombre.toLowerCase()} (${pesos(caja.precio)}).${mensaje.trim() ? ` Mensaje para la tarjeta: “${mensaje.trim()}”.` : ''} ¿Para qué día la tienen?`;
  return (
    <section id="caja" className="py-16 md:py-24" aria-labelledby="caja-titulo">
      <div className="contenedor">
        <div className="max-w-2xl">
          <h2 id="caja-titulo" className="text-4xl sm:text-5xl">Llena tu caja</h2>
          <p className="mt-4 text-gris">Su caja redonda, vista desde arriba. Elige cuántas rosas y de qué color: la caja se llena con esa cantidad exacta. Cada pedido lleva moño y una tarjeta con tu mensaje; escríbelo aquí y míralo en la tarjeta.</p>
        </div>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-14">
          <div className="relative mx-auto w-full max-w-[26rem]">
            <CajaRedonda n={caja.rosas} color={color} />
            <div className="absolute -bottom-4 right-0 w-44 rotate-3 rounded-md bg-white p-3 text-center shadow-lg ring-1 ring-malva/20 sm:-right-6">
              <p className="font-titulo text-[0.95rem] italic leading-snug text-ciruela">{mensaje.trim() || 'Tu mensaje aquí'}</p>
            </div>
          </div>
          <div className="min-w-0">
            <fieldset>
              <legend className="text-sm font-semibold">¿Cuántas rosas?</legend>
              <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-6 lg:grid-cols-3 xl:grid-cols-6">
                {cajas.map((x, k) => (
                  <button key={x.rosas} type="button" onClick={() => setI(k)} aria-pressed={i === k}
                    className={`rounded-xl border px-2 py-2.5 text-center transition-colors ${i === k ? 'border-ciruela bg-ciruela text-white' : 'border-malva/40 hover:border-ciruela'}`}>
                    <span className="block text-lg font-semibold">{x.rosas}</span>
                    <span className={`block text-xs ${i === k ? 'text-white/85' : 'text-gris'}`}>{pesos(x.precio)}</span>
                  </button>
                ))}
              </div>
            </fieldset>
            <fieldset className="mt-7">
              <legend className="text-sm font-semibold">Color</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {colores.map((x, k) => (
                  <button key={x.nombre} type="button" onClick={() => setC(k)} aria-pressed={c === k}
                    className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium ${c === k ? 'border-ciruela ring-2 ring-ciruela/30' : 'border-malva/40'}`}>
                    <span aria-hidden="true" className="h-4 w-4 rounded-full ring-1 ring-black/10" style={{ background: x.rosa }} /> {x.nombre}
                  </button>
                ))}
              </div>
            </fieldset>
            <label className="mt-7 block">
              <span className="text-sm font-semibold">Mensaje para la tarjeta (opcional)</span>
              <textarea value={mensaje} maxLength={120} rows={2} onChange={(e) => setMensaje(e.target.value)}
                className="mt-2 w-full rounded-xl border border-malva/40 px-3 py-2.5" placeholder="Por ejemplo: Feliz cumpleaños, mamá" />
            </label>
            <div className="mt-6 rounded-2xl bg-palo p-5">
              <p className="font-titulo text-2xl">Caja redonda con {caja.rosas} rosas {color.nombre.toLowerCase()}</p>
              <p className="mt-1 text-3xl font-semibold text-frambuesa">{pesos(caja.precio)}</p>
              <p className="mt-2 text-sm text-gris">Incluye: {incluye.join(', ').toLowerCase()}.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href={wa(texto)} target="_blank" rel="noopener" className="btn"><IconoWa /> Pedir por WhatsApp</a>
                <a href={caja.url} target="_blank" rel="noopener" className="btn-linea"><IconoBolsa /> Comprar en su tienda</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Arreglos() {
  const lista = catalogo.filter((p) => p.foto && p.disponible && p.precio > 0).sort((a, b) => a.precio - b.precio);
  return (
    <section id="arreglos" className="bg-palo py-16 md:py-24" aria-labelledby="arreglos-titulo">
      <div className="contenedor">
        <h2 id="arreglos-titulo" className="text-4xl sm:text-5xl">Arreglos</h2>
        <p className="mt-4 max-w-2xl text-gris">Los diseños de Flordivan, del más sencillo al más grande. También hay ramos de 24 a 300 rosas en seis colores, de $750 a $8,100 según la cantidad.</p>
        <ul className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {lista.map((p) => {
            const f = foto(p.foto as NombreFoto);
            return (
              <li key={p.sku} className="min-w-0">
                <a href={p.url} target="_blank" rel="noopener" className="group block">
                  <img src={f.src} width={f.width} height={f.height} loading="lazy" alt={`Arreglo “${p.nombre}” de Flordivan`} className="aspect-square w-full rounded-2xl object-cover transition-transform group-hover:scale-[1.02]" />
                  <p className="mt-3 font-titulo text-lg leading-tight">{p.nombre}</p>
                  <p className="text-[0.95rem] text-frambuesa">{pesos(p.precio)}</p>
                </a>
              </li>
            );
          })}
        </ul>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={negocio.tienda} target="_blank" rel="noopener" className="btn"><IconoBolsa /> Ver toda la tienda</a>
          <a href={wa('Hola, quiero un arreglo con un diseño personalizado. Mi presupuesto es de: ')} target="_blank" rel="noopener" className="btn-linea"><IconoWa /> Diseño personalizado</a>
        </div>
      </div>
    </section>
  );
}

function Eventos() {
  const fs: [NombreFoto, string][] = [
    ['e-salon', 'Salón con techo de ramas y flores secas, luces colgantes y mesas largas con velas'],
    ['e-mesa', 'Mesa de novios cubierta de flores blancas, pampas y follaje en tonos naturales'],
    ['e-auto', 'Auto clásico rojo con un arreglo de rosas blancas sobre el cofre'],
    ['e-rojo', 'Centros de mesa altos con rosas rojas y follaje sobre bases doradas'],
  ];
  return (
    <section id="eventos" className="py-16 md:py-24" aria-labelledby="eventos-titulo">
      <div className="contenedor grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
        <div>
          <h2 id="eventos-titulo" className="text-4xl sm:text-5xl">{eventos.titulo}</h2>
          <p className="mt-5 text-gris">{eventos.texto}</p>
          <dl className="mt-6 space-y-4">
            {eventos.puntos.map((p) => <div key={p.t}><dt className="font-semibold">{p.t}</dt><dd className="text-gris">{p.d}</dd></div>)}
          </dl>
          <a href={wa('Hola, quiero cotizar el diseño floral de mi evento. Fecha: , tipo de evento: , número de invitados: ')} target="_blank" rel="noopener" className="btn mt-8"><IconoWa /> Cotizar mi evento</a>
        </div>
        <div className="grid min-w-0 grid-cols-2 gap-4">
          {fs.map(([n, alt], k) => {
            const f = foto(n);
            return <img key={n} src={f.src} width={f.width} height={f.height} loading="lazy" alt={alt} className={`w-full rounded-2xl object-cover ${k % 3 === 0 ? 'aspect-[4/5]' : 'aspect-square'}`} />;
          })}
        </div>
      </div>
    </section>
  );
}

function Entregas() {
  return (
    <section id="entregas" className="bg-ciruela py-16 text-white md:py-20" aria-labelledby="entregas-titulo">
      <div className="contenedor grid gap-10 md:grid-cols-2">
        <div>
          <h2 id="entregas-titulo" className="text-3xl sm:text-4xl">Entregas</h2>
          <ul className="mt-5 space-y-3 text-white/90">{entregas.map((e) => <li key={e}>{e}</li>)}</ul>
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl">Hechos a mano</h2>
          <p className="mt-5 text-white/90">{hechosAMano}</p>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <>
      <footer className="bg-tinta py-12 pb-24 text-sm text-white/80 lg:pb-12">
        <div className="contenedor grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-titulo text-2xl text-white">Flordivan</p>
            <p className="mt-1">Boutique de flores. Envíos en la Zona Metropolitana de Guadalajara.</p>
          </div>
          <div className="space-y-1.5">
            <a href={waGeneral} target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-white"><IconoWa className="h-4 w-4" /> {negocio.whatsappVisible}</a>
            <a href={`https://wa.me/${negocio.whatsapp2}`} target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-white"><IconoWa className="h-4 w-4" /> {negocio.whatsapp2Visible}</a>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5">
            <a href={negocio.instagram} target="_blank" rel="noopener" className="hover:text-white">Instagram</a>
            <a href={negocio.facebook} target="_blank" rel="noopener" className="hover:text-white">Facebook</a>
            <a href={negocio.mapa} target="_blank" rel="noopener" className="hover:text-white">Google Maps</a>
          </div>
        </div>
      </footer>
      <nav className="fixed inset-x-0 bottom-0 z-40 flex border-t border-malva/20 bg-white/95 backdrop-blur lg:hidden" aria-label="Contacto rápido">
        <a href={waGeneral} target="_blank" rel="noopener" className="flex flex-1 flex-col items-center gap-1 py-2.5 text-xs font-medium text-ciruela"><IconoWa /> WhatsApp</a>
        <a href="#caja" className="flex flex-1 flex-col items-center gap-1 border-x border-malva/20 py-2.5 text-xs font-medium text-ciruela">
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /></svg>
          Cajas
        </a>
        <a href={negocio.tienda} target="_blank" rel="noopener" className="flex flex-1 flex-col items-center gap-1 py-2.5 text-xs font-medium text-ciruela"><IconoBolsa /> Tienda</a>
      </nav>
    </>
  );
}

export default function App() {
  return (
    <>
      <Encabezado />
      <main>
        <Portada />
        <LlenaTuCaja />
        <Arreglos />
        <Eventos />
        <Entregas />
      </main>
      <Pie />
    </>
  );
}
