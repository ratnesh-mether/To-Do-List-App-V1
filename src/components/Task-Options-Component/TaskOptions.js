import React, { useState } from "react";
import AddListButton from "../Add-Button-Component/AddListButton";
import TaskInput from "../Task-Input-Component/TaskInput";

export default function taskOptions(props) {
  const [flag_enableEdit, setEnableEditFlag] = useState(false);
  const [flag, setFlag] = useState(true);

  const enableEdit = () => {
    setEnableEditFlag(!flag_enableEdit);
  };
  return (
    <div className="task-options-component">
      <p>{props.todo_tasks_array}</p>
      {!flag_enableEdit ? <button onClick={enableEdit}>Edit</button> : ""}
      {flag_enableEdit ? (
        <div className="update-task-section">
          <TaskInput
            todo_input={props.todo_input}
            handleInputChange={props.handleInputChange}
          />
          <AddListButton
            addListItem={props.addListItem}
            todo_input={props.todo_input}
            title="Update"
            operation="EDIT"
            taskIndex={props.taskIndex}
          />
          <button onClick={enableEdit}>Cancel</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
