import React from "react";

export default function taskOptions(props) {
  return (
    <div className="task-options-component">
      <p>{props.todo_tasks_array}</p>
      <button onClick={() => props.editListItem(props.taskIndex)}>Edit</button>
    </div>
  );
}
