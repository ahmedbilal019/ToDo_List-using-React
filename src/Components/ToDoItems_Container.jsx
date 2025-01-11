import React from "react";
import TodoItem from "./TodoItem";
function ToDoItems_Container({ TODOitems, onDeleteBtnClick }) {
  return (
    <div className="items-container">
      {TODOitems.map((item) => {
        return (
          <TodoItem
            todoName={item.name}
            todoDate={item.date}
            key={item.name}
            onDeleteBtnClick={onDeleteBtnClick}
          />
        );
      })}
    </div>
  );
}

export default ToDoItems_Container;
