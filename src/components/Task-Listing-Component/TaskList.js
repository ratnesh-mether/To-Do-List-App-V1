import React, { useState } from "react";
import TaskOptions from "../Task-Options-Component/TaskOptions";

const TaskList = (props) => {
  return (
    <div className="task-list-component">
      <ul className="list-box">
        {props.todo_tasks_array.map((item, index) => (
          <>
          <li type="1" key={index}>
            {item}
          </li>
          <TaskOptions/>
          </>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
