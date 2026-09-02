import React, { Suspense, lazy } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import logo from './imgs/vite.png';

// React.lazy + Suspense: junto con optimization.splitChunks de webpack.common.js,
// esto genera chunks separados por ruta. Es uno de los puntos clave a comparar
// contra el manejo nativo de code-splitting de Vite (import() dinamico + Rollup).
const TaskListPage = lazy(() => import('./pages/TaskListPage.jsx'));
const TaskFormPage = lazy(() => import('./pages/TaskFormPage.jsx'));

export default function App() {
  return (
    <div className="app">
      <img 
            src={logo} 
            alt="Logo" 
            width="100" 
            height="100"
          />
      <header className="app-header">
        <h1>POC - VITE</h1>
        <nav>
          <Link to="/">Tareas</Link>
          <Link to="/new">Nueva tarea</Link>
        </nav>
      </header>

      <main>
        <Suspense fallback={<p>Cargando...</p>}>
          <Routes>
            <Route path="/" element={<TaskListPage />} />
            <Route path="/new" element={<TaskFormPage />} />
            <Route path="/edit/:id" element={<TaskFormPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}
