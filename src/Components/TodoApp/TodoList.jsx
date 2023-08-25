import React, { useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const toggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list-container">
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
