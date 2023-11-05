import React, { useContext, useState } from "react";
import AddListButton from "../Add-Button-Component/AddListButton";
import TaskInput from "../Task-Input-Component/TaskInput";
import DataContext from "../../contexts/DataContext/DataContext";

export default function taskOptions(props) {
  const [flag_enableEdit, setEnableEditFlag] = useState(false);
  const [flag, setFlag] = useState(true);
  const { user } = useContext(DataContext);

  const enableEdit = () => {
    setEnableEditFlag(!flag_enableEdit);
  };
  return (
    <div className="task-options-component">
      <h1>{user}</h1>
      {!flag_enableEdit ? (
        <div className="buttons-container">
          <button onClick={enableEdit}>Edit</button>
          <AddListButton
            title="Delete"
            operation="DELETE"
            taskIndex={props.taskIndex}
          />
        </div>
      ) : (
        ""
      )}
      {flag_enableEdit ? (
        <div className="update-task-section">
          <TaskInput operation="EDIT" />
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
