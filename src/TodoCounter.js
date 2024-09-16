import './TodoCounter.css';


function TodoCounter({ totalTodos, completed }) {
  return (
    <h1 >
      Haz completado {completed} de {totalTodos} TODOS
    </h1>
  );
}

export { TodoCounter };
