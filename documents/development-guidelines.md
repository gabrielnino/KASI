# Búnker Metodológico: Lineamientos de Desarrollo e Innegociables

**Proyecto:** Sitio Institucional Corporativo  
**Estratega / Fundador Humano:** Luis Gabriel Niño  
**Ejecutor / Asistente IA:** AI Swarm / Antigravity Orquestador  

---

## 1. Declaración de Principios y Gobernanza

Este documento establece el marco metodológico estricto e innegociable bajo el cual operará **Antigravity** y cualquier agente de IA para la construcción, evolución y mantenimiento del sitio web institucional. 

El desarrollo se rige bajo una filosofía de **arquitectura limpia, optimización radical del tiempo y eliminación absoluta de la dispersión cognitiva**. La IA actúa como el brazo ejecutor y herramentista; el control estratégico y la toma de decisiones permanecen en el Fundador Humano.

---

## 2. Los Innegociables del Proyecto (Reglas de Oro)

Cualquier incremento de código, componente o configuración que viole los siguientes puntos será **rechazado automáticamente** por el pipeline antes de su despliegue:

*   **Hiper-Optimización SEO y Velocidad Absoluta:** El sitio debe mantener un puntaje mínimo de **95/100** en *Performance* y *SEO* en Google PageSpeed Insights / Lighthouse. El uso de JavaScript en el cliente debe tender a cero.
*   **Entrega de Código Completo:** Está prohibido que la IA genere bloques de código con *placeholders*, comentarios de elisión (`// TODO: implementar aquí`) o estructuras incompletas. Cada entrega debe ser un bloque funcional, limpio y autocontenido.
*   **Enfoque de Pruebas Multi-Dispositivo Real:** No se admiten validaciones genéricas. Las pruebas deben emular de forma obligatoria los motores de renderizado de los tres entornos objetivo:
    1.  **Desktop:** Google Chrome (Blink).
    2.  **iOS (iPhone):** Safari (WebKit).
    3.  **Android:** Google Chrome (Blink).
*   **Bucle de SEO Dinámico:** Cada iteración técnica o alteración de contenido obliga a un recálculo automático del mapa de palabras clave (*Keywords*) y auditoría de metadatos.
*   **Métricas del Mundo Real Sin Penalización:** Es mandatoria la presencia de **Google Analytics 4 (GA4)** y **Vercel Analytics**. Sin embargo, su carga debe estar optimizada (ej. mediante la carga diferida de scripts) para que bajo ninguna circunstancia penalicen el tiempo de interactividad (TTI) o degraden el rendimiento.

---

## 3. Stack Tecnológico e Infraestructura

La selección tecnológica está diseñada para minimizar el costo operativo, anular la necesidad de mantenimiento de servidores y maximizar la velocidad en el *Edge*:

*   **Framework Core:** Astro (Static Site Generation - SSG). Renderizado puro en tiempo de compilación.
*   **Estilos:** Tailwind CSS (Enfoque *Mobile-First*, clases utilitarias optimizadas mediante purga en producción).
*   **Control de Versiones:** GitHub (Repositorio privado, base de operaciones de integración).
*   **Despliegue y Hosting:** Vercel (Capa *Freemium / Hobby*). Aprovechamiento de Edge Network CDN, SSL automático y URLs de previsualización por cada *Pull Request*.

---

## 4. Arquitectura de Información y Estructura de Código

### Alcance de la Fase 1
El alcance está limitado estrictamente a un **Sitio Institucional de Posicionamiento**. Se excluyen por completo componentes de software interactivo, bases de datos complejas o *dashboards* de tipo SaaS para reducir la carga cognitiva inicial.

El sitio consta exactamente de 5 secciones:
1.  **Inicio:** Landing page de alta conversión orientada al negocio.
2.  **Servicios:** Catálogo y descripción de la oferta core.
3.  **Sistemas AI:** Espacio estratégico para el posicionamiento de capacidades de automatización y swarms.
4.  **Casos:** Casos de estudio y validación de éxito técnico.
5.  **Nosotros:** Identidad, visión y respaldo de la marca.

### Organización del Código: Feature-Driven
El proyecto no utilizará una estructura puramente atómica global. Se organizará **por características (Feature-Driven)**. Cada una de las 5 secciones tendrá su propio módulo aislado con sus componentes y layouts específicos. Solo los elementos transversales (Header, Footer, Botones Base) residirán en una carpeta común (*shared*).

---

## 5. El Contrato de Calidad: Pipeline de Antigravity

**Antigravity** ejecutará las tareas basándose estrictamente en los siguientes dos contratos de control:

### Definition of Ready (DoR) - ¿Cuándo se puede empezar?
Un requerimiento o tarea está listo para que la IA escriba código solo si cuenta con:
1.  El mapa de componentes de Astro requeridos perfectamente delimitado.
2.  El esquema de datos estructurado (si consume Markdown o JSON local).
3.  Los textos (*copies*) definitivos aprobados por el estratega.

### Definition of Done (DoD) - ¿Cuándo está terminado?
Un incremento de código se considera "Hecho" y listo para producción si y solo si cumple de forma automatizada con:
*   **Pruebas Unitarias:** Ejecutadas en **Vitest** con **Testing Library**, validando la inyección de propiedades y el renderizado correcto de la estructura Astro.
*   **Pruebas de Integración y UI (E2E):** Ejecutadas en **Playwright** simulando mediante perfiles de emulación los dispositivos móviles (iOS/Android) y escritorio requeridos de forma obligatoria.
*   **Filtro de Despliegue (Lighthouse CI):** Bloqueo automático del despliegue en Vercel si la auditoría arroja un score inferior a 95 en rendimiento o SEO.
*   **Validación Estricta de Tags y Analítica:** Presencia obligatoria de `<title>`, `meta description`, etiquetas Open Graph (`og:*`), atributos `alt` en imágenes, y verificación de la correcta inicialización y nulo impacto en rendimiento de los scripts de GA4 y Vercel Analytics.

---

## 6. Estándar de Nombres y Estructura de Directorios

### Convención de Nomenclatura (Naming Conventions)
*   **Páginas (Rutas de Astro):** Minúsculas y en formato *kebab-case* (ej. `index.astro`, `services.astro`, `solutions.astro`).
*   **Componentes de Astro:** Nombre en *PascalCase* (ej. `Navbar.astro`, `Footer.astro`, `AICube.astro`, `PipelineDiagram.astro`).
*   **Hojas de Estilo:** Minúsculas y en formato *kebab-case* (ej. `global.css`).
*   **Archivos de Pruebas Unitarias:** PascalCase coincidiendo con el componente que evalúan y extensión `.test.ts` (ej. `Navbar.test.ts`).
*   **Archivos de Pruebas E2E (Integración):** Minúsculas, formato *kebab-case* y extensión `.spec.ts` (ej. `contact.spec.ts`).
*   **Documentación de Diseño/Negocio:** Minúsculas y en formato *kebab-case* (ej. `kasi-maquetado-visual.md`).
*   **Imágenes y Recursos Gráficos:** Minúsculas y en formato *snake_case* (ej. `kasi_white.png`, `logo_texto.png`).

### Esquema de Directorios (Folder Structure)
```
/
├── documents/                  # Documentación estratégica y lineamientos
│   └── *.md (kebab-case.md)
├── public/                     # Recursos estáticos de la raíz
│   ├── favicon.png             # Icono de pestaña (256x256)
│   ├── favicon.ico             # Fallback para compatibilidad
│   └── assets/
│       └── logos/              # Logotipos corporativos (snake_case)
├── src/
│   ├── pages/                  # Enrutado del sitio (kebab-case.astro)
│   ├── shared/                 # Componentes y estilos compartidos
│   │   ├── components/         # Elementos globales (Navbar, Footer)
│   │   ├── layouts/            # Plantillas globales (Layout)
│   │   └── styles/             # Hojas de estilo compartidas (global.css)
│   └── features/               # Módulos aislados orientados a características
│       ├── home/components/
│       ├── solutions/components/
│       └── contact/components/
└── tests/                      # Suites de pruebas automatizadas
    ├── unit/                   # Pruebas unitarias (*.test.ts)
    └── e2e/                    # Pruebas de integración (*.spec.ts)
```