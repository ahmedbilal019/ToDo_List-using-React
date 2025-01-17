import React, { useState } from "react";
import { MdOutlineAddBox } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const [TodoName, setTodoName] = useState("");
  const [DueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handleAddButtonClick = () => {
    // console.log(TodoName, DueDate);
    onNewItem(TodoName, DueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container ">
      <div className="row items_row">
        <div className="col-6">
          <input
            className="inputfield"
            type="text"
            placeholder="Enter TODO Here"
            value={TodoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            className="inputfield"
            type="date"
            onChange={handleDateChange}
            value={DueDate}
          />
        </div>
        <div className="col-2">
          <button
            title="Add new Todo"
            type="button"
            className="btn btn-success Add-button"
            onClick={handleAddButtonClick}
          >
            <MdOutlineAddBox className="addIcon"/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
