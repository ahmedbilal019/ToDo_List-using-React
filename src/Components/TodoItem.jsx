import React from "react";
import { MdDelete } from "react-icons/md";
function TodoItem({ todoName, todoDate, onDeleteBtnClick }) {
  return (
    <div className="container">
      <div className="row items_row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            title="Delete Todo"
            type="button"
            className="btn btn-danger delete-button"
            onClick={() => onDeleteBtnClick(todoName)}
          >
            <MdDelete className="deleteIcon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
