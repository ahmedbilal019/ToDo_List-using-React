import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoList_Context } from "../store/TodoList_store";
function ToDoItems_Container() {
  const ContextObj = useContext(TodoList_Context);
  const TODOitems = ContextObj.Todo_items;
  return (
    <div className="items-container">
      {TODOitems.map((item) => {
        return (
          <TodoItem todoName={item.name} todoDate={item.date} key={item.name} />
        );
      })}
    </div>
  );
}

export default ToDoItems_Container;
