import { hero, negocio } from '../data/content';
import { useReserva } from '../lib/reserva';
import { Estrellas } from './Iconos';

export default function Hero() {
  const abrir = useReserva();
  return (
    <section id="inicio" className="relative isolate flex min-h-[100svh] items-end overflow-hidden">
      <img
        src={hero.imagen}
        alt={hero.alt}
        width={1920}
        height={1200}
        fetchPriority="high"
        className="absolute inset-0 -z-10 size-full object-cover object-[60%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-noche via-noche/55 to-noche/10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-noche/80 via-noche/20 to-transparent" />

      <div className="contenedor pb-28 pt-32 md:pb-24">
        <div className="max-w-2xl">
          <h1 className="text-[3.1rem] leading-[0.98] text-crema sm:text-7xl lg:text-[5.5rem]">{hero.titulo}</h1>
          <p className="mt-6 max-w-xl text-lg text-crema/85 md:text-xl">{hero.subtitulo}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button type="button" className="btn-primario" onClick={() => abrir()}>
              Reservar mi lugar
            </button>
            <a href="#experiencias" className="btn-linea">
              Ver experiencias y precios
            </a>
          </div>
          <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-crema/75">
            <Estrellas />
            <span>
              {negocio.resenas} reseñas de 5 estrellas en {negocio.plataformas}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
