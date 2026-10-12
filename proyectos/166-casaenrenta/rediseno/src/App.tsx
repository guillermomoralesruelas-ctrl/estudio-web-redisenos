import { useMemo, useState } from 'react';
import fotosJson from './data/fotos.json';
import rc from './data/rentar-comprar.json';
import { negocio, titular, intro, acerca, servicios, catalogo, destinosMenu } from './data/content';
import { paisajes, propiedades } from './data/propiedades';
import type { Paisaje, Propiedad } from './data/propiedades';

const fotos = fotosJson as unknown as Record<string, [number, number]>;
const base = import.meta.env.BASE_URL;
const wa = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;
const num = (n: number) => Math.round(n).toLocaleString('es-MX');
const dinero = (n: number, m = 'MXN') => `$${num(n)} ${m}`;
const millones = (n: number) => `$${(n / 1e6).toLocaleString('es-MX', { maximumFractionDigits: 2 })} millones`;

function Foto({ n, alt, className = '', eager = false }: { n: string; alt: string; className?: string; eager?: boolean }) {
  const [w, h] = fotos[n] ?? [1200, 800];
  return <img src={`${base}${n}.webp`} alt={alt} width={w} height={h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={className} />;
}

function Encabezado() {
  const enlaces = [['#paisajes', 'Propiedades'], ['#rentar-o-comprar', '¿Rentar o comprar?'], ['#nosotros', 'Nosotros'], ['#contacto', 'Contacto']];
  return (
    <header className="sticky top-0 z-30 bg-tinta text-papel">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0"><img src={`${base}logo-blanco.png`} alt="Firma Inmobiliaria" width={200} height={115} className="h-12 w-auto sm:h-[3.25rem]" /></a>
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-7 text-[0.95rem]">{enlaces.map(([h, t]) => <li key={h}><a href={h} className="text-papel/85 hover:text-ocre">{t}</a></li>)}</ul>
        </nav>
        <a href={negocio.telefonoHref} className="hidden text-sm font-medium text-ocre sm:block md:hidden lg:block">{negocio.telefono}</a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="bg-tinta text-papel">
      <div className="contenedor grid gap-10 pb-14 pt-10 md:grid-cols-[1.05fr_1fr] md:items-center md:gap-14 md:pb-20 md:pt-14">
        <div className="min-w-0">
          <p className="text-ocre">Guadalajara · Bosque · Playa · Industria</p>
          <h1 className="mt-4 text-[2.9rem] sm:text-7xl">{titular}</h1>
          <p className="mt-6 max-w-xl text-lg text-papel/80">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#paisajes" className="btn-ocre">Ver propiedades</a>
            <a href={wa('Hola, Firma Inmobiliaria. Estoy buscando una propiedad y quisiera asesoría.')} className="btn-linea">Escribir por WhatsApp</a>
          </div>
        </div>
        <figure className="relative min-w-0">
          <Foto n="tapalpa-cabana-golf-sala" eager alt="Estancia con techo de vigas de madera y ventanal al jardín en una cabaña del Tapalpa Country Club" className="aspect-[4/3] w-full rounded-t-[10rem] object-cover md:aspect-[4/5]" />
          <figcaption className="mt-3 text-sm text-papel/65">Cabaña frente al campo de golf, Tapalpa Country Club. En venta en su catálogo.</figcaption>
        </figure>
      </div>
      <div className="border-t border-papel/15">
        <dl className="contenedor grid grid-cols-2 gap-x-6 gap-y-5 py-7 sm:grid-cols-3 lg:grid-cols-5">
          <div><dt className="text-sm text-papel/65">Propiedades publicadas</dt><dd className="font-display text-3xl text-ocre">{num(catalogo.total)}</dd></div>
          {catalogo.tipos.map(([t, n]) => <div key={t}><dt className="text-sm text-papel/65">{t}</dt><dd className="font-display text-3xl">{num(n)}</dd></div>)}
        </dl>
      </div>
    </section>
  );
}

function detalles(p: Propiedad) {
  const d: string[] = [];
  if (p.rec) d.push(`${p.rec} ${p.rec === 1 ? 'recámara' : 'recámaras'}`);
  if (p.banos) d.push(`${p.banos} ${p.banos === 1 ? 'baño' : 'baños'}`);
  if (p.m2) d.push(`${num(p.m2)} m²${p.m2Tipo === 'terreno' ? ' de terreno' : ''}`);
  return d.join(', ');
}

function Tarjeta({ p, grande }: { p: Propiedad; grande: boolean }) {
  const precio = dinero(p.precio, p.moneda) + (p.op === 'Renta' ? ' al mes' : '');
  return (
    <li className={`flex min-w-0 flex-col overflow-hidden rounded-2xl bg-white ${grande ? 'sm:col-span-2' : ''}`}>
      <a href={p.url} className={`relative block overflow-hidden bg-papel-2 ${grande ? 'aspect-[16/10]' : 'aspect-[4/3] lg:aspect-auto lg:min-h-60 lg:flex-1'}`}>
        <Foto n={p.foto} alt={`${p.tipo} en ${p.colonia}, ${p.municipio}`} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
        <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-sm font-medium ${p.op === 'Renta' ? 'bg-roble text-papel' : 'bg-tinta text-papel'}`}>En {p.op.toLowerCase()}</span>
      </a>
      <div className={`flex flex-col p-5 ${grande ? 'flex-1' : ''}`}>
        <p className="text-sm text-gris">{p.colonia}{p.colonia !== p.municipio ? `, ${p.municipio}` : ''}, {p.estado}</p>
        <h3 className={`mt-1 ${grande ? 'text-3xl' : 'text-2xl'}`}>{p.tipo}</h3>
        <p className="mt-2 text-lg font-bold">{precio}</p>
        {detalles(p) && <p className="text-[0.95rem] text-gris">{detalles(p)}</p>}
        <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-4 text-[0.95rem] font-medium">
          <a href={wa(`Hola, Firma Inmobiliaria. Me interesa: ${p.titulo} (${precio}). ${p.url}`)} className="text-ocre-osc underline underline-offset-4 hover:no-underline">Preguntar por WhatsApp</a>
          <a href={p.url} className="underline-offset-4 hover:underline">Ver ficha</a>
        </div>
      </div>
    </li>
  );
}

function Paisajes() {
  const [activo, setActivo] = useState<Paisaje>('ciudad');
  const pa = paisajes.find((x) => x.id === activo)!;
  const lista = propiedades.filter((p) => p.paisaje === activo);
  return (
    <section id="paisajes" className="py-16 md:py-24">
      <div className="contenedor">
        <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
          <h2 className="text-4xl sm:text-5xl">De la Americana al bosque, la playa y la nave industrial</h2>
          <p className="text-gris">Su menú ya separa el catálogo en ciudad, playa, bosque e industria. Aquí está una muestra de cada uno, con el precio y los metros que publica cada ficha.</p>
        </div>
        <div role="tablist" aria-label="Tipo de lugar" className="mt-10 grid grid-cols-4 gap-1 rounded-full bg-papel-2 p-1">
          {paisajes.map((x) => (
            <button key={x.id} role="tab" id={`tab-${x.id}`} aria-selected={activo === x.id} aria-controls="panel-paisaje" onClick={() => setActivo(x.id)}
              className={`rounded-full px-2 py-2.5 text-[0.95rem] font-medium transition-colors ${activo === x.id ? 'bg-tinta text-papel' : 'text-tinta hover:bg-white/60'}`}>{x.nombre}</button>
          ))}
        </div>
        <div id="panel-paisaje" role="tabpanel" aria-labelledby={`tab-${activo}`} className="mt-8">
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
            <p className="font-display text-2xl">{pa.lugares}</p>
            <p className="max-w-xl text-gris">{pa.texto}</p>
          </div>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{lista.map((p, i) => <Tarjeta key={p.url} p={p} grande={i === 0} />)}</ul>
          <p className="mt-6 text-[0.95rem]">
            <span className="text-gris">Más en su catálogo: </span>
            {pa.catalogo.map(([t, h], i) => <span key={h}>{i > 0 && ', '}<a href={h} className="font-medium text-ocre-osc underline underline-offset-4 hover:no-underline">{t}</a></span>)}
          </p>
          {activo === 'playa' && <p className="mt-2 text-[0.95rem] text-gris">También en su menú: {destinosMenu.playa.join(', ')}.</p>}
        </div>
      </div>
    </section>
  );
}

type Ej = { precio: number; col: string; titulo: string; url: string; rec: number; banos: number | null; m2: number | null; op: string };
type Grupo = { municipio: string; tipo: string; rec: number; nVenta: number; nRenta: number; medVenta: number; medRenta: number; anios: number; ejVenta: Ej[]; ejRenta: Ej[] };
const grupos = rc.grupos as Grupo[];
const municipios = ['Guadalajara', 'Zapopan', 'Tlajomulco de Zúñiga'];
const corto = (m: string) => m.replace(' de Zúñiga', '');
const recTxt = (r: number) => (r >= 4 ? '4 o más' : String(r));

function RentarOComprar() {
  const [mun, setMun] = useState('Zapopan');
  const [tipo, setTipo] = useState('Departamento');
  const [rec, setRec] = useState(2);
  const g = useMemo(() => grupos.find((x) => x.municipio === mun && x.tipo === tipo && x.rec === rec), [mun, tipo, rec]);
  const elegir = (m: string, t: string, r: number) => {
    const exacto = grupos.find((x) => x.municipio === m && x.tipo === t && x.rec === r);
    const g2 = exacto ?? grupos.find((x) => x.municipio === m && x.tipo === t) ?? grupos.find((x) => x.municipio === m)!;
    setMun(g2.municipio); setTipo(g2.tipo); setRec(g2.rec);
  };
  const anios = g?.anios ?? 0;
  const casillas = 30;
  const desc = g ? `${g.tipo.toLowerCase()} de ${recTxt(g.rec)} ${g.rec === 1 ? 'recámara' : 'recámaras'} en ${corto(g.municipio)}` : '';
  return (
    <section id="rentar-o-comprar" className="bg-roble py-16 text-papel md:py-24">
      <div className="contenedor">
        <div className="grid gap-6 md:grid-cols-[1.1fr_1fr] md:items-end">
          <h2 className="text-4xl sm:text-5xl">¿Rentar o comprar? Cuántos años de renta cuesta una casa</h2>
          <p className="text-papel/80">Firma renta y vende en la misma zona. Con lo que publica hoy en Guadalajara, Zapopan y Tlajomulco ({num(rc.totalVenta)} en venta y {num(rc.totalRenta)} en renta) comparamos el precio típico de compra con la renta típica de un mismo tipo de vivienda.</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[20rem_1fr]">
          <div className="min-w-0 space-y-6">
            <fieldset><legend className="mb-2 text-sm text-papel/70">Municipio</legend>
              <div className="flex flex-wrap gap-2">{municipios.map((m) => (
                <button key={m} className={`chip ${mun === m ? 'border-ocre bg-ocre text-tinta' : 'border-papel/40 hover:bg-white/10'}`} aria-pressed={mun === m} onClick={() => elegir(m, tipo, rec)}>{corto(m)}</button>))}</div>
            </fieldset>
            <fieldset><legend className="mb-2 text-sm text-papel/70">Tipo</legend>
              <div className="flex flex-wrap gap-2">{['Departamento', 'Casa'].map((t) => {
                const ok = grupos.some((x) => x.municipio === mun && x.tipo === t);
                return <button key={t} disabled={!ok} className={`chip ${tipo === t ? 'border-ocre bg-ocre text-tinta' : 'border-papel/40 hover:bg-white/10'}`} aria-pressed={tipo === t} onClick={() => elegir(mun, t, rec)}>{t}</button>;
              })}</div>
            </fieldset>
            <fieldset><legend className="mb-2 text-sm text-papel/70">Recámaras</legend>
              <div className="flex flex-wrap gap-2">{[1, 2, 3, 4].map((r) => {
                const ok = grupos.some((x) => x.municipio === mun && x.tipo === tipo && x.rec === r);
                return <button key={r} disabled={!ok} className={`chip ${rec === r ? 'border-ocre bg-ocre text-tinta' : 'border-papel/40 hover:bg-white/10'}`} aria-pressed={rec === r} onClick={() => elegir(mun, tipo, r)}>{recTxt(r)}</button>;
              })}</div>
            </fieldset>
            <p className="text-sm text-papel/65">Solo aparecen las combinaciones con al menos 20 propiedades en venta y 10 en renta.</p>
          </div>

          {g && (
            <div className="min-w-0 rounded-3xl bg-tinta/35 p-6 sm:p-8" aria-live="polite">
              <p className="text-papel/75">Comprar un {desc} cuesta lo mismo que</p>
              <p className="mt-1 font-display text-6xl leading-none text-ocre sm:text-7xl">{anios.toLocaleString('es-MX')} <span className="text-4xl sm:text-5xl">años de renta</span></p>
              <div className="mt-6 grid grid-cols-10 gap-1.5" role="img" aria-label={`${anios} de ${casillas} casillas llenas; cada casilla es un año de renta`}>
                {Array.from({ length: casillas }, (_, i) => {
                  const lleno = Math.max(0, Math.min(1, anios - i));
                  return (
                    <span key={i} className="relative block h-7 overflow-hidden rounded-[0.35rem] border border-papel/25 sm:h-9">
                      <span className="absolute inset-y-0 left-0 bg-ocre transition-[width] duration-500" style={{ width: `${lleno * 100}%` }} />
                    </span>
                  );
                })}
              </div>
              <div className="mt-1.5 flex justify-between text-xs text-papel/60"><span>1 año</span><span>10</span><span>20</span><span>30 años</span></div>
              <dl className="mt-7 grid gap-5 sm:grid-cols-3">
                <div><dt className="text-sm text-papel/70">Precio típico de compra</dt><dd className="mt-1 text-xl font-bold">{millones(g.medVenta)}</dd><dd className="text-sm text-papel/60">mediana de {num(g.nVenta)} en venta</dd></div>
                <div><dt className="text-sm text-papel/70">Renta típica</dt><dd className="mt-1 text-xl font-bold">{dinero(g.medRenta)} al mes</dd><dd className="text-sm text-papel/60">mediana de {num(g.nRenta)} en renta</dd></div>
                <div><dt className="text-sm text-papel/70">Un año de renta equivale a</dt><dd className="mt-1 text-xl font-bold">{(100 / anios).toLocaleString('es-MX', { maximumFractionDigits: 1 })} % del precio</dd><dd className="text-sm text-papel/60">antes de gastos e impuestos</dd></div>
              </dl>
              <div className="mt-7 grid gap-6 border-t border-papel/15 pt-6 sm:grid-cols-2">
                {([['Cerca del precio típico, en venta', g.ejVenta, ''], ['Cerca de la renta típica', g.ejRenta, ' al mes']] as [string, Ej[], string][]).map(([t, L, suf]) => (
                  <div key={t} className="min-w-0">
                    <p className="text-sm text-papel/70">{t}</p>
                    <ul className="mt-2 space-y-2">{L.map((e) => (
                      <li key={e.url} className="min-w-0"><a href={e.url} className="group block"><span className="font-bold">{dinero(e.precio)}{suf}</span> <span className="text-papel/75 group-hover:underline">{e.col}{e.m2 ? <span className="whitespace-nowrap">, {num(e.m2)} m²</span> : ''}</span></a></li>
                    ))}</ul>
                  </div>
                ))}
              </div>
              <a href={wa(`Hola, Firma Inmobiliaria. Estoy entre rentar y comprar un ${desc}. ¿Me ayudan a comparar opciones?`)} className="btn-ocre mt-8">Comparar opciones con un asesor</a>
            </div>
          )}
        </div>
        <p className="mt-8 max-w-3xl text-sm text-papel/65">Cálculo del estudio con las medianas de las propiedades en pesos publicadas en firmainmobiliaria.com el 12 de octubre de 2026 (venta y preventa contra renta mensual; casas incluye casas en condominio). No incluye enganche, crédito, mantenimiento ni predial, y no es un avalúo.</p>
      </div>
    </section>
  );
}

function Nosotros() {
  return (
    <section id="nosotros" className="py-16 md:py-24">
      <div className="contenedor grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div className="grid min-w-0 grid-cols-2 gap-3">
          <Foto n="tapalpa-cabana-golf" alt="Cabaña de dos pisos con jardín en el Tapalpa Country Club" className="col-span-2 aspect-[16/10] w-full rounded-2xl object-cover" />
          <Foto n="bacalar-casa" alt="Casa blanca con jardín frente a la laguna de Bacalar" className="aspect-square w-full rounded-2xl object-cover" />
          <Foto n="el-salto-bodega-aeropuerto" alt="Bodega industrial frente al aeropuerto de Guadalajara, en El Salto" className="aspect-square w-full rounded-2xl object-cover" />
        </div>
        <div className="min-w-0">
          <h2 className="text-4xl sm:text-5xl">Acerca de Firma Inmobiliaria</h2>
          <div className="mt-6 space-y-4 text-lg">{acerca.map((t) => <p key={t}>{t}</p>)}</div>
          <ul className="mt-8 flex flex-wrap gap-2">{servicios.map((s) => <li key={s} className="rounded-full border border-tinta/25 px-4 py-2 text-[0.95rem]">{s}</li>)}</ul>
          <p className="mt-8 text-gris">Además de la zona metropolitana, su menú lleva al bosque ({destinosMenu.bosque.join(' y ')}), a la playa y a la industria ({destinosMenu.industria.join(', ').toLowerCase()}), y su catálogo publica {num(catalogo.eeuu)} propiedades en Estados Unidos.</p>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="bg-tinta py-16 text-papel md:py-24">
      <div className="contenedor grid gap-10 md:grid-cols-[1.1fr_1fr]">
        <div className="min-w-0">
          <h2 className="text-4xl sm:text-5xl">Platiquemos de lo que buscas</h2>
          <p className="mt-5 max-w-lg text-papel/80">Si necesitas asistencia o tienes preguntas, siéntete libre de contactarnos.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa('Hola, Firma Inmobiliaria. Quisiera información sobre una propiedad.')} className="btn-ocre">WhatsApp {negocio.telefono}</a>
            <a href={negocio.telefonoHref} className="btn-linea">Llamar</a>
          </div>
        </div>
        <dl className="min-w-0 space-y-6">
          <div><dt className="text-sm text-papel/65">Oficina</dt><dd className="mt-1 text-xl">{negocio.direccion}<br />{negocio.cp} {negocio.ciudad}</dd>
            <dd className="mt-2"><a href={negocio.mapa} className="font-medium text-ocre underline underline-offset-4 hover:no-underline">Cómo llegar en Google Maps</a></dd></div>
          <div><dt className="text-sm text-papel/65">Teléfono y WhatsApp</dt><dd className="mt-1 text-xl"><a href={negocio.telefonoHref} className="hover:text-ocre">{negocio.telefono}</a></dd></div>
          <div><dt className="text-sm text-papel/65">Catálogo completo</dt><dd className="mt-1"><a href={`${negocio.sitio}/properties`} className="font-medium text-ocre underline underline-offset-4 hover:no-underline">Propiedades en venta</a> · <a href={`${negocio.sitio}/rentals`} className="font-medium text-ocre underline underline-offset-4 hover:no-underline">en renta</a></dd></div>
        </dl>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="border-t border-papel/10 bg-tinta pb-24 pt-8 text-sm text-papel/60 md:pb-10">
      <div className="contenedor flex flex-wrap items-center justify-between gap-4">
        <img src={`${base}logo-blanco.png`} alt="" width={200} height={115} className="h-10 w-auto opacity-80" />
        <p>Firma Inmobiliaria · {negocio.direccion}, {negocio.ciudad}</p>
      </div>
    </footer>
  );
}

function BarraMovil() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-papel/15 bg-tinta text-center text-sm font-medium text-papel md:hidden">
      <a href={wa('Hola, Firma Inmobiliaria. Quisiera información sobre una propiedad.')} className="bg-ocre py-4 text-tinta">WhatsApp</a>
      <a href={negocio.telefonoHref} className="py-4">Llamar</a>
      <a href={negocio.mapa} className="py-4">Cómo llegar</a>
    </div>
  );
}

export default function App() {
  return (
    <>
      <a href="#paisajes" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-papel focus:p-3">Ir al contenido</a>
      <Encabezado />
      <main>
        <Portada />
        <Paisajes />
        <RentarOComprar />
        <Nosotros />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
