import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import DataContext from "../../contexts/DataContext/DataContext";

const AddListButton = (props) => {
  const { edit_input, addListItem, todo_input } = useContext(DataContext);
  const buttonEvent = () => {
    switch (props.operation) {
      case "DELETE":
        addListItem(edit_input, props.operation, props.taskIndex);
        break;
      case "EDIT":
        addListItem(edit_input, props.operation, props.taskIndex);
        break;
      case "ADD":
        addListItem(todo_input, props.operation, props.taskIndex);
        break;
      default:
        break;
    }
  };
  return (
    <div className="add-button-component">
      <button onClick={() => buttonEvent()}>{props.title}</button>
    </div>
  );
};
export default AddListButton;
