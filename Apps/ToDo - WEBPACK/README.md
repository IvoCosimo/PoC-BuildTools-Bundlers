# PoC Webpack - CRUD de tareas

Proyecto base para la PoC de Build Tools & Bundlers (Grupo Webpack).

## Stack
- React 18 + React Router
- Axios contra una API local con `json-server` (persistencia real en `db.json`)
- Webpack 5 (config separada en `common` / `dev` / `prod`)

## Uso

```bash
npm install
npm start        # levanta json-server (puerto 4000) + webpack-dev-server (puerto 3000) con HMR
npm run build     # genera el build de produccion en /dist
```

`npm start` corre ambos procesos en paralelo (via `concurrently`). El cliente
llama a rutas relativas `/api/...`, que el dev server de Webpack reenvia a
`json-server` mediante `devServer.proxy` (ver `webpack.dev.js`). Esto evita
problemas de CORS y es equivalente a como se configuraria `server.proxy` en Vite.

> Nota: se usaba originalmente JSONPlaceholder, pero esa API no persiste
> los cambios (POST/PUT/DELETE responden OK pero no guardan nada), por lo
> que se reemplazo por `json-server` para tener un CRUD funcional de verdad
> en la demo.

## Estructura de la config de Webpack

- `webpack.common.js`: entry, output, resolve, loaders de JS/JSX, HtmlWebpackPlugin,
  dotenv-webpack y `optimization.splitChunks`.
- `webpack.dev.js`: modo development, source maps rapidos, dev server con HMR
  y `historyApiFallback` (necesario por React Router).
- `webpack.prod.js`: modo production, extraccion de CSS a archivo aparte via
  `MiniCssExtractPlugin`, source maps completos.

## Puntos a demostrar/comparar contra Vite

1. Tiempo de arranque de `npm start` vs `vite dev`.
2. Tiempo de `npm run build` vs `vite build`.
3. Tamaño y cantidad de chunks generados (revisar carpeta `dist/` tras el build:
   vas a ver un chunk `vendors` y un chunk por cada ruta lazy-loaded).
4. Cantidad de configuracion necesaria (lineas de config, numero de plugins/loaders
   instalados) para lograr lo mismo.
5. Comportamiento de HMR al editar `TaskListPage.jsx` con el dev server corriendo.
