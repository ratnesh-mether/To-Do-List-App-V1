import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import DemoContext from "../../contexts/DemoContext/DemoContext";

const TaskInput = (props) => {
  const {todo_input,handleInputChange } = useContext(DemoContext);  
  return (
    <div className="task-input-component">
      <input
        name="todo-input"
        onChange={handleInputChange}
        value={todo_input}
      />
    </div>
  );
};
export default TaskInput;
