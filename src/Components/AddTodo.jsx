import React, { useState } from "react";

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
    <div class="container ">
      <div class="row items_row">
        <div class="col-6">
          <input
            className="inputfield"
            type="text"
            placeholder="Enter TODO Here"
            value={TodoName}
            onChange={handleNameChange}
          />
        </div>
        <div class="col-4">
          <input
            className="inputfield"
            type="date"
            onChange={handleDateChange}
            value={DueDate}
          />
        </div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-success Add-button"
            onClick={handleAddButtonClick}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
