# PoC Vite - CRUD de tareas (equivalente al proyecto Webpack)

Version en Vite del mismo CRUD, para comparar contra la implementacion en Webpack.

## Stack
- React 18 + React Router (mismo codigo fuente que la version Webpack)
- Axios contra `json-server` local (persistencia real en `db.json`)
- Vite 5

## Uso

```bash
npm install
npm start        # levanta json-server (4000) + vite dev server (3000) con HMR
npm run build     # genera el build de produccion en /dist
npm run preview   # sirve el build de /dist para probarlo localmente
```

## Diferencias clave vs la version Webpack

| Aspecto | Webpack | Vite |
|---|---|---|
| Archivos de config | 3 (`common`/`dev`/`prod`) | 1 (`vite.config.js`) |
| Entry HTML | `public/index.html` (template) | `index.html` en la raiz (entry real) |
| Env vars | `process.env.X` + `dotenv-webpack` | `import.meta.env.VITE_X` (nativo) |
| Transpilado JSX | `babel-loader` + presets | esbuild (nativo, sin config) |
| CSS | `css-loader`/`style-loader`/`MiniCssExtractPlugin` | nativo, sin loaders |
| Dev server | `webpack-dev-server` (bundle completo) | nativo + ESM (arranque casi instantaneo) |
| Build (este proyecto) | ~8s | ~2.1s |

## Notas

El codigo de `src/` es identico al de la version Webpack salvo:
- `src/index.js` -> `src/index.jsx` (convencion de Vite)
- `process.env.X` -> `import.meta.env.VITE_X` en `App.jsx` y `api/tasks.js`
