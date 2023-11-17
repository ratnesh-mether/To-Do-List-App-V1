import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import DataContext from "../../contexts/DataContext/DataContext";
import { useDispatch } from "react-redux";
import store from "../../Redux-Store/store";
import { set_add_input } from "../../Redux-State/ListState/listSlice";

const TaskInput = (props) => {
  const {todo_input, edit_input,handleInputChange } = useContext(DataContext);  
  const dispatch = useDispatch();
  
  useEffect(()=>{
    const input = store.getState().listSlice.add_input;
    console.log(input)
  },[todo_input])
  const inputHandler=(input)=>{
    dispatch(set_add_input(input))
  }
  return (
    <div className="task-input-component">
      <input
        name="todo-input"
        onChange={()=>{handleInputChange(event, props.operation)
          inputHandler(todo_input);
        }}
        value={props.operation === "ADD" ? todo_input : edit_input}
      />
    </div>
  );
};
export default TaskInput;
