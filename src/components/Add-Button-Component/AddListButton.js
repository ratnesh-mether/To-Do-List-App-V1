import React, { useContext, useState } from "react";
import DataContext from "../../contexts/DataContext/DataContext";
import { useDispatch } from "react-redux";
import { addTodo } from "../../Redux-State/ListState/listSlice";

const AddListButton = (props) => {
  const { edit_input, addListItem, todo_input } = useContext(DataContext);
  const dispatch = useDispatch();
  const addListHandler = (item) => {
    if(item !== "")
      dispatch(addTodo(item))
    else 
      alert("Empty Input Redux");
  }
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
        addListHandler(todo_input)
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
