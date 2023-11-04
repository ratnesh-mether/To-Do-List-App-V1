import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import DemoContext from "../../contexts/DemoContext/DemoContext";

const AddListButton = (props) => {
  const {addListItem,todo_input} = useContext(DemoContext);  
  return (
    <div className="add-button-component">
      <button
        onClick={() =>
          addListItem(todo_input, props.operation, props.taskIndex)
        }
      >
        {props.title}
      </button>
    </div>
  );
};
export default AddListButton;
