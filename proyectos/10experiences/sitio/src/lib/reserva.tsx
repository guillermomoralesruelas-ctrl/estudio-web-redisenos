import { createContext, useContext } from 'react';
import type { ExperienciaId } from '../data/content';

export type AbrirReserva = (exp?: ExperienciaId, horario?: string) => void;
export const ReservaContext = createContext<AbrirReserva>(() => {});
export const useReserva = () => useContext(ReservaContext);
