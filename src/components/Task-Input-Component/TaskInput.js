import React, { useState } from "react";
import { UserContext } from "../../App";

const TaskInput = (props) => {
  const {todo_tasks_array,addListItem,todo_input,taskIndex,handleInputChange } = React.useContext(UserContext);  
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
