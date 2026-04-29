# PLANT ART — MASTER PROMPT COMPLETO
# Construcción del sitio web con agentes IA
# Archivo: plantart-master-prompt-web.txt
# Versión: 1.0 — Production Ready
# Compatible con: Google Antigravity, Cursor, v0, Bolt, Lovable, Replit Agent
# ============================================================

## INSTRUCCIÓN DE ARRANQUE PARA EL AGENTE

Eres un equipo de agentes especializados trabajando en paralelo.
Tu misión es construir el sitio web completo de Plant Art
desde cero, en un solo proyecto coherente, production-ready
y de nivel premium internacional.

Antes de escribir una sola línea de código, lee este documento completo.
Cada decisión de diseño, copy, estructura y código
debe basarse estrictamente en este prompt.
No interpretar. No improvisar. No añadir elementos no especificados.

---

## BLOQUE 0 — IDENTIDAD DEL PROYECTO

```
Nombre del proyecto:  Plant Art — New Website
Cliente:              Plant Art
Tipo:                 Sitio web corporativo B2B premium
Industria:            Infraestructura biofílica / Paisajismo corporativo
Mercado objetivo:     Empresas, instituciones, arquitectos, retail premium
Idioma principal:     Español (Chile)
Idioma secundario:    Inglés en labels, eyebrows y secciones editoriales
URL de destino:       www.plantart.cl
```

---

## BLOQUE 1 — STACK TECNOLÓGICO

```
Estructura:           HTML5 semántico
Estilos:              CSS3 puro con custom properties (sin frameworks)
JavaScript:           Vanilla JS ligero (sin jQuery, sin React)
Tipografías:          Google Fonts (Cormorant Garamond, Manrope, Inter)
Íconos:               Lucide Icons CDN (stroke, no fill)
Formularios:          Formspree o atributo action configurable
Animaciones:          CSS transitions + IntersectionObserver nativo
Scroll:               scroll-behavior: smooth nativo
Video hero:           etiqueta <video> con loop, muted, autoplay, playsinline
Imágenes:             <img> con loading="lazy" y object-fit: cover
Accesibilidad:        WCAG AA — aria-labels, roles, contraste AA
Responsive:           Mobile first
Performance:          Sin librerías pesadas, imágenes optimizadas
Archivos:             Un solo index.html + styles.css + main.js
                      (o todo en un único index.html self-contained)
```

---

## BLOQUE 2 — PALETA CROMÁTICA EXACTA

```css
/* Variables CSS — Copiar exactamente */
:root {
  --pa-bg:           #0A0D0A;   /* Fondo absoluto — Black Canopy    */
  --pa-bg-deep:      #121712;   /* Fondo profundo — Forest Graphite */
  --pa-surface:      #1B221B;   /* Superficies — Mineral Surface    */
  --pa-text:         #F3F0E8;   /* Texto principal — Bone White     */
  --pa-text-muted:   #C9C2B5;   /* Texto secundario — Stone Linen   */
  --pa-moss:         #405C47;   /* Verde premium — Moss Authority   */
  --pa-green-deep:   #2D4735;   /* Verde profundo — Structural Green*/
  --pa-gold:         #B5965B;   /* Oro mate — Aged Brass            */
  --pa-slate:        #8B8E86;   /* Gris técnico — Slate Ash         */
  --pa-line:         rgba(243,240,232,0.12);
  --pa-line-moss:    rgba(64,92,71,0.25);
  --pa-overlay:      rgba(10,13,10,0.38);

  --font-display:    'Cormorant Garamond', Georgia, serif;
  --font-ui:         'Manrope', system-ui, sans-serif;
  --font-body:       'Inter', system-ui, sans-serif;

  --space-1:  4px;  --space-2:  8px;  --space-3:  12px;
  --space-4: 16px;  --space-5: 24px;  --space-6:  32px;
  --space-7: 40px;  --space-8: 56px;  --space-9:  72px;
  --space-10:96px;  --space-11:120px; --space-12: 160px;

  --radius-sm:  8px;  --radius-md: 12px;
  --radius-lg: 20px;  --radius-xl: 28px;  --radius-pill: 999px;

  --shadow-ambient: 0 2px 24px rgba(0,0,0,0.18);
  --shadow-card:    0 4px 32px rgba(0,0,0,0.22);

  --transition-fast: 160ms ease;
  --transition-mid:  240ms ease;
  --transition-slow: 400ms ease;

  --container-max:    1440px;
  --padding-mobile:   20px;
  --padding-tablet:   32px;
  --padding-desktop:  48px;
  --padding-wide:     72px;

  --z-float:   10;  --z-dropdown: 20;
  --z-header:  30;  --z-modal:    40;  --z-toast: 50;
}
```

REGLAS CROMÁTICAS ESTRICTAS:
- 70% fondos oscuros y profundos
- 20% textos hueso y grises minerales
- 10% acentos en verde musgo o dorado envejecido
- NUNCA usar verdes saturados o neón
- NUNCA usar degradados tecnológicos
- NUNCA usar dorado brillante o glossy
- El lujo debe sentirse mate, profundo y silencioso

---

## BLOQUE 3 — SISTEMA TIPOGRÁFICO EXACTO

IMPORTS (pegar en <head>):
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600&family=Manrope:wght@500;600;700&display=swap" rel="stylesheet">
```

JERARQUÍA:
```
H1 Hero:     Cormorant Garamond 500 / 72–96px desktop / 42–56px mobile
             tracking: -0.02em / line-height: 0.95
H1 Interior: Cormorant Garamond 500 / 56–72px desktop / 36–44px mobile
             tracking: -0.015em / line-height: 1.0
H2:          Manrope 600 / 32–40px desktop / 24–30px mobile
             tracking: -0.02em / line-height: 1.1
H3:          Manrope 600 / 22–28px desktop / 18–22px mobile
             tracking: -0.01em / line-height: 1.2
Body L:      Inter 400 / 18px desktop / 17px mobile / line-height: 1.65
Body M:      Inter 400 / 16px desktop / 15px mobile / line-height: 1.6
Label:       Inter 500 / 12–13px / UPPERCASE / tracking: 0.14em
Eyebrow:     Inter 500 / 12px / UPPERCASE / tracking: 0.14em / color: var(--pa-moss)
Button:      Inter 600 / 14–15px / UPPERCASE / tracking: 0.08em
Quote:       Cormorant Garamond 400 italic / 24–32px / line-height: 1.4
```

REGLAS:
- Serif SOLO en H1, statements, quotes y números KPI grandes
- Interfaz, botones, navegación y formularios siempre en Inter
- Máximo 3 pesos visuales distintos por pantalla
- Párrafos máximo 65 caracteres por línea en desktop

---

## BLOQUE 4 — COMPONENTES EXACTOS (ÁTOMOS)

### BOTÓN PRIMARIO (.pa-btn-primary)
```css
height: 48px;
padding: 0 22px;
border-radius: var(--radius-pill);
background: var(--pa-text);
color: var(--pa-bg);
border: 1px solid transparent;
font-family: var(--font-body);
font-size: 14px;
font-weight: 600;
letter-spacing: 0.08em;
text-transform: uppercase;
cursor: pointer;
transition: all var(--transition-mid);
text-decoration: none;
display: inline-flex;
align-items: center;
gap: 8px;
/* Hover: background #E6E1D6 + translateY(-1px) */
/* Focus: outline 2px var(--pa-gold) + offset 2px */
```

### BOTÓN SECUNDARIO (.pa-btn-secondary)
```css
height: 48px;
padding: 0 22px;
border-radius: var(--radius-pill);
background: transparent;
color: var(--pa-text);
border: 1px solid rgba(243,240,232,0.18);
/* Hover: border-color var(--pa-text) + background rgba(243,240,232,0.04) */
```

### BOTÓN TEXTUAL (.pa-btn-text)
```css
background: none; border: none; padding: 0;
color: var(--pa-text-muted);
font-family: var(--font-body); font-size: 14px; font-weight: 500;
cursor: pointer; position: relative;
/* ::after subrayado animado de 0 a 100% en hover */
/* Hover: color var(--pa-text) */
```

### INPUT (.pa-input)
```css
height: 56px; padding: 0 18px; width: 100%;
background: var(--pa-bg-deep);
border: 1px solid var(--pa-line);
border-radius: var(--radius-lg);
color: var(--pa-text);
font-family: var(--font-body); font-size: 15px;
/* Placeholder: rgba(243,240,232,0.45) */
/* Hover: border rgba(243,240,232,0.24) */
/* Focus: border var(--pa-gold) + box-shadow 0 0 0 3px rgba(181,150,91,0.08) */
```

### TEXTAREA (.pa-textarea)
```css
/* Mismas reglas que input + min-height: 144px + padding: 16px 18px + resize: vertical */
```

### EYEBROW (.pa-eyebrow)
```css
font-family: var(--font-body);
font-size: 12px; font-weight: 500;
letter-spacing: 0.14em; text-transform: uppercase;
color: var(--pa-moss); display: block; margin-bottom: 16px;
```

### DIVIDER (.pa-divider)
```css
border: none; border-top: 1px solid var(--pa-line); margin: 0;
```

### ÍCONOS
Usar Lucide Icons CDN. Siempre stroke, nunca fill.
Tamaños: 16px / 20px / 24px. Color: currentColor.

---

## BLOQUE 5 — LAYOUT Y BREAKPOINTS

BREAKPOINTS:
```
xs: 0–479px    sm: 480–767px
md: 768–1023px  lg: 1024–1439px  xl: 1440px+
```

CONTENEDOR:
```css
.pa-container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--padding-mobile);
}
@media (min-width: 768px)  { .pa-container { padding: 0 var(--padding-tablet);  } }
@media (min-width: 1024px) { .pa-container { padding: 0 var(--padding-desktop); } }
@media (min-width: 1440px) { .pa-container { padding: 0 var(--padding-wide);    } }
```

SECCIONES — PADDING VERTICAL:
```
Compacta:   72px mobile  /  96px desktop
Estándar:   96px mobile  / 120px desktop
Editorial: 120px mobile  / 160px desktop
```

GRILLA:
```
Desktop: 12 columnas, gap 24px
Tablet:   8 columnas, gap 20px
Mobile:   4 columnas, gap 16px
```

LEY FUNDAMENTAL:
Una pantalla = una idea dominante.
El silencio visual es una herramienta premium activa.

---

## BLOQUE 6 — ESTRUCTURA COMPLETA DEL SITIO

El sitio tiene UN archivo principal: index.html
Estructura de secciones en orden EXACTO:

```
01. <header>        — Navegación sticky
02. <section#hero>  — Hero full viewport
03. <section#projects>   — Grid editorial de proyectos
04. <section#expertise>  — Grid de 6 servicios
05. <section#approach>   — Metodología 5 pasos
06. <section#clients>    — Logos de clientes
07. <section#impact>     — KPIs + bloques de confianza
08. <section#about>      — Manifiesto de marca
09. <section#contact>    — Formulario ejecutivo
10. <footer>        — Footer 4 columnas
```

---

## BLOQUE 7 — HEADER

```
Posición: fixed, top 0, width 100%, z-index: var(--z-header)
Alto desktop: 72px
Alto mobile:  60px
Fondo inicial: transparent
Fondo al scroll (JS): rgba(10,13,10,0.92) + backdrop-filter: blur(12px)
Transición: background 320ms ease

Estructura desktop:
[Logo "Plant Art" — wordmark en var(--font-display) 500]
                    [Nav: Proyectos | Expertise | Nosotros | Contacto]
                    [Botón: Solicitar propuesta — .pa-btn-primary compacto h:40px]

Estructura mobile:
[Logo]             [Ícono hamburger 24px]
→ Al click: drawer lateral con navegación completa

Logo tipografía:
font-family: var(--font-display)
font-size: 22px desktop / 18px mobile
font-weight: 500
color: var(--pa-text)
letter-spacing: -0.01em
text-decoration: none

Nav links:
font-family: var(--font-body)
font-size: 13px
font-weight: 500
letter-spacing: 0.06em
color: var(--pa-text-muted)
hover: color var(--pa-text)
transition: color var(--transition-fast)

Drawer mobile:
fondo: var(--pa-bg)
ancho: 280px
animación: slideInRight 280ms ease
links: font-size 18px, padding 16px 0
```

---

## BLOQUE 8 — HERO

```
Altura: 100svh (fallback: 100vh)
Posición: relative, overflow hidden

CAPA 1 — Visual de fondo:
Si hay video:
  <video autoplay loop muted playsinline>
  object-fit: cover, position absolute, inset 0, width/height 100%
  Contenido recomendado: jardín vertical o espacio corporativo con vegetación
Si no hay video: imagen con object-fit cover, mismas reglas

CAPA 2 — Overlay oscuro:
background: linear-gradient(
  to bottom,
  rgba(10,13,10,0.15) 0%,
  rgba(10,13,10,0.42) 50%,
  rgba(10,13,10,0.72) 100%
)

CAPA 3 — Contenido (position absolute, bottom 15%, left padding-desktop):
Disposición: flex column, gap 24px, max-width 760px

  [Eyebrow] "Biophilic Infrastructure"

  [H1] "Espacios que integran
        naturaleza con estándar."
  font-family: var(--font-display)
  font-size: clamp(42px, 7vw, 96px)
  font-weight: 500
  color: var(--pa-text)
  letter-spacing: -0.02em
  line-height: 0.95

  [Subtexto — Body L]
  "Diseñamos, construimos y mantenemos sistemas vegetales
   para arquitectura, retail y entornos corporativos de alto nivel."
  color: var(--pa-text-muted)
  max-width: 520px

  [CTAs — flex row gap 16px]
  Botón 1: "Solicitar propuesta"    → .pa-btn-primary
  Botón 2: "Ver proyectos"          → .pa-btn-secondary

SCROLL CUE (optional):
  Position: absolute, bottom 32px, left 50%, translateX(-50%)
  Ícono chevron-down Lucide 20px, color var(--pa-text-muted)
  Animación: bounce suave infinito 2s

ANIMACIÓN DE ENTRADA (IntersectionObserver o CSS animation onload):
  Eyebrow:  fadeInUp 0.6s delay 0.2s
  H1:       fadeInUp 0.7s delay 0.35s
  Subtexto: fadeInUp 0.6s delay 0.5s
  CTAs:     fadeInUp 0.6s delay 0.65s
```

---

## BLOQUE 9 — SECCIÓN PROYECTOS

```
ID: #projects
Padding: estándar (96px/120px)
Fondo: var(--pa-bg)

HEADER DE SECCIÓN:
  [Eyebrow] "Selected Work"
  [H2] "Trabajo que define estándar."
  [Subtexto — Body M]
  "Intervenciones que integran diseño biofílico, técnica precisa
   y mantenimiento continuo en entornos de alta exigencia."

GRID DE PROYECTOS:
Desktop: 2 columnas asimétricas
  Col izquierda: 60% — proyecto grande
  Col derecha:   40% — 2 proyectos apilados
Tablet: 2 columnas 50/50
Mobile: 1 columna

CARD DE PROYECTO (.pa-project-card):
  position: relative, overflow: hidden, border-radius: var(--radius-lg)

  Imagen:
    width/height: 100%, object-fit: cover
    Ratios: grande 3:2 / pequeño 4:3
    transition: transform 500ms ease
    hover: scale(1.03)

  Overlay hover:
    position absolute, inset 0
    background: linear-gradient(to top, rgba(10,13,10,0.82) 0%, transparent 50%)
    opacity: 0 → 1 en hover, transition 320ms

  Contenido (position absolute, bottom 0, left 0, padding 24px):
    opacity: 0 → 1 en hover
    [Meta] "Santiago, Chile — Comercial" — Inter 11px uppercase tracking 0.12em
    [Nombre] "El Jardín — MUT" — Manrope 600 18px color var(--pa-text)
    [CTA] "Ver proyecto →" — .pa-btn-text

PROYECTOS A INCLUIR:
  1. El Jardín — MUT
     Meta: Santiago, Chile — Comercial
     Placeholder imagen: [IMAGE_PROJECT_MUT]
     Año: [YEAR_PENDING]

  2–6: [PROJECT_NAME_PENDING]
     Meta: [CITY_PENDING], Chile — [TYPOLOGY_PENDING]
     Placeholder imagen: [IMAGE_PROJECT_PENDING]

CTA DE SECCIÓN (centrado, margin-top 56px):
  "Ver todos los proyectos" → .pa-btn-secondary
```

---

## BLOQUE 10 — SECCIÓN EXPERTISE

```
ID: #expertise
Padding: estándar
Fondo: var(--pa-bg-deep)

HEADER DE SECCIÓN:
  [Eyebrow] "Expertise"
  [H2] "Soluciones para cada escala del entorno construido."
  [Subtexto — Body M, max-width 560px]
  "Diseñamos e implementamos soluciones biofílicas adaptadas
   a la arquitectura, el uso real del espacio
   y los requerimientos operacionales de cada activo."

GRID:
Desktop: 3 columnas, gap 24px
Tablet:  2 columnas
Mobile:  1 columna

CARD DE SERVICIO (.pa-service-card):
  background: var(--pa-surface)
  border: 1px solid rgba(243,240,232,0.06)
  border-radius: 24px
  padding: 32px
  transition: background 240ms ease, transform 240ms ease
  hover: background #1F2820 + translateY(-2px)

  Estructura interna:
  [Eyebrow — en inglés]
  [H3 — en español]
  [Divider .pa-divider margin 20px 0]
  [Body M — 2–3 líneas máximo]
  [CTA textual "Conocer más →" margin-top 24px]

6 TARJETAS EXACTAS:

  Tarjeta 1:
    Eyebrow: Vertical Gardens
    H3: Jardines Verticales
    Body: Sistemas modulares de vegetación vertical integrados
          a muros y estructuras. Diseñados para escala comercial,
          corporativa e institucional con criterio arquitectónico
          y operación técnica continua.

  Tarjeta 2:
    Eyebrow: Green Walls
    H3: Muros Verdes
    Body: Infraestructura vegetal de alto impacto visual para interiores
          y exteriores. Implementamos muros vivos con sustratos
          especializados, riego automatizado y mantenimiento programado.

  Tarjeta 3:
    Eyebrow: Commercial Landscape
    H3: Paisajismo Comercial
    Body: Diseño y mantención de entornos paisajísticos para centros
          comerciales, edificios corporativos, clínicas, hoteles
          y desarrollos de escala.

  Tarjeta 4:
    Eyebrow: Automated Irrigation
    H3: Riego Automatizado
    Body: Diseño e instalación de sistemas de riego inteligentes
          adaptados a cada proyecto. Eficiencia hídrica, programación
          remota y continuidad operacional.

  Tarjeta 5:
    Eyebrow: Green Roofs
    H3: Techos Vegetales
    Body: Soluciones de cubierta vegetal para eficiencia energética,
          gestión hídrica y aporte estético a proyectos
          arquitectónicos y desarrollos urbanos.

  Tarjeta 6:
    Eyebrow: Maintenance & Operations
    H3: Mantenimiento Especializado
    Body: Servicio continuo de mantención con criterios técnicos
          definidos, supervisión especializada y reportería de estado
          para activos de alto valor.
```

---

## BLOQUE 11 — SECCIÓN APPROACH

```
ID: #approach
Padding: editorial (120px/160px)
Fondo: var(--pa-bg)

HEADER DE SECCIÓN:
  [Eyebrow] "How we work"
  [H2] "De la estrategia a la operación permanente."
  [Subtexto — Body M, max-width 520px]
  "Cada proyecto atraviesa un proceso riguroso que integra diseño,
   ejecución y operación continua. No entregamos un jardín;
   diseñamos un sistema vivo que funciona en el tiempo."

LAYOUT DE PASOS:
Desktop: 5 columnas, una por paso
Mobile:  1 columna, pasos apilados

STEP COMPONENT (.pa-step):
  Número: Inter 600, 13px, color var(--pa-moss), letter-spacing 0.12em
  Línea separadora: 1px var(--pa-line), margin 16px 0
  H3: Manrope 600 18px
  Body M: Inter 400 15px color var(--pa-text-muted)
  line-height: 1.6

5 PASOS EXACTOS:

  Paso 01:
    H3: Diagnóstico y estrategia
    Body: Evaluamos el activo, los requerimientos del cliente
          y las condiciones del espacio para definir una solución
          coherente con arquitectura, marca y uso real.

  Paso 02:
    H3: Diseño integrado
    Body: Desarrollamos propuesta biofílica adaptada al espacio,
          al programa y al estándar visual del cliente.
          Selección de especies, volumetría y sistema técnico.

  Paso 03:
    H3: Ejecución especializada
    Body: Implementamos con equipo propio y supervisión técnica
          permanente. Cada instalación se realiza con estándares
          verificables y cronograma definido contractualmente.

  Paso 04:
    H3: Puesta en marcha
    Body: Activamos sistemas de riego, verificamos comportamiento
          vegetal y ajustamos todos los parámetros técnicos
          antes de entregar el espacio.

  Paso 05:
    H3: Mantenimiento continuo
    Body: Operación continua con cronograma, supervisión especializada
          y criterios de servicio trazables. La naturaleza que
          instalamos es la naturaleza que cuidamos.
```

---

## BLOQUE 12 — SECCIÓN CLIENTS

```
ID: #clients
Padding: compacta (72px/96px)
Fondo: var(--pa-bg-deep)
Border-top: 1px var(--pa-line)
Border-bottom: 1px var(--pa-line)

HEADER:
  [Eyebrow centrado] "Trusted by"
  Sin H2. El silencio habla.

LOGO WALL:
  Layout: flex, flex-wrap: wrap, justify-content: center
  Gap: 48px desktop / 32px mobile
  Logos: monocromos, filter: brightness(0) invert(1) opacity(0.45)
  Hover: opacity(0.75), transition 220ms
  Altura logos: 32px desktop / 24px mobile
  Sin autoplay. Sin slider. Sin animación de scroll.

LOGOS A INCLUIR (pendiente autorización):
  [CLIENT_LOGO — Clínica Santa María]    pendiente
  [CLIENT_LOGO — Banco Santander]        pendiente
  [CLIENT_LOGO — MUT]                    pendiente
  [CLIENT_LOGO — Grunenthal]             pendiente
  [CLIENT_LOGO — IDEMIA]                 pendiente
  [CLIENT_LOGO — Laboratorios Andromeco] pendiente
  [CLIENT_LOGO — People First]           pendiente

Nota para el agente:
  Generar placeholders rectangulares de 120x32px con texto del nombre
  en var(--pa-slate) hasta que los logos reales sean provistos.
```

---

## BLOQUE 13 — SECCIÓN IMPACT / TRUST

```
ID: #impact
Padding: editorial
Fondo: var(--pa-bg)

SUBSECCIÓN A — KPIs:
  Layout: 4 columnas desktop / 2 columnas tablet / 2 columnas mobile
  Separadores hairline entre columnas en desktop

  KPI BLOCK (.pa-kpi):
    Número: Cormorant Garamond 500, clamp(48px, 6vw, 72px)
            color: var(--pa-text)
    Label:  Inter 500, 12px, uppercase, tracking 0.14em
            color: var(--pa-slate)
    Separador: 1px var(--pa-line), width 40px, margin 12px 0

  4 KPIs:
    [METRIC_PENDING]  Proyectos ejecutados
    [YEAR_PENDING]    Años de trayectoria
    [METRIC_PENDING]  m² instalados
    [METRIC_PENDING]  Clientes activos

SUBSECCIÓN B — Bloques de confianza:
  Layout: 3 columnas desktop / 1 columna mobile
  Padding-top: 80px, border-top: 1px var(--pa-line)

  TRUST BLOCK (.pa-trust):
    background: var(--pa-surface)
    border-radius: var(--radius-lg)
    padding: 32px
    border: 1px solid rgba(243,240,232,0.06)

    [Número acento: Inter 600, 11px, color var(--pa-moss), UPPERCASE]
    [H3: Manrope 600, 18px]
    [Body M: color var(--pa-text-muted)]

  Bloque 1:
    H3: Mantenimiento con criterio técnico
    Body: Operamos con protocolos definidos, supervisión especializada
          y reportería de estado para garantizar la continuidad
          y calidad de cada sistema vivo que instalamos.

  Bloque 2:
    H3: Riego automatizado de precisión
    Body: Diseñamos sistemas adaptados a cada espacio, con eficiencia
          hídrica y programación configurable según requerimientos
          del activo.

  Bloque 3:
    H3: Ejecución con equipo propio
    Body: Cada proyecto es ejecutado por nuestro equipo especializado.
          Sin subcontratos críticos. Control, velocidad
          y responsabilidad directa.
```

---

## BLOQUE 14 — SECCIÓN ABOUT

```
ID: #about
Padding: editorial
Fondo: var(--pa-bg-deep)

LAYOUT:
  Desktop: 2 columnas — 55% texto / 45% imagen
  Mobile:  1 columna — imagen arriba, texto abajo

COLUMNA TEXTO:
  [Eyebrow] "About"
  [H2] "Una firma que convierte la naturaleza en infraestructura."

  [Párrafo 1 — Body L]
  "Plant Art es una firma especializada en infraestructura biofílica,
   paisajismo integral y operación vegetal para el entorno construido."

  [Párrafo 2 — Body L]
  "Diseñamos sistemas vivos que responden a la arquitectura,
   al uso real del espacio y a los requerimientos operacionales
   de cada activo."

  [Párrafo 3 — Body L, color var(--pa-text)]
  "Nuestro trabajo no termina con la instalación.
   Termina cuando el sistema cumple su propósito
   de forma continua, estable y precisa."

  [CTA] "Conocer más sobre Plant Art" → .pa-btn-secondary

COLUMNA IMAGEN:
  Imagen vertical o cuadrada de proyecto premium
  object-fit: cover, border-radius: var(--radius-lg)
  Placeholder: [IMAGE_ABOUT_PENDING]
```

---

## BLOQUE 15 — SECCIÓN CONTACT

```
ID: #contact
Padding: editorial
Fondo: var(--pa-bg)

LAYOUT:
  Desktop: 2 columnas — 40% intro / 60% formulario
  Mobile:  1 columna

COLUMNA INTRO:
  [Eyebrow] "Contacto"
  [H2] "Cuéntenos el alcance.
        Evaluamos sin compromiso."
  [Subtexto Body M]
  "Complete el formulario o contáctenos directamente.
   Respondemos en un plazo máximo de 24 horas hábiles."

  Datos de contacto (margin-top 40px):
    [Ícono mail 16px] [CONTACT_EMAIL_PENDING]
    [Ícono phone 16px] [CONTACT_PHONE_PENDING]
    [Ícono map-pin 16px] Santiago, Chile

COLUMNA FORMULARIO (<form>):
  Row 1: [Nombre *] [Empresa *] — 2 columnas desktop / 1 mobile
  Row 2: [Cargo]   [Correo corporativo *] — 2 columnas desktop / 1 mobile
  Row 3: [Teléfono] — 1 columna
  Row 4: [Proyecto * — textarea, min-height 144px] — 1 columna
  Row 5: [Botón "Solicitar contacto ejecutivo" .pa-btn-primary width 100%]

  Todos los inputs: .pa-input
  Textarea: .pa-textarea
  Labels: .pa-label (mostrar siempre, no solo en placeholder)

  Mensaje post-envío (hidden por defecto, mostrar con JS):
    background: rgba(64,92,71,0.12)
    border: 1px solid rgba(64,92,71,0.3)
    border-radius: var(--radius-md)
    padding: 24px
    color: var(--pa-text)
    "Gracias por contactarnos.
     Un especialista revisará su solicitud
     y responderá en las próximas 24 horas hábiles."
```

---

## BLOQUE 16 — FOOTER

```
Fondo: var(--pa-bg)
Border-top: 1px var(--pa-line)
Padding: 72px 0 40px

LAYOUT:
Desktop: 4 columnas gap 40px
Tablet:  2 columnas
Mobile:  1 columna, gap 40px

Columna 1 — Marca:
  Logo "Plant Art" — var(--font-display) 500, 20px
  Tagline: "Infraestructura biofílica para el entorno construido."
           Inter 400, 13px, color var(--pa-text-muted), margin-top 12px
  Redes (margin-top 24px, gap 16px):
    [Ícono instagram] → instagram.com/plantart_cl
    [Ícono linkedin] → [LINKEDIN_URL_PENDING]

Columna 2 — Navegación:
  Label: "Navegación"
  Links: Proyectos / Expertise / Metodología / Nosotros / Contacto
  font-family: var(--font-body), 14px, color: var(--pa-text-muted)
  hover: color var(--pa-text)

Columna 3 — Servicios:
  Label: "Servicios"
  Links: Jardines Verticales / Muros Verdes / Paisajismo Comercial /
         Riego Automatizado / Techos Vegetales / Mantenimiento

Columna 4 — Contacto:
  Label: "Contacto"
  [CONTACT_EMAIL_PENDING]
  [CONTACT_PHONE_PENDING]
  Santiago, Chile
  [CTA link] "Solicitar propuesta →"

BOTTOM BAR:
  border-top: 1px var(--pa-line)
  margin-top: 56px, padding-top: 24px
  Layout: flex between
  "© 2026 Plant Art. Todos los derechos reservados."
  Inter 400, 12px, color: var(--pa-slate)
```

---

## BLOQUE 17 — JAVASCRIPT FUNCIONAL

El agente debe generar un archivo main.js con estas funciones:

```javascript
// 1. HEADER SCROLL EFFECT
// Detectar scroll > 80px
// Agregar clase .pa-header--solid con fondo rgba(10,13,10,0.92)
// y backdrop-filter: blur(12px)

// 2. MOBILE MENU DRAWER
// Botón hamburger abre/cierra drawer
// Bloquear scroll del body cuando está abierto
// Cerrar al hacer click fuera o en un link
// Animación slideIn/slideOut

// 3. SCROLL ANIMATIONS (IntersectionObserver)
// Todos los elementos con clase .pa-animate
// se revelan con fadeInUp al entrar en viewport
// threshold: 0.15
// rootMargin: '0px 0px -60px 0px'
// delay escalonado en grupos con data-delay="100", "200", etc.

// 4. SMOOTH SCROLL
// Links con href="#section" → scroll suave
// Compensar offset del header (72px)

// 5. FORM HANDLER
// Al submit del formulario de contacto:
//   - Prevenir recarga
//   - Validar campos requeridos (nombre, empresa, correo, proyecto)
//   - Mostrar loading en botón
//   - Enviar via fetch a Formspree o action URL
//   - En success: ocultar formulario + mostrar mensaje de confirmación
//   - En error: mostrar mensaje de error sobrio

// 6. PROJECT CARD HOVER
// Activar overlay y contenido en hover/touch
// Compatible con mobile (click activa/desactiva)

// CSS ANIMATION CLASS:
// .pa-animate { opacity: 0; transform: translateY(24px); }
// .pa-animate.is-visible {
//   opacity: 1; transform: translateY(0);
//   transition: opacity 0.6s ease, transform 0.6s ease;
// }
```

---

## BLOQUE 18 — METADATA Y SEO

Pegar EXACTAMENTE en el <head>:

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Plant Art — Infraestructura Biofílica y Paisajismo Premium | Santiago, Chile</title>
<meta name="description"
  content="Plant Art diseña, construye y mantiene jardines verticales,
  muros verdes y sistemas de paisajismo integral para espacios
  corporativos, retail e institucionales. Santiago, Chile.">
<meta name="keywords"
  content="jardines verticales santiago, muros verdes corporativos,
  paisajismo empresarial chile, biofilia arquitectura, infraestructura verde">
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.plantart.cl/">
<meta property="og:title"
  content="Plant Art — Infraestructura Biofílica y Paisajismo Premium">
<meta property="og:description"
  content="Firma especializada en biofilia aplicada, jardines verticales,
  muros verdes y mantenimiento comercial para entornos de alto estándar.">
<meta property="og:image" content="[OG_IMAGE_PENDING]">
<meta name="twitter:card" content="summary_large_image">
<link rel="canonical" href="https://www.plantart.cl/">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
```

---

## BLOQUE 19 — REGLAS DE CLAIMS (OBLIGATORIO)

El agente NUNCA debe:
  - Inventar premios o reconocimientos
  - Inventar métricas o estadísticas
  - Inventar nombres de clientes o logos
  - Inventar años de proyectos específicos
  - Afirmar cobertura global sin respaldo

Cuando falte un dato, usar estos placeholders exactos:
  - [METRIC_PENDING]
  - [AWARD_PENDING]
  - [CLIENT_PENDING]
  - [YEAR_PENDING]
  - [IMAGE_PENDING]
  - [CONTACT_EMAIL_PENDING]
  - [CONTACT_PHONE_PENDING]
  - [CONTACT_ADDRESS_PENDING]

Los placeholders se marcan visualmente en el sitio con:
  border: 1px dashed rgba(181,150,91,0.3)
  background: rgba(181,150,91,0.04)
  color: var(--pa-slate)
  padding: 4px 8px
  border-radius: 4px
  font-size: 11px

---

## BLOQUE 20 — CHECKLIST FINAL DEL AGENTE

Antes de entregar el código, verificar:

DISEÑO:
  [ ] Paleta respetada al 100% — cero colores fuera del sistema
  [ ] Tipografía: serif solo en H1/statements/KPIs grandes
  [ ] Espacio negativo generoso en todas las secciones
  [ ] No hay gradientes tecnológicos ni verdes saturados
  [ ] No hay iconografía genérica de clipart
  [ ] No hay sliders automáticos ni carruseles

UX/TÉCNICA:
  [ ] Mobile first verificado en 375px y 768px
  [ ] Header sticky funcional con cambio de fondo al scroll
  [ ] Menú mobile con drawer funcional
  [ ] Formulario con validación y mensaje de confirmación
  [ ] Scroll suave a secciones por ancla
  [ ] Animaciones de entrada con IntersectionObserver
  [ ] Accesibilidad AA: aria-labels, contraste, focus visible
  [ ] Imágenes con loading="lazy" y alt descriptivo
  [ ] HTML semántico: header, nav, main, section, footer, article

COPY:
  [ ] Tono sofisticado, técnico y sin clichés en todo el sitio
  [ ] CTAs ejecutivos y precisos
  [ ] Placeholders correctamente marcados
  [ ] Sin claims no validados

ENTREGABLE FINAL:
  [ ] index.html completo y funcional
  [ ] styles.css con todas las variables y componentes
  [ ] main.js con todas las funciones especificadas
  [ ] README.md con instrucciones de deploy y lista de placeholders pendientes

---

FIN DEL PROMPT MAESTRO
Plant Art — Master Prompt Web v1.0
Documento confidencial de uso interno.
