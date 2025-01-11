import React from "react";

function TodoItem({ todoName, todoDate, onDeleteBtnClick }) {
  return (
    <div className="container">
      <div className="row items_row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger Delete-button"
            onClick={() => onDeleteBtnClick(todoName)}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
