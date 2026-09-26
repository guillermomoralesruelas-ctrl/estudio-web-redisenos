import { negocio } from '../data/content';

export const enlaceWhatsApp = (mensaje: string) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;

export const mensajeGeneral = 'Hola, quiero información para reservar en 10 Experiences.';
