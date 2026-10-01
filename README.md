# ⚡ Vortex Enterprise Platform

[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

**Vortex Enterprise Platform** es una plantilla frontend empresarial moderna, limpia y escalable basada en **React 19**, **TypeScript** y **Vite**. Diseñada con arquitectura modular, interfaz corporativa de alto rendimiento, sistema de notificaciones en tiempo real, gestión de perfiles y soporte nativo para **recorridos interactivos guíados** (*Onboarding Tours*).

---

## 📋 Tabla de Contenidos

- [✨ Características Clave](#-características-clave)
- [🚀 Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [📂 Arquitectura del Proyecto](#-arquitectura-del-proyecto)
- [💻 Instalación y Configuración](#-instalación-y-configuración)
- [🎯 Recorridos Interactivos (Driver.js / Tour Ready)](#-recorridos-interactivos-driverjs--tour-ready)
- [🧩 Catálogo de Componentes UI](#-catálogo-de-componentes-ui)
- [🛠️ Scripts Disponibles](#️-scripts-disponibles)
- [⚙️ Variables de Entorno](#️-variables-de-entorno)
- [📄 Licencia](#-licencia)

---

## ✨ Características Clave

- 🔐 **Autenticación y Rutas Protegidas:** Sistema de estado de sesión persistente con `AuthContext` y redirección automática de rutas no autenticadas.
- 📊 **Dashboard Corporativo:** Panel interactivo con resumen operativo, métricas clave (KPIs), acceso rápido y registro de eventos de auditoría.
- 📚 **Gestor de Manuales y Documentación:** Biblioteca de documentos interactivos con filtros por categoría, búsqueda por etiquetas y lector modal detallado.
- 🗃️ **Tablas de Datos Avanzadas:** Vistas de tabla y cuadrícula con ordenamiento, filtrado en tiempo real, selección múltiple y paginación rápida.
- 👤 **Perfil de Usuario & Edición:** Módulo completo de visualización y modificación de datos de perfil con feedback visual mediante mensajes Toast.
- 🎯 **Preparado para Guided Tours:** Componentes equipados con atributos semánticos `data-tour` listos para integrarse con librerías como **Driver.js** o **Shepherd.js**.
- 🎨 **Diseño Moderno & Accesible:** UI pulida en modo claro/oscuro estructurada con Tailwind CSS v4, íconos de Lucide React y micro-animaciones fluidas.

---

## 🚀 Tecnologías Utilizadas

| Tecnología | Descripción | Uso |
| :--- | :--- | :--- |
| **[React 19](https://react.dev/)** | Biblioteca UI basada en componentes | Renderizado de vistas y estado reactivo |
| **[TypeScript 7](https://www.typescriptlang.org/)** | Superset tipado para JavaScript | Tipado estático e interfaces de datos |
| **[Vite 8](https://vitejs.dev/)** | Build tool y servidor de desarrollo ultrarrápido | HMR y empaquetado de producción |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Framework CSS utility-first | Estilos modernos y diseño responsivo |
| **[Lucide React](https://lucide.dev/)** | Colección de íconos vectoriales sobrios | Iconografía limpia y consistente |
| **[Motion](https://motion.dev/)** | Biblioteca de animaciones para React | Transiciones de interfaz fluidas |
| **[Express](https://expressjs.com/)** | Servidor Node.js integrado | Soporte para endpoints API opcionales |
| **[@google/genai](https://www.npmjs.com/package/@google/genai)** | SDK de Google Gemini AI | Integración opcional de capacidades de Inteligencia Artificial |

---

## 📂 Arquitectura del Proyecto

El código fuente sigue un patrón modular limpio organizado dentro del directorio `src/`:

```text
driverJSpractice/
├── public/                    # Archivos estáticos públicos
├── src/
│   ├── components/            # Componentes reutilizables agrupados por dominio
│   │   ├── dashboard/         # Módulos del Dashboard (Banner, KPIs, Resumen)
│   │   ├── layout/            # Estructura principal (Header, Sidebar, AppLayout)
│   │   ├── manuals/           # Tarjetas, filtros y lector modal de manuales
│   │   ├── profile/           # Detalles de perfil y formularios de edición
│   │   ├── tables/            # Componentes de tablas de datos, barras de herramientas y paginación
│   │   └── ui/                # Sistema de componentes atómicos UI (Button, Modal, Input, Toast, etc.)
│   ├── context/               # Proveedores de estado global (AuthContext)
│   ├── mocks/                 # Datos simulados para desarrollo local (manuales, registros, usuario)
│   ├── pages/                 # Vistas principales de la aplicación
│   │   ├── Dashboard/         # Vista principal de estadísticas
│   │   ├── Data/              # Vista de registros e historial de datos
│   │   ├── EditProfile/       # Vista de edición de usuario
│   │   ├── Login/             # Pantalla de acceso al sistema
│   │   ├── Manuals/           # Biblioteca de manuales
│   │   └── Profile/           # Vista del perfil institucional
│   ├── types/                 # Definiciones de TypeScript e interfaces (auth, manuales, registros)
│   ├── App.tsx                # Enrutador principal y control de sesión
│   ├── index.css              # Importaciones de estilos universales de Tailwind
│   └── main.tsx               # Punto de entrada de la aplicación React
├── .env.example               # Plantilla de variables de entorno
├── metadata.json              # Configuración y metadatos de la plataforma
├── package.json               # Dependencias y scripts de ejecución
├── tsconfig.json              # Configuración de compilación TypeScript
└── vite.config.ts             # Configuración de Vite y plugins
```

---

## 💻 Instalación y Configuración

### Prerrequisitos

Asegúrate de contar con las siguientes herramientas instaladas en tu sistema:
- **Node.js**: `v18.0.0` o superior
- **npm**: `v9.0.0` o superior (o `yarn` / `pnpm`)

### Pasos de Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/driverJSpractice.git
   cd driverJSpractice
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**
   Copia el archivo de ejemplo `.env.example` para crear tu `.env`:
   ```bash
   cp .env.example .env
   ```

4. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre tu navegador en [http://localhost:3000](http://localhost:3000).

---

## 🎯 Recorridos Interactivos (Driver.js / Tour Ready)

El proyecto incluye anclas con el atributo `data-tour="..."` en los elementos clave de la interfaz. Esto facilita la activación inmediata de un tour interactivo para nuevos usuarios utilizando **Driver.js**.

### Atributos `data-tour` Disponibles:

| Atributo | Componente | Descripción |
| :--- | :--- | :--- |
| `data-tour="sidebar"` | `Sidebar.tsx` | Barra lateral principal de navegación |
| `data-tour="sidebar-nav"` | `Sidebar.tsx` | Lista de enlaces a módulos |
| `data-tour="header"` | `Header.tsx` | Barra superior con ruta de navegación y notificaciones |
| `data-tour="profile-quick-access"` | `Header.tsx` | Acceso rápido al perfil de usuario |
| `data-tour="dashboard-main"` | `DashboardPage.tsx` | Sección principal del Dashboard |
| `data-tour="dashboard-summary"` | `DashboardPage.tsx` | Panel de métricas y registros de auditoría |
| `data-tour="logout-btn"` | `Sidebar.tsx` | Botón para cerrar sesión de manera segura |

### Ejemplo de Integración con Driver.js

Para activar un recorrido guíado, puedes instalar `driver.js` e inicializarlo fácilmente:

```bash
npm install driver.js
```

```typescript
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const tour = driver({
  showProgress: true,
  steps: [
    {
      element: '[data-tour="header"]',
      popover: {
        title: 'Bienvenido a Vortex Platform',
        description: 'Aquí encontrarás la barra de navegación rápida y accesos directos de sesión.',
      }
    },
    {
      element: '[data-tour="sidebar-nav"]',
      popover: {
        title: 'Menú de Módulos',
        description: 'Navega entre el Dashboard, Manuales, Registro de Datos y tu Perfil.',
      }
    },
    {
      element: '[data-tour="dashboard-summary"]',
      popover: {
        title: 'Métricas e Indicadores',
        description: 'Visualiza el estado de la plataforma y la auditoría de eventos en tiempo real.',
      }
    }
  ]
});

// Iniciar el tour
tour.drive();
```

---

## 🧩 Catálogo de Componentes UI

El directorio `src/components/ui/` ofrece un conjunto de componentes reutilizables y altamente personalizables:

- 🟢 **`Button`**: Botón configurable con variantes (primary, secondary, outline, ghost, danger) y estados de carga.
- 🗂️ **`Card`**: Contenedores estructurados con encabezados, cuerpo y pie.
- 🏷️ **`Badge`**: Etiquetas indicadoras de estado con código de color (success, warning, error, info, neutral).
- 🖼️ **`Avatar`**: Avatar circular con iniciales automáticas e indicador de presencia/estado.
- 🔍 **`SearchBar` / `FilterBar`**: Barras de búsqueda con debounce y selectores de filtrado rápido.
- 🔲 **`Modal`**: Cuadros de diálogo superpuestos accesibles y animados.
- 📑 **`Pagination`**: Control numérico de paginación para tablas grandes de datos.
- 🔔 **`Toast`**: Notificaciones flotantes informativas y de confirmación.

---

## 🛠️ Scripts Disponibles

En el archivo `package.json` se definen los siguientes comandos:

- **`npm run dev`**: Inicia el servidor de desarrollo local en el puerto `3000`.
- **`npm run build`**: Compila y optimiza el proyecto para producción en la carpeta `dist/`.
- **`npm run preview`**: Sirve localmente los archivos compilados de producción para verificación.
- **`npm run lint`**: Realiza la verificación de tipos de TypeScript sin emitir archivos (`tsc --noEmit`).
- **`npm run clean`**: Elimina la carpeta de compilación `dist/` y temporales.

---

## ⚙️ Variables de Entorno

Puedes configurar el comportamiento de la aplicación ajustando las siguientes variables en tu archivo `.env`:

```env
# Clave de API opcional para integraciones con Google Gemini AI
GEMINI_API_KEY="TU_CLAVE_GEMINI_API"

# URL base pública de la aplicación
APP_URL="http://localhost:3000"
```

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia **MIT**. Consulta el archivo `LICENSE` para obtener más información.

---

<p align="center">
  Desarrollado para <strong>Vortex Enterprise Platform</strong>
</p>
