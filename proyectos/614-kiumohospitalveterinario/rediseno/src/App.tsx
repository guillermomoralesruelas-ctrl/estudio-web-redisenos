import { useMemo, useState } from 'react';
import {
  checklist, equipo, foto, fotos, guadalupe, horarios, hospital, marcas, negocio, spaAdicionales, sucursales, testimonios, wa, waGeneral,
  type Especie, type Foto, type Sucursal,
} from './data/content';

function IconoWa({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.2.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}

function IconoTel({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 3h4l2 5-3 2a11 11 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A18 18 0 0 1 3 5a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

function Img({ f, className = '', loading = 'lazy' }: { f: Foto; className?: string; loading?: 'lazy' | 'eager' }) {
  return <img src={f.src} width={f.w} height={f.h} alt={f.alt} loading={loading} decoding="async" className={className} />;
}

function Marca({ claro = false }: { claro?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <img src={foto('simbolo.webp')} alt="" width={36} height={36} className="h-9 w-9" />
      <span className={`text-2xl font-extrabold tracking-tight ${claro ? 'text-white' : 'text-naranja-honda'}`}>Kiumo</span>
      <span className={`hidden text-[0.7rem] font-semibold uppercase leading-tight tracking-[0.12em] sm:block ${claro ? 'text-white/75' : 'text-marino/70'}`}>Hospital<br />veterinario</span>
    </span>
  );
}

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-marino/10 bg-crema/95 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <a href="#inicio" aria-label="Kiumo Hospital Veterinario, inicio"><Marca /></a>
        <nav aria-label="Principal" className="hidden items-center gap-6 text-[0.95rem] font-semibold text-marino md:flex">
          <a href="#checklist" className="hover:text-naranja-honda">Tu checklist</a>
          <a href="#hospital" className="hover:text-naranja-honda">Hospital</a>
          <a href="#spa" className="hover:text-naranja-honda">Spa</a>
          <a href="#sucursales" className="hover:text-naranja-honda">Sucursales</a>
        </nav>
        <a href={`tel:${guadalupe.telLink}`} className="btn !min-h-[40px] !px-4 !py-2 text-sm"><IconoTel className="h-4 w-4" /><span className="hidden sm:inline">Urgencias 24 h</span><span className="sm:hidden">24 h</span></a>
      </div>
    </header>
  );
}

function Portada() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="contenedor grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_1fr] lg:py-20">
        <div className="min-w-0">
          <p className="antetitulo">Culiacán, Sinaloa, desde hace más de 25 años</p>
          <h1 className="mt-4 text-[2.5rem] sm:text-6xl">Hospital veterinario y spa para perros y gatos en Culiacán</h1>
          <p className="mt-5 max-w-xl text-lg">Tres sucursales y Kiumo Check en La Conquista. La Sucursal Guadalupe es hospital veterinario abierto las 24 horas.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waGeneral} className="btn" target="_blank" rel="noopener"><IconoWa /> Escribir por WhatsApp</a>
            <a href="#checklist" className="btn-linea">Arma tu checklist</a>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-marino/15 pt-6">
            <div><dt className="text-sm">Experiencia</dt><dd className="text-xl font-extrabold text-marino sm:text-2xl">25+ años</dd></div>
            <div><dt className="text-sm">Guadalupe</dt><dd className="text-xl font-extrabold text-marino sm:text-2xl">24 horas</dd></div>
            <div><dt className="text-sm">Farmacia</dt><dd className="text-xl font-extrabold text-marino sm:text-2xl">+1000</dd></div>
          </dl>
        </div>
        <div className="relative min-w-0">
          <span aria-hidden="true" className="tri absolute -left-4 top-6 h-16 w-12 bg-naranja" />
          <span aria-hidden="true" className="tri-b absolute -bottom-4 right-8 h-12 w-16 bg-azul" />
          <Img f={fotos.fachada} loading="eager" className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-xl" />
          <p className="relative mt-3 text-sm">Sucursal Guadalupe, Blvd. Ciudades Hermanas #130.</p>
        </div>
      </div>
    </section>
  );
}

const coloresGrupo: Record<string, string> = { azul: 'bg-azul', naranja: 'bg-naranja', amarillo: 'bg-amarillo', marino: 'bg-marino' };

function Casilla({ marcada, color }: { marcada: boolean; color: string }) {
  return (
    <span aria-hidden="true" className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-md border-2 ${marcada ? `${coloresGrupo[color]} border-transparent` : 'border-marino/30 bg-white'}`}>
      {marcada && (
        <svg viewBox="0 0 24 24" className={`palomita h-5 w-5 ${color === 'marino' ? 'text-amarillo' : 'text-marino'}`} fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
          <path pathLength={1} d="M5 12.5l4.5 4.5L19 7" />
        </svg>
      )}
    </span>
  );
}

function Checklist() {
  const [especie, setEspecie] = useState<Especie>('perro');
  const [nombre, setNombre] = useState('');
  const [marcados, setMarcados] = useState<string[]>(['consulta', 'vacunas']);
  const [sucursalId, setSucursalId] = useState<Sucursal['id']>('guadalupe');
  const sucursal = sucursales.find((s) => s.id === sucursalId)!;

  const visibles = useMemo(() => checklist.map((g) => ({ ...g, items: g.items.filter((i) => !i.solo || i.solo === especie) })), [especie]);
  const elegidos = visibles.flatMap((g) => g.items.filter((i) => marcados.includes(i.id)));
  const total = visibles.reduce((n, g) => n + g.items.length, 0);
  const conSpa = elegidos.some((i) => visibles.find((g) => g.id === 'spa')!.items.includes(i));

  const alternar = (id: string) => setMarcados((m) => (m.includes(id) ? m.filter((x) => x !== id) : [...m, id]));
  const quien = `mi ${especie}${nombre.trim() ? ` ${nombre.trim()}` : ''}`;
  const mensaje = elegidos.length
    ? `Hola, quiero comunicarme con Kiumo ${sucursal.nombre}. Esto es lo que necesita ${quien}:\n${elegidos.map((i) => `- ${i.texto}`).join('\n')}\n¿Me ayudan a agendar?`
    : `Hola, quiero comunicarme con Kiumo ${sucursal.nombre}.`;

  return (
    <section id="checklist" className="bg-white py-20 sm:py-24">
      <div className="contenedor">
        <div className="max-w-2xl">
          <p className="antetitulo">Kiumo Check</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">El checklist de tu mascota</h2>
          <p className="mt-4 text-lg">Palomea lo que necesita tu perro o tu gato, elige la sucursal y mándalo por WhatsApp ya escrito. Así llegas con todo en una sola visita.</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.35fr_1fr]">
          <div className="min-w-0 rounded-3xl border-2 border-marino/10 bg-crema p-5 sm:p-8">
            <div className="flex flex-wrap items-end gap-4">
              <fieldset className="min-w-0">
                <legend className="text-sm font-semibold text-marino">¿Para quién es?</legend>
                <div className="mt-2 inline-flex rounded-xl border-2 border-marino/15 bg-white p-1">
                  {(['perro', 'gato'] as const).map((e) => (
                    <button key={e} type="button" aria-pressed={especie === e} onClick={() => setEspecie(e)}
                      className={`min-h-[40px] rounded-lg px-5 text-[0.95rem] font-semibold capitalize ${especie === e ? 'bg-marino text-white' : 'text-marino hover:bg-crema'}`}>
                      {e}
                    </button>
                  ))}
                </div>
              </fieldset>
              <label className="min-w-0 flex-1 text-sm font-semibold text-marino">
                Su nombre (opcional)
                <input value={nombre} onChange={(e) => setNombre(e.target.value.slice(0, 30))} placeholder={especie === 'perro' ? 'Ej. Rocky' : 'Ej. Michi'}
                  className="mt-2 block min-h-[48px] w-full rounded-xl border-2 border-marino/15 bg-white px-4 text-base font-normal text-marino placeholder:text-texto/70 focus:border-azul-hondo" />
              </label>
            </div>

            <div className="mt-8 grid gap-7 sm:grid-cols-2">
              {visibles.map((g) => (
                <fieldset key={g.id} className="min-w-0">
                  <legend className="flex items-center gap-2 text-lg font-extrabold text-marino">
                    <span aria-hidden="true" className={`tri h-4 w-3 ${coloresGrupo[g.color]}`} />{g.titulo}
                  </legend>
                  <ul className="mt-3 space-y-2">
                    {g.items.map((i) => {
                      const m = marcados.includes(i.id);
                      return (
                        <li key={i.id}>
                          <button type="button" role="checkbox" aria-checked={m} onClick={() => alternar(i.id)}
                            className={`flex w-full items-start gap-3 rounded-xl px-3 py-2 text-left transition-colors ${m ? 'bg-white shadow-sm' : 'hover:bg-white/70'}`}>
                            <Casilla marcada={m} color={g.color} />
                            <span className="min-w-0">
                              <span className="block font-semibold text-marino">{i.texto}</span>
                              <span className="block text-sm">{i.detalle}</span>
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </fieldset>
              ))}
            </div>
          </div>

          <aside aria-label="Tu lista" className="noche min-w-0 self-start rounded-3xl bg-marino p-6 text-white/85 sm:p-8 lg:sticky lg:top-24">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-2xl">Tu lista</h3>
              <p className="text-sm" aria-live="polite"><span className="text-xl font-extrabold text-amarillo">{elegidos.length}</span> de {total}</p>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
              <div className="h-full rounded-full bg-amarillo transition-[width] duration-300" style={{ width: `${(elegidos.length / total) * 100}%` }} />
            </div>
            {elegidos.length ? (
              <ul className="mt-5 space-y-1.5 text-[0.95rem]">
                {elegidos.map((i) => <li key={i.id} className="aparece flex gap-2"><span aria-hidden="true" className="text-amarillo">✓</span>{i.texto}</li>)}
              </ul>
            ) : (
              <p className="mt-5">Aún no palomeas nada.</p>
            )}
            {especie === 'gato' && conSpa && (
              <p className="aparece mt-5 rounded-xl bg-white/10 p-4 text-sm"><strong className="text-amarillo">Martes de gatos.</strong> Los gatos se ponen nerviosos a la hora del baño, por eso Kiumo destina un día especial solo para ellos.</p>
            )}

            <label className="mt-6 block text-sm font-semibold text-white">
              Sucursal
              <select value={sucursalId} onChange={(e) => setSucursalId(e.target.value as Sucursal['id'])}
                className="mt-2 block min-h-[48px] w-full rounded-xl border-2 border-white/20 bg-marino-suave px-3 text-base font-normal text-white">
                {sucursales.map((s) => <option key={s.id} value={s.id}>{s.nombre}</option>)}
              </select>
            </label>
            <p className="mt-2 text-sm">{sucursal.direccion}. <a href={sucursal.mapa} className="enlace" target="_blank" rel="noopener">Cómo llegar</a></p>

            <a href={wa(sucursal.whatsapp, mensaje)} className="btn mt-6 w-full" target="_blank" rel="noopener"><IconoWa /> Enviar a {sucursal.corto}</a>
            <p className="mt-5 border-t border-white/10 pt-5 text-sm">¿Es una urgencia? No esperes respuesta por WhatsApp: llama a la Sucursal Guadalupe, abierta 24 horas, al <a href={`tel:${guadalupe.telLink}`} className="enlace whitespace-nowrap">{guadalupe.tel}</a>.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Hospital() {
  return (
    <section id="hospital" className="py-20 sm:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div className="min-w-0">
                    <h2 className="mt-3 text-4xl sm:text-5xl">Listo para las emergencias que pasan día a día</h2>
          <p className="mt-4 text-lg">Equipo para diagnosticar, tratar y cuidar a tu mascota, y un equipo de médicos veterinarios que combina experiencia con un trato cálido y respetuoso.</p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            <Img f={fotos.quirofano} className="col-span-2 aspect-[16/9] w-full rounded-2xl object-cover" />
            <Img f={fotos.ultrasonido} className="aspect-square w-full rounded-2xl object-cover" />
            <Img f={fotos.consulta} className="aspect-square w-full rounded-2xl object-cover" />
          </div>
        </div>
        <ul className="grid min-w-0 content-start gap-x-8 sm:grid-cols-2">
          {hospital.map((h, n) => (
            <li key={h.titulo} className="border-t-2 border-marino/10 py-5">
              <h3 className="flex items-center gap-2 text-xl"><span aria-hidden="true" className={`tri inline-block h-4 w-3 ${['bg-azul', 'bg-naranja', 'bg-amarillo'][n % 3]}`} />{h.titulo}</h3>
              <p className="mt-2 text-[0.98rem]">{h.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Spa() {
  return (
    <section id="spa" className="bg-white py-20 sm:py-24">
      <div className="contenedor grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div className="min-w-0">
                    <h2 className="mt-3 text-4xl sm:text-5xl">Piel y pelaje cuidados, sin estrés</h2>
          <p className="mt-4 text-lg">El spa no es solo estética: cuidar la piel y el pelaje previene infecciones y permite detectar anomalías a tiempo. Sus groomers certificados atienden todas las razas, de las más pequeñas a las más grandes.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-crema p-5">
              <h3 className="text-xl">Perros</h3>
              <p className="mt-2 text-[0.98rem]"><strong className="text-marino">Baño:</strong> shampoo hipoalergénico, drenado de glándulas, secado, cepillado, corte de uñas, limpieza básica de oídos y perfume.</p>
              <p className="mt-2 text-[0.98rem]"><strong className="text-marino">Servicio completo:</strong> lo mismo más corte de pelo completo y limpieza de oídos.</p>
            </div>
            <div className="rounded-2xl bg-crema p-5">
              <h3 className="text-xl">Gatos</h3>
              <p className="mt-2 text-[0.98rem]"><strong className="text-marino">Baño:</strong> shampoo hipoalergénico, drenado de glándulas, secado, cepillado, corte de uñas, limpieza básica de oídos y perfume.</p>
              <p className="mt-2 text-[0.98rem]"><strong className="text-marino">Martes de gatos:</strong> un día solo para ellos, para una visita libre de estrés.</p>
            </div>
          </div>
          <p className="mt-4 text-sm">En razas de pelo largo, el baño y el servicio completo incluyen redondeo de patas y corte higiénico.</p>
          <h3 className="mt-8 text-lg">Servicios adicionales</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {spaAdicionales.map((s) => <li key={s} className="rounded-full border-2 border-marino/10 px-3 py-1 text-sm font-semibold text-marino">{s}</li>)}
          </ul>
        </div>
        <div className="grid min-w-0 grid-cols-2 gap-3 self-start">
          <Img f={fotos.spa} className="col-span-2 aspect-[3/2] w-full rounded-2xl object-cover" />
          <Img f={fotos.pomerania} className="aspect-[3/4] w-full rounded-2xl object-cover" />
          <Img f={fotos.gato} className="aspect-[3/4] w-full rounded-2xl object-cover" />
        </div>
      </div>
    </section>
  );
}

function Tienda() {
  return (
    <section id="tienda" className="noche relative overflow-hidden bg-marino py-20 text-white/85 sm:py-24">
      <span aria-hidden="true" className="tri absolute -right-6 top-10 h-40 w-28 bg-naranja/25" />
      <div className="contenedor relative grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div className="grid min-w-0 grid-cols-[1fr_0.8fr] items-end gap-3">
          <Img f={fotos.bulldog} className="aspect-[3/4] w-full rounded-2xl object-cover" />
          <Img f={fotos.farmacia} className="aspect-[3/4] w-full rounded-2xl object-cover" />
        </div>
        <div className="min-w-0">
                    <h2 className="mt-3 text-4xl sm:text-5xl">Todo para tu mascota, en un solo lugar</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            <li><h3 className="text-lg">Croquetas</h3><p className="mt-1 text-[0.98rem]">Alimento premium, super premium, holístico y de prescripción, con entrega a domicilio.</p></li>
            <li><h3 className="text-lg">Farmacia</h3><p className="mt-1 text-[0.98rem]">Más de 1000 medicamentos y productos esenciales.</p></li>
            <li><h3 className="text-lg">Accesorios</h3><p className="mt-1 text-[0.98rem]">Juguetes, premios, transportadoras, correas, perfumes, casas y tapetes.</p></li>
            <li><h3 className="text-lg">Cuidados de día</h3><p className="mt-1 text-[0.98rem]">Guardería, medicina preventiva y recolección de tu mascota para servicios y tratamientos.</p></li>
          </ul>
          <p className="mt-8 text-sm font-semibold text-white">Marcas que manejan</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {marcas.map((m) => <li key={m} className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white">{m}</li>)}
          </ul>
          <a href={wa(guadalupe.whatsapp, 'Hola, quiero hacer un pedido de croquetas a domicilio.')} className="btn mt-8" target="_blank" rel="noopener"><IconoWa /> Pedir croquetas a domicilio</a>
        </div>
      </div>
    </section>
  );
}

function Equipo() {
  return (
    <section id="equipo" className="py-20 sm:py-24">
      <div className="contenedor">
        <div className="max-w-2xl">
                    <h2 className="mt-3 text-4xl sm:text-5xl">Creamos lazos de lealtad<sup className="text-lg">®</sup></h2>
          <p className="mt-4 text-lg">Un hospital veterinario sinaloense que busca siempre integrarse de médicos veterinarios altamente capacitados para atender y tratar a tus mascotas.</p>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {equipo.map((e, n) => (
            <li key={e.src} className={`overflow-hidden rounded-3xl ${['bg-amarillo', 'bg-azul', 'bg-naranja', 'bg-amarillo'][n]}`}>
              <Img f={e} className="aspect-[6/7] w-full object-contain object-bottom" />
            </li>
          ))}
        </ul>
        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonios.map((t) => (
            <li key={t.autor} className="rounded-2xl border-2 border-marino/10 bg-white p-6">
              <blockquote className="text-[0.98rem]">“{t.texto}”</blockquote>
              <p className="mt-4 font-semibold text-marino">{t.autor}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Sucursales() {
  return (
    <section id="sucursales" className="bg-white py-20 sm:py-24">
      <div className="contenedor">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
                        <h2 className="mt-3 text-4xl sm:text-5xl">Visítanos en la que te quede más cerca</h2>
          </div>
          <dl className="rounded-2xl bg-crema p-5 text-[0.95rem]">
            {horarios.map((h) => <div key={h.dias} className="flex justify-between gap-6"><dt className="font-semibold text-marino">{h.dias}</dt><dd>{h.horas}</dd></div>)}
            <div className="flex justify-between gap-6"><dt className="font-semibold text-marino">Sucursal Guadalupe</dt><dd>Abierta 24 horas</dd></div>
          </dl>
        </div>
        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {sucursales.map((s) => (
            <li key={s.id} className={`flex min-w-0 flex-col rounded-3xl p-6 ${s.id === 'guadalupe' ? 'border-2 border-naranja bg-crema' : 'border-2 border-marino/10'}`}>
              <h3 className="text-2xl">{s.nombre}</h3>
              {s.nota && <p className="mt-1 font-semibold text-naranja-honda">{s.nota}</p>}
              <p className="mt-3">{s.direccion}, Culiacán.</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <a href={wa(s.whatsapp, `Hola, quiero comunicarme con Kiumo ${s.nombre}.`)} className="btn !min-h-[42px] !py-2 text-sm" target="_blank" rel="noopener"><IconoWa className="h-4 w-4" /> {s.whatsappVisible}</a>
                <a href={`tel:${s.telLink}`} className="btn-linea !min-h-[42px] !py-2 text-sm"><IconoTel className="h-4 w-4" /> {s.tel}</a>
                <a href={s.mapa} className="btn-linea !min-h-[42px] !py-2 text-sm" target="_blank" rel="noopener">Google Maps</a>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-[0.95rem]">Correo: <a href={`mailto:${negocio.correo}`} className="enlace">{negocio.correo}</a></p>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="noche bg-marino pb-28 pt-12 text-sm text-white/75 md:pb-10">
      <div className="contenedor flex flex-wrap items-center justify-between gap-6">
        <Marca claro />
        <ul className="flex flex-wrap gap-5">
          <li><a href={negocio.facebook} className="hover:text-amarillo" target="_blank" rel="noopener">Facebook</a></li>
          <li><a href={negocio.instagram} className="hover:text-amarillo" target="_blank" rel="noopener">Instagram</a></li>
          <li><a href={negocio.tiktok} className="hover:text-amarillo" target="_blank" rel="noopener">TikTok</a></li>
          <li><a href={negocio.youtube} className="hover:text-amarillo" target="_blank" rel="noopener">YouTube</a></li>
          <li><a href={negocio.instagramCheck} className="hover:text-amarillo" target="_blank" rel="noopener">@kiumocheck</a></li>
        </ul>
      </div>
      <p className="contenedor mt-6">Hospital veterinario, spa y tienda para perros y gatos en Culiacán, Sinaloa.</p>
    </footer>
  );
}

function BarraMovil() {
  return (
    <nav aria-label="Acciones rápidas" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-marino text-[0.8rem] font-semibold text-white md:hidden">
      <a href={waGeneral} className="flex flex-col items-center gap-1 bg-naranja py-3 text-marino" target="_blank" rel="noopener"><IconoWa />WhatsApp</a>
      <a href={`tel:${guadalupe.telLink}`} className="flex flex-col items-center gap-1 py-3"><IconoTel />Llamar 24 h</a>
      <a href={guadalupe.mapa} className="flex flex-col items-center gap-1 py-3" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>
        Cómo llegar
      </a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <a href="#checklist" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-amarillo focus:px-4 focus:py-2 focus:text-marino">Ir al checklist</a>
      <Encabezado />
      <main>
        <Portada />
        <Checklist />
        <Hospital />
        <Spa />
        <Tienda />
        <Equipo />
        <Sucursales />
      </main>
      <Pie />
      <BarraMovil />
    </>
  );
}
