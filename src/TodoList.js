import React from "react";
import Todo from "./Todo";
import "./Todo.css";

export default function TodoList({todos, toggleTodo}) {
  return (
        
    todos.map((todo, index) => (
        <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
    ))

  );
}