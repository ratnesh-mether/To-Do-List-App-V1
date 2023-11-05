import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import DataContext from "../../contexts/DataContext/DataContext";

const TaskInput = (props) => {
  const {todo_input, edit_input,handleInputChange } = useContext(DataContext);  
  return (
    <div className="task-input-component">
      <input
        name="todo-input"
        onChange={()=>handleInputChange(event, props.operation)}
        value={props.operation === "ADD" ? todo_input : edit_input}
      />
    </div>
  );
};
export default TaskInput;
