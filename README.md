# Proof of Concept: Build Tools & Bundlers (Webpack vs Vite)

**Universidad Tecnológica Nacional - Facultad Regional Rosario**
**Ingeniería en Sistemas de Información**

Este repositorio contiene los entregables y el código fuente desarrollados para la Prueba de Concepto (PoC) comparativa entre **Webpack** y **Vite**. El objetivo del proyecto es analizar y contrastar ambas tecnologías tanto desde un enfoque teórico (arquitectura, adopción comunitaria, curva de aprendizaje) como práctico (tiempos de build, velocidad del servidor de desarrollo y complejidad de configuración).

---

## 📁 Estructura del Repositorio

* **[`poc-webpack/`](./poc-webpack)**: Aplicación CRUD de tareas desarrollada con React y empaquetada utilizando Webpack. Incluye configuración manual granular para los distintos entornos y transpilación con Babel.
* **[`poc-vite/`](./poc-vite)**: La misma aplicación CRUD de tareas implementada utilizando Vite, destacando su enfoque *zero-config* mediante su plugin oficial y la velocidad de su servidor basado en ES Modules nativos.
* **[`InformePoC-final.pdf`](./InformePoC-final.pdf)**: Documento técnico formal con la investigación teórica, metodología de evaluación, análisis de métricas obtenidas y conclusiones arquitectónicas.
* **[`presentacion-PoC.pdf`](./presentacion-PoC.pdf)**: Material de apoyo visual utilizado para la defensa y demostración en vivo de la PoC.

---

## 🚀 Cómo ejecutar los proyectos locales

Ambos proyectos utilizan **JSON Server** para simular una API REST local. Para probarlos, es necesario levantar tanto la interfaz gráfica (frontend) como el servidor de datos (backend).

### 1. Levantar el entorno Webpack

Desde la raíz del repositorio, abrí una terminal y ejecutá:

```bash
cd poc-webpack
npm install
npm start   # Leventa el JSON server y el Dev Server a la vez (ver package.json)
```

### 2. Levantar el entorno Vite

Desde la raíz del repositorio, abrí una terminal y ejecutá:

```bash
cd poc-vite
npm install
npm start       # Leventa el JSON server y el Dev Server a la vez (ver package.json)
```

### 3. Comandos de Producción (Build)

Para probar y cronometrar la generación de los paquetes finales (*bundles*), podés ejecutar el siguiente comando dentro de cualquiera de los dos directorios:

```bash
npm run build
```

Esto generará la carpeta `dist/` con los archivos estáticos optimizados.

---

## 👥 Integrantes del Equipo

* Bitti, Guido (48937)
* Cosimo, Ivo (52618)
* Mora, Joaquín (51388)
* Ulla, Lucas (53246)
