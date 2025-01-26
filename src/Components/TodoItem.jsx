import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { IoMdCheckmarkCircle } from "react-icons/io";

import { TodoList_Context } from "../store/TodoList_store";
function TodoItem({ todoName, todoDate }) {
  const ContextObj = useContext(TodoList_Context);
  const deleteTodoItem = ContextObj.deleteTodoItem;
  const markTodo = ContextObj.markTodo;
  return (
    <div className="container">
      <div className="row items_row">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            title="Delete Todo"
            type="button"
            className="btn btn-danger delete-button"
            onClick={() => deleteTodoItem(todoName)}
          >
            <MdDelete className="deleteIcon" />
          </button>
        </div>
        <div className="col-2">
          <button
            title="Mark as Complete"
            type="button"
            className="btn btn-primary markBtn"
            onClick={() => markTodo(todoName)}
          >
            <IoMdCheckmarkCircle className="markIcon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
