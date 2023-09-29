import { useState } from "react";
import { TodoInputForm } from "./inputForm";
import "../src/style.css";
import { TodoList } from "./todoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    // Add the new todo item to the todos state
    setTodos((currentTodos) => [
      ...currentTodos,
      {
        id: crypto.randomUUID(),
        title: newItem,
        completed: false,
      },
    ]);
  }

  // Toggle the completed state of a todo item
  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed,
          };
        }
        return todo;
      });
    });
  }

  // Delete a todo item
  function deleteTodo() {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => {
        return todo.id !== id;
      });
    });
  }

  return (
    <>
      <TodoInputForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
