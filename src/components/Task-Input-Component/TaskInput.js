import React, { useContext, useEffect, useState } from "react";
import DataContext from "../../contexts/DataContext/DataContext";
import { useDispatch, useSelector } from "react-redux";
import { set_add_input } from "../../Redux-State/ListState/listSlice";

const TaskInput = (props) => {
  const {todo_input, edit_input,handleInputChange } = useContext(DataContext);  
  const dispatch = useDispatch();
  const add_input = useSelector(state => state.listSlice.add_input);
  useEffect(() =>{
    console.log("add_input:", add_input);
  },[add_input])
  const inputHandler=(input)=>{
    console.log(add_input)
    dispatch(set_add_input(input))
  }
  return (
    <div className="task-input-component">
      <input
        name="todo-input"
        onChange={()=>{handleInputChange(event, props.operation)
          inputHandler(event.target.value);
        }}
        value={props.operation === "ADD" ? todo_input : edit_input}
      />
    </div>
  );
};
export default TaskInput;
