import React, { useState } from "react";

const TaskInput = (props) => {
  return (
    <div className="task-input-component">
      <input
        name="todo-input"
        onChange={props.handleInputChange}
        value={props.todo_input}
      />
    </div>
  );
};
export default TaskInput;
