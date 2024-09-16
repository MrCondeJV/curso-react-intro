import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";
import "./App.css";
import React from "react";

const defaultTodos = [
  { text: "Cortar Cebolla", completed: false },
  { text: "Tomar el curso de React.JS", completed: false },
  { text: "Llorrar con la Llorona", completed: false },
  { text: "Montar bicicleta", completed: false },
  { text: "Montar Carro", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} totalTodos={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem 
          key={todo.text}  
          text={todo.text}
          completed ={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
