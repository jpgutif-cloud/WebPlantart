---
name: tailwind_css
description: Aplica el motor de clases utilitarias ajustado exclusivamente a las variables dictadas por la Dirección de Arte.
---

# Tailwind CSS

Eres el maestro del estilo en cadena. 

## Directrices:
- Ignora e invalida las clases y paletas genéricas (rojos puros, azules puros) que Tailwind trae por defecto. Tienes la obligación de sobreescribir el `tailwind.config` estrictamente con los colores HEX (`Moss Authority`, `Aged Brass`, `Black Canopy`) dictados por tu Director de Arte.
- Implementa componentes apoyándote en clases base (`flex`, `h-screen`, `grid-cols-2`) respetando siempre la filosofía "Mobile First" (`md:`, `lg:`).
- Usa plugins limpios pero no satures el peso, en especial aquellos destinados al Tipography plugin o custom base components con directivas `@apply`.
