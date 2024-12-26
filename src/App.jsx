import "./App.css";

import AddTodo from "./Components/AddTodo";
import ToDo_Title from "./Components/ToDo_Title";
import ToDoItems_Container from "./Components/ToDoItems_Container";
function App() {
  const TODOitems = [
    {
      name: "Buy Books",
      date: "5/12/2024",
    },
    {
      name: "Attend Class",
      date: "5/12/2024",
    },
    {
      name: "Buy Milk",
      date: "5/08/2024",
    },
  ];
  return (
    <center className="todo-container">
      <ToDo_Title />
      <div className="items-container">
        <AddTodo />
        <ToDoItems_Container TODOitems={TODOitems} />
      </div>
    </center>
  );
}

export default App;
