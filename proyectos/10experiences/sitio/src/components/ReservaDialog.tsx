import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { experiencias, negocio, reserva, type ExperienciaId } from '../data/content';
import { enlaceWhatsApp } from '../lib/whatsapp';
import { IconoCerrar, IconoWhatsApp } from './Iconos';

type Props = {
  abierta: boolean;
  onCerrar: () => void;
  inicial: { exp?: ExperienciaId; horario?: string };
};

const hoyISO = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};
const aFecha = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d);
};
const fechaLarga = (iso: string) =>
  aFecha(iso).toLocaleDateString('es-MX', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

export default function ReservaDialog({ abierta, onCerrar, inicial }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const [expId, setExpId] = useState<ExperienciaId>('original');
  const [horario, setHorario] = useState('');
  const [fecha, setFecha] = useState('');
  const [invitados, setInvitados] = useState(2);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [notas, setNotas] = useState('');
  const [errores, setErrores] = useState<Record<string, string>>({});
  const [enviado, setEnviado] = useState(false);

  const exp = experiencias.find((e) => e.id === expId)!;
  const total = exp.precio * invitados;

  // Abrir / cerrar el <dialog> nativo y precargar la selección
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (abierta) {
      setExpId(inicial.exp ?? 'original');
      setHorario(inicial.horario ?? '');
      setErrores({});
      setEnviado(false);
      if (!d.open) d.showModal();
    } else if (d.open) {
      d.close();
    }
  }, [abierta, inicial]);

  const cambiarExp = (id: ExperienciaId) => {
    setExpId(id);
    const nueva = experiencias.find((e) => e.id === id)!;
    if (!nueva.horarios.includes(horario)) setHorario('');
  };

  const mensaje = useMemo(
    () =>
      [
        'Hola, quiero reservar en 10 Experiences:',
        `• Experiencia: ${exp.nombre}`,
        fecha && `• Fecha: ${fechaLarga(fecha)}`,
        horario && `• Horario: ${horario}`,
        `• Invitados: ${invitados}`,
        nombre && `• Nombre: ${nombre}`,
        email && `• Correo: ${email}`,
        notas && `• Alergias o comentarios: ${notas}`,
        `Total estimado: $${total} USD`,
      ]
        .filter(Boolean)
        .join('\n'),
    [exp.nombre, fecha, horario, invitados, nombre, email, notas, total],
  );

  const validar = () => {
    const e: Record<string, string> = {};
    if (!fecha) e.fecha = 'Elige una fecha.';
    else if (fecha < hoyISO()) e.fecha = 'La fecha ya pasó. Elige una a partir de hoy.';
    else if (reserva.diasCerrado.includes(aFecha(fecha).getDay())) e.fecha = 'Los domingos no hay experiencias. Elige de lunes a sábado.';
    if (!horario) e.horario = 'Elige un horario.';
    if (!nombre.trim()) e.nombre = 'Escribe tu nombre para la reservación.';
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Revisa el correo; parece incompleto.';
    setErrores(e);
    return Object.keys(e).length === 0;
  };

  const enviar = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validar()) return;
    window.open(enlaceWhatsApp(mensaje), '_blank', 'noopener,noreferrer');
    setEnviado(true);
  };

  const campo = 'mt-2 w-full rounded-sm border border-crema/20 bg-noche px-4 py-3 text-crema placeholder:text-crema/35 focus:border-champan focus:outline-none';
  const etiqueta = 'text-[0.95rem] text-crema/75';
  const error = (k: string) =>
    errores[k] ? <p id={`err-${k}`} className="mt-2 text-sm text-[#e7a58f]">{errores[k]}</p> : null;

  return (
    <dialog
      ref={ref}
      onClose={onCerrar}
      onClick={(e) => e.target === ref.current && onCerrar()}
      aria-labelledby="reserva-titulo"
      className="m-0 mt-auto max-h-[92dvh] w-full max-w-none overflow-y-auto rounded-t-lg bg-noche-2 p-0 text-crema backdrop:bg-noche/80 backdrop:backdrop-blur-sm sm:m-auto sm:max-w-xl sm:rounded-lg"
    >
      {abierta && (
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25, ease: 'easeOut' }} className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <h2 id="reserva-titulo" className="text-4xl">Reservar</h2>
            <button type="button" onClick={onCerrar} className="-mr-2 -mt-1 inline-flex size-11 items-center justify-center text-crema/80 hover:text-crema" aria-label="Cerrar">
              <IconoCerrar />
            </button>
          </div>

          {enviado ? (
            <div className="py-6" role="status">
              <p className="font-display text-3xl text-champan">Abrimos WhatsApp con tu solicitud.</p>
              <p className="mt-4 text-crema/80">
                Envía el mensaje y te confirmamos disponibilidad y el pago. Si WhatsApp no se abrió,{' '}
                <a className="enlace" href={enlaceWhatsApp(mensaje)} target="_blank" rel="noopener noreferrer">ábrelo aquí</a>{' '}
                o escríbenos a <a className="enlace" href={`mailto:${negocio.email}?subject=${encodeURIComponent('Reservación')}&body=${encodeURIComponent(mensaje)}`}>{negocio.email}</a>.
              </p>
              <button type="button" onClick={onCerrar} className="btn-linea mt-8">Listo</button>
            </div>
          ) : (
            <form onSubmit={enviar} noValidate className="mt-6 space-y-6">
              <fieldset>
                <legend className={etiqueta}>Experiencia</legend>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {experiencias.map((e) => (
                    <label key={e.id} className={`cursor-pointer rounded-sm border px-4 py-3 transition-colors ${expId === e.id ? 'border-vela bg-vela/10' : 'border-crema/20 hover:border-crema/40'}`}>
                      <input type="radio" name="exp" value={e.id} checked={expId === e.id} onChange={() => cambiarExp(e.id)} className="sr-only" />
                      <span className="block font-display text-xl leading-tight">{e.nombre}</span>
                      <span className="text-sm text-crema/65">${e.precio} USD, {e.duracion}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className={etiqueta}>Fecha</span>
                  <input type="date" min={hoyISO()} value={fecha} onChange={(e) => setFecha(e.target.value)} className={`${campo} [color-scheme:dark]`} aria-invalid={!!errores.fecha} aria-describedby={errores.fecha ? 'err-fecha' : undefined} />
                  {error('fecha')}
                </label>
                <label className="block">
                  <span className={etiqueta}>Invitados</span>
                  <div className="mt-2 flex items-center rounded-sm border border-crema/20">
                    <button type="button" className="size-12 text-xl" onClick={() => setInvitados((n) => Math.max(1, n - 1))} aria-label="Quitar un invitado">−</button>
                    <input type="number" inputMode="numeric" min={1} max={reserva.maxInvitados} value={invitados} onChange={(e) => setInvitados(Math.min(reserva.maxInvitados, Math.max(1, Number(e.target.value) || 1)))} className="w-full bg-transparent text-center text-lg [appearance:textfield] focus:outline-none [&::-webkit-inner-spin-button]:appearance-none" aria-label="Número de invitados" />
                    <button type="button" className="size-12 text-xl" onClick={() => setInvitados((n) => Math.min(reserva.maxInvitados, n + 1))} aria-label="Agregar un invitado">+</button>
                  </div>
                </label>
              </div>

              <fieldset>
                <legend className={etiqueta}>Horario</legend>
                <div className="mt-2 flex flex-wrap gap-2">
                  {exp.horarios.map((h) => (
                    <label key={h} className={`cursor-pointer rounded-sm border px-5 py-3 transition-colors ${horario === h ? 'border-vela bg-vela text-noche' : 'border-crema/20 hover:border-crema/40'}`}>
                      <input type="radio" name="horario" value={h} checked={horario === h} onChange={() => setHorario(h)} className="sr-only" />
                      {h}
                    </label>
                  ))}
                </div>
                {error('horario')}
              </fieldset>

              <label className="block">
                <span className={etiqueta}>Nombre para la reservación</span>
                <input type="text" autoComplete="name" value={nombre} onChange={(e) => setNombre(e.target.value)} className={campo} aria-invalid={!!errores.nombre} aria-describedby={errores.nombre ? 'err-nombre' : undefined} />
                {error('nombre')}
              </label>

              <label className="block">
                <span className={etiqueta}>Correo (opcional)</span>
                <input type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} className={campo} aria-invalid={!!errores.email} aria-describedby={errores.email ? 'err-email' : undefined} />
                {error('email')}
              </label>

              <label className="block">
                <span className={etiqueta}>Alergias, ocasión especial o crucero (opcional)</span>
                <textarea rows={3} value={notas} onChange={(e) => setNotas(e.target.value)} className={campo} placeholder="Ej.: aniversario, sin mariscos, nuestro barco sale a las 5 PM" />
              </label>

              <div className="flex flex-wrap items-end justify-between gap-4 border-t border-crema/10 pt-6">
                <div>
                  <p className="text-sm text-crema/60">Total estimado</p>
                  <p className="font-display text-4xl text-vela-claro">${total} <span className="font-sans text-base text-crema/70">USD</span></p>
                </div>
                <button type="submit" className="btn-primario">
                  <IconoWhatsApp /> Enviar por WhatsApp
                </button>
              </div>
              <p className="text-sm text-crema/55">{reserva.politica}</p>
            </form>
          )}
        </motion.div>
      )}
    </dialog>
  );
}
