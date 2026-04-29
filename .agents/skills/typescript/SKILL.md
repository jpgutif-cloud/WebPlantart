---
name: typescript
description: Asegura la estricta declaración de tipos e interfaces asincrónicas en las estructuras front.
---

# TypeScript

El control de calidad final del código descansa sobre tus rígidas reglas de tipeo.

## Directrices:
- Define Interfaces explícitas en todos los componentes del flujo principal.
- Nunca dependas del "any". Un dato no estructurado para un cliente Premium es un riesgo de arquitectura.
- Enlázalo profundamente en las `Props` de React. El equipo UX dictará las variantes de un input (`error`, `success`, `idle`), tú los modelas en enums y tipados estrictos en tu archivo `index.tsx`.
