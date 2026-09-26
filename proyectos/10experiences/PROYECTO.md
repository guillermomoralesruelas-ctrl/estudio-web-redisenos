# 10 Experiences Tour

| Campo | Valor |
|---|---|
| Slug | `10experiences` |
| Sitio original | https://10experiencestour.com/es/ (EN: https://10experiencestour.com/) |
| Creado | 2026-09-25 |
| Plataforma actual | WordPress |
| Fase | ver `db proyecto 10experiences` |

---

## 1. Brief (lo llena la persona)

**Negocio**
- Nombre comercial: 10 Experiences Tour
- Rubro: experiencia gastronómica y cultural de lujo (cena narrada de 10 tiempos)
- Ciudad: Cozumel, Quintana Roo, México
- Productos: La Experiencia Original, a $195 USD (10 tiempos, 2 h 30 min, 1:30 PM y 6:30 PM), y La Experiencia del Taco, a $148 USD (7 platillos, 1 h 45 min, 9:00 y 11:00 AM). De lunes a sábado.
- Diferenciador: 10 regiones de México en una sola cena, con relato, producción audiovisual, bebidas 100% mexicanas y sede privada.

**Público**
- Turistas de EE. UU., Canadá y Reino Unido, y cruceristas. [CONFIRMAR]
- Idiomas: ES y EN (el inglés probablemente es el principal). [CONFIRMAR]

**Objetivo del sitio**
- Acción principal: reservar.
- Acción secundaria: escribir por WhatsApp.

**Marca**
- Logos: `assets/marca/`
- Colores: ver sección 3 (se mantienen los de la marca).
- Lo que NO quieren: [PENDIENTE]

**Contenido**
- Email: hello@10experiences.com.mx · Tel/WhatsApp: +52 987-118-9999
- Redes: Facebook /10ExperiencesTour, Instagram /10experiencestour, YouTube @10experiencestour, X /10experiencesgm, TikTok @10experiencestour, Pinterest /10experiencestour
- Reseñas: +1600, 5★ (TripAdvisor, Google, OpenTable, Yelp, Airbnb). Los 4 testimonios están en `contenido/contenido.md`.
- Preguntas frecuentes reales: [PENDIENTE]; la página /es/preguntas-y-respuestas/ todavía no se ha revisado.

**Técnico**
- Dominio / DNS: [PENDIENTE: ¿quién lo administra?]
- Hosting destino: Vercel (liga de prueba) → Cloudflare Pages o Vercel Pro (producción)
- Formulario: WhatsApp (wa.me/529871189999) [CONFIRMAR si también debe llegar por email]
- Integraciones: BuilderBot (bot de WhatsApp) [PENDIENTE]

---

## 2. Análisis

- **Paleta detectada:** espresso #211915 (fondo dominante), oro #A37932, champagne #CBB87A, arena #D2BA90, crema #D9C7A3.
- **Tipografías detectadas:** 7 familias mezcladas (Cormorant Garamond, Avenir Book y Medium, Roboto, Cinzel, Arial y la del sistema).
- **Estructura actual:** Hero → Cómo funciona → Reserva (2 experiencias) → Reseñas + testimonios → Lorena / Chef / Fundadores (slider) → Narradores → Footer.
- **Subpáginas:** El Viaje (13 postales de estados con sellos), Galería (5 categorías × 8 fotos), Historias de Invitados y Preguntas y Respuestas.
- **Problemas:**
  - Ninguna imagen tiene `alt`.
  - La foto `guerry-guia-color.jpg` está rota.
  - Aparece "Contact us" en inglés en la versión en español.
  - Dos botones flotantes que se enciman.
  - Las ligas de Google Maps se muestran completas, como texto.
  - No hay botón de reserva fijo en móvil.
  - Tipografía inconsistente.
- **Oportunidad:** las postales y los sellos de "El Viaje" son el recurso visual más fuerte y casi no se aprovechan.

## 3. Concepto y diseño

- **Concepto:** "Un pasaporte por México". Cada tiempo es un destino, con sellos y postales como hilo conductor.
- **Tokens:**
  - espresso #211915 · ink #0F0B09 · gold #A37932 · champagne #CBB87A · sand #D2BA90 · cream #EFE6D2
  - Acentos mínimos: terracotta #9E3B22 · agave #4F6B4A
- **Fuentes:** Cormorant Garamond (títulos) + Manrope (texto).
- **Estructura nueva:**
  1. Header fijo
  2. Hero
  3. Barra de confianza
  4. Cómo funciona
  5. El Viaje (carrusel de 13 estados)
  6. Experiencias / reserva
  7. Galería bento
  8. Reseñas
  9. Chef / Lorena / Fundadores
  10. Narradores
  11. FAQ
  12. CTA final
  13. Footer
  14. Modal de reserva y barra fija en móvil
- **Animaciones:** zoom lento del hero, reveals al hacer scroll, parallax, contadores y sellos que caen.
- Especificación completa: `entregables/prompt-lovable-10experiences-v2.md`.

## 4. Decisiones

| Fecha | Decisión | Motivo |
|---|---|---|
| 2026-09-24 | Se construye con Claude en lugar de Lovable | El prompt consumía demasiados créditos en Lovable |
| 2026-09-24 | Stack Vite + React + Tailwind + Framer Motion | Rápido, estático y compatible con Lovable |
| 2026-09-24 | Liga de prueba en Vercel Hobby; producción en un plan comercial | Hobby es solo para uso no comercial |

## 5. Pendientes de la persona

- [ ] Ejecutar la descarga de imágenes (menú → opción 4)
- [ ] Preguntas frecuentes reales y política de cancelación
- [ ] Confirmar el idioma principal del público (ES o EN)
- [ ] ¿Quién administra el dominio y el DNS?
- [ ] Conectar el MCP de BuilderBot con tu cuenta
