import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getTask, createTask, updateTask } from '../api/tasks.js';

export default function TaskFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (isEditing) {
      getTask(id).then((task) => {
        setTitle(task.title);
        setCompleted(task.completed);
      });
    }
  }, [id, isEditing]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { title, completed, userId: 1 };

    if (isEditing) {
      await updateTask(id, payload);
    } else {
      await createTask(payload);
    }
    navigate('/');
  };

  return (
    <section>
      <h2>{isEditing ? 'Editar tarea' : 'Nueva tarea'}</h2>
      <form onSubmit={handleSubmit} className="task-form">
        <label>
          Título
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label className="checkbox">
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
          Completada
        </label>
        <button type="submit">Guardar</button>
      </form>
    </section>
  );
}
