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
|   ├── data/            # Datos del sitio
│   │   ├── alojamientos.ts
│   │   ├── guias.ts
│   │   ├── ItemMenu.ts
│   │   ├── opiniones.ts
│   │   └── siteInfo.ts
│   │
│   |── layouts/
│   |    └── Layout.astro
|   | 
│   ├── pages/            # Rutas del sitio
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

- [Astro](https://astro.build) - 
- TypeScript - 
- Tailwind CSS -
- Lightbox -
- FontAwesome -

## 🧞  Comandos Disponibles

Todos los comandos se ejecutan desde la raíz del proyecto, utilizando una terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                         |
| `npm run dev`             | Inicia servidor local en `localhost:4321`        |
| `npm run build`           | Construye el sitio para producción en`./dist/`   |
| `npm run preview`         | Previsualiza el build localmentedeploying        |
| `npm run astro ...`       | Ejecuta comandos CLI de Astro `                  |
| `npm run astro -- --help` | Ayuda sobre la CLI de Astro                      |


## 🚀 Instalación y Configuración de Astro

### Requisitos Previos
- Tener **Node.js** instalado (incluye npm automáticamente)
- Verifica con: `node --version`
- Si no lo tienes, descárgalo de [nodejs.org](https://nodejs.org)

# 1. Pegar ruta de cd
cd nombre-del-proyecto
 Es necesario ingresar a la carpeta del proyecto para cargar los archivos y el proyecto.

# 2. Crear proyecto Astro
npm create astro@latest
- Este comando indica que se instale la última versión .

# 3. Responder las preguntas:
#    - Nombre del proyecto
     * Simplemente escribe el nombre del proyecto y se reemplaza el texto preexistente.
#    - Plantilla a usar
     * Puedes elegir entre usar archivos simples, una plantilla de Blog, o un archivo vacío.
#    - Instalar dependencias (Sí/No)
     * Se recomienda instalarlas (puedes elegir "Sí" o instalarlas manualmente después).
#    - Inicializar Git (opcional)
       Se te preguntará si deseas inicializar un repositorio de Git (puedes elegir "Sí" o "No").

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