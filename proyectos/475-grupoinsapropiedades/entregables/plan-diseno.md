# Grupo INSA Inmobiliaria & Avalúos: plan de rediseño (método 1.2 en la nube)

**Sitio original:** https://www.grupoinsapropiedades.org/
**Materia prima:** sitio en vivo (inicio, cuatro páginas de avalúos, ¿Quiénes somos?, Elsa, Mary, FAQ, licencias, Mejoravit, contacto) y catálogo completo (120 propiedades); fotos en `assets/originales/`.
**Rubro:** inmobiliaria y unidad de valuación. **Ciudad:** Ensenada, Baja California (cubre también Rosarito, Tijuana y San Quintín).

## Qué le falta al clon (los "detallitos")
- 13 imágenes rotas, miniaturas de 450 px y desborde horizontal (1,306 px en el celular).
- Solo trae la portada: los avalúos, el equipo y el contacto están en otras páginas.

## Qué tiene que lograr el sitio
1. Que quien necesita un avalúo sepa cuál pedir, qué llevar y cuánto cuesta, y escriba por WhatsApp.
2. Que quien busca casa o terreno en Ensenada vea el catálogo con fotos grandes y filtros.
3. Mostrar respaldo: licencia estatal, PROFECO, registros de perito y asociaciones.

## Dirección visual
| Token | Color | Uso |
|---|---|---|
| insa | #440099 | Botones, títulos de acento (morado de su logotipo) |
| insa-2 | #3B3FC0 | Azul violeta del degradado del logotipo; foco |
| noche | #170B35 | Sección de avalúos y pie |
| papel / dictamen | #F7F5F0 / #FFFDF7 | Fondo y la hoja de trámite |
| mar | #0B5F6E | Enlaces de WhatsApp en tarjetas |

**Tipografía:** Sora (titulares, geométrica como las letras de "INSA"), IBM Plex Sans (texto) e IBM Plex Mono (folios, etiquetas y registros de la hoja de trámite, aire de documento técnico).

## Elemento memorable
"¿Para qué necesitas el avalúo?": nueve trámites reales del sitio; cada uno llena una hoja tipo dictamen con el avalúo correspondiente, quién lo firma y con qué registro, cobertura, cómo se cobra (solo tarifas publicadas), la lista numerada de papeles y un sello "Valuador profesional SHF" que cae al cambiar de trámite (sin animación con `prefers-reduced-motion`). En el celular los trámites se deslizan en fila.

## Estructura
1. Encabezado y portada: H1 "Casas, terrenos y avalúos en Ensenada", cifras (120 publicadas, 12 y 16 años) y foto aérea de Playa Hermosa.
2. Propiedades: filtros con conteo y muestra de 36 con foto, WhatsApp y ficha.
3. Avalúos: la hoja de trámite.
4. Quién firma: trayectoria de Leonardo Sánchez, registros y asociaciones.
5. Equipo con WhatsApp de cada persona.
6. Servicios, propietarios y trámite Mejoravit.
7. Preguntas frecuentes, contacto con horario y mapa; pie y barra fija en el celular.

## Qué se evita (revisión contra lo genérico)
- El buscador de plantilla, los formularios con captcha y el bloque de hashtags.
- Inventar tarifas, reseñas o años: donde no hay tarifa publicada se pide cotizar.
- Repetir elementos del lote (mapa, histograma, calculadora, dispersión, selector de estrategia, checklist palomeable).
