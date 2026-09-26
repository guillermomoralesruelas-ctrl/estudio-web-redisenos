import { useEffect, useState } from 'react';
import { nav, negocio } from '../data/content';
import { useReserva } from '../lib/reserva';
import { IconoCerrar, IconoMenu } from './Iconos';

export default function Header() {
  const abrir = useReserva();
  const [solido, setSolido] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolido(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menu ? 'hidden' : '';
  }, [menu]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        solido || menu ? 'bg-noche/95 backdrop-blur-sm border-b border-crema/10' : 'bg-gradient-to-b from-noche/70 to-transparent'
      }`}
    >
      <div className="contenedor flex h-16 items-center justify-between gap-6 md:h-20">
        <a href="#inicio" className="shrink-0" aria-label="10 Experiences, inicio">
          <img src={negocio.logo} alt="10 Experiences" width={125} height={108} className="h-11 w-auto md:h-14" />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-[0.95rem]">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-crema/85 transition-colors hover:text-champan">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button type="button" onClick={() => abrir()} className="btn-primario hidden !py-2.5 sm:inline-flex">
            Reservar
          </button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center text-crema lg:hidden"
            aria-expanded={menu}
            aria-controls="menu-movil"
            aria-label={menu ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenu((m) => !m)}
          >
            {menu ? <IconoCerrar /> : <IconoMenu />}
          </button>
        </div>
      </div>

      {menu && (
        <nav id="menu-movil" aria-label="Menú" className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-crema/10 bg-noche lg:hidden">
          <ul className="contenedor flex flex-col gap-1 py-8">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setMenu(false)} className="block py-3 font-display text-4xl text-crema">
                  {n.label}
                </a>
              </li>
            ))}
            <li className="pt-6">
              <button type="button" className="btn-primario w-full" onClick={() => { setMenu(false); abrir(); }}>
                Reservar
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
