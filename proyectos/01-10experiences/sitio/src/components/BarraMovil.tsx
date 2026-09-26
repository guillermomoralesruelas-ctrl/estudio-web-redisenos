import { enlaceWhatsApp, mensajeGeneral } from '../lib/whatsapp';
import { useReserva } from '../lib/reserva';
import { IconoWhatsApp } from './Iconos';

// Barra fija inferior en móvil y tablet: reservar siempre a un toque.
export default function BarraMovil() {
  const abrir = useReserva();
  return (
    <>
    <a
      href={enlaceWhatsApp(mensajeGeneral)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-30 hidden size-14 items-center justify-center rounded-full bg-vela text-noche shadow-lg transition-colors hover:bg-vela-claro lg:inline-flex"
      aria-label="Escribir por WhatsApp"
    >
      <IconoWhatsApp className="size-7" />
    </a>
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-crema/10 bg-noche/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-sm lg:hidden">
      <div className="flex gap-3">
        <button type="button" onClick={() => abrir()} className="btn-primario flex-1">Reservar</button>
        <a
          href={enlaceWhatsApp(mensajeGeneral)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-linea !px-4"
          aria-label="Escribir por WhatsApp"
        >
          <IconoWhatsApp className="size-6" />
        </a>
      </div>
    </div>
    </>
  );
}
