import { useState, useEffect } from "react";
import "./App.css";

import AddTodo from "./Components/AddTodo";
import ToDo_Title from "./Components/ToDo_Title";
import ToDoItems_Container from "./Components/ToDoItems_Container";
import WelcomeMessage from "./Components/WelcomeMessage";
import { TodoList_Context } from "./store/TodoList_store";
function App() {
  const getStoredTodos = () => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    return storedTodos;
  };

  const InitialTodo_items = [];
  const [Todo_items, setTodo_items] = useState(getStoredTodos);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(Todo_items));
  }, [Todo_items]);
  const addNewItem = (itemName, itemDueDate) => {
    if (itemName.length === 0 || itemDueDate.length === 0) {
      alert(
        "You are missing some thing! Write the ToDo Text & date and Try Again !!!"
      );
    } else {
      setTodo_items((currVlaue) => {
        const newToDoItem = [
          ...currVlaue,
          { name: itemName, date: itemDueDate },
        ];

        return newToDoItem;
      });
    }
  };
  const deleteTodoItem = (todoItemName) => {
    const newToDoItem = Todo_items.filter((item) => item.name !== todoItemName);
    setTodo_items(newToDoItem);
  };
  return (
    <TodoList_Context.Provider
      value={{
        Todo_items: Todo_items,
        addNewItem: addNewItem,
        deleteTodoItem: deleteTodoItem,
      }}
    >
      <center className="todo-container">
        <ToDo_Title />
        <div className="items-container">
          <AddTodo />
          <WelcomeMessage />
          <ToDoItems_Container />
        </div>
      </center>
    </TodoList_Context.Provider>
  );
}

export default App;
