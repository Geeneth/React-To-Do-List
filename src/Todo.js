import React from "react";
import "./Todo.css";

export default function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }

  return (
    <div>
      <label>
        <input
          className='todo-checkbox'
          type="checkbox"
          checked={todo.complete}
          onChange={handleTodoClick}
        />
        <span className="todo-name">{todo.name}</span>
      </label>
    </div>
  );
}
