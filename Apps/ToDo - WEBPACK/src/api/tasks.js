import axios from 'axios';

// process.env.API_BASE_URL es inyectado por dotenv-webpack a partir del .env
const api = axios.create({
  baseURL: process.env.API_BASE_URL,
});

// Usamos el recurso /todos de JSONPlaceholder como stand-in de "tareas".
// JSONPlaceholder no persiste realmente los cambios, pero responde como
// si lo hiciera (200/201 con el objeto simulado), suficiente para demostrar
// el flujo CRUD completo en la PoC.
export const getTasks = () =>
  api.get('/todos', { params: { _limit: 15 } }).then((res) => res.data);

export const getTask = (id) =>
  api.get(`/todos/${id}`).then((res) => res.data);

export const createTask = (task) =>
  api.post('/todos', task).then((res) => res.data);

export const updateTask = (id, task) =>
  api.put(`/todos/${id}`, task).then((res) => res.data);

export const deleteTask = (id) =>
  api.delete(`/todos/${id}`).then((res) => res.data);
