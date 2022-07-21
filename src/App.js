import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const LOCAL_STORAGE_KEY = "todoApp";

function App() {
  //todos is empty array initially
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log(storedTodos);
    if (storedTodos) {
      setTodos(storedTodos);
      console.log("Loading from local storage");
    }
  }, []);

  useEffect(() => {
    if (todos.length == 0) {
      return;
    }
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    console.log("Saving to local storage");
  }, [todos]);

  function toggleTodo(id) {
    console.log("toggleTodo");
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(todo) {
    const name = todoNameRef.current.value;
    if (name == "") {
      return;
    }
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: uuidv4(), name: name, complete: false },
    ]);
    console.log(name);
    todoNameRef.current.value = null;
    //setTodos([...todos, todo]);
  }

  function handleClearTodos() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <div id="content">
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input
        id="todo-add-text"
        ref={todoNameRef}
        type="text"
        placeholder="Add Task"
      />
      <br />
      <button onClick={handleAddTodo}>Add</button>
      <br />
      <button onClick={handleClearTodos}>Clear Completed</button>
      <br/>
      <div id="tasks-left">{todos.filter((todo) => !todo.complete).length} tasks left to do</div>
    </div>
  );
}

export default App;
