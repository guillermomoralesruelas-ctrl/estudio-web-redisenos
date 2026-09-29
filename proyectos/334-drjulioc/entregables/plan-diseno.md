# Dr. Julio C. Jiménez López: plan de rediseño (método 1.1)

**Sitio original:** https://drjuliopsiquiatria.com/
**Materia prima:** clon en `../sitio/` (fotos en `sitio/assets/wp-content/uploads/2025/07/`), textos de inicio, "Dr. Julio Jiménez", procesos terapéuticos y contacto en `investigacion/crudo.json`. La red de la nube no llega al sitio.
**Rubro:** psiquiatra certificado (Consejo Mexicano de Psiquiatría), consulta presencial y en línea, solo adultos, en español, inglés y francés. **Ciudad:** Edificio Valle Real, piso 1, puerta 14, Cjon. de los Ayala 101, Zona Los Callejones, San Pedro Garza García, N. L.

## Qué le falta al clon (los "detallitos")
- Ver `qa/reporte-rediseno.json` → `antes`: Google Tag Manager, mapa con API y carrusel de reseñas repetido.
- "Aviso de Publicidad COFEPRIS:" aparece sin número.

## Qué tiene que lograr el sitio
1. Que una persona que está pasando un mal momento se anime a escribir, sin tener que explicar su motivo por WhatsApp.
2. Credenciales verificables (cédulas, certificación) y cómo es el proceso.
3. Dirección con mapa y dos teléfonos (llamada y WhatsApp).

## Tono
Sereno y claro. Sin promesas de curación ni resultados; nada de "100%". Las reseñas elegidas hablan del trato, no de resultados clínicos.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| tinta | `#16204a` | Texto y fondo oscuro |
| niebla | `#f6f6fa` | Fondo claro |
| azul | `#2743d8` | Botones (el azul de su logo) |
| lavanda | `#e8ebfb` | Tarjetas |
| pizarra | `#555b70` | Texto secundario |
| cielo | `#b9c6ff` | Acento sobre oscuro |

Contrastes: blanco/azul 7.29, tinta/niebla 14.54, pizarra/niebla 6.25, azul/niebla 6.76, cielo/tinta 9.39, tinta/lavanda 13.22.
Fuentes: Newsreader 500/600 (títulos) y Public Sans 400/600 (texto).

## Elemento memorable (uno solo)
**"El primer mensaje, sin tener que explicarlo todo"**: se eligen idioma (español, inglés o francés, los tres en que atiende), modalidad (presencial o en línea), horario preferido y para quién es la cita. Una burbuja de WhatsApp muestra el mensaje ya escrito en ese idioma, que por defecto dice que prefieres contar el motivo en la consulta. Nada se guarda: el texto solo viaja a WhatsApp. No se ha usado antes en el estudio.

## Secciones
1. Portada: H1 "Psiquiatra en San Pedro Garza García y Monterrey", presencial y en línea, solo adultos.
2. El primer mensaje.
3. Sobre el Dr. Julio: formación con cédulas, certificación, reconocimiento APM 2023.
4. Cuándo acudir y qué atiende (lista, sin promesas).
5. El proceso (cuatro pasos) y las terapias que usa.
6. Opiniones sobre el trato.
7. Contacto con su mapa de Google, llamada y WhatsApp.
Barra fija en el celular: WhatsApp, Llamar, Cómo llegar.
