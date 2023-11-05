import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import DataContext from "../../contexts/DataContext/DataContext";

const AddListButton = (props) => {
  const {edit_input, addListItem,todo_input} = useContext(DataContext);  
  return (
    <div className="add-button-component">
      <button
        onClick={() =>{
          if(props.operation === "ADD"){
            addListItem(todo_input, props.operation, props.taskIndex)
          }
          else{
            addListItem(edit_input, props.operation, props.taskIndex)
          }
        }

        }
      >
        {props.title}
      </button>
    </div>
  );
};
export default AddListButton;
