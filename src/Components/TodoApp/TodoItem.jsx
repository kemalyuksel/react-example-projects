import React from 'react';
import { Button } from 'react-bootstrap';

function TodoItem({ todo, index, toggleComplete, removeTodo }) {
  return (
    <li className="todo-item">
      <span onClick={() => toggleComplete(index)} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} >
        {todo.text}
      </span>
      <Button variant="danger m-1" onClick={() => removeTodo(index)}>X</Button>
    </li>

  );
}

export default TodoItem;
