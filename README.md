# 🌲 Turismo del Bosque

Sitio web turístico para explorar chiloe, descubrir sus alojamientos, guías y lugares emblemáticos.


## 📁 Estructura del Proyecto

Dentro del proyecto Astro encontrarás la siguiente estructura de carpetas y archivos:

```text

├── src/
|   | └── assets
│   ├── components/
│   │   ├── cards/       # Tarjetas 
│   │   ├── contact/     # Sección de contacto
│   │   └── inicio/      # Componentes del inicio
|   ├── Footer.astro
│   ├── Header.astro 
│   |
|   ├── data/
│   │   ├── alojamientos.ts
│   │   ├── guias.ts
│   │   ├── ItemMenu.ts
│   │   ├── opiniones.ts
│   │   └── siteInfo.ts
│   │
│   |── layouts/
│   |    └── Layout.astro
|   | 
│   ├── pages/
│   │   ├── alojamientos/
│   │   │   └── [id].astro - Detalle de alojamiento
│   │   ├── guias/
│   │   │   └── [id].astro - Detalle de guía
│   │   ├── alojamientos.astro - Listado de alojamientos
│   │   ├── contacto.astro - Contacto
│   │   ├── guias.astro - Guías turísticas
│   │   ├── index.astro - Inicio
│   │   └── nosotros.astro - Sobre nosotros
│
└── package.json

```
## 🛠️ Tecnologías

- [Astro](https://astro.build) 
- TypeScript/JS - 
- Tailwind CSS - 
- Lightbox/FontAwesome -


## 🧞  Comandos Disponibles

Todos los comandos se ejecutan desde la raíz del proyecto, utilizando una terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |


## 🚀 Instalación y Configuración de Astro

### Requisitos Previos
- Tener **Node.js** instalado (incluye npm automáticamente)
- Verifica con: `node --version`
- Si no lo tienes, descárgalo de [nodejs.org](https://nodejs.org)

# 1. Entrar al proyecto
cd nombre-del-proyecto
 Es necesario ingresar a la carpeta del proyecto para cargar los archivos y el proyecto.

# 2. Crear proyecto Astro
npm create astro@latest
- Este comando indica que se instale la última versión .

# 3. Responder las preguntas:
#    - Nombre del proyecto
     * Simplemente escribe el nombre del proyecto y se reemplaza el texto preexistente.
#    - Plantilla a usar
     * Puedes elegir entre usar archivos simples, una plantilla de Blog, o un archivo vacío [6].
#    - Instalar dependencias (Sí/No)
     * Se recomienda instalarlas (puedes elegir "Sí" o instalarlas manualmente después) [6, 7].
#    - Inicializar Git (opcional)
       Se te preguntará si deseas inicializar un repositorio de Git (puedes elegir "Sí" o "No") [7].

# 4. Instalar dependencias (si no lo hiciste antes)
npm install
- Si elegiste no instalar las dependencias automáticamente en el paso 2, debes ejecutar este comando para instalarlas manualmente una vez dentro del proyecto.

# 5. Ejecutar en modo desarrollo
npm run dev
- Una vez que las dependencias están instaladas, este comando ejecuta el proyecto .

# 6. Abrir en el navegador
 http://localhost:4321
- Al ejecutar el comando, se indica el puerto donde se está ejecutando el proyecto.

***