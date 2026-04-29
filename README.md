# Plant Art — Website v2.0

Sitio web corporativo premium para **Plant Art**, firma chilena especializada en infraestructura biofílica, paisajismo integral y operación vegetal para entornos de alto estándar.

## Stack

- HTML5 semántico
- CSS3 con Custom Properties (sin frameworks)
- JavaScript Vanilla (sin dependencias)
- Google Fonts: Cormorant Garamond, Manrope, Inter
- Iconografía: SVG inline (sin dependencias CDN)

## Archivos

```
index.html    — Markup semántico completo
styles.css    — Design system + todos los componentes
main.js       — Interacciones (header, drawer, scroll, form)
README.md     — Este archivo
```

## Uso local

Abrir `index.html` en un navegador moderno. No requiere servidor ni build.

Para servidor local (opcional):
```bash
npx serve .
```

## Documentación de referencia

| Documento | Función |
|---|---|
| `plantart-brand-book-v2.md` | Biblia de marca (rector) |
| `plantart-master-prompt-web.md` | Especificación técnica completa |
| `plantart-homepage.md` | Copy maestro de homepage |

---

## Placeholders Pendientes de Validación

| Placeholder | Ubicación | Acción requerida |
|---|---|---|
| `[OG_IMAGE_PENDING]` | `<head>` meta og:image | Subir imagen hero aprobada |
| `[LINKEDIN_URL_PENDING]` | Footer, ícono LinkedIn `href="#"` | Agregar URL de página LinkedIn |
| Imágenes Unsplash (4) | Hero, Projects ×3, About | Reemplazar con fotografía propia (`data-placeholder="true"`) |
| Logos de clientes | Sección Clients | Reemplazar texto con SVG/PNG monocromos autorizados |
| Año fundación oficial | No publicado actualmente | Confirmar con Gerencia |
| Formulario `action` | `<form id="contactForm">` | Conectar a Formspree o backend real |

### Cómo buscar placeholders en el código
```bash
# Encontrar todas las imágenes placeholder
grep -n "data-placeholder" index.html

# Encontrar links pendientes
grep -n 'href="#"' index.html
```

---

## Datos Verificados (Fuente: Propuesta Técnica Arauco PAK)

| Dato | Valor | Verificado |
|---|---|---|
| Años de trayectoria | +20 (primer trabajo 2005) | ✓ |
| Superficie bajo gestión | 208.400+ m² | ✓ |
| Clientes activos | +30 | ✓ |
| Profesionales | 13+ | ✓ |
| Contacto email | alan@plantart.cl | ✓ |
| Contacto teléfono | +56 9 8464 0878 | ✓ |
| Dirección | Raúl Labbé 12613, Lo Barnechea | ✓ |
| Miembro Chile GBC | Desde 2011 | ✓ |
| Lean Six Sigma | Desde 2019 | ✓ |

---

## Conflictos Documentales Resueltos

1. **Font imports**: Brand Book usa solo `wght@500;600`, Master Prompt incluye `ital`. → Se usó Master Prompt (más completo).
2. **Número de KPIs**: Homepage Copy tiene 5, Master Prompt tiene 4. → Se usaron 4 (sin "premios" no verificados).
3. **Video vs Imagen hero**: Master Prompt ofrece spec de video, Brand Book dice "solo si calidad sobresaliente". → Imagen (no hay video disponible).
4. **Clientes como logos vs texto**: No hay logos autorizados. → Se muestran como texto monócromo.
5. **Contacto**: Homepage Copy marca `[PENDING]`, PAK.html tiene datos reales. → Se usaron datos PAK.

---

## Checklist de QA

- [x] Paleta cromática respetada — 0 colores fuera del sistema
- [x] Tipografía serif solo en H1 / KPIs grandes
- [x] Espacio negativo generoso en cada sección
- [x] Mobile-first: funcional en 375px
- [x] Header sticky con blur/glass al scroll
- [x] Drawer mobile con overlay y cierre por Escape
- [x] Formulario con validación visual + mensaje de éxito
- [x] Scroll suave con offset de header
- [x] IntersectionObserver con fallback
- [x] Accesibilidad: aria-labels, roles, heading hierarchy, focus-visible
- [x] Imágenes: lazy loading + alt descriptivo
- [x] HTML semántico: header, main, nav, section, footer
- [x] 0 dependencias JS externas
- [x] 0 claims no validados
- [x] Todos los placeholders localizables (`data-placeholder`)
