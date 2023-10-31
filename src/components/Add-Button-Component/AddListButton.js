import React, { useState } from "react";
import { UserContext } from "../../App";

const AddListButton = (props) => {
  const {todo_tasks_array,addListItem,todo_input,taskIndex,handleInputChange, } = React.useContext(UserContext);  
  return (
    <div className="add-button-component">
      <button
        onClick={() =>
          addListItem(todo_input, props.operation, taskIndex)
        }
      >
        {props.title}
      </button>
    </div>
  );
};
export default AddListButton;
