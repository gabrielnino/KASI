1. EL MAQUETADO VISUAL (UI LAYOUTS) & ESTRUCTURA DE GRILLAS
Páginas principales del sitio KASI

Páginas base:

Home
Services
Solutions / AI Systems
Case Studies
About
Contact

La marca debe mantener una presencia técnica, corporativa y de alta precisión, alineada con KASI como marca comercial de Kroma AI Systems Inc. y su enfoque en arquitectura de software, automatización de pipelines y sistemas resilientes.

Grid System

Desktop

.container {
  max-width: 1280px;
  margin-inline: auto;
  padding-inline: 32px;
}

.grid-12 {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
}

Tablet

.container {
  padding-inline: 24px;
}

.grid-tablet {
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
}

Mobile

.container {
  padding-inline: 20px;
}

.grid-mobile {
  grid-template-columns: 1fr;
  gap: 16px;
}
Home Page

Desktop Layout

Navbar: logo horizontal izquierda, navegación centro, CTA derecha.
Hero: 12 columnas.
Col 1–6: headline, subtítulo, botones CTA.
Col 7–12: visual 3D/AI cube, red neuronal o silueta digital.
Services Strip: 4 cards en fila.
Trust Section: logos, métricas o claims técnicos.
Featured Solutions: layout 3 columnas.
Process Section: 4 pasos horizontales.
CTA Final: fondo navy, texto blanco, botón azul eléctrico.
Footer: logo, links, contacto, social icons.

Mobile Layout

Navbar colapsa a menú hamburguesa.
Hero en 1 columna: texto arriba, visual abajo.
Cards apiladas.
CTA full-width.
Footer en bloques verticales.
Services Page

Desktop

Hero interno compacto.
Grid de servicios en 3 columnas:
AI Solutions
Development & Integration
Cloud & Infrastructure
Security
Strategy & Consulting
Automation Systems
Cada card: icono SVG circular, título, descripción, CTA secundario.

Mobile

1 columna.
Cards con altura mínima de 220px.
Iconos arriba, texto debajo.
Solutions / AI Systems Page

Desktop

Hero con visual de cabeza digital o estructura neural.
Sección “Capabilities” en grid 2x3.
Sección técnica con layout 5/7:
izquierda: texto técnico.
derecha: diagrama visual.
CTA: “Build intelligent systems”.

Mobile

Hero centrado.
Capabilities en cards verticales.
Diagramas se muestran debajo del texto.
Case Studies Page

Desktop

Grid 3 columnas.
Card:
categoría
título
resultado medible
stack técnico
link
Filtro superior por industria o servicio.

Mobile

Cards 1 columna.
Filtros como chips horizontales con scroll.
About Page

Desktop

Hero institucional.
Sección narrativa 6/6:
izquierda: visión corporativa.
derecha: marca KASI / Kroma AI Systems Inc.
Timeline técnico.
Valores: Precision, Resilience, Clean Architecture, Automation.

Mobile

Todo en 1 columna.
Timeline vertical.
Contact Page

Desktop

Layout 5/7:
izquierda: mensaje, contacto, ubicación Vancouver BC.
derecha: formulario.
Formulario:
nombre
email
empresa
servicio
mensaje
botón submit

Mobile

Formulario primero.
Información de contacto debajo.
2. SISTEMA DE DISEÑO / GUÍA DE ESTILOS (DESIGN SYSTEM ATÓMICO)
Tipografía

Fuente principal: Montserrat
Fallback: Inter, Arial, sans-serif

--font-primary: "Montserrat", Inter, Arial, sans-serif;
Token	Tamaño	Peso	Line-height
H1	64px / 4rem	800	1.05
H2	44px / 2.75rem	700	1.15
H3	28px / 1.75rem	700	1.25
H4	22px / 1.375rem	600	1.3
Body Large	18px / 1.125rem	400	1.7
Body	16px / 1rem	400	1.65
Small	14px / .875rem	400	1.5
Utility	12px / .75rem	600	1.4
Paleta de colores
:root {
  --color-primary-blue: #0A2D56;
  --color-primary-navy: #061B33;
  --color-bg-dark: #020B18;
  --color-electric-blue: #009DFF;
  --color-cyan-accent: #00C8FF;

  --color-silver: #E6E7EA;
  --color-silver-dark: #9CA3AF;
  --color-white: #FFFFFF;
  --color-black: #050505;

  --color-success: #22C55E;
  --color-warning: #FACC15;
  --color-error: #EF4444;

  --color-border: rgba(230, 231, 234, 0.22);
}
Espaciados

Sistema basado en múltiplos de 8px.

--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-7: 40px;
--space-8: 48px;
--space-9: 64px;
--space-10: 80px;
--space-11: 96px;
--space-12: 120px;
Botones

Primary Button

.btn-primary {
  background: linear-gradient(90deg, #007BFF, #00C8FF);
  color: #FFFFFF;
  border-radius: 10px;
  padding: 14px 24px;
  font-weight: 700;
  transition: all .2s ease;
}

Hover

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(0, 157, 255, .35);
}

Active

.btn-primary:active {
  transform: translateY(0);
}

Disabled

.btn-primary:disabled {
  opacity: .45;
  cursor: not-allowed;
}
Inputs
.input {
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(230,231,234,.22);
  color: #FFFFFF;
  border-radius: 10px;
  padding: 14px 16px;
}

Focus

.input:focus {
  outline: none;
  border-color: #00C8FF;
  box-shadow: 0 0 0 3px rgba(0,200,255,.18);
}

Placeholder

.input::placeholder {
  color: #9CA3AF;
}

Error

.input-error {
  border-color: #EF4444;
}
Cards
.card {
  background: linear-gradient(180deg, #061B33, #020B18);
  border: 1px solid rgba(230,231,234,.16);
  border-radius: 20px;
  padding: 32px;
  min-height: 260px;
  transition: all .25s ease;
}

Hover

.card:hover {
  transform: translateY(-6px);
  border-color: rgba(0,200,255,.55);
  box-shadow: 0 24px 60px rgba(0,0,0,.35);
}
Iconografía
Estilo: lineal, técnico, circular.
Grosor: 1.5px–2px.
Formato: SVG.
Set requerido:
AI / Automation
Cloud
Security
Development
Consulting
Case Studies
About
Contact
Nota de entrega técnica (Handoff)

Assets a extraer para Dev Mode:

Logo horizontal: PNG + SVG.
Logo símbolo circular: PNG + SVG.
Favicon: 16, 32, 48, 64, 96, 128, 180, 192, 256, 512px.
Iconos SVG: Solutions, AI, Development, Cloud, Security, Consulting, Case Studies, About.
Imágenes optimizadas: WebP para hero, banners y cards.
Plantillas sociales reutilizables: Instagram, LinkedIn, Facebook, X, YouTube y TikTok.
Variables CSS/Tailwind: colores, tipografía, espaciados, sombras, radios y estados interactivos.