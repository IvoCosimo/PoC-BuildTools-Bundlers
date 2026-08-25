import React from 'react';
import { Link } from 'react-router-dom';

export default function TaskItem({ task, onDelete }) {
  return (
    <li className={`task-item ${task.completed ? 'done' : ''}`}>
      <span>{task.title}</span>
      <div className="task-actions">
        <Link to={`/edit/${task.id}`}>Editar</Link>
        <button onClick={() => onDelete(task.id)}>Eliminar</button>
      </div>
    </li>
  );
}
