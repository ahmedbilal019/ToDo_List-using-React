import React from "react";

function AddTodo() {
  return (
    <div class="container ">
      <div class="row items_row">
        <div class="col-6">
          <input type="text" placeholder="Enter TODO Here" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success App_buttons">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
