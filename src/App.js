import "./App.css";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";

function App() {
  const todos = [
    { id: 1, title: "prepare breakfast", completed: false },
    { id: 2, title: "study", completed: true },
  ];

  return (
    <div className="App">
      <Counter />
      <br />

      <div>
        <h1>Todo app</h1>
        {todos.map((todo) => {
          return <Todo todo={todo} />;
        })}
      </div>
    </div>
  );
}

export default App;
