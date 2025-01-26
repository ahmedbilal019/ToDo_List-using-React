import React, { useContext } from "react";
import { TodoList_Context } from "../store/TodoList_store";

function WelcomeMessage() {
  const ContextObj = useContext(TodoList_Context);
  const TODOitems = ContextObj.Todo_items;
  return (
    TODOitems.length === 0 && (
      <div className="welcomeScreen">
        <h2 className="welcome-message">Welcome to ToDo App</h2>
        <p className="welcome-note">
          Make a List of ToDo Tasks and start your day!
        </p>
      </div>
    )
  );
}

export default WelcomeMessage;
