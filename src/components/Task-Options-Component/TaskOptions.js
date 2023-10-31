import React, { useState } from "react";
import AddListButton from "../Add-Button-Component/AddListButton";
import TaskInput from "../Task-Input-Component/TaskInput";
import { UserContext } from "../../App";

export default function taskOptions(props) {
  const [flag_enableEdit, setEnableEditFlag] = useState(false);
  const [flag, setFlag] = useState(true);
  const {todo_tasks_array,addListItem,todo_input,taskIndex,handleInputChange } = React.useContext(UserContext);  
  const enableEdit = () => {
    setEnableEditFlag(!flag_enableEdit);
  };
  return (
    <div className="task-options-component">
      {!flag_enableEdit ? <button onClick={enableEdit}>Edit</button> : ""}
      {flag_enableEdit ? (
        <div className="update-task-section">
          <TaskInput/>
          <div className="CTA-container">
            <AddListButton
              title="Update"
              operation="EDIT"
              taskIndex={props.taskIndex}
            />
            <button onClick={enableEdit}>Cancel</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
