import React, { useContext, useRef } from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { TodoList_Context } from "../store/TodoList_store";

function AddTodo() {
  const ContextObj = useContext(TodoList_Context);
  const addNewItem = ContextObj.addNewItem;
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
  };

  return (
    <div className="container ">
      <form className="row items_row" onSubmit={handleAddButtonClick}>
        <div className="col-6">
          <input
            className="inputfield"
            type="text"
            placeholder="Enter TODO Here"
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input ref={dueDateElement} className="inputfield" type="date" />
        </div>
        <div className="col-2">
          <button title="Add new Todo" className="btn btn-success Add-button">
            <MdOutlineAddBox className="addIcon" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
