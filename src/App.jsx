import { useState } from "react";
import "./App.css";

import AddTodo from "./Components/AddTodo";
import ToDo_Title from "./Components/ToDo_Title";
import ToDoItems_Container from "./Components/ToDoItems_Container";
import WelcomeMessage from "./Components/WelcomeMessage";
function App() {
  const InitialTodo_items = [];
  const [Todo_items, setTodo_items] = useState(InitialTodo_items);
  const handleNewItem = (itemName, itemDueDate) => {
    if (itemName.length === 0 || itemDueDate.length === 0) {
      alert(
        "You are missing some thing! Check the date & text field and Try Again !!!"
      );
    } else {
      console.log(`new item added: ${itemName} Date:${itemDueDate}`);
      const newToDoItem = [
        ...Todo_items,
        { name: itemName, date: itemDueDate },
      ];
      setTodo_items(newToDoItem);
    }
  };
  const handleDeleteButton = (todoItemName) => {
    console.log(`item is deleted :: ${todoItemName}`);
    const newToDoItem = Todo_items.filter((item) => item.name !== todoItemName);
    setTodo_items(newToDoItem);
  };
  return (
    <center className="todo-container">
      <ToDo_Title />
      <div className="items-container">
        <AddTodo onNewItem={handleNewItem} />
        {Todo_items.length === 0 && <WelcomeMessage />}
        <ToDoItems_Container
          TODOitems={Todo_items}
          onDeleteBtnClick={handleDeleteButton}
        />
      </div>
    </center>
  );
}

export default App;
