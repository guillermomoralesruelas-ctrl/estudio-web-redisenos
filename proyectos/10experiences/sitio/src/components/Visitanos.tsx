import { negocio, sedes } from '../data/content';
import { enlaceWhatsApp, mensajeGeneral } from '../lib/whatsapp';
import { useReserva } from '../lib/reserva';
import { IconoWhatsApp } from './Iconos';

export default function Visitanos() {
  const abrir = useReserva();
  return (
    <>
      <section id="visitanos" className="border-t border-crema/10 bg-noche-2 py-20 md:py-28" aria-labelledby="vis-titulo">
        <div className="contenedor grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <h2 id="vis-titulo" className="text-5xl md:text-7xl">Tu lugar en la mesa te espera</h2>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={() => abrir()} className="btn-primario">Reservar mi lugar</button>
              <a href={enlaceWhatsApp(mensajeGeneral)} target="_blank" rel="noopener noreferrer" className="btn-linea">
                <IconoWhatsApp /> Escribir por WhatsApp
              </a>
            </div>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <h3 className="font-display text-3xl text-champan">Dónde estamos</h3>
            <p className="mt-2 text-crema/75">{negocio.ciudad}. Cada horario tiene su sede; te enviamos la ubicación al confirmar.</p>
            <ul className="mt-6 divide-y divide-crema/10 border-y border-crema/10">
              {sedes.map((s) => (
                <li key={s.nombre} className="flex flex-wrap items-center justify-between gap-3 py-4">
                  <span>{s.nombre}</span>
                  <a href={s.mapa} target="_blank" rel="noopener noreferrer" className="enlace text-[0.95rem]">Cómo llegar</a>
                </li>
              ))}
            </ul>
            <h3 className="mt-10 font-display text-3xl text-champan">Contacto</h3>
            <ul className="mt-3 space-y-2">
              <li><a className="enlace" href={`https://wa.me/${negocio.whatsapp}`} target="_blank" rel="noopener noreferrer">{negocio.telefonoVisible}</a> (WhatsApp y llamadas)</li>
              <li><a className="enlace" href={`mailto:${negocio.email}`}>{negocio.email}</a></li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="pb-28 pt-12 lg:pb-12">
        <div className="contenedor flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <img src={negocio.logoFooter} alt="10 Experiences" width={211} height={211} loading="lazy" className="h-16 w-auto" />
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem]">
            {negocio.redes.map((r) => (
              <li key={r.nombre}><a href={r.url} target="_blank" rel="noopener noreferrer" className="text-crema/70 hover:text-champan">{r.nombre}</a></li>
            ))}
          </ul>
        </div>
        <div className="contenedor mt-8 flex flex-col gap-2 border-t border-crema/10 pt-6 text-sm text-crema/50 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} 10 Experiences. Todos los derechos reservados.</p>
          <p>Aceptamos tarjetas de débito y crédito Visa, Mastercard y American Express.</p>
        </div>
      </footer>
    </>
  );
}
